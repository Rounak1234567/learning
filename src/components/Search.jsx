const Search = ({ term, handleSearch }) => {
    
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleSearch} value={term}/>
            <p>Searching for <strong>{term}</strong></p>
        </div>
    )
}

export { Search }