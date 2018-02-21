import {Router} from "express";
import {userController} from "../../MyEventi/Controllers/UsersControllers";
import {convertGetQuery} from "../../V-Utils/VComplexJSONQueryMiddleware/VComplexJSONGetQueryMiddleware";
import {eventsRouter} from "./EventsRoutes/EventsRoutes";
import {eventsController} from "../../MyEventi/Controllers/Events/EventsController";

export const myEventiRouter = Router();
myEventiRouter.get('/', (req, res, next) => {
    res.send("ok");
    res.end();
});
myEventiRouter.use(convertGetQuery);
myEventiRouter.get('/event/alltypes', (req, res) => eventsController.getAllTypesInfo(req, res));
myEventiRouter.get('/user/:userId', (req, res) => userController.getUserInfo(req, res));
myEventiRouter.post('/user/adduser', (req, res) =>  userController.addNewUser(req, res));
myEventiRouter.post('/user/addusers', (req, res) => userController.addNewUsers(req, res));
myEventiRouter.post('/login', (req, res) => userController.login(req, res));

// myEventiRouter.use((req, res, next) => userController.authenticate(req, res, next));
myEventiRouter.get('/user', (req, res) => userController.allUsers(req, res));
