import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfessionalSolutions = () => {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  const text =
    idioma === "es-ES"
      ? {
          corto:
            "En A MAGIC MIND Consideramos que  para el desarrollo exitoso de nuestros niños deben existir los siguientes elementos: Comunicación entre los educadores, criadores y cuidadores para que actúen como una misma persona. ...",
          largo:
            "En A MAGIC MIND Consideramos que  para el desarrollo exitoso de nuestros niños deben existir los siguientes elementos: Comunicación entre los educadores, criadores y cuidadores para que actúen como una misma persona. Consideración Mutua entre los padres y/o representantes y los educadores, Desarrollo de nuevas ideas periódicamente, confianza, aceptar y saber dar críticas constructivas entre ellos, Reconocer y celebrar los trabajos creativos de los niños y de todas la personas involucradas, el grupo de trabajo debe ser unido, se deben trazar metas conjuntas pero al mismo tiempo dar la libertad para trabajar individualmente y desarrollar su potencial, contar con los materiales adecuados y necesarios y con el tiempo suficiente para el trabajo, y lo más importante VOCACION Y AMOR A NUESTROS NIÑOS.",
        }
      : {
          corto:
            "At A MAGIC MIND we believe that for the successful development of our children the following elements must exist: Communication between educators, breeders and caregivers so that they act as one person. ...",
          largo:
            "At A MAGIC MIND we believe that for the successful development of our children the following elements must exist: Communication between educators, breeders and caregivers so that they act as one person. Mutual consideration between parents and / or representatives and educators, Development of new ideas periodically, trust, accept and know how to give constructive criticism between them, Recognize and celebrate the creative works of children and all the people involved, the work group It must be united, joint goals must be set but at the same time give the freedom to work individually and develop their potential, have the appropriate and necessary materials and with enough time for work, and most importantly, VOCATION AND LOVE TO OUR CHILDREN .",
        };
  const [leerMas, setLeerMas] = useState(false);
  return (
    <div className="solutions-area ptb-110 MainBanner__fix2">
      <div className="container">
        <div className="section-title letras">
          <p className="letras2"> </p>
          <p>{leerMas ? text.largo : text.corto}</p>
          <a className="leermas" onClick={() => setLeerMas(!leerMas)}>
            {leerMas
              ? idioma === "es-ES"
                ? "Leer menos"
                : "Read Less"
              : idioma === "es-ES"
              ? "Leer más"
              : "Read More"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSolutions;
