import "./BeerCard.scss";

type BeerCardProps = {
  name: string;
  image: string;
  tagline: string;
  description: string;
  abv: number;
  ibu: number;
};

const BeerCard = ({
  name,
  image,
  tagline,
  description,
  abv,
  ibu,
}: BeerCardProps) => {
  if (description.length > 10) {
    description = description.substring(0, description.indexOf("."));
  }
  return (
    <div className="beer-card">
      <div className="beer-card__header">
        <h1 className="beer-card__name">{name}</h1>
        <img src={image} alt={name} className="beer-card__image" />
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
