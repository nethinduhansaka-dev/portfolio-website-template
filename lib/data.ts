import { Project, Skill } from './types';
import { Code2, Database, Layout, MessageSquare, Image, ShoppingBag, Car, Store, Calendar, Users, FileOutput, Bot, ChefHat, Eraser } from 'lucide-react';

export const projects: Project[] = [
  {
    title: 'Shoe Store Application',
    description: 'A modern e-commerce platform built with React and Tailwind CSS, featuring a responsive design and seamless shopping experience.',
    technologies: ['React', 'Tailwind CSS', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    githubUrl: 'https://github.com/username/shoe-store',
  },
  {
    title: 'Taxi App',
    description: 'A user-friendly interface for booking and managing rides with real-time tracking and payment integration.',
    technologies: ['React Native', 'Redux', 'Google Maps API'],
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2',
    githubUrl: 'https://github.com/username/taxi-app',
  },
  // Add remaining projects...
];

export const skills: Skill[] = [
  {
    name: 'Python',
    category: 'language',
    icon: 'python',
    proficiency: 90,
  },
  {
    name: 'JavaScript',
    category: 'language',
    icon: 'javascript',
    proficiency: 85,
  },
  // Add remaining skills...
];

export const achievements = [
  'Successfully implemented innovative features in multiple projects',
  'Gained proficiency in integrating user-friendly interfaces',
  'Demonstrated ability to build responsive web and desktop applications',
];