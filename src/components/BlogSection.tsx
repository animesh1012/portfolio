import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Mastering Qdrant: A Friendly Guide to Your First Vector Database",
    excerpt: "Imagine you've just discovered that your data isn't just rows in a table, but points in a high-dimensional space — ready for similarity search and AI retrieval.",
    readTime: "8 min",
    tags: ["Vector DB", "Qdrant"],
    claps: 62,
    date: "Jun 10, 2025",
    url: "https://medium.com/@animesh.py/mastering-qdrant-a-friendly-guide-to-your-first-vector-database-ecb826d49c8c",
  },
  {
    title: "Step-by-Step Guide to Connecting Qdrant with LangChain for AI Retrieval",
    excerpt: "Imagine you're building a smart assistant that doesn't just keyword-match your queries, but truly \"understands\" the meaning behind them.",
    readTime: "10 min",
    tags: ["LangChain", "RAG"],
    claps: 11,
    date: "Jul 13, 2025",
    url: "https://medium.com/@animesh.py/harnessing-qdrant-and-langchain-a-step-by-step-integration-guide-0e2c397289b6",
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 px-6 relative">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-wider uppercase">// Latest Articles</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Technical <span className="text-gradient">Blog</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-6 rounded-xl border border-border bg-card hover:glow-border transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span className="flex items-center gap-1"><BookOpen size={12} /> Medium</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[11px] rounded-full bg-primary/10 text-primary font-mono border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="glow-outline" asChild>
            <a href="https://medium.com/@animesh.py" target="_blank" rel="noopener noreferrer">
              Read All Articles on Medium
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
