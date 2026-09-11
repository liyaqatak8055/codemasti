// Chapter 20 — DSA Interview Preparation (16 Comprehensive Lessons & FAANG Playbook)
import { createDsaLesson } from './dsaHelper.js'

export const ch20Interview = {
  chapterTitle: 'Interview Preparation',
  lessons: [
    createDsaLesson({
      id: 'dsa-how-interviews-work',
      title: 'How DSA Interviews Work (The 45-Minute Breakdown)',
      emoji: '💼',
      difficulty: 'Beginner',
      englishDef: 'A standard 45-minute tech interview breakdown: 1) 5 min Introductions, 2) 5 min Problem Clarification & Constraints, 3) 10 min Approach discussion (Brute force -> Optimal), 4) 15 min Clean Coding, 5) 5 min Dry Run & Complexity Analysis, 6) 5 min Q&A.',
      hinglishExplain: '45 minute ke coding interview ka time distribution:\n• 5 min: Intro aur resume\n• 5 min: Question samajhna aur clarifying questions poochna\n• 10 min: Logic explain karna aur interviewer se approach approve karana\n• 15 min: Clean code type karna\n• 5 min: Dry run karke bugs pakadna aur Big O explain karna\n• 5 min: Interviewer se questions poochna.',
      code: `// 45-Minute Interview Checklist`
    }),

    createDsaLesson({
      id: 'dsa-how-to-understand-problem',
      title: 'How to Understand a Problem & Read Constraints',
      emoji: '🧐',
      difficulty: 'Beginner',
      englishDef: 'Extract key data characteristics: Input types, output requirements, value ranges (positive/negative/zero), and array length N to deduce required Big-O (e.g. N <= 10⁵ requires O(N) or O(N log N)).',
      hinglishExplain: 'Constraints dekhkar complexity pehchano:\n• N <= 10 → O(N!) ya O(2ⁿ) Backtracking\n• N <= 1000 → O(N²) Nested loops\n• N <= 10⁵ → O(N log N) Sorting/Heap ya O(N) HashMap\n• N <= 10⁹ → O(log N) Binary Search ya O(1) Math.',
      code: `// Constraints to Complexity Translation Table`
    }),

    createDsaLesson({
      id: 'dsa-clarifying-questions',
      title: 'Asking the Right Clarifying Questions',
      emoji: '❓',
      difficulty: 'Beginner',
      englishDef: 'Clarify ambiguity before coding: 1) Can input be empty/null? 2) Are integers positive only? 3) Can duplicates exist? 4) Is array sorted? 5) What are memory/time constraints?',
      hinglishExplain: 'Direct code mat shuru karo! Interviewer se 2-3 zaroori sawal poochkar impress karo:\n"Kya input array empty ho sakta hai?"\n"Kya duplicate elements allowed hain?"\n"Kya mujhe in-place modify karna hai?"',
      code: `// Clarifying Questions List`
    }),

    createDsaLesson({
      id: 'dsa-brute-force-first',
      title: 'State the Brute Force Solution First',
      emoji: '🧱',
      difficulty: 'Beginner',
      englishDef: 'Always state a simple brute force solution first (e.g. nested loops O(N²)) in 1-2 minutes to establish a baseline and demonstrate problem comprehension before optimizing.',
      hinglishExplain: 'Pehle 1 minute mein brute force bata kar baseline banayein: "Sir, brute force mein nested loop se O(N²) time lagega. Ab main isko HashMap use karke O(N) mein optimize karta hoon."',
      code: `// Brute Force Baseline -> Optimized Solution`
    }),

    createDsaLesson({
      id: 'dsa-optimize-the-solution',
      title: 'Optimize the Solution (Identify Bottlenecks)',
      emoji: '🚀',
      difficulty: 'Intermediate',
      englishDef: 'Identify the BUD (Bottlenecks, Unnecessary work, Duplicated work). Use HashMaps for O(1) lookups, Two Pointers/Sliding Window for O(N), or Sorting/Binary Search for O(log N).',
      hinglishExplain: 'Bottleneck dhoondho: Kahan nested loop time le raha hai? Kya HashMap ya Two Pointers use karke time kam ho sakta hai?',
      code: `// Bottleneck Removal Strategy`
    }),

    createDsaLesson({
      id: 'dsa-explain-time-complexity',
      title: 'How to Explain Time Complexity to Interviewer',
      emoji: '⏱️',
      difficulty: 'Intermediate',
      englishDef: 'State the Upper Bound Big-O clearly with step-by-step justification: "The loop runs N times and each hash lookup takes O(1), leading to an overall O(N) linear time complexity."',
      hinglishExplain: 'Confidence ke sath reason samjhao: "Sir, loop N times chal raha hai aur Map lookup O(1) hai, isliye total Time Complexity O(N) linear hai."',
      code: `// Time Complexity Verbal Formula`
    }),

    createDsaLesson({
      id: 'dsa-explain-space-complexity',
      title: 'How to Explain Space Complexity & Auxiliary Memory',
      emoji: '💾',
      difficulty: 'Intermediate',
      englishDef: 'Distinguish between input space and auxiliary memory: "We only use a few pointer variables, achieving O(1) auxiliary space (or O(N) due to the hash set of size N)."',
      hinglishExplain: 'Auxiliary space aur recursion call stack memory clearly mention karo.',
      code: `// Space Complexity Verbal Formula`
    }),

    createDsaLesson({
      id: 'dsa-edge-cases-handling',
      title: 'Edge Cases Checklist',
      emoji: '🛡️',
      difficulty: 'Intermediate',
      englishDef: 'Test edge cases: 1) Empty input `[]` or `""`, 2) Single element `[1]`, 3) Two elements, 4) All identical elements `[5, 5, 5]`, 5) Extremely large numbers (integer overflow), 6) Negative values.',
      hinglishExplain: 'Interview mein code likhne ke baad in 6 edge cases ko bol-bol kar verify karo.',
      code: `// Edge Cases Validator Template`
    }),

    createDsaLesson({
      id: 'dsa-dry-run-technique',
      title: 'Dry Run Technique on Paper / Comments',
      emoji: '📝',
      difficulty: 'Intermediate',
      englishDef: 'Trace variables step-by-step on a small test case (e.g. `arr = [2, 7, 11]`) using a variable state table to catch off-by-one errors before telling the interviewer you are done.',
      hinglishExplain: 'Interviewer ko bolne se pehle ek small example lekar variables ki values step-by-step trace (dry run) karo. Isse 90% bugs submit karne se pehle pakad mein aa jaate hain!',
      code: `// Dry Run Table:
// Step 1: i=0, num=2, diff=7, map={} -> map.set(2, 0)
// Step 2: i=1, num=7, diff=2 -> map.has(2) is true -> return [0, 1]`
    }),

    createDsaLesson({
      id: 'dsa-writing-clean-code',
      title: 'Writing Clean Production-Ready Code in Interviews',
      emoji: '✨',
      difficulty: 'Beginner',
      englishDef: 'Use meaningful variable names (`left`, `right`, `maxSum`), modular helper functions, consistent indentation, early return guard clauses, and avoid single-letter vague identifiers.',
      hinglishExplain: 'Clean code likhein: meaningful names (`left`, `right`, `seenMap`), proper indentation aur clean helper functions.',
      code: `// Clean Code Best Practices`
    }),

    createDsaLesson({
      id: 'dsa-debugging-during-interview',
      title: 'Debugging Under Pressure during Interview',
      emoji: '🐛',
      difficulty: 'Intermediate',
      englishDef: 'If your code fails a test case: stay calm, explain your thinking out loud, print intermediate states, verify loop boundaries, check base cases, and walk through step-by-step without panicking.',
      hinglishExplain: 'Agar code fail ho jaye toh ghabraiye mat! Bol kar sochiye (Think out loud): "Let me trace where the value deviated..." Interviewer tumhara debugging process dekhna chahta hai.',
      code: `// Live Debugging Strategy`
    }),

    createDsaLesson({
      id: 'dsa-common-dsa-interview-questions',
      title: 'Most Common DSA Interview Questions (The High-Yield 75)',
      emoji: '🌟',
      difficulty: 'Intermediate',
      englishDef: 'The essential Blind 75 / NeetCode 150 curated list covering arrays, strings, two pointers, sliding window, trees, graphs, heaps, and dynamic programming.',
      hinglishExplain: 'Top 75 most repeated questions ka comprehensive roadmap jo FAANG aur top tech companies mein repeatedly aate hain.',
      code: `// High-Yield 75 Checklist`
    }),

    createDsaLesson({
      id: 'dsa-easy-problems-warmup',
      title: 'Easy Problems Warm-up',
      emoji: '🟢',
      difficulty: 'Beginner',
      englishDef: 'Mastering baseline confidence: Two Sum, Valid Parentheses, Merge Two Sorted Lists, Best Time to Buy/Sell Stock, Invert Binary Tree, Maximum Subarray.',
      hinglishExplain: 'Pehle Easy questions par 100% accuracy aur speed banayein (15-20 min limit).',
      code: `// Easy Warmup Set`
    }),

    createDsaLesson({
      id: 'dsa-medium-problems-core',
      title: 'Medium Problems Core Mastery (The Sweet Spot)',
      emoji: '🟡',
      difficulty: 'Intermediate',
      englishDef: '85% of tech interviews test Medium-level problems: 3Sum, Number of Islands, Longest Substring Without Repeating Characters, Coin Change, Course Schedule, Kth Largest Element.',
      hinglishExplain: 'Tech interviews ka 85% hissa Medium questions par hota hai. Inhe 25 minutes ke andar solve karne ki practice karo.',
      code: `// Medium Core Set`
    }),

    createDsaLesson({
      id: 'dsa-hard-problems-advanced',
      title: 'Hard Problems Strategy & Decomposition',
      emoji: '🔴',
      difficulty: 'Advanced',
      englishDef: 'Deconstructing Hard problems into standard subproblems: Median of Two Sorted Arrays, Trapping Rain Water, Merge K Sorted Lists, Minimum Window Substring, Word Ladder II.',
      hinglishExplain: 'Hard questions ko 2-3 standard subproblems mein break karke solve karne ki technique.',
      code: `// Hard Problems Breakdown`
    }),

    createDsaLesson({
      id: 'dsa-mock-interview-practice',
      title: 'Mock Interview Practice & Peer Drills',
      emoji: '🎤',
      difficulty: 'Intermediate',
      englishDef: 'Simulate real interview conditions: 45-minute timed sessions, verbalizing thought process out loud, writing on Google Docs / whiteboard without IDE autocomplete, and post-interview retro.',
      hinglishExplain: 'Timer lagakar 45 minutes mein bina autocomplete ke code likhne aur bol-bol kar explain karne ki mock practice.',
      code: `// Mock Interview Rubric & Scoring Sheet`
    })
  ]
}
