import React, { Component } from "react";
import { useRouter } from "next/router";

class FreeTrialForm extends Component {
  render() {
    const idioma = "en-US";
    return (
      <section className="free-trial-area">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="free-trial-image">
              <img src="/images/woman2.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="free-trial-content">
              <h2>
                {idioma === "es-ES"
                  ? "Quieres saber más sobre nuestro método?"
                  : "Do you want to know more about our method? "}
              </h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder={
                    idioma === "es-ES"
                      ? "Ingresa tu correo electrónico"
                      : "Enter your email"
                  }
                />
                <button type="submit">
                  {idioma === "es-ES" ? "Registrate gratis" : "Sign up free"}
                </button>
              </form>

              <p>
                {idioma === "es-ES"
                  ? "No te arrepentirás!!"
                  : "You will not regret!!"}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FreeTrialForm;
