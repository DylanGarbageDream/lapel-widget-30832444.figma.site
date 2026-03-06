import { useInView } from "@/hooks/useInView";

interface BlogFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const BlogFilters = ({ categories, selectedCategory, onCategoryChange }: BlogFiltersProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === category
              ? "bg-black text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
