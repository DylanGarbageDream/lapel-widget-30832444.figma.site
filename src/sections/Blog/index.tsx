import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { BlogGrid } from "@/sections/Blog/components/BlogGrid";
import { BlogFilters } from "@/sections/Blog/components/BlogFilters";
import { blogCategories } from "@/data/blogPosts";

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="bg-white box-border px-6 py-24 md:px-12">
      <div className="box-border max-w-screen-xl mx-auto">
        <SectionHeader
          label="06 — Insights"
          title="Industry Insights & Expertise"
          description="Stay ahead with our latest thoughts on automotive marketing, branding, and creative production."
        />
        <BlogFilters
          categories={blogCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <BlogGrid selectedCategory={selectedCategory} />
      </div>
    </section>
  );
};
