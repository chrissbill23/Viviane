import {VDBDocumentInterface} from "../../V-DataBaseDocument/VDBDocumentInterface";

export interface VDBMongoDocumentInterface extends VDBDocumentInterface {
    _id: string;
}
