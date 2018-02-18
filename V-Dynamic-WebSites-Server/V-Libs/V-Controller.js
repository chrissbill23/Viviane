"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VJSONPack_1 = require("../V-Utils/VJSONPack/VJSONPack");
const crypto = require("crypto");
class VController {
    constructor(encryptAlgorithm, password) {
        this.algorithm = encryptAlgorithm;
        this.password = password;
    }
    handleError(err, res) {
        res.status(err.getStatus()).json(new VJSONPack_1.VJSONPack(err.giveMessageToClient()).getPacket());
        res.end();
    }
    handleSuccess(data, res) {
        res.status(200).json(new VJSONPack_1.VJSONPack(data).getPacket());
        res.end();
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
}
exports.VController = VController;
//# sourceMappingURL=V-Controller.js.map