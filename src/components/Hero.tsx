import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden relative">
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-white/50 backdrop-blur-sm shadow-sm text-sm font-medium text-pink-500 mb-6">
            <Sparkles size={14} />
            <span>Available for commissions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6">
            Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">Magic</span> <br/> Through Sound.
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Hi, I'm <span className="font-bold text-slate-800">Rollie</span>. I produce Anime-style, OPM, and Classical fusion music that tells a story. Let's make your next track unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg shadow-slate-200 hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              <Play size={18} fill="currentColor" />
              Listen to Demos
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 transition-all flex items-center gap-2">
              View Portfolio
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 justify-center md:justify-start grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {/* Mock Logos for "Featured In" or "Worked With" */}
             <div className="font-bold text-xl">SoundCloud</div>
             <div className="font-bold text-xl">Spotify</div>
             <div className="font-bold text-xl">YouTube</div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 relative"
        >
           <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-violet-400 rounded-[3rem] rotate-6 opacity-20 blur-lg transform scale-95" />
              <img 
                src="https://images.unsplash.com/photo-1632242219454-74c9948ed11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHN0eWxlJTIwbG8tZmklMjBzdHVkaW8lMjBoZWFkcGhvbmVzfGVufDF8fHx8MTc3MDAxNTAxOHww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Anime style aesthetic"
                className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white transform hover:-translate-y-2 transition-transform duration-500"
              />
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3 max-w-[200px]"
              >
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                  <Play size={20} fill="currentColor" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Now Playing</div>
                  <div className="text-sm font-bold text-slate-800">Summer Rain</div>
                </div>
              </motion.div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};
