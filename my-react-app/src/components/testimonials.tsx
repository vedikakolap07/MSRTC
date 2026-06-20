import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ReactNode } from "react";

function SectionHead({
  eyebrow,
  title,

}: {
  eyebrow: string;
  title: ReactNode;

}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <div className="mb-4 text-xs uppercase tracking-[0.22em] text-ink-soft">
        {eyebrow}
      </div>
      <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">
        {title}
      </h2>
     
    </motion.div>
  );
}

function Testimonials() {
  const t = [
    {
      q: "I took charge as the Chairman of the State Transport Corporation and decided to face many tough challenges with my company. Regardless of the situation, the mood should be strong. I believe in mental strength, study and continuous effort. No matter how difficult the current situation of the corporation is, nothing is impossible.",
      n: 'Shri. Pratap Indirabai Baburao Sarnaik ',
      r: "Hon. Minister of Transport (Maharashtra State) & Chairman, MSRT Corporation",
    },
    {
      q: "Maharashtra State Road Transport Corporation is constantly striving to provide adequate, cost-effective, regular and efficient services to the people of the state. It is the only state transport corporation in the country to reach almost all the villages in the state of Maharashtra through its service. The Corporation is providing transport services to the people of the state through 251 bus stands and 578 bus stands located in talukas and important places.",
      n: "Dr. Madhav Kusekar (I.A.S.)",
      r: "Vice Chairman and Managing Director,MSRT Corporation",
    },
    {
      q: "The Shivneri class is the new standard. It made flying for 150km feel ridiculous.",
      n: "Rohan D.",
      r: "Engineer, Andheri",
    },
  ];

  return (
    <section id="stories" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHead
        eyebrow="Stories"
        title={
          <>
            Message from Chairman, Vice Chairman and Managing Director{" "}
            <em className="font-display italic text-red-600">saying</em>.
          </>
        }
        
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {t.map((x, i) => (
          <motion.figure
            key={x.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="rounded-3xl border border-border bg-white p-8 shadow-soft"
          >
            <div className="flex gap-0.5 text-amber-500">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>

            <blockquote className="mt-6 font-display text-sm leading-snug">
              "{x.q}"
            </blockquote>

            <figcaption className="mt-8 text-sm">
              <div className="font-medium">{x.n}</div>
              <div className="text-ink-soft">{x.r}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;