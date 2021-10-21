import React, { Component } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

function ContactFormContent() {
  return (
    <section className="contact-area ptb-110">
      <div className="container">
        <div className="section-title">
          <span>Contáctanos</span>
          <h2>Envíanos un mensaje y responderemos cualquier inquietud</h2>
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
            <h3>Contáctanos</h3>
            <h2>
              <span className="number">+1 (786) 301-2529</span>
              <span className="or">&</span>
              <span className="email">info@amagicmindus.com</span>
            </h2>

            <ul className="social">
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormContent;
