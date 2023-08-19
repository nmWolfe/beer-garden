import "./BeerCard.scss";

const BeerCard = () => {
  return (
    <div className="beer-card">
      <div className="beer-card__header">
        <img src="#" alt="beer image" className="beer-card__image" />
        <h1 className="beer-card__name">Beer Name</h1>
        <h3 className="beer-card__tagline">Beer Tagline</h3>
      </div>
      <div className="beer-card__content">
        <p className="beer-card__description">I am a delicious beer</p>
        <div className="beer-card__content--extended">
          <div className="beer-card__abv">ABV:</div>
          <div className="beer-card__ibu">IBU:</div>
        </div>
      </div>
    </div>
  );
};

export default BeerCard;
