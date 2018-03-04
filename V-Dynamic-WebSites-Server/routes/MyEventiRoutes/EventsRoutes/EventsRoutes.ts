import {Router} from "express";
import {eventsController} from "../../../MyEventi/Controllers/Events/EventsController";

export const eventsRouter = Router();
eventsRouter.get('/alltypes', (req, res) => eventsController.getAllTypesInfo(req, res));
