import { useState } from 'react'
import { supabase } from '../lib/supabase.js'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (!supabase) {
      setMsg('Login is not configured yet — Supabase keys are missing.')
      return
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMsg(error.message)
    else setMsg('Logged in!')
  }

  return (
    <section className="mx-auto max-w-sm px-4 py-20">
      <h1 className="text-2xl font-bold">Guest Login</h1>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <input
          type="email"
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full rounded-md bg-accent px-5 py-2 font-medium text-canvas hover:opacity-90">
          Sign in
        </button>
      </form>
      {msg && <p className="mt-4 text-sm text-slate-300">{msg}</p>}
    </section>
  )
}
