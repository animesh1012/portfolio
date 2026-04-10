import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Brain, Cpu, Sparkles, Database, Workflow } from "lucide-react";

const highlights = [
  { icon: Brain, label: "ML & Deep Learning", desc: "PyTorch, TensorFlow, CNNs, RNNs, Transformers" },
  { icon: Sparkles, label: "Generative AI & LLMs", desc: "LangGraph, LangChain, RAG, Fine-tuning, vLLM" },
  { icon: Terminal, label: "NLP Expert", desc: "Text analysis, NER, Embeddings, BERT, SLMs" },
  { icon: Cpu, label: "Agentic AI", desc: "Multi-agent systems, LangGraph agents, MCP" },
  { icon: Database, label: "Data Engineering", desc: "Apache Airflow, ETL, Redshift, PostgreSQL, PySpark" },
  { icon: Workflow, label: "MLOps & DevOps", desc: "Docker, CI/CD, Azure DevOps, Git, MLflow" },
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
          <p className="text-sm font-semibold text-primary mb-3 tracking-widest uppercase">About Me</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] mb-8">
            Turning Data into <span className="text-gradient">Intelligence</span>
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
              I'm a <span className="text-primary font-medium">Senior Data Scientist at Enverus</span>, 
              previously at <span className="text-primary font-medium">Philips Innovation Campus</span>, 
              with 3+ years of hands-on experience in Deep Learning, NLP, LLMs, and production ML systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have designed and shipped production-grade agentic AI systems — from
              fine-tuning domain-specific SLMs that cut inference latency, to building
              multimodal multi-agent RAG pipelines that mine decade-long project archives.
              On the engineering side, I architect{" "}
              <span className="text-primary font-medium">GDPR-compliant ETL pipelines</span>,
              data attestation workflows, and robust CI/CD-backed ML services. A{" "}
              <span className="text-primary font-medium">GATE 2022 qualifier</span> and
              published researcher, I am equally at home deriving loss functions and
              shipping REST APIs. I also share what I learn through my YouTube channel{" "}
              <span className="text-primary font-medium">SPOTLESS TECH</span>{" "}
              and technical writing on Medium.
            </p>
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
                className="p-5 rounded-xl border border-border bg-card card-lift group cursor-default"
              >
                <h.icon className="text-primary mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" size={24} />
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
