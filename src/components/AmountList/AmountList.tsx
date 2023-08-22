import { ChangeEventHandler } from "react";
import "./AmountList.scss";

type AmountListProps = {
  handleDisplayAmount: ChangeEventHandler<HTMLSelectElement>;
};

const AmountList = ({ handleDisplayAmount }: AmountListProps) => {
  return (
    <div className="display-amount">
      <label htmlFor="display-amount">Results</label>
      <select
        name="display-amount"
        id="display-amount"
        className="display-amount__dropdown"
        onChange={handleDisplayAmount}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="80">80</option>
      </select>
    </div>
  );
};

export default AmountList;
