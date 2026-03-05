import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="text-white bg-black box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-6 py-12 md:px-12">
      <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <FooterContent />
        <FooterCopyright />
      </div>
    </footer>
  );
};
