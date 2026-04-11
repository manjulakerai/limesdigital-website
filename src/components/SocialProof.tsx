import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
  featured?: boolean
}

const testimonials: Testimonial[] = [
  {
    quote:
      'In my testing, the product consistently met its claims of significantly reducing lesson-planning time and stress. I found that this tool made a meaningful difference in my day-to-day practice.',
    name: 'Conditionally Accredited Teacher',
    role: 'Sydney, NSW',
    featured: true,
  },
  {
    quote:
      "Compared with ChatGPT or Copilot, Smart Syllabus produced more accurate, curriculum-aligned lesson plans and required far less re-prompting \u2014 because it's purpose-built for teachers.",
    name: 'Conditionally Accredited Teacher',
    role: 'Sydney, NSW',
  },
  {
    quote:
      "You've made it so you can input the class details \u2014 that could be something very personal that could work.",
    name: 'Pooja',
    role: 'Secondary Maths Teacher (Year 7\u201313)',
  },
]

export default function SocialProof() {
  const featured = testimonials.find((t) => t.featured)
  const supporting = testimonials.filter((t) => !t.featured)

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
          What teachers are saying
        </h2>
        <p className="text-slate-500 text-center mb-12">
          Built with teachers and principals across Australia and the UK.
        </p>

        {/* Featured testimonial */}
        {featured && (
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 mb-8 border border-slate-100 relative">
            <Quote
              size={32}
              className="text-lime-600 mb-4"
              aria-hidden="true"
            />
            <blockquote className="text-xl sm:text-2xl text-slate-800 leading-relaxed font-medium mb-6">
              "{featured.quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-slate-900">{featured.name}</p>
              <p className="text-slate-500 text-sm">{featured.role}</p>
            </div>
          </div>
        )}

        {/* Supporting testimonials */}
        <div className="grid sm:grid-cols-2 gap-6">
          {supporting.map((t) => (
            <div
              key={t.quote}
              className="bg-slate-50 rounded-xl p-6 border border-slate-100"
            >
              <Quote
                size={20}
                className="text-lime-600 mb-3"
                aria-hidden="true"
              />
              <blockquote className="text-slate-700 leading-relaxed mb-4">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-slate-900 text-sm">
                  {t.name}
                </p>
                <p className="text-slate-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
