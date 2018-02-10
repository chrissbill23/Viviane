"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VMongoDBService_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService");
const UserData_1 = require("./UserData");
class Users extends VMongoDBService_1.VMongoDBService {
    constructor(databaseconnection) {
        super(databaseconnection, new UserData_1.UserData().getModel());
    }
}
exports.Users = Users;
//# sourceMappingURL=Users.js.map