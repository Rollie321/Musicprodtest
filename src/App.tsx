import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MusicShowcase } from './components/MusicShowcase';
import { Footer } from './components/Footer';
import { DemosPage } from './components/DemosPage';
import { ContactPage } from './components/ContactPage';
import { ThemeProvider } from './context/ThemeContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-12 transition-colors">My Musical Universe</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
            {[
            { title: 'Anime Style', desc: 'Emotional, high-energy tracks inspired by J-Pop and anime OSTs.', icon: '✨' },
            { title: 'OPM', desc: 'Heartfelt Filipino lyrics and melodies that resonate with the soul.', icon: '🇵🇭' },
            { title: 'Classical', desc: 'Orchestral arrangements blending traditional instruments with modern beats.', icon: '🎻' }
            ].map((genre, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 hover:bg-pink-50 dark:hover:bg-slate-700 transition-colors group cursor-default border border-transparent dark:border-slate-700">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{genre.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 transition-colors">{genre.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">{genre.desc}</p>
            </div>
            ))}
        </div>
        </div>
    </section>
    <MusicShowcase />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-pink-200 selection:text-pink-900 transition-colors duration-300">
              <Navigation />
              
              <main>
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/demos" element={<DemosPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                  </Routes>
              </main>

              <Footer />
          </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
