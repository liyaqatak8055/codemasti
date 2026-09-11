// DSA Lesson Builder Helper to enforce CodeMasti's visual, Hinglish, step-by-step problem solving format

export function createDsaLesson({
  id,
  title,
  emoji = '📦',
  xp = 40,
  difficulty = 'Beginner',
  englishDef,
  examples,
  realWorldUses,
  foundationTitle,
  foundationTree,
  hinglishExplain,
  storyExplain,
  whyNeedIt,
  howItWorks,
  visualDiagram,
  code,
  codeBreakdown,
  dryRun,
  timeComplexity,
  spaceComplexity,
  commonMistakes = [],
  proTips = [],
  interviewQuestions = [],
  practiceProblems = [],
  quiz,
  summary = [],
  mastirQuote,
  ...rest
}) {
  return {
    id,
    title,
    emoji,
    xpReward: xp,
    difficulty,
    readingTime: '10 min',
    badgeName: `${title.slice(0, 20)} Master`,
    mastirQuote: mastirQuote || {
      start: `👨‍🏫 Masti Sir: "${title} ko ratna nahi hai, iska real-world purpose aur mental model samjho! 💡"`,
      hint: `💡 Masti Sir: "Time aur Space Complexity ko dry-run karke check karo!"`,
      success: `🎉 Masti Sir: "Shabash! ${title} concept clear ho gaya!"`,
      mistake: `⚠️ Masti Sir: "Edge cases aur boundary conditions check karna mat bhoolna!"`
    },
    englishDef: englishDef || `${title} is a fundamental concept in Data Structures & Algorithms.`,
    examples: examples || null,
    realWorldUses: realWorldUses || null,
    foundationTitle: foundationTitle || null,
    foundationTree: foundationTree || null,
    hinglishExplain: hinglishExplain || `${title} ko simple shabdon mein samjhein toh ye data ko efficiently manage aur manipulate karne ka core technique hai.`,
    storyExplain: storyExplain || `Real world analogy: Jaise ek organized library ya traffic system mein rule-based movement hoti hai, waise hi ${title} memory mein data ko flow karta hai.`,
    whyNeedIt: whyNeedIt !== undefined ? whyNeedIt : {
      problem: `Bina ${title} ke data handling slow aur unoptimized ho jati hai.`,
      solution: `${title} se hum time aur memory resources ko drastically optimize kar sakte hain.`,
      benefit: 'High-speed execution, scalable architecture aur coding interviews mein top rating!'
    },
    howItWorks: howItWorks !== undefined ? howItWorks : [
      'Understand the problem constraints & data boundaries',
      'Select optimal memory layout and traversal pointers',
      'Execute step-by-step state transitions without memory leaks',
      'Verify results against best, average, and worst case complexities'
    ],
    visualDiagram: visualDiagram !== undefined ? visualDiagram : {
      title: `${title} Flow Architecture`,
      type: 'flow',
      nodes: ['Input Data', 'State Processing', 'Algorithm Core', 'Optimized Result']
    },
    starterCodeExample: {
      title: `💻 Implementation Example: ${title}`,
      code: code || `// Standard ${title} Implementation in JavaScript\nfunction solveProblem(input) {\n  // Implementation logic\n  return input;\n}\n\nconsole.log(solveProblem([1, 2, 3]));`
    },
    codeBreakdown: codeBreakdown || [
      { part: 'Initialization', label: 'Setup variables, pointers, or data storage', color: '#3b82f6' },
      { part: 'Core Loop / Logic', label: 'Iterate or recurse through input elements', color: '#10b981' },
      { part: 'Return / Output', label: 'Produce optimal time/space bounded result', color: '#8b5cf6' }
    ],
    dryRun: dryRun || {
      title: `Step-by-Step Dry Run of ${title}`,
      steps: [
        { step: 1, action: 'Initialize data pointers and base conditions' },
        { step: 2, action: 'Traverse and evaluate current element' },
        { step: 3, action: 'Update state and compute final solution' }
      ]
    },
    timeComplexity: timeComplexity || 'O(N) - Linear Time',
    spaceComplexity: spaceComplexity || 'O(1) - Constant Auxiliary Space',
    commonMistakes: commonMistakes.length ? commonMistakes : [
      '❌ Off-by-one errors in loop boundaries',
      '❌ Missing null/empty input checks',
      '❌ Extra space allocation when in-place modification is possible'
    ],
    proTips: proTips.length ? proTips : [
      `💡 Har question ko solve karne se pehle pen-paper par dry-run karo.`,
      `💡 Brute force se shuru karke gradually O(N) ya O(log N) par optimize karo.`
    ],
    interviewQuestions: interviewQuestions.length ? interviewQuestions : [
      `What is the time complexity of ${title}?`,
      `How does ${title} compare against alternate approaches?`,
      `What are the critical edge cases to handle in ${title}?`
    ],
    practiceProblems: practiceProblems.length ? practiceProblems : [
      {
        title: `${title} - Foundation Problem`,
        difficulty: difficulty === 'Advanced' ? 'Hard' : difficulty === 'Intermediate' ? 'Medium' : 'Easy',
        hint: 'Use the standard pattern discussed in the lesson.',
        code: `function solution() {\n  // Write solution\n}`
      }
    ],
    quiz: quiz || {
      type: 'mcq',
      question: `${title} ka primary objective kya hota hai?`,
      options: [
        'Data ko structured aur efficient way mein process karna',
        'Computer monitor ka resolution badhana',
        'Operating system ko format karna',
        'Database connection terminate karna'
      ],
      answer: 'Data ko structured aur efficient way mein process karna',
      explanation: `${title} data ko efficiently store, search aur process karne ke liye use hota hai.`
    },
    summary: summary.length ? summary : [
      `${title} solves fundamental algorithmic and data organization problems.`,
      `Time Complexity: ${timeComplexity || 'O(N)'}, Space Complexity: ${spaceComplexity || 'O(1)'}.`,
      `Always analyze edge cases and dry-run before coding.`
    ],
    ...rest
  }
}
