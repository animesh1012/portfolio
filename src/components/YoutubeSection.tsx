import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Play, ListVideo } from "lucide-react";
import { Button } from "@/components/ui/button";

const playlists = [
  {
    title: "Movie Review Sentiment Analysis from Scratch",
    description: "Complete NLP & Deep Learning project — build a text sentiment classifier using RNN from scratch.",
    category: "NLP & Deep Learning",
    videos: "Multi-part series",
  },
  {
    title: "Human Eye Disease Prediction System",
    description: "Build an image recognition model using Python for detecting eye diseases with ML.",
    category: "Computer Vision",
    videos: "Multi-part series",
  },
  {
    title: "Music Genre Classification System",
    description: "Build an audio classification system using Python — complete ML project walkthrough.",
    category: "Machine Learning",
    videos: "Multi-part series",
  },
  {
    title: "Plant Disease Detection System",
    description: "Image recognition model using Python to identify plant diseases — end-to-end ML project.",
    category: "Computer Vision",
    videos: "Multi-part series",
  },
  {
    title: "Amazon Redshift Tutorial for Beginners",
    description: "Learn the basics of Amazon Redshift — data warehousing fundamentals and hands-on tutorials.",
    category: "Data Engineering",
    videos: "Multi-part series",
  },
  {
    title: "Fruits & Vegetables Recognition System",
    description: "Complete ML project — build an image classification system to recognize fruits and vegetables.",
    category: "Machine Learning",
    videos: "Multi-part series",
  },
  {
    title: "Heart Disease Prediction Using Python",
    description: "End-to-end machine learning project to predict heart disease with Python.",
    category: "Machine Learning",
    videos: "Multi-part series",
  },
];

export function YoutubeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="youtube" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">// Video Content</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">SPOTLESS TECH</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl">
            In-depth video playlists on AI, ML, and Data Science projects with
            hands-on code walkthroughs — from scratch to deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((p, i) => (
            <motion.a
              key={p.title}
              href="https://www.youtube.com/@SPOTLESSTECH/playlists"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:glow-border transition-all duration-500"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_var(--color-glow-muted)]">
                    <Play size={24} className="text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-background/80 text-xs font-mono text-muted-foreground">
                  <ListVideo size={12} /> Playlist
                </div>
              </div>
              <div className="p-4">
                <span className="text-[11px] font-mono text-primary mb-1 block">{p.category}</span>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors leading-snug mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="glow" size="lg" asChild>
            <a href="https://www.youtube.com/@SPOTLESSTECH" target="_blank" rel="noopener noreferrer">
              <Youtube size={18} /> Subscribe on YouTube
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
