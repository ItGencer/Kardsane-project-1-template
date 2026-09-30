import './Testimonials.scss';


const testimonials = [
  "Найкраще місце для стрижки в місті. Чітка робота, стильний інтер’єр і завжди приємна атмосфера.",
  "Легко знайшов свій стиль. Майстри уважні до деталей і реально розбираються у формі обличчя.",
  "Професійно, чисто і з характером. Тут не просто стрижуть, а допомагають знайти образ.",
];

function Testimonials() {
    return(


      <section className="section testimonials">
        <div className="container">
          <div className="section-heading">
            <p className="section-tag">Відгуки</p>
            <h2>Ті, хто повертаться знову.</h2>
          </div>
          <div className="cards-grid review-grid">
            {testimonials.map((text, index) => (
              <article key={index} className="review-card">
                <div className="stars">★★★★★</div>
                <p>"{text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Testimonials;