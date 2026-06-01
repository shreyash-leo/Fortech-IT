import Image from "next/image";
import TechnologyStack from "@/sections/Home/TechnologyStack";
import OurProcess from "@/sections/Home/OurProcess";
import WhyChooseFortech from "@/sections/Home/WhyChooseFortech";
import Testimonials from "@/sections/Home/Testimonials";
import ContactCTA from "@/sections/Home/ContactCTA";
import Footer from "@/components/Footer";
import ServicesSection from "@/sections/Home/ServicesSection";

export default function HomePage() {
  return (
    <div className="w-full bg-background">
      {/* HERO with rounded corners and margin */}
      <section className="relative h-screen overflow-hidden rounded-[40px] m-2">
        <Image
          src="/images/hero.jpg"
          alt="Fortech Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-20 h-full">
          <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 h-full">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-28 w-full max-w-[650px]">
              <h1 className="text-text-primary text-5xl md:text-6xl lg:text-7xl font-light leading-[1] tracking-tight">
                Building Software,
                <br />
                AI & Digital Solutions
                <br />
                For Modern Businesses
              </h1>

              <button className="mt-8 bg-white/80 backdrop-blur-xl text-text-primary px-8 py-4 rounded-2xl border border-border hover:bg-white transition-all duration-300">
                Discover
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT FORTECH */}
      <section className="bg-surface py-32">
        <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <p className="text-sm text-primary mb-8 font-medium">● About Fortech</p>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* LEFT */}
            <div>
              <h2 className="text-text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
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
                <div className="w-12 h-12 rounded-full bg-background border-border text-text-primary flex items-center justify-center">X</div>
                <div className="w-12 h-12 rounded-full bg-background border-border text-text-primary flex items-center justify-center">🌐</div>
                <div className="w-12 h-12 rounded-full bg-background border-border text-text-primary flex items-center justify-center">in</div>
              </div>

              <h3 className="text-3xl md:text-4xl leading-[1.2] font-semibold text-text-primary">
                At Fortech IT & AI, we bring together developers, strategists, designers and AI
                specialists to build modern digital products that help businesses grow, automate
                and scale efficiently.
              </h3>

              <div className="border-t border-border mt-10 pt-8 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-lg text-text-primary">50+ Projects Delivered</p>
                  <p className="text-text-secondary">Across Multiple Industries</p>
                </div>

                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-400"></div>
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">12</div>
                </div>
              </div>

              {/* CARDS */}
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-background rounded-[30px] p-8">
                  <h4 className="text-6xl font-bold text-text-primary">100%</h4>
                  <p className="mt-2 text-text-secondary">Client Satisfaction</p>
                  <div className="mt-10">
                    <button className="w-full bg-black text-white py-4 rounded-full">
                      Book a Call
                    </button>
                  </div>
                </div>

                <div className="bg-background rounded-[30px] p-6 overflow-hidden">
                  <div className="relative h-full">
                    <Image
                      src="/images/office.jpg"
                      alt="Office"
                      width={500}
                      height={600}
                      className="rounded-[24px] w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-5xl font-bold">230+</p>
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

      <section className="m-2 overflow-hidden rounded-[40px]">
  <ServicesSection />
</section>

{/* SECTION 06 - TECHNOLOGY SOLUTIONS */}
<section className="bg-surface py-24 m-2 rounded-[40px] overflow-hidden">
  <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">

    {/* MAIN HEADER */}
    <div className="flex justify-between items-start mb-24">
      <div>

        <h2 className="text-text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
          Technology Solutions
        </h2>
      </div>

      <span className="text-text-secondary/20 text-5xl font-bold">
        06
      </span>
    </div>

    {/* AI & AUTOMATION */}
    <div>
      <div className="flex justify-between items-start mb-12">
        <div>
          <p className="text-sm font-medium text-red-500 mb-4">
            ● Intelligent Business Automation
          </p>

          <h3 className="text-text-primary text-4xl md:text-5xl font-bold">
            AI & Automation
          </h3>
        </div>
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
            className="bg-background rounded-[28px] p-8 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
              AI
            </div>

            <h3 className="text-xl font-semibold text-text-primary">
              {item}
            </h3>

            <p className="text-text-secondary mt-3">
              Automate operations, customer engagement and business workflows.
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* DIVIDER */}
    <div className="h-px bg-border my-24" />

    {/* BUSINESS SOLUTIONS */}
    <div>
      <div className="mb-12">
        <p className="text-sm font-medium text-red-500 mb-4">
          ● Digital Business Platforms
        </p>

        <h3 className="text-text-primary text-4xl md:text-5xl font-bold">
          Business Solutions
        </h3>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          {
            title: "Enterprise Systems",
            number: "01",
            year: "2025",
            image: "/images/business-1.jpg",
          },
          {
            title: "CRM Platforms",
            number: "02",
            year: "2025",
            image: "/images/business-2.jpg",
          },
          {
            title: "ERP Solutions",
            number: "03",
            year: "2025",
            image: "/images/business-3.jpg",
          },
          {
            title: "E-Commerce Platforms",
            number: "04",
            year: "2025",
            image: "/images/business-4.jpg",
          },
        ].map((item) => (
          <div key={item.title} className="group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-background">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="mt-3 bg-background rounded-[24px] px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium text-text-secondary">
                  {item.number}.
                </span>

                <h3 className="text-xl font-semibold text-text-primary">
                  {item.title}
                </h3>
              </div>

              <span className="text-text-secondary font-medium">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* DIVIDER */}
    <div className="h-px bg-border my-24" />

    {/* CLOUD INFRASTRUCTURE */}
    <div>
      <div className="mb-12">
        <p className="text-sm font-medium text-red-500 mb-4">
          ● Hosting Infrastructure
        </p>

        <h3 className="text-text-primary text-4xl md:text-5xl font-bold">
          Cloud Infrastructure
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-xl text-text-secondary max-w-[600px]">
            Secure, scalable and fully managed cloud infrastructure built to keep
            your applications online, protected and fast.
          </p>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-full">
            Explore Hosting
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-background rounded-[30px] p-8">
            <h3 className="text-4xl font-bold text-text-primary mb-4">
              99.9%
            </h3>
            <p className="text-text-secondary">
              Uptime Guarantee
            </p>
          </div>

          <div className="bg-background rounded-[30px] p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Managed
            </h3>
            <p className="text-text-secondary">
              Infrastructure & Maintenance
            </p>
          </div>

          <div className="bg-background rounded-[30px] p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Monitoring
            </h3>
            <p className="text-text-secondary">
              Real-time Server Monitoring
            </p>
          </div>

          <div className="bg-background rounded-[30px] p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Security
            </h3>
            <p className="text-text-secondary">
              Firewall, SSL & Backup Protection
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

      <section className="m-2 rounded-[40px] overflow-hidden">
  <TechnologyStack />
</section>
      <OurProcess />
      <WhyChooseFortech />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  );
}