"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Command {
  input: string;
  output: string[];
  timestamp: number;
}

const projectsOutput = () => [
  "📁 Featured Projects:",
  "",
  "  🏠 TuHospedajeRD.com",
  "     └─ Real-time Property Management | iCal Sync | Next.js",
  "",
  "  🤖 VeriStay AI",
  "     └─ Forensic Auditing | Computer Vision | Gemini LLM",
  "",
  "  💡 Type 'ls projects' for more details",
  "",
];

const commands: Record<string, () => string[]> = {
  ls: projectsOutput,
  "ls projects": projectsOutput,
  help: () => [
    "Available commands:",
    "  ls             - List featured high-ROI projects",
    "  cat bio        - Professional background & mission",
    "  cat skills     - Technical stack & AI specializations",
    "  cat experience - Career timeline & domain expertise",
    "  cat contact    - How to reach me for collaborations",
    "  analyze-stack  - Run AI diagnostic on my core stack",
    "  clear          - Reset terminal view",
    "  whoami         - System identity check",
    "",
  ],
  "cat bio": () => [
    "Nathanael Cedeño | AI Orchestrator & Full Stack Dev",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "📍 Base: Santo Domingo, DR (Remote Worldwide)",
    "💼 Mission: Automating industry pain points through",
    "   intelligent software architecture.",
    "",
    "I bridge the gap between traditional engineering",
    "and AI-augmented development, delivering solutions",
    "that drive real business value and ROI.",
    "",
  ],
  "cat skills": () => [
    "Tech Stack & Orchestration:",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "Frontend & Backend:",
    "  • Next.js (App Router), React, TS",
    "  • PostgreSQL, Supabase, Prisma",
    "  • Tailwind CSS, Framer Motion",
    "",
    "AI Orchestration:",
    "  • LLM Integration (Gemini, GPT-4)",
    "  • Advanced Prompt Engineering",
    "  • Computer Vision Workflows",
    "  • AI-Augmented SDLC",
    "",
  ],
  "cat experience": () => [
    "Professional Journey:",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "🚀 Founder @ TuHospedajeRD & VeriStay AI",
    "   (Present) | Software Engineering & AI Automation",
    "   - Developed AI-driven forensic auditing for rentals.",
    "   - Automated sync for multi-platform hospitality assets.",
    "",
    "🏨 Airbnb Administrator @ Independent Portfolio",
    "   (Past) | Strategic Operations & Logistics",
    "   - Domain expert in Caribbean hospitality management.",
    "   - Solved manual friction points that led to my coding career.",
    "",
    "⌨️ Data Specialist @ Conduent (US Accounts)",
    "   (Past) | High-Speed Information Processing",
    "   - Worked in high-pressure US corporate environments.",
    "   - Sharpened precision, detail-focus, and English fluency.",
    "",
  ],
  "analyze-stack": () => [
    "Running Stack Diagnostic...",
    "[OK] Next.js 14 (Optimized Hydration)",
    "[OK] TypeScript (Type Safety Level: High)",
    "[OK] AI Orchestrator (Inference Speed: 10x)",
    "[OK] Infrastructure (Scalable Serverless)",
    "",
    "Result: Architecture ready for Enterprise-grade AI solutions.",
    "",
  ],
  "cat contact": () => [
    "Collaboration Channels:",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "📧 Email: eipelnatacedeno@gmail.com",
    "💼 LinkedIn: linkedin.com/in/nathanaelcedeno",
    "🐙 GitHub: github.com/1nathanael1993",
    "",
  ],
  whoami: () => [
    "nathanael@portfolio:~$ whoami",
    "",
    "Nathanael Cedeño",
    "Senior-level AI Orchestrator & Full Stack Engineer",
    "Building high-ROI digital assets.",
    "",
  ],
  clear: () => [],
};

export default function InteractiveTerminal() {
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const commandListRef = useRef<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial welcome message
    setCommandHistory([
      {
        input: "",
        output: [
          "Welcome to Nathanael's Portfolio Terminal",
          "Type 'help' to see available commands",
          "",
        ],
        timestamp: Date.now(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [commandHistory]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "clear") {
      setCommandHistory([]);
      setHistoryIndex(-1);
      return;
    }

    // Add to command list for history navigation
    if (cmd.trim() && !commandListRef.current.includes(cmd.trim())) {
      commandListRef.current.push(cmd.trim());
    }
    setHistoryIndex(-1);

    const commandFn = commands[trimmedCmd];
    const output = commandFn ? commandFn() : [`Command not found: ${cmd}. Type 'help' for available commands.`];

    setCommandHistory((prev) => [
      ...prev,
      {
        input: cmd,
        output,
        timestamp: Date.now(),
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    setIsTyping(true);
    setTimeout(() => {
      handleCommand(currentInput);
      setCurrentInput("");
      setIsTyping(false);
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandListRef.current.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandListRef.current.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandListRef.current[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandListRef.current.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandListRef.current[newIndex]);
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1 
      }}
      className="w-full max-w-4xl mx-auto group relative"
    >
      <div className="relative">
        {/* Blue Neon Drop Shadow - Simplified for mobile */}
        <div className="absolute -inset-8 bg-neon-blue/10 lg:bg-neon-blue/20 blur-[60px] rounded-full opacity-30 lg:opacity-50 transition-opacity duration-1000" />
        
        <div className="relative">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-blue/30 via-white/10 to-neon-violet/30 rounded-lg opacity-50" />
          <div className="bg-black/80 lg:bg-black/40 backdrop-blur-sm lg:backdrop-blur-[12px] rounded-lg p-4 sm:p-6 h-[360px] sm:h-[420px] md:h-[500px] flex flex-col border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Glossy reflection effect */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-white/5 min-w-0">
              <div className="flex gap-1.5 sm:gap-2 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
              </div>
              <span className="ml-2 sm:ml-4 text-[9px] sm:text-[10px] text-gray-400 font-mono tracking-widest uppercase truncate">
                nathanael@portfolio
              </span>
            </div>

            {/* Terminal Content */}
            <div
              ref={terminalRef}
              onClick={() => inputRef.current?.focus()}
              className="flex-1 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 sm:space-y-3 scrollbar-hide pr-2 cursor-text"
            >
              <AnimatePresence mode="popLayout">
                {commandHistory.map((cmd, idx) => (
                  <div
                    key={`${cmd.timestamp}-${idx}`}
                    className="space-y-1"
                  >
                    {cmd.input && (
                      <div className="flex items-center gap-2 text-neon-blue">
                        <span className="text-gray-400 font-bold" aria-hidden="true">❯</span>
                        <span className="font-semibold">{cmd.input}</span>
                      </div>
                    )}
                    {cmd.output.map((line, lineIdx) => (
                      <div
                        key={lineIdx}
                        className="text-gray-300 whitespace-pre-wrap leading-relaxed"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                ))}
                <div ref={bottomRef} />
              </AnimatePresence>

              {/* Input Area / Active Prompt */}
              <div className="flex items-center gap-2 text-neon-blue">
                <span className="text-gray-400 font-bold" aria-hidden="true">❯</span>
                <div className="flex items-center flex-1 relative">
                  <span className="text-white min-w-[1px]">{currentInput}</span>
                  {!isTyping && (
                    <motion.div
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-5 bg-neon-blue shadow-[0_0_10px_#00F0FF]"
                    />
                  )}
                  {currentInput === "" && !isTyping && (
                    <span className="text-white/40 absolute left-0 pointer-events-none">
                      {commandHistory.length <= 1
                        ? "Type 'ls' to explore..."
                        : "Type 'help' for more commands"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Hidden form input that captures focus */}
            <form onSubmit={handleSubmit} className="sr-only">
              <label htmlFor="terminal-input">Terminal Command</label>
              <input
                id="terminal-input"
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Terminal Input"
              />
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
