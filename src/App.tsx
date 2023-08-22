import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { Beer } from "./types/Beer";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [beerDisplayAmount, setBeerDisplayAmount] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState({
    searchText: "",
  });
  const getBeers = async () => {
    try {
      const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beerDisplayAmount}`;
      const response = await fetch(url);
      const data: Beer[] = await response.json();
      setBeers(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBeers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [beerDisplayAmount, page]);
  const handleFilters = (beerArr: Beer[]) => {
    const beerFilters = beerArr.filter((beer) => {
      const searchFilter = beer.name
        .toLowerCase()
        .includes(filter.searchText.toLowerCase());
      return searchFilter;
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
    if (page === 6) {
      setPage(6);
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

  return (
    <HashRouter>
      <div className="app">
        <Nav setSearchText={handleSearch} />
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
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
