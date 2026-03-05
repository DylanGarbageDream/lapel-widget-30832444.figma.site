import { useInView } from "@/hooks/useInView";
import { ValueCard } from "@/sections/About/components/ValueCard";

const values = [
  {
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-11.svg",
    title: "Authenticity",
    description: "We don't manufacture enthusiasm. We bring genuine passion for the automotive and outdoor world to every project we touch.",
  },
  {
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-12.svg",
    title: "Craft",
    description: "Every frame, every word, every pixel is intentional. We obsess over the details that separate good from unforgettable.",
  },
  {
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-13.svg",
    title: "Impact",
    description: "Pretty isn't enough. We create work that moves audiences, drives engagement, and builds brand equity that lasts.",
  },
  {
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-14.svg",
    title: "Culture",
    description: "We don't just market to the community — we're part of it. That insider perspective is our greatest competitive advantage.",
  },
];

export const ValueGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="box-border gap-x-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-4"
    >
      {values.map((value, index) => (
        <ValueCard
          key={value.title}
          {...value}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};
