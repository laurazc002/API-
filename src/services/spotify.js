//Receta para consumir

//1. Pa donde vas ome 
//URI DE APÍ
import{URI,PETICION} from '../helpers/datosPeticion.js'

//2. A hacer que ome?
//Metodo

//Andate pues ome 
//Consuma el Api (Utilizando promesas )
fetch(URI, PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks)

    let fila = document.getElementById('fila')
    
    
})

.catch(function(respuestaError){
    console.log(respuestaError)
})