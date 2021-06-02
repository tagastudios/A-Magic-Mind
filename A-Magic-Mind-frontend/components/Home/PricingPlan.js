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
      <div className="pricing-area ptb-110 pt-0">
        <div className="container">
          <div className="section-title">
            <h2>Magic Planes</h2>
            <p>Atrevete a ser parte de MagicMind</p>
          </div>

          <div className="tab pricing-tab pricing-bg-color">
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => this.openTabSection(e, "tab1")}
              >
                Plan Mensual
              </li>
              <li onClick={(e) => this.openTabSection(e, "tab2")}>
                Plan Anual
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab1" className="tabs-item">
                <div className="row">
                  <div className="col-lg-2 col-md-0"></div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box active">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          PlayPals
                          <br />
                        </p>
                      </div>

                      <div className="price">
                        $149 <span>/m</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/index-5/#">
                          <a className="btn btn-primary">
                            Obtén un libro gratis
                          </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Todo incluido
                          <br />
                        </p>
                      </div>

                      <div className="price">
                        $179 <span>/m</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/index-5/#">
                          <a className="btn btn-primary">
                            Obtén un libro gratis
                          </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs-item">
                <div className="row">
                  <div className="col-lg-2 col-md-0"></div>

                  <div className="col-lg-4 col-md-6">
                    <div className="single-pricing-box active">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          MagicMind
                          <br />
                        </p>
                      </div>

                      <div className="price">
                        $249 <span>/y</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/index-5/#">
                          <a className="btn btn-primary">Obtén un libro </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          MagicMind <br />
                        </p>
                      </div>

                      <div className="price">
                        $279 <span>/y</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/index-5/#">
                          <a className="btn btn-primary">
                            Obtén un libro gratis
                          </a>
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> MagicMind
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
