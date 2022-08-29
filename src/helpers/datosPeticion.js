
const ID_ARTISTA="3hYtANQYrE6pd2PbtEyTIy"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN = 'Bearer BQA6LDFXeetj3xT4rvcfZYq83BibyuRFCASdNvU3uzopRFKlaLok9N2QEZKaTIvYT3OqeKi1XZs-eGAhBfJJHA8eM1HOrFGv2y4JxUvpTnrckpUx1zDivjEHZIxY8mXAd9cqzBCGXwKsvMALGhtAzp9da_LTewnf7EcwfTH0qg_utTE5PZ0LrXEC7Oz3NPo'

export const PETICION = {
    method:'GET',
    headers: {
        Authorization: TOKEN
    }
}