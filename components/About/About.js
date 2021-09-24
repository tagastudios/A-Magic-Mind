import React, { Component } from "react";

class AboutContact extends Component {
  render() {
    return (
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about/about1.jpg" alt="image" />
                <img src="/images/about/about2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2>Nuestra Fundadora</h2>
                <p>
                  Maryangelica Torres es Licenciada en Educación, graduada en la
                  Universidad Católica Andrés Bello - Caracas Venezuela. Tiene
                  una especialización en Terapia de Juegos para niños. Maestra
                  de preescolar. Con 26 años de experiencia en crianza y
                  desarrollo del niño, motivada para ayudar a los niños a ser
                  felices y saludables a nivel físico, emocional, cognitiva y
                  psicológicamente. Experta en diseñar actividades académicas
                  que sean atractivas y divertidas para los niños. Entusiasta y
                  talentosa en la enseñanza de artes visuales, música y teatro.
                  Involucra a los niños con actividades diversas y divertidas
                  que incluyen obras de teatro, instrumentos musicales, otros
                  idiomas, manualidades y muchas más actividades de aprendizaje
                  divertidas. Es emprendedora, fue también propietaria y
                  directora de una productiva academia de inglés para niños.
                </p>
                <p>
                  “Mi mejor definición es FAMILIA. Soy maestra, terapeuta y mamá
                  de crianza, trabajo con niños y sus familias por amor a ellos,
                  disfruto al máximo esta aventura por el mundo de los
                  chiquiticos, el cual es un mundo lleno de risas. Yo más que
                  prepararlos para su futuro he aprendido de ellos lecciones de
                  vida, pues los niños son más sabios que los adultos, solo
                  tenemos que aprender a escuchar su idioma.”
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Magic Visión </h3>
                  <p>
                    La visión de A MAGIC MIND es convertirse en un líder
                    reconocido en la complementación de la educación temprana y
                    de apoyo familiar. Ser una marca reconocida y admirada en la
                    industria infantil, gracias a nuestros productos y
                    servicios.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Magic Misión</h3>
                  <p>
                    La misión de A MAGIC MIND es proporcionar a los niños, un
                    desarrollo y preparación personal, académico, social y
                    cultural apropiados para el éxito en el aprendizaje a lo
                    largo de sus vidas. Esta misión es alcanzada a través de la
                    educación de calidad y el apoyo familiar. Nuestro programa
                    provee el puente crucial al éxito en la educación desde que
                    nacen hasta los 7 años de edad.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3>Magic Valores</h3>
                  <p>
                    <ul>
                      <li> Etica </li>
                      <li> Familiaridad </li>
                      <li> Respeto </li>
                      <li> Responsabilidad </li>
                      <li> Honestidad </li>
                      <li> Solidaridad </li>
                      <li> Trabajo en equipo </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    );
  }
}

export default AboutContact;
