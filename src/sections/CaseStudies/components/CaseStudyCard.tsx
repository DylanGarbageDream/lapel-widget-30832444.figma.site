import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
  isInView: boolean;
}

export const CaseStudyCard = ({ caseStudy, index, isInView }: CaseStudyCardProps) => {
  return (
    <Link
      to={`/case-studies/${caseStudy.slug}`}
      className={`group block transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full">
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={caseStudy.thumbnailUrl}
            alt={caseStudy.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {caseStudy.featured && (
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {caseStudy.category}
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="font-semibold text-black">{caseStudy.client}</span>
            <span>•</span>
            <span>{caseStudy.year}</span>
          </div>

          <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-600 transition-colors duration-300">
            {caseStudy.title}
          </h3>
          
          <p className="text-gray-600 mb-6 line-clamp-2">
            {caseStudy.challenge}
          </p>

          {/* Results Preview */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
            {caseStudy.results.slice(0, 3).map((result) => (
              <div key={result.metric}>
                <div className="flex items-center gap-1 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <p className="text-2xl font-bold text-green-600">{result.value}</p>
                </div>
                <p className="text-xs text-gray-500">{result.metric}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {caseStudy.services.slice(0, 2).map((service) => (
                <span
                  key={service}
                  className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                >
                  {service}
                </span>
              ))}
            </div>
            
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};
