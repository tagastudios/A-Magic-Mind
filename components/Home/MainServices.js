import React from "react";
import Link from "next/link";
import Icons from "../../utils/Icons";

const MainServices = () => {
  return (
    <section className="main-services-area ptb-110">
      <div className="services-area-title">
        <h3>Links de ayuda y temas populares</h3>
        <p>Descubre todo lo que podemos ofrecerte y mucho mas</p>
      </div>
      <div className="container">
        <div className="row">
          <Link href="services/playpals/">
            <a className="col-lg-3 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new">
                  <Icons icon="category" color="black" />
                </div>
                <h3>
                  <Link href="services/playpals/">
                    <a>Nuestras Categorías</a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/Categorias.png"></img>
                <a className="link-btn">Leer más..</a>
              </div>
            </a>
          </Link>
          <Link href="/blogs/">
            <a className="col-lg-3 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new">
                  <Icons icon="tips" color="black" />
                </div>
                <h3>
                  <Link href="/blogs/">
                    <a>Tips Para Papás</a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/Tips.png"></img>
                <a className="link-btn">Leer más..</a>
              </div>
            </a>
          </Link>
          <Link href="/about-us/">
            <a className="col-lg-3 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new">
                  <Icons icon="team" color="black" />
                </div>
                <h3>
                  <Link href="/about-us/">
                    <a>Nuestro Equipo</a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/team.png"></img>

                <a className="link-btn">Leer más..</a>
              </div>
            </a>
          </Link>
          <Link href="/#">
            <a className="col-lg-3 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new">
                  <Icons icon="enroll" color="black" />
                </div>
                <h3>
                  <Link href="/#">
                    <a>Planilla de Inscripción</a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/Planilla.png"></img>
                <a className="link-btn">Leer más..</a>
              </div>
            </a>
          </Link>
          <Link href="/contact/">
            <a className="col-lg-3 col-sm-6 col-md-4">
              <div className="single-main-services-box">
                <div className="icon-new ml-1">
                  <Icons icon="info" color="black" />
                </div>
                <h3>
                  <Link href="/contact/">
                    <a>Más Información</a>
                  </Link>
                </h3>
                <img src="/images/Helpfull-links/informacion.png"></img>
                <a className="link-btn">Leer más..</a>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainServices;
