import { motion } from "framer-motion";

function SectionHead({
  eyebrow,
  title,
  sub,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <div className="mb-4 text-xs uppercase tracking-[0.22em] text-ink-soft">{eyebrow}</div>
      <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">{title}</h2>
      <p className="mt-5 text-lg text-ink-soft">{sub}</p>
    </motion.div>
  );
}

export default SectionHead;