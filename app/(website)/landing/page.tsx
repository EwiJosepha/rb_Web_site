import React from "react";
import HeroSection from "../../Components/organisms/hero";
import OriginSec from "../../Components/organisms/origin";
import Testimonials from "../../Components/organisms/testimonial";
import Potentialsection from "../../Components/organisms/potential";
import FeaturedStudent from "../../Components/organisms/featured-student";
import Footer from "../../Components/organisms/footer";

function Landing() {
  return (
    <div className="flex w-full flex-col justify-center bg-white">
      <HeroSection />
      <OriginSec />
      <Testimonials />
      <FeaturedStudent />
      <Potentialsection />
      <Footer />
    </div>
  );
}

export default Landing;
