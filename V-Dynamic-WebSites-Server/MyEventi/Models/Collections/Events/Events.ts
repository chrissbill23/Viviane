/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VMongoDBService} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService";
import {EventData} from "./EventData";

export class Events extends VMongoDBService<EventData> {
    constructor() {
        super({database: "prova", connect: true}, EventData);
    }
}
