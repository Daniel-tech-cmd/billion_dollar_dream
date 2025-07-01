import Image from "next/image";
import Hero from "./components/Landing_Page/Hero";
import FeaturesSection from "./components/Landing_Page/FeaturesSection";
import Everthing from "./components/Landing_Page/Everthing";
import SmartFeatures from "./components/Landing_Page/SmartFeatures";
import HowItWorks from "./components/Landing_Page/HowItWorks";
import SeeItInAction from "./components/Landing_Page/SeeItInAction";
import WhyCreatorsLoveIt from "./components/Landing_Page/WhyCreatorsLoveIt";
import UserTestimonials from "./components/Landing_Page/UserTestimonials";
import PricingPlans from "./components/Landing_Page/PricingPlans";
import FaqSection from "./components/Landing_Page/FaqSection";
import Footer from "./components/Landing_Page/Footer";
import Navbar from "./components/Landing_Page/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <Everthing />
      <SmartFeatures />
      <HowItWorks />
      <SeeItInAction />
      <WhyCreatorsLoveIt />
      <UserTestimonials />
      <PricingPlans />
      <FaqSection />
      <Footer />
    </>
  );
}
