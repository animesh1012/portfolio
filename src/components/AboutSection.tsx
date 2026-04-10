import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Brain, Cpu, Sparkles } from "lucide-react";

const highlights = [
  { icon: Brain, label: "ML & Deep Learning", desc: "Neural networks, CNNs, RNNs, Transformers" },
  { icon: Sparkles, label: "Generative AI", desc: "LLMs, RAG, prompt engineering, fine-tuning" },
  { icon: Terminal, label: "NLP Expert", desc: "Text analysis, sentiment, NER, embeddings" },
  { icon: Cpu, label: "Agentic AI", desc: "Autonomous agents, tool use, multi-agent systems" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">// About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Turning <span className="text-gradient">Data into Intelligence</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Data Scientist with an MTech in Computer Science & Engineering
              specializing in Data Science. My passion lies in building end-to-end
              machine learning solutions that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From developing production-grade ML pipelines to exploring the
              frontiers of Generative AI and Agentic systems, I bring a unique
              blend of research depth and engineering pragmatism. I actively
              share my knowledge through my YouTube channel{" "}
              <span className="text-primary font-medium">SPOTLESS TECH</span>{" "}
              and technical articles on Medium.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-mono text-muted-foreground">core_competencies.py</span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-xl border border-border bg-card hover:glow-border transition-all duration-300 group"
              >
                <h.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="font-semibold text-sm mb-1">{h.label}</h3>
                <p className="text-xs text-muted-foreground">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
