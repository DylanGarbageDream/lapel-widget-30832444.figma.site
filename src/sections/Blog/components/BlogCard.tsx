import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isInView: boolean;
}

export const BlogCard = ({ post, index, isInView }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group block transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {post.featured && (
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors duration-300">
            {post.title}
          </h3>
          
          <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">{post.author}</p>
                <p className="text-xs text-gray-500">{post.authorRole}</p>
              </div>
            </div>
            
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};
