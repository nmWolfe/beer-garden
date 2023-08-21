import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { Beer } from "./types/Beer";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [filter, setFilter] = useState({
    searchText: "",
    abvSort: "",
    ibuSort: "",
  });

  const getBeers = async () => {
    try {
      const response = await fetch("https://api.punkapi.com/v2/beers");
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBeers();
  });
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

  return (
    <HashRouter>
      <div className="app">
        <Nav setSearchText={handleSearch} />
        <Routes>
          <Route path="/" element={<Home beer_list={handleFilters(beers)} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
