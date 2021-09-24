import React from "react";

function ServiceDetailsContent() {
  return (
    <div className="services-details-area ptb-110">
      <div className="container">
        <div className="services-details-overview">
          <div className="services-details-desc mb-30">
            <h3>Playpals</h3>
            <p>
              PlayPals es una persona calificada que irá a jugar, estimular y
              enseñar a tu hijo en la comodidad de tu hogar. No es nanny, ni
              babysitter, es un compañero de juego y aprendizaje. Nuestro
              Playpal planificará los juegos de acuerdo a las necesidades de tu
              hijo para que aprenda de manera lúdica (divertida). Nuestros
              Playpals se van a convertir en el "mejor ejemplo para tu hijo". En
              Magic Mind estamos conscientes de todo lo que conlleva ser padres,
              pues lo vivimos a diario, sabemos que siempre tu prioridad es que
              tus pequeños tengan lo mejor.
            </p>

            <p>
              Todos queremos aprovechar el potencial de nuestros hijos al máximo
              y podemos lograrlo a través del trabajo en equipo entre la
              escuela, ustedes y nosotros. Con nuestros playpals tus hijos
              podrán disfrutar de actividades y metodologías diferentes, les
              enseñarán por medio de otros caminos para llegar al mismo
              resultado. Aprender nunca será tan divertido!!
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
              ● Nuestro compromiso es que tus hijos se sientan libres y
              motivados, vamos a trabajar juntos en la construcción de objetivos
              y metas a través de los juegos.
            </p>

            <ul>
              <li>
                Escuchar: Les impartimos las instrucciones y los invitamos a
                jugar
              </li>
              <li>
                Entender:Nos aseguramos que las instrucciones sean comprendidas
                por nuestros peques
              </li>
              <li>Hacer: Manos a la obra! hacer para aprender</li>
              <li>
                Vivir: apoyamos y acompañamos a nuestros peques a seguirlo
                intentando con alegrias y frustraciones hasta que lo logren.
              </li>
              <li>Aprender: Celebramos con ellos sus logros.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsContent;
