import {VDBMongoDocumentInterface} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocumentInterface";
import {UserData} from "../Users/UserData";

export interface NewsData extends VDBMongoDocumentInterface {
    creator: UserData;
    content: string;
}
