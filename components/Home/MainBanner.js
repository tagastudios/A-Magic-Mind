import React from "react";
import Link from "next/link";
import { slogan } from "../../content/settings/settings.json";

const MainBanner = () => {
  return (
    <div className="startup-banner-inner MainBanner__fix">
      <div className="container">
        <div className="startup-banner-content letras-title">
          <h1>{slogan}!!</h1>
          <p className="main-banner-text">
            Los niños aprenden mientras juegan, más importante aún, en el juego,
            los niños aprenden como aprender..! La educación no consiste en
            ofrecer las cosas ya hechas o dar las respuestas acertadas. Se trata
            de mostrarles el camino para que con lo aprendido sean ellos los
            protagonistas de sus propias decisiones y de sus propios errores.
            Así irán construyendo y desarrollando su personalidad y sus
            capacidades físicas e intelectuales.
          </p>

          <div className="btn-box">
            <Link href="/#">
              <a className="btn btn-primary">Tienes una duda?</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
