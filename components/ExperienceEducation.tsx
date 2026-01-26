import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data';

const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark/50 relative">
      <div className="w-full px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Parcours Professionnel</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Mon voyage à travers l'industrie technologique et mon cheminement académique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            
            {/* Experience Column */}
            <motion.div 
                className="bg-white/5 rounded-2xl p-6 md:p-8 border-2 border-white/10 relative overflow-hidden"
                initial={{ borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
                animate={{ 
                    borderColor: ['rgba(255,255,255,0.1)', 'rgba(59, 130, 246, 1)', 'rgba(255,255,255,0.1)'],
                    boxShadow: ['0px 0px 0px rgba(59, 130, 246, 0)', '0px 0px 20px rgba(59, 130, 246, 0.4)', '0px 0px 0px rgba(59, 130, 246, 0)']
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                        <Briefcase className="text-blue-500 w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Expérience</h3>
                </div>
                
                {/* Independent Timeline Container */}
                <div className="space-y-12 border-l-2 border-white/10 ml-3 pl-8 py-2">
                    {EXPERIENCES.map((exp, index) => (
                         <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Dot aligned with border-l */}
                            <div className="absolute -left-[35px] top-1.5 w-3.5 h-3.5 bg-dark border-2 border-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300" />

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                                <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                                <span className="mt-1 sm:mt-0 inline-block px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-sm text-blue-200 font-mono whitespace-nowrap sm:ml-2">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="flex justify-between items-center mb-3">
                                <p className="text-blue-400 text-sm font-medium">{exp.company}</p>
                                <div className="flex items-center gap-1 text-white text-sm font-medium">
                                    <MapPin size={14} />
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                            
                            {exp.achievements && (
                                <ul className="space-y-2">
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="mt-1.5 min-w-[6px] h-1.5 bg-blue-500/50 rounded-full" />
                                            <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Education Column */}
            <motion.div 
                className="bg-white/5 rounded-2xl p-6 md:p-8 border-2 border-white/10 relative overflow-hidden"
                initial={{ borderColor: 'rgba(255,255,255,0.1)', boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
                animate={{ 
                    borderColor: ['rgba(255,255,255,0.1)', 'rgba(168, 85, 247, 1)', 'rgba(255,255,255,0.1)'],
                    boxShadow: ['0px 0px 0px rgba(168, 85, 247, 0)', '0px 0px 20px rgba(168, 85, 247, 0.4)', '0px 0px 0px rgba(168, 85, 247, 0)']
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
                <div className="flex items-center gap-4 mb-8">
                     <div className="p-3 bg-purple-500/20 rounded-xl">
                        <GraduationCap className="text-purple-500 w-6 h-6" />
                     </div>
                    <h3 className="text-2xl font-bold text-white">Formation</h3>
                </div>

                {/* Independent Timeline Container */}
                <div className="space-y-12 border-l-2 border-white/10 ml-3 pl-8 py-2">
                    {EDUCATION.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                             {/* Dot aligned with border-l */}
                             <div className="absolute -left-[35px] top-1.5 w-3.5 h-3.5 bg-dark border-2 border-purple-500 rounded-full group-hover:scale-125 group-hover:bg-purple-500 transition-all duration-300" />

                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                                <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                                <span className="mt-1 sm:mt-0 inline-block px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-sm text-purple-200 font-mono whitespace-nowrap sm:ml-2">
                                    {edu.year}
                                </span>
                            </div>
                            
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-purple-400 text-sm font-medium">{edu.school}</p>
                                <div className="flex items-center gap-1 text-white text-sm font-medium">
                                    <MapPin size={14} />
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;