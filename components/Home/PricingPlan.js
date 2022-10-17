import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

export default withRouter(
  class PricingPlan extends Component {
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
      const idioma = this.props.router.locale;

      return (
        <div className="pricing-area magicplans ptb-110 pt-0">
          <div className="container">
            <div className="section-title titulo-espacio">
              <h2>{idioma === "es-ES" ? "Membresías" : "Magic Memberships"}</h2>
              <p>
                {idioma === "es-ES"
                  ? "Ofrecemos planes personalizados, con las características de una membresía, flexibles y adaptables a las necesidades tanto del niño como de los padres."
                  : "We offer personalized plans, with the characteristics of a membership, flexible and adaptable to the needs of both the child and the parents."}
              </p>
            </div>

            <div className="tab pricing-tab pricing-bg-color">
              <ul className="tabs">
                <li
                  className="current"
                  onClick={(e) => this.openTabSection(e, "tab1")}
                >
                  {" "}
                  {idioma === "es-ES"
                    ? "Membresías Básicas"
                    : "Basic Memberships"}
                </li>
                <li onClick={(e) => this.openTabSection(e, "tab2")}>
                  {idioma === "es-ES" ? "Membresías VIP" : " VIP Memberships"}
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
                            {idioma === "es-ES"
                              ? "Membresía Básica"
                              : "Basic Membership"}
                            <img
                              src="/images/VaritaMagica.svg"
                              className="varita varita-basico"
                            />
                          </h3>

                          <h5>
                            {idioma === "es-ES"
                              ? "1.5 Horas a la semana"
                              : "1.5 Hours per week"}
                            <br />
                          </h5>
                        </div>

                        <div className="price">
                          {idioma === "es-ES" ? "Incluye" : "Include"}{" "}
                          <span></span>
                        </div>

                        <div className="buy-btn">
                          <Link href="/index-5/#">
                            <a className="btn btn-primary btn-basico">
                              {idioma === "es-ES"
                                ? "Conocer más de este paquete"
                                : "Learn more about this package"}
                            </a>
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="flaticon-tick"></i>
                            {idioma === "es-ES"
                              ? "Actividades para los niños"
                              : "Activities for Children"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Charlas" : "Conferences"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Reuniones" : "Meetings"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Yoga" : "Yoga"}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 ">
                      <div className="single-pricing-box bronce">
                        <div className="pricing-header">
                          <h3>
                            {" "}
                            {idioma === "es-ES"
                              ? "Membresía Bronce"
                              : "Bronze Membership"}
                            <img
                              src="/images/VaritaMagica.svg"
                              className=" varita varita-bronce"
                            />
                          </h3>
                          <h5>
                            {idioma === "es-ES"
                              ? "3 Horas a la semana"
                              : "3 Hours per week"}

                            <br />
                          </h5>
                        </div>

                        <div className="price">
                          {idioma === "es-ES" ? "Incluye" : "Include"}{" "}
                          <span></span>
                        </div>

                        <div className="buy-btn">
                          <Link href="/index-5/#">
                            <a className="btn btn-primary btn-bronce">
                              {idioma === "es-ES"
                                ? "Conocer más de este paquete"
                                : "Learn more about this package"}
                            </a>
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "Actividades para los niños"
                              : "Activities for Children"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Charlas" : "Conferences"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Reuniones" : "Meetings"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Yoga" : "Yoga"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Masajes" : "massages"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "1 Asesoría personalizada al més"
                              : "1 Private consultation a Month"}
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
                            {idioma === "es-ES"
                              ? "Membresía Plateada"
                              : "Silver Membership"}
                            <img
                              src="/images/VaritaMagica.svg"
                              className="varita plata"
                            />
                          </h3>
                          <h5>
                            {idioma === "es-ES"
                              ? "4.5 Horas a la semana"
                              : "4.5 Hours per week"}
                            <br />
                          </h5>
                        </div>

                        <div className="price">
                          {idioma === "es-ES" ? "Incluye" : "Include"}{" "}
                          <span></span>
                        </div>

                        <div className="buy-btn">
                          <Link href="/#">
                            <a className="btn btn-primary btn-silver">
                              {idioma === "es-ES"
                                ? "Conocer más de este paquete"
                                : "Learn more about this package"}
                            </a>
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "Actividades para los niños"
                              : "Activities for Children"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>
                            {idioma === "es-ES" ? "Charlas" : "Conferences"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Reuniones" : "Meetings"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Masajes" : "Massages"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "1 Asesoría personalizada al mes"
                              : "1 Private Consultation a Month"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "2 Horas al mes para una pareja de invitados (Cuidador & Niño)"
                              : "2 hours a Month for two guess (Guardian & child)"}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <div className="single-pricing-box gold">
                        <div className="pricing-header">
                          <h3>
                            {idioma === "es-ES"
                              ? "Membresía Dorada"
                              : "Gold Membership"}
                            <img
                              src="/images/VaritaMagica.svg"
                              className="varita dorado"
                            />
                          </h3>
                          <h5>
                            {idioma === "es-ES"
                              ? "6 Horas a la semana"
                              : "6 Hours per week"}{" "}
                            <br />
                          </h5>
                        </div>

                        <div className="price">
                          {idioma === "es-ES" ? "Incluye" : "Include"}{" "}
                          <span></span>
                        </div>

                        <div className="buy-btn">
                          <Link href="/#">
                            <a className="btn btn-primary btn-gold">
                              {idioma === "es-ES"
                                ? "Conocer más de este paquete"
                                : "Learn more about this package"}
                            </a>
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "Actividades para los niños"
                              : "Activities for Children"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>
                            {idioma === "es-ES" ? "Charlas" : "Conferences"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Reuniones" : "Meetings"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Masajes" : "Massages"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "3 Asesoría personalizada al mes"
                              : "3 Private Consultation a Month"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "4 Horas al mes para una pareja de invitados (Cuidador & Niño)"
                              : "4 hours a Month for two guess (Guardian & child)"}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <div className="single-pricing-box diamond">
                        <div className="pricing-header">
                          <h3>
                            {idioma === "es-ES"
                              ? "Membresía Diamante"
                              : "Diamond Membership"}
                            <img
                              src="/images/VaritaMagica.svg"
                              className="varita diamante"
                            />
                          </h3>
                          <h5>
                            {idioma === "es-ES"
                              ? "9 Horas a la semana"
                              : "9 Hours per week"}{" "}
                            <br />
                          </h5>
                        </div>

                        <div className="price">
                          {idioma === "es-ES" ? "Incluye" : "Include"}{" "}
                          <span></span>
                        </div>

                        <div className="buy-btn">
                          <Link href="/#">
                            <a className="btn btn-primary btn-diamond">
                              {idioma === "es-ES"
                                ? "Conocer más de este paquete"
                                : "Learn more about this package"}
                            </a>
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "Actividades para los niños"
                              : "Activities for Children"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>
                            {idioma === "es-ES" ? "Charlas" : "Conferences"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Reuniones" : "Meetings"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES" ? "Masajes" : "Massages"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "4 Asesoría personalizada al mes"
                              : "4 Private Consultation a Month"}
                          </li>
                          <li>
                            <i className="flaticon-tick"></i>{" "}
                            {idioma === "es-ES"
                              ? "4 Horas al mes para una pareja de invitados (Cuidador & Niño)"
                              : "4 hours a Month for two guess (Guardian & child)"}
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
);
