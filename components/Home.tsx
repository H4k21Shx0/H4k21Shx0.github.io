import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  // Generate random particles config
  const particles = useMemo(() => {
    return Array.from({ length: 250 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      color: Math.random() > 0.6 ? 'bg-blue-400' : 'bg-white',
    }));
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
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

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium backdrop-blur-sm"
        >
          Ingénieur Informatique “ Systèmes & Réseaux ”
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
        >
          Mohammed Amine <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Oussada</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl text-gray-400 font-light mb-8"
        >
          Architecte de solutions numériques & Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Je conçois des applications web performantes et scalables en utilisant les dernières technologies comme NestJS et Next.js. Transformons vos idées en réalité digitale.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-500 w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Home;