import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { services } from "@/sections/Services/components/ServiceGrid";

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-black underline hover:no-underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-32 pb-12">
        <Link 
          to="/#services" 
          className="inline-flex items-center gap-2 text-[oklch(0.439_0_0)] hover:text-black transition-colors duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back to Services</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pb-16">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={service.iconUrl}
            alt={service.title}
            className="w-16 h-16"
          />
          <div className="text-[oklch(0.87_0_0)] text-5xl font-light">
            {service.number}
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          {service.title}
        </h1>
        <p className="text-xl text-[oklch(0.439_0_0)] max-w-3xl">
          {service.fullDescription}
        </p>
      </div>

      {/* Video Section */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pb-16">
        <div className="aspect-video bg-[oklch(0.95_0_0)] rounded-lg overflow-hidden">
          <iframe
            src={service.videoUrl}
            title={`${service.title} Video`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 pb-24">
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.services.map((item, index) => (
            <div 
              key={index}
              className="border-l-4 border-black pl-6 py-4 hover:bg-[oklch(0.98_0_0)] transition-colors duration-300"
            >
              <h3 className="text-xl font-medium uppercase tracking-tight">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[oklch(0.7_0_0)] mb-8 max-w-2xl mx-auto">
            Let's discuss how {service.title.toLowerCase()} can elevate your brand.
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-white text-black px-8 py-4 font-medium uppercase tracking-wide hover:bg-[oklch(0.95_0_0)] transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
