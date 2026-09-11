import React, { useState, useEffect, useMemo } from 'react'
import { ArrowLeft, ChevronDown, CheckCircle, Circle, BookOpen, Lightbulb, Brain, Code2, Target, FileText, Sparkles, ArrowRight } from 'lucide-react'
import { getTopicQuestions, getQuickRevisionQuestions } from '../utils/topicQuestionsEngine'

const CATEGORY_ICONS = {
  Concept: BookOpen,
  'Why/How': Lightbulb,
  Logic: Brain,
  Practical: Code2,
  Interview: Target,
  Exam: FileText
}

const CATEGORY_EMOJIS = {
  Concept: '📘 Concept',
  'Why/How': '💡 Why/How',
  Logic: '🧠 Logic',
  Practical: '💻 Practical',
  Interview: '🎯 Interview',
  Exam: '📝 Exam'
}

const DIFFICULTY_EMOJIS = {
  Beginner: '🟢 Beginner',
  Intermediate: '🟡 Intermediate',
  Advanced: '🔴 Advanced'
}

export default function QuestionAnswers({
  lesson,
  topic,
  course,
  questions: passedQuestions,
  onBackToLesson,
  onNextTopic
}) {
  const activeLesson = topic || lesson
  const courseTitle = course?.title || 'Course'
  const lessonTitle = activeLesson?.title || 'Topic'
  const storageKey = `cm_rev_q_${course?.id || 'gen'}_${activeLesson?.id || 'topic'}`

  // Extract / generate questions
  const allQuestions = useMemo(() => {
    if (Array.isArray(passedQuestions) && passedQuestions.length > 0) {
      return passedQuestions
    }
    return getTopicQuestions(activeLesson, course)
  }, [activeLesson, course, passedQuestions])

  // Quick revision questions
  const quickRevisionQuestions = useMemo(() => {
    return getQuickRevisionQuestions(activeLesson, allQuestions)
  }, [activeLesson, allQuestions])

  // Reviewed questions from localStorage
  const [reviewedIds, setReviewedIds] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(reviewedIds))
    } catch (e) {
      console.warn('Could not save reviewed questions to localStorage', e)
    }
  }, [reviewedIds, storageKey])

  // Filter state
  const [filterDifficulty, setFilterDifficulty] = useState('all')

  // Expanded accordion state (allow clicking to expand/collapse single or multiple)
  const [expandedId, setExpandedId] = useState(allQuestions[0]?.id || 1)

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
    // Automatically mark as viewed/reviewed if opened
    if (!reviewedIds.includes(id)) {
      setReviewedIds((prev) => [...prev, id])
    }
  }

  const toggleReviewed = (e, id) => {
    e.stopPropagation()
    setReviewedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    if (filterDifficulty === 'all') return allQuestions
    return allQuestions.filter(
      (q) => (q.difficulty || 'Beginner').toLowerCase() === filterDifficulty.toLowerCase()
    )
  }, [allQuestions, filterDifficulty])

  // Progress metrics
  const totalCount = allQuestions.length
  const reviewedCount = reviewedIds.filter((id) => allQuestions.some((q) => q.id === id)).length
  const progressPercent = totalCount > 0 ? Math.round((reviewedCount / totalCount) * 100) : 0

  const beginnerCount = allQuestions.filter((q) => (q.difficulty || 'Beginner') === 'Beginner').length
  const intermediateCount = allQuestions.filter((q) => q.difficulty === 'Intermediate').length
  const advancedCount = allQuestions.filter((q) => q.difficulty === 'Advanced').length

  return (
    <div className="topic-questions-container" id="topic-questions-view">
      {/* ── TOP HEADER ────────────────────────────────────────── */}
      <div className="tq-header-banner">
        <div className="tq-header-top-row">
          <button
            type="button"
            className="tq-back-btn"
            onClick={onBackToLesson}
            aria-label="Back to Lesson Content"
          >
            <ArrowLeft size={16} />
            <span>Back to Lesson</span>
          </button>

          <div className="tq-course-pill">
            <span>{course?.icon || '🌐'}</span>
            <span>{courseTitle}</span>
          </div>
        </div>

        <div className="tq-header-main">
          <div className="tq-badge-pill">
            <span>❓</span>
            <span>Topic Questions & Answers</span>
          </div>

          <h1 className="tq-lesson-title">{lessonTitle}</h1>
          <p className="tq-lesson-subtitle">
            Important questions to help you revise this topic, build rock-solid conceptual clarity, and prepare for college exams & tech interviews.
          </p>

          {/* ── STATS BAR ─────────────────────────────────────── */}
          <div className="tq-stats-grid">
            <div className="tq-stat-card">
              <span className="tq-stat-label">Total Questions</span>
              <span className="tq-stat-val">{totalCount}</span>
            </div>
            <div className="tq-stat-card">
              <span className="tq-stat-label">Reviewed</span>
              <span className="tq-stat-val tq-stat-highlight">{reviewedCount}</span>
            </div>
            <div className="tq-stat-card">
              <span className="tq-stat-label">Revision Progress</span>
              <span className="tq-stat-val">{progressPercent}%</span>
            </div>
          </div>

          {/* ── PROGRESS BAR ──────────────────────────────────── */}
          <div className="tq-progress-wrapper" aria-label="Topic Revision Progress">
            <div
              className="tq-progress-fill"
              style={{ width: `${Math.max(5, progressPercent)}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── FILTER TABS ───────────────────────────────────────── */}
      <div className="tq-filters-bar" role="tablist" aria-label="Filter Questions by Difficulty">
        <button
          type="button"
          role="tab"
          aria-selected={filterDifficulty === 'all'}
          className={`tq-filter-tab ${filterDifficulty === 'all' ? 'active' : ''}`}
          onClick={() => setFilterDifficulty('all')}
        >
          All Questions ({totalCount})
        </button>
        {beginnerCount > 0 && (
          <button
            type="button"
            role="tab"
            aria-selected={filterDifficulty === 'beginner'}
            className={`tq-filter-tab ${filterDifficulty === 'beginner' ? 'active' : ''}`}
            onClick={() => setFilterDifficulty('beginner')}
          >
            🟢 Beginner ({beginnerCount})
          </button>
        )}
        {intermediateCount > 0 && (
          <button
            type="button"
            role="tab"
            aria-selected={filterDifficulty === 'intermediate'}
            className={`tq-filter-tab ${filterDifficulty === 'intermediate' ? 'active' : ''}`}
            onClick={() => setFilterDifficulty('intermediate')}
          >
            🟡 Intermediate ({intermediateCount})
          </button>
        )}
        {advancedCount > 0 && (
          <button
            type="button"
            role="tab"
            aria-selected={filterDifficulty === 'advanced'}
            className={`tq-filter-tab ${filterDifficulty === 'advanced' ? 'active' : ''}`}
            onClick={() => setFilterDifficulty('advanced')}
          >
            🔴 Advanced ({advancedCount})
          </button>
        )}
      </div>

      {/* ── QUESTIONS ACCORDION LIST ─────────────────────────── */}
      <div className="tq-questions-list">
        {filteredQuestions.map((q, idx) => {
          const isExpanded = expandedId === q.id
          const isReviewed = reviewedIds.includes(q.id)
          const diffEmoji = DIFFICULTY_EMOJIS[q.difficulty] || DIFFICULTY_EMOJIS.Beginner
          const catEmoji = CATEGORY_EMOJIS[q.category] || CATEGORY_EMOJIS.Concept

          return (
            <div
              key={q.id}
              className={`tq-card ${isExpanded ? 'tq-card-expanded' : ''} ${isReviewed ? 'tq-card-reviewed' : ''}`}
            >
              {/* Question Header Accordion Button */}
              <button
                type="button"
                className="tq-card-header-btn"
                onClick={() => toggleExpand(q.id)}
                aria-expanded={isExpanded}
                aria-controls={`tq-panel-${q.id}`}
                id={`tq-header-${q.id}`}
              >
                <div className="tq-card-left">
                  <span className="tq-q-number">Q{idx + 1}.</span>
                  <div className="tq-q-text-group">
                    <span className="tq-q-text">{q.question}</span>
                    <div className="tq-q-badges">
                      {q.category && (
                        <span className={`tq-badge-cat tq-cat-${(q.category || '').toLowerCase().replace(/[^a-z]/g, '')}`}>
                          {catEmoji}
                        </span>
                      )}
                      {q.difficulty && (
                        <span className={`tq-badge-diff tq-diff-${(q.difficulty || '').toLowerCase()}`}>
                          {diffEmoji}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="tq-card-right">
                  <button
                    type="button"
                    className={`tq-review-toggle ${isReviewed ? 'reviewed' : ''}`}
                    onClick={(e) => toggleReviewed(e, q.id)}
                    title={isReviewed ? 'Mark as not reviewed' : 'Mark as reviewed'}
                    aria-label={isReviewed ? 'Mark as not reviewed' : 'Mark as reviewed'}
                  >
                    {isReviewed ? <CheckCircle size={18} /> : <Circle size={18} />}
                  </button>
                  <div className={`tq-chevron-icon ${isExpanded ? 'rotate' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </div>
              </button>

              {/* Accordion Expandable Body */}
              {isExpanded && (
                <div
                  id={`tq-panel-${q.id}`}
                  role="region"
                  aria-labelledby={`tq-header-${q.id}`}
                  className="tq-card-body"
                >
                  {/* English Technical Answer */}
                  <div className="tq-answer-block">
                    <div className="tq-answer-label">
                      <span>📘</span>
                      <strong>Answer:</strong>
                    </div>
                    <div className="tq-answer-content">
                      {q.answer.split('\n').map((line, lIdx) => (
                        <p key={lIdx}>{line}</p>
                      ))}
                    </div>
                  </div>

                  {/* Hinglish Easy Explanation */}
                  {q.explanation && (
                    <div className="tq-hinglish-block">
                      <div className="tq-hinglish-label">
                        <span>💡</span>
                        <strong>Easy Explanation:</strong>
                      </div>
                      <div className="tq-hinglish-content">
                        <p>{q.explanation}</p>
                      </div>
                    </div>
                  )}

                  {/* Footer review action */}
                  <div className="tq-card-footer">
                    <button
                      type="button"
                      className={`tq-mark-btn ${isReviewed ? 'active' : ''}`}
                      onClick={(e) => toggleReviewed(e, q.id)}
                    >
                      {isReviewed ? (
                        <>
                          <CheckCircle size={15} />
                          <span>Marked as Reviewed</span>
                        </>
                      ) : (
                        <>
                          <Circle size={15} />
                          <span>Mark as Reviewed</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* ── QUICK REVISION BLOCK ──────────────────────────────── */}
      {quickRevisionQuestions.length > 0 && (
        <div className="tq-quick-revision-card">
          <div className="tq-quick-rev-header">
            <span className="tq-rev-icon">🎯</span>
            <div>
              <h3 className="tq-quick-rev-title">Quick Revision Challenge</h3>
              <p className="tq-quick-rev-subtitle">Can you answer these key questions in your mind without looking?</p>
            </div>
          </div>

          <div className="tq-quick-rev-list">
            {quickRevisionQuestions.map((qText, rIdx) => (
              <div key={rIdx} className="tq-quick-rev-item">
                <span className="tq-rev-dot">⚡</span>
                <span className="tq-rev-q">{qText}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── BOTTOM NAVIGATION ACTIONS ─────────────────────────── */}
      <div className="tq-bottom-nav">
        <button
          type="button"
          className="tq-nav-btn tq-nav-back"
          onClick={onBackToLesson}
        >
          <ArrowLeft size={16} />
          <span>← Back to Lesson Content</span>
        </button>

        {onNextTopic && (
          <button
            type="button"
            className="tq-nav-btn tq-nav-next"
            onClick={onNextTopic}
          >
            <span>Next Topic</span>
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  )
}
