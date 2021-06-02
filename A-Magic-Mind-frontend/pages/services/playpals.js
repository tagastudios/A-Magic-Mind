import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";

function PlayPals() {
  return (
    <>
      <PageBanner
        pageTitle="PlayPals"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImgClass="item-bg2"
      />

      <ServiceDetailsContent />
    </>
  );
}

export default PlayPals;
