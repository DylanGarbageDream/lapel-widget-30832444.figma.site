import { Check } from "lucide-react";
import { PricingPackage } from "@/data/pricingPackages";

interface PricingCardProps {
  package: PricingPackage;
  index: number;
  isInView: boolean;
}

export const PricingCard = ({ package: pkg, index, isInView }: PricingCardProps) => {
  return (
    <div
      className={`relative transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${pkg.highlighted ? "md:-translate-y-4" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {pkg.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
          {pkg.tagline}
        </div>
      )}
      
      <div className={`bg-white rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500 ${
        pkg.highlighted ? "border-2 border-black" : "border border-gray-200"
      }`}>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-4xl font-bold">{pkg.price}</span>
            <span className="text-gray-500">/ {pkg.period}</span>
          </div>
          <p className="text-gray-600">{pkg.description}</p>
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
            pkg.highlighted
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-100 text-black hover:bg-gray-200"
          }`}
        >
          {pkg.cta}
        </button>
      </div>
    </div>
  );
};
