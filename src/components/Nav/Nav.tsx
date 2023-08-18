import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";

const Nav = () => {
  return (
    <div className="nav">
      <SearchBox />
      <FilterList />
    </div>
  );
};

export default Nav;
