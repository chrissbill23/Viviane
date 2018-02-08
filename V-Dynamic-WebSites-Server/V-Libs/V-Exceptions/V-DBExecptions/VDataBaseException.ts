import {VBaseException} from "../VBaseException";

export class VDataBaseException extends VBaseException {
    constructor(message) {
        super(message);
    }
    public giveMessageToClient(): string {
        return "Error from database: " + this.giveMessage();
    }
}
