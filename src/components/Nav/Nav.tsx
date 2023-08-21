import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";
import { FormEventHandler } from "react";

type NavProps = {
  setSearchText: FormEventHandler<HTMLInputElement>;
};

const Nav = ({ setSearchText }: NavProps) => {
  return (
    <div className="nav">
      <SearchBox setSearchText={setSearchText} />
      <div className="nav__list">
        <FilterList />
      </div>
    </div>
  );
};

export default Nav;
