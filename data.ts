import { Project, Experience, Education, Skill } from './types';

// --- DATA: ENGLISH ---

const EXPERIENCES_EN: Experience[] = [
  {
    id: '1',
    position: 'Systems, Networks & Software Developer',
    company: 'Independent / Freelance',
    period: 'Sept 2021 - Present',
    description: 'Applied engineering through custom solutions for SMEs and individual clients.',
    location: 'Remote, Algeria',
    achievements: [
      "Solution Design: Developed desktop tools (Qt/Python) and web interfaces to solve specific client management needs.",
      "Learning through Action: Mastered system automation via Bash/Python for faster server setups (60% time saved).",
      "Network Support: Handled L1/L2 troubleshooting for local clients, consolidating my diagnosis skills.",
      "Autonomy: Successfully managed end-to-end projects, from requirement gathering to final deployment."
    ]
  },
  {
    id: '2',
    position: 'IT Engineering Intern - Network & Security',
    company: 'EURL NEHAL TIC',
    period: 'Jan 2024 - July 2024',
    description: 'Post-graduate internship focused on professional deployment of network infrastructures.',
    location: 'Tizi Ouzou, Algeria',
    achievements: [
      "Field Deployment: Participated in the installation of 20+ network nodes, following enterprise standards.",
      "Systems Integration: Helped deploy VoIP and IP surveillance services, learning real-world hardware constraints.",
      "Security Focus: Assisted in basic network hardening and VDI setups, improving my practical security knowledge."
    ]
  },
  {
    id: '3',
    position: 'IT Technical Trainer',
    company: 'Training Centers',
    period: 'Dec 2023 - May 2024',
    description: 'Sharing my passion for tech with students and professionals.',
    location: 'Tizi Ouzou, Algeria',
    achievements: [
      "Pedagogy: Delivered 200+ hours of lessons on programming (Python) and cybersecurity basics.",
      "Curriculum: Created simplified technical guides to make complex concepts accessible to beginners."
    ]
  },
];

const EXPERIENCES_FR: Experience[] = [
  {
    id: '1',
    position: 'Ingénieur Systèmes, Réseaux & Développement Logiciel',
    company: 'Indépendant / Freelance',
    period: 'Sept 2021 - Présent',
    description: 'Application pratique de l\'ingénierie via des solutions sur mesure pour PME et particuliers.',
    location: 'À distance, Algérie',
    achievements: [
      "Conception : Développement d'outils desktop (Qt/Python) et interfaces web répondant à des besoins de gestion précis.",
      "Automatisation : Apprentissage et mise en œuvre de scripts Bash/Python pour accélérer les configurations serveurs (gain de temps de 60%).",
      "Support Réseau : Résolution de pannes N1/N2 pour des clients locaux, consolidant mes capacités de diagnostic.",
      "Gestion de Projet : Maîtrise du cycle complet, de la prise de besoin au déploiement final en autonomie."
    ]
  },
  {
    id: '2',
    position: 'Stagiaire Ingénieur IT - Réseaux & Sécurité',
    company: 'EURL NEHAL TIC',
    period: 'Jan 2024 - Juill 2024',
    description: 'Stage de fin d\'études/post-diplôme axé sur le déploiement professionnel d\'infrastructures.',
    location: 'Tizi Ouzou, Algérie',
    achievements: [
      "Déploiement Terrain : Participation à l'installation de 20+ équipements réseau selon les standards d'entreprise.",
      "Intégration : Aide au déploiement de services VoIP et vidéosurveillance IP, appréhendant les contraintes matérielles réelles.",
      "Sécurité : Assistance à la mise en place de VDI et au durcissement réseau basique."
    ]
  },
  {
    id: '3',
    position: 'Formateur Technique en Informatique',
    company: 'Centres de Formation',
    period: 'Déc 2023 - Mai 2024',
    description: 'Partage de ma passion technique avec des étudiants et professionnels.',
    location: 'Tizi Ouzou, Algérie',
    achievements: [
      "Pédagogie : Plus de 200h de cours sur la programmation Python et les bases de la cybersécurité.",
      "Supports : Création de guides techniques simplifiés pour rendre accessibles des concepts complexes."
    ]
  },
];

const EDUCATION_EN: Education[] = [
  {
    id: '1',
    degree: 'Master\'s in Networks, Mobility & Embedded Systems',
    school: 'Université Mouloud Mammeri de Tizi Ouzou',
    year: '2021 - 2023',
    location: 'Tizi Ouzou, Algeria'
  },
  {
    id: '2',
    degree: 'Bachelor\'s in Computer Science (Computer Systems)',
    school: 'Université Mouloud Mammeri de Tizi Ouzou',
    year: '2018 - 2021',
    location: 'Tizi Ouzou, Algeria'
  }
];

const EDUCATION_FR: Education[] = [
  {
    id: '1',
    degree: 'Master Réseaux, Mobilités & Systèmes Embarqués',
    school: 'Université Mouloud Mammeri de Tizi Ouzou',
    year: '2021 - 2023',
    location: 'Tizi Ouzou, Algérie'
  },
  {
    id: '2',
    degree: 'Licence Informatique, Systèmes Informatiques',
    school: 'Université Mouloud Mammeri de Tizi Ouzou',
    year: '2018 - 2021',
    location: 'Tizi Ouzou, Algérie'
  }
];

const PROJECTS_EN: Project[] = [
  {
    id: '1',
    title: 'IoT Tele-medical Dashboard',
    description: 'Real-time health monitoring using Raspberry Pi and secure cloud storage.',
    fullDescription: 'My Master\'s thesis project. I built a system to track vital signs (heart rate, SpO2) using Raspberry Pi. I learned how to handle real-time sensor data, secure it via Dockerized containers, and visualize it on a simple, efficient cloud dashboard.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    technologies: ['Raspberry Pi', 'Python', 'Docker', 'MQTT', 'Cloud IoT'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2023',
    date: 'June 2023'
  },
  {
    id: '2',
    title: 'Training Center ERP',
    description: 'A custom tool built in Python to manage over 600 pieces of equipment.',
    fullDescription: 'Created during my freelance work to help a center digitize their inventory. I consolidated my Python/Qt skills and learned how to build a reliable database (SQLite) for high-traceability equipment tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'Qt', 'PyQt', 'SQLite', 'Database Design'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2023',
    date: 'Dec 2023'
  },
  {
    id: '3',
    title: 'CTF Challenge Wins',
    description: 'Applying cybersecurity bases in competitive national hacking events.',
    fullDescription: 'Winner of national CTFs (CTFCSI, Winter CTF). These experiences allowed me to practice offensive security (Forensics, Cryptography, OSINT) under pressure and reinforced my desire to master defensive architectures.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    technologies: ['Nmap', 'Metasploit', 'Wireshark', 'Python', 'Security Forensics'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2024',
    date: 'May 2024'
  }
];

const PROJECTS_FR: Project[] = [
  {
    id: '1',
    title: 'Système IoT de Santé Connectée',
    description: 'Suivi des signes vitaux en temps réel via Raspberry Pi et cloud sécurisé.',
    fullDescription: 'Projet de fin d\'études. J\'ai conçu un système de monitoring (SPO2, rythme cardiaque) via Raspberry Pi. J\'y ai appris la gestion des données capteurs en temps réel, leur sécurisation via Docker et leur visualisation sur un dashboard cloud.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    technologies: ['Raspberry Pi', 'Python', 'Docker', 'MQTT', 'Cloud IoT'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2023',
    date: 'Juin 2023'
  },
  {
    id: '2',
    title: 'ERP Centre de Formation',
    description: 'Outil Python sur mesure pour gérer plus de 600 équipements techniques.',
    fullDescription: 'Développé en freelance pour aider un centre à numériser son inventaire. J\'ai consolidé mes bases en Python/Qt et appris à structurer une base de données fiable (SQLite) pour une traçabilité sans faille.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    technologies: ['Python', 'Qt', 'PyQt', 'SQLite', 'Modélisation DB'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2023',
    date: 'Déc 2023'
  },
  {
    id: '3',
    title: 'Victoires en Compétitions CTF',
    description: 'Application de mes bases en cybersécurité lors de challenges nationaux.',
    fullDescription: 'Lauréat de plusieurs CTF nationaux (WINTER CTF, CTFCSI). Ces expériences m\'ont permis de pratiquer la sécurité offensive (Forensic, Crypto, OSINT) sous pression et de confirmer ma passion pour le durcissement des systèmes.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    technologies: ['Nmap', 'Metasploit', 'Wireshark', 'Python', 'Forensic'],
    link: '#',
    github: 'https://github.com/H4k21Shx0',
    year: '2024',
    date: 'Mai 2024'
  }
];

export const SKILLS: Skill[] = [
  // --- Systèmes ---
  { name: 'Linux Basics/Hardening', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'systems' },
  { name: 'Windows Server', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', category: 'systems' },
  { name: 'Active Directory', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', category: 'systems' },
  { name: 'Bash Scripting', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'systems' },
  { name: 'Shell Automation', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-plain.svg', category: 'systems' },
  { name: 'UEFI/BIOS Setup', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'systems' },

  // --- Réseaux ---
  { name: 'TCP/IP Foundations', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'networks' },
  { name: 'DHCP/DNS Management', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'networks' },
  { name: 'VLAN Segmentation', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'networks' },
  { name: 'VPN Services', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'networks' },
  { name: 'Wireshark Diagnostics', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wireshark/wireshark-original.svg', category: 'networks' },

  // --- Infrastructure & DevOps ---
  { name: 'Docker Containers', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'infra-devops' },
  { name: 'Kubernetes (Intro)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'infra-devops' },
  { name: 'Jenkins CI/CD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'infra-devops' },
  { name: 'Terraform (Intro)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infra-devops' },
  { name: 'Ansible Playbooks', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', category: 'infra-devops' },
  { name: 'Zabbix/Grafana', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'infra-devops' },

  // --- Cybersécurité ---
  { name: 'Pentesting Basics', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'cybersecurity' },
  { name: 'Metasploit', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'cybersecurity' },
  { name: 'SIEM Basics', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'cybersecurity' },
  { name: 'ISO 27001 Awareness', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'cybersecurity' },
  { name: 'GDPR Basics', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'cybersecurity' },

  // --- Développement & IA ---
  { name: 'Python (Solid)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development' },
  { name: 'C/C++ Engineering', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'development' },
  { name: 'Qt/PyQt UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg', category: 'development' },
  { name: 'AI API Integration', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg', category: 'development' },
  { name: 'LLM Prompting', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'development' },
  { name: 'Web Dev (HTML/CSS/JS)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'development' },
  { name: 'SQL/NoSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'development' },

  // --- Soft Skills & Agilité ---
  { name: 'Problem Solving', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg', category: 'soft-skills' },
  { name: 'Autonomous Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg', category: 'soft-skills' },
  { name: 'Agile (JIRA)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', category: 'soft-skills' },
  { name: 'Team Player', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'soft-skills' },
  { name: 'Adaptability', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'soft-skills' },
];

export const DATA = {
    en: {
        experience: EXPERIENCES_EN,
        education: EDUCATION_EN,
        projects: PROJECTS_EN
    },
    fr: {
        experience: EXPERIENCES_FR,
        education: EDUCATION_FR,
        projects: PROJECTS_FR
    }
}
