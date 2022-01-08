import React, { Component } from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { useRouter } from "next/router";

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
// const idioma = useRouter().locale;
const idioma = "en-US";
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
                      {" "}
                      {idioma === "es-ES"
                        ? "Trabajar con Maryangelica fue una de las mejores experiencias no solo laborales, pero sobre todo en nivel de crecimiento personal, aprendí tantas cosas que ni las puedo nombrar! Pero aparte de cambiar pañales (que aun no he necesitado) sobre todo aprendí mucho de psicología de un niño, de las cuales no tuve ni idea.. Entendí que los niños llaman atención de formas (no siempre comodas) cuando les hace falta, pero es una 'alerta' q necesita nuestra atencion y corrección. Supe manejar muchisimas situaciones gracias a esa experiencia."
                        : "Working with Maryangelica was one of the best experiences, not only at work, but especially at the level of personal growth, I learned so many things that I can't even name them! But apart from changing diapers (which I have not needed yet), above all, I learned a lot about child psychology, of which I had no idea. I understood that children attract attention in ways (not always comfortable) when they need it, but It is an 'alert' that needs our attention and correction. I knew how to handle many situations thanks to that experience. "}
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client1.jpg" alt="image" />
                      </div>

                      <h3>Dasa Orsagova</h3>
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
                      {idioma === "es-ES"
                        ? "La parte dificil, no son los niños, somos los padres.. Y como lidiar con eso entre dos, porque entre dos no siempre vemos, entendemos o acordamos lo mismo (y es normal) Muchas veces deseo que por lo menos algun fragmento de esa experiencia de Maryangelica se pudiera pasar para mi esposa jajaja pero pienso que todos estamos aprendiendo en el camino mas que todo y obviamente hay muchas cosas que no se pueden aprender, solo vivir y resolver. Pero regularmente se me vienen recuerdos de esos tiempos, porque era una escuela de la vida, hasta creo que mas para nosotros los teachers que para los niños"
                        : "The difficult part, it is not the children, we are the parents .. And how to deal with that between two, because between two we do not always see, understand or agree the same thing (and it is normal) Many times I wish that at least some fragment of that Maryangelica's experience could be passed on to my wife hahaha but I think that we are all learning along the way more than anything else and obviously there are many things that cannot be learned, only living and solving. But regularly I come back to memories of those times, because it was a school of life, I even think that more for us teachers than for children"}
                      :)
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client2.jpg" alt="image" />
                      </div>

                      <h3>Pedro Perez</h3>
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
                      {" "}
                      {idioma === "es-ES"
                        ? "Maryan es una bendición!!! Contar con Maryan como apoyo desde mi primer día como mamá ha sido siempre una bendición, su conocimiento sobre el tema es importante y tranquilizador cuando te explica las teorías, pero la empatía con la que siempre ha recibido mis angustias e inquietudes y el tono de normalidad que le da a cada uno de los momentos en los cuales he sentido que estoy fallando como mamá o me he sentido perdida sin saber que hacer ha sido definitivamente el mejor de sus aportes en mi vida de mamá."
                        : "of the moments in which I have felt that I am failing as a mother or I have felt lost without knowing what to do has definitely been the best of her contributions in my life as a mother."}
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client3.jpg" alt="image" />
                      </div>

                      <h3>Adelaida Pifano</h3>
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
