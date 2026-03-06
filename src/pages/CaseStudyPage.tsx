import { useParams, Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, Quote } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export const CaseStudyPage = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find(cs => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={caseStudy.heroImageUrl}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-16 w-full">
            <Link
              to="/#case-studies"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                {caseStudy.category}
              </span>
              <span className="text-white/80">{caseStudy.year}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              {caseStudy.client}
            </h1>
            <p className="text-2xl text-white/90 font-medium">
              {caseStudy.title}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-[oklch(0.985_0_0)] rounded-3xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudy.results.map((result) => (
              <div key={result.metric} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <p className="text-5xl font-bold text-green-600">{result.value}</p>
                </div>
                <p className="text-xl font-semibold mb-2">{result.metric}</p>
                <p className="text-gray-600">{result.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Used */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Services Provided</h2>
          <div className="flex flex-wrap gap-3">
            {caseStudy.services.map((service) => (
              <span
                key={service}
                className="bg-gray-100 px-6 py-3 rounded-full text-lg font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <div className="bg-black text-white rounded-3xl p-12 mb-16 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-white/10" />
            <blockquote className="text-2xl md:text-3xl font-bold mb-6 relative z-10">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="relative z-10">
              <p className="font-semibold text-lg">{caseStudy.testimonial.author}</p>
              <p className="text-gray-300">{caseStudy.testimonial.role}</p>
            </div>
          </div>
        )}

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudy.images.map((image, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`${caseStudy.client} project ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[oklch(0.985_0_0)] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can accelerate your brand's growth.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </article>
  );
};
