import SectionTag from "../../SectionTag/SectionTag";
import "./About.scss";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__image">
        <img
          src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80"
          alt="Barber in studio"
        />
      </div>
      <div className="about__content">
        <SectionTag value="Про студію" />   
        
        <h2>Краса в деталях. Стиль без компромісів.</h2>
        <p className="lead">
          Ми працюємо не просто з волоссям — ми формуємо образ. Кожна стрижка
          базується на індивідуальному підході, формі обличчя та ритмі життя
          клієнта.
        </p>
        <p  className="lead">
          Тут поєднуються класика, актуальні тренди та уважний сервіс. Без
          зайвого шуму, лише якість і відчуття справжнього барберського досвіду.
        </p>
        <ul className="check-list">
          <li>Індивідуальний підбір стилю</li>
          <li>Косметика преміум-класу</li>
          <li>Комфортна атмосфера та консультація</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
