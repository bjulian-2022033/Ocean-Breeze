import { initServer } from "./configs/app.js";
import { dbConnection } from "./configs/mongo.js";

initServer()
dbConnection()