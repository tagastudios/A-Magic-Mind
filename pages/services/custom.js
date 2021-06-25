import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent1";

function Custom() {
  return (
    <>
      <PageBanner
        pageTitle="Custom"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImgClass="item-bg2"
      />

      <ServiceDetailsContent />
    </>
  );
}

export default Custom;
