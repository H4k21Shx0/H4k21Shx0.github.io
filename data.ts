import { Project, Experience, Education, Skill } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    position: 'Senior Full Stack Developer',
    company: 'TechFlow Solutions',
    period: '2022 - Present',
    description: 'Lead developer for enterprise SaaS platforms. Focusing on scalability and modern architectural patterns.',
    location: 'Paris, France',
    achievements: [
      "Role: Tech Lead. Directed a team of 5 developers in migrating a legacy monolith to a NestJS microservices architecture.",
      "Action: Implemented advanced caching strategies with Redis and optimized PostgreSQL queries.",
      "Result: Achieved a 40% improvement in API response times and reduced server costs by 25%."
    ]
  },
  {
    id: '2',
    position: 'Frontend Developer',
    company: 'Creative Digital Agency',
    period: '2020 - 2022',
    description: 'Specialized in creating high-performance, interactive web experiences for luxury brands.',
    location: 'Lyon, France',
    achievements: [
      "Role: UI Developer. Collaborated closely with designers to implement pixel-perfect, responsive designs.",
      "Action: Integrated WebGL and Framer Motion for immersive scroll animations and transitions.",
      "Result: Delivered 10+ award-winning websites and increased client engagement metrics by over 60%."
    ]
  },
  {
    id: '3',
    position: 'Junior Web Developer',
    company: 'StartUp Inc',
    period: '2019 - 2020',
    description: 'Full stack development on internal tools and client-facing dashboards.',
    location: 'Remote',
    achievements: [
      "Role: Full Stack Dev. Maintained and enhanced internal dashboard tools using React and Node.js.",
      "Action: Refactored the authentication system to support role-based access control (RBAC).",
      "Result: Improved system security and reduced support tickets related to access issues by 80%."
    ]
  },
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: 'Master in Computer Science',
    school: 'Tech University of Paris',
    year: '2019',
    location: 'Paris, France'
  },
  {
    id: '2',
    degree: 'Bachelor in Software Engineering',
    school: 'State University',
    year: '2017',
    location: 'Toulouse, France'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers.',
    fullDescription: 'This project is a high-performance admin dashboard tailored for e-commerce businesses. It visualizes real-time sales data, inventory levels, and customer demographics using D3.js and Recharts. The backend is powered by NestJS with a microservices architecture to handle high concurrency.',
    imageUrl: 'https://picsum.photos/seed/proj1/800/600',
    technologies: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
    link: '#',
    github: '#',
    year: '2023',
    date: 'Nov 2023'
  },
  {
    id: '2',
    title: 'AI Chat Interface',
    description: 'Real-time chat application integrating LLM APIs.',
    fullDescription: 'A sleek, dark-themed chat interface that connects users with various Large Language Models. Features include streaming responses, markdown support, and chat history persistence via Prisma and PostgreSQL.',
    imageUrl: 'https://picsum.photos/seed/proj2/800/600',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Tailwind', 'Socket.io'],
    link: '#',
    github: '#',
    year: '2023',
    date: 'Sep 2023'
  },
  {
    id: '3',
    title: 'Crypto Portfolio Tracker',
    description: 'Mobile-first web app to track cryptocurrency assets.',
    fullDescription: 'Allows users to input their crypto holdings and view real-time value updates. Uses WebSockets for live price feeds and provides detailed profit/loss analysis charts.',
    imageUrl: 'https://picsum.photos/seed/proj3/800/600',
    technologies: ['Vue.js', 'Firebase', 'Chart.js', 'CoinGecko API'],
    link: '#',
    github: '#',
    year: '2022',
    date: 'Dec 2022'
  },
  {
    id: '4',
    title: 'Task Management System',
    description: 'Collaborative Kanban board for remote teams.',
    fullDescription: 'A Trello-like application featuring drag-and-drop task management, real-time collaboration updates, and team permission handling. Built with a focus on accessibility and keyboard navigation.',
    imageUrl: 'https://picsum.photos/seed/proj4/800/600',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    github: '#',
    year: '2021',
    date: 'Aug 2021'
  },
  {
    id: '5',
    title: 'Health Tracking App',
    description: 'Mobile app for tracking workouts and nutrition.',
    fullDescription: 'A React Native application that helps users track their fitness goals. Integrates with Apple Health and Google Fit. Features include caloric tracking, workout templates, and progress visualization.',
    imageUrl: 'https://picsum.photos/seed/proj5/800/600',
    technologies: ['React Native', 'Redux', 'Node.js', 'GraphQL'],
    link: '#',
    github: '#',
    year: '2021',
    date: 'Mar 2021'
  },
  {
    id: '6',
    title: 'Real Estate Platform',
    description: 'Property listing platform with virtual tours.',
    fullDescription: 'A modern real estate marketplace allowing agents to list properties with 360-degree virtual tours. Built with Next.js for SEO optimization and AWS S3 for media storage.',
    imageUrl: 'https://picsum.photos/seed/proj6/800/600',
    technologies: ['Next.js', 'AWS', 'Three.js', 'PostgreSQL'],
    link: '#',
    github: '#',
    year: '2020',
    date: 'Jun 2020'
  },
  {
    id: '7',
    title: 'DevOps CI/CD Pipeline',
    description: 'Automated deployment infrastructure tool.',
    fullDescription: 'An internal tool designed to visualize and manage CI/CD pipelines. Interacts with Jenkins and GitHub Actions APIs to provide a unified dashboard for deployment status.',
    imageUrl: 'https://picsum.photos/seed/proj7/800/600',
    technologies: ['Go', 'React', 'Docker', 'Kubernetes'],
    link: '#',
    github: '#',
    year: '2020',
    date: 'Feb 2020'
  },
  {
    id: '8',
    title: 'Social Media Dashboard',
    description: 'Aggregator for social media metrics.',
    fullDescription: 'Connects to Twitter, LinkedIn, and Instagram APIs to provide a centralized view of social engagement. Features automated reporting and sentiment analysis.',
    imageUrl: 'https://picsum.photos/seed/proj8/800/600',
    technologies: ['Python', 'Django', 'React', 'D3.js'],
    link: '#',
    github: '#',
    year: '2019',
    date: 'Oct 2019'
  },
  {
    id: '9',
    title: 'Smart Home IoT Hub',
    description: 'Centralized dashboard for IoT devices using MQTT.',
    fullDescription: 'A unified interface for managing smart home devices. Supports lighting, climate control, and security systems. Built with React for the frontend and a Node.js MQTT broker handler. Features real-time state synchronization.',
    imageUrl: 'https://picsum.photos/seed/proj9/800/600',
    technologies: ['React', 'Node.js', 'MQTT', 'WebSockets'],
    link: '#',
    github: '#',
    year: '2019',
    date: 'Jul 2019'
  },
  {
    id: '10',
    title: 'LMS Platform',
    description: 'Learning Management System for online courses.',
    fullDescription: 'An education platform featuring video lessons, quizzes, and progress certificates. Includes a robust admin panel for course creation, student management, and analytics.',
    imageUrl: 'https://picsum.photos/seed/proj10/800/600',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS S3'],
    link: '#',
    github: '#',
    year: '2019',
    date: 'Apr 2019'
  },
  {
    id: '11',
    title: 'NFT Marketplace',
    description: 'Decentralized platform for trading digital assets.',
    fullDescription: 'A web3 application allowing users to mint, buy, and sell NFTs. Integrated with Ethereum wallets and IPFS for decentralized asset storage. Smart contracts written in Solidity.',
    imageUrl: 'https://picsum.photos/seed/proj11/800/600',
    technologies: ['Next.js', 'Solidity', 'Ethers.js', 'IPFS'],
    link: '#',
    github: '#',
    year: '2018',
    date: 'Dec 2018'
  },
  {
    id: '12',
    title: 'Algorithmic Trading Bot',
    description: 'Automated trading bot for crypto markets.',
    fullDescription: 'A Python-based bot that executes trades based on technical indicators (RSI, MACD). Includes a React dashboard for monitoring performance, viewing trade history, and adjusting strategy parameters.',
    imageUrl: 'https://picsum.photos/seed/proj12/800/600',
    technologies: ['Python', 'FastAPI', 'React', 'Pandas'],
    link: '#',
    github: '#',
    year: '2018',
    date: 'Sep 2018'
  },
  {
    id: '13',
    title: 'Cloud Storage Service',
    description: 'Secure file storage and sharing application.',
    fullDescription: 'A file hosting service offering drag-and-drop uploads, folder structures, and shareable links with expiration. Implements client-side encryption before upload for enhanced privacy.',
    imageUrl: 'https://picsum.photos/seed/proj13/800/600',
    technologies: ['React', 'Firebase', 'Cloud Functions', 'MUI'],
    link: '#',
    github: '#',
    year: '2018',
    date: 'May 2018'
  },
  {
    id: '14',
    title: 'Table Reservation',
    description: 'Restaurant booking system with visual layout.',
    fullDescription: 'Allows customers to book specific tables based on an interactive floor plan. Provides a management interface for staff to handle reservations, seating, and walk-ins in real-time.',
    imageUrl: 'https://picsum.photos/seed/proj14/800/600',
    technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Socket.io'],
    link: '#',
    github: '#',
    year: '2017',
    date: 'Feb 2017'
  },
  {
    id: '15',
    title: 'P2P Video Chat',
    description: 'Video conferencing using WebRTC.',
    fullDescription: 'Browser-based video calling application requiring no downloads. Features screen sharing, text chat, and secure peer-to-peer connections for low latency.',
    imageUrl: 'https://picsum.photos/seed/proj15/800/600',
    technologies: ['React', 'WebRTC', 'Node.js', 'Express'],
    link: '#',
    github: '#',
    year: '2017',
    date: 'Nov 2017'
  },
  {
    id: '16',
    title: 'Weather Alert Hub',
    description: 'Hyper-local weather forecasts and alerts.',
    fullDescription: 'Aggregates data from multiple weather APIs to provide precise forecasts. Users can configure custom SMS or Email alerts for specific weather conditions like storms or frost.',
    imageUrl: 'https://picsum.photos/seed/proj16/800/600',
    technologies: ['Svelte', 'Serverless', 'Twilio', 'OpenWeather'],
    link: '#',
    github: '#',
    year: '2016',
    date: 'Aug 2016'
  }
];

export const SKILLS: Skill[] = [
  // --- App Development (Web, Mobile, Desktop) ---
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'app-dev' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'app-dev' },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', category: 'app-dev' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'app-dev' },
  { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'app-dev' },
  { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'app-dev' },
  { name: 'Three.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg', category: 'app-dev' },
  { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', category: 'app-dev' },

  // --- Backend & Cloud ---
  { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', category: 'backend-cloud' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend-cloud' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'backend-cloud' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend-cloud' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'backend-cloud' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', category: 'backend-cloud' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'backend-cloud' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'backend-cloud' },

  // --- Core Programming Languages ---
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'core-programming' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'core-programming' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'core-programming' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'core-programming' },
  { name: 'Rust', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg', category: 'core-programming' },
  { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg', category: 'core-programming' },

  // --- Systems & Embedded ---
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'systems-embedded' },
  { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'systems-embedded' },
  { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', category: 'systems-embedded' },
  { name: 'Raspberry Pi', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg', category: 'systems-embedded' },
  { name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'systems-embedded' },
  
  // --- Network & Security ---
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'network-security' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'network-security' },
  { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'network-security' },
  { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', category: 'network-security' },
  
  // --- Tools & Design ---
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools-design' },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', category: 'tools-design' },
  { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools-design' },
  { name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', category: 'tools-design' },
];