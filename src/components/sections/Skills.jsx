import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';

import {
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiFigma,
  SiJson,
  SiNpm,
  SiJsonwebtokens,
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io5';
import { ShieldCheck, Send } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Technologies I use to build modern and responsive user interfaces.',
    skills: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'JavaScript', icon: IoLogoJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Technologies I use to build server-side applications and handle data.',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Better Auth', icon: ShieldCheck },
      { name: 'JWT', icon: SiJsonwebtokens },
    ],
  },
  {
    title: 'Tools & Technologies',
    description:
      'Tools and technologies I use for development, API testing, design, and deployment.',
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: VscVscode },
      { name: 'npm', icon: SiNpm },
      { name: 'Vercel', icon: SiVercel },
      { name: 'REST APIs', icon: Send },
      { name: 'JSON', icon: SiJson },
      { name: 'Thunder Client', icon: Send },
      { name: 'Figma', icon: SiFigma },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            My Technical Skills
          </p>

          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Technologies I Work With</h2>

          <p className="mt-4 max-w-2xl leading-8 text-muted">
            Here are the technologies and tools I've been learning and using throughout my web
            development journey.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-5">
                <h3 className="font-heading text-xl font-semibold">{category.title}</h3>

                <p className="mt-2 text-sm text-muted">{category.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-5"
                    >
                      <Icon
                        className="shrink-0 text-2xl text-accent transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      />

                      <span className="text-sm font-medium sm:text-base">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
