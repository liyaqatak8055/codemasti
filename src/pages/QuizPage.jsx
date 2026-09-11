import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Trophy, Star, RefreshCw, CheckCircle, XCircle, ArrowRight } from 'lucide-react'
import { updatePageSeo } from '../utils/seo'

const QUIZ_COURSES = [
  { id: 'html',          label: 'HTML',          emoji: '📘', color: '#e34c26' },
  { id: 'css',           label: 'CSS',           emoji: '🎨', color: '#264de4' },
  { id: 'javascript',    label: 'JavaScript',    emoji: '📒', color: '#f0c929' },
  { id: 'react',         label: 'React',         emoji: '⚛️', color: '#61dafb' },
  { id: 'nodejs',        label: 'Node.js',       emoji: '🟢', color: '#339933' },
  { id: 'mongodb',       label: 'MongoDB',       emoji: '🍃', color: '#4db33d' },
  { id: 'sql',           label: 'SQL',           emoji: '🗄️', color: '#00758f' },
  { id: 'python',        label: 'Python',        emoji: '🐍', color: '#3776ab' },
  { id: 'java',          label: 'Java',          emoji: '☕', color: '#007396' },
  { id: 'dsa',           label: 'DSA',           emoji: '🧠', color: '#f59e0b' },
  { id: 'system-design', label: 'System Design', emoji: '🏗️', color: '#8b5cf6' },
]

const QUIZ_LEVELS = [
  { id: 'beginner',     label: 'Beginner Quiz',     emoji: '🟢', xp: 50,  desc: '20 questions - fundamental concepts' },
  { id: 'intermediate', label: 'Intermediate Quiz',  emoji: '🟡', xp: 100, desc: '20 questions - applied knowledge' },
  { id: 'advanced',     label: 'Advanced Quiz',      emoji: '🔴', xp: 150, desc: '20 questions - expert-level thinking' },
]

const QUIZ_DATA = {
  html: {
    beginner: [
      { q: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink Text Method Language', 'Home Tool Markup Language'], correct: 0, explanation: 'HTML stands for Hyper Text Markup Language — the standard markup language for creating web pages.' },
      { q: 'Which tag is used for the largest heading?', options: ['<h6>', '<heading>', '<h1>', '<head>'], correct: 2, explanation: '<h1> defines the most important/largest heading. <h6> defines the least important.' },
      { q: 'What is the correct HTML element for a line break?', options: ['<break>', '<lb>', '<br>', '<newline>'], correct: 2, explanation: '<br> is a self-closing tag that inserts a line break.' },
      { q: 'Which attribute provides alternative text for an image?', options: ['title', 'src', 'alt', 'href'], correct: 2, explanation: 'The alt attribute provides alternative text if the image cannot be displayed, crucial for accessibility.' },
      { q: 'What is the correct HTML for a hyperlink?', options: ['<a url="url">Link</a>', '<a href="url">Link</a>', '<link href="url">Link</link>', '<hyperlink>url</hyperlink>'], correct: 1, explanation: 'The <a> tag with href attribute creates a hyperlink. href stands for Hypertext Reference.' },
    ],
    intermediate: [
      { q: 'What is the purpose of the <meta> tag?', options: ['To add styles', 'To provide metadata about the document', 'To create navigation', 'To embed scripts'], correct: 1, explanation: '<meta> tags provide metadata like charset, viewport, description — crucial for SEO and responsive design.' },
      { q: 'Which HTML5 element defines navigation links?', options: ['<navigate>', '<nav>', '<navigation>', '<links>'], correct: 1, explanation: '<nav> is a semantic HTML5 element that defines a set of navigation links.' },
      { q: 'What is the difference between <section> and <div>?', options: ['They are identical', '<section> is semantic; <div> is a generic container', '<div> is semantic; <section> is not', '<section> is for styling only'], correct: 1, explanation: '<section> is semantic representing standalone content. <div> is a generic, non-semantic container.' },
      { q: 'Which input type creates a date picker?', options: ['<input type="calendar">', '<input type="datepicker">', '<input type="date">', '<input type="datetime">'], correct: 2, explanation: '<input type="date"> creates a native browser date picker control.' },
      { q: 'What does the defer attribute do in a script tag?', options: ['Loads script immediately', 'Prevents script from loading', 'Delays execution until HTML is fully parsed', 'Loads script asynchronously and executes immediately'], correct: 2, explanation: 'defer delays execution until the HTML document is fully parsed, downloading in parallel.' },
    ],
    advanced: [
      { q: 'What is rel="noopener noreferrer" used for?', options: ['Improves SEO', 'Prevents security vulnerabilities on external links', 'Adds animation to links', 'Improves load speed'], correct: 1, explanation: 'noopener prevents page from accessing window.opener. noreferrer prevents sending the Referer header.' },
      { q: 'What is ARIA and why is it important?', options: ['A styling framework', 'A JavaScript library', 'Accessible Rich Internet Applications — adds info for screen readers', 'A performance tool'], correct: 2, explanation: 'ARIA attributes enhance accessibility for users with disabilities, providing semantic info to assistive technologies.' },
      { q: 'What is the Content Security Policy meta tag for?', options: ['Improving SEO', 'Preventing XSS by controlling resource loading', 'Social media previews', 'Caching pages'], correct: 1, explanation: 'CSP helps prevent XSS by specifying trusted content sources.' },
      { q: 'What is the purpose of the <picture> element?', options: ['Same as <img>', 'Provides multiple sources for responsive images', 'Creates galleries', 'Embeds video'], correct: 1, explanation: '<picture> allows multiple image sources for different screen sizes, enabling true responsive images.' },
      { q: 'What is loading="lazy" used for?', options: ['Speeds up CSS', 'Defers image loading until near the viewport', 'Loads images in parallel', 'Preloads critical images'], correct: 1, explanation: 'Lazy loading defers image loading until needed, improving initial page load performance.' },
    ]
  },
  javascript: {
    beginner: [
      { q: 'Which keyword declares a variable that cannot be reassigned?', options: ['var', 'let', 'const', 'static'], correct: 2, explanation: 'const declares a variable that cannot be reassigned. Object properties can still be mutated.' },
      { q: 'What does === check?', options: ['Value only', 'Type only', 'Value and type', 'Reference only'], correct: 2, explanation: '=== (strict equality) checks both value AND type without type coercion.' },
      { q: 'What is the output of: typeof null?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], correct: 2, explanation: 'typeof null returns "object" — a well-known JavaScript bug kept for backward compatibility.' },
      { q: 'Which method adds an element to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correct: 0, explanation: 'push() adds to end. pop() removes from end. unshift() adds to beginning. shift() removes from beginning.' },
      { q: 'What is a callback function?', options: ['A function that returns another function', 'A function passed as argument to another function', 'A function that calls itself', 'A function without parameters'], correct: 1, explanation: 'A callback is passed as an argument to be executed later — synchronously or asynchronously.' },
    ],
    intermediate: [
      { q: 'What is a Promise in JavaScript?', options: ['A guarantee of execution', 'An object representing eventual completion of an async operation', 'A synchronous wrapper', 'A method to clone objects'], correct: 1, explanation: 'A Promise represents the eventual result of an async operation. It can be pending, fulfilled, or rejected.' },
      { q: 'What is the purpose of async/await?', options: ['Makes code faster', 'Writes async code in synchronous style', 'Avoids using functions', 'Prevents errors'], correct: 1, explanation: 'async/await is syntactic sugar over Promises, allowing cleaner code that reads like synchronous.' },
      { q: 'What is destructuring?', options: ['Removing object properties', 'Extracting values from arrays/objects into variables', 'Converting arrays to objects', 'Deleting variables'], correct: 1, explanation: 'Destructuring: const {a, b} = obj; const [x, y] = arr;' },
      { q: 'What does Array.prototype.reduce() do?', options: ['Reduces array size', 'Filters elements', 'Executes a function to produce a single value', 'Reverses the array'], correct: 2, explanation: 'reduce() applies a function against an accumulator and each element, reducing to a single value.' },
      { q: 'What is the spread operator (...) used for?', options: ['Multiplying numbers', 'Expanding iterables into individual elements', 'Creating closures', 'Declaring variables'], correct: 1, explanation: 'Spread expands iterables: [...arr1, ...arr2] merges arrays, {...obj1, ...obj2} merges objects.' },
    ],
    advanced: [
      { q: 'What is the output of: [1,2,3].map(Number.parseInt)?', options: ['[1, 2, 3]', '[1, NaN, NaN]', '[1, 2, NaN]', 'Error'], correct: 1, explanation: 'parseInt receives (value, radix). map passes (element, index): parseInt(1,0)=1, parseInt(2,1)=NaN, parseInt(3,2)=NaN.' },
      { q: 'What is a WeakMap and when would you use it?', options: ['A regular Map with fewer features', 'A Map with weak references to keys allowing garbage collection', 'A synchronous Map', 'A Map for numbers only'], correct: 1, explanation: 'WeakMap holds weak references. If no other references exist to a key, it can be garbage collected.' },
      { q: 'What is the Proxy object used for?', options: ['Network requests', 'Intercepting and customizing operations on objects', 'Creating copies', 'Preventing mutation'], correct: 1, explanation: 'Proxy intercepts operations like property access, assignment, and function invocation.' },
      { q: 'What is a generator function?', options: ['Generates random numbers', 'Can pause and resume execution using yield', 'Creates other functions', 'A recursive function'], correct: 1, explanation: 'Generator functions (function*) can pause with yield and resume later. They return an iterator.' },
      { q: 'What is the purpose of Symbol in JavaScript?', options: ['Creates unique strings', 'Creates guaranteed unique immutable values for object keys', 'Converts values', 'Creates private variables'], correct: 1, explanation: 'Symbol() creates unique, immutable primitives used as unique object keys to prevent collisions.' },
    ]
  }
}

const getQuizData = (courseId, levelId) => {
  const d = QUIZ_DATA[courseId]
  const base = d && d[levelId] ? d[levelId] : [
    { q: `What is the core purpose of ${courseId}?`, options: ['Styling', 'Core functionality', 'Data management', 'Optimization'], correct: 1, explanation: `${courseId} is a fundamental building block in modern development.` },
    { q: `Which is a best practice in ${courseId}?`, options: ['Ignoring errors', 'Writing clean maintainable code', 'Avoiding docs', 'Using deprecated features'], correct: 1, explanation: 'Clean well-documented code is always a best practice.' },
    { q: `What tool debugs ${courseId}?`, options: ['Notepad', 'Browser DevTools', 'Word processor', 'Email client'], correct: 1, explanation: 'Browser DevTools provide debugging, profiling, and inspection.' },
    { q: `What concept is fundamental to ${courseId}?`, options: ['Guessing', 'Understanding core principles', 'Skipping fundamentals', 'Memorizing syntax'], correct: 1, explanation: 'Understanding principles helps you adapt to changes in tooling.' },
    { q: `How do you stay updated with ${courseId}?`, options: ['Never learn', 'Official docs and community', 'Old tutorials only', 'Avoid new releases'], correct: 1, explanation: 'Official docs and active community resources are the best sources.' },
  ]
  return Array.from({ length: 20 }, (_, index) => {
    const item = base[index % base.length]
    return {
      ...item,
      q: index < base.length ? item.q : `${item.q} (Practice ${index + 1})`
    }
  })
}

function QuizResult({ score, total, xp, onRetry, onBack, courseLabel, levelLabel }) {
  const pct = Math.round((score / total) * 100)
  const grade = pct >= 80 ? { label: 'Excellent!', emoji: '🏆', color: '#10b981' }
    : pct >= 60 ? { label: 'Good Job!', emoji: '🎉', color: '#f59e0b' }
    : { label: 'Keep Trying!', emoji: '💪', color: '#ef4444' }

  return (
    <motion.div className="quiz-result-page" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
      <div className="quiz-result-card">
        <span className="quiz-result-emoji">{grade.emoji}</span>
        <h2 style={{ color: grade.color }}>{grade.label}</h2>
        <p className="quiz-result-subtitle">{courseLabel} — {levelLabel}</p>
        <div className="quiz-result-score-wrap">
          <div className="quiz-result-score-big">{pct}%</div>
          <div className="quiz-result-score-sub">{score} / {total} correct</div>
        </div>
        <div className="quiz-result-stats">
          <div className="quiz-result-stat"><Trophy size={20} color={pct >= 60 ? '#10b981' : '#ef4444'} /><span>{pct >= 60 ? 'Pass' : 'Fail'}</span></div>
          <div className="quiz-result-stat"><CheckCircle size={20} color="#10b981" /><span>{score} Correct</span></div>
          <div className="quiz-result-stat"><XCircle size={20} color="#ef4444" /><span>{total - score} Wrong</span></div>
          <div className="quiz-result-stat"><Star size={20} color="#f59e0b" /><span>+{pct >= 80 ? xp : Math.round(xp * (pct / 100))} XP</span></div>
        </div>
        <div className="quiz-result-actions">
          <button className="quiz-result-btn retry" onClick={onRetry}><RefreshCw size={16} /> Retry Quiz</button>
          <button className="quiz-result-btn back" onClick={onBack}><ChevronLeft size={16} /> Choose Level</button>
        </div>
      </div>
    </motion.div>
  )
}

function ActiveQuiz({ courseId, levelId, onFinish, onBack }) {
  const course = QUIZ_COURSES.find(c => c.id === courseId)
  const level = QUIZ_LEVELS.find(l => l.id === levelId)
  const questions = getQuizData(courseId, levelId)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [answers, setAnswers] = useState([])
  const [finished, setFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(20 * 45)

  useEffect(() => {
    if (finished) return
    if (timeLeft <= 0) {
      setFinished(true)
      return
    }
    const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [timeLeft, finished])

  if (!course || !level || !questions || questions.length === 0) {
    return (
      <div className="quiz-active-page" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <div className="quiz-question-card" style={{ maxWidth: 500, margin: '0 auto' }}>
          <span style={{ fontSize: 40 }}>⚠️</span>
          <h2 style={{ marginTop: 12 }}>Quiz Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>The requested quiz topic or level does not exist.</p>
          <button className="quiz-result-btn retry" onClick={onBack}>
            <ChevronLeft size={16} /> Choose Available Quiz
          </button>
        </div>
      </div>
    )
  }

  const q = questions[current] || questions[0]

  const handleSelect = (idx) => { if (revealed) return; setSelected(idx); setRevealed(true) }
  const handleNext = () => {
    const newAnswers = [...answers, { selected, correct: q.correct, isCorrect: selected === q.correct }]
    if (current < questions.length - 1) {
      setAnswers(newAnswers); setCurrent(c => c + 1); setSelected(null); setRevealed(false)
    } else {
      setAnswers(newAnswers); setFinished(true)
    }
  }

  if (finished) {
    const allAnswers = answers.length >= questions.length ? answers : [...answers, { isCorrect: selected === q.correct }]
    const score = allAnswers.filter(a => a.isCorrect).length
    return <QuizResult score={score} total={questions.length} xp={level.xp}
      onRetry={() => { setCurrent(0); setSelected(null); setRevealed(false); setAnswers([]); setTimeLeft(20 * 45); setFinished(false) }}
      onBack={onBack} courseLabel={course?.label} levelLabel={level?.label} />
  }

  const progress = (current / questions.length) * 100
  const minutes = Math.floor(timeLeft / 60)
  const seconds = String(timeLeft % 60).padStart(2, '0')
  return (
    <div className="quiz-active-page">
      <div className="quiz-active-header">
        <button className="interview-back-btn" onClick={onBack}><ChevronLeft size={20} /> Exit Quiz</button>
        <div className="quiz-active-meta">
          <span className="quiz-course-badge" style={{ background: `${course?.color}22`, color: course?.color }}>{course?.emoji} {course?.label}</span>
          <span className="quiz-level-badge">{level?.emoji} {level?.label}</span>
          <span className="quiz-progress-text">Timer {minutes}:{seconds}</span>
          <span className="quiz-progress-text">Q {current + 1} / {questions.length}</span>
        </div>
      </div>
      <div className="quiz-progress-bar"><div className="quiz-progress-fill" style={{ width: `${progress}%` }} /></div>
      <div className="quiz-question-card">
        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.2 }}>
            <h2 className="quiz-question-text">{q.q}</h2>
            <div className="quiz-options">
              {q.options.map((opt, i) => {
                let cls = 'quiz-option'
                if (revealed) { if (i === q.correct) cls += ' correct'; else if (i === selected) cls += ' wrong' }
                else if (i === selected) cls += ' selected'
                return (
                  <button key={i} className={cls} onClick={() => handleSelect(i)}>
                    <span className="quiz-option-letter">{String.fromCharCode(65 + i)}</span>
                    {opt}
                    {revealed && i === q.correct && <CheckCircle size={16} />}
                    {revealed && i === selected && i !== q.correct && <XCircle size={16} />}
                  </button>
                )
              })}
            </div>
            {revealed && (
              <motion.div className="quiz-explanation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <strong>💡 Explanation:</strong> {q.explanation}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        {revealed && (
          <button className="quiz-next-btn" onClick={handleNext}>
            {current < questions.length - 1 ? <>Next Question <ArrowRight size={16} /></> : <>See Result <Trophy size={16} /></>}
          </button>
        )}
      </div>
    </div>
  )
}

function QuizLevelSelect({ courseId, onSelectLevel, onBack }) {
  const course = QUIZ_COURSES.find(c => c.id === courseId)

  if (!course) {
    return (
      <div className="quiz-level-page" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: 480, margin: '0 auto', background: 'var(--bg-card)', padding: 32, borderRadius: 16, border: '1px solid var(--border)' }}>
          <span style={{ fontSize: 40 }}>🎯</span>
          <h2 style={{ marginTop: 12 }}>Course Quiz Not Found</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>The selected course does not have an active quiz set.</p>
          <button className="interview-back-btn" style={{ margin: '0 auto' }} onClick={onBack}>
            <ChevronLeft size={16} /> All Courses
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-level-page">
      <button className="interview-back-btn" onClick={onBack}><ChevronLeft size={20} /> All Courses</button>
      <div className="quiz-level-hero">
        <span style={{ fontSize: 48 }}>{course?.emoji}</span>
        <h1>{course?.label} Quiz</h1>
        <p>Choose your difficulty level</p>
      </div>
      <div className="quiz-level-grid">
        {QUIZ_LEVELS.map((level, i) => (
          <motion.button key={level.id} className="quiz-level-card"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            onClick={() => onSelectLevel(level.id)}>
            <span className="quiz-level-emoji">{level.emoji}</span>
            <h3>{level.label}</h3>
            <p>{level.desc}</p>
            <div className="quiz-level-xp"><Star size={14} /> +{level.xp} XP on completion</div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

import { useParams, useSearchParams, useNavigate } from 'react-router-dom'

export default function QuizPage({ selectedCourse, selectedLevel, onSelectCourse, onSelectLevel, onBack, onBackToLevels }) {
  const { courseId: paramCourseId, levelId: paramLevelId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const activeCourse = paramCourseId || searchParams.get('course') || selectedCourse
  const activeLevel = paramLevelId || searchParams.get('level') || selectedLevel

  useEffect(() => {
    if (activeCourse && activeLevel) {
      const course = QUIZ_COURSES.find(c => c.id === activeCourse)
      updatePageSeo({
        title: `${course?.label || activeCourse} ${activeLevel} Quiz | CodeMasti`,
        description: `Test your ${course?.label || activeCourse} skills with multiple choice questions, timer challenges, detailed explanations, and XP rewards.`,
        path: `/quiz/${activeCourse}/${activeLevel}`,
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Quiz Arena', url: '/quiz' },
          { name: `${course?.label || activeCourse} Quiz`, url: `/quiz/${activeCourse}` }
        ]
      })
    } else if (activeCourse) {
      const course = QUIZ_COURSES.find(c => c.id === activeCourse)
      updatePageSeo({
        title: `${course?.label || activeCourse} Programming Quiz | CodeMasti`,
        description: `Choose your difficulty level (Beginner, Intermediate, Advanced) and test your ${course?.label || activeCourse} knowledge.`,
        path: `/quiz/${activeCourse}`,
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Quiz Arena', url: '/quiz' },
          { name: `${course?.label || activeCourse} Quiz`, url: `/quiz/${activeCourse}` }
        ]
      })
    } else {
      updatePageSeo({
        title: 'Quiz Arena – Test Your Coding Skills | CodeMasti',
        description: 'Interactive programming quizzes across HTML, CSS, JavaScript, React, Python, SQL, and DSA. Earn XP and test your conceptual understanding.',
        path: '/quiz',
        breadcrumbs: [
          { name: 'Home', url: '/' },
          { name: 'Quiz Arena', url: '/quiz' }
        ]
      })
    }
  }, [activeCourse, activeLevel])

  if (activeCourse && activeLevel) {
    return (
      <ActiveQuiz
        courseId={activeCourse}
        levelId={activeLevel}
        onFinish={() => {
          if (onBack) onBack()
          else navigate('/quiz')
        }}
        onBack={() => {
          if (onBackToLevels) onBackToLevels()
          else navigate('/quiz/' + activeCourse)
        }}
      />
    )
  }
  if (activeCourse) {
    return (
      <QuizLevelSelect
        courseId={activeCourse}
        onSelectLevel={(lvl) => {
          if (onSelectLevel) onSelectLevel(lvl)
          else navigate('/quiz/' + activeCourse + '/' + lvl)
        }}
        onBack={() => {
          if (onBack) onBack()
          else navigate('/quiz')
        }}
      />
    )
  }
  return (
    <div className="quiz-home-page">
      <div className="quiz-home-hero">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="quiz-home-badge">🎯 Quiz Arena</span>
          <h1>Test Your Knowledge</h1>
          <p>MCQ quizzes with explanations and XP rewards. Choose a course to begin.</p>
        </motion.div>
      </div>
      <div className="quiz-courses-grid">
        {QUIZ_COURSES.map((course, i) => (
          <motion.button key={course.id} className="quiz-course-card"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            onClick={() => {
              if (onSelectCourse) onSelectCourse(course.id)
              else navigate('/quiz/' + course.id)
            }}
            style={{ '--course-color': course.color }}>
            <span className="quiz-course-emoji">{course.emoji}</span>
            <h3>{course.label}</h3>
            <div className="quiz-course-levels">3 Levels • 5 Q each</div>
            <ArrowRight size={16} className="quiz-course-arrow" />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
