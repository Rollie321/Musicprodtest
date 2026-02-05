import React from 'react';
import { Mail, MessageCircle, MapPin, Globe, ArrowLeft, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 mb-8 transition-colors font-medium">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-white dark:border-slate-800"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              For business inquiries, collaborations, or just to say hi. I'm always open to discussing new projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 text-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Email Me</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-2">For general inquiries and commissions</p>
                  <a href="mailto:hello@rollie.music" className="text-pink-500 font-semibold hover:underline">hello@rollie.music</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/30 text-violet-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Discord</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-2">Join the community server</p>
                  <a href="#" className="text-violet-500 font-semibold hover:underline">rollie.music#1234</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Socials</h3>
                  <div className="flex gap-4 mt-2">
                    <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-pink-500 transition-colors">Twitter/X</a>
                    <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-pink-500 transition-colors">Instagram</a>
                    <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-pink-500 transition-colors">LinkedIn</a>
                  </div>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Location</h3>
                  <p className="text-slate-500 dark:text-slate-400">Manila, Philippines</p>
                  <p className="text-xs text-slate-400 mt-1">(Available for remote work worldwide)</p>
                </div>
              </div>
            </div>

            {/* Simple Form */}
            <form className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-3xl space-y-4 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-4">Quick Message</h3>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/30 outline-none transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/30 outline-none transition-all"
                />
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900/30 outline-none transition-all resize-none"
                />
                <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                    Send Message <Send size={16} />
                </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
