
const ID_ARTISTA="3hYtANQYrE6pd2PbtEyTIy"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN = ' Bearer BQC78ksQAEucghGEGxAN6H7AG-cmmatSeLB05nCCEc0y53nN3XRn9xe4GP41zwvVllc0GWxX3kNa_KUs0pRJfunr-5jebs8wmnlBgoyo8-5ON5bEJNthcveRJjuVo2DuTZdkOlJrsQHwfK8duOfxXrGfn3aw5KYiY9fwYIclN3tLZYuATppqooWmVZqLhAg'

export const PETICION = {
    method:'GET',
    headers: {
        Authorization: TOKEN
    }
}