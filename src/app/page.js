export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="mx-auto flex min-h-dvh max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Personal Portfolio
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Hi, I'm Maksudur Rahman.</h1>

        <p className="mt-5 max-w-xl text-muted">
          A Full Stack Web Developer passionate about building modern and meaningful web
          applications.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-accent px-6 py-3 text-white">View My Work</button>

          <button className="rounded-full border border-white/20 px-6 py-3">Download Resume</button>
        </div>
      </section>
    </main>
  );
}
