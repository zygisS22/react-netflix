import React, { useEffect, useState } from 'react';
import BigBillboard from "../BigBillboard"
import Slider from "../Slider"
import MediumBillboard from '../MediumBillboard';


import { getMoviesBy } from "../../api"

function Home() {


    const [popularMovies, setPopularMovies] = useState(null)
    const [bestMovies, setBestMovies] = useState(null)
    const [kidsMovies, setKidsMovies] = useState(null)

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

            <BigBillboard />

            {/* <Slider mainTitle={"Mi lista"} /> */}


            {popularMovies && <Slider mainTitle={"Populares"} data={popularMovies} poster={false} />}

            {/* <MediumBillboard /> */}

            {kidsMovies && <Slider mainTitle={"Peliculas para niños"} data={kidsMovies} poster={true} />}

            {bestMovies && <Slider mainTitle={"Mejores peliculas del 2015"} data={bestMovies} poster={false} />}


        </div>






    );
}

export default Home;
