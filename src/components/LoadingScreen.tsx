import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "Initializing GenAI inference layer...",
  "Loading NLP & LLM model registry...",
  "Bootstrapping RAG + vector store...",
  "Mounting agentic AI pipeline...",
  "Calibrating deep learning models...",
  "Rendering portfolio...",
];

function useTypewriter(text: string, speed = 12) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return displayed;
}

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 13;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = Array(cols).fill(1);
    const chars = "アイウエオカキクケコ0123456789ABCDEF<>/[]{}=>|&%$#@!";

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff9950";
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle =
          y * fontSize < canvas.height * 0.3
            ? "#00ff9980"
            : "#00ff9920";
        ctx.fillText(char, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
    />
  );
}

function BootLog({ onDone }: { onDone: () => void }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const current = useTypewriter(BOOT_LINES[lineIndex] ?? "", 12);
  const isDone = lineIndex >= BOOT_LINES.length;

  useEffect(() => {
    if (isDone) {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
  }, [isDone, onDone]);

  useEffect(() => {
    if (lineIndex >= BOOT_LINES.length) return;
    const line = BOOT_LINES[lineIndex];
    const delay = line.length * 12 + 80;
    const t = setTimeout(() => {
      setCompletedLines((prev) => [...prev, line]);
      setLineIndex((i) => i + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [lineIndex]);

  return (
    <div className="font-mono text-xs md:text-sm text-left w-full max-w-lg space-y-1">
      {completedLines.map((line, i) => (
        <div key={i} className="flex gap-2 text-green-400/60">
          <span className="text-green-500/40 select-none">▸</span>
          <span>{line}</span>
          <span className="ml-auto text-green-500/40">
            {i === completedLines.length - 1 && lineIndex >= BOOT_LINES.length
              ? "✓"
              : "OK"}
          </span>
        </div>
      ))}
      {!isDone && (
        <div className="flex gap-2 text-green-300">
          <span className="text-green-400 select-none">▸</span>
          <span>
            {current}
            <span className="animate-pulse">▌</span>
          </span>
        </div>
      )}
    </div>
  );
}

function ProgressBar({ duration }: { duration: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = 100;
    const interval = duration / steps;
    let current = 0;
    const id = setInterval(() => {
      current++;
      setProgress(current);
      if (current >= steps) clearInterval(id);
    }, interval);
    return () => clearInterval(id);
  }, [duration]);

  return (
    <div className="w-full max-w-lg">
      <div className="flex justify-between text-xs font-mono text-green-400/60 mb-1.5">
        <span>LOADING PORTFOLIO</span>
        <span>{progress}%</span>
      </div>
      <div className="h-[2px] w-full bg-green-900/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </div>
  );
}

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);

  const handleDone = () => {
    setExiting(true);
    setTimeout(onComplete, 700);
  };

  // Total boot duration ~= sum of all line type durations
  const totalDuration =
    BOOT_LINES.reduce((acc, l) => acc + l.length * 12 + 80, 0) + 600;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          <MatrixRain />

          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
            }}
          />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-8 w-full max-w-lg">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-5xl font-black tracking-[-0.04em] text-white">
                AT<span className="text-green-400">.</span>
              </div>
              <div className="text-[11px] font-mono tracking-[0.3em] text-green-400/70 uppercase">
                Animesh Tripathi — Data Scientist
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
            />

            {/* Boot log */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full"
            >
              <BootLog onDone={handleDone} />
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full"
            >
              <ProgressBar duration={totalDuration} />
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 font-mono text-[10px] text-green-500/30 tracking-widest">
            SYS::INIT v2.4.1
          </div>
          <div className="absolute top-4 right-4 font-mono text-[10px] text-green-500/30 tracking-widest">
            {new Date().toISOString().slice(0, 19).replace("T", " ")}
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-green-500/30">
            ENV: PRODUCTION
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-green-500/30">
            BUILD: STABLE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
