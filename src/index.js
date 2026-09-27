import './styles.scss';

const services = [
  {
    title: 'Classic Cut',
    price: 'from 800 ₴',
    desc: 'Класична стрижка з точним контуром і розглядом форми обличчя.',
  },
  {
    title: 'Beard Design',
    price: 'from 600 ₴',
    desc: 'Формування бороди, лінії та догляд для текстури та обсягу.',
  },
  {
    title: 'Premium Grooming',
    price: 'from 1200 ₴',
    desc: 'Розширений сервіс зі стрижкою, вищим доглядом і стилюванням.',
  },
  {
    title: 'Kids Cut',
    price: 'from 550 ₴',
    desc: 'Невимушена зачіска для хлопчиків із уважним підходом до віку.',
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1521590832167-7b5f7d0a0a11?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
];

const team = [
  {
    name: 'Niko',
    role: 'Senior Barber',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Alex',
    role: 'Beard Artist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Mason',
    role: 'Style Specialist',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=700&q=80',
  },
];

const testimonials = [
  'Найкраще місце для стрижки в місті. Чітка робота, стильний інтер’єр і завжди приємна атмосфера.',
  'Легко знайшов свій стиль. Майстри уважні до деталей і реально розбираються у формі обличчя.',
  'Професійно, чисто і з характером. Тут не просто стрижуть, а допомагають знайти образ.',
];

const app = document.getElementById('app');

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <div class="container nav">
        <div class="brand">
          <span class="brand-mark">H</span>
          <span class="brand-name">Handsome</span>
        </div>
        <nav class="nav-links">
          <a href="#about">Про нас</a>
          <a href="#services">Послуги</a>
          <a href="#gallery">Роботи</a>
          <a href="#team">Команда</a>
          <a href="#contact">Контакти</a>
        </nav>
        <button class="btn btn-primary">Записатись</button>
      </div>
    </header>

    <main>
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

      <section id="about" class="section about">
        <div class="container about-grid">
          <div class="about-image-wrap">
            <img src="https://images.unsplash.com/photo-1521590832167-7b5f7d0a0a11?auto=format&fit=crop&w=900&q=80" alt="Barber in studio" />
          </div>
          <div class="about-copy">
            <p class="section-tag">Про студію</p>
            <h2>Краса в деталях. Стиль без компромісів.</h2>
            <p>
              Ми працюємо не просто з волоссям — ми формуємо образ. Кожна стрижка базується на індивідуальному підході, формі обличчя та ритмі життя клієнта.
            </p>
            <p>
              Тут поєднуються класика, актуальні тренди та уважний сервіс. Без зайвого шуму, лише якість і відчуття справжнього барберського досвіду.
            </p>
            <ul class="check-list">
              <li>Індивідуальний підбір стилю</li>
              <li>Косметика преміум-класу</li>
              <li>Комфортна атмосфера та консультація</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" class="section services">
        <div class="container">
          <div class="section-heading">
            <p class="section-tag">Послуги</p>
            <h2>Твоє обличчя в надійних руках.</h2>
          </div>
          <div class="cards-grid services-grid">
            ${services
              .map(
                (item) => `
                  <article class="info-card service-card">
                    <div class="card-topline"></div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                    <div class="service-meta">
                      <span>${item.price}</span>
                      <button>Get details</button>
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="section showcase">
        <div class="container">
          <div class="section-heading">
            <p class="section-tag">Portfolio</p>
            <h2>Наші роботи в дії.</h2>
          </div>
          <div id="gallery" class="gallery-grid">
            ${gallery
              .map(
                (image) => `
                  <figure class="gallery-item">
                    <img src="${image}" alt="Barber result" />
                  </figure>
                `
              )
              .join('')}
          </div>
        </div>
      </section>

      <section id="team" class="section team">
        <div class="container">
          <div class="section-heading">
            <p class="section-tag">Команда</p>
            <h2>Майстри, які люблять свою справу.</h2>
          </div>
          <div class="cards-grid team-grid">
            ${team
              .map(
                (person) => `
                  <article class="info-card team-card">
                    <img src="${person.image}" alt="${person.name}" />
                    <div class="team-text">
                      <h3>${person.name}</h3>
                      <p>${person.role}</p>
                    </div>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </section>

      <section class="section testimonials">
        <div class="container">
          <div class="section-heading">
            <p class="section-tag">Відгуки</p>
            <h2>Ті, хто повертаться знову.</h2>
          </div>
          <div class="cards-grid review-grid">
            ${testimonials
              .map(
                (text) => `
                  <article class="review-card">
                    <div class="stars">★★★★★</div>
                    <p>“${text}”</p>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      </section>

      <section id="contact" class="section cta-block">
        <div class="container cta-wrap">
          <div>
            <p class="section-tag">Запис</p>
            <h2>Готовий знову відчути впевненість у своєму образі?</h2>
          </div>
          <button class="btn btn-primary large">Забронювати</button>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <div class="brand footer-brand">
          <span class="brand-mark">H</span>
          <span class="brand-name">Handsome</span>
        </div>
        <p>© <span id="year"></span> Barbi Shop</p>
        <div class="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
          <a href="#">Location</a>
        </div>
      </div>
    </footer>
  </div>
`;

document.getElementById('year').textContent = new Date().getFullYear();
