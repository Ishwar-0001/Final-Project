import { Check } from "lucide-react";

function FeatureCard({ title }) {
  return (
    
    <div
      className="group relative flex items-start gap-4
                 bg-[rgb(244,244,244)]
                 rounded-2xl px-5 py-5
                 transition-all duration-300
                 hover:-translate-y-2
                 hover:bg-[rgb(12,12,12)]
                 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
    >
      {/* Glow layer */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0
                   group-hover:opacity-100
                   bg-gradient-to-br from-[#53aaa4]/15 to-transparent
                   transition-opacity duration-300
                   pointer-events-none"
      />

      {/* Icon */}
      <div
        className="relative z-10 flex-shrink-0
                   w-11 h-11
                   flex items-center justify-center
                   rounded-xl
                   bg-gradient-to-br from-[#53aaa4] to-[#7fd6cf]
                   shadow-lg shadow-[#53aaa4]/30
                   transition-all duration-300
                   group-hover:scale-110
                   group-hover:shadow-[0_0_22px_rgba(83,170,164,0.6)]"
      >
        <Check className="w-5 h-5 text-white" />
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h4
          className="text-sm md:text-[15px]
                     font-[Urbanist] font-semibold
                     leading-snug
                     text-[rgb(12,12,12)]
                     transition-colors duration-300
                     group-hover:text-white"
        >
          {title}
        </h4>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
      
      {/* Decorative blur — pushed DOWN so heading stays clean */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none hidden md:block">

        <div
          className="absolute bottom-0 right-1/3
                     w-[360px] h-[360px]
                     bg-[#53aaa4]/15
                     blur-[120px] rounded-full"
        />
        <div
          className="absolute -bottom-24 -left-32
                     w-[360px] h-[360px]
                     bg-[#53aaa4]/10
                     blur-[120px] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading (pure white background now) */}
        <h2
          className="text-center mb-12
                     font-[Urbanist] font-extrabold
                     text-3xl md:text-4xl
                     text-[rgb(12,12,12)]"
        >
          Why Choose Us?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard title="Experienced Team of 50+ Professionals" />
          <FeatureCard title="On-Time Project Delivery Guaranteed" />
          <FeatureCard title="Transparent Communication & Updates" />
          <FeatureCard title="Post-Launch Support Included" />
        </div>
      </div>
    </section>
  );
}
