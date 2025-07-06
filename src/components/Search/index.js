import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <i className="icon icon-search" />
      <input
        name="search"
        className="search_input"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
