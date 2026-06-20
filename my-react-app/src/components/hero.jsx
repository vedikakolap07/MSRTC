import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Calendar, Bus, Search, ChevronRight } from "lucide-react";

import heroImage from "../assets/maha.png";

const fade = {
  hidden: { opacity: 0, y: 24, filter: "" },
  show: { opacity: 1, y: 0, filter: "" },
};

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="w-full px-4 pt-4 pb-8">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-3 mb-3">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg bg-red-600 grid place-items-center text-white font-bold text-xs">
            ST
          </div>
          <span className="font-semibold text-sm tracking-wide text-slate-800">MSRTC</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Home", "About us", "RTI Act", "Act, Rules & Circulars", "Tender", "Feedback", "FAQ & Recruitments"].map((l) => (
            <a key={l} href="#" className="text-slate-700 hover:text-slate-900 text-[13px] font-medium no-underline transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-white/60 border border-black/80 rounded-full px-4 py-1.5 text-slate-500 text-xs">
            <Search className="h-3 w-3" />
            Search for a place, city, or destination…
          </div>
          <button className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-800 transition-colors">
            Book now
          </button>
        </div>
      </nav>

      {/* Hero wrapper — relative so BookingBar can anchor to it */}
      <div className="relative">

        {/* Hero image section — overflow-hidden stays here, BookingBar is OUTSIDE */}
        <section
          ref={ref}
          className="relative w-full h-[88vh] min-h-[520px] overflow-hidden rounded-2xl flex items-center justify-center"
        >
          <img
            src={heroImage}
            alt="Maharashtra hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Center content */}
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center px-6 -mt-20"
          >
            <motion.h1
              variants={fade}
              className="font-display text-[clamp(72px,13vw,130px)] font-bold text-white leading-[0.92] tracking-tight drop-shadow-2xl"
            >
              <br />
              <em style={{ fontStyle: "italic" }} className="text-yellow-300"></em>
            </motion.h1>

            <motion.p variants={fade} className="mt-5 max-w-[460px] text-white/80 text-[15px] leading-relaxed" />

            <motion.div variants={fade} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
              >
                Plan Your Trip
                <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#destinations"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                Explore Destinations
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* BookingBar OUTSIDE <section> so overflow-hidden doesn't clip it */}
        <BookingBar />

      </div>
    </div>
  );
}

function BookingBar() {
  const [busType, setBusType] = useState("any");

  return (
    <motion.div
      id="book"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute bottom-0 translate-y-1/2 left-0 right-0 z-20 px-6"
    >
      <div className="mx-auto max-w-[880px] flex items-end gap-2.5 rounded-2xl bg-white px-6 py-5 shadow-2xl">
        <Field
          icon={<MapPin className="h-[15px] w-[15px] stroke-red-600" />}
          label="From"
          defaultValue="Mumbai (CST)"
        />
        <Divider />
        <Field
          icon={<MapPin className="h-[15px] w-[15px] stroke-red-600" />}
          label="To"
          defaultValue="Pune"
        />
        <Divider />
        <Field
          icon={<Calendar className="h-[15px] w-[15px] stroke-red-600" />}
          label="Date"
          defaultValue="Sat, 21 Jun 2025"
        />
        <Divider />

        <div className="flex-1 min-w-0">
          <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
            Bus Type
          </label>
          <div className="flex items-center gap-1.5 border-b-[1.5px] border-neutral-200 pb-1.5">
            <Bus className="h-[15px] w-[15px] stroke-red-600 flex-shrink-0" />
            <select
              value={busType}
              onChange={(e) => setBusType(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-sm font-medium text-neutral-900"
            >
              <option value="any">Any Bus</option>
              <option value="shivneri">Shivneri AC</option>
              <option value="asiad">Asiad Semi-Luxury</option>
              <option value="ordinary">Ordinary</option>
            </select>
          </div>
        </div>

        <button className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors whitespace-nowrap">
          <Search className="h-[15px] w-[15px]" />
          Search Buses
        </button>
      </div>
    </motion.div>
  );
}

function Field({ icon, label, defaultValue }) {
  return (
    <div className="flex-1 min-w-0">
      <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
        {label}
      </label>
      <div className="flex items-center gap-1.5 border-b-[1.5px] border-neutral-200 pb-1.5">
        {icon}
        <input
          type="text"
          defaultValue={defaultValue}
          className="w-full bg-transparent border-none outline-none text-sm font-medium text-neutral-900 placeholder:text-neutral-400"
        />
      </div>
    </div>
  );
}

function Divider() {
  return <div className="w-px h-11 bg-neutral-200 flex-shrink-0" />;
}

export default Hero;