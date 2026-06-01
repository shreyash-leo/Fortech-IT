"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Globe, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, RetailFlow",
    image: "/images/client1.jpg",
    text: "We were struggling to modernize our operations until we worked with Fortech. The team not only streamlined our workflow but elevated every process with AI-powered automation.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    image: "/images/client2.jpg",
    text: "Fortech built our customer portal and AI chatbot. Support tickets dropped dramatically and customer satisfaction increased within weeks.",
  },
  {
    name: "Amit Desai",
    role: "Founder, FinEdge",
    image: "/images/client3.jpg",
    text: "The SaaS platform delivered by Fortech exceeded expectations. Fast delivery, excellent communication and outstanding quality.",
  },
  {
    name: "Neha Patel",
    role: "Director, GrowthHive",
    image: "/images/client4.jpg",
    text: "Their automation solutions save our team more than 20 hours every week. The ROI was visible almost immediately.",
  },
];

type Direction = "left" | "right";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<Direction>("right");
  const [animating, setAnimating] = useState(false);
  // "idle" | "exit" | "enter"
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");
  const [displayIndex, setDisplayIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = (active + 1) % testimonials.length;

  const navigate = (newIndex: number, dir: Direction) => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setPhase("exit");

    timeoutRef.current = setTimeout(() => {
      setDisplayIndex(newIndex);
      setActive(newIndex);
      setPhase("enter");

      timeoutRef.current = setTimeout(() => {
        setPhase("idle");
        setAnimating(false);
      }, 420);
    }, 320);
  };

  const handleNext = () => {
    const newIndex = (active + 1) % testimonials.length;
    navigate(newIndex, "right");
  };

  const handlePrev = () => {
    const newIndex = (active - 1 + testimonials.length) % testimonials.length;
    navigate(newIndex, "left");
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const current = testimonials[displayIndex];
  const upcoming = testimonials[(displayIndex + 1) % testimonials.length];

  // Compute transform classes based on phase + direction
  const getSlideStyle = (): React.CSSProperties => {
    if (phase === "exit") {
      return {
        opacity: 0,
        transform: direction === "right" ? "translateX(-48px)" : "translateX(48px)",
        transition: "opacity 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)",
      };
    }
    if (phase === "enter") {
      return {
        opacity: 1,
        transform: "translateX(0px)",
        transition: "opacity 0.42s cubic-bezier(0.4,0,0.2,1), transform 0.42s cubic-bezier(0.4,0,0.2,1)",
      };
    }
    return {
      opacity: 1,
      transform: "translateX(0px)",
      transition: "none",
    };
  };

  // Image gets a slight parallax-style shift
  const getImageStyle = (): React.CSSProperties => {
    if (phase === "exit") {
      return {
        opacity: 0,
        transform: direction === "right" ? "translateX(-32px) scale(0.97)" : "translateX(32px) scale(0.97)",
        transition: "opacity 0.32s cubic-bezier(0.4,0,0.2,1), transform 0.32s cubic-bezier(0.4,0,0.2,1)",
      };
    }
    if (phase === "enter") {
      return {
        opacity: 1,
        transform: "translateX(0px) scale(1)",
        transition: "opacity 0.45s cubic-bezier(0.4,0,0.2,1), transform 0.45s cubic-bezier(0.4,0,0.2,1)",
      };
    }
    return {
      opacity: 1,
      transform: "translateX(0px) scale(1)",
      transition: "none",
    };
  };

  const slideStyle = getSlideStyle();
  const imageStyle = getImageStyle();

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="mb-14">
          <p className="flex items-center gap-3 text-lg mb-5">
            <span>•</span>
            What Our Clients Says
          </p>

          <h2 className="text-[60px] md:text-[90px] lg:text-[110px] font-black tracking-[-5px] leading-none">
            Testimonials.
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mt-6">
            We've helped businesses across industries achieve their goals. Here
            are some of our recent projects.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[32px] p-8 lg:p-10 mb-6 overflow-hidden">
          <div className="grid lg:grid-cols-[1.1fr_1fr_280px] gap-8">
            {/* LEFT — text content slides */}
            <div className="flex flex-col justify-between" style={slideStyle}>
              <div>
                <Quote size={60} className="text-gray-100 mb-6" />

                <p className="text-[20px] md:text-[22px] leading-relaxed font-medium">
                  {current.text}
                </p>

                <div className="flex gap-1 text-yellow-500 mt-8 text-xl">
                  ★★★★★
                </div>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <Globe size={34} />
                <div>
                  <p className="font-semibold">Fortech Support</p>
                  <p className="text-gray-500 text-sm">
                    Supporting clients worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* CENTER — image with parallax shift */}
            <div className="relative" style={{ overflow: "hidden", borderRadius: "24px" }}>
              <div style={imageStyle}>
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-[500px] object-cover rounded-[24px]"
                />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-3xl font-semibold">{current.name}</h4>
                  <p className="text-white/80">{current.role}</p>
                </div>
              </div>
            </div>

            {/* RIGHT PREVIEW */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Preview image fades softly */}
                <div
                  style={{
                    opacity: phase === "exit" ? 0.4 : 1,
                    transition: "opacity 0.32s ease",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={upcoming.image}
                    alt={upcoming.name}
                    className="w-full h-[180px] object-cover rounded-[20px]"
                  />
                </div>

                <div className="flex justify-between items-center mt-5">
                  <span className="font-medium">Testimonial</span>
                  <span className="text-gray-400">
                    0{displayIndex + 1}/0{testimonials.length}
                  </span>
                </div>

                <div className="border-b mt-4"></div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={handlePrev}
                  disabled={animating}
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-gray-50 active:scale-95 disabled:opacity-50"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  onClick={handleNext}
                  disabled={animating}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-all duration-200 hover:bg-gray-800 active:scale-95 disabled:opacity-50"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[28px] p-8 h-[260px] flex flex-col justify-between">
            <h4 className="text-2xl font-medium">Happy Clients</h4>
            <h3 className="text-7xl font-black">50+</h3>
          </div>

          <div className="bg-white rounded-[28px] p-8 h-[260px] flex flex-col justify-between">
            <h4 className="text-2xl font-medium">Client Satisfaction</h4>
            <h3 className="text-7xl font-black">95%</h3>
          </div>

          <div className="bg-white rounded-[28px] p-8 h-[260px] flex flex-col justify-between">
            <h4 className="text-2xl font-medium">Repeat Business</h4>
            <h3 className="text-7xl font-black">88%</h3>
          </div>
        </div>
      </div>
    </section>
  );
}