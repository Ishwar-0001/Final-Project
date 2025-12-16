// FAQSection.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * FAQ accordion
 * - uses bg #F2F6FF card background and darker panels to match image
 */

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-[10px] border border-[rgba(0,0,0,0.03)] overflow-hidden ${open ? "bg-white" : "bg-[#F7FBFF]"}`}>
      <button onClick={()=>setOpen(!open)} className="w-full flex items-center justify-between p-4">
        <div className="text-[#0B1A2B] font-inter font-semibold">{q}</div>
        <ChevronDown className={`text-[#0B1A2B] ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="p-4 text-[#A1ABC0]">{a}</div>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "What is your typical response time?", a: "We typically reply within 24 hours for most inquiries." },
    { q: "Do you offer free consultations?", a: "Yes, we offer a brief complimentary consult to scope projects." },
    { q: "How do I request a callback?", a: "Use the callback button next to the form or submit your phone number." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[28px]">
      <h3 className="text-[18px] font-inter font-semibold text-[#0B1A2B] mb-4">FAQ Section</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map(f => <FaqItem key={f.q} {...f} />)}
      </div>
    </section>
  );
};

export default FAQSection;
