import { Quote, Shield, Calendar, Users, BookOpen } from 'lucide-react'
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
              Before Smart Syllabus Assistant, I spent a decade working inside
              schools and then built AI systems professionally. I know what it
              takes to strip out inefficiency — and I know what teachers actually
              need, because I watched them struggle with it firsthand.
            </p>
            <p>
              The teachers I've spoken to don't need another app. They need the
              planning burden cut in half — without losing curriculum integrity
              or their own professional judgement.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { number: '10', label: 'Years working in schools' },
              { number: '50+', label: 'AI projects delivered' },
              { number: '7+', label: 'NSW subjects and growing' },
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

      {/* How It Actually Works — The Woven Plan */}
      <section id="how-it-works" className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            How Smart Syllabus Assistant works
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            The Woven Plan&trade; — learner profiles woven into every phase of
            every lesson, from the first week of term to the last.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Build your learner profiles (once)',
                desc: 'Create a simple, anonymised profile for each student — their learning needs, strengths, accommodations, and what engages them. Takes a few minutes, done once per class. These profiles travel with every lesson you generate all year.',
              },
              {
                step: '2',
                title: 'Generate your scope and sequence',
                desc: 'Enter subject, year level, term, and weeks. Smart Syllabus Assistant builds a week-by-week scope anchored to verified NESA outcome codes — not approximations. Each week includes topic focus, outcome alignment, literacy and numeracy connections, and cross-curriculum priorities. Edit inline or regenerate individual weeks.',
              },
              {
                step: '3',
                title: 'Generate lessons shaped around your class',
                desc: 'Pick any week from your scope and generate a full lesson plan. Every instructional phase — Engagement, Explicit Teaching, Guided Practice, Group Task, Independent Work, Closure — includes learning intentions, success criteria, timed activities, and specific teaching notes for individual students drawn directly from your learner profiles. Not in a differentiation box at the bottom — woven into every phase.',
              },
              {
                step: '4',
                title: 'Edit, refine, make it yours',
                desc: 'Every lesson is fully editable. Adjust timing, rewrite activities, regenerate individual phases with natural language instructions ("make this more hands-on", "add a literacy focus"). The plan is a starting point built on solid curriculum foundations — you shape it to fit your classroom.',
              },
              {
                step: '5',
                title: 'Export, deliver, reflect',
                desc: 'Export your finished lesson to Word in a structured, table-formatted layout that meets school submission standards. After you deliver the lesson, record what worked, what you would change, and rate the lesson\'s impact — building a feedback loop that strengthens your planning over time.',
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

      {/* What makes this different from ChatGPT */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
            What makes this different from ChatGPT
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            Teachers already use AI. The question is whether it actually meets
            curriculum standards and knows your students.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield size={24} />,
                title: 'NESA-validated outcome codes',
                desc: 'Every outcome code is checked against the NSW syllabus database before it reaches your plan. No invented codes. No surface-level alignment.',
              },
              {
                icon: <Calendar size={24} />,
                title: 'Scope before lesson',
                desc: "Your term plan is built first. Week 3 knows what Week 2 covered. Week 4 knows what it needs to set up. Lessons are part of a coherent sequence, not generated in isolation.",
              },
              {
                icon: <Users size={24} />,
                title: 'Phase-level differentiation',
                desc: 'Your students are not an afterthought. Each learner profile generates specific teaching adjustments inside every instructional phase — so differentiation is practical and immediate.',
              },
              {
                icon: <BookOpen size={24} />,
                title: 'Built for secondary',
                desc: 'Years 7–12 only. HSC requirements, cross-curricular priorities, assessment weighting, mixed-ability classes — the complexity that generic AI tools gloss over.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 border border-slate-100"
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

      {/* Privacy & Data */}
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
              <div
                key={item}
                className="flex gap-3 items-start flex-1"
              >
                <Shield
                  size={16}
                  className="text-lime-600 mt-1 shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
            Simple pricing
          </h2>
          <p className="text-slate-500 text-center mb-12 max-w-xl mx-auto">
            Teachers can start individually. Schools can cover everyone.
          </p>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Teacher */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 flex flex-col">
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                Teacher licence
              </h3>
              <p className="text-3xl font-bold text-slate-900 mb-1">
                $40<span className="text-base font-normal text-slate-500">/mo</span>
              </p>
              <p className="text-sm text-slate-500 mb-6">
                Individual teacher. 30-day money-back guarantee.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6 flex-1">
                {[
                  'Unlimited scopes and lesson plans',
                  'All subjects',
                  'Learner profiles and differentiation',
                  'DOCX export',
                  'Delivery and impact tracking',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-lime-600 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400">
                Free tier available — 1 scope, 3 lessons, no card required.
              </p>
            </div>

            {/* School */}
            <div className="rounded-xl p-8 border-2 border-lime-600 bg-lime-50 flex flex-col relative">
              <span className="absolute -top-3 left-6 bg-lime-600 text-white text-xs font-semibold px-3 py-0.5 rounded-full">
                Best value
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                School licence
              </h3>
              <p className="text-3xl font-bold text-slate-900 mb-1">
                $3,000<span className="text-base font-normal text-slate-500">/yr</span>
              </p>
              <p className="text-sm text-slate-500 mb-6">
                Whole school. ~$5 per teacher/month.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 mb-6 flex-1">
                {[
                  'Everything in Teacher licence',
                  'Unlimited teacher seats',
                  'Admin dashboard',
                  'Onboarding and training support',
                  'Priority support',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-lime-600 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton href={CALENDLY_URL}>Book a 15 min call</CTAButton>
            </div>
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
