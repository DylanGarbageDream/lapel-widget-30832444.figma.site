export type PortfolioImageProps = {
  src: string;
  alt: string;
  index: number;
  isInView: boolean;
};

export const PortfolioImage = (props: PortfolioImageProps) => {
  return (
    <div 
      className={`relative aspect-[4/3] box-border min-h-[auto] min-w-[auto] overflow-hidden rounded-[10px] group cursor-pointer transition-all duration-700 ${
        props.isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${props.index * 150}ms` }}
    >
      <img
        src={props.src}
        alt={props.alt}
        className="box-border h-full max-w-full object-cover w-full transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
    </div>
  );
};
