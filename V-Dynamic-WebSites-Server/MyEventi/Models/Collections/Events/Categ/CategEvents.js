"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const VMongoDBService_1 = require("../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService");
const CategEventData_1 = require("./CategEventData");
class CategEvents extends VMongoDBService_1.VMongoDBService {
    constructor() {
        super({ database: "prova", connect: true }, CategEventData_1.CategEventData);
    }
}
exports.CategEvents = CategEvents;
//# sourceMappingURL=CategEvents.js.map