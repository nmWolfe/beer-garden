import "./FilterList.scss";

const FilterList = () => {
  return (
    <div className="filter-list">
      <ul className="filter-list__list">
        <label htmlFor="checkbox" className="filter-list__label">
          Filter by something <br /> <br /> Make this dynamic!
        </label>
        <input type="checkbox" id="checkbox" className="filter-list__input" />
      </ul>
    </div>
  );
};

export default FilterList;
