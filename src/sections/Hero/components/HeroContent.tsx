import { HeroButtons } from "@/sections/Hero/components/HeroButtons";

export const HeroContent = () => {
  return (
    <div className="relative box-border max-w-screen-lg min-h-[auto] min-w-[auto] text-center z-10 mx-auto px-6">
      <div 
        className="text-[oklab(0.999994_0.0000455677_0.0000200868_/_0.8)] text-2xl sm:text-3xl box-border tracking-[-1.2px] leading-[1.1] uppercase mb-4 md:text-5xl md:tracking-[-2.4px] md:leading-[60px] opacity-0 animate-fade-in-down"
      >
        The Creative Engine
      </div>
      <h1 
        className="text-white text-4xl sm:text-5xl font-medium box-border tracking-[2px] leading-[1.1] uppercase mb-6 md:text-8xl md:tracking-[2.4px] md:leading-[96px] opacity-0 animate-fade-in-up animation-delay-200"
      >
        We Kill Ordinary
      </h1>
      <p 
        className="text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] text-lg sm:text-xl box-border leading-7 max-w-screen-md mb-8 mx-auto md:text-2xl md:leading-8 opacity-0 animate-fade-in-up animation-delay-400"
      >
        The creative engine that will drive your brand further. We are
        enthusiasts first, creatives second — building lasting impact for brands
        in the performance aftermarket and outdoor lifestyle space.
      </p>
      <div className="opacity-0 animate-fade-in-up animation-delay-600">
        <HeroButtons />
      </div>
    </div>
  );
};
