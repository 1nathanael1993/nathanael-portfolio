"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import { ExternalLink, Github, CreditCard, RefreshCw, MessageSquare, ShieldCheck, Brain, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
  className?: string;
  delay?: number;
}

const iconMap: Record<string, any> = {
  "Pagos seguros con PayPal": CreditCard,
  "Sincronización automática iCal": RefreshCw,
  "Chat en tiempo real integrado": MessageSquare,
  "Panel de Administración Pro": ShieldCheck,
  "AI Damage Detection": Brain,
  "Automated Legal Reports": FileText,
  "Image Comparison Engine": Brain,
  "Offline Ready (PWA)": ShieldCheck,
};

export default function ProjectCard({ project, className, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 hover:border-neon-blue/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] ${className}`}
    >
      {/* Border Beam Effect */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 border-2 border-transparent">
          <div className="absolute top-0 left-0 w-full h-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20" />
          </div>
        </div>
      </div>
      
      <div className="relative z-10 p-5 sm:p-6 md:p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 sm:mb-6">
          <div className="min-w-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 break-words">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed max-w-sm break-words">
              {project.description}
            </p>
          </div>
          <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
            project.category === 'ai' 
              ? 'bg-neon-violet/10 border-neon-violet/50 text-neon-violet' 
              : 'bg-neon-blue/10 border-neon-blue/50 text-neon-blue'
          }`}>
            {project.category}
          </div>
        </div>

        {/* Highlights/Features with Icons */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {project.features.map((feature, idx) => {
            const Icon = iconMap[feature] || ShieldCheck;
            return (
              <div key={idx} className="flex items-center gap-3 group/item">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/item:bg-neon-blue/20 transition-colors">
                  <Icon className="w-4 h-4 text-gray-400 group-hover/item:text-neon-blue transition-colors" />
                </div>
                <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                  {feature}
                </span>
              </div>
            );
          })}
        </div>

        {/* Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-400 font-medium group-hover:border-neon-blue/30 group-hover:text-gray-200 transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
          {project.liveUrl && (
            <Button
              variant="neon"
              size="sm"
              asChild
              className="flex-1 bg-neon-blue/10 border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black transition-all font-bold"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Proyecto
              </a>
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 border border-white/10 text-white hover:bg-white/5 transition-all font-medium"
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </div>

      {/* Glass Reflection */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
}
