import React from "react";
import Link from "next/link";
import Icons from "../../utils/Icons";
import { useRouter } from "next/router";

const MainServices = () => {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  return (
    <section className="main-services-area ptb-110">
      <div className="services-area-title">
        <h3>
          {idioma === "es-ES"
            ? "Links de ayuda y temas populares"
            : "Help links and popular topics"}
        </h3>
        <p>
          {idioma === "es-ES"
            ? "Descubre todo lo que podemos ofrecerte y mucho mas"
            : "Discover everything we can offer you and much more"}
        </p>
      </div>
      <div className="container">
        <div className="row">
          <Link href="/services/MagicPlans/">
            <a className="col-lg-4 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new">
                  <Icons icon="category" color="black" />
                </div>
                <h3>
                  <Link href="/services/MagicPlans/">
                    <a>
                      {idioma === "es-ES"
                        ? "Nuestos Servicios"
                        : "Our Services"}
                    </a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/Categorias.png"></img>
                <a className="link-btn">
                  {idioma === "es-ES" ? "Leer más.." : "Read more"}
                </a>
              </div>
            </a>
          </Link>
          <Link href="/playpals/">
            <a className="col-lg-4 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new">
                  <Icons icon="tips" color="black" />
                </div>
                <h3>
                  <Link href="/playpals/">
                    <a>{idioma === "es-ES" ? "Playpals" : "Playpals"}</a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/Tips.png"></img>
                <a className="link-btn">
                  {idioma === "es-ES" ? "Leer más.." : "Read more"}
                </a>
              </div>
            </a>
          </Link>
          <Link href="/about-us/">
            <a className="col-lg-4 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new">
                  <Icons icon="team" color="black" />
                </div>
                <h3>
                  <Link href="/about-us/">
                    <a>{idioma === "es-ES" ? "Nuestro Equipo" : "Our Team"}</a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/team.png"></img>

                <a className="link-btn">
                  {idioma === "es-ES" ? "Leer más.." : "Read more"}
                </a>
              </div>
            </a>
          </Link>
          <Link href="/file/Planilla-de-Inscripcion.pdf">
            <a className="col-lg-4 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new">
                  <Icons icon="enroll" color="black" />
                </div>
                <h3>
                  <Link href="/file/Planilla-de-Inscripcion.pdf">
                    <a>
                      {idioma === "es-ES"
                        ? "PLanilla de Inscripción"
                        : "Registration form"}{" "}
                    </a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/Planilla.png"></img>
                <a className="link-btn">
                  {idioma === "es-ES" ? "Leer más.." : "Read more"}
                </a>
              </div>
            </a>
          </Link>
          <Link href="/contact/">
            <a className="col-lg-4 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new ml-1">
                  <Icons icon="info" color="black" />
                </div>
                <h3>
                  <Link href="/contact/">
                    <a>
                      {idioma === "es-ES"
                        ? "Más información"
                        : "More Information"}
                    </a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/informacion.png"></img>
                <a className="link-btn">
                  {idioma === "es-ES" ? "Leer más.." : "Read more"}
                </a>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
