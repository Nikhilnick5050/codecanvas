import { useState } from 'react'

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xqppaqjp'

const initialGuests = [
  { name: 'Nikhil', message: 'Welcome to my portfolio! 👋' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [guests, setGuests] = useState(initialGuests)
  const [guest, setGuest] = useState({ name: '', message: '' })

  const submitForm = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const addGuest = (e) => {
    e.preventDefault()
    if (!guest.name.trim() || !guest.message.trim()) return
    setGuests([...guests, guest])
    setGuest({ name: '', message: '' })
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>

      <h2 className="mt-8 text-xl font-semibold text-accent">Send a message</h2>
      <form onSubmit={submitForm} className="mt-4 space-y-4">
        <input
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          rows="4"
          placeholder="Your message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button className="rounded-md bg-accent px-5 py-2 font-medium text-canvas hover:opacity-90">
          Send
        </button>
        {status === 'sent' && <p className="text-emerald-400">Message sent — thank you!</p>}
        {status === 'error' && <p className="text-red-400">Something went wrong. Please try again.</p>}
      </form>

      <h2 className="mt-12 text-xl font-semibold text-accent">Guest book</h2>
      <div className="mt-4 space-y-3">
        {guests.map((g, i) => (
          <div key={i} className="rounded-lg border border-slate-800 p-4">
            <p className="font-medium">{g.name}</p>
            <p className="text-sm text-slate-300">{g.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={addGuest} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Name"
          value={guest.name}
          onChange={(e) => setGuest({ ...guest, name: e.target.value })}
        />
        <input
          className="flex-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Leave a note"
          value={guest.message}
          onChange={(e) => setGuest({ ...guest, message: e.target.value })}
        />
        <button className="rounded-md border border-accent px-4 py-2 text-accent hover:bg-accent hover:text-canvas">
          Sign
        </button>
      </form>
    </section>
  )
}
