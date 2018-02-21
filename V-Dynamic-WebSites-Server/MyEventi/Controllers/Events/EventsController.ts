/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
import {Request, Response} from "express";
import {UsersReadQueryStream} from "../../Models/Collections/Users/UsersReadQueryStream";
import {VController} from "../../../V-Libs/V-Controller";
import {Events} from "../../Models/Collections/Events/Events";
import {configMyEvent} from "../../Config/Config";
import {TypeEvents} from "../../Models/Collections/Events/Types/TypeEvents";
import {CategEvents} from "../../Models/Collections/Events/Categ/CategEvents";
import {EventsReadQuery} from "../../Models/Collections/Events/EventsReadQuery";
import {TypeEventsReadQueryStream} from "../../Models/Collections/Events/Types/TypeEventsReadQueryStream";
import {CategEventsReadQueryStream} from "../../Models/Collections/Events/Categ/CategEventsReadQueryStream";
import {TypeEventData} from "../../Models/Collections/Events/Types/TypeEventData";
import {VDBInternalError} from "../../../V-Libs/V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions";

export class EventsController extends VController {
    private static dbConnection = new Events();
    private static dbTypeConnection = new TypeEvents();
    private static  dbCategConnection = new CategEvents();
    private static eventReadQuery = new EventsReadQuery();
    private static typeReadQuery = new TypeEventsReadQueryStream();
    private static categReadQuery = new CategEventsReadQueryStream();
    constructor() {
        super(configMyEvent.dataCryption.algorithm, configMyEvent.dataCryption.password);
    }
    public getAllTypesInfo(req: Request, res: Response): void {
        EventsController.typeReadQuery.reset();
        EventsController.typeReadQuery.setWhereCondition({});
        EventsController.dbTypeConnection.findAll(EventsController.typeReadQuery)
            .then((types: TypeEventData[]) => this.handleSuccess(types, res),
                (err) => this.handleError(new VDBInternalError(err), res));
    }
}
export const eventsController = new EventsController();
