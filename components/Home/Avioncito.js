import React, { useState } from "react";
import { useRouter } from "next/router";

const Avioncito = () => {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  const [data, setData] = useState([
    {
      titulo: "Beneficios del Juego",
      texto1:
        "Proporciona mayor desarrollo sensorial (sentido - percepción) y aumenta la motricidad fina y gruesa.",
      texto2:
        "Estimula la memoria, atención, cognición y procesamiento lógico e imaginación.",
      texto3: "Facilita la comunicación, expresión, socialización.",
      clase: "texto-rojo",
      foto: "/images/avioncito/16.svg",
    },
    {
      titulo: "Escuchar",
      texto1: "Nos aseguramos de captar la atención de nuestros niños.",
      texto2: "Les impartimos las instrucciones.",
      texto3: "Y los invitamos a jugar.",
      clase: "texto-naranja",
      foto: "/images/avioncito/17.svg",
    },
    {
      titulo: "Entender",
      texto1:
        "Nos aseguramos que las instrucciones sean comprendidas por nuestros peques.",
      texto2: "Con ejemplos cotidianos y familiares para ellos.",
      texto3:
        "Que los hagan comprender cada una de las indicaciones que se les da.",
      clase: "texto-verde",
      foto: "/images/avioncito/18.svg",
    },
    {
      titulo: "Hacer",
      texto1: "Manos a la obra!",
      texto2: "Hacer para aprender.",
      texto3: "Las metas se alcanzan con acciones.",
      clase: "texto-azul",
      foto: "/images/avioncito/19.svg",
    },
    {
      titulo: "Vivir",
      texto1:
        "Apoyamos y acompañamos a nuestros peques a seguirlo intentando con alegrias y frustraciones hasta que lo logren.",
      texto2:
        "Les mostramos a nuestros peques que con esfuerzo y dedicación pueden lograr sus objetivos.",
      clase: "texto-morado",
      foto: "/images/avioncito/20.svg",
    },
    {
      titulo: "Aprender",
      texto1: "Celebramos con ellos sus logros.",
      texto2: "Celebramos su esfuerzo y dedicación.",
      clase: "texto-amarillo",
      foto: "/images/avioncito/21.svg",
    },
  ]);

  const [dataenglish, setDataenglish] = useState([
    {
      titulo: "Benefits of the Game",
      texto1:
        "Provides greater sensory development (sense - perception) and increases fine and gross motor skills.",
      texto2:
        "Stimulates memory, attention, cognition and logical processing and imagination.",
      texto3: "Facilitates communication, expression, socialization.",
      clase: "texto-rojo",
      foto: "/images/avioncito/16.svg",
    },
    {
      titulo: "Listen",
      texto1: "We make sure we capture the child attention.",
      texto2: "We give them the instructions and we invite them to play.",
      clase: "texto-naranja",
      foto: "/images/avioncito/17.svg",
    },
    {
      titulo: "Understand",
      texto1:
        "We make sure that the instructions are understood by our little ones.",
      texto2: "With everyday examples.",
      texto3:
        "This will ensure that each indication given to them is understood.",
      clase: "texto-verde",
      foto: "/images/avioncito/18.svg",
    },
    {
      titulo: "Do",
      texto1: "Let’s do it!",
      texto2: "Do it to learn.",
      texto3: "Goals are achieved with actions.",
      clase: "texto-azul",
      foto: "/images/avioncito/19.svg",
    },
    {
      titulo: "Live",
      texto1:
        "We support our little ones in their frustration and joys and we encourage them to keep trying until they succeed.",
      clase: "texto-morado",
      foto: "/images/avioncito/20.svg",
    },
    {
      titulo: "Learn",
      texto1: "We celebrate their efforts and achievements together.",
      clase: "texto-amarillo",
      foto: "/images/avioncito/21.svg",
    },
  ]);

  const [play, setPlay] = useState(false);
  const [active, setActive] = useState("");

  const stickers = [];
  for (let i = 0; i < 6; i++) {
    stickers.push(
      <a
        href="#path"
        className={`grid-item item${i}`}
        key={i}
        onClick={
          idioma === "es-ES"
            ? () => {
                if (active.titulo === data[i].titulo && play) {
                  setPlay(false);
                } else setPlay(true);
                setActive(data[i]);
              }
            : () => {
                if (active.titulo === dataenglish[i].titulo && play) {
                  setPlay(false);
                } else setPlay(true);
                setActive(dataenglish[i]);
              }
        }
      >
        {i}
      </a>
    );
  }
  return (
    <section id="path" className="avioncito-center">
      <div className="avioncito-left">
        <img
          className="avioncito-kids1 floating"
          src="/images/avioncito/kids1.svg"
          style={{
            top: "0",
            left: "0",
            animationDelay: "0.5s",
            duration: "8s",
          }}
        ></img>
        <img
          className="avioncito-kids2 floating"
          src="/images/avioncito/kids2.svg"
          style={{
            bottom: "0",
            right: "0",
            animationDelay: "1s",
            duration: "4s",
          }}
        ></img>
        <img
          className="avioncito-kids3 floating"
          src="/images/avioncito/kids3.svg"
          style={{
            animationDelay: "1.5s",
            duration: "16s",
          }}
        ></img>
        <img
          className="avioncito-kids4 floating"
          src="/images/avioncito/kids4.svg"
          style={{
            bottom: "0",
            left: "0",
            animationDelay: "1.5s",
            duration: "12s",
          }}
        ></img>
        <img
          className="avioncito-kids5 floating"
          src="/images/avioncito/kids5.svg"
          style={{
            top: "0",
            right: "0",
            animationDelay: "2s",
            duration: "10s",
          }}
        ></img>
      </div>
      <div className="grid-container">{stickers}</div>
      {play ? (
        <div
          className={`avioncito-right ${play ? "avioncito-right-items" : ""}`}
        >
          <h2 className={`${active.clase} texto-avioncito `}>
            {active.titulo}
          </h2>
          <div className="flex flex-column m-0">
            <p className={` texto-parrafo-avioncito`}>{active.texto1}</p>
            <p className={` texto-parrafo-avioncito`}>{active.texto2}</p>
            <p className={` texto-parrafo-avioncito`}>{active.texto3}</p>
          </div>
          <img className="avioncito-foto" src={active.foto} />
        </div>
      ) : (
        <div className="avioncito-right">
          <h2>
            {" "}
            {idioma === "es-ES"
              ? "Cómo enseñamos en Magic Mind?"
              : "How do we teach at Magic Mind?"}{" "}
          </h2>
          <h3>
            {idioma === "es-ES"
              ? "Para conocer nuestro Magic Método, Vamos a jugar el avioncito"
              : "To know our Magic Method, let's play Hopscotch"}
          </h3>
          <p className="parrafo-avioncito-0">
            {" "}
            {idioma === "es-ES"
              ? "Te mostramos nuestra estrategia en 5 pasos!"
              : "We show you our strategy in 5 steps!"}
          </p>
          <img src="/images/avioncito/kids6.svg"></img>
        </div>
      )}
    </section>
  );
};
//
export default Avioncito;
