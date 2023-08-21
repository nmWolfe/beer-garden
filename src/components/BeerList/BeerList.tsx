import "./BeerList.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/Beer";

type BeerListProps = {
  beer_list: Beer[];
};

const BeerList = ({ beer_list }: BeerListProps) => {
  return (
    <>
      {beer_list.map((beer) => {
        <BeerCard
          name={beer.name}
          tagline={beer.tagline}
          description={beer.description}
          abv={beer.abv}
          ibu={beer.ibu}
        />;
      })}
    </>
  );
};

export default BeerList;
