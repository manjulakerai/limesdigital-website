import { CheckCircle, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react'
import CTAButton from '../components/CTAButton'
import SEO from '../components/SEO'
import { CALENDLY_URL } from '../constants'

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    description: 'Try it out. No card required.',
    features: [
      '1 scope and sequence',
      '3 lesson plans',
      'Learner profiles',
      'NESA-aligned outcomes',
      'DOCX export',
    ],
    cta: { label: 'Get started free', href: 'https://www.smartsyllabusassistant.com/signup' },
    highlight: false,
  },
  {
    name: 'Teacher',
    price: '$40',
    period: '/mo',
    description: 'Individual teacher. 30-day money-back guarantee.',
    features: [
      'Unlimited scopes and lesson plans',
      'All 7+ subjects',
      'Learner profiles and differentiation',
      'Phase-level teaching notes',
      'DOCX export',
      'Delivery and impact tracking',
      'Inline editing and regeneration',
    ],
    cta: { label: 'Start teaching plan', href: 'https://www.smartsyllabusassistant.com/signup' },
    highlight: false,
  },
  {
    name: 'School',
    price: '$3,000',
    period: '/yr',
    description: 'Whole school. ~$5 per teacher/month.',
    features: [
      'Everything in Teacher',
      'Unlimited teacher seats',
      'Admin dashboard',
      'Onboarding and training support',
      'Priority support',
      'Usage reporting',
      'Dedicated account manager',
    ],
    cta: { label: 'Book a school demo', href: CALENDLY_URL },
    highlight: true,
    badge: 'Best value',
  },
]

const faqs = [
  {
    q: 'Can I try it before paying?',
    a: 'Yes. The free tier gives you 1 scope and 3 lesson plans with no card required. That is enough to see exactly what the tool produces before you commit.',
  },
  {
    q: 'What subjects are supported?',
    a: 'Commerce, English, Mathematics, Science, History, Geography, and PDHPE — all with verified NESA Stage 4 and Stage 5 outcome codes. More subjects are added regularly.',
  },
  {
    q: 'How is this different from using ChatGPT?',
    a: 'Smart Syllabus Assistant builds your scope and sequence first, then generates lessons that sit inside that sequence. Every lesson includes verified NESA outcome codes, timed phases, and teaching notes for individual students drawn from your learner profiles. ChatGPT does none of that.',
  },
  {
    q: 'Is student data safe?',
    a: 'All student data is anonymised — "Student 1", "Student 2". No real names are ever used or stored. Learner profiles describe needs and strengths, not personal information. Built in Australia.',
  },
  {
    q: 'What does the school licence include?',
    a: 'Unlimited teacher seats, admin dashboard, onboarding and training support, priority support, and usage reporting. We work with your leadership team to roll out effectively.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. The Teacher plan is month-to-month with no lock-in. Cancel anytime from your account.',
  },
  {
    q: 'Do you offer pilot programs for schools?',
    a: 'Yes. We run structured 30-90 day pilots with 5-10 teachers. Book a call to discuss what that looks like for your school.',
  },
]

export default function Pricing() {
  return (
    <div>
      <SEO
        title="Pricing"
        description="Smart Syllabus Assistant pricing — Free tier, Teacher plan ($40/mo), and School licence ($3,000/yr). Start free, upgrade when you're ready."
        path="/pricing"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Start free. Upgrade when you're ready. School licences cover
            everyone.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-xl p-8 flex flex-col relative ${
                  tier.highlight
                    ? 'border-2 border-lime-600 bg-lime-50'
                    : 'bg-slate-50 border border-slate-100'
                }`}
              >
                {'badge' in tier && tier.badge && (
                  <span className="absolute -top-3 left-6 bg-lime-600 text-white text-xs font-semibold px-3 py-0.5 rounded-full">
                    {tier.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-1">
                  {tier.price}
                  {tier.period && (
                    <span className="text-base font-normal text-slate-500">
                      {tier.period}
                    </span>
                  )}
                </p>
                <p className="text-sm text-slate-500 mb-6">{tier.description}</p>
                <ul className="space-y-2 text-sm text-slate-600 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <CheckCircle
                        size={16}
                        className="text-lime-600 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href={tier.cta.href}
                  variant={tier.highlight ? 'primary' : 'secondary'}
                >
                  {tier.cta.label}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money-back Guarantee */}
      <section className="pb-16 sm:pb-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-lime-50 border border-lime-200 rounded-full px-6 py-3">
            <ShieldCheck size={24} className="text-lime-600 shrink-0" />
            <p className="text-slate-700 font-medium">
              30-day money-back guarantee — no questions asked
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
            Compare plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 font-semibold text-slate-900">Feature</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 text-center">Free</th>
                  <th className="py-3 px-4 font-semibold text-slate-600 text-center">Teacher</th>
                  <th className="py-3 pl-4 font-semibold text-lime-700 text-center">School</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ['Scope and sequence', '1', 'Unlimited', 'Unlimited'],
                  ['Lesson plans', '3', 'Unlimited', 'Unlimited'],
                  ['Learner profiles', '\u2713', '\u2713', '\u2713'],
                  ['NESA outcome verification', '\u2713', '\u2713', '\u2713'],
                  ['All subjects', '\u2713', '\u2713', '\u2713'],
                  ['DOCX export', '\u2713', '\u2713', '\u2713'],
                  ['Inline editing', '\u2713', '\u2713', '\u2713'],
                  ['Phase regeneration', '\u2014', '\u2713', '\u2713'],
                  ['Delivery tracking', '\u2014', '\u2713', '\u2713'],
                  ['Impact recording', '\u2014', '\u2713', '\u2713'],
                  ['Teacher seats', '1', '1', 'Unlimited'],
                  ['Admin dashboard', '\u2014', '\u2014', '\u2713'],
                  ['Onboarding support', '\u2014', '\u2014', '\u2713'],
                  ['Priority support', '\u2014', '\u2014', '\u2713'],
                  ['Usage reporting', '\u2014', '\u2014', '\u2713'],
                ].map(([feature, free, teacher, school]) => (
                  <tr key={feature} className="border-b border-slate-100">
                    <td className="py-3 pr-4">{feature}</td>
                    <td className="py-3 px-4 text-center">{free}</td>
                    <td className="py-3 px-4 text-center">{teacher}</td>
                    <td className="py-3 pl-4 text-center font-medium text-lime-700">{school}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-slate-100 pb-6"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-start gap-2">
                  <HelpCircle
                    size={18}
                    className="text-lime-600 mt-1 shrink-0"
                    aria-hidden="true"
                  />
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-lime-600 to-lime-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to give your teachers their time back?
          </h2>
          <p className="text-lime-100 text-lg mb-8 max-w-xl mx-auto">
            Start free today or book a call to discuss a school-wide rollout.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="https://www.smartsyllabusassistant.com/signup" variant="secondary">
              Start free
            </CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary">
              <span className="flex items-center gap-2">
                Book a school demo <ArrowRight size={16} />
              </span>
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
