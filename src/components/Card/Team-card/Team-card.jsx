import "./Team-card.scss";

function TeamCard({ person }) {
  return (
    <article className="card">
      <img src={person.image} alt={person.name} />
      <div className="card__text">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
    </article>
  );
}

export default TeamCard;