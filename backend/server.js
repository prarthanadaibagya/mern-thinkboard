import express from "express"
//const express = require("express") //both same
import dotenv from "dotenv"
import cors from "cors"

import notesRoutes from "./src/routes/notesRoutes.js"
import { connectDB } from "./src/config/db.js";
import rateLimiter from "./src/middleware/rateLimiter.js";
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Forces Node to use Google DNS
dotenv.config();

const app = express();
const PORT = process.env.PORT ||5001;


//middleware
app.use(cors({
    origin: "http://localhost:5173",
}))
app.use(express.json()); // this middleware will parse JSON boues :req.body
app.use(rateLimiter);

//our simple custom middleware
//app.use((req,res,next)=>{
//    console.log(`Request method is ${req.method} & request url is ${req.url}`)
//    next();
//})

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});
})



