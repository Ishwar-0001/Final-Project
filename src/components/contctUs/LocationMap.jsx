// LocationMap.jsx
import React from "react";

/**
 * LocationMap: uses the placeholder static image per your instruction
 */

const LocationMap = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[28px]">
      <h3 className="text-[18px] font-inter font-semibold text-[#0B1A2B] mb-4">Interactive Map</h3>
      <div className="rounded-[12px] overflow-hidden border border-[rgba(0,0,0,0.03)]">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=600&fit=crop"
          alt="Location Map"
          className="w-full h-[360px] object-cover"
        />
        <div className="p-4 bg-white/90">
          <div className="font-inter font-semibold text-[#0B1A2B]">Office Location</div>
          <div className="text-xs text-[#A1ABC0] mt-1">The Courtyard, Al Quoz 1 — Colorado, USA</div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
