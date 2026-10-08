import './Form-contact.scss';

function FormContact() {
  return (
    <div className="form-contacts">
      <div className="form-contacts__list">
        <div className="form-contacts__list__item">
          <span className="form-contacts__list__item__icon">⌖</span>
          <div>
            <p>Адреса</p>
            <strong>вул. Груша 18, Львів</strong>
          </div>
        </div>

        <div className="form-contacts__list__item contact-item">
          <span className="contact-item__icon">☎</span>
          <div>
            <p>Телефон</p>
            <strong>+38 (077) 777 77 77</strong>
          </div>
        </div>

        <div className="form-contacts__list__item contact-item">
          <span className="contact-item__icon">✉</span>
          <div>
            <p>Email</p>
            <strong>hel@studio-bel.ua</strong>
          </div>
        </div>

        <div className="form-contacts__list__item contact-item">
          <span className="contact-item__icon">◔</span>
          <div>
            <p>Графік</p>
            <strong>Пн-Нд: 9:00–20:00</strong>
          </div>
        </div>
      </div>

      <div className="form-contacts__map" aria-label="Карта локації">
        <span className="map-label map-label--one">Lviv</span>
        <span className="map-label map-label--two">Center</span>
        <span className="map-pin" />
      </div>
    </div>
  );
}

export default FormContact;
