import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "./sectionhead";
import { useLang } from "../context/LangContext";

import routeGoa from "../assets/route-goa.jpeg";
import routeMountains from "../assets/route-mountain.jpeg";
import routeAjanta from "../assets/route-ajanta.jpeg";
import routeMumbai from "../assets/route-mumbai.jpeg";

const DATA = {
  en: {
    eyebrow: "Signature routes",
    title: (
      <>
        Journeys worth{" "}
        <em className="font-display italic text-red-600">remembering</em>.
      </>
    ),
    sub: "Hand-picked corridors across the Western Ghats, Konkan coast and Deccan plateau.",
    marquee: [
      "Mumbai → Pune · 3h · On Time",
      "Pune → Nashik · 2h · On Time",
      "Nashik → Aurangabad · 4h · On Time",
      "Aurangabad → Goa · 5h · On Time",
    ],
    routes: [
      {
        city: "Mumbai → Goa",
        img: routeGoa,
        time: "11h 20m",
        price: "₹1,499",
      },
      {
        city: "Pune → Mahabaleshwar",
        img: routeMountains,
        time: "3h 40m",
        price: "₹699",
      },
      {
        city: "Mumbai → Aurangabad",
        img: routeAjanta,
        time: "7h 15m",
        price: "₹1,099",
      },
      {
        city: "Nashik → Mumbai",
        img: routeMumbai,
        time: "4h 05m",
        price: "₹599",
      },
    ],
  },

  mr: {
    eyebrow: "लोकप्रिय मार्ग",
    title: (
      <>
        स्मरणात राहतील असे{" "}
        <em className="font-display italic text-red-600">प्रवास</em>.
      </>
    ),
    sub: "पश्चिम घाट, कोकण किनारा आणि दख्खन पठारावरील निवडक मार्ग.",
    marquee: [
      "मुंबई → पुणे · ३ तास · वेळेवर",
      "पुणे → नाशिक · २ तास · वेळेवर",
      "नाशिक → औरंगाबाद · ४ तास · वेळेवर",
      "औरंगाबाद → गोवा · ५ तास · वेळेवर",
    ],
    routes: [
      {
        city: "मुंबई → गोवा",
        img: routeGoa,
        time: "११ तास २० मि.",
        price: "₹१,४९९",
      },
      {
        city: "पुणे → महाबळेश्वर",
        img: routeMountains,
        time: "३ तास ४० मि.",
        price: "₹६९९",
      },
      {
        city: "मुंबई → औरंगाबाद",
        img: routeAjanta,
        time: "७ तास १५ मि.",
        price: "₹१,०९९",
      },
      {
        city: "नाशिक → मुंबई",
        img: routeMumbai,
        time: "४ तास ०५ मि.",
        price: "₹५९९",
      },
    ],
  },
};

function Marquee() {
  const { lang } = useLang();
  const tx = DATA[lang];

  return (
    <section className="border-y border-border bg-[#1a1a1a] py-8 overflow-hidden">
      <div className="flex marquee gap-16 whitespace-nowrap font-display text-sm text-white">
        {[...tx.marquee, ...tx.marquee].map((city, i) => (
          <span key={i} className="flex items-center gap-16">
            {city}
            <span className="text-red-600">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Routes() {
  const { lang } = useLang();
  const tx = DATA[lang];

  return (
    <section id="routes" className="mx-auto max-w-7xl px-6 py-20">
      <SectionHead
        eyebrow={tx.eyebrow}
        title={tx.title}
        sub={tx.sub}
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tx.routes.map((r, i) => (
          <motion.a
  key={r.city}
  href="#"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.08, duration: 0.7 }}
  className="group relative block overflow-hidden rounded-3xl border border-border bg-white shadow-soft"
>
  <div className="aspect-[3/4] overflow-hidden">
    <img
      src={r.img}
      alt={r.city}
      loading="lazy"
      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
    />
  </div>

  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 text-white">
    <div className="flex items-center justify-between text-xs uppercase tracking-widest opacity-80">
      <span>{r.time}</span>
      <span>{r.price}</span>
    </div>

    <div className="mt-1 font-display text-2xl leading-tight">
      {r.city}
    </div>
  </div>

  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink opacity-0 transition-opacity group-hover:opacity-100">
    <ArrowUpRight className="h-4 w-4" />
  </div>
</motion.a>
        ))}
      </div>
    </section>
  );
}

export { Marquee, Routes };
export default Marquee;