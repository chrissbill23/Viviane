export class VJSONPack {
    private obj: any = {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {},
    };
    constructor(data: any) {
        this.obj.data = data;
    }
    public getPacket() {
        return this.obj;
    }
    public setHost(hostname: string): this {
        this.obj.host = hostname;
        return this;
    }
    public setPort(port: number): this {
        this.obj.port = port;
        return this;
    }
    public setPath(path: string): this {
        this.obj.path = path;
        return this;
    }

    public setMethod(method: 'POST' | 'PUT' | 'DELETE'): this {
        this.obj.method = method;
        return this;
    }
}
