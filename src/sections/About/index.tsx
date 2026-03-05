import { AboutContent } from "@/sections/About/components/AboutContent";
import { ValueGrid } from "@/sections/About/components/ValueGrid";

export const About = () => {
  return (
    <section className="bg-[oklch(0.985_0_0)] box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-6 py-24 md:px-12">
      <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <AboutContent />
        <ValueGrid />
      </div>
    </section>
  );
};
