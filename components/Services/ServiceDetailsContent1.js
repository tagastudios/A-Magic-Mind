import React from "react";

function ServiceDetailsContent() {
  return (
    <div className="services-details-area ptb-110">
      <div className="container">
        <div className="services-details-overview">
          <div className="services-details-desc mb-30">
            <h3>Servicios personalizados</h3>
            <p>
              Igualmente en este servicio lo brindarán nuestras playpals, sin
              embargo, es diferente! Si quieres ser tú quien decida que
              actividad realizará tu hijo con nuestras playpals esta es tu
              sección ideal!
            </p>

            <p>
              En este punto consideramos todas aquellas que están fuera de los
              programas educativos oficiales; es decir, son todas las
              actividades, clases o cursos que un alumno toma pero que al final
              no sumarán a su promedio académico. Sin embargo, el hecho que no
              impacten en el promedio escolar, no significa que no sean
              importantes. Por el contrario son actividades que aportan un gran
              valor a la vida tanto personal como académica de un estudiante.
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
            <h3>Actividades</h3>
            <p>MagicNiños</p>

            <ul>
              <li>Cine</li>
              <li>Arte</li>
              <li>Baile</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsContent;
