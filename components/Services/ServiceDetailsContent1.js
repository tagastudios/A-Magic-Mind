import React from "react";
import { useRouter } from "next/router";
function ServiceDetailsContent() {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  return (
    <div className="services-details-area ptb-110">
      <div className="container">
        <div className="services-details-overview">
          <div className="services-details-desc mb-30">
            <div>
              <h3>Magic Activities</h3>

              <p>
                {" "}
                {idioma === "es-ES"
                  ? "Para nuestras mentes mágicas tenemos una variedad de actividades extracurriculares."
                  : "For our magical minds we have a variety of extracurricular activities. "}
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
                      <a>{idioma === "es-ES" ? "Arte" : "Art "}</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>{idioma === "es-ES" ? "Pintura" : "Painting "}</li>
                      <li>
                        {idioma === "es-ES"
                          ? "Historia del Arte"
                          : "History of art"}
                      </li>
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
                      <a>
                        {idioma === "es-ES"
                          ? "Reforzamiento escolar"
                          : "School reinforcement"}
                      </a>
                    </h3>
                    <ul className="subcategorias">
                      <li>
                        {" "}
                        {idioma === "es-ES" ? "Literatura" : "Literature"}
                      </li>
                      <li>{idioma === "es-ES" ? "Matemática" : "Math"}</li>
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
                      <a>{idioma === "es-ES" ? "Idiomas" : "Languages"}</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>{idioma === "es-ES" ? "Inglés" : "English"}</li>
                      <li>{idioma === "es-ES" ? "Francés" : "French"}</li>
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
                      <a>{idioma === "es-ES" ? "Música" : "Music"}</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>
                        {idioma === "es-ES"
                          ? "Introducción a la Música"
                          : "Music Introduction"}
                      </li>
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
                      <a>{idioma === "es-ES" ? "Deportes" : "Sports"}</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>{idioma === "es-ES" ? "Natación" : "Swimming"}</li>
                      <li>{idioma === "es-ES" ? "Gimnasia" : "Gymnastics"}</li>
                      <li>
                        {idioma === "es-ES"
                          ? "Artes Marciales"
                          : "Martial Arts"}{" "}
                      </li>
                      <li>{idioma === "es-ES" ? "Yoga" : "Yoga"} </li>
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
