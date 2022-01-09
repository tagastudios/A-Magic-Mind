import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const WhyChooseUs = () => {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
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
              <h2>
                {idioma === "es-ES"
                  ? "Por qúe A Magic Mind?"
                  : "Why A Magic Mind?"}
              </h2>

              <ul style={{ textAlign: "left" }}>
                <li>
                  {idioma === "es-ES"
                    ? "Porque quieres lo mejor para tus hijos."
                    : "Because you want the best for your children."}
                </li>
                <li>
                  {idioma === "es-ES"
                    ? "Porque quieres que tus hijos sepan que el aprendizaje puede ser divertido."
                    : "Because you want your children to know that learning can be fun."}
                </li>
                <li>
                  {idioma === "es-ES"
                    ? "Por su salud mental, emocional y física"
                    : "For your mental, emotional and physical health."}
                </li>
                <li>
                  {idioma === "es-ES"
                    ? "Porque quieres que tengan riqueza cultural."
                    : "Because you want them to have a cultural richness."}
                </li>
              </ul>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>
                      {idioma === "es-ES"
                        ? "Somos tu aliado en la formación de tus hijos"
                        : "We are your ally in the training of your children"}
                    </h3>
                    <p>
                      {idioma === "es-ES"
                        ? "Como Padres siempre vamos a escoger la mejor opción para ellos, mucho más cuando se trata de su educación, esa que va a determinar lo que serán como adultos del mañana."
                        : "As Parents we will always choose the best option for them, much more when it comes to their education, that which it will determine what they will be like adults of tomorrow."}
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>
                      {idioma === "es-ES"
                        ? "Los niños juegan como viven y jugando aprenden a vivir"
                        : "Children play as they live and by playing they learn to live"}
                    </h3>
                    <p>
                      {idioma === "es-ES"
                        ? "En una experiencia basada en juegos está ocurriendo un aprendizaje más profundo de lo que pasaría en una lección tradicional de instrucción directa en la que el profesor simplemente explica algo a los alumnos"
                        : "Children play as they live and by playing they learn to In a game-based experience a deeper learning of what would happen in a lesson traditional direct instruction in which the teacher just explain something to the students"}
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>
                      {idioma === "es-ES"
                        ? "Tenemos el conocimiento, la confianza y la seguridad que tus niños necesitan"
                        : "We have the knowledge, confidence and security that your children need"}
                    </h3>
                    <p>
                      {idioma === "es-ES"
                        ? "En MagicMind entendemos la importancia de la salud mental, emocional y física de los niños y trabajamos para que el acompañamiento en el aprendizaje sea provechoso y positivo."
                        : "At MagicMind we understand the importance of the mental, emotional and physical health of children and we work so that the accompaniment in learning is beneficial and positive."}
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="single-why-choose-us-box">
                    <h3>
                      {idioma === "es-ES"
                        ? "La educación es más amplia de lo que crees"
                        : "Education is broader than you think"}
                    </h3>
                    <p>
                      {" "}
                      {idioma === "es-ES"
                        ? "Diversos estudios revelan que la primera infancia es un tiempo biológico que condiciona al niño para el resto de su vida. Es el momento en el que el cerebro sienta las bases de su complejo funcionamiento."
                        : "Various studies reveal that early childhood is a biological time that conditions the child for the rest of his life. It is the moment in which the brain lays the foundations of its complex functioning."}
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/about-us">
                <a className="btn btn-primary">
                  {idioma === "es-ES" ? "Leer más.." : "Read more.."}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
