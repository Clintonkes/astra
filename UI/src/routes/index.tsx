import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Work from "@/components/Work";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "S Astra LLC — Lakefront Lawn Care in Conneaut Lake, PA" },
      {
        name: "description",
        content:
          "Reliable lawn mowing, lakefront edging, and seasonal grounds care for the Conneaut Lake, PA region. Free quotes.",
      },
      {
        property: "og:title",
        content: "S Astra LLC — Lakefront Lawn Care in Conneaut Lake, PA",
      },
      {
        property: "og:description",
        content:
          "Dependable, honest, local lawncare crews serving the Conneaut Lake region.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-sastra-cream font-manrope text-sastra-pine">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Work />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
