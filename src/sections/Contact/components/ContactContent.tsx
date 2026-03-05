import { ContactForm } from "@/sections/Contact/components/ContactForm";
import { ContactInfo } from "@/sections/Contact/components/ContactInfo";

export const ContactContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-16 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[oklab(0.708_0_0_/_0.5)] gap-y-16 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[oklab(0.708_0_0_/_0.5)]">
        <ContactForm />
      </div>
      <ContactInfo />
    </div>
  );
};
