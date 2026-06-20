import { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { MapPin, Calendar, Bus, Search, ChevronRight, Languages } from "lucide-react";
import { useLang } from "../context/LangContext";
import { BookingModal } from "./BookingModal";
import heroImage from "../assets/hero3.jpeg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const t = {
  en: {
    eyebrow: "Since 1948 · Maharashtra State Road Transport",
    title: "Maharashtra",
    tagline: "महाराष्ट्राचा प्रवास करा",
    cta1: "Plan Your Trip",
    cta2: "Explore Destinations",
    langBtn: "मराठी",
    nav: ["Home", "About Us", "RTI Act", "Act, Rules & Circulars",  "FAQ & Recruitments"],
    bookNow: "Book now",
    searchPlaceholder: "Search for a place, city, or destination…",
    from: "From", to: "To", date: "Date", busType: "Bus Type",
    searchBtn: "Search Buses",
    any: "Any Bus", shivneri: "Shivneri AC", asiad: "Asiad Semi-Luxury", ordinary: "Ordinary",
  },
  mr: {
    eyebrow: "१९४८ पासून · महाराष्ट्र राज्य मार्ग परिवहन महामंडळ",
    title: "महाराष्ट्र",
    tagline: "Discover Maharashtra",
    cta1: "सहल नियोजन करा",
    cta2: "ठिकाणे पाहा",
    langBtn: "English",
    nav: ["मुख्यपृष्ठ", "आमच्याबद्दल", "आरटीआय कायदा", "कायदे व परिपत्रके", "निविदा", "अभिप्राय", "सतत विचारले जाणारे प्रश्न"],
    bookNow: "आता बुक करा",
    searchPlaceholder: "ठिकाण, शहर किंवा गंतव्य शोधा…",
    from: "कुठून", to: "कुठे", date: "तारीख", busType: "बसचा प्रकार",
    searchBtn: "बस शोधा",
    any: "कोणतीही", shivneri: "शिवनेरी एसी", asiad: "आशियाड", ordinary: "साधारण",
  },
};

export function Hero() {
  const ref = useRef(null);
  const { lang, toggle } = useLang();
  const tx = t[lang];
  useScroll({ target: ref, offset: ["start start", "end start"] });

  const [form, setForm] = useState({
    from: "Mumbai (CST)",
    to: "Pune",
    date: "Sat, 21 Jun 2025",
    busType: "any",
  });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
            {tx.nav.map((l) => (
              <a key={l} href="#" className="text-slate-700 hover:text-slate-900 text-[13px] font-medium no-underline transition-colors">
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-white/60 border border-black/20 rounded-full px-4 py-1.5 text-slate-500 text-xs">
              <Search className="h-3 w-3" />
              {tx.searchPlaceholder}
            </div>
            {/* Language toggle */}
            <button
              onClick={toggle}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Languages className="h-3.5 w-3.5" />
              {tx.langBtn}
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              {tx.bookNow}
            </button>
          </div>
        </nav>

        {/* Hero wrapper */}
        <div className="relative">
          <section
            ref={ref}
            className="relative w-full h-[88vh] min-h-[520px] overflow-hidden rounded-2xl flex items-center justify-center"
          >
            {/* Background image */}
            <img
              src={heroImage}
              alt="Maharashtra hero"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55 pointer-events-none" />

            {/* Devanagari watermark */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              aria-hidden="true"
            >
              <span
                style={{
                  fontSize: "clamp(120px, 22vw, 280px)",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.06)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                महाराष्ट्र
              </span>
            </div>

            {/* Center content */}
            <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
              className="relative z-10 flex flex-col items-center text-center px-6 -mt-10"
            >
              <motion.p
                variants={fade}
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
              >
                {tx.eyebrow}
              </motion.p>

              <motion.h1
                variants={fade}
                style={{
                  fontSize: "clamp(40px, 11vw, 120px)",
                  fontWeight: 200,
                  color: "white",
                  lineHeight: 0.9,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  textShadow: "0 4px 40px rgba(0,0,0,0.4)",
                }}
              >
                {tx.title}
              </motion.h1>

              <motion.p
                variants={fade}
                style={{
                  fontSize: "clamp(11px, 3vw, 20px)",
                  fontWeight: 600,
                  color: "#f5c842",
                  marginTop: "12px",
                  letterSpacing: "0.02em",
                }}
              >
                {tx.tagline}
              </motion.p>

              <motion.div variants={fade} className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  {tx.cta1}
                  <ChevronRight className="h-4 w-4" />
                </button>
                <a
                  href="#destinations"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 backdrop-blur px-8 py-3.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
                >
                  {tx.cta2}
                </a>
              </motion.div>
            </motion.div>
          </section>

          {/* BookingBar outside <section> so overflow-hidden doesn't clip it */}
          <BookingBar form={form} setForm={setForm} tx={tx} onSearch={() => setModalOpen(true)} />
        </div>
      </div>

      {/* Booking modal */}
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} searchParams={form} />
    </>
  );
}

function BookingBar({ form, setForm, tx, onSearch }) {
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
          label={tx.from}
          value={form.from}
          onChange={(v) => setForm({ ...form, from: v })}
        />
        <Divider />
        <Field
          icon={<MapPin className="h-[15px] w-[15px] stroke-red-600" />}
          label={tx.to}
          value={form.to}
          onChange={(v) => setForm({ ...form, to: v })}
        />
        <Divider />
        <Field
          icon={<Calendar className="h-[15px] w-[15px] stroke-red-600" />}
          label={tx.date}
          value={form.date}
          onChange={(v) => setForm({ ...form, date: v })}
        />
        <Divider />

        <div className="flex-1 min-w-0">
          <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
            {tx.busType}
          </label>
          <div className="flex items-center gap-1.5 border-b-[1.5px] border-neutral-200 pb-1.5">
            <Bus className="h-[15px] w-[15px] stroke-red-600 flex-shrink-0" />
            <select
              value={form.busType}
              onChange={(e) => setForm({ ...form, busType: e.target.value })}
              className="w-full bg-transparent border-none outline-none text-sm font-medium text-neutral-900"
            >
              <option value="any">{tx.any}</option>
              <option value="shivneri">{tx.shivneri}</option>
              <option value="asiad">{tx.asiad}</option>
              <option value="ordinary">{tx.ordinary}</option>
            </select>
          </div>
        </div>

        <button
          onClick={onSearch}
          className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-red-700 transition-colors whitespace-nowrap"
        >
          <Search className="h-[15px] w-[15px]" />
          {tx.searchBtn}
        </button>
      </div>
    </motion.div>
  );
}

function Field({ icon, label, value, onChange }) {
  return (
    <div className="flex-1 min-w-0">
      <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
        {label}
      </label>
      <div className="flex items-center gap-1.5 border-b-[1.5px] border-neutral-200 pb-1.5">
        {icon}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
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