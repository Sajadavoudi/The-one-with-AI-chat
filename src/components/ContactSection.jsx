import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:contact@sajaddavoudi.com",
      color: "hover:text-red-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-purple-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-green-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-20 section-blur"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto rounded-full mb-12"></div>
        </motion.div>

        <motion.div
          className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-12 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Ready to bring your ideas to life? I'm always excited to work on new
            projects and collaborate with fellow innovators. Let's discuss how
            we can create something amazing together!
          </p>

          <motion.div
            className="text-6xl mb-8"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🚀
          </motion.div>

          <p className="text-green-400 font-semibold text-lg">
            Let's build the future together!
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              className={`group bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-gray-300 ${link.color} transition-all duration-300 hover:bg-black/50 hover:scale-105`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon
                size={32}
                className="mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="font-semibold">{link.label}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© 2024 Sajad Davoudi. Crafted with passion and Three.js ✨</p>
        </motion.div>
      </div>
    </section>
  );
}
