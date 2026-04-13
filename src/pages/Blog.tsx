import { useState } from 'react'
import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import NewsletterSignup from '../components/NewsletterSignup'
import { blogPosts } from '../data/blogPosts'

const categories = [
  'All',
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div>
      <SEO
        title="Blog"
        description="Insights on AI in education, teacher workload, curriculum planning, and how Smart Syllabus Assistant is helping NSW secondary teachers plan better, faster."
        path="/blog"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Insights for educators
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            AI in education, teacher workload, curriculum planning, and what is
            actually working in NSW schools.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === activeCategory
                    ? 'bg-lime-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <Link
              to={`/blog/${featured.slug}`}
              className="block bg-gradient-to-br from-lime-50 to-slate-50 rounded-xl p-8 sm:p-12 border border-slate-100 hover:border-lime-200 transition-colors group"
            >
              <span className="inline-block bg-lime-100 text-lime-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {featured.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-lime-700 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4 max-w-2xl">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>{formatDate(featured.date)}</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {featured.readTime}
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      {rest.length > 0 && (
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-xl border border-slate-100 hover:border-lime-200 transition-colors group flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full mb-3 self-start">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-lime-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-lime-600 to-lime-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to try Smart Syllabus Assistant?
          </h2>
          <p className="text-lime-100 text-lg mb-8">
            Start free. See what AI lesson planning should look like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.smartsyllabusassistant.com/signup"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm bg-white text-lime-700 border-2 border-white hover:bg-lime-50 transition-all duration-200"
            >
              Try free — no card required
            </a>
            <Link
              to="/smart-syllabus-assistant"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white border-2 border-white/50 hover:border-white transition-all duration-200"
            >
              Learn more <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
