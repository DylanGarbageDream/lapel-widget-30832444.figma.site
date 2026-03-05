import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/sections/Services/components/ServiceGrid";

export const Services = () => {
  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-6 py-24 md:px-12">
      <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <SectionHeader
          label="02 — Services"
          title={"Full-Service\nCreative Power."}
          titleBreak={true}
        />
        <ServiceGrid />
      </div>
    </section>
  );
};
