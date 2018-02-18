"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const MyEventiRoutes_1 = require("./routes/MyEventiRoutes/MyEventiRoutes");
exports.app = express();
exports.app.use(bodyParser.json({ limit: '10mb' }));
exports.app.use(bodyParser.urlencoded({ extended: true, type: '*/x-www-form-urlencoded' }));
exports.app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, Authorization, Content-Type, Accept,' +
        ' Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods');
    response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, OPTIONS, GET, DELETE');
    next();
});
exports.app.use('/myeventi', MyEventiRoutes_1.myEventiRouter);
//# sourceMappingURL=app.js.map