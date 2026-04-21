import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanaelcedeno.com"),
  title: "Nathanael Cedeño | AI-First Full Stack Developer",
  description: "Orchestrating the Future through AI-Augmented Development. Junior Full Stack Developer & AI Orchestrator based in Santo Domingo.",
  keywords: ["Nathanael Cedeño", "AI Developer", "Full Stack Developer", "Next.js", "TypeScript", "Dominican Republic", "AI-Augmented Development", "Prompt Engineering"],
  authors: [{ name: "Nathanael Cedeño" }],
  openGraph: {
    title: "Nathanael Cedeño | AI-First Developer",
    description: "I don't just write code; I design scalable solutions orchestrated by AI.",
    url: "https://nathanaelcedeno.com",
    siteName: "Nathanael Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nathanael Cedeño Portfolio Preview",
      },
    ],
    locale: "es_DO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathanael Cedeño | AI-First Developer",
    description: "Orchestrating the Future with AI-Collaboration.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
