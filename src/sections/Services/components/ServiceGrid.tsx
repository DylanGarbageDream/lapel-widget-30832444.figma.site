import { useInView } from "@/hooks/useInView";
import { ServiceCard } from "@/sections/Services/components/ServiceCard";

export const services = [
  {
    number: "01",
    slug: "branding-identity",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772823305298-0.png",
    title: "Branding & Identity",
    description: "Complete brand systems that capture who you are and resonate with your audience.",
    fullDescription: "We create comprehensive brand identities that go beyond logos. From visual systems to brand voice, we build cohesive identities that tell your story and connect with the people who matter most.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines", "Messaging & Voice"]
  },
  {
    number: "02",
    slug: "digital-marketing",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772825335707-0.jpeg",
    title: "Digital Marketing",
    description: "Strategic campaigns across advertising, social media, SEO, and web design that drive real results.",
    fullDescription: "We combine paid advertising, organic social strategy, technical SEO, and custom web design to create integrated campaigns that reach your audience wherever they are and convert them into customers.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    services: ["Paid Advertising", "Social Media Strategy", "SEO Optimization", "Website Design", "Web Development", "Analytics & Reporting", "Campaign Management"]
  },
  {
    number: "03",
    slug: "content-creation",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772743903478-0.jpeg",
    title: "Content Creation",
    description: "Compelling content and storytelling that builds trust and long-term relationships.",
    fullDescription: "From blog posts to video scripts, we create content that educates, entertains, and converts. Our content marketing strategies build authority and keep your audience engaged over time.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    services: ["Content Strategy", "Copywriting", "Blog & Articles", "Email Marketing", "Content Calendars"]
  },
  {
    number: "04",
    slug: "creative-production",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772825456181-0.png",
    title: "Creative Production",
    description: "Professional photo, video, design, and custom apparel with the quality your brand demands.",
    fullDescription: "Our production team brings your vision to life with high-quality photography, videography, graphic design, and custom merchandise. From concept to final delivery, we handle every aspect of creative production.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    services: ["Photography", "Videography", "Motion Graphics", "Graphic Design", "Custom Apparel", "Post-Production"]
  },
  {
    number: "05",
    slug: "advertising",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772825818870-0.png",
    title: "Advertising",
    description: "Strategic ad campaigns across digital and traditional channels that drive measurable growth.",
    fullDescription: "We create and manage advertising campaigns that cut through the noise. From concept to execution, we develop compelling ads that reach your target audience and deliver ROI.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    services: ["Campaign Strategy", "Creative Development", "Media Buying", "Performance Tracking", "A/B Testing"]
  },
];

export const ServiceGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="box-border gap-x-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3"
    >
      {services.map((service, index) => (
        <ServiceCard
          key={service.number}
          {...service}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
};
