import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, MapPin, Phone, Network, Cpu, Lock, Layers, Globe, Activity, Clock, Trophy, Briefcase, GitCommit, Radio, FolderOpen, X, Server, Wifi, ScanEye, MousePointerClick, Sparkles, Github, Linkedin, Shield, ExternalLink, Hexagon, Brain, Star } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { useLanguage } from './LanguageContext';

// Skill data adjusted for a Junior Profile (graduated 2023)
const skillsData = [
  { 
    subject: 'Networks', 
    A: 8.5, 
    fullMark: 10, 
    icon: Wifi, 
    color: '#06b6d4', 
    description: "Solid Foundations",
    details: {
        title: "Networking",
        stack: ["TCP/IP", "VLAN", "VPN", "VoIP"],
        metrics: [
            { label: "Theory", value: "Advanced" },
            { label: "Hands-on", value: "Confirmed" }
        ],
        subSkills: [
            { name: "Routing Basics", val: 85 },
            { name: "Protocol Analysis", val: 80 },
            { name: "Service Config", val: 75 }
        ]
    }
  }, 
  { 
    subject: 'Systems', 
    A: 9.0, 
    fullMark: 10, 
    icon: Server, 
    color: '#ec4899', 
    description: "Linux Passionate",
    details: {
        title: "Systems Admin",
        stack: ["Linux", "AD", "Bash", "Shell"],
        metrics: [
            { label: "Learning Speed", value: "Very High" },
            { label: "Automation", value: "Active" }
        ],
        subSkills: [
            { name: "Bash/Scripting", val: 92 },
            { name: "Server Setup", val: 85 },
            { name: "Hardening", val: 70 }
        ]
    }
  },
  { 
    subject: 'Software', 
    A: 8.2, 
    fullMark: 10, 
    icon: Layers, 
    color: '#10b981', 
    description: "Desktop & UI",
    details: {
        title: "Software Dev",
        stack: ["Python", "Qt/PyQt", "C/C++"],
        metrics: [
            { label: "Logic", value: "Strong" },
            { label: "UI Design", value: "Clean" }
        ],
        subSkills: [
            { name: "Python Core", val: 90 },
            { name: "C/C++ Foundations", val: 75 },
            { name: "App Logic", val: 80 }
        ]
    }
  },
  { 
    subject: 'Web Dev', 
    A: 7.5, 
    fullMark: 10, 
    icon: Globe, 
    color: '#3b82f6', 
    description: "Modern Foundations",
    details: {
        title: "Web Engineering",
        stack: ["HTML/CSS", "JS", "REST API"],
        metrics: [
            { label: "Responsive", value: "Expert" },
            { label: "Back-end", value: "Learning" }
        ],
        subSkills: [
            { name: "Frontend Layout", val: 85 },
            { name: "API Usage", val: 70 },
            { name: "JS Frameworks", val: 65 }
        ]
    }
  },
  { 
    subject: 'AI Integration', 
    A: 7.0, 
    fullMark: 10, 
    icon: Brain, 
    color: '#f59e0b', 
    description: "Explorer",
    details: {
        title: "AI & Innovation",
        stack: ["Prompting", "OpenAI", "API Logic"],
        metrics: [
            { label: "Curiosity", value: "Maximum" },
            { label: "Implementation", value: "Starter" }
        ],
        subSkills: [
            { name: "Prompt Eng.", val: 85 },
            { name: "AI Automation", val: 60 },
            { name: "Model Tuning", val: 40 }
        ]
    }
  },
  { 
    subject: 'Security', 
    A: 8.0, 
    fullMark: 10, 
    icon: Shield, 
    color: '#f43f5e', 
    description: "CTF Competitor",
    details: {
        title: "Cybersécurité",
        stack: ["Nmap", "Metasploit", "Forensics"],
        metrics: [
            { label: "Challenges", value: "Won" },
            { label: "Awareness", value: "High" }
        ],
        subSkills: [
            { name: "Forensics/OSINT", val: 85 },
            { name: "Vuln Research", val: 65 },
            { name: "Hardening", val: 70 }
        ]
    }
  },
  { 
    subject: 'Infra', 
    A: 7.2, 
    fullMark: 10, 
    icon: Activity, 
    color: '#8b5cf6', 
    description: "Modern Tools",
    details: {
        title: "Infrastructure",
        stack: ["Docker", "Ansible", "Grafana"],
        metrics: [
            { label: "Deployment", value: "Autonomous" },
            { label: "Cloud", value: "Learning" }
        ],
        subSkills: [
            { name: "Containerization", val: 80 },
            { name: "Automation", val: 70 },
            { name: "Monitoring", val: 75 }
        ]
    }
  },
  { 
    subject: 'Soft Skills', 
    A: 9.5, 
    fullMark: 10, 
    icon: Star, 
    color: '#14b8a6', 
    description: "Collaborative",
    details: {
        title: "Personality & Soft Skills",
        stack: ["Adaptability", "Autonomy", "Agile"],
        metrics: [
            { label: "Reliability", value: "Top" },
            { label: "Communication", value: "Clear" }
        ],
        subSkills: [
            { name: "Fast Learning", val: 98 },
            { name: "Problem Solving", val: 90 },
            { name: "Leadership", val: 80 }
        ]
    }
  }
];

// --- ISOLATED CLOCK COMPONENT ---
const SystemClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const timer = setInterval(() => setTime(new Date()), 1000);
      return () => clearInterval(timer);
    }, []);
    
    return (
      <span className="text-[10px] font-mono text-gray-300">
        {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </span>
    );
};

// --- CUSTOM INTERACTIVE TICK ---
const CustomTick = ({ payload, x, y, cx, cy, activeSkill, setActiveSkill }: any) => {
    const index = skillsData.findIndex(s => s.subject === payload.value);
    const isActive = activeSkill === index;
    const dataItem = skillsData[index];
    
    if (index === -1) return null;

    const width = 110; 
    const height = 40;
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const offset = 12; 
    const finalX = dist > 0 ? x + (dx / dist) * offset : x;
    const finalY = dist > 0 ? y + (dy / dist) * offset : y;
    const ratio = dataItem.A / dataItem.fullMark;
    const pointX = cx + (x - cx) * ratio;
    const pointY = cy + (y - cy) * ratio;

    let xPos = finalX - width / 2;
    let justifyContent = 'justify-center';

    if (Math.abs(dx) < 10) {
        xPos = finalX - width / 2;
        justifyContent = 'justify-center';
    } else if (dx > 0) {
        xPos = finalX; 
        justifyContent = 'justify-start';
    } else {
        xPos = finalX - width;
        justifyContent = 'justify-end';
    }
    const yPos = finalY - height / 2;

    return (
        <g>
            {isActive && (
                <>
                    <line x1={cx} y1={cy} x2={pointX} y2={pointY} stroke={dataItem.color} strokeWidth={2} strokeDasharray="4 4" opacity={0.8} />
                    <circle cx={pointX} cy={pointY} r={6} fill={dataItem.color} stroke="#fff" strokeWidth={2} />
                    <circle cx={pointX} cy={pointY} r={12} fill={dataItem.color} opacity={0.2} />
                </>
            )}
            <foreignObject x={xPos} y={yPos} width={width} height={height} style={{ overflow: 'visible' }}>
                <div className={`w-full h-full flex items-center ${justifyContent} group`} onClick={() => setActiveSkill(isActive ? null : index)} style={{ "--hover-color": dataItem.color, outline: 'none' } as React.CSSProperties} tabIndex={-1} >
                    <div className={`cursor-pointer px-2 py-1.5 rounded-lg border text-[10px] md:text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300 whitespace-nowrap ${isActive ? 'bg-slate-900 border-opacity-100 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-slate-900/30 border-white/5 text-gray-500 group-hover:border-[var(--hover-color)] group-hover:text-[var(--hover-color)]'}`} style={{ borderColor: isActive ? dataItem.color : undefined, color: isActive ? '#fff' : undefined }}>
                        {payload.value}
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

const About: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const { t } = useLanguage();

  const statsData = [
    { label: t.about.stats.projects, value: "05 Builds", sub: t.about.stats.sub_projects, icon: FolderOpen, color: "text-blue-400", border: "from-blue-500" },
    { label: t.about.stats.experience, value: "Junior+", sub: t.about.stats.sub_experience, icon: Clock, color: "text-purple-400", border: "from-purple-500" },
    { label: t.about.stats.awards, value: "CTF Wins", sub: t.about.stats.sub_awards, icon: Trophy, color: "text-yellow-400", border: "from-yellow-500" },
    { label: t.about.stats.contribs, value: "Training", sub: t.about.stats.sub_contribs, icon: GitCommit, color: "text-emerald-400", border: "from-emerald-500" },
    { label: t.about.stats.role, value: "Engineer", sub: t.about.stats.sub_role, icon: Briefcase, color: "text-orange-400", border: "from-orange-500" },
    { label: t.about.stats.status, value: "Open", sub: t.about.stats.sub_status, icon: Radio, color: "text-green-400", border: "from-green-500" },
  ];

  return (
    <section id="about" className="py-20 md:py-24 2xl:py-32 bg-dark relative overflow-hidden">
      <style>{`.recharts-wrapper, .recharts-surface, foreignObject { outline: none !important; }`}</style>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px]" />
      </div>
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 md:mb-20 text-center">
          <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-white mb-6">{t.about.title} <span className="text-blue-500">{t.about.subtitle}</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg 2xl:text-xl">{t.about.desc}</p>
        </motion.div>
        <div className="flex flex-col xl:flex-row gap-8 items-start justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full max-w-md xl:max-w-none xl:w-[400px] flex-shrink-0 bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-3xl p-0 h-fit xl:sticky xl:top-24 shadow-2xl z-20 overflow-hidden group hover:border-blue-500/20 transition-colors duration-500 mx-auto xl:mx-0">
            <div className="h-32 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-900 relative">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                 <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
            <div className="px-8 pb-8 -mt-16 relative">
                <div className="w-32 h-32 rounded-2xl border-4 border-slate-900 bg-slate-800 overflow-hidden mb-4 shadow-xl relative mx-auto group-hover:scale-105 transition-transform duration-500">
                    <img src="https://picsum.photos/seed/developer_avatar_new/400/400" alt="Profile" className="w-full h-full object-cover"/>
                </div>
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white">Mohammed Amine</h3>
                    <p className="text-blue-400 font-medium text-sm mt-1">{t.about.role}</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-white/5 space-y-5 mb-4">
                    {[
                        { icon: Mail, label: t.about.identity_card.email, val: 'mohammed.amine.oussada@proton.me', color: 'text-blue-400' },
                        { icon: Phone, label: t.about.identity_card.phone, val: '+213 562 227 055', color: 'text-green-400' },
                        { icon: MapPin, label: t.about.identity_card.location, val: 'Tizi Ouzou, Algeria', color: 'text-red-400' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                            <div className={`p-2.5 bg-white/5 rounded-lg ${item.color} bg-opacity-10 group-hover/item:bg-opacity-20`}><item.icon size={18} /></div>
                            <div className="overflow-hidden">
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{item.label}</p>
                                <p className="text-sm text-gray-200 font-medium truncate">{item.val}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-slate-900/50 rounded-xl p-5 border border-white/5 mb-8">
                     <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-3">Professional Channels</p>
                     <div className="grid grid-cols-2 gap-3">
                         {[
                            { icon: Github, label: 'GitHub', val: 'H4k21Shx0', color: 'text-gray-200', border: 'hover:border-white/30', bg: 'hover:bg-white/5' },
                            { icon: Linkedin, label: 'LinkedIn', val: 'amine-oussada', color: 'text-blue-400', border: 'hover:border-blue-500/30', bg: 'hover:bg-blue-500/10' },
                            { icon: Shield, label: 'TryHackMe', val: 'Top Ranking', color: 'text-red-500', border: 'hover:border-red-500/30', bg: 'hover:bg-red-500/10' },
                            { icon: Hexagon, label: 'Portfolio', val: 'h4k21shx0', color: 'text-green-500', border: 'hover:border-green-500/30', bg: 'hover:bg-green-500/10' },
                         ].map((item, i) => (
                             <a key={i} href="#" className={`flex flex-col p-3 rounded-lg bg-white/5 border border-transparent transition-all group/link ${item.border} ${item.bg}`}>
                                 <div className="flex items-center gap-2 mb-2">
                                     <item.icon size={16} className={`${item.color} opacity-80 group-hover/link:opacity-100`} />
                                     <span className="text-xs font-bold text-gray-300 group-hover/link:text-white transition-colors">{item.label}</span>
                                 </div>
                                 <div className="flex items-center justify-between">
                                     <span className="text-[10px] text-gray-500 font-mono truncate">{item.val}</span>
                                     <ExternalLink size={10} className="text-gray-600 group-hover/link:text-white transition-colors" />
                                 </div>
                             </a>
                         ))}
                     </div>
                </div>
                <button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-blue-50 hover:scale-[1.02] shadow-lg shadow-white/5 text-sm"><Download size={18} /><span>{t.about.download}</span></button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-grow w-full xl:max-w-none">
             <div className="bg-slate-800/20 rounded-3xl backdrop-blur-sm shadow-2xl relative overflow-hidden flex flex-col h-full min-h-[550px]">
                <div className="px-6 py-4 flex justify-between items-center border-b border-white/5 bg-white/5">
                    <div className="flex items-center gap-3"><Activity size={18} className="text-blue-400" /><div><h3 className="text-sm font-bold text-white leading-tight">{t.about.chart_title}</h3><p className="text-gray-400 text-[10px] uppercase tracking-wider hidden sm:block">{activeSkill !== null ? 'Diagnostic Mode' : t.about.chart_sub}</p></div></div>
                    <div className="flex items-center gap-3"><div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-black/20 rounded border border-white/5"><Clock size={12} className="text-gray-400" /><SystemClock /></div><div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full"><div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" /><span className="text-[10px] font-bold text-emerald-400 uppercase">Live</span></div></div>
                </div>
                <div className="flex flex-col lg:flex-row flex-grow">
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center bg-slate-900/30 p-4 min-h-[350px] sm:min-h-[400px] outline-none overflow-visible">
                        <div className="relative w-full h-[350px] sm:h-[400px] outline-none">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={skillsData}>
                                    <defs>
                                        <linearGradient id="radarFill" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/><stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/></linearGradient>
                                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                    </defs>
                                    <PolarGrid gridType="polygon" stroke="#94a3b8" strokeOpacity={0.1} />
                                    <PolarAngleAxis dataKey="subject" axisLine={false} tickLine={false} tick={(props) => (<CustomTick {...props} activeSkill={activeSkill} setActiveSkill={setActiveSkill} />)} />
                                    <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                    <Radar name="Skills" dataKey="A" stroke="#60a5fa" strokeWidth={2} fill="url(#radarFill)" fillOpacity={0.7} isAnimationActive={true} filter="url(#glow)" activeDot={false} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative bg-slate-950/30 flex flex-col font-mono overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
                        <AnimatePresence mode='wait'>
                            {activeSkill !== null ? (
                                <motion.div key="detail" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex flex-col h-full p-6 md:p-8 relative">
                                    <div className={`absolute top-0 right-0 p-6 opacity-10`}>{React.createElement(skillsData[activeSkill].icon, { size: 120, color: skillsData[activeSkill].color })}</div>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6"><div><div className="flex items-center gap-2 mb-1"><span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Evolution Analysis</span><span className="text-[10px] text-white/20">ID: {skillsData[activeSkill].subject.toUpperCase()}</span></div><h3 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ color: skillsData[activeSkill].color }}>{skillsData[activeSkill].details.title}</h3><p className="text-xs md:text-sm text-gray-400 max-w-[240px]">{skillsData[activeSkill].description}</p></div><button onClick={() => setActiveSkill(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-500 hover:text-white"><X size={20} /></button></div>
                                        <div className="grid grid-cols-2 gap-3 mb-6">{skillsData[activeSkill].details.metrics.map((m, i) => (<div key={i} className="bg-white/5 border border-white/5 rounded-lg p-3"><div className="text-[10px] text-gray-500 uppercase">{m.label}</div><div className="text-lg font-bold text-white">{m.value}</div></div>))}</div>
                                        <div className="mb-6 flex-grow"><div className="text-[10px] text-gray-500 uppercase mb-3">Mastery Points</div><div className="space-y-3">{skillsData[activeSkill].details.subSkills.map((sub, i) => (<div key={i} className="flex items-center gap-3"><div className="w-24 md:w-28 text-xs md:text-sm text-gray-300 truncate">{sub.name}</div><div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${sub.val}%` }} transition={{ delay: 0.2 + (i * 0.1) }} className="h-full rounded-full" style={{ backgroundColor: skillsData[activeSkill].color }} /></div><div className="text-[10px] text-gray-500 w-8 text-right">{sub.val}%</div></div>))}</div></div>
                                        <div className="mt-auto pt-4 border-t border-white/5"><div className="flex flex-wrap gap-2">{skillsData[activeSkill].details.stack.map((tech, i) => (<span key={i} className="text-[10px] md:text-xs px-2.5 py-1 bg-white/5 text-gray-300 rounded border border-white/5">{tech}</span>))}</div></div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div key="instruction" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full p-6 md:p-8 relative overflow-hidden justify-center min-h-[300px]">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                                    <div className="relative z-10 flex flex-col h-full justify-center"><div className="mb-8"><div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"><ScanEye className="text-blue-400" size={24} /></div><h3 className="text-xl md:text-2xl font-bold text-white mb-3">Growth Intelligence Matrix</h3><p className="text-gray-400 text-sm leading-relaxed max-w-sm">Visualizing the progress of my core competencies. Select any node to view my current technical maturity and stacks.</p></div><div className="mt-auto flex items-center gap-3 text-xs text-gray-500 bg-black/20 p-3 rounded-lg border border-white/5 font-mono"><div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" /><span>Analyzing Potential...</span></div></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="bg-slate-900/80 border-t border-white/5">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/5 border-b border-white/5 md:border-b-0">{statsData.map((stat, idx) => (<div key={idx} className="p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group relative overflow-hidden"><div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-${stat.border.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} /><div className="flex items-center gap-2 mb-1"><stat.icon size={16} className={`${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} /><span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold group-hover:text-gray-400 transition-colors">{stat.label}</span></div><div className="text-center"><div className="text-lg font-bold text-white font-mono leading-none mb-1">{stat.value}</div><div className={`text-[10px] font-medium ${stat.color} bg-white/5 px-2 py-0.5 rounded-sm inline-block`}>{stat.sub}</div></div></div>))}</div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;