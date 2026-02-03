import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  home: {
    badge: string;
    title_span: string;
    subtitle: string;
    desc: string;
  };
  about: {
    title: string;
    subtitle: string;
    desc: string;
    role: string;
    download: string;
    identity_card: {
      email: string;
      phone: string;
      location: string;
    };
    stats: {
        projects: string;
        experience: string;
        awards: string;
        contribs: string;
        role: string;
        status: string;
        sub_projects: string;
        sub_experience: string;
        sub_awards: string;
        sub_contribs: string;
        sub_role: string;
        sub_status: string;
    };
    chart_title: string;
    chart_sub: string;
  };
  experience: {
    title: string;
    desc: string;
    exp_title: string;
    edu_title: string;
  };
  projects: {
    title: string;
    desc: string;
    view_details: string;
    modal_about: string;
    modal_tech: string;
    demo: string;
    code: string;
  };
  skills: {
    title: string;
    desc: string;
    domains: {
        systems: { title: string; desc: string; };
        networks: { title: string; desc: string; };
        infra: { title: string; desc: string; };
        cyber: { title: string; desc: string; };
        dev: { title: string; desc: string; };
        soft: { title: string; desc: string; };
    };
  };
  contact: {
    badge: string;
    title_prefix: string;
    title_span: string;
    desc: string;
    quote: string;
    footer_built: string;
    footer_rights: string;
    cards: {
        core: { title: string; desc: string; };
        relay: { title: string; desc: string; };
        edge: { title: string; desc: string; };
    }
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'Profile',
      experience: 'Journey',
      projects: 'Projects',
      skills: 'Stack',
      contact: 'Vision',
    },
    home: {
      badge: 'Systems, Networks & Software Engineer | Class of 2023',
      title_span: 'Oussada',
      subtitle: 'Passionate Explorer of Secure Infrastructures & Code',
      desc: 'Merging academic rigor with hands-on freelance projects. I build reliable systems, explore cybersecurity depth, and craft tailored software solutions with a constant desire to learn.',
    },
    about: {
      title: 'Curious',
      subtitle: 'Mindset',
      desc: 'Recent 2023 graduate in Networks & Embedded Systems. My approach is defined by polyvalence: I handle everything from low-level Linux kernel optimization to high-level web interfaces, always prioritizing security and clean logic.',
      role: 'Versatile Systems & Dev Engineer',
      download: 'Download My Resume',
      identity_card: { email: 'Reach me at', phone: 'Let\'s talk', location: 'Based in' },
      stats: {
          projects: "Lab & Freelance", sub_projects: "Active Builds",
          experience: "Post-Grad", sub_experience: "Active Learning",
          awards: "Competitions", sub_awards: "National CTF Wins",
          contribs: "Knowledge Sharing", sub_contribs: "Teaching & Training",
          role: "Current Focus", sub_role: "Software & Systems",
          status: "Open for", sub_status: "New Adventures"
      },
      chart_title: "Skillset Evolution",
      chart_sub: "Current Growth Areas"
    },
    experience: {
      title: 'Formative Journey',
      desc: 'Translating academic foundations into real-world freelance solutions and specialized training.',
      exp_title: 'Freelance & Internships',
      edu_title: 'Academic Foundations',
    },
    projects: {
      title: 'Learning by Building',
      desc: 'A selection of projects where I applied my knowledge in IoT, ERP logic, and Cybersecurity.',
      view_details: 'Discover More',
      modal_about: 'Goal & Learning Outcome',
      modal_tech: 'The Tech Stack',
      demo: 'Live Preview',
      code: 'GitHub Access',
    },
    skills: {
      title: 'Toolbox & Growth',
      desc: 'Solid foundations in core IT domains, constantly updated through active exploration.',
      domains: {
          systems: { title: "Systems Admin", desc: "Solid Linux/Windows foundations, automation, and OS hardening." },
          networks: { title: "Network Foundations", desc: "Understanding enterprise architecture, protocols, and VoIP services." },
          infra: { title: "Modern Infrastructure", desc: "Discovering the power of Docker, CI/CD, and automated deployment." },
          cyber: { title: "Security Awareness", desc: "Passionate about CTFs, pentesting basics, and defensive best practices." },
          dev: { title: "Software & Web Craft", desc: "Building logic with Python/C++ and creating responsive web interfaces." },
          soft: { title: "Agility & Growth", desc: "Fast learner, autonomous in remote setups, and dedicated teammate." },
      }
    },
    contact: {
      badge: 'Learning Roadmap',
      title_prefix: 'Let\'s Build the',
      title_span: 'Future Together',
      desc: 'Eager to join an innovative team where I can contribute my energy and continue growing as an engineer.',
      quote: 'The beautiful thing about learning is that nobody can take it away from you.',
      footer_built: 'Passionately built by',
      footer_rights: '2023 Graduate Portfolio',
      cards: {
          core: { title: "AI Exploration", desc: "Integrating smart models into everyday automation tasks." },
          relay: { title: "Cyber Defense", desc: "Deepening my knowledge in infrastructure protection." },
          edge: { title: "Community First", desc: "Believer in Open Source and collaborative development." }
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'Profil',
      experience: 'Parcours',
      projects: 'Projets',
      skills: 'Stack',
      contact: 'Vision',
    },
    home: {
      badge: 'Ingénieur Systèmes, Réseaux & Logiciel | Promo 2023',
      title_span: 'Oussada',
      subtitle: 'Explorateur Passionné d\'Infrastructures Sécurisées & de Code',
      desc: 'Alliant rigueur académique et projets freelance concrets. Je bâtis des systèmes fiables, j\'explore la cybersécurité et je développe des solutions logicielles avec une soif constante d\'apprendre.',
    },
    about: {
      title: 'Esprit',
      subtitle: 'Curieux',
      desc: 'Diplômé en 2023 en Réseaux & Systèmes Embarqués. Mon approche est celle de la polyvalence : je navigue de l\'optimisation noyau Linux aux interfaces web modernes, avec un focus permanent sur la sécurité et la clarté logique.',
      role: 'Ingénieur Systèmes & Dev Polyvalent',
      download: 'Consulter mon CV',
      identity_card: { email: 'Me contacter', phone: 'Discutons', location: 'Basé à' },
      stats: {
          projects: "Lab & Freelance", sub_projects: "Solutions Livrées",
          experience: "Post-Diplôme", sub_experience: "Apprentissage Actif",
          awards: "Compétitions", sub_awards: "Victoires CTF",
          contribs: "Partage", sub_contribs: "Formations & Cours",
          role: "Focus Actuel", sub_role: "Logiciel & Systèmes",
          status: "Disponibilité", sub_status: "Prêt pour de nouveaux défis"
      },
      chart_title: "Évolution des Skills",
      chart_sub: "Axe de Progression Actuel"
    },
    experience: {
      title: 'Parcours Formateur',
      desc: 'Transformer mes bases académiques en solutions concrètes via le freelance et la formation.',
      exp_title: 'Freelance & Stages',
      edu_title: 'Formation Académique',
    },
    projects: {
      title: 'Apprendre par la Pratique',
      desc: 'Une sélection de projets où j\'ai appliqué mes connaissances en IoT, ERP et Cybersécurité.',
      view_details: 'Découvrir',
      modal_about: 'Objectif & Apprentissages',
      modal_tech: 'Le Stack Technique',
      demo: 'Aperçu',
      code: 'Code Source',
    },
    skills: {
      title: 'Outils & Maîtrise',
      desc: 'Des bases solides dans les domaines clés de l\'IT, enrichies par une exploration active.',
      domains: {
          systems: { title: "Admin Systèmes", desc: "Bases solides Linux/Windows, automatisation et durcissement OS." },
          networks: { title: "Fondations Réseaux", desc: "Maîtrise des architectures, protocoles et services VoIP." },
          infra: { title: "Infrastructure Moderne", desc: "Exploration de Docker, de la CI/CD et du déploiement automatisé." },
          cyber: { title: "Sensibilité Sécurité", desc: "Passionné de CTF, bases en pentesting et bonnes pratiques défensives." },
          dev: { title: "Développement Web/Logiciel", desc: "Logique Python/C++ et création d'interfaces web réactives." },
          soft: { title: "Agilité & Curiosité", desc: "Apprentissage rapide, autonomie en remote et esprit d'équipe." },
      }
    },
    contact: {
      badge: 'Feuille de Route',
      title_prefix: 'Bâtissons le',
      title_span: 'Futur Ensemble',
      desc: 'Enthousiaste à l\'idée de rejoindre une équipe innovante pour apporter mon énergie et continuer à grandir.',
      quote: "L'apprentissage est la seule chose que l'esprit ne fatigue jamais, ne craint jamais et ne regrette jamais.",
      footer_built: 'Développé avec passion par',
      footer_rights: 'Portfolio Jeune Diplômé 2023',
      cards: {
          core: { title: "IA & Futur", desc: "Intégration de modèles intelligents dans l'automatisation quotidienne." },
          relay: { title: "Défense Cyber", desc: "Approfondissement de la protection des infrastructures." },
          edge: { title: "Culture Open Source", desc: "Convaincu par le partage et le développement collaboratif." }
      }
    }
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
