"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VBaseException_1 = require("../VBaseException");
class VAuthenticationException extends VBaseException_1.VBaseException {
    constructor(mess, status) {
        super(mess, status);
    }
    giveMessageToClient() {
        return "Authentication Error: " + this.giveMessage();
    }
}
exports.VAuthenticationException = VAuthenticationException;
//# sourceMappingURL=VAuthenticationException.js.map