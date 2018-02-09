import {Configuration, VMongoDBService} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService";
import {giveSchema, UserData} from "./UserData";

export class Users extends VMongoDBService<UserData> {
    constructor(databaseconnection: Configuration) {
        super(databaseconnection, 'Users', giveSchema());
    }
}
