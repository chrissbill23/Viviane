import * as express from "express";
import {convertGetQuery} from "../../V-Utils/VComplexJSONQueryMiddleware/VComplexJSONGetQueryMiddleware";
import {eventsRouter} from "./EventsRoutes/EventsRoutes";
import {userRouter} from "./UsersRouter/UsersRouter";

export const myEventiRouter = express();
myEventiRouter.get('/', (req, res, next) => {
    res.send("ok");
    res.end();
});
myEventiRouter.use(convertGetQuery);
myEventiRouter.use('/event',  eventsRouter);
myEventiRouter.use('/user', userRouter);
