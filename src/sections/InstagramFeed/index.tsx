import { useInView } from "@/hooks/useInView";
import { InstagramMockup } from "@/sections/InstagramFeed/components/InstagramMockup";

export const InstagramFeed = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="bg-[oklch(0.985_0_0)] box-border px-6 py-24 md:px-12">
      <div ref={ref} className="box-border max-w-screen-xl mx-auto">
        <div className="items-center box-border flex flex-col">
          <div 
            className={`transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <InstagramMockup />
          </div>
          <div 
            className={`box-border min-h-[auto] min-w-[auto] text-center mt-12 transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-[oklch(0.439_0_0)] text-lg box-border leading-7 mb-4">
              Follow our journey
            </p>
            <a
              href="https://www.instagram.com/rawenginemedia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold items-center box-border gap-x-2 inline-flex leading-7 gap-y-2 transition-colors duration-300 hover:text-gray-600"
            >
              @rawenginemedia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
