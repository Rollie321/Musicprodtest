import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Music, Calendar, Zap, Filter, Grid3x3, List } from 'lucide-react';
import { tracks, Track } from '../data/tracks';

export const ArchivePage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest');

  // Get unique genres
  const genres = ['All', ...Array.from(new Set(tracks.map(track => track.genre)))];

  // Filter and sort tracks
  const filteredTracks = tracks
    .filter(track => selectedGenre === 'All' || track.genre === selectedGenre)
    .sort((a, b) => {
      if (sortBy === 'newest') return (b.releaseDate || '').localeCompare(a.releaseDate || '');
      if (sortBy === 'oldest') return (a.releaseDate || '').localeCompare(b.releaseDate || '');
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full text-pink-600 dark:text-pink-400 font-bold text-sm mb-4">
            <Music size={16} />
            Complete Discography
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 dark:text-white mb-4">
            Song <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">Archive</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore the complete collection of tracks from anime-style OSTs to OPM and classical fusion.
          </p>
        </motion.div>

        {/* Filters & Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-3xl p-6 mb-8 border border-slate-100 dark:border-slate-700"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            
            {/* Genre Filter */}
            <div className="flex-1 w-full">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center gap-2">
                <Filter size={16} />
                Filter by Genre
              </label>
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                      selectedGenre === genre
                        ? 'bg-gradient-to-r from-pink-400 to-violet-400 text-white shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort & View Controls */}
            <div className="flex gap-4">
              {/* Sort Dropdown */}
              <div>
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 block">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'title')}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 font-medium"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Title (A-Z)</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div>
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-3 block">
                  View
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-xl transition-all ${
                      viewMode === 'grid'
                        ? 'bg-pink-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    <Grid3x3 size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-xl transition-all ${
                      viewMode === 'list'
                        ? 'bg-pink-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="text-slate-600 dark:text-slate-400 font-medium mb-6">
          Showing {filteredTracks.length} {filteredTracks.length === 1 ? 'track' : 'tracks'}
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-pink-200 dark:hover:border-pink-900/50 transition-all hover:shadow-xl"
              >
                {/* Cover Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Floating Info on Hover */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Zap size={14} />
                      <span>{track.bpm} BPM</span>
                      <span className="mx-2">•</span>
                      <Calendar size={14} />
                      <span>{track.releaseDate}</span>
                    </div>
                  </div>
                </div>

                {/* Track Info */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 mb-3">
                    {track.genre}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                    {track.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                      {track.duration}
                    </span>
                    <button className="text-pink-500 hover:text-pink-600 font-bold text-sm">
                      Listen →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:border-pink-200 dark:hover:border-pink-900/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-6">
                  {/* Cover Thumbnail */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={track.cover}
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-pink-500 transition-colors truncate">
                          {track.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 flex-wrap">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-full font-medium">
                            {track.genre}
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap size={14} />
                            {track.bpm} BPM
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {track.releaseDate}
                          </span>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-slate-600 dark:text-slate-400">
                        {track.duration}
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">
                      {track.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-violet-400 text-white rounded-full font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex-shrink-0">
                    Listen
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredTracks.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Music size={48} className="mx-auto text-slate-300 dark:text-slate-600 mb-4" />
            <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-2">
              No tracks found
            </h3>
            <p className="text-slate-500 dark:text-slate-500">
              Try adjusting your filters to see more results.
            </p>
          </motion.div>
        )}

      </div>
    </div>
  );
};
