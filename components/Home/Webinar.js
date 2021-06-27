import React, { Component } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";

class Webinar extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <section className="webinar-area">
          <div className="row m-0 mt-5">
            <div className="col-lg-6 p-0">
              <div className="webinar-content center-align">
                <h2>Nuestros videos</h2>
                <p>Vive la experiencia junto a tus hijos</p>

                <Link href="/#">
                  <a className="btn btn-primary">Ver más..</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 p-0">
              <div className="webinar-video-image video-gradiant-cover">
                <img src="/images/woman.jpg" alt="image" />

                <div
                  onClick={(e) => {
                    e.preventDefault();
                    this.openModal();
                  }}
                  className="video-btn popup-youtube"
                >
                  <i className="flaticon-play-button"></i>
                </div>
              </div>
            </div>
          </div>

          {/* If you want to change the video need to update below videoID */}
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="_ysd-zHamjk"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
      </>
    );
  }
}

export default Webinar;
