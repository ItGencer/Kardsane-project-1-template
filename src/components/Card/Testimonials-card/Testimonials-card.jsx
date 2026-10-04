import "./Testimonials-card.scss";

function TestimonialsCard({ text, index }) {
  return (
    <article key={index} className="card">
            <div className="stars">★★★★★</div>
            <p>"{text}”</p>
          </article>
  );
}

export default TestimonialsCard;