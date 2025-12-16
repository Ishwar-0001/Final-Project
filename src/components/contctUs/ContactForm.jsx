// ContactForm.jsx
import React, { useState } from "react";

/**
 * ContactForm component (separate page block as in the design)
 * - Uses exact spacing & colors approximated with Tailwind arbitrary utilities
 * - Includes basic validation and submit simulation
 */

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (e) => /\S+@\S+\.\S+/.test(e);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!form.name || !form.email || !form.message || !validateEmail(form.email)) {
      setStatus("error");
      return;
    }
    setLoading(true);
    setStatus(null);
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      console.log("form submitted", form);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[32px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={handleSubmit} className="lg:col-span-2">
          <div className="backdrop-blur-md bg-[rgba(255,255,255,0.85)] border border-[rgba(0,0,0,0.04)] rounded-[18px] p-6 shadow-md">
            <h2 className="text-[22px] font-inter font-semibold text-[#0B1A2B]">Contact Form</h2>
            <p className="text-sm text-[#A1ABC0] mt-1">Enter your email and contact us</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
                placeholder="Name"
                className="p-3 rounded-[8px] bg-[#F8FBFF] placeholder:text-[#A1ABC0] border border-[rgba(0,0,0,0.04)]"
              />
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                placeholder="Email Address"
                className="p-3 rounded-[8px] bg-[#F8FBFF] placeholder:text-[#A1ABC0] border border-[rgba(0,0,0,0.04)]"
              />
              <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}
                placeholder="Phone Number"
                className="p-3 rounded-[8px] bg-[#F8FBFF] placeholder:text-[#A1ABC0] border border-[rgba(0,0,0,0.04)] md:col-span-2"
              />
              <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}
                placeholder="Message Subject"
                className="p-3 rounded-[8px] bg-[#F8FBFF] placeholder:text-[#A1ABC0] border border-[rgba(0,0,0,0.04)] md:col-span-2"
              />
              <textarea rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
                placeholder="Your Message"
                className="p-3 rounded-[8px] bg-[#F8FBFF] placeholder:text-[#A1ABC0] border border-[rgba(0,0,0,0.04)] md:col-span-2"
              />
            </div>

            <div className="mt-4 flex items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="px-[22px] py-[12px] rounded-[12px] text-white font-semibold"
                style={{
                  background: "linear-gradient(90deg,#7BE0FF,#C792FF)",
                  boxShadow: "0 8px 24px rgba(124,185,255,0.18)"
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <div className="text-sm">
                {status === "success" && <span className="text-[#0B1A2B]">Message sent!</span>}
                {status === "error" && <span className="text-[#E94560]">Please complete required fields</span>}
              </div>
            </div>
          </div>
        </form>

        <aside>
          {/* Right column stacked items (multiple methods / small info cards) */}
          <div className="backdrop-blur-md bg-[rgba(255,255,255,0.85)] border border-[rgba(0,0,0,0.04)] rounded-[18px] p-4 shadow-md">
            <h3 className="text-base font-semibold text-[#0B1A2B]">Quick contact</h3>
            <div className="mt-3 text-sm text-[#A1ABC0]">Choose another way to reach us</div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 rounded-[12px] bg-white border border-[rgba(0,0,0,0.02)] text-center text-[#0B1A2B]">+1 800 123 4567</div>
              <div className="p-3 rounded-[12px] bg-white border border-[rgba(0,0,0,0.02)] text-center text-[#0B1A2B]">hello@yourwebsite.com</div>
              <div className="p-3 rounded-[12px] bg-white border border-[rgba(0,0,0,0.02)] text-center text-[#0B1A2B]">Chat with Us</div>
              <div className="p-3 rounded-[12px] bg-white border border-[rgba(0,0,0,0.02)] text-center text-[#0B1A2B]">Live Chat</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactForm;
