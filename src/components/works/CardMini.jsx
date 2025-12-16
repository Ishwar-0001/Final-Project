import React from "react";

export default function CardMini({ work }) {
  return (
    <a
      href={work.href}
      className="group block rounded-2xl overflow-hidden bg-white
                 shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                 transition-all duration-300 hover:-translate-y-1"
    >
      {/* IMAGE */}
      <div className="relative w-full h-44 md:h-48 lg:h-56 overflow-hidden">
        <img
          src={work.image}
          alt={work.client}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

        {/* Client badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs shadow-sm">
            {work.client}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-3">
          <h4 className="text-lg md:text-xl font-[Urbanist] font-semibold text-[#0C0C0C]">
            {work.client}
          </h4>
          <span className="text-xs text-[#6D6D6D]">{work.location}</span>
        </div>

        <p className="mt-3 text-sm text-[#4A4A4A]">
          Delivered a modern, responsive site with improved performance.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <span className="text-sm font-medium text-[#0C0C0C]">View project</span>
          <svg className="w-4 h-4 text-[#888]" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
