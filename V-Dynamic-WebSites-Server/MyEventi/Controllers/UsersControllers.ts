/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
import {Request, Response} from "express";
import {Users} from "../Models/Collections/Users/Users";
import {UsersReadQueryStream} from "../Models/Collections/Users/UsersReadQueryStream";
import {VBaseException} from "../../V-Libs/V-Exceptions/VBaseException";
import {MongoWriteUpdateQueryStream} from "../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoWriteUpdateQueryStream";
import {UserData} from "../Models/Collections/Users/UserData";
import {VController} from "../../V-Libs/V-Controller";
import * as jwt from "jsonwebtoken";
import {configMyEvent} from "../Config/Config";
import {VAuthenticationException} from "../../V-Libs/V-Exceptions/VAuthenticationException/VAuthenticationException";

export class UsersControllers extends VController {
    private static TOKEN_TIMELAPSE = 1000 * 60 * 60 * 10; // 10 Hours
    private static dbConnection = new Users();
    private static readQuery = new UsersReadQueryStream();
    public getUserInfo(req: Request, res: Response): void {
        UsersControllers.dbConnection.findById(req.params.userId)
            .then((user: UserData) => this.handleSuccess(user, res),
            (err: VBaseException) => this.handleError(err, res));
    }
    public addNewUser(req: Request, res: Response): void {
        UsersControllers.dbConnection.addOne(new MongoWriteUpdateQueryStream<UserData>(req.body))
            .then((user: UserData) => this.handleSuccess(user, res),
                (err) => this.handleError(err, res));
    }
    public addNewUsers(req: Request, res: Response): void {
        UsersControllers.dbConnection.addAll(new MongoWriteUpdateQueryStream<UserData>(req.body))
            .then((user: UserData[]) => this.handleSuccess(user, res),
                (err) => this.handleError(err, res));
    }
    public allUsers(req: Request, res: Response): void {
        const query = JSON.parse(Buffer.from(req.query.q, 'base64').toString());
        UsersControllers.readQuery.reset().setWhereCondition(req.query);
        UsersControllers.dbConnection.findAll(UsersControllers.readQuery)
            .then((user: UserData[]) => this.handleSuccess(user, res),
                (err) => this.handleError(err, res));
    }
    public login(req: Request, res: Response): void {
        UsersControllers.readQuery.reset()
            .orCondition([{nickname: req.body.username}, {email: req.body.username}]);
        UsersControllers.dbConnection.findOne(UsersControllers.readQuery).then((user) => {
            if (user.isAuthenticated(req.body.password)) {
                this.handleSuccess({token: this.generateToken(user)}, res);
            } else {
                this.handleError(new VAuthenticationException("Password not correct", 401), res);
            }
        }, (err) => this.handleError(new VAuthenticationException("User not found", 401), res));
    }
    public authenticate(req: Request, res: Response, next): void {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token) {
            try {
                const decoded = jwt.verify(token, configMyEvent.serverSecret);
                req.decoded = decoded;
                next();
            } catch (err) {
                this.handleError(new VAuthenticationException('Failed to authenticate token.', 403), res);
            }

        } else {
            this.handleError(new VAuthenticationException('No token provided.', 403), res);
        }
    }
    private generateToken(user: UserData) {
        return jwt.sign({
            userdata: user.getData(),
        }, configMyEvent.serverSecret, {expiresIn: configMyEvent.tokenDuration});
    }
}
export const userController = new UsersControllers();
