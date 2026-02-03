import React, { useState } from 'react';
import { X, Send, Music, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => {
        onClose();
        setFormState('idle');
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden relative z-10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-400 to-violet-400 p-6 text-white flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Music size={24} />
                  Let's Collab
                </h3>
                <p className="text-pink-100 mt-1">Tell me about your project!</p>
              </div>
              <button 
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </div>

            {/* Form */}
            <div className="p-8">
              {formState === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-500 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-500 dark:text-slate-400">I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-pink-400 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/30 outline-none transition-all bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="hello@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-pink-400 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/30 outline-none transition-all bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Project Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-pink-400 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/30 outline-none transition-all bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      <option>Anime Opening / Ending</option>
                      <option>Game Soundtrack</option>
                      <option>Mixing & Mastering</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Tell me more about your vision..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-pink-400 dark:focus:border-pink-500 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/30 outline-none transition-all bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white resize-none"
                    />
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    type="submit"
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-200 dark:shadow-slate-900/50 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
