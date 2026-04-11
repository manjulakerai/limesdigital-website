import { CheckCircle, Clock, Shield, Zap } from 'lucide-react'
import CTAButton from '../components/CTAButton'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Cut your teachers' planning time by{' '}
            <span className="text-lime-600">5–10 hours a week</span>, without
            compromising curriculum integrity or teacher judgement.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Smart Syllabus Assistant is a teacher-centred AI planning partner
            that cuts planning and admin load whilst keeping teachers fully in
            control and within curriculum standards.
          </p>

          <ul className="text-left max-w-xl mx-auto space-y-3 mb-10">
            {[
              'Your teachers get back hours every week for students not paperwork',
              'You lower burnout risk by making planning and admin genuinely manageable',
              'You simplify work instead of adding another system for staff to wrestle with',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle
                  size={20}
                  className="text-lime-600 mt-0.5 shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="https://calendly.com/limesdigital-info/15mins">Book a 15 min call</CTAButton>
            <CTAButton to="/about" variant="secondary">
              See how it works
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">
            As a principal you're watching workload push great teachers to the
            edge
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              'Your staff are working well beyond sustainable hours just to keep up',
              'Early and mid-career teachers are openly talking about leaving',
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
          <p className="text-slate-600 text-lg mb-8 text-center">
            If you're seeing any of this in your school, it's worth a 15-minute
            call to see whether Smart Syllabus Assistant can take hours off your
            staff's week.
          </p>
          <div className="text-center">
            <CTAButton href="https://calendly.com/limesdigital-info/15mins">Book a 15 min call</CTAButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12 text-center">
            How it works in your school
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield size={28} />,
                title: 'Curriculum-aligned planning support',
                desc: "Gives your staff structured support with scope and sequence, lesson planning, and documentation — aligned to the curriculum standards you're accountable for so they can stop reinventing the wheel.",
              },
              {
                icon: <CheckCircle size={28} />,
                title: 'Teacher-led, not AI-led',
                desc: 'Keeps your teachers firmly in control, the system assists, drafts and organises so their professional judgment is supported and not overridden.',
              },
              {
                icon: <Clock size={28} />,
                title: 'Reduces repeat work',
                desc: 'Cuts down the hours your staff spend recreating plans, documents, and resources across terms and year levels so they feel real-time savings week to week.',
              },
              {
                icon: <Zap size={28} />,
                title: 'Fits into your existing workflows',
                desc: 'No rip-and-replace so you reduce workload without forcing staff onto another complex system.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
              >
                <div className="text-lime-600 mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">
            Built with principals and teachers. Designed for schools like yours.
          </h2>
          <ul className="space-y-4 mb-8">
            {[
              "Developed through direct conversations with teachers and school leaders across career stages in real schools facing today's workload pressures",
              'Grounded in the real classroom and leadership challenges you navigate daily',
              "Focused on measurable time savings for your staff — not novelty",
              'Ethical, responsible use of AI — because your students, staff, and community deserve that',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-600 text-lg"
              >
                <CheckCircle
                  size={20}
                  className="text-lime-600 mt-1 shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-700 text-lg text-center italic">
            This isn't about replacing your teachers. It's about giving them
            back the capacity to do their best work — under your leadership.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-lime-600 to-lime-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Let's talk about your school
          </h2>
          <p className="text-lime-100 text-lg mb-8 max-w-xl mx-auto">
            If workload and retention are on your radar as principal, it's worth
            15 minutes to talk through how this could take hours off your
            staff's week. In one short call we'll see whether Smart Syllabus
            Assistant is a fit for a pilot at your school.
          </p>
          <CTAButton href="https://calendly.com/limesdigital-info/15mins" variant="secondary">
            Book a 15 min call
          </CTAButton>
          <p className="text-lime-200 text-sm mt-4">
            No obligation. No tech commitment required.
          </p>
        </div>
      </section>
    </div>
  )
}
