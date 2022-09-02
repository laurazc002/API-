export function generarURI(idartista){

    let uri = `https://api.spotify.com/v1/artists/${idartista}/top-tracks?market=US`

    return uri

}