import { ArrowLeft, Clock, ArrowRight } from 'lucide-react'
import { Link, useParams, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import CTAButton from '../components/CTAButton'
import { CALENDLY_URL } from '../constants'
import { getPostBySlug, blogPosts } from '../data/blogPosts'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function renderBlock(block: string, index: number) {
  // Heading
  if (block.startsWith('## ')) {
    return (
      <h2
        key={index}
        className="text-2xl font-bold text-slate-900 mt-10 mb-4"
      >
        {block.slice(3)}
      </h2>
    )
  }

  // Horizontal rule
  if (block === '---') {
    return <hr key={index} className="my-10 border-slate-200" />
  }

  // Bullet list
  if (block.startsWith('- ')) {
    const items = block.split('\n').map((line) => line.replace(/^- /, ''))
    return (
      <ul key={index} className="space-y-2 my-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
            <span className="text-lime-600 mt-1.5 shrink-0">&#8226;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }

  // Bold paragraph (starts with **)
  if (block.startsWith('**') && block.endsWith('**')) {
    return (
      <p key={index} className="text-slate-800 font-semibold leading-relaxed my-4">
        {block.slice(2, -2)}
      </p>
    )
  }

  // Italic / CTA paragraph (wrapped in *)
  if (block.startsWith('*') && block.endsWith('*')) {
    const text = block.slice(1, -1)
    // Parse internal links [text](/path)
    const parts = text.split(/(\[.*?\]\(.*?\))/)
    return (
      <p key={index} className="text-slate-500 italic leading-relaxed my-4 text-sm border-t border-slate-100 pt-6">
        {parts.map((part, i) => {
          const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
          if (linkMatch) {
            const [, label, href] = linkMatch
            if (href.startsWith('http')) {
              return (
                <a key={i} href={href} className="text-lime-700 hover:text-lime-800 not-italic font-medium" target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              )
            }
            return (
              <Link key={i} to={href} className="text-lime-700 hover:text-lime-800 not-italic font-medium">
                {label}
              </Link>
            )
          }
          return <span key={i}>{part}</span>
        })}
      </p>
    )
  }

  // Bold inline sections within paragraph
  if (block.includes('**')) {
    const parts = block.split(/(\*\*.*?\*\*)/)
    return (
      <p key={index} className="text-slate-600 leading-relaxed my-4">
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return (
              <strong key={i} className="text-slate-800">
                {part.slice(2, -2)}
              </strong>
            )
          }
          return <span key={i}>{part}</span>
        })}
      </p>
    )
  }

  // Regular paragraph
  return (
    <p key={index} className="text-slate-600 leading-relaxed my-4">
      {block}
    </p>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  // Find next/prev posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined
  const prevPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined

  return (
    <div>
      <SEO
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-12 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-lime-700 transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to blog
          </Link>
          <span className="inline-block bg-lime-100 text-lime-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>
      </article>

      {/* Next/Prev Navigation */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="flex-1 group"
              >
                <span className="text-xs text-slate-400 mb-1 block">
                  Previous
                </span>
                <span className="text-slate-900 font-medium group-hover:text-lime-700 transition-colors">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="flex-1 text-right group"
              >
                <span className="text-xs text-slate-400 mb-1 block">
                  Next
                </span>
                <span className="text-slate-900 font-medium group-hover:text-lime-700 transition-colors flex items-center justify-end gap-1">
                  {nextPost.title} <ArrowRight size={14} />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-lime-600 to-lime-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            See Smart Syllabus Assistant in action
          </h2>
          <p className="text-lime-100 text-lg mb-8">
            15 minutes. No obligation. Just a conversation about your school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={CALENDLY_URL} variant="secondary">
              Book a 15 min call
            </CTAButton>
            <CTAButton
              href="https://www.smartsyllabusassistant.com/signup"
              variant="secondary"
            >
              Try free
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
