import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, TreePine } from "lucide-react";

const LINKS = [
  { l: "Services", h: "#st-services" },
  { l: "Why Us", h: "#st-why" },
  { l: "Our Work", h: "#st-work" },
  { l: "Quote", h: "#st-quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-sastra-pine/95 backdrop-blur-md py-3 shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#st-top" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-sastra-sun grid place-items-center"><TreePine className="text-sastra-pine" size={18} /></span>
          <span className={`font-fraunces text-xl font-bold tracking-tight transition-colors ${scrolled ? "text-sastra-cream" : "text-sastra-pine"}`}>S Astra</span>
          <span className={`font-manrope text-[10px] tracking-[0.3em] uppercase border-l pl-2 transition-colors ${scrolled ? "text-sastra-cream/60 border-sastra-cream/30" : "text-sastra-pine/60 border-sastra-pine/30"}`}>LLC</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.h} href={l.h} className={`text-sm font-medium transition-colors hover:text-sastra-sun ${scrolled ? "text-sastra-cream/80" : "text-sastra-pine/80"}`}>{l.l}</a>
          ))}
          <a href="#st-quote" className="px-5 py-2.5 rounded-full bg-sastra-sun text-sastra-pine font-semibold text-sm hover:bg-sastra-cream transition">Free Quote</a>
        </nav>
        <button className={`md:hidden transition-colors ${scrolled ? "text-sastra-cream" : "text-sastra-pine"}`} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-sastra-pine border-t border-sastra-cream/15 overflow-hidden"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a key={l.h} href={l.h} onClick={() => setOpen(false)} className="text-sastra-cream/85 py-2">{l.l}</a>
            ))}
            <a href="#st-quote" onClick={() => setOpen(false)} className="text-center px-5 py-3 rounded-full bg-sastra-sun text-sastra-pine font-semibold">Free Quote</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}