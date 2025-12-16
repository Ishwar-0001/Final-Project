import googleImg from "../../assets/googleMap.png";
import { Linkedin, Instagram, Facebook, Twitter } from "lucide-react";

export default function OfficeInfoSection() {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* MAP CARD */}
                    <div
                        className="group relative rounded-2xl overflow-hidden
             bg-[rgb(244,244,244)]
             border border-black/5
             shadow-[0_20px_60px_rgba(0,0,0,0.12)]
             transition-all duration-500
             hover:-translate-y-1"
                    >
                        {/* Image */}
                        <img
                            src={googleImg}
                            alt="Office Location Map"
                            className="w-full h-full object-cover
               transition-transform duration-700
               group-hover:scale-110"
                        />

                        {/* Dark premium overlay */}
                        <div
                            className="absolute inset-0
               bg-linear-to-t
               from-[rgb(12,12,12)]/70
               via-[rgb(12,12,12)]/30
               to-transparent"
                        />

                        {/* Animated location pin */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <span className="absolute inline-flex h-10 w-10 rounded-full
                       bg-[#53aaa4]/30 animate-ping" />
                                <span className="relative inline-flex h-4 w-4 rounded-full
                       bg-[#53aaa4] shadow-[0_0_20px_rgba(83,170,164,0.9)]" />
                            </div>
                        </div>


                    </div>


                    {/* OFFICE HOURS — PREMIUM CARD */}
                    <div
                        className="group relative rounded-2xl p-6
             bg-[rgb(244,244,244)]
             border border-black/5
             shadow-[0_12px_32px_rgba(0,0,0,0.08)]
             transition-all duration-500
             hover:-translate-y-2
             hover:shadow-[0_25px_60px_rgba(83,170,164,0.25)]
             overflow-hidden"
                    >
                        {/* Glow background */}
                        <div
                            className="absolute -top-24 -right-24 w-64 h-64
               bg-[#53aaa4]/20 blur-[120px]
               opacity-0 group-hover:opacity-100
               transition-opacity duration-500 pointer-events-none"
                        />

                        {/* Header */}
                        <div className="relative z-10 flex items-center justify-between">
                            <h3 className="font-[Urbanist] text-lg font-extrabold text-[rgb(12,12,12)]">
                                Our Office Hours
                            </h3>

                            {/* Status badge */}
                            <span
                                className="text-[10px] uppercase tracking-widest
                 px-3 py-1 rounded-full
                 bg-[#53aaa4]/15 text-[#53aaa4]
                 font-semibold"
                            >
                                Open Today
                            </span>
                        </div>

                        {/* Timeline */}
                        <div className="relative z-10 mt-6 space-y-4 text-sm">

                            {/* Row */}
                            <div className="flex items-center justify-between
                    p-3 rounded-xl
                    bg-white
                    transition-all duration-300
                    group-hover:shadow-sm">
                                <span className="text-[#4A4A4A]">Monday – Friday</span>
                                <span className="font-semibold text-[rgb(12,12,12)]">
                                    9:00 AM – 6:00 PM
                                </span>
                            </div>

                            <div className="flex items-center justify-between
                    p-3 rounded-xl
                    bg-white
                    transition-all duration-300
                    group-hover:shadow-sm">
                                <span className="text-[#4A4A4A]">Saturday</span>
                                <span className="font-semibold text-[rgb(12,12,12)]">
                                    10:00 AM – 2:00 PM
                                </span>
                            </div>

                            <div className="flex items-center justify-between
                    p-3 rounded-xl
                    bg-white
                    transition-all duration-300
                    group-hover:shadow-sm">
                                <span className="text-[#4A4A4A]">Sunday</span>
                                <span className="font-semibold text-red-500">
                                    Closed
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="relative z-10 mt-6 h-px bg-[#53aaa4]/30" />

                        {/* Footer note */}
                        <p className="relative z-10 mt-4 text-xs text-[#4A4A4A] leading-relaxed">
                            Our team typically responds within <span className="font-medium text-[rgb(12,12,12)]">24 hours</span>
                            during business days.
                        </p>
                    </div>


                    {/* SOCIAL / STATS CARD */}
                    <div
                        className="rounded-2xl p-6
                       bg-[rgb(244,244,244)]
                       border border-black/5
                       shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                       flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="font-[Urbanist] text-lg font-extrabold text-[rgb(12,12,12)]">
                                Connect With Us
                            </h3>

                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <StatBox value="25K+" label="Followers" />
                                <StatBox value="9K+" label="Clients" />
                                <StatBox value="20K+" label="Leads Generated" />
                                <StatBox value="4.9★" label="Average Rating" />
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <SocialIcon icon={Linkedin} label="LinkedIn" />
                            <SocialIcon icon={Instagram} label="Instagram" />
                            <SocialIcon icon={Facebook} label="Facebook" />
                            <SocialIcon icon={Twitter} label="Twitter" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

/* ---------- Small Components ---------- */

function StatBox({ value, label }) {
    return (
        <div
            className="group rounded-xl p-4 text-center
                 bg-white
                 border border-black/5
                 transition-all duration-300
                 hover:-translate-y-1
                 hover:bg-[rgb(12,12,12)]
                 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
        >
            <div className="text-lg font-extrabold text-[#53aaa4]">
                {value}
            </div>
            <p className="mt-1 text-xs text-[#4A4A4A] group-hover:text-white/80">
                {label}
            </p>
        </div>
    );
}


function SocialIcon({ icon: Icon, label }) {
    return (
        <a
            href="#"
            aria-label={label}
            className="group relative flex items-center justify-center
                 w-12 h-12 rounded-xl
                 bg-white border border-black/5
                 shadow-sm
                 transition-all duration-300
                 hover:-translate-y-1
                 hover:bg-[rgb(12,12,12)]
                 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]"
        >
            {/* glow */}
            <span
                className="absolute inset-0 rounded-xl opacity-0
                   bg-[#53aaa4]/20 blur-md
                   group-hover:opacity-100 transition"
            />

            <Icon
                className="relative z-10 w-5 h-5 text-[#53aaa4]
                   transition-colors duration-300
                   group-hover:text-white"
            />
        </a>
    );
}
