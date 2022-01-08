import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfessionalSolutions = () => {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  const text = {
    corto:
      "En A MAGIC MIND Consideramos que  para el desarrollo exitoso de nuestros niños deben existir los siguientes elementos: Comunicación entre los educadores, criadores y cuidadores para que actúen como una misma persona. ...",
    largo:
      "En A MAGIC MIND Consideramos que  para el desarrollo exitoso de nuestros niños deben existir los siguientes elementos: Comunicación entre los educadores, criadores y cuidadores para que actúen como una misma persona. Consideración Mutua entre los padres y/o representantes y los educadores, Desarrollo de nuevas ideas periódicamente, confianza, aceptar y saber dar críticas constructivas entre ellos, Reconocer y celebrar los trabajos creativos de los niños y de todas la personas involucradas, el grupo de trabajo debe ser unido, se deben trazar metas conjuntas pero al mismo tiempo dar la libertad para trabajar individualmente y desarrollar su potencial, contar con los materiales adecuados y necesarios y con el tiempo suficiente para el trabajo, y lo más importante VOCACION Y AMOR A NUESTROS NIÑOS.",
  };
  const [leerMas, setLeerMas] = useState(false);
  return (
    <div className="solutions-area ptb-110 MainBanner__fix2">
      <div className="container">
        <div className="section-title letras">
          <p className="letras2"> </p>
          <p>{leerMas ? text.largo : text.corto}</p>
          <a className="leermas" onClick={() => setLeerMas(!leerMas)}>
            {leerMas ? "Leer menos" : "Leer mas"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSolutions;
