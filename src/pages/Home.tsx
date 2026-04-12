import { CheckCircle, ArrowRight } from 'lucide-react'
import CTAButton from '../components/CTAButton'
import SocialProof from '../components/SocialProof'
import ProductPreview from '../components/ProductPreview'
import SEO from '../components/SEO'
import { CALENDLY_URL } from '../constants'

export default function Home() {
  return (
    <div>
      <SEO
        title="Limes Digital — Cut Teacher Planning Time by 5–10 Hours a Week"
        description="Smart Syllabus Assistant is a teacher-centred AI planning tool that cuts lesson planning time by 5-10 hours a week while keeping teachers in control and within curriculum standards."
        path="/"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Cut your teachers' planning time by{' '}
            <span className="text-lime-600">5–10 hours a week</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Your teachers plan lessons in minutes. Your curriculum stays intact.
            Your staff stop burning out.
          </p>

          <ul className="text-left max-w-xl mx-auto space-y-3 mb-10">
            {[
              'Hours back every week — for students, not paperwork',
              'Burnout risk drops when planning becomes manageable',
              "No new system to learn. It fits what you already do.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle
                  size={20}
                  className="text-lime-600 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={CALENDLY_URL}>Book a 15 min call</CTAButton>
            <CTAButton href="#how-it-works" variant="secondary">
              See how it works
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">
            You already know the problem
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              'Your staff are working well beyond sustainable hours just to keep up',
              'Early-career teachers are openly talking about leaving',
              "Experienced teachers are coasting because planning from scratch every term isn't worth the effort anymore",
              '49% of secondary teachers teach at least some subjects out of field — and they still need to plan',
              "You've tried tools before — they created more work, not less",
              'Sunday nights are for lesson prep, not families',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-600 text-lg"
              >
                <span className="text-red-400 mt-1 shrink-0">&#9679;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-800 text-lg font-medium text-center">
            You don't need another initiative. You need the planning burden cut
            in half.
          </p>
        </div>
      </section>

      {/* Product Preview */}
      <ProductPreview />

      {/* How It Works — The Woven Plan */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">
            How it works — The Woven Plan&trade;
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Most planning tools bolt differentiation on at the end. Smart
            Syllabus Assistant weaves your students into every phase of every
            lesson.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Teachers build learner profiles',
                desc: 'Anonymised profiles for each student — learning needs, strengths, accommodations. Done once per class, used in every lesson.',
              },
              {
                step: '2',
                title: 'Generate a term scope',
                desc: 'Subject, year level, term, and weeks in. A NESA-aligned scope and sequence comes out — outcome by outcome, week by week.',
              },
              {
                step: '3',
                title: 'Generate lessons shaped by their class',
                desc: 'Every instructional phase includes learning intentions, success criteria, timed activities, and teaching notes for individual students — woven in, not bolted on.',
              },
              {
                step: '4',
                title: 'Edit and make it theirs',
                desc: 'Fully editable. Adjust timing, rewrite activities, regenerate phases with plain language. The plan is a starting point — your teachers shape it.',
              },
              {
                step: '5',
                title: 'Export, deliver, reflect',
                desc: 'Export to Word for school submissions. After delivery, teachers record what worked and what to change — building a feedback loop.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-lime-700 font-bold">{card.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton to="/about#how-it-works" variant="secondary">
              <span className="flex items-center gap-2">
                See the full breakdown <ArrowRight size={16} />
              </span>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-lime-600 to-lime-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            See if Smart Syllabus Assistant is right for your school
          </h2>
          <p className="text-lime-100 text-lg mb-8 max-w-xl mx-auto">
            15 minutes. We'll walk through how it works and whether it fits your
            context. No sales pitch — just a straight conversation.
          </p>
          <CTAButton href={CALENDLY_URL} variant="secondary">
            Book a 15 min call
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
