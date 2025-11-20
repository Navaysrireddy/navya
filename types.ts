import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  summary: string;
  category: string;
}