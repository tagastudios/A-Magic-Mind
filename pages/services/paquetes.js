import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import Paquetes from "../../components/Home/PricingPlan";

function PlayPals() {
  return (
    <>
      <PageBanner
        pageTitle="Paquetes"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImgClass="item-bg2"
      />

      <Paquetes />
    </>
  );
}

export default PlayPals;
