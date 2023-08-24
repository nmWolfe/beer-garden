import { useParams } from "react-router-dom";
import { Beer } from "../../types/Beer";
import { Link } from "react-router-dom";
import "./BeerInfo.scss";
import beerImage from "../../assets/images/beer.svg";
import ErrorPage from "../../components/ErrorPage/ErrorPage";

type BeerInfoProps = {
  beers: Beer[];
};

const BeerInfo = ({ beers }: BeerInfoProps) => {
  const { beerId } = useParams();

  const beer = beers.find((beer) => beer.id === Number(beerId));
  if (!beer) {
    return <ErrorPage />;
  }

  const defaultBeer = beer.image_url ?? beerImage;

  return (
    <div className="beer-info" key={beer.id}>
      <Link to={"/"} className="beer-info__link">
        Home
      </Link>
      <div className="beer-info__header">
        <h1 className="beer-info__name">{beer.name}</h1>
        <h3 className="beer-info__tagline">{beer.tagline}</h3>
        <img src={defaultBeer} alt={beer.name} className="beer-info__image" />
        <h5 className="beer-info__created">
          First Brewed: {beer.first_brewed}
        </h5>
      </div>
      <div className="beer-info__description">
        <p>{beer.description}</p>
      </div>
      <div className="beer-info__food-pairing">
        <h2 className="beer-info__food-pairing--header">
          Recommended Food Pairings
        </h2>
        <div className="beer-info__food-pairing--food">
          {beer.food_pairing.map((pairing, index) => {
            return <p key={"pairing" + beer.id + index}>~ {pairing} ~</p>;
          })}
        </div>
      </div>
      <div className="beer-info__list">
        <ul className="beer-info__list--ul">
          <li className="beer-info__list--li">ABV: {beer.abv}</li>
          <li className="beer-info__list--li">IBU: {beer.ibu}</li>
          <li className="beer-info__list--li">PH: {beer.ph}</li>
        </ul>
      </div>
      <h2>Ingredients</h2>
      <div className="beer-info__ingredients">
        <div className="beer-info__ingredients--malt">
          <h3 className="beer-info__ingredients--header">Malt</h3>
          {beer.ingredients.malt.map((malt, index) => {
            return (
              <ul className="malt" key={`malt ${beer.id}` + index}>
                <li>Name: {malt.name}</li>
                <li>
                  Amnt: {malt.amount.value} {malt.amount.unit}
                </li>
                <br />
              </ul>
            );
          })}
        </div>
        <div className="beer-info__ingredients--hops">
          <h3 className="beer-info__ingredients--header">Hops</h3>
          {beer.ingredients.hops.map((hop, index) => {
            return (
              <ul className="hops" key={`${hop} + ${beer.id}` + index}>
                <li>Name: {hop.name}</li>
                <li>
                  Amnt: {hop.amount.value} {hop.amount.unit}
                </li>
                <li>Attr: {hop.attribute}</li>
                <li>Add at the {hop.add}</li>
                <br />
              </ul>
            );
          })}
        </div>
      </div>
      <div className="beer-info__yeast">
        <h3 className="beer-info__yeast--header">Yeast</h3>
        {beer.ingredients.yeast}
      </div>
      <div className="beer-info__tips">
        <h2 className="beer-info__tips--header">Brewers Tips</h2>
        <p>{beer.brewers_tips}</p>
      </div>
    </div>
  );
};

export default BeerInfo;
