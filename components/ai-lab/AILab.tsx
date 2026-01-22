"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import { Brain, Code, Zap, Cpu, Sparkles } from "lucide-react";

export default function AILab() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="ai-lab" className="relative py-32 px-4 overflow-hidden bg-black">
      {/* Grid Pattern with fading edges */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-violet/30 bg-neon-violet/5 mb-6">
            <Sparkles className="w-4 h-4 text-neon-violet" />
            <span className="text-xs font-bold text-neon-violet uppercase tracking-widest">Advantage</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            The <span className="bg-gradient-to-r from-neon-violet to-purple-400 bg-clip-text text-transparent">AI Lab</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No solo escribo código; diseño prompts, entreno contextos y orquesto modelos de lenguaje para crear software de alto rendimiento en tiempo récord.
          </p>
        </motion.div>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel: Workflow Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-neon-blue/10 border border-neon-blue/20">
                  <Zap className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Speed Optimization</h4>
                  <p className="text-xs text-gray-500">Cycle development efficiency</p>
                </div>
              </div>
              <div className="text-5xl font-black text-neon-blue mb-2">+300%</div>
              <div className="text-sm text-gray-400">Development speed acceleration through AI-Augmented Workflow.</div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-neon-violet/10 border border-neon-violet/20">
                  <Cpu className="w-6 h-6 text-neon-violet" />
                </div>
                <div>
                  <h4 className="text-white font-bold">IDE: Cursor</h4>
                  <p className="text-xs text-gray-500">AI-First Environment</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Utilizando Cursor como mi centro de mando, integrando LLMs directamente en el ciclo de vida del código para una orquestación impecable.
              </p>
            </div>
          </motion.div>

          {/* Center Panel: Visual Connection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden min-h-[400px]"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
            
            {/* Connection Visualization */}
            <div className="relative h-full flex flex-col items-center justify-center p-12">
              <div className="flex items-center justify-between w-full max-w-md relative">
                {/* AI Node */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-4 bg-neon-violet/20 rounded-full blur-xl"
                    />
                    <div className="w-20 h-20 rounded-2xl bg-neon-violet/20 border-2 border-neon-violet/50 flex items-center justify-center shadow-[0_0_30px_rgba(176,38,255,0.3)] relative">
                      <Brain className="w-10 h-10 text-neon-violet" />
                    </div>
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase">AI Orchestrator</span>
                </div>

                {/* Connection Line */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-full h-[2px] bg-white/5 overflow-hidden">
                  <motion.div 
                    animate={{ x: [-100, 400] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-20 h-full bg-gradient-to-r from-transparent via-neon-blue to-transparent"
                  />
                </div>

                {/* Code Node */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-neon-blue/20 border-2 border-neon-blue/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                    <Code className="w-10 h-10 text-neon-blue" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase">High-Perf Code</span>
                </div>
              </div>

              <div className="mt-16 w-full space-y-4">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-neon-violet to-neon-blue"
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <span>Context Training</span>
                  <span>Model Orchestration</span>
                  <span>Code Synthesis</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 p-4 rounded-xl bg-black/40 border border-white/5 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                  System Active: AI-Augmented Development Cycle Running...
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
