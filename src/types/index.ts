export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  link?: string;
  github?: string;
}

export interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  className?: string;
}
