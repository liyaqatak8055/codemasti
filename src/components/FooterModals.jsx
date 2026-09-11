import { useState, useEffect, useRef } from 'react'
import { X, ChevronLeft, ExternalLink, Upload, AlertCircle } from 'lucide-react'
import { validateUploadedFile } from '../utils/security'

/* ── useCountUp ─────────────────────────────────────────────── */
function useCountUp(target, duration = 1200, active = false) {
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    if (!active) return
    const isK = target.includes('K')
    const num = parseInt(target.replace(/[^0-9]/g, ''), 10)
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3)
      const v = Math.floor(e * num)
      setDisplay(isK ? `${v}K+` : `${v}+`)
      if (p < 1) requestAnimationFrame(step)
      else setDisplay(target)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return display
}

/* ── Base Modal ─────────────────────────────────────────────── */
function FooterModal({ icon, title, onClose, children }) {
  const overlayRef = useRef(null)
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  return (
    <div
      className="fm-overlay"
      ref={overlayRef}
      onClick={e => { if (e.target === overlayRef.current) onClose() }}
      role="dialog" aria-modal="true" aria-label={title}
    >
      <div className="fm-window">
        <div className="fm-header">
          <div className="fm-header-left">
            <span className="fm-icon">{icon}</span>
            <h2 className="fm-title">{title}</h2>
          </div>
          <button className="fm-close" onClick={onClose} aria-label="Close"><X size={18}/></button>
        </div>
        <div className="fm-body">{children}</div>
        <div className="fm-footer-bar">
          <button className="fm-foot-btn fm-foot-secondary" onClick={onClose}>
            <ChevronLeft size={15}/> Back
          </button>
          <button className="fm-foot-btn fm-foot-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

/* ── 1. About ───────────────────────────────────────────────── */
function StatCard({ raw, label, icon, active }) {
  const v = useCountUp(raw, 1200, active)
  return (
    <div className="fm-stat-card">
      <span className="fm-stat-icon">{icon}</span>
      <strong className="fm-stat-value">{active ? v : '0'}</strong>
      <span className="fm-stat-label">{label}</span>
    </div>
  )
}

function AboutModal({ onClose, onNavigate }) {
  const [started, setStarted] = useState(false)
  useEffect(() => { const t = setTimeout(() => setStarted(true), 300); return () => clearTimeout(t) }, [])

  const stats = [
    { num: '100+', lbl: 'Lessons', ico: '📚' },
    { num: '28+', lbl: 'Courses', ico: '🎓' },
    { num: '50+', lbl: 'Projects', ico: '🏆' },
    { num: '500+', lbl: 'Quiz Qs', ico: '🎯' },
  ]
  const features = [
    ['💻', 'Browser Code Editor with instant live execution'],
    ['🤖', 'AI Code Mentor for instant doubt clearing'],
    ['🗺️', 'Career-focused visual learning roadmaps'],
    ['🏆', 'XP, streaks, and verified certificates'],
    ['⚡', 'Fast, distraction-free modern UI'],
    ['🌐', 'Hindi + English Hinglish easy explanations'],
  ]

  return (
    <FooterModal icon="💡" title="About CodeMastii" onClose={onClose}>
      <div className="fm-about-hero">
        <div className="fm-brand-big">
          <span className="fm-brand-badge">CM</span>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.4rem' }}>CodeMastii</h2>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>Read → Understand → Remember</p>
          </div>
        </div>
        <p className="fm-about-tagline">
          Humara maqsad hai har kisi ko <strong>Full Stack, System Design aur DSA</strong> easy hinglish mein sikhana — bina kisi boring theory ke!
        </p>
      </div>

      <div className="fm-stats-strip">
        {stats.map(s => (
          <div key={s.lbl} className="fm-stat-box">
            <span className="fm-stat-ico">{s.ico}</span>
            <strong className="fm-stat-num">{s.num}</strong>
            <span className="fm-stat-lbl">{s.lbl}</span>
          </div>
        ))}
      </div>

      <div className="fm-section">
        <h3 className="fm-section-title">What You Get</h3>
        <div className="fm-features-grid">
          {features.map(([ico, txt]) => (
            <div key={txt} className="fm-feature-item">
              <span className="fm-feat-icon">{ico}</span><span>{txt}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fm-cta-row">
        <button className="fm-cta-primary" onClick={() => { onNavigate?.('/courses') || (window.location.href = '/courses'); onClose() }}>Explore Courses</button>
        <button className="fm-cta-outline" onClick={onClose}>Join Community</button>
      </div>
    </FooterModal>
  )
}

/* ── 2. Mission ─────────────────────────────────────────────── */
function MissionModal({ onClose, onNavigate }) {
  const timeline = ['Read','Understand','Visualize','Practice','Remember Forever']
  return (
    <FooterModal icon="🎯" title="Our Mission" onClose={onClose}>
      <div className="fm-mission-hero">
        <div className="fm-mission-rings" aria-hidden="true">
          <div className="fm-ring fm-ring-1"/><div className="fm-ring fm-ring-2"/><div className="fm-ring fm-ring-3"/>
        </div>
        <div className="fm-mission-rocket" aria-hidden="true">🚀</div>
      </div>

      <div className="fm-mission-text">
        <p className="fm-mission-headline">
          Humara mission hai <span className="fm-green">Programming ko boring nahi</span>,<br/>
          balki <strong>fun aur practical banana.</strong>
        </p>
        {[
          ['📖','Theory se zyada Practice.','Sirf padhne se nahi, karne se seekhte hain.'],
          ['🎬','Notes se zyada Visual Learning.','Concepts ko animations se samjho.'],
          ['🧠','Ratta se zyada Understanding.','Samjho, yaad rakho, apply karo.'],
        ].map(([ico,h,p]) => (
          <div key={h} className="fm-pillar">
            <span className="fm-pillar-icon">{ico}</span>
            <div><strong>{h}</strong><p>{p}</p></div>
          </div>
        ))}
      </div>

      <div className="fm-section">
        <h3 className="fm-section-title">Our Learning Pipeline</h3>
        <div className="fm-timeline">
          {timeline.map((step, i) => (
            <div key={step} className="fm-timeline-item">
              <div className="fm-tl-col">
                <div className="fm-tl-dot"><span>{i+1}</span></div>
                {i < timeline.length-1 && <div className="fm-tl-line"/>}
              </div>
              <div className="fm-tl-content"><strong>{step}</strong></div>
            </div>
          ))}
        </div>
      </div>

      <div className="fm-cta-row">
        <button className="fm-cta-primary" onClick={() => { onNavigate?.('/courses') || (window.location.href = '/courses'); onClose() }}>Start Learning</button>
      </div>
    </FooterModal>
  )
}

/* ── 3. Instructor ──────────────────────────────────────────── */
function InstructorModal({ onClose }) {
  const [form, setForm] = useState({ name:'', email:'', linkedin:'', portfolio:'', resume:null })
  const [submitted, setSubmitted] = useState(false)
  const [fileError, setFileError] = useState('')
  const fileRef = useRef(null)

  const reqs = [['🏅','Min 2 Years Experience'],['🗣️','Good Communication'],['🏗️','Real Project Experience'],['🎥','Course Recording'],['📋','Interview Readiness']]
  const bens = [['💰','Earn Revenue'],['👤','Personal Profile'],['🏆','Instructor Badge'],['🏅','Certificate'],['🌐','Community Access']]

  const handleFileChange = (e) => {
    setFileError('')
    const file = e.target.files?.[0]
    if (!file) return
    const validation = validateUploadedFile(file, { allowedTypes: ['application/pdf', '.pdf'], maxSizeBytes: 5 * 1024 * 1024 })
    if (!validation.valid) {
      setFileError(validation.error)
      if (fileRef.current) fileRef.current.value = ''
      return
    }
    setForm({ ...form, resume: file })
  }

  if (submitted) return (
    <FooterModal icon="🎓" title="Become an Instructor" onClose={onClose}>
      <div className="fm-success-screen">
        <div className="fm-success-icon">🎉</div>
        <h3>Application Submitted!</h3>
        <p>Hum 3-5 working days mein aapse contact karenge.</p>
        <button className="fm-cta-primary" onClick={onClose}>Done</button>
      </div>
    </FooterModal>
  )

  return (
    <FooterModal icon="🎓" title="Become an Instructor" onClose={onClose}>
      <div className="fm-instructor-layout">
        <div className="fm-instructor-info">
          <div className="fm-section">
            <h3 className="fm-section-title">Requirements</h3>
            <ul className="fm-req-list">
              {reqs.map(([ico,txt]) => <li key={txt} className="fm-req-item"><span>{ico}</span><span>{txt}</span></li>)}
            </ul>
          </div>
          <div className="fm-section">
            <h3 className="fm-section-title">Benefits</h3>
            <ul className="fm-req-list">
              {bens.map(([ico,txt]) => <li key={txt} className="fm-req-item fm-req-benefit"><span>{ico}</span><span>{txt}</span></li>)}
            </ul>
          </div>
        </div>

        <form className="fm-inst-form" onSubmit={e => { e.preventDefault(); if(form.name&&form.email) setSubmitted(true) }}>
          <h3 className="fm-section-title">Apply Now</h3>
          {[['Full Name *','text','Aapka poora naam','name'],['Email *','email','your@email.com','email'],['LinkedIn','url','https://linkedin.com/in/...','linkedin'],['Portfolio / GitHub','url','https://github.com/...','portfolio']].map(([lbl,type,ph,key]) => (
            <div key={key} className="fm-field">
              <label>{lbl}</label>
              <input type={type} placeholder={ph} value={form[key]} required={lbl.includes('*')} onChange={e => setForm({...form,[key]:e.target.value})}/>
            </div>
          ))}
          <div className="fm-field">
            <label>Resume (PDF, max 5MB)</label>
            <div className="fm-file-drop" onClick={() => fileRef.current?.click()}>
              <Upload size={18}/>
              <span>{form.resume ? form.resume.name : 'Click to select PDF resume'}</span>
            </div>
            {fileError && <p style={{ color: '#ef4444', fontSize: 11, margin: '4px 0 0', fontWeight: 600 }}>⚠️ {fileError}</p>}
            <input ref={fileRef} type="file" accept=".pdf,application/pdf" style={{display:'none'}} onChange={handleFileChange}/>
          </div>
          <button type="submit" className="fm-cta-primary" style={{width:'100%',marginTop:'8px'}}>Submit Application</button>
        </form>
      </div>
    </FooterModal>
  )
}

/* ── 4. Careers ─────────────────────────────────────────────── */
function CareersModal({ onClose }) {
  const [selected, setSelected] = useState(null)
  const jobs = [
    { title:'Frontend Developer', type:'Full Time',  mode:'Remote',  exp:'2+ yrs', salary:'₹6–10 LPA', icon:'💻' },
    { title:'Backend Developer',  type:'Full Time',  mode:'Remote',  exp:'2+ yrs', salary:'₹7–12 LPA', icon:'⚙️' },
    { title:'React Developer',    type:'Full Time',  mode:'Hybrid',  exp:'1+ yrs', salary:'₹5–9 LPA',  icon:'⚛️' },
    { title:'Python Instructor',  type:'Part Time',  mode:'Remote',  exp:'3+ yrs', salary:'₹3–6 LPA',  icon:'🐍' },
    { title:'UI Designer',        type:'Full Time',  mode:'Remote',  exp:'2+ yrs', salary:'₹5–8 LPA',  icon:'🎨' },
    { title:'Content Writer',     type:'Freelance',  mode:'Remote',  exp:'1+ yrs', salary:'₹2–4 LPA',  icon:'✍️' },
    { title:'Video Editor',       type:'Freelance',  mode:'Remote',  exp:'1+ yrs', salary:'₹2–5 LPA',  icon:'🎬' },
    { title:'Community Manager',  type:'Full Time',  mode:'Remote',  exp:'1+ yrs', salary:'₹4–7 LPA',  icon:'🌐' },
  ]
  return (
    <FooterModal icon="💼" title="Careers at CodeMasti" onClose={onClose}>
      <p className="fm-careers-intro">CodeMasti ke saath grow karo! Passionate educators aur developers dhundh rahe hain.</p>
      <div className="fm-jobs-grid">
        {jobs.map(job => (
          <div key={job.title} className={`fm-job-card${selected===job.title?' active':''}`} onClick={() => setSelected(selected===job.title?null:job.title)}>
            <div className="fm-job-header">
              <span className="fm-job-icon">{job.icon}</span>
              <div className="fm-job-meta">
                <strong className="fm-job-title">{job.title}</strong>
                <div className="fm-job-tags">
                  <span className="fm-tag fm-tag-type">{job.type}</span>
                  <span className="fm-tag fm-tag-mode">{job.mode}</span>
                </div>
              </div>
            </div>
            {selected===job.title && (
              <div className="fm-job-detail">
                <div className="fm-job-info-row"><span>📅 Experience:</span><strong>{job.exp}</strong></div>
                <div className="fm-job-info-row"><span>💰 Salary:</span><strong>{job.salary}</strong></div>
                <button className="fm-cta-primary" style={{marginTop:'12px',width:'100%'}} onClick={e=>{e.stopPropagation();alert('Application form coming soon!')}}>Apply Now</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="fm-careers-fallback">📧 <strong>careers@codemasti.com</strong> pe email karo.</p>
    </FooterModal>
  )
}

/* ── 5. Blog ────────────────────────────────────────────────── */
function BlogModal({ onClose }) {
  const posts = [
    { title:'How JavaScript Works',         cat:'JavaScript', read:'8 min',  icon:'⚡', date:'Jul 10',  desc:'Event loop, call stack, closures — sab kuch step by step.' },
    { title:'Top Python Interview Questions',cat:'Python',     read:'12 min', icon:'🐍', date:'Jul 8',   desc:'Top 50 Python questions jo har company poochti hai.' },
    { title:'SQL Tricks for Beginners',      cat:'SQL',        read:'6 min',  icon:'🗄️', date:'Jul 5',   desc:'JOINs, subqueries aur aggregation visual way mein.' },
    { title:'React Roadmap 2026',            cat:'React',      read:'10 min', icon:'⚛️', date:'Jul 2',   desc:'React seekhne ka correct order — beginner se advanced.' },
    { title:'Node.js Complete Guide',        cat:'Node.js',    read:'15 min', icon:'🟢', date:'Jun 28',  desc:'Express, middleware, REST API — sab ek jagah.' },
    { title:'MongoDB Tips & Tricks',         cat:'MongoDB',    read:'7 min',  icon:'🍃', date:'Jun 25',  desc:'Aggregation pipeline aur indexing ke saath fast queries.' },
  ]
  const catClr = { JavaScript:'#f7df1e', Python:'#3776ab', SQL:'#336791', React:'#61dafb', 'Node.js':'#339933', MongoDB:'#47a248' }
  return (
    <FooterModal icon="📝" title="Latest Blogs" onClose={onClose}>
      <div className="fm-blog-grid">
        {posts.map(p => (
          <div key={p.title} className="fm-blog-card">
            <div className="fm-blog-top">
              <span className="fm-blog-icon">{p.icon}</span>
              <span className="fm-blog-cat" style={{'--cc': catClr[p.cat]||'#2f8d46'}}>{p.cat}</span>
            </div>
            <h4 className="fm-blog-title">{p.title}</h4>
            <p className="fm-blog-desc">{p.desc}</p>
            <div className="fm-blog-foot">
              <span>{p.date}</span><span>⏱ {p.read}</span>
            </div>
            <button className="fm-blog-read-btn" onClick={() => alert('Full article coming soon!')}>Read Article →</button>
          </div>
        ))}
      </div>
    </FooterModal>
  )
}

/* ── 6. What's New ──────────────────────────────────────────── */
function WhatsNewModal({ onClose }) {
  const versions = [
    { v:'v2.0', badge:'NEW',      color:'#22c55e', date:'July 2026',  items:[['🐍','New Python Course'],['🧩','New Quiz Engine'],['🌙','Dark Theme'],['🏅','Certificates'],['💻','Built-in Compiler'],['🏗️','Real Projects']] },
    { v:'v1.5', badge:'UPDATED',  color:'#f59e0b', date:'May 2026',   items:[['🐛','Bug Fixes'],['🎨','UI Improvements'],['⚡','Faster Load Time']] },
    { v:'v1.0', badge:'RELEASED', color:'#94a3b8', date:'Jan 2026',   items:[['🚀','Initial Launch'],['📚','HTML CSS JS Courses'],['🎯','Basic Quiz System']] },
  ]
  const upcoming = [['🤖','AI Mentor'],['🏆','Badges & Rewards'],['🎙️','Live Bootcamps'],['📱','Mobile App']]
  return (
    <FooterModal icon="✨" title="What's New" onClose={onClose}>
      <div className="fm-wn-timeline">
        {versions.map(v => (
          <div key={v.v} className="fm-wn-block">
            <div className="fm-wn-header">
              <div className="fm-wn-dot" style={{background:v.color}}/>
              <strong className="fm-wn-ver">{v.v}</strong>
              <span className="fm-badge-label" style={{background:v.color+'22',color:v.color,borderColor:v.color+'55'}}>{v.badge}</span>
              <span className="fm-wn-date">{v.date}</span>
            </div>
            <div className="fm-wn-items">
              {v.items.map(([ico,txt]) => (
                <div key={txt} className="fm-wn-item"><span>{ico}</span><span>{txt}</span></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="fm-section">
        <h3 className="fm-section-title" style={{display:'flex',alignItems:'center',gap:'8px'}}>
          🔮 Coming Soon
          <span className="fm-badge-label" style={{background:'#6366f122',color:'#818cf8',borderColor:'#6366f155'}}>COMING SOON</span>
        </h3>
        <div className="fm-upcoming-grid">
          {upcoming.map(([ico,txt]) => (
            <div key={txt} className="fm-upcoming-item"><span className="fm-upcoming-icon">{ico}</span><span>{txt}</span></div>
          ))}
        </div>
      </div>
    </FooterModal>
  )
}

export { AboutModal, MissionModal, InstructorModal, CareersModal, BlogModal, WhatsNewModal }
