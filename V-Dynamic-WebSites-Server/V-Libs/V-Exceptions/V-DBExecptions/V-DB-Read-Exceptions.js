"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VDataBaseException_1 = require("./VDataBaseException");
class VDBReadDataNotFoundException extends VDataBaseException_1.VDataBaseException {
    constructor(message) {
        super(message);
    }
    giveMessageToClient() {
        return "Data requested not found: " + this.giveMessage();
    }
}
exports.VDBReadDataNotFoundException = VDBReadDataNotFoundException;
class VDBReadAccessDeniedException extends VDataBaseException_1.VDataBaseException {
    constructor(message) {
        super(message);
    }
    giveMessageToClient() {
        return "You are not allowed to have this data";
    }
}
exports.VDBReadAccessDeniedException = VDBReadAccessDeniedException;
class VDBInternalError extends VDataBaseException_1.VDataBaseException {
    constructor(message) {
        super(message);
    }
    giveMessageToClient() {
        return "Something went wrong, try later";
    }
}
exports.VDBInternalError = VDBInternalError;
//# sourceMappingURL=V-DB-Read-Exceptions.js.map