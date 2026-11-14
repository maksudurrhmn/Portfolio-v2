import Image from 'next/image';
import { ArrowUpRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/maksudurrhmn',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/maksudurrhmn/',
    icon: FaLinkedin,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/maksudurrhmn.xyz',
    icon: FaFacebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/maksudurrhmn/',
    icon: FaInstagram,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2"
    >
      {/* Introduction */}
      <div className="order-2 lg:order-1">
        <p className="mb-5 flex items-center gap-2 text-sm font-medium text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Open to opportunities
        </p>

        <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Hi, I'm <span className="text-accent">Maksudur Rahman.</span>
        </h1>

        <h2 className="mt-5 text-xl font-semibold sm:text-2xl">Full Stack Web Developer</h2>

        <p className="mt-6 max-w-xl leading-8 text-muted">
          I build modern, responsive, and user-friendly web applications. I'm passionate about
          learning new technologies and turning ideas into meaningful digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white transition-transform hover:-translate-y-1"
          >
            View Projects <ArrowUpRight size={18} />
          </a>

          <a
            href="/resume/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface"
          >
            Download Resume <Download size={18} />
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10">
          <p className="mb-4 text-sm text-muted">Find me on</p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="rounded-full border border-border p-3 transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
                >
                  <Icon size={19} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent/20 shadow-2xl shadow-accent/10 sm:h-80 sm:w-80">
          <Image
            src="/images/profile/profile_pic.png"
            alt="Maksudur Rahman"
            fill
            priority
            sizes="(max-width: 640px) 256px, 320px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
