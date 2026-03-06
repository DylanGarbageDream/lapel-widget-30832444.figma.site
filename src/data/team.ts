export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  social: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Creative Director",
    bio: "With 12+ years in automotive marketing, Sarah leads our creative vision and ensures every project exceeds expectations. Her passion for storytelling and eye for detail drive our most impactful campaigns.",
    image: "https://i.pravatar.cc/300?img=1",
    specialties: ["Brand Strategy", "Creative Direction", "Campaign Development"],
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: "2",
    name: "Marcus Chen",
    role: "Brand Strategist",
    bio: "Marcus brings a data-driven approach to brand building. He's worked with Fortune 500 automotive brands and emerging startups alike, crafting identities that resonate and convert.",
    image: "https://i.pravatar.cc/300?img=12",
    specialties: ["Brand Identity", "Market Research", "Positioning"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "3",
    name: "Jessica Torres",
    role: "Social Media Lead",
    bio: "Jessica's finger is on the pulse of social trends. She's grown accounts from zero to 100K+ followers and knows exactly how to engage the automotive community.",
    image: "https://i.pravatar.cc/300?img=5",
    specialties: ["Social Strategy", "Community Management", "Content Planning"],
    social: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: "4",
    name: "David Park",
    role: "Lead Photographer",
    bio: "David's work has been featured in major automotive publications. His ability to capture the soul of a vehicle and the passion of the community is what sets our visual content apart.",
    image: "https://i.pravatar.cc/300?img=8",
    specialties: ["Automotive Photography", "Product Shoots", "Event Coverage"],
    social: {
      instagram: "#"
    }
  },
  {
    id: "5",
    name: "Alex Rivera",
    role: "SEO Specialist",
    bio: "Alex has helped dozens of automotive businesses dominate their local markets. His technical SEO expertise and content strategy have driven millions in revenue for our clients.",
    image: "https://i.pravatar.cc/300?img=13",
    specialties: ["Technical SEO", "Content Strategy", "Analytics"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: "6",
    name: "Olivia Chen",
    role: "Video Producer",
    bio: "From concept to final cut, Olivia creates video content that stops the scroll. Her cinematic approach and storytelling skills bring brands to life on screen.",
    image: "https://i.pravatar.cc/300?img=29",
    specialties: ["Video Production", "Motion Graphics", "Storytelling"],
    social: {
      instagram: "#",
      linkedin: "#"
    }
  }
];
