"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../Models/Collections/Users/Users");
const UsersReadQueryStream_1 = require("../Models/Collections/Users/UsersReadQueryStream");
const MongoWriteUpdateQueryStream_1 = require("../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoWriteUpdateQueryStream");
const V_Controller_1 = require("../../V-Libs/V-Controller");
const jwt = require("jsonwebtoken");
const Config_1 = require("../Config/Config");
const VAuthenticationException_1 = require("../../V-Libs/V-Exceptions/VAuthenticationException/VAuthenticationException");
class UsersControllers extends V_Controller_1.VController {
    constructor() {
        super(Config_1.configMyEvent.dataCryption.algorithm, Config_1.configMyEvent.dataCryption.password);
    }
    getUserInfo(req, res) {
        UsersControllers.dbConnection.findById(req.params.userId)
            .then((user) => this.handleSuccess(user, res), (err) => this.handleError(err, res));
    }
    addNewUser(req, res) {
        UsersControllers.dbConnection.addOne(new MongoWriteUpdateQueryStream_1.MongoWriteUpdateQueryStream(req.body))
            .then((user) => this.handleSuccess(user, res), (err) => this.handleError(err, res));
    }
    addNewUsers(req, res) {
        UsersControllers.dbConnection.addAll(new MongoWriteUpdateQueryStream_1.MongoWriteUpdateQueryStream(req.body))
            .then((user) => this.handleSuccess(user, res), (err) => this.handleError(err, res));
    }
    allUsers(req, res) {
        UsersControllers.readQuery.reset().setWhereCondition(req.query.where).selectAttributes(req.query.select);
        UsersControllers.dbConnection.findAll(UsersControllers.readQuery)
            .then((user) => this.handleSuccess(this.encrypt(user), res), (err) => this.handleError(err, res));
    }
    login(req, res) {
        UsersControllers.readQuery.reset()
            .orCondition([{ nickname: req.body.username }, { email: req.body.username }]);
        UsersControllers.dbConnection.findOne(UsersControllers.readQuery).then((user) => {
            if (user.isAuthenticated(req.body.password)) {
                this.handleSuccess({ token: this.generateToken(user) }, res);
            }
            else {
                this.handleError(new VAuthenticationException_1.VAuthenticationException("Password not correct", 401), res);
            }
        }, (err) => this.handleError(new VAuthenticationException_1.VAuthenticationException("User not found", 401), res));
    }
    authenticate(req, res, next) {
        let token = req.body.token != undefined ? req.body.token : null;
        token = token || req.query.token;
        token = token != undefined ? token : req.headers.Authentication;
        if (token && token != undefined) {
            try {
                const decoded = jwt.verify(token, Config_1.configMyEvent.serverSecret);
                req.decoded = decoded;
                next();
            }
            catch (err) {
                this.handleError(new VAuthenticationException_1.VAuthenticationException('Failed to authenticate token.', 403), res);
            }
        }
        else {
            this.handleError(new VAuthenticationException_1.VAuthenticationException('No token provided.', 403), res);
        }
    }
    generateToken(user) {
        return jwt.sign({
            userdata: user.getData(),
        }, Config_1.configMyEvent.serverSecret, { expiresIn: Config_1.configMyEvent.tokenDuration });
    }
}
UsersControllers.TOKEN_TIMELAPSE = 1000 * 60 * 60 * 10; // 10 Hours
UsersControllers.dbConnection = new Users_1.Users();
UsersControllers.readQuery = new UsersReadQueryStream_1.UsersReadQueryStream();
exports.UsersControllers = UsersControllers;
exports.userController = new UsersControllers();
//# sourceMappingURL=UsersControllers.js.map