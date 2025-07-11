import { motion as Motion } from "framer-motion";

function Services() {
  return (
    <section className="bg-black text-white py-20 sm:py-10">
      <div className="max-w-7xl mx-auto px-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 flex-wrap">
        {/* Left Text (Sticky) */}
        <div className="md:relative lg:sticky md:top-24 self-start">
          <p className="relative inline-flex items-center justify-center px-6 py-2 mb-6 font-medium tracking-wide text-white transition duration-300 ease-in-out transform bg-gradient-to-br from-cyan-900 to-[#159093] rounded-full shadow-lg ring-1 ring-cyan-500/30 hover:ring-cyan-300/50 hover:scale-105">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 max-w-md">
            Empowering energy<br />
            intelligence for<br />
            buildings of all kinds
          </h2>

          <p className="text-gray-300 text-md leading-relaxed max-w-md md:mb-20 md:max-w-full">
            At the intersection of artificial intelligence and energy data, our services unlock
            appliance-level insights without the need for costly hardware upgrades. Whether you're
            a utility, a property manager, or a sustainability leader, we offer scalable, smart
            solutions that fit your energy goals.
          </p>
        </div>

        {/* Right Grid */}
        <div className="h-[900px] overflow-y-auto pr-1 scroll-smooth">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[ 
              {
                title: "Appliance-Level Energy Disaggregation (NILM Analytics)",
                desc: "Using advanced AI-powered NILM (Non-Intrusive Load Monitoring) algorithms, we break down whole-building energy usage into individual appliance-level insights — all from a single metering point. This allows you to understand, monitor, and optimize consumption like never before.",
                icon: "/nilm-icon.png",
              },
              {
                title: "Real-Time Energy Monitoring Dashboard",
                desc: "Our intuitive, cloud-based platform delivers real-time energy usage data with trend analysis, consumption alerts, and customizable reports. Empower your team with a centralized view to track performance, identify anomalies, and improve energy efficiency.",
                icon: "/dashboard-icon.png",
              },
              {
                title: "AI-Powered Efficiency Recommendations",
                desc: "Go beyond monitoring — act smarter. Our system learns from historical patterns to deliver intelligent recommendations for energy savings, peak load management, and device optimization, tailored for both residential and commercial environments.",
                icon: "/ai-recommend-icon.png",
              },
              {
                title: "Integration & Partnership Services for DSOs & ESCOs",
                desc: "We collaborate with Distribution System Operators, Energy Service Companies, and smart meter providers to integrate NILM technology into existing infrastructure. Our flexible APIs and modular deployment approach ensure seamless interoperability and regulatory compliance.",
                icon: "/integration-icon.png",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#000000] p-6 rounded-2xl hover:shadow-lg transition duration-300 border border-[#159093] flex flex-col items-start gap-4"
              >
                <img src={item.icon} alt="icon" className="w-12 h-12" />
                <div>
                  <h4 className="font-semibold text-white text-base md:text-lg mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
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

export default Services;
