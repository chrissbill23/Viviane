/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VMongoDBService} from "../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService";
import {UserData} from "./UserData";

export class Users extends VMongoDBService<UserData> {
    constructor() {
        super({database: "prova", connect: true}, UserData);
    }
}
