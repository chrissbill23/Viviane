"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const VDataBaseException_1 = require("./VDataBaseException");
class VDBReadDataNotFoundException extends VDataBaseException_1.VDataBaseException {
    constructor(message) {
        super(message, 404);
    }
    giveMessageToClient() {
        return this.giveMessage();
    }
}
exports.VDBReadDataNotFoundException = VDBReadDataNotFoundException;
class VDBReadAccessDeniedException extends VDataBaseException_1.VDataBaseException {
    constructor(message) {
        super(message, 401);
    }
    giveMessageToClient() {
        return "You are not allowed to have this data";
    }
}
exports.VDBReadAccessDeniedException = VDBReadAccessDeniedException;
class VDBInternalError extends VDataBaseException_1.VDataBaseException {
    constructor(message) {
        super(message, 500);
    }
    giveMessageToClient() {
        return "Something went wrong, try later";
    }
}
exports.VDBInternalError = VDBInternalError;
//# sourceMappingURL=V-DB-Read-Exceptions.js.map