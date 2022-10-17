import React, { useState } from "react";
import Link from "next/link";
import { phone, email, address } from "../../content/settings/contact.json";
import { slogan, slogan_EN } from "../../content/settings/settings.json";
import { useRouter } from "next/router";

function Footer() {
  let currentYear = new Date().getFullYear();
  const [idioma, setIdioma] = useState(useRouter().locale);
  return (
    <footer className="footer-area">
      <div className="container margenes-peques">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="/">
                  <img
                    className="main-logo logo-footer"
                    src="/images/logo.png"
                    alt="image"
                  />
                </a>
                <p>{idioma === "es-ES" ? slogan : slogan_EN}.</p>
              </div>

              <ul className="social">
                <li>
                  <Link href="https://m.facebook.com/A-Magic-Mind-108413051350515/">
                    <a target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="https://instagram.com/amagicmindus?utm_medium=copy_link">
                    <a target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/">
                    <a target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-5 margin-izq-1">
            <div className="single-footer-widget">
              <h3>{idioma === "es-ES" ? "Servicios" : "Services"}</h3>

              <ul className="footer-services-list">
                <li>
                  <Link href="/playpals/">
                    <a>PlayPals</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/MagicActivities/">
                    <a>Magic Activities</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/products/books/">
                    <a>Libros</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/videos/">
                    <a>Videos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/toys/">
                    <a>Juguetes</a>
                  </Link>
                </li>
                <li>
                  <Link href="/products/merchandise/">
                    <a>Mercancía</a>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-5 margin-izq-2">
            <div className="single-footer-widget">
              <h3>{idioma === "es-ES" ? "Atajos" : "Useful Links"}</h3>

              <ul className="quick-links-list">
                <li>
                  <Link href="/about-us/">
                    <a>{idioma === "es-ES" ? "Nosotros" : "About Us"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#MainBlogs">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact/">
                    <a>{idioma === "es-ES" ? "Contactános" : "Contact"}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-5 margin-izq-3">
            <div className="single-footer-widget">
              <h3>{idioma === "es-ES" ? "Contactános" : "Contact Us"}</h3>

              <ul className="footer-contact-list">
                <li>
                  <span>Email:</span>
                  <a href={`mailto: info@amagicmindus.com`}>
                    info@amagicmindus.com
                  </a>
                </li>
                <li>
                  <span>{idioma === "es-ES" ? "Teléfono" : "Phone"}:</span>
                  <a href={`tel:+17863012529`}>+1 (786) 301-2529</a>
                </li>
                <li>
                  <span>{idioma === "es-ES" ? "Horario: " : "Schedule: "}</span>

                  <div>
                    {idioma === "es-ES"
                      ? "Lunes a Sábado "
                      : " Monday to Saturday"}
                  </div>

                  <li>
                    <span>
                      {idioma === "es-ES"
                        ? "10:00 am - 6:00pm"
                        : " 10:00 am - 6:00pm "}
                    </span>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <p>
                Copyright &copy;{currentYear} A Magic Mind. All Rights Reserved.{" "}
                <a href="#" target="_blank">
                  by TagaStudios
                </a>
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <ul>
                <li>
                  <Link href="/#">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
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

export default Footer;
