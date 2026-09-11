import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Zap, Medal, Flame, Award, Trophy, BookOpen, Repeat, ArrowRight,
  Target, Play
} from 'lucide-react'
import { COURSES_DATA, COURSE_CATEGORIES } from '../coursesData'
import { updatePageSeo } from '../utils/seo'

const ALL_BADGES = [
  { id: 'coder',           emoji: '💻', label: 'Coder' },
  { id: 'pro_coder',       emoji: '🚀', label: 'Pro Coder' },
  { id: 'elite_coder',     emoji: '⚡', label: 'Elite Coder' },
  { id: 'grand_master',    emoji: '👑', label: 'Grand Master' },
  { id: 'seven_day_streak',emoji: '🔥', label: '7 Day Streak' },
  { id: 'first_lesson',    emoji: '🌟', label: 'First Step' },
  { id: 'quiz_champion',   emoji: '🏆', label: 'Quiz Champ' },
  { id: 'bookworm',        emoji: '📚', label: 'Bookworm' },
]

const PROGRESS_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#ec4899']

export default function DashboardPage({ user, leaderboard, spacedRevisions, onGoToCourses, onStartCourse, onRevise, onViewCertificate }) {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    updatePageSeo({
      title: 'Learner Dashboard | CodeMasti',
      description: 'Track your coding progress, view daily study streaks, manage flashcard revisions, and review course certificates on CodeMasti.',
      path: '/dashboard',
      noIndex: true
    })
    const t = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(t)
  }, [])

  const userStats = user
    ? { xp: user.xp, level: user.level, streak: user.streak, badgesCount: user.badges?.length || 0 }
    : { xp: 0, level: 'Novice', streak: 0, badgesCount: 0 }

  const getCourseProgress = (courseId) => {
    if (!user) return 0
    const course = COURSES_DATA.find(c => c.id === courseId)
    if (!course) return 0
    let total = 0, done = 0
    course.chapters?.forEach(ch => ch.lessons?.forEach(l => {
      total++
      if (user.completedLessons?.includes(l.id)) done++
    }))
    return total === 0 ? 0 : Math.round((done / total) * 100)
  }

  // Find next lesson to continue
  const getNextLesson = () => {
    for (const course of COURSES_DATA) {
      for (const chapter of course.chapters || []) {
        for (const lesson of chapter.lessons || []) {
          if (!user?.completedLessons?.includes(lesson.id)) {
            return { course, lesson }
          }
        }
      }
    }
    return null
  }

  const nextLesson = getNextLesson()

  // Today's goals
  const todayGoals = [
    { label: 'Complete 1 lesson', done: (user?.completedLessons?.length || 0) > 0, dot: 'done' },
    { label: 'Daily streak maintain', done: user?.streak > 0, dot: user?.streak > 0 ? 'done' : 'pending' },
    { label: 'Earn 25 XP', done: (user?.xp || 0) >= 25, dot: (user?.xp || 0) >= 25 ? 'done' : 'pending' },
  ]

  // Key courses for progress section
  const keyProgressCourses = COURSES_DATA.slice(0, 6)

  const earnedBadges = user?.badges || []
  const completedCourses = COURSES_DATA.filter(c => getCourseProgress(c.id) >= 100)

  return (
    <div className="dashboard-view">

      {/* ── WELCOME BANNER ── */}
      <motion.div
        className="dashboard-welcome-banner"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h1>Namaste, {user?.username || 'Coder'}! 👋</h1>
              <p>Aaj bhi ek kadam aage badho. Consistency hi success ka raaz hai! 🚀</p>
            </div>
            {completedCourses.length > 0 ? (
              <button
                onClick={() => onViewCertificate?.(completedCourses[0])}
                className="primary-btn"
                style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)', padding: '10px 18px', fontSize: 13, gap: 6 }}
              >
                <Award size={16} /> 🎓 Claim Certificate ({completedCourses.length})
              </button>
            ) : (
              <div style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(6px)',
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: 12,
                color: '#ffffff',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.25)'
              }}>
                🔒 Certificate unlocks at 100% progress
              </div>
            )}
          </div>

          <div className="today-goal-row">
            <div className="goal-chip">
              <span style={{ fontSize: 14 }}>🎯</span>
              Today's Goal
            </div>
            {todayGoals.map((g, i) => (
              <div key={i} className="goal-chip">
                <div className={`goal-dot ${g.done ? 'done' : 'pending'}`} />
                {g.label}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── STAT GRID ── */}
      <div className="stat-grid">
        {[
          { label: 'XP Points', value: userStats.xp.toLocaleString(), icon: Zap, color: '#f59e0b', sub: 'Total earned' },
          { label: 'Level', value: userStats.level, icon: Medal, color: '#8b5cf6', sub: 'Current rank' },
          { label: 'Daily Streak', value: `${userStats.streak} Days 🔥`, icon: Flame, color: '#ef4444', sub: 'Keep going!' },
          { label: 'Badges', value: userStats.badgesCount, icon: Award, color: '#10b981', sub: `of ${ALL_BADGES.length} total` }
        ].map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="stat-icon" style={{ background: s.color + '22', color: s.color }}><Icon size={20} /></div>
              <span>{s.label}</span>
              <strong>{s.value}</strong>
              <small style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 600 }}>{s.sub}</small>
            </motion.div>
          )
        })}
      </div>

      {/* ── CONTINUE LEARNING ── */}
      {nextLesson && (
        <div className="continue-learning-section">
          <div className="card-heading" style={{ marginBottom: 16 }}>
            <Play size={18} style={{ color: 'var(--green)' }} />
            <h2>Continue Learning</h2>
          </div>
          <div className="continue-lesson-card" onClick={() => onStartCourse(nextLesson.course)}>
            <div className="continue-lesson-icon">
              {nextLesson.lesson.emoji || nextLesson.course.icon}
            </div>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: 15, color: 'var(--text-primary)', display: 'block', marginBottom: 2 }}>
                {nextLesson.lesson.title}
              </strong>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 600 }}>
                {nextLesson.course.title} · Continue from where you left off
              </span>
              <div style={{ marginTop: 8 }}>
                <div style={{ height: 4, background: 'var(--border-green)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: 'var(--green)', width: `${getCourseProgress(nextLesson.course.id)}%`, borderRadius: 4 }} />
                </div>
                <span style={{ fontSize: 11, color: 'var(--green)', fontWeight: 700, marginTop: 2, display: 'block' }}>
                  {getCourseProgress(nextLesson.course.id)}% complete
                </span>
              </div>
            </div>
            <ArrowRight size={20} style={{ color: 'var(--green)', flexShrink: 0 }} />
          </div>
        </div>
      )}

      {/* ── PROGRESS TRACKING ── */}
      <div className="progress-section">
        <h2><Target size={18} style={{ color: 'var(--green)' }} /> Progress Tracking</h2>
        {keyProgressCourses.map((course, idx) => {
          const pct = getCourseProgress(course.id)
          const color = PROGRESS_COLORS[idx % PROGRESS_COLORS.length]
          return (
            <div key={course.id} className="progress-track-row">
              <div className="progress-track-label" title={course.title}>
                {course.icon} {course.title.length > 7 ? course.title.slice(0, 7) + '..' : course.title}
              </div>
              <div className="progress-track-bar">
                <motion.div
                  className="progress-track-fill"
                  style={{ background: `linear-gradient(90deg, ${color}, ${color}99)`, width: animated ? `${pct}%` : 0 }}
                  initial={{ width: 0 }}
                  animate={{ width: animated ? `${pct}%` : 0 }}
                  transition={{ duration: 1.4, ease: 'easeOut', delay: idx * 0.1 }}
                />
              </div>
              <div className="progress-track-pct" style={{ color: pct === 100 ? '#10b981' : 'var(--text-primary)' }}>
                {pct}%
              </div>
            </div>
          )
        })}
      </div>

      {/* ── BADGES ── */}
      <div className="badges-section">
        <div className="card-heading" style={{ marginBottom: 16 }}>
          <Award size={18} style={{ color: '#f59e0b' }} />
          <h2>Badges & Achievements</h2>
          <span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
            {earnedBadges.length}/{ALL_BADGES.length} earned
          </span>
        </div>
        <div className="all-badges-grid">
          {ALL_BADGES.map(b => {
            const earned = earnedBadges.includes(b.id)
            return (
              <motion.div
                key={b.id}
                className={`badge-mini ${earned ? 'earned' : 'locked'}`}
                whileHover={{ scale: 1.08 }}
                title={earned ? `${b.label} — Earned!` : `${b.label} — Not yet earned`}
              >
                <span className="be">{b.emoji}</span>
                <small>{b.label}</small>
                {earned && <span style={{ fontSize: 8, color: 'var(--green)', fontWeight: 800, display: 'block', marginTop: 2 }}>EARNED</span>}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* ── SPACED REVISION ── */}
      {spacedRevisions && spacedRevisions.length > 0 && (
        <div className="spaced-revision-card">
          <div className="card-heading">
            <Repeat size={18} style={{ color: '#8b5cf6' }} />
            <h2>🧠 Spaced Revision Due ({spacedRevisions.length})</h2>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>
            Ye topics revise karne ka time aa gaya hai. 1-3-7-14 din ka formula — ab kabhi nahi bhulonge!
          </p>
          <div className="revision-items">
            {spacedRevisions.map(item => (
              <div key={item.lessonId} className="revision-item">
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: 13, color: 'var(--text-primary)', display: 'block' }}>{item.lessonTitle}</strong>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.courseTitle} · {item.interval} din revision</span>
                </div>
                <button
                  onClick={() => onRevise(item.courseId, item.lessonId)}
                  className="primary-btn compact"
                  style={{ fontSize: 11, background: '#8b5cf6' }}
                >
                  Revise Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="dashboard-grid-2col">
        {/* ── MY PROGRESS & XP ── */}
        <div className="product-card">
          <div className="card-heading" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Trophy size={18} style={{ color: '#f59e0b' }} />
              <h2>🌟 My XP & Achievements</h2>
            </div>
            <span style={{ fontSize: 10, background: 'var(--green)15', color: 'var(--green)', padding: '2px 8px', borderRadius: 10, fontWeight: 700 }}>
              Local Learner
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '14px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: 10, border: '1px solid var(--border)' }}>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Total XP</span>
              <strong style={{ fontSize: 14, color: 'var(--green)' }}>{userStats.xp || 0} XP</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: 10, border: '1px solid var(--border)' }}>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Daily Streak</span>
              <strong style={{ fontSize: 14, color: '#f97316' }}>{userStats.streak || 1} Days 🔥</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--bg-subtle)', borderRadius: 10, border: '1px solid var(--border)' }}>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Unlocked Badges</span>
              <strong style={{ fontSize: 14, color: '#8b5cf6' }}>{userStats.badgesCount || 1} Badges 🏆</strong>
            </div>
          </div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>
            🌐 Global Competitive Leaderboard — Coming Soon in the next cloud release!
          </p>
        </div>

        {/* ── MY COURSES ── */}
        <div className="product-card">
          <div className="card-heading"><BookOpen size={18} /><h2>📚 My Courses</h2></div>
          {COURSES_DATA.slice(0, 6).map(course => {
            const pct = getCourseProgress(course.id)
            const cat = COURSE_CATEGORIES.find(c => c.id === course.category)
            return (
              <div key={course.id} className="certificate">
                <span style={{ fontSize: 24 }}>{course.icon}</span>
                <div style={{ flex: 1 }}>
                  <strong style={{ color: 'var(--text-primary)', fontSize: 13 }}>{course.title}</strong>
                  <div className="bar" style={{ marginTop: 6 }}>
                    <b style={{ width: `${pct}%`, background: cat?.color || 'var(--green)' }} />
                  </div>
                  <p style={{ fontSize: 11, color: cat?.color || 'var(--green)', fontWeight: 700 }}>{pct}% Complete</p>
                </div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {pct >= 100 && (
                    <button
                      onClick={() => onViewCertificate?.(course)}
                      className="primary-btn compact"
                      style={{ fontSize: 11, background: '#16a34a', padding: '4px 10px', gap: 4 }}
                      title="Claim 100% Completed Course Certificate"
                    >
                      <Award size={13} /> Cert 🎓
                    </button>
                  )}
                  <button
                    onClick={() => onStartCourse(course)}
                    className="ghost-btn compact"
                    style={{ fontSize: 11 }}
                  >
                    {pct > 0 ? 'Continue' : 'Start'}
                  </button>
                </div>
              </div>
            )
          })}
          <button onClick={onGoToCourses} className="ghost-btn" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
            View All Courses <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
