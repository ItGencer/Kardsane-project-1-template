import './About.scss'

function About(){
return(
     <section id="about" className="section about">
        <div className="container about-grid">
          <div className="about-image-wrap">
            <img src="https://images.unsplash.com/photo-1521590832167-7b5f7d0a0a11?auto=format&fit=crop&w=900&q=80" alt="Barber in studio" />
          </div>
          <div className="about-copy">
            <p className="section-tag">Про студію</p>
            <h2>Краса в деталях. Стиль без компромісів.</h2>
            <p>
              Ми працюємо не просто з волоссям — ми формуємо образ. Кожна стрижка базується на індивідуальному підході, формі обличчя та ритмі життя клієнта.
            </p>
            <p>
              Тут поєднуються класика, актуальні тренди та уважний сервіс. Без зайвого шуму, лише якість і відчуття справжнього барберського досвіду.
            </p>
            <ul className="check-list">
              <li>Індивідуальний підбір стилю</li>
              <li>Косметика преміум-класу</li>
              <li>Комфортна атмосфера та консультація</li>
            </ul>
          </div>
        </div>
      </section>
);
}

export default About;