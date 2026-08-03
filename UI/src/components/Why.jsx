import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const easeOut = (x) => 1 - Math.pow(1 - x, 3);
const WOODS = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/95de1cabc_generated_image.png";

function Stat({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.floor(easeOut(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-fraunces text-sastra-sun text-4xl md:text-5xl font-bold">{n}{suffix}</div>
      <div className="text-sastra-cream/70 font-manrope text-xs uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}

const POINTS = [
  "Locally owned in Conneaut Lake, PA",
  "Dependable, honest, local crews",
  "Year-round seasonal programs",
  "Lakefront & wooded-lot expertise",
  "Fair, upfront pricing — no surprises",
  "Satisfaction guaranteed on every visit",
];

export default function Why() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="st-why" className="relative py-24">
      <div className="absolute inset-0">
        <img src={WOODS} alt="Conneaut Lake grounds" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sastra-pine/90" />
      </div>
      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sastra-sun font-manrope text-sm font-semibold tracking-[0.25em] uppercase">Why S Astra</span>
          <h2 className="font-fraunces text-sastra-cream text-4xl md:text-5xl font-bold mt-3">Lake-country lawns done right.</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          <Stat value={10} suffix="+" label="Years Local" />
          <Stat value={250} suffix="+" label="Properties" />
          <Stat value={48} suffix="" label="Hr Response" />
          <Stat value={100} suffix="%" label="Satisfaction" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {POINTS.map((p, idx) => (
            <motion.div
              key={p}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex items-center gap-3 bg-sastra-cream/5 border border-sastra-cream/15 rounded-xl px-5 py-4 backdrop-blur-sm"
            >
              <span className="w-7 h-7 rounded-full bg-sastra-sun grid place-items-center shrink-0"><Check className="text-sastra-pine" size={15} /></span>
              <span className="text-sastra-cream/90 font-manrope text-sm font-medium">{p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}