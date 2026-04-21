"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function SpotlightBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora Effect - Desktop Only */}
      <motion.div
        style={{
          background: `radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(0, 240, 255, 0.08), transparent 80%)`,
        }}
        className="absolute inset-0 hidden lg:block"
      />
      
      {/* Static Aurora for Mobile to improve performance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,240,255,0.05),transparent_70%)] lg:hidden" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(176,38,255,0.05),transparent_80%)]" />
      
      {/* Grid Mesh - Only on desktop if too heavy */}
      <div 
        className="absolute inset-0 opacity-[0.1] lg:opacity-[0.15]" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  );
}
