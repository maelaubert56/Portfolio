export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  createdAt?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  dateStart: string;
  dateEnd?: string;
  description: string;
  logo: string;
  location?: string;
  technologies?: string[];
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "tools";
  icon?: string;
  level?: "beginner" | "intermediate" | "advanced";
}

export interface Education {
  id: string;
  title: string;
  school: string;
  dateStart: string;
  dateEnd?: string;
  description?: string;
  location?: string;
}
