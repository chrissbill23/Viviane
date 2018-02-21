import {Router} from "express";
import {eventsController} from "../../../MyEventi/Controllers/Events/EventsController";

export const eventsRouter = Router();
eventsRouter.get('/event/alltypes', (req, res) => eventsController.getAllTypesInfo(req, res));
