import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-canvas/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-bold text-accent">CodeCanvas</Link>
        <div className="flex flex-wrap gap-4 text-sm">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'text-slate-300 hover:text-white'
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/login" className="rounded-md border border-accent px-3 py-1 text-accent hover:bg-accent hover:text-canvas">
            Login
          </Link>
        </div>
      </nav>
    </header>
  )
}
