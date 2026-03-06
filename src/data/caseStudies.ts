export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  featured: boolean;
  thumbnailUrl: string;
  heroImageUrl: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  services: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  images: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "apex-offroad-rebrand",
    title: "Complete Brand Transformation",
    client: "Apex Off-Road",
    category: "Branding",
    year: "2025",
    featured: true,
    thumbnailUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/6f5bb5b9a96e859c9030f44f628a705276689f39.png",
    heroImageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/6f5bb5b9a96e859c9030f44f628a705276689f39.png",
    challenge: "Apex Off-Road needed to differentiate themselves in a crowded market and appeal to a younger, more diverse audience while maintaining credibility with hardcore enthusiasts.",
    solution: "We developed a bold new visual identity, created a comprehensive brand guideline, and launched an integrated campaign across digital and physical touchpoints.",
    results: [
      { metric: "Brand Awareness", value: "+245%", description: "Increase in brand recognition" },
      { metric: "Social Engagement", value: "+380%", description: "Growth in social media engagement" },
      { metric: "Sales", value: "+156%", description: "Increase in online sales" }
    ],
    services: ["Branding & Identity", "Digital Marketing", "Content Creation"],
    testimonial: {
      quote: "Raw Engine Media transformed our brand presence. The results exceeded every expectation.",
      author: "Jake Morrison",
      role: "Marketing Director, Apex Off-Road"
    },
    images: [
      "https://c.animaapp.com/mmdx73wyuGbwQi/assets/6f5bb5b9a96e859c9030f44f628a705276689f39.png",
      "https://c.animaapp.com/mmdx73wyuGbwQi/assets/1a27810ab9f4491d4841473dc2db4b0c366e0b6c.png"
    ]
  },
  {
    id: "2",
    slug: "velocity-performance-ecommerce",
    title: "E-Commerce Platform Launch",
    client: "Velocity Performance",
    category: "Web Development",
    year: "2025",
    featured: true,
    thumbnailUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/1a27810ab9f4491d4841473dc2db4b0c366e0b6c.png",
    heroImageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/1a27810ab9f4491d4841473dc2db4b0c366e0b6c.png",
    challenge: "Velocity needed a high-performance e-commerce platform that could handle their extensive product catalog while providing an exceptional user experience.",
    solution: "We built a custom e-commerce solution with advanced filtering, real-time inventory, and seamless checkout — optimized for speed and conversions.",
    results: [
      { metric: "Conversion Rate", value: "+127%", description: "Improvement in checkout completion" },
      { metric: "Page Speed", value: "98/100", description: "Google PageSpeed score" },
      { metric: "Revenue", value: "+210%", description: "Increase in online revenue" }
    ],
    services: ["Web Design & Development", "Digital Marketing"],
    testimonial: {
      quote: "They delivered a complete digital experience that converts. Our online sales doubled in 3 months.",
      author: "Rachel Kim",
      role: "Founder & CEO, Velocity Performance"
    },
    images: [
      "https://c.animaapp.com/mmdx73wyuGbwQi/assets/1a27810ab9f4491d4841473dc2db4b0c366e0b6c.png",
      "https://c.animaapp.com/mmdx73wyuGbwQi/assets/a01d0330cfb8ce9c221442b089013639f9610d4f.png"
    ]
  },
  {
    id: "3",
    slug: "thunder-customs-content",
    title: "Content Production & Social Growth",
    client: "Thunder Customs",
    category: "Content Creation",
    year: "2026",
    featured: false,
    thumbnailUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/a01d0330cfb8ce9c221442b089013639f9610d4f.png",
    heroImageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/a01d0330cfb8ce9c221442b089013639f9610d4f.png",
    challenge: "Thunder Customs had incredible builds but struggled to showcase them effectively online and grow their social following.",
    solution: "We implemented a comprehensive content strategy with weekly photo/video shoots, consistent posting schedule, and community engagement tactics.",
    results: [
      { metric: "Followers", value: "+425%", description: "Growth in Instagram followers" },
      { metric: "Engagement", value: "+312%", description: "Increase in post engagement" },
      { metric: "Inquiries", value: "+189%", description: "More project inquiries" }
    ],
    services: ["Creative Production", "Content Creation", "Digital Marketing"],
    testimonial: {
      quote: "Every shot captures the passion we put into our builds. Couldn't ask for a better creative partner.",
      author: "Marcus Thompson",
      role: "Owner, Thunder Customs"
    },
    images: [
      "https://c.animaapp.com/mmdx73wyuGbwQi/assets/a01d0330cfb8ce9c221442b089013639f9610d4f.png",
      "https://c.animaapp.com/mmdx73wyuGbwQi/assets/00da9954e2e175fb81180cb9d29f85e8bdeefc2d.png"
    ]
  }
];
