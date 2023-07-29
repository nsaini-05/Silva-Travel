import express from "express";
import cors from "cors";
import {
  getFavorites,
  getFavoriteDescription,
} from "./controllers/favoriteController.js";
const app = express();
app.use(cors());
const port = 3000;

app.get("/api/favorites", (req, res) => {
  getFavorites(req, res);
});

app.get("/api/favorites/:cityname", (req, res) => {
  getFavoriteDescription(req, res);
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Something went wrong" });
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
