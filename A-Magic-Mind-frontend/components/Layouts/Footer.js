import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="/">
                    <img
                      className="main-logo"
                      src="/images/LOGO.png"
                      alt="image"
                    />
                  </a>
                  <p>Son Pequeños Pero Aprenden a lo Grande!!</p>
                </div>

                <ul className="social">
                  <li>
                    <Link href="/#">
                      <a target="_blank">
                        <i className="flaticon-facebook-letter-logo"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a target="_blank">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a target="_blank">
                        <i className="flaticon-instagram-logo"></i>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <a target="_blank">
                        <i className="flaticon-youtube-play-button"></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Servicios</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="/service-details">
                      <a>PlayPals</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Servicios Personalizados</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <a>Productos</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Atajos</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about">
                      <a>Nosotros</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a>Blogs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contactános</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <a>Servicios</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a>Planes</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contactános</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Dirección:</span>
                    9721 SW 152th Street #309 <br />
                    Miami FL 33157
                  </li>
                  <li>
                    <span>Email:</span>
                    amagicmind.us@gmail.com
                  </li>
                  <li>
                    <span>Phone:+1 (786) 301 - 2529</span>+
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} A Magic Mind. All Rights
                  Reserved{" "}
                  <a href="#" target="_blank">
                    by TagaStudios
                  </a>
                  .
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
