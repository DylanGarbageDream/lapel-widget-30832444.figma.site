export const HeroBackground = () => {
  return (
    <div className="absolute bg-black box-border z-0 overflow-hidden inset-0">
      <iframe
        src="https://player.vimeo.com/video/1058432707?h=c74978100d&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        className="absolute box-border h-[1000px] min-h-[210.938px] min-w-[375px] pointer-events-none w-[1777.8px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:min-h-[720px] md:min-w-[1280px]"
        allow="autoplay; fullscreen"
        title="Background Video"
      ></iframe>
      <div className="absolute bg-[oklab(0_0_0_/_0.5)] inset-0"></div>
    </div>
  );
};
