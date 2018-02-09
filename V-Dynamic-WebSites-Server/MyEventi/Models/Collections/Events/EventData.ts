import {VDBMongoDocumentInterface} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocumentInterface";

export interface EventData extends VDBMongoDocumentInterface {
    dateAndTimeEv: Date;
}
