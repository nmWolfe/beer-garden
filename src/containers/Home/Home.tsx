import BeerCard from "../../components/BeerCard/BeerCard";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__header">The Beer Garden</h1>
      <BeerCard />
    </div>
  );
};

export default Home;
