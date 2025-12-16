// BusinessHours.jsx
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

/**
 * Business hours + social icons
 */

const BusinessHours = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[28px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-[12px] bg-white/90 border border-[rgba(0,0,0,0.03)]">
          <div className="font-inter font-semibold text-[#0B1A2B]">Operating Hours</div>
          <div className="mt-2 text-xs text-[#A1ABC0]">
            <div>Weekday: 9:00 AM - 5:00 PM</div>
            <div>Tuesday: 9:00 AM - 5:00 PM</div>
            <div>Weekends: Closed</div>
          </div>
        </div>

        <div className="p-4 rounded-[12px] bg-white/90 border border-[rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full text-[#0B1A2B]"><Facebook /></button>
            <button className="p-2 rounded-full text-[#0B1A2B]"><Twitter /></button>
            <button className="p-2 rounded-full text-[#0B1A2B]"><Instagram /></button>
            <button className="p-2 rounded-full text-[#0B1A2B]"><Linkedin /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;
