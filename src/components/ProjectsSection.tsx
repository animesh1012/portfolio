import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Machine Learning Projects",
    description: "Kaggle-sourced machine learning projects in Python Jupyter notebooks, spanning computer vision to predictive modeling.",
    tags: ["ML", "Kaggle", "Python", "Jupyter"],
    stars: 126,
    repo: "machineLearning",
  },
  {
    title: "Data Analyst Agent",
    description: "Data Analyst Agent using LangGraph and Streamlit for automated data analysis and insights generation.",
    tags: ["LangGraph", "Streamlit", "Agents", "GenAI"],
    stars: 0,
    repo: "data_analyst_agent",
  },
  {
    title: "GenAI Chatbot",
    description: "CCMT Counselling Assistant — an intelligent chatbot built with Generative AI for guided counselling support.",
    tags: ["GenAI", "Python", "Chatbot", "LLM"],
    stars: 0,
    repo: "genai_chatbot",
  },
  {
    title: "Bird Species Identification",
    description: "CNN-RNN hybrid model for bird species identification using deep learning and computer vision techniques.",
    tags: ["CNN", "RNN", "CV", "Deep Learning"],
    stars: 0,
    repo: "bird_research_cnn_rnn",
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={`https://github.com/animesh1012/${p.repo}`}
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
