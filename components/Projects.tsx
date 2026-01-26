import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Clock } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Helper to render the snake timeline segments
  const getSnakeLine = (index: number, date: string) => {
    const colCount = 4; // Matches lg:grid-cols-4
    const rowIndex = Math.floor(index / colCount);
    const colIndex = index % colCount;
    const isEvenRow = rowIndex % 2 === 0;

    // Connectivity Checks
    // Does a card exist in the slot directly below?
    const hasNextRowCard = index + colCount < PROJECTS.length;
    // Does the next card in the array exist? (For standard L->R flow)
    const hasNextCard = index + 1 < PROJECTS.length;

    // Line Configuration
    const borderColor = "border-blue-500/30";
    const borderSize = "border-t-2"; 
    const lineY = "top-[-1.5rem]"; // Position relative to card top
    
    // Dot configuration
    const dotClass = `absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)] z-20 ${lineY} left-1/2 -translate-x-1/2 -translate-y-1/2`;
    
    // U-Turn Height Calculation:
    // 100% (Card Height) + 6rem (Grid Gap gap-y-24) + 2px (Border Alignment Fix)
    const uTurnHeight = "h-[calc(100%+6rem+2px)]";

    return (
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Stylish Date Tag (Floating above the dot with gap) */}
            <div className="absolute top-[-4.25rem] left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/90 border border-blue-500/30 shadow-[0_4px_20px_-2px_rgba(59,130,246,0.3)] backdrop-blur-md"
                >
                    <Clock size={12} className="text-blue-400" />
                    <span className="text-[11px] font-mono font-semibold text-blue-100 tracking-wider uppercase whitespace-nowrap">
                        {date}
                    </span>
                </motion.div>
            </div>

            {/* The Dot (Always present on every card) */}
            <div className={dotClass} />

            {/* Horizontal Line Segments */}
            {isEvenRow ? (
                // --- Even Row: Flow LEFT -> RIGHT ---
                <>
                    {/* Input Line (From Left Neighbor or Start) */}
                    {(colIndex > 0 || rowIndex > 0) && (
                        <div className={`absolute ${lineY} left-[-1rem] right-1/2 h-4 ${borderSize} ${borderColor}`} />
                    )}

                    {/* Output Line (To Right Neighbor OR U-Turn Start) */}
                    {/* Fixed: Connect to right neighbor OR connect to U-turn if it's the turning card */}
                    {((colIndex < 3 && hasNextCard) || (colIndex === 3 && hasNextRowCard)) && (
                        <div className={`absolute ${lineY} left-1/2 right-[-1rem] h-4 ${borderSize} ${borderColor}`} />
                    )}
                    
                    {/* U-Turn Down (Only at Col 3, if card below exists) */}
                    {colIndex === 3 && hasNextRowCard && (
                        <div className={`absolute ${lineY} right-[-3rem] w-[2rem] ${uTurnHeight} border-t-2 border-r-2 border-b-2 ${borderColor} rounded-r-[2rem] z-10`} />
                    )}
                </>
            ) : (
                // --- Odd Row: Flow RIGHT -> LEFT ---
                <>
                    {/* Input Line (From Right Neighbor or U-Turn) */}
                    {/* Always valid for odd row cards as they receive flow from the right */}
                    <div className={`absolute ${lineY} left-1/2 right-[-1rem] h-4 ${borderSize} ${borderColor}`} />

                    {/* Output Line (To Left Neighbor OR U-Turn Start) */}
                    {/* Fixed: Connect to left neighbor OR connect to U-turn if it's the turning card */}
                    {(colIndex > 0 || (colIndex === 0 && hasNextRowCard)) && (
                        <div className={`absolute ${lineY} left-[-1rem] right-1/2 h-4 ${borderSize} ${borderColor}`} />
                    )}

                    {/* U-Turn Down (Only at Col 0, if card below exists) */}
                    {colIndex === 0 && hasNextRowCard && (
                         <div className={`absolute ${lineY} left-[-3rem] w-[2rem] ${uTurnHeight} border-t-2 border-l-2 border-b-2 ${borderColor} rounded-l-[2rem] z-10`} />
                    )}
                </>
            )}
        </div>
    );
  };

  return (
    <section id="projects" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Réalisations & Projets</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
             Une sélection de projets innovants démontrant mes capacités en architecture et développement full-stack.
          </p>
        </motion.div>

        {/* 
          Grid Setup:
          - lg:grid-cols-4 (Desktop - Snake Layout)
          - md:grid-cols-2 (Tablet - Normal Grid)
          - grid-cols-1 (Mobile - Normal Grid)
          - Gap-8 (2rem) horizontal
          - Gap-y-24 (6rem) vertical for snake vertical segments
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-y-24">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-full" 
              >
                {/* Render Snake Line Segments (Desktop Only) */}
                {getSnakeLine(index, project.date)}
                
                <div
                  onClick={() => setSelectedProject(project)}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer group h-full flex flex-col relative z-20"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium px-4 py-2 border border-white rounded-full">Voir Détails</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        {/* Mobile Only Year Badge */}
                        <span className="lg:hidden text-xs text-gray-500 border border-white/10 px-2 py-0.5 rounded flex items-center gap-1">
                            <Calendar size={10} /> {project.year}
                        </span>
                     </div>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">+more</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900 border border-white/10 w-full max-w-3xl rounded-2xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="h-64 relative">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-6 left-6">
                    <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                    <p className="text-blue-400">{selectedProject.date}</p>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">À propos du projet</h3>
                    <p className="text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription}
                    </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <a
                    href={selectedProject.link}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-lg font-medium border border-white/10 transition-colors"
                  >
                    <Github size={18} />
                    Code Source
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;