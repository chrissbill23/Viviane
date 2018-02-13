"use strict";
/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class VBaseException extends Error {
    constructor(mess, status) {
        super(mess instanceof Error ? mess.message : mess);
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    giveMessage() {
        return this.message;
    }
}
exports.VBaseException = VBaseException;
//# sourceMappingURL=VBaseException.js.map