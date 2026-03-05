import { useInView } from "@/hooks/useInView";

export const ContactInfo = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="box-border min-h-[auto] min-w-[auto]">
      <div className="box-border mb-8">
        <h3 
          className={`text-2xl font-medium box-border leading-8 mb-8 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Get in Touch
        </h3>
        <div className="box-border">
          <div 
            className={`items-start box-border gap-x-4 flex gap-y-4 mb-6 transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <img
              src="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-21.svg"
              alt="Icon"
              className="box-border shrink-0 h-6 w-6 mt-1"
            />
            <div className="box-border min-h-[auto] min-w-[auto]">
              <p className="text-sm box-border tracking-[0.35px] leading-5 uppercase mb-1">
                Email
              </p>
              <a
                href="mailto:info@rawengine.com"
                className="text-[oklch(0.439_0_0)] box-border transition-colors duration-200 hover:text-black"
              >
                info@rawengine.com
              </a>
            </div>
          </div>
          <div 
            className={`items-start box-border gap-x-4 flex gap-y-4 mb-6 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <img
              src="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-22.svg"
              alt="Icon"
              className="box-border shrink-0 h-6 w-6 mt-1"
            />
            <div className="box-border min-h-[auto] min-w-[auto]">
              <p className="text-sm box-border tracking-[0.35px] leading-5 uppercase mb-1">
                Phone
              </p>
              <p className="text-[oklch(0.439_0_0)] box-border">
                Available upon request
              </p>
            </div>
          </div>
          <div 
            className={`items-start box-border gap-x-4 flex gap-y-4 transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <img
              src="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-23.svg"
              alt="Icon"
              className="box-border shrink-0 h-6 w-6 mt-1"
            />
            <div className="box-border min-h-[auto] min-w-[auto]">
              <p className="text-sm box-border tracking-[0.35px] leading-5 uppercase mb-1">
                Studio
              </p>
              <p className="text-[oklch(0.439_0_0)] box-border">
                Serving the automotive and
                <br className="box-border" />
                outdoor lifestyle community
              </p>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`box-border pt-8 border-t border-solid border-[oklch(0.922_0_0)] transition-all duration-700 delay-400 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h4 className="font-medium box-border mb-4">
          Office Hours
        </h4>
        <p className="text-[oklch(0.439_0_0)] box-border">
          Monday - Friday: 9:00 AM - 6:00 PM
        </p>
        <p className="text-[oklch(0.439_0_0)] box-border">
          Saturday - Sunday: Closed
        </p>
      </div>
    </div>
  );
};
