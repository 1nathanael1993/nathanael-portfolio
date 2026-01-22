"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Proyectos", href: "#projects" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Social", href: "#social" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-fit max-w-4xl px-2">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="bg-black/40 backdrop-blur-[20px] border border-white/10 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between md:justify-start gap-2 md:gap-8 shadow-2xl relative overflow-hidden group"
      >
        {/* Interior Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Nav Items */}
        <div className="flex items-center gap-3 md:gap-6 relative z-10 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-[10px] md:text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              {item.label === "Inicio" ? "Home" : item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block w-[1px] h-4 bg-white/10 mx-1" />
        
        <div className="flex items-center gap-2 relative z-10">
          {/* High-Tech CV Button */}
          <motion.a
            href="/cv.pdf"
            download
            className="relative overflow-hidden group/cv px-3 md:px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 flex items-center gap-2 transition-all duration-300 hover:border-neon-blue/80 hover:bg-neon-blue/10 shrink-0"
          >
            <span className="text-[9px] md:text-[10px] font-black text-neon-blue uppercase tracking-tighter relative z-10 group-hover/cv:text-white transition-colors duration-300 whitespace-nowrap">
              CV
            </span>
            
            {/* Laser Scan Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <motion.div
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[35deg]"
              />
              <motion.div
                initial={{ x: "-150%" }}
                whileHover={{ x: "150%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-y-0 w-[4px] bg-neon-blue shadow-[0_0_20px_#00F0FF] skew-x-[35deg]"
              />
            </div>
          </motion.a>

          <Button
            variant="neon"
            size="sm"
            onClick={() => scrollToSection("#social")}
            className="h-8 px-3 md:px-4 text-[9px] md:text-[10px] font-black uppercase tracking-tighter bg-white text-black hover:bg-neon-blue transition-all shrink-0"
          >
            <span className="hidden md:inline">Let&apos;s Talk</span>
            <span className="md:hidden">Talk</span>
          </Button>
        </div>
      </motion.nav>
    </div>
  );
}
