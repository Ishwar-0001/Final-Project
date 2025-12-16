// Testimonials.jsx
import React, { useEffect, useState } from "react";

/**
 * Testimonials carousel (3 cards)
 * - autoplay + manual prev/next
 */

const Card = ({ avatar, text, name }) => (
  <div className="p-4 bg-white/90 rounded-[12px] border border-[rgba(0,0,0,0.03)] shadow-sm">
    <div className="flex items-center gap-3">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-[#7BE0FF]" />
      <div>
        <div className="text-[#0B1A2B] font-inter font-semibold">{name}</div>
        <div className="text-xs text-[#A1ABC0]">Customer</div>
      </div>
    </div>
    <p className="mt-3 text-[#A1ABC0] italic">“{text}”</p>
    <div className="mt-3 text-[#7BE0FF]">★★★★★</div>
  </div>
);

const Testimonials = () => {
  const items=[
    {avatar:"/images/test1.jpg", text:"Great service and support.", name:"Tom H"},
    {avatar:"/images/test2.jpg", text:"Professional and responsive.", name:"Rita B"},
    {avatar:"/images/test3.jpg", text:"Excellent results.", name:"Sam K"},
  ];
  const [idx,setIdx]=useState(0);
  useEffect(()=>{
    const t=setInterval(()=>setIdx(i=> (i+1)%items.length),5000);
    return ()=>clearInterval(t);
  },[]);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[28px]">
      <h3 className="text-[18px] font-inter font-semibold text-[#0B1A2B] mb-4">Customer Testimonials</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((it,i)=>(
          <div key={it.name} className={`${i===idx ? "scale-100" : "scale-95 opacity-70"} transition-transform`}>
            <Card {...it} />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center gap-3">
        <button onClick={()=>setIdx(i=> (i-1+items.length)%items.length)} className="px-3 py-2 bg-[#FFFFFF] rounded">Prev</button>
        <button onClick={()=>setIdx(i=> (i+1)%items.length)} className="px-3 py-2 bg-[#FFFFFF] rounded">Next</button>
      </div>
    </section>
  );
};

export default Testimonials;
