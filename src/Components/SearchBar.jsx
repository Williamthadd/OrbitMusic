export default function SearchBar({ handleSearch, search, searchValue }) {
  function handleChange(event) {
    event.stopPropagation();
    handleSearch(event.target.value);
  }

  function handleClearInput() {
    search(false);
    handleSearch("");
  }

  return (
    <div className="searchBar-container">
      <div className="searchBar">
        <input
          className="searchInput"
          placeholder="Search songs here!"
          value={searchValue}
          onChange={handleChange}
        ></input>
        {searchValue && (
          <button className="clear-button" onClick={handleClearInput}>
            x
          </button>
        )}
      </div>
      <button onClick={() => search(true)}>Search!</button>
    </div>
  );
}
