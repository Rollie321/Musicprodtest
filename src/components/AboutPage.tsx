import React from 'react';
import { motion } from 'motion/react';
import { Music, Gamepad2, Clock, MapPin, Piano, Headphones } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">Rollie</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Get to know the artist behind the music – my tools, inspirations, and journey in sound design.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* DAWs Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:border-pink-200 dark:hover:border-pink-900/50 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-violet-400 rounded-2xl flex items-center justify-center mb-4">
              <Headphones className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              🎹 DAWs I Use
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">FL Studio 21</span>
                <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 px-2 py-1 rounded-full">Primary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">Ableton Live 11</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">Logic Pro X</span>
              </div>
            </div>
          </motion.div>

          {/* Instruments Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:border-violet-200 dark:hover:border-violet-900/50 transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4">
              <Piano className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              🎼 Instruments
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-violet-400 rounded-full" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">Piano (10+ years)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">Guitar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">Violin</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">MIDI Controllers</span>
              </div>
            </div>
          </motion.div>

          {/* Inspiration Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-900/50 transition-all md:col-span-2"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-violet-400 rounded-2xl flex items-center justify-center mb-4">
              <Gamepad2 className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              🎮 Games & Anime Inspiration
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Anime Soundtracks</h3>
                <div className="space-y-2">
                  <div className="text-slate-600 dark:text-slate-400">• Your Name (Kimi no Na wa)</div>
                  <div className="text-slate-600 dark:text-slate-400">• Attack on Titan</div>
                  <div className="text-slate-600 dark:text-slate-400">• Violet Evergarden</div>
                  <div className="text-slate-600 dark:text-slate-400">• Demon Slayer</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">Game OSTs</h3>
                <div className="space-y-2">
                  <div className="text-slate-600 dark:text-slate-400">• Genshin Impact</div>
                  <div className="text-slate-600 dark:text-slate-400">• Final Fantasy Series</div>
                  <div className="text-slate-600 dark:text-slate-400">• Persona 5</div>
                  <div className="text-slate-600 dark:text-slate-400">• NieR: Automata</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-pink-50 to-violet-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-pink-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
              <Clock className="text-pink-500" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              🎧 Experience
            </h2>
            <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 mb-2">
              5+ Years
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Professional music production, composition, and sound design
            </p>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-8 border border-blue-200 dark:border-slate-700"
          >
            <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
              <MapPin className="text-blue-500" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              📍 Location
            </h2>
            <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 mb-2">
              Manila, PH
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              Available for remote collaborations worldwide
            </p>
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl p-8 text-white"
        >
          <Music className="mx-auto mb-4" size={40} />
          <h3 className="text-2xl font-bold mb-3">Let's Create Something Amazing Together</h3>
          <p className="text-pink-100 mb-6 max-w-xl mx-auto">
            Whether it's an anime opening, a game soundtrack, or an OPM hit, I'm ready to bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-pink-50 transition-all hover:scale-105 active:scale-95"
          >
            Get In Touch
          </a>
        </motion.div>

      </div>
    </div>
  );
};
