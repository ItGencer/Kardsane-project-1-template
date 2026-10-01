import "./Service.scss";

const services = [
  {
    id: 1,
    title: "Classic Cut",
    price: "from 800 ₴",
    desc: "Класична стрижка з точним контуром і розглядом форми обличчя.",
  },
  {
    id: 2,
    title: "Beard Design",
    price: "from 600 ₴",
    desc: "Формування бороди, лінії та догляд для текстури та обсягу.",
  },
  {
    id: 3,
    title: "Premium Grooming",
    price: "from 1200 ₴",
    desc: "Розширений сервіс зі стрижкою, вищим доглядом і стилюванням.",
  },
  {
    id: 4,
    title: "Kids Cut",
    price: "from 550 ₴",
    desc: "Невимушена зачіска для хлопчиків із уважним підходом до віку.",
  },
];

function Service() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Послуги</p>
          <h2>Твоє обличчя в надійних руках.</h2>
        </div>
        <div className="cards-grid services-grid">
          {services
            .map(({ id, title, price, desc }) => (
              <article className="info-card service-card" key={id}>
                <div className="card-topline"></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="service-meta">
                  <span>{price}</span>
                  <button>Get details</button>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
