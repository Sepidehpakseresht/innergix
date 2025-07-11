import { motion as Motion } from "framer-motion";

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-black text-white px-6 pt-0 pb-0 flex flex-col justify-start">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-20 mt-5">
          <img src="/innergix-logo.png" alt="Logo" className="w-16" />
          <button className="px-5 py-2 bg-gradient-to-r from-[#159093] to-purple-500 rounded-full font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Hero Content */}
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make Energy Visible, Empower Smart Efficiency
          </h1>
          <p
            className="max-w-2xl mx-auto text-2xl mb-6"
            style={{ color: "#159093" }}
          >
            Intelligent energy transparency accessible to every building, enabling a sustainable and energy-efficient future for people and the planet.
          </p>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
            We empower building owners, energy providers, and grid operators with AI-driven insights through Non-Intrusive Load Monitoring (NILM) to optimize energy use, reduce costs, and contribute to climate goals—without the need for costly smart infrastructure.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-[#159093] to-purple-500 rounded-full font-medium hover:opacity-90 transition">
            Start Free Trial
          </button>
        </div>

        {/* Dashboard Glow */}
        <div className="absolute bottom-64 left-[-70px] w-96 h-3/6 bg-[#6D46AB] rounded-full blur-[150px] opacity-60 z-10"></div>

        {/* Dashboard Section */}
        <div id="dashboard" className="relative min-h-screen bg-black px-6 pt-0 pb-0 flex-col flex items-center justify-center overflow-visible">
          <div className="relative z-10 w-fit">
            {/* Glow animated border */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#159093] via-purple-500 to-[#159093] animate-borderSpin opacity-70 blur-sm"></div>
            {/* Dashboard image */}
            <Motion.img
              src="/innergix-dashboard.png"
              alt="Admin Dashboard"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative rounded-xl max-w-full md:max-w-2xl"
            />

          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-black py-24 text-white text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-10">Our Technology Stack</h2>
        <div className="flex flex-wrap justify-center items-center gap-20 px-6">
         {[
          { src: "/sql.png", alt: "SQL", height: "h-36", delay: 0.1 },
          { src: "/ai.png", alt: "AI", height: "h-28", delay: 0.2 },
          { src: "/azure.png", alt: "Azure", height: "h-40", delay: 0.3 },
          { src: "/zigbee.webp", alt: "Zigbee", height: "h-24", delay: 0.4 },
          { src: "/machine-learning.png", alt: "Machine Learning", height: "h-24", delay: 0.5 },
          { src: "/Home_Assistant.png", alt: "Home Assistant", height: "h-20", delay: 0.6 },
          ].map((item, index) => (
          <Motion.div
            key={index}
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.delay }}
            viewport={{ once: true }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`${item.height} transition duration-500 filter grayscale hover:grayscale-0 hover:scale-105`}
            />
          </Motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Hero;