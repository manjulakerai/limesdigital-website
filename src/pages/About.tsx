import { Heart, Brain, Clock, Shield, Cog } from 'lucide-react'
import CTAButton from '../components/CTAButton'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            The future you're building as a leader
          </h1>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            A Vision for Your School
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              Imagine your school where the staff you lead have the time,
              energy, and space to do what you hired them for: teach, connect,
              and shape young lives.
            </p>
            <p>
              A school where technology supports your teachers' judgement,
              rather than replacing it. Where they're not burnt out by systems,
              but backed by them. Where good teaching under your leadership is
              sustainable.
            </p>
            <p className="font-medium text-slate-800">
              Your teachers are trusted professionals, not exhausted
              administrators.
            </p>
          </div>
        </div>
      </section>

      {/* Supporting Your Mission */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Supporting Your Mission as Principal
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              Practical, teacher-centred AI that reduces the planning and
              administrative load on the staff you lead — while protecting their
              professional judgement, teaching quality, and the ethical standards
              your community expects.
            </p>
            <p className="font-medium text-slate-800">
              This isn't "AI tools for education".
            </p>
            <p>
              It's quiet infrastructure that gives your teachers time back — so
              you can focus on leading, not firefighting.
            </p>
            <p>
              Your school reclaims time by removing unnecessary cognitive and
              administrative burden — without compromising quality, care, or
              your teachers' autonomy.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            Why This Exists for You and Your School
          </h2>
          <div className="space-y-4 text-slate-600 text-lg leading-relaxed mb-8">
            <p>
              As a school leader, you're expected to hold the line on outcomes,
              wellbeing, and sustainability — all at once.
            </p>
            <ul className="space-y-3">
              {[
                'You\'re asked to improve learning results while protecting staff.',
                'To meet compliance while preserving creativity.',
                'To retain great teachers in systems that often work against them.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-lime-600 mt-1 shrink-0">&#8226;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              This platform exists to support you in that responsibility. Not by
              asking your staff to do more. But by removing the invisible
              burdens that quietly consume their time, energy, and attention.
            </p>
          </div>

          <div className="bg-lime-50 border border-lime-200 rounded-xl p-6">
            <p className="text-slate-700 font-medium mb-4">
              Its purpose is to help you build a school where:
            </p>
            <ul className="space-y-2 text-slate-600">
              {[
                'Teachers have space to think, plan, and teach well',
                'Professional judgement is protected, not diluted',
                'Systems support people, rather than exhaust them',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-lime-600 mt-0.5">&#10003;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              This is about redesigning the conditions your teachers work
              within, so the quality you expect is sustainable over time.
              Because when teacher time is protected, leadership becomes
              strategic again. And when systems work properly, good teaching can
              last.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-12 text-center">
            What You Can Count On
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: <Heart size={24} />,
                title: 'Teachers First',
                desc: "Every system starts with the reality of the staff you lead — not dashboards or tech capability. If it doesn't genuinely make your teachers' day easier, it doesn't belong in your school.",
              },
              {
                icon: <Brain size={24} />,
                title: 'Human Judgement Always',
                desc: "AI supports. Your teachers decide. The professional expertise you hired them for is never replaced, overridden, or automated away.",
              },
              {
                icon: <Clock size={24} />,
                title: 'Time Is a Moral Issue',
                desc: "Your staff's time isn't a productivity metric. It's their wellbeing. It's your school's sustainability. It's the retention challenge on your desk. Wasting their time has consequences — for them, for you, and for your students.",
              },
              {
                icon: <Shield size={24} />,
                title: 'Quiet, Ethical Technology',
                desc: 'No hype. No gimmicks. No "AI for AI\'s sake". Technology that feels calm, invisible, and trustworthy — for your staff and your community. Built with privacy, transparency, and care from day one.',
              },
              {
                icon: <Cog size={24} />,
                title: 'Systems Over Heroics',
                desc: "Your teachers shouldn't have to survive by working harder. As a principal, you know: good systems make good teaching sustainable. Burnout is not a personal failure. It's a system design failure — and you have the power to fix it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 flex gap-5"
              >
                <div className="text-lime-600 shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
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
            Ready to see how it works?
          </h2>
          <p className="text-lime-100 text-lg mb-8">
            15 minutes. No obligation. Just a conversation about your school.
          </p>
          <CTAButton href="https://calendly.com/limesdigital-info/15mins" variant="secondary">
            Book a 15 min call
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
