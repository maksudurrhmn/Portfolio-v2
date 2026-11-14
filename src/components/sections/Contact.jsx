import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa6';

const contactEmail = 'maksudurrhmn2001@gmail.com';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/maksudurrhmn',
    icon: FaGithub,
  },
  {
    name: 'LinkedIn',
    href: 'YOUR_LINKEDIN_PROFILE_URL',
    icon: FaLinkedin,
  },
  {
    name: 'Facebook',
    href: 'YOUR_FACEBOOK_PROFILE_URL',
    icon: FaFacebook,
  },
  {
    name: 'Instagram',
    href: 'YOUR_INSTAGRAM_PROFILE_URL',
    icon: FaInstagram,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Get In Touch
          </p>

          <h2 className="font-heading text-3xl font-bold sm:text-4xl">Let's Work Together</h2>

          <p className="mt-4 max-w-2xl leading-8 text-muted">
            I'm always interested in connecting with people, discussing technology, and exploring
            new opportunities. Feel free to reach out!
          </p>
        </div>

        {/* Contact Card */}
        <div className="grid gap-8 rounded-3xl border border-border bg-surface p-8 md:grid-cols-2 md:p-12">
          <div>
            <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Mail size={27} />
            </div>

            <h3 className="font-heading text-2xl font-bold">Have a project in mind?</h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-muted">
              Whether you have a project idea, a question, or simply want to connect, my inbox is
              always open.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-white transition-opacity hover:opacity-85"
            >
              <Send size={17} />
              Say Hello
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="flex flex-col justify-center gap-6 md:border-l md:border-border md:pl-12">
            <div>
              <p className="mb-3 text-sm font-medium text-muted">Email Address</p>

              <a
                href={`mailto:${contactEmail}`}
                className="break-all text-base md:text-lg font-semibold transition-colors hover:text-accent"
              >
                {contactEmail}
              </a>
            </div>

            <div>
              <p className="mb-4 text-sm font-medium text-muted">Find Me On</p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon size={18} />
                      {social.name}
                      <ArrowUpRight size={15} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
