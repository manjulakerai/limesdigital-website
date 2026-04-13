import { useState } from 'react'
import { Mail } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'inline' | 'banner'
}

export default function NewsletterSignup({ variant = 'banner' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // TODO: connect to email service (e.g. ConvertKit, Mailchimp, or Supabase)
    setSubmitted(true)
  }

  if (variant === 'inline') {
    return (
      <div className="bg-lime-50 rounded-xl p-6 border border-lime-100">
        {submitted ? (
          <p className="text-lime-700 font-medium text-center">
            Thanks — we'll be in touch.
          </p>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-3">
              <Mail size={18} className="text-lime-600" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-slate-900">
                Get updates for educators
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.edu.au"
                required
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-lime-600 text-white rounded-lg font-semibold text-sm hover:bg-lime-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    )
  }

  // Banner variant (used in sections)
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <Mail
          size={32}
          className="text-lime-600 mx-auto mb-4"
          aria-hidden="true"
        />
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Stay in the loop
        </h2>
        <p className="text-slate-500 mb-8">
          AI in education, teacher workload insights, and practical planning
          strategies — delivered to your inbox.
        </p>
        {submitted ? (
          <p className="text-lime-700 font-semibold text-lg">
            Thanks — you're on the list.
          </p>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.edu.au"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-lime-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-lime-600 text-white rounded-lg font-semibold text-sm hover:bg-lime-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
