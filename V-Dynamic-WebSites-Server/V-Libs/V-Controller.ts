import {VBaseException} from "./V-Exceptions/VBaseException";
import {Response} from "express";
import {VDBMongoDocument} from "./V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {VJSONPack} from "../V-Utils/VJSONPack/VJSONPack";
import * as crypto from "crypto";

export abstract class VController {
    private algorithm: string;
    private password: string;
    constructor(encryptAlgorithm: string, password: string) {
        this.algorithm = encryptAlgorithm;
        this.password = password;
    }
    protected handleError(err: VBaseException, res: Response) {
        res.status(err.getStatus()).json(new VJSONPack(err.giveMessageToClient()).getPacket());
        res.end();
    }
    protected handleSuccess(data: VDBMongoDocument | VDBMongoDocument[] | any, res: Response) {
        res.status(200).json(new VJSONPack(data).getPacket());
        res.end();
    }
    protected encrypt(data: any) {
        const cipher = crypto.createCipher(this.algorithm, this.password);
        let crypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    protected decrypt(text: string) {
        const decipher = crypto.createDecipher(this.algorithm, this.password);
        let dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
}
