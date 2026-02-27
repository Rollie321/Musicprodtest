import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Play, 
  Pause, 
  ArrowLeft, 
  Calendar, 
  Zap, 
  Music2, 
  Heart, 
  Share2,
  Download,
  Disc3,
  Volume2
} from 'lucide-react';
import { tracks } from '../data/tracks';

export const TrackDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const track = tracks.find(t => t.id === Number(id));

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  if (!track) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Track Not Found
          </h1>
          <Link
            to="/archive"
            className="text-pink-500 hover:text-pink-600 font-medium"
          >
            ← Back to Archive
          </Link>
        </div>
      </div>
    );
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Mock audio playback since we don't have real audio files
        audioRef.current.play().catch(() => {
          // If audio fails (expected with mock URLs), just toggle the state
          console.log('Audio playback simulated');
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back
          </button>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Column - Album Art & Player */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Album Art */}
            <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-2xl">
              <img
                src={track.cover}
                alt={track.title}
                className="w-full h-full object-cover"
              />
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 text-white">
                      <Disc3 className="animate-spin" size={24} />
                      <span className="font-bold">Now Playing</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Player Controls */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 to-violet-400"
                    style={{ width: isPlaying ? '45%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{track.duration}</span>
                </div>
              </div>

              {/* Play Button */}
              <button
                onClick={togglePlay}
                className="w-full py-4 bg-gradient-to-r from-pink-400 to-violet-400 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                {isPlaying ? (
                  <>
                    <Pause size={24} fill="currentColor" />
                    Pause Preview
                  </>
                ) : (
                  <>
                    <Play size={24} fill="currentColor" />
                    Play Preview
                  </>
                )}
              </button>

              {/* Hidden audio element for future real implementation */}
              <audio
                ref={audioRef}
                src={track.audioPreview}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <button className="py-3 bg-slate-100 dark:bg-slate-700 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-pink-50 dark:hover:bg-slate-600 hover:text-pink-500 transition-all flex items-center justify-center gap-2">
                  <Heart size={18} />
                </button>
                <button className="py-3 bg-slate-100 dark:bg-slate-700 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-600 hover:text-blue-500 transition-all flex items-center justify-center gap-2">
                  <Share2 size={18} />
                </button>
                <button className="py-3 bg-slate-100 dark:bg-slate-700 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-slate-600 hover:text-violet-500 transition-all flex items-center justify-center gap-2">
                  <Download size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Track Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {/* Header */}
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30 rounded-full text-sm font-bold text-pink-600 dark:text-pink-400 mb-4">
                {track.genre}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white mb-3">
                {track.title}
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400">
                by {track.artist}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
                  <Calendar size={16} />
                  <span className="text-xs font-medium">Release</span>
                </div>
                <div className="text-lg font-bold text-slate-800 dark:text-white">
                  {track.releaseDate}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
                  <Zap size={16} />
                  <span className="text-xs font-medium">BPM</span>
                </div>
                <div className="text-lg font-bold text-slate-800 dark:text-white">
                  {track.bpm}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
                  <Volume2 size={16} />
                  <span className="text-xs font-medium">Duration</span>
                </div>
                <div className="text-lg font-bold text-slate-800 dark:text-white">
                  {track.duration}
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-1">
                  <Music2 size={16} />
                  <span className="text-xs font-medium">Mood</span>
                </div>
                <div className="text-lg font-bold text-slate-800 dark:text-white capitalize">
                  {track.mood}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 mb-6">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                <Music2 size={20} />
                About This Track
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {track.description}
              </p>
            </div>

            {/* Story Behind the Music */}
            {track.story && (
              <div className="bg-gradient-to-br from-pink-50 to-violet-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl p-6 border border-pink-200 dark:border-slate-700 mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3">
                  🎵 Story Behind the Music
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {track.story}
                </p>
              </div>
            )}

            {/* Instruments */}
            {track.instruments && track.instruments.length > 0 && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 mb-6">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                  🎹 Instruments Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {track.instruments.map((instrument, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium capitalize"
                    >
                      {instrument}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {track.tags && track.tags.length > 0 && (
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                  🏷️ Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {track.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30 text-pink-600 dark:text-pink-400 rounded-full font-medium capitalize"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Love this track?</h3>
              <p className="text-pink-100 mb-6">
                Let's collaborate on your next project! Whether it's an anime opening, game soundtrack, or original composition.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-pink-50 transition-all hover:scale-105 active:scale-95"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

        </div>

        {/* More Tracks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
            More Tracks You Might Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks
              .filter(t => t.id !== track.id)
              .slice(0, 3)
              .map((relatedTrack) => (
                <Link
                  key={relatedTrack.id}
                  to={`/track/${relatedTrack.id}`}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-pink-200 dark:hover:border-pink-900/50 transition-all hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedTrack.cover}
                      alt={relatedTrack.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
                      {relatedTrack.genre}
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-pink-500 transition-colors">
                      {relatedTrack.title}
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};
