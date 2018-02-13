import * as express from "express";
import * as bodyParser from "body-parser";
import {myEventiRouter} from "./routes/MyEventiRoutes/MyEventiRoutes";

export const app = express();
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true, type: '*/x-www-form-urlencoded' }));

app.use('/myeventi', myEventiRouter);
