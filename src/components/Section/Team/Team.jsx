import SectionTag from "../../SectionTag/SectionTag";
import TeamCard from "../../Team-card/Team-card";
import "./Team.scss";

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
  return (
    <section id="team" className="team">
      <div className="team__heading">
        <SectionTag value="Команда" />
        <h2>Майстри, які люблять свою справу.</h2>
      </div>
      <div className="team__grid">
        {team.map((person) => (
          <TeamCard key={person.name} person={person} />
        ))}
      </div>
    </section>
  );
}

export default Team;
