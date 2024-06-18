import FeaturedStudent from "../components/organisms/feature-student"
import Footer from "../components/organisms/footer"
import HeroSection from "../components/organisms/hero"
import Navbar from "../components/organisms/navbar"
import OriginSec from "../components/organisms/origin"
import Potentialsection from "../components/organisms/potentials"
import Testimonials from "../components/organisms/testimonial"
function Landing() {
  return (
    <div className=" bg-white">
      <Navbar />
      <HeroSection />
      <OriginSec />
      <Testimonials />
      <Potentialsection />
      <FeaturedStudent />
      <Footer />

    </div>
  )
}

export default Landing