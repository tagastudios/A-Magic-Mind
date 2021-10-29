import React, { useState } from "react";

const Avioncito = () => {
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

  const [play, setPlay] = useState(false);
  const [active, setActive] = useState("");

  const stickers = [];
  for (let i = 0; i < 6; i++) {
    stickers.push(
      <a
        href="#path"
        className={`grid-item item${i}`}
        onClick={() => {
          if (active.titulo === data[i].titulo && play) {
            setPlay(false);
          } else setPlay(true);
          setActive(data[i]);
        }}
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
      <div class="grid-container">{stickers}</div>
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
          <h2> Cómo enseñamos en Magic Mind? </h2>
          <h3>Para conocer nuestro Magic Método, Vamos a jugar el avioncito</h3>
          <p className="parrafo-avioncito-0">
            {" "}
            Te mostramos nuestra estrategia en 5 pasos!
          </p>
          <img src="/images/avioncito/kids6.svg"></img>
        </div>
      )}
    </section>
  );
};
//
export default Avioncito;
