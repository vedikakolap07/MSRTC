import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function CTA() {
  return (
    <section className="px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-ink bg-ink p-12 text-white md:p-20"
      >
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-shine opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent opacity-20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
            Your next journey<br />
            <span className="italic opacity-70">begins here.</span>
          </h2>
          <div>
            <p className="max-w-md text-white/70">
              Two thousand routes. One beautiful app. Book in seconds and walk on board minutes from your door.
            </p>
            <a
              href="#book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Book your ticket <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;