"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const processes = [
  {
    id: "01",
    category: "Project Kick-Off",
    title: "Art Direction and Wireframing",
    description:
      "We start by deeply understanding your vision, goals and target audience. Our team crafts detailed wireframes and art direction guidelines that form the strategic blueprint for your digital product.",
    image: "/images/process-01.jpg",
  },
  {
    id: "02",
    category: "Design Process",
    title: "Design and Prototype Process",
    description:
      "Our designers translate wireframes into stunning high-fidelity prototypes. Every pixel is intentional — crafting interfaces that are both beautiful and highly functional, ready for stakeholder review.",
    image: "/images/process-02.jpg",
  },
  {
    id: "03",
    category: "Testing",
    title: "Product Testing, Quality Control",
    description:
      "Rigorous testing across devices, browsers and user scenarios ensures your product performs flawlessly. We run automated and manual QA cycles until every interaction feels polished and reliable.",
    image: "/images/process-03.jpg",
  },
  {
    id: "04",
    category: "Development",
    title: "Build, Deploy & Scale",
    description:
      "With approved designs in hand, our engineers build performant, scalable code. We deploy with CI/CD pipelines on secure infrastructure, then monitor and iterate as your product grows.",
    image: "/images/process-04.jpg",
  },
  {
    id: "05",
    category: "Launch",
    title: "Go-Live & Release Management",
    description:
      "We manage every detail of your launch — from DNS and CDN configuration to staged rollouts and rollback plans — ensuring a smooth, zero-downtime release that makes a strong first impression.",
    image: "/images/process-05.jpg",
  },
  {
    id: "06",
    category: "Growth",
    title: "Analytics & Optimisation",
    description:
      "Post-launch, we instrument your product with analytics, run A/B tests and iterate on data-driven insights to continually improve conversion, retention and overall business performance.",
    image: "/images/process-06.jpg",
  },
  {
    id: "07",
    category: "Support",
    title: "Ongoing Maintenance & Support",
    description:
      "Our dedicated support team keeps your product healthy with proactive monitoring, security patches, performance tuning and feature updates — so you can focus on growing your business.",
    image: "/images/process-07.jpg",
  },
];

const ACTIVE_W = 380;
const INACTIVE_W = 168;
const GAP = 16;

/* ─── types ─── */
interface ProcessItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

interface ProcessCardProps {
  item: ProcessItem;
  index: number;
  activeIndex: number;
  onClick: (index: number) => void;
}

/* ─── individual card ─── */
function ProcessCard({ item, index, activeIndex, onClick }: ProcessCardProps) {
  const isActive = index === activeIndex;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.08, 0.4) }}
      onClick={() => onClick(index)}
      className="relative cursor-pointer flex-shrink-0"
      style={{ width: isActive ? `${ACTIVE_W}px` : `${INACTIVE_W}px` }}
    >
      <motion.div
        layout
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[32px] bg-white"
        style={{
          height: "520px",
          boxShadow: isActive
            ? "0 32px 64px rgba(0,0,0,0.12)"
            : "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-white/70 text-sm mb-2"
                >
                  {item.category}
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.4 }}
                  className="text-white text-2xl font-bold leading-tight"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.36, duration: 0.4 }}
                  className="text-white/70 text-sm mt-3 leading-relaxed"
                >
                  {item.description}
                </motion.p>
              </div>

              <div className="absolute bottom-6 right-8 text-white/20 text-[100px] font-bold leading-none select-none">
                .{item.id}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="inactive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 p-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-black/40 text-[10px] font-medium uppercase tracking-widest mb-2">
                  {item.category}
                </p>
                <h3 className="text-black text-base font-bold leading-tight">
                  {item.title}
                </h3>
              </div>

              <div className="text-black/[0.06] text-[100px] font-bold leading-none select-none -mb-4">
                .{item.id}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 h-[2px] bg-black origin-left rounded-full"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* compute how far to slide the strip so the active card is always fully visible */
function computeOffset(activeIndex: number): number {
  // total width of all cards before active
  let offset = 0;
  for (let i = 0; i < activeIndex; i++) {
    offset += INACTIVE_W + GAP;
  }
  return -offset;
}

/* ─── main section ─── */
export default function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  /* auto-rotate */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processes.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + processes.length) % processes.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % processes.length);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f5f5] py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto">

        {/* ── header ── */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-black"
          >
            ● Our Process
          </motion.p>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-black"
            >
              From Vision To
              <br />
              Measurable Value
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-black/60 text-base max-w-[420px] leading-relaxed"
            >
              From breakthrough portfolios to performance-driven
              platforms — our numbers speak louder than words.
            </motion.p>
          </div>
        </div>

        {/* ── cards row: overflow hidden, strip slides ── */}
        <div className="overflow-hidden w-full" style={{ minHeight: "540px" }}>
          <motion.div
            className="flex gap-4 items-stretch"
            animate={{ x: computeOffset(activeIndex) }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ minHeight: "520px" }}
          >
            {processes.map((item, index) => (
              <ProcessCard
                key={item.id}
                item={item}
                index={index}
                activeIndex={activeIndex}
                onClick={setActiveIndex}
              />
            ))}
          </motion.div>
        </div>

        {/* ── bottom row: arrows + dots ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          {/* prev arrow */}
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* dots */}
          <div className="flex gap-2 items-center">
            {processes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="relative h-[3px] rounded-full overflow-hidden bg-black/10 transition-all duration-300"
                style={{ width: i === activeIndex ? "48px" : "20px" }}
              >
                <AnimatePresence>
                  {i === activeIndex && (
                    <motion.span
                      key="fill"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 4.5, ease: "linear" }}
                      className="absolute inset-0 bg-black origin-left block"
                    />
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          {/* next arrow */}
          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-200"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}