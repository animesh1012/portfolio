export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Animesh Tripathi. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Designed with <span className="text-primary">passion</span> for data science
        </p>
      </div>
    </footer>
  );
}
