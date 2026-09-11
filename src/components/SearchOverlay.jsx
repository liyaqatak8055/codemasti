import React, { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight, Compass, Code2, Database } from 'lucide-react'
import Fuse from 'fuse.js'
import { COURSES_DATA, COURSE_CATEGORIES } from '../coursesData'

const LAB_ITEMS = [
  { type: 'lab', id: 'sql-lab', title: 'SQL Interview Engineering Lab', subtitle: 'Interactive SQL Query Simulator & Pattern Bank', icon: '🗄️', color: '#00758f', path: '/sql-interview-lab' },
  { type: 'lab', id: 'frontend-lab', title: 'Frontend Engineering Lab', subtitle: '12-Level HTML, CSS, JS, React Lab', icon: '🖥️', color: '#8b5cf6', path: '/frontend-projects-lab' },
  { type: 'lab', id: 'backend-lab', title: 'Backend Engineering Lab', subtitle: 'APIs, Auth, Database Design & Microservices', icon: '⚙️', color: '#3b82f6', path: '/backend-projects-lab' },
  { type: 'lab', id: 'fullstack-lab', title: 'Full Stack Engineering Lab', subtitle: '14-Stage Production MERN & Next.js Builds', icon: '🚀', color: 'var(--green)', path: '/fullstack-projects' }
]

function buildSearchIndex() {
  const index = []

  // Add Labs
  LAB_ITEMS.forEach(lab => {
    index.push({
      type: 'lab',
      id: lab.id,
      title: lab.title,
      subtitle: lab.subtitle,
      searchText: `${lab.title} ${lab.subtitle} lab project interactive workbench`,
      icon: lab.icon,
      color: lab.color,
      path: lab.path
    })
  })

  // Add Courses & Lessons
  COURSES_DATA.forEach(course => {
    const cat = COURSE_CATEGORIES.find(c => c.id === course.category)
    index.push({
      type: 'course',
      id: course.id,
      title: course.title,
      subtitle: cat?.label || 'Course Track',
      searchText: `${course.title} ${course.description || ''} ${cat?.label || ''} ${course.category || ''}`,
      icon: course.icon || '📘',
      color: cat?.color || course.color || '#2f8d46',
      course,
      lesson: null
    })

    course.chapters?.forEach(chapter => {
      const chapterTitle = chapter.title || chapter.chapterTitle || ''
      chapter.lessons?.forEach(lesson => {
        index.push({
          type: 'lesson',
          id: lesson.id,
          title: lesson.title,
          subtitle: `${course.title} › ${chapterTitle}`,
          searchText: `${lesson.title} ${course.title} ${chapterTitle} ${course.category || ''}`,
          icon: lesson.emoji || course.icon || '📘',
          color: cat?.color || course.color || '#2f8d46',
          course,
          lesson
        })
      })
    })
  })

  return index
}

let cachedFuse = null
function getSearchEngine() {
  if (!cachedFuse) {
    const searchIndex = buildSearchIndex()
    cachedFuse = new Fuse(searchIndex, {
      includeScore: true,
      threshold: 0.34,
      ignoreLocation: true,
      minMatchCharLength: 2,
      keys: [
        { name: 'title', weight: 0.45 },
        { name: 'subtitle', weight: 0.25 },
        { name: 'searchText', weight: 0.3 }
      ]
    })
  }
  return cachedFuse
}

const HOT_TAGS = ['HTML Table', 'Flexbox', 'JavaScript', 'React Hooks', 'Node.js', 'SQL Queries', 'MongoDB', 'CSS Grid', 'REST API', 'Git', 'DSA']

export default function SearchOverlay({ onClose, onNavigate }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)

  const searchEngine = useMemo(() => getSearchEngine(), [])

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchEngine.search(query.trim()).slice(0, 14).map(result => ({
      ...result.item,
      score: result.score
    }))
  }, [query, searchEngine])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    inputRef.current?.focus()
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1))
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault()
        handleSelect(results[selectedIndex])
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, results, selectedIndex])

  const handleSelect = (item) => {
    onNavigate(item)
    onClose()
  }

  const handleTagClick = (tag) => {
    setQuery(tag)
  }

  return (
    <AnimatePresence>
      <motion.div
        className="search-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Search courses, lessons, and roadmaps"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      >
        <motion.div
          className="search-box"
          initial={{ scale: 0.92, y: -20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.92, y: -20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          {/* Input Row */}
          <div className="search-box-input">
            <Search size={20} style={{ color: 'var(--text-muted)', flexShrink: 0 }} aria-hidden="true" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search courses, lessons, roadmaps, labs..."
              aria-label="Search courses, lessons, roadmaps, and labs"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search query"
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'grid', placeItems: 'center', padding: 6 }}
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
            <span className="search-kbd" aria-hidden="true">ESC</span>
          </div>

          {/* Results */}
          {query ? (
            <div className="search-results" role="listbox" aria-label="Search results">
              {results.length === 0 ? (
                <div className="search-empty">
                  <span style={{ fontSize: 32 }}>🔍</span>
                  <p style={{ marginTop: 8, fontWeight: 700 }}>No results for "{query}"</p>
                  <p style={{ fontSize: 12, marginTop: 4 }}>Try: HTML, CSS, JavaScript, SQL, React...</p>
                </div>
              ) : (
                results.map((item, i) => (
                  <button
                    type="button"
                    role="option"
                    aria-selected={selectedIndex === i}
                    key={item.id + i}
                    className={`search-result-item ${selectedIndex === i ? 'active' : ''}`}
                    onClick={() => handleSelect(item)}
                    style={{
                      background: selectedIndex === i ? 'var(--green)15' : undefined,
                      cursor: 'pointer',
                      width: '100%',
                      textAlign: 'left',
                      border: 'none',
                      font: 'inherit'
                    }}
                  >
                    <div
                      className="result-icon"
                      style={{ background: (item.color || '#2f8d46') + '20' }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div className="result-text" style={{ flex: 1 }}>
                      <strong>{item.title}</strong>
                      <span>{item.subtitle}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{
                        fontSize: 10,
                        fontWeight: 700,
                        padding: '2px 7px',
                        borderRadius: 20,
                        background: (item.color || '#2f8d46') + '20',
                        color: item.color || '#2f8d46'
                      }}>
                        {item.type === 'course' ? 'Course' : item.type === 'lab' ? 'Lab' : 'Lesson'}
                      </span>
                      <ArrowRight size={14} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
                    </div>
                  </button>
                ))
              )}
            </div>
          ) : (
            <>
              <div style={{ padding: '12px 14px 6px' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  🔥 Popular Topics
                </p>
              </div>
              <div className="search-hot-tags">
                {HOT_TAGS.map(tag => (
                  <button
                    key={tag}
                    className="search-tag-btn"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div style={{ padding: '0 14px 16px' }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
                  📚 All Courses
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {COURSES_DATA.slice(0, 8).map(c => {
                    const cat = COURSE_CATEGORIES.find(cat => cat.id === c.category)
                    return (
                      <button
                        key={c.id}
                        className="search-tag-btn"
                        style={{ borderColor: (cat?.color || '#2f8d46') + '66', color: cat?.color }}
                        onClick={() => handleSelect({ type: 'course', id: c.id, title: c.title, icon: c.icon, color: cat?.color || '#2f8d46', course: c, lesson: null })}
                      >
                        {c.icon} {c.title}
                      </button>
                    )
                  })}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
