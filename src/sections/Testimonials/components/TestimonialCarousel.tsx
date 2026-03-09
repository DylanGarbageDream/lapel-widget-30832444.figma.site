import { useInView } from "@/hooks/useInView";

const contentItems = [
  {
    url: "https://player.vimeo.com/video/694628031?h=1f61ab5c4c&autoplay=1&loop=1&muted=1&background=1",
    title: "Content Creation Video 1"
  },
  {
    url: "https://player.vimeo.com/video/694222512?h=d44ec1aa05&autoplay=1&loop=1&muted=1&background=1",
    title: "Content Creation Video 2"
  },
  {
    url: "https://player.vimeo.com/video/694628031?h=1f61ab5c4c&autoplay=1&loop=1&muted=1&background=1",
    title: "Content Creation Video 3"
  }
];

export const TestimonialCarousel = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {contentItems.map((item, index) => (
        <a
          key={index}
          href={item.url.replace('&autoplay=1&loop=1&muted=1&background=1', '')}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
          <div className="relative h-[300px] overflow-hidden">
            <iframe
              src={item.url}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ border: 0 }}
              allow="autoplay; fullscreen; picture-in-picture"
              title={item.title}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        </a>
      ))}
    </div>
  );
};
