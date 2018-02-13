"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const VBaseException_1 = require("../VBaseException");
class VDataBaseException extends VBaseException_1.VBaseException {
    constructor(message, status) {
        super(message, status);
    }
    giveMessageToClient() {
        return "Error from database: " + this.giveMessage();
    }
}
exports.VDataBaseException = VDataBaseException;
//# sourceMappingURL=VDataBaseException.js.map