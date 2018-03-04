"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const VComplexJSONGetQueryMiddleware_1 = require("../../V-Utils/VComplexJSONQueryMiddleware/VComplexJSONGetQueryMiddleware");
const EventsRoutes_1 = require("./EventsRoutes/EventsRoutes");
const UsersRouter_1 = require("./UsersRouter/UsersRouter");
exports.myEventiRouter = express();
exports.myEventiRouter.get('/', (req, res, next) => {
    res.send("ok");
    res.end();
});
exports.myEventiRouter.use(VComplexJSONGetQueryMiddleware_1.convertGetQuery);
exports.myEventiRouter.use('/event', EventsRoutes_1.eventsRouter);
exports.myEventiRouter.use('/user', UsersRouter_1.userRouter);
//# sourceMappingURL=MyEventiRoutes.js.map