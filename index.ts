import express, { Express } from "express";
import bodyParser from "body-parser";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController"
import authorController from "./controllers/authorController"
import mongoose from "mongoose";

const app: Express = express();


mongoose.connect(""); // mongodb link 
const database = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", articleController);
app.use("/", commentController);
app.use("/", authorController);

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(6000, () => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});
