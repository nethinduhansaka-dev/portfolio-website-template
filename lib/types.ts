export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool';
  icon: string;
  proficiency: number;
}