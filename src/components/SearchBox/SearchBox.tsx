import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div className="search-box">
      <label htmlFor="beer-search"></label>
      <input
        type="text"
        id="beer-search"
        className="search-box__input"
        placeholder="Find your next beer..."
      />
    </div>
  );
};

export default SearchBox;
