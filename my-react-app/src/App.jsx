import Footer from "./components/footer";
import CTA from "./components/cta";
import Fleet from "./components/fleetcard";
import Marquee from "./components/marquee";
import { Routes } from "./components/marquee";
import Why from "./components/why";
import Stats from "./components/stats";
import Hero from "./components/hero";
import TopDestinations from "./components/topdestinations";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <>
  
      <Hero />
      <Marquee />
      <Routes />
      <Why />
      <Fleet />
      <Stats />
      <TopDestinations />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
