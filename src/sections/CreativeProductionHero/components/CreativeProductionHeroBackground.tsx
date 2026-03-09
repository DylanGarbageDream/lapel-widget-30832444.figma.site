interface CreativeProductionHeroBackgroundProps {
  videoUrl: string;
}

export const CreativeProductionHeroBackground = ({ videoUrl }: CreativeProductionHeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <iframe
        src={videoUrl}
        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0"
        allow="autoplay; fullscreen"
        style={{ transform: 'translate(-50%, -50%) scale(1.01)' }}
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};
