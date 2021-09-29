import React from "react";

function ServiceDetailsContent() {
  return (
    <div className="services-details-area ptb-110">
      <div className="container">
        <div className="services-details-overview">
          <div className="services-details-desc mb-30">
            <h3>Tenemos para ti un Centro de actividades extracurriculares</h3>
            <p>
              Todas nuestras actividades extracurriculares son llevadas a cabo
              por nuestros PLAYPALS, quienes son personas calificadas que van a
              jugar, estimular y enseñar a su hijo de manera lúdica en la
              comodidad de su hogar. No son nannies , ni babysitters, son
              compañeros de juego. Ofrecemos planes personalizados, con las
              características de una membresía, 100% flexibles y adaptables a
              las necesidades tanto del niño como de los padres.
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
          <div className="services-details-image mb-30">
            <img
              src="/images/services-details/service-details2.jpg"
              alt="image"
            />
          </div>

          <div className="services-details-desc lista-actividades">
            <div>
              <h3>Magic Activities</h3>
              <p>MagicNiños</p>
              <ul>
                <li>
                  Arte
                  <img
                    className="iconos-actividades"
                    src="/images/iconos/5.png"
                  />
                  <ul className="subcategorias">
                    <li>Pintura</li>
                    <li>Historia del Arte</li>
                    <li>Arts & Craft </li>
                  </ul>
                </li>

                <li>
                  Reforzamiento escolar
                  <img
                    className="iconos-actividades"
                    src="/images/iconos/4.png"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h3> Extra Magic Activities </h3>
              <ul>
                <li>
                  Idiomas
                  <img
                    className="iconos-actividades"
                    src="/images/iconos/1.png"
                  />
                  <ul className="subcategorias">
                    <li>Inglés</li>
                    <li> Francés</li>
                  </ul>
                </li>
                <li>
                  Musica
                  <img
                    className="iconos-actividades"
                    src="/images/iconos/2.png"
                  />
                  <ul className="subcategorias">
                    <li>Introducción a la Música</li>
                  </ul>
                </li>
                <li>
                  Deportes
                  <img
                    className="iconos-actividades"
                    src="/images/iconos/3.png"
                  />
                  <ul className="subcategorias">
                    <li>Natación</li>
                    <li> Gimnasia</li>
                    <li> Artes Marciales</li>
                    <li> Yoga</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsContent;
