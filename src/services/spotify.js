//Receta para consumir

//1. Pa donde vas ome 
//URI DE APÍ
import{URI,PETICION} from '../helpers/datosPeticion.js'

//Traigo funcion de consume
import {consultarCanciones} from './servicioconsultarcanciones.js'

import { pintarCanciones } from '../controllers/controladorPintarCanciones.js'

//Usamos la funcion para consumir

let canciones = await consultarCanciones(URI,PETICION)

//console.log(canciones)

pintarCanciones(canciones.tracks)