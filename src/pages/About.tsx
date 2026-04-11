import { Quote } from 'lucide-react'
import CTAButton from '../components/CTAButton'
import SEO from '../components/SEO'
import { CALENDLY_URL } from '../constants'

export default function About() {
  return (
    <div>
      <SEO
        title="About"
        description="Manjula Kerai spent 10 years working inside schools before building Smart Syllabus Assistant — an AI planning tool that cuts teacher workload by 5-10 hours a week."
        path="/about"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            I spent 10 years inside schools. The workload crisis isn't news to
            me.
          </h1>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Why I Built This
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              I spent a decade working inside schools — as a personal assistant
              to a vice-principal, a sixth form administrator, and a parent
              governor. I saw the operations side, the leadership side, and the
              classroom side.
            </p>
            <p>
              What I saw everywhere was the same thing: great teachers drowning
              in planning and admin that had nothing to do with teaching.
              Early-career staff burning out before they found their feet.
              Experienced teachers running on fumes because the system demanded
              it.
            </p>
            <p>
              That experience never left me. When I started building AI systems
              for businesses, I kept coming back to the same question: why are
              teachers still spending 5–10 hours a week on work that could be
              done in minutes?
            </p>
            <p className="font-medium text-slate-800">
              So I built Smart Syllabus Assistant. Not from a lab. From
              conversations with real teachers and principals across Australia
              and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Built by someone who knows both sides
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
            <p>
              Before Smart Syllabus Assistant, I ran 50+ web and AI projects through Limes Digital —
              voice AI systems, automation workflows, content platforms. I've
              conducted AI audits for businesses in finance, marketing, and
              trades. I know what it takes to strip out inefficiency and rebuild
              operations around what actually matters.
            </p>
            <p>
              Education is where that experience hits hardest. The teachers I've
              spoken to don't need another app. They need the planning burden cut
              in half — without losing curriculum integrity or their own
              professional judgement.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { number: '10', label: 'Years in schools' },
              { number: '50+', label: 'AI & web projects delivered' },
              { number: 'All', label: 'NSW subjects supported' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 text-center border border-slate-100"
              >
                <p className="text-3xl font-bold text-lime-600 mb-1">
                  {stat.number}
                </p>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Actually Works */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            How Smart Syllabus Assistant works
          </h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Set up student profiles',
                desc: 'Teachers add anonymised learner profiles so the system understands who is in the room — learning needs, differentiation requirements, the full picture.',
              },
              {
                step: '2',
                title: 'Generate a term scope',
                desc: 'Upload a scope and sequence document. Smart Syllabus Assistant maps it to NESA curriculum outcomes and produces a structured term plan — week by week, outcome by outcome.',
              },
              {
                step: '3',
                title: 'Generate lesson plans',
                desc: 'Pick a week from the scope. Smart Syllabus Assistant generates a complete lesson: learning intentions, success criteria, instructional phases, differentiated activities, and teaching notes — all aligned to the curriculum.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 items-start bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-lime-700 font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Testimonials */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12 text-center">
            From the teachers and leaders who shaped it
          </h2>
          <div className="space-y-6">
            {[
              {
                quote:
                  'I fully endorse and recommend this tool as an effective way for new teachers to manage their class-planning workload, for out-of-area teachers to quickly create lessons in unfamiliar subjects, and for school leaders to generate curriculum-aligned scope and sequences with confidence.',
                name: 'Conditionally Accredited Teacher',
                role: 'Sydney, NSW',
              },
              {
                quote:
                  'I tried one lesson without the planner, one with, to see the difference — and it was massive.',
                name: 'Conditionally Accredited Teacher',
                role: 'Sydney, NSW',
              },
              {
                quote:
                  "60–70% of staff are using AI... the challenge is, how can they use it best?",
                name: 'School Principal',
                role: 'Sydney, NSW',
              },
            ].map((t) => (
              <div
                key={t.quote}
                className="bg-white rounded-xl p-6 sm:p-8 border border-slate-100"
              >
                <Quote
                  size={20}
                  className="text-lime-600 mb-3"
                  aria-hidden="true"
                />
                <blockquote className="text-slate-700 text-lg leading-relaxed mb-4">
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

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-lime-600 to-lime-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            See if Smart Syllabus Assistant is right for your school
          </h2>
          <p className="text-lime-100 text-lg mb-8">
            15 minutes. No obligation. Just a conversation about your school.
          </p>
          <CTAButton href={CALENDLY_URL} variant="secondary">
            Book a 15 min call
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
