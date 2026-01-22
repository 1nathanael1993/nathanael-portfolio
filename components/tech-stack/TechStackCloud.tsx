"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const techList = [
  { name: "Next.js", color: "#ffffff" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Node.js", color: "#339933" },
  { name: "Google Gemini", color: "#8B5CF6" },
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
    <section id="tech-stack" className="relative py-32 px-4 overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Tech <span className="text-neon-blue">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dominio de herramientas modernas para crear experiencias digitales de nivel 'Unicorn Startup'.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative h-[400px] w-full flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden cursor-none"
        >
          {/* Custom Cursor */}
          <motion.div 
            animate={{ x: mousePos.x - 100, y: mousePos.y - 100 }}
            className="absolute top-0 left-0 w-[200px] h-[200px] bg-neon-blue/10 blur-[80px] rounded-full pointer-events-none"
          />

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 p-8">
            {techList.map((tech, idx) => (
              <TechIcon 
                key={tech.name} 
                tech={tech} 
                mousePos={mousePos} 
                containerRef={containerRef}
              />
            ))}
          </div>
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

    // Magnetic Pull Logic (Always active near the icon)
    if (distance < 150) {
      const strength = (150 - distance) / 150;
      setOffset({
        x: dx * strength * 0.4,
        y: dy * strength * 0.4,
      });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  }, [mousePos]);

  return (
    <motion.div
      ref={iconRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ 
        x: offset.x, 
        y: offset.y,
        scale: isHovered ? 1.15 : 1
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex flex-col items-center gap-3 relative"
    >
      {/* Hover Brand Glow - ONLY when directly hovered */}
      {isHovered && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          className="absolute -inset-4 blur-2xl rounded-full transition-all duration-300 pointer-events-none"
          style={{ backgroundColor: tech.color }}
        />
      )}
      
      <div 
        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold transition-all duration-300 relative z-10"
        style={{ 
          color: isHovered ? tech.color : '#666',
          borderColor: isHovered ? `${tech.color}44` : 'rgba(255,255,255,0.1)',
          backgroundColor: isHovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)'
        }}
      >
        {tech.name[0]}
      </div>
      <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
        {tech.name}
      </span>
    </motion.div>
  );
}
