import React from "react";
import Link from "next/link";

const FunFacts = () => {
  return (
    <div className="fun-facts-area espacioabajo my-1">
      <div className="container">
        <div className="section-title flex funfacts-resp">
          <img src="/images/logoMMYES.png" />
          <h2>By </h2>
          <img src="/images/logoLGAYES.png" className="logoLGAYES" />
        </div>
        <p className="text-center">
          "La constancia es la virtud por la cual todas las otras virtudes dan
          frutos"
        </p>

        {/* <div className="row">
          <div className="col-lg-3 col-6 col-sm-3 col-md-3">
            <div className="single-funfacts">
              <h3>
                5000 <span className="sign-icon">+</span>
              </h3>
              <p>Downloaded</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 col-sm-3 col-md-3">
            <div className="single-funfacts">
              <h3>
                3000 <span className="sign-icon">+</span>
              </h3>
              <p>Feedback</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 col-sm-3 col-md-3">
            <div className="single-funfacts">
              <h3>
                500 <span className="sign-icon">+</span>
              </h3>
              <p>Workers</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 col-sm-3 col-md-3">
            <div className="single-funfacts">
              <h3>
                70 <span className="sign-icon">+</span>
              </h3>
              <p>Contributors</p>
            </div>
          </div>
        </div> */}

        <div className="contact-cta-box">
          <h3>Parte de nuestros ingresos son a beneficio de YES!</h3>

          <Link href="/#">
            <a className="btn btn-primary">
              LOGO DE YES<span></span>
            </a>
          </Link>
        </div>
      </div>

      {/* Shape Images  */}
      <div className="shape-img1">
        <img src="/images/map.png" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="shape-img2">
        <img src="/images/shape/shape2.svg" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="/images/shape/shape5.svg" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="/images/shape/shape4.svg" alt="image" />
      </div>
      <div className="dot-shape1">
        <img src="/images/shape/dot1.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot3.png" alt="image" />
      </div>
    </div>
  );
};

export default FunFacts;
