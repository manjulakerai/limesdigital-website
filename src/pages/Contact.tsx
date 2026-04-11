import { Phone, Mail, Calendar } from 'lucide-react'
import CTAButton from '../components/CTAButton'

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Get in touch
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-6">
            Let's Talk About Your School
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            If workload and retention are on your radar as principal, a short
            conversation is the best place to start. No obligation, no tech
            commitment — just a chance to explore whether this makes sense for
            your context.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-lime-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Call directly
              </h3>
              <a
                href="tel:0478922177"
                className="text-lime-600 font-semibold text-lg hover:text-lime-700 transition-colors"
              >
                0478 922 177
              </a>
              <p className="text-slate-500 text-sm mt-2">
                Prefer to talk? Give us a call and we'll discuss how Smart
                Syllabus Assistant could support your staff and whether a pilot
                makes sense for your school.
              </p>
            </div>

            {/* Email */}
            <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-lime-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Send an email
              </h3>
              <a
                href="mailto:info@limesdigital.com"
                className="text-lime-600 font-semibold hover:text-lime-700 transition-colors"
              >
                info@limesdigital.com
              </a>
              <p className="text-slate-500 text-sm mt-2">
                Drop us a line and we'll get back to you within one business
                day.
              </p>
            </div>

            {/* Book */}
            <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={24} className="text-lime-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Book a call
              </h3>
              <CTAButton href="https://calendly.com/limesdigital-info/15mins">Book a 15 min call</CTAButton>
              <p className="text-slate-500 text-sm mt-4">
                No obligation. No tech commitment required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        </div>
      </section>
    </div>
  )
}
