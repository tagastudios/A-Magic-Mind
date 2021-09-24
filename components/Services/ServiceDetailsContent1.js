import React from "react";
import PricingPlan from "../Home/PricingPlan";

function ServiceDetailsContent() {
  return (
    <div className="services-details-area ptb-110">
      <div className="container">
        <div className="services-details-overview">
          <div className="services-details-desc mb-30">
            <h3>Servicios personalizados</h3>
            <p>
              Todas nuestras actividades extracurriculares son llevadas a cabo
              por nuestros PLAYPALS. PlayPals son personas calificadas que van a
              jugar, estimular y enseñar a su hijo de manera lúdica en la
              comodidad de su hogar. No son nannies , ni babysitters, son
              compañeros de juego. Ofrecemos planes personalizados, con las
              características de una membresía, 100% flexibles y adaptables a
              las necesidades tanto del niño como de los padres. Con horarios
              flexibles, donde cada familia puede crear su propio plan a su
              conveniencia.
            </p>

            <p>Tenemos para ti un Centro de actividades extracurriculares</p>
          </div>

          <div className="services-details-image">
            <img
              src="/images/services-details/service-details1.jpg"
              alt="image"
            />
          </div>
        </div>

        <div className="services-details-overview">
          <div className="services-details-image mb-30">
            <img
              src="/images/services-details/service-details2.jpg"
              alt="image"
            />
          </div>

          <div className="services-details-desc">
            <h3>Actividades</h3>
            <p>MagicNiños</p>

            <ul>
              <li>Idiomas: Ingles - Francés - Español</li>
              <li>Musica: Introducción a la Música</li>
              <li>Arte: Pintura - Arts & Craft - Historia del Arte</li>
              <li>Deportes: Natación - Gimnasia - Artes Marciales - Yoga</li>
              <li> Reforzamiento escolar</li>
            </ul>
          </div>
        </div>
      </div>
      <PricingPlan />
    </div>
  );
}

export default ServiceDetailsContent;
