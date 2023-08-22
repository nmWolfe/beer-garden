import "./BeerList.scss";
import BeerCard from "../BeerCard/BeerCard";
import { Beer } from "../../types/Beer";

type BeerListProps = {
  beer_list: Beer[];
};

const BeerList = ({ beer_list }: BeerListProps) => {
  return (
    <>
      {beer_list.map((beer) => (
        <div className="beer-list__container" key={beer.id}>
          <BeerCard
            name={beer.name}
            image={beer.image_url}
            tagline={beer.tagline}
            description={beer.description}
            abv={beer.abv}
            ibu={beer.ibu}
            created={beer.first_brewed}
          />
        </div>
      ))}
    </>
  );
};

export default BeerList;
