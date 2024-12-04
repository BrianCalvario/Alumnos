import {Schema, model} from "mongoose";

const EsquemaJugadores = new Schema ()({
    names:String,
    apepate:String,
    Numberoz: Number
    
})

export const modelo= new model("Tabla de jugadores", EsquemaJugadores);