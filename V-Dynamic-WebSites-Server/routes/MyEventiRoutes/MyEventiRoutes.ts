import {Router} from "express";
import {userController} from "../../MyEventi/Controllers/UsersControllers";
import {convertGetQuery} from "../../V-Utils/VComplexJSONQueryMiddleware/VComplexJSONGetQueryMiddleware";

export const myEventiRouter = Router();
myEventiRouter.get('/', (req, res, next) => {
    res.send("ok");
    res.end();
});
myEventiRouter.get('/user/:userId', (req, res) => userController.getUserInfo(req, res));
myEventiRouter.post('/user/adduser', (req, res) =>  userController.addNewUser(req, res));
myEventiRouter.post('/user/addusers', (req, res) => userController.addNewUsers(req, res));
myEventiRouter.post('/login', (req, res) => userController.login(req, res));

myEventiRouter.use(convertGetQuery);
// myEventiRouter.use((req, res, next) => userController.authenticate(req, res, next));
myEventiRouter.get('/user', (req, res) => userController.allUsers(req, res));
