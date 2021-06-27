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
                      Las maestras y el personal administrativo es muy
                      profesional y atento. A mi hijo le encanta y siempre está
                      emocionado en cada lección. Y el nivel de aprendizaje es
                      excelente..
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client1.jpg" alt="image" />
                      </div>

                      <h3>Filip Luis</h3>
                      <span>MagicPadres</span>
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
                      Mi hija ingresó desde los 2 años. Como madre primeriza
                      sentí muchísimo miedo de dejarla tan pequeña con personas
                      que no conocía! Hoy después de casi un año puedo compartir
                      con ustedes mi sentimiento de felicidad cada vez que veo a
                      mi hija sonriente, bajo un conocimiento cuidado y cariño
                      excepcional, recomiendo MagicMind con los ojos cerrados!
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client2.jpg" alt="image" />
                      </div>

                      <h3>Sarah Taylor</h3>
                      <span>MagicPadres</span>
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
                      ¡Gran escuela, por favor! Los profesores son increíbles,
                      todos lo son, a mi hija le encanta y la enseñanza es otro
                      nivel.
                    </p>

                    <div className="client-info">
                      <div className="client-pic">
                        <img src="/images/clients/client3.jpg" alt="image" />
                      </div>

                      <h3>Sarah Taylor</h3>
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
