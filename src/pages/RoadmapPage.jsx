import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Sparkles, CheckCircle2 } from 'lucide-react'
import { COURSES_DATA } from '../coursesData'

export default function RoadmapPage({ user, onStartCourse }) {
  const [activeRoadmap, setActiveRoadmap] = useState('frontend')
  const [frontendSpecialization, setFrontendSpecialization] = useState('react') // 'react' | 'angular'
  const [hoveredStep, setHoveredStep] = useState(null)

  const ROADMAPS = [
    {
      id: 'frontend',
      label: '🎨 Frontend',
      color: '#3b82f6',
      description: 'Web Fundamentals se modern React ya Angular aur Performance optimization tak — complete modern frontend developer bano!',
      steps: [
        { id: 'fe-wf', title: 'Web Development', icon: '🌐', desc: 'Web foundations, Internet, HTTP & architecture', courseId: 'web-development' },
        { id: 'fe-html', title: 'HTML', icon: '📘', desc: 'Semantic structure & accessibility', courseId: 'html' },
        { id: 'fe-css', title: 'CSS', icon: '🎨', desc: 'Flexbox, Grid & modern responsive styling', courseId: 'css' },
        { id: 'fe-js', title: 'JavaScript', icon: '📒', desc: 'ES6+, Async, DOM & Event Loop', courseId: 'javascript' },
        { id: 'fe-git', title: 'Git & GitHub', icon: '🐙', desc: 'Version control & collaboration', courseId: 'git' },
        { id: 'fe-ts', title: 'TypeScript', icon: '🔷', desc: 'Type safety & interfaces', courseId: 'typescript' },
        frontendSpecialization === 'angular'
          ? { id: 'fe-framework', title: 'Angular (Specialization)', icon: '🅰️', desc: 'Standalone components, DI, RxJS & signals', courseId: 'angular' }
          : { id: 'fe-framework', title: 'React (Specialization)', icon: '⚛️', desc: 'Components, hooks, state & router', courseId: 'react' },
        { id: 'fe-next', title: 'Next.js', icon: '🔺', desc: 'App router, SSR & server actions', courseId: 'nextjs' },
        { id: 'fe-test', title: 'Testing', icon: '🧪', desc: 'Vitest, React Testing Library & E2E', courseId: 'testing' },
        { id: 'fe-perf', title: 'Performance', icon: '⚡', desc: 'Core Web Vitals, code splitting & SEO', courseId: 'performance' },
        { id: 'fe-proj', title: 'Projects', icon: '🏗️', desc: 'Build real-world portfolio apps', courseId: 'frontend-projects' },
        { id: 'fe-int', title: 'Interview Prep', icon: '🎯', desc: 'Crack tech interviews & coding rounds', courseId: 'dsa' },
      ]
    },
    {
      id: 'backend',
      label: '⚙️ Backend',
      color: '#10b981',
      description: 'Node.js, Express, REST APIs, Databases (SQL & MongoDB), Auth, Docker aur Cloud deployment tak!',
      steps: [
        { id: 'be-wf', title: 'Web Development', icon: '🌐', desc: 'HTTP, headers, cookies, REST & architecture', courseId: 'web-development' },
        { id: 'be-js', title: 'JavaScript (Node.js)', icon: '🟢', desc: 'Asynchronous event loop runtime', courseId: 'nodejs' },
        { id: 'be-expr', title: 'Express.js', icon: '🚂', desc: 'Routing, middleware & validation', courseId: 'expressjs' },
        { id: 'be-api', title: 'REST APIs & WebSockets', icon: '📡', desc: 'API architecture & realtime streams', courseId: 'restapi' },
        { id: 'be-sql', title: 'SQL & Relational DBs', icon: '🐬', desc: 'Queries, joins & transactions', courseId: 'mysql' },
        { id: 'be-pg', title: 'PostgreSQL', icon: '🐘', desc: 'Advanced relational database', courseId: 'postgresql' },
        { id: 'be-mongo', title: 'MongoDB', icon: '🍃', desc: 'NoSQL documents & aggregation', courseId: 'mongodb' },
        { id: 'be-auth', title: 'Auth & Web Security', icon: '🔐', desc: 'JWT, sessions, hashing & OWASP', courseId: 'auth' },
        { id: 'be-test', title: 'Testing & QA', icon: '🧪', desc: 'Unit, integration & Supertest', courseId: 'testing' },
        { id: 'be-devops', title: 'Docker & DevOps', icon: '🐳', desc: 'Containers, Compose & CI/CD', courseId: 'devops' },
        { id: 'be-proj', title: 'Backend Projects', icon: '🏗️', desc: 'Production APIs & microservices', courseId: 'backend-projects' },
        { id: 'be-int', title: 'System Design', icon: '🎯', desc: 'Scalability, caching & system design', courseId: 'systemdesign' },
      ]
    },
    {
      id: 'fullstack',
      label: '🏆 Full Stack',
      color: '#8b5cf6',
      description: 'Frontend + Backend + Databases + DevOps + Capstone Project = Complete Full Stack Developer!',
      steps: [
        { id: 'fs-wf', title: 'Web Development', icon: '🌐', desc: 'Web foundations, Internet, HTTP & architecture', courseId: 'web-development' },
        { id: 'fs-html-css', title: 'HTML & CSS', icon: '🎨', desc: 'Modern responsive web layouts', courseId: 'html' },
        { id: 'fs-js', title: 'JavaScript Mastery', icon: '📒', desc: 'Complete modern ES6+ JS', courseId: 'javascript' },
        { id: 'fs-git', title: 'Git & GitHub', icon: '🐙', desc: 'Version control & collaboration', courseId: 'git' },
        { id: 'fs-ts', title: 'TypeScript', icon: '🔷', desc: 'End-to-end type safety', courseId: 'typescript' },
        frontendSpecialization === 'angular'
          ? { id: 'fs-fe-fw', title: 'Angular (Frontend)', icon: '🅰️', desc: 'Components, RxJS & signals', courseId: 'angular' }
          : { id: 'fs-fe-fw', title: 'React (Frontend)', icon: '⚛️', desc: 'Component UI & custom hooks', courseId: 'react' },
        { id: 'fs-next', title: 'Next.js', icon: '🔺', desc: 'Fullstack React framework', courseId: 'nextjs' },
        { id: 'fs-node-exp', title: 'Node.js & Express', icon: '🟢', desc: 'Scalable backend API server', courseId: 'nodejs' },
        { id: 'fs-dbs', title: 'PostgreSQL & MongoDB', icon: '🗄️', desc: 'SQL + NoSQL database mastery', courseId: 'postgresql' },
        { id: 'fs-auth', title: 'Auth & Web Security', icon: '🔐', desc: 'JWT, OAuth & security defense', courseId: 'auth' },
        { id: 'fs-test', title: 'Testing & QA', icon: '🧪', desc: 'Unit, integration & E2E tests', courseId: 'testing' },
        { id: 'fs-devops', title: 'Docker & Deployment', icon: '🐳', desc: 'Containers, GitHub Actions & Cloud', courseId: 'devops' },
        { id: 'fs-sysdes', title: 'System Design', icon: '🏗️', desc: 'High availability & caching', courseId: 'systemdesign' },
        { id: 'fs-capstone', title: 'Capstone Full Stack Project', icon: '🚀', desc: 'Production LMS / SaaS deployment', courseId: 'fullstack-projects' },
        { id: 'fs-int', title: 'Interview Preparation', icon: '🎯', desc: 'Technical & behavioral rounds', courseId: 'hrinterview' },
      ]
    },
    {
      id: 'dsa',
      label: '🧠 DSA',
      color: '#f59e0b',
      description: 'Data Structures & Algorithms — FAANG interview ready!',
      steps: [
        { id: 'cpp-d', title: 'C++ / Python', icon: '💻', desc: 'Choose your language', courseId: 'cpp' },
        { id: 'arrays', title: 'Arrays & Strings', icon: '📊', desc: 'Foundation topics', courseId: 'dsa' },
        { id: 'll', title: 'Linked Lists', icon: '🔗', desc: 'Pointer mastery', courseId: 'dsa' },
        { id: 'trees', title: 'Trees & Graphs', icon: '🌳', desc: 'Hierarchical structures', courseId: 'dsa' },
        { id: 'dp', title: 'Dynamic Programming', icon: '⚡', desc: 'Optimization problems', courseId: 'dsa' },
        { id: 'sysdes', title: 'System Design', icon: '🏗️', desc: 'Architecture interviews', courseId: 'systemdesign' },
        { id: 'sql-i', title: 'SQL Queries', icon: '🐬', desc: 'Complex SQL queries', courseId: 'sqlinterview' },
        { id: 'hr', title: 'HR + Soft Skills', icon: '🎭', desc: 'Communication skills', courseId: 'hrinterview' },
      ]
    }
  ]

  const roadmap = ROADMAPS.find(r => r.id === activeRoadmap) || ROADMAPS[0]

  const getCourseProgress = (courseId) => {
    if (!user || !courseId) return 0
    const course = COURSES_DATA.find(c => c.id === courseId)
    if (!course) return 0
    let total = 0, done = 0
    course.chapters?.forEach(ch => ch.lessons?.forEach(l => {
      total++
      if (user.completedLessons?.includes(l.id)) done++
    }))
    return total === 0 ? 0 : Math.round((done / total) * 100)
  }

  const getStepStatus = (step) => {
    if (!step.courseId) return 'locked'
    const pct = getCourseProgress(step.courseId)
    if (pct === 100) return 'completed'
    if (pct > 0) return 'current'
    return 'locked'
  }

  const getRoadmapStepStatus = (step, index) => {
    const baseStatus = getStepStatus(step)
    if (baseStatus !== 'locked') return baseStatus
    const firstOpenIndex = roadmap.steps.findIndex(item => getStepStatus(item) !== 'completed' && item.courseId)
    return index === firstOpenIndex ? 'current' : 'locked'
  }

  const handleNodeClick = (step) => {
    if (!step.courseId) return
    const course = COURSES_DATA.find(c => c.id === step.courseId)
    if (course) onStartCourse(course)
  }

  return (
    <div className="roadmap-page">
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: 8 }}>
          🗺️ Web Development Career Roadmaps
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          Step-by-step path follow karo — beginner se job-ready full stack engineer bano!
        </p>
      </div>

      {/* Roadmap Selector Tabs */}
      <div className="roadmap-category-tabs">
        {ROADMAPS.map(r => (
          <button
            key={r.id}
            className={`roadmap-tab-btn${activeRoadmap === r.id ? ' active' : ''}`}
            style={activeRoadmap === r.id ? { borderColor: r.color, color: r.color, background: r.color + '15' } : {}}
            onClick={() => setActiveRoadmap(r.id)}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Frontend / Fullstack Specialization Choice Switcher */}
      {(activeRoadmap === 'frontend' || activeRoadmap === 'fullstack') && (
        <div style={{
          margin: '20px 0 28px',
          padding: '16px 20px',
          background: 'var(--bg-card)',
          border: '1.5px solid var(--border)',
          borderRadius: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 14
        }}>
          <div>
            <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Sparkles size={14} color="#f59e0b" /> Framework Specialization Choice
            </span>
            <strong style={{ fontSize: 15, color: 'var(--text-primary)', display: 'block', marginTop: 2 }}>
              Choose your primary frontend framework path:
            </strong>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              type="button"
              onClick={() => setFrontendSpecialization('react')}
              style={{
                padding: '8px 18px',
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: frontendSpecialization === 'react' ? '2px solid #3b82f6' : '1px solid var(--border)',
                background: frontendSpecialization === 'react' ? '#3b82f618' : 'transparent',
                color: frontendSpecialization === 'react' ? '#3b82f6' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              ⚛️ React Track {frontendSpecialization === 'react' && <CheckCircle2 size={14} />}
            </button>
            <button
              type="button"
              onClick={() => setFrontendSpecialization('angular')}
              style={{
                padding: '8px 18px',
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: frontendSpecialization === 'angular' ? '2px solid #ef4444' : '1px solid var(--border)',
                background: frontendSpecialization === 'angular' ? '#ef444418' : 'transparent',
                color: frontendSpecialization === 'angular' ? '#ef4444' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              🅰️ Angular Track {frontendSpecialization === 'angular' && <CheckCircle2 size={14} />}
            </button>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeRoadmap + frontendSpecialization}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Roadmap Description */}
          <div style={{
            background: roadmap.color + '12',
            border: `1.5px solid ${roadmap.color}30`,
            borderRadius: 16, padding: '16px 20px', marginBottom: 32,
            display: 'flex', alignItems: 'center', gap: 16
          }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: roadmap.color + '25', display: 'grid', placeItems: 'center', fontSize: 22, flexShrink: 0 }}>
              {roadmap.label.split(' ')[0]}
            </div>
            <div>
              <strong style={{ fontSize: 16, color: 'var(--text-primary)', display: 'block' }}>{roadmap.label.split(' ').slice(1).join(' ')} Developer Roadmap</strong>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{roadmap.description}</span>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <strong style={{ fontSize: 20, color: roadmap.color }}>
                {roadmap.steps.filter(s => getStepStatus(s) === 'completed').length}/{roadmap.steps.length}
              </strong>
              <small style={{ display: 'block', fontSize: 11, color: 'var(--text-muted)', fontWeight: 700 }}>Completed</small>
            </div>
          </div>

          {/* Roadmap Flow */}
          <div style={{ display: 'flex', gap: 48 }}>
            {/* Node Flow (center) */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div className="roadmap-flow">
                {roadmap.steps.map((step, i) => {
                  const status = getRoadmapStepStatus(step, i)
                  const pct = getCourseProgress(step.courseId)

                  return (
                    <React.Fragment key={step.id}>
                      <motion.div
                        className={`roadmap-node ${status}`}
                        style={{
                          borderColor: status === 'completed' ? '#22c55e'
                            : status === 'current' ? '#2563eb'
                            : '#e5e7eb',
                          cursor: step.courseId ? 'pointer' : 'default',
                          width: 300,
                        }}
                        onClick={() => handleNodeClick(step)}
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={step.courseId ? { scale: 1.04, boxShadow: `0 8px 28px ${roadmap.color}25` } : {}}
                      >
                        <div
                          className="roadmap-node-icon"
                          style={{
                            background: status === 'completed' ? '#dcfce7' : status === 'current' ? '#dbeafe' : '#f3f4f6',
                            color: status === 'completed' ? '#15803d' : status === 'current' ? '#1d4ed8' : '#6b7280'
                          }}
                        >
                          {step.icon}
                        </div>
                        <div className="roadmap-node-info">
                          <strong>{step.title}</strong>
                          <span>{step.desc}</span>
                          {pct > 0 && pct < 100 && (
                            <div style={{ marginTop: 4 }}>
                              <div style={{ height: 4, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
                                <div style={{ height: '100%', background: '#2563eb', width: `${pct}%`, borderRadius: 4 }} />
                              </div>
                              <span style={{ fontSize: 10, color: '#2563eb', fontWeight: 800 }}>{pct}%</span>
                            </div>
                          )}
                        </div>
                        <div className="roadmap-node-status">
                          {status === 'completed' ? '✅' : status === 'current' ? <Play size={16} style={{ color: '#2563eb' }} /> : '🔒'}
                        </div>
                      </motion.div>

                      {i < roadmap.steps.length - 1 && (
                        <div className="roadmap-connector" style={{
                          background: status === 'completed' ? 'linear-gradient(to bottom, #22c55e, rgba(34,197,94,0.18))' : status === 'current' ? 'linear-gradient(to bottom, #2563eb, rgba(37,99,235,0.14))' : 'linear-gradient(to bottom, var(--border), transparent)',
                          opacity: status === 'completed' ? 0.8 : 0.4
                        }} />
                      )}
                    </React.Fragment>
                  )
                })}

                {/* Finish Line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: roadmap.steps.length * 0.05 + 0.2 }}
                  style={{
                    marginTop: 12, padding: '14px 24px',
                    background: `linear-gradient(135deg, ${roadmap.color}, ${roadmap.color}88)`,
                    borderRadius: 16, color: '#fff', fontWeight: 900, fontSize: 15,
                    textAlign: 'center', width: 300,
                    boxShadow: `0 8px 24px ${roadmap.color}33`
                  }}
                >
                  🎓 {roadmap.label.split(' ').slice(1).join(' ')} Ready!
                </motion.div>
              </div>
            </div>

            {/* Side Stats Panel (desktop) */}
            <div style={{ width: 220, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ position: 'sticky', top: 80 }}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20, marginBottom: 16 }}>
                  <h3 style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>📊 Progress</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      { label: 'Completed', count: roadmap.steps.filter(s => getStepStatus(s) === 'completed').length, color: '#10b981' },
                      { label: 'Current', count: roadmap.steps.filter((s, index) => getRoadmapStepStatus(s, index) === 'current').length, color: '#2563eb' },
                      { label: 'Locked', count: roadmap.steps.filter((s, index) => getRoadmapStepStatus(s, index) === 'locked').length, color: '#94a3b8' },
                    ].map(s => (
                      <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>{s.label}</span>
                        <span style={{ fontSize: 14, fontWeight: 900, color: s.color }}>{s.count}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 16, height: 6, background: 'var(--border)', borderRadius: 20, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${(roadmap.steps.filter(s => getStepStatus(s) === 'completed').length / roadmap.steps.length) * 100}%`,
                      background: `linear-gradient(90deg, ${roadmap.color}, ${roadmap.color}aa)`,
                      borderRadius: 20, transition: 'width 1s ease'
                    }} />
                  </div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: roadmap.color, marginTop: 6, textAlign: 'right' }}>
                    {Math.round((roadmap.steps.filter(s => getStepStatus(s) === 'completed').length / roadmap.steps.length) * 100)}% Done
                  </p>
                </div>

                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: 20 }}>
                  <h3 style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12 }}>💡 Tips</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      'Ek topic ek waqt mein complete karo',
                      'Rooz 30 min practice karo',
                      'Projects build karo practice ke liye',
                      'Community se doubts poocho'
                    ].map((tip, i) => (
                      <li key={i} style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600, display: 'flex', gap: 6 }}>
                        <span style={{ color: roadmap.color }}>→</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
