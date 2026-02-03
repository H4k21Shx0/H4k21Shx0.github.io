import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ExperienceEducation from './components/ExperienceEducation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  return (
    <LanguageProvider>
        <div className="bg-dark min-h-screen text-white selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <main>
            <Home />
            <About />
            <ExperienceEducation />
            <Projects />
            <Skills />
            <Contact />
        </main>
        </div>
    </LanguageProvider>
  );
}

export default App;