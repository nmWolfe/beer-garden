import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { Beer } from "./types/Beer";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const getBeers = async () => {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        const data = await response.json();
        setBeers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getBeers();
  }, []);
  const handleSearchFilter = (beerArr: Beer[]) => {
    return beerArr.filter((beer) => {
      return beer.name.toLowerCase().includes(searchText.toLowerCase());
    });
  };
  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    const searchText = event.currentTarget.value;
    setSearchText(searchText);
  };

  return (
    <HashRouter>
      <div className="app">
        <Nav setSearchText={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home beer_list={handleSearchFilter(beers)} />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
