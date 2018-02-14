"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VJSONPack_1 = require("../V-Utils/VJSONPack/VJSONPack");
const crypto = require("crypto");
class VController {
    handleError(err, res) {
        res.status(err.getStatus()).json(err.giveMessageToClient());
        res.end();
    }
    handleSuccess(data, res) {
        res.status(200).json(new VJSONPack_1.VJSONPack(data).getPacket());
        res.end();
    }
    encodeData(data, salt) {
        return crypto
            .pbkdf2Sync(JSON.stringify(data), salt, VController.ENCODE_ITERATION, VController.ENCODE_LENGTH, 'sha512')
            .toString();
    }
}
VController.ENCODE_LENGTH = 64;
VController.ENCODE_ITERATION = 64;
exports.VController = VController;
//# sourceMappingURL=V-Controller.js.map