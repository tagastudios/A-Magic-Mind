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
                <Link href="/#">
                  <a>PlayPals</a>
                </Link>
              </h3>
              <p>
                PlayPals son personas calificadas que irán a jugar, estimular y
                enseñar a su hijo en la comodidad de su hogar. No es nanny, ni
                babysitter, es un compañero de juego. Usted puede elegir entre
                varias actividades como, arte, idiomas, música y/o entro otros.
              </p>
              <br />

              <Link href="/#">
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
                <Link href="/#">
                  <a>Actividades Personalizadas</a>
                </Link>
              </h3>
              <p>
                Nuestro Playpal planificará los juegos de acuerdo a las
                necesidades de su hijo para que aprenda de manera divertida, los
                niños prefieren jugar que estudiar y es por eso que aprenderemos
                jugando! Los niños no juegan para aprender, pero de manera más o
                menos consciente, aprenden jugando.
              </p>

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
                <Link href="/#">
                  <a>Productos</a>
                </Link>
              </h3>
              <p>
                Libros, videos, juguetes, cada uno de nuestros productos
                enfocados en los padres, considerando el rol familiar dentro de
                la formacion infantil y en busqueda de un beneficio para el
                desarrollo de los niños.
              </p>
              <br />
              <Link href="/#">
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
