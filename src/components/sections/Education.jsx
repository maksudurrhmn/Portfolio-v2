import { GraduationCap, BookOpen, Code2, Laptop, Rocket } from 'lucide-react';

const education = {
  degree: 'Diploma in Engineering',
  department: 'Electrical Engineering',
  institution: 'National Polytechnic Institute',
  status: 'Completed',
};

const developmentJourney = [
  {
    title: 'Full Stack Web Development',
    organization: 'Programming Hero',
    description:
      'Learning modern frontend and backend technologies through structured lessons and practical assignments.',
    icon: Code2,
  },
  {
    title: 'Practical Project Development',
    organization: 'Personal & Academic Projects',
    description:
      'Applying my knowledge by building responsive web applications and exploring full-stack development.',
    icon: Laptop,
  },
  {
    title: 'Continuous Learning',
    organization: 'Self-Learning',
    description:
      'Exploring new technologies, improving problem-solving skills, and experimenting with different tools.',
    icon: Rocket,
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            My Background
          </p>

          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Education & Experience</h2>

          <p className="mt-4 max-w-2xl leading-8 text-muted">
            My educational background and ongoing journey toward becoming a Full Stack Developer.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Education */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <GraduationCap size={23} />
              </div>

              <h3 className="font-heading text-xl font-semibold">Education</h3>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {education.status}
                </span>

                <GraduationCap size={22} className="text-muted" />
              </div>

              <h4 className="font-heading text-xl font-semibold">{education.degree}</h4>

              <p className="mt-2 font-medium text-accent">{education.department}</p>

              <p className="mt-4 text-sm leading-7 text-muted">{education.institution}</p>
            </div>
          </div>

          {/* Learning & Development */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <div className="rounded-xl bg-accent/10 p-3 text-accent">
                <BookOpen size={23} />
              </div>

              <h3 className="font-heading text-xl font-semibold">Learning & Development</h3>
            </div>

            <div className="space-y-5">
              {developmentJourney.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-6"
                  >
                    <div className="h-fit rounded-xl bg-accent/10 p-3 text-accent">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4 className="font-heading font-semibold">{item.title}</h4>

                      <p className="mt-1 text-sm font-medium text-accent">{item.organization}</p>

                      <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
