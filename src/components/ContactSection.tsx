import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, FileText, Youtube, Mail, MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "animeshtripathi.js@gmail.com",
    href: "mailto:animeshtripathi.js@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 63870 22484",
    href: "tel:+916387022484",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to opportunities",
    href: null,
  },
];

const socialLinks = [
  { icon: Github,   label: "GitHub",   href: "https://github.com/animesh1012",              desc: "animesh1012" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/animesh-py/",      desc: "animesh-py" },
  { icon: FileText, label: "Medium",   href: "https://medium.com/@animesh.py",               desc: "@animesh.py" },
  { icon: Youtube,  label: "YouTube",  href: "https://www.youtube.com/c/SPOTLESSTECH",       desc: "SPOTLESS TECH" },
];

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 bg-muted">
      <div className="mx-auto max-w-6xl" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-sm font-semibold text-primary mb-3 tracking-widest uppercase">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em]">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl">
            Open to collaborations, consulting, and exciting data science opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — direct contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-4"
          >
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card card-lift group"
                  >
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <item.icon size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.value}</p>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                    {item.label === "Availability" && (
                      <span className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-green-600 bg-green-100 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>
                )}
              </motion.div>
            ))}

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2"
            >
              <Button variant="glow" size="lg" className="w-full" asChild>
                <a href="mailto:animeshtripathi.js@gmail.com">
                  <Mail size={18} /> Send me an Email
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-5">Find me on</p>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group p-5 rounded-xl border border-border bg-card card-lift text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors duration-300">
                    <l.icon size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-sm font-bold group-hover:text-primary transition-colors">{l.label}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1 truncate">{l.desc}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
