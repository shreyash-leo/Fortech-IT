import Image from "next/image";
import { motion } from "framer-motion";
import TechnologyStack from "@/components/TechnologyStack";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden rounded-[40px] m-2">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-20 h-full">
          <div className="absolute left-20 bottom-28 max-w-[650px]">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1] tracking-tight">
              Building Software,
              <br />
              AI & Digital Solutions
              <br />
              For Modern Businesses
            </h1>

            <button className="mt-8 bg-black/50 backdrop-blur-lg text-white px-8 py-4 rounded-2xl border border-white/10 hover:bg-black/70 transition-all duration-300">
              Discover
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT FORTECH */}
      <section className="bg-[#f5f5f5] py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1500px] mx-auto">
          <p className="text-sm text-black mb-8 font-medium">
            ● Why Choose Fortech
          </p>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* LEFT */}
            <div>
              <h2 className="text-black text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                Meet The Minds
                <br />
                Behind The Work
              </h2>

              <div className="mt-12 overflow-hidden rounded-[32px]">
                <Image
                  src="/images/team.jpg"
                  alt="Fortech Team"
                  width={800}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <div className="flex justify-end gap-4 mb-12">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center">
                  X
                </div>

                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center">
                  🌐
                </div>

                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center">
                  in
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl leading-[1.2] font-semibold text-black">
                At Fortech IT & AI, we bring together developers,
                strategists, designers and AI specialists to build
                modern digital products that help businesses grow,
                automate and scale efficiently.
              </h3>

              <div className="border-t border-black/10 mt-10 pt-8 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg">
                    50+ Projects Delivered
                  </p>

                  <p className="text-black/60">
                    Across Multiple Industries
                  </p>
                </div>

                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                    12
                  </div>
                </div>
              </div>

              {/* CARDS */}
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                
                <div className="bg-white rounded-[30px] p-8">
                  <h4 className="text-6xl font-bold text-black">
                    100%
                  </h4>

                  <p className="mt-2 text-black/60">
                    Client Satisfaction
                  </p>

                  <div className="mt-10">
                    <button className="w-full bg-black text-white py-4 rounded-full">
                      Book a Call
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-[30px] p-6 overflow-hidden">
                  <div className="relative h-full">
                    <Image
                      src="/images/office.jpg"
                      alt="Office"
                      width={500}
                      height={600}
                      className="rounded-[24px] w-full h-full object-cover"
                    />

                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-5xl font-bold">
                        230+
                      </p>

                      <p className="text-sm uppercase tracking-widest">
                        Projects Successfully Delivered
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
<section className="bg-black rounded-[40px] mx-2 my-4 px-8 md:px-12 lg:px-16 py-24">

  {/* Header */}
  <div className="flex justify-between items-start mb-16">
    <div>
      <p className="text-white/70 text-sm mb-4">
        ● What We Do
      </p>

      <h2 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
        Our Services
      </h2>
    </div>

    <span className="text-white/40 text-4xl">
      05
    </span>
  </div>

  {/* SERVICE 01 */}
  <div className="bg-[#111111] rounded-[32px] p-8 mb-5">

    <div className="grid lg:grid-cols-[180px_1fr_60px] gap-10">

      <div>
        <h3 className="text-white text-8xl font-bold">
          01.
        </h3>
      </div>

      <div>
        <h3 className="text-white text-4xl font-semibold mb-4">
          Web Development
        </h3>

        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            React
          </span>

          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            Next.js
          </span>

          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
            Node.js
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <img
            src="/images/web-development.jpg"
            alt="Web Development"
            className="rounded-[24px] w-full h-[260px] object-cover"
          />

          <div>
            <p className="text-white/70 text-lg leading-relaxed">
              High-performance websites, business portals and
              custom web platforms built with modern technologies.
            </p>

            <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-medium">
              Explore Service →
            </button>
          </div>
        </div>
      </div>

      <button className="w-12 h-12 rounded-full border border-white/10 text-white text-xl">
        −
      </button>

    </div>
  </div>

  {/* SERVICE 02 */}
  <div className="bg-[#111111] rounded-[32px] p-8 mb-5 flex justify-between items-center">
    <div className="flex items-center gap-10">
      <h3 className="text-white/20 text-7xl font-bold">
        02.
      </h3>

      <div>
        <h3 className="text-white text-3xl">
          Web Applications
        </h3>

        <div className="flex gap-3 mt-3">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-xs">
            SaaS
          </span>

          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-xs">
            CRM
          </span>
        </div>
      </div>
    </div>

    <button className="w-12 h-12 rounded-full border border-white/10 text-white">
      +
    </button>
  </div>

  {/* SERVICE 03 */}
  <div className="bg-[#111111] rounded-[32px] p-8 mb-5 flex justify-between items-center">
    <div className="flex items-center gap-10">
      <h3 className="text-white/20 text-7xl font-bold">
        03.
      </h3>

      <div>
        <h3 className="text-white text-3xl">
          Mobile App Development
        </h3>

        <div className="flex gap-3 mt-3">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-xs">
            Flutter
          </span>

          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-xs">
            Android
          </span>
        </div>
      </div>
    </div>

    <button className="w-12 h-12 rounded-full border border-white/10 text-white">
      +
    </button>
  </div>

  {/* SERVICE 04 */}
  <div className="bg-[#111111] rounded-[32px] p-8 mb-5 flex justify-between items-center">
    <div className="flex items-center gap-10">
      <h3 className="text-white/20 text-7xl font-bold">
        04.
      </h3>

      <div>
        <h3 className="text-white text-3xl">
          AI & Automation
        </h3>

        <div className="flex gap-3 mt-3">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-xs">
            AI Agents
          </span>

          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-xs">
            Chatbots
          </span>
        </div>
      </div>
    </div>

    <button className="w-12 h-12 rounded-full border border-white/10 text-white">
      +
    </button>
  </div>

  {/* SERVICE 05 */}
  <div className="bg-[#111111] rounded-[32px] p-8 flex justify-between items-center">
    <div className="flex items-center gap-10">
      <h3 className="text-white/20 text-7xl font-bold">
        05.
      </h3>

      <div>
        <h3 className="text-white text-3xl">
          Maintenance & Support
        </h3>

        <div className="flex gap-3 mt-3">
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-xs">
            Monitoring
          </span>

          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-xs">
            Security
          </span>
        </div>
      </div>
    </div>

    <button className="w-12 h-12 rounded-full border border-white/10 text-white">
      +
    </button>
  </div>

</section>
{/* SECTION 05 - AI & AUTOMATION */}
<section className="bg-[#f5f5f5] py-24 px-6 md:px-12 lg:px-20">
  <div className="max-w-[1500px] mx-auto">

    <div className="flex justify-between items-start mb-16">
      <div>
        <p className="text-sm font-medium mb-4">
          ● Intelligent Business Automation
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
          AI & Automation
        </h2>
      </div>

      <span className="text-black/20 text-5xl font-bold">
        06
      </span>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

      {[
        "AI Chatbots",
        "CRM Automation",
        "Workflow Automation",
        "Lead Automation",
        "WhatsApp Automation",
      ].map((item) => (
        <div
          key={item}
          className="bg-white rounded-[28px] p-8 hover:-translate-y-2 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
            AI
          </div>

          <h3 className="text-xl font-semibold">
            {item}
          </h3>

          <p className="text-black/60 mt-3">
            Automate operations, customer engagement and business workflows.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECTION 06 - BUSINESS SOLUTIONS */}
<section className="bg-black py-24 px-6 md:px-12 lg:px-20">
  <div className="max-w-[1500px] mx-auto">

    <div className="flex justify-between items-start mb-16">
      <div>
        <p className="text-white/70 text-sm mb-4">
          ● Digital Business Platforms
        </p>

        <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
          Business Solutions
        </h2>
      </div>

      <span className="text-white/20 text-5xl font-bold">
        07
      </span>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        "Enterprise Systems",
        "CRM Platforms",
        "ERP Solutions",
        "E-Commerce Platforms",
      ].map((item) => (
        <div
          key={item}
          className="bg-[#111111] rounded-[32px] p-8 border border-white/5 hover:border-white/20 transition-all"
        >
          <div className="text-white/30 text-6xl font-bold mb-8">
            +
          </div>

          <h3 className="text-white text-2xl font-semibold mb-4">
            {item}
          </h3>

          <p className="text-white/60">
            Custom-built platforms designed to streamline operations and scale businesses.
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* SECTION 07 - FORTECH CLOUD HOSTING */}
<section className="bg-[#f5f5f5] py-28 px-6 md:px-12 lg:px-20">
  <div className="max-w-[1500px] mx-auto">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div>
        <p className="text-sm font-medium mb-4">
          ● Hosting Infrastructure
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
          Deploy On
          <br />
          Fortech Cloud
        </h2>

        <p className="mt-8 text-xl text-black/70 max-w-[600px]">
          Secure, scalable and fully managed cloud infrastructure
          built to keep your applications online, protected and fast.
        </p>

        <button className="mt-10 bg-black text-white px-8 py-4 rounded-full">
          Explore Hosting
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">

        <div className="bg-white rounded-[30px] p-8">
          <h3 className="text-4xl font-bold mb-4">
            99.9%
          </h3>
          <p className="text-black/70">
            Uptime Guarantee
          </p>
        </div>

        <div className="bg-white rounded-[30px] p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Managed
          </h3>
          <p className="text-black/70">
            Infrastructure & Maintenance
          </p>
        </div>

        <div className="bg-white rounded-[30px] p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Monitoring
          </h3>
          <p className="text-black/70">
            Real-time Server Monitoring
          </p>
        </div>

        <div className="bg-white rounded-[30px] p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Security
          </h3>
          <p className="text-black/70">
            Firewall, SSL & Backup Protection
          </p>
        </div>

      </div>

    </div>
  </div>
</section>
<TechnologyStack />
    </>
  );
}