import express, { response } from "express";
import cors from "cors";

import dotenv from "dotenv";
import connect_db from "./src/config/mongo.config.js";
import short_url_route from "./src/routes/short_url.route.js";
import shortUrl from "./src/models/shorturl.model.js";
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
dotenv.config("./.env");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/create", short_url_route);

app.get("/:id", redirectFromShortUrl);

app.listen(5000, () => {
  connect_db();
  console.log("app is runing on port 5000. ");
});
