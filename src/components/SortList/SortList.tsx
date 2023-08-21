import { FormEventHandler } from "react";
import "./SortList.scss";

type SortListProps = {
  handleSort: FormEventHandler<HTMLSelectElement>;
};

const SortList = ({ handleSort }: SortListProps) => {
  return (
    <div className="sort-list">
      <label htmlFor="sort-list">Sort</label>
      <select
        name="sort"
        id="sort-list"
        onChange={handleSort}
        className="sort-list__dropdown"
      >
        <option className="sort-list__option" value="">
          select
        </option>
        <option className="sort-list__option" value="name">
          Name A-Z
        </option>
        <option className="sort-list__option" value="high-abv">
          ABV High - Low
        </option>
        <option className="sort-list__option" value="low-abv">
          ABV Low - High
        </option>
        <option className="sort-list__option" value="high-ibu">
          IBU High - Low
        </option>
        <option className="sort-list__option" value="low-ibu">
          IBU Low - High
        </option>
      </select>
    </div>
  );
};

export default SortList;
