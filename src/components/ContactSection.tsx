import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, FileText, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/animesh1012", desc: "animesh1012" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/animesh-py/", desc: "animesh-py" },
  { icon: FileText, label: "Medium", href: "https://medium.com/@animesh.py", desc: "@animesh.py" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/c/SPOTLESSTECH", desc: "SPOTLESS TECH" },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="relative mx-auto max-w-4xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">// Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Open to collaborations, consulting, and exciting data science opportunities.
            Reach out and let's connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group p-5 rounded-xl border border-border bg-card hover:glow-border transition-all duration-500 text-center"
            >
              <l.icon className="mx-auto text-muted-foreground group-hover:text-primary transition-colors mb-3" size={24} />
              <p className="text-sm font-semibold group-hover:text-primary transition-colors">{l.label}</p>
              <p className="text-xs text-muted-foreground font-mono mt-1">{l.desc}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Button variant="glow" size="lg" asChild>
            <a href="mailto:animesh.py@gmail.com">
              <Mail size={18} /> Send me an Email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
