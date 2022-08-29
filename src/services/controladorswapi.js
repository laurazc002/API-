
const URI= 'https://swapi.dev/api/species'


const PETICION = {
    method:'GET',

    }


fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta.results)

    let tabla= document.getElementById('cuerpo')
    respuesta.results.forEach(function(especie){

    let filatabla = document.createElement('tr')
   

    let columna = document.createElement('th')

    
    let nombre = document.createElement('td')
    nombre.classList.add('text-center')
    nombre.textContent = especie.name

    let colorojos = document.createElement('td')
    colorojos.classList.add('text-center')
    colorojos.textContent = especie.eye_colors

    let lenguaje = document.createElement('td')
    lenguaje.classList.add('text-center')
    lenguaje.textContent = especie.lenguage

    filatabla.appendChild(columna)
    filatabla.appendChild(nombre)
    filatabla.appendChild(colorojos)
    filatabla.appendChild( lenguaje)
    tabla.appendChild(filatabla)




    })

})

.catch(function(respuestaError){
    console.log(respuestaError)
})