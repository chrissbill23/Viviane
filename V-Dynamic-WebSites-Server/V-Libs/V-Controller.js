"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VDBMongoDocument_1 = require("./V-DataBasesService/V-NoSQL-DB-Service/MongoDB/VDBMongoDocument");
const util_1 = require("util");
class VController {
    handleError(err, res) {
        res.status(err.getStatus()).json(err.giveMessageToClient());
        res.end();
    }
    handleSuccess(data, res) {
        res.status(200).json(util_1.isArray(data) ? data : (data instanceof VDBMongoDocument_1.VDBMongoDocument ? data.getData() : data));
        res.end();
    }
}
exports.VController = VController;
//# sourceMappingURL=V-Controller.js.map