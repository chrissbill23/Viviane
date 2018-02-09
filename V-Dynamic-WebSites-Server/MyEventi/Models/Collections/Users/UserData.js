"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MongooseSchema_1 = require("../../../../V-Libs/V-DataBasesService/V-NoSQL-DB-Service/MongoDB/MongooseSchema");
function giveSchema() {
    const schema = new MongooseSchema_1.MongooseSchema();
    schema.defineNewProperty({ name: String })
        .defineNewProperty({ surname: String })
        .defineNewProperty({ nickname: String })
        .defineNewMethod("showName", function () {
        return this.name;
    }).addTimeStamp();
    return schema.giveSchema();
}
exports.giveSchema = giveSchema;
//# sourceMappingURL=UserData.js.map