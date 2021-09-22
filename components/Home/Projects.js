import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: true,
  margin: 30,
  navText: [
    "<i class='fas fa-arrow-left'></i>",
    "<i class='fas fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const Projects = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="projects-area pt-0 ptb-110">
      <div className="container">
        <div className="section-title">
          <h2>Un día con nuestros PLAYPALS!</h2>
        </div>
      </div>

      <div className="container-fluid">
        {display ? (
          <OwlCarousel
            className="projects-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-projects-box">
              <img src="/images/projects-img1.png" alt="image" />

              <div className="plus-icon">
                <Link href="/#">
                  <a>
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="single-projects-box">
              <img src="/images/projects-img2.png" alt="image" />

              <div className="plus-icon">
                <Link href="/#">
                  <a>
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="single-projects-box">
              <img src="/images/projects-img3.png" alt="image" />

              <div className="plus-icon">
                <Link href="/#">
                  <a>
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="single-projects-box">
              <img src="/images/projects-img4.png" alt="image" />

              <div className="plus-icon">
                <Link href="/#">
                  <a>
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="single-projects-box">
              <img src="/images/projects-img5.png" alt="image" />

              <div className="plus-icon">
                <Link href="/#">
                  <a>
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>

      <div className="circle-shape1">
        <img src="/images/projects-shape.png" alt="image" />
      </div>
    </div>
  );
};

export default Projects;
