import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Page Not Found</p>

      <h1 className="mt-4 font-heading text-8xl font-bold">404</h1>

      <p className="mt-4 max-w-md text-muted">
        Oops! The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition hover:opacity-90"
      >
        <Home size={18} />
        Back to Home
      </Link>
    </main>
  );
}
