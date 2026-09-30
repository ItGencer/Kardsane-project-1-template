import "./styles.scss";



const app = document.getElementById("app");

app.innerHTML = `
  <div class="page-shell">
   

    <main>


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
