import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Portfolio } from "@/sections/Portfolio";
import { About } from "@/sections/About";
import { InstagramFeed } from "@/sections/InstagramFeed";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <div className="text-[oklch(0.145_0_0)] text-base not-italic normal-nums font-normal accent-auto bg-white box-border tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="about">
          <About />
        </section>
        <InstagramFeed />
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};
