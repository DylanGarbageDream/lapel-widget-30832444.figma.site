import { useInView } from "@/hooks/useInView";
import { ServiceCard } from "@/sections/Services/components/ServiceCard";

const services = [
  {
    number: "01",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-2.svg",
    title: "Advertising",
    description: "Strategic campaigns that cut through the noise and place your brand where it matters most.",
  },
  {
    number: "02",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-3.svg",
    title: "Branding",
    description: "Identity systems that capture who you are and resonate with the people you want to reach.",
  },
  {
    number: "03",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-4.svg",
    title: "Content Marketing",
    description: "Storytelling that builds trust, authority, and long-term audience relationships.",
  },
  {
    number: "04",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-5.svg",
    title: "Creative Production",
    description: "Photo, video, and design production with the quality your brand demands.",
  },
  {
    number: "05",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-6.svg",
    title: "Public Relations",
    description: "Earned media placements and industry visibility that build credibility at scale.",
  },
  {
    number: "06",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-7.svg",
    title: "Social Media",
    description: "Platform strategy, content creation, and community management that drives real engagement.",
  },
  {
    number: "07",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-8.svg",
    title: "SEO Strategy",
    description: "Technical and content-driven search optimization that puts your brand in front of buyers.",
  },
  {
    number: "08",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-9.svg",
    title: "Web Design",
    description: "Digital experiences that convert visitors into customers and reflect your brand's ambition.",
  },
  {
    number: "09",
    iconUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-10.svg",
    title: "Apparel Production",
    description: "Custom apparel and merchandise that brings your brand to life and builds community loyalty.",
  },
];

export const ServiceGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="box-border gap-x-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3"
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.number}
          {...service}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};
