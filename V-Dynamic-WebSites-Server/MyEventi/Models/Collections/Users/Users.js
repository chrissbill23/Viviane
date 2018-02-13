"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const VMongoDBService_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService");
const UserData_1 = require("./UserData");
class Users extends VMongoDBService_1.VMongoDBService {
    constructor() {
        super({ database: "prova", connect: true }, UserData_1.UserData);
    }
}
exports.Users = Users;
//# sourceMappingURL=Users.js.map