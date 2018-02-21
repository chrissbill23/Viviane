"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const V_Controller_1 = require("../../../V-Libs/V-Controller");
const Events_1 = require("../../Models/Collections/Events/Events");
const Config_1 = require("../../Config/Config");
const TypeEvents_1 = require("../../Models/Collections/Events/Types/TypeEvents");
const CategEvents_1 = require("../../Models/Collections/Events/Categ/CategEvents");
const EventsReadQuery_1 = require("../../Models/Collections/Events/EventsReadQuery");
const TypeEventsReadQueryStream_1 = require("../../Models/Collections/Events/Types/TypeEventsReadQueryStream");
const CategEventsReadQueryStream_1 = require("../../Models/Collections/Events/Categ/CategEventsReadQueryStream");
const V_DB_Read_Exceptions_1 = require("../../../V-Libs/V-Exceptions/V-DBExecptions/V-DB-Read-Exceptions");
class EventsController extends V_Controller_1.VController {
    constructor() {
        super(Config_1.configMyEvent.dataCryption.algorithm, Config_1.configMyEvent.dataCryption.password);
    }
    getAllTypesInfo(req, res) {
        EventsController.typeReadQuery.reset();
        EventsController.typeReadQuery.setWhereCondition({});
        EventsController.dbTypeConnection.findAll(EventsController.typeReadQuery)
            .then((types) => this.handleSuccess(types, res), (err) => this.handleError(new V_DB_Read_Exceptions_1.VDBInternalError(err), res));
    }
}
EventsController.dbConnection = new Events_1.Events();
EventsController.dbTypeConnection = new TypeEvents_1.TypeEvents();
EventsController.dbCategConnection = new CategEvents_1.CategEvents();
EventsController.eventReadQuery = new EventsReadQuery_1.EventsReadQuery();
EventsController.typeReadQuery = new TypeEventsReadQueryStream_1.TypeEventsReadQueryStream();
EventsController.categReadQuery = new CategEventsReadQueryStream_1.CategEventsReadQueryStream();
exports.EventsController = EventsController;
exports.eventsController = new EventsController();
//# sourceMappingURL=EventsController.js.map