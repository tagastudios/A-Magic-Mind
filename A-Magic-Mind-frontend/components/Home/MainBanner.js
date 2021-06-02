import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="startup-banner-inner MainBanner__fix">
      <div className="container">
        <div className="startup-banner-content letras">
          <h1>
            Son pequeños <br /> Pero Aprenden a lo Grande!!
          </h1>
          <p>
            Los niños aprenden mientras juegan, más importante aún, en el juego,
            los niños aprenden como aprender..! La educación no consiste en
            ofrecer las cosas ya hechas o dar las respuestas acertadas. Se trata
            de mostrarles el camino para que con lo aprendido sean ellos los
            protagonistas de sus propias decisiones y de sus propios errores.
            Así irán construyendo y desarrollando su personalidad y sus
            capacidades físicas e intelectuales.
          </p>

          <div className="btn-box">
            <Link href="/">
              <a className="btn btn-primary">Tienes una duda?</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
