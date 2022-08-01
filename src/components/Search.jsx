const Search = (props) => {
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={props.handleSearch}/>
            <p>Searching for <strong>{props.term}</strong></p>
        </div>
    )
}

export { Search }