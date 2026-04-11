import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">
          This page doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm bg-lime-600 text-white hover:bg-lime-700 shadow-sm hover:shadow-md transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
