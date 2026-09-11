import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  BookOpen,
  Briefcase,
  Bug,
  ChevronDown,
  Clock3,
  FileText,
  GraduationCap,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Newspaper,
  Send,
  Shield,
  Sparkles,
  Star,
  Users
} from 'lucide-react'

import { updatePageSeo } from '../utils/seo'

const PAGE_META = {
  company: ['About CodeMasti', 'Learn about CodeMasti mission, vision, values, and visual-first coding education.', '/about'],
  mission: ['Our Mission', 'CodeMasti teaches with Read, Understand, Remember using Hinglish explanations, stories, diagrams, and practice.', '/mission'],
  instructor: ['Become an Instructor', 'Apply to teach on CodeMasti and help beginners learn programming visually.', '/instructor'],
  careers: ['Careers', 'Explore career opportunities and open roles at CodeMasti.', '/careers'],
  blog: ['CodeMasti Blog', 'Explore articles, tutorials, and guides across JavaScript, React, Python, SQL, DSA, and System Design.', '/blog'],
  updates: ["What's New", 'See the latest CodeMasti product releases, feature updates, and improvements timeline.', '/whats-new'],
  help: ['Help Center', 'Find CodeMasti guides for courses, quizzes, XP, certificates, and account management.', '/help'],
  faqs: ['Frequently Asked Questions', 'Quick answers to common questions about CodeMasti courses, XP rewards, certificates, and access.', '/faq'],
  bug: ['Report a Bug', 'Report an issue or technical bug to help us improve CodeMasti.', '/bug-report'],
  feedback: ['Student Feedback', 'Share your thoughts, suggestions, and feature requests for CodeMasti.', '/feedback'],
  privacy: ['Privacy Policy', 'CodeMasti privacy policy covering client-side local data storage, cookies, and user privacy.', '/privacy'],
  terms: ['Terms and Conditions', 'CodeMasti terms of service covering usage, accounts, content, and student guidelines.', '/terms'],
  refund: ['Refund Policy', 'CodeMasti policies on access and community resources.', '/refund'],
  community: ['Community', 'CodeMasti developer community and discussion forums.', '/community'],
  app: ['CodeMasti App', 'CodeMasti mobile learning application information.', '/app']
}

const blogCategories = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'SQL', 'Python', 'Java', 'DSA', 'System Design']

const updates = [
  'Version 1.0 Released',
  'Added Quiz System',
  'Added Roadmaps',
  'Added Interview Preparation',
  'Added XP System',
  'Added Visual Learning Diagrams'
]

const policySections = {
  privacy: [
    ['Client-Side Data Storage', 'CodeMasti runs as a client-side application. Your learning progress, notes, bookmarks, quiz scores, and streak data are saved directly in your browser\'s localStorage.'],
    ['Sensitive Information', 'We do not collect or store passwords, payment credentials, or private secrets in localStorage.'],
    ['Analytics & Usage', 'If analytics are enabled by site configuration (e.g. Google Analytics, Plausible, or Clarity), anonymous usage signals may be processed to help improve course usability.'],
    ['Local Data Control', 'You can export, reset, or clear your local learning data at any time from your browser settings or profile options.'],
    ['Third Party Links', 'CodeMasti may provide links to external reference documentation (e.g. MDN, GitHub). We are not responsible for the privacy practices of external websites.']
  ],
  terms: [
    ['Acceptance of Terms', 'Using CodeMasti means you agree to follow these platform terms and learning community standards.'],
    ['User Responsibilities', 'Learners use the platform for educational purposes and respect code practice safety.'],
    ['Content Usage', 'Lessons, diagrams, quizzes, and assets are designed for personal learning and interview practice.'],
    ['Platform Limitations', 'CodeMasti provides educational materials. Course completion certificates reflect completed browser curriculum and do not guarantee university accreditation or job placement.']
  ]
}

function PageShell({ children, eyebrow, title, description, icon: Icon = Sparkles }) {
  return (
    <motion.main
      className="footer-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28 }}
    >
      <section className="footer-page-hero">
        <span className="footer-page-badge"><Icon size={16} /> {eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>
      {children}
    </motion.main>
  )
}

function InfoGrid({ items }) {
  return (
    <div className="footer-page-grid">
      {items.map(([title, text, Icon = Star]) => (
        <article className="footer-info-card" key={title}>
          <span><Icon size={22} /></span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  )
}

function AboutCompanyPage() {
  return (
    <PageShell eyebrow="Company" title="About CodeMastii" description="A visual-first coding education platform built for beginners." icon={Users}>
      <InfoGrid items={[
        ['Hero Section', 'CodeMastii helps students learn programming through stories, diagrams, practical examples, quizzes, projects, and interview preparation.', Sparkles],
        ['Mission', 'Make programming simple and memorable.', Star],
        ['Vision', 'Become the most beginner-friendly visual coding platform.', BookOpen],
        ['Values', 'Learn by Understanding, Consistency, Practical Learning, and Community Growth.', Users]
      ]} />
    </PageShell>
  )
}

function MissionPage() {
  return (
    <PageShell eyebrow="Our Mission" title="READ -> UNDERSTAND -> REMEMBER" description="How CodeMastii turns concepts into long-term memory." icon={Sparkles}>
      <InfoGrid items={[
        ['Definitions', 'Every concept starts with a clean definition so the base is clear.', BookOpen],
        ['Hinglish Explanation', 'Simple Hinglish makes technical topics feel friendly and natural.', MessageSquare],
        ['Story Based Learning', 'Stories and analogies make abstract logic easier to remember.', Star],
        ['Visual Diagrams', 'Diagrams help students see the concept before coding it.', Sparkles],
        ['Practical Coding', 'Examples, practice, quizzes, and projects turn theory into skill.', GraduationCap],
        ['Interview Questions', 'Each topic connects learning with real interview preparation.', HelpCircle]
      ]} />
    </PageShell>
  )
}

function InstructorPage() {
  const [form, setForm] = useState({ name: '', email: '', expertise: '', experience: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      const mailtoLink = `mailto:instructors@codemasti.com?subject=${encodeURIComponent('Instructor Application: ' + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nExpertise: ${form.expertise}\nExperience: ${form.experience}\nBio:\n${form.bio}`)}`
      window.open(mailtoLink, '_blank')
    }, 300)
  }

  return (
    <PageShell eyebrow="Teach" title="Become Instructor" description="Share your expertise with beginner developers on CodeMastii." icon={GraduationCap}>
      <InfoGrid items={[
        ['Why Teach on CodeMastii', 'Help students understand programming through visual, practical learning.', BookOpen],
        ['Benefits', 'Build your educator profile, reach learners, and contribute to beginner-friendly content.', Star],
        ['Requirements', 'Clear communication, practical experience, and strong fundamentals in your subject.', Shield]
      ]} />
      <form className="footer-form" onSubmit={handleSubmit}>
        <h2>Application Form</h2>
        {error && <p style={{ color: '#ef4444', fontSize: 13, fontWeight: 700 }}>⚠️ {error}</p>}
        <input required placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input required placeholder="Expertise (e.g. React, Node.js, DSA)" value={form.expertise} onChange={e => setForm({ ...form, expertise: e.target.value })} />
        <input required placeholder="Experience (e.g. 3 years as Frontend Engineer)" value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} />
        <button type="submit" disabled={loading}><Send size={16} /> {loading ? 'Submitting...' : 'Submit Application'}</button>
        {sent && <p className="footer-form-success">✅ Application submitted successfully! We will contact you soon.</p>}
      </form>
    </PageShell>
  )
}

function CareersPage() {
  return (
    <PageShell eyebrow="Careers" title="Careers at CodeMastii" description="Join our mission to revolutionize coding education." icon={Briefcase}>
      <div className="footer-page-grid compact">
        {[
          ['Frontend Developer', 'Remote • Full-time • React, TypeScript, Performance'],
          ['Backend Developer', 'Remote • Full-time • Node.js, Express, Databases'],
          ['Content Creator', 'Remote • Contract • Visual Coding & Hinglish Tutorials'],
          ['Curriculum Designer', 'Remote • Part-time • DSA & System Design']
        ].map(([role, desc]) => (
          <article className="footer-info-card" key={role}>
            <span><Briefcase size={22} /></span>
            <h3>{role}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
          Interested in joining our team? Email your resume and portfolio to <strong>careers@codemasti.com</strong>.
        </p>
      </div>
    </PageShell>
  )
}

function BlogPage() {
  return (
    <PageShell eyebrow="Blog" title="CodeMastii Blog" description="Curated guides, tutorials, and interview breakdowns for modern developers." icon={Newspaper}>
      <div className="footer-page-grid">
        {blogCategories.map(category => (
          <article className="footer-info-card" key={category}>
            <span><Newspaper size={22} /></span>
            <h3>{category} Guide</h3>
            <p>Comprehensive {category} concepts, practical walkthroughs, interview tips, and best practices.</p>
          </article>
        ))}
      </div>
    </PageShell>
  )
}

function UpdatesPage() {
  return (
    <PageShell eyebrow="Updates" title="What's New" description="A timeline of CodeMastii platform improvements and releases." icon={Clock3}>
      <div className="updates-timeline">
        {updates.map((item, index) => (
          <div className="updates-row" key={item}>
            <span>{index + 1}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </PageShell>
  )
}

function HelpCenterPage() {
  const [query, setQuery] = useState('')
  const items = [
    { title: 'Courses & Lessons', desc: 'How to browse courses, track progress, and mark lessons complete.' },
    { title: 'Quizzes & Practice', desc: 'Understanding MCQ evaluation, scoring rules, and challenge validators.' },
    { title: 'XP & Badges', desc: 'How XP is calculated, level rank thresholds, and earning streak badges.' },
    { title: 'Certificates', desc: 'How to earn verified course completion certificates and download them.' },
    { title: 'Account & Settings', desc: 'Managing profile information, bio, password change, and security.' }
  ]
  const visible = items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.desc.toLowerCase().includes(query.toLowerCase()))

  return (
    <PageShell eyebrow="Support" title="Help Center" description="Search help topics and browse CodeMastii support guides." icon={HelpCircle}>
      <div className="footer-search-box">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search help topics..." />
      </div>
      <div className="footer-page-grid compact">
        {visible.map(item => (
          <article className="footer-info-card" key={item.title}>
            <span><HelpCircle size={22} /></span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </PageShell>
  )
}

function FAQPage() {
  const faqs = [
    ['How do I earn XP?', 'Complete lessons (+25 XP), pass quizzes (+20 XP), solve challenges (+30 XP), and maintain daily learning streaks.'],
    ['How do certificates work?', 'Complete all chapters and lessons of a course to unlock your printable and downloadable course completion certificate. Centralized credential verification will be available in a future release.'],
    ['Is CodeMastii completely free?', 'Yes! All core tutorials, quizzes, visual diagrams, and code compiler practice are 100% free forever.'],
    ['Can I learn without prior coding experience?', 'Absolutely. CodeMastii is built specifically for beginners, using real-life analogies, Hinglish explanations, and step-by-step visuals.'],
    ['How are quizzes evaluated?', 'Quizzes provide instant verification with correct answers, detailed explanations, and retry mechanisms.']
  ]
  return (
    <PageShell eyebrow="Support" title="Frequently Asked Questions" description="Quick answers to common questions about CodeMastii." icon={HelpCircle}>
      <div className="faq-stack">
        {faqs.map(([q, a]) => (
          <details className="faq-item" key={q}>
            <summary>{q}<ChevronDown size={18} /></summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </PageShell>
  )
}

function BugReportPage() {
  const [form, setForm] = useState({ name: '', email: '', bugType: 'UI Issue', description: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      const mailtoLink = `mailto:bugs@codemasti.com?subject=${encodeURIComponent(`[Bug Report - ${form.bugType}] ` + form.name)}&body=${encodeURIComponent(`Reporter: ${form.name} (${form.email})\nIssue Type: ${form.bugType}\n\nDescription:\n${form.description}`)}`
      window.open(mailtoLink, '_blank')
    }, 300)
  }

  return (
    <PageShell eyebrow="Support" title="Report Bug" description="Tell us what broke so our engineering team can fix it quickly." icon={Bug}>
      <form className="footer-form" onSubmit={handleSubmit}>
        <h2>Bug Report</h2>
        {error && <p style={{ color: '#ef4444', fontSize: 13, fontWeight: 700 }}>⚠️ {error}</p>}
        <input required placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <select required value={form.bugType} onChange={e => setForm({ ...form, bugType: e.target.value })}>
          <option>UI Issue</option>
          <option>Course Content / Typo</option>
          <option>Quiz Issue</option>
          <option>Compiler / Editor Issue</option>
          <option>Login / Account Issue</option>
        </select>
        <textarea required placeholder="Describe the issue in detail..." value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
        <button type="submit" disabled={loading}><Send size={16} /> {loading ? 'Submitting...' : 'Submit Bug Report'}</button>
        {sent && <p className="footer-form-success">✅ Bug report submitted. Thank you for helping us improve!</p>}
      </form>
    </PageShell>
  )
}

function FeedbackPage() {
  const [form, setForm] = useState({ name: '', email: '', rating: '5 - Excellent', suggestions: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      const mailtoLink = `mailto:feedback@codemasti.com?subject=${encodeURIComponent(`[Feedback - ${form.rating}] ` + form.name)}&body=${encodeURIComponent(`Name: ${form.name} (${form.email})\nRating: ${form.rating}\n\nSuggestions:\n${form.suggestions}`)}`
      window.open(mailtoLink, '_blank')
    }, 300)
  }

  return (
    <PageShell eyebrow="Support" title="Feedback" description="Share suggestions and feedback to make CodeMastii even better." icon={MessageSquare}>
      <form className="footer-form" onSubmit={handleSubmit}>
        <h2>Share Feedback</h2>
        {error && <p style={{ color: '#ef4444', fontSize: 13, fontWeight: 700 }}>⚠️ {error}</p>}
        <input required placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <select required value={form.rating} onChange={e => setForm({ ...form, rating: e.target.value })}>
          <option>5 - Excellent</option>
          <option>4 - Good</option>
          <option>3 - Okay</option>
          <option>2 - Needs Work</option>
          <option>1 - Poor</option>
        </select>
        <textarea required placeholder="Your thoughts and suggestions..." value={form.suggestions} onChange={e => setForm({ ...form, suggestions: e.target.value })} />
        <button type="submit" disabled={loading}><Send size={16} /> {loading ? 'Submitting...' : 'Submit Feedback'}</button>
        {sent && <p className="footer-form-success">✅ Feedback received. Thank you for being a valued part of CodeMastii!</p>}
      </form>
    </PageShell>
  )
}

function PolicyPage({ type }) {
  const title = type === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'
  const icon = type === 'privacy' ? Shield : FileText
  return (
    <PageShell eyebrow="Legal" title={title} description={`Official ${title.toLowerCase()} for CodeMastii learners.`} icon={icon}>
      <InfoGrid items={policySections[type].map(([heading, text]) => [heading, text, icon])} />
    </PageShell>
  )
}

function RefundPage() {
  return (
    <PageShell eyebrow="Legal" title="Refund Policy" description="Transparent policies for CodeMastii services." icon={AlertTriangle}>
      <InfoGrid items={[
        ['100% Free Core Access', 'All courses, visual guides, interactive compilers, and quizzes on CodeMastii are free.', Shield],
        ['Premium Services & Certificates', 'If any optional paid mentorship or certification is purchased, a full refund is available within 7 days of purchase.', Star],
        ['Support Contact', 'For refund inquiries, simply email support@codemasti.com with your order details.', Mail]
      ]} />
    </PageShell>
  )
}

function CommunityPage() {
  return (
    <PageShell eyebrow="Community" title="CodeMastii Community" description="Connect with fellow learners, share knowledge, and build together." icon={Users}>
      <InfoGrid items={[
        ['Discord Server', 'Join our active community of learners, ask doubts, and collaborate on projects.', Users],
        ['YouTube Channel', 'Watch video walkthroughs, animations, and coding deep dives.', BookOpen],
        ['Telegram & WhatsApp Groups', 'Get daily coding tips, interview questions, and roadmap updates.', MessageSquare]
      ]} />
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          Join thousands of learners on Discord: <a href="https://discord.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: 700 }}>discord.gg/codemasti</a>
        </p>
      </div>
    </PageShell>
  )
}

function AppComingSoonPage() {
  return (
    <PageShell eyebrow="Mobile App" title="CodeMastii Mobile App" description="Learn on the go with our upcoming iOS and Android applications." icon={Sparkles}>
      <InfoGrid items={[
        ['Offline Lessons', 'Download lessons and diagrams to practice anywhere without internet.', BookOpen],
        ['Push Reminders', 'Maintain your learning streaks with gentle daily revision alerts.', Star],
        ['Mobile Code Editor', 'Bite-sized coding quizzes and flashcard drills optimized for mobile.', Sparkles]
      ]} />
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <span style={{ display: 'inline-block', padding: '8px 18px', background: 'var(--green-light)', color: 'var(--green)', borderRadius: 20, fontWeight: 700, fontSize: 13 }}>
          🚀 Coming soon to Google Play & App Store
        </span>
      </div>
    </PageShell>
  )
}

function ContactLitePage() {
  return (
    <PageShell eyebrow="Contact" title="Contact CodeMastii" description="Reach the CodeMastii team." icon={Mail}>
      <InfoGrid items={[
        ['Email', 'support@codemasti.com', Mail],
        ['Business', 'contact@codemasti.com', Briefcase],
        ['Location', 'India', MapPin],
        ['Social', 'Coming Soon', Users]
      ]} />
    </PageShell>
  )
}

export default function FooterPages({ page = 'company' }) {
  const normalized = useMemo(() => PAGE_META[page] ? page : 'company', [page])

  useEffect(() => {
    const [title, description, path] = PAGE_META[normalized] || PAGE_META.company
    updatePageSeo({
      title: `${title} | CodeMasti`,
      description,
      path: path || '/',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: title, url: path || '/' }
      ]
    })
  }, [normalized])

  if (normalized === 'company') return <AboutCompanyPage />
  if (normalized === 'mission') return <MissionPage />
  if (normalized === 'instructor') return <InstructorPage />
  if (normalized === 'careers') return <CareersPage />
  if (normalized === 'blog') return <BlogPage />
  if (normalized === 'updates') return <UpdatesPage />
  if (normalized === 'help') return <HelpCenterPage />
  if (normalized === 'faqs') return <FAQPage />
  if (normalized === 'bug') return <BugReportPage />
  if (normalized === 'feedback') return <FeedbackPage />
  if (normalized === 'privacy') return <PolicyPage type="privacy" />
  if (normalized === 'terms') return <PolicyPage type="terms" />
  if (normalized === 'refund') return <RefundPage />
  if (normalized === 'community') return <CommunityPage />
  if (normalized === 'app') return <AppComingSoonPage />
  if (normalized === 'contact') return <ContactLitePage />
  return <AboutCompanyPage />
}
