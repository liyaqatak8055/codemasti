import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  FileCode,
  Layers,
  Search,
  Server,
  Sparkles
} from 'lucide-react'
import { COURSES_DATA, COURSE_CATEGORIES } from '../coursesData'
import { updatePageSeo, getCourseUrl } from '../utils/seo'

const CATEGORY_ICON_MAP = {
  frontend: Code2,
  backend: Server,
  programming: FileCode,
  interview: BarChart3,
  projects: Layers
}

import { preloadCourse } from '../coursesData'

// ── Explore Tile ────────────────────────────────────────────────
function ExploreTile({ course, cat, progress, onStart }) {
  const chapters = course.chapters?.slice(0, 3) || []
  const CategoryIcon = CATEGORY_ICON_MAP[course.category] || Database
  const lessonCount = course.lessonCount || course.chapters?.reduce((total, chapter) => total + (chapter.lessons?.length || 0), 0) || course.topicsCount || 0
  const courseUrl = getCourseUrl(course)

  return (
    <article className="all-course-card" onMouseEnter={() => preloadCourse(course.id)}>
      <Link to={courseUrl} className="all-course-main" onClick={onStart} style={{ textDecoration: 'none', color: 'inherit', display: 'block', textAlign: 'left', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
        <span className="all-course-icon">
          <CategoryIcon size={28} />
        </span>
        <span className="all-course-category">{cat.label}</span>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </Link>

      <div className="all-course-meta">
        <span><BookOpen size={16} /> {lessonCount}+ Lessons</span>
        <span><BarChart3 size={16} /> {course.level}</span>
      </div>

      <div className="all-course-chapters">
        {chapters.map((chapter, index) => {
          const title = chapter.title || chapter.chapterTitle || `Chapter ${index + 1}`
          return (
            <Link key={title || index} to={courseUrl} onClick={onStart} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              <CheckCircle2 size={14} />
              <span>{title}</span>
            </Link>
          )
        })}
      </div>

      <div className="all-course-footer">
        <div className="all-course-progress">
          <span>{progress > 0 ? `${progress}% complete` : 'Start learning'}</span>
          <b><i style={{ width: `${progress}%` }} /></b>
        </div>
        <Link to={courseUrl} className="all-course-cta" onClick={onStart} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          View Course <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  )
}

export default function CoursesPage({ user, onStartCourse, getCourseProgress }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCourses = useMemo(() => {
    let list = COURSES_DATA
    if (selectedCategory !== 'all') list = list.filter(c => c.category === selectedCategory)
    if (searchQuery) list = list.filter(c =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return list
  }, [selectedCategory, searchQuery])

  useEffect(() => {
    const catLabel = selectedCategory === 'all'
      ? 'All Courses'
      : (COURSE_CATEGORIES.find(c => c.id === selectedCategory)?.label || 'Courses')
    updatePageSeo({
      title: `${catLabel} – Master Programming in Hinglish | CodeMasti`,
      description: 'Explore comprehensive programming tutorials, full stack tracks, SQL, backend, and interview prep in Hinglish with visual diagrams and code compilers.',
      path: '/courses',
      breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Courses', url: '/courses' }
      ]
    })
  }, [selectedCategory])

  return (
    <div className="dashboard-view all-courses-page">
      {/* ── HEADER ── */}
      <section className="all-courses-header">
        <div>
          <span className="all-courses-eyebrow"><Sparkles size={15} /> All Courses</span>
          <h1>Explore. Learn. <span>Grow.</span></h1>
          <p>Select a course, open chapters, and start your learning journey with CodeMastii.</p>
        </div>
        <div className="courses-search-bar">
          <Search size={16} />
          <input
            type="search"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <div className="all-category-filter-bar">
        <button
          className={`all-cat-filter-btn${selectedCategory === 'all' ? ' active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All Courses
        </button>
        {COURSE_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`all-cat-filter-btn${selectedCategory === cat.id ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* ── W3 STYLE COURSE INDEX ── */}
      <section className="all-course-index">
        <div className="all-course-index-head">
          <div>
            <h2>{selectedCategory === 'all' ? 'All Tutorials' : COURSE_CATEGORIES.find(c => c.id === selectedCategory)?.label}</h2>
            <p>{filteredCourses.length} courses available</p>
          </div>
        </div>
        <div className="all-course-grid">
          {filteredCourses.map(course => {
            const cat = COURSE_CATEGORIES.find(c => c.id === course.category) || COURSE_CATEGORIES[0]
            return (
              <ExploreTile
                key={course.id}
                course={course}
                cat={cat}
                progress={getCourseProgress(course.id)}
                onStart={() => onStartCourse(course)}
              />
            )
          })}
        </div>
        {filteredCourses.length === 0 && (
          <div className="all-course-empty">
            <Search size={28} />
            <strong>No courses found</strong>
            <p>Try another keyword or select a different category.</p>
          </div>
        )}
      </section>
    </div>
  )
}
