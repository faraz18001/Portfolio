import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import SkillsSection from "@/components/SkillsSection";
import AIPlayground from "@/components/AIPlayground";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      {/* Hero Section - Neural Network Animation */}
      <HeroSection />

      {/* Project Showcase - 3D Cards with Category Filtering */}
      <ProjectShowcase />

      {/* Skills & Metrics - Radar Chart + Dashboard */}
      <SkillsSection />

      {/* AI Playground - Interactive Demo */}
      <AIPlayground />

      {/* Contact Section - Form + Social Links */}
      <ContactSection />
    </>
  );
}
