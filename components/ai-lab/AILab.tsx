"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Zap, Cpu, Sparkles } from "lucide-react";

export default function AILab() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="ai-lab" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-black">
      {/* Grid Pattern with fading edges */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-violet/30 bg-neon-violet/5 mb-4 sm:mb-6">
            <Sparkles className="w-4 h-4 text-neon-violet" />
            <span className="text-xs font-bold text-neon-violet uppercase tracking-widest">Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
            The <span className="bg-gradient-to-r from-neon-violet to-purple-400 bg-clip-text text-transparent">AI Lab</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-0">
            I don&apos;t just write code; I design high-impact prompts, engineer deep contexts, and orchestrate Large Language Models to deliver enterprise-grade software at 10x speed.
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Panel: Workflow Stats */}
          <div
            className="reveal-on-scroll lg:col-span-1 space-y-4 sm:space-y-6"
          >
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 rounded-lg bg-neon-blue/10 border border-neon-blue/20 shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm sm:text-base">Performance ROI</h3>
                  <p className="text-xs text-gray-400">Dev Cycle Efficiency</p>
                </div>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-neon-blue mb-2">+300%</div>
              <div className="text-xs sm:text-sm text-gray-400">Development speed acceleration through AI-Augmented Workflow without quality trade-offs.</div>
            </div>

            <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-2.5 sm:p-3 rounded-lg bg-neon-violet/10 border border-neon-violet/20 shrink-0">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-neon-violet" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm sm:text-base">Environment: AI-First</h3>
                  <p className="text-xs text-gray-400">AI-Augmented Architecture</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Leveraging next-gen tooling and directly integrating LLMs into the codebase lifecycle for flawless architectural orchestration.
              </p>
            </div>
          </div>

          {/* Center Panel: Visual Connection */}
          <div className="lg:col-span-2 relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[400px]">
            <div className="absolute inset-0 bg-black/60 lg:bg-black/40 backdrop-blur-sm lg:backdrop-blur-xl" />
            
            {/* Connection Visualization */}
            <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 md:p-12">
              {/* Code Snippet for "Show don't Tell" */}
              <div className="w-full bg-black/60 rounded-lg p-4 font-mono text-[10px] sm:text-xs text-gray-300 border border-white/10 mb-8 overflow-hidden">
                <div className="flex gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-1">
                  <p><span className="text-neon-violet">async function</span> <span className="text-neon-blue">orchestrateAI</span>(context: string) &#123;</p>
                  <p className="pl-4 text-gray-500">&#123;/* 1. Engineer specialized prompt context */&#125;</p>
                  <p className="pl-4"><span className="text-neon-violet">const</span> prompt = <span className="text-neon-blue">`System: Architect expert... $&#123;context&#125;`</span>;</p>
                  <p className="pl-4 text-gray-500">&#123;/* 2. Execute high-precision inference */&#125;</p>
                  <p className="pl-4"><span className="text-neon-violet">return await</span> gemini.<span className="text-neon-blue">generateContent</span>(prompt);</p>
                  <p>&#125;</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full max-w-md relative gap-2 sm:gap-4">
                {/* AI Node */}
                <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-4 shrink-0">
                  <div className="relative">
                    <div className="absolute -inset-3 sm:-inset-4 bg-neon-violet/10 rounded-full blur-xl animate-pulse" />
                    <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-neon-violet/20 border-2 border-neon-violet/50 flex items-center justify-center shadow-[0_0_20px_rgba(176,38,255,0.2)] relative">
                      <Brain className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-neon-violet" />
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">AI Orchestrator</span>
                </div>

                {/* Connection Line */}
                <div className="absolute left-1/2 top-7 sm:top-10 -translate-x-1/2 w-full h-[2px] bg-white/5 overflow-hidden pointer-events-none">
                  <div className="w-20 h-full bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-[shimmer_2s_infinite]" />
                </div>

                {/* Code Node */}
                <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-4 shrink-0">
                  <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-neon-blue/20 border-2 border-neon-blue/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                    <Code className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-neon-blue" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">High-Perf Code</span>
                </div>
              </div>

              <div className="mt-8 sm:mt-12 md:mt-16 w-full space-y-3 sm:space-y-4">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-neon-violet to-neon-blue animate-[progress_3s_infinite_ease-in-out]" />
                </div>
                <div className="flex justify-between gap-1 sm:gap-2 text-[8px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                  <span className="truncate">Context</span>
                  <span className="truncate">Orchestration</span>
                  <span className="truncate">Synthesis</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3 sm:gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-tighter truncate">
                  System Active: AI-Augmented Development...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

