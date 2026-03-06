import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
  index: number;
  isInView: boolean;
  onClick: () => void;
}

export const TeamCard = ({ member, index, isInView, onClick }: TeamCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`group text-left w-full transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <p className="text-sm font-medium">Click to learn more</p>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-1 group-hover:text-gray-600 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-gray-600 font-medium mb-3">{member.role}</p>
          <div className="flex flex-wrap gap-2">
            {member.specialties.slice(0, 2).map((specialty) => (
              <span
                key={specialty}
                className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
};
