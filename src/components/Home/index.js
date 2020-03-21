import React, { useEffect, useState } from 'react';
import HeroImage from "../HeroImage"
import Slider from "../Slider"
import MediumBillboard from '../MediumBillboard';


import { getMoviesBy } from "../../api"

function Home() {


    const [popularMovies, setPopularMovies] = useState(null)

    useEffect(async () => {

        let popularMovies = await getMoviesBy()

        setPopularMovies(popularMovies.results)


    }, [])


    return (

        <div>

            <HeroImage />

            {/* <Slider mainTitle={"Mi lista"} /> */}


            {popularMovies && <Slider mainTitle={"Populares en netflix"} data={popularMovies} />}


            <MediumBillboard />

            {/* <Slider mainTitle={"Peliculas premiadas"} />

            <Slider mainTitle={"Animes"} /> */}


        </div>






    );
}

export default Home;
