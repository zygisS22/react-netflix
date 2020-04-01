import React, { useEffect, useState, useContext } from 'react';
import BigBillboard from "../BigBillboard"
import Slider from "../Slider"
import MediumBillboard from '../MediumBillboard';


import { getMoviesBy } from "../../api"
import Search from '../Search';
import SearchContext from "../Search/context"


function Home() {


    const [popularMovies, setPopularMovies] = useState(null)
    const [bestMovies, setBestMovies] = useState(null)
    const [kidsMovies, setKidsMovies] = useState(null)

    const searchContext = useContext(SearchContext)


    const fetchMovies = async () => {
        let popularMovies = await getMoviesBy("populares")
        let kidsMovies = await getMoviesBy("kids")
        let bestMovies = await getMoviesBy("best")

        return { popularMovies, kidsMovies, bestMovies }
    }

    useEffect(() => {

        fetchMovies().then(response => {

            setPopularMovies(response.popularMovies.results)
            setKidsMovies(response.kidsMovies.results)
            setBestMovies(response.bestMovies.results)

        })


        return () => {
            setPopularMovies(null)
            setKidsMovies(null)
            setBestMovies(null)
        }


    }, [])





    return (

        <div>

            {searchContext.searchInput.length > 0 ? (<Search />) : (
                <div>

                    <BigBillboard />

                    {popularMovies && <Slider mainTitle={"Populares"} data={popularMovies} poster={false} />}

                    {kidsMovies && <Slider mainTitle={"Peliculas para niños"} data={kidsMovies} poster={true} />}

                    {bestMovies && <Slider mainTitle={"Mejores peliculas del 2015"} data={bestMovies} poster={false} />}

                </div>
            )}

        </div>


    );
}

export default Home;
