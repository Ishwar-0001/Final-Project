// ResponseTimeline.jsx
import React from "react";

/**
 * Visual timeline: 4 steps horizontally (matches the image)
 */

const steps = [
  { label: "Request Received" },
  { label: "Review & Assignment" },
  { label: "Expert Consultation" },
  { label: "Personalized Solution" },
];

const ResponseTimeline = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[28px]">
      <h3 className="text-[18px] font-inter font-semibold text-[#0B1A2B] mb-4">Response Timeline</h3>
      <div className="flex items-center gap-4">
        {steps.map((s,i)=>(
          <div key={i} className="flex-1 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#7BE0FF] border-2 border-white flex items-center justify-center font-bold text-[#0B1A2B]">{i+1}</div>
            <div className="mt-2 text-sm text-[#0B1A2B]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResponseTimeline;
