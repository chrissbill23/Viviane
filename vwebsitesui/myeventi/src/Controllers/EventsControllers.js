"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("../Config/Config");
const V_Controller_1 = require("../V-Libs/V-Controller");
class EventsController extends V_Controller_1.VClientController {
    constructor() {
        super(Config_1.configMyEvent.dataCryption.algorithm, Config_1.configMyEvent.dataCryption.password, 'localhost');
    }
    getAllTypes() {
        return this.sendGetRequest('/myeventi/event/alltypes');
    }
}
exports.eventsController = new EventsController();
//# sourceMappingURL=EventsControllers.js.map