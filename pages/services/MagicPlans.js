import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import MagicPlans from "../../components/Home/PricingPlan";

function PlayPals() {
  return (
    <>
      <PageBanner
        pageTitle="Magic Plans"
        homePageUrl="/"
        homePageText="Inicio"
        activePageText="Detalles del servicio"
        bgImgClass="item-bg2"
      />

      <MagicPlans />
    </>
  );
}

export default PlayPals;
