"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const VMongoDBService_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService");
const EventData_1 = require("./EventData");
class Users extends VMongoDBService_1.VMongoDBService {
    constructor(databaseconnection) {
        super(databaseconnection, EventData_1.EventData);
    }
}
exports.Users = Users;
//# sourceMappingURL=Events.js.map