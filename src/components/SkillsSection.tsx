import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "XGBoost", "LightGBM", "Feature Engineering", "Model Optimization", "MLOps"],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "CNNs", "RNNs", "GANs", "Transformers"],
  },
  {
    title: "Generative AI & LLMs",
    skills: ["OpenAI", "LangChain", "LlamaIndex", "RAG", "Fine-tuning", "Prompt Engineering", "Hugging Face"],
  },
  {
    title: "NLP",
    skills: ["spaCy", "NLTK", "BERT", "Sentiment Analysis", "NER", "Text Classification", "Embeddings"],
  },
  {
    title: "Agentic AI",
    skills: ["AutoGen", "CrewAI", "Tool Use", "Multi-Agent Systems", "ReAct", "Function Calling"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Python", "SQL", "Git", "Docker", "AWS", "GCP", "MLflow", "Streamlit"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">// Tech Stack</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-500 group"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary font-heading">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-mono border border-border group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
