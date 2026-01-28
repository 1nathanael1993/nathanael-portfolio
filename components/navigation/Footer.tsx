"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 bg-black overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-neon-blue/10 blur-[120px] rounded-full -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 md:mb-10 tracking-tighter">
            Let&apos;s Build <br />
            <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">
              Something Together
            </span>
          </h2>
          <Button 
            className="h-14 sm:h-16 md:h-20 px-6 sm:px-8 md:px-12 rounded-xl sm:rounded-2xl bg-white text-black font-black text-base sm:text-lg md:text-xl hover:bg-neon-blue hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] transition-all duration-500 hover:scale-105"
          >
            Contact me now
          </Button>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 mb-10 sm:mb-12 md:mb-16" />

        {/* Footer Info */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10 md:gap-12">
          {/* Location */}
          <div className="flex items-center gap-3 text-gray-400 max-w-full">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-left md:text-center">Santo Domingo Este, República Dominicana</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <motion.a 
              whileHover={{ y: -5, color: "#00F0FF" }}
              href="https://github.com/1nathanael1993" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: "#00F0FF" }}
              href="https://www.linkedin.com/in/nathanaelcedeno/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm font-mono text-gray-500 uppercase tracking-widest">
            © 2026 Nathanael Cedeño. <span className="text-gray-300">Built with AI.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
