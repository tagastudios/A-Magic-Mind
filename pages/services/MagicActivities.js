import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent1";

function Custom() {
  return (
    <>
      <PageBanner
        pageTitle="Magic Activities"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Detalles de Servicio"
        bgImgClass="item-bg2"
      />

      <ServiceDetailsContent />
    </>
  );
}

export default Custom;
