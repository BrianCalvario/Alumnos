import {Schema, model} from "mongoose";

const EsquemaAlumnos = new Schema ()({
    names:String,
    apepate:String,
    Numberoz: Number
    
})

export const modelo= new model("Tabla de Alumnos", EsquemaAlumnos);