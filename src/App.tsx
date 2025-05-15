import Hero from "./sections/Hero"
import NavBar from "./components/NavBar"
import ShowcaseSection from "./sections/ShowcaseSection"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
