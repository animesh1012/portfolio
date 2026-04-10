import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Play, ListVideo } from "lucide-react";
import { Button } from "@/components/ui/button";

const playlists = [
  {
    title: "Movie Review Sentiment Analysis from Scratch",
    description: "Complete NLP & Deep Learning project — build a text sentiment classifier using RNN from scratch.",
    category: "NLP & Deep Learning",
    thumbnail: "/SENTIMENT ANALYSIS.png",
  },
  {
    title: "Human Eye Disease Prediction System",
    description: "Build an image recognition model using Python for detecting eye diseases with ML.",
    category: "Computer Vision",
    thumbnail: "/eye_disease.webp",
  },
  {
    title: "Music Genre Classification System",
    description: "Build an audio classification system using Python — complete ML project walkthrough.",
    category: "Machine Learning",
    thumbnail: "/Music_genre.png",
  },
  {
    title: "Plant Disease Detection System",
    description: "Image recognition model using Python to identify plant diseases — end-to-end ML project.",
    category: "Computer Vision",
    thumbnail: "/plant_disease.webp",
  },
  {
    title: "Amazon Redshift Tutorial for Beginners",
    description: "Learn the basics of Amazon Redshift — data warehousing fundamentals and hands-on tutorials.",
    category: "Data Engineering",
    thumbnail: "/amazon_redshift.jpg",
  },
  {
    title: "Fruits & Vegetables Recognition System",
    description: "Complete ML project — build an image classification system to recognize fruits and vegetables.",
    category: "Machine Learning",
    thumbnail: "/Fruits_and_veg.jpg",
  },
];

export function YoutubeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="youtube" className="py-24 px-6 relative bg-muted">
      <div className="relative mx-auto max-w-6xl" ref={ref}>

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-14"
        >
          {/* Left: label + title + description */}
          <div>
            <p className="text-sm font-semibold text-primary mb-3 tracking-widest uppercase">
              Video Content
            </p>
            {/* Channel name with logo */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/yt_channel_logo.png"
                alt="SPOTLESS TECH logo"
                className="w-14 h-14 rounded-2xl object-cover shadow-md border border-border"
              />
              <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em]">
                <span className="text-gradient">SPOTLESS TECH</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xl">
              In-depth video playlists on AI, ML, and Data Science projects with
              hands-on code walkthroughs — from scratch to deployment.
            </p>
          </div>

        </motion.div>

        {/* ── Playlist grid ── */}
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
              className="group relative overflow-hidden rounded-xl border border-border bg-card card-lift"
            >
              {/* Thumbnail area */}
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Play button */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg shadow-red-600/40 backdrop-blur-sm">
                    <Play size={22} className="text-white ml-1" fill="white" />
                  </div>
                </motion.div>

                {/* YouTube logo badge — top-left */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/70 text-white text-[11px] font-bold z-10">
                  <Youtube size={12} className="text-red-500" />
                  SPOTLESS TECH
                </div>

                {/* Playlist badge — top-right */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-md bg-black/70 text-white text-[11px] z-10">
                  <ListVideo size={12} /> Playlist
                </div>
              </div>

              {/* Card body */}
              <div className="p-4">
                <span className="text-[11px] font-semibold text-primary mb-1.5 block uppercase tracking-wider">
                  {p.category}
                </span>
                <h3 className="font-bold text-sm group-hover:text-primary transition-colors duration-300 leading-snug mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Button variant="glow" size="lg" asChild>
            <a href="https://www.youtube.com/@SPOTLESSTECH" target="_blank" rel="noopener noreferrer">
              <Youtube size={18} /> Subscribe on YouTube
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
