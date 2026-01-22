"use client";

import InteractiveTerminal from "@/components/terminal/InteractiveTerminal";
import BentoGrid from "@/components/projects/BentoGrid";
import AILab from "@/components/ai-lab/AILab";
import SocialMedia from "@/components/social/SocialMedia";
import TechStackCloud from "@/components/tech-stack/TechStackCloud";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SpotlightBackground from "@/components/visuals/SpotlightBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-blue/30">
      <SpotlightBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(176,38,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm mb-8 group cursor-pointer relative overflow-hidden">
              <span className="text-sm text-neon-blue">⚡</span>
              <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
                10x Productivity through AI-Collaboration
              </span>
              {/* Scanline effect on hero badge */}
              <motion.div
                animate={{ top: ["-100%", "200%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-10 bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent pointer-events-none"
              />
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
              <span className="bg-gradient-to-r from-neon-blue via-neon-violet to-neon-blue bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
                Nathanael Cedeño: Orchestrating the Future
              </span>
            </h1>
          </motion.div>

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InteractiveTerminal />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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

      {/* Projects Section */}
      <BentoGrid />

      {/* AI Lab Section */}
      <AILab />

      {/* Tech Stack Section */}
      <TechStackCloud />

      {/* Social Media Section */}
      <SocialMedia />

      {/* Footer & Contact */}
      <Footer />
    </main>
  );
}
