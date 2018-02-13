/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {Configuration, VMongoDBService} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService";
import {EventData} from "./EventData";

export class Users extends VMongoDBService<EventData> {
    constructor(databaseconnection: Configuration) {
        super(databaseconnection, EventData);
    }
}
