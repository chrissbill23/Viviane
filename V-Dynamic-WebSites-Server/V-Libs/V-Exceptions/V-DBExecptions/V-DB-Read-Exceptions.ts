/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VDataBaseException} from "./VDataBaseException";

export class VDBReadDataNotFoundException extends VDataBaseException {
    constructor(message: string | Error) {
        super(message, 404);
    }
    public giveMessageToClient(): string {
        return this.giveMessage();
    }
}
export class VDBReadAccessDeniedException extends VDataBaseException {
    constructor(message: string | Error) {
        super(message, 401);
    }
    public giveMessageToClient(): string {
        return "You are not allowed to have this data";
    }
}
export class VDBInternalError extends VDataBaseException {
    constructor(message: string | Error) {
        super(message, 500);
    }
    public giveMessageToClient(): string {
        return "Something went wrong, try later";
    }
}
