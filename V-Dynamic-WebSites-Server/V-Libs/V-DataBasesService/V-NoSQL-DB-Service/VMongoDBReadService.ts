import {VNoSQLReadServiceInterface} from "./VNoSQLReadServiceInterface";
import {VDBDocumentInterface} from "../V-DataBaseDocument/VDBDocumentInterface";
import {ReadQueryObjectInterface} from "../QueryObject/ReadQueryObjectInterface";
import {VDBReadDataNotFoundException} from "../../V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions";

export class VMongoDBReadService implements VNoSQLReadServiceInterface {
    public findById(id: string): Promise<VDBDocumentInterface> {
        return new Promise((resolve, reject) => {
           reject(new VDBReadDataNotFoundException("not found"));
        });
    }
    public findAll(query: ReadQueryObjectInterface): Promise<VDBDocumentInterface[]> {
        return new Promise((resolve, reject) => {
           reject(new VDBReadDataNotFoundException("not found"));
        });
    }
}
