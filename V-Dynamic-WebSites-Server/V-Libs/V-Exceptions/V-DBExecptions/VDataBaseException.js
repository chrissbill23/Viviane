"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VBaseException_1 = require("../VBaseException");
class VDataBaseException extends VBaseException_1.VBaseException {
    constructor(message) {
        super(message);
    }
    giveMessageToClient() {
        return "Error from database: " + this.giveMessage();
    }
}
exports.VDataBaseException = VDataBaseException;
//# sourceMappingURL=VDataBaseException.js.map