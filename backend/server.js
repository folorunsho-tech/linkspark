import { getLinks, getSingleLink } from "./routes/links.js";
import express from "express";
import cors from "cors";
const app = express();
const port = 3000;
app.use(cors("*"));
app.get("/api/links", (req, res) => {
  getLinks(req, res);
});
app.get("/api/links/:id", (req, res) => {
  getSingleLink(req, res);
});
app.listen(port, () => {
  console.log(`linkspark app listening on port ${port}`);
});
