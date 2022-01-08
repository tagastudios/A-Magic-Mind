import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent1";
import { useRouter } from "next/router";

function Custom() {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  return (
    <>
      <PageBanner
        pageTitle="Magic Activities"
        homePageUrl="/"
        homePageText="Home"
        activePageText={
          idioma === "es-ES" ? "Detalles de Servicio" : "Services Details "
        }
        bgImgClass="item-bg2"
      />

      <ServiceDetailsContent />
    </>
  );
}

export default Custom;
