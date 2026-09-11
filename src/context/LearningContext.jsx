import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {
  getCentralState,
  saveCentralState,
  getLocalUser,
  saveLocalUser,
  getProgress,
  markLessonComplete,
  getStreak,
  updateStreak,
  getBookmarks,
  toggleBookmark,
  isBookmarked,
  getLessonNote,
  saveLessonNote,
  deleteLessonNote,
  getQuizAttempts,
  saveQuizAttempt,
  getInterviewMastery,
  toggleInterviewMastery,
  getProjectSubmissions,
  saveProjectSubmission,
  getLabProgress,
  saveLabProgress,
  recordLastLesson,
  getLastLesson,
  recordLessonVisit,
  getLessonVisited,
  getLocalAnalytics,
  resetAllLearnerProgress
} from '../utils/storage'
import { COURSE_CATALOG } from '../courseCatalog'

const LearningContext = createContext(null)

export function LearningProvider({ children }) {
  const [state, setState] = useState(() => getCentralState())

  const syncState = useCallback(() => {
    setState(getCentralState())
  }, [])

  useEffect(() => {
    // Cross-tab synchronization
    const handleStorageChange = (e) => {
      if (e.key === 'codemasti_state') {
        syncState()
      }
    }

    // Same-tab synchronization across decoupled components
    const handleLocalStateChange = (e) => {
      if (e.detail) {
        setState(e.detail)
      } else {
        syncState()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('codemasti_state_change', handleLocalStateChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('codemasti_state_change', handleLocalStateChange)
    }
  }, [syncState])

  const handleUpdateProfile = useCallback((updates) => {
    const updated = saveLocalUser(updates)
    syncState()
    return updated
  }, [syncState])

  const handleCompleteLesson = useCallback((lessonId, xp = 25, type = 'lesson') => {
    const result = markLessonComplete(lessonId, xp, type)
    syncState()
    return result
  }, [syncState])

  const handleToggleBookmark = useCallback((lessonId) => {
    const updated = toggleBookmark(lessonId)
    syncState()
    return updated
  }, [syncState])

  const handleSaveNote = useCallback((lessonId, noteText) => {
    const saved = saveLessonNote(lessonId, noteText)
    syncState()
    return saved
  }, [syncState])

  const handleRecordQuizAttempt = useCallback((attempt) => {
    const attempts = saveQuizAttempt(attempt)
    syncState()
    return attempts
  }, [syncState])

  const handleToggleMastery = useCallback((qKey) => {
    const mastery = toggleInterviewMastery(qKey)
    syncState()
    return mastery
  }, [syncState])

  const handleSaveProject = useCallback((projectId, data) => {
    const saved = saveProjectSubmission(projectId, data)
    syncState()
    return saved
  }, [syncState])

  const handleSaveLab = useCallback((labKey, data) => {
    const saved = saveLabProgress(labKey, data)
    syncState()
    return saved
  }, [syncState])

  const handleResetProgress = useCallback(() => {
    const fresh = resetAllLearnerProgress()
    setState(fresh)
    return fresh
  }, [])

  const analytics = getLocalAnalytics(COURSE_CATALOG)

  const value = {
    state,
    user: state.profile || {},
    progress: state.progress || { completedLessons: [], completedQuizzes: [], completedChallenges: [] },
    streak: state.streak || { currentStreak: 1, longestStreak: 1 },
    bookmarks: state.bookmarks || [],
    notes: state.notes || {},
    quizzes: state.quizzes?.attempts || [],
    interviewMastery: state.quizzes?.mastery || {},
    projects: state.projects?.submissions || {},
    badges: state.badges || [],
    analytics,
    // Actions
    updateProfile: handleUpdateProfile,
    completeLesson: handleCompleteLesson,
    isLessonCompleted: (id) => Boolean(state.progress?.completedLessons?.includes(id)),
    toggleBookmark: handleToggleBookmark,
    isBookmarked: (id) => Boolean(state.bookmarks?.includes(id)),
    saveNote: handleSaveNote,
    getNote: (id) => state.notes?.[id] || '',
    recordQuizAttempt: handleRecordQuizAttempt,
    toggleMastery: handleToggleMastery,
    isMastered: (qKey) => Boolean(state.quizzes?.mastery?.[qKey]),
    saveProject: handleSaveProject,
    getLabProgress,
    saveLabProgress: handleSaveLab,
    recordLastLesson,
    getLastLesson,
    recordLessonVisit,
    getLessonVisited,
    resetProgress: handleResetProgress
  }

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  )
}

export function useLearning() {
  const context = useContext(LearningContext)
  if (!context) {
    // Fallback to direct storage methods if rendered outside provider
    const state = getCentralState()
    return {
      state,
      user: state.profile || {},
      progress: state.progress || {},
      streak: state.streak || {},
      bookmarks: state.bookmarks || [],
      notes: state.notes || {},
      updateProfile: saveLocalUser,
      completeLesson: markLessonComplete,
      toggleBookmark,
      isBookmarked,
      saveNote: saveLessonNote,
      getNote: getLessonNote,
      recordQuizAttempt: saveQuizAttempt,
      toggleMastery: toggleInterviewMastery,
      saveProject: saveProjectSubmission,
      resetProgress: resetAllLearnerProgress
    }
  }
  return context
}
