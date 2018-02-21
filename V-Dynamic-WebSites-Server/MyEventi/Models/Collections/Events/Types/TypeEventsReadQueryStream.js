"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const MongoReadQueryBaseStream_1 = require("../../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongoReadQueryBaseStream");
class TypeEventsReadQueryStream extends MongoReadQueryBaseStream_1.MongoReadQueryBaseStream {
    setWhereCondition(whereCondition) {
        this.setId(whereCondition._id);
        this.name = whereCondition.name;
        return this;
    }
}
exports.TypeEventsReadQueryStream = TypeEventsReadQueryStream;
//# sourceMappingURL=TypeEventsReadQueryStream.js.map