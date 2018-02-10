import {Configuration, VMongoDBService} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService";
import {EventData} from "./EventData";

export class Users extends VMongoDBService<EventData> {
    constructor(databaseconnection: Configuration) {
        super(databaseconnection, new EventData().getModel());
    }
}
