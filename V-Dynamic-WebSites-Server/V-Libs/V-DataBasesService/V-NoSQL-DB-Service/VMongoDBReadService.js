"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const V_DB_Read_Exceptions_1 = require("../../V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions");
class VMongoDBReadService {
    findById(id) {
        return new Promise((resolve, reject) => {
            reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException("not found"));
        });
    }
    findAll(query) {
        return new Promise((resolve, reject) => {
            reject(new V_DB_Read_Exceptions_1.VDBReadDataNotFoundException("not found"));
        });
    }
}
exports.VMongoDBReadService = VMongoDBReadService;
//# sourceMappingURL=VMongoDBReadService.js.map