/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */

export abstract class VBaseException extends Error {
    private status: number;
    constructor(mess: string | Error, status: number) {
        super(mess instanceof Error ? mess.message : mess);
        this.status = status;
    }
    public abstract giveMessageToClient(): string;
    public getStatus(): number {
        return this.status;
    }
    protected giveMessage(): string {
        return this.message;
    }
}
