import { useInView } from "@/hooks/useInView";
import { CaseStudyCard } from "@/sections/CaseStudies/components/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export const CaseStudyGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      {caseStudies.map((caseStudy, index) => (
        <CaseStudyCard
          key={caseStudy.id}
          caseStudy={caseStudy}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};
