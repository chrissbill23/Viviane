import {VDBDocumentInterface} from "../../V-DataBaseDocument/VDBDocumentInterface";

export interface VDBMongoDocumentInterface extends VDBDocumentInterface {
    cratedAt: Date;
    updatedAt: Date;
}
