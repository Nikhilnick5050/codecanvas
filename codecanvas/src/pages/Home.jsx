import { Link } from 'react-router-dom'
import { profile } from '../data/profile.js'

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold md:text-5xl">{profile.name}</h1>
      <p className="mt-3 text-xl text-accent">{profile.title}</p>
      <p className="mx-auto mt-4 max-w-xl text-slate-300">{profile.tagline}</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/projects" className="rounded-md bg-accent px-5 py-2 font-medium text-canvas hover:opacity-90">
          View Projects
        </Link>
        <Link to="/contact" className="rounded-md border border-slate-600 px-5 py-2 hover:border-accent hover:text-accent">
          Contact Me
        </Link>
      </div>
    </section>
  )
}
