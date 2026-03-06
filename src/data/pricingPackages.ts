export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for getting started",
    price: "$2,500",
    period: "one-time",
    description: "Essential branding and digital presence for emerging brands.",
    features: [
      "Logo Design & Brand Guidelines",
      "5-Page Website",
      "Social Media Setup (3 platforms)",
      "1 Month Content Calendar",
      "Basic SEO Setup",
      "Email Support"
    ],
    highlighted: false,
    cta: "Get Started"
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Most popular",
    price: "$5,000",
    period: "per month",
    description: "Comprehensive marketing and content for scaling brands.",
    features: [
      "Everything in Starter",
      "Weekly Content Creation (Photo/Video)",
      "Social Media Management",
      "Monthly Blog Posts (4)",
      "Email Marketing Campaigns",
      "Advanced SEO & Analytics",
      "Paid Advertising Management",
      "Priority Support"
    ],
    highlighted: true,
    cta: "Start Growing"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For established brands",
    price: "Custom",
    period: "tailored pricing",
    description: "Full-service creative and marketing partnership for industry leaders.",
    features: [
      "Everything in Growth",
      "Dedicated Account Manager",
      "Custom Campaign Development",
      "Professional Video Production",
      "Multi-Channel Advertising",
      "Advanced Analytics & Reporting",
      "Quarterly Strategy Sessions",
      "24/7 Priority Support"
    ],
    highlighted: false,
    cta: "Contact Us"
  }
];
