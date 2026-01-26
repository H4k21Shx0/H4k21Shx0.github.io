import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data';
import { Layers, Server, Cpu, Globe, Terminal, PenTool } from 'lucide-react';

const Skills: React.FC = () => {
  // Define hierarchy: Main Domain -> Category Key -> Title
  const domainGroups = [
    {
      title: "Application Development",
      description: "Building scalable interfaces and robust backend logic",
      icon: Globe,
      categories: [
        { key: 'app-dev', label: 'Web & Mobile' },
        { key: 'backend-cloud', label: 'Backend & Cloud' },
      ]
    },
    {
      title: "Systems Engineering",
      description: "Low-level programming, operating systems and embedded logic",
      icon: Cpu,
      categories: [
        { key: 'systems-embedded', label: 'Embedded & Systems' },
        { key: 'core-programming', label: 'Core Languages' },
      ]
    },
    {
      title: "Infrastructure & Tools",
      description: "Network security, deployment pipelines and design tools",
      icon: Server,
      categories: [
        { key: 'network-security', label: 'Network, Sec & DevOps' },
        { key: 'tools-design', label: 'Design & Utilities' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark relative">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Expertise Technique</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Un panorama complet de mes compétences, organisées par domaines d'intervention.
          </p>
        </motion.div>

        <div className="space-y-24">
          {domainGroups.map((domain, domainIndex) => (
            <motion.div 
              key={domain.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: domainIndex * 0.2 }}
            >
              {/* Domain Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                 <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <domain.icon className="w-8 h-8 text-blue-400" />
                 </div>
                 <div>
                     <h3 className="text-2xl md:text-3xl font-bold text-white">{domain.title}</h3>
                     <p className="text-gray-500 text-sm md:text-base mt-1">{domain.description}</p>
                 </div>
              </div>

              {/* Sub-Categories Loop */}
              <div className="grid lg:grid-cols-2 gap-12">
                  {domain.categories.map((cat) => (
                      <div key={cat.key} className="space-y-6">
                          <h4 className="text-lg font-semibold text-blue-200/80 uppercase tracking-wider text-sm flex items-center gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              {cat.label}
                          </h4>
                          
                          {/* Small Dense Grid */}
                          <div className="flex flex-wrap gap-3">
                            {SKILLS.filter(skill => skill.category === cat.key).map((skill, index) => (
                              <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="w-20 h-20 md:w-24 md:h-24 bg-slate-800/40 border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-slate-700/60 hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-sm backdrop-blur-sm"
                              >
                                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                  <img 
                                    src={skill.logo} 
                                    alt={skill.name} 
                                    className="w-full h-full object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] transition-all"
                                  />
                                </div>
                                <span className="text-gray-400 text-[10px] md:text-xs font-medium text-center px-1 leading-tight group-hover:text-white transition-colors">
                                  {skill.name}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                      </div>
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