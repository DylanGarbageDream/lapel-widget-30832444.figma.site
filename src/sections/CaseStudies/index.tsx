import { SectionHeader } from "@/components/SectionHeader";
import { CaseStudyGrid } from "@/sections/CaseStudies/components/CaseStudyGrid";

export const CaseStudies = () => {
  return (
    <section className="bg-white box-border px-6 py-24 md:px-12">
      <div className="box-border max-w-screen-xl mx-auto">
        <SectionHeader
          label="08 — Case Studies"
          title="Success Stories"
          description="Deep dives into how we've helped brands achieve breakthrough results."
        />
        <CaseStudyGrid />
      </div>
    </section>
  );
};
