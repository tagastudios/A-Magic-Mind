import React from "react";
import Link from "next/link";
import { phone, email, address } from "../../content/settings/contact.json";
import { slogan } from "../../content/settings/settings.json";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="/">
                  <img
                    className="main-logo"
                    src="/images/LOGO.png"
                    alt="image"
                  />
                </a>
                <p>{slogan}</p>
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

          <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
            <div className="single-footer-widget">
              <h3>Servicios</h3>

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

          <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
            <div className="single-footer-widget">
              <h3>Atajos</h3>

              <ul className="quick-links-list">
                <li>
                  <Link href="/about-us/">
                    <a>Nosotros</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blogs/">
                    <a>Blogs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact/">
                    <a>Contactános</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
            <div className="single-footer-widget">
              <h3>Contactános</h3>

              <ul className="footer-contact-list">
                <li>
                  <span>Dirección:</span>
                  9721 SW 152th Street #309.
                  <br></br>
                  Miami, FL 33157
                </li>
                <li>
                  <span>Email:</span>
                  <a href={`mailto: info@amagicmindus.com`}>
                    info@amagicmindus.com
                  </a>
                </li>
                <li>
                  <span>Phone:</span>
                  <a href={`tel:${phone}`}>{phone}</a>
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
