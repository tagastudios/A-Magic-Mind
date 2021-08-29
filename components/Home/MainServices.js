import React from "react";
import Link from "next/link";

const MainServices = () => {
  return (
    <div className="main-services-area ptb-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="single-main-services-box">
              <div className="icon">
                <i className="flaticon-robot-1"></i>
              </div>
              <h3>
                <Link href="/services/playpals/">
                  <a>Categorías de Enseñanza</a>
                </Link>
              </h3>
              <img src="/images/Helpfull-links/Categorias.png"></img>
              <br />

              <Link href="services/playpals/">
                <a className="link-btn">Leer más..</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 col-md-6">
            <div className="single-main-services-box">
              <div className="icon">
                <i className="flaticon-neural"></i>
              </div>
              <h3>
                <Link href="/blogs/">
                  <a>Tips Para Papás</a>
                </Link>
              </h3>
              <img src="/images/Helpfull-links/Tips.png"></img>

              <Link href="/blogs/">
                <a className="link-btn">Leer más..</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6 offset-lg-0 offset-md-3 offset-sm-0">
            <div className="single-main-services-box">
              <div className="icon">
                <i className="flaticon-machine-learning"></i>
              </div>
              <h3>
                <Link href="/about-us/">
                  <a>Nuestro Equipo</a>
                </Link>
              </h3>
              <img src="/images/Helpfull-links/team.png"></img>
              <br />
              <Link href="/about-us/">
                <a className="link-btn">Leer más..</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 col-md-6 offset-lg-0 offset-md-3 offset-sm-0">
            <div className="single-main-services-box">
              <div className="icon">
                <i className="flaticon-machine-learning"></i>
              </div>
              <h3>
                <Link href="/#">
                  <a>Planilla de Inscripción</a>
                </Link>
              </h3>
              <img src="/images/Helpfull-links/Planilla.png"></img>
              <br />
              <Link href="/#">
                <a className="link-btn">Leer más..</a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6 offset-lg-0 offset-md-3 offset-sm-0">
            <div className="single-main-services-box">
              <div className="icon">
                <i className="flaticon-machine-learning"></i>
              </div>
              <h3>
                <Link href="/about-us/">
                  <a>Nuestro Equipo</a>
                </Link>
              </h3>
              <img src="/images/Helpfull-links/team.png"></img>
              <br />
              <Link href="/about-us/">
                <a className="link-btn">Leer más..</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12 col-md-6 offset-lg-0 offset-md-3 offset-sm-0">
            <div className="single-main-services-box">
              <div className="icon">
                <i className="flaticon-machine-learning"></i>
              </div>
              <h3>
                <Link href="/contact/">
                  <a>Más Información</a>
                </Link>
              </h3>
              <img src="/images/Helpfull-links/informacion.png"></img>
              <br />
              <Link href="/contact/">
                <a className="link-btn">Leer más..</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServices;
