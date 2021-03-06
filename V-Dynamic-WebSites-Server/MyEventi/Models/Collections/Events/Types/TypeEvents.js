"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TypeEventData_1 = require("./TypeEventData");
const VMongoDBService_1 = require("../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VMongoDBService");
class TypeEvents extends VMongoDBService_1.VMongoDBService {
    constructor() {
        super({ database: "prova", connect: true }, TypeEventData_1.TypeEventData);
    }
}
exports.TypeEvents = TypeEvents;
/*const p = new TypeEvents();
p.connect().then((succ) => {
    const m = new MongoWriteUpdateQueryStream([
        {name: 'Conferenza', photos: ['/images/conf1.jpg', '/images/conf2.jpg', '/images/conf3.jpg']},
        {name: 'Congresso', photos: ['/images/cong1.jpg', '/images/cong2.jpg', '/images/cong3.jpg']},
        {name: 'Concerto', photos: ['/images/conc1.jpg', '/images/conc2.jpg', '/images/conc3.jpg']}]);
    p.addAll(m);
});
*/
//# sourceMappingURL=TypeEvents.js.map