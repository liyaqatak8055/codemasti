import { lazy, Suspense, useState, useEffect, useRef, useLayoutEffect, useMemo, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Flame, Menu, Moon, Sun, Search, X, AlertCircle,
  Download, Award, User, LayoutDashboard, ShieldCheck, ArrowUp, Mail,
  BookOpen, Check, ChevronDown, GraduationCap,
  Copy, ExternalLink, CheckCircle2, Sparkles, Compass
} from 'lucide-react'
import { COURSES_DATA, loadCourse, getCachedCourse, preloadCourse } from './coursesData'
import { getSpacedRevisionDue } from './utils/helpers'
import { findByPath, getLessonUrl, getCourseUrl, getLessonSlug, slugify, updatePageSeo } from './utils/seo'
import { initAnalytics, trackEvent, trackPageView } from './utils/analytics'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { LearningProvider } from './context/LearningContext'
import {
  getLocalUser,
  saveLocalUser,
  getProgress,
  markLessonComplete,
  getStreak,
  updateStreak,
  getBookmarks,
  toggleBookmark,
  getLocalAnalytics
} from './utils/storage'
import { sanitizeTextInput, isSafeUrl, sanitizeWebUrl } from './utils/security'

import SearchOverlay from './components/SearchOverlay'
import CertificateModal from './components/CertificateModal'
import { ErrorBoundary } from './components/ErrorBoundary'
import { lazyWithRetry } from './utils/lazyWithRetry'
import LandingPage from './pages/LandingPage'

const DashboardPage = lazyWithRetry(() => import('./pages/DashboardPage'))
const CoursesPage = lazyWithRetry(() => import('./pages/CoursesPage'))
const CourseViewerPage = lazyWithRetry(() => import('./pages/CourseViewerPage'))
const ProfilePage = lazyWithRetry(() => import('./pages/ProfilePage'))
const RoadmapPage = lazyWithRetry(() => import('./pages/RoadmapPage'))
const CareerRoadmapsPage = lazyWithRetry(() => import('./pages/CareerRoadmapsPage'))
const InterviewPage = lazyWithRetry(() => import('./pages/InterviewPage'))
const QuizPage = lazyWithRetry(() => import('./pages/QuizPage'))
const AboutPage = lazyWithRetry(() => import('./pages/AboutPage'))
const ContactPage = lazyWithRetry(() => import('./pages/ContactPage'))
const FooterPages = lazyWithRetry(() => import('./pages/FooterPages'))
const NotFoundPage = lazyWithRetry(() => import('./pages/NotFoundPage'))
const ProjectsPage = lazyWithRetry(() => import('./pages/ProjectsPage'))
const TopicQuestionsPage = lazyWithRetry(() => import('./pages/TopicQuestionsPage'))

// ── Platform Overview & Architecture (Read-Only) ───────────────────
function PlatformOverviewPanel({ onNavigateHome }) {
  const analytics = getLocalAnalytics(COURSES_DATA)

  return (
    <div className="admin-panel" style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 20px 80px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <div>
          <span style={{ fontSize: 11, background: 'var(--green)20', color: 'var(--green)', padding: '3px 10px', borderRadius: 12, fontWeight: 800 }}>
            ARCHITECTURE OVERVIEW
          </span>
          <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--text-primary)', margin: '8px 0 4px' }}>
            CodeMasti Platform Architecture
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0 }}>
            100% Frontend-Only Learning Platform · Static Curriculum · Local Persistence
          </p>
        </div>
        <button onClick={onNavigateHome} className="primary-btn compact">
          ← Back to Home
        </button>
      </div>

      <div style={{ background: '#3b82f612', border: '1px solid #3b82f630', borderRadius: 14, padding: 18, marginBottom: 28 }}>
        <strong style={{ color: '#2563eb', fontSize: 14, display: 'block', marginBottom: 4 }}>
          ℹ️ Cloud Content Management & Admin API — Coming Soon
        </strong>
        <p style={{ color: 'var(--text-primary)', fontSize: 12, margin: 0, lineHeight: 1.5 }}>
          CodeMasti runs completely client-side in your browser. All course lessons, quizzes, visualizers, and project labs are statically bundled with zero external backend dependencies.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 32 }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 18 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Published Courses</span>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: 'var(--text-primary)', margin: '6px 0 0' }}>{COURSES_DATA.length}</h3>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 18 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Total Chapters & Lessons</span>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: 'var(--green)', margin: '6px 0 0' }}>260+</h3>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 18 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Interactive Labs</span>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: '#f59e0b', margin: '6px 0 0' }}>4 Labs</h3>
        </div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: 18 }}>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Local XP Earned</span>
          <h3 style={{ fontSize: 24, fontWeight: 900, color: '#8b5cf6', margin: '6px 0 0' }}>{analytics.totalXP} XP</h3>
        </div>
      </div>
    </div>
  )
}




// ── Certificate View ────────────────────────────────────────────
function CertificateView({ user, selectedCourse, onBack }) {
  return (
    <CertificateModal
      isOpen={true}
      onClose={onBack}
      user={user}
      course={selectedCourse}
    />
  )
}

// ── Certificate Verification Page ───────────────────────────────
function VerifyCertificateView({ certId, onNavigateHome, onOpenCert }) {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const rawCertId = certId || searchParams.get('id') || 'CM-CERT-2026-894231'
  const displayId = sanitizeTextInput(rawCertId, 64)
  const rawName = searchParams.get('name') || 'CodeMasti Student'
  const candidateName = sanitizeTextInput(rawName, 100)
  const courseParam = sanitizeTextInput(searchParams.get('course') || '', 100)
  const matchedCourse = COURSES_DATA.find(c => c.id === courseParam || c.title.toLowerCase() === courseParam.toLowerCase())
  const courseTitle = matchedCourse?.certificateName || matchedCourse?.title || (courseParam ? courseParam : 'Full Stack Web Development Mastery')
  const issueDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
  const [copied, setCopied] = useState(false)

  const isValidFormat = Boolean(displayId && (displayId.startsWith('CM-') || displayId.length >= 8))

  const handleCopyVerificationLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div className="landing-page" style={{ minHeight: '82vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 16px' }}>
      <div className="product-card" style={{ maxWidth: 650, width: '100%', padding: '40px 32px', textAlign: 'center', boxShadow: '0 25px 70px rgba(0,0,0,0.12)', borderRadius: 24, border: isValidFormat ? '1.5px solid var(--green)' : '1.5px solid #f59e0b' }}>
        <div style={{
          width: 78,
          height: 78,
          borderRadius: '50%',
          background: isValidFormat ? 'var(--bg-subtle, #f0fdf4)' : '#fffbeb',
          border: `3px solid ${isValidFormat ? 'var(--green, #22c55e)' : '#f59e0b'}`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isValidFormat ? 'var(--green, #16a34a)' : '#d97706',
          marginBottom: 16,
          boxShadow: isValidFormat ? '0 12px 30px rgba(34, 197, 94, 0.28)' : '0 12px 30px rgba(245, 158, 11, 0.28)'
        }}>
          {isValidFormat ? <GraduationCap size={44} /> : <AlertCircle size={44} />}
        </div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          background: isValidFormat ? '#dcfce7' : '#fef3c7',
          color: isValidFormat ? '#15803d' : '#92400e',
          fontWeight: 800,
          fontSize: 13,
          padding: '6px 18px',
          borderRadius: 999,
          marginBottom: 14,
          border: `1px solid ${isValidFormat ? 'rgba(34, 197, 94, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
        }}>
          {isValidFormat ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {isValidFormat ? 'Course Completion Record' : 'Credential Record Notice'}
        </div>

        <h1 style={{ fontSize: 'clamp(24px, 4vw, 30px)', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 8px' }}>
          CodeMasti Course Completion Certificate
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--text-muted)', margin: '0 auto 20px', maxWidth: 500, lineHeight: 1.5 }}>
          {isValidFormat
            ? 'This record confirms completion of curriculum lessons and code challenges on the CodeMasti learning platform.'
            : 'Please verify that the certificate ID was entered accurately as issued.'}
        </p>

        <div style={{
          background: '#3b82f610',
          border: '1px solid #3b82f630',
          borderRadius: 12,
          padding: '10px 16px',
          marginBottom: 20,
          fontSize: 12,
          color: 'var(--text-muted)',
          lineHeight: 1.4
        }}>
          ℹ️ <strong>Note:</strong> Online cryptographic certificate verification will be available in a future backend release.
        </div>

        <div style={{
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border)',
          borderRadius: 18,
          padding: '22px 24px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: 13,
          marginBottom: 26
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>Certificate ID</span>
            <strong style={{ fontSize: 13.5, fontFamily: 'monospace', color: 'var(--text-primary)' }}>{displayId}</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>Recipient Name</span>
            <strong style={{ fontSize: 14.5, color: 'var(--green)', fontWeight: 800 }}>{candidateName}</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>Completed Course</span>
            <strong style={{ fontSize: 14, color: 'var(--text-primary)' }}>{courseTitle}</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>Platform Status</span>
            <strong style={{ fontSize: 13.5, color: isValidFormat ? 'var(--green)' : '#f59e0b', display: 'flex', alignItems: 'center', gap: 5 }}>
              {isValidFormat ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
              {isValidFormat ? 'Completed Curriculum' : 'Pending Verification'}
            </strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>Issuing Platform</span>
            <strong style={{ fontSize: 13.5, color: 'var(--text-primary)' }}>CodeMasti Open Computer Science Academy</strong>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>Issue Date</span>
            <strong style={{ fontSize: 13, color: 'var(--text-primary)' }}>{issueDate}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={handleCopyVerificationLink}
            className="ghost-btn"
            style={{ padding: '12px 20px', fontSize: 13, fontWeight: 700 }}
          >
            {copied ? '✅ Link Copied!' : '🔗 Copy Certificate Link'}
          </button>
          <button
            onClick={onNavigateHome}
            className="primary-btn"
            style={{ padding: '12px 28px', fontSize: 13, fontWeight: 700 }}
          >
            Explore All Courses
          </button>
        </div>
      </div>
    </div>
  )
}



// ── AI Mentor View ───────────────────────────────────────────────
function MentorView() {
  const ADVICE = [
    { title: "Consistency > Intensity", desc: "Roz 45 minute padho, weekend pe 10 ghante padhne se behtar hai!" },
    { title: "Write Code, Don't Just Read", desc: "Har topic ke code ko editor mein execute karke modified inputs try karo." },
    { title: "Spaced Revisions", desc: "Day 1, Day 3, aur Day 7 par quiz dobara attempt karo to lock in memory." },
    { title: "Project-Based Proof", desc: "Har course ke baad mini project banao aur code commit karo." }
  ]

  return (
    <div className="mentor-view" style={{ maxWidth: 880, margin: '0 auto', padding: '32px 20px 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <span style={{ fontSize: 42, display: 'block', marginBottom: 10 }}>🤖</span>
        <h1 style={{ fontSize: 30, fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
          CodeMasti AI Mentor
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 6 }}>
          Interactive AI coding companion & smart tutor — <strong>Coming Soon in the next platform release!</strong>
        </p>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 16, padding: 24, marginBottom: 28 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 14 }}>
          👨‍🏫 Masti Sir's Top 4 Learning Rules
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
          {ADVICE.map((item, idx) => (
            <div key={idx} style={{ background: 'var(--bg-subtle)', borderRadius: 10, padding: 14, border: '1px solid var(--border)' }}>
              <strong style={{ fontSize: 13, color: 'var(--green)', display: 'block', marginBottom: 4 }}>
                {idx + 1}. {item.title}
              </strong>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0, lineHeight: 1.45 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





// ── Floating Action Cluster ──────────────────────────────────────
function FloatingActions() {
  const { toggleTheme, isDark } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="float-cluster">
      {/* Back to top — only when scrolled */}
      <button
        className={`float-btn float-top${scrolled ? ' visible' : ''}`}
        onClick={scrollUp}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={16} />
      </button>

      {/* Theme toggle */}
      <button
        className="float-btn float-theme"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={isDark ? 'Light mode' : 'Dark mode'}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  )
}

// ── Clean & Professional Footer ──────────────────────────────────────
function BigFooter({ onNavigate }) {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')
  const [followModal, setFollowModal] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setNewsletterStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }
    setNewsletterStatus('loading')
    setErrorMessage('')
    setTimeout(() => {
      setNewsletterStatus('success')
      setEmail('')
    }, 500)
  }

  const handleCopyId = (idText) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(idText)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const courseCol1 = [
    { label: 'HTML', path: '/html' },
    { label: 'JavaScript', path: '/javascript' },
    { label: 'Next.js', path: '/nextjs' },
    { label: 'Node.js', path: '/nodejs' },
    { label: 'SQL', path: '/sql' },
  ]

  const courseCol2 = [
    { label: 'CSS', path: '/css' },
    { label: 'React', path: '/react' },
    { label: 'TypeScript', path: '/typescript' },
    { label: 'MongoDB', path: '/mongodb' },
    { label: 'Data Structures', path: '/dsa' },
  ]

  const resourceLinks = [
    { label: 'All Courses', path: '/courses' },
    { label: 'Developer Roadmaps', path: '/roadmaps' },
    { label: 'Career Paths', path: '/career-roadmaps' },
    { label: 'Interview Preparation', path: '/interview-prep' },
    { label: 'Quiz Playground', path: '/quiz' },
    { label: 'System Design', path: '/system-design' },
  ]

  const supportLinks = [
    { label: 'About CodeMastii', path: '/about' },
    { label: 'Contact Support', path: '/contact' },
    { label: 'Help Center', path: '/help-center' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Feedback', path: '/feedback' },
    { label: 'Report a Bug', path: '/report-bug' },
  ]

  const socialLinks = [
    {
      label: 'Instagram',
      platform: 'Instagram',
      handle: '@CODEMASTII',
      rawHandle: 'CODEMASTII',
      url: 'https://www.instagram.com/CODEMASTII/',
      appUrl: 'instagram://user?username=CODEMASTII',
      gradient: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
      badge: 'Instagram Handle',
      tagline: 'Follow @CODEMASTII on Instagram for daily coding tips, visual cheatsheets, reels & updates!',
      color: '#E1306C',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      label: 'Facebook',
      platform: 'Facebook',
      handle: 'codemastii',
      rawHandle: 'codemastii',
      url: 'https://www.facebook.com/codemastii',
      appUrl: 'fb://facewebmodal/f?href=https://www.facebook.com/codemastii',
      gradient: 'linear-gradient(135deg, #1877f2, #0b5ed7)',
      badge: 'Facebook Page',
      tagline: 'Follow codemastii on Facebook for programming resources, videos & community discussions!',
      color: '#1877F2',
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    }
  ]

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-main-container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand" onClick={() => onNavigate('/')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onNavigate('/')}>
              <img src="/logo.png" alt="CodeMasti" className="footer-brand-logo-img" width="36" height="36" />
              <span className="footer-brand-text">Code<span className="brand-highlight">Mastii</span></span>
            </div>
            <p className="footer-tagline">
              Learn coding, build projects, and grow your development skills.
            </p>
            <div className="footer-social-strip" aria-label="Social media channels">
              {socialLinks.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => {
                    setFollowModal(s)
                    setCopied(false)
                  }}
                  className="footer-social-icon"
                  title={`Follow CodeMastii on ${s.label} (${s.handle})`}
                  aria-label={`Follow CodeMastii on ${s.label}`}
                >
                  {s.svg}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Column (2 Sub-Columns) */}
          <div className="footer-col footer-col-courses">
            <h4 className="footer-col-heading">Courses</h4>
            <div className="footer-courses-grid">
              <ul className="footer-links-list">
                {courseCol1.map((c) => (
                  <li key={c.label}>
                    <button type="button" className="footer-nav-link" onClick={() => onNavigate(c.path)}>
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
              <ul className="footer-links-list">
                {courseCol2.map((c) => (
                  <li key={c.label}>
                    <button type="button" className="footer-nav-link" onClick={() => onNavigate(c.path)}>
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources Column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Resources</h4>
            <ul className="footer-links-list">
              {resourceLinks.map((r) => (
                <li key={r.label}>
                  <button type="button" className="footer-nav-link" onClick={() => onNavigate(r.path)}>
                    {r.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Support</h4>
            <ul className="footer-links-list">
              {supportLinks.map((s) => (
                <li key={s.label}>
                  <button type="button" className="footer-nav-link" onClick={() => onNavigate(s.path)}>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col footer-col-newsletter">
            <h4 className="footer-col-heading">Weekly Coding Tips</h4>
            <p className="footer-newsletter-desc">
              Get coding tips, useful resources, and learning updates in your inbox.
            </p>

            {newsletterStatus === 'success' ? (
              <div className="footer-newsletter-success" role="status">
                <Check size={18} className="nl-success-icon" />
                <span>Thank you for subscribing! Learning updates will be delivered to your inbox.</span>
              </div>
            ) : (
              <form className="footer-newsletter-form" onSubmit={handleSubscribe} noValidate>
                <div className="footer-newsletter-input-wrap">
                  <Mail size={16} className="footer-newsletter-icon" aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (newsletterStatus === 'error') setNewsletterStatus('idle')
                    }}
                    aria-label="Enter your email for weekly coding tips"
                    disabled={newsletterStatus === 'loading'}
                  />
                </div>
                {newsletterStatus === 'error' && (
                  <p className="footer-newsletter-error" role="alert">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  className="footer-newsletter-submit-btn"
                  disabled={newsletterStatus === 'loading'}
                >
                  {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
            <p className="footer-newsletter-note">Zero spam. Unsubscribe at any time.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-bottom-copy">
            © {new Date().getFullYear()} CodeMastii (Learn Coding). All rights reserved.
          </p>
          <div className="footer-bottom-legal">
            <button type="button" className="footer-legal-link" onClick={() => onNavigate('/privacy-policy')}>
              Privacy Policy
            </button>
            <span className="footer-legal-divider" aria-hidden="true">•</span>
            <button type="button" className="footer-legal-link" onClick={() => onNavigate('/terms-and-conditions')}>
              Terms & Conditions
            </button>
            <span className="footer-legal-divider" aria-hidden="true">•</span>
            <button type="button" className="footer-legal-link" onClick={() => onNavigate('/refund-policy')}>
              Refund Policy
            </button>
          </div>
        </div>

        {/* Large Watermark Text */}
        <div className="footer-watermark" aria-hidden="true">
          <span className="footer-watermark-text"><span className="fw-green">Coding</span> <span className="fw-white">Learn</span></span>
        </div>
      </div>

      {/* Interactive Follow Modal / ID Suggestion */}
      <AnimatePresence>
        {followModal && (
          <div
            className="follow-modal-overlay"
            onClick={() => setFollowModal(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="follow-modal-title"
          >
            <motion.div
              className="follow-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="follow-modal-close-btn"
                onClick={() => setFollowModal(null)}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="follow-modal-icon-wrap" style={{ background: followModal.gradient }}>
                {followModal.svg}
              </div>

              <h3 id="follow-modal-title" className="follow-modal-title">
                Follow CodeMastii
              </h3>
              <p className="follow-modal-platform-label">Official {followModal.platform} Account</p>

              <div className="follow-modal-id-box">
                <div className="follow-modal-id-info">
                  <span className="follow-modal-id-title">{followModal.badge}</span>
                  <span className="follow-modal-id-value">{followModal.handle}</span>
                </div>
                <button
                  type="button"
                  className={`follow-modal-copy-btn ${copied ? 'copied' : ''}`}
                  onClick={() => handleCopyId(followModal.rawHandle)}
                  title="Copy ID to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={15} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy ID</span>
                    </>
                  )}
                </button>
              </div>

              <p className="follow-modal-desc">{followModal.tagline}</p>

              <div className="follow-modal-actions">
                <a
                  href={followModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="follow-modal-primary-btn"
                  style={{ background: followModal.gradient }}
                  onClick={() => {
                    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                      window.location.href = followModal.appUrl
                    }
                  }}
                >
                  <span>Open & Follow {followModal.handle}</span>
                  <ExternalLink size={16} />
                </a>
              </div>

              <p className="follow-modal-tip">
                💡 <strong>Quick Option:</strong> ID copy karke apne <strong>{followModal.platform} App</strong> mein search karke directly follow karein!
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  )
}


// ── Main App Shell (inside BrowserRouter) ─────────────────────
const COURSE_ROUTE_ALIASES = {
  sql: 'mysql',
  'system-design': 'systemdesign',
  webfundamentals: 'web-development',
  'web-fundamentals': 'web-development',
  webdev: 'web-development',
  webdevelopment: 'web-development',
  'web-dev': 'web-development',
  docker: 'devops',
  github: 'git',
  ts: 'typescript',
  js: 'javascript'
}

const FOOTER_PAGE_ROUTES = {
  '/company/about-codemasti': 'company',
  '/company/mission': 'mission',
  '/company/become-instructor': 'instructor',
  '/company/careers': 'careers',
  '/blog': 'blog',
  '/whats-new': 'updates',
  '/help-center': 'help',
  '/faqs': 'faqs',
  '/report-bug': 'bug',
  '/feedback': 'feedback',
  '/privacy-policy': 'privacy',
  '/terms-and-conditions': 'terms',
  '/refund-policy': 'refund'
}

const getPublicCoursePath = (course) => {
  if (course?.id === 'mysql') return '/sql'
  if (course?.id === 'systemdesign') return '/system-design'
  return getCourseUrl(course)
}

// ── Scroll To Top On Route Change ───────────────────────────────
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    const scrollOptions = { top: 0, left: 0, behavior: 'instant' }
    try { window.scrollTo(scrollOptions) } catch { window.scrollTo(0, 0) }
    const scrollElement = (element) => {
      if (!element) return
      try { element.scrollTo(scrollOptions) } catch { element.scrollTop = 0; element.scrollLeft = 0 }
    }
    scrollElement(document.scrollingElement)
    scrollElement(document.documentElement)
    scrollElement(document.body)
    scrollElement(document.querySelector('.content-panel'))
    scrollElement(document.querySelector('.viewer-main'))
    scrollElement(document.querySelector('.view-shell'))
  }, [pathname, hash])

  return null
}

// ── Course Viewer Route Component (Dynamic On-Demand Loading) ───
function CourseViewerRoute({
  user,
  spacedRevisions,
  bookmarkedLessons,
  setBookmarkedLessons,
  onCompleteLesson,
  onShowToast,
  onQuizSubmit,
  onViewCertificate,
  onOpenSearch
}) {
  const { courseId, courseSlug, lessonId, lessonSlug } = useParams()
  const location = useLocation()
  const navigate = useNavigate()

  const isWebDevRoute = location.pathname.startsWith('/web-development')
  const rawCourse = courseSlug || courseId || (isWebDevRoute ? 'web-development' : null)
  const rawLesson = lessonSlug || lessonId

  const targetCourseSlug = COURSE_ROUTE_ALIASES[rawCourse] || rawCourse
  const courseMeta = COURSES_DATA.find(c =>
    c.id === targetCourseSlug ||
    slugify(c.id) === targetCourseSlug ||
    slugify(c.title) === targetCourseSlug
  )

  const [courseData, setCourseData] = useState(() => getCachedCourse(targetCourseSlug))
  const [loading, setLoading] = useState(!courseData)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    if (!courseMeta) return

    const cached = getCachedCourse(courseMeta.id)
    if (cached) {
      setCourseData(cached)
      setLoading(false)
      setError(null)
      return
    }

    setLoading(true)
    setError(null)
    loadCourse(courseMeta.id)
      .then(fullCourse => {
        if (isMounted) {
          setCourseData(fullCourse)
          setLoading(false)
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err?.message || 'Failed to load course content.')
          setLoading(false)
        }
      })

    return () => { isMounted = false }
  }, [courseMeta?.id])

  const allLessons = useMemo(() => {
    return courseData?.chapters?.flatMap(ch => ch.lessons || []) || []
  }, [courseData])

  const lesson = useMemo(() => {
    if (!courseData || !allLessons.length) return null
    if (rawLesson) {
      const found = allLessons.find(l =>
        l.id === rawLesson ||
        slugify(l.id) === rawLesson ||
        slugify(l.title) === rawLesson ||
        getLessonSlug(courseData, l) === rawLesson
      )
      if (found) return found
    }
    return allLessons[0] || null
  }, [courseData, allLessons, rawLesson])

  useEffect(() => {
    if (courseData && lesson) {
      updatePageSeo({ course: courseData, lesson })
      trackPageView(location.pathname)
    }
  }, [courseData, lesson, location.pathname])

  if (!courseMeta) {
    return (
      <NotFoundPage
        onNavigateHome={() => navigate('/')}
        onNavigateCourses={() => navigate('/courses')}
        onOpenSearch={onOpenSearch}
      />
    )
  }

  if (loading) {
    return (
      <div className="course-loading-screen" style={{ minHeight: '75vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 32 }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', border: '4px solid var(--border)', borderTopColor: 'var(--green)', animation: 'spin 0.8s linear infinite' }} />
        <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--text-primary)' }}>
          {courseMeta.icon} Loading {courseMeta.title}...
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: 13, margin: 0, textAlign: 'center' }}>
          Preparing interactive editor, visualizers & verified lessons
        </p>
      </div>
    )
  }

  if (error || !courseData) {
    return (
      <div className="course-error-screen" style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, textAlign: 'center', padding: 28 }}>
        <div style={{ fontSize: 42 }}>⚠️</div>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>Unable to load this course</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, maxWidth: 440, margin: 0 }}>
          {error || 'Network error or content unavailable. Please retry.'}
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <button
            onClick={() => {
              setLoading(true)
              setError(null)
              loadCourse(courseMeta.id)
                .then(c => { setCourseData(c); setLoading(false); })
                .catch(e => { setError(e?.message); setLoading(false); })
            }}
            className="primary-btn"
          >
            🔄 Retry Loading
          </button>
          <button onClick={() => navigate('/courses')} className="secondary-btn">
            Browse All Courses
          </button>
        </div>
      </div>
    )
  }

  if (!lesson) {
    return (
      <NotFoundPage
        onNavigateHome={() => navigate('/')}
        onNavigateCourses={() => navigate('/courses')}
        onOpenSearch={onOpenSearch}
      />
    )
  }

  return (
    <CourseViewerPage
      user={user}
      selectedCourse={courseData}
      activeLesson={lesson}
      setActiveLesson={(newLesson) => {
        navigate(getLessonUrl(courseData, newLesson))
      }}
      spacedRevisions={spacedRevisions}
      bookmarkedLessons={bookmarkedLessons}
      setBookmarkedLessons={setBookmarkedLessons}
      onGoToCourses={() => navigate('/courses')}
      onCompleteLesson={onCompleteLesson}
      onShowToast={onShowToast}
      onQuizSubmit={onQuizSubmit}
      onViewCertificate={onViewCertificate}
    />
  )
}

function VerifyCertificateRoute({ onNavigateHome, onOpenCert }) {
  const { certId } = useParams()
  return (
    <VerifyCertificateView
      certId={certId}
      onNavigateHome={onNavigateHome}
      onOpenCert={onOpenCert}
    />
  )
}

function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useTheme()

  const [user, setUser] = useState(getLocalUser)
  const [progress, setProgress] = useState(getProgress)
  const [streak, setStreak] = useState(getStreak)
  const [bookmarkedLessons, setBookmarkedLessons] = useState(getBookmarks)
  const [spacedRevisions, setSpacedRevisions] = useState(getSpacedRevisionDue)
  const [xpToast, setXpToast] = useState(null)
  const [navOpen, setNavOpen] = useState(false)
  const [activeNavSection, setActiveNavSection] = useState(null)
  const [showSearch, setShowSearch] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showCertModal, setShowCertModal] = useState(false)
  const [certModalCourse, setCertModalCourse] = useState(null)
  const profileMenuRef = useRef(null)

  const handleOpenCertificate = (course) => {
    setCertModalCourse(course || COURSES_DATA[0])
    setShowCertModal(true)
  }

  useEffect(() => {
    initAnalytics()
  }, [])

  // Cmd+K shortcut for search
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setShowSearch(true)
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target)) {
        setShowProfileMenu(false)
      }
    }
    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showProfileMenu])

  useEffect(() => {
    setNavOpen(false)
    setShowProfileMenu(false)
    setSpacedRevisions(getSpacedRevisionDue())
    trackPageView(location.pathname)
  }, [location.pathname, location.search])

  const showToast = (xp, message) => {
    setXpToast({ xp, message })
    setTimeout(() => setXpToast(null), 4000)
  }

  const handleStartCourse = (courseOrId) => {
    const course = typeof courseOrId === 'string'
      ? COURSES_DATA.find(c => c.id === courseOrId)
      : (courseOrId || null)
    if (!course) { navigate('/courses'); return }
    const lessons = course.chapters?.flatMap(ch => ch.lessons || []) || []
    const saved = JSON.parse(localStorage.getItem('cm_last_lesson') || 'null')
    const savedLesson = saved?.courseId === course.id ? lessons.find(lesson => lesson.id === saved.lessonId) : null
    const firstLesson = savedLesson || lessons[0]
    if (firstLesson) {
      navigate(getLessonUrl(course, firstLesson))
    } else {
      navigate('/courses/' + course.id)
    }
    trackEvent('course_started', {
      course_id: course.id,
      course_title: course.title
    })
  }

  const getCourseProgress = (courseId) => {
    const course = COURSES_DATA.find(c => c.id === courseId)
    if (!course) return 0
    let total = 0, done = 0
    course.chapters?.forEach(ch => ch.lessons?.forEach(l => {
      total++
      if (progress.completedLessons?.includes(l.id)) done++
    }))
    return total === 0 ? 0 : Math.round((done / total) * 100)
  }

  const handleCompleteLesson = (lessonId, xp = 25, type = 'lesson') => {
    const { progress: updatedProgress, isNew, awardedXP } = markLessonComplete(lessonId, xp, type)
    setProgress(updatedProgress)
    setStreak(getStreak())
    if (isNew && awardedXP > 0) {
      showToast(awardedXP, `${type === 'lesson' ? 'Lesson completed' : type === 'quiz' ? 'Quiz passed' : 'Challenge solved'}! +${awardedXP} XP 🎉`)
    }
  }

  const handleQuizSubmit = (lessonId, isCorrect) => {
    if (isCorrect) handleCompleteLesson(lessonId, 20, 'quiz')
  }

  const handleRevise = (lessonId) => {
    const course = COURSES_DATA.find(c => c.chapters?.some(ch => ch.lessons?.some(l => l.id === lessonId)))
    const lesson = course?.chapters.flatMap(ch => ch.lessons).find(l => l.id === lessonId)
    if (course && lesson) {
      navigate(getLessonUrl(course, lesson))
    }
  }

  const handleSearchNavigate = (item) => {
    setShowSearch(false)
    if (item.type === 'lab') {
      navigate(item.path)
    } else if (item.type === 'course') {
      handleStartCourse(item.course)
    } else if (item.type === 'lesson') {
      navigate(getLessonUrl(item.course, item.lesson))
    }
  }

  const NAV_LINKS = [
    { label: '🏠 Dashboard', path: '/dashboard' },
    { label: '📚 Courses', path: '/courses' },
    { label: '🏗️ Projects', path: '/projects' },
    { label: '🎯 Interview Prep', path: '/interview' },
    { label: '🗺️ Career Roadmaps', path: '/roadmaps' },
    { label: '🤖 AI Mentor', path: '/mentor' },
  ]

  const userForViews = {
    ...user,
    xp: progress.xp || 0,
    streak: streak.currentStreak || 1,
    badges: progress.badges || [],
    completedLessons: progress.completedLessons || []
  }

  const isCourseViewer = Boolean(
    location.pathname.startsWith('/courses/') ||
    location.pathname.startsWith('/course/') ||
    COURSES_DATA.some(c => location.pathname === '/' + c.id || location.pathname.startsWith('/' + c.id + '/'))
  )

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setNavOpen(false)
        setShowProfileMenu(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <ScrollToTop />
      <div className="bg-blob blob-one" aria-hidden="true" />
      <div className="bg-blob blob-two" aria-hidden="true" />

      {/* ── XP TOAST ── */}
      <AnimatePresence>
        {xpToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 16, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="xp-toast"
            role="status"
            aria-live="polite"
          >
            {xpToast.xp > 0 ? <span className="xp-badge">+{xpToast.xp}</span> : <span>✨</span>}
            <span>{xpToast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TOPBAR ── */}
      <header className="topbar" role="banner">
        {/* LEFT: Logo */}
        <Link to="/" className="brand" aria-label="CodeMasti Home" onClick={() => setNavOpen(false)}>
          <img src="/logo.png" alt="CodeMasti" className="brand-logo-img" width="40" height="40" />
          <div className="brand-text">
            <strong>CodeMastii</strong>
            <small>Read → Understand → Remember</small>
          </div>
        </Link>

        {/* CENTER: Nav links */}
        <nav
          id="main-nav-links"
          className={`nav-links${navOpen ? ' open' : ''}`}
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map(n => {
            const isActive = n.path === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(n.path)
            return (
              <button
                key={n.path}
                onClick={() => {
                  navigate(n.path)
                  setNavOpen(false)
                }}
                className={`nav-btn${isActive ? ' active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {n.label}
              </button>
            )
          })}
        </nav>

        {/* RIGHT: Actions */}
        <div className="topbar-right">
          {/* Search Button */}
          <button
            className="topbar-icon-btn"
            title="Search courses (Ctrl+K)"
            aria-label="Search courses, lessons, and roadmaps (Ctrl+K)"
            onClick={() => setShowSearch(true)}
          >
            <Search size={16} aria-hidden="true" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            className={`topbar-icon-btn${isDark ? ' dark-mode-active' : ''}`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            onClick={toggleTheme}
          >
            {isDark ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
          </button>

          {/* User profile button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div ref={profileMenuRef} style={{ position: 'relative' }}>
              <button
                type="button"
                className="user-avatar-chip"
                onClick={() => setShowProfileMenu(m => !m)}
                aria-label="User Profile Menu"
                aria-haspopup="true"
                aria-expanded={showProfileMenu}
                style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
              >
                <span className="user-avatar-letter">{user?.avatar || '👨‍💻'}</span>
                <span className="user-name-label">{user?.username || 'Learner'}</span>
                <div className="user-streak-chip" style={{ marginLeft: 4 }}>
                  <Flame size={12} aria-hidden="true" />
                  <span>{streak.currentStreak || 1}🔥</span>
                </div>
              </button>

              {/* Profile dropdown */}
              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    role="menu"
                    aria-label="Profile options"
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    style={{
                      position: 'absolute', top: '100%', right: 0, marginTop: 8,
                      background: 'var(--bg-card)', border: '1px solid var(--border)',
                      borderRadius: 14, padding: 8, minWidth: 200,
                      boxShadow: '0 16px 40px rgba(0,0,0,0.14)', zIndex: 999
                    }}
                  >
                    <div style={{ padding: '8px 12px 6px', borderBottom: '1px solid var(--border)', marginBottom: 6 }}>
                      <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--text-primary)' }}>{user?.username || 'Learner'}</div>
                      <div style={{ fontSize: 11, color: 'var(--green)', fontWeight: 700 }}>{progress.xp || 0} Total XP</div>
                    </div>
                    <button role="menuitem" onClick={() => { navigate('/profile'); setShowProfileMenu(false) }} style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '9px 12px', borderRadius: 10, border: 'none', background: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}
                      onMouseEnter={e => e.target.style.background = 'var(--green-light)'}
                      onMouseLeave={e => e.target.style.background = 'none'}
                    >
                      <User size={15} style={{ color: 'var(--green)' }} aria-hidden="true" /> My Profile
                    </button>
                    <button role="menuitem" onClick={() => { navigate('/dashboard'); setShowProfileMenu(false) }} style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '9px 12px', borderRadius: 10, border: 'none', background: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}
                      onMouseEnter={e => e.target.style.background = 'var(--green-light)'}
                      onMouseLeave={e => e.target.style.background = 'none'}
                    >
                      <LayoutDashboard size={15} style={{ color: 'var(--green)' }} aria-hidden="true" /> Dashboard
                    </button>
                    <button role="menuitem" onClick={() => { setShowProfileModal(true); setShowProfileMenu(false) }} style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '9px 12px', borderRadius: 10, border: 'none', background: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}
                      onMouseEnter={e => e.target.style.background = 'var(--green-light)'}
                      onMouseLeave={e => e.target.style.background = 'none'}
                    >
                      <Sparkles size={15} style={{ color: '#f59e0b' }} aria-hidden="true" /> Customize Profile
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="menu-toggle"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={navOpen}
            aria-controls="main-nav-links"
          >
            {navOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* ── VIEWS VIA REACT ROUTER ROUTES ── */}
      <main id="main-content" tabIndex="-1" className="view-shell" style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <ErrorBoundary>
          <Suspense fallback={<div className="page-loading">Loading CodeMastii...</div>}>
            <Routes>
              {/* Landing */}
              <Route path="/" element={
                <LandingPage
                  onStartCourse={handleStartCourse}
                  onShowAuth={() => setShowProfileModal(true)}
                  onNavigate={navigate}
                  scrollTarget={activeNavSection}
                  coursesData={COURSES_DATA}
                />
              } />

              {/* Dashboard */}
              <Route path="/dashboard" element={
                <DashboardPage
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  onGoToCourses={() => navigate('/courses')}
                  onStartCourse={handleStartCourse}
                  onRevise={handleRevise}
                  onViewCertificate={handleOpenCertificate}
                />
              } />

              {/* Courses Page */}
              <Route path="/courses" element={
                <CoursesPage
                  user={userForViews}
                  onStartCourse={handleStartCourse}
                  getCourseProgress={getCourseProgress}
                />
              } />

              {/* Career Roadmaps */}
              <Route path="/roadmaps" element={
                <CareerRoadmapsPage
                  user={userForViews}
                  onStartCourse={handleStartCourse}
                  onOpenRoadmap={(id) => navigate('/roadmaps/' + id)}
                  onBackToRoadmaps={() => navigate('/roadmaps')}
                />
              } />
              <Route path="/roadmaps/:roadmapId" element={
                <CareerRoadmapsPage
                  user={userForViews}
                  onStartCourse={handleStartCourse}
                  onOpenRoadmap={(id) => navigate('/roadmaps/' + id)}
                  onBackToRoadmaps={() => navigate('/roadmaps')}
                />
              } />
              <Route path="/roadmap" element={
                <RoadmapPage user={userForViews} onStartCourse={handleStartCourse} />
              } />

              {/* Projects Arena (Frontend, Backend, Full Stack) */}
              <Route path="/projects" element={
                <ProjectsPage user={userForViews} onShowToast={showToast} />
              } />



              {/* Interview Prep */}
              <Route path="/interview" element={<InterviewPage />} />
              <Route path="/interview-prep" element={<InterviewPage />} />
              <Route path="/interview/:topicId" element={<InterviewPage />} />

              {/* Quiz Arena */}
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/quiz/:courseId" element={<QuizPage />} />
              <Route path="/quiz/:courseId/:levelId" element={<QuizPage />} />

              {/* AI Mentor, Profile, About, Contact, Platform Overview */}
              <Route path="/mentor" element={<MentorView />} />
              <Route path="/profile" element={
                <ProfilePage
                  user={userForViews}
                  onUpdateUser={(updated) => setUser(updated)}
                  onViewCertificate={handleOpenCertificate}
                />
              } />
              <Route path="/about" element={<AboutPage onStartLearning={() => navigate('/courses')} />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/admin" element={<PlatformOverviewPanel onNavigateHome={() => navigate('/')} />} />

              {/* Certificate Verification */}
              <Route path="/verify" element={<VerifyCertificateRoute onNavigateHome={() => navigate('/')} onOpenCert={() => handleOpenCertificate(COURSES_DATA[0])} />} />
              <Route path="/verify/:certId" element={<VerifyCertificateRoute onNavigateHome={() => navigate('/')} onOpenCert={() => handleOpenCertificate(COURSES_DATA[0])} />} />

              {/* Footer Static Pages */}
              <Route path="/privacy-policy" element={<FooterPages page="privacy-policy" />} />
              <Route path="/privacy" element={<FooterPages page="privacy" />} />
              <Route path="/terms" element={<FooterPages page="terms" />} />
              <Route path="/terms-and-conditions" element={<FooterPages page="terms" />} />
              <Route path="/refund-policy" element={<FooterPages page="refund" />} />
              <Route path="/refund" element={<FooterPages page="refund" />} />
              <Route path="/faq" element={<FooterPages page="faqs" />} />
              <Route path="/faqs" element={<FooterPages page="faqs" />} />
              <Route path="/help" element={<FooterPages page="help" />} />
              <Route path="/help-center" element={<FooterPages page="help" />} />
              <Route path="/blog" element={<FooterPages page="blog" />} />
              <Route path="/blog/*" element={<FooterPages page="blog" />} />
              <Route path="/whats-new" element={<FooterPages page="updates" />} />
              <Route path="/updates" element={<FooterPages page="updates" />} />
              <Route path="/careers" element={<FooterPages page="careers" />} />
              <Route path="/instructor" element={<FooterPages page="instructor" />} />
              <Route path="/feedback" element={<FooterPages page="feedback" />} />
              <Route path="/company/about" element={<FooterPages page="company" />} />
              <Route path="/company/about-codemasti" element={<FooterPages page="company" />} />
              <Route path="/company/mission" element={<FooterPages page="mission" />} />
              <Route path="/company/become-instructor" element={<FooterPages page="instructor" />} />
              <Route path="/company/careers" element={<FooterPages page="careers" />} />
              <Route path="/community" element={<FooterPages page="community" />} />
              <Route path="/community/*" element={<FooterPages page="community" />} />
              <Route path="/app" element={<FooterPages page="app" />} />
              <Route path="/app/*" element={<FooterPages page="app" />} />
              {/* Direct Web Development Root Route */}
              <Route path="/web-development" element={
                <CourseViewerRoute
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                  onQuizSubmit={handleQuizSubmit}
                  onViewCertificate={handleOpenCertificate}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />
              <Route path="/web-development/:lessonId" element={
                <CourseViewerRoute
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                  onQuizSubmit={handleQuizSubmit}
                  onViewCertificate={handleOpenCertificate}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />

              {/* ❓ Topic Questions & Answers Routes */}
              <Route path="/questions/:courseId/:topicId" element={
                <TopicQuestionsPage
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                />
              } />
              <Route path="/questions/:courseId" element={
                <TopicQuestionsPage
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                />
              } />
              <Route path="/courses/:courseId/:lessonId/questions" element={
                <TopicQuestionsPage
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                />
              } />
              <Route path="/course/:courseId/:lessonId/questions" element={
                <TopicQuestionsPage
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                />
              } />
              <Route path="/:courseSlug/:lessonSlug/questions" element={
                <TopicQuestionsPage
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                />
              } />

              {/* Direct Course & Lesson Routes */}
              <Route path="/courses/:courseId" element={
                <CourseViewerRoute
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                  onQuizSubmit={handleQuizSubmit}
                  onViewCertificate={handleOpenCertificate}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />
              <Route path="/courses/:courseId/:lessonId" element={
                <CourseViewerRoute
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                  onQuizSubmit={handleQuizSubmit}
                  onViewCertificate={handleOpenCertificate}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />
              <Route path="/course/:courseId" element={
                <CourseViewerRoute
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                  onQuizSubmit={handleQuizSubmit}
                  onViewCertificate={handleOpenCertificate}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />
              <Route path="/course/:courseId/:lessonId" element={
                <CourseViewerRoute
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                  onQuizSubmit={handleQuizSubmit}
                  onViewCertificate={handleOpenCertificate}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />

              {/* Root Course Slugs: /:courseSlug & /:courseSlug/:lessonSlug */}
              <Route path="/:courseSlug" element={
                <CourseViewerRoute
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                  onQuizSubmit={handleQuizSubmit}
                  onViewCertificate={handleOpenCertificate}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />
              <Route path="/:courseSlug/:lessonSlug" element={
                <CourseViewerRoute
                  user={userForViews}
                  spacedRevisions={spacedRevisions}
                  bookmarkedLessons={bookmarkedLessons}
                  setBookmarkedLessons={setBookmarkedLessons}
                  onCompleteLesson={handleCompleteLesson}
                  onShowToast={showToast}
                  onQuizSubmit={handleQuizSubmit}
                  onViewCertificate={handleOpenCertificate}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />

              {/* Fallback 404 Route */}
              <Route path="*" element={
                <NotFoundPage
                  onNavigateHome={() => navigate('/')}
                  onNavigateCourses={() => navigate('/courses')}
                  onOpenSearch={() => setShowSearch(true)}
                />
              } />
            </Routes>
          </Suspense>
        </ErrorBoundary>

        {!isCourseViewer && (
          <BigFooter
            onNavigate={(v) => {
              navigate(v)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            onStartCourse={handleStartCourse}
            coursesData={COURSES_DATA}
          />
        )}

        {/* Floating action cluster */}
        <FloatingActions />
      </main>

      {/* ── GLOBAL CERTIFICATE MODAL ── */}
      <CertificateModal
        isOpen={showCertModal}
        onClose={() => setShowCertModal(false)}
        user={userForViews}
        course={certModalCourse}
      />

      {/* ── SEARCH OVERLAY ── */}
      {showSearch && (
        <SearchOverlay
          onClose={() => setShowSearch(false)}
          onNavigate={handleSearchNavigate}
        />
      )}
    </div>
  )
}


export default function App() {
  return (
    <ThemeProvider>
      <LearningProvider>
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      </LearningProvider>
    </ThemeProvider>
  )
}
