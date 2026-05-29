"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    logo: "/images/tech/react.png",
    desc: "Interactive user interfaces",
  },
  {
    name: "Next.js",
    logo: "/images/tech/nextjs.png",
    desc: "Production-ready web apps",
  },
  {
    name: "Flutter",
    logo: "/images/tech/flutter.png",
    desc: "Cross-platform mobile apps",
  },
  {
    name: "Node.js",
    logo: "/images/tech/node.png",
    desc: "Scalable backend systems",
  },
  {
    name: "Express",
    logo: "/images/tech/express.png",
    desc: "Fast API development",
  },
  {
    name: "MongoDB",
    logo: "/images/tech/mongodb.png",
    desc: "Flexible NoSQL database",
  },
  {
    name: "PostgreSQL",
    logo: "/images/tech/postgresql.png",
    desc: "Enterprise SQL database",
  },
  {
    name: "Docker",
    logo: "/images/tech/docker.png",
    desc: "Containerized deployment",
  },
  {
    name: "AWS",
    logo: "/images/tech/aws.png",
    desc: "Cloud infrastructure",
  },
  {
    name: "OpenAI",
    logo: "/images/tech/openai.png",
    desc: "AI-powered automation",
  },
];


export default function TechnologyStack() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="relative z-10">

        {/* Header */}
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-20">

          <div className="flex justify-between items-start">

            <div>
              <p className="text-white/70 text-sm mb-4">
                ● Technology Foundation
              </p>

              <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                Technology Stack
              </h2>

              <p className="text-white/50 text-lg mt-6 max-w-xl">
                Modern technologies powering scalable web applications,
                cloud infrastructure, mobile apps and AI solutions.
              </p>
            </div>

            <span className="hidden lg:block text-[180px] font-bold text-white/5 leading-none">
              09
            </span>

          </div>
        </div>

        {/* Drag Area */}
        <motion.div
          drag="x"
          dragConstraints={{
            left: -2200,
            right: 0,
          }}
          className="cursor-grab active:cursor-grabbing"
        >
          <div className="flex gap-8 w-max px-6 md:px-12 lg:px-20">

            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{
                  y: -12,
                  rotate: -2,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group w-[320px] h-[440px] bg-[#0A0A0A] border border-white/10 rounded-[36px] p-8 flex flex-col justify-between hover:border-white/25 transition-all"
              >

                <div>

                  {/* Top */}
                  <div className="flex justify-between items-center mb-8">

                    <span className="text-white/50 text-sm">
                      Technology
                    </span>

                    <div className="flex gap-2">

                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
                        ×
                      </div>

                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm">
                        ↗
                      </div>

                    </div>

                  </div>

                  {/* Logo */}
                  <div className="flex justify-center mb-10">

                    <div className="w-40 h-40 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">

                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        width={90}
                        height={90}
                        className="object-contain"
                      />

                    </div>

                  </div>

                  {/* Content */}
                  <p className="text-white/30 text-sm mb-2">
                    #technology
                  </p>

                  <h3 className="text-white text-3xl font-semibold mb-4">
                    {tech.name}
                  </h3>

                  <p className="text-white/50 leading-relaxed">
                    {tech.desc}
                  </p>

                </div>

                {/* Bottom Arrow */}
                <button className="w-14 h-14 rounded-full border border-white/15 text-white hover:bg-white hover:text-black transition-all">
                  →
                </button>

              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 flex justify-center">
          <p className="text-white/40 text-lg">
            ← Drag To Explore →
          </p>
        </div>

      </div>
    </section>
  );
}