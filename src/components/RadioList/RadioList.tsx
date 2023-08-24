import { ChangeEventHandler } from "react";
import "./RadioList.scss";

type RadioListProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  options: string[];
  label: string;
  selected: string;
};

const RadioList = ({ onChange, options, label, selected }: RadioListProps) => {
  return (
    <div className="radio-list">
      <h3 className="radio-list__header">{label}</h3>
      {options.map((option) => {
        return (
          <div key={"radio-list" + option} className="radio-list__input">
            <input
              type="radio"
              name="filter"
              id={option}
              value={option}
              checked={option === selected}
              onChange={onChange}
            />
            <label className="radio-list__label" htmlFor={option}>
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioList;
