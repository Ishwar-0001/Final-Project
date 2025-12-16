// ContactPage.jsx
import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactMethods from "./ContactMethods";
import TeamSection from "./TeamSection";
import FAQSection from "./FAQSection";
import Testimonials from "./Testimonials";
import ResponseTimeline from "./ResponseTimeline";
import TrustIndicators from "./TrustIndicators";
import LocationMap from "./LocationMap";
import BusinessHours from "./BusinessHours";
import ContactFooter from "./ContactFooter";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#F2F6FF] font-inter">
      <ContactHero />
      <main>
        <ContactForm />
        <ContactMethods />
        <TeamSection />
        {/* Right-side column content from image (testimonials / timeline / trust / map / hours) */}
        <Testimonials />
        <ResponseTimeline />
        <TrustIndicators />
        <LocationMap />
        <BusinessHours />
        <FAQSection />
      </main>
      <ContactFooter />
    </div>
  );
};

export default ContactPage;
