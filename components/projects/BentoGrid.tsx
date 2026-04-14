"use client";

import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-neon-blue" />
            <span className="text-neon-blue text-sm font-bold tracking-widest uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        {/* Symmetric Grid - Same width for both cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* TuHospedajeRD */}
          <ProjectCard 
            project={projects[0]} 
            delay={0.1}
          />
          
          {/* VeriStay AI */}
          <ProjectCard 
            project={projects[1]} 
            delay={0.3}
          />

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-2 group relative rounded-2xl overflow-hidden bg-gradient-to-r from-neon-blue/10 to-neon-violet/10 border border-white/5 p-5 sm:p-6 md:p-10 text-center"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl -z-10" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 text-white">Looking for a dev who understands your business? Let&apos;s talk</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              I&apos;m always open to new opportunities and collaborations in developing high-impact digital products.
            </p>
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              <div className="flex flex-col items-center group/item cursor-pointer">
                <span className="text-4xl mb-3 transition-transform group-hover/item:scale-110 duration-300">🛠️</span>
                <span className="text-[10px] sm:text-xs text-neon-blue font-bold uppercase tracking-[0.2em]">Mastered Technologies</span>
              </div>
              <div className="flex flex-col items-center group/item cursor-pointer">
                <span className="text-4xl mb-3 transition-transform group-hover/item:scale-110 duration-300">🤝</span>
                <span className="text-[10px] sm:text-xs text-neon-violet font-bold uppercase tracking-[0.2em]">Strategic Partner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
