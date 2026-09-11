import React, { useEffect, useState, useMemo } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { loadCourse } from '../courseLoader'
import { COURSE_CATALOG } from '../courseCatalog'
import { COURSE_ALIASES } from '../courseLoader'
import { slugify, getLessonSlug, getCourseSlug, getQuestionsSeoTitle } from '../utils/seo'
import QuestionAnswers from '../components/QuestionAnswers'

export default function TopicQuestionsPage({
  user,
  spacedRevisions,
  bookmarkedLessons,
  setBookmarkedLessons,
  onCompleteLesson,
  onShowToast
}) {
  const { courseId, topicId, lessonId, courseSlug, lessonSlug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const rawCourse = courseId || courseSlug
  const rawTopic = topicId || lessonId || lessonSlug

  // Resolve course metadata from catalog or aliases
  const resolvedCourseId = COURSE_ALIASES[rawCourse] || rawCourse
  const courseMeta = useMemo(() => {
    return COURSE_CATALOG.find(
      (c) => c.id === resolvedCourseId || slugify(c.id) === rawCourse || slugify(c.title) === rawCourse
    )
  }, [resolvedCourseId, rawCourse])

  const [courseData, setCourseData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!courseMeta) {
      setLoading(false)
      return
    }

    let isMounted = true
    setLoading(true)
    setError(null)

    loadCourse(courseMeta.id)
      .then((fullCourse) => {
        if (isMounted) {
          setCourseData(fullCourse)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err?.message || 'Failed to load course.')
          setLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [courseMeta?.id])

  // Extract all lessons from chapters
  const allLessons = useMemo(() => {
    return courseData?.chapters?.flatMap((ch) => ch.lessons || []) || []
  }, [courseData])

  // Find active lesson
  const currentLesson = useMemo(() => {
    if (!courseData || !allLessons.length) return null
    if (rawTopic) {
      const found = allLessons.find(
        (l) =>
          l.id === rawTopic ||
          slugify(l.id) === rawTopic ||
          slugify(l.title) === rawTopic ||
          getLessonSlug(courseData, l) === rawTopic
      )
      if (found) return found
    }
    return allLessons[0] || null
  }, [courseData, allLessons, rawTopic])

  // Find current index & next lesson
  const currentIndex = allLessons.findIndex((l) => l.id === currentLesson?.id)
  const nextLesson = currentIndex >= 0 && currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null

  // Dynamic SEO Title
  useEffect(() => {
    if (courseData && currentLesson) {
      document.title = getQuestionsSeoTitle(courseData, currentLesson)
    }
  }, [courseData, currentLesson])

  const handleBackToLesson = () => {
    if (courseData && currentLesson) {
      navigate(`/courses/${courseData.id || getCourseSlug(courseData)}/${currentLesson.id || getLessonSlug(courseData, currentLesson)}`)
    } else {
      navigate(-1)
    }
  }

  const handleNextTopic = () => {
    if (courseData && nextLesson) {
      navigate(`/questions/${courseData.id || getCourseSlug(courseData)}/${nextLesson.id || getLessonSlug(courseData, nextLesson)}`)
    }
  }

  if (loading) {
    return (
      <div className="course-loading-screen" style={{ minHeight: '75vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 32 }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', border: '4px solid var(--border)', borderTopColor: 'var(--green)', animation: 'spin 0.8s linear infinite' }} />
        <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--text-primary)' }}>
          Loading Questions & Answers...
        </div>
      </div>
    )
  }

  if (error || !courseMeta || !currentLesson) {
    return (
      <div className="course-error-screen" style={{ minHeight: '65vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, textAlign: 'center', padding: 28 }}>
        <div style={{ fontSize: 42 }}>⚠️</div>
        <h2 style={{ fontSize: 22, fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>Topic Questions Not Found</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, maxWidth: 440, margin: 0 }}>
          {error || 'Unable to locate questions for this specific topic.'}
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <button onClick={() => navigate('/courses')} className="primary-btn">
            Browse All Courses
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="topic-questions-page-wrapper">
      <QuestionAnswers
        lesson={currentLesson}
        topic={currentLesson}
        course={courseData || courseMeta}
        onBackToLesson={handleBackToLesson}
        onNextTopic={nextLesson ? handleNextTopic : null}
      />
    </div>
  )
}
