import React, { Component } from "react";
import Link from "next/link";

export default class PricingPlan extends Component {
  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className +=
      " animate__fadeInUp animate__animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <div className="pricing-area magicplans ptb-110 pt-0">
        <div className="container">
          <div className="section-title titulo-espacio">
            <h2>Magic Plans</h2>
            <p>
              Ofrecemos planes personalizados, con las características de una
              membresía, flexibles y adaptables a las necesidades tanto del niño
              como de los padres.
            </p>
          </div>

          <div className="tab pricing-tab pricing-bg-color">
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab1")}
              >
                Planes Básicos
              </li>
              <li onClick={(e) => this.openTabSection(e, "tab2")}>
                Planes Avanzados
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab1" className="tabs-item">
                <div className="row">
                  <div className="col-lg-2 col-md-0"></div>

                  <div className="col-lg-4 col-md-6 offset-lg-0 ">
                    <div className="single-pricing-box basico">
                      <div className="pricing-header">
                        <h3>
                          Magic Basic
                          <img
                            src="/images/VaritaMagica.svg"
                            className="varita varita-basico"
                          />
                        </h3>

                        <p>
                          Duración 1.5 Horas a la semana
                          <br />
                        </p>
                      </div>

                      <div className="price">
                        Incluye <span></span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/index-5/#">
                          <a className="btn btn-primary btn-basico">
                            Conocer más de este paquete
                          </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Material Educativo
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Planificación y
                          atención personalizada
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Exclusividad en la
                          comodidad de tu hogar
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 offset-lg-0 ">
                    <div className="single-pricing-box bronce">
                      <div className="pricing-header">
                        <h3>
                          {" "}
                          Magic Bronce{" "}
                          <img
                            src="/images/VaritaMagica.svg"
                            className=" varita varita-bronce"
                          />
                        </h3>
                        <p>
                          Duración 3 Horas a la Semana
                          <br />
                        </p>
                      </div>

                      <div className="price">
                        Incluye <span></span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/index-5/#">
                          <a className="btn btn-primary btn-bronce">
                            Conoce más de este paquete
                          </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Material Educativo
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Planificación y
                          atención personalizada
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Exclusividad en la
                          comodidad de tu hogar
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs-item">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="single-pricing-box silver">
                      <div className="pricing-header">
                        <h3>
                          Magic Silver{" "}
                          <img
                            src="/images/VaritaMagica.svg"
                            className="varita plata"
                          />
                        </h3>
                        <p>
                          Duración 4.5 horas a la semana
                          <br />
                        </p>
                      </div>

                      <div className="price">
                        Incluye <span></span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/#">
                          <a className="btn btn-primary btn-silver">
                            Conoce Más sobre este paquete{" "}
                          </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Material Educativo
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Planificación y
                          atención personalizada
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Exclusividad en la
                          comodidad de tu hogar
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="single-pricing-box gold">
                      <div className="pricing-header">
                        <h3>
                          Magic Gold{" "}
                          <img
                            src="/images/VaritaMagica.svg"
                            className="varita dorado"
                          />
                        </h3>
                        <h5>
                          Duración 6 horas a la semana <br />
                        </h5>
                      </div>

                      <div className="price">
                        Incluye <span></span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/#">
                          <a className="btn btn-primary btn-gold">
                            Conoce más sobre este paquete
                          </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Cámaras de seguridad
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Horas ilimitadas de
                          actividaes especiales (cumpleaños/ aniversarios/play
                          date/ holidays)
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Material educativo
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Planificación y
                          atención personalizada
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Exclusividad en la
                          comodidad de tu hogar
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4">
                    <div className="single-pricing-box diamond">
                      <div className="pricing-header">
                        <h3>
                          Magic Diamond{" "}
                          <img
                            src="/images/VaritaMagica.svg"
                            className="varita diamante"
                          />
                        </h3>
                        <h5>
                          Duración 9 horas a la semana <br />
                        </h5>
                      </div>

                      <div className="price">
                        Incluye <span></span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/#">
                          <a className="btn btn-primary btn-diamond">
                            Conoce más sobre este paquete
                          </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Cámaras de seguridad
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Horas ilimitadas de
                          actividaes especiales (cumpleaños/ aniversarios/play
                          date/ holidays)
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Material educativo
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Planificación y
                          atención personalizada
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Exclusividad en la
                          comodidad de tu hogar
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
