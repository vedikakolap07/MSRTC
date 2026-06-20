import { LangProvider } from "./context/LangContext";
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
import Mobile from "./components/mobile";

function App() {
  return (
    <LangProvider>
      <Hero />
      <Marquee />
      <Routes />
      <Why />
      <Fleet />
      <Stats />
      <TopDestinations />
      <Mobile />
      <Testimonials />
      <CTA />
      <Footer />
    </LangProvider>
  );
}

export default App;