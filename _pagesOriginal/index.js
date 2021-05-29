import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFive/MainBanner";
import MainServices from "../components/HomeFive/MainServices";
import WhyChooseUs from "../components/HomeFive/WhyChooseUs";
import ProfessionalSolutions from "../components/HomeFive/ProfessionalSolutions";
import FunFacts from "../components/HomeTwo/FunFacts";
import Projects from "../components/HomeTwo/Projects";
import Webinar from "../components/Home/Webinar";
import Testimonials1 from "../components/HomeTwo/Testimonials";
import Testimonials2 from "../components/Common/FeedbackSlider";
import BlogPost from "../components/Common/BlogPost";
import PricingPlan from "../components/HomeFive/PricingPlan";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
