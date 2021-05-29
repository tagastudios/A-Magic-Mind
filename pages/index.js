import React from "react";
import MainBanner from "../components/Home/MainBanner";
import MainServices from "../components/Home/MainServices";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import ProfessionalSolutions from "../components/Home/ProfessionalSolutions";
import FunFacts from "../components/Home/FunFacts";
import Projects from "../components/Home/Projects";
import Webinar from "../components/Home/Webinar";
import Testimonials1 from "../components/Home/Testimonials";
import Testimonials2 from "../components/Home/FeedbackSlider";
import BlogPost from "../components/Common/BlogPost";
import PricingPlan from "../components/Home/PricingPlan";
import FreeTrialForm from "../components/Home/FreeTrialForm";
import PartnerSlide from "../components/Home/PartnerSlider";

export default function Home() {
  return (
    <>
      <MainBanner />
      <MainServices />
      <WhyChooseUs />
      <ProfessionalSolutions />
      <FunFacts />
      <Projects />
      <Webinar />
      <Testimonials1 />
      <Testimonials2 />
      <BlogPost />
      <PricingPlan />
      <FreeTrialForm />
      <PartnerSlide />
    </>
  );
}
