import ServiceCard from "../../Card/Service-card/Service-card";
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
    <section id="services" className="services">
        <div className="services__heading">
          <p className="section-tag">Послуги</p>
          <h2>Твоє обличчя в надійних руках.</h2>
        </div>
        <div className="cards-grid services__grid">
          {services
            .map(({ id, title, price, desc }) => (
              <ServiceCard
                key={id}
                title={title}
                price={price}
                description={desc}
              />
            ))}
        </div>
    </section>
  );
}

export default Service;
