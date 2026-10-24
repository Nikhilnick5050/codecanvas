import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'

export default function Resume() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="mt-2 text-slate-400">{profile.name} · {profile.email} · {profile.phone}</p>

      <h2 className="mt-8 text-xl font-semibold text-accent">Education</h2>
      <p className="mt-2">{profile.education.degree}, {profile.education.school} ({profile.education.years}) — CGPA {profile.education.cgpa}</p>

      <h2 className="mt-8 text-xl font-semibold text-accent">Skills</h2>
      <ul className="mt-2 list-disc pl-5 text-slate-300">
        {Object.entries(profile.skills).map(([g, items]) => (
          <li key={g}><span className="capitalize">{g}</span>: {items.join(', ')}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-accent">Projects</h2>
      <ul className="mt-2 list-disc pl-5 text-slate-300">
        {projects.map((p) => (
          <li key={p.title}><strong>{p.title}</strong> — {p.description}</li>
        ))}
      </ul>
    </section>
  )
}
