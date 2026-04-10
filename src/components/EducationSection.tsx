import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy } from "lucide-react";

export function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">// Background</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 rounded-xl border border-border bg-card hover:glow-border transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_var(--color-glow-muted)]" />
                <h4 className="font-semibold text-lg">MTech in Computer Science & Engineering</h4>
                <p className="text-primary text-sm font-mono">Specialisation in Data Science</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Advanced coursework in Machine Learning, Statistical Modelling,
                  Deep Learning, and Big Data Analytics.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 rounded-xl border border-border bg-card hover:glow-border transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Trophy className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            <div className="space-y-4">
              {[
                "Active open-source contributor with multiple starred repositories",
                "YouTube channel SPOTLESS TECH with thousands of subscribers",
                "Published technical articles on Medium covering AI/ML topics",
                "Successfully delivered end-to-end ML solutions in production",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Award className="text-primary mt-0.5 shrink-0" size={16} />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
