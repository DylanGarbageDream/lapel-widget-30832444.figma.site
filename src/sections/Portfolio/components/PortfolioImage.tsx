export type PortfolioImageProps = {
  src: string;
  alt: string;
  index: number;
  isInView: boolean;
};

export const PortfolioImage = (props: PortfolioImageProps) => {
  return (
    <div className="relative h-full w-full overflow-hidden group">
      <img
        src={props.src}
        alt={props.alt}
        className="box-border h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-bold mb-2">{props.alt}</h3>
        <p className="text-sm text-gray-200">View Project →</p>
      </div>
    </div>
  );
};
