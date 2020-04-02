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




            <div className="search-container">

                {movies ? (renderPosters(movies)) : (<h2 align="center">loading...</h2>)}

                {/* <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div> */}

            </div>

        </div>
    )
}

export default Search