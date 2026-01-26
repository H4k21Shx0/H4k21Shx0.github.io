import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, MapPin, Phone, Network, Cpu, Lock, Layers, Globe, Activity, Clock, Trophy, Briefcase, GitCommit, Radio, FolderOpen, X, Server, Wifi, Zap, Hexagon, Code, Database, Terminal, ScanEye, MousePointerClick, Sparkles, Github, Linkedin, Shield, ExternalLink, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Enhanced Data
const skillsData = [
  { 
    subject: 'Network', 
    A: 8, 
    fullMark: 10, 
    icon: Network, 
    color: '#06b6d4', 
    description: "Infrastructure Arch.",
    details: {
        title: "Network Ops",
        stack: ["AWS VPC", "Cisco CLI", "Wireshark", "Nginx"],
        metrics: [
            { label: "Uptime", value: "99.9%" },
            { label: "Latency", value: "12ms" }
        ],
        subSkills: [
            { name: "Cloud Topology", val: 95 },
            { name: "Protocol Analysis", val: 85 },
            { name: "Firewall Config", val: 90 }
        ]
    }
  }, 
  { 
    subject: 'Embedded', 
    A: 7, 
    fullMark: 10, 
    icon: Cpu, 
    color: '#8b5cf6', 
    description: "IoT & Firmware",
    details: {
        title: "Embedded Systems",
        stack: ["STM32", "FreeRTOS", "I2C/SPI", "KiCad"],
        metrics: [
            { label: "RTOS Tasks", value: "12" },
            { label: "Memory", value: "32KB" }
        ],
        subSkills: [
            { name: "Firmware Dev", val: 92 },
            { name: "PCB Design", val: 75 },
            { name: "Driver Dev", val: 88 }
        ]
    }
  },
  { 
    subject: 'Systems', 
    A: 7.5, 
    fullMark: 10, 
    icon: Server, 
    color: '#ec4899', 
    description: "Linux Kernel/OS",
    details: {
        title: "System Admin",
        stack: ["Linux", "Bash", "Docker", "Kernel"],
        metrics: [
            { label: "Shell", value: "ZSH" },
            { label: "Nodes", value: "8" }
        ],
        subSkills: [
            { name: "Shell Scripting", val: 90 },
            { name: "Virtualization", val: 85 },
            { name: "OS Tuning", val: 80 }
        ]
    }
  },
  { 
    subject: 'Security', 
    A: 6, 
    fullMark: 10, 
    icon: Lock, 
    color: '#f43f5e', 
    description: "Cybersec Ops",
    details: {
        title: "Cyber Security",
        stack: ["Kali", "Metasploit", "Burp Suite", "AES"],
        metrics: [
            { label: "CTFs", value: "15" },
            { label: "Audits", value: "4" }
        ],
        subSkills: [
            { name: "Penetration", val: 82 },
            { name: "Cryptography", val: 85 },
            { name: "Forensics", val: 78 }
        ]
    }
  },
  { 
    subject: 'Soft. Dev', 
    A: 6.5, 
    fullMark: 10, 
    icon: Layers, 
    color: '#3b82f6', 
    description: "Architecture Patterns",
    details: {
        title: "Software Arch",
        stack: ["Clean Arch", "Solid", "Design Patterns", "UML"],
        metrics: [
            { label: "Repos", value: "50+" },
            { label: "Lines", value: "100k" }
        ],
        subSkills: [
            { name: "Microservices", val: 88 },
            { name: "OOP/FP", val: 85 },
            { name: "Testing", val: 80 }
        ]
    }
  },
  { 
    subject: 'Web Dev', 
    A: 5, 
    fullMark: 10, 
    icon: Globe, 
    color: '#10b981', 
    description: "Frontend/Backend",
    details: {
        title: "Full Stack Web",
        stack: ["React", "NestJS", "Tailwind", "Postgres"],
        metrics: [
            { label: "Lighthouse", value: "100" },
            { label: "APIs", value: "REST" }
        ],
        subSkills: [
            { name: "React/Next", val: 90 },
            { name: "API Design", val: 85 },
            { name: "DB Schema", val: 80 }
        ]
    }
  },
  { 
    subject: 'AI', 
    A: 3, 
    fullMark: 10, 
    icon: Wifi, 
    color: '#f59e0b', 
    description: "Machine Learning",
    details: {
        title: "AI Integration",
        stack: ["Python", "TensorFlow", "OpenAI", "RAG"],
        metrics: [
            { label: "Models", value: "2" },
            { label: "Datasets", value: "5GB" }
        ],
        subSkills: [
            { name: "Prompt Eng", val: 95 },
            { name: "Integration", val: 80 },
            { name: "Training", val: 40 }
        ]
    }
  },
];

const statsData = [
    { label: "Projects", value: "42 / 45", sub: "93% Shipped", icon: FolderOpen, color: "text-blue-400", border: "from-blue-500" },
    { label: "Experience", value: "05+ Yrs", sub: "Senior Level", icon: Clock, color: "text-purple-400", border: "from-purple-500" },
    { label: "Awards", value: "07 Wins", sub: "Hackathons", icon: Trophy, color: "text-yellow-400", border: "from-yellow-500" },
    { label: "Contribs", value: "1.2k+", sub: "This Year", icon: GitCommit, color: "text-emerald-400", border: "from-emerald-500" },
    { label: "Role", value: "Tech Lead", sub: "@TechFlow", icon: Briefcase, color: "text-orange-400", border: "from-orange-500" },
    { label: "Status", value: "Online", sub: "Open to Work", icon: Radio, color: "text-green-400", border: "from-green-500" },
];

// --- ISOLATED CLOCK COMPONENT ---
// Prevents main component re-renders that cause Chart flickering
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
    
    // Positioning logic:
    const width = 130;
    const height = 40;
    
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const offset = 20; // Increased offset for bigger chart
    
    // Calculate position slightly outside the chart radius
    const finalX = dist > 0 ? x + (dx / dist) * offset : x;
    const finalY = dist > 0 ? y + (dy / dist) * offset : y;

    // Calculate the data point position on the radar chart (The "Blue Shape" edge)
    // We assume (x,y) corresponds to the max value (10) of the axis
    const ratio = dataItem.A / dataItem.fullMark;
    const pointX = cx + (x - cx) * ratio;
    const pointY = cy + (y - cy) * ratio;

    // Alignment logic based on position relative to center
    let xPos = finalX - width / 2;
    let justifyContent = 'justify-center';

    // Heuristic: If close to center X, keep centered.
    // If to the right, align start of button to point.
    // If to the left, align end of button to point.
    if (Math.abs(dx) < 10) {
        xPos = finalX - width / 2;
        justifyContent = 'justify-center';
    } else if (dx > 0) {
        // Right side
        xPos = finalX; 
        justifyContent = 'justify-start';
    } else {
        // Left side
        xPos = finalX - width;
        justifyContent = 'justify-end';
    }
    
    const yPos = finalY - height / 2;

    return (
        <g>
            {/* Connection Line & Dot when Active */}
            {isActive && (
                <>
                    <line 
                        x1={cx} y1={cy} x2={pointX} y2={pointY} 
                        stroke={dataItem.color} 
                        strokeWidth={2} 
                        strokeDasharray="4 4" 
                        opacity={0.8}
                    />
                     {/* Data Point Dot */}
                    <circle 
                        cx={pointX} 
                        cy={pointY} 
                        r={6} 
                        fill={dataItem.color} 
                        stroke="#fff" 
                        strokeWidth={2} 
                    />
                     {/* Glow */}
                    <circle 
                        cx={pointX} 
                        cy={pointY} 
                        r={12} 
                        fill={dataItem.color} 
                        opacity={0.2} 
                    />
                </>
            )}
            
            <foreignObject x={xPos} y={yPos} width={width} height={height} style={{ overflow: 'visible' }}>
                <div 
                    className={`w-full h-full flex items-center ${justifyContent} group`}
                    onClick={() => setActiveSkill(isActive ? null : index)}
                    style={{ "--hover-color": dataItem.color, outline: 'none' } as React.CSSProperties}
                    tabIndex={-1} // Prevents keyboard focus ring
                >
                    <div 
                        className={`
                            cursor-pointer px-3 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-300
                            ${isActive 
                                ? 'bg-slate-900 border-opacity-100 shadow-[0_0_20px_rgba(0,0,0,0.5)]' 
                                : 'bg-slate-900/30 border-white/5 text-gray-500 group-hover:border-[var(--hover-color)] group-hover:text-[var(--hover-color)]'
                            }
                        `}
                        style={{
                            borderColor: isActive ? dataItem.color : undefined,
                            color: isActive ? '#fff' : undefined,
                        }}
                    >
                        {payload.value}
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

const About: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  return (
    <section id="about" className="py-16 md:py-24 bg-dark relative overflow-hidden">
      {/* CSS Override for Recharts Axis Outline and Wrapper */}
      <style>{`
        /* Aggressive outline removal for all chart elements */
        .recharts-wrapper,
        .recharts-wrapper *,
        .recharts-surface,
        .recharts-surface *,
        .recharts-layer,
        .recharts-layer *,
        .recharts-sector,
        .recharts-sector *,
        .recharts-polygon,
        .recharts-polygon *,
        foreignObject,
        foreignObject * {
            outline: none !important;
        }
      `}</style>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[80px]" />
      </div>
      
      {/* Increased container max-width from 100rem to full with constraint */}
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Profil <span className="text-blue-500">&</span> Compétences
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
             Un aperçu détaillé de mon identité professionnelle, de mes statistiques et de mon expertise technique.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left Column - Identity Card - WIDENED */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[360px] xl:w-[400px] flex-shrink-0 bg-slate-800/40 backdrop-blur-md border border-white/10 rounded-3xl p-0 h-fit lg:sticky lg:top-24 shadow-2xl z-20 overflow-hidden group hover:border-blue-500/20 transition-colors duration-500"
          >
            {/* Banner Background */}
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
                    <p className="text-blue-400 font-medium text-sm mt-1">System Architect & Engineer</p>
                </div>
                
                {/* Contact Info */}
                <div className="bg-slate-900/50 rounded-xl p-5 border border-white/5 space-y-5 mb-4">
                    {[
                        { icon: Mail, label: 'Email', val: 'contact@example.com', color: 'text-blue-400' },
                        { icon: Phone, label: 'Phone', val: '+33 6 12 34 56 78', color: 'text-green-400' },
                        { icon: MapPin, label: 'Location', val: 'Paris, France', color: 'text-red-400' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                            <div className={`p-2.5 bg-white/5 rounded-lg ${item.color} bg-opacity-10 group-hover/item:bg-opacity-20`}>
                                <item.icon size={18} />
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{item.label}</p>
                                <p className="text-sm text-gray-200 font-medium truncate">{item.val}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Socials & Platforms - GRID LAYOUT */}
                <div className="bg-slate-900/50 rounded-xl p-5 border border-white/5 mb-8">
                     <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-3">Social & CTF</p>
                     <div className="grid grid-cols-2 gap-3">
                         {[
                            { icon: Github, label: 'GitHub', val: '@amine-oss', color: 'text-gray-200', border: 'hover:border-white/30', bg: 'hover:bg-white/5' },
                            { icon: Linkedin, label: 'LinkedIn', val: 'Mohammed', color: 'text-blue-400', border: 'hover:border-blue-500/30', bg: 'hover:bg-blue-500/10' },
                            { icon: Shield, label: 'TryHackMe', val: 'Top 1%', color: 'text-red-500', border: 'hover:border-red-500/30', bg: 'hover:bg-red-500/10' },
                            { icon: Hexagon, label: 'HackTheBox', val: 'Guru Rank', color: 'text-green-500', border: 'hover:border-green-500/30', bg: 'hover:bg-green-500/10' },
                            { icon: Facebook, label: 'Facebook', val: '@amine', color: 'text-blue-600', border: 'hover:border-blue-600/30', bg: 'hover:bg-blue-600/10' },
                            { icon: Instagram, label: 'Instagram', val: '@dev_life', color: 'text-pink-500', border: 'hover:border-pink-500/30', bg: 'hover:bg-pink-500/10' },
                            { icon: MessageCircle, label: 'Discord', val: 'amine#8822', color: 'text-indigo-400', border: 'hover:border-indigo-500/30', bg: 'hover:bg-indigo-500/10' },
                         ].map((item, i) => (
                             <a key={i} href="#" className={`flex flex-col p-3 rounded-lg bg-white/5 border border-transparent transition-all group/link ${item.border} ${item.bg} ${i === 6 ? 'col-span-2' : ''}`}>
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

                <button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-blue-50 hover:scale-[1.02] shadow-lg shadow-white/5 text-sm">
                    <Download size={18} />
                    <span>Download Resume</span>
                </button>
            </div>
          </motion.div>

          {/* Right Column - Dashboard - TALLER */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-grow w-full"
          >
             {/* Main Dashboard Card */}
             <div className="bg-slate-800/20 rounded-3xl backdrop-blur-sm shadow-2xl relative overflow-hidden flex flex-col h-full min-h-[550px]">
                
                {/* 1. Compact Header */}
                <div className="px-6 py-4 flex justify-between items-center border-b border-white/5 bg-white/5">
                    <div className="flex items-center gap-3">
                        <Activity size={18} className="text-blue-400" />
                        <div>
                            <h3 className="text-sm font-bold text-white leading-tight">System Monitor</h3>
                            <p className="text-gray-400 text-[10px] uppercase tracking-wider hidden sm:block">
                                {activeSkill !== null ? 'Diagnostic Mode' : 'Real-time Metrics'}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                         <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-black/20 rounded border border-white/5">
                            <Clock size={12} className="text-gray-400" />
                            <SystemClock />
                         </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_#34d399]" />
                            <span className="text-[10px] font-bold text-emerald-400 uppercase">Live</span>
                        </div>
                    </div>
                </div>

                {/* 2. Split Content Body (Chart + Dynamic Info) */}
                <div className="flex flex-col md:flex-row flex-grow">
                    
                    {/* Left Side: Enhanced Radar Chart - LARGER */}
                    <div className="w-full md:w-1/2 relative flex items-center justify-center bg-slate-900/30 p-4 overflow-hidden min-h-[425px] outline-none">
                        
                        <div className="relative w-full h-[470px] outline-none">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={skillsData}>
                                    <defs>
                                        <linearGradient id="radarFill" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                                        </linearGradient>
                                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                            <feMerge>
                                                <feMergeNode in="coloredBlur"/>
                                                <feMergeNode in="SourceGraphic"/>
                                            </feMerge>
                                        </filter>
                                    </defs>
                                    
                                    {/* Grid Lines */}
                                    <PolarGrid gridType="polygon" stroke="#94a3b8" strokeOpacity={0.1} />
                                    
                                    {/* Axes / Ticks */}
                                    <PolarAngleAxis 
                                        dataKey="subject" 
                                        axisLine={false}
                                        tickLine={false}
                                        tick={(props) => (
                                            <CustomTick 
                                                {...props} 
                                                activeSkill={activeSkill} 
                                                setActiveSkill={setActiveSkill} 
                                            />
                                        )}
                                    />
                                    
                                    <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                                    
                                    {/* The Data Shape */}
                                    <Radar
                                        name="Skills"
                                        dataKey="A"
                                        stroke="#60a5fa"
                                        strokeWidth={2}
                                        fill="url(#radarFill)"
                                        fillOpacity={0.7}
                                        isAnimationActive={true}
                                        filter="url(#glow)"
                                        activeDot={false}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Right Side: Dynamic Content Panel */}
                    <div className="w-full md:w-1/2 relative bg-slate-950/30 flex flex-col font-mono overflow-hidden">
                        <AnimatePresence mode='wait'>
                            {activeSkill !== null ? (
                                // --- VIEW 1: Detail Skill Analysis ---
                                <motion.div 
                                    key="detail"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="flex flex-col h-full p-8 relative"
                                >
                                    <div className={`absolute top-0 right-0 p-6 opacity-10`}>
                                        {React.createElement(skillsData[activeSkill].icon, { size: 120, color: skillsData[activeSkill].color })}
                                    </div>
                                    
                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-8">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Module Analysis</span>
                                                    <span className="text-[10px] text-white/20">ID: {skillsData[activeSkill].subject.toUpperCase()}</span>
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-1" style={{ color: skillsData[activeSkill].color }}>
                                                    {skillsData[activeSkill].details.title}
                                                </h3>
                                                <p className="text-sm text-gray-400 max-w-[240px]">{skillsData[activeSkill].description}</p>
                                            </div>
                                            <button 
                                                onClick={() => setActiveSkill(null)}
                                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-500 hover:text-white"
                                            >
                                                <X size={20} />
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {skillsData[activeSkill].details.metrics.map((m, i) => (
                                                <div key={i} className="bg-white/5 border border-white/5 rounded-lg p-3">
                                                    <div className="text-[10px] text-gray-500 uppercase">{m.label}</div>
                                                    <div className="text-xl font-bold text-white">{m.value}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mb-6 flex-grow">
                                            <div className="text-[10px] text-gray-500 uppercase mb-3">Capabilities</div>
                                            <div className="space-y-3">
                                                {skillsData[activeSkill].details.subSkills.map((sub, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="w-28 text-sm text-gray-300 truncate">{sub.name}</div>
                                                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                                            <motion.div 
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${sub.val}%` }}
                                                                transition={{ delay: 0.2 + (i * 0.1) }}
                                                                className="h-full rounded-full"
                                                                style={{ backgroundColor: skillsData[activeSkill].color }}
                                                            />
                                                        </div>
                                                        <div className="text-[10px] text-gray-500 w-8 text-right">{sub.val}%</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-4 border-t border-white/5">
                                            <div className="flex flex-wrap gap-2">
                                                {skillsData[activeSkill].details.stack.map((tech, i) => (
                                                    <span key={i} className="text-xs px-2.5 py-1 bg-white/5 text-gray-300 rounded border border-white/5">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                // --- VIEW 2: Interactive Matrix Instructions (Replaces Process List) ---
                                <motion.div 
                                    key="instruction"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex flex-col h-full p-8 relative overflow-hidden justify-center"
                                >
                                     {/* Background Decor */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                    <div className="relative z-10 flex flex-col h-full justify-center">
                                        <div className="mb-8">
                                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-5 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                                <ScanEye className="text-blue-400" size={24} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-3">Interactive Skill Matrix</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                                Explore technical proficiencies by interacting with the radar chart. This diagnostic tool provides a granular view of capabilities across critical domains.
                                            </p>
                                        </div>

                                        <div className="space-y-4 mb-10">
                                            {/* Instruction Item 1 */}
                                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all hover:bg-white/10 group cursor-pointer">
                                                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                                    <MousePointerClick className="text-blue-400" size={18} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">Select a Node</h4>
                                                    <p className="text-xs text-gray-500 mt-1">Click any attribute label on the chart (e.g., NETWORK) to initialize detail view.</p>
                                                </div>
                                            </div>
                                            
                                            {/* Instruction Item 2 */}
                                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-all hover:bg-white/10 group cursor-pointer">
                                                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                                    <Sparkles className="text-purple-400" size={18} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">Reveal Metrics</h4>
                                                    <p className="text-xs text-gray-500 mt-1">Access specific sub-skill breakdowns, technology stacks, and performance statistics.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto flex items-center gap-3 text-xs text-gray-500 bg-black/20 p-3 rounded-lg border border-white/5 font-mono">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                            <span>System ready. Awaiting user selection...</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* 3. Stats Footer (High Density) - PRESERVED */}
                <div className="bg-slate-900/80 border-t border-white/5">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/5 border-b border-white/5 md:border-b-0">
                        {statsData.map((stat, idx) => (
                            <div key={idx} className="p-4 md:p-5 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group relative overflow-hidden">
                                {/* Top highlight border effect */}
                                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-${stat.border.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                
                                <div className="flex items-center gap-2 mb-1">
                                    <stat.icon size={16} className={`${stat.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold group-hover:text-gray-400 transition-colors">{stat.label}</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-white font-mono leading-none mb-1">{stat.value}</div>
                                    <div className={`text-[10px] font-medium ${stat.color} bg-white/5 px-2 py-0.5 rounded-sm inline-block`}>{stat.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;