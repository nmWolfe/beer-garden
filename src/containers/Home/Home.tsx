import {
  useState,
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
} from "react";
import BeerList from "../../components/BeerList/BeerList";
import { Beer } from "../../types/Beer";
import "./Home.scss";
import SortList from "../../components/SortList/SortList";
import AmountList from "../../components/AmountList/AmountList";
import Buttons from "../../components/Buttons/Buttons";

type HomeProps = {
  beer_list: Beer[];
  displayAmount: ChangeEventHandler<HTMLSelectElement>;
  page: number;
  increment: MouseEventHandler<HTMLButtonElement>;
  decrement: MouseEventHandler<HTMLButtonElement>;
};

const Home = ({
  beer_list,
  displayAmount,
  page,
  increment,
  decrement,
}: HomeProps) => {
  const [sort, setSort] = useState({
    nameSort: false,
    abvSort: "",
    ibuSort: "",
    dateSort: "",
  });

  const handleSortDisplay = (beer_list: Beer[]) => {
    const sortedList = [...beer_list];
    if (sort.nameSort) {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort.dateSort === "new") {
      sortedList.sort(
        (a, b) =>
          parseInt(b.first_brewed.split("/").reverse().join("")) -
          parseInt(a.first_brewed.split("/").reverse().join(""))
      );
    } else if (sort.dateSort === "old") {
      sortedList.sort(
        (a, b) =>
          parseInt(a.first_brewed.split("/").reverse().join("")) -
          parseInt(b.first_brewed.split("/").reverse().join(""))
      );
    } else if (sort.abvSort === "high-abv") {
      sortedList.sort((a, b) => b.abv - a.abv);
    } else if (sort.abvSort === "low-abv") {
      sortedList.sort((a, b) => a.abv - b.abv);
    } else if (sort.ibuSort === "high-ibu") {
      sortedList.sort((a, b) => b.ibu - a.ibu);
    } else if (sort.ibuSort === "low-ibu") {
      sortedList.sort((a, b) => a.ibu - b.ibu);
    }
    return sortedList;
  };
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.currentTarget.value;
    const newSort = { nameSort: false, abvSort: "", ibuSort: "", dateSort: "" };

    if (selectValue === "name") {
      newSort.nameSort = true;
    } else if (selectValue === "new") {
      newSort.dateSort = "new";
    } else if (selectValue === "old") {
      newSort.dateSort = "old";
    } else if (selectValue === "high-abv") {
      newSort.abvSort = "high-abv";
    } else if (selectValue === "low-abv") {
      newSort.abvSort = "low-abv";
    } else if (selectValue === "high-ibu") {
      newSort.ibuSort = "high-ibu";
    } else if (selectValue === "low-ibu") {
      newSort.ibuSort = "low-ibu";
    }
    setSort(newSort);
  };

  return (
    <div className="home">
      <h1 className="home__header">THE PUNK GARDEN</h1>
      <div className="home__drop-down">
        <SortList handleSort={handleSort} label="Sort" />
        <AmountList handleDisplayAmount={displayAmount} />
      </div>
      <div className="home__content">
        <BeerList beer_list={handleSortDisplay(beer_list)} />
      </div>
      <div className="home__buttons">
        <Buttons
          page={page}
          handleDecrement={decrement}
          handleIncrement={increment}
        />
      </div>
    </div>
  );
};

export default Home;
