import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Youtube, ArrowDown, Download } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/animesh1012", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/animesh-py/", label: "LinkedIn" },
  { icon: FileText, href: "https://medium.com/@animesh.py", label: "Medium" },
  { icon: Youtube, href: "https://www.youtube.com/c/SPOTLESSTECH", label: "YouTube" },
];

const roles = ["GenAI Engineer", "LLM Specialist", "NLP Expert", "MLOps Practitioner"];

const terminalLines = [
  {
    id: "cmd1",
    el: <span className="flex items-center gap-2"><span className="text-primary font-bold">$</span> <span className="text-foreground font-semibold">whoami</span></span>,
  },
  {
    id: "bio",
    el: (
      <div className="pl-3 border-l-2 border-primary/30 space-y-0.5">
        <p className="text-foreground font-bold">Animesh Tripathi</p>
        <p className="text-muted-foreground text-xs">M.Tech · Data Science · IIIT Vadodara</p>
        <p className="text-muted-foreground text-xs">GenAI Expert · Maths Enthusiast · Researcher</p>
      </div>
    ),
  },
  {
    id: "cmd2",
    el: <span className="flex items-center gap-2 pt-1"><span className="text-primary font-bold">$</span> <span className="text-foreground font-semibold">cat career.log</span></span>,
  },
  {
    id: "career",
    el: (
      <div className="pl-3 border-l-2 border-primary/30 space-y-1 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-green-500 font-bold">▲</span>
          <span className="text-secondary font-semibold w-20 shrink-0">Enverus</span>
          <span className="text-muted-foreground">Senior Data Scientist</span>
          <span className="ml-auto text-primary font-mono text-[10px]">2025→</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">●</span>
          <span className="text-secondary font-semibold w-20 shrink-0">Philips</span>
          <span className="text-muted-foreground">Associate Data Scientist</span>
          <span className="ml-auto text-muted-foreground font-mono text-[10px]">2023–25</span>
        </div>
      </div>
    ),
  },
  {
    id: "cmd3",
    el: <span className="flex items-center gap-2 pt-1"><span className="text-primary font-bold">$</span> <span className="text-foreground font-semibold">skills --core</span></span>,
  },
  {
    id: "skills",
    el: (
      <div className="pl-3 border-l-2 border-primary/30 flex flex-wrap gap-1.5 text-[10px]">
        {["GenAI", "LLMs", "RAG", "LangGraph", "NLP", "PyTorch", "MLOps"].map((s) => (
          <span key={s} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">{s}</span>
        ))}
      </div>
    ),
  },
  {
    id: "cmd4",
    el: <span className="flex items-center gap-2 pt-1"><span className="text-primary font-bold">$</span> <span className="text-foreground font-semibold">ls ./achievements</span></span>,
  },
  {
    id: "achievements",
    el: (
      <div className="pl-3 border-l-2 border-primary/30 space-y-0.5 text-xs text-muted-foreground">
        <p><span className="text-yellow-500">★</span> GATE 2022 Qualified</p>
        <p><span className="text-yellow-500">★</span> Published Researcher · River-Network CNN</p>
        <p><span className="text-yellow-500">★</span> B.Tech First-Year College Topper</p>
      </div>
    ),
  },
];

const lineVariants = {
  hidden: { opacity: 0, x: -12 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  // 3D tilt for terminal card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Right panel with floating shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted rounded-bl-[80px] hidden md:block overflow-hidden">
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-24 right-24 w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25"
        />
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-36 right-10 w-10 h-10 rounded-full bg-secondary/15 border border-secondary/25"
        />
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2.5 }}
          className="absolute top-[45%] right-[38%] w-6 h-6 rounded-lg bg-primary/20"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.8 }}
          className="absolute top-12 right-[40%] w-3 h-3 rounded-full bg-secondary/40"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center py-28 md:py-0 min-h-screen">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-[-0.03em] mb-4"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Animesh</span>
              <br />Tripathi.
            </motion.h1>

            {/* Role cycler */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-9 mb-6 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-xl font-semibold text-primary"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
            >
              Senior Data Scientist at{" "}
              <span className="font-semibold text-foreground">Enverus</span>, Ex-
              <span className="font-semibold text-foreground">Philips</span>. Building
              intelligent systems with{" "}
              <span className="font-semibold text-primary">GenAI</span>,{" "}
              <span className="font-semibold text-primary">LLMs</span> &{" "}
              <span className="font-semibold text-primary">NLP</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                variant="glow"
                size="lg"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                See My Work
              </Button>
              <Button
                variant="glow-outline"
                size="lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Animesh_CV.pdf" download="Animesh_Tripathi_CV.pdf">
                  <Download size={16} /> Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social icons — spring pop-in */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right column — 3D tilt terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative flex items-center justify-center py-8"
          >
            <div
              className="relative w-full max-w-md"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{ rotateX, rotateY, transformPerspective: 1000 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-card"
              >
                {/* Terminal chrome */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-foreground/5 border-b border-border">
                  <motion.span whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-red-400 cursor-pointer" />
                  <motion.span whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer" />
                  <motion.span whileHover={{ scale: 1.3 }} className="w-3 h-3 rounded-full bg-green-400 cursor-pointer" />
                  <span className="ml-3 text-xs font-mono text-muted-foreground">animesh@about ~</span>
                </div>

                {/* Terminal lines — staggered reveal */}
                <motion.div
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } } }}
                  initial="hidden"
                  animate="show"
                  className="p-6 font-mono text-sm leading-relaxed space-y-1.5 bg-card"
                >
                  {terminalLines.map((line) => (
                    <motion.div key={line.id} variants={lineVariants}>
                      {line.el}
                    </motion.div>
                  ))}

                  {/* Status line */}
                  <motion.div
                    variants={lineVariants}
                    className="pt-2 flex items-center gap-2 text-xs"
                  >
                    <span className="text-primary font-bold">$</span>
                    <span className="text-green-500 font-semibold">status</span>
                    <span className="text-muted-foreground mx-1">→</span>
                    <span className="text-foreground font-semibold">3+ yrs</span>
                    <span className="text-border">·</span>
                    <span className="text-foreground font-semibold">20+ projects</span>
                    <span className="text-border">·</span>
                    <span className="text-green-500 font-semibold">open to collab</span>
                    <motion.span
                      className="text-primary font-bold"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 1, ease: "steps(1)" }}
                    >▋</motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold shadow-lg"
              >
                3+ Years
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-5 -left-5 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-secondary to-primary text-white text-sm font-bold shadow-lg"
              >
                20+ Projects
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
