import { useState, useEffect } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav 
      className={`fixed box-border z-50 p-6 top-0 inset-x-0 md:px-12 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="items-center box-border flex justify-between max-w-screen-xl mx-auto">
        <NavbarLogo />
        
        {/* Desktop Navigation */}
        <NavbarLinks />
        
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span 
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <a
            href="#services"
            onClick={closeMenu}
            className="text-white text-2xl font-medium hover:text-white/70 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={closeMenu}
            className="text-white text-2xl font-medium hover:text-white/70 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="text-white text-2xl font-medium hover:text-white/70 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-white text-2xl font-medium hover:text-white/70 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
