// ContactHero.jsx
import React from "react";

/**
 * Hero area + floating contact card (left column)
 * - Uses exact layout and spacing from image (approx values)
 * - Uses Tailwind arbitrary color values to match image
 */

const ContactHero = () => {
  return (
    <section className="w-full bg-[#F2F6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[36px] md:py-[48px] lg:py-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: big hero card */}
          <div className="relative">
            <div
              className="rounded-2xl p-10 md:p-12"
              style={{
                background: "linear-gradient(180deg,#6C4BFF 0%, #4BB0FF 100%)",
                boxShadow: "0 10px 30px rgba(108,75,255,0.12)",
              }}
            >
              <h1 className="font-inter font-semibold text-[36px] md:text-[44px] lg:text-[56px] text-white leading-tight">
                Let's Start a Conversation
              </h1>

              <p className="mt-4 text-[#0B1A2B] text-base md:text-lg max-w-xl">
                Reach out to us — enter your details and we'll reply quickly.
              </p>

              {/* Floating particles upper-right (decorative) */}
              <div className="absolute -top-4 -right-4 w-40 h-40 opacity-60 pointer-events-none">
                {/* Decorative bubbles as CSS gradients */}
                <div className="w-full h-full rounded-full" style={{
                  background: "radial-gradient(circle at 20% 30%, rgba(201,231,255,0.6), rgba(199,150,255,0.25) 40%, transparent 60%)"
                }} />
              </div>
            </div>

            {/* Floating glass contact form card - centered over bottom of hero */}
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[320px] md:w-[360px] lg:w-[420px]">
              <div className="backdrop-blur-md bg-[rgba(255,255,255,0.85)] border border-[rgba(0,0,0,0.06)] rounded-[18px] p-4 md:p-6 shadow-lg">
                <div className="text-sm font-inter text-[#0B1A2B] font-medium mb-2">Contact Form Section</div>
                <input className="w-full rounded-[10px] px-3 py-2 mb-2 text-[#0B1A2B] placeholder:text-[#A1ABC0] bg-[#ffffff] border border-[rgba(0,0,0,0.04)]" placeholder="Name" />
                <input className="w-full rounded-[10px] px-3 py-2 mb-2 text-[#0B1A2B] placeholder:text-[#A1ABC0] bg-[#ffffff] border border-[rgba(0,0,0,0.04)]" placeholder="Email Address" />
                <input className="w-full rounded-[10px] px-3 py-2 mb-2 text-[#0B1A2B] placeholder:text-[#A1ABC0] bg-[#ffffff] border border-[rgba(0,0,0,0.04)]" placeholder="Phone Number" />
                <textarea rows="4" className="w-full rounded-[10px] px-3 py-2 mb-3 text-[#0B1A2B] placeholder:text-[#A1ABC0] bg-[#ffffff] border border-[rgba(0,0,0,0.04)]" placeholder="Your Message" />
                <button className="w-full py-3 rounded-[12px] text-white font-semibold text-base"
                  style={{
                    background: "linear-gradient(90deg,#7BE0FF 0%, #C792FF 100%)",
                    boxShadow: "0 6px 18px rgba(124,185,255,0.28)"
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Right column is left blank here (in image contains right-side vertical stack) */}
          <div className="hidden lg:block" aria-hidden>
            {/* empty placeholder to keep grid spacing identical */}
            <div className="h-[420px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
