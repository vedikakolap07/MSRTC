import { motion } from "framer-motion";
import { ShieldCheck, Wifi, Clock, Sparkles } from "lucide-react";
import SectionHead from "./sectionhead";
import { useLang } from "../context/LangContext";

const t = {
  en: {
    eyebrow: "Why MSRTC?",
    title: <>The intercity bus, <em className="font-display italic text-red-600">refined</em>.</>,
    sub: "Every detail considered — from the moment you board to the second you arrive.",
    items: [
      { title: "Safety, certified.", desc: "ISO-rated coaches, vetted drivers, 24/7 control tower." },
      { title: "Always connected.", desc: "Onboard Wi-Fi, USB-C at every seat, ambient cabin lighting." },
      { title: "On-time, every time.", desc: "98.4% on-time arrival across our network this month." },
      { title: "Quietly premium.", desc: "Sleeper bays, recliner seats and a calmer way to arrive." },
    ],
  },
  mr: {
    eyebrow: "MSRTC का निवडावे?",
    title: <>आंतरशहर बस, <em className="font-display italic text-red-600">परिष्कृत</em>.</>,
    sub: "प्रत्येक तपशील विचारात घेतला — चढण्यापासून उतरण्यापर्यंत.",
    items: [
      { title: "सुरक्षितता, प्रमाणित.", desc: "ISO दर्जाचे बस, तपासलेले चालक, २४/७ नियंत्रण कक्ष." },
      { title: "सदैव जोडलेले.", desc: "बसमध्ये Wi-Fi, प्रत्येक सीटवर USB-C, आरामदायी प्रकाश." },
      { title: "वेळेवर, प्रत्येक वेळी.", desc: "या महिन्यात आमच्या नेटवर्कवर ९८.४% वेळेवर आगमन." },
      { title: "शांतपणे प्रीमियम.", desc: "स्लीपर बे, रिक्लायनर सीट आणि आरामदायी प्रवास." },
    ],
  },
};

const icons = [ShieldCheck, Wifi, Clock, Sparkles];

function Why() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow={tx.eyebrow} title={tx.title} sub={tx.sub} />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {tx.items.map((it, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                className="group relative bg-white p-8 transition-colors duration-300 hover:bg-[#1a1a1a]"
              >
                <Icon className="h-7 w-7 text-red-600 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-8 font-display text-2xl transition-colors duration-300 group-hover:text-white">{it.title}</h3>
                <p className="mt-2 text-sm text-ink-soft transition-colors duration-300 group-hover:text-white/60">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Why;