import React, { useState, useCallback } from "react"
import SearchContext from "../components/Search/context"

export const useSearch = () => {
    const [searchInput, setSearchInput] = useState("")

    const updateSearchInput = useCallback((text) => {
        setSearchInput(text)
    }, [])

    return { searchInput, updateSearchInput }
}