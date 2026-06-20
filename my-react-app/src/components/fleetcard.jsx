import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHead from "./sectionhead";
import fleetAc from "../assets/fleet-ac1.jpeg";
import fleetSleeper from "../assets/fleet-sleeper.jpeg";

function Fleet() {
  return (
    <section id="fleet" className="mx-auto max-w-7xl px-6 py-5">
      <SectionHead
        eyebrow="The fleet"
        title={<>Designed to glide. Built to <em className="font-display italic text-red-600">last</em>.</>}
        sub="Three signature classes, each engineered for a different kind of journey."
      />
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        <FleetCard
          tag="Flagship"
          name="Shivneri Premium"
          desc="Reclining leather seats, blackout shades, panoramic windows."
          img={fleetAc}
          dark={false}
        />
        <FleetCard
          tag="Overnight"
          name="Sleeper Lounge"
          desc="Private sleeper bays with ambient lighting and quiet zones."
          img={fleetSleeper}
          dark
          large
        />
        <FleetCard
          tag="Everyday"
          name="City AC"
          desc="The everyday workhorse, comfortably refined for short hops."
          img={fleetAc}
          dark={false}
        />
      </div>
    </section>
  );
}

function FleetCard({
  tag,
  name,
  desc,
  img,
  dark,
  large,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`group relative overflow-hidden rounded-3xl border p-8 shadow-soft ${
        dark ? "border-ink bg-ink text-white" : "border-border bg-white"
      } ${large ? "lg:row-span-1" : ""}`}
    >
      <div className={`text-xs uppercase tracking-[0.2em] ${dark ? "text-white/60" : "text-ink-soft"}`}>
        {tag}
      </div>
      <h3 className="mt-2 font-display text-3xl">{name}</h3>
      <p className={`mt-2 max-w-xs text-sm ${dark ? "text-white/70" : "text-ink-soft"}`}>{desc}</p>
      <div className="mt-8 overflow-hidden rounded-2xl">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="h-56 w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
        />
      </div>
      <a
        href="#"
        className={`mt-6 inline-flex items-center gap-1 text-sm font-medium ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </motion.article>
  );
}

export default Fleet;