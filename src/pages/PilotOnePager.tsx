import { CheckCircle, Clock, Users, Target, Shield, ArrowRight } from 'lucide-react'
import CTAButton from '../components/CTAButton'
import SEO from '../components/SEO'
import { CALENDLY_URL, PHONE, EMAIL } from '../constants'

export default function PilotOnePager() {
  return (
    <div>
      <SEO
        title="School Pilot Program"
        description="Smart Syllabus Assistant pilot program for NSW secondary schools — 30-90 day structured pilot with 5-10 teachers. Reduce planning time, retain great teachers."
        path="/pilot"
      />

      {/* Print styles */}
      <style>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          section { break-inside: avoid; }
          .print-compact { padding-top: 1rem !important; padding-bottom: 1rem !important; }
          body { font-size: 11pt; }
          a { text-decoration: none !important; color: inherit !important; }
        }
      `}</style>

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-12 sm:py-16 print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/logo.png"
              alt="Limes Digital"
              className="h-8"
              width={128}
              height={32}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-4">
            Smart Syllabus Assistant
            <span className="block text-lime-600 text-2xl sm:text-3xl mt-1">
              School Pilot Program
            </span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            A structured 30–90 day pilot to measure how AI-assisted planning
            reduces teacher workload, supports retention, and maintains
            curriculum integrity at your school.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-10 sm:py-14 bg-white print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            The problem
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { stat: '50+', label: 'Median hours worked per week by full-time teachers (AITSL)' },
              { stat: '1 in 3', label: 'Teachers uncertain about staying in the profession' },
              { stat: '49%', label: 'Secondary teachers teaching at least one subject out of field' },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-slate-50 rounded-lg p-4 text-center border border-slate-100"
              >
                <p className="text-2xl font-bold text-lime-600">{item.stat}</p>
                <p className="text-xs text-slate-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed">
            Lesson planning is one of the largest contributors to unsustainable
            workload. New teachers spend up to 5 hours per lesson. Out-of-field
            teachers face the same burden in subjects they were not trained for.
            The result: burnout, attrition, and Sunday nights lost to
            preparation.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-10 sm:py-14 bg-slate-50 print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            The solution
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Smart Syllabus Assistant is an AI planning tool built specifically
            for NSW secondary teachers. It generates NESA-aligned scope and
            sequence and differentiated lesson plans — with learner profiles
            woven into every instructional phase.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Target size={20} />,
                title: 'Scope first, then lesson',
                desc: 'Term plan built week-by-week with verified NESA outcome codes. Lessons sit inside a coherent sequence.',
              },
              {
                icon: <Users size={20} />,
                title: 'The Woven Plan\u2122',
                desc: 'Anonymised learner profiles shape every instructional phase — differentiation woven in, not bolted on.',
              },
              {
                icon: <Clock size={20} />,
                title: '5\u201310 hours saved weekly',
                desc: 'Full lesson plans in minutes, not hours. Editable, exportable to Word, submission-ready.',
              },
              {
                icon: <Shield size={20} />,
                title: 'Privacy by design',
                desc: 'All student data anonymised. No real names stored. Built in Australia for Australian schools.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-lg p-4 border border-slate-100 flex gap-3"
              >
                <div className="text-lime-600 mt-0.5 shrink-0" aria-hidden="true">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Structure */}
      <section className="py-10 sm:py-14 bg-white print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Pilot structure
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-lime-700 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  Week 1–2: Onboarding + baseline
                </h3>
                <p className="text-sm text-slate-600">
                  Teachers set up accounts, build learner profiles, generate
                  first scope and 2–3 lesson plans. Baseline planning time
                  measured.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-lime-700 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  Week 3–6: Active use
                </h3>
                <p className="text-sm text-slate-600">
                  1–3 plans per week per teacher. Track plans generated, editing
                  time, export frequency. Regular check-ins.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-lime-700 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm">
                  Week 7–12: Integration + review
                </h3>
                <p className="text-sm text-slate-600">
                  Term planning, structured feedback, leadership review of
                  outputs. Day 30 check-in. Day 90 formal leadership review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="py-10 sm:py-14 bg-slate-50 print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Pilot group: 5–10 teachers
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {[
              '1 enthusiastic early adopter — your champion',
              '2–3 open but cautious teachers — the realistic middle',
              '1 respected senior teacher — for credibility',
              'Optionally a Head of Department — for cross-faculty visibility',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle
                  size={16}
                  className="text-lime-600 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Success Criteria */}
      <section className="py-10 sm:py-14 bg-white print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Success criteria
          </h2>
          <p className="text-slate-600 text-sm mb-4 italic">
            "If we save each teacher 2–3 hours per week and 80% want to
            continue, the pilot is successful."
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border border-slate-100 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 text-sm mb-2">
                Quantitative
              </h3>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>30–50% reduction in planning time</li>
                <li>80% weekly active usage</li>
                <li>Total hours saved per teacher</li>
              </ul>
            </div>
            <div className="border border-slate-100 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 text-sm mb-2">
                Qualitative
              </h3>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>Workload reduction (teacher surveys)</li>
                <li>Quality improvement perception</li>
                <li>Recommendation likelihood</li>
              </ul>
            </div>
            <div className="border border-slate-100 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 text-sm mb-2">
                Strategic
              </h3>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>Teacher morale impact</li>
                <li>Early-career teacher support</li>
                <li>After-hours work reduction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Leadership Gets */}
      <section className="py-10 sm:py-14 bg-slate-50 print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            What leadership receives
          </h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {[
              'Monthly impact summary with usage analytics',
              'Teacher feedback quotes and satisfaction data',
              'Time saved estimates per teacher and across the group',
              'Anonymised sample outputs for quality review',
              'Day 30 check-in and Day 90 formal review session',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle
                  size={16}
                  className="text-lime-600 mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Investment */}
      <section className="py-10 sm:py-14 bg-white print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Investment
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-1">
                Pilot program
              </h3>
              <p className="text-2xl font-bold text-slate-900">
                $1,500–$3,000
              </p>
              <p className="text-sm text-slate-500 mb-4">
                5–10 teachers, 30–90 days
              </p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>Full platform access for pilot group</li>
                <li>Onboarding and training support</li>
                <li>Monthly impact reporting</li>
                <li>Dedicated account manager</li>
              </ul>
            </div>
            <div className="rounded-lg p-6 border-2 border-lime-600 bg-lime-50">
              <h3 className="font-semibold text-slate-900 mb-1">
                School-wide rollout
              </h3>
              <p className="text-2xl font-bold text-slate-900">
                $3,000<span className="text-base font-normal text-slate-500">/yr</span>
              </p>
              <p className="text-sm text-slate-500 mb-4">
                ~$5 per teacher/month. All staff.
              </p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>Unlimited teacher seats</li>
                <li>Admin dashboard</li>
                <li>Ongoing training and priority support</li>
                <li>Usage reporting for leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-10 sm:py-14 bg-slate-50 print-compact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Next steps
          </h2>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex gap-3">
              <span className="bg-lime-100 text-lime-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">
                1
              </span>
              <span>
                <strong className="text-slate-900">15-minute call</strong> — we walk through the tool and discuss
                fit for your school
              </span>
            </div>
            <div className="flex gap-3">
              <span className="bg-lime-100 text-lime-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">
                2
              </span>
              <span>
                <strong className="text-slate-900">Select pilot group</strong> — identify 5–10 teachers across 1–2
                faculties
              </span>
            </div>
            <div className="flex gap-3">
              <span className="bg-lime-100 text-lime-700 font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs">
                3
              </span>
              <span>
                <strong className="text-slate-900">Launch pilot</strong> — onboarding, training, and first plans
                generated within the first week
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact + CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-lime-600 to-lime-700 no-print">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Let's talk about your school
          </h2>
          <p className="text-lime-100 text-lg mb-8">
            15 minutes. No obligation. Just a conversation about whether this
            fits your context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <CTAButton href={CALENDLY_URL} variant="secondary">
              <span className="flex items-center gap-2">
                Book a call <ArrowRight size={16} />
              </span>
            </CTAButton>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-lime-100 text-sm">
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* Print-only contact footer */}
      <section className="hidden print:block py-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 text-center text-sm text-slate-500">
          <p className="font-semibold text-slate-900 mb-1">Limes Digital</p>
          <p>{PHONE} | {EMAIL} | limesdigital.com</p>
        </div>
      </section>
    </div>
  )
}
