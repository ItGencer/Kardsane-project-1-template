import "./Gallery.scss";
import SectionTag from "../../SectionTag/SectionTag";

const gallery = [
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
        <div className="gallery__heading">
          <SectionTag value="Портфоліо" />
          <h2>Наші роботи в дії.</h2>
        </div>
        <div className="gallery__grid">
          {gallery.map((image, index) => (
            <figure key={index} className="gallery__grid__item">
              <img src={image} alt="Barber result" />
            </figure>
          ))}
        </div>
    </section>
  );
}

export default Gallery;
