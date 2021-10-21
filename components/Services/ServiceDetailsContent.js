import React from "react";
import Projects from "../Home/Projects";
function ServiceDetailsContent() {
  return (
    <div className="services-details-area ptb-110">
      <div className="container">
        <div className="services-details-overview">
          <div className="services-details-desc mb-30">
            <h3>Playpals</h3>
            <p>
              Todas nuestras actividades extracurriculares son llevadas a cabo
              por nuestros PLAYPALS, quienes son personas calificadas que van a
              jugar, estimular y enseñar a su hijo de manera lúdica en la
              comodidad de su hogar. No son nannies, ni babysitters, son
              compañeros de juego.
            </p>
          </div>

          <div className="services-details-image">
            <img
              src="/images/services-details/service-details1.jpg"
              alt="image"
            />
          </div>
        </div>

        <div className="services-details-overview">
          <div className="services-details-image mb-30"></div>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsContent;
