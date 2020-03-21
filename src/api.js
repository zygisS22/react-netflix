import axios from "axios"


const API = process.env.REACT_APP_API_KEY
const URL = process.env.REACT_APP_API_BASE_URL
export const IMAGE_BASE = process.env.REACT_APP_BASE_IMAGE_URL

export async function getMovieInformation(id) {

    let data = {
        poster_path: null,
        backdrop_path: null,
        overview: null,
        original_title: null,
        secondarybackdrop_path: null,

    }

    await axios.get(`${URL}movie/${id}?${API}`)
        .then(function (response) {


            let { poster_path, backdrop_path, overview, original_title } = response.data

            data.poster_path = `${IMAGE_BASE}original/${poster_path}`
            data.backdrop_path = `${IMAGE_BASE}original/${backdrop_path}`
            data.overview = overview
            data.original_title = original_title

        })

    await axios.get(`${URL}movie/${id}/images?${API}`)
        .then(function (response) {
            // handle success

            if (response.data.backdrops.length > 1) data.secondarybackdrop_path = `${IMAGE_BASE}original/${response.data.backdrops[1].file_path}`


        })


    return data

}


export async function getMoviesBy() {

    return await axios.get(`${URL}discover/movie?sort_by=popularity.desc&${API}`)
        .then(function (response) {

            return response.data

        })


}