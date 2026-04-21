"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="tech-stack" className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-black">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Tech <span className="text-neon-blue">Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Mastery of modern tools to create &apos;Unicorn Startup&apos; level digital experiences.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          onMouseMove={(e) => {
            if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
              handleMouseMove(e);
            }
          }}
          className="relative w-full"
        >
          {/* Main Container with subtle glow */}
          <div className="relative bg-white/[0.02] border border-white/[0.05] rounded-[40px] p-8 sm:p-12 md:p-16 backdrop-blur-sm">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
              {techStack.map((tech) => (
                <TechIcon 
                  key={tech.name} 
                  tech={tech} 
                  mousePos={mousePos} 
                  containerRef={containerRef}
                />
              ))}
            </div>
          </div>

          {/* Magnetic Background Glow - Only on Desktop */}
          <motion.div 
            animate={{ x: mousePos.x - 150, y: mousePos.y - 150 }}
            className="absolute top-0 left-0 w-[300px] h-[300px] bg-neon-blue/5 blur-[100px] rounded-full pointer-events-none -z-10 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}

function TechIcon({ tech, mousePos, containerRef }: { tech: any, mousePos: any, containerRef: any }) {
  const iconRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!iconRef.current || !containerRef.current) return;

    const rect = iconRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const iconCenterX = rect.left + rect.width / 2 - containerRect.left;
    const iconCenterY = rect.top + rect.height / 2 - containerRect.top;

    const dx = mousePos.x - iconCenterX;
    const dy = mousePos.y - iconCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 150) {
      const strength = (150 - distance) / 150;
      setOffset({
        x: dx * strength * 0.3,
        y: dy * strength * 0.3,
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, [mousePos, containerRef]);

  return (
    <motion.div
      ref={iconRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ 
        x: offset.x, 
        y: offset.y,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
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
        {/* Subtle internal glow */}
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
