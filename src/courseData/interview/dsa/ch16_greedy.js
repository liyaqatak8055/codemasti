// Chapter 16 — Greedy Algorithms (10 Comprehensive Lessons & Interval Scheduling)
import { createDsaLesson } from './dsaHelper.js'

export const ch16Greedy = {
  chapterTitle: 'Greedy Algorithms',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-greedy',
      title: 'What is Greedy?',
      emoji: '🤑',
      difficulty: 'Intermediate',
      englishDef: 'A Greedy Algorithm builds a solution piece by piece, always choosing the immediate next piece that offers the most obvious and immediate benefit (Locally Optimal Choice) in the hope of reaching a Globally Optimal Solution.',
      hinglishExplain: 'Greedy approach ka matlab hai: Har step par bina aage-pichhe soche jo sabse best (faydemand) option lage use turant chun lena!',
      code: `// Greedy: Local Optimal -> Global Optimal`
    }),

    createDsaLesson({
      id: 'dsa-greedy-strategy',
      title: 'Greedy Strategy & Choice Property',
      emoji: '🎯',
      difficulty: 'Intermediate',
      englishDef: 'A problem is solvable by Greedy if it exhibits: 1) Greedy Choice Property (global optimum can be arrived at by selecting local optimums), and 2) Optimal Substructure (optimal solution to the problem contains optimal solutions to subproblems).',
      hinglishExplain: 'Do rules honi chahiye: 1) Har step par best choice karne se aakhri answer galat na ho, 2) Subproblems optimal hon.',
      code: `// Greedy Choice Proof`
    }),

    createDsaLesson({
      id: 'dsa-greedy-vs-brute-force',
      title: 'Greedy vs Brute Force vs Dynamic Programming',
      emoji: '⚖️',
      difficulty: 'Intermediate',
      englishDef: 'Brute force explores all choices O(2ⁿ); DP explores choices with memoization O(N²); Greedy makes ONE single irrevocably best choice at each step O(N log N).',
      hinglishExplain: 'Brute force sab check karta hai (slow), DP saare subproblems ko cache karke solve karta hai, jabki Greedy bina pichhe mude ek hi single path par aage badhta hai (super fast).',
      code: `// Greedy: Fastest when choice is mathematically proven`
    }),

    createDsaLesson({
      id: 'dsa-activity-selection',
      title: 'Activity Selection / Non-overlapping Intervals',
      emoji: '📅',
      difficulty: 'Intermediate',
      englishDef: 'Select the maximum number of mutually compatible activities by sorting activities by their FINISH TIME and greedily picking the next non-overlapping activity in O(N log N) time.',
      hinglishExplain: 'Maximum meetings attend karni hain: Meetings ko unke Khatam hone ke time (End Time) ke hisaab se sort karo aur jo sabse pehle khatam ho use attend karo!',
      code: `function eraseOverlapIntervals(intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[1] - b[1]); // Sort by finish time
  let count = 0, prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) count++; // Remove overlap
    else prevEnd = intervals[i][1];
  }
  return count;
}`
    }),

    createDsaLesson({
      id: 'dsa-fractional-knapsack',
      title: 'Fractional Knapsack Problem',
      emoji: '🎒',
      difficulty: 'Intermediate',
      englishDef: 'Maximize total value in a knapsack of capacity W where items can be broken into fractions by sorting items by Value/Weight ratio in O(N log N) time.',
      hinglishExplain: 'Bori mein sabse keemti samaan bharna: Har item ka per-kg rate (Value / Weight) nikal kar sabse mehengi cheez pehle bharo.',
      code: `// Fractional Knapsack: Sort by (value / weight)`
    }),

    createDsaLesson({
      id: 'dsa-job-sequencing',
      title: 'Job Sequencing Problem with Deadlines',
      emoji: '⏰',
      difficulty: 'Intermediate',
      englishDef: 'Maximize total profit by scheduling jobs before their deadlines: sort jobs descending by profit and greedily schedule each job in the latest available free time slot in O(N²).',
      hinglishExplain: 'Sabse zyada profit wale jobs ko unke deadline ke aakhri possible slot mein schedule karna.',
      code: `// Job Sequencing algorithm`
    }),

    createDsaLesson({
      id: 'dsa-minimum-coins-greedy',
      title: 'Minimum Coins / Change Making (Greedy vs DP)',
      emoji: '🪙',
      difficulty: 'Intermediate',
      englishDef: 'In canonical currency systems (Indian Rupees, US Dollars: 1, 2, 5, 10, 20, 50, 100, 500), greedy choice of the largest denomination yields the minimum coin count.',
      hinglishExplain: 'Bade note pehle choose karo (500, 100, 50...): Indian currency mein Greedy 100% accurate kaam karta hai.',
      code: `function minCoinsIndian(coins, V) {
  coins.sort((a, b) => b - a);
  let res = [];
  for (let coin of coins) {
    while (V >= coin) { V -= coin; res.push(coin); }
  }
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-interval-problems',
      title: 'Interval Problems Pattern',
      emoji: '📊',
      difficulty: 'Intermediate',
      englishDef: 'Interval techniques: sort by start time or end time, track overlapping boundaries, and manage resource allocations (Meeting Rooms).',
      hinglishExplain: 'Intervals ke sawal: Start time ya End time se sort karke overlapping range ko track karna.',
      code: `// Interval pattern`
    }),

    createDsaLesson({
      id: 'dsa-merge-intervals',
      title: 'Merge Intervals (LeetCode 56)',
      emoji: '🤝',
      difficulty: 'Intermediate',
      englishDef: 'Merge all overlapping intervals in O(N log N) time: sort by start time, then if `current.start <= prev.end`, merge by `prev.end = Math.max(prev.end, current.end)`.',
      hinglishExplain: 'Start time se sort karo. Agar agle interval ka start pichhle ke end se pehle shuru ho raha hai toh dono ko ek bada interval bana do!',
      code: `function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let prev = res[res.length - 1], curr = intervals[i];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]); // Merge
    } else {
      res.push(curr);
    }
  }
  return res;
}`
    }),

    createDsaLesson({
      id: 'dsa-greedy-interview-problems',
      title: 'Greedy Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Advanced',
      englishDef: 'Top Greedy interview problems: 1) Gas Station (Circuit Tour), 2) Jump Game I & II, 3) Candy Problem, 4) Partition Labels.',
      hinglishExplain: 'Gas Station aur Jump Game jaise top FAANG greedy challenges ka step-by-step master breakdown.',
      code: `// Jump Game (LeetCode 55) in O(N)`
    })
  ]
}
