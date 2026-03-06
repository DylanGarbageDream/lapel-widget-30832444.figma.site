import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { TeamCard } from "@/sections/Team/components/TeamCard";
import { TeamModal } from "@/sections/Team/components/TeamModal";
import { teamMembers, TeamMember } from "@/data/team";

export const TeamGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamMembers.map((member, index) => (
          <TeamCard
            key={member.id}
            member={member}
            index={index}
            isInView={isInView}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
};
