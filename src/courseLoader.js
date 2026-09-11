import { mergeJsonLessonContent } from './utils/contentEngine.js'
import { COURSE_CATALOG } from './courseCatalog.js'

export const COURSE_ALIASES = {
  sql: 'mysql',
  'system-design': 'systemdesign',
  webfundamentals: 'web-development',
  'web-fundamentals': 'web-development',
  webdev: 'web-development',
  webdevelopment: 'web-development',
  'web-dev': 'web-development',
  docker: 'devops',
  github: 'git',
  ts: 'typescript',
  js: 'javascript',
  tailwindcss: 'tailwind'
}

const COURSE_LOADERS = {
  'web-development': () => import('./courseData/frontend/webdevelopment.js'),
  'web-fundamentals': () => import('./courseData/frontend/webdevelopment.js'),
  html: () => import('./courseData/frontend/html.js'),
  css: () => import('./courseData/frontend/css.js'),
  tailwind: () => import('./courseData/frontend/tailwind.js'),
  javascript: () => import('./courseData/frontend/javascript.js'),
  git: () => import('./courseData/frontend/git.js'),
  typescript: () => import('./courseData/frontend/typescript.js'),
  react: () => import('./courseData/frontend/react.js'),
  angular: () => import('./courseData/frontend/angular.js'),
  nextjs: () => import('./courseData/frontend/nextjs.js'),
  performance: () => import('./courseData/frontend/performance.js'),
  nodejs: () => import('./courseData/backend/nodejs.js'),
  expressjs: () => import('./courseData/backend/expressjs.js'),
  mongodb: () => import('./courseData/database/mongodb.js'),
  mysql: () => import('./courseData/database/mysql.js'),
  postgresql: () => import('./courseData/database/postgresql.js'),
  restapi: () => import('./courseData/backend/restapi.js'),
  auth: () => import('./courseData/backend/auth.js'),
  testing: () => import('./courseData/backend/testing.js'),
  devops: () => import('./courseData/backend/devops.js'),
  python: () => import('./courseData/programming/python.js'),
  java: () => import('./courseData/programming/java.js'),
  c: () => import('./courseData/programming/c.js'),
  cpp: () => import('./courseData/programming/cpp.js'),
  dsa: () => import('./courseData/interview/dsa.js'),
  systemdesign: () => import('./courseData/interview/systemdesign.js'),
  sqlinterview: () => import('./courseData/interview/sqlinterview.js'),
  hrinterview: () => import('./courseData/interview/hrinterview.js'),
  'frontend-projects': () => import('./courseData/projects/frontend-projects.js'),
  'backend-projects': () => import('./courseData/projects/backend-projects.js'),
  'fullstack-projects': () => import('./courseData/projects/fullstack-projects.js')
}

const courseCache = new Map()

export const resolveCourseId = (idOrSlug = '') => {
  if (!idOrSlug) return null
  const cleaned = idOrSlug.toString().toLowerCase().trim()
  return COURSE_ALIASES[cleaned] || cleaned
}

export const isCourseLoaded = (idOrSlug) => {
  const id = resolveCourseId(idOrSlug)
  return id ? courseCache.has(id) : false
}

export const getCachedCourse = (idOrSlug) => {
  const id = resolveCourseId(idOrSlug)
  return id ? courseCache.get(id) || null : null
}

export const loadCourse = async (idOrSlug, retries = 2) => {
  const id = resolveCourseId(idOrSlug)
  if (!id) throw new Error(`Invalid course identifier: "${idOrSlug}"`)

  if (courseCache.has(id)) {
    return courseCache.get(id)
  }

  const loader = COURSE_LOADERS[id]
  if (!loader) {
    throw new Error(`No loader registered for course "${id}"`)
  }

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const module = await loader()
      const rawCourse = module.default || Object.values(module).find(v => v && typeof v === 'object' && v.chapters) || module
      const processedCourse = mergeJsonLessonContent(rawCourse)

      courseCache.set(id, processedCourse)
      return processedCourse
    } catch (err) {
      if (attempt === retries) {
        console.error(`[CourseLoader] Failed to load course "${id}" after ${retries + 1} attempts:`, err)
        throw err
      }
      await new Promise(r => setTimeout(r, 600 * (attempt + 1)))
    }
  }
}

export const preloadCourse = (idOrSlug) => {
  try {
    loadCourse(idOrSlug).catch(() => {})
  } catch {}
}

export const getCourseMeta = (idOrSlug) => {
  const id = resolveCourseId(idOrSlug)
  return COURSE_CATALOG.find(c => c.id === id) || null
}
