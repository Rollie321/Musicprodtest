import React from 'react';
import { Mail, Instagram, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-900 pt-24 pb-12 rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-none border-t border-slate-100 dark:border-slate-800 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 transition-colors">
                    Ready to make something <br/> <span className="text-pink-500">Kawaii?</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md transition-colors">
                    Whether you need an original anime opening, a game soundtrack, or a fresh mix for your next single, I'm here to help.
                </p>
                <a href="mailto:hello@rollie.music" className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-pink-500 dark:hover:bg-pink-300 transition-colors shadow-lg shadow-slate-200 dark:shadow-slate-900/50 hover:shadow-pink-200">
                    <Mail size={18} />
                    Send me a message
                </a>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h4 className="font-bold text-slate-800 dark:text-white mb-6 text-lg transition-colors">Navigation</h4>
                    <ul className="space-y-4">
                        <li><a href="#home" className="text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Home</a></li>
                        <li><a href="#about" className="text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">About</a></li>
                        <li><a href="#music" className="text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Music</a></li>
                        <li><a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-slate-800 dark:text-white mb-6 text-lg transition-colors">Socials</h4>
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors group">
                                <Instagram size={18} />
                                <span>Instagram</span>
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors group">
                                <Twitter size={18} />
                                <span>Twitter</span>
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors group">
                                <Youtube size={18} />
                                <span>YouTube</span>
                                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 dark:text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Rollie Music Productions. All rights reserved.</p>
            <p className="flex items-center gap-1">Made with <span className="text-pink-400">♥</span> for Music</p>
        </div>
      </div>
    </footer>
  );
};
