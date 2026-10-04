import SectionTag from "../../SectionTag/SectionTag";
import TestimonialsCard from "../../Card/Testimonials-card/Testimonials-card";
import "./Testimonials.scss";

const testimonials = [
  "Найкраще місце для стрижки в місті. Чітка робота, стильний інтер’єр і завжди приємна атмосфера.",
  "Легко знайшов свій стиль. Майстри уважні до деталей і реально розбираються у формі обличчя.",
  "Професійно, чисто і з характером. Тут не просто стрижуть, а допомагають знайти образ.",
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__heading">
        <SectionTag value="Відгуки" />
        <h2>Ті, хто повертаться знову.</h2>
      </div>
      <div className=" testimonials__grid">
        {testimonials.map((text, index) => (
          <TestimonialsCard key={index} text={text} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
