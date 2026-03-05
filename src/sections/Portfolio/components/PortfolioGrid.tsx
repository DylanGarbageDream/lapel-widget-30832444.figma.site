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

  return (
    <div 
      ref={ref}
      className="box-border gap-x-8 grid grid-cols-1 gap-y-8 md:grid-cols-2"
    >
      {portfolioItems.map((item, index) => (
        <PortfolioImage
          key={item.alt}
          {...item}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};
