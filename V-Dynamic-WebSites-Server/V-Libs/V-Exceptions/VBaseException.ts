export abstract class VBaseException extends Error {
    private mess: string;
    constructor(mess: string) {
        super(mess);
        this.mess = mess;
    }
    public abstract giveMessageToClient(): string;
    protected giveMessage(): string {
        return this.mess;
    }
}
