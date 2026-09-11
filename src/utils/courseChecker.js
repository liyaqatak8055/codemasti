/**
 * CodeMasti Course Quality Checker
 * Audits curriculum datasets for completeness, pedagogical quality, and interactive readiness.
 */
import { COURSES_DATA } from '../coursesData'

export function auditCourse(course) {
  const issues = []
  const metrics = {
    totalChapters: course.chapters?.length || 0,
    totalLessons: 0,
    lessonsWithHinglish: 0,
    lessonsWithEnglish: 0,
    lessonsWithCode: 0,
    lessonsWithQuiz: 0,
    lessonsWithVisuals: 0
  }

  if (!course.id) issues.push({ severity: 'error', message: 'Missing course ID' })
  if (!course.title) issues.push({ severity: 'error', message: 'Missing course title' })
  if (!course.category) issues.push({ severity: 'warning', message: 'Missing category classification' })
  if (!course.chapters || course.chapters.length === 0) {
    issues.push({ severity: 'error', message: 'Course contains no chapters' })
    return { score: 0, metrics, issues, isHealthy: false }
  }

  course.chapters.forEach((chapter, chIdx) => {
    if (!chapter.chapterTitle) {
      issues.push({ severity: 'warning', message: `Chapter ${chIdx + 1} has no title` })
    }
    if (!chapter.lessons || chapter.lessons.length === 0) {
      issues.push({ severity: 'error', message: `Chapter "${chapter.chapterTitle || chIdx + 1}" has no lessons` })
    } else {
      chapter.lessons.forEach(lesson => {
        metrics.totalLessons++
        if (lesson.hinglishExplain) metrics.lessonsWithHinglish++
        if (lesson.englishDef) metrics.lessonsWithEnglish++
        if (lesson.code) metrics.lessonsWithCode++
        if (lesson.quiz && (Array.isArray(lesson.quiz) ? lesson.quiz.length > 0 : lesson.quiz.question)) {
          metrics.lessonsWithQuiz++
        }
        if (lesson.visualDiagram || lesson.visualType || lesson.diagram) {
          metrics.lessonsWithVisuals++
        }

        if (!lesson.title) {
          issues.push({ severity: 'error', message: `Unnamed lesson in chapter "${chapter.chapterTitle}"` })
        }
        if (!lesson.hinglishExplain && !lesson.englishDef) {
          issues.push({ severity: 'warning', message: `Lesson "${lesson.title}" missing explanation text` })
        }
      })
    }
  })

  // Calculate health score (0 - 100)
  if (metrics.totalLessons === 0) return { score: 0, metrics, issues, isHealthy: false }

  const hinglishRatio = metrics.lessonsWithHinglish / metrics.totalLessons
  const englishRatio = metrics.lessonsWithEnglish / metrics.totalLessons
  const codeRatio = metrics.lessonsWithCode / metrics.totalLessons
  const quizRatio = metrics.lessonsWithQuiz / metrics.totalLessons

  const score = Math.round(
    hinglishRatio * 35 +
    englishRatio * 25 +
    codeRatio * 25 +
    quizRatio * 15
  )

  return {
    courseId: course.id,
    courseTitle: course.title,
    score,
    metrics,
    issues,
    isHealthy: score >= 70 && issues.filter(i => i.severity === 'error').length === 0
  }
}

export function auditAllCourses(courses = COURSES_DATA) {
  const reports = courses.map(c => auditCourse(c))
  const averageScore = Math.round(reports.reduce((sum, r) => sum + r.score, 0) / (reports.length || 1))
  const totalLessons = reports.reduce((sum, r) => sum + r.metrics.totalLessons, 0)
  const totalQuizzes = reports.reduce((sum, r) => sum + r.metrics.lessonsWithQuiz, 0)
  const healthyCourses = reports.filter(r => r.isHealthy).length

  return {
    totalCourses: courses.length,
    totalLessons,
    totalQuizzes,
    averageScore,
    healthyCourses,
    reports
  }
}
