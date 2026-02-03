import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data';
import { Layers, Server, Cpu, Globe, Lock, Activity, Wifi, Shield, Zap, MessageSquare, Briefcase } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const domainGroups = [
    {
      title: t.skills.domains.systems.title,
      description: t.skills.domains.systems.desc,
      icon: Cpu,
      category: 'systems'
    },
    {
      title: t.skills.domains.networks.title,
      description: t.skills.domains.networks.desc,
      icon: Wifi,
      category: 'networks'
    },
    {
      title: t.skills.domains.infra.title,
      description: t.skills.domains.infra.desc,
      icon: Server,
      category: 'infra-devops'
    },
    {
      title: t.skills.domains.cyber.title,
      description: t.skills.domains.cyber.desc,
      icon: Shield,
      category: 'cybersecurity'
    },
    {
      title: t.skills.domains.dev.title,
      description: t.skills.domains.dev.desc,
      icon: Layers,
      category: 'development'
    },
    {
      title: t.skills.domains.soft.title,
      description: t.skills.domains.soft.desc,
      icon: Briefcase,
      category: 'soft-skills'
    }
  ];

  return (
    <section id="skills" className="py-24 2xl:py-32 bg-dark relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.skills.title}</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg 2xl:text-xl">
            {t.skills.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 2xl:gap-16">
          {domainGroups.map((domain, domainIndex) => (
            <motion.div 
              key={domain.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: domainIndex * 0.1 }}
              className="bg-slate-800/20 rounded-3xl p-8 border border-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <domain.icon className="w-6 h-6 text-blue-400" />
                 </div>
                 <div>
                     <h3 className="text-xl font-bold text-white">{domain.title}</h3>
                     <p className="text-gray-500 text-xs mt-0.5">{domain.description}</p>
                 </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(skill => skill.category === domain.category).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="flex items-center gap-2 bg-slate-700/30 border border-white/5 px-3 py-2 rounded-lg hover:border-blue-500/40 hover:bg-slate-700/50 transition-all group"
                  >
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className="w-4 h-4 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                    <span className="text-gray-300 text-xs font-medium group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;