import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal as TerminalIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Commande reçue! Message envoyé au backend fictif.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Contactez-moi</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Prêt à collaborer ? Lancez une session de communication via le terminal ci-dessous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-terminal border border-gray-700 rounded-lg shadow-2xl overflow-hidden font-mono"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-4 text-xs text-gray-400 flex items-center gap-2">
              <TerminalIcon size={12} />
              <span>user@portfolio:~/contact-me</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 text-green-400">
            <div className="mb-6">
              <p>Welcome to the contact interface v1.0.0</p>
              <p>Type your message below to initialize communication channel.</p>
              <br/>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="whitespace-nowrap text-blue-400">
                  <span className="text-green-400">➜</span> ~/name:
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="bg-transparent border-b border-gray-700 focus:border-green-400 outline-none w-full text-white px-2 py-1 placeholder-gray-700"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <label className="whitespace-nowrap text-blue-400">
                  <span className="text-green-400">➜</span> ~/email:
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="bg-transparent border-b border-gray-700 focus:border-green-400 outline-none w-full text-white px-2 py-1 placeholder-gray-700"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="whitespace-nowrap text-blue-400">
                  <span className="text-green-400">➜</span> ~/message:
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-black/30 border border-gray-700 focus:border-green-400 outline-none w-full text-white p-3 rounded resize-none placeholder-gray-700"
                  placeholder="Votre projet commence ici..."
                />
              </div>

              <button
                type="submit"
                className="mt-6 flex items-center gap-2 bg-green-500/10 border border-green-500/50 text-green-400 px-6 py-2 rounded hover:bg-green-500/20 transition-colors w-full md:w-auto justify-center group"
              >
                <span>./send_message.sh</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
        
        <div className="text-center mt-12 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} John Doe. Built with React, Tailwind & NestJS ideas.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;