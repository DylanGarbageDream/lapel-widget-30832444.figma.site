import { useInView } from "@/hooks/useInView";
import { PricingCard } from "@/sections/Pricing/components/PricingCard";
import { pricingPackages } from "@/data/pricingPackages";

export const PricingGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {pricingPackages.map((pkg, index) => (
        <PricingCard
          key={pkg.id}
          package={pkg}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};
