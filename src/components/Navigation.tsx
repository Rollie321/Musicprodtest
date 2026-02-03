import React, { useState } from "react";
import { Menu, X, Music, Heart, Star, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { ContactDialog } from "./ContactDialog";
import { useTheme } from "../context/ThemeContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Music", href: "/#music" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (href: string) => {
    // If we are on the home page (or filtered hash), allow default behavior for hash links
    // If we are on /demos, we need to go to / then hash
    if (location.pathname !== "/" && href.startsWith("/#")) {
      // React Router doesn't automatically scroll to hash on route change
      // We might need a utility, but for now standard Link to="/" works
      // However, href here is "/#home" which works with Link or a tag if fully qualified
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-full shadow-sm border border-white/50 dark:border-slate-700/50 px-6 py-3 flex items-center justify-between transition-colors">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="bg-gradient-to-tr from-pink-400 to-violet-400 p-2 rounded-full text-white group-hover:rotate-12 transition-transform">
              <Music size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white transition-colors">
              Rollie<span className="text-pink-400">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-pink-500 dark:hover:text-pink-400 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full rounded-full" />
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsContactOpen(true)}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              Let's Collab
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="text-slate-700 dark:text-slate-200 p-1 hover:bg-pink-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-6 right-6 md:hidden"
          >
            <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 dark:border-slate-700/50 p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-pink-500 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-slate-800 px-4 py-3 rounded-xl transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <Star
                    size={16}
                    className="opacity-0 group-hover:opacity-100 text-pink-400 transition-opacity"
                  />
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsContactOpen(true);
                }}
                className="w-full bg-gradient-to-r from-pink-400 to-violet-400 text-white py-3 rounded-xl font-bold shadow-lg shadow-pink-200/50 mt-2"
              >
                Let's Collab
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactDialog
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </nav>
  );
};