import { Code2, Database, Globe, Server, Layout, Terminal, GitBranch, Coffee, Layers, Box, FileCode, Cpu } from 'lucide-react';
import { Project, Skill, TimelineEvent, CaseStudy } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React.js', icon: Code2, color: 'text-cyan-400' },
  { name: 'Next.js', icon: Layers, color: 'text-slate-900' },
  { name: 'Vue.js', icon: Layout, color: 'text-green-500' },
  { name: 'TypeScript', icon: FileCode, color: 'text-blue-600' },
  { name: 'Node.js', icon: Server, color: 'text-green-600' },
  { name: 'Express.js', icon: Server, color: 'text-slate-500' },
  { name: 'Python', icon: Terminal, color: 'text-yellow-500' },
  { name: 'Java', icon: Coffee, color: 'text-red-600' },
  { name: 'Tailwind CSS', icon: Layout, color: 'text-cyan-500' },
  { name: 'Strapi', icon: Database, color: 'text-purple-600' },
  { name: 'MongoDB', icon: Database, color: 'text-green-700' },
  { name: 'Git & GitHub', icon: GitBranch, color: 'text-orange-600' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Deepfake Video Detection',
    description: 'A security-focused application utilizing Deep Learning to detect manipulated video content. I integrated a Python-based ML model with a Flask backend and a React frontend to verify media authenticity.',
    tags: ['Python', 'React', 'Flask', 'Deep Learning'],
    image: 'https://picsum.photos/id/532/600/400',
    link: '#',
    github: 'https://github.com/Navaysrireddy'
  },
  {
    id: 2,
    title: 'Web Applications Suite',
    description: 'A versatile collection of web tools including a Calculator, To-Do List, and custom Chrome Homepage. These projects demonstrate my mastery of DOM manipulation, state management, and responsive design.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: 'https://picsum.photos/id/119/600/400',
    link: '#',
    github: 'https://github.com/Navaysrireddy'
  },
  {
    id: 3,
    title: 'Calorie Estimator ML Model',
    description: 'A health-tech solution that uses Machine Learning algorithms to estimate food calories based on input data. This project helps users track their dietary intake and maintain health goals.',
    tags: ['Python', 'ML', 'Data Science'],
    image: 'https://picsum.photos/id/292/600/400',
    link: '#',
    github: 'https://github.com/Navaysrireddy'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2020 - 2024',
    title: 'B.E. in CSE (Data Science)',
    institution: 'KG Reddy College of Engg & Technology',
    description: 'Graduated with a CGPA of 7.01/10. Gained a strong foundation in Computer Science principles, Data Structures, and Machine Learning methodologies.'
  },
  {
    year: '2024',
    title: 'Deepfake Detection Project',
    institution: 'Major Academic Project',
    description: 'Led a team to develop a Deep Learning system for detecting video manipulation. Handled the integration of the ML model with a full-stack web interface.'
  },
  {
    year: '2023',
    title: 'Full Stack Development',
    institution: 'Skill Acquisition',
    description: 'Expanded technical repertoire by mastering the MERN stack (MongoDB, Express, React, Node.js) and building responsive web applications.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Why Hire Me?",
    summary: "I bring a unique blend of technical skills in Full Stack & Data Science, combined with strong leadership and time management abilities.",
    category: "Strengths"
  },
  {
    id: 2,
    title: "Problem Solving",
    summary: "My work on Deepfake Detection proves my ability to tackle complex, real-world security challenges using cutting-edge AI.",
    category: "Impact"
  }
];