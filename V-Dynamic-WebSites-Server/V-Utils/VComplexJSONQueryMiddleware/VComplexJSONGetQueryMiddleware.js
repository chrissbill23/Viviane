"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertGetQuery(req, res, next) {
    if (typeof req.query == 'string') {
        const query = JSON.parse(Buffer.from(req.query.q, 'base64').toString());
        req.query = query;
    }
    next();
}
exports.convertGetQuery = convertGetQuery;
//# sourceMappingURL=VComplexJSONGetQueryMiddleware.js.map