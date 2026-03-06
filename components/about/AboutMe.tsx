"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, Github, Linkedin } from "lucide-react";

export default function AboutMe() {
  const email = "admin@tuhospedajerd.com";
  const emailObfuscated = "admin [at] tuHospedajeRD [dot] com";

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden bg-black">
      {/* Subtle different backdrop than pure black */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_25%,#000_20%,transparent_100%)] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_60px_rgba(0,240,255,0.06)] p-6 sm:p-8 md:p-10"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-violet/25 bg-neon-violet/5 mb-5">
            <Sparkles className="w-4 h-4 text-neon-violet" />
            <span className="text-[10px] sm:text-xs font-bold text-neon-violet uppercase tracking-widest">
              MI HISTORIA
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Construyo el futuro del{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">
              hospitality con IA
            </span>
          </h2>

          {/* Copy */}
          <div className="mt-5 space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            <p>
              Empecé con TuHospedajeRD para ayudar a anfitriones locales a gestionar sus propiedades sin
              complicaciones. Vi de cerca el dolor de las auditorías manuales y los conflictos por daños no
              documentados.
            </p>
            <p>
              Eso me llevó a crear VeriStay AI, usando Google Gemini para automatizar auditorías forenses. Ahora
              combino ambas soluciones para ofrecer el stack completo: gestión + auditoría inteligente.
            </p>
            <p>
              Como AI-First Developer uso Cursor y modelos de lenguaje para desarrollar 3x más rápido, sin
              sacrificar calidad. No solo escribo código; orquesto IA para crear software que resuelve problemas
              reales.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
            <div className="text-xl sm:text-2xl font-black text-white">Nathanael Cedeño</div>

            {/* CTA */}
            <a
              href={`mailto:${email}?subject=Proyecto%20en%20mente&body=Hola%20Nathanael%2C%20quiero%20hablar%20sobre...`}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neon-blue/30 bg-neon-blue/5 text-neon-blue font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-neon-blue hover:text-black transition-all"
            >
              <Mail className="w-4 h-4" />
              ¿Tienes un proyecto en mente? Trabajemos juntos
            </a>
          </div>

          <div className="mt-3 flex flex-col gap-3">
            <div className="text-[10px] sm:text-xs text-gray-500">
              Email: <span className="text-gray-300">{emailObfuscated}</span>
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ y: -2, color: "#00F0FF" }}
                href="https://www.linkedin.com/in/nathanaelcedeno/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ y: -2, color: "#00F0FF" }}
                href="https://github.com/1nathanael1993"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

