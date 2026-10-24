import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-800 p-5 transition hover:border-accent"
          >
            <h2 className="text-lg font-semibold text-accent">{p.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-300">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
