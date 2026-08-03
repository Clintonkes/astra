import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/dcd696d26_generated_image.png";
const LAKE = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/24ab55285_generated_image.png";

export default function Hero() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="st-top" className="relative bg-sastra-cream pt-28 pb-16 lg:pt-36 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sastra-moss/15 blur-3xl" />
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-3 text-sastra-lake font-manrope text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="w-8 h-px bg-sastra-lake" /> Conneaut Lake, PA
          </span>
          <h1 className="font-fraunces text-sastra-pine text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight">
            Lakefront lawns, <span className="italic text-sastra-lake">caretaker</span> precision.
          </h1>
          <p className="text-sastra-pine/70 font-manrope text-lg mt-6 max-w-md leading-relaxed">
            S Astra LLC tends the lawns and wooded grounds of the Conneaut Lake region — reliable mowing, seasonal clean-ups, and lakeside care you can count on.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#st-quote" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-sastra-pine text-sastra-cream font-manrope font-semibold hover:bg-sastra-lake transition shadow-lg shadow-sastra-pine/20">
              <ArrowRight size={18} /> Get a Free Quote
            </a>
            <a href="#st-services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-sastra-pine/15 text-sastra-pine font-manrope font-semibold hover:bg-sastra-pine hover:text-sastra-cream transition">
              Our Services
            </a>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="text-sastra-sun fill-sastra-sun" size={16} />)}
            </div>
            <p className="text-sastra-pine/60 font-manrope text-sm">Trusted across Conneaut Lake · 250+ properties</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-sastra-pine/20">
            <img src={HERO} alt="Conneaut Lake lawncare" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -left-8 w-40 h-52 md:w-52 md:h-64 rounded-3xl overflow-hidden border-4 border-sastra-cream shadow-xl hidden sm:block">
            <img src={LAKE} alt="Lake lawn" className="w-full h-full object-cover" />
          </div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="absolute -top-6 -right-4 md:right-6 bg-sastra-pine text-sastra-cream rounded-2xl px-5 py-4 shadow-xl">
            <div className="font-fraunces text-sastra-sun text-3xl font-bold leading-none">10+</div>
            <div className="font-manrope text-xs uppercase tracking-wider mt-1 text-sastra-cream/70">Years Local</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}