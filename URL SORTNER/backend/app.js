import express, { response } from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
import connect_db from "./src/config/mongo.config.js";
import shortUrl from "./src/models/shorturl.model.js";

dotenv.config("./.env");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", async (req, res) => {
  const { url } = req.body;
  const shorturl_id = nanoid(7);
  await shortUrl.create({
    orignal_url: url,
    short_url: shorturl_id,
  });
  console.log(url);
  res.send(nanoid(7));
});

app.listen(5000, () => {
  connect_db();
  console.log("app is runing on port 5000. ");
});
