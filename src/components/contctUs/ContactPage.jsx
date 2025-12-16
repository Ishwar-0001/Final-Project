// ContactPage.jsx
import React from "react";
import ContactHero from "./ContactHero";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F6FF] font-inter">
      <ContactHero />
      <WhyChooseUs />
      <Testimonials />
      
    </div>
  );
};

export default ContactPage;
