import React, { useContext, useEffect, useState } from "react"
import searchContext from "../Search/context"

import { searchMoviesBy, IMAGE_BASE } from "../../api"

const Search = () => {

    const context = useContext(searchContext)
    const [movies, setMovies] = useState(null)


    const queryMovies = async (text) => {
        return await searchMoviesBy(context.searchInput)
    }

    useEffect(() => {

        queryMovies().then(response => {

            console.log(response.data.results)
            setMovies(response.data.results)

        })

        return () => setMovies(null)
    }, [context])


    const renderPosters = (data) => {

        return data.map((item, index) => {

            if (item.poster_path) return <div key={index}><img src={`${IMAGE_BASE}w500/${item.poster_path}`} alt={"poster"} /></div>


        })
    }


    return (
        <div className="search-background">






            {movies ? (
                <React.Fragment>
                    {movies.length ? (<div className="search-container">{renderPosters(movies)}</div>) : (<div className="not-found">No results :(</div>)}
                </React.Fragment>
            ) : (
                    <div class="loading-content">
                        <div class="loading-circle"></div>
                        <span class="loading-name">LOADING...</span>
                    </div>

                )}





        </div>
    )
}

export default Search