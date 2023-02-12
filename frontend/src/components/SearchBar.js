import React, { useState } from 'react'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }

    // const resetInputField = () => {
    //     setSearchValue('')
    // }

    const callSearchFunction = (e) => {
        e.preventDefault()
        // paramètre de recherche
    }

    return (
        <form className="search-bar">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
                placeholder="Search..."
            />
            <input onClick={callSearchFunction} type="submit" value="" />
        </form>
    )
}

export default SearchBar
