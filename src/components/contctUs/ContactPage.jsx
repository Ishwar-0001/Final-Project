// ContactPage.jsx
import React from "react";
import ContactHero from "./ContactHero";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import TrustLogos from "./TrustLogos";
import OfficeInfoSection from "./OfficeInfoSection"
import ContactSectionPremium from "./ContactSectionPremium";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F6FF] font-inter">
      <ContactHero />
      <WhyChooseUs />
      <Testimonials />
      <TrustLogos />
      <OfficeInfoSection />
      <ContactSectionPremium />

      
    </div>
  );
};

export default ContactPage;
