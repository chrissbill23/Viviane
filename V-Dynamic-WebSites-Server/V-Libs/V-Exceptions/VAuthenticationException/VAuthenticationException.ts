import {VBaseException} from "../VBaseException";

export class VAuthenticationException extends VBaseException {
    constructor(mess: string | Error, status: number) {
        super(mess, status);
    }
    public giveMessageToClient(): string {
        return "Authentication Error: " + this.giveMessage();
    }
}
