/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
import {Request, Response} from "express";
import {configMyEvent} from "../Config/Config";
import {VClientController} from "../V-Libs/V-Controller";

class UsersControllers extends VClientController {
    private token: string;
    constructor() {
        super(configMyEvent.dataCryption.algorithm, configMyEvent.dataCryption.password, 'localhost');
    }
    public login(data: any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.sendPostRequest(data, '/myeventi/login').then(data => {
                if (data.success) {
                    this.token = data.data;
                    return resolve();
                }
                return reject(data.data);
            }, () => {
                reject('');
            })
        });
    }
}
export const userController = new UsersControllers();