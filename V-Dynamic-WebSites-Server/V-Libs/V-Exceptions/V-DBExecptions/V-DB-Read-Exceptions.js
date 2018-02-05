"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VBaseException_1 = require("../VBaseException");
class VDBReadDataNotFoundException extends VBaseException_1.VBaseException {
    constructor(message) {
        super(message);
    }
    giveMessageToClient() {
        return "Data requested not found: " + this.giveMessage();
    }
}
exports.VDBReadDataNotFoundException = VDBReadDataNotFoundException;
class VDBReadAccessDeniedException extends VBaseException_1.VBaseException {
    constructor(message) {
        super(message);
    }
    giveMessageToClient() {
        return "You are not allowed to have this data";
    }
}
exports.VDBReadAccessDeniedException = VDBReadAccessDeniedException;
class VDBInternalError extends VBaseException_1.VBaseException {
    constructor(message) {
        super(message);
    }
    giveMessageToClient() {
        return "Something went wrong, try later";
    }
}
exports.VDBInternalError = VDBInternalError;
//# sourceMappingURL=V-DB-Read-Exceptions.js.map