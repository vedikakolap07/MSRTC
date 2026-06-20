import { motion } from "framer-motion";
import { useLang } from "../context/LangContext";

const t = {
  en: [
    { v: "2.4k+", l: "Routes daily" },
    { v: "98.4%", l: "On-time arrivals" },
    { v: "2M+",   l: "Travellers a year" },
    { v: "75+",   l: "Years on the road" },
  ],
  mr: [
    { v: "२.४ हजार+", l: "दररोज मार्ग" },
    { v: "९८.४%",     l: "वेळेवर आगमन" },
    { v: "२ कोटी+",   l: "वार्षिक प्रवासी" },
    { v: "७५+",       l: "वर्षे सेवेत" },
  ],
};

function Stats() {
  const { lang } = useLang();
  const stats = t[lang];

  return (
    <section className="border-y border-border bg-[#C41E3A] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <div className="font-display text-6xl text-[#FFD700] tracking-tighter">{s.v}</div>
            <div className="mt-2 text-sm text-white">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;