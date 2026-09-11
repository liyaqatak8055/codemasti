export const SITE_NAME = 'CodeMasti'
export const SITE_URL = 'https://lakpdf.com'
export const DEFAULT_OG_IMAGE = 'https://lakpdf.com/coding-journey-banner.png'

const escapeRegExp = (text = '') => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const slugify = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const getCourseSlug = (course) => slugify(course?.id || course?.title || '')

export const getLessonSlug = (course, lesson) => {
  const courseTitle = (course?.title || '').toLowerCase()
  const title = (lesson?.title || '')
    .replace(new RegExp(`^${escapeRegExp(courseTitle)}\\s+`, 'i'), '')
    .trim()
  return slugify(title || lesson?.id || '')
}

export const getCourseUrl = (course) => `/courses/${getCourseSlug(course)}`

export const getLessonUrl = (course, lesson) =>
  `${getCourseUrl(course)}/${getLessonSlug(course, lesson)}`

export const getQuestionsUrl = (course, lesson) =>
  `/questions/${course?.id || getCourseSlug(course)}/${lesson?.id || getLessonSlug(course, lesson)}`

export const getAllLessons = (course) =>
  course?.chapters?.flatMap(chapter => chapter.lessons || []) || []

export const findCourseBySlug = (courses, courseSlug) =>
  courses.find(course => getCourseSlug(course) === courseSlug || course.id === courseSlug)

export const findLessonBySlug = (course, lessonSlug) =>
  getAllLessons(course).find(lesson =>
    getLessonSlug(course, lesson) === lessonSlug ||
    slugify(lesson.id?.replace(`${course.id}-`, '')) === lessonSlug
  )

export const findByPath = (courses, pathname) => {
  const segments = pathname.split('/').filter(Boolean)
  if (!segments.length) return null
  const isCoursesPrefix = segments[0] === 'courses'
  const courseSlug = isCoursesPrefix ? segments[1] : segments[0]
  const lessonSlug = isCoursesPrefix ? segments[2] : segments[1]
  if (!courseSlug) return null
  const course = findCourseBySlug(courses, courseSlug)
  if (!course) return null
  const lesson = lessonSlug ? findLessonBySlug(course, lessonSlug) : getAllLessons(course)[0]
  return { course, lesson }
}

export const getSeoTitle = (course, lesson) => {
  if (!course) return `CodeMasti – Master Programming Through Visual Learning in Hinglish`
  if (!lesson) return `${course.title} Course – Learn from Basics to Advanced | ${SITE_NAME}`
  const lessonTitle = lesson.title.replace(new RegExp(`^${escapeRegExp(course.title)}\\s+`, 'i'), '')
  return `${lessonTitle} – ${course.title} Tutorial | ${SITE_NAME}`
}

export const getQuestionsSeoTitle = (course, lesson) => {
  if (!course && !lesson) return `Topic Questions & Answers | ${SITE_NAME}`
  const cTitle = course?.title || 'Course'
  const lTitle = lesson?.title || 'Topic'
  return `${cTitle} - ${lTitle} Questions & Answers | ${SITE_NAME}`
}

export const getMetaDescription = (course, lesson) => {
  if (!course) return 'CodeMasti is a Hinglish-first visual and interactive coding platform with in-browser compilers, structured roadmaps, and interview preparation.'
  if (!lesson) return `Master ${course.title} from beginner to advanced with interactive code exercises, visual diagrams, Hinglish notes, and interview prep on ${SITE_NAME}.`
  const lessonTitle = lesson.title.replace(new RegExp(`^${escapeRegExp(course.title)}\\s+`, 'i'), '')
  const topic = `${course.title}: ${lessonTitle}`.trim()
  return `Learn ${topic} with simple Hinglish explanations, visual diagrams, code examples, quizzes, and interview questions on ${SITE_NAME}.`.slice(0, 158)
}

const setMeta = (selector, attr, value) => {
  if (typeof document === 'undefined') return
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    if (selector.includes('property=')) tag.setAttribute('property', selector.match(/"([^"]+)"/)?.[1] || '')
    else tag.setAttribute('name', selector.match(/"([^"]+)"/)?.[1] || '')
    document.head.appendChild(tag)
  }
  tag.setAttribute(attr, value)
}

const setLink = (rel, href) => {
  if (typeof document === 'undefined') return
  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

export const updatePageSeo = ({
  title,
  description,
  path = '/',
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  course,
  lesson,
  breadcrumbs,
  faqItems,
  noIndex = false
} = {}) => {
  if (typeof document === 'undefined') return

  const resolvedTitle = title || getSeoTitle(course, lesson)
  const resolvedDesc = description || getMetaDescription(course, lesson)
  const resolvedPath = course && lesson
    ? getLessonUrl(course, lesson)
    : course
      ? getCourseUrl(course)
      : path
  const fullUrl = `${SITE_URL}${resolvedPath.startsWith('/') ? resolvedPath : `/${resolvedPath}`}`

  document.title = resolvedTitle
  setMeta('meta[name="description"]', 'content', resolvedDesc)
  setMeta('meta[property="og:title"]', 'content', resolvedTitle)
  setMeta('meta[property="og:description"]', 'content', resolvedDesc)
  setMeta('meta[property="og:url"]', 'content', fullUrl)
  setMeta('meta[property="og:type"]', 'content', lesson ? 'article' : type)
  setMeta('meta[property="og:image"]', 'content', image.startsWith('http') ? image : `${SITE_URL}${image}`)
  setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
  setMeta('meta[name="twitter:title"]', 'content', resolvedTitle)
  setMeta('meta[name="twitter:description"]', 'content', resolvedDesc)
  setMeta('meta[name="twitter:image"]', 'content', image.startsWith('http') ? image : `${SITE_URL}${image}`)
  setLink('canonical', fullUrl)

  // Robots meta tag
  if (noIndex) {
    setMeta('meta[name="robots"]', 'content', 'noindex, nofollow')
  } else {
    setMeta('meta[name="robots"]', 'content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
  }

  // Inject Schemas
  document.querySelectorAll('script[data-seo-schema]').forEach(node => node.remove())
  const schemas = buildSchemas({ course, lesson, url: fullUrl, title: resolvedTitle, description: resolvedDesc, breadcrumbs, faqItems })
  schemas.forEach(schema => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seoSchema = 'true'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  })
}

export const buildSchemas = ({ course, lesson, url, title, description, breadcrumbs, faqItems } = {}) => {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: 'Hinglish-first visual and interactive coding platform with in-browser compilers, career roadmaps, and interview prep.',
    sameAs: [
      'https://github.com/liyaqatak8055/codemasti'
    ]
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/courses?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  const results = [organization, website]

  // Breadcrumbs
  if (breadcrumbs && breadcrumbs.length) {
    results.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((b, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: b.name,
        item: b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url}`
      }))
    })
  } else if (course) {
    results.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Courses', item: `${SITE_URL}/courses` },
        { '@type': 'ListItem', position: 3, name: course.title, item: `${SITE_URL}${getCourseUrl(course)}` },
        ...(lesson ? [{ '@type': 'ListItem', position: 4, name: lesson.title, item: url }] : [])
      ]
    })
  }

  // Course schema
  if (course && !lesson) {
    results.push({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: course.description,
      provider: { '@type': 'EducationalOrganization', name: SITE_NAME, sameAs: SITE_URL },
      url: `${SITE_URL}${getCourseUrl(course)}`,
      inLanguage: ['hi', 'en'],
      educationalLevel: course.level || 'Beginner to Advanced'
    })
  }

  // Article schema for lessons
  if (course && lesson) {
    results.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: lesson.title,
      description: description || getMetaDescription(course, lesson),
      author: { '@type': 'EducationalOrganization', name: `${SITE_NAME} Editorial Team` },
      publisher: { '@type': 'EducationalOrganization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` } },
      mainEntityOfPage: url
    })
  }

  // FAQ Schema
  const faqs = (faqItems && faqItems.length)
    ? faqItems
    : (lesson?.interviewQuestions || []).slice(0, 5).map(question => ({
        q: question,
        a: lesson.summary?.[0] || lesson.englishDef || lesson.hinglishExplain || course?.description || ''
      }))

  if (faqs.length) {
    results.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(item => ({
        '@type': 'Question',
        name: item.q || item[0],
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a || item[1] || ''
        }
      }))
    })
  }

  return results
}
