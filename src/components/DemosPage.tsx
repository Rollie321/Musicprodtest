import React, { useState } from 'react';
import { Search, Filter, Clock, Calendar, X, Play, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { tracks, Track } from '../data/tracks';
import { Link } from 'react-router-dom';

export const DemosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const genres = ['All', ...new Set(tracks.map(t => t.genre))];

  const filteredTracks = tracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          track.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || track.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 mb-6 transition-colors font-medium">
                <ArrowLeft size={20} />
                Back to Home
            </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 transition-colors">Demo Archives</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl transition-colors">
            Explore the full collection of sketches, unreleased tracks, and finished masterpieces.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search tracks..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 focus:border-pink-400 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/30 outline-none transition-all shadow-sm bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
             {genres.map(genre => (
                 <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-6 py-4 rounded-2xl font-medium whitespace-nowrap transition-all ${
                        selectedGenre === genre 
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg shadow-slate-200 dark:shadow-slate-900/50' 
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-500 hover:text-pink-500 dark:hover:text-pink-400'
                    }`}
                 >
                     {genre}
                 </button>
             ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTracks.map(track => (
                <motion.div
                    layout
                    key={track.id}
                    onClick={() => setSelectedTrack(track)}
                    className="group bg-white dark:bg-slate-800 rounded-3xl p-4 border border-slate-100 dark:border-slate-700 hover:border-pink-200 dark:hover:border-pink-800 hover:shadow-xl hover:shadow-pink-100/50 dark:hover:shadow-pink-900/20 transition-all cursor-pointer"
                >
                    <div className="aspect-video w-full rounded-2xl overflow-hidden mb-4 relative">
                        <img src={track.cover} alt={track.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-slate-900 shadow-lg transform scale-50 group-hover:scale-100 transition-transform">
                                <Play size={20} fill="currentColor" className="ml-1" />
                            </div>
                        </div>
                    </div>
                    <div className="px-2 pb-2">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 dark:text-white group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors">{track.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{track.artist}</p>
                            </div>
                            <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-slate-500 dark:text-slate-300 uppercase">{track.genre}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-500 font-medium mt-4">
                            <span className="flex items-center gap-1"><Clock size={14} /> {track.duration}</span>
                            <span className="flex items-center gap-1"><Calendar size={14} /> {track.releaseDate}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Track Details Modal */}
        <AnimatePresence>
            {selectedTrack && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedTrack(null)}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />
                    
                    <motion.div
                        layoutId={`track-${selectedTrack.id}`}
                        className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden border border-slate-100 dark:border-slate-800"
                    >
                        <button 
                            onClick={() => setSelectedTrack(null)}
                            className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Side */}
                        <div className="md:w-2/5 h-64 md:h-auto relative">
                            <img src={selectedTrack.cover} alt={selectedTrack.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden">
                                <h2 className="text-white text-3xl font-bold">{selectedTrack.title}</h2>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex-1 p-8 md:p-12">
                            <div className="hidden md:block mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                     <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-300 rounded-full text-xs font-bold uppercase tracking-wider">{selectedTrack.genre}</span>
                                     <span className="text-slate-400 text-sm font-medium">{selectedTrack.duration} • {selectedTrack.bpm} BPM</span>
                                </div>
                                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-1">{selectedTrack.title}</h2>
                                <p className="text-xl text-slate-500 dark:text-slate-400">by {selectedTrack.artist}</p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3">About the Track</h4>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                        {selectedTrack.description}
                                    </p>
                                </div>
                                
                                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
                                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-3 flex items-center gap-2">
                                        <span className="text-xl">💡</span> The Story
                                    </h4>
                                    <p className="text-slate-600 dark:text-slate-300 italic">
                                        "{selectedTrack.story}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-xl shadow-slate-200 dark:shadow-slate-900/50">
                                        <Play size={20} fill="currentColor" />
                                        Play Demo
                                    </button>
                                    <button className="px-6 py-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>

      </div>
    </div>
  );
};
