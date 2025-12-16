import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSectionPremium() {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">

      {/* Soft premium background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#53aaa4]/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-[#53aaa4]/15 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT — FORM */}
          <div className="bg-[rgb(244,244,244)] rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <h3 className="font-[Urbanist] text-2xl font-extrabold text-[rgb(12,12,12)] mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Email Address" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Phone Number" />
                <Input placeholder="Company Name" />
              </div>

              <textarea
                rows={2}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl px-4 py-3 bg-white
                           border border-black/10
                           focus:outline-none focus:border-[#53aaa4]
                           focus:ring-2 focus:ring-[#53aaa4]/30
                           transition"
              />

              <button
                className="w-full mt-4 inline-flex items-center justify-center gap-2
                           rounded-full px-8 py-4
                           bg-[#53aaa4]
                           text-white font-semibold
                           shadow-[0_10px_30px_rgba(83,170,164,0.45)]
                           transition-all duration-300
                           hover:scale-[1.03] hover:bg-[rgb(12,12,12)]"
              >
                Schedule Free Consultation →
              </button>
            </form>
          </div>

          {/* RIGHT — CONTACT CARDS */}
          <div className="space-y-4">
            <ContactCard
              icon={<MapPin />}
              title="Visit Our Office"
              desc="New Delhi, India"
              meta="Get directions"
            />

            <ContactCard
              icon={<Mail />}
              title="Email Us Anytime"
              desc="contact@yourcompany.com"
              meta="Quick response"
            />

            <ContactCard
              icon={<Phone />}
              title="Call Us"
              desc="+91 98765 43210"
              meta="Mon–Sat, 9AM–6PM"
            />

            <ContactCard
              icon={<Clock />}
              title="Average Response Time"
              desc="Within 2 Hours"
              meta="Fast support"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- Small Components (MOVED OUTSIDE) ---------- */

function Input({ placeholder }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-xl px-4 py-3 bg-white
                 border border-black/10
                 focus:outline-none focus:border-[#53aaa4]
                 focus:ring-2 focus:ring-[#53aaa4]/30
                 transition"
    />
  );
}

function ContactCard({ icon, title, desc, meta }) {
  return (
    <div
      className="group relative flex items-center gap-4
                 bg-[rgb(244,244,244)]
                 rounded-2xl px-5 py-4
                 min-h-[78px]
                 border border-black/5
                 transition-all duration-300
                 hover:bg-[rgb(12,12,12)]
                 hover:-translate-y-1
                 hover:shadow-[0_18px_40px_rgba(83,170,164,0.25)]
                 overflow-hidden"
    >
      {/* subtle accent */}
      <span className="absolute left-0 top-0 h-full w-[2px]
                       bg-[#53aaa4]
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-300" />

      {/* Icon */}
      <div
        className="relative z-10 w-11 h-11 rounded-xl
                   flex items-center justify-center
                   bg-[#53aaa4] text-white
                   shadow-sm
                   transition-all duration-300
                   group-hover:scale-105"
      >
        {icon}
      </div>

      {/* Text */}
      <div className="relative z-10 leading-tight">
        <h4 className="text-sm font-semibold text-[rgb(12,12,12)] group-hover:text-white">
          {title}
        </h4>

        <p className="text-xs text-[#4A4A4A] group-hover:text-white/80">
          {desc}
        </p>

        <span className="text-[10px] tracking-wide uppercase text-[#53aaa4]">
          {meta}
        </span>
      </div>
    </div>
  );
}
