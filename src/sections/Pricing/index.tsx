import { SectionHeader } from "@/components/SectionHeader";
import { PricingGrid } from "@/sections/Pricing/components/PricingGrid";

export const Pricing = () => {
  return (
    <section className="bg-[oklch(0.985_0_0)] box-border px-6 py-24 md:px-12">
      <div className="box-border max-w-screen-xl mx-auto">
        <SectionHeader
          label="09 — Pricing"
          title="Transparent Pricing"
          description="Choose the package that fits your goals. All plans include our signature attention to detail and commitment to results."
        />
        <PricingGrid />
      </div>
    </section>
  );
};
