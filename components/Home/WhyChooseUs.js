import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 glue-bottom">
            <div className="why-choose-us-image text-center glue-bottom">
              <img
                src="/images/team-smile.png"
                alt="image"
                className="maryan-img"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 py-5 mb-5">
            <div className="why-choose-us-content">
              <h2>Por qúe A Magic Mind?</h2>
              <p>
                <ul>
                  <li>Porque quieres lo mejor para tus hijos.</li>
                  <li>
                    Porque quieres que tus hijos sepan que el aprendizaje puede
                    ser divertido.
                  </li>
                  <li>Por su salud mental, emocional y física.</li>
                  <li>Porque quieres que tengan riqueza cultural.</li>
                </ul>
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>Somos tu aliado en la formación de tus hijos</h3>
                    <p>
                      Como Padres siempre vamos a escoger la mejor opción para
                      ellos, mucho más cuando se trata de su educación, esa que
                      va a determinar lo que serán como adultos del mañana.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>
                      Los niños juegan como viven y jugando aprenden a vivir
                    </h3>
                    <p>
                      En una experiencia basada en juegos está ocurriendo un
                      aprendizaje más profundo de lo que pasaría en una lección
                      tradicional de instrucción directa en la que el profesor
                      simplemente explica algo a los alumnos
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>
                      Tenemos el conocimiento, la confianza y la seguridad que
                      tus niños necesitan
                    </h3>
                    <p>
                      En MagicMind entendemos la importancia de la salud mental,
                      emocional y física de los niños y trabajamos para que el
                      acompañamiento en el aprendizaje sea provechoso y
                      positivo.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>La educación es más amplia de lo que crees</h3>
                    <p>
                      Diversos estudios revelan que la primera infancia es un
                      tiempo biológico que condiciona al niño para el resto de
                      su vida. Es el momento en el que el cerebro sienta las
                      bases de su complejo funcionamiento.
                    </p>
                  </div>
                </div>
              </div>

              <Link href="about-us/">
                <a className="btn btn-primary">Leer más..</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
