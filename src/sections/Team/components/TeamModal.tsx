import { useEffect } from "react";
import { X, Linkedin, Instagram, Twitter } from "lucide-react";
import { TeamMember } from "@/data/team";

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export const TeamModal = ({ member, onClose }: TeamModalProps) => {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [member]);

  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
          <p className="text-xl text-gray-600 font-medium mb-6">{member.role}</p>
          
          <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>

          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">Specialties</h3>
            <div className="flex flex-wrap gap-2">
              {member.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t border-gray-200">
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
