import React from "react";
import About from "../components/About/About";
import PageBanner from "../components/Common/PageBanner";

function AboutUs() {
  return (
    <>
      <PageBanner
        pageTitle="Contacto"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg3"
      />
      <About />
    </>
  );
}

export default AboutUs;
