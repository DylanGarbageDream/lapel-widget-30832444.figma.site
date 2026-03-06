import { useState, useRef } from "react";
import { Search, ChevronDown, ArrowUpRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  industry: string;
  service: string;
  videoEmbed?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "MOMO x EMORY MOTORSPORTS",
    description: "Capturing the essence of precision automotive craftsmanship and iconic racing heritage through dynamic video storytelling.",
    image: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/c0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0.png",
    tags: ["Video", "Automotive"],
    industry: "Automotive",
    service: "Video Production",
    videoEmbed: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmomousaofficial%2Fvideos%2F419594388836085%2F&show_text=false&width=560&t=0",
  },
  {
    id: 2,
    title: "ADLER UNIVERSITY",
    description: "A leading institution in psychology and social work education partnered with us to modernize their digital experience and strengthen their brand identity.",
    image: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/a01d0330cfb8ce9c221442b089013639f9610d4f.png",
    tags: ["Education", "Digital"],
    industry: "Higher Education",
    service: "Digital Experience",
  },
  {
    id: 3,
    title: "PERFORMANCE BUILDS",
    description: "Custom automotive builds showcasing precision engineering and attention to detail in every component.",
    image: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/1a27810ab9f4491d4841473dc2db4b0c366e0b6c.png",
    tags: ["Automotive", "Custom"],
    industry: "Automotive",
    service: "Content Creation",
  },
  {
    id: 4,
    title: "PRODUCT SHOWCASE",
    description: "Professional product photography and videography highlighting premium automotive accessories and performance parts.",
    image: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/00da9954e2e175fb81180cb9d29f85e8bdeefc2d.png",
    tags: ["Photography", "Commercial"],
    industry: "Automotive",
    service: "Photography",
  },
];

const FilterDropdown = ({ label }: { label: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 border border-gray-300 rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-sm tracking-wide">{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
};

const ProjectItem = ({ project, index }: { project: Project; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="border-t border-gray-200 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Number, Icon, Title, Description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-start gap-6">
            {/* Number */}
            <span className="text-gray-400 text-lg font-medium mt-2">
              ({String(index + 1).padStart(2, "0")})
            </span>

            {/* Content */}
            <div className="flex-1">
              {/* Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 hover:bg-black hover:text-white transition-colors cursor-pointer">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Image/Video/Embed */}
        <div className="lg:col-span-5">
          <div 
            className="aspect-[4/3] rounded-lg overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {project.videoEmbed ? (
              <iframe
                src={project.videoEmbed}
                className="w-full h-full"
                style={{ border: 'none' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            ) : project.image.endsWith('.mp4') || project.image.endsWith('.webm') ? (
              <video
                ref={videoRef}
                src={project.image}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Search and Filters */}
      <div className="border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="flex items-center gap-3 text-gray-600">
              <Search className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">SEARCH</span>
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-wrap items-center gap-3">
              <FilterDropdown label="TAGS" />
              <FilterDropdown label="INDUSTRIES" />
              <FilterDropdown label="SERVICES" />
              <FilterDropdown label="TAGS" />
            </div>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom Spacing */}
      <div className="h-24"></div>
    </div>
  );
};
