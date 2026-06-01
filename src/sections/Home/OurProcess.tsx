"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const processes = [
  { id: "01", category: "Project Kick-Off",  title: "Art Direction and Wireframing",    description: "We start by deeply understanding your vision, goals and target audience. Our team crafts detailed wireframes and art direction guidelines that form the strategic blueprint for your digital product.",     image: "/images/process-01.jpg" },
  { id: "02", category: "Design Process",    title: "Design and Prototype Process",     description: "Our designers translate wireframes into stunning high-fidelity prototypes. Every pixel is intentional — crafting interfaces that are both beautiful and highly functional, ready for stakeholder review.", image: "/images/process-02.jpg" },
  { id: "03", category: "Testing",           title: "Product Testing, Quality Control", description: "Rigorous testing across devices, browsers and user scenarios ensures your product performs flawlessly. We run automated and manual QA cycles until every interaction feels polished and reliable.",       image: "/images/process-03.jpg" },
  { id: "04", category: "Development",       title: "Build, Deploy & Scale",            description: "With approved designs in hand, our engineers build performant, scalable code. We deploy with CI/CD pipelines on secure infrastructure, then monitor and iterate as your product grows.",                  image: "/images/process-04.jpg" },
  { id: "05", category: "Launch",            title: "Go-Live & Release Management",     description: "We manage every detail of your launch — from DNS and CDN configuration to staged rollouts and rollback plans — ensuring a smooth, zero-downtime release that makes a strong first impression.",         image: "/images/process-05.jpg" },
  { id: "06", category: "Growth",            title: "Analytics & Optimisation",         description: "Post-launch, we instrument your product with analytics, run A/B tests and iterate on data-driven insights to continually improve conversion, retention and overall business performance.",                  image: "/images/process-06.jpg" },
  { id: "07", category: "Support",           title: "Ongoing Maintenance & Support",    description: "Our dedicated support team keeps your product healthy with proactive monitoring, security patches, performance tuning and feature updates — so you can focus on growing your business.",                   image: "/images/process-07.jpg" },
];

const COUNT = processes.length;
const ACTIVE_W = 380;
const INACTIVE_W = 168;
const GAP = 16;

interface ProcessItem { id: string; category: string; title: string; description: string; image: string; }

function ProcessCard({
  item,
  isActive,
  onClick,
}: {
  item: ProcessItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer flex-shrink-0"
      style={{
        width: isActive ? ACTIVE_W : INACTIVE_W,
        height: 520,
        transition: "width 0.6s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        className="relative overflow-hidden rounded-[32px] bg-white w-full h-full"
        style={{
          boxShadow: isActive ? "0 32px 64px rgba(0,0,0,0.12)" : "0 4px 24px rgba(0,0,0,0.06)",
          transition: "box-shadow 0.6s",
        }}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/70 text-sm mb-2">{item.category}</motion.p>
                <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="text-white text-2xl font-bold leading-tight">{item.title}</motion.h3>
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }} className="text-white/70 text-sm mt-3 leading-relaxed">{item.description}</motion.p>
              </div>
              <div className="absolute bottom-6 right-8 text-white/20 text-[100px] font-bold leading-none select-none">.{item.id}</div>
            </motion.div>
          ) : (
            <motion.div
              key="inactive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-black/40 text-[10px] font-medium uppercase tracking-widest mb-2">{item.category}</p>
                <h3 className="text-black text-base font-bold leading-tight">{item.title}</h3>
              </div>
              <div className="text-black/[0.06] text-[100px] font-bold leading-none select-none -mb-4">.{item.id}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* active underline */}
      <div
        style={{
          marginTop: 12,
          height: 2,
          borderRadius: 9999,
          background: "black",
          transformOrigin: "left",
          transform: isActive ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  );
}

export default function OurProcess() {
  // `tick` only ever increases — infinite forward loop, no resets
  const [tick, setTick] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const activeIndex = tick % COUNT;

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f5f5f5] py-24 overflow-hidden">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="text-sm font-medium text-black">
            ● Our Process
          </motion.p>
          <div>
            <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-black">
              From Vision To<br />Measurable Value
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-black/60 text-base max-w-[420px] leading-relaxed">
              From breakthrough portfolios to performance-driven platforms — our numbers speak louder than words.
            </motion.p>
          </div>
        </div>

        {/* Cards — fixed position, no strip scroll, just expand in place */}
        <div className="flex gap-4 items-stretch" style={{ minHeight: 540 }}>
          {processes.map((item, i) => (
            <ProcessCard
              key={item.id}
              item={item}
              isActive={i === activeIndex}
              onClick={() => setTick((t) => {
                // Jump forward to this card (always forward)
                const cur = t % COUNT;
                const delta = ((i - cur) + COUNT) % COUNT;
                return delta === 0 ? t : t + delta;
              })}
            />
          ))}
        </div>

        {/* Dots only — no arrows */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="flex items-center justify-center gap-2 mt-10">
          {processes.map((_, i) => (
            <button
              key={i}
              onClick={() => setTick((t) => {
                const cur = t % COUNT;
                const delta = ((i - cur) + COUNT) % COUNT;
                return delta === 0 ? t : t + delta;
              })}
              className="relative h-[3px] rounded-full overflow-hidden bg-black/10 transition-all duration-300"
              style={{ width: i === activeIndex ? 48 : 20 }}
            >
              {i === activeIndex && (
                <motion.span
                  key={tick}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4.5, ease: "linear" }}
                  className="absolute inset-0 bg-black origin-left block"
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}