import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Powered Text Summarizer",
    description: "End-to-end NLP pipeline using Transformers for abstractive text summarization with fine-tuned T5 model.",
    tags: ["NLP", "Transformers", "T5", "Python"],
    stars: 42,
  },
  {
    title: "LLM Agent Framework",
    description: "Multi-agent system with tool use capabilities, built with LangChain for autonomous task completion.",
    tags: ["LangChain", "Agents", "LLM", "RAG"],
    stars: 67,
  },
  {
    title: "Real-Time Anomaly Detection",
    description: "ML pipeline for detecting anomalies in streaming data using Isolation Forest and Autoencoders.",
    tags: ["ML", "Streaming", "PyTorch", "Docker"],
    stars: 35,
  },
  {
    title: "Computer Vision Pipeline",
    description: "Production-grade image classification and object detection system using YOLOv8 and custom datasets.",
    tags: ["CV", "YOLO", "PyTorch", "MLOps"],
    stars: 28,
  },
  {
    title: "RAG Knowledge Base",
    description: "Retrieval-Augmented Generation system with vector databases for enterprise document Q&A.",
    tags: ["RAG", "ChromaDB", "OpenAI", "FastAPI"],
    stars: 55,
  },
  {
    title: "ML Experiment Tracker",
    description: "Custom experiment tracking dashboard with model versioning, metrics visualization, and deployment.",
    tags: ["MLflow", "Streamlit", "Python", "SQL"],
    stars: 19,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">// Featured Work</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              Open Source <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/animesh1012"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            View all on GitHub <ExternalLink size={14} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="https://github.com/animesh1012"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <Github className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Star size={12} /> {p.stars}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[11px] rounded-full bg-primary/10 text-primary font-mono border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="glow-outline" asChild>
            <a href="https://github.com/animesh1012" target="_blank" rel="noopener noreferrer">
              <Github size={16} /> View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
