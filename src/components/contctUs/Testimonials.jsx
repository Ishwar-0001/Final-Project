import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const REVIEWS = [
  { name: "Sarah J.", company: "TechSolutions Inc.", text: "Outstanding quality and communication. Our ROI improved significantly after launch." },
  { name: "Maran A.", company: "StartupHub", text: "Delivered before deadline with exceptional attention to detail. Highly recommended." },
  { name: "Priya K.", company: "GlobalCorp", text: "Their team truly understands business goals and translates them into results." },
  { name: "Rahul M.", company: "InnovateLabs", text: "Professional, transparent, and technically strong. Support was fantastic." },
  { name: "Anjali S.", company: "DigitalFirst", text: "Creative execution with solid performance gains. Loved the experience." },
  { name: "David L.", company: "FutureWorks", text: "Reliable delivery and excellent post-launch support. Worth every penny." },
  { name: "Neha R.", company: "CreativeStudio", text: "They elevated our brand presence with a clean, modern experience." },
  { name: "Amit P.", company: "MarketPro", text: "Clear communication and flawless execution throughout the project." },
  { name: "Jessica T.", company: "CloudTech", text: "Exceptional design sense and smooth project handling end-to-end." },
  { name: "Rohan V.", company: "VenturesCo", text: "One of the most professional teams we've worked with. Highly trusted." },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-[#FFD700] text-sm drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ review }) {
  return (
    <div className="group relative flex flex-col justify-between bg-[rgb(244,244,244)] backdrop-blur-md rounded-[26px] px-6 py-6 w-full max-w-[400px]
                    transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03]
                    hover:bg-[rgb(12,12,12)] hover:shadow-[0_20px_60px_rgba(83,170,164,0.25)]">

      <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-[#53aaa4]/20 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <StarRating />
        <p className="text-sm leading-relaxed text-[rgb(12,12,12)] group-hover:text-white transition-colors duration-300">
          “{review.text}”
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#53aaa4]
                        shadow-[0_0_18px_rgba(83,170,164,0.35)] group-hover:scale-105 transition">
          <img src="https://i.pravatar.cc/100?img=12" alt={review.name} className="w-full h-full object-cover" />
        </div>

        <div>
          <div className="flex items-center gap-1 text-sm font-semibold text-[rgb(12,12,12)] group-hover:text-white">
            {review.name}
            <CheckCircle className="w-4 h-4 text-[#53aaa4]" />
          </div>
          <div className="text-xs text-[#4A4A4A] group-hover:text-white/70">{review.company}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-[#53aaa4]/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] bg-[#53aaa4]/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-[Urbanist] font-extrabold text-3xl md:text-4xl text-[rgb(12,12,12)]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-sm md:text-base text-[#4A4A4A]">
            Don’t just take our word for it — hear from our satisfied clients
          </p>
        </div>

        {!showAll && (
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee will-change-transform"
                 style={{ animationDuration: window.innerWidth < 640 ? "12s" : "22s" }}>
              {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                <TestimonialCard key={i} review={review} />
              ))}
            </div>

            <style>{`
              @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
              }
              .animate-marquee {
                animation: marquee linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        )}

        {showAll && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {REVIEWS.map((review, i) => (
              <TestimonialCard key={i} review={review} />
            ))}
          </div>
        )}

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
                       bg-gradient-to-r from-[#53aaa4] to-[#7fd6cf]
                       text-white font-semibold shadow-[0_10px_30px_rgba(83,170,164,0.4)]
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(83,170,164,0.6)]">
            {showAll ? "Show Less" : "View All Reviews"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
