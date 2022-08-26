//Receta para consumir

//1. Pa donde vas ome 
//URI DE APÍ
const URI= 'https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US'

//2. A hacer que ome?
//Metodo
const PETICION = {
    method:'GET',
    headers: {
        Authorization: 'Bearer BQCyqnoTXPhop1iSd39JxHNkEwilqyibR0yI9I7mi1l9Jhw1HE3gj0Vjczrn8icayWa1irPOyV_G3RzguzENotK32SzPeRZV9AqPRmAWFiUOzpBwV4L2uNtrVCLlA5s0WliaJsIs7HzdEtn6f0kil-U2pyXwOSwFzZdYg2Ldop0amn0nHMLXyxoUhcsoS9Q'
    }
}

//Andate pues ome 
//Consuma el Api (Utilizando promesas )
fetch(URI, PETICION)
.then(function(respuesta){
    return respuesta.json(9)
})

.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks)

    let fila = document.getElementById('fila')
    respuesta.tracks.forEach(function(cancion){

        let columna = document.createElement('div')
        columna.classList.add('col')
        let tarjeta = document.createElement('div')
        tarjeta.classList.add('card','shadow','p-3', 'h-100')
        let audio = document.createElement('audio')
        audio.src= cancion.preview_url
        audio.classList.add('w-100')
        audio.setAttribute('controls', 'controls','w-100')
        
        let nombre = document.createElement('h3')
        nombre.classList.add('text-center')
        nombre.textContent = cancion.name

        let imagen = document.createElement('img')
        imagen.classList.add('img-fluid','w-100')
        imagen.src = cancion.album.images[0].url

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
    
})

.catch(function(respuestaError){
    console.log(respuestaError)
})