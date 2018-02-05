"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VBaseException extends Error {
    constructor(mess) {
        super(mess);
        this.mess = mess;
    }
    giveMessage() {
        return this.mess;
    }
}
exports.VBaseException = VBaseException;
//# sourceMappingURL=VBaseException.js.map