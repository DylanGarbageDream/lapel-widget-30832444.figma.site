export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
  projectType: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jake Morrison",
    role: "Marketing Director",
    company: "Apex Off-Road",
    image: "https://i.pravatar.cc/150?img=33",
    quote: "Raw Engine Media transformed our brand presence. Their understanding of the off-road community is unmatched, and the results speak for themselves — 300% increase in engagement.",
    rating: 5,
    projectType: "Branding & Social Media"
  },
  {
    id: "2",
    name: "Rachel Kim",
    role: "Founder & CEO",
    company: "Velocity Performance",
    image: "https://i.pravatar.cc/150?img=45",
    quote: "Working with Raw Engine was a game-changer. They didn't just deliver a website — they delivered a complete digital experience that converts. Our online sales doubled in 3 months.",
    rating: 5,
    projectType: "Web Design & Development"
  },
  {
    id: "3",
    name: "Marcus Thompson",
    role: "Owner",
    company: "Thunder Customs",
    image: "https://i.pravatar.cc/150?img=52",
    quote: "The photography and video work they produced for our shop is absolutely top-tier. Every shot captures the passion we put into our builds. Couldn't ask for a better creative partner.",
    rating: 5,
    projectType: "Creative Production"
  },
  {
    id: "4",
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "TrailBlazer Gear",
    image: "https://i.pravatar.cc/150?img=26",
    quote: "Their strategic approach to digital marketing helped us break into new markets. The team is responsive, creative, and genuinely invested in our success.",
    rating: 5,
    projectType: "Digital Marketing"
  },
  {
    id: "5",
    name: "Chris Anderson",
    role: "VP of Marketing",
    company: "Rugged Outfitters",
    image: "https://i.pravatar.cc/150?img=68",
    quote: "Raw Engine Media gets it. They understand our audience, our industry, and what it takes to stand out. The ROI on our campaigns has been exceptional.",
    rating: 5,
    projectType: "Advertising & Content"
  }
];
