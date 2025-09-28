import React from "react";
import { motion } from "framer-motion";
import AIChat from "./AIChat";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="text-center z-10 max-w-4xl w-full">
        <motion.div
          className="mb-12"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-green-400 to-green-300 bg-clip-text text-transparent leading-tight tracking-tight mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SAJAD DAVOUDI
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-green-400 font-medium mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ask my AI assistant anything about me
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full"
        >
          <AIChat />
        </motion.div>
      </div>
    </section>
  );
}
