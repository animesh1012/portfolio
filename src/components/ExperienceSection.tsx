import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Bot, Database, Shield, Brain, MessageSquare } from "lucide-react";

const experiences = [
  {
    role: "Senior Data Scientist",
    company: "Enverus",
    division: "Product & Innovation",
    location: "Bengaluru, India",
    period: "Dec 2025 – Present",
    icon: Brain,
    projects: [
      {
        title: "Domain-Specific Small Language Model for Instant Analyst",
        icon: Brain,
        description:
          "Designed and fine-tuned a custom Small Language Model (SLM) to replace prompt-engineered nodes in an agentic Instant Analyst architecture, reducing inference latency and improving task-specific accuracy through supervised fine-tuning and architecture optimization.",
        tech: ["SLM Fine-tuning", "Agentic AI", "vLLM", "PyTorch"],
      },
    ],
  },
  {
    role: "Associate Data Scientist",
    company: "Philips Innovation Campus",
    division: "Personal Health & Oral Healthcare",
    location: "Bengaluru, India",
    period: "Jun 2023 – Dec 2025",
    icon: Briefcase,
    projects: [
      {
        title: "Oral Healthcare Chatbot — Multi-Agent Multimodal RAG",
        icon: Bot,
        description:
          "Developed a LangGraph-powered, multimodal, multi-agent AI system to extract actionable insights from Oral Healthcare's project archives (2015–present). Enabled intelligent retrieval across CSV, Excel, DOCX, PPTX, and PDF formats using multiple vector databases.",
        tech: ["LangGraph", "RAG", "Multi-Agent", "Vector DB"],
      },
      {
        title: "TextSense AI — Agentic SQL Assistant",
        icon: MessageSquare,
        description:
          "Built an intelligent assistant powered by a LangGraph SQL agent that autonomously generates and executes SQL queries to extract insights from Redshift databases, presenting results in natural language and structured tables.",
        tech: ["LangGraph", "SQL Agent", "Redshift", "NLP"],
      },
      {
        title: "Data Engineering & GDPR Compliance",
        icon: Shield,
        description:
          "Led ETL pipeline design with Apache Airflow, implemented GDPR-compliant data retention pipelines, and deployed data attestation pipelines for Service Security Risk Assessment (SSRA). Architected end-to-end data pipeline lifecycles.",
        tech: ["Apache Airflow", "ETL", "GDPR", "PostgreSQL"],
      },
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">
            // Career
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_var(--color-glow-muted)] border-2 border-background z-10" />

                {/* Role header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl md:text-2xl font-bold">{exp.role}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.division} • {exp.location}
                  </p>
                </div>

                {/* Projects */}
                <div className="grid gap-4">
                  {exp.projects.map((project, pIdx) => (
                    <motion.div
                      key={pIdx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + idx * 0.2 + pIdx * 0.1,
                      }}
                      className="p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-500 group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <project.icon
                            className="text-primary group-hover:scale-110 transition-transform"
                            size={18}
                          />
                        </div>
                        <h4 className="font-semibold text-base leading-snug">
                          {project.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 pl-12">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pl-12">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/5 text-primary/80 border border-primary/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
