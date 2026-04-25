import {
  Shield,
  Calendar,
  Users,
  Clock,
  FileText,
  Star,
  ArrowRight,
} from 'lucide-react'
import CTAButton from '../components/CTAButton'
import ProductPreview from '../components/ProductPreview'
import NewsletterSignup from '../components/NewsletterSignup'
import SEO from '../components/SEO'
import { CALENDLY_URL } from '../constants'

export default function Product() {
  return (
    <div>
      <SEO
        title="Smart Syllabus Assistant"
        description="Smart Syllabus Assistant is an AI planning tool for NSW secondary teachers — scope and sequence through to differentiated lesson plans, all aligned to NESA syllabus outcomes."
        path="/smart-syllabus-assistant"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-lime-600 font-semibold text-sm uppercase tracking-wide mb-4">
            Smart Syllabus Assistant
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            AI lesson planning that actually{' '}
            <span className="text-lime-600">knows your students</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            The only planning tool that builds your term scope first, then
            generates differentiated lessons with your learner profiles woven
            into every phase. Built for NSW secondary. Aligned to NESA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="https://www.smartsyllabusassistant.com/signup">
              Try free — no card required
            </CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary">
              Book a school demo
            </CTAButton>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Free tier: 1 scope, 3 lessons. Upgrade anytime.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12 text-center">
            What teachers get
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock size={24} />,
                title: '5–10 hours back every week',
                desc: 'Generate a full scope and sequence in under a minute. Lesson plans in seconds. Editing and export built in.',
              },
              {
                icon: <Users size={24} />,
                title: 'Differentiation that actually works',
                desc: 'Build learner profiles once. Every lesson weaves in specific teaching notes for individual students — in every phase, not in a box at the bottom.',
              },
              {
                icon: <Shield size={24} />,
                title: 'NESA-verified outcome codes',
                desc: 'Every outcome code is checked against the NSW syllabus database. No invented codes. No surface-level alignment.',
              },
              {
                icon: <Calendar size={24} />,
                title: 'Scope before lesson',
                desc: 'Your term plan is built first. Week 3 knows what Week 2 covered. Lessons sit inside a coherent sequence, not generated in isolation.',
              },
              {
                icon: <FileText size={24} />,
                title: 'Export-ready for school submissions',
                desc: 'One-click DOCX export in a structured, table-formatted layout that meets school submission standards.',
              },
              {
                icon: <Star size={24} />,
                title: 'Delivery and impact tracking',
                desc: 'After each lesson, record what worked, what to change, and rate impact — building a feedback loop that strengthens your planning over time.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100"
              >
                <div className="text-lime-600 mb-3" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <ProductPreview />

      {/* How It Works — The Woven Plan */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">
            How it works — The Woven Plan&trade;
          </h2>
          <p className="text-lg text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Most planning tools bolt differentiation on at the end. Smart
            Syllabus Assistant weaves your students into every phase of every
            lesson.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Build your learner profiles',
                desc: 'Create anonymised profiles for each student — learning needs, strengths, accommodations, and what engages them. Done once per class, used in every lesson all year.',
              },
              {
                step: '2',
                title: 'Generate your scope and sequence',
                desc: 'Enter subject, year level, term, and weeks. A NESA-aligned scope is built week-by-week — outcome codes, topic focus, literacy and numeracy connections, and cross-curriculum priorities.',
              },
              {
                step: '3',
                title: 'Generate lessons shaped around your class',
                desc: 'Pick any week from your scope. Every instructional phase — Engagement, Explicit Teaching, Guided Practice, Group Task, Independent Work, Closure — includes learning intentions, success criteria, timed activities, and teaching notes for individual students.',
              },
              {
                step: '4',
                title: 'Edit, refine, make it yours',
                desc: 'Fully editable. Adjust timing, rewrite activities, regenerate individual phases with natural language instructions. The plan is your starting point — you shape it.',
              },
              {
                step: '5',
                title: 'Export, deliver, reflect',
                desc: "Export to Word for school submissions. After delivery, record what worked and what to change — building a feedback loop that strengthens your planning over time.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 items-start bg-white rounded-xl p-6 border border-slate-100"
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

      {/* Subjects */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            20 NSW subjects and growing
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">
            Full NESA syllabus outcomes loaded for Stage 4 and Stage 5. More
            subjects added regularly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'English',
              'Mathematics',
              'Science',
              'History',
              'Geography',
              'PDHPE',
              'Commerce',
              'Visual Arts',
              'Music',
              'Drama',
              'Dance',
              'Technology Mandatory',
              'Food Technology',
              'Computing Technology',
              'Textiles Technology',
              'Agricultural Technology',
              'Photography, Film and Digital Media',
              'Engineering Technology',
              'Industrial Technology',
              'Design Innovation Technology',
            ].map((subject) => (
              <span
                key={subject}
                className="bg-lime-50 text-lime-700 font-medium text-sm px-4 py-2 rounded-full border border-lime-200"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ChatGPT Comparison */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
            What makes this different from ChatGPT
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Teachers already use AI. The question is whether it actually meets
            curriculum standards and knows your students.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Feature</th>
                  <th className="py-3 px-4 font-semibold text-slate-400 text-center">ChatGPT</th>
                  <th className="py-3 pl-4 font-semibold text-lime-700 text-center">
                    Smart Syllabus Assistant
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['NESA outcome codes verified', 'No', 'Yes'],
                  ['Scope before lesson (connected planning)', 'No', 'Yes'],
                  ['Learner profiles woven into every phase', 'No', 'Yes'],
                  ['Built specifically for NSW Years 7\u201312', 'Generic', 'Yes'],
                ].map(([feature, chatgpt, ssa]) => (
                  <tr key={feature} className="border-b border-slate-100">
                    <td className="py-3 pr-4">{feature}</td>
                    <td className="py-3 px-4 text-center text-slate-400">{chatgpt}</td>
                    <td className="py-3 pl-4 text-center font-medium text-lime-700">{ssa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Your students' data stays safe
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
            {[
              'All student data is anonymised — "Student 1", "Student 2". No real names are ever used or stored.',
              'Learner profiles describe needs and strengths, not personal information.',
              'Built in Australia, designed to meet school data handling expectations.',
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start flex-1">
                <Shield
                  size={16}
                  className="text-lime-600 mt-1 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Pricing CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
            Start free. Upgrade when you're ready. School licences cover
            everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/pricing">
              <span className="flex items-center gap-2">
                See pricing <ArrowRight size={16} />
              </span>
            </CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary">
              Book a school demo
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-lime-600 to-lime-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            See it in action
          </h2>
          <p className="text-lime-100 text-lg mb-8 max-w-xl mx-auto">
            15 minutes. We'll walk through how it works with your subjects and
            your students. No sales pitch — just a straight conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={CALENDLY_URL} variant="secondary">
              Book a 15 min call
            </CTAButton>
            <CTAButton href="https://www.smartsyllabusassistant.com/signup" variant="secondary">
              Try free now
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
