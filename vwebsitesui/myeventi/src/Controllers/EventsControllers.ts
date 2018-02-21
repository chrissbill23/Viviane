/**
 * @author Bile Ezanin Christian Prince Carlos
 * @version 1.0.0
 */
import {Request, Response} from "express";
import {configMyEvent} from "../Config/Config";
import {VClientController} from "../V-Libs/V-Controller";

class EventsController extends VClientController {
    private token: string;
    constructor() {
        super(configMyEvent.dataCryption.algorithm, configMyEvent.dataCryption.password, 'localhost');
    }
    public getAllTypes(): Promise<any> {
        return this.sendGetRequest('/myeventi/event/alltypes');
    }
}
export const eventsController = new EventsController();
