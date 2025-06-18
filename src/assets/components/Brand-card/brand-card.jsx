import "./brand-card.css";

function BrandCard({ name, image, description }) {
  return (
    <div className="brand-card">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BrandCard;
