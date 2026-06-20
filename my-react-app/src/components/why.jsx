import { motion } from "framer-motion";
import { ShieldCheck, Wifi, Clock, Sparkles } from "lucide-react";
import SectionHead from "./sectionhead";

function Why() {
  const items = [
    { icon: ShieldCheck, title: "Safety, certified.", desc: "ISO-rated coaches, vetted drivers, 24/7 control tower." },
    { icon: Wifi, title: "Always connected.", desc: "Onboard Wi-Fi, USB-C at every seat, ambient cabin lighting." },
    { icon: Clock, title: "On-time, every time.", desc: "98.4% on-time arrival across our network this month." },
    { icon: Sparkles, title: "Quietly premium.", desc: "Sleeper bays, recliner seats and a calmer way to arrive." },
  ];
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Why MSRTC?"
          title={<>The intercity bus, <em className="font-display italic text-red-600">refined</em>.</>}
          sub="Every detail considered — from the moment you board to the second you arrive."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group relative bg-white p-8 transition-colors hover:bg-muted/40"
            >
              <it.icon className="h-7 w-7 text-red-600 transition-transform group-hover:scale-110" />
              <h3 className="mt-8 font-display text-2xl">{it.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;