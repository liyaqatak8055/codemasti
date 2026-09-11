// ══════════════════════════════════════════════════════════════════════════════
// COMPLETE ALL-COURSE INTERVIEW QUESTIONS DATA (20 QUESTIONS PER COURSE)
// ══════════════════════════════════════════════════════════════════════════════

import { ALL_COURSE_INTERVIEW_TRACKS_DATA } from './courseQuestionsData'
import { BACKEND_COURSE_INTERVIEWS } from './backendQuestionsData'
import { PROGRAMMING_AND_SYSTEM_INTERVIEWS } from './programmingQuestionsData'
import { MORE_COURSE_INTERVIEWS } from './moreCoursesData'

export const ALL_COURSE_INTERVIEWS = [
  ...ALL_COURSE_INTERVIEW_TRACKS_DATA,
  ...MORE_COURSE_INTERVIEWS,
  ...BACKEND_COURSE_INTERVIEWS,
  ...PROGRAMMING_AND_SYSTEM_INTERVIEWS
]
