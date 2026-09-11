const jsonLessonModules = typeof import.meta.glob === 'function'
  ? import.meta.glob('../content/**/*.json', {
    eager: true,
    import: 'default'
  })
  : {}

export const JSON_LESSON_CONTENT = Object.entries(jsonLessonModules).reduce((acc, [path, lesson]) => {
  const normalizedPath = path.replace('../content/', '').replace('.json', '')
  acc[normalizedPath] = lesson
  if (lesson?.id) acc[lesson.id] = lesson
  return acc
}, {})

export const getJsonLesson = (courseId, lessonSlugOrId) => {
  return JSON_LESSON_CONTENT[`${courseId}/${lessonSlugOrId}`] || JSON_LESSON_CONTENT[lessonSlugOrId] || null
}

export const mergeJsonLessonContent = (course) => {
  if (!course?.chapters) return course
  return {
    ...course,
    chapters: course.chapters.map(chapter => ({
      ...chapter,
      lessons: chapter.lessons?.map(lesson => ({
        ...lesson,
        ...(getJsonLesson(course.id, lesson.slug || lesson.id) || {})
      })) || []
    }))
  }
}
