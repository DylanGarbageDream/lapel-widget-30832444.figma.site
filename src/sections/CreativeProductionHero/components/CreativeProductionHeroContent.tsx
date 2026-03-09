import { ArrowRight } from "lucide-react";

interface CreativeProductionHeroContentProps {
  services: string[];
}

export const CreativeProductionHeroContent = ({ services }: CreativeProductionHeroContentProps) => {
  return (
    <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
      {/* Main Heading */}
      <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-fade-in-up">
        Within Creative<br />Production
      </h1>

      {/* Subheading */}
      <p className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-3xl mb-8 animate-fade-in-up animation-delay-200">
        Professional photo, video, design, and custom apparel with the quality your brand demands.
      </p>

      {/* Service Pills */}
      <div className="flex flex-wrap gap-3 mb-12 animate-fade-in-up animation-delay-400">
        {services.map((service, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
          >
            {service}
          </span>
        ))}
      </div>

      {/* Learn More Button - Bottom Left */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-20 animate-fade-in animation-delay-600">
        <button className="group flex items-center gap-3 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:gap-4">
          Learn More
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
