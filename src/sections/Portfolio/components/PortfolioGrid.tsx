import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { PortfolioImage } from "@/sections/Portfolio/components/PortfolioImage";

const portfolioItems = [
  {
    src: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/6f5bb5b9a96e859c9030f44f628a705276689f39.png",
    alt: "Performance Build",
  },
  {
    src: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/1a27810ab9f4491d4841473dc2db4b0c366e0b6c.png",
    alt: "Performance Parts",
  },
  {
    src: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/a01d0330cfb8ce9c221442b089013639f9610d4f.png",
    alt: "Off-Road Adventure",
  },
  {
    src: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/00da9954e2e175fb81180cb9d29f85e8bdeefc2d.png",
    alt: "Apparel Production",
  },
];

export const PortfolioGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
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
          {portfolioItems.map((item, index) => (
            <div key={item.alt} className="min-w-full h-full">
              <PortfolioImage
                {...item}
                index={index}
                isInView={isInView}
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
        {portfolioItems.map((_, index) => (
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
  );
};
