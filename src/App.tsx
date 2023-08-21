import { HashRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { Beer } from "./types/Beer";

function App() {
  const [beers, setBeers] = useState<Beer[]>([]);

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

  return (
    <HashRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home beer_list={beers} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
