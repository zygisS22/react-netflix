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

    useEffect(async () => {

        let popularMovies = await getMoviesBy("populares")
        let kidsMovies = await getMoviesBy("kids")
        let bestMovies = await getMoviesBy("best")

        setPopularMovies(popularMovies.results)
        setKidsMovies(kidsMovies.results)
        setBestMovies(bestMovies.results)


    }, [])






    return (

        <div>


            <Search />

            <div style={{ display: searchContext.searchInput.length > 0 ? "none" : "block" }}>

                <BigBillboard />

                {popularMovies && <Slider mainTitle={"Populares"} data={popularMovies} poster={false} />}

                {kidsMovies && <Slider mainTitle={"Peliculas para niños"} data={kidsMovies} poster={true} />}

                {bestMovies && <Slider mainTitle={"Mejores peliculas del 2015"} data={bestMovies} poster={false} />}

            </div>


        </div>






    );
}

export default Home;
