import React from "react";

function ServiceDetailsContent() {
  return (
    <div className="services-details-area ptb-110">
      <div className="container">
        <div className="services-details-overview">
          <div className="services-details-desc mb-30">
            <h3>Playpals</h3>
            <p>
              Nuestras Playpals se van a convertir en el "mejor amigo de tu
              hijo". En Magic Mind estamos conscientes de todo lo que conlleva
              ser Padre y sabemos que siempre tu prioridad es que tus pequeños
              tengan lo mejor.Buena parte de madres y padres trabajan fuera de
              casa. Por lo que vuelven al final de la tarde y en la noche a sus
              hogares. A veces sus hijos pueden tener dificultades para realizar
              sus trabajos solos, es decir sin supervisión o sin ayuda de
              adultos. Magic Mind y sus Playpals son la solución a eso!
            </p>

            <p>
              Los niños a veces no captan las metodologías de los profesores en
              diferentes materias del colegio. Por ello es recomendable que
              recurran a acompañamientos educacionales que les permitan no tener
              'vacíos' que luego son más difíciles de superar. Con nuestras
              playpals tus hijos podrán disfrutar de actividades y metodologías
              diferentes, les enseñarán por medio de otros caminos para llegar
              al mismo resultado. Aprende nunca será tan divertido!!
            </p>
          </div>

          <div className="services-details-image">
            <img
              src="/images/services-details/service-details1.jpg"
              alt="image"
            />
          </div>
        </div>

        <div className="services-details-overview">
          <div className="services-details-image mb-30">
            <img
              src="/images/services-details/service-details2.jpg"
              alt="image"
            />
          </div>

          <div className="services-details-desc">
            <h3>Nuestra metodología</h3>
            <p>
              Implementamos herramientas pedagógicas que además de fortalecer el
              aprendizaje, motiva e inspira a tus hijo en su proceso de
              aprendizaje de cualquier ámbito.
            </p>

            <ul>
              <li>
                Las playpals analizan los aspectos en los cuales tus niños
                necesitan apoyo y con herramientas y técnicas emplean diversas
                actividades para lograr alcanzar los objetivos solicitados por
                ti.
              </li>
              <li>
                Tus hijos van a sentirse libres y motivados, vamos a trabajar en
                la construcción de objetivos y metas a través de los juegos.
              </li>
              <li>
                Nuestras técnicas promueven un mayor nivel de compromiso
                académico y sobre todo por la metodología utilizada, si el niño
                siente que no está estudiando, sino jugando, su compromiso será
                mayor!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsContent;
