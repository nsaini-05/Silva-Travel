import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import {
  getFavorites,
  getFavoriteDescription,
} from "./controllers/favoriteController.js";
import path from 'path'
dotenv.config()
const app = express();
app.use(cors());
app.get("/api/favorites", (req, res) => {
  getFavorites(req, res);
});
app.get("/api/favorites/:cityname", (req, res) => {
  getFavoriteDescription(req, res);
});
const __dirname = path.resolve()
if(process.env.NODE_ENV === 'PRODUCTION'){
  app.use(express.static(path.join(__dirname,'/frontend-travel/dist/frontend-travel')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontend-travel','dist','frontend-travel',"index.html"))
  })
}
app.use((err, req, res, next) => {
  res.status(500).json({ error: "Something went wrong" });
});
app.listen(process.env.PORT || 5000 , () => {
  console.log(`Server Started on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});