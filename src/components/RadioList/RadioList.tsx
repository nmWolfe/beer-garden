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
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();
        const optionCapitalized = option[0].toUpperCase() + option.slice(1);
        return (
          <div
            key={"radio-list" + option + index}
            className="radio-list__input"
          >
            <input
              type="radio"
              name="filter"
              id={optionLower}
              value={optionLower}
              checked={optionLower === selected}
              onChange={onChange}
            />
            <label className="radio-list__label" htmlFor={optionLower}>
              {optionCapitalized}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioList;
