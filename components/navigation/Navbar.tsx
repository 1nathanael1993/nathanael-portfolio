"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "PROJECTS", href: "#projects" },
  { label: "AI LAB", href: "#ai-lab" },
  { label: "TECH STACK", href: "#tech-stack" },
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-fit max-w-5xl px-2">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="bg-black/80 lg:bg-black/60 backdrop-blur-md lg:backdrop-blur-xl border border-white/10 rounded-full px-4 md:px-6 py-2 flex items-center justify-between gap-4 md:gap-8 shadow-2xl relative overflow-hidden group"
        >
          {/* Interior Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-transparent to-neon-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Desktop: links | Mobile: menu button */}
          <div className="flex items-center gap-4 md:gap-8 relative z-10">
            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[10px] font-black text-gray-400 hover:text-white uppercase tracking-[0.2em] transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Separator seen in the image */}
          <div className="hidden md:block w-[1px] h-4 bg-white/20 mx-2 shrink-0" />

          <div className="flex items-center gap-3 relative z-10 shrink-0">
            <motion.a
              href="/Nathanael_Cedeno_CV.pdf"
              download
              aria-label="Download CV"
              className="px-4 py-1.5 rounded-full border border-neon-blue/40 bg-transparent flex items-center justify-center transition-all duration-300 hover:bg-neon-blue/10"
            >
              <span className="text-[10px] font-black text-neon-blue uppercase tracking-tighter">
                CV
              </span>
            </motion.a>

            <Button
              variant="neon"
              size="sm"
              onClick={() => scrollToSection("#contact")}
              className="h-8 px-4 md:px-6 text-[10px] font-black uppercase tracking-tighter bg-white text-black hover:bg-gray-200 transition-all rounded-full"
            >
              LET&apos;S TALK
            </Button>
          </div>
        </motion.nav>
      </div>


      {/* Overlay + menú móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-full max-w-[280px] h-full bg-black/95 backdrop-blur-xl border-l border-white/10 shadow-2xl md:hidden"
            >
              <div className="flex flex-col pt-24 px-6 gap-2">
                <div className="absolute top-4 right-4">
                  <button
                    type="button"
                    aria-label="Cerrar menú"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left py-4 px-4 rounded-xl text-sm font-bold text-gray-300 hover:text-neon-blue hover:bg-white/5 uppercase tracking-widest transition-all border-b border-white/5 last:border-0"
                  >
                    {item.label === "Inicio" ? "Home" : item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
