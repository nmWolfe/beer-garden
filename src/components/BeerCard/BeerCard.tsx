import "./BeerCard.scss";

type BeerCardProps = {
  name: string;
  tagline: string;
  description: string;
  abv: number;
  ibu: number;
};

const BeerCard = ({ name, tagline, description, abv, ibu }: BeerCardProps) => {
  return (
    <div className="beer-card">
      <div className="beer-card__header">
        <img src="#" alt="beer image" className="beer-card__image" />
        <h1 className="beer-card__name">{name}</h1>
        <h3 className="beer-card__tagline">{tagline}</h3>
      </div>
      <div className="beer-card__content">
        <p className="beer-card__description">{description}</p>
        <div className="beer-card__content--extended">
          <div className="beer-card__abv">ABV: {abv}</div>
          <div className="beer-card__ibu">IBU: {ibu}</div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
