import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    title: "Build a RAG Chatbot from Scratch",
    views: "15K views",
    category: "Generative AI",
  },
  {
    title: "Transformers Explained Simply",
    views: "22K views",
    category: "Deep Learning",
  },
  {
    title: "Deploy ML Models with FastAPI",
    views: "8K views",
    category: "MLOps",
  },
  {
    title: "LangChain Agents: Complete Guide",
    views: "12K views",
    category: "Agentic AI",
  },
  {
    title: "Fine-tune LLMs on Custom Data",
    views: "18K views",
    category: "LLMs",
  },
  {
    title: "End-to-End ML Project Tutorial",
    views: "25K views",
    category: "Machine Learning",
  },
];

export function YoutubeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="youtube" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">// Video Content</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">SPOTLESS TECH</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            In-depth video tutorials on AI, ML, and Data Science projects with
            hands-on code walkthroughs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.a
              key={v.title}
              href="https://www.youtube.com/c/SPOTLESSTECH"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:glow-border transition-all duration-500"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                <div className="relative z-10 w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-glow-muted)]">
                  <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="p-4">
                <span className="text-[11px] font-mono text-primary mb-1 block">{v.category}</span>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{v.views}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="glow" size="lg" asChild>
            <a href="https://www.youtube.com/c/SPOTLESSTECH" target="_blank" rel="noopener noreferrer">
              <Youtube size={18} /> Subscribe on YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
