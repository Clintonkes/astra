import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  { name: "Conneaut Lake Estate", area: "Conneaut Lake", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/dcd696d26_generated_image.png" },
  { name: "Lakefront Retreat", area: "Conneaut Lake", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/24ab55285_generated_image.png" },
  { name: "Wooded Grounds", area: "Conneaut Lake", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/95de1cabc_generated_image.png" },
];

export default function Work() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="st-work" className="bg-sastra-cream py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mb-12">
          <span className="text-sastra-lake font-manrope text-sm font-semibold tracking-[0.25em] uppercase">Selected Work</span>
          <h2 className="font-fraunces text-sastra-pine text-4xl md:text-5xl font-bold mt-3">Properties we keep proud.</h2>
        </motion.div>
        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto"
          >
            <img src={PROJECTS[0].img} alt={PROJECTS[0].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-sastra-pine/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="inline-block bg-sastra-sun text-sastra-pine text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-3">Featured</span>
              <h3 className="font-fraunces text-sastra-cream text-3xl font-bold">{PROJECTS[0].name}</h3>
              <p className="text-sastra-sun font-manrope text-sm">{PROJECTS[0].area}, PA</p>
            </div>
          </motion.div>
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {PROJECTS.slice(1).map((p, idx) => (
              <motion.div
                key={p.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[16/10]"
              >
                <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-sastra-pine/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-fraunces text-sastra-cream text-2xl font-bold">{p.name}</h3>
                  <p className="text-sastra-sun font-manrope text-sm">{p.area}, PA</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}