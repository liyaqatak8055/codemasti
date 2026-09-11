// Chapter 19 — Advanced Problem-Solving Patterns (15 Comprehensive Lessons)
import { createDsaLesson } from './dsaHelper.js'

export const ch19Patterns = {
  chapterTitle: 'Problem-Solving Patterns',
  lessons: [
    createDsaLesson({
      id: 'dsa-pattern-two-pointers',
      title: 'Pattern 1: Two Pointers Pattern',
      emoji: '👉👈',
      difficulty: 'Intermediate',
      englishDef: 'Two Pointers converge from opposite ends or move in tandem across sorted data structures to find pair sums, remove duplicates, or trap rainwater in linear O(N) time.',
      hinglishExplain: 'Sorted arrays par do pointers opposite directions se move karke O(N²) nested loops ko O(N) bana dena.',
      code: `// Two Pointers Pattern: left = 0, right = n - 1`
    }),

    createDsaLesson({
      id: 'dsa-pattern-sliding-window',
      title: 'Pattern 2: Sliding Window Pattern',
      emoji: '🪟',
      difficulty: 'Intermediate',
      englishDef: 'Sliding Window maintains a running contiguous sub-segment, dynamically expanding `right` pointer and contracting `left` pointer to track optimal subarray constraints in O(N).',
      hinglishExplain: 'Contiguous subarrays aur substrings ke max/min/length problems ko O(N) mein solve karne ka master pattern.',
      code: `// Sliding Window Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-prefix-sum',
      title: 'Pattern 3: Prefix Sum Pattern',
      emoji: '➕',
      difficulty: 'Intermediate',
      englishDef: 'Precomputing cumulative sums `prefix[i] = prefix[i-1] + arr[i]` reduces repetitive range sum queries and subarray sum counts with HashMaps to O(1) query time.',
      hinglishExplain: 'Range sum queries aur "Subarray Sum Equals K" type ke questions ka base pattern.',
      code: `// Prefix Sum + HashMap Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-difference-array',
      title: 'Pattern 4: Difference Array Pattern',
      emoji: '➖',
      difficulty: 'Advanced',
      englishDef: 'Difference Array allows applying range update operations `[L, R] += val` in O(1) time: `diff[L] += val; diff[R + 1] -= val;`. Final array is reconstructed in O(N).',
      hinglishExplain: 'Multiple range update queries `[L, R]` ko O(1) time mein apply karne ka advanced pattern (Flight Bookings, Corporate Flight).',
      code: `// Difference Array Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-fast-slow-pointer',
      title: 'Pattern 5: Fast & Slow Pointer (Cycle Detection)',
      emoji: '🐢🐇',
      difficulty: 'Intermediate',
      englishDef: 'Pointers moving at different velocities (1x vs 2x) find list midpoints, circular loop beginnings, and solve Happy Number in O(N) time and O(1) space.',
      hinglishExplain: 'Slow 1 step, Fast 2 steps: Cycle detection aur Linked List middle nikalne ka standard pattern.',
      code: `// Fast & Slow Pointer Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-merge-intervals',
      title: 'Pattern 6: Merge Intervals Pattern',
      emoji: '🤝',
      difficulty: 'Intermediate',
      englishDef: 'Sort intervals by start time, then merge overlapping boundaries or insert new intervals in O(N log N) time.',
      hinglishExplain: 'Overlapping time slots, meeting rooms aur schedule merging ka core pattern.',
      code: `// Merge Intervals Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-binary-search-pattern',
      title: 'Pattern 7: Binary Search on Monotonic Predicate',
      emoji: '🎯',
      difficulty: 'Intermediate',
      englishDef: 'Binary search generalized to any search space where a condition function transitions from False to True (`FFFFTTTT`) in O(log(Range) * Validator).',
      hinglishExplain: 'Jab bhi answer ki range monotonic ho (Allocation, Capacity, Speed), wahan Binary Search lagana.',
      code: `// Monotonic Predicate Binary Search`
    }),

    createDsaLesson({
      id: 'dsa-pattern-monotonic-stack',
      title: 'Pattern 8: Monotonic Stack Pattern',
      emoji: '📈',
      difficulty: 'Advanced',
      englishDef: 'Stack maintaining elements in strictly increasing/decreasing order to find Next Greater / Previous Smaller elements in linear O(N) time.',
      hinglishExplain: 'Next Greater Element, Stock Span aur Histogram ke sawal O(N) mein solve karne ka pattern.',
      code: `// Monotonic Stack Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-top-k-elements',
      title: 'Pattern 9: Top K Elements (Heap Pattern)',
      emoji: '👑',
      difficulty: 'Intermediate',
      englishDef: 'Using a Min-Heap of fixed size K to find Kth largest or Top-K frequent elements in O(N log K) without full sorting.',
      hinglishExplain: 'Bina pura array sort kiye top K elements filter karne ke liye Min-Heap maintain karna.',
      code: `// Top K Elements Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-divide-and-conquer',
      title: 'Pattern 10: Divide and Conquer Pattern',
      emoji: '✂️',
      difficulty: 'Intermediate',
      englishDef: 'Break problem into disjoint subproblems, solve recursively, and combine answers (MergeSort, QuickSort, Closest Pair of Points) in O(N log N).',
      hinglishExplain: 'Badi problem ko independent chote hisso mein todna aur unke results ko combine karna.',
      code: `// Divide and Conquer Template`
    }),

    createDsaLesson({
      id: 'dsa-pattern-recursion-pattern',
      title: 'Pattern 11: Tree / Graph Recursion Pattern',
      emoji: '🌳',
      difficulty: 'Intermediate',
      englishDef: 'Standard DFS traversal patterns on trees and graphs: bottom-up return values vs top-down accumulator state parameters.',
      hinglishExplain: 'Tree aur Graph ke recursive DFS traversals ka standard template.',
      code: `// Tree Recursion Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-backtracking-pattern',
      title: 'Pattern 12: Backtracking / State-Space Search Pattern',
      emoji: '🔙',
      difficulty: 'Intermediate',
      englishDef: 'Systematic exploration of combinations, permutations, and puzzle grids with early pruning and state restoration.',
      hinglishExplain: 'Choose -> Explore -> Unchoose pattern for combinations, subsets and grid mazes.',
      code: `// Backtracking Template`
    }),

    createDsaLesson({
      id: 'dsa-pattern-greedy-pattern',
      title: 'Pattern 13: Greedy Choice Pattern',
      emoji: '🤑',
      difficulty: 'Intermediate',
      englishDef: 'Sorting by deadline, finish time, or ratio and making irrevocable locally optimal choices in O(N log N) time.',
      hinglishExplain: 'Sorting ke baad local best choice pick karne ka pattern.',
      code: `// Greedy Choice Pattern`
    }),

    createDsaLesson({
      id: 'dsa-pattern-dp-pattern',
      title: 'Pattern 14: Dynamic Programming Patterns',
      emoji: '🧠',
      difficulty: 'Advanced',
      englishDef: 'Recognizing 1D Linear DP, 0/1 Knapsack, Longest Common Subsequence, Grid Paths, and Interval DP transitions.',
      hinglishExplain: 'DP ke 5 core archetypes ko pehchan kar recurrence relation banana.',
      code: `// DP Patterns Matrix`
    }),

    createDsaLesson({
      id: 'dsa-pattern-graph-traversal-pattern',
      title: 'Pattern 15: Graph Traversal & Multi-Source BFS',
      emoji: '🕸️',
      difficulty: 'Advanced',
      englishDef: 'Multi-source BFS for simultaneous wave propagation (Rotten Oranges, 01 Matrix) and Topological Sort for dependency graphs.',
      hinglishExplain: 'Queue mein multiple starting points daal kar simultaneous level-by-level BFS chalana.',
      code: `// Multi-Source BFS Pattern`
    })
  ]
}
