import axios from "axios"

const API = process.env.REACT_APP_API_KEY
const URL = process.env.REACT_APP_API_BASE_URL
export const IMAGE_BASE = process.env.REACT_APP_BASE_IMAGE_URL

export async function getMovieInformation(id) {

    return await axios.get(`${URL}movie/${id}?${API}&append_to_response=images,credits,similar`)

}


export async function searchMoviesBy(text, page = 1) {

    return await axios.get(`${URL}search/movie?${API}&language=en-US&query=${text}&page=${page}&include_adult=true`)

}

export async function getMoviesByGenre(genre) {

    return await axios.get(`${URL}discover/movie?with_genres=18&sort_by=popularity.desc&${API}`)

}


export async function getMoviesBy(type) {

    let discover = null

    switch (type) {
        case "best":
            discover = `${URL}discover/movie?primary_release_year=2015&sort_by=popularity.desc&${API}`
            break;
        case "populares":
            discover = `${URL}discover/movie?sort_by=popularity.desc&${API}`
            break;
        case "kids":
            discover = `${URL}discover/movie?certification_country=US&certification=G&sort_by=popularity.desc&${API}`
            break;
        default:
            discover = `${URL}discover/movie?primary_release_year=2019&sort_by=popularity.desc&${API}`

    }


    return await axios.get(discover)
        .then(function (response) {

            return response.data

        })


}