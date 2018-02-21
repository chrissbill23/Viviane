/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VMongoDBService} from "../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService";
import {CategEventData} from "./CategEventData";

export class CategEvents extends VMongoDBService<CategEventData> {
    constructor() {
        super({database: "prova", connect: true}, CategEventData);
    }
}
