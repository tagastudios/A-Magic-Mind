import React, { Component } from "react";

class FreeTrialForm extends Component {
  render() {
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
              <h2>Quieres saber más sobre nuestros métodos?</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Ingresa tu correo electrónico"
                />
                <button type="submit">Registrate gratis</button>
              </form>

              <p>No te arrepentirás!!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FreeTrialForm;
