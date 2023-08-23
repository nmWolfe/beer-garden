import "./Nav.scss";
import SearchBox from "../SearchBox/SearchBox";
import RadioList from "../RadioList/RadioList";
import { ChangeEventHandler, FormEventHandler } from "react";

type NavProps = {
  setSearchText: FormEventHandler<HTMLInputElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  options: string[];
  selected: string;
};

const Nav = ({ setSearchText, handleChange, options, selected }: NavProps) => {
  return (
    <div className="nav">
      <SearchBox setSearchText={setSearchText} />
      <div className="nav__list">
        <RadioList
          label="Show me.."
          options={options}
          selected={selected}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Nav;
