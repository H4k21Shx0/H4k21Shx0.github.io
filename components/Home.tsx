import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  // Generate random particles config
  const particles = useMemo(() => {
    return Array.from({ length: 300 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // Slightly reduced max size for better density
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      color: Math.random() > 0.6 ? 'bg-blue-400' : 'bg-white',
    }));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        
        {/* Flying Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${p.color}`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              willChange: 'transform, opacity', // Performance optimization
            }}
            animate={{
              y: [0, -100, 0], // Float up and down slightly
              x: [0, Math.random() * 30 - 15, 0], // Drift sideways
              opacity: [0, 0.4, 0], // Fade in and out
              scale: [0, 1.2, 0], // Pulse size
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm md:text-base font-medium backdrop-blur-sm"
        >
          {t.home.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl 2xl:text-9xl font-bold tracking-tighter text-white mb-8"
        >
          Mohammed Amine <br className="md:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{t.home.title_span}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light mb-10"
        >
          {t.home.subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
        >
          {t.home.desc}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <ArrowDown className="text-gray-500 w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Home;