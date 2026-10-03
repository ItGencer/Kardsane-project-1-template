import Button from '../../Button/Button';
import SectionTag from '../../SectionTag/SectionTag';
import './Hero.scss';

function Hero() {
return(

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__grid__content">
            <SectionTag value="Modern barber studio" />
            <h1>Barbering for men with edge.</h1>
            <p className="lead">
              Стиль, точність і атмосфера, де кожна стрижка продумана до дрібниць.
            </p>
            <div className="hero__grid__content__actions">
              <Button value="Book a Cut" className="primary" />
              <Button value="View Portfolio" className="light" />
            </div>
            <div className="stats-row">
              <div>
                <strong>9+</strong>
                <span>Years of craft</span>
              </div>
              <div>
                <strong>3k+</strong>
                <span>Happy clients</span>
              </div>
              <div>
                <strong>4.9</strong>
                <span>Average rating</span>
              </div>
            </div>
          </div>

          <div className="hero__grid__visual">
            <div className="image-card main-image">
              <img src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80" alt="Barber cut" />
            </div>
            <div className="floating-card">
              <span>Best seller</span>
              <strong>Premium Fade</strong>
              <small>Starting at 950 ₴</small>
            </div>
          </div>
        </div>
      </section>
);
}

export default Hero;