import React from "react";
import MainBanner from "../components/Home/MainBanner copy";
import MainServices from "../components/Home/MainServices";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ProfessionalSolutions from "../components/Home/ProfessionalSolutions";
import FunFacts from "../components/Home/FunFacts";
import Projects from "../components/Home/Projects";
import Webinar from "../components/Home/Webinar";
import Testimonials from "../components/Home/Testimonials";
import BlogPostManual from "../components/Common/BlogPostManual";
import PricingPlan from "../components/Home/PricingPlan";
import FreeTrialForm from "../components/Home/FreeTrialForm";
import PartnerSlide from "../components/Home/PartnerSlider";
import Avioncito from "../components/Home/Avioncito";

export default function Home() {
  return (
    <>
      <MainBanner />
      <MainServices />
      <Avioncito />
      <WhyChooseUs />
      <ProfessionalSolutions />
      <Projects />
      {/* <Webinar /> */}
      <FunFacts />

      <Testimonials />
      <BlogPostManual />
      {/* <PricingPlan /> */}
      <FreeTrialForm />
      <PartnerSlide />
    </>
  );
}
