import { useEffect, useRef, useState } from "react";
import CardMini from "./CardMini";

export default function Marquee({ items }) {
  const trackRef = useRef(null);
  const [duration, setDuration] = useState(18);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;

      // total scroll width (half, because duplicated)
      const totalWidth = trackRef.current.scrollWidth / 2;
      setDistance(totalWidth);

      const w = window.innerWidth;
      if (w < 640) setDuration(25);       // 🔥 fast mobile
      else if (w < 1024) setDuration(25); // tablet
      else setDuration(25);               // desktop
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items]);

  return (
    <div className="relative w-full overflow-hidden mb-10">
      <div
        ref={trackRef}
        className="flex gap-6 will-change-transform"
        style={{
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="w-[260px] sm:w-[300px] lg:w-[320px] shrink-0"
          >
            <CardMini work={item} />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-${distance}px); }
        }
      `}</style>
    </div>
  );
}
