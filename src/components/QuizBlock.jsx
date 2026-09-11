import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, RotateCcw } from 'lucide-react'

import { saveQuizAttempt } from '../utils/storage'

/*
  QuizBlock supports 6 types:
  - mcq       : Multiple Choice
  - fillblank : Fill in the blank
  - fixbug    : Fix the bug (code input)
  - arrange   : Arrange code blocks in order
  - predict   : Predict the output (MCQ with code preview)
  - drag      : Drag and drop (handled via DragQuiz in LessonWidgets)
*/
export default function QuizBlock({ quiz, onCorrect, onResult }) {
  if (!quiz) return null

  // In case an array of quizzes is passed by mistake, pick the first object
  const actualQuiz = Array.isArray(quiz) ? (quiz[0] || {}) : quiz
  const quizType = actualQuiz.type || 'mcq'
  const options = Array.isArray(actualQuiz.options) ? actualQuiz.options : []

  // Resolve normalized answer (handles string answer, array answer, or numeric correct index)
  let normalizedAnswer = ''
  if (actualQuiz.answer !== undefined) {
    normalizedAnswer = Array.isArray(actualQuiz.answer) ? actualQuiz.answer.join('|') : actualQuiz.answer
  } else if (typeof actualQuiz.correct === 'number' && options[actualQuiz.correct] !== undefined) {
    normalizedAnswer = options[actualQuiz.correct]
  } else if (typeof actualQuiz.correct === 'string') {
    normalizedAnswer = actualQuiz.correct
  }

  const [answer, setAnswer] = useState('')
  const [arrangeOrder, setArrangeOrder] = useState(
    quizType === 'arrange' ? [...options].sort(() => Math.random() - 0.5) : []
  )
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)
  const blankParts = useMemo(() => (actualQuiz.sentence || '').split('___'), [actualQuiz.sentence])

  useEffect(() => {
    setAnswer('')
    setArrangeOrder((actualQuiz.type || 'mcq') === 'arrange' ? [...options].sort(() => Math.random() - 0.5) : [])
    setChecked(false)
    setCorrect(false)
  }, [actualQuiz.question])

  const check = () => {
    let ok = false
    if (quizType === 'mcq') ok = answer === normalizedAnswer
    if (quizType === 'predict') ok = answer === normalizedAnswer
    if (quizType === 'fillblank') ok = answer.trim().toLowerCase() === String(normalizedAnswer).trim().toLowerCase()
    if (quizType === 'fixbug') ok = actualQuiz.validator ? actualQuiz.validator(answer) : answer.includes(normalizedAnswer)
    if (quizType === 'arrange') ok = arrangeOrder.join('|') === normalizedAnswer
    setChecked(true)
    setCorrect(ok)
    const score = ok ? (actualQuiz.points || 20) : 0
    saveQuizAttempt({
      courseId: actualQuiz.courseId || 'general',
      level: quizType,
      score,
      total: actualQuiz.points || 20,
      passed: ok
    })
    if (ok && onCorrect) onCorrect()
    if (onResult) onResult({ correct: ok, answer: quizType === 'arrange' ? arrangeOrder : answer, score })
  }

  const retry = () => {
    setAnswer('')
    setArrangeOrder(quizType === 'arrange' ? [...options].sort(() => Math.random() - 0.5) : [])
    setChecked(false)
    setCorrect(false)
  }

  const moveItem = (from, to) => {
    const arr = [...arrangeOrder]
    const [item] = arr.splice(from, 1)
    arr.splice(to, 0, item)
    setArrangeOrder(arr)
  }

  return (
    <div className="quiz-block">
      <div className="quiz-type-label">
        {quizType === 'mcq' && '📋 Multiple Choice'}
        {quizType === 'fillblank' && '✏️ Fill in the Blank'}
        {quizType === 'fixbug' && '🛠️ Fix the Bug'}
        {quizType === 'arrange' && '🔀 Arrange in Order'}
        {quizType === 'predict' && '🔮 Predict the Output'}
      </div>
      <p className="quiz-q">{actualQuiz.question}</p>

      {/* Predict Output — code preview + MCQ */}
      {quizType === 'predict' && actualQuiz.code && (
        <pre className="predict-code-preview"><code>{actualQuiz.code}</code></pre>
      )}

      {/* MCQ + Predict (same UI) */}
      {(quizType === 'mcq' || quizType === 'predict') && (
        <div className="quiz-opts">
          {options.map(opt => (
            <button
              key={opt}
              disabled={checked}
              onClick={() => setAnswer(opt)}
              className={`quiz-opt
                ${answer === opt ? 'sel' : ''}
                ${checked && opt === normalizedAnswer ? 'correct' : ''}
                ${checked && answer === opt && opt !== normalizedAnswer ? 'wrong' : ''}
              `}
            >
              {checked && opt === normalizedAnswer && <Check size={14} />}
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Fill Blank */}
      {quizType === 'fillblank' && (
        <div className="quiz-fill">
          <p className="fill-sentence">
            {blankParts[0]}<span className="blank" />{blankParts.slice(1).join('___')}
          </p>
          <input
            type="text"
            className="fill-input"
            placeholder="Yahan likho..."
            value={answer}
            disabled={checked}
            onChange={e => setAnswer(e.target.value)}
          />
        </div>
      )}

      {/* Fix Bug */}
      {quizType === 'fixbug' && (
        <div className="quiz-fixbug">
          <pre className="buggy-code">{quiz.buggyCode}</pre>
          <textarea
            className="fix-editor"
            placeholder="Sahi code yahan likho..."
            value={answer}
            disabled={checked}
            onChange={e => setAnswer(e.target.value)}
            rows={4}
          />
        </div>
      )}

      {/* Arrange */}
      {quizType === 'arrange' && (
        <div className="quiz-arrange">
          {arrangeOrder.map((item, i) => (
            <div key={item} className="arrange-item">
              <code>{item}</code>
              <div className="arrange-controls">
                {i > 0 && <button onClick={() => moveItem(i, i - 1)}>↑</button>}
                {i < arrangeOrder.length - 1 && <button onClick={() => moveItem(i, i + 1)}>↓</button>}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="quiz-footer">
        {!checked ? (
          <button
            onClick={check}
            disabled={!answer && quiz.type !== 'arrange'}
            className="primary-btn compact"
          >
            {quizType === 'predict' ? 'Submit Prediction' : 'Submit Answer'} <ChevronRight size={14} />
          </button>
        ) : (
          <AnimatePresence>
            <motion.div
              className={`quiz-result ${correct ? 'good' : 'bad'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
            {correct
              ? (quizType === 'predict' ? '🔮 Output Predict kar liya! +20 XP 🔥' : '✅ Sahi jawab! Zabardast! +20 XP 🎉')
                : `❌ Galat! Sahi jawab: ${normalizedAnswer}`}
              {quiz.explanation && <p className="quiz-explanation">{quiz.explanation}</p>}
              {!correct && (
                <button onClick={retry} className="ghost-btn compact" style={{ marginTop: 10 }}>
                  <RotateCcw size={14} /> Retry
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}
