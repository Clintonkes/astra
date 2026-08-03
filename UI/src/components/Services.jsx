import React from "react";
import { motion } from "framer-motion";
import { Scissors, Leaf, Snowflake, TreePine } from "lucide-react";

const SERVICES = [
  { icon: Scissors, t: "Lawn Mowing", d: "Weekly or bi-weekly cuts with clean, even lines tuned to Pennsylvania's growing season." },
  { icon: Leaf, t: "Lakefront Edging", d: "Crisp edging along beds, docks and shorelines — the detail that defines a well-kept property." },
  { icon: Snowflake, t: "Snow & Seasonal", d: "Fall clean-ups, leaf removal and snow management to keep your grounds pristine year-round." },
  { icon: TreePine, t: "Lakefront & Wooded Care", d: "Hedge trimming, mulch, bed management and wooded-lot maintenance for the lake region." },
];

export default function Services() {
  const fadeUp = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0 } };
  return (
    <section id="st-services" className="bg-sastra-pine py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sastra-lake/20 blur-3xl" />
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="text-sastra-sun font-manrope text-sm font-semibold tracking-[0.25em] uppercase">What We Do</span>
            <h2 className="font-fraunces text-sastra-cream text-4xl md:text-5xl font-bold mt-3 max-w-lg">Grounds fit for the lake country.</h2>
          </motion.div>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-sastra-cream/60 font-manrope max-w-sm">
            Dependable, honest, local crews — every visit.
          </motion.p>
        </div>
        <div className="divide-y divide-sastra-cream/10 border-y border-sastra-cream/10">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[auto_auto_1fr] gap-5 md:gap-10 items-center py-7 hover:bg-sastra-moss/20 transition rounded-2xl -mx-4 px-4"
            >
              <span className="font-fraunces text-sastra-sun/40 group-hover:text-sastra-sun text-3xl md:text-5xl font-bold w-12 transition">{String(idx + 1).padStart(2, "0")}</span>
              <div className="w-14 h-14 rounded-2xl bg-sastra-sun/15 grid place-items-center group-hover:bg-sastra-sun transition shrink-0">
                <s.icon className="text-sastra-sun group-hover:text-sastra-pine" size={24} />
              </div>
              <div>
                <h3 className="font-fraunces text-sastra-cream text-2xl md:text-3xl font-bold">{s.t}</h3>
                <p className="text-sastra-cream/60 font-manrope mt-1 max-w-2xl">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}