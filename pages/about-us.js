import React from "react";
import About from "../components/About/About";
import PageBanner from "../components/Common/PageBanner";
import { useRouter } from "next/router";

function AboutUs() {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  return (
    <>
      <PageBanner
        pageTitle="Magic Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText={idioma === "es-ES" ? "Nosotros" : "About Us "}
        bgImgClass="item-bg3"
      />
      <About />
    </>
  );
}

export default AboutUs;
