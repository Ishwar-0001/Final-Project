// ContactMethods.jsx
import React from "react";
import { Phone, Mail, MessageSquare, MessageCircle } from "lucide-react";

/**
 * ContactMethods grid (as in left column below hero and also used on right)
 * - 4 cards in two rows
 * - exact spacing and colors approximated with tailwind arbitrary utilities
 */

const Item = ({ Icon, title, subtitle }) => (
  <div className="backdrop-blur-sm bg-white/90 rounded-[12px] p-4 border border-[rgba(0,0,0,0.03)] shadow-sm hover:translate-y-[-4px] transition-transform text-[#0B1A2B]">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-[#7BE0FF] to-[#C792FF] text-white">
        <Icon size={18} />
      </div>
      <div>
        <div className="font-inter font-semibold text-sm">{title}</div>
        <div className="text-xs text-[#A1ABC0]">{subtitle}</div>
      </div>
    </div>
  </div>
);

const ContactMethods = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[28px]">
      <h3 className="text-[18px] font-inter font-semibold text-[#0B1A2B] mb-4">Multiple Contact Methods</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Item Icon={Phone} title="+1 800 123 4567" subtitle="Call us" />
        <Item Icon={Mail} title="hello@yourwebsite.com" subtitle="Email us" />
        <Item Icon={MessageCircle} title="Chat with Us" subtitle="WhatsApp" />
        <Item Icon={MessageSquare} title="Live Chat" subtitle="Start a session" />
      </div>
    </section>
  );
};

export default ContactMethods;
