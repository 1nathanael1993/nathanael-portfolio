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
    metrics: [
      { value: "80%", label: "Reducción en tiempo de gestión de reservas" },
      { value: "24/7", label: "Pagos procesados automáticamente" },
      { value: "5+", label: "Plataformas sincronizadas (Airbnb, Booking, etc.)" },
    ],
    category: "web",
    liveUrl: "https://tuhospedajerd.com",
  },
  {
    id: "veristay",
    title: "VeriStay AI",
    description: "La potencia de la IA aplicada a la auditoría de propiedades para hosts modernos.",
    longDescription: "Utiliza inteligencia artificial de vanguardia para comparar fotos de check-in vs check-out, detectando daños automáticamente y generando reportes legales en PDF.",
    imageUrl: "/images/projects/veristay-collage.jpg",
    technologies: ["Google Gemini AI", "React", "TypeScript", "PWA"],
    features: [
      "Detección de Daños con IA",
      "Reportes Legales Automatizados",
      "Motor de Comparación de Imágenes",
      "Listo para Offline (PWA)",
    ],
    metrics: [
      { value: "10x", label: "Más rápido que auditoría manual" },
      { value: "95%", label: "Precisión en detección de daños" },
      { value: "<60s", label: "Tiempo para generar reporte legal" },
    ],
    category: "ai",
    liveUrl: "https://veristay.tuhospedajerd.com",
  },
];
