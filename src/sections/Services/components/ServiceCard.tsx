export type ServiceCardProps = {
  number: string;
  iconUrl: string;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
};

export const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div 
      className={`box-border min-h-[auto] min-w-[auto] group cursor-pointer transition-all duration-700 ${
        props.isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${props.index * 100}ms` }}
    >
      <div className="text-[oklch(0.87_0_0)] text-4xl box-border leading-10 mb-4 transition-colors duration-300 group-hover:text-black">
        {props.number}
      </div>
      <img
        src={props.iconUrl}
        alt="Icon"
        className="text-black box-border h-10 w-10 mb-4 transition-transform duration-300 group-hover:scale-110"
      />
      <h3 className="text-xl font-medium box-border tracking-[-0.5px] leading-7 uppercase mb-3 transition-colors duration-300">
        {props.title}
      </h3>
      <p className="text-[oklch(0.439_0_0)] box-border transition-colors duration-300">
        {props.description}
      </p>
    </div>
  );
};
