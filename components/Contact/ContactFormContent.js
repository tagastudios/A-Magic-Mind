import React, { Component } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { useRouter } from "next/router";

function ContactFormContent() {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  return (
    <section className="contact-area ptb-110">
      <div className="container">
        <div className="section-title">
          <span>{idioma === "es-ES" ? "Contáctanos" : "Contact Us "}</span>
          <h2>
            {idioma === "es-ES"
              ? "Envíanos un mensaje y responderemos cualquier inquietud"
              : "Send us a message and we will answer any questions "}
          </h2>
        </div>

        <div className="contact-form">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="contact-image">
                <img src="/images/contact.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="contact-info">
          <div className="contact-info-content">
            <h3>{idioma === "es-ES" ? "Contáctanos" : "Contact Us "}</h3>
            <h2>
              <span className="number">+1 (786) 301-2529</span>
              <span className="or">&</span>
              <span className="email">info@amagicmindus.com</span>
            </h2>

            <ul className="social">
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>

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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormContent;
