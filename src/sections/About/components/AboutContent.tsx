import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

export const AboutContent = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const yearsCount = useCountUp(10, isInView, 2000);

  return (
    <div 
      ref={ref}
      className="items-center box-border gap-x-16 grid grid-cols-1 gap-y-16 mb-24 md:grid-cols-2"
    >
      <div className="box-border min-h-[auto] min-w-[auto]">
        <div 
          className={`text-[oklch(0.708_0_0)] text-sm box-border tracking-[1.4px] leading-5 uppercase mb-4 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          04 — About
        </div>
        <h2 
          className={`text-4xl font-medium box-border tracking-[-0.9px] leading-10 uppercase mb-6 md:text-6xl md:tracking-[-1.5px] md:leading-[60px] transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          We Kill Ordinary.
        </h2>
        <p 
          className={`text-[oklch(0.439_0_0)] text-lg box-border leading-7 mb-6 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Raw Engine Media is an independent advertising and marketing agency
          built by people who live and breathe the culture. At our core, we are
          enthusiasts and creative leaders who understand your audience —
          because we are your audience.
        </p>
        <div 
          className={`items-center box-border gap-x-4 flex gap-y-4 pt-6 border-t border-solid border-[oklch(0.922_0_0)] transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-5xl box-border leading-[48px] min-h-[auto] min-w-[auto]">
            {yearsCount}+
          </div>
          <div className="text-[oklch(0.439_0_0)] box-border min-h-[auto] min-w-[auto]">
            Years of Impact
            <br className="box-border" />
            <span className="text-sm box-border leading-5">
              EST 2016
            </span>
          </div>
        </div>
      </div>
      <div 
        className={`relative box-border min-h-[auto] min-w-[auto] transition-all duration-1000 delay-200 ${
          isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <img
          src="https://c.animaapp.com/mmdx73wyuGbwQi/assets/c8188e963969624df9c79043411bad6d17a6d81a.png"
          alt="Creative production"
          className="shadow-[rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px] box-border h-[500px] max-w-full object-cover w-full rounded-[10px]"
        />
      </div>
    </div>
  );
};
