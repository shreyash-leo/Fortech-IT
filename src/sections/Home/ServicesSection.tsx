"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Web Development",
    tags: ["React", "Next.js", "Node.js"],
    image: "/images/service1.jpg",
    description:
      "High-performance websites, business portals and custom web platforms built with modern technologies.",
  },
  {
    number: "02",
    title: "Web Applications",
    tags: ["SaaS", "CRM"],
    image: "/images/service2.jpg",
    description:
      "Scalable web apps tailored to your business logic — from SaaS platforms to internal tools.",
  },
  {
    number: "03",
    title: "Mobile App Development",
    tags: ["Flutter", "Android"],
    image: "/images/service3.jpg",
    description:
      "Cross-platform and native mobile experiences that delight users and drive engagement.",
  },
  {
    number: "04",
    title: "AI & Automation",
    tags: ["AI Agents", "Chatbots"],
    image: "/images/service4.jpg",
    description:
      "Intelligent automation pipelines, AI chatbots and agent workflows that eliminate repetitive work.",
  },
  {
    number: "05",
    title: "Maintenance & Support",
    tags: ["Monitoring", "Security"],
    image: "/images/service5.jpg",
    description:
      "Ongoing technical support, performance monitoring and proactive security to keep your systems running.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" as const },
  }),
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const PANEL_HEIGHT = 420;

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? -1 : i));

  // Preload all service images for instant panel opening
  useEffect(() => {
    services.forEach((service) => {
      const img = new window.Image();
      img.src = service.image;
    });
  }, []);

  return (
    <section className="bg-black py-24" ref={sectionRef}>
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          className="flex justify-between items-start mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
        >
          <div>
            <p className="text-sm font-medium text-red-500 mb-4">● What We Do</p>
            <h2 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              Our Services
            </h2>
          </div>
          <span className="text-white/40 text-4xl">05</span>
        </motion.div>

        {/* Service Cards */}
        <div className="flex flex-col gap-5">
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            const isPriority = i === 0; // Only first image gets priority

            return (
              <motion.div
                key={service.number}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                className="bg-[#111111] rounded-[32px] overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.04)" }}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-8 py-7 flex items-center justify-between"
                >
                  <div className="flex items-center gap-8 md:gap-10">
                    <motion.h3
                      className="font-bold text-6xl md:text-7xl leading-none"
                      animate={{ color: isOpen ? "#ffffff" : "rgba(255,255,255,0.15)" }}
                      transition={{ duration: 0.35, ease: "easeOut" as const }}
                    >
                      {service.number}.
                    </motion.h3>

                    <div>
                      <h3 className="text-white text-2xl md:text-3xl font-semibold">
                        {service.title}
                      </h3>
                      <div className="flex gap-3 mt-3">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/10 text-white px-4 py-1.5 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Toggle icon */}
                  <motion.div
                    className="w-12 h-12 rounded-full border flex items-center justify-center text-xl shrink-0"
                    animate={{
                      backgroundColor: isOpen ? "rgba(255,255,255,1)" : "transparent",
                      borderColor: isOpen ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)",
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" as const }}
                  >
                    <span
                      style={{
                        color: isOpen ? "#000" : "#fff",
                        lineHeight: 1,
                        display: "block",
                      }}
                    >
                      +
                    </span>
                  </motion.div>
                </button>

                {/* Panel with Next.js Image */}
                <motion.div
                  animate={{
                    height: isOpen ? PANEL_HEIGHT : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  initial={false}
                  transition={{
                    height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: isOpen ? 0.35 : 0.2, delay: isOpen ? 0.08 : 0 },
                  }}
                  style={{ overflow: "hidden", transformOrigin: "top" }}
                >
                  <div className="px-8 pb-8">
                    <div className="border-t border-white/10 pt-8">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Image wrapper with Next.js Image */}
                        <motion.div
                          className="relative w-full rounded-[24px] overflow-hidden"
                          style={{ height: 260 }}
                          animate={{
                            opacity: isOpen ? 1 : 0,
                            scale: isOpen ? 1 : 0.96,
                          }}
                          initial={false}
                          transition={{
                            duration: 0.45,
                            delay: isOpen ? 0.15 : 0,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            priority={isPriority && isOpen}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </motion.div>

                        {/* Description + CTA */}
                        <motion.div
                          animate={{
                            opacity: isOpen ? 1 : 0,
                            x: isOpen ? 0 : 20,
                          }}
                          initial={false}
                          transition={{
                            duration: 0.45,
                            delay: isOpen ? 0.2 : 0,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <p className="text-white/70 text-lg leading-relaxed">
                            {service.description}
                          </p>
                          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-colors duration-200">
                            Explore Service →
                          </button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}