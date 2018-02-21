"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersControllers_1 = require("../../MyEventi/Controllers/UsersControllers");
const VComplexJSONGetQueryMiddleware_1 = require("../../V-Utils/VComplexJSONQueryMiddleware/VComplexJSONGetQueryMiddleware");
const EventsController_1 = require("../../MyEventi/Controllers/Events/EventsController");
exports.myEventiRouter = express_1.Router();
exports.myEventiRouter.get('/', (req, res, next) => {
    res.send("ok");
    res.end();
});
exports.myEventiRouter.use(VComplexJSONGetQueryMiddleware_1.convertGetQuery);
exports.myEventiRouter.get('/event/alltypes', (req, res) => EventsController_1.eventsController.getAllTypesInfo(req, res));
exports.myEventiRouter.get('/user/:userId', (req, res) => UsersControllers_1.userController.getUserInfo(req, res));
exports.myEventiRouter.post('/user/adduser', (req, res) => UsersControllers_1.userController.addNewUser(req, res));
exports.myEventiRouter.post('/user/addusers', (req, res) => UsersControllers_1.userController.addNewUsers(req, res));
exports.myEventiRouter.post('/login', (req, res) => UsersControllers_1.userController.login(req, res));
// myEventiRouter.use((req, res, next) => userController.authenticate(req, res, next));
exports.myEventiRouter.get('/user', (req, res) => UsersControllers_1.userController.allUsers(req, res));
//# sourceMappingURL=MyEventiRoutes.js.map