// TeamSection.jsx
import React from "react";

/**
 * Team grid: 4 cards
 * - Rounded images, names, roles
 * - exact spacing via Tailwind arbitrary where necessary
 */

const Person = ({ img, name, role }) => (
  <div className="bg-white/90 rounded-[12px] p-4 text-center shadow-sm border border-[rgba(0,0,0,0.03)] hover:translate-y-[-6px] transition-transform">
    <div className="w-20 h-20 rounded-full mx-auto overflow-hidden border-4 border-[#7BE0FF]">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="mt-3 font-inter font-semibold text-[#0B1A2B]">{name}</div>
    <div className="text-xs mt-1 text-[#A1ABC0]">{role}</div>
  </div>
);

const TeamSection = () => {
  const members = [
    { img: "/images/team1.jpg", name: "Sarah Johnson", role: "Head of Support" },
    { img: "/images/team2.jpg", name: "David Chen", role: "Project Manager" },
    { img: "/images/team3.jpg", name: "Joren Johnson", role: "Group Moderator" },
    { img: "/images/team4.jpg", name: "Minta Chen", role: "Project Manager" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[28px]">
      <h3 className="text-[18px] font-inter font-semibold text-[#0B1A2B] mb-4">Meet Our Team</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {members.map((m) => <Person key={m.name} {...m} />)}
      </div>
    </section>
  );
};

export default TeamSection;
