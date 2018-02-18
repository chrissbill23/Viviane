import * as express from "express";
import * as bodyParser from "body-parser";
import {myEventiRouter} from "./routes/MyEventiRoutes/MyEventiRoutes";

export const app = express();
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true, type: '*/x-www-form-urlencoded' }));
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers',
        'Origin, Authorization, Content-Type, Accept,' +
        ' Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods');
    response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, OPTIONS, GET, DELETE');
    next();
});

app.use('/myeventi', myEventiRouter);
