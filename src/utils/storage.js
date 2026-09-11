// CodeMasti — Centralized Local State & Storage Architecture (Version 1)
// Pure client-side persistence for non-sensitive learner state with migration & cross-tab sync.

export const STORAGE_VERSION = 1
export const STATE_STORAGE_KEY = 'codemasti_state'

// Legacy keys for migration
const LEGACY_KEYS = {
  USER_CM: 'cm_user',
  USER_CODE: 'codemasti_user',
  PROGRESS_CM: 'cm_progress',
  PROGRESS_CODE: 'codemasti_progress',
  PROGRESS_GUEST: 'codemasti_guest_progress',
  STREAK_CM: 'cm_streak',
  STREAK_CODE: 'codemasti_streak',
  BOOKMARKS_CM: 'cm_bookmarks',
  BOOKMARKS_CODE: 'codemasti_bookmarks',
  QUIZ_CM: 'cm_quiz_attempts',
  QUIZ_CODE: 'codemasti_quiz_attempts',
  PROJECT_CM: 'cm_project_submissions',
  PROJECT_CODE: 'codemasti_project_submissions',
  INTERVIEW_MASTERY: 'cm_interview_mastery',
  LAST_LESSON: 'cm_last_lesson',
  VISITED_LESSONS: 'lesson_visited',
  SQL_COMPLETED: 'codemasti_sql_completed',
  FE_COMPLETED: 'codemasti_frontend_completed',
  FE_CHECKLIST: 'codemasti_frontend_checklist',
  BE_COMPLETED: 'codemasti_backend_completed',
  BE_CHECKLIST: 'codemasti_backend_checklist',
  FS_STATE: 'cm_fs_state'
}

export const createDefaultState = () => ({
  version: STORAGE_VERSION,
  profile: {
    id: 'learner_local',
    username: 'Guest Learner',
    email: 'learner@codemasti.com',
    avatar: '👨‍💻',
    role: 'Full Stack Explorer',
    bio: 'Learning full stack and systems engineering on CodeMasti 🚀',
    title: 'Junior Engineer',
    location: 'India',
    website: '',
    github: '',
    linkedin: '',
    twitter: '',
    learningGoal: 'Master Full Stack & Systems Engineering',
    theme: 'light',
    createdAt: new Date().toISOString()
  },
  progress: {
    completedLessons: [],
    completedQuizzes: [],
    completedChallenges: [],
    lastLesson: null,
    lessonVisited: {}
  },
  quizzes: {
    attempts: [],
    mastery: {}
  },
  bookmarks: [],
  notes: {},
  projects: {
    submissions: {},
    sqlCompleted: [],
    frontendCompleted: [],
    frontendChecklist: {},
    backendCompleted: [],
    backendChecklist: {},
    fullstackCompleted: []
  },
  xp: {
    total: 0,
    history: []
  },
  streak: {
    currentStreak: 1,
    longestStreak: 1,
    lastActiveDate: new Date().toISOString().split('T')[0]
  },
  badges: ['welcome_learner'],
  recentActivity: [],
  settings: {}
})

// ── Migration Engine ─────────────────────────────────────────────────────────

function runMigration() {
  const initial = createDefaultState()
  if (typeof window === 'undefined' || !window.localStorage) return initial

  try {
    // 1. User Profile
    const rawUser = localStorage.getItem(LEGACY_KEYS.USER_CODE) || localStorage.getItem(LEGACY_KEYS.USER_CM)
    if (rawUser) {
      try {
        const u = JSON.parse(rawUser)
        initial.profile = { ...initial.profile, ...u }
      } catch {}
    }

    // 2. Progress
    const rawProg = localStorage.getItem(LEGACY_KEYS.PROGRESS_CODE) ||
                    localStorage.getItem(LEGACY_KEYS.PROGRESS_CM) ||
                    localStorage.getItem(LEGACY_KEYS.PROGRESS_GUEST)
    if (rawProg) {
      try {
        const p = JSON.parse(rawProg)
        initial.progress.completedLessons = Array.isArray(p.completedLessons) ? p.completedLessons : []
        initial.progress.completedQuizzes = Array.isArray(p.completedQuizzes) ? p.completedQuizzes : []
        initial.progress.completedChallenges = Array.isArray(p.completedChallenges) ? p.completedChallenges : []
        if (p.xp && typeof p.xp === 'number') initial.xp.total = p.xp
        if (Array.isArray(p.badges)) initial.badges = Array.from(new Set([...initial.badges, ...p.badges]))
      } catch {}
    }

    // 3. Streak
    const rawStreak = localStorage.getItem(LEGACY_KEYS.STREAK_CODE) || localStorage.getItem(LEGACY_KEYS.STREAK_CM)
    if (rawStreak) {
      try {
        const s = JSON.parse(rawStreak)
        initial.streak.currentStreak = s.currentStreak || 1
        initial.streak.longestStreak = s.longestStreak || initial.streak.currentStreak
        initial.streak.lastActiveDate = s.lastActiveDate || initial.streak.lastActiveDate
      } catch {}
    }

    // 4. Bookmarks
    const rawBookmarks = localStorage.getItem(LEGACY_KEYS.BOOKMARKS_CODE) || localStorage.getItem(LEGACY_KEYS.BOOKMARKS_CM)
    if (rawBookmarks) {
      try {
        const b = JSON.parse(rawBookmarks)
        initial.bookmarks = Array.isArray(b) ? b : []
      } catch {}
    }

    // 5. Quiz Attempts
    const rawQuizzes = localStorage.getItem(LEGACY_KEYS.QUIZ_CODE) || localStorage.getItem(LEGACY_KEYS.QUIZ_CM)
    if (rawQuizzes) {
      try {
        const q = JSON.parse(rawQuizzes)
        initial.quizzes.attempts = Array.isArray(q) ? q : []
      } catch {}
    }

    // 6. Interview Mastery
    const rawMastery = localStorage.getItem(LEGACY_KEYS.INTERVIEW_MASTERY)
    if (rawMastery) {
      try {
        const m = JSON.parse(rawMastery)
        initial.quizzes.mastery = typeof m === 'object' && m !== null ? m : {}
      } catch {}
    }

    // 7. Last Lesson & Visited
    const rawLast = localStorage.getItem(LEGACY_KEYS.LAST_LESSON)
    if (rawLast) {
      try { initial.progress.lastLesson = JSON.parse(rawLast) } catch {}
    }
    const rawVisited = localStorage.getItem(LEGACY_KEYS.VISITED_LESSONS)
    if (rawVisited) {
      try { initial.progress.lessonVisited = JSON.parse(rawVisited) || {} } catch {}
    }

    // 8. Labs
    const rawSql = localStorage.getItem(LEGACY_KEYS.SQL_COMPLETED)
    if (rawSql) {
      try { initial.projects.sqlCompleted = JSON.parse(rawSql) || [] } catch {}
    }
    const rawFeDone = localStorage.getItem(LEGACY_KEYS.FE_COMPLETED)
    if (rawFeDone) {
      try { initial.projects.frontendCompleted = JSON.parse(rawFeDone) || [] } catch {}
    }
    const rawFeCheck = localStorage.getItem(LEGACY_KEYS.FE_CHECKLIST)
    if (rawFeCheck) {
      try { initial.projects.frontendChecklist = JSON.parse(rawFeCheck) || {} } catch {}
    }
    const rawBeDone = localStorage.getItem(LEGACY_KEYS.BE_COMPLETED)
    if (rawBeDone) {
      try { initial.projects.backendCompleted = JSON.parse(rawBeDone) || [] } catch {}
    }
    const rawBeCheck = localStorage.getItem(LEGACY_KEYS.BE_CHECKLIST)
    if (rawBeCheck) {
      try { initial.projects.backendChecklist = JSON.parse(rawBeCheck) || {} } catch {}
    }
    const rawProjects = localStorage.getItem(LEGACY_KEYS.PROJECT_CODE) || localStorage.getItem(LEGACY_KEYS.PROJECT_CM)
    if (rawProjects) {
      try { initial.projects.submissions = JSON.parse(rawProjects) || {} } catch {}
    }

    // 9. Lesson Notes scan
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith('lesson_notes_')) {
        const lessonId = key.replace('lesson_notes_', '')
        const val = localStorage.getItem(key)
        if (val) initial.notes[lessonId] = val
      } else if (key && key.startsWith('cm_proj_')) {
        const projId = key.replace('cm_proj_', '')
        try {
          const val = JSON.parse(localStorage.getItem(key))
          if (val) initial.projects.submissions[projId] = val
        } catch {}
      }
    }

    // Save consolidated state
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(initial))
    return initial
  } catch (err) {
    console.warn('[CodeMasti Storage] Migration warning:', err)
    return initial
  }
}

// ── In-Memory Cache & State Access ──────────────────────────────────────────

let memoryState = null

export const getCentralState = () => {
  if (typeof window === 'undefined' || !window.localStorage) {
    return memoryState || createDefaultState()
  }

  if (memoryState) return memoryState

  try {
    const raw = localStorage.getItem(STATE_STORAGE_KEY)
    if (!raw) {
      memoryState = runMigration()
      return memoryState
    }

    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object' || parsed.version !== STORAGE_VERSION) {
      memoryState = runMigration()
      return memoryState
    }

    memoryState = parsed
    return memoryState
  } catch (err) {
    console.error('[CodeMasti Storage] Failed to parse state. Falling back to default recovery state.', err)
    memoryState = createDefaultState()
    return memoryState
  }
}

export const saveCentralState = (nextState) => {
  memoryState = nextState
  if (typeof window === 'undefined' || !window.localStorage) return nextState

  try {
    localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(nextState))
    window.dispatchEvent(new CustomEvent('codemasti_state_change', { detail: nextState }))
  } catch (err) {
    console.error('[CodeMasti Storage] Failed to write state to localStorage:', err)
  }
  return nextState
}

export const updateCentralState = (updater) => {
  const current = getCentralState()
  const nextState = typeof updater === 'function' ? updater(current) : { ...current, ...updater }
  return saveCentralState(nextState)
}

// ── User Profile Operations ──────────────────────────────────────────────────

export const getLocalUser = () => {
  const state = getCentralState()
  return state.profile || createDefaultState().profile
}

export const saveLocalUser = (userData) => {
  const state = getCentralState()
  const updatedProfile = { ...state.profile, ...userData }
  const nextState = { ...state, profile: updatedProfile }
  saveCentralState(nextState)
  return updatedProfile
}

export const clearLocalUser = () => {
  const defaultProfile = createDefaultState().profile
  saveLocalUser(defaultProfile)
}

// ── Progress & XP Operations ─────────────────────────────────────────────────

export const getProgress = () => {
  const state = getCentralState()
  return {
    completedLessons: state.progress?.completedLessons || [],
    completedQuizzes: state.progress?.completedQuizzes || [],
    completedChallenges: state.progress?.completedChallenges || [],
    xp: state.xp?.total || 0,
    badges: state.badges || ['welcome_learner']
  }
}

export const isLessonCompleted = (lessonId) => {
  const state = getCentralState()
  return Boolean(state.progress?.completedLessons?.includes(lessonId))
}

export const markLessonComplete = (lessonId, xp = 25, type = 'lesson') => {
  const state = getCentralState()
  const progress = state.progress || { completedLessons: [], completedQuizzes: [], completedChallenges: [] }
  const listKey = type === 'quiz' ? 'completedQuizzes' : type === 'challenge' ? 'completedChallenges' : 'completedLessons'
  const list = progress[listKey] || []

  let awardedXP = 0
  let isNew = false

  if (!list.includes(lessonId)) {
    const updatedList = [...list, lessonId]
    awardedXP = xp
    isNew = true

    const newTotalXP = (state.xp?.total || 0) + xp
    const xpEntry = {
      amount: xp,
      reason: `${type}_completed`,
      referenceId: lessonId,
      timestamp: Date.now()
    }
    const updatedHistory = [xpEntry, ...(state.xp?.history || [])].slice(0, 100)

    // Badges calculation
    const totalDone = (type === 'lesson' ? updatedList.length : (progress.completedLessons?.length || 0)) +
                      (type === 'quiz' ? updatedList.length : (progress.completedQuizzes?.length || 0))
    const badges = [...(state.badges || [])]
    if (totalDone >= 1 && !badges.includes('first_step')) badges.push('first_step')
    if (totalDone >= 5 && !badges.includes('quick_starter')) badges.push('quick_starter')
    if (totalDone >= 25 && !badges.includes('dedicated_coder')) badges.push('dedicated_coder')
    if (newTotalXP >= 100 && !badges.includes('coder_100')) badges.push('coder_100')
    if (newTotalXP >= 500 && !badges.includes('pro_500')) badges.push('pro_500')
    if (newTotalXP >= 1000 && !badges.includes('master_1000')) badges.push('master_1000')

    const nextState = {
      ...state,
      progress: {
        ...progress,
        [listKey]: updatedList
      },
      xp: {
        total: newTotalXP,
        history: updatedHistory
      },
      badges
    }
    saveCentralState(nextState)
  }

  // Update streak on learning action
  updateStreak()

  const finalProgress = getProgress()
  return { progress: finalProgress, isNew, awardedXP }
}

// ── Streak Operations ─────────────────────────────────────────────────────────

export const getStreak = () => {
  const state = getCentralState()
  return state.streak || { currentStreak: 1, longestStreak: 1, lastActiveDate: new Date().toISOString().split('T')[0] }
}

export const updateStreak = () => {
  const state = getCentralState()
  const streakData = state.streak || { currentStreak: 1, longestStreak: 1, lastActiveDate: null }
  const today = new Date().toISOString().split('T')[0]

  if (streakData.lastActiveDate === today) {
    return streakData
  }

  let nextStreak = streakData.currentStreak || 1
  if (streakData.lastActiveDate) {
    const last = new Date(streakData.lastActiveDate)
    const current = new Date(today)
    const diffDays = Math.round((current - last) / (1000 * 60 * 60 * 24))

    if (diffDays === 1) {
      nextStreak += 1
    } else if (diffDays > 1) {
      nextStreak = 1
    }
  }

  const longest = Math.max(streakData.longestStreak || 1, nextStreak)
  const updatedStreak = {
    currentStreak: nextStreak,
    longestStreak: longest,
    lastActiveDate: today
  }

  const nextState = { ...state, streak: updatedStreak }
  saveCentralState(nextState)
  return updatedStreak
}

// ── Bookmark Operations ──────────────────────────────────────────────────────

export const getBookmarks = () => {
  const state = getCentralState()
  return state.bookmarks || []
}

export const isBookmarked = (lessonId) => {
  const state = getCentralState()
  return (state.bookmarks || []).includes(lessonId)
}

export const toggleBookmark = (lessonId) => {
  const state = getCentralState()
  const current = state.bookmarks || []
  const updated = current.includes(lessonId)
    ? current.filter(id => id !== lessonId)
    : [...current, lessonId]

  const nextState = { ...state, bookmarks: updated }
  saveCentralState(nextState)
  return updated
}

export const addBookmark = (lessonId) => {
  const state = getCentralState()
  const current = state.bookmarks || []
  if (!current.includes(lessonId)) {
    const nextState = { ...state, bookmarks: [...current, lessonId] }
    saveCentralState(nextState)
  }
}

export const removeBookmark = (lessonId) => {
  const state = getCentralState()
  const current = state.bookmarks || []
  if (current.includes(lessonId)) {
    const nextState = { ...state, bookmarks: current.filter(id => id !== lessonId) }
    saveCentralState(nextState)
  }
}

// ── Notes Operations ─────────────────────────────────────────────────────────

export const getLessonNote = (lessonId) => {
  const state = getCentralState()
  return state.notes?.[lessonId] || ''
}

export const saveLessonNote = (lessonId, noteText) => {
  const state = getCentralState()
  const notes = { ...(state.notes || {}), [lessonId]: noteText }
  const nextState = { ...state, notes }
  saveCentralState(nextState)
  return noteText
}

export const deleteLessonNote = (lessonId) => {
  const state = getCentralState()
  const notes = { ...(state.notes || {}) }
  delete notes[lessonId]
  const nextState = { ...state, notes }
  saveCentralState(nextState)
}

// ── Quiz & Interview Mastery Operations ───────────────────────────────────────

export const getQuizAttempts = () => {
  const state = getCentralState()
  return state.quizzes?.attempts || []
}

export const saveQuizAttempt = (attempt) => {
  const state = getCentralState()
  const attempts = [attempt, ...(state.quizzes?.attempts || [])].slice(0, 100)
  const nextState = {
    ...state,
    quizzes: {
      ...(state.quizzes || {}),
      attempts
    }
  }
  saveCentralState(nextState)
  return attempts
}

export const getInterviewMastery = () => {
  const state = getCentralState()
  return state.quizzes?.mastery || {}
}

export const isInterviewMastered = (qKey) => {
  const state = getCentralState()
  return Boolean(state.quizzes?.mastery?.[qKey])
}

export const toggleInterviewMastery = (qKey) => {
  const state = getCentralState()
  const mastery = { ...(state.quizzes?.mastery || {}) }
  mastery[qKey] = !mastery[qKey]

  const nextState = {
    ...state,
    quizzes: {
      ...(state.quizzes || {}),
      mastery
    }
  }
  saveCentralState(nextState)
  return mastery
}

// ── Projects & Labs Operations ───────────────────────────────────────────────

export const getProjectSubmissions = () => {
  const state = getCentralState()
  return state.projects?.submissions || {}
}

export const saveProjectSubmission = (projectId, data) => {
  const state = getCentralState()
  const submissions = {
    ...(state.projects?.submissions || {}),
    [projectId]: {
      ...data,
      updatedAt: new Date().toISOString()
    }
  }
  const nextState = {
    ...state,
    projects: {
      ...(state.projects || {}),
      submissions
    }
  }
  saveCentralState(nextState)
  return submissions[projectId]
}

export const getLabProgress = (labKey) => {
  const state = getCentralState()
  return state.projects?.[labKey] || (labKey.includes('Checklist') ? {} : [])
}

export const saveLabProgress = (labKey, data) => {
  const state = getCentralState()
  const projects = {
    ...(state.projects || {}),
    [labKey]: data
  }
  const nextState = { ...state, projects }
  saveCentralState(nextState)
  return data
}

// ── Last Lesson & Visits ─────────────────────────────────────────────────────

export const recordLastLesson = (courseId, lessonId) => {
  const state = getCentralState()
  const lastLesson = { courseId, lessonId, timestamp: Date.now() }
  const nextState = {
    ...state,
    progress: {
      ...(state.progress || {}),
      lastLesson
    }
  }
  saveCentralState(nextState)
}

export const getLastLesson = () => {
  const state = getCentralState()
  return state.progress?.lastLesson || null
}

export const recordLessonVisit = (lessonId) => {
  const state = getCentralState()
  const lessonVisited = { ...(state.progress?.lessonVisited || {}), [lessonId]: Date.now() }
  const nextState = {
    ...state,
    progress: {
      ...(state.progress || {}),
      lessonVisited
    }
  }
  saveCentralState(nextState)
}

export const getLessonVisited = () => {
  const state = getCentralState()
  return state.progress?.lessonVisited || {}
}

// ── Comprehensive Analytics Helper ───────────────────────────────────────────

export const getLocalAnalytics = (allCourses = []) => {
  const state = getCentralState()
  const progress = state.progress || {}
  const streak = state.streak || {}
  const bookmarks = state.bookmarks || []
  const quizAttempts = state.quizzes?.attempts || []
  const projectSubmissions = state.projects?.submissions || {}

  const completedLessonsCount = progress.completedLessons?.length || 0
  const completedQuizzesCount = progress.completedQuizzes?.length || 0
  const completedChallengesCount = progress.completedChallenges?.length || 0
  const totalXP = state.xp?.total || 0

  let coursesStarted = 0
  let coursesCompleted = 0

  if (allCourses && allCourses.length > 0) {
    allCourses.forEach(c => {
      let totalInCourse = 0
      let doneInCourse = 0
      c.chapters?.forEach(ch => {
        ch.lessons?.forEach(l => {
          totalInCourse++
          if (progress.completedLessons?.includes(l.id)) doneInCourse++
        })
      })
      if (doneInCourse > 0) coursesStarted++
      if (totalInCourse > 0 && doneInCourse === totalInCourse) coursesCompleted++
    })
  }

  const passedQuizzes = quizAttempts.filter(q => q.correct).length
  const quizAccuracy = quizAttempts.length > 0 ? Math.round((passedQuizzes / quizAttempts.length) * 100) : 100

  return {
    totalXP,
    completedLessonsCount,
    completedQuizzesCount,
    completedChallengesCount,
    currentStreak: streak.currentStreak || 1,
    longestStreak: streak.longestStreak || 1,
    bookmarksCount: bookmarks.length,
    projectsCount: Object.keys(projectSubmissions).length,
    coursesStarted,
    coursesCompleted,
    quizAccuracy,
    badges: state.badges || ['welcome_learner']
  }
}

// ── Reset Learning State ──────────────────────────────────────────────────────

export const resetAllLearnerProgress = () => {
  const fresh = createDefaultState()
  memoryState = fresh
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(fresh))
      window.dispatchEvent(new CustomEvent('codemasti_state_change', { detail: fresh }))
    } catch {}
  }
  return fresh
}
