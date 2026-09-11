import fs from 'fs'
import path from 'path'
import { COURSES_DATA } from '../src/coursesData.js'
import { getCourseUrl, getLessonUrl } from '../src/utils/seo.js'

const SITE_URL = process.env.SITE_URL || 'https://lakpdf.com'
const publicDir = path.resolve('public')

fs.mkdirSync(publicDir, { recursive: true })

const ROADMAP_IDS = [
  'software-engineer',
  'frontend-engineer',
  'backend-engineer',
  'fullstack-engineer',
  'dsa-mastery',
  'ai-ml-engineer',
  'devops-cloud',
  'data-engineer',
  'mobile-app-developer',
  'cybersecurity-analyst',
  'system-architect'
]

const INTERVIEW_TOPIC_IDS = [
  'javascript',
  'react',
  'nodejs',
  'python',
  'sql',
  'html-css',
  'system-design',
  'dsa',
  'hr'
]

const QUIZ_IDS = [
  'html',
  'css',
  'javascript',
  'react',
  'python',
  'sql',
  'nodejs',
  'dsa',
  'git',
  'typescript'
]

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/courses', priority: '0.9', changefreq: 'daily' },
  { path: '/roadmaps', priority: '0.9', changefreq: 'weekly' },
  { path: '/interview', priority: '0.9', changefreq: 'weekly' },
  { path: '/quiz', priority: '0.8', changefreq: 'weekly' },
  { path: '/projects', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/faq', priority: '0.7', changefreq: 'weekly' },
  { path: '/help', priority: '0.7', changefreq: 'weekly' },
  { path: '/whats-new', priority: '0.7', changefreq: 'weekly' },
  { path: '/privacy', priority: '0.4', changefreq: 'monthly' },
  { path: '/terms', priority: '0.4', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' }
]

const urlEntries = []
const seenPaths = new Set()

const addUrl = (urlPath, priority = '0.7', changefreq = 'weekly') => {
  const cleanPath = urlPath.startsWith('/') ? urlPath : `/${urlPath}`
  if (!seenPaths.has(cleanPath)) {
    seenPaths.add(cleanPath)
    urlEntries.push({ path: cleanPath, priority, changefreq })
  }
}

// 1. Static Core Pages
staticRoutes.forEach(r => addUrl(r.path, r.priority, r.changefreq))

// 2. Career Roadmaps
ROADMAP_IDS.forEach(id => addUrl(`/roadmaps/${id}`, '0.8', 'weekly'))

// 3. Interview Prep Topics
INTERVIEW_TOPIC_IDS.forEach(id => addUrl(`/interview/${id}`, '0.8', 'weekly'))

// 4. Quiz Arenas
QUIZ_IDS.forEach(id => addUrl(`/quiz/${id}`, '0.7', 'weekly'))

// 5. Courses & Lessons
for (const course of COURSES_DATA) {
  addUrl(getCourseUrl(course), '0.85', 'weekly')
  for (const chapter of course.chapters || []) {
    for (const lesson of chapter.lessons || []) {
      addUrl(getLessonUrl(course, lesson), '0.75', 'weekly')
    }
  }
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.map(entry => `  <url>
    <loc>${SITE_URL}${entry.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(publicDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`)

console.log(`Generated sitemap with ${urlEntries.length} verified indexable URLs targeting ${SITE_URL}`)
