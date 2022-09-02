
const ID_ARTISTA="3hYtANQYrE6pd2PbtEyTIy"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN = 'Bearer BQC-MuM75FskNWEt-treMJOnioDwgn58Cp7IDGi5Dle3UmdlKUKyASL9y8TCP7JLdcn0h61EpXdnsLBv2MjvGLxUEx6vdylmkWHmiIoVH4xgdLhkUDmzVwIX71xfLttnofNpurbohvXrEqBrbtXcg_U1AfWHQBoBrkjt_zY3ptTxcClKoZzqFpa8bW770Zc'

export const PETICION = {
    method:'GET',
    headers: {
        Authorization: TOKEN
    }
}