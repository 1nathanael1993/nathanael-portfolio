"use client";

import { motion } from "framer-motion";
import { Youtube, Music, ArrowUpRight } from "lucide-react";

export default function SocialMedia() {
  return (
    <section id="social" className="relative py-32 px-4 overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Content & <span className="text-neon-violet">Community</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Más allá del código: Creando contenido para la comunidad tech y compartiendo mi viaje como desarrollador.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YouTube Card */}
          <motion.a
            href="https://youtube.com/@nathanaelcedeno"
            target="_blank"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-[300px] rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
            
            <div className="relative h-full p-10 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-[#FF0000]/10 border border-[#FF0000]/30 flex items-center justify-center mb-6">
                <Youtube className="w-8 h-8 text-[#FF0000]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">YouTube Channel</h3>
              <p className="text-gray-400">Tutoriales, reflexiones sobre IA y el futuro del desarrollo.</p>
              
              <div className="mt-auto flex items-center gap-2 text-[#FF0000] font-bold text-sm uppercase tracking-widest">
                <span>Suscribirse</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>

          {/* TikTok Card */}
          <motion.a
            href="https://tiktok.com/@nathanaelcedeno"
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-[300px] rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#EE1D52]/10 via-[#69C9D0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
            
            <div className="relative h-full p-10 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <Music className="w-8 h-8 text-[#69C9D0]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">TikTok Feed</h3>
              <p className="text-gray-400">Tips rápidos de desarrollo y el lifestyle de un AI-First Developer.</p>
              
              <div className="mt-auto flex items-center gap-2 text-[#69C9D0] font-bold text-sm uppercase tracking-widest">
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
