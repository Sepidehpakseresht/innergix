import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const team = [
  {
    name: "Sepideh Pakseresht",
    role: "Front-End Product Engineer",
    image: "/sepideh-pakseresht.png",
    linkedin: "https://www.linkedin.com/in/sepideh-pakseresht-1b3967239/",
  },
  {
    name: "Ali Babazadeh",
    role: "Co-Founder & strategy lead",
    image: "/ali-babazade.png",
    linkedin: "http://linkedin.com/in/ali-babazadeh-doctorate-in-business-administration-50bb8b6",
  },
  {
    name: "Masoud Behradi yekta",
    role: "Co-Founder & CTO",
    image: "/masoud.png",
    linkedin: "https://www.linkedin.com/in/masood-by?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "member 4",
    role: "not defined",
    image: "/member-4.png",
    linkedin: "#",
  },
];

function TeamSection() {
  return (
    <section className="bg-black text-white py-40 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
          Meet <span className="text-[#17d4c7]">Our Team</span>
        </h2>
        <p className="text-gray-400 text-xl mb-12">
          Our diverse and passionate team drives innovation to deliver powerful
          solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-12">
          {team.map((member, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-br from-[#0d0d0d] to-[#111827] rounded-2xl p-8 border border-cyan-500/20 shadow-xl shadow-black/40 hover:shadow-cyan-500/30 transition duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-36 h-36 mb-5">
                  <div className="absolute inset-0 rounded-full bg-[#17d4c7] blur-[70px] opacity-30 z-0"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-36 h-36 object-cover z-10 relative border-[#17d4c7]/10 hover:scale-110 transition-transform duration-300 rounded-full shadow-lg cursor-pointer"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-[#17d4c7] text-sm font-medium mb-4">
                  {member.role}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  <FaLinkedinIn />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
