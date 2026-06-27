import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Coaches } from "@/components/sections/Coaches";
import { Facilities } from "@/components/sections/Facilities";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Coaches />
        <Facilities />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
