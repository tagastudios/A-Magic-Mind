import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import { slogan } from "../../content/settings/settings.json";

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  mouseDrag: true,
  items: 1,
  navText: [
    "<i class='flaticon-left-chevron'></i>",
    "<i class='flaticon-right-chevron'></i>",
  ],
};

const MainBanner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      {display ? (
        <OwlCarousel
          className="home-slides owl-carousel owl-theme"
          {...options}
        >
          <div className="main-banner item-bg1 bg-blurry">
            <div className="container z1000">
              <div className="main-banner-content">
                <h1>{slogan}!!</h1>
                <p>
                  Los niños aprenden mientras juegan, más importante aún, en el
                  juego, los niños aprenden como aprender..! La educación no
                  consiste en ofrecer las cosas ya hechas o dar las respuestas
                  acertadas. Se trata de mostrarles el camino para que con lo
                  aprendido sean ellos los protagonistas de sus propias
                  decisiones y de sus propios errores. Así irán construyendo y
                  desarrollando su personalidad y sus capacidades físicas e
                  intelectuales.
                </p>

                <div className="btn-box">
                  <Link href="/index-4/#">
                    <a className="btn btn-primary">Schedule a Demo</a>
                  </Link>
                  <Link href="/index-4/#">
                    <a className="optional-btn">Get Started Free</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="main-banner item-bg2 bg-blurry">
            <div className="container z1000">
              <div className="main-banner-content">
                <h1>World’s Leading Machine Learning Company</h1>
                <p>
                  ML today are able to supply needful of help, information, and
                  positive experience of maintaining intimacy with customers.
                  Eventually, chatbot ideas bring a pleasant experience of all
                  these qualities into the conversation.
                </p>

                <div className="btn-box">
                  <Link href="/index-4/#">
                    <a className="btn btn-primary">Schedule a Demo</a>
                  </Link>
                  <Link href="/index-4/#">
                    <a className="optional-btn">Get Started Free</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        ""
      )}
    </>
  );
};

export default MainBanner;
