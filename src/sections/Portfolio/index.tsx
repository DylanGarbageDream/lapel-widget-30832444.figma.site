import { SectionHeader } from "@/components/SectionHeader";
import { PortfolioGrid } from "@/sections/Portfolio/components/PortfolioGrid";

export const Portfolio = () => {
  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-6 py-24 md:px-12">
      <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <SectionHeader
          label="03 — Our Work"
          title="Built With Passion."
          description="We bring the same energy to every shoot, every campaign, and every pixel — because the brands we serve deserve nothing less."
        />
        <PortfolioGrid />
      </div>
    </section>
  );
};
