import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { v: "2.4k+", l: "Routes daily" },
    { v: "98.4%", l: "On-time arrivals" },
    { v: "2M+", l: "Travellers a year" },
    { v: "27", l: "Years on the road" },
  ];
  return (
    <section className="border-y border-border bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <div className="font-display text-6xl tracking-tighter">{s.v}</div>
            <div className="mt-2 text-sm text-ink-soft">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;