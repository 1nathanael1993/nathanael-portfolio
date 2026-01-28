import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "tuhospedajerd",
    title: "TuHospedajeRD",
    description: "Solución completa para anfitriones locales con notificaciones push y diseño responsive.",
    longDescription: "TuHospedajeRD es una plataforma real de reservas tipo Airbnb diseñada específicamente para el mercado dominicano. Ofrece una experiencia fluida tanto para huéspedes como para anfitriones.",
    imageUrl: "/images/projects/tuhospedaje-property.jpg",
    technologies: ["Next.js", "Supabase", "PayPal API", "Tailwind CSS"],
    features: [
      "Pagos seguros con PayPal",
      "Sincronización automática iCal",
      "Chat en tiempo real integrado",
      "Panel de Administración Pro",
    ],
    category: "web",
    liveUrl: "https://tuhospedajerd.com",
  },
  {
    id: "veristay",
    title: "VeriStay AI",
    description: "La potencia de la IA aplicada a la auditoría de propiedades para hosts modernos.",
    longDescription: "Utiliza inteligencia artificial de vanguardia para comparar fotos de check-in vs check-out, detectando daños automáticamente y generando reportes legales en PDF.",
    technologies: ["Google Gemini AI", "React", "TypeScript", "PWA"],
    features: [
      "AI Damage Detection",
      "Automated Legal Reports",
      "Image Comparison Engine",
      "Offline Ready (PWA)",
    ],
    category: "ai",
    liveUrl: "https://veristay.tuhospedajerd.com",
  },
];
