function StatCard({ value, label }) {
  return (
    <div
      className="group relative bg-[rgb(244,244,244)]
                 rounded-2xl px-6 py-5 text-center
                 transition-all duration-300
                 hover:bg-[rgb(12,12,12)]
                 hover:-translate-y-1
                 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
    >
      <div className="text-2xl font-extrabold text-[#53aaa4]">
        {value}
      </div>
      <p className="mt-1 text-sm text-[#4A4A4A] group-hover:text-white/80">
        {label}
      </p>
    </div>
  );
}

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#53aaa4]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-[#53aaa4]/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* HERO GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            
            <h1 className="font-[Urbanist] text-3xl md:text-4xl lg:text-5xl
                           font-extrabold leading-tight text-[rgb(12,12,12)]">
              Let’s build something
              <span className="block text-[#53aaa4] mt-1">
                meaningful together
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm md:text-base
                          text-[#4A4A4A] font-inter">
              Share your idea, goal or challenge.  
              Our team usually responds within 24 hours with clear next steps.
            </p>

            {/* subtle CTA hint */}
            <div className="mt-6 flex items-center gap-3 text-sm text-[#4A4A4A]">
              <span className="h-px w-10 bg-[#53aaa4]" />
              <span>Fill the form below to get started</span>
            </div>
          </div>

          {/* RIGHT VISUAL COLUMN */}
          <div className="relative">

            {/* Decorative vertical line */}
            <div className="absolute -left-6 top-0 h-full w-px bg-[#53aaa4]/30 hidden lg:block" />

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <StatCard value="500+" label="Projects Completed" />
              <StatCard value="98%" label="Client Satisfaction" />
              <StatCard value="24/7" label="Support Available" />
              <StatCard value="10+ Years" label="Industry Experience" />
            </div>

            {/* floating accent */}
            <div className="absolute -bottom-10 right-6
                px-4 py-1.5 rounded-full
                text-xs tracking-widest uppercase
                text-[#53aaa4]
                bg-white/70 backdrop-blur
                shadow-sm">
  Trusted Worldwide
</div>

          </div>

        </div>
      </div>
    </section>
  );
}
