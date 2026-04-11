import { Phone, Mail, Calendar } from 'lucide-react'
import CTAButton from '../components/CTAButton'
import SEO from '../components/SEO'
import { CALENDLY_URL, PHONE, PHONE_LINK, EMAIL, PRODUCT_NAME } from '../constants'

export default function Contact() {
  return (
    <div>
      <SEO
        title="Contact"
        description="Get in touch with Limes Digital about Smart Syllabus Assistant. Book a 15-minute call, email, or phone to discuss how Smart Syllabus Assistant can support your school."
        path="/contact"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-lime-50 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Whether you want to ask a question, explore a pilot, or just
            understand what {PRODUCT_NAME} does — we're here.
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
                <Phone size={24} className="text-lime-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Call directly
              </h3>
              <a
                href={PHONE_LINK}
                className="text-lime-600 font-semibold text-lg hover:text-lime-700 transition-colors"
              >
                {PHONE}
              </a>
              <p className="text-slate-500 text-sm mt-2">
                Prefer to talk? Call and we'll discuss how {PRODUCT_NAME} could
                support your staff.
              </p>
            </div>

            {/* Email */}
            <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-lime-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Send an email
              </h3>
              <a
                href={`mailto:${EMAIL}`}
                className="text-lime-600 font-semibold hover:text-lime-700 transition-colors"
              >
                {EMAIL}
              </a>
              <p className="text-slate-500 text-sm mt-2">
                Drop us a line and we'll get back to you within one business
                day.
              </p>
            </div>

            {/* Book */}
            <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-100">
              <div className="w-12 h-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar
                  size={24}
                  className="text-lime-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Book a call
              </h3>
              <CTAButton href={CALENDLY_URL}>Book a 15 min call</CTAButton>
              <p className="text-slate-500 text-sm mt-4">
                No obligation. Just a straight conversation about your school.
              </p>
            </div>
          </div>

          <p className="text-slate-500 text-sm text-center mt-10">
            Built with teachers and principals across Australia and the UK.
          </p>
        </div>
      </section>
    </div>
  )
}
