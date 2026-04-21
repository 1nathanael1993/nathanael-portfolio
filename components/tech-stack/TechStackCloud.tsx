"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

const techStack = [
  { name: "Next.js", color: "#ffffff", letter: "N" },
  { name: "React", color: "#61DAFB", letter: "R" },
  { name: "TypeScript", color: "#3178C6", letter: "T" },
  { name: "Tailwind CSS", color: "#06B6D4", letter: "T" },
  { name: "Supabase", color: "#3ECF8E", letter: "S" },
  { name: "PostgreSQL", color: "#4169E1", letter: "P" },
  { name: "Node.js", color: "#339933", letter: "N" },
  { name: "Google Cloud (GCP)", color: "#4285F4", letter: "G" },
  { name: "APIs REST", color: "#FF6C37", letter: "A" },
  { name: "OpenAI / Gemini", color: "#10A37F", letter: "O" },
];

export default function TechStackCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-black">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className="reveal-on-scroll text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Tech <span className="text-neon-blue">Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Mastery of modern tools to create &apos;Unicorn Startup&apos; level digital experiences.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full"
        >
          <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-[40px] p-8 sm:p-12 md:p-16 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
              {techStack.map((tech) => (
                <TechIcon 
                  key={tech.name} 
                  tech={tech} 
                />
              ))}
            </div>
          </div>

          {/* Static Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/5 blur-[100px] rounded-full pointer-events-none -z-10" />
        </div>
      </div>
    </section>
  );
}

function TechIcon({ tech }: { tech: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="flex flex-col items-center gap-4"
    >
      <div 
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all duration-500 relative overflow-hidden"
        style={{ 
          color: isHovered ? '#fff' : 'rgba(255,255,255,0.3)',
          border: '1px solid',
          borderColor: isHovered ? `${tech.color}88` : 'rgba(255,255,255,0.08)',
          backgroundColor: isHovered ? `${tech.color}15` : 'rgba(255,255,255,0.02)',
          boxShadow: isHovered ? `0 0 30px ${tech.color}22` : 'none'
        }}
      >
        {isHovered && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ 
              background: `radial-gradient(circle at center, ${tech.color}22 0%, transparent 70%)` 
            }}
          />
        )}
        <span className="relative z-10 drop-shadow-sm">{tech.letter}</span>
      </div>
      <span 
        className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
        style={{ 
          color: isHovered ? tech.color : 'rgba(255,255,255,0.3)',
          opacity: isHovered ? 1 : 0.6
        }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
}
