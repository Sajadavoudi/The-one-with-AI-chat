import React from "react";
import { motion } from "framer-motion";
import ZoomParallax from "./ui/ZoomParallax";

export default function ProjectsSection() {
  const projects = [
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Interactive Portfolio Website",
      title: "Interactive Portfolio",
      tech: ["Three.js", "React", "WebGL"],
    },
    {
      src: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Angular E-Commerce App",
      title: "E-Commerce Platform",
      tech: ["Angular", "Node.js", "MongoDB"],
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Python Data Analytics Tool",
      title: "Data Analytics Dashboard",
      tech: ["Python", "Pandas", "D3.js"],
    },
    {
      src: "https://images.unsplash.com/photo-1593435899833-39c809135432?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Linux System Monitor",
      title: "System Monitor",
      tech: ["C", "Linux", "GTK"],
    },
    {
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "PHP Web Application",
      title: "Web Platform",
      tech: ["PHP", "MySQL", "Bootstrap"],
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "Java Desktop Application",
      title: "Desktop Suite",
      tech: ["Java", "Swing", "SQLite"],
    },
    {
      src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
      alt: "AI Integration Project",
      title: "AI Chatbot",
      tech: ["AI", "APIs", "NLP"],
    },
  ];

  return (
    <section id="projects" className="relative">
      <div className="relative z-10 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-gradient-radial from-green-400/10 to-transparent blur-3xl pointer-events-none"></div>
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-300 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Scroll down to experience my work in a cinematic parallax journey
          </p>
        </motion.div>
      </div>

      <ZoomParallax images={projects} />

      <div className="h-[50vh]"></div>
    </section>
  );
}
