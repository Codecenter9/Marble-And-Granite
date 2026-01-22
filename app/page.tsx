import About from "@/components/ui/sections/About";
import Contact from "@/components/ui/sections/Contact";
import CTA from "@/components/ui/sections/CTA";
import Gallery from "@/components/ui/sections/Gallery";
import Hero from "@/components/ui/sections/Hero";
import Products from "@/components/ui/sections/Products";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Products />
      <CTA />
      <Gallery />
      <Contact />
    </div>
  );
}
