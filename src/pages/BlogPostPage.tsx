import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-12 w-full">
            <Link
              to="/#blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium mb-4">
              {post.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Author */}
        <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-bold text-lg">{post.author}</p>
              <p className="text-gray-600">{post.authorRole}</p>
            </div>
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">
            <Share2 className="w-4 h-4" />
            <span className="font-medium">Share</span>
          </button>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            {post.content}
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Key Takeaways</h2>
          <ul className="space-y-3 mb-8">
            <li className="text-gray-700">Understanding your audience is the foundation of effective marketing</li>
            <li className="text-gray-700">Authenticity builds trust and long-term loyalty</li>
            <li className="text-gray-700">Data-driven decisions lead to measurable results</li>
            <li className="text-gray-700">Consistent brand presence across channels amplifies impact</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Looking Ahead</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The automotive industry continues to evolve, and brands that adapt quickly will thrive. By staying ahead of trends and maintaining authentic connections with their audience, forward-thinking companies can achieve remarkable growth.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
