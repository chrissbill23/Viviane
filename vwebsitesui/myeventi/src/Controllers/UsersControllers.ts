/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
import {Request, Response} from "express";
import {configMyEvent} from "../Config/Config";
import {VClientController} from "../V-Libs/V-Controller";
import * as jwt from "jsonwebtoken";

class UsersControllers extends VClientController {
    private token: string;
    constructor() {
        super(configMyEvent.dataCryption.algorithm, configMyEvent.dataCryption.password, 'localhost');
    }
    public login(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sendPostRequest(data, '/myeventi/user/login').then(data => {
                if (data.success) {
                    this.token = data.data.token;
                    const decoded = jwt.verify(this.token, configMyEvent.serverSecret);
                    this.setConnectedUser(decoded);
                    return resolve();
                }
                return reject(data.data);
            }, (err) => {
                reject('');
            })
        });
    }
    public signup(data: any): Promise<any> {
        return this.sendPostRequest(data,'/myeventi/user/signup');
    }
}
export const userController = new UsersControllers();
