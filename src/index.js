import "./styles.scss";


const testimonials = [
  "Найкраще місце для стрижки в місті. Чітка робота, стильний інтер’єр і завжди приємна атмосфера.",
  "Легко знайшов свій стиль. Майстри уважні до деталей і реально розбираються у формі обличчя.",
  "Професійно, чисто і з характером. Тут не просто стрижуть, а допомагають знайти образ.",
];

const app = document.getElementById("app");

app.innerHTML = `
  <div class="page-shell">
   

    <main>


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
