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
                En la gran aventura de la educación el papel de los educadores
                es muy importante y solo le supera el de su entorno familiar. Es
                fundamental que los niños y niñas se sientan protegidos y
                valorados para que el proceso educativo, tanto curricular como
                emocional, sea efectivo y se convierta en verdadero motor de
                desarrollo para construir sociedades más justas y equitativas.
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>Somos tu aliado en la formación de tus hijos</h3>
                    <p>
                      Como Padres siempre vamos a escoger la mejor opción para
                      nuestros hijos, mucho mas cuando se trata de su educación
                      infantil, esa que va a determinar cómo serán los adultos
                      del mañana.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>
                      Los niños juegan como viven y jugando aprender a vivir
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
                      acompañamiento en el aprendizaje sea provechosos y
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

              <Link href="/#">
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
