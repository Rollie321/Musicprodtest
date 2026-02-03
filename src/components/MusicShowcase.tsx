import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, Share2, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';

import { tracks } from '../data/tracks';

export const MusicShowcase = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="music" className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 dark:bg-pink-900/20 rounded-bl-full opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-100 dark:bg-violet-900/20 rounded-tr-full opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold tracking-wider uppercase text-sm">Discography</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mt-2 mb-4 transition-colors">Latest Tracks & Demos</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
            From high-energy anime openings to heartfelt OPM ballads and classical arrangements.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Player Main Area */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200/50 dark:shadow-black/20 border border-white dark:border-slate-700 transition-colors">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <motion.div 
                key={currentTrack.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full md:w-64 aspect-square rounded-3xl overflow-hidden shadow-lg flex-shrink-0"
              >
                <img src={currentTrack.cover} alt={currentTrack.title} className="w-full h-full object-cover" />
              </motion.div>
              
              <div className="flex-1 w-full text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-bold text-slate-500 dark:text-slate-300 mb-3 uppercase tracking-wide">
                    {currentTrack.genre}
                </div>
                <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-1 transition-colors">{currentTrack.title}</h3>
                <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 transition-colors">{currentTrack.artist}</p>
                
                {/* Progress Bar Mockup */}
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full mb-2 overflow-hidden">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-pink-400 to-violet-400"
                        initial={{ width: "0%" }}
                        animate={{ width: isPlaying ? "45%" : "30%" }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 font-medium mb-8">
                    <span>1:12</span>
                    <span>{currentTrack.duration}</span>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center md:justify-start gap-6">
                    <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                        <SkipBack size={24} />
                    </button>
                    <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-16 h-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center shadow-lg shadow-slate-300 dark:shadow-slate-900/50 hover:scale-110 transition-transform active:scale-95"
                    >
                        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                    </button>
                    <button className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                        <SkipForward size={24} />
                    </button>
                    
                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-2 hidden md:block" />
                    
                    <button className="text-slate-400 dark:text-slate-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors hidden md:block">
                        <Heart size={20} />
                    </button>
                    <button className="text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors hidden md:block">
                        <Share2 size={20} />
                    </button>
                </div>
              </div>
            </div>
          </div>

          {/* Playlist Side */}
          <div className="lg:col-span-5 flex flex-col gap-4">
             {tracks.map((track) => (
                 <button
                    key={track.id}
                    onClick={() => {
                        setCurrentTrack(track);
                        setIsPlaying(true);
                    }}
                    className={`group w-full p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border ${
                        currentTrack.id === track.id 
                        ? 'bg-white dark:bg-slate-800 shadow-lg border-pink-100 dark:border-slate-700 scale-102' 
                        : 'bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border-transparent hover:shadow-md'
                    }`}
                 >
                    <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0">
                        <img src={track.cover} alt={track.title} className="w-full h-full object-cover" />
                        {currentTrack.id === track.id && isPlaying && (
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="flex gap-1 items-end h-4">
                                    <motion.div animate={{ height: [4, 16, 8, 4] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-white rounded-full" />
                                    <motion.div animate={{ height: [8, 4, 16, 8] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }} className="w-1 bg-white rounded-full" />
                                    <motion.div animate={{ height: [4, 12, 4, 10] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.2 }} className="w-1 bg-white rounded-full" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="text-left flex-1">
                        <h4 className={`font-bold ${currentTrack.id === track.id ? 'text-pink-500' : 'text-slate-800 dark:text-white group-hover:text-pink-500'} transition-colors`}>
                            {track.title}
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{track.genre}</p>
                    </div>
                    <div className="text-sm font-medium text-slate-400 dark:text-slate-500">
                        {track.duration}
                    </div>
                 </button>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};
