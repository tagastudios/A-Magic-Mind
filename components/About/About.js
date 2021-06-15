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
                <h2>
                  Conectamos con nuestros MagicNiños a través de metodologías
                  inteligentes
                </h2>
                <p>
                  En MagicMind nos estamos replanteando el modo de enseñar a los
                  niños pequeños a aprovechar su enorme potencial de
                  aprendizaje. El juego constituye una de las formas más
                  importantes en las que los niños pequeños obtienen
                  conocimientos y competencias esenciales. Por esta razón, las
                  oportunidades de juego y los entornos que favorecen el juego,
                  la exploración y el aprendizaje práctico constituyen el
                  fundamento de los programas de educación eficaces.
                </p>
                <p>
                  Un aspecto importante del juego es la capacidad de acción de
                  los niños y su control de la experiencia. Por capacidad de
                  acción se entiende la iniciativa de los niños, su proceso de
                  toma de decisiones y su nivel de decisión propia en el juego.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Nuestra Fundadora</h3>
                  <p>
                    Maryangelica Torres es Licenciada en Educación, graduada en
                    la Universidad Católica Andrés Bello - Caracas Venezuela.
                    Tiene una especialización en Terapia de Juegos para niños.
                    Maestra de preescolar. Con 26 años de experiencia en crianza
                    y desarrollo del niño, motivada para ayudar a los niños a
                    ser felices y saludables a nivel físico, emocional,
                    cognitiva y psicológicamente.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Nuestra Misión</h3>
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
                  <h3>Visión</h3>
                  <p>
                    La visión de A MAGIC MIND es convertirse en un líder
                    reconocido en la complementación de la educación temprana y
                    de apoyo familiar. Ser una marca reconocida y admirada en la
                    industria infantil, gracias a nuestros productos y
                    servicios.
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
