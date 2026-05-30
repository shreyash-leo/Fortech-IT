"use client";

import {
  Clock3,
  Globe,
  CheckCircle2,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#f5f5f5] pb-24">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="bg-black rounded-[40px] p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="text-white">
              <p className="flex items-center gap-3 mb-8 text-lg">
                <span>•</span>
                Let's Build Something Great
              </p>

              <h2 className="text-[52px] md:text-[72px] font-black leading-[0.9] tracking-[-3px]">
                HAVE A PROJECT
                <br />
                IN MIND?
              </h2>

              <p className="text-gray-400 text-lg mt-8 max-w-md">
                Tell us about your idea, business
                challenge, or digital transformation
                goals. We'll help you build,
                automate and scale.
              </p>

              <div className="space-y-5 mt-12">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  Web & Mobile Development
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} />
                  AI & Automation Solutions
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={20} />
                  Dedicated Project Support
                </div>

                <div className="flex items-center gap-3">
                  <Globe size={20} />
                  Global Client Service
                </div>
              </div>

              {/* Team Card */}
              <div className="bg-[#111] rounded-[24px] p-6 mt-16 max-w-sm">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img
                      src="/team/team1.jpg"
                      className="w-12 h-12 rounded-full border-2 border-black object-cover"
                    />
                    <img
                      src="/team/team2.jpg"
                      className="w-12 h-12 rounded-full border-2 border-black object-cover"
                    />
                    <img
                      src="/team/team3.jpg"
                      className="w-12 h-12 rounded-full border-2 border-black object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Fortech Team
                    </h4>

                    <p className="text-sm text-gray-400">
                      IT • AI • Automation
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-5 pt-5 flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-sm">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-white rounded-[30px] p-8 lg:p-10">
              <form className="space-y-8">
                <div>
                  <label className="font-medium">
                    Full Name*
                  </label>

                  <input
                    type="text"
                    className="w-full border-b py-4 outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="font-medium">
                    Email Address*
                  </label>

                  <input
                    type="email"
                    className="w-full border-b py-4 outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="font-medium">
                    Phone Number*
                  </label>

                  <input
                    type="text"
                    className="w-full border-b py-4 outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="font-medium">
                    Project Details
                  </label>

                  <textarea
                    rows={4}
                    className="w-full border-b py-4 outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "< ₹50K",
                    "₹50K - ₹1L",
                    "₹1L - ₹5L",
                    "₹5L - ₹10L",
                    "₹10L+",
                  ].map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      className="px-5 py-3 border rounded-full"
                    >
                      {budget}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-5 rounded-full font-medium"
                >
                  Start Your Project
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}