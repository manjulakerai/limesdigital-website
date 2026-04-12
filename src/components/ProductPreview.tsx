import { Users, Calendar, FileText, CheckCircle, Clock, BookOpen } from 'lucide-react'

function MockBrowser({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-300" />
          <div className="w-3 h-3 rounded-full bg-yellow-300" />
          <div className="w-3 h-3 rounded-full bg-green-300" />
        </div>
        <div className="flex-1 mx-3">
          <a href="https://www.smartsyllabusassistant.com" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-md px-3 py-1 text-xs text-slate-400 hover:text-lime-600 text-center max-w-xs mx-auto transition-colors">
            www.smartsyllabusassistant.com
          </a>
        </div>
      </div>
      {/* Content */}
      <div className="p-5 sm:p-6">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
          {title}
        </p>
        {children}
      </div>
    </div>
  )
}

function MockDashboard() {
  return (
    <MockBrowser title="Teacher Dashboard">
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { icon: <Users size={18} />, label: 'Learner Profiles', value: '28' },
          { icon: <Calendar size={18} />, label: 'Term Scopes', value: '3' },
          { icon: <FileText size={18} />, label: 'Lessons Delivered', value: '14' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100"
          >
            <div className="text-lime-600 flex justify-center mb-1" aria-hidden="true">
              {stat.icon}
            </div>
            <p className="text-xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-[10px] text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-lime-50 rounded-lg px-3 py-2 border border-lime-100">
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-lime-600" aria-hidden="true" />
            <span className="text-sm font-medium text-slate-800">English — Year 8, Term 2</span>
          </div>
          <span className="text-[10px] bg-lime-600 text-white px-2 py-0.5 rounded-full">
            Ready
          </span>
        </div>
        <div className="flex items-center justify-between bg-slate-50 rounded-lg px-3 py-2 border border-slate-100">
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-slate-400" aria-hidden="true" />
            <span className="text-sm text-slate-600">Maths — Year 9, Term 2</span>
          </div>
          <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
            3 of 10 weeks
          </span>
        </div>
      </div>
    </MockBrowser>
  )
}

function MockLessonPlan() {
  return (
    <MockBrowser title="Generated Lesson Plan">
      <div className="space-y-4">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] bg-lime-100 text-lime-700 px-2 py-0.5 rounded-full font-medium">
              EN5-URA-01
            </span>
            <span className="text-[10px] text-slate-400">Year 8 English</span>
          </div>
          <h4 className="font-semibold text-slate-900 text-base">
            Persuasive Writing — Analysing Techniques in Media
          </h4>
        </div>

        {/* Learning Intention */}
        <div className="bg-lime-50 rounded-lg p-3 border border-lime-100">
          <p className="text-[10px] font-semibold text-lime-700 uppercase tracking-wider mb-1">
            Learning Intention
          </p>
          <p className="text-sm text-slate-700">
            Students identify and analyse persuasive techniques used in media texts,
            evaluating their effectiveness for different audiences.
          </p>
        </div>

        {/* Phases with woven-in teaching notes */}
        <div className="space-y-2">
          {[
            {
              phase: 'Engagement',
              time: '8 min',
              detail: 'Hook: Show two contrasting ads. "Which one would make you buy?"',
              note: 'Student 3: Seat near screen — visual processing support',
            },
            {
              phase: 'Explicit Teaching',
              time: '12 min',
              detail: 'Teach 4 persuasive techniques: ethos, pathos, logos, repetition',
              note: 'Student 7: Provide printed key terms — reduces cognitive load',
            },
            {
              phase: 'Guided Practice',
              time: '15 min',
              detail: 'Students annotate a print ad in pairs, identifying techniques',
              note: 'Student 1: Pair with strong reader — scaffolded annotation template',
            },
            {
              phase: 'Independent Practice',
              time: '20 min',
              detail: 'Analyse a media text individually using the framework',
              note: 'Student 5: Offer choice of media text — high interest = deeper analysis',
            },
          ].map((item) => (
            <div key={item.phase} className="flex gap-3 items-start">
              <div className="flex items-center gap-1.5 shrink-0 w-20">
                <Clock size={10} className="text-slate-400" aria-hidden="true" />
                <span className="text-[10px] text-slate-400">{item.time}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-800">{item.phase}</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.detail}</p>
                <p className="text-[10px] text-teal-700 bg-teal-50 rounded px-1.5 py-0.5 mt-1 inline-block border border-teal-100">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockBrowser>
  )
}

function MockScope() {
  return (
    <MockBrowser title="Term Scope — Week by Week">
      <div className="space-y-2">
        {[
          { week: 1, topic: 'Introduction to Persuasive Language', outcomes: 'EN5-URA-01', status: 'delivered', lessons: 4 },
          { week: 2, topic: 'Analysing Techniques in Media', outcomes: 'EN5-URA-01', status: 'delivered', lessons: 4 },
          { week: 3, topic: 'Audience and Purpose', outcomes: 'EN5-URB-01', status: 'ready', lessons: 4 },
          { week: 4, topic: 'Writing to Persuade', outcomes: 'EN5-URC-01', status: 'ready', lessons: 0 },
          { week: 5, topic: 'Drafting and Peer Review', outcomes: 'EN5-URC-01', status: 'pending', lessons: 0 },
        ].map((w) => (
          <div
            key={w.week}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 border ${
              w.status === 'delivered'
                ? 'bg-slate-50 border-slate-100'
                : w.status === 'ready'
                ? 'bg-lime-50 border-lime-100'
                : 'bg-white border-slate-100'
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-slate-600">{w.week}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 truncate">{w.topic}</p>
              <p className="text-[10px] text-slate-400">{w.outcomes}</p>
            </div>
            <div className="text-right shrink-0">
              {w.status === 'delivered' ? (
                <span className="flex items-center gap-1 text-[10px] text-slate-500">
                  <CheckCircle size={12} className="text-lime-500" aria-hidden="true" />
                  {w.lessons} lessons
                </span>
              ) : w.status === 'ready' ? (
                <span className="text-[10px] bg-lime-600 text-white px-2 py-0.5 rounded-full">
                  Generate
                </span>
              ) : (
                <span className="text-[10px] text-slate-300">Upcoming</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </MockBrowser>
  )
}

export default function ProductPreview() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
          See what your teachers get
        </h2>
        <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
          A clear dashboard. Curriculum-mapped term scopes. Lesson plans with
          differentiation built in. Everything a teacher needs — nothing they
          don't.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left: Dashboard + Scope stacked */}
          <div className="space-y-8">
            <MockDashboard />
            <MockScope />
          </div>
          {/* Right: Lesson Plan (taller) */}
          <div>
            <MockLessonPlan />
          </div>
        </div>
      </div>
    </section>
  )
}
