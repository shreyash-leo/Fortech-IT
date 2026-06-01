"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    title: "Expertise Across Technologies",
    content:
      "We work with modern technologies, AI, web, mobile, cloud and automation to build scalable digital solutions tailored to your business.",
  },
  {
    title: "AI-Powered Solutions",
    content:
      "From AI agents and chatbots to workflow automation and predictive systems, we help businesses leverage AI effectively.",
  },
  {
    title: "Custom & Scalable Development",
    content:
      "Every solution is built around your business goals with scalability, performance and long-term growth in mind.",
  },
  {
    title: "Agile Process & Fast Delivery",
    content:
      "Our streamlined process ensures rapid development cycles while maintaining quality and transparency.",
  },
  {
    title: "Dedicated Support",
    content:
      "We provide continuous support, maintenance and improvements even after project delivery.",
  },
  {
    title: "Client Satisfaction First",
    content:
      "Your success is our priority. We work closely with you throughout the project lifecycle.",
  },
  {
    title: "Results That Drive Growth",
    content:
      "Our solutions focus on measurable business outcomes, increased efficiency and higher ROI.",
  },
];

export default function WhyChooseFortech() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#f5f5f5] py-24">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Side */}
          <div className="sticky top-32">
            <p className="text-lg text-black mb-8 flex items-center gap-3">
              <span>•</span>
              Our genuineship
            </p>

            <h2 className="text-[60px] md:text-[90px] lg:text-[110px] font-black leading-[0.9] tracking-[-4px] text-black">
              WHY CHOOSE
              <br />
              FORTECH?
            </h2>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] overflow-hidden border border-black/5"
              >
                <button
                  onClick={() => setOpen(open === index ? -1 : index)}
                  className="w-full flex items-center justify-between px-8 py-8 text-left"
                >
                  <span className="text-2xl font-medium text-black">
                    {item.title}
                  </span>

                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center shrink-0">
                    {open === index ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    open === index
                      ? "max-h-40 pb-8 px-8"
                      : "max-h-0"
                  }`}
                >
                  <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}