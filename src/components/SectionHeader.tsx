import { useInView } from "@/hooks/useInView";

export type SectionHeaderProps = {
  label?: string;
  title: string;
  titleBreak?: boolean;
  description?: string;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="box-border text-center mb-16">
      {props.label && (
        <div 
          className={`text-[oklch(0.708_0_0)] text-sm box-border tracking-[1.4px] leading-5 uppercase mb-2 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {props.label}
        </div>
      )}
      <h2 
        className={`text-4xl font-medium box-border tracking-[-0.9px] leading-10 uppercase mb-4 md:text-6xl md:tracking-[-1.5px] md:leading-[60px] transition-all duration-700 delay-100 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {props.titleBreak ? (
          <>
            {props.title.split("\n")[0]}
            <br className="text-4xl box-border tracking-[-0.9px] leading-10 md:text-6xl md:tracking-[-1.5px] md:leading-[60px]" />
            {props.title.split("\n")[1]}
          </>
        ) : (
          props.title
        )}
      </h2>
      {props.description && (
        <p 
          className={`text-[oklch(0.439_0_0)] text-lg box-border leading-7 max-w-screen-md mx-auto transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {props.description}
        </p>
      )}
    </div>
  );
};
