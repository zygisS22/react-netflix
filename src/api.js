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

    await axios.get(`${URL}movie/${id}?${API}&append_to_response=images`)
        .then(function (response) {


            let { poster_path, backdrop_path, overview, title } = response.data

            data.poster_path = `${IMAGE_BASE}original/${poster_path}`
            data.backdrop_path = `${IMAGE_BASE}original/${backdrop_path}`
            data.overview = overview
            data.original_title = title

            if (response.data.images.backdrops.length > 1) data.secondarybackdrop_path = `${IMAGE_BASE}original/${response.data.images.backdrops[1].file_path}`

        })



    return data

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

    }


    return await axios.get(discover)
        .then(function (response) {

            return response.data

        })


}