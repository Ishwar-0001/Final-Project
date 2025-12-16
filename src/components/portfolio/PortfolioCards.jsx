// PortfolioCards.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";

/* design tokens */
const ACCENT = "#53AAA4";
const AUTO_MS_DEFAULT = 1500;

/* projects data */
const DEFAULT_PROJECTS = [
  { id: 1, title: "Enterprise Portal — Power & Energy", tagline: "Portal · Knowledge DB · Mobile", desc: "We designed an enterprise portal that centralised technical data and improved issue resolution times across teams.", image: img1, href: "#", role: "Web App", year: "2024" },
  { id: 2, title: "E-commerce Replatform", tagline: "Checkout · Performance", desc: "A conversion-first redesign with performance improvements and a modular headless stack for scale.", image: img2, href: "#", role: "E-commerce", year: "2023" },
  { id: 3, title: "Healthcare Mobile App", tagline: "Patient journeys · Telehealth", desc: "End-to-end mobile experience for scheduling, tele-consultations and follow-ups.", image: img3, href: "#", role: "Mobile App", year: "2024" },
  { id: 4, title: "Brand & Visual Identity", tagline: "Strategy · Identity · UI kit", desc: "Complete branding and UI system to unify product communications.", image: img4, href: "#", role: "Branding", year: "2022" },
  { id: 5, title: "Short-Form Campaign", tagline: "Reels · TikTok · Ads", desc: "High-impact short content that increased social engagement and shareability.", image: img5, href: "#", role: "Campaign", year: "2024" },
];

/* motion variants */
const variants = {
  enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0, scale: 0.985 }),
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.48, ease: [0.2, 0.9, 0.3, 1] } },
  exit: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0, scale: 0.985, transition: { duration: 0.36, ease: [0.2, 0.9, 0.3, 1] } }),
};

/* reduced motion hook */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

/* PortfolioCards component (carousel) */
export default function PortfolioCards({
  projects = DEFAULT_PROJECTS,
  autoMs = AUTO_MS_DEFAULT,
  showControls = true,
}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [playing, setPlaying] = useState(true);
  const reduced = usePrefersReducedMotion();
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const controls = useAnimation();
  const containerControls = useAnimation();

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % projects.length);
    controls.start({ scale: [1, 1.06, 1], transition: { duration: 0.28 } }); // arrow pulse
    // micro shadow pulse on container
    containerControls.start({ boxShadow: "0 30px 60px rgba(0,0,0,0.12)", y: -6, transition: { duration: 0.28 } })
      .then(() => containerControls.start({ boxShadow: "0 18px 40px rgba(0,0,0,0.08)", y: 0, transition: { duration: 0.45 } }));
  }, [projects.length, controls, containerControls]);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + projects.length) % projects.length);
    controls.start({ scale: [1, 1.06, 1], transition: { duration: 0.28 } });
    containerControls.start({ boxShadow: "0 30px 60px rgba(0,0,0,0.12)", y: -6, transition: { duration: 0.28 } })
      .then(() => containerControls.start({ boxShadow: "0 18px 40px rgba(0,0,0,0.08)", y: 0, transition: { duration: 0.45 } }));
  }, [projects.length, controls, containerControls]);

  const restartProgress = useCallback(() => {
    if (!progressRef.current) return;
    progressRef.current.style.transition = "none";
    progressRef.current.style.width = "0%";
    requestAnimationFrame(() => {
      progressRef.current.style.transition = `width ${autoMs}ms linear`;
      progressRef.current.style.width = "100%";
    });
  }, [autoMs]);

  useEffect(() => {
    if (reduced) return;
    if (!playing) {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      if (progressRef.current) progressRef.current.style.width = "0%";
      return;
    }
    restartProgress();
    timerRef.current = setInterval(() => {
      next();
      restartProgress();
    }, autoMs);
    return () => clearInterval(timerRef.current);
  }, [playing, autoMs, next, restartProgress, reduced]);

  useEffect(() => {
    const el = document.getElementById("portfolio-carousel-container");
    if (!el) return;
    const onEnter = () => setPlaying(false);
    const onLeave = () => setPlaying(true);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("focusin", onEnter);
    el.addEventListener("focusout", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("focusin", onEnter);
      el.removeEventListener("focusout", onLeave);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") { setPlaying(false); next(); }
      if (e.key === "ArrowLeft") { setPlaying(false); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
    setPlaying(false);
    restartProgress();
    containerControls.start({ boxShadow: "0 28px 56px rgba(0,0,0,0.10)", y: -4, transition: { duration: 0.28 } })
      .then(() => containerControls.start({ boxShadow: "0 18px 40px rgba(0,0,0,0.08)", y: 0, transition: { duration: 0.45 } }));
  };

  useEffect(() => { restartProgress(); }, [index, restartProgress]);

  const current = projects[index];

  return (
    <motion.div
      id="portfolio-carousel-container"
      animate={containerControls}
      initial={{ boxShadow: "0 12px 28px rgba(0,0,0,0.06)", y: 0 }}
      className="relative bg-white rounded-2xl overflow-hidden"
      style={{ willChange: "transform, box-shadow" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center p-6 md:p-8 lg:p-12">
        <div className="w-full flex items-center justify-center">
          <div
            className="relative w-full max-w-3xl h-64 md:h-72 lg:h-96 rounded-xl overflow-hidden border border-[#EFEFEF] bg-[#f8f8f8]"
            aria-hidden={reduced}
          >
            {/* progress bar (thin) */}
            <div className="absolute left-0 top-0 h-1 w-full bg-white/12">
              <div ref={progressRef} style={{ width: 0, height: "100%", background: ACCENT, borderRadius: 999 }} />
            </div>

            {/* animated image with sheen overlay */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.title}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full object-cover"
                style={{ willChange: "transform, opacity, filter" }}
                loading="lazy"
                draggable={false}
              />
            </AnimatePresence>

            {/* glossy sheen (animated subtle) */}
            <motion.div
              aria-hidden="true"
              initial={{ x: "-30%" }}
              animate={{ x: "120%", opacity: [0, 0.18, 0] }}
              transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
              className="absolute left-0 top-0 w-[35%] h-full pointer-events-none"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.18), rgba(255,255,255,0.02))",
                mixBlendMode: "screen",
              }}
            />

            {/* tag */}
            <div className="absolute left-4 top-4 px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: ACCENT }}>
              {current.role} · {current.year}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="mb-3">
            <p className="text-sm text-[#6D6D6D]">{current.tagline}</p>
            <h3 className="mt-2 text-2xl md:text-3xl font-[Urbanist] font-bold text-[#0C0C0C]" aria-live="polite">
              {current.title}
            </h3>
          </div>

          <p className="text-[#4A4A4A] leading-relaxed mb-6">{current.desc}</p>

          <div className="flex items-center gap-4">
            <a href={current.href} className="inline-flex items-center gap-3 px-5 py-3 rounded-lg text-white font-medium shadow-sm" style={{ background: `linear-gradient(90deg, ${ACCENT}, #47a79f)` }}>
              View Project
            </a>

            <button className="px-4 py-3 rounded-lg border border-[#EDEDED] text-sm font-medium">Case Study</button>
          </div>
        </div>
      </div>

      {/* controls */}
      {showControls && (
        <>
          <motion.button
            onClick={prev}
            aria-label="Previous project"
            initial={{ scale: 1 }}
            animate={controls}
            whileHover={{ scale: 1.04, boxShadow: `0 10px 30px rgba(83,170,164,0.08)` }}
            whileTap={{ scale: 0.96 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full grid place-items-center bg-white/95 hover:bg-white text-[#0C0C0C] shadow-md focus:outline-none focus:ring-4 focus:ring-[#53AAA4]/20"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M15 6L9 12l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.button>

          <motion.button
            onClick={next}
            aria-label="Next project"
            initial={{ scale: 1 }}
            animate={controls}
            whileHover={{ scale: 1.04, boxShadow: `0 10px 30px rgba(83,170,164,0.08)` }}
            whileTap={{ scale: 0.96 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full grid place-items-center bg-white/95 hover:bg-white text-[#0C0C0C] shadow-md focus:outline-none focus:ring-4 focus:ring-[#53AAA4]/20"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.button>
        </>
      )}

      {/* dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex items-center gap-3">
        {projects.map((p, i) => {
          const active = i === index;
          return (
            <button key={p.id} onClick={() => goTo(i)} aria-label={`Go to ${p.title}`} className="relative group">
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                style={{
                  display: "inline-block",
                  height: 8,
                  borderRadius: 999,
                  background: active ? ACCENT : "#E8E8E8",
                  width: active ? 44 : 14,
                  boxShadow: active ? `10 8px 18px rgba(83,170,164,0.18)` : "none",
                }}
                whileHover={{ scale: active ? 1.06 : 1.14 }}
              />
            </button>
          );
        })}
      </div>

      <style>{`
        /* small accessibility respect */
        @media (prefers-reduced-motion: reduce) {
          * { transition: none !important; animation: none !important; }
        }
      `}</style>
    </motion.div>
  );
}
