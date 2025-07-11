import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-20 px-6 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-[-300px] left-[400px] w-[600px] h-[300px] bg-[#159093] rounded-full blur-[120px] opacity-90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Logo & Description */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src="/innergix-logo.png" width={40} height={40} alt="Innergix Logo" className="rounded-full" />
            <span className="text-2xl font-bold">InnergiX</span>
            </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Our solution is an AI-powered Non-Intrusive Load Monitoring (NILM) platform that disaggregates total electricity consumption into appliance-level insights—without the need for smart plugs or invasive hardware. Designed for both smart and non-smart buildings, it enables users and energy providers to monitor, analyze, and optimize energy usage in real time, leading to lower costs and reduced carbon emissions.
          </p>
          <div className="flex gap-4 mt-6 text-xl text-cyan-400">
            <a href="https://www.instagram.com/innergix.ai?igsh=eTNtejNlODA5cHUz" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/innergix/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-white cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="lg:px-16">
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#main-objective" className="hover:text-white">Objectives</a></li>
            <li><a href="#main" className="hover:text-white">Main Features</a></li>
            <li><a href="#benefits" className="hover:text-white">Benefits for DSO’s</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Email: <a href="mailto:example@example.com" className="hover:text-white">example@example.com</a></li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Instagram: @innergix</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 pb-5 text-sm text-gray-500 border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} InnergiX. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
