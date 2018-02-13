"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const MyEventiRoutes_1 = require("./routes/MyEventiRoutes/MyEventiRoutes");
exports.app = express();
exports.app.use(bodyParser.json({ limit: '10mb' }));
exports.app.use(bodyParser.urlencoded({ extended: true, type: '*/x-www-form-urlencoded' }));
exports.app.use('/myeventi', MyEventiRoutes_1.myEventiRouter);
//# sourceMappingURL=app.js.map