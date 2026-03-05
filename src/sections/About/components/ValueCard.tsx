export type ValueCardProps = {
  iconUrl: string;
  title: string;
  description: string;
  index: number;
  isInView: boolean;
};

export const ValueCard = (props: ValueCardProps) => {
  return (
    <div 
      className={`bg-white box-border min-h-[auto] min-w-[auto] p-8 rounded-[10px] transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
        props.isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${props.index * 100}ms` }}
    >
      <img
        src={props.iconUrl}
        alt="Icon"
        className="text-black box-border h-12 w-12 mb-4 transition-transform duration-300 hover:scale-110"
      />
      <h3 className="text-xl font-medium box-border tracking-[-0.5px] leading-7 uppercase mb-3">
        {props.title}
      </h3>
      <p className="text-[oklch(0.439_0_0)] box-border">
        {props.description}
      </p>
    </div>
  );
};
