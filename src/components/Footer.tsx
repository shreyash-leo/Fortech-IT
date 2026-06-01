"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] px-4 pb-4">
      <div className="max-w-[1800px] mx-auto bg-white rounded-[40px] overflow-hidden">

        {/* Top Section */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 p-8 md:p-12 lg:p-16">

          {/* Left */}
          <div>
            <img
              src="/images/team.jpg"
              alt="Team"
              className="w-full max-w-[500px] h-[280px] object-cover rounded-[28px]"
            />

            <div className="flex flex-wrap items-center gap-6 mt-8">
              <span className="text-xl">• Stay connected</span>

              <a
                href="mailto:hello@fortechitai.com"
                className="text-2xl md:text-4xl font-medium underline"
              >
                hello@fortechitai.com
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-12">

            <div>
              <p className="text-gray-500 mb-8">
                Navigation
              </p>

              <div className="space-y-5">
                <Link href="/" className="block text-4xl font-medium">
                  Home
                </Link>

                <Link href="/services" className="block text-4xl font-medium">
                  Services
                </Link>

                <Link href="/our-work" className="block text-4xl font-medium">
                  Our Work
                </Link>

                <Link href="/about" className="block text-4xl font-medium">
                  About
                </Link>

                <Link href="/contact" className="block text-4xl font-medium">
                  Contact
                </Link>
              </div>
            </div>

            <div>
  <p className="text-gray-500 mb-8">
    Social Media
  </p>

  <div className="space-y-5">

    <a
      href="https://x.com"
      className="block text-4xl font-medium hover:opacity-70 transition"
    >
      Twitter
    </a>

    <a
      href="https://instagram.com"
      className="block text-4xl font-medium hover:opacity-70 transition"
    >
      Instagram
    </a>

    <a
      href="https://linkedin.com"
      className="block text-4xl font-medium hover:opacity-70 transition"
    >
      LinkedIn
    </a>

    <a
      href="https://facebook.com"
      className="block text-4xl font-medium hover:opacity-70 transition"
    >
      Facebook
    </a>

  </div>
</div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t mx-8 md:mx-12 lg:mx-16"></div>

        {/* Middle Bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 px-8 md:px-12 lg:px-16 py-8">

          <p className="text-lg">
            ©2026 Fortech IT & AI. All Rights Reserved
          </p>

          <div className="flex items-center gap-12">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <ArrowUp size={28} />
            </button>
          </div>

        </div>

        {/* Huge Logo */}
<div className="flex justify-center items-center pb-4 overflow-hidden">

  <h1
  className="text-center font-black leading-[0.8] tracking-[-0.08em] text-black text-[22vw] whitespace-nowrap select-none"
>
  Fortech
</h1>

</div>

      </div>
    </footer>
  );
}