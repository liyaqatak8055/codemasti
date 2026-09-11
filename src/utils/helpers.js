// ─── HTML Validator ─────────────────────────────────────────
export const VOID_TAGS = new Set([
  'area','base','br','col','embed','hr','img','input',
  'link','meta','source','track','wbr'
])

export const KNOWN_HTML_TAGS = new Set([
  'html','head','title','meta','link','style','body',
  'h1','h2','h3','h4','h5','h6','p','strong','b','em','i','br',
  'a','img','button','ul','ol','li',
  'table','thead','tbody','tr','th','td',
  'div','span','section','article','header','footer','nav','main',
  'form','label','input','textarea','select','option',
  'iframe','audio','video','canvas','svg','figure','figcaption'
])

export const getHtmlValidation = (code) => {
  const errors = []
  const cleaned = code.replace(/<!--[\s\S]*?-->/g, '')
  const tagRegex = /<\/??\s*([a-zA-Z][\w-]*)\b[^>]*>/g
  const stack = []
  let match
  while ((match = tagRegex.exec(cleaned))) {
    const raw = match[0], tag = match[1].toLowerCase()
    if (!KNOWN_HTML_TAGS.has(tag)) { errors.push(`<${tag}> is not a known HTML tag.`); continue }
    if (VOID_TAGS.has(tag) || raw.endsWith('/>') || raw.startsWith('<!')) continue
    if (raw.startsWith('</')) {
      const last = stack.pop()
      if (!last) errors.push(`Extra closing tag </${tag}> found.`)
      else if (last !== tag) errors.push(`Nesting error: expected </${last}> before </${tag}>.`)
    } else stack.push(tag)
  }
  if (stack.length) errors.push(`Closing tag missing for <${stack[stack.length - 1]}>.`)
  return [...new Set(errors)]
}

// ─── DOM Tree Builder ────────────────────────────────────────
export const buildDomTree = (code) => {
  const tags = []
  const tagRegex = /<\s*([a-zA-Z][\w-]*)\b[^>]*>/g
  let match
  while ((match = tagRegex.exec(code))) {
    const tag = match[1].toLowerCase()
    if (KNOWN_HTML_TAGS.has(tag) && !['html','head','body','meta','title','link'].includes(tag))
      tags.push(tag)
  }
  return ['Document', 'html', 'body', ...(tags.length ? tags : ['h1'])]
}

// ─── Spaced Revision ─────────────────────────────────────────
import { COURSES_DATA } from '../coursesData'

export const getSpacedRevisionDue = () => {
  try {
    const visited = JSON.parse(localStorage.getItem('lesson_visited') || '{}')
    const now = Date.now()
    const due = []
    for (const [lessonId, ts] of Object.entries(visited)) {
      const days = (now - ts) / (1000 * 60 * 60 * 24)
      if (days >= 1) {
        for (const course of COURSES_DATA) {
          for (const ch of course.chapters) {
            const lesson = ch.lessons?.find(l => l.id === lessonId)
            if (lesson) {
              const interval = days >= 14 ? 14 : days >= 7 ? 7 : days >= 3 ? 3 : 1
              due.push({
                lessonId,
                lessonTitle: lesson.title,
                courseId: course.id,
                courseTitle: course.title,
                daysAgo: Math.max(1, Math.round(days)),
                interval
              })
            }
          }
        }
      }
    }
    // Sort by most urgent
    due.sort((a, b) => b.daysAgo - a.daysAgo)
    return due.slice(0, 5)
  } catch { return [] }
}

export const markLessonVisited = (lessonId) => {
  try {
    const visited = JSON.parse(localStorage.getItem('lesson_visited') || '{}')
    visited[lessonId] = Date.now()
    localStorage.setItem('lesson_visited', JSON.stringify(visited))
  } catch {}
}

// ─── Playground Output Builder ───────────────────────────────
export const buildPlaygroundOutput = (code, courseId) => {
  if (courseId === 'html' || courseId === 'css') {
    if (courseId === 'css') {
      return `<html><head><style>${code}.demo{padding:10px;border:1px solid #ccc;border-radius:8px;font-family:sans-serif;}</style></head><body><div class="demo"><h3>Preview</h3><p>Edit CSS above.</p><button class="btn">Button</button></div></body></html>`
    }
    return /\<html[\s>]/i.test(code)
      ? code
      : `<!doctype html><html><head><meta charset="utf-8"/><style>body{font-family:Inter,sans-serif;padding:18px;color:#111827;}button{padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;background:#f9fafb;}</style></head><body>${code}</body></html>`
  }
  try {
    const result = Function(`"use strict";\n${code}`)()
    return result === undefined ? '// Code ran successfully (no return value)' : String(result)
  } catch (err) { return `// Error: ${err.message}` }
}

// ─── Category Colors ─────────────────────────────────────────
export const CAT_COLORS = {
  frontend: '#3b82f6',
  backend: '#10b981',
  programming: '#8b5cf6',
  interview: '#f59e0b',
  projects: '#ec4899'
}

export const SNIPPET_MAP = {
  h1: '<h1>Hello World</h1>',
  p:  '<p>Paragraph text here.</p>',
  img: '<img src="image.jpg" alt="Description">',
  a:  '<a href="https://example.com">Click Here</a>',
  button: '<button>Click Me</button>',
  ul: '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>',
  div: '<div>\n  Content here\n</div>',
  span: '<span>Inline text</span>',
  input: '<input type="text" placeholder="Enter text">',
  form: '<form>\n  <input type="text">\n  <button type="submit">Submit</button>\n</form>'
}
