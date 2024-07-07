"use client";
import AboutMeSection from "@/components/section/AboutMeSection";
import ContactSection from "@/components/section/ContactSection";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col justify-between md:px-24 px-6 gap-10 w-full my-12">
        <AboutMeSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Contact