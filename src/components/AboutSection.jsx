import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D"
                alt="Sajad Davoudi"
                className="rounded-xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 border-4 border-cyan-400 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm Sajad Davoudi, a passionate creative developer and tech
                enthusiast with a love for crafting innovative digital
                experiences. My journey in technology spans across multiple
                programming languages and frameworks, always pushing the
                boundaries of what's possible.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With expertise in web development, mobile applications, and
                system administration, I bring ideas to life through clean code
                and intuitive design. I believe in the power of technology to
                solve real-world problems and create meaningful connections.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech
                trends, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
