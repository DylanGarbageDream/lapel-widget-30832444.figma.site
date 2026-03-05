import { HeroBackground } from "@/sections/Hero/components/HeroBackground";
import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative items-center bg-white box-border caret-transparent flex justify-center min-h-[1000px] outline-[oklab(0.708_0_0_/_0.5)] overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};
