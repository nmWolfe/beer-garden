import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { Beer } from "./types/Beer";
import BeerInfo from "./containers/BeerInfo/BeerInfo";
import { RadioInput } from "./types/Radio";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [beerDisplayAmount, setBeerDisplayAmount] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState({
    searchText: "",
    radioSelect: "all",
  });
  const getBeers = async () => {
    try {
      if (filter.searchText.length >= 1) {
        const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beerDisplayAmount}&beer_name=${filter.searchText}`;
        const response = await fetch(url);
        const data: Beer[] = await response.json();
        setBeers(data);
      } else if (filter.radioSelect !== "all") {
        const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beerDisplayAmount}&${filter.radioSelect}`;
        const response = await fetch(url);
        const data: Beer[] = await response.json();
        setBeers(data);
      } else {
        const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beerDisplayAmount}`;
        const response = await fetch(url);
        const data: Beer[] = await response.json();
        setBeers(data);
      }
    } catch (error) {
      console.log("There was an error" + error);
    }
  };
  useEffect(() => {
    getBeers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beerDisplayAmount, page, filter]);
  const handleFilters = (beerArr: Beer[]) => {
    const beerFilters = beerArr.filter((beer) => {
      return beer.name.toLowerCase().includes(filter.searchText.toLowerCase());
    });
    return beerFilters;
  };
  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    const searchText = event.currentTarget.value;
    setFilter({ ...filter, searchText });
  };
  const handleDisplayAmount = (event: ChangeEvent<HTMLSelectElement>) => {
    const displayAmount = event.currentTarget.value;
    setBeerDisplayAmount(Number(displayAmount));
  };
  const handlePageIncrement = () => {
    if (beers.length <= 9) {
      setPage(page);
    } else {
      setPage(page + 1);
    }
  };
  const handlePageDecrement = () => {
    if (page === 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };
  const handleRadioFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const userSelection = event.currentTarget.value;
    for (const key in radioOptions) {
      if (userSelection === key) {
        setFilter({
          ...filter,
          radioSelect: radioOptions[key as keyof RadioInput],
        });
      }
    }
  };
  const radioOptions: RadioInput = {
    all: "all",
    "abv over 10": "abv_gt=10",
    "ibu over 50": "ibu_gt=50",
    "ebc over 20": "ebc_gt=20",
    "created before 2010": "brewed_before=12-2010",
    "created after 2010": "brewed_after=1-2010",
  };
  const selectedValue = Object.keys(radioOptions).find(
    (key) => radioOptions[key as keyof RadioInput] === filter.radioSelect
  );

  return (
    <HashRouter>
      <div className="app">
        <Nav
          setSearchText={handleSearch}
          options={Object.keys(radioOptions)}
          handleChange={handleRadioFilter}
          selected={selectedValue!}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                beer_list={handleFilters(beers)}
                displayAmount={handleDisplayAmount}
                page={page}
                increment={handlePageIncrement}
                decrement={handlePageDecrement}
              />
            }
          />
          <Route path="/beer/:beerId" element={<BeerInfo beers={beers} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
