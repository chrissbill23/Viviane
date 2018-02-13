/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

import {VBaseException} from "../VBaseException";

export class VDataBaseException extends VBaseException {
    constructor(message: string | Error, status: number) {
        super(message, status);
    }
    public giveMessageToClient(): string {
        return "Error from database: " + this.giveMessage();
    }
}
