import { profile } from '../data/profile.js'

export default function About() {
  const { skills, education } = profile
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4 text-slate-300">
        I'm a Computer Engineering student at PCCOE Pune and a full-stack developer.
        I love turning ideas into real products — from AI platforms to 3D games.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-accent">Education</h2>
      <div className="mt-3 rounded-lg border border-slate-800 p-4">
        <p className="font-medium">{education.degree} · {education.school}</p>
        <p className="text-sm text-slate-400">{education.years} · CGPA {education.cgpa}</p>
      </div>

      <h2 className="mt-10 text-xl font-semibold text-accent">Skills</h2>
      {Object.entries(skills).map(([group, items]) => (
        <div key={group} className="mt-3">
          <p className="text-sm capitalize text-slate-400">{group}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {items.map((s) => (
              <span key={s} className="rounded-full border border-slate-700 px-3 py-1 text-sm">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
