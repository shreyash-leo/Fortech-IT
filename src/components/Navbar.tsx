"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  {
    label: "Services",
    children: [
      "Web Development",
      "Web Applications",
      "Mobile App Development",
      "Custom Software Development",
      "API Development",
      "UI/UX Design",
      "Maintenance & Support"
    ],
  },
  {
    label: "AI & Automation",
    children: [
      "AI Business Automation",
      "AI Chatbots",
      "CRM Automation",
      "Workflow Automation",
      "WhatsApp Automation",
      "Business Process Automation",
      "AI Integrations"
    ],
  },
  {
    label: "Solutions",
    children: [
      "Enterprise Solutions",
      "CRM Development",
      "E-Commerce Solutions",
      "Data & Analytics",
      "Business Dashboards",
      "ERP Solutions"
    ],
  },
  {
    label: "Hosting",
    children: [
      "Managed Hosting",
      "VPS Hosting",
      "Cloud Infrastructure",
      "Application Deployment",
      "Server Management",
      "Fortech Cloud"
    ],
  },
  {
    label: "Portfolio",
    children: [
      "Web Projects",
      "Mobile Apps",
      "AI Projects",
      "Enterprise Systems"
    ],
  },
  {
    label: "Company",
    children: [
      "About Us",
      "Our Process",
      "Technologies",
      "Careers",
      "Blog"
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [navWidth, setNavWidth] = useState<number>(0);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Get the width of the nav container
    if (navRef.current) {
      setNavWidth(navRef.current.offsetWidth);
    }
    
    setOpenIndex(index);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenIndex(null);
    }, 180);
  };

  return (
    <header className="absolute top-8 left-0 right-0 z-50">
      <div className="max-w-[1600px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={220}
            height={88}
            priority
            className="h-20 w-auto"
          />
        </Link>
        
        {/* Navigation */}
        <div
          className="relative"
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleClose}
        >
          <nav
            ref={navRef}
            className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-2xl px-2 py-2"
          >
            <ul className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onMouseEnter={() => {
                      if (item.children.length > 0) {
                        handleOpen(index);
                      } else {
                        setOpenIndex(null);
                      }
                    }}
                    onClick={() => {
                      if (item.children.length > 0) {
                        setOpenIndex(
                          openIndex === index ? null : index
                        );
                      }
                    }}
                    className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                      openIndex === index
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <AnimatePresence>
            {openIndex !== null && (
              <motion.div
                key={openIndex}
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.22,
                }}
                style={{
                  width: navWidth > 0 ? navWidth : "auto",
                }}
                className="absolute top-full left-0 mt-3 bg-black/70 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-10">
                    {navItems[openIndex] && (
                      <div className="col-span-4">
                        <h4 className="text-white/50 uppercase text-[10px] tracking-widest mb-4">
                          {navItems[openIndex].label}
                        </h4>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                          {navItems[openIndex].children.map((child) => (
                            <li key={child}>
                              <Link
                                href="#"
                                className="text-white/70 text-sm hover:text-white transition-colors duration-300 block"
                              >
                                {child}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/10 mt-6 pt-6 flex gap-3">
                    <Link
                      href="#"
                      className="flex-1 bg-white text-black rounded-xl px-5 py-4 text-sm font-medium flex items-center justify-between hover:bg-white/90 transition"
                    >
                      GET IN TOUCH
                      <span>→</span>
                    </Link>

                    <Link
                      href="#"
                      className="flex-1 bg-white/10 text-white rounded-xl px-5 py-4 text-sm font-medium flex items-center justify-between hover:bg-white/20 transition"
                    >
                      CAREERS
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}