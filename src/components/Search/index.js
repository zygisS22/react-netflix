import React, { useContext, useEffect } from "react"
import searchContext from "../Search/context"

const Search = () => {

    const context = useContext(searchContext)


    useEffect(() => {

    }, [])


    return (
        <div className="search-background">
            <h2 align="center">Busqueda</h2>

            <div className="search-container">
                <div>1</div>
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
                <div>20</div>

            </div>

        </div>
    )
}

export default Search