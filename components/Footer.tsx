export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[12px] text-muted">
          Henry Russell — Davidson, NC — 2026
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="mailto:herussell@davidson.edu"
            className="text-[13px] text-secondary transition-colors hover:text-primary"
          >
            herussell@davidson.edu
          </a>
          <a
            href="https://linkedin.com/in/henry-russell26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-secondary transition-colors hover:text-primary"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/henryruss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-secondary transition-colors hover:text-primary"
          >
            GitHub ↗
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-secondary transition-colors hover:text-primary"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
