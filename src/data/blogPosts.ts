export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  metaDescription: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'teacher-workload-statistics-australia-2026',
    title: 'Teacher workload in Australia: the numbers behind the crisis',
    excerpt:
      'AITSL data shows full-time teachers work a median 50+ hour week. Close to 1 in 3 are thinking about leaving. Here is what the data actually says — and what schools can do about it.',
    category: 'Teacher Workload',
    date: '2026-04-13',
    readTime: '6 min read',
    metaDescription:
      'Australian teacher workload statistics 2026 — median hours, attrition rates, out-of-field teaching, and what schools can do to reduce planning burden and retain quality educators.',
    content: [
      '## The workload crisis is not news. But the numbers still shock.',
      'According to AITSL data, full-time teachers in Australia work a median of more than 50 hours per week. One in four works 60 hours or more. And close to one in three teachers report uncertainty about staying in the profession long-term.',
      'These are not fringe statistics. They describe the daily reality for thousands of teachers across NSW and Australia.',
      '## Where the hours go',
      'Teaching is only part of a teacher\'s workload. The rest is planning, administration, marking, reporting, meetings, and compliance. For new teachers, lesson planning alone can take 5 hours per lesson outside school hours.',
      'The planning burden hits hardest in two groups:',
      '**Early-career teachers** — still building their practice, learning the curriculum, and trying to keep up. Burnout in the first five years is a well-documented problem. Substitute teacher bookings are an early warning sign of escalating stress.',
      '**Out-of-field teachers** — 49% of Australian secondary teachers teach at least one subject they were not trained in. They still need to plan curriculum-aligned lessons, often in subjects they are learning alongside their students.',
      'Experienced teachers in well-resourced schools often have pre-built annual plans they refine each year. The real pain is for those who do not have that foundation yet.',
      '## What this means for school leaders',
      'For principals, this is not just a wellbeing issue — it is a retention issue. When teachers leave, the cost to a school is significant: recruitment, onboarding, lost institutional knowledge, and the impact on students who lose continuity.',
      'The schools that retain great teachers are the ones that actively reduce the non-teaching workload. Not with another initiative or another system to learn — but by cutting the planning burden in half.',
      '## What actually helps',
      'The answer is not "use ChatGPT." Teachers already use AI — 60 to 70% of staff at some schools are already experimenting with it. The problem is that generic AI tools produce generic outputs. They do not know the NSW syllabus. They do not know the students in the room. They do not build a coherent term plan.',
      'What teachers need is a planning system that:',
      '- Starts with the term scope — not a one-off lesson\n- Aligns to verified NESA outcome codes — not approximations\n- Knows the students in the class — through learner profiles that shape every phase\n- Produces structured, editable, exportable plans that meet school submission standards',
      'This is what Smart Syllabus Assistant was built to do. Not to replace teacher judgement, but to remove the hours of scaffolding work that sits between a teacher and a great lesson.',
      '## The retention argument',
      'Every hour a teacher spends on repetitive planning is an hour they are not spending with students, or with their family, or recovering from a demanding job.',
      'Schools that reduce the planning burden do not just improve wellbeing scores. They keep their best teachers. And in a profession where close to one in three are thinking about leaving, keeping your best people is the highest-leverage investment a principal can make.',
      '---',
      '*Smart Syllabus Assistant is an AI planning tool built for NSW secondary teachers. It generates NESA-aligned scope and sequence and differentiated lesson plans — with learner profiles woven into every phase. [See how it works](/smart-syllabus-assistant) or [start free](https://www.smartsyllabusassistant.com/signup).*',
    ],
  },
  {
    slug: 'ai-lesson-planning-for-schools',
    title: 'AI lesson planning for schools: what works and what does not',
    excerpt:
      'Schools are adopting AI whether leaders plan for it or not. The question is whether the tools teachers use actually meet curriculum standards and reduce workload — or just create different problems.',
    category: 'AI in Education',
    date: '2026-04-10',
    readTime: '5 min read',
    metaDescription:
      'How AI lesson planning tools work in schools — what makes purpose-built education AI different from ChatGPT, and what school leaders should look for when evaluating tools.',
    content: [
      '## Teachers are already using AI. The question is how.',
      'At some NSW secondary schools, 60 to 70% of staff already use AI tools for planning. They are copying lesson ideas from ChatGPT, asking Copilot to draft activities, and using whatever is fastest to get through the Sunday night planning session.',
      'This is not a trend that needs to be started. It is a trend that needs to be directed.',
      '## The problem with generic AI',
      'ChatGPT is genuinely useful. But it has three fundamental limitations when it comes to lesson planning:',
      '**It does not know the curriculum.** When you ask ChatGPT for a Year 9 Commerce lesson, it will generate something that looks plausible. But the outcome codes are often invented. The content may not align to the NSW syllabus. There is no verification layer.',
      '**It does not know your students.** A generic lesson plan is written for a generic class. It cannot differentiate for the student with ADHD in the front row, the EAL learner who needs visual scaffolding, or the advanced student who needs extension work — unless you manually prompt for each one, every time.',
      '**It does not plan in sequence.** Each lesson is generated in isolation. Week 3 does not know what Week 2 covered. There is no term scope, no progression, no coherent sequence of skill development.',
      'The result: teachers spend almost as long editing and verifying AI-generated content as they would have spent planning from scratch.',
      '## What purpose-built AI looks like',
      'A planning tool built specifically for teachers solves these problems by design:',
      '**Curriculum verification** — Every outcome code is checked against the NESA syllabus database before it reaches the plan. No hallucinated codes. No surface-level alignment.',
      '**Scope before lesson** — The term plan is built first. Each week knows what came before it and what comes next. Lessons sit inside a coherent sequence.',
      '**Learner profiles** — Teachers build anonymised profiles once per class. Every lesson then includes specific teaching adjustments for individual students — woven into every instructional phase, not appended as an afterthought.',
      '**Structured output** — Table-formatted, timed, exportable to Word. Matches school submission standards. A substitute teacher could pick it up and deliver it.',
      '## What school leaders should look for',
      'When evaluating AI planning tools for your school, ask these questions:',
      '- Does it verify outcome codes against the actual syllabus, or just generate plausible-sounding ones?\n- Does it build a term scope first, or just generate standalone lessons?\n- Does it know the students in the class, or just produce generic differentiation advice?\n- Does it produce structured, editable output that meets your school\'s submission standards?\n- Is student data anonymised and handled appropriately?',
      'If the answer to any of these is no, you are looking at a content generator, not a planning system.',
      '## The leadership opportunity',
      'AI in lesson planning is not going away. Teachers are already using it. The opportunity for school leaders is to direct that energy toward tools that actually meet curriculum standards, reduce workload meaningfully, and maintain the professional judgement that makes great teaching possible.',
      'Done well, this is not about replacing teachers. It is about removing the scaffolding work that sits between a teacher and a great lesson — and giving them their evenings back.',
      '---',
      '*Smart Syllabus Assistant is purpose-built for NSW secondary teachers. Scope and sequence through to differentiated lesson plans, all aligned to NESA outcomes. [See how it works](/smart-syllabus-assistant) or [start free](https://www.smartsyllabusassistant.com/signup).*',
    ],
  },
  {
    slug: 'how-to-reduce-planning-burden-in-schools',
    title: 'How to reduce the planning burden in schools — without adding more to the pile',
    excerpt:
      'Most attempts to reduce teacher workload add a new system, a new tool, or a new process. Here is how to actually cut planning time without creating a new burden.',
    category: 'Teacher Workload',
    date: '2026-04-06',
    readTime: '5 min read',
    metaDescription:
      'Practical strategies for reducing teacher planning workload in Australian secondary schools — what works, what does not, and how AI planning tools can help without adding complexity.',
    content: [
      '## The irony of workload reduction',
      'Every school knows teacher workload is a problem. Most have tried to address it. The irony is that many workload reduction initiatives create more work: a new platform to learn, a new reporting template to fill in, a new professional development session to attend.',
      'Teachers do not need another initiative. They need the planning burden cut in half.',
      '## Where planning time actually goes',
      'When a teacher plans a lesson, the work is not just "decide what to teach." It is:',
      '- Checking which outcomes need to be covered this term\n- Sequencing topics so skills build progressively\n- Writing learning intentions and success criteria\n- Designing timed activities for mixed-ability classes\n- Differentiating for individual students with specific needs\n- Formatting the plan to meet school submission standards\n- Finding or creating resources\n- Ensuring cross-curriculum priorities are addressed',
      'For an experienced teacher with years of plans to draw on, this might take 30 to 60 minutes. For a new teacher or an out-of-field teacher, it can take 3 to 5 hours — per lesson.',
      '## What does not work',
      '**Shared drives full of old plans.** Useful in theory, but plans from three years ago may not align to the current syllabus. Formatting is inconsistent. There is no guarantee of quality. Teachers spend as long adapting someone else\'s plan as writing their own.',
      '**Generic AI tools.** ChatGPT can draft a lesson in seconds, but the output needs extensive verification. Outcome codes may be wrong. Differentiation is generic. There is no connection to the term scope. Teachers trade planning time for checking time.',
      '**Template mandates.** Standardised lesson plan templates ensure consistency, but they do not reduce the time it takes to fill them in. The template is not the bottleneck — the thinking and writing is.',
      '## What actually works',
      'The strategies that genuinely reduce planning time share a common thread: they remove repetitive scaffolding work without removing teacher judgement.',
      '**1. Start with the scope, not the lesson.** When the term plan is built first — outcomes mapped, topics sequenced, progression planned — individual lessons become easier to write because the hard thinking has already been done.',
      '**2. Build learner profiles once.** Instead of remembering which students need what accommodations for every lesson, build an anonymised profile once per class. Let the planning tool pull those profiles into every lesson automatically.',
      '**3. Use tools that verify curriculum alignment.** If a tool claims to align to the NSW syllabus, ask whether it actually checks outcome codes against the database — or just generates plausible-sounding ones.',
      '**4. Make output editable, not precious.** The best planning tools produce a strong starting point that teachers can shape. Not a rigid template. Not a finished product. A foundation that saves the first 80% of the work.',
      '**5. Export in the format schools already use.** If teachers have to reformat AI output into a Word table before submitting it, you have not saved them time. You have moved the bottleneck.',
      '## The real measure',
      'The test of any workload reduction strategy is simple: does the teacher\'s Sunday night get shorter?',
      'Not "does it feel innovative." Not "does it tick a compliance box." Does the teacher spend less time on planning and more time on teaching, recovery, and family?',
      'If the answer is yes, you have found something worth keeping.',
      '---',
      '*Smart Syllabus Assistant generates NESA-aligned scope and sequence and differentiated lesson plans for NSW secondary teachers — editable, exportable, and shaped around your actual students. [See how it works](/smart-syllabus-assistant) or [start free](https://www.smartsyllabusassistant.com/signup).*',
    ],
  },
  {
    slug: 'why-chatgpt-isnt-enough-for-lesson-planning',
    title: "Why ChatGPT is not enough for lesson planning",
    excerpt:
      'Teachers are already using ChatGPT. But generic AI produces generic lessons — no verified outcome codes, no scope context, no student differentiation. Here is what purpose-built looks like.',
    category: 'AI in Education',
    date: '2026-04-01',
    readTime: '4 min read',
    metaDescription:
      'Why ChatGPT falls short for teacher lesson planning — no NESA verification, no scope context, no learner profiles — and what purpose-built AI planning tools do differently.',
    content: [
      '## ChatGPT is useful. But it is not a planning system.',
      'If you are a teacher, you have probably already used ChatGPT to help with lesson planning. It is fast, it is free, and it can generate a reasonable starting point for almost any topic.',
      'The problem is what happens next.',
      '## The verification tax',
      'When ChatGPT generates a lesson plan, it often includes outcome codes. They look real. They follow the right format. But many of them are invented.',
      'This is not a minor inconvenience. If a teacher submits a plan with incorrect outcome codes, it fails the most basic compliance check. So the teacher has to manually verify every code against the NSW syllabus — and at that point, the time saving from using AI starts to evaporate.',
      'A purpose-built planning tool checks every outcome code against the NESA syllabus database before it reaches the plan. No hallucinated codes. No verification tax.',
      '## The isolation problem',
      'ChatGPT generates lessons in isolation. Ask for a Week 3 lesson and it has no idea what happened in Week 1 or Week 2. There is no term scope, no progression map, no coherent sequence.',
      'This matters because curriculum planning is sequential. Skills build on each other. Outcomes are covered across weeks, not in single lessons. A lesson that exists outside a term scope is a one-off — it does not build, does not progress, does not connect.',
      'Smart Syllabus Assistant builds the scope and sequence first. When you generate a lesson for Week 3, it knows what Week 2 covered and what Week 4 needs to set up.',
      '## The differentiation gap',
      'Ask ChatGPT to differentiate a lesson and you will get generic advice: "provide scaffolding for lower-ability students" or "offer extension tasks for advanced learners."',
      'This is not differentiation. This is a template.',
      'Real differentiation requires knowing the specific students in the room. The student with ADHD who needs movement breaks. The EAL learner who benefits from visual cues. The advanced student who needs to be challenged, not given more of the same.',
      'Smart Syllabus Assistant uses learner profiles — anonymised, built once per class — to generate specific teaching notes for individual students inside every instructional phase. Not in a differentiation box at the bottom. Woven into the lesson.',
      '## The format problem',
      'ChatGPT outputs lessons as flowing text or markdown. Most schools require structured, table-formatted lesson plans submitted as Word documents.',
      'Teachers who use ChatGPT for planning typically spend 15 to 30 minutes reformatting the output to meet school standards. That is time that should have been saved.',
      'Smart Syllabus Assistant exports directly to DOCX in a structured, table-formatted layout that meets school submission standards. One click.',
      '## The bottom line',
      'ChatGPT is a content generator. It is good at producing text quickly. But lesson planning is not a content generation problem — it is a curriculum alignment, sequencing, and differentiation problem.',
      'Teachers deserve a tool built for how they actually work. One that knows the syllabus, knows the students, and produces plans that are ready to use — not ready to reformat.',
      '---',
      '*Smart Syllabus Assistant is built for NSW secondary teachers. Verified NESA outcomes, scope-first planning, and The Woven Plan — learner profiles in every phase. [Try it free](https://www.smartsyllabusassistant.com/signup) or [see how it works](/smart-syllabus-assistant).*',
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}
