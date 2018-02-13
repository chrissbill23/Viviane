import {VBaseException} from "./V-Exceptions/VBaseException";
import {Response} from "express";
import {VDBMongoDocument} from "./V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument";
import {isArray} from "util";

export abstract class VController {
    protected handleError(err: VBaseException, res: Response) {
        res.status(err.getStatus()).json(err.giveMessageToClient());
        res.end();
    }
    protected handleSuccess(data: VDBMongoDocument | VDBMongoDocument[] | any, res: Response) {
        res.status(200).json(isArray(data) ? data : (data instanceof VDBMongoDocument ? data.getData() : data));
        res.end();
    }
}
