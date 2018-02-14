"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VJSONPack {
    constructor(data) {
        this.obj = {
            headers: {
                'Content-Type': 'application/json',
            },
            data: {},
        };
        this.obj.data = data;
    }
    getPacket() {
        return this.obj;
    }
    setHost(hostname) {
        this.obj.host = hostname;
        return this;
    }
    setPort(port) {
        this.obj.port = port;
        return this;
    }
    setPath(path) {
        this.obj.path = path;
        return this;
    }
    setMethod(method) {
        this.obj.method = method;
        return this;
    }
}
exports.VJSONPack = VJSONPack;
//# sourceMappingURL=VJSONPack.js.map