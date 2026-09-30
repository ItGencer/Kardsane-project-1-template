import './Team.scss';


const team = [
  {
    name: "Niko",
    role: "Senior Barber",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Alex",
    role: "Beard Artist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Mason",
    role: "Style Specialist",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=700&q=80",
  },
];


function Team() {
    return(


    <section id="team" className="section team">
        <div className="container">
          <div className="section-heading">
            <p className="section-tag">Команда</p>
            <h2>Майстри, які люблять свою справу.</h2>
          </div>
          <div className="cards-grid team-grid">
            {team.map((person) => (
              <article key={person.name} className="info-card team-card">
                <img src={person.image} alt={person.name} />
                <div className="team-text">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Team;