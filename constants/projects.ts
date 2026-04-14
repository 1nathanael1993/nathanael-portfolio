import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "tuhospedajerd",
    title: "TuHospedajeRD",
    description: "End-to-end property management platform for local hosts with real-time sync.",
    longDescription: "A production-ready booking platform specifically designed for the Caribbean market. Features automated iCal synchronization across Airbnb/Booking, integrated real-time chat, and a robust professional admin dashboard.",
    imageUrl: "/images/projects/tuhospedaje-property.jpg",
    technologies: ["Next.js", "Supabase", "PayPal API", "Tailwind CSS", "iCal Sync"],
    features: [
      "Secure PayPal Payment Integration",
      "Automated Multi-platform iCal Sync",
      "Integrated Real-time Guest Chat",
      "Enterprise-grade Admin Dashboard",
    ],
    metrics: [
      { value: "80%", label: "Reduction in manual booking management time" },
      { value: "24/7", label: "Automated payment processing & reconciliation" },
      { value: "5+", label: "Platforms synced (Airbnb, Booking, VRBO, etc.)" },
    ],
    category: "web",
    liveUrl: "https://tuhospedajerd.com",
  },
  {
    id: "veristay",
    title: "VeriStay AI",
    description: "AI-driven forensic property auditing for high-stakes vacation rentals.",
    longDescription: "Leveraging cutting-edge computer vision (Google Gemini) to automate property inspections. Compares check-in vs check-out states, detects damages with high precision, and generates instant legal-ready PDF reports.",
    imageUrl: "/images/projects/veristay-collage.jpg",
    technologies: ["Google Gemini AI", "React", "TypeScript", "PWA", "Computer Vision"],
    features: [
      "Automated AI Damage Detection",
      "Instant Legal-ready PDF Reporting",
      "High-precision Image Comparison Engine",
      "PWA Architecture for Offline Field Audits",
    ],
    metrics: [
      { value: "10x", label: "Faster than traditional manual property auditing" },
      { value: "95%", label: "Damage detection accuracy vs human inspection" },
      { value: "<60s", label: "Time to generate comprehensive legal reports" },
    ],
    category: "ai",
    liveUrl: "https://veristay.tuhospedajerd.com",
  },
];
