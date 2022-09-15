//Generar token automatico 

//Uri
const URI = "https://accounts.spotify.com/api/token"

//Datos de envio
const DATO1 = "grant_type=client_credentials"
const DATO2 = "client_id=16766a37d68f47ab9700a842ec19d5c8"
const DATO3 = "client_secret=e353e1dabe8d46189c4cd6c304b0a8e8"

//Peticiom
 const PETICION = {
    method: "POST",
    headers:{"Content-Type":"application/x-www-form-urlencoded"},
    body: DATO1 + "&" + DATO2 +"&" + DATO3 + "&"

 }


//fetch
//Promesa
/*fetch(URI,PETICION)
.then(function(respuesta){
   return respuesta.json()
})
.then(function(respuesta){
   console.log(respuesta)
})
.catch(function(respuesta){
   console.log(respuesta)
})*/


//Async await
async function obtenerToken(){
   let respuesta= await fetch(URI,PETICION)
   return await respuesta.json()
}
