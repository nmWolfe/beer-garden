import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

const Nav = () => {
  return (
    <div className="nav">
      <SearchBox />
      <div className="nav__list">
        <FilterList />
      </div>
    </div>
  );
};

export default Nav;
