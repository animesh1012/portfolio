import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["LangGraph", "LangChain", "Apache Airflow", "Streamlit", "FastAPI"],
  },
  {
    title: "Libraries",
    skills: ["TensorFlow", "PyTorch", "Transformers", "Scikit-learn", "Pandas", "PySpark", "Boto3"],
  },
  {
    title: "Generative AI & LLMs",
    skills: ["RAG", "Fine-tuning", "Amazon Bedrock", "Prompt Engineering", "Multi-Agent Systems", "Hugging Face", "Unsloth"],
  },
  {
    title: "Databases",
    skills: ["Amazon Redshift", "PostgreSQL", "Vector Databases", "ChromaDB", "Qdrant"],
  },
  {
    title: "Dev Tools & Cloud",
    skills: ["Git", "GitHub", "Azure DevOps", "CI/CD", "Docker", "AWS", "Databricks", "VS Code"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 relative bg-muted">
      <div className="relative mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-widest uppercase">Tech Stack</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] mb-12">
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
              className="p-6 rounded-xl border border-border bg-card card-lift group"
            >
              <h3 className="text-lg font-bold mb-4 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.25, delay: 0.15 + i * 0.07 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary font-mono border border-secondary/20 cursor-default transition-colors group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
