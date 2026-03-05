export const HeroButtons = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="box-border gap-x-4 flex flex-wrap justify-center gap-y-4">
      <button 
        onClick={scrollToContact}
        className="text-black text-sm font-medium items-center bg-white gap-x-2 flex shrink-0 h-10 justify-center leading-5 min-h-[auto] min-w-[auto] gap-y-2 text-nowrap px-4 py-0 rounded-lg transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-white/20 active:scale-95"
      >
        Start a Project
        <img
          src="https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-1.svg"
          alt="Icon"
          className="box-border shrink-0 h-4 pointer-events-none text-nowrap w-4 ml-2"
        />
      </button>
      <button 
        onClick={scrollToPortfolio}
        className="text-white text-sm font-medium items-center bg-transparent gap-x-2 flex shrink-0 h-10 justify-center leading-5 min-h-[auto] min-w-[auto] gap-y-2 text-nowrap border px-6 py-0 rounded-lg border-white transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
      >
        View Our Work
      </button>
    </div>
  );
};
