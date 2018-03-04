import {Response} from "express";
import * as crypto from "crypto-browserify";

export abstract class VClientController {
    private connectedUser: any = JSON.parse(sessionStorage.getItem('userconnected'));
    private algorithm: string;
    private password: string;
    private serverAddress: string = 'http://';
    private optionsPostRequest: any = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
        body: '',
    };
    constructor(encryptAlgorithm: string, password: string, host: string, port: number = 3002) {
        this.algorithm = encryptAlgorithm;
        this.password = password;
        this.serverAddress += host + ':' + port;
    }
    protected encrypt(data: any){
        const cipher = crypto.createCipher(this.algorithm, this.password);
        let crypted = cipher.update(JSON.stringify(data),'utf8','hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    protected decrypt(text: string){
        const decipher = crypto.createDecipher(this.algorithm,this.password);
        let dec = decipher.update(text,'hex','utf8');
        dec += decipher.final('utf8');
        return dec;
    }
    protected setConnectedUser(us: any) {
        this.connectedUser = us;
        sessionStorage.setItem('userconnected', JSON.stringify(us));
    }
    protected sendPostRequest(data: any, path: string): Promise<any> {
        this.optionsPostRequest.method = 'POST';
        this.optionsPostRequest.body = JSON.stringify(data);
        return new Promise((resolve, reject) => {
            fetch(this.serverAddress + path, this.optionsPostRequest)
                .then((resp) => {
                let datas: any = {success: true};
                if (!resp.ok) {
                    datas.success = false;
                }
                resp.json().then((data) => {
                        datas.data = data.data;
                        resolve(datas);
                }, (err) => {
                    reject(err);
                });
            }, (err) => {
                reject(err);
            });
        });
    }
    protected sendGetRequest(path: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(this.serverAddress + path)
                .then((resp) => {
                    let datas: any = {success: true};
                    if (!resp.ok) {
                        datas.success = false;
                    }
                    resp.json().then((data) => {
                        datas.data = data.data;
                        resolve(datas);
                    }, (err) => {
                        reject();
                    });
                }, (err) => {
                    reject(err);
                });
        });
    }
    public isUserConnected() {
        return this.connectedUser !== null && this.connectedUser !== undefined;
    }
    public giveUsername() {
        return this.connectedUser.userdata.nickname;
    }
    public giveUserName() {
        return this.connectedUser.userdata.name;
    }
    public giveUserSurname() {
        return this.connectedUser.userdata.surname;
    }
}
