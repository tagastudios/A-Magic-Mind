import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import MagicPlans from "../../components/Home/PricingPlan";
import { useRouter } from "next/router";

function PlayPals() {
  const [idioma, setIdioma] = React.useState(useRouter().locale);
  return (
    <>
      <PageBanner
        pageTitle={idioma === "es-ES" ? "Membresías" : "Magic Memberships"}
        homePageUrl="/"
        homePageText="Inicio"
        activePageText={
          idioma === "es-ES" ? "Detalles del Servicio" : "Services Details "
        }
        bgImgClass="item-bg2"
      />

      <MagicPlans />
    </>
  );
}

export default PlayPals;
