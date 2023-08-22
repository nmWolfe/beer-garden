import { ChangeEventHandler } from "react";
import "./SortList.scss";

type SortListProps = {
  handleSort: ChangeEventHandler<HTMLSelectElement>;
  label: string;
};

const SortList = ({ handleSort, label }: SortListProps) => {
  return (
    <div className="sort-list">
      <label htmlFor="sort-list">{label}</label>
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
        <option value="new">New - Old</option>
        <option value="old">Old - New</option>
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
