// ContactFooter.jsx
import React from "react";

/**
 * Footer area for contact page
 */

const ContactFooter = () => {
  return (
    <footer className="bg-[#F2F6FF] border-t border-[rgba(0,0,0,0.03)] mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[20px] text-center">
        <div className="text-xs text-[#0B1A2B]">© {new Date().getFullYear()} Your Website. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default ContactFooter;
