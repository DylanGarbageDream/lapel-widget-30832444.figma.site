import { Link } from "react-router-dom";
import { useState } from "react";

export type ServiceCardProps = {
  number: string;
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/services/${props.slug}`}
      className={`relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-700 block h-full ${
        props.isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${props.index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-full object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      </div>
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        {/* Number badge */}
        <div className={`text-6xl font-bold leading-none mb-4 transition-all duration-500 ${
          isHovered ? "text-white scale-110 -translate-y-2" : "text-white/60"
        }`}>
          {props.number}
        </div>

        {/* Title */}
        <h3 className={`text-3xl font-bold tracking-tight leading-tight uppercase mb-3 text-white transition-all duration-500 ${
          isHovered ? "translate-y-0" : "translate-y-2"
        }`}>
          {props.title}
        </h3>

        {/* Description */}
        <p className={`text-base leading-relaxed mb-6 text-gray-200 transition-all duration-500 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          {props.description}
        </p>

        {/* Learn more link with arrow */}
        <div className={`flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-white transition-all duration-500 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          <span>Learn More</span>
          <svg 
            className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};
