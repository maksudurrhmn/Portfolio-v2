export default function Loading() {
  return (
    <main
      className="mx-auto min-h-screen max-w-7xl animate-pulse px-6 py-12"
      aria-busy="true"
      aria-label="Loading project details"
    >
      {/* Back button placeholder */}
      <div className="mb-10 h-5 w-32 rounded bg-surface" />

      {/* Project heading */}
      <div className="mb-8 space-y-4">
        <div className="h-4 w-28 rounded bg-surface" />
        <div className="h-12 w-3/4 max-w-lg rounded-lg bg-surface" />
        <div className="h-4 w-full max-w-2xl rounded bg-surface" />
        <div className="h-4 w-2/3 max-w-xl rounded bg-surface" />
      </div>

      {/* Action buttons */}
      <div className="mb-12 flex gap-4">
        <div className="h-11 w-36 rounded-full bg-surface" />
        <div className="h-11 w-36 rounded-full bg-surface" />
      </div>

      {/* Project preview */}
      <div className="mb-12 aspect-video w-full rounded-2xl border border-border bg-surface" />

      {/* Technologies */}
      <section className="mb-12 space-y-5">
        <div className="h-7 w-40 rounded bg-surface" />

        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-9 w-24 rounded-full bg-surface" />
          ))}
        </div>
      </section>

      {/* Project features */}
      <section className="space-y-6">
        <div className="h-7 w-48 rounded bg-surface" />

        <div className="grid gap-4 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="rounded-xl border border-border p-6">
              <div className="mb-4 h-5 w-2/3 rounded bg-surface" />
              <div className="h-4 w-full rounded bg-surface" />
              <div className="mt-2 h-4 w-4/5 rounded bg-surface" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
