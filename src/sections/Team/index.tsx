import { SectionHeader } from "@/components/SectionHeader";
import { TeamGrid } from "@/sections/Team/components/TeamGrid";

export const Team = () => {
  return (
    <section className="bg-white box-border px-6 py-24 md:px-12">
      <div className="box-border max-w-screen-xl mx-auto">
        <SectionHeader
          label="07 — Our Team"
          title="Meet the Crew"
          description="A diverse team of strategists, creators, and storytellers united by one mission: making your brand unstoppable."
        />
        <TeamGrid />
      </div>
    </section>
  );
};
