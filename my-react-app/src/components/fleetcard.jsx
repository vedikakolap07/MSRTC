import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "./sectionhead";
import { useLang } from "../context/LangContext";
import fleetAc from "../assets/fleet-ac1.jpeg";
import fleetSleeper from "../assets/fleet-sleeper.jpeg";

const t = {
  en: {
    eyebrow: "The fleet",
    title: <>Designed to glide. Built to <em className="font-display italic text-red-600">last</em>.</>,
    sub: "Three signature classes, each engineered for a different kind of journey.",
    explore: "Explore",
    cards: [
      { tag: "Flagship",  name: "Shivneri Premium", desc: "Reclining leather seats, blackout shades, panoramic windows." },
      { tag: "Overnight", name: "Sleeper Lounge",    desc: "Private sleeper bays with ambient lighting and quiet zones." },
      { tag: "Everyday",  name: "City AC",           desc: "The everyday workhorse, comfortably refined for short hops." },
    ],
  },
  mr: {
    eyebrow: "ताफा",
    title: <>सहज सरकण्यासाठी बनवलेले. <em className="font-display italic text-red-600">टिकाऊपणासाठी</em> निर्मित.</>,
    sub: "तीन विशेष वर्ग, प्रत्येक वेगळ्या प्रकारच्या प्रवासासाठी तयार केलेला.",
    explore: "पाहा",
    cards: [
      { tag: "प्रमुख",    name: "शिवनेरी प्रीमियम", desc: "मागे झुकणाऱ्या चामड्याच्या सीट, ब्लॅकआउट शेड्स, पॅनोरामिक खिडक्या." },
      { tag: "रात्रीचा", name: "स्लीपर लाउंज",      desc: "खासगी झोपण्याची जागा, सौम्य दिवे आणि शांत क्षेत्र." },
      { tag: "रोजचा",    name: "सिटी एसी",           desc: "रोजचा विश्वासू, छोट्या प्रवासासाठी आरामदायी पर्याय." },
    ],
  },
};

const imgs  = [fleetAc, fleetSleeper, fleetAc];
const darks = [false, true, false];

function Fleet() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section id="fleet" className="mx-auto max-w-7xl px-6 py-5">
      <div style={{ padding: "0 24px 8px" }}>
        <svg viewBox="0 0 680 20" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="paith" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
              <rect width="40" height="20" fill="#1a1a1a" />
              <polygon points="0,10 8,0 16,10 8,20" fill="#C41E3A" />
              <polygon points="12,10 20,0 28,10 20,20" fill="#FFD700" />
              <polygon points="24,10 32,0 40,10 32,20" fill="#138808" />
            </pattern>
          </defs>
          <rect width="680" height="20" fill="url(#paith)" rx="0" />
        </svg>
      </div>

      <SectionHead eyebrow={tx.eyebrow} title={tx.title} sub={tx.sub} />

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {tx.cards.map((card, i) => (
          <FleetCard key={i} tag={card.tag} name={card.name} desc={card.desc} img={imgs[i]} dark={darks[i]} explore={tx.explore} />
        ))}
      </div>
    </section>
  );
}

function FleetCard({ tag, name, desc, img, dark, explore }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`group relative overflow-hidden rounded-3xl border p-8 shadow-soft ${dark ? "border-ink bg-ink text-white" : "border-border bg-white"}`}
    >
      <div className={`text-xs uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-ink-soft"}`}>{tag}</div>
      <h3 className="mt-2 font-display text-3xl">{name}</h3>
      <p className={`mt-2 max-w-xs text-sm ${dark ? "text-white/70" : "text-ink-soft"}`}>{desc}</p>
      <div className="mt-8 overflow-hidden rounded-2xl">
        <img src={img} alt={name} loading="lazy" className="h-56 w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
      </div>
      <a href="#" className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${dark ? "text-white" : "text-ink"}`}>
        {explore} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.article>
  );
}

export default Fleet;