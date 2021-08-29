import React, { useState } from "react";

const Avioncito = () => {
  const [data, setData] = useState([
    {},
    {
      titulo: "Escuchar",
      texto: "Les impartimos las instrucciones y los invitamos a jugar",
    },
    {
      titulo: "Entender",
      texto:
        "Nos aseguramos que las instrucciones sean comprendidas por nuestros peques",
    },
    {
      titulo: "Hacer",
      texto: "manos a la obra! hacer para aprender",
    },
    {
      titulo: "Vivir",
      texto:
        "apoyamos y acompañamos a nuestros peques a seguirlo intentando con alegrias y frustraciones hasta que lo logren.",
    },
    {
      titulo: "Aprender",
      texto: "celebramos con ellos sus logros. ",
    },
    {
      titulo: "Beneficios del Juego",
      texto:
        "1. Proporciona mayor desarrollo sensorial -sentido y percepción 2.Aumenta la motricidad fina y gruesa 3. Estimula la memoria, atención, cognición y procesamiento lógico e imaginación 4. Facilita la comunicación, expresión, socialización  ",
    },
  ]);

  const [play, setPlay] = useState(false);
  const [active, setActive] = useState("");
  return (
    <section className="avioncito-center">
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
      <div class="grid-container">
        <div
          className="grid-item item1"
          onClick={() => {
            setPlay(true);
            setActive(data[1]);
          }}
        >
          1
        </div>
        <div
          className="grid-item item2"
          onClick={() => {
            setPlay(true);
            setActive(data[2]);
          }}
        >
          2
        </div>
        <div
          className="grid-item item3"
          onClick={() => {
            setPlay(true);
            setActive(data[3]);
          }}
        >
          3
        </div>
        <div
          className="grid-item item4"
          onClick={() => {
            setPlay(true);
            setActive(data[4]);
          }}
        >
          4
        </div>
        <div
          className="grid-item item5"
          onClick={() => {
            setPlay(true);
            setActive(data[5]);
          }}
        >
          5
        </div>
        <div
          className="grid-item item6"
          onClick={() => {
            setPlay(true);
            setActive(data[6]);
          }}
        >
          6
        </div>
      </div>
      {play ? (
        <div
          className="avioncito-right"
          style={{ justifyContent: "Flex-start" }}
        >
          <h2>{active.titulo}</h2>
          <p>{active.texto}</p>
        </div>
      ) : (
        <div className="avioncito-right">
          <h2> Cómo enseñamos en Magic Mind? </h2>
          <h3>
            Para conocer nuestros Magic Métodos, Vamos a jugar el avioncito
          </h3>
          <p> Te mostramos nuestras estratégias en 5 pasos!</p>
          <img src="/images/avioncito/kids6.svg"></img>
        </div>
      )}
    </section>
  );
};

export default Avioncito;
