import { FormEventHandler } from "react";
import "./SearchBox.scss";

type SearchBoxProps = {
  setSearchText: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ setSearchText }: SearchBoxProps) => {
  return (
    <div className="search-box">
      <label htmlFor="beer-search"></label>
      <input
        type="text"
        id="beer-search"
        className="search-box__input"
        placeholder="Find your next beer..."
        onChange={setSearchText}
      />
    </div>
  );
};

export default SearchBox;
