import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCarousel } from "@/sections/Testimonials/components/TestimonialCarousel";

export const Testimonials = () => {
  return (
    <section className="bg-[oklch(0.985_0_0)] box-border px-6 py-24 md:px-12">
      <div className="box-border max-w-screen-xl mx-auto">
        <SectionHeader
          label="05 — Testimonials"
          title="Trusted by Industry Leaders"
          description="Don't just take our word for it — hear from the brands we've helped accelerate."
        />
        <TestimonialCarousel />
      </div>
    </section>
  );
};
