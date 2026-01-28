"use client";

import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <section id="projects" className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-black">
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
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TuHospedajeRD - The Large Hero Project */}
          <ProjectCard 
            project={projects[0]} 
            className="lg:col-span-7" 
            delay={0.1}
          />
          
          {/* VeriStay AI - The High Tech Side Project */}
          <ProjectCard 
            project={projects[1]} 
            className="lg:col-span-5" 
            delay={0.3}
          />

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-12 group relative rounded-2xl overflow-hidden bg-gradient-to-r from-neon-blue/10 to-neon-violet/10 border border-white/5 p-6 sm:p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl -z-10" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">¿Tienes un proyecto en mente?</h3>
            <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones en el desarrollo de software orquestado por IA.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">⚡</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">🤖</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">AI Orchestrated</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-2">💎</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">Premium Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
