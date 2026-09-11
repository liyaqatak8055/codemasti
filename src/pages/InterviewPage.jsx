import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Building2,
  Briefcase,
  Code2,
  Users,
  BrainCircuit,
  Award,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Sparkles,
  AlertTriangle,
  Play,
  Timer,
  BookOpen,
  Filter,
  CheckCircle2,
  Layers
} from 'lucide-react'
import { ALL_COURSE_INTERVIEWS } from '../courseData/interview/allCourseInterviews'

export default function InterviewPage() {
  const [selectedTrackId, setSelectedTrackId] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCompany, setSelectedCompany] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState(null)
  const [copiedId, setCopiedId] = useState(null)

  // Mock Practice Timer
  const [practiceActive, setPracticeActive] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(120) // 2 minutes

  useEffect(() => {
    let interval = null
    if (practiceActive && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds(t => t - 1), 1000)
    } else if (timerSeconds === 0) {
      setPracticeActive(false)
    }
    return () => clearInterval(interval)
  }, [practiceActive, timerSeconds])

  // Distinct Companies list
  const companiesList = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'IBM', 'Infosys', 'Wipro', 'HCL']

  // Category list
  const categories = [
    { id: 'all', label: 'All Courses', icon: '🌟' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'programming', label: 'Programming', icon: '💻' },
    { id: 'interview', label: 'DSA, System Design & HR', icon: '🏆' }
  ]

  // Filtered tracks based on category
  const visibleTracks = useMemo(() => {
    if (selectedCategory === 'all') return ALL_COURSE_INTERVIEWS
    return ALL_COURSE_INTERVIEWS.filter(t => t.category === selectedCategory)
  }, [selectedCategory])

  // Total questions count across all tracks
  const totalQuestionsCount = useMemo(() => {
    return ALL_COURSE_INTERVIEWS.reduce((acc, t) => acc + t.questions.length, 0)
  }, [])

  // Currently active tracks to display
  const activeTracksToDisplay = useMemo(() => {
    let tracks = ALL_COURSE_INTERVIEWS

    if (selectedCategory !== 'all') {
      tracks = tracks.filter(t => t.category === selectedCategory)
    }
    if (selectedTrackId !== 'all') {
      tracks = tracks.filter(t => t.id === selectedTrackId)
    }

    return tracks.map(track => {
      // Filter questions inside track
      const filteredQuestions = track.questions.filter(q => {
        // Company filter
        if (selectedCompany !== 'all' && !q.companies?.includes(selectedCompany)) {
          return false
        }
        // Search query filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase()
          const matchQ = q.question.toLowerCase().includes(query)
          const matchA = q.answer.toLowerCase().includes(query)
          const matchC = q.companies?.some(c => c.toLowerCase().includes(query))
          if (!matchQ && !matchA && !matchC) return false
        }
        return true
      })

      return {
        ...track,
        filteredQuestions
      }
    }).filter(track => track.filteredQuestions.length > 0)
  }, [selectedCategory, selectedTrackId, selectedCompany, searchQuery])

  // Automatically expand first question when changing track
  useEffect(() => {
    if (activeTracksToDisplay.length > 0 && activeTracksToDisplay[0].filteredQuestions.length > 0) {
      setExpandedId(activeTracksToDisplay[0].filteredQuestions[0].id)
    }
  }, [selectedTrackId, selectedCategory])

  const handleCopyAnswer = (q) => {
    const fullText = `Q: ${q.question}\n\nIdeal Answer:\n${q.answer}\n\nKey Mistakes to Avoid:\n${q.traps || 'None'}`
    navigator.clipboard?.writeText(fullText)
    setCopiedId(q.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const formatTimer = (sec) => {
    const mins = Math.floor(sec / 60)
    const s = sec % 60
    return `${mins}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <div className="interview-page-container">
      {/* ── Page Styles ── */}
      <style>{`
        .interview-page-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 28px 18px 80px;
          width: 100%;
          box-sizing: border-box;
          color: var(--text-primary);
        }
        .hero-banner {
          text-align: center;
          margin-bottom: 28px;
          position: relative;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(139, 92, 246, 0.12);
          color: #7c3aed;
          border: 1.5px solid rgba(139, 92, 246, 0.4);
          padding: 5px 16px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .hero-title {
          font-size: 32px;
          font-weight: 900;
          margin: 0 0 10px;
          color: var(--text-primary);
          line-height: 1.3;
        }
        .hero-subtitle {
          font-size: 15px;
          color: var(--text-secondary);
          max-width: 780px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Category Tabs */
        .category-tabs-row {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
          margin-bottom: 16px;
          -webkit-overflow-scrolling: touch;
        }
        .category-tab {
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          border: 1.5px solid var(--border);
          background: var(--bg-card);
          color: var(--text-secondary);
          white-space: nowrap;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .category-tab:hover {
          border-color: var(--green);
          color: var(--text-primary);
        }
        .category-tab.active {
          background: rgba(16, 185, 129, 0.12);
          border-color: var(--green);
          color: var(--green);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.15);
        }

        /* Course Selector Horizontal Scroll */
        .courses-grid-row {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 10px;
          margin-bottom: 24px;
        }
        .course-card-btn {
          background: var(--bg-card);
          border: 1.5px solid var(--border);
          border-radius: 12px;
          padding: 12px 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
        }
        .course-card-btn:hover {
          border-color: #8b5cf6;
          transform: translateY(-2px);
        }
        .course-card-btn.active {
          border-color: #8b5cf6;
          background: rgba(139, 92, 246, 0.12);
          box-shadow: 0 4px 14px rgba(139, 92, 246, 0.2);
        }
        .course-icon-badge {
          font-size: 22px;
          line-height: 1;
        }
        .course-btn-title {
          font-size: 13px;
          font-weight: 800;
          color: var(--text-primary);
          display: block;
          line-height: 1.3;
        }
        .course-btn-count {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 600;
        }

        /* Company Pill Row */
        .company-pill-row {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
          margin-bottom: 20px;
          -webkit-overflow-scrolling: touch;
        }
        .company-pill {
          padding: 7px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          border: 1.5px solid var(--border);
          background: var(--bg-card);
          color: var(--text-primary);
          white-space: nowrap;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .company-pill:hover {
          border-color: #3b82f6;
        }
        .company-pill.active {
          background: #2563eb;
          color: #fff;
          border-color: #2563eb;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
        }

        /* Search & Controls */
        .controls-row {
          display: flex;
          gap: 12px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }
        .search-box {
          flex: 1 1 280px;
          position: relative;
        }
        .search-box input {
          width: 100%;
          background: var(--bg-card);
          border: 1.5px solid var(--border);
          border-radius: 10px;
          padding: 10px 14px 10px 38px;
          color: var(--text-primary);
          font-size: 13px;
          outline: none;
          box-sizing: border-box;
        }
        .search-box input:focus {
          border-color: #8b5cf6;
        }
        .search-box svg {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        /* Mock Practice Box */
        .practice-banner {
          background: var(--bg-card);
          border: 1.5px solid #8b5cf6;
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 12px;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.08);
        }

        /* Section Title Header */
        .section-track-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-card);
          border: 1.5px solid var(--border);
          border-left: 5px solid #8b5cf6;
          border-radius: 12px;
          padding: 14px 18px;
          margin: 28px 0 16px;
        }
        .section-track-title {
          font-size: 18px;
          font-weight: 900;
          color: var(--text-primary);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-track-desc {
          font-size: 13px;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        /* Question Accordion Card */
        .question-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 14px;
          margin-bottom: 14px;
          overflow: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
        }
        .question-header {
          padding: 16px 18px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 14px;
          user-select: none;
          background: var(--bg-card);
        }
        .question-header:hover {
          background: var(--bg-subtle);
        }
        .question-badges-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 6px;
        }
        .badge-company {
          font-size: 11px;
          font-weight: 800;
          background: rgba(59, 130, 246, 0.15);
          color: #2563eb;
          border: 1px solid rgba(59, 130, 246, 0.35);
          padding: 2px 8px;
          border-radius: 6px;
          text-transform: uppercase;
        }
        .badge-diff {
          font-size: 11px;
          font-weight: 800;
          background: rgba(245, 158, 11, 0.15);
          color: #d97706;
          border: 1px solid rgba(245, 158, 11, 0.35);
          padding: 2px 8px;
          border-radius: 6px;
        }
        .question-title-text {
          font-size: 15px;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.4;
          margin: 0;
        }

        /* Accordion Body */
        .question-body {
          padding: 0 18px 20px;
          border-top: 1px solid var(--border);
          background: var(--bg-subtle);
        }
        .answer-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 16px;
          font-size: 14px;
          line-height: 1.7;
          color: var(--text-primary);
          margin-bottom: 14px;
          white-space: pre-line;
        }
        .answer-box strong {
          color: var(--text-primary);
          font-weight: 800;
        }
        .trap-box {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          border-left: 4px solid #ef4444;
          border-radius: 0 8px 8px 0;
          padding: 12px 16px;
          margin-bottom: 12px;
          font-size: 13px;
          color: var(--text-primary);
        }
        .followup-box {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 13px;
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .interview-page-container {
            padding: 16px 12px 60px;
          }
          .hero-title {
            font-size: 24px;
          }
          .courses-grid-row {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
          .question-title-text {
            font-size: 14px;
          }
          .question-header {
            padding: 14px;
          }
          .question-body {
            padding: 0 14px 16px;
          }
        }
        @media (max-width: 480px) {
          .courses-grid-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── 1. Page Header Banner ── */}
      <div className="hero-banner">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>Course-Wise MNC Interview Masterclass</span>
        </div>
        <h1 className="hero-title">
          🎯 Complete Course Interview Preparation
        </h1>
        <p className="hero-subtitle">
          Practice 20+ comprehensive interview questions for <strong>every single course taught in CodeMasti</strong>, targeting real interview rounds at <strong>Google, Microsoft, Apple, Amazon, IBM, Infosys, Wipro & HCL</strong>.
        </p>
      </div>

      {/* ── 2. Category Filters ── */}
      <div className="category-tabs-row">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-tab ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(cat.id)
              setSelectedTrackId('all')
            }}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* ── 3. Course Interview Selector Cards ── */}
      <div className="courses-grid-row">
        <button
          className={`course-card-btn ${selectedTrackId === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedTrackId('all')}
        >
          <span className="course-icon-badge">📚</span>
          <div>
            <span className="course-btn-title">All Course Interviews</span>
            <span className="course-btn-count">{totalQuestionsCount} Questions</span>
          </div>
        </button>

        {visibleTracks.map(track => (
          <button
            key={track.id}
            className={`course-card-btn ${selectedTrackId === track.id ? 'active' : ''}`}
            onClick={() => setSelectedTrackId(track.id)}
          >
            <span className="course-icon-badge">{track.icon}</span>
            <div>
              <span className="course-btn-title">{track.title}</span>
              <span className="course-btn-count">{track.questions.length} Questions</span>
            </div>
          </button>
        ))}
      </div>

      {/* ── 4. Target Companies Filter Pills ── */}
      <div className="company-pill-row">
        <button
          className={`company-pill ${selectedCompany === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCompany('all')}
        >
          <Building2 size={13} />
          <span>All Target Companies</span>
        </button>
        {companiesList.map(comp => (
          <button
            key={comp}
            className={`company-pill ${selectedCompany === comp ? 'active' : ''}`}
            onClick={() => setSelectedCompany(comp)}
          >
            <span>🏢 {comp}</span>
          </button>
        ))}
      </div>

      {/* ── 5. Search Bar ── */}
      <div className="controls-row">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search interview questions across all courses (e.g. Hooks, Event Loop, Indexes, STAR, Redis)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ── 6. Mock Interview Simulator Banner ── */}
      <div className="practice-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Timer size={22} color="#7c3aed" />
          <div>
            <strong style={{ fontSize: 14, color: 'var(--text-primary)', display: 'block', marginBottom: 2 }}>
              🎙️ Real Mock Interview Simulator (2-Minute Answer Timer)
            </strong>
            <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
              Pick any course question, start the live timer, and practice speaking your answer out loud!
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            fontSize: 16, fontWeight: 900, fontFamily: 'monospace',
            background: 'var(--bg-subtle)', padding: '6px 14px', borderRadius: 8, border: '1px solid var(--border)',
            color: timerSeconds < 30 ? '#ef4444' : 'var(--green)'
          }}>
            ⏱️ {formatTimer(timerSeconds)}
          </span>
          <button
            onClick={() => {
              if (practiceActive) {
                setPracticeActive(false)
              } else {
                setTimerSeconds(120)
                setPracticeActive(true)
              }
            }}
            style={{
              background: practiceActive ? '#ef4444' : '#7c3aed',
              color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px',
              fontSize: 13, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6
            }}
          >
            {practiceActive ? '⏹️ Stop Timer' : '▶️ Start 2-Min Practice'}
          </button>
        </div>
      </div>

      {/* ── 7. Display Course Tracks with 20+ Questions Each ── */}
      {activeTracksToDisplay.length === 0 ? (
        <div style={{
          textAlign: 'center', padding: '40px 20px', background: 'var(--bg-card)',
          borderRadius: 14, border: '1px solid var(--border)', color: 'var(--text-muted)'
        }}>
          <p style={{ fontSize: 16, fontWeight: 700 }}>No interview questions match your filter criteria.</p>
          <button
            onClick={() => { setSelectedTrackId('all'); setSelectedCompany('all'); setSearchQuery(''); }}
            style={{
              background: 'var(--green)', color: '#fff', border: 'none',
              padding: '8px 18px', borderRadius: 8, fontWeight: 800, cursor: 'pointer', marginTop: 8
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        activeTracksToDisplay.map(track => (
          <div key={track.id} style={{ marginBottom: 36 }}>
            {/* Track Header */}
            <div className="section-track-header">
              <div>
                <h2 className="section-track-title">
                  <span>{track.icon}</span>
                  <span>{track.title}</span>
                </h2>
                <div className="section-track-desc">{track.description}</div>
              </div>
              <span style={{
                fontSize: 12, fontWeight: 800, background: 'rgba(139, 92, 246, 0.15)',
                color: '#7c3aed', padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap'
              }}>
                {track.filteredQuestions.length} Questions
              </span>
            </div>

            {/* Questions Accordion */}
            <div>
              {track.filteredQuestions.map((q, qIdx) => {
                const isExpanded = expandedId === q.id
                return (
                  <motion.div
                    key={q.id}
                    className="question-card"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {/* Header */}
                    <div
                      className="question-header"
                      onClick={() => setExpandedId(isExpanded ? null : q.id)}
                    >
                      <div style={{ flex: 1 }}>
                        <div className="question-badges-row">
                          <span className="badge-diff">{q.difficulty || 'Medium'}</span>
                          {q.companies?.map(c => (
                            <span key={c} className="badge-company">{c}</span>
                          ))}
                        </div>
                        <h3 className="question-title-text">
                          #{qIdx + 1}. {q.question}
                        </h3>
                      </div>
                      <div style={{ padding: 4, color: 'var(--text-muted)' }}>
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>

                    {/* Body */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          className="question-body"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Copy Button */}
                          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 0 8px' }}>
                            <button
                              onClick={() => handleCopyAnswer(q)}
                              style={{
                                background: copiedId === q.id ? 'var(--green)' : 'var(--bg-card)',
                                color: copiedId === q.id ? '#fff' : 'var(--text-primary)',
                                border: '1px solid var(--border)', borderRadius: 6,
                                padding: '5px 12px', fontSize: 12, fontWeight: 700,
                                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4
                              }}
                            >
                              {copiedId === q.id ? <Check size={13} /> : <Copy size={13} />}
                              <span>{copiedId === q.id ? 'Copied Q&A!' : 'Copy Answer'}</span>
                            </button>
                          </div>

                          {/* Ideal Answer */}
                          <div className="answer-box">
                            <strong style={{ fontSize: 14, color: 'var(--green)', display: 'block', marginBottom: 6 }}>
                              💡 Senior Candidate Ideal Answer:
                            </strong>
                            {q.answer}
                          </div>

                          {/* Common Traps */}
                          {q.traps && (
                            <div className="trap-box">
                              <strong style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                                <AlertTriangle size={14} /> Common Mistakes / Traps to Avoid:
                              </strong>
                              <span>{q.traps}</span>
                            </div>
                          )}

                          {/* Follow-up Probes */}
                          {q.followUp && q.followUp.length > 0 && (
                            <div className="followup-box">
                              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: 4 }}>
                                🔄 Expected Interviewer Follow-Up Probes:
                              </strong>
                              <ul style={{ margin: 0, paddingLeft: 18, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {q.followUp.map((f, i) => (
                                  <li key={i}>{f}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))
      )}
    </div>
  )
}
