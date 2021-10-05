import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: true,
  animateOut: "fadeOut",
  items: 1,
  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

class FeedbackSlider extends Component {
  _isMounted = false;
  state = {
    display: false,
  };
  componentDidMount() {
    this._isMounted = true;
    this.setState({ display: true });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="feedback-area">
        <div className="container-fluid p-0">
          {this.state.display ? (
            <OwlCarousel
              className="feedback-slides owl-carousel owl-theme"
              {...options}
            >
              <div className="row m-0 testimonials-fix">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item testimonials-fix">
                    <p>
                      Trabajar con Maryangelica fue una de las mejores
                      experiencias no solo laborales, pero sobre todo en nivel
                      de crecimiento personal, aprendí tantas cosas que ni las
                      puedo nombrar! Pero aparte de cambiar pañales (que aun no
                      he necesitado) sobre todo aprendí mucho de psicología de
                      un niño, de las cuales no tuve ni idea.. Entendí que los
                      niños llaman atención de formas (no siempre comodas)
                      cuando les hace falta, pero es una 'alerta' q necesita
                      nuestra atencion y corrección. Supe manejar muchisimas
                      situaciones gracias a esa experiencia.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client1.jpg" alt="image" />
                      </div>

                      <h3>Dasa Orsagova</h3>
                      <span>Team</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg1">
                    <img src="/images/clients/client1.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="row m-0 testimonials-fix">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item testimonials-fix">
                    <p>
                      La parte dificil, no son los niños, somos los padres.. Y
                      como lidiar con eso entre dos, porque entre dos no siempre
                      vemos, entendemos o acordamos lo mismo (y es normal).
                      Muchas veces deseo que por lo menos algun fragmento de esa
                      experiencia de Maryangelica se pudiera pasar para mi
                      esposa jajaja pero pienso que todos estamos aprendiendo en
                      el camino mas que todo y obviamente hay muchas cosas que
                      no se pueden aprender, solo vivir y resolver. Pero
                      regularmente se me vienen recuerdos de esos tiempos,
                      porque era una escuela de la vida, hasta creo que mas para
                      nosotros los teachers que para los niños :)
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client2.jpg" alt="image" />
                      </div>

                      <h3>Pedro Perez</h3>
                      <span>Team</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg2">
                    <img src="/images/clients/client2.jpg" alt="image" />
                  </div>
                </div>
              </div>

              <div className="row m-0 testimonials-fix">
                <div className="col-lg-6 col-md-12 p-0">
                  <div className="feedback-item testimonials-fix">
                    <p>
                      Maryan es una bendición!!! Contar con Maryan como apoyo
                      desde mi primer día como mamá ha sido siempre una
                      bendición, su conocimiento sobre el tema es importante y
                      tranquilizador cuando te explica las teorías, pero la
                      empatía con la que siempre ha recibido mis angustias e
                      inquietudes y el tono de normalidad que le da a cada uno
                      de los momentos en los cuales he sentido que estoy
                      fallando como mamá o me he sentido perdida sin saber que
                      hacer ha sido definitivamente el mejor de sus aportes en
                      mi vida de mamá.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client3.jpg" alt="image" />
                      </div>

                      <h3>Adelaida Pifano</h3>
                      <span>MagicPadres</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 p-0">
                  <div className="client-image bg3">
                    <img src="/images/clients/client3.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default FeedbackSlider;
