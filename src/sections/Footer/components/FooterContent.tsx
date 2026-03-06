import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-8 mb-8 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
      <FooterBrand />
      <FooterLinks
        title="Quick Links"
        variant="navigation"
        links={[
          { href: "#services", text: "Services" },
          { href: "#about", text: "About" },
          { href: "#contact", text: "Contact" },
        ]}
      />
      <FooterLinks
        title="Follow Us"
        variant="social"
        socialLinks={[
          {
            href: "https://www.instagram.com/rawenginemedia/",
            iconSrc: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-24.svg",
            alt: "Icon",
          },
          {
            href: "#",
            iconSrc: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-25.svg",
            alt: "Icon",
          },
          {
            href: "#",
            iconSrc: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-26.svg",
            alt: "Icon",
          },
          {
            href: "#",
            iconSrc: "https://c.animaapp.com/mmdx73wyuGbwQi/assets/icon-27.svg",
            alt: "Icon",
          },
        ]}
      />
    </div>
  );
};
