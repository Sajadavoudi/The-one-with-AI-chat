import React from "react";
import Layout from "./Layout";
import ThreeBackground from "./components/ThreeBackground";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Portfolio() {
  return (
    <Layout>
      <ThreeBackground />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
