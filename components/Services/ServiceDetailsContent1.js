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
              <h3>
                {" "}
                {idioma === "es-ES"
                  ? "Actividades Mágicas para niños"
                  : "Magic Activities for Kids. "}
              </h3>

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
                        src="/images/Iconos/5.png"
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
                      <li>{idioma === "es-ES" ? "Teatro" : "Theather "}</li>
                      <li>
                        {idioma === "es-ES" ? "Yo soy Magia" : "I am Magic"}
                      </li>
                      <ul>
                        <li>
                          {idioma === "es-ES" ? "Mis emociones" : "My fellings"}
                        </li>
                        <li>
                          {idioma === "es-ES" ? "Quien soy?" : "Who am I?"}
                        </li>
                        <li>
                          {idioma === "es-ES"
                            ? "Yo estoy seguro"
                            : "II am safe"}
                        </li>
                        <li>
                          {idioma === "es-ES"
                            ? "Yo puedo hacer amigos"
                            : "I can make friends"}
                        </li>
                      </ul>
                    </ul>
                  </div>
                </a>
                <a className="col-lg-6 col-sm-6 col-md-6">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/Iconos/4.png"
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
                        {idioma === "es-ES" ? "Tareas" : "Homework Pall"}
                      </li>
                      <li>{idioma === "es-ES" ? "Lectura" : "Reading Pall"}</li>
                      <li>{idioma === "es-ES" ? "Matemática" : "Math Pall"}</li>
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
              <h3>
                {" "}
                {idioma === "es-ES"
                  ? "Actividades Mágicas Adicionales"
                  : "Extra Magic Activities "}{" "}
              </h3>
              <div className="row">
                <a className="col-lg-4 col-sm-4 col-md-4">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/Iconos/1.png"
                      />
                    </div>
                    <h3>
                      <a>{idioma === "es-ES" ? "Idiomas" : "Languages"}</a>
                    </h3>
                    <ul className="subcategorias">
                      <li>{idioma === "es-ES" ? "Inglés" : "English"}</li>
                      <li>{idioma === "es-ES" ? "Español" : "Spanish"}</li>
                    </ul>
                  </div>
                </a>
                <a className="col-lg-4 col-sm-4 col-md-4">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/Iconos/2.png"
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
                        src="/images/Iconos/3.png"
                      />
                    </div>
                    <h3>
                      <a>{idioma === "es-ES" ? "Deportes" : "Sports"}</a>
                    </h3>
                    <ul className="subcategorias">
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

        <div className="services-details-overview">
          <div className="services-details-desc mb-30 ">
            <div>
              <h3>
                {" "}
                {idioma === "es-ES"
                  ? "Actividades Mágicas para Padres"
                  : "Magic Activities for Parents. "}
              </h3>

              <p>
                {" "}
                {idioma === "es-ES"
                  ? "Para los momentos es los que necesitas información, para invertir en ti o para un buen café."
                  : "To learn more about about parenting, to invest in yourself or just a cup of coffe. "}
              </p>
              <div className="row">
                <a className="col-lg-8 col-sm-8 col-md-8 offset-md-2 offset-sm-0">
                  <div className="single-main-services-box">
                    <div className="icon-new2">
                      <img
                        className="iconos-actividades"
                        src="/images/Iconos/6.png"
                      />
                    </div>
                    <h3>
                      <a>
                        {" "}
                        {idioma === "es-ES"
                          ? "Club de Padres "
                          : "Parents Club "}
                      </a>
                    </h3>
                    <ul className="subcategorias">
                      <li>
                        {idioma === "es-ES"
                          ? "Charlas (Se anuncian mensualmente) "
                          : "Conferences (Monthly announcement)  "}
                      </li>
                      <li>{idioma === "es-ES" ? "Reuniones" : "Meetings "}</li>
                      <li>{idioma === "es-ES" ? "Yoga" : "Yoga"}</li>
                      <li>Arts & Craft </li>
                      <li>
                        {idioma === "es-ES"
                          ? "Cursos (Se anuncian mensualmente)"
                          : "Workshop (Monthly announcement) "}
                      </li>
                      <li>
                        {idioma === "es-ES"
                          ? "Asesoría Personalizada"
                          : "Private Consulting"}

                        <li>
                          {idioma === "es-ES"
                            ? "Pasar el rato"
                            : "Just Hanging"}
                        </li>
                        <li>
                          {idioma === "es-ES" ? "Tomarme un Break" : "My Time"}
                        </li>
                      </li>
                    </ul>
                  </div>
                </a>
              </div>
              <ul></ul>
            </div>
          </div>

          <div className="services-details-image">
            <img
              src="/images/services-details/service-details3.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsContent;
