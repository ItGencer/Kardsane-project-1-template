import './Hero.scss';

function Hero() {
return(

      <section class="hero">
        <div class="container hero-grid">
          <div class="hero-copy">
            <p class="eyebrow">Modern barber studio</p>
            <h1>Barbering for men with edge.</h1>
            <p class="lead">
              Стиль, точність і атмосфера, де кожна стрижка продумана до дрібниць.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary">Book a Cut</button>
              <button class="btn btn-light">View Portfolio</button>
            </div>
            <div class="stats-row">
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

          <div class="hero-visual">
            <div class="image-card main-image">
              <img src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1200&q=80" alt="Barber cut" />
            </div>
            <div class="floating-card">
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