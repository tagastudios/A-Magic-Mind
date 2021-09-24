import React, { useState } from "react";

const Avioncito = () => {
  const [data, setData] = useState([
    {
      titulo: "Beneficios del Juego",
      texto:
        "1. Proporciona mayor desarrollo sensorial -sentido y percepción 2.Aumenta la motricidad fina y gruesa 3. Estimula la memoria, atención, cognición y procesamiento lógico e imaginación 4. Facilita la comunicación, expresión, socialización  ",
      clase: "texto-rojo",
    },
    {
      titulo: "Escuchar",
      texto: "Les impartimos las instrucciones y los invitamos a jugar",
      clase: "texto-naranja",
    },
    {
      titulo: "Entender",
      texto:
        "Nos aseguramos que las instrucciones sean comprendidas por nuestros peques",
      clase: "texto-verde",
    },
    {
      titulo: "Hacer",
      texto: "manos a la obra! hacer para aprender",
      clase: "texto-azul",
    },
    {
      titulo: "Vivir",
      texto:
        "apoyamos y acompañamos a nuestros peques a seguirlo intentando con alegrias y frustraciones hasta que lo logren.",
      clase: "texto-morado",
    },
    {
      titulo: "Aprender",
      texto: "celebramos con ellos sus logros. ",
      clase: "texto-amarillo",
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
          <h2 className={`${active.clase} texto-avioncito`}>{active.titulo}</h2>
          <p>{active.texto}</p>
        </div>
      ) : (
        <div className="avioncito-right">
          <h2> Cómo enseñamos en Magic Mind? </h2>
          <h3>Para conocer nuestro Magic Método, Vamos a jugar el avioncito</h3>
          <p> Te mostramos nuestra estrategia en 5 pasos!</p>
          <img src="/images/avioncito/kids6.svg"></img>
        </div>
      )}
    </section>
  );
};
//
export default Avioncito;
