import React from "react";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        
        :root {
          --primary-cyan: #00ffff;
          --primary-blue: #0080ff;
          --matrix-green: #00FF41;
          --dark-bg: #000000;
          --glass-bg: rgba(255, 255, 255, 0.05);
          --glass-border: rgba(255, 255, 255, 0.1);
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #000000;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: var(--matrix-green);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #00CC00;
        }

        /* Blur overlay for sections below about */
        .section-blur::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          backdrop-filter: blur(8px);
          z-index: -1;
          pointer-events: none;
        }
      `}</style>

      {/* Side Navigation - Obsidian Style */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed left-0 top-0 h-full w-20 md:w-64 z-50 bg-black/40 backdrop-blur-2xl border-r border-white/10"
      >
        <div className="flex flex-col h-full p-4 md:p-6">
          {/* Logo/Brand Section */}
          <motion.div
            className="flex items-center mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-xl md:text-2xl shadow-2xl mr-0 md:mr-4">
              👽
            </div>
            <div className="hidden md:block">
              <h2 className="text-lg font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                SAJAD
              </h2>
              <p className="text-xs text-gray-400 uppercase tracking-wider">
                Portfolio
              </p>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex-1 space-y-2">
            {[
              {
                id: "hero",
                label: "Who am I?",
                icon: "🏠",
                shortLabel: "Home",
              },
              { id: "about", label: "About", icon: "👨‍💻", shortLabel: "About" },
              {
                id: "projects",
                label: "Projects",
                icon: "🚀",
                shortLabel: "Work",
              },
              {
                id: "contact",
                label: "Contact",
                icon: "📡",
                shortLabel: "Contact",
              },
            ].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className="group relative flex items-center w-full p-3 md:p-4 rounded-xl text-gray-300 hover:text-green-400 hover:bg-green-400/5 transition-all duration-300"
                whileHover={{ x: 5, backgroundColor: "rgba(0, 255, 65, 0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <span className="text-xl md:text-2xl mr-0 md:mr-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>

                {/* Text - hidden on mobile */}
                <div className="hidden md:block">
                  <span className="font-medium text-sm group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </div>

                {/* Mobile tooltip */}
                <div className="md:hidden absolute left-16 bg-black/90 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {item.shortLabel}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/90 rotate-45"></div>
                </div>

                {/* Active indicator */}
                <motion.div
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-green-400 rounded-r-full opacity-0 group-hover:opacity-100"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.a
            href="#contact"
            className="w-full bg-gradient-to-r from-green-500 to-green-400 text-black font-bold p-3 md:p-4 rounded-xl hover:shadow-2xl hover:shadow-green-400/25 transition-all duration-300 text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden md:inline">Send Signal</span>
            <span className="md:hidden">📡</span>
          </motion.a>

          {/* Status indicator */}
          <motion.div
            className="mt-6 flex items-center justify-center md:justify-start"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mr-0 md:mr-3"></div>
            <span className="hidden md:inline text-xs text-gray-400 uppercase tracking-wider">
              Online
            </span>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Content Area */}
      <div className="ml-20 md:ml-64 relative">{children}</div>
    </div>
  );
}
