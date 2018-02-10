"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VMongoDBService_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService");
const EventData_1 = require("./EventData");
class Users extends VMongoDBService_1.VMongoDBService {
    constructor(databaseconnection) {
        super(databaseconnection, new EventData_1.EventData().getModel());
    }
}
exports.Users = Users;
//# sourceMappingURL=Events.js.map