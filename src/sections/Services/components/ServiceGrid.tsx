import { useInView } from "@/hooks/useInView";
import { ServiceCard } from "@/sections/Services/components/ServiceCard";

export const services = [
  {
    number: "01",
    slug: "branding-identity",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772829516217-0.jpeg",
    title: "Branding & Identity",
    description: "Complete brand systems that capture who you are and resonate with your audience.",
    fullDescription: "In the performance aftermarket, your brand isn't just a logo — it's a statement. It's the attitude on your packaging, the culture in your content, the feeling someone gets when they see your decal on a build. At Raw Engine Media, we don't just design brands. We engineer them from the ground up for the people who live this lifestyle. We start with strategy — getting deep into who you are, who you're competing with, and who you're trying to reach. Whether you're a new shop trying to carve out your lane or an established brand ready for a full transformation, we develop positioning that's built to last and sharp enough to cut through the noise. From there, we build your complete visual identity — logo systems, color palettes, typography, iconography, and brand guidelines that keep everything consistent from your Instagram grid to your trade show booth to your custom apparel. Every element is designed to connect with enthusiasts on a gut level, because we are enthusiasts too. We also define your brand voice — how you talk, how you show up, and what you stand for. Because in this space, authenticity isn't optional. People can smell a fake from a mile away.",
    videoUrl: "",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines", "Messaging & Voice"]
  },
  {
    number: "02",
    slug: "digital-marketing",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772829581491-0.jpeg",
    title: "Digital Marketing",
    description: "Strategic campaigns across advertising, social media, SEO, and web design that drive real results.",
    fullDescription: "We combine paid advertising, organic social strategy, technical SEO, and custom web design to create integrated campaigns that reach your audience wherever they are and convert them into customers.",
    videoUrl: "",
    services: ["Paid Advertising", "Social Media Strategy", "SEO Optimization", "Website Design", "Web Development", "Analytics & Reporting", "Campaign Management"]
  },
  {
    number: "03",
    slug: "content-creation",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772829692027-0.jpeg",
    title: "Content Creation",
    description: "Compelling content and storytelling that builds trust and long-term relationships.",
    fullDescription: "From blog posts to video scripts, we create content that educates, entertains, and converts. Our content marketing strategies build authority and keep your audience engaged over time.",
    videoUrl: "https://player.vimeo.com/video/694222512?h=d44ec1aa05&autoplay=1&loop=1&muted=1&background=1",
    services: ["Content Strategy", "Copywriting", "Blog & Articles", "Email Marketing", "Content Calendars"]
  },
  {
    number: "04",
    slug: "creative-production",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772825456181-0.png",
    title: "Creative Production",
    description: "Professional photo, video, design, and custom apparel with the quality your brand demands.",
    fullDescription: "Our production team brings your vision to life with high-quality photography, videography, graphic design, and custom merchandise. From concept to final delivery, we handle every aspect of creative production.",
    videoUrl: "",
    services: ["Photography", "Videography", "Motion Graphics", "Graphic Design", "Custom Apparel", "Post-Production"]
  },
  {
    number: "05",
    slug: "advertising",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772825818870-0.png",
    title: "Advertising",
    description: "Strategic ad campaigns across digital and traditional channels that drive measurable growth.",
    fullDescription: "We create and manage advertising campaigns that cut through the noise. From concept to execution, we develop compelling ads that reach your target audience and deliver ROI.",
    videoUrl: "",
    services: ["Campaign Strategy", "Creative Development", "Media Buying", "Performance Tracking", "A/B Testing"]
  },
  {
    number: "06",
    slug: "social-media",
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/img/uploaded-asset-1772830024922-0.png",
    title: "Social Media",
    description: "Engaging social media management that builds community and drives engagement.",
    fullDescription: "In the performance aftermarket world, social media is where your community lives. We create and manage social media strategies that turn followers into fans and fans into customers. From daily content creation to community management, we handle everything so you can focus on building cars and running your business.",
    videoUrl: "",
    services: ["Social Strategy", "Content Planning", "Community Management", "Influencer Partnerships", "Analytics & Growth"]
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
