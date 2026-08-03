import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, MapPin, Phone } from "lucide-react";
import { apiPost } from "@/lib/api";

const OPTIONS = [
  "Weekly Mowing",
  "Bi-Weekly Mowing",
  "One-Time Cut",
  "Edging & Trimming",
  "Fall Clean-Up",
  "Snow & Seasonal",
  "Landscaping",
];

const LAKE =
  "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/24ab55285_generated_image.png";

export default function Quote() {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: OPTIONS[0],
    notes: "",
  });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await apiPost("/api/bookings", form);
      setDone(true);
    } catch {
      setError("We couldn't submit your request. Please call us or try again.");
    }
    setBusy(false);
  };
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="st-quote" className="relative py-24">
      <div className="absolute inset-0">
        <img src={LAKE} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sastra-pine/85" />
      </div>
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 text-sastra-cream"
        >
          <span className="text-sastra-sun font-manrope text-sm font-semibold tracking-[0.25em] uppercase">
            Free Quote
          </span>
          <h2 className="font-fraunces text-sastra-cream text-4xl md:text-5xl font-bold mt-3 leading-tight">
            Let's care for your property.
          </h2>
          <p className="text-sastra-cream/70 font-manrope mt-5 text-lg">
            Tell us about your property and we'll send a straightforward quote
            and schedule a visit.
          </p>
          <div className="mt-8 space-y-4 font-manrope">
            <div className="flex items-center gap-3 text-sastra-cream/80">
              <MapPin className="text-sastra-sun shrink-0" size={18} />
              11950 Allen Rd, Conneaut Lake, PA 16316
            </div>
            <a
              href="tel:+18142320658"
              className="flex items-center gap-3 text-sastra-cream/80 hover:text-sastra-sun"
            >
              <Phone className="text-sastra-sun shrink-0" size={18} />
              +1 (814) 232-0658
            </a>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 bg-sastra-cream rounded-3xl p-7 md:p-10 shadow-2xl"
        >
          {done ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-sastra-lake mx-auto mb-5 flex items-center justify-center">
                <Check className="text-sastra-cream" size={30} />
              </div>
              <h3 className="font-fraunces text-sastra-pine text-2xl font-bold mb-2">
                Thank you, {form.name || "neighbor"}!
              </h3>
              <p className="text-sastra-pine/70 font-manrope">
                We'll reach out within one business day to schedule your free
                quote.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className="str-input"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Phone">
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="str-input"
                  placeholder="(814) 555-0100"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="str-input"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Service">
                <select
                  value={form.service}
                  onChange={(e) => set("service", e.target.value)}
                  className="str-input"
                >
                  {OPTIONS.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="Address">
                  <input
                    required
                    value={form.address}
                    onChange={(e) => set("address", e.target.value)}
                    className="str-input"
                    placeholder="Street, City, ZIP"
                  />
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Notes (optional)">
                  <textarea
                    rows="3"
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    className="str-input"
                    placeholder="Lot size, gates, anything we should know…"
                  />
                </Field>
              </div>
              {error && (
                <p className="md:col-span-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </p>
              )}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={busy}
                  className="w-full md:w-auto px-10 py-4 rounded-full bg-sastra-pine text-sastra-cream font-manrope font-semibold hover:bg-sastra-lake transition disabled:opacity-60"
                >
                  {busy ? "Submitting…" : "Request My Free Quote"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sastra-pine/60 text-xs font-manrope font-semibold uppercase tracking-[0.15em] mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
