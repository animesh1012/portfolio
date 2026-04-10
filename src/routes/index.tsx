import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BlogSection } from "@/components/BlogSection";
import { YoutubeSection } from "@/components/YoutubeSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Animesh Tripathi — Data Scientist | ML, GenAI & LLMs" },
      { name: "description", content: "Portfolio of Animesh Tripathi — Data Scientist specializing in Machine Learning, Deep Learning, Generative AI, NLP, LLMs & Agentic AI." },
      { property: "og:title", content: "Animesh Tripathi — Data Scientist" },
      { property: "og:description", content: "Data Scientist specializing in ML, Generative AI & LLMs. Building intelligent systems that transform data into actionable insights." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <YoutubeSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
