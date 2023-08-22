import "./BeerCard.scss";
import beerImg from "../../assets/images/beer.svg";

type BeerCardProps = {
  name: string;
  image: string;
  tagline: string;
  description: string;
  abv: number;
  ibu: number;
  created: string;
};

const BeerCard = ({
  name,
  image,
  tagline,
  description,
  abv,
  ibu,
  created,
}: BeerCardProps) => {
  if (description.length > 10) {
    description = description.substring(0, description.indexOf("."));
  }

  const img = image ?? beerImg;
  return (
    <div className="beer-card">
      <div className="beer-card__header">
        <img src={img} alt={name} className="beer-card__image" />
        <h1 className="beer-card__name">{name}</h1>
        <h3 className="beer-card__tagline">{tagline}</h3>
      </div>
      <div className="beer-card__content">
        <p className="beer-card__description">{description}</p>
        <h5 className="beer-card__created">Created: {created}</h5>
        <div className="beer-card__content--extended">
          <div className="beer-card__abv">ABV: {abv}</div>
          <div className="beer-card__ibu">IBU: {ibu}</div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
