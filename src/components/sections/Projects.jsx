import Link from 'next/link';
import {
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  ShoppingBasket,
  Dumbbell,
  Layers3,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'BookNook',
    category: 'Full Stack Application',
    description:
      'A library management application where users can discover books, borrow and return them, and manage their own book listings.',
    technologies: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Better Auth'],
    liveUrl: 'https://booknook-ph.vercel.app/',
    githubUrl: 'https://github.com/maksudurrhmn/BookNook-Client',
    slug: 'booknook',
    icon: BookOpen,
    theme: 'from-violet-500/20 to-indigo-500/10',
  },
  {
    title: 'BazarDor',
    category: 'Web Application',
    description:
      'A Bangla market-price application that helps users explore essential product prices and track price changes in Bangladesh.',
    technologies: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Better Auth'],
    liveUrl: 'https://bazardor-ph.vercel.app/',
    githubUrl: 'https://github.com/maksudurrhmn/BazarDor-PH',
    slug: 'bazardor',
    icon: ShoppingBasket,
    theme: 'from-emerald-500/20 to-green-500/10',
  },
  {
    title: 'Fitlog',
    category: 'Workout Planner',
    description:
      'A workout planning application where users can explore exercises, create daily workout plans, and save their favorite workouts.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'DaisyUI'],
    liveUrl: 'https://fitlogph.vercel.app/',
    githubUrl: 'https://github.com/maksudurrhmn/Fitlog-PH',
    slug: 'fitlog',
    icon: Dumbbell,
    theme: 'from-lime-500/20 to-green-500/10',
  },
  {
    title: 'DevStack',
    category: 'React Application',
    description:
      'A responsive application that allows developers to explore different technologies and build their own personal tech stack.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'JSON'],
    liveUrl: 'https://dev-stack-ph.vercel.app/',
    githubUrl: 'https://github.com/maksudurrhmn/DevStack-PH',
    slug: 'devstack',
    icon: Layers3,
    theme: 'from-blue-500/20 to-cyan-500/10',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            My Recent Work
          </p>

          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Featured Projects</h2>

          <p className="mt-4 max-w-2xl leading-8 text-muted">
            Here are some projects I've built while learning and exploring modern web development
            technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                {/* Project Preview */}
                <div
                  className={`relative flex h-52 items-center justify-center bg-linear-to-br ${project.theme}`}
                >
                  <div className="rounded-2xl border border-white/10 bg-background/70 p-6 shadow-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon size={52} strokeWidth={1.4} className="text-accent" />
                  </div>

                  <span className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-widest text-muted">
                    {project.category}
                  </span>

                  <span className="absolute right-5 top-5 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted">
                    Featured
                  </span>
                </div>

                {/* Project Information */}
                <div className="p-6 sm:p-8">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="font-heading text-xl font-bold">{project.title}</h3>

                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`View ${project.title} details`}
                      className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>

                  <p className="min-h-20 text-sm leading-7 text-muted">{project.description}</p>

                  {/* Technologies */}
                  <div className="my-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1.5 text-xs text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-wrap items-center gap-5 border-t border-border pt-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2"
                    >
                      Details <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
