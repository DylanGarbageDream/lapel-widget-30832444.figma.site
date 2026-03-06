import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { useInView } from "@/hooks/useInView";
import { ServiceCard } from "@/sections/Services/components/ServiceCard";
import { services } from "@/sections/Services/components/ServiceGrid";

export const Services = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];

  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-6 py-24 md:px-12">
      <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <SectionHeader
          label="02 — Services & Work"
          title={"Full-Service\nCreative Power."}
          titleBreak={true}
          description="We bring the same energy to every shoot, every campaign, and every pixel — because the brands we serve deserve nothing less."
        />
        
        <div 
          ref={ref}
          className={`relative box-border transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-[10px] aspect-[16/9] md:aspect-[21/9]">
            {/* Slides */}
            <div 
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="min-w-full h-full">
                  <ServiceCard
                    {...service}
                    index={0}
                    isInView={true}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg z-10"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg z-10"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-black w-12 h-3"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
