import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="box-border">
      <div className="box-border mb-6">
        <label className="text-sm font-medium box-border block leading-5 mb-2">
          Name
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="text-base bg-gray-100 box-border flex h-9 leading-6 w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      <div className="box-border mb-6">
        <label className="text-sm font-medium box-border block leading-5 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="text-base bg-gray-100 box-border flex h-9 leading-6 w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      <div className="box-border mb-6">
        <label className="text-sm font-medium box-border block leading-5 mb-2">
          Company
        </label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
          className="text-base bg-gray-100 box-border flex h-9 leading-6 w-full border px-3 py-1 rounded-lg border-solid border-transparent md:text-sm md:leading-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>
      <div className="box-border mb-6">
        <label className="text-sm font-medium box-border block leading-5 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          required
          className="text-base bg-gray-100 box-border flex leading-6 min-h-16 resize-none w-full px-3 py-2 rounded-lg border-transparent md:text-sm md:leading-5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`text-[oklch(1_0_0)] text-sm font-medium items-center bg-gray-950 gap-x-2 inline-flex shrink-0 h-10 justify-center leading-5 gap-y-2 text-center text-nowrap w-full px-6 py-0 rounded-lg transition-all duration-300 ${
          isSubmitting 
            ? "opacity-70 cursor-not-allowed" 
            : "hover:bg-gray-800 active:scale-[0.98]"
        } ${isSubmitted ? "bg-green-600 hover:bg-green-600" : ""}`}
      >
        {isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  );
};
