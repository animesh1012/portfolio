import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Youtube, ArrowDown, Download } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/animesh1012", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/animesh-py/", label: "LinkedIn" },
  { icon: FileText, href: "https://medium.com/@animesh.py", label: "Medium" },
  { icon: Youtube, href: "https://www.youtube.com/c/SPOTLESSTECH", label: "YouTube" },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">Available for opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-foreground">Animesh</span>
          <br />
          <span className="text-gradient glow-text">Tripathi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Senior Data Scientist at{" "}
          <span className="text-primary">Enverus</span> | Ex-{" "}
          <span className="text-primary">Philips</span>. Specializing in{" "}
          <span className="text-primary">GenAI</span>,{" "}
          <span className="text-primary">NLP</span> &{" "}
          <span className="text-primary">LLMs</span>. Building intelligent systems
          that transform data into actionable insights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button variant="glow" size="lg" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
            View My Work
          </Button>
          <Button variant="glow-outline" size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in Touch
          </Button>
          <Button variant="glow-outline" size="lg" asChild>
            <a href="/Animesh_CV.pdf" download="Animesh_Tripathi_CV.pdf">
              <Download size={16} /> Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-surface hover:bg-surface-hover hover:border-primary/50 hover:shadow-[0_0_15px_var(--color-glow-muted)] transition-all duration-300 text-muted-foreground hover:text-primary"
              aria-label={s.label}
            >
              <s.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown className="text-muted-foreground" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
