import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import { useRouter } from "next/router";

function Contact() {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  return (
    <>
      <PageBanner
        pageTitle="Contacto"
        homePageUrl="/"
        homePageText="Home"
        activePageText={idioma === "es-ES" ? "Contacto" : "Contact"}
        bgImgClass="item-bg4"
      />

      <ContactFormContent />
    </>
  );
}

export default Contact;
