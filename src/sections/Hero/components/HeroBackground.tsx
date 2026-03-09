export const HeroBackground = () => {
  console.log('__ANIMA_DBG__ Hero video iframe rendering');
  
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1058432707?h=c74978100d&autoplay=1&loop=1&muted=1&background=1"
        className="absolute w-full h-full"
        style={{ 
          border: 'none',
          margin: 0,
          padding: 0,
          pointerEvents: 'none',
          transform: 'scale(1.5)',
          transformOrigin: 'center center'
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        title="Hero Background Video"
        onLoad={() => console.log('__ANIMA_DBG__ Hero video iframe loaded')}
        onError={(e) => console.error('__ANIMA_DBG__ Hero video iframe error:', e)}
      />
      <div className="absolute bg-[oklab(0_0_0_/_0.5)] inset-0"></div>
    </div>
  );
};
