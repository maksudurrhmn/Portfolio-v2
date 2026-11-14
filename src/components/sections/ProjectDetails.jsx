import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Layers3,
  Code2,
  Lightbulb,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectDetails({ project }) {
  return (
    <>
      <main className="min-h-screen px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {project.category}
            </p>

            <h1 className="font-heading text-4xl font-bold sm:text-5xl">{project.title}</h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-muted">{project.description}</p>

            {/* Project Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
              >
                <ExternalLink size={17} />
                Live Demo
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <FaGithub size={18} />
                GitHub Repository
              </a>

              {project.serverUrl && (
                <a
                  href={project.serverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  <Code2 size={18} />
                  Server Repository
                </a>
              )}
            </div>
          </div>

          {/* Project Preview Placeholder */}
          <div className="mb-16 flex min-h-64 items-center justify-center rounded-2xl border border-border bg-surface p-8 sm:min-h-80">
            <div className="text-center">
              <Layers3 size={52} className="mx-auto text-accent" />
              <p className="mt-4 font-heading text-xl font-semibold">{project.title}</p>
              <p className="mt-2 text-sm text-muted">Project screenshot coming soon</p>
            </div>
          </div>

          {/* Technologies */}
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <Layers3 className="text-accent" size={23} />
              <h2 className="font-heading text-2xl font-bold">Technologies Used</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-14">
            <div className="mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-accent" size={23} />
              <h2 className="font-heading text-2xl font-bold">Key Features</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4"
                >
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-accent" />
                  <p className="text-sm leading-7 text-muted">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          {project.challenges?.length > 0 && (
            <section className="mb-14">
              <div className="mb-6 flex items-center gap-3">
                <Code2 className="text-accent" size={23} />
                <h2 className="font-heading text-2xl font-bold">Challenges & Solutions</h2>
              </div>

              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="rounded-xl border border-border bg-surface p-5">
                    <h3 className="font-semibold">{challenge.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Future Improvements */}
          {project.futureImprovements?.length > 0 && (
            <section className="mb-14">
              <div className="mb-6 flex items-center gap-3">
                <Lightbulb className="text-accent" size={23} />
                <h2 className="font-heading text-2xl font-bold">Future Improvements</h2>
              </div>

              <ul className="space-y-3">
                {project.futureImprovements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm leading-7 text-muted">
                    <ArrowUpRight size={18} className="mt-1 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Bottom Navigation */}
          <div className="border-t border-border pt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 font-medium text-accent transition-all hover:gap-3"
            >
              <ArrowLeft size={18} />
              Explore More Projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
