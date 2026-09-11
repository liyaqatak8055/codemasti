import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Zap, Flame, Award, BookOpen, CheckCircle2, Edit3, Save, X,
  User, Star, Trophy, Target, Shield, Compass, Sparkles
} from 'lucide-react'
import { COURSES_DATA } from '../coursesData'
import { saveLocalUser, getLocalUser, getProgress, getStreak } from '../utils/storage'
import { updatePageSeo } from '../utils/seo'

const ALL_BADGES = [
  { id: 'coder',           emoji: '💻', label: 'Coder',          desc: 'Earn 100 XP' },
  { id: 'pro_coder',       emoji: '🚀', label: 'Pro Coder',      desc: 'Earn 300 XP' },
  { id: 'elite_coder',     emoji: '⚡', label: 'Elite Coder',    desc: 'Earn 800 XP' },
  { id: 'grand_master',    emoji: '👑', label: 'Grand Master',   desc: 'Earn 1500 XP' },
  { id: 'seven_day_streak',emoji: '🔥', label: '7 Day Streak',   desc: '7 days in a row' },
  { id: 'html_master',     emoji: '📘', label: 'HTML Master',    desc: 'Complete HTML course' },
  { id: 'css_wizard',      emoji: '🎨', label: 'CSS Wizard',     desc: 'Complete CSS course' },
  { id: 'js_ninja',        emoji: '⚔️', label: 'JS Ninja',       desc: 'Complete JS course' },
  { id: 'first_step',      emoji: '🌟', label: 'First Step',     desc: 'Complete first lesson' },
  { id: 'quiz_champion',   emoji: '🏆', label: 'Quiz Champ',     desc: 'Pass 10 quizzes' },
  { id: 'bookworm',        emoji: '📚', label: 'Bookworm',       desc: 'Bookmark 5 lessons' },
  { id: 'night_owl',       emoji: '🦉', label: 'Night Owl',      desc: 'Study past midnight' },
]

export default function ProfilePage({ user, onUpdateUser, onViewCertificate }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [editing, setEditing] = useState(false)
  const [editForm, setEditForm] = useState({
    username: user?.username || 'Guest Learner',
    bio: user?.bio || 'Learning full stack engineering on CodeMasti 🚀',
    targetTrack: user?.targetTrack || 'Full Stack',
    avatar: user?.avatar || '👨‍💻'
  })
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState(null)

  useEffect(() => {
    updatePageSeo({
      title: 'Learner Profile | CodeMasti',
      description: 'Manage your learner profile, view earned achievements, and check course completion certificates on CodeMasti.',
      path: '/profile',
      noIndex: true
    })
  }, [])

  const progress = getProgress()
  const streak = getStreak()

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

  const handleSaveProfile = () => {
    setSaving(true)
    setMsg(null)
    setTimeout(() => {
      const updated = saveLocalUser(editForm)
      onUpdateUser?.(updated)
      setEditing(false)
      setSaving(false)
      setMsg({ type: 'success', text: 'Local learner profile updated! ✅' })
    }, 200)
  }

  const earnedBadges = progress.badges || []
  const coursesStarted = COURSES_DATA.filter(c => getCourseProgress(c.id) > 0)
  const coursesCompleted = COURSES_DATA.filter(c => getCourseProgress(c.id) === 100)

  const TABS = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'progress', label: '📈 Progress' },
    { id: 'badges', label: '🏆 Badges' },
    { id: 'settings', label: '⚙️ Settings' },
  ]

  const AVATARS = ['👨‍💻', '👩‍💻', '🚀', '⚡', '🔥', '💡', '👑', '🌟']
  const TRACKS = ['Frontend', 'Backend', 'Full Stack', 'Data Engineering', 'SQL & Databases', 'DSA & Algorithms']

  return (
    <div className="profile-page">

      {/* ── HERO BANNER ── */}
      <motion.div
        className="profile-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="profile-avatar-ring">
          <div className="profile-avatar-big">
            {user?.avatar || '👨‍💻'}
          </div>
        </div>

        <div className="profile-hero-info">
          <div className="profile-name-row">
            <h1>{user?.username || 'Guest Learner'}</h1>
            <span className="profile-level-badge">⭐ {user?.targetTrack || 'Full Stack'} Track</span>
          </div>
          <p className="profile-bio">{user?.bio || 'Learning full stack engineering on CodeMasti 🚀'}</p>
          <div className="profile-stats-row">
            <span className="profile-stat-chip"><Zap size={14} style={{ color: 'var(--green)' }} /><strong>{progress.xp || 0}</strong> XP</span>
            <span className="profile-stat-chip"><Flame size={14} style={{ color: '#f97316' }} /><strong>{streak.currentStreak || 1}</strong> Day Streak</span>
            <span className="profile-stat-chip"><CheckCircle2 size={14} style={{ color: '#3b82f6' }} /><strong>{progress.completedLessons?.length || 0}</strong> Lessons Done</span>
            <span className="profile-stat-chip"><Award size={14} style={{ color: '#a855f7' }} /><strong>{earnedBadges.length}</strong> Badges</span>
          </div>
        </div>

        <div className="profile-hero-action">
          <button className="edit-profile-btn" onClick={() => setEditing(!editing)}>
            {editing ? <X size={15} /> : <Edit3 size={15} />}
            {editing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </motion.div>

      {/* ── EDIT FORM ── */}
      {editing && (
        <motion.div
          className="profile-edit-card"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="card-heading" style={{ marginBottom: 16 }}>
            <Edit3 size={18} style={{ color: 'var(--green)' }} />
            <h2>Edit Local Learner Profile</h2>
          </div>
          <div className="profile-edit-fields">
            <div className="form-field">
              <label>Display Name</label>
              <input
                type="text"
                value={editForm.username}
                onChange={e => setEditForm({ ...editForm, username: e.target.value })}
                placeholder="Aapka naam..."
              />
            </div>
            <div className="form-field">
              <label>Bio / Learning Goal</label>
              <textarea
                rows={2}
                value={editForm.bio}
                onChange={e => setEditForm({ ...editForm, bio: e.target.value })}
                placeholder="What is your learning goal?"
              />
            </div>
            <div className="form-field">
              <label>Avatar Emoji</label>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {AVATARS.map(av => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setEditForm({ ...editForm, avatar: av })}
                    style={{
                      fontSize: 20, padding: '4px 10px', borderRadius: 8,
                      border: `1px solid ${editForm.avatar === av ? 'var(--green)' : 'var(--border)'}`,
                      background: editForm.avatar === av ? 'var(--green)20' : 'var(--bg-card)',
                      cursor: 'pointer'
                    }}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-field">
              <label>Target Learning Track</label>
              <select
                value={editForm.targetTrack}
                onChange={e => setEditForm({ ...editForm, targetTrack: e.target.value })}
                style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-primary)' }}
              >
                {TRACKS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="profile-edit-actions" style={{ marginTop: 14 }}>
            <button className="primary-btn" onClick={handleSaveProfile} disabled={saving}>
              <Save size={15} /> {saving ? 'Saving...' : 'Save Profile'}
            </button>
          </div>
        </motion.div>
      )}

      {msg && (
        <div style={{
          padding: '10px 16px', borderRadius: 10, margin: '14px 0',
          background: msg.type === 'success' ? '#22c55e18' : '#ef444418',
          border: `1px solid ${msg.type === 'success' ? '#22c55e40' : '#ef444440'}`,
          color: msg.type === 'success' ? '#16a34a' : '#dc2626',
          fontSize: 13, fontWeight: 700
        }}>
          {msg.text}
        </div>
      )}

      {/* ── TABS NAV ── */}
      <div className="profile-tabs">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`profile-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── TAB CONTENT ── */}
      {activeTab === 'overview' && (
        <motion.div className="profile-tab-pane" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="profile-grid-2">
            <div className="product-card">
              <div className="card-heading"><Trophy size={18} style={{ color: 'var(--green)' }} /><h2>Learning Summary</h2></div>
              <div className="profile-metrics-list">
                <div className="metric-row"><span>Total XP Earned</span><strong>{progress.xp || 0} XP</strong></div>
                <div className="metric-row"><span>Current Daily Streak</span><strong>{streak.currentStreak || 1} Days 🔥</strong></div>
                <div className="metric-row"><span>Longest Streak</span><strong>{streak.longestStreak || 1} Days ⚡</strong></div>
                <div className="metric-row"><span>Completed Lessons</span><strong>{progress.completedLessons?.length || 0}</strong></div>
                <div className="metric-row"><span>Quizzes Passed</span><strong>{progress.completedQuizzes?.length || 0}</strong></div>
                <div className="metric-row"><span>Courses In Progress</span><strong>{coursesStarted.length}</strong></div>
                <div className="metric-row"><span>Courses Completed</span><strong>{coursesCompleted.length}</strong></div>
              </div>
            </div>

            <div className="product-card">
              <div className="card-heading"><Compass size={18} style={{ color: 'var(--green)' }} /><h2>Target Roadmap</h2></div>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
                Aapka primary goal: <strong>{user?.targetTrack || 'Full Stack'}</strong> track master karna.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {COURSES_DATA.slice(0, 4).map(c => {
                  const pct = getCourseProgress(c.id)
                  return (
                    <div key={c.id} style={{ background: 'var(--bg-subtle)', borderRadius: 8, padding: 10, border: '1px solid var(--border)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, marginBottom: 4 }}>
                        <span>{c.icon} {c.title}</span>
                        <span style={{ color: pct === 100 ? '#16a34a' : 'var(--text-muted)' }}>{pct}%</span>
                      </div>
                      <div style={{ width: '100%', height: 5, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ width: `${pct}%`, height: '100%', background: pct === 100 ? '#16a34a' : 'var(--green)', borderRadius: 3 }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'progress' && (
        <motion.div className="profile-tab-pane" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="product-card">
            <div className="card-heading"><BookOpen size={18} style={{ color: 'var(--green)' }} /><h2>All Courses Progress</h2></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14, marginTop: 16 }}>
              {COURSES_DATA.map(c => {
                const pct = getCourseProgress(c.id)
                return (
                  <div key={c.id} style={{ background: 'var(--bg-subtle)', borderRadius: 10, padding: 14, border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: 22 }}>{c.icon}</span>
                      <strong style={{ fontSize: 13, color: 'var(--text-primary)' }}>{c.title}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>
                      <span>Progress</span>
                      <span style={{ fontWeight: 800, color: pct === 100 ? '#16a34a' : 'var(--text-primary)' }}>{pct}%</span>
                    </div>
                    <div style={{ width: '100%', height: 6, background: 'var(--border)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ width: `${pct}%`, height: '100%', background: pct === 100 ? '#16a34a' : 'var(--green)', borderRadius: 3 }} />
                    </div>
                    {pct === 100 && (
                      <button
                        onClick={() => onViewCertificate?.(c)}
                        style={{
                          marginTop: 10, width: '100%', background: 'var(--green)', color: '#fff',
                          border: 'none', borderRadius: 6, padding: '4px 0', fontSize: 11, fontWeight: 700, cursor: 'pointer'
                        }}
                      >
                        🏆 View Certificate
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'badges' && (
        <motion.div className="profile-tab-pane" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="product-card">
            <div className="card-heading"><Award size={18} style={{ color: 'var(--green)' }} /><h2>Earned Badges & Milestones</h2></div>
            <div className="badges-grid" style={{ marginTop: 16 }}>
              {ALL_BADGES.map(b => {
                const earned = earnedBadges.includes(b.id)
                return (
                  <motion.div
                    key={b.id}
                    className={`badge-card ${earned ? 'earned' : 'locked'}`}
                    whileHover={{ scale: 1.03 }}
                  >
                    <span className="badge-emoji">{b.emoji}</span>
                    <strong>{b.label}</strong>
                    <small>{b.desc}</small>
                    {earned && <div style={{ marginTop: 6, fontSize: 10, color: 'var(--green)', fontWeight: 800 }}>✅ Earned</div>}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'settings' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="product-card" style={{ marginBottom: 20 }}>
            <div className="card-heading" style={{ marginBottom: 16 }}><User size={18} style={{ color: 'var(--green)' }} /><h2>Local Storage & Privacy</h2></div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>
              CodeMasti is 100% frontend-only. Your course progress, XP, bookmarks, and quiz scores are stored safely inside your browser's Local Storage. No password or email credentials are required or stored.
            </p>
          </div>
        </motion.div>
      )}

    </div>
  )
}
