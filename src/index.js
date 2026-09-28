import "./styles.scss";


const gallery = [
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521590832167-7b5f7d0a0a11?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
];

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

const testimonials = [
  "Найкраще місце для стрижки в місті. Чітка робота, стильний інтер’єр і завжди приємна атмосфера.",
  "Легко знайшов свій стиль. Майстри уважні до деталей і реально розбираються у формі обличчя.",
  "Професійно, чисто і з характером. Тут не просто стрижуть, а допомагають знайти образ.",
];

const app = document.getElementById("app");

app.innerHTML = `
  <div class="page-shell">
   

    <main>

     

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
                `,
              )
              .join("")}
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
                `,
              )
              .join("")}
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
                `,
              )
              .join("")}
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

  </div>
`;

document.getElementById("year").textContent = new Date().getFullYear();
