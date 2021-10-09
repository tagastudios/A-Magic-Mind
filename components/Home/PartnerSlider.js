import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: false,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: true,
  navText: [
    "<i className='flaticon-left-chevron'></i>",
    "<i className='flaticon-right-chevron'></i>",
  ],
};

const PartnerSlider = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="partner-section ptb-110">
      <div className="container">
        <div className="section-title">
          <h2>Magic Partner</h2>
        </div>

        <div className="flex flex-center">
          <div className="single-partner-item">
            <a href="/#" target="_blank">
              <img src="/images/partner/partner1.png" alt="image" />
            </a>
          </div>

          <div className="single-partner-item">
            <a href="/#" target="_blank">
              <img src="/images/partner/partner2.png" alt="image" />
            </a>
          </div>
        </div>
      </div>

      <div className="dot-shape1">
        <img src="/images/shape/dot1.png" alt="image" />
      </div>
      <div className="shape-img2">
        <img src="/images/shape/shape2.svg" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="/images/shape/shape4.svg" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="/images/shape/shape5.svg" alt="image" />
      </div>
    </div>
  );
};

export default PartnerSlider;
