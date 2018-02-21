"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EventsController_1 = require("../../../MyEventi/Controllers/Events/EventsController");
exports.eventsRouter = express_1.Router();
exports.eventsRouter.get('/event/alltypes', (req, res) => EventsController_1.eventsController.getAllTypesInfo(req, res));
//# sourceMappingURL=EventsRoutes.js.map