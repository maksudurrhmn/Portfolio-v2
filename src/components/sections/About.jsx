import { Code2, Monitor, Gamepad2, Lightbulb, ArrowUpRight } from 'lucide-react';

const interests = [
  {
    title: 'Programming',
    description: 'Learning new technologies and building practical projects.',
    icon: Code2,
  },
  {
    title: 'PC Customization',
    description: 'Exploring Windows, Linux, and customizing Hyprland.',
    icon: Monitor,
  },
  {
    title: 'Gaming',
    description: 'Enjoying games and exploring the world of technology.',
    icon: Gamepad2,
  },
  {
    title: 'Continuous Learning',
    description: 'Always curious about new tools, ideas, and technologies.',
    icon: Lightbulb,
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Get to know me
          </p>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">About Me</h2>
        </div>

        {/* About Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="mb-6 font-heading text-2xl font-semibold">
              Passionate about technology and building things.
            </h3>

            <div className="space-y-5 leading-8 text-muted">
              <p>
                I'm a technology enthusiast with a genuine passion for computers, programming, and
                exploring new technologies. I enjoy experimenting with different tools, customizing
                my digital environment, and discovering how technology works.
              </p>

              <p>
                My goal is to become a skilled Full Stack Developer. I'm continuously working toward
                it by learning and building practical projects. My journey includes HTML, CSS,
                Bootstrap, Tailwind CSS, JavaScript, TypeScript, React, Next.js, Express.js, Better
                Auth, and MongoDB.
              </p>

              <p>
                Beyond web development, I enjoy customizing Windows and Linux environments,
                experimenting with Hyprland, and gaming. For me, technology is more than a career
                choice; it's something I'm genuinely passionate about.
              </p>
            </div>

            <a
              href="#skills"
              className="mt-8 inline-flex items-center gap-2 font-medium text-accent transition-all hover:gap-3"
            >
              Explore my skills <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Interests */}
          <div className="grid gap-4 sm:grid-cols-2">
            {interests.map((interest) => {
              const Icon = interest.icon;

              return (
                <div
                  key={interest.title}
                  className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                    <Icon size={24} />
                  </div>

                  <h4 className="mb-2 font-heading text-lg font-semibold">{interest.title}</h4>

                  <p className="text-sm leading-7 text-muted">{interest.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
