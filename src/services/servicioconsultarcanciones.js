export async function consultarCanciones(URI,PETICION){
    let respuesta= await fetch(URI,PETICION)
    return respuesta.json()
}