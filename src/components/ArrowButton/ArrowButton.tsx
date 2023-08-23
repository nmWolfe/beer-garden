import { MouseEventHandler } from "react";
import rightArrow from "../../assets/images/right-arrow.svg";
import leftArrow from "../../assets/images/left-arrow.svg";
import "./ArrowButton.scss";

type ButtonsProps = {
  page: number;
  handleDecrement: MouseEventHandler<HTMLButtonElement>;
  handleIncrement: MouseEventHandler<HTMLButtonElement>;
};

const Buttons = ({ page, handleDecrement, handleIncrement }: ButtonsProps) => {
  return (
    <div className="buttons">
      <button className="buttons-arrow" onClick={handleDecrement}>
        <img src={leftArrow} alt="left arrow" className="buttons-arrow__left" />
      </button>
      <div className="page">Page {page}</div>
      <button className="buttons-arrow" onClick={handleIncrement}>
        <img
          src={rightArrow}
          alt="right arrow"
          className="buttons-arrow__right"
        />
      </button>
    </div>
  );
};

export default Buttons;
