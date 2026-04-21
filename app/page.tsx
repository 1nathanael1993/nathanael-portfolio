"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import BentoGrid from "@/components/projects/BentoGrid";
import AboutMe from "@/components/about/AboutMe";
import Navbar from "@/components/navigation/Navbar";
import SpotlightBackground from "@/components/visuals/SpotlightBackground";
import { motion } from "framer-motion";

// Lazy load non-critical components below the fold
const InteractiveTerminal = dynamic(() => import("@/components/terminal/InteractiveTerminal"), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full animate-pulse bg-white/5 rounded-lg" />
});
const AILab = dynamic(() => import("@/components/ai-lab/AILab"), {
  ssr: false,
});
const TechStackCloud = dynamic(() => import("@/components/tech-stack/TechStackCloud"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/navigation/Footer"), {
  ssr: false,
});

export default function Home() {
  // Forzar scroll al inicio al cargar/recargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
    // También desactivar scroll restoration del navegador
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-blue/30 overflow-x-hidden">
      <SpotlightBackground />
      <Navbar />
      
      {/* Hero Section — compacto: solo título y badge para que Proyectos quede visible con poco scroll */}
      <section id="hero" className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col items-center justify-center px-4 pt-24 sm:pt-32 pb-8 sm:pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(176,38,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm mb-6 sm:mb-8 group cursor-pointer relative overflow-hidden">
              <span className="text-sm text-neon-blue">⚡</span>
              <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
                Full-Stack & AI Automation Specialist
              </span>
              <motion.div
                animate={{ top: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent pointer-events-none"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-0 tracking-tighter break-words leading-[1.1]">
              <span className="bg-gradient-to-r from-neon-blue via-neon-violet to-neon-blue bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                Full-Stack Developer specialized in Automation & AI. Building products that drive real business ROI.
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-neon-blue rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section — inmediatamente después del Hero, visible con scroll mínimo */}
      <BentoGrid />

      {/* About Me — human, professional, close */}
      <AboutMe />

      {/* Terminal — después de Proyectos para no retrasar la vista de los proyectos */}
      <section id="terminal" className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <InteractiveTerminal />
          </motion.div>
        </div>
      </section>

      {/* AI Lab Section */}
      <AILab />

      {/* Tech Stack Section */}
      <TechStackCloud />

      {/* Footer & Contact */}
      <Footer />
    </main>
  );
}
