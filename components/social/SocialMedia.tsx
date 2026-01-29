"use client";

import { motion } from "framer-motion";
import { Youtube, Music, ArrowUpRight } from "lucide-react";

export default function SocialMedia() {
  return (
    <section id="social" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
            Content & <span className="text-neon-violet">Community</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl">
            Más allá del código: Creando contenido para la comunidad tech y compartiendo mi viaje como desarrollador.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* YouTube Card */}
          <motion.a
            href="https://youtube.com/@nathanaelcedeno"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative min-h-[260px] sm:min-h-[280px] md:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
            
            <div className="relative h-full p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#FF0000]/10 border border-[#FF0000]/30 flex items-center justify-center mb-4 sm:mb-6 shrink-0">
                <Youtube className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#FF0000]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">YouTube Channel</h3>
              <p className="text-sm sm:text-base text-gray-400">Tutoriales, reflexiones sobre IA y el futuro del desarrollo.</p>
              
              <div className="mt-auto flex items-center gap-2 text-[#FF0000] font-bold text-xs sm:text-sm uppercase tracking-widest pt-4">
                <span>Suscribirse</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>

          {/* TikTok Card */}
          <motion.a
            href="https://tiktok.com/@nathanaelcedeno"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative min-h-[260px] sm:min-h-[280px] md:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#EE1D52]/10 via-[#69C9D0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
            
            <div className="relative h-full p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 sm:mb-6 shrink-0">
                <Music className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#69C9D0]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">TikTok Feed</h3>
              <p className="text-sm sm:text-base text-gray-400">Tips rápidos de desarrollo y el lifestyle de un AI-First Developer.</p>
              
              <div className="mt-auto flex items-center gap-2 text-[#69C9D0] font-bold text-xs sm:text-sm uppercase tracking-widest pt-4">
                <span>Explorar</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
