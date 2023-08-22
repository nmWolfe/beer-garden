import { useState, ChangeEvent, ChangeEventHandler } from "react";
import BeerList from "../../components/BeerList/BeerList";
import { Beer } from "../../types/Beer";
import "./Home.scss";
import SortList from "../../components/SortList/SortList";
import AmountList from "../../components/AmountList/AmountList";

type HomeProps = {
  beer_list: Beer[];
  displayAmount: ChangeEventHandler<HTMLSelectElement>;
};

const Home = ({ beer_list, displayAmount }: HomeProps) => {
  const [sort, setSort] = useState({
    nameSort: false,
    abvSort: "",
    ibuSort: "",
  });
  const handleSortDisplay = (beer_list: Beer[]) => {
    if (sort.nameSort) {
      return [...beer_list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort.abvSort === "high-abv") {
      return [...beer_list].sort((a, b) => b.abv - a.abv);
    } else if (sort.abvSort === "low-abv") {
      return [...beer_list].sort((a, b) => a.abv - b.abv);
    } else if (sort.ibuSort === "high-ibu") {
      return [...beer_list].sort((a, b) => b.ibu - a.ibu);
    } else if (sort.ibuSort === "low-ibu") {
      return [...beer_list].sort((a, b) => a.ibu - b.ibu);
    } else {
      return beer_list;
    }
  };
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.currentTarget.value;
    if (!selectValue) {
      setSort({ nameSort: false, ibuSort: "", abvSort: "" });
    }
    if (selectValue === "name") {
      setSort({ ...sort, nameSort: true });
    } else if (selectValue === "high-abv") {
      setSort({ nameSort: false, ibuSort: "", abvSort: "high-abv" });
    } else if (selectValue === "low-abv") {
      setSort({ nameSort: false, ibuSort: "", abvSort: "low-abv" });
    } else if (selectValue === "high-ibu") {
      setSort({ nameSort: false, abvSort: "", ibuSort: "high-ibu" });
    } else if (selectValue === "low-ibu") {
      setSort({ nameSort: false, abvSort: "", ibuSort: "low-ibu" });
    } else {
      setSort({ nameSort: false, abvSort: "", ibuSort: "" });
    }
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
    </div>
  );
};

export default Home;
