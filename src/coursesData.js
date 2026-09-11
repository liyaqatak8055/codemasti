// CodeMasti lightweight course data registry.
// Full course contents are lazy-loaded on-demand via src/courseLoader.js

export { COURSE_CATALOG, COURSE_CATEGORIES } from './courseCatalog.js'
export {
  loadCourse,
  preloadCourse,
  getCachedCourse,
  isCourseLoaded,
  getCourseMeta,
  resolveCourseId,
  COURSE_ALIASES
} from './courseLoader.js'

import { COURSE_CATALOG } from './courseCatalog.js'

// Export COURSE_CATALOG as COURSES_DATA for metadata consumers
export const COURSES_DATA = COURSE_CATALOG
