import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Globe, Heart, 
  Zap, Cpu, ArrowRight, Sparkles
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

// Configuration for positions to sync SVG and DOM elements
const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 640; // Increased height to accommodate taller cards
const CARD_WIDTH = 280;
const HALF_CARD = CARD_WIDTH / 2;

const Contact: React.FC = () => {
    const { t } = useLanguage();

    // Data Structure
    const RESOLUTIONS = [
    {
        id: 1,
        year: "2025",
        type: "CORE NODE",
        icon: Brain,
        title: t.contact.cards.core.title,
        desc: t.contact.cards.core.desc,
        specs: ["Rust Backend", "LLM Integration", "Latency < 50ms"],
        themeColor: "blue",
        gradient: "from-blue-500 to-cyan-400",
        shadow: "shadow-blue-500/20",
        border: "group-hover:border-blue-500/50",
        textAccent: "text-blue-400",
        xPercent: 20, // 20% Left (Center x=240)
        yPos: 190,    // Adjusted down for taller cards
    },
    {
        id: 2,
        year: "2026",
        type: "RELAY NODE",
        icon: Globe,
        title: t.contact.cards.relay.title,
        desc: t.contact.cards.relay.desc,
        specs: ["Edge Compute", "Green Tech", "Global Mesh"],
        themeColor: "purple",
        gradient: "from-purple-500 to-pink-400",
        shadow: "shadow-purple-500/20",
        border: "group-hover:border-purple-500/50",
        textAccent: "text-purple-400",
        xPercent: 50, // 50% Center (Center x=600)
        yPos: 390,    // Dropped further down to prevent overlap
    },
    {
        id: 3,
        year: "2027",
        type: "EDGE NODE",
        icon: Heart,
        title: t.contact.cards.edge.title,
        desc: t.contact.cards.edge.desc,
        specs: ["Open Source", "DAO Governance", "Ethical AI"],
        themeColor: "amber",
        gradient: "from-amber-500 to-orange-400",
        shadow: "shadow-amber-500/20",
        border: "group-hover:border-amber-500/50",
        textAccent: "text-amber-400",
        xPercent: 80, // 80% Right (Center x=960)
        yPos: 190,    // Adjusted down for taller cards
    }
    ];

    // Helper to generate the Pipeline Path (Orthogonal lines with rounded corners)
    const generatePipelinePath = () => {
        const r = 20; // Small radius for "pipeline" look
        
        // Centers of the cards
        const p1 = { x: 240, y: RESOLUTIONS[0].yPos };
        const p2 = { x: 600, y: RESOLUTIONS[1].yPos };
        const p3 = { x: 960, y: RESOLUTIONS[2].yPos };

        // Card Boundaries (used to calculate midpoints for turns)
        const p1_right = p1.x + HALF_CARD;
        const p2_left = p2.x - HALF_CARD;
        const p2_right = p2.x + HALF_CARD;
        const p3_left = p3.x - HALF_CARD;

        // Midpoints for vertical drops
        const mid1 = (p1_right + p2_left) / 2; // Between Card 1 and 2
        const mid2 = (p2_right + p3_left) / 2; // Between Card 2 and 3

        // Draw Orthogonal Path with Fillets
        // Logic: Center -> Right Edge -> Midpoint -> Turn Vertical -> Drop -> Turn Horizontal -> Left Edge -> Center
        return `
        M 0 ${p1.y}
        L ${mid1 - r} ${p1.y}
        Q ${mid1} ${p1.y} ${mid1} ${p1.y + (p2.y > p1.y ? r : -r)}
        L ${mid1} ${p2.y - (p2.y > p1.y ? r : -r)}
        Q ${mid1} ${p2.y} ${mid1 + r} ${p2.y}
        L ${mid2 - r} ${p2.y}
        Q ${mid2} ${p2.y} ${mid2} ${p2.y - (p2.y > p3.y ? r : -r)}
        L ${mid2} ${p3.y + (p2.y > p3.y ? r : -r)}
        Q ${mid2} ${p3.y} ${mid2 + r} ${p3.y}
        L 1200 ${p3.y}
        `;
    };

  return (
    <section id="contact" className="min-h-screen bg-[#0b0f19] relative overflow-hidden flex flex-col pt-24 pb-12">
       
       {/* Background - Fully cleared (No Radial Gradient) */}
       <div className="absolute inset-0 pointer-events-none">
          {/* Background is flat #0b0f19 defined in parent section class */}
       </div>

       <div className="max-w-[1600px] mx-auto px-6 relative z-10 flex-grow flex flex-col w-full">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/10 text-blue-300 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg">
                <Cpu size={12} className="animate-pulse" /> {t.contact.badge}
             </div>
             <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                {t.contact.title_prefix} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">{t.contact.title_span}</span>
             </h2>
             <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                {t.contact.desc}
             </p>
          </motion.div>

          {/* --- DESKTOP PIPELINE TIMELINE --- */}
          {/* Container Height MUST match VIEWBOX_HEIGHT for accurate Y-positioning */}
          <div className="hidden lg:block relative w-full h-[640px] mb-12">
             {/* 
                SVG Pipeline
             */}
             <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} preserveAspectRatio="none">
                 <defs>
                    {/* Updated Gradient: Fade In/Out at tips, match Card colors (Blue -> Purple -> Amber) */}
                    <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="10%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="25%" stopColor="#22d3ee" /> {/* Cyan hint for Card 1 */}
                        <stop offset="50%" stopColor="#a855f7" /> {/* Purple for Card 2 */}
                        <stop offset="75%" stopColor="#e879f9" /> {/* Pink hint for Card 3 trans */}
                        <stop offset="90%" stopColor="#f59e0b" stopOpacity="1" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                    </linearGradient>
                    <filter id="pipelineGlow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                 </defs>
                 
                 {/* The Pipeline Path */}
                 <motion.path 
                    d={generatePipelinePath()}
                    fill="none"
                    stroke="url(#pipelineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#pipelineGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                 />
                 
                 {/* Data Packets (Animated Dots) */}
                 {[0, 1].map((i) => (
                    <motion.circle key={i} r="4" fill="white" filter="url(#pipelineGlow)">
                        <animateMotion 
                            dur="5s"
                            repeatCount="indefinite" 
                            path={generatePipelinePath()}
                            begin={`${i * 2.5}s`}
                            keyPoints="0;1"
                            keyTimes="0;1"
                            calcMode="linear"
                        />
                    </motion.circle>
                 ))}
             </svg>

             {/* Cards Positioned on Stream */}
             {RESOLUTIONS.map((res, i) => {
                 return (
                     <div 
                        key={res.id} 
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${res.xPercent}%`, top: `${res.yPos}px` }}
                     >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + (i * 0.3) }}
                            className={`
                                relative w-[280px] bg-[#0b0f19] border border-white/10 
                                rounded-lg transition-all duration-500 group z-20
                                hover:shadow-2xl ${res.shadow} hover:border-${res.themeColor}-500/50
                                flex flex-col overflow-hidden min-h-[320px]
                            `}
                        >
                            {/* Input Port (Left) - Aligned with Y Center */}
                            <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#0b0f19] border-2 border-${res.themeColor}-500 rounded-full z-30 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${res.themeColor}-500`}>
                                <div className={`absolute inset-0 rounded-full bg-${res.themeColor}-500 animate-ping opacity-20`} />
                            </div>

                            {/* Output Port (Right) - Aligned with Y Center */}
                            <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#0b0f19] border-2 border-${res.themeColor}-500 rounded-full z-30 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${res.themeColor}-500`}></div>

                            {/* Card Content */}
                            <div className="p-1 h-full flex flex-col">
                                <div className="bg-slate-900/50 rounded border border-white/5 p-5 relative overflow-hidden flex-grow flex flex-col">
                                    {/* Scanline Effect */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 pointer-events-none bg-[length:100%_2px,3px_100%] opacity-20" />
                                    
                                    <div className="relative z-10 flex flex-col flex-grow">
                                        {/* Header */}
                                        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                                            <div className="flex items-center gap-2">
                                                <res.icon className={`${res.textAccent}`} size={16} />
                                                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${res.textAccent}`}>{res.type}</span>
                                            </div>
                                            <span className="text-[10px] text-gray-500 font-mono">{res.year}</span>
                                        </div>
                                        
                                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">{res.title}</h3>
                                        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow">
                                            {res.desc}
                                        </p>

                                        {/* Specs Grid */}
                                        <div className="grid grid-cols-1 gap-1.5 mt-auto">
                                            {res.specs.map((spec, idx) => (
                                                <div key={idx} className="flex items-center justify-between text-[10px] text-gray-400 bg-black/40 px-2 py-1.5 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                                                    <span>{spec}</span>
                                                    <Zap size={8} className={`${res.textAccent}`} />
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Hover Action */}
                                        <div className="absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ArrowRight size={14} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                     </div>
                 );
             })}
          </div>

          {/* --- MOBILE STACK (Vertical Stream) --- */}
          <div className="lg:hidden flex flex-col gap-8 mb-20 relative">
             {/* Vertical Line */}
             <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 opacity-50" />
             
             {RESOLUTIONS.map((res, i) => (
                 <motion.div
                    key={res.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="relative pl-12"
                 >
                    {/* Node Dot */}
                    <div className={`absolute left-6 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-[#0b0f19] border-2 border-${res.themeColor}-500 z-10 shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${res.themeColor}-500`} />

                    <div className={`p-5 rounded-xl bg-slate-900/80 border border-white/10 ${res.border} group min-h-[220px] flex flex-col`}>
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-2">
                                <res.icon className={`${res.textAccent}`} size={18} />
                                <span className="text-white font-bold">{res.title}</span>
                            </div>
                            <span className="text-xs font-mono text-gray-500">{res.year}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3 flex-grow">{res.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                             {res.specs.map((spec, idx) => (
                                <span key={idx} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-400 border border-white/5">
                                    {spec}
                                </span>
                            ))}
                        </div>
                    </div>
                 </motion.div>
             ))}
          </div>

          {/* Quote Section - Reduced Margin Bottom */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center mb-6 py-4 px-6"
          >
             <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-white/5 font-serif">"</div>
             <h3 className="text-2xl md:text-3xl font-light text-white leading-relaxed italic font-serif z-10 relative">
                {t.contact.quote}
             </h3>
             {/* Restored Separator */}
             <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-blue-500/50" />
                <Sparkles size={14} className="text-blue-400 fill-blue-400" />
                <div className="w-12 h-[1px] bg-blue-500/50" />
             </div>
          </motion.div>

          {/* New Closing Section - Reduced Top Margin */}
          <div className="flex flex-col items-center mt-4 pb-8 relative z-10">

              {/* Stylish TO BE CONTINUED - Reduced Bottom Margin */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-12 flex flex-col md:flex-row items-center md:items-baseline gap-4 md:gap-6"
              >
                  <motion.h1 
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter select-none filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] text-center md:text-left"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #60a5fa, #a855f7, #f59e0b, #60a5fa)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                      TO BE CONTINUED
                  </motion.h1>
                  
                  {/* Subtle animated dots inline */}
                  <div className="flex gap-3 mt-2 md:mt-0">
                      <motion.div 
                        animate={{ opacity: [0.3, 1, 0.3] }} 
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                        className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full" 
                      />
                      <motion.div 
                        animate={{ opacity: [0.3, 1, 0.3] }} 
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        className="w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full" 
                      />
                      <motion.div 
                        animate={{ opacity: [0.3, 1, 0.3] }} 
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        className="w-3 h-3 md:w-4 md:h-4 bg-amber-500 rounded-full" 
                      />
                  </div>
              </motion.div>

               {/* Authorship & Copyright - NOW LAST */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 0.6 }}
                 viewport={{ once: true }}
                 className="flex flex-col items-center text-center"
              >
                  <p className="text-sm font-light text-gray-300 tracking-wide mb-2">
                      {t.contact.footer_built} <span className="font-medium text-white">Mohammed Amine Oussada</span>
                  </p>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                      © {new Date().getFullYear()} {t.contact.footer_rights}
                  </p>
              </motion.div>

           </div>

       </div>

    </section>
  );
};

export default Contact;