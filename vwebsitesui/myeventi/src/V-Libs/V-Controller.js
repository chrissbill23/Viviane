"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto-browserify");
class VClientController {
    constructor(encryptAlgorithm, password, host, port = 3002) {
        this.connectedUser = JSON.parse(sessionStorage.getItem('userconnected'));
        this.serverAddress = 'http://';
        this.optionsPostRequest = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            body: '',
        };
        this.algorithm = encryptAlgorithm;
        this.password = password;
        this.serverAddress += host + ':' + port;
    }
    encrypt(data) {
        const cipher = crypto.createCipher(this.algorithm, this.password);
        let crypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    decrypt(text) {
        const decipher = crypto.createDecipher(this.algorithm, this.password);
        let dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
    setConnectedUser(us) {
        this.connectedUser = us;
        sessionStorage.setItem('userconnected', JSON.stringify(us));
    }
    sendPostRequest(data, path) {
        this.optionsPostRequest.method = 'POST';
        this.optionsPostRequest.body = JSON.stringify(data);
        return new Promise((resolve, reject) => {
            fetch(this.serverAddress + path, this.optionsPostRequest)
                .then((resp) => {
                let datas = { success: true };
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
    sendGetRequest(path) {
        return new Promise((resolve, reject) => {
            fetch(this.serverAddress + path)
                .then((resp) => {
                let datas = { success: true };
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
    isUserConnected() {
        return this.connectedUser !== null && this.connectedUser !== undefined;
    }
    giveUsername() {
        return this.connectedUser.userdata.nickname;
    }
    giveUserName() {
        return this.connectedUser.userdata.name;
    }
    giveUserSurname() {
        return this.connectedUser.userdata.surname;
    }
}
exports.VClientController = VClientController;
//# sourceMappingURL=V-Controller.js.map