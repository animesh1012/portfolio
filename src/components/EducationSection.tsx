import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy, BadgeCheck } from "lucide-react";

const achievements = [
  "GATE 2022 Qualified",
  "B.Tech first-year College Topper",
  "Published Research Article on Extraction of River Network from Satellite Image",
  "YouTube channel SPOTLESS TECH with AI/ML project tutorials",
];

const certifications = [
  "Microsoft GenAI Hackathon",
  "NLP with Python for Machine Learning Essential Training",
  "Advanced Learning Algorithms",
  "Supervised Machine Learning: Regression and Classification",
];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
                <h4 className="font-semibold text-base">M.Tech in CSE</h4>
                <p className="text-primary text-sm font-mono">Specialisation in Data Science</p>
                <p className="text-muted-foreground text-xs mt-1">IIIT Vadodara • 2022 – 2024</p>
              </div>
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/50" />
                <h4 className="font-semibold text-base">B.Tech in CSE</h4>
                <p className="text-primary text-sm font-mono">Computer Science & Engineering</p>
                <p className="text-muted-foreground text-xs mt-1">JSS Academy of Technical Education, Noida • 2018 – 2022</p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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
              {achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Award className="text-primary mt-0.5 shrink-0" size={16} />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="p-8 rounded-xl border border-border bg-card hover:glow-border transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BadgeCheck className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <BadgeCheck className="text-primary mt-0.5 shrink-0" size={16} />
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
