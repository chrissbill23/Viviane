import {VDBDocumentInterface} from "../../V-DataBaseDocument/VDBDocumentInterface";

export interface VDBMongoDocumentInterface extends VDBDocumentInterface {
    createdAt: Date;
    updatedAt: Date;
    getModel(): any;
}
