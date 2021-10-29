import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";

function Contact() {
  return (
    <>
      <PageBanner
        pageTitle="Contacto"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contacto"
        bgImgClass="item-bg4"
      />

      <ContactFormContent />
    </>
  );
}

export default Contact;
