export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  imageUrl?: string;
  logoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: "web" | "ai" | "mobile" | "other";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface TechStack {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "ai" | "tools";
}
