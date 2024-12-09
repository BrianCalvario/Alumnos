import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/Controllers/Alumnos.js";
import {  } from "module";

dotenv.config()
mongoose.connect(process.env.urldb)

.then(() => {
    console.log("si funciona we")
})
.catch((error) =>{
    console.log("no funciona", error)
})

const app = expressz();
app.use(corsz());
app.listen(4001, () => {
    console.log("se escucha el servidor")
})

testz()


