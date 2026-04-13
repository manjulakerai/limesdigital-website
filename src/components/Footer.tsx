import { Link } from 'react-router-dom'
import { EMAIL, PHONE, PHONE_LINK, COMPANY_NAME, PRODUCT_NAME } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Limes Digital" className="h-10 brightness-0 invert" width={160} height={40} />
            </div>
            <p className="text-sm leading-relaxed">
              Built at the intersection of education expertise and responsible
              AI, Smart Syllabus Assistant helps you reduce teacher workload and
              support retention at your school through practical,
              curriculum-aligned planning tools.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-lime-400 transition-colors">Home</Link>
              <Link to="/smart-syllabus-assistant" className="text-sm hover:text-lime-400 transition-colors">Product</Link>
              <Link to="/pricing" className="text-sm hover:text-lime-400 transition-colors">Pricing</Link>
              <Link to="/blog" className="text-sm hover:text-lime-400 transition-colors">Blog</Link>
              <Link to="/about" className="text-sm hover:text-lime-400 transition-colors">About</Link>
              <Link to="/contact" className="text-sm hover:text-lime-400 transition-colors">Contact</Link>
              <a href="https://www.smartsyllabusassistant.com" className="text-sm hover:text-lime-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Teacher Login &rarr;
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`mailto:${EMAIL}`} className="hover:text-lime-400 transition-colors">
                {EMAIL}
              </a>
              <a href={PHONE_LINK} className="hover:text-lime-400 transition-colors">
                {PHONE}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {COMPANY_NAME}. Makers of {PRODUCT_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
