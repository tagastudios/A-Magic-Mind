import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: true,
  animateOut: "fadeOut",
  items: 1,
  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const Testimonials = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);
  return (
    <div className="testimonials-area ptb-110">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros clientes y su experiencia</h2>
          <p>Nos complace su confianza en nosotros</p>
        </div>

        {display ? (
          <OwlCarousel
            className="testimonials-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-testimonials-item">
              <div className="client-info">
                <img src="/images/author3.jpg" alt="image" />
                <h3>Sarah T</h3>
                <span>Madre</span>
              </div>
              <p>
                Las maestras y el personal administrativo es muy profesional y
                atento. A mi hijo le encanta y siempre está emocionado en cada
                lección. Y el nivel de aprendizaje es excelente.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="single-testimonials-item">
              <div className="client-info">
                <img src="/images/author1.jpg" alt="image" />
                <h3>Camila P</h3>
                <span>Madre</span>
              </div>
              <p>
                Mi hija ingresó desde los 2 años. Como madre primeriza sentí
                muchísimo miedo de dejarla tan pequeña con personas que no
                conocía! Hoy después de casi un año puedo compartir con ustedes
                mi sentimiento de felicidad cada vez q veo a mi hija sonriente,
                bajo un conocimiento cuidado y cariño excepcional, recomiendo
                MagicMind con los ojos cerrados, el personal en general es
                increíblemente amoroso con todos los niños!
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="single-testimonials-item">
              <div className="client-info">
                <img src="/images/author2.jpg" alt="image" />
                <h3>James E</h3>
                <span>Padre</span>
              </div>
              <p>
                ¡Gran escuela, por favor! Los profesores son increíbles, todos
                lo son, a mi hija le encanta.
              </p>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>

      {/* Shape Images */}
      <div className="shape-img1">
        <img src="/images/shape/shape1.png" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="shape-img2">
        <img src="/images/shape/shape2.svg" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="/images/shape/shape5.svg" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="/images/shape/shape4.svg" alt="image" />
      </div>
      <div className="dot-shape1">
        <img src="/images/shape/dot1.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot3.png" alt="image" />
      </div>
    </div>
  );
};

export default Testimonials;
