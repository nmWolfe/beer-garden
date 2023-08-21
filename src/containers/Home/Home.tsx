import BeerList from "../../components/BeerList/BeerList";
import { Beer } from "../../types/Beer";
import "./Home.scss";

type HomeProps = {
  beer_list: Beer[];
};

const Home = ({ beer_list }: HomeProps) => {
  return (
    <div className="home">
      <h1 className="home__header">THE PUNK GARDEN</h1>
      <div className="home__content">
        <BeerList beer_list={beer_list} />
      </div>
    </div>
  );
};

export default Home;
