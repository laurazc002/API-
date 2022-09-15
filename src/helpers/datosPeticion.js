import{obtenerToken} from "../services/servicioGenerarToken.js"
const ID_ARTISTA="3hYtANQYrE6pd2PbtEyTIy"

let token=await obtenerToken()
console.log(token)
console.log(token.token_type)

console.log(token.access_token)
const TOKEN= token.token_type+' '+token.access_token



//export const URI=`https://api.spotify.com/v1/artists/

export const PETICION = {
    method:'GET',
    headers: {
        Authorization: TOKEN
    }
}