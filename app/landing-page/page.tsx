import FeaturedStudent from "../components/organisms/feature-student"
import Footer from "../components/organisms/footer"
import HeroSection from "../components/organisms/hero"
import Navbar from "../components/organisms/navbar"
import OriginSec from "../components/organisms/origin"
import Potentialsection from "../components/organisms/potentials"
function Landing() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OriginSec />
      <Potentialsection />
      <FeaturedStudent />
      <Footer />

    </div>
  )
}

export default Landing