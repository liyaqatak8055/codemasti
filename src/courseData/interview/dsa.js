// CodeMasti Master Data Structures & Algorithms Course
// Complete 20-Chapter Curriculum from Beginner to FAANG Interview Level

import { ch1Fundamentals } from './dsa/ch1_fundamentals.js'
import { ch2Complexity } from './dsa/ch2_complexity.js'
import { ch3Arrays } from './dsa/ch3_arrays.js'
import { ch4Strings } from './dsa/ch4_strings.js'
import { ch5LinkedList } from './dsa/ch5_linkedlist.js'
import { ch6Stack } from './dsa/ch6_stack.js'
import { ch7Queue } from './dsa/ch7_queue.js'
import { ch8Hashing } from './dsa/ch8_hashing.js'
import { ch9Recursion } from './dsa/ch9_recursion.js'
import { ch10Backtracking } from './dsa/ch10_backtracking.js'
import { ch11Sorting } from './dsa/ch11_sorting.js'
import { ch12Searching } from './dsa/ch12_searching.js'
import { ch13Trees } from './dsa/ch13_trees.js'
import { ch14Heap } from './dsa/ch14_heap.js'
import { ch15Graphs } from './dsa/ch15_graphs.js'
import { ch16Greedy } from './dsa/ch16_greedy.js'
import { ch17DP } from './dsa/ch17_dp.js'
import { ch18BitManipulation } from './dsa/ch18_bitmanipulation.js'
import { ch19Patterns } from './dsa/ch19_patterns.js'
import { ch20Interview } from './dsa/ch20_interview.js'

export const dsaCourse = {
  id: 'dsa',
  title: 'DSA — Data Structures & Algorithms',
  subtitle: 'Master Data Structures, Algorithms, Problem Solving & Interview Logic',
  description: 'Master Data Structures, Algorithms, Problem Solving & Interview Logic — 20 Complete Structured Chapters from Zero to FAANG Coding Interview Level.',
  icon: '🧠',
  category: 'interview',
  certificateName: 'DSA — DATA STRUCTURES & ALGORITHMS',
  topicsCount: 300,
  practiceCount: 220,
  projectsCount: 15,
  hoursEstimate: 68,
  level: 'Beginner → Intermediate → Advanced → Interview Level',
  achievements: [
    { id: 'dsa-explorer', title: 'DSA Explorer', icon: '🏆', xp: 50, desc: 'Started the DSA Master Journey' },
    { id: 'complexity-master', title: 'Complexity Ninja', icon: '🏆', xp: 100, desc: 'Mastered Big-O, Time & Space Complexity' },
    { id: 'array-ninja', title: 'Array Ninja', icon: '🏆', xp: 150, desc: 'Mastered 1D, 2D Arrays & Kadane algorithm' },
    { id: 'string-wizard', title: 'String Wizard', icon: '🏆', xp: 150, desc: 'Mastered Palindromes, Anagrams & Sliding Window' },
    { id: 'linked-list-builder', title: 'Linked List Builder', icon: '🏆', xp: 150, desc: 'Mastered Pointers & Floyd Cycle Detection' },
    { id: 'stack-master', title: 'Stack Master', icon: '🏆', xp: 150, desc: 'Mastered LIFO, Parentheses & Monotonic Stack' },
    { id: 'queue-master', title: 'Queue Master', icon: '🏆', xp: 150, desc: 'Mastered FIFO, Circular Queues & BFS' },
    { id: 'hashing-hero', title: 'Hashing Hero', icon: '🏆', xp: 150, desc: 'Mastered Hash Tables, Collisions & O(1) Lookups' },
    { id: 'recursion-rookie', title: 'Recursion Master', icon: '🏆', xp: 200, desc: 'Conquered Call Stacks & Recursion Trees' },
    { id: 'backtracking-beast', title: 'Backtracking Beast', icon: '🏆', xp: 200, desc: 'Mastered Subsets, Permutations & N-Queens' },
    { id: 'sorting-champion', title: 'Sorting Champion', icon: '🏆', xp: 200, desc: 'Mastered Merge, Quick, Heap & Radix Sort' },
    { id: 'binary-search-beast', title: 'Binary Search Beast', icon: '🏆', xp: 200, desc: 'Mastered Logarithmic Search & Rotated Arrays' },
    { id: 'tree-explorer', title: 'Tree Explorer', icon: '🏆', xp: 250, desc: 'Mastered Binary Trees, DFS, BFS & BST' },
    { id: 'heap-master', title: 'Heap Master', icon: '🏆', xp: 250, desc: 'Mastered Min/Max Heaps, Heapify & Top-K Problems' },
    { id: 'graph-explorer', title: 'Graph Explorer', icon: '🏆', xp: 300, desc: 'Mastered BFS, DFS, Topo Sort, Dijkstra & MST' },
    { id: 'greedy-thinker', title: 'Greedy Thinker', icon: '🏆', xp: 250, desc: 'Mastered Greedy Choice & Interval Scheduling' },
    { id: 'dp-warrior', title: 'DP Warrior', icon: '🏆', xp: 350, desc: 'Mastered 1D/2D Dynamic Programming & Knapsack' },
    { id: 'bit-manipulator', title: 'Bit Master', icon: '🏆', xp: 200, desc: 'Mastered Bitwise Operators & Bitmasking' },
    { id: 'pattern-master', title: 'Pattern Master', icon: '🏆', xp: 300, desc: 'Mastered the 15 Core Problem-Solving Patterns' },
    { id: 'dsa-legend', title: 'DSA Legend', icon: '🏆', xp: 500, desc: 'Interview Ready for FAANG & Top Tech Companies' }
  ],
  chapters: [
    ch1Fundamentals,
    ch2Complexity,
    ch3Arrays,
    ch4Strings,
    ch5LinkedList,
    ch6Stack,
    ch7Queue,
    ch8Hashing,
    ch9Recursion,
    ch10Backtracking,
    ch11Sorting,
    ch12Searching,
    ch13Trees,
    ch14Heap,
    ch15Graphs,
    ch16Greedy,
    ch17DP,
    ch18BitManipulation,
    ch19Patterns,
    ch20Interview
  ]
}

export default dsaCourse
