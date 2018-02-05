import {VBaseException} from "../VBaseException";

export class VDBReadDataNotFoundException extends VBaseException {
    constructor(message) {
        super(message);
    }
    public giveMessageToClient(): string {
        return "Data requested not found: " + this.giveMessage();
    }
}
export class VDBReadAccessDeniedException extends VBaseException {
    constructor(message) {
        super(message);
    }
    public giveMessageToClient(): string {
        return "You are not allowed to have this data";
    }
}
export class VDBInternalError extends VBaseException {
    constructor(message) {
        super(message);
    }
    public giveMessageToClient(): string {
        return "Something went wrong, try later";
    }
}
