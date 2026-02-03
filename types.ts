import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  github: string;
  year: string;
  date: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
  location: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  location: string;
}

export interface Skill {
  name: string;
  logo: string;
  category: 'systems' | 'networks' | 'infra-devops' | 'cybersecurity' | 'development' | 'soft-skills';
}