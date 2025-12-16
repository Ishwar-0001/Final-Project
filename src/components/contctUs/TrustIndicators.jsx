// TrustIndicators.jsx
import React from "react";
import { ShieldCheck } from "lucide-react";

/**
 * Trust indicators row with small badges
 */

const TrustIndicators = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[28px]">
      <h3 className="text-[18px] font-inter font-semibold text-[#0B1A2B] mb-4">Trust Indicators</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-3 rounded-[12px] bg-white/90 border border-[rgba(0,0,0,0.03)]">
          <div className="p-2 rounded bg-[#7BE0FF]"><ShieldCheck /></div>
          <div>
            <div className="text-[#0B1A2B] font-inter font-semibold">Security Badges</div>
            <div className="text-xs text-[#A1ABC0]">Verified & secure</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-[12px] bg-white/90 border border-[rgba(0,0,0,0.03)]">
          <div className="p-2 rounded bg-[#7BE0FF]">24/7</div>
          <div>
            <div className="text-[#0B1A2B] font-inter font-semibold">24/7 Response Guarantee</div>
            <div className="text-xs text-[#A1ABC0]">Always available</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-[12px] bg-white/90 border border-[rgba(0,0,0,0.03)]">
          <div className="p-2 rounded bg-[#7BE0FF]">★</div>
          <div>
            <div className="text-[#0B1A2B] font-inter font-semibold">4.9/5 Rating</div>
            <div className="text-xs text-[#A1ABC0]">From clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
