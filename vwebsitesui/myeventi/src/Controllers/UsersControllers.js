"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("../Config/Config");
const V_Controller_1 = require("../V-Libs/V-Controller");
const jwt = require("jsonwebtoken");
class UsersControllers extends V_Controller_1.VClientController {
    constructor() {
        super(Config_1.configMyEvent.dataCryption.algorithm, Config_1.configMyEvent.dataCryption.password, 'localhost');
    }
    login(data) {
        return new Promise((resolve, reject) => {
            this.sendPostRequest(data, '/myeventi/user/login').then(data => {
                if (data.success) {
                    this.token = data.data.token;
                    const decoded = jwt.verify(this.token, Config_1.configMyEvent.serverSecret);
                    this.setConnectedUser(decoded);
                    return resolve();
                }
                return reject(data.data);
            }, (err) => {
                reject('');
            });
        });
    }
    signup(data) {
        return this.sendPostRequest(data, '/myeventi/user/signup');
    }
}
exports.userController = new UsersControllers();
//# sourceMappingURL=UsersControllers.js.map