export const NavbarLinks = () => {
  return (
    <div className="text-[oklab(0.999994_0.0000455678_0.0000200868_/_0.9)] box-border gap-x-8 hidden min-h-0 min-w-0 gap-y-8 md:flex md:min-h-[auto] md:min-w-[auto]">
      <a
        href="#services"
        className="box-border inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      >
        Services
      </a>
      <a
        href="#portfolio"
        className="box-border inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      >
        Portfolio
      </a>
      <a
        href="#about"
        className="box-border inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      >
        About
      </a>
      <a
        href="#contact"
        className="box-border inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto] hover:text-white transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      >
        Contact
      </a>
    </div>
  );
};
