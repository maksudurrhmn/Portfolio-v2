import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 pt-16 pb-8">
      <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Closing Message */}
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Thanks for Visiting
            </p>

            <h2 className="max-w-2xl font-heading text-3xl font-bold leading-tight sm:text-5xl">
              Let's build something
              <span className="text-accent"> meaningful.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
              Always learning, exploring new technologies, and working towards becoming a better
              developer.
            </p>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="group flex size-14 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
          >
            <ArrowUp
              size={23}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 pt-8 sm:flex-row">
          <div>
            <a href="#home" className="font-heading text-xl font-bold">
              Maksudur<span className="text-accent">.</span>
            </a>

            <p className="mt-1 text-xs text-muted">Full Stack Developer</p>
          </div>

          <p className="text-center text-xs text-muted">
            ©2026 Maksudur Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
