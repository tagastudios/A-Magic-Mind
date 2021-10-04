import React from "react";

function ServiceDetailsContent() {
  return (
    <div className="services-details-area ptb-110">
      <div className="container">
        <div className="services-details-overview">
          <div className="services-details-desc mb-30">
            <div>
              <h3>Magic Activities</h3>

              <p>
                Para nuestras mentes mágicas tenemos una variedad de actividades
                extracurriculares.
              </p>
              <div className="row">
                <a className="col-lg-6 col-sm-6 col-md-6">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/iconos/5.png"
                      />
                    </div>
                    <h3>
                      <a>Arte</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>Pintura</li>
                      <li>Historia del Arte</li>
                      <li>Arts & Craft </li>
                    </ul>
                  </div>
                </a>
                <a className="col-lg-6 col-sm-6 col-md-6">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/iconos/4.png"
                      />
                    </div>
                    <h3>
                      <a>Reforzamiento escolar</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>Literatura</li>
                      <li>Matemática</li>
                    </ul>
                  </div>
                </a>
              </div>
              <ul></ul>
            </div>
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
              <h3> Extra Magic Activities </h3>
              <div className="row">
                <a className="col-lg-4 col-sm-4 col-md-4">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/iconos/1.png"
                      />
                    </div>
                    <h3>
                      <a>Idiomas</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>Inglés</li>
                      <li>Francés</li>
                    </ul>
                  </div>
                </a>
                <a className="col-lg-4 col-sm-4 col-md-4">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/iconos/2.png"
                      />
                    </div>
                    <h3>
                      <a>Música</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>Introducción a la Música</li>
                    </ul>
                  </div>
                </a>
                <a className="col-lg-4 col-sm-4 col-md-4">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/iconos/3.png"
                      />
                    </div>
                    <h3>
                      <a>Deportes</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>Natación</li>
                      <li>Gimnasia</li>
                      <li>Artes Marciales </li>
                      <li>Yoga </li>
                    </ul>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsContent;
