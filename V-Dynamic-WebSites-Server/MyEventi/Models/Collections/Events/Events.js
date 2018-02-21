"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const VMongoDBService_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService");
const EventData_1 = require("./EventData");
class Events extends VMongoDBService_1.VMongoDBService {
    constructor() {
        super({ database: "prova", connect: true }, EventData_1.EventData);
    }
}
exports.Events = Events;
//# sourceMappingURL=Events.js.map