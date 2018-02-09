import {VDBMongoDocumentInterface} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocumentInterface";
import {Schema} from "mongoose";
import {NewsData} from "../NewsEventi/NewsData";
import {EventData} from "../Events/EventData";
import {MongooseSchema} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongooseSchema";

export interface UserData extends VDBMongoDocumentInterface {
    name?: string;
    surname?: string;
    nickname?: string;
    password?: string;
    email?: string;
    isPremium?: boolean | false;
    isAdmin?: boolean | false;
    lastLogin?: Date;
    isBlocked?: boolean | false;
    reasonBlocked?: string | '';
    followers?: UserData[];
    follows?: UserData[];
    news?: NewsData[];
    createdEvents?: EventData[];
}
export function giveSchema(): Schema {
    const schema = new MongooseSchema();
    schema.defineNewProperty({name: String})
        .defineNewProperty({surname: String})
        .defineNewProperty({nickname: String})
        .defineNewMethod("getData", function() {
            return this;
        }).addTimeStamp();
    return schema.giveSchema();
}
