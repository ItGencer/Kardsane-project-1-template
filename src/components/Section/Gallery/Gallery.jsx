import "./Gallery.scss";

const gallery = [
  "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521590832167-7b5f7d0a0a11?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
];

function Gallery() {
  return (
    <section className="section showcase">
      <div className="container">
        <div className="section-heading">
          <p className="section-tag">Portfolio</p>
          <h2>Наші роботи в дії.</h2>
        </div>
        <div id="gallery" className="gallery-grid">
          {gallery.map((image, index) => (
            <figure key={index} className="gallery-item">
              <img src={image} alt="Barber result" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
