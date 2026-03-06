export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-automotive-marketing",
    title: "The Future of Automotive Marketing in 2026",
    excerpt: "How emerging technologies and changing consumer behaviors are reshaping the way automotive brands connect with their audience.",
    content: "Full article content here...",
    author: "Sarah Mitchell",
    authorRole: "Creative Director",
    authorImage: "https://i.pravatar.cc/150?img=1",
    date: "2026-03-01",
    readTime: "8 min read",
    category: "Marketing",
    tags: ["Automotive", "Digital Marketing", "Trends"],
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/6f5bb5b9a96e859c9030f44f628a705276689f39.png",
    featured: true
  },
  {
    id: "2",
    slug: "building-brand-loyalty-offroad",
    title: "Building Brand Loyalty in the Off-Road Community",
    excerpt: "Why authenticity and community engagement matter more than ever in the off-road industry.",
    content: "Full article content here...",
    author: "Marcus Chen",
    authorRole: "Brand Strategist",
    authorImage: "https://i.pravatar.cc/150?img=12",
    date: "2026-02-28",
    readTime: "6 min read",
    category: "Branding",
    tags: ["Off-Road", "Community", "Brand Strategy"],
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/a01d0330cfb8ce9c221442b089013639f9610d4f.png",
    featured: true
  },
  {
    id: "3",
    slug: "social-media-automotive-brands",
    title: "Social Media Strategies for Automotive Brands",
    excerpt: "Platform-specific tactics that drive engagement and conversions in the automotive space.",
    content: "Full article content here...",
    author: "Jessica Torres",
    authorRole: "Social Media Lead",
    authorImage: "https://i.pravatar.cc/150?img=5",
    date: "2026-02-25",
    readTime: "7 min read",
    category: "Social Media",
    tags: ["Social Media", "Strategy", "Engagement"],
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/1a27810ab9f4491d4841473dc2db4b0c366e0b6c.png",
    featured: false
  },
  {
    id: "4",
    slug: "photography-tips-automotive",
    title: "5 Photography Tips for Automotive Content",
    excerpt: "Professional techniques to make your vehicles look their absolute best on camera.",
    content: "Full article content here...",
    author: "David Park",
    authorRole: "Lead Photographer",
    authorImage: "https://i.pravatar.cc/150?img=8",
    date: "2026-02-20",
    readTime: "5 min read",
    category: "Production",
    tags: ["Photography", "Content Creation", "Tips"],
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/00da9954e2e175fb81180cb9d29f85e8bdeefc2d.png",
    featured: false
  },
  {
    id: "5",
    slug: "seo-automotive-industry",
    title: "SEO Best Practices for the Automotive Industry",
    excerpt: "How to rank higher and drive more qualified traffic to your automotive business.",
    content: "Full article content here...",
    author: "Alex Rivera",
    authorRole: "SEO Specialist",
    authorImage: "https://i.pravatar.cc/150?img=13",
    date: "2026-02-15",
    readTime: "9 min read",
    category: "Marketing",
    tags: ["SEO", "Digital Marketing", "Strategy"],
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/6f5bb5b9a96e859c9030f44f628a705276689f39.png",
    featured: false
  },
  {
    id: "6",
    slug: "video-content-engagement",
    title: "Why Video Content Drives 10x More Engagement",
    excerpt: "The data behind video marketing and how to leverage it for your brand.",
    content: "Full article content here...",
    author: "Sarah Mitchell",
    authorRole: "Creative Director",
    authorImage: "https://i.pravatar.cc/150?img=1",
    date: "2026-02-10",
    readTime: "6 min read",
    category: "Production",
    tags: ["Video", "Content Marketing", "Engagement"],
    imageUrl: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/a01d0330cfb8ce9c221442b089013639f9610d4f.png",
    featured: false
  }
];

export const blogCategories = ["All", "Marketing", "Branding", "Social Media", "Production"];
