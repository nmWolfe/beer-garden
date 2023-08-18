import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="search-box">
      <label htmlFor="beer-search"></label>
      <input
        type="text"
        id="beer-search"
        className="search-box__input"
        value="Search..."
      />
    </div>
  );
};

export default SearchBox;
