import React from "react";
import { TreePine, MapPin, Phone, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sastra-pine text-sastra-cream/70 pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-sastra-sun grid place-items-center"><TreePine className="text-sastra-pine" size={18} /></span>
            <span className="font-fraunces text-sastra-cream text-xl font-bold">S Astra</span>
            <span className="font-manrope text-sastra-cream/60 text-[10px] tracking-[0.3em] uppercase border-l border-sastra-cream/30 pl-2">LLC</span>
          </div>
          <p className="font-manrope max-w-sm">Lakefront lawncare and grounds management serving the Conneaut Lake region, Pennsylvania. Honest work, dependable crews, every season.</p>
          <div className="flex items-center gap-2 mt-5"><Leaf className="text-sastra-sun" size={18} /><span className="font-manrope text-sm text-sastra-cream/60">Dependable · Local · Year-Round</span></div>
        </div>
        <div>
          <h4 className="font-fraunces text-sastra-cream text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-3 font-manrope text-sm">
            <li className="flex items-start gap-3"><MapPin className="text-sastra-sun mt-0.5 shrink-0" size={16} /><span>11950 Allen Rd<br />Conneaut Lake, PA 16316</span></li>
            <li><a href="tel:+18142320658" className="flex items-center gap-3 hover:text-sastra-sun"><Phone size={16} />+1 (814) 232-0658</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-fraunces text-sastra-cream text-lg font-bold mb-4">Services</h4>
          <ul className="space-y-2 font-manrope text-sm">
            <li><a href="#st-services" className="hover:text-sastra-sun">Lawn Mowing</a></li>
            <li><a href="#st-services" className="hover:text-sastra-sun">Lakefront Edging</a></li>
            <li><a href="#st-services" className="hover:text-sastra-sun">Snow & Seasonal</a></li>
            <li><a href="#st-services" className="hover:text-sastra-sun">Landscaping</a></li>
          </ul>
          <a href="#st-quote" className="inline-block mt-5 px-5 py-2.5 rounded-full bg-sastra-sun text-sastra-pine font-manrope font-semibold text-sm hover:bg-sastra-cream transition">Free Quote</a>
        </div>
      </div>
      <div className="border-t border-sastra-cream/10 mt-12 pt-6 max-w-[1320px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-3 font-manrope text-xs text-sastra-cream/50">
        <span>© {new Date().getFullYear()} S Astra LLC. All rights reserved.</span>
        <span>Conneaut Lake · Meadville · Erie County · Crawford County</span>
      </div>
    </footer>
  );
}