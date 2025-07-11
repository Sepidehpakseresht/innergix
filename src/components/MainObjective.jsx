import { motion as Motion } from "framer-motion";

function MainObjective() {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-black text-white overflow-hidden"
    >
      {/* Top Glow */}
      <div className="absolute right-[-200px] top-[-150px] w-[600px] h-[700px] bg-[#159093] rounded-full blur-[160px] opacity-60 z-0" />

      {/* Section 1: Main Objective */}
      <div id="main-objective" className="z-10 max-w-3xl mx-auto py-28 sm:py-16 px-6 flex flex-col items-center text-center">
        <div className="relative inline-flex items-center justify-center px-6 py-2 mb-6 font-medium tracking-wide text-white transition duration-300 ease-in-out transform bg-gradient-to-br from-cyan-900 to-[#159093] rounded-full shadow-lg ring-1 ring-cyan-500/30 hover:ring-cyan-300/50 hover:scale-105">
          Main Objective
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4 mt-10">
          Smart <span className="text-[#159093]">Energy Visibility</span>
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
          For All Buildings
        </h3>

        <p className="text-gray-300 text-md md:text-lg leading-relaxed">
          To deploy a scalable, AI-powered NILM platform that delivers appliance-level energy insights across non-smart and smart buildings,
          enabling measurable savings and carbon reduction in alignment with national and EU sustainability targets.
        </p>
      </div>

      {/* Section 2: Feature 1 */}
      <div id="main" className="max-w-7xl mx-auto  py-24 px-6 md:px-20 grid md:grid-cols-2 items-center gap-12">
      <Motion.img
        src="/feature-1.png"
        alt="Feature 1"
        className="rounded-xl shadow-lg w-full h-auto object-cover"
        initial={{ opacity: 0, scale: 0.9, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      />


        <div>
          <div className="relative inline-flex items-center justify-center px-6 py-2 mb-6 font-medium tracking-wide text-white transition duration-300 ease-in-out transform bg-gradient-to-br from-cyan-900 to-[#159093] rounded-full shadow-lg ring-1 ring-cyan-500/30 hover:ring-cyan-300/50 hover:scale-105">
            Main Features
          </div>

          <h3 className="text-lg font-semibold mb-4">Appliance-Level Energy</h3>
          <p className="text-lg font-bold mb-6">
            Gain full visibility into how your home or building uses energy—appliance by appliance—without needing smart plugs or expensive hardware.
          </p>
          <p className="text-md text-gray-300 mb-6">
            Our AI-powered platform disaggregates your total electricity usage into detailed appliance-level data, helping you:
          </p>

          <ul className="text-gray-300 space-y-3 text-sm pl-4 ">
            <li>🧠 Understand your biggest energy consumers</li>
            <li>🛠 Identify hidden energy waste and save up to <strong>30%</strong> on your bills</li>
            <li>⚡ Set custom alerts to avoid overuse or malfunctioning devices</li>
            <li>🌍 Contribute to a greener, more efficient home—effortlessly</li>
          </ul>

          <p className="text-white font-semibold mt-6">
            You don’t need a smart home to be smart about energy.
          </p>
        </div>
      </div>

      {/* Section 3: Feature 2 */}
<div
  id="benefits"
  className="relative z-10 max-w-7xl mx-auto py-24 px-6 md:px-20 grid md:grid-cols-2 items-center gap-16"
>
  {/* Left Content */}
  <div className="md:pr-8">
    {/* Tag */}
    <div className="inline-flex items-center justify-center px-5 py-2 mb-6 font-medium tracking-wide text-white bg-gradient-to-br from-cyan-900 to-[#159093] rounded-full shadow-lg ring-1 ring-cyan-500/30 hover:ring-cyan-300/50 hover:scale-105 transition duration-300 ease-in-out">
      Benefits for DSO’s
    </div>

    {/* Title */}
    <h2 className="text-2xl font-semibold text-white mb-2">
      Beyond smart meters:
    </h2>

    {/* Sub-title */}
    <h3 className="text-3xl md:text-4xl font-bold text-[#159093] mb-6">
      Real insights, real impact
    </h3>

    {/* Description */}
    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
      Our AI-powered NILM platform goes beyond basic data, delivering
      appliance-level insights that unlock true energy savings, operational
      efficiency, and measurable environmental impact — for every building,
      smart or not.
    </p>
  </div>

  {/* Right Image with animation */}
  <Motion.img
    src="/feature-2.png"
    alt="Feature 2"
    className="rounded-xl shadow-lg w-full h-auto object-cover"
    initial={{ opacity: 0, scale: 0.9, x: 80 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ type: "spring", stiffness: 70, damping: 15 }}
    viewport={{ once: false, amount: 0.4 }}
  />
</div>

{/* Bottom Glow */}
<div className="absolute left-[-200px] bottom-[-150px] w-[600px] h-[300px] bg-[#159093] rounded-full blur-[160px] opacity-80" />
    </Motion.section>
  );
}

export default MainObjective;
