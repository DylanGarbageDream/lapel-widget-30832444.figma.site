import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export const Newsletter = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-black text-white box-border px-6 py-24 md:px-12">
      <div 
        ref={ref}
        className={`box-border max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
          <Mail className="w-8 h-8" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Stay in the Fast Lane
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get monthly insights, industry trends, and exclusive content delivered straight to your inbox.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-3 text-green-400 animate-fade-in">
            <CheckCircle className="w-6 h-6" />
            <span className="text-lg font-semibold">Thanks for subscribing!</span>
          </div>
        )}

        <p className="text-sm text-gray-400 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
