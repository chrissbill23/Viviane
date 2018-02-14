import {VBaseException} from "./V-Exceptions/VBaseException";
import {Response} from "express";
import {VDBMongoDocument} from "./V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {VJSONPack} from "../V-Utils/VJSONPack/VJSONPack";
import * as crypto from "crypto";

export abstract class VController {
    private static ENCODE_LENGTH = 64;
    private static ENCODE_ITERATION = 64;
    protected handleError(err: VBaseException, res: Response) {
        res.status(err.getStatus()).json(err.giveMessageToClient());
        res.end();
    }
    protected handleSuccess(data: VDBMongoDocument | VDBMongoDocument[] | any, res: Response) {
        res.status(200).json(new VJSONPack(data).getPacket());
        res.end();
    }
    protected encodeData(data: any, salt: string): string {
        return crypto
            .pbkdf2Sync(
                JSON.stringify(data),
                salt,
                VController.ENCODE_ITERATION,
                VController.ENCODE_LENGTH,
                'sha512')
            .toString();
    }
}
