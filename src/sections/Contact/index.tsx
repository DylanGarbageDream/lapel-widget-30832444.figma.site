import { SectionHeader } from "@/components/SectionHeader";
import { ContactContent } from "@/sections/Contact/components/ContactContent";

export const Contact = () => {
  return (
    <section className="bg-white box-border caret-transparent outline-[oklab(0.708_0_0_/_0.5)] px-6 py-24 md:px-12">
      <div className="box-border caret-transparent max-w-screen-xl outline-[oklab(0.708_0_0_/_0.5)] mx-auto">
        <SectionHeader
          title="Fueling the road ahead"
          description="We know the industry from the chassis up. Get in touch today and let's shift your growth into high gear."
        />
        <ContactContent />
      </div>
    </section>
  );
};
