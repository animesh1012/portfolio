import { Github, Linkedin, Youtube, FileText, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github,   href: "https://github.com/animesh1012",          label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/animesh-py/", label: "LinkedIn" },
  { icon: Youtube,  href: "https://www.youtube.com/c/SPOTLESSTECH",  label: "YouTube" },
  { icon: FileText, href: "https://medium.com/@animesh.py",          label: "Medium" },
  { icon: Mail,     href: "mailto:animeshtripathi.js@gmail.com",     label: "Email" },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

        {/* Brand */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-2xl font-black tracking-[-0.03em]">
            AT<span className="text-gradient">.</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Senior Data Scientist specialising in GenAI, LLMs &amp; NLP —
            turning data into intelligent decisions.
          </p>
          <p className="text-xs font-mono text-primary">Bengaluru, India</p>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Find me on</p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Open to collaborations &amp; exciting opportunities
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} <span className="font-semibold text-foreground">Animesh Tripathi</span>. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
