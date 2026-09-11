/**
 * CodeMasti Topic Questions & Answers Engine
 * Generates and normalizes 5–15 high quality, topic-specific questions & answers
 * for any lesson across all courses (Python, JS, React, DSA, SQL, etc.)
 */

// Helper to sanitize title
function cleanTitle(title = '') {
  return title.replace(/^[0-9]+[\.\)]\s*/, '').replace(/^[^\w\s]+\s*/, '').trim()
}

// Clean HTML tags and markdown
function cleanText(text = '') {
  if (typeof text !== 'string') return ''
  return text
    .replace(/<[^>]*>?/gm, '')
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/#{1,6}\s+/g, '')
    .trim()
}

/**
 * Normalizes an existing question object if available
 */
function normalizeQuestionItem(item, idx, lesson) {
  if (typeof item === 'string') {
    return {
      id: idx + 1,
      question: item,
      answer: `${lesson.title} addresses this core aspect. ${lesson.englishDef || ''}`,
      explanation: `${lesson.title} se related is point ko dhyan se samjhein. ${lesson.hinglishExplain ? lesson.hinglishExplain.slice(0, 180) + '...' : ''}`,
      difficulty: idx === 0 ? 'Beginner' : idx > 4 ? 'Advanced' : 'Intermediate',
      category: idx % 3 === 0 ? 'Interview' : idx % 2 === 0 ? 'Concept' : 'Why/How'
    }
  }

  return {
    id: item.id || idx + 1,
    question: item.question || item.q || `Question ${idx + 1}`,
    answer: item.answer || item.a || item.english || '',
    explanation: item.explanation || item.hinglish || item.easyExplain || '',
    difficulty: item.difficulty || (idx < 3 ? 'Beginner' : idx < 7 ? 'Intermediate' : 'Advanced'),
    category: item.category || (idx === 0 ? 'Concept' : idx % 3 === 0 ? 'Interview' : idx % 2 === 0 ? 'Practical' : 'Why/How')
  }
}

/**
 * Master generator for Topic Questions & Answers
 * Extracts data from lesson fields (englishDef, hinglishExplain, storyExplain,
 * whyNeedIt, starterCodeExample, code, codeBreakdown, commonMistakes, proTips,
 * interviewQuestions, quiz, summary) to produce 5–15 rich questions.
 */
export function getTopicQuestions(lesson, course = null) {
  if (!lesson) return []

  const courseTitle = course?.title || 'Programming'
  const title = cleanTitle(lesson.title)

  // 1. If the lesson has explicitly defined questions/questionAnswers, normalize & return
  const rawExplicit = lesson.questions || lesson.questionAnswers
  if (Array.isArray(rawExplicit) && rawExplicit.length > 0) {
    return rawExplicit.map((q, idx) => normalizeQuestionItem(q, idx, lesson))
  }

  const generated = []
  let qId = 1

  // ── Q1: Core Definition & Concept (Beginner / Concept) ─────────────
  if (lesson.englishDef || lesson.title) {
    generated.push({
      id: qId++,
      question: `What is ${title} in ${courseTitle}?`,
      answer: cleanText(lesson.englishDef) || `${title} is a fundamental concept in ${courseTitle} used to structure and execute program logic efficiently.`,
      explanation: cleanText(lesson.hinglishExplain) ? `${cleanText(lesson.hinglishExplain).split('\n')[0]}` : `${title} ko simple shabdon mein samjhein toh ye ${courseTitle} ka ek zaroori building block hai.`,
      difficulty: 'Beginner',
      category: 'Concept'
    })
  }

  // ── Q2: Why / Purpose & Problem Solved (Beginner / Why/How) ────────
  if (lesson.whyNeedIt?.problem || lesson.whyNeedIt?.solution) {
    generated.push({
      id: qId++,
      question: `Why do we need ${title} and what problem does it solve?`,
      answer: `Problem: ${cleanText(lesson.whyNeedIt.problem)}\nSolution: ${cleanText(lesson.whyNeedIt.solution)}${lesson.whyNeedIt.benefit ? `\nBenefit: ${cleanText(lesson.whyNeedIt.benefit)}` : ''}`,
      explanation: `Bina ${title} ke hume ye dikkat aati thi: "${cleanText(lesson.whyNeedIt.problem).slice(0, 120)}...". Isko use karne se code efficient aur scalable ban jata hai.`,
      difficulty: 'Beginner',
      category: 'Why/How'
    })
  } else if (lesson.hinglishExplain) {
    generated.push({
      id: qId++,
      question: `What is the primary purpose and need for ${title}?`,
      answer: `${title} provides standardized mechanisms in ${courseTitle} to handle operations reliably, reducing redundancy and boosting code clarity.`,
      explanation: `${title} ka main use case ye hai ki isse development easy aur structured banti hai.`,
      difficulty: 'Beginner',
      category: 'Why/How'
    })
  }

  // ── Q3: Real-World Analogy & Mental Model (Intermediate / Concept) ──
  if (lesson.storyExplain) {
    const storyExcerpt = cleanText(lesson.storyExplain).split('\n')[0] || cleanText(lesson.storyExplain)
    generated.push({
      id: qId++,
      question: `How can ${title} be understood using a real-world analogy?`,
      answer: `Conceptually: ${storyExcerpt}`,
      explanation: `Real-world example: ${cleanText(lesson.storyExplain).slice(0, 220)}...`,
      difficulty: 'Intermediate',
      category: 'Concept'
    })
  }

  // ── Q4: Practical Code Implementation (Intermediate / Practical) ──
  if (lesson.starterCodeExample?.code || lesson.code || lesson.examples?.[0]?.code) {
    const codeSnippet = lesson.starterCodeExample?.code || lesson.code || lesson.examples[0].code
    generated.push({
      id: qId++,
      question: `How is ${title} written in code? Give a practical example.`,
      answer: `Here is the standard syntax and implementation:\n\n${cleanText(codeSnippet).slice(0, 320)}`,
      explanation: `Code mein hum ${title} ko step-by-step execute karte hain jaise upar example mein dikhaya gaya hai.`,
      difficulty: 'Intermediate',
      category: 'Practical'
    })
  }

  // ── Q5: Code Breakdown & Key Components (Intermediate / Logic) ──────
  if (Array.isArray(lesson.codeBreakdown) && lesson.codeBreakdown.length > 0) {
    const breakdownText = lesson.codeBreakdown
      .map(b => `• ${b.part || b.label}: ${b.label || b.part}`)
      .join('\n')
    generated.push({
      id: qId++,
      question: `What are the key components and syntax parts of ${title}?`,
      answer: `The implementation breaks down into the following key parts:\n${breakdownText}`,
      explanation: `Har syntax part ka apna specific role hota hai jo milkar pure logic ko execute karta hai.`,
      difficulty: 'Intermediate',
      category: 'Logic'
    })
  }

  // ── Q6: Common Mistakes & Pitfalls (Intermediate / Exam) ───────────
  if (Array.isArray(lesson.commonMistakes) && lesson.commonMistakes.length > 0) {
    const mistakesText = lesson.commonMistakes.map(m => `• ${cleanText(m)}`).join('\n')
    generated.push({
      id: qId++,
      question: `What common mistakes should developers avoid when using ${title}?`,
      answer: `Watch out for these common errors:\n${mistakesText}`,
      explanation: `Exams aur interviews mein aksar inhi mistakes se related tricky sawal pooche jaate hain. Inse bachein!`,
      difficulty: 'Intermediate',
      category: 'Exam'
    })
  }

  // ── Q7: Pro Tips & Best Practices (Advanced / Practical) ───────────
  if (Array.isArray(lesson.proTips) && lesson.proTips.length > 0) {
    const tipsText = lesson.proTips.map(t => `• ${cleanText(t)}`).join('\n')
    generated.push({
      id: qId++,
      question: `What are the industry best practices and pro-tips for ${title}?`,
      answer: `Follow these best practices:\n${tipsText}`,
      explanation: `Production apps mein ye best practices follow karne se code maintainable aur clean rehta hai.`,
      difficulty: 'Advanced',
      category: 'Practical'
    })
  }

  // ── Q8–Q12: Interview Questions from lesson data ───────────────────
  if (Array.isArray(lesson.interviewQuestions) && lesson.interviewQuestions.length > 0) {
    lesson.interviewQuestions.forEach((iq) => {
      const qText = typeof iq === 'string' ? iq : iq.q || iq.question
      const aText = typeof iq === 'object' ? iq.a || iq.answer : null
      const expText = typeof iq === 'object' ? iq.explanation || iq.hinglish : null

      if (qText) {
        generated.push({
          id: qId++,
          question: qText,
          answer: aText || `${title} ke interview context mein: ${cleanText(lesson.englishDef || lesson.summary?.[0] || 'Understand the underlying mechanism and edge cases.')}`,
          explanation: expText || `Interview Tip: Examiner is question se aapki foundational clarity aur depth check karta hai.`,
          difficulty: qId > 9 ? 'Advanced' : 'Intermediate',
          category: 'Interview'
        })
      }
    })
  }

  // ── Q13: Quiz / Conceptual Verification (Intermediate / Exam) ──────
  if (lesson.quiz?.question && lesson.quiz?.answer) {
    generated.push({
      id: qId++,
      question: cleanText(lesson.quiz.question),
      answer: `Correct Answer: ${cleanText(lesson.quiz.answer)}\n${lesson.quiz.explanation ? `\nExplanation: ${cleanText(lesson.quiz.explanation)}` : ''}`,
      explanation: lesson.quiz.explanation
        ? cleanText(lesson.quiz.explanation)
        : `Ye direct conceptual verification question hai jo concepts ko validate karta hai.`,
      difficulty: 'Intermediate',
      category: 'Exam'
    })
  }

  // ── Q14: Summary & Key Takeaways (Beginner / Concept) ──────────────
  if (Array.isArray(lesson.summary) && lesson.summary.length > 0) {
    const summaryList = lesson.summary.map(s => `• ${cleanText(s)}`).join('\n')
    generated.push({
      id: qId++,
      question: `What are the key takeaways and summary points for ${title}?`,
      answer: `Key revision takeaways:\n${summaryList}`,
      explanation: `Revision ke waqt in main bullet points ko yaad rakhein — ye pure topic ka saar hai.`,
      difficulty: 'Beginner',
      category: 'Concept'
    })
  }

  // Ensure reasonable bounds (minimum 5, calibrated progression)
  // If fewer than 5 generated, add foundational fallback questions
  if (generated.length < 5) {
    const fallbacks = [
      {
        question: `When should you use ${title} versus alternatives?`,
        answer: `${title} is preferred when you need structured, maintainable, and standard implementations for this specific operation in ${courseTitle}.`,
        explanation: `Requirement ke hisab se right tool choose karna developer ki main skill hoti hai.`,
        difficulty: 'Intermediate',
        category: 'Why/How'
      },
      {
        question: `What is the time/space or performance impact of ${title}?`,
        answer: `${title} operates within optimal bounds when used following best practices without redundant nested loops or memory leaks.`,
        explanation: `Performance aur memory footprint hamesha dhyan mein rakhna chahiye.`,
        difficulty: 'Advanced',
        category: 'Logic'
      },
      {
        question: `How do you debug or inspect issues related to ${title}?`,
        answer: `Use console logs, debugger breakpoints, and automated unit test cases to verify input/output edge cases.`,
        explanation: `Testing aur debugging se unexpected bugs jaldi pakad mein aate hain.`,
        difficulty: 'Intermediate',
        category: 'Practical'
      }
    ]

    for (const fb of fallbacks) {
      if (generated.length >= 7) break
      generated.push({
        id: qId++,
        ...fb
      })
    }
  }

  // Cap at max 15 to keep high focus
  return generated.slice(0, 15)
}

/**
 * Extracts 3–5 quick-fire revision questions for the bottom section
 */
export function getQuickRevisionQuestions(lesson, questions = []) {
  if (!lesson && (!questions || questions.length === 0)) return []

  if (questions && questions.length > 0) {
    // Select 3 to 5 questions representing Beginner, Intermediate, and Advanced
    const sampled = []
    if (questions[0]) sampled.push(questions[0].question)
    if (questions[1]) sampled.push(questions[1].question)
    if (questions[Math.floor(questions.length / 2)]) sampled.push(questions[Math.floor(questions.length / 2)].question)
    if (questions[questions.length - 1] && !sampled.includes(questions[questions.length - 1].question)) {
      sampled.push(questions[questions.length - 1].question)
    }
    return sampled.slice(0, 4)
  }

  const title = cleanTitle(lesson?.title || 'Topic')
  return [
    `What is ${title}?`,
    `Why is ${title} needed?`,
    `What are the common mistakes in ${title}?`,
    `How does ${title} work under the hood?`
  ]
}
