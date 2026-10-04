import './Service-card.scss';

function ServiceCard({ title, price, description }) {
  return (
    <article className="service-card card">
      <div className="service-card__topline"></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-card__meta">
        <span>{price}</span>
        <button>Get details</button>
      </div>
    </article>
  );
}

export default ServiceCard;