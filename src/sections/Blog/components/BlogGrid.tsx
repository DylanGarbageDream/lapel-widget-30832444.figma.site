import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { BlogCard } from "@/sections/Blog/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

interface BlogGridProps {
  selectedCategory: string;
}

export const BlogGrid = ({ selectedCategory }: BlogGridProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePosts.map((post, index) => (
          <BlogCard
            key={post.id}
            post={post}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
      
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
          >
            Load More Articles
          </button>
        </div>
      )}
    </div>
  );
};
