import React from "react";
import { motion as Motion } from "framer-motion";


function StartTrialSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-2xl font-bold mb-6 leading-snug">
            Unlock appliance-level energy visibility <br />
            <span className="text-[#17d4c7]">across your grid</span> — without intrusive <br /> hardware or infrastructure upgrades.
          </h2>

          <p className="text-gray-300 text-md md:text-lg mb-6">
            Our AI-based NILM platform transforms total energy usage data into detailed appliance-level insights, enabling DSOs to:
          </p>

          <ul className="text-sm text-gray-300 space-y-4 mb-8">
            <li>
              <span className="text-white font-semibold">⚙ Optimize Grid Stability:</span> <br />
              Better forecast and manage peak loads with high-resolution insights.
            </li>
            <li>
              <span className="text-white font-semibold">🔔 Enable Smarter Demand Response:</span> <br />
              Segment users for DR programs based on actual usage behavior.
            </li>
            <li>
              <span className="text-white font-semibold">📊 Drive Regulatory Compliance:</span> <br />
              Automated disaggregation helps meet evolving energy mandates.
            </li>
            <li>
              <span className="text-white font-semibold">🤝 Empower Customer Engagement:</span> <br />
              Deliver detailed appliance-level feedback—without a smart home.
            </li>
          </ul>

          <p className="text-white font-semibold text-lg mb-6">
            Smarter data means a smarter, more resilient grid.
          </p>

          <button className="bg-gradient-to-r from-[#159093] to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition duration-300">
            Start Trial
          </button>
        </div>

       <div className="relative flex justify-center md:justify-end">
        {/* Glow behind image */}
      <Motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="absolute w-[500px] h-[500px] bg-[#984CA7] rounded-full blur-[200px] z-0"
      />

      {/* Main Image */}
      <Motion.img
        src="/trial-image.png"
        alt="Trial visual"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 35,
        }}
        viewport={{ once: false }}
        className="relative z-10 w-full max-w-[500px]"
      />
      </div>
      </div>
    </section>
  );
}

export default StartTrialSection;
