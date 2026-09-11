// Chapter 14 — Heap & Priority Queue (13 Comprehensive Lessons)
import { createDsaLesson } from './dsaHelper.js'

export const ch14Heap = {
  chapterTitle: 'Heap & Priority Queue',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-heap',
      title: 'What is Heap?',
      emoji: '🏔️',
      difficulty: 'Intermediate',
      englishDef: 'A Heap is a complete binary tree that satisfies the Heap Property. It is typically implemented using a 1D array where parent-child index arithmetic gives O(1) relationships without pointers.',
      hinglishExplain: 'Heap ek special Complete Binary Tree hai jo 1D Array ke through implement hota hai: Parent `i` ke children `2i + 1` aur `2i + 2` par hote hain!',
      code: `// Array representation of Heap:
// Parent(i) = Math.floor((i - 1) / 2)
// LeftChild(i) = 2*i + 1, RightChild(i) = 2*i + 2`
    }),

    createDsaLesson({
      id: 'dsa-min-heap',
      title: 'Min Heap',
      emoji: '⬇️',
      difficulty: 'Intermediate',
      englishDef: 'In a Min Heap, every parent node is less than or equal to its child nodes (`parent <= child`). The Root node always holds the minimum element in O(1).',
      hinglishExplain: 'Root par hamesha sabse chota (Minimum) number hota hai. Har parent apne bachho se chota hota hai.',
      code: `// Min Heap: Root = Min value`
    }),

    createDsaLesson({
      id: 'dsa-max-heap',
      title: 'Max Heap',
      emoji: '⬆️',
      difficulty: 'Intermediate',
      englishDef: 'In a Max Heap, every parent node is greater than or equal to its child nodes (`parent >= child`). The Root node always holds the maximum element in O(1).',
      hinglishExplain: 'Root par hamesha sabse bada (Maximum) number hota hai. Har parent apne bachho se bada hota hai.',
      code: `// Max Heap: Root = Max value`
    }),

    createDsaLesson({
      id: 'dsa-heap-properties',
      title: 'Heap Properties (Complete Binary Tree)',
      emoji: '📐',
      difficulty: 'Intermediate',
      englishDef: 'Two invariants: 1) Structural Property: must be a Complete Binary Tree (all levels filled except possibly the last, which is filled from left to right), 2) Heap Order Property.',
      hinglishExplain: '1) Har level pura bhara hona chahiye (left to right), 2) Heap property follow honi chahiye.',
      code: `// Complete Binary Tree invariant`
    }),

    createDsaLesson({
      id: 'dsa-heapify-algorithm',
      title: 'Heapify Algorithm (Bubble Down)',
      emoji: '🔄',
      difficulty: 'Intermediate',
      englishDef: 'Heapify restores heap invariants by comparing a node with its children and swapping with the smallest/largest, recursively bubbling down in O(log N) time. Building a heap takes O(N).',
      hinglishExplain: 'Agar koi node heap rule tod raha ho toh use niche ke bachho se swap karke sahi jagah par bitha dena (Heapify).',
      code: `function minHeapify(arr, n, i) {
  let smallest = i, l = 2 * i + 1, r = 2 * i + 2;
  if (l < n && arr[l] < arr[smallest]) smallest = l;
  if (r < n && arr[r] < arr[smallest]) smallest = r;
  if (smallest !== i) {
    [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
    minHeapify(arr, n, smallest);
  }
}`
    }),

    createDsaLesson({
      id: 'dsa-heap-insert',
      title: 'Heap Insert (Bubble Up)',
      emoji: '📥',
      difficulty: 'Intermediate',
      englishDef: 'Insert appends the element at the end of the array and bubbles it up by swapping with its parent until the heap property is restored, running in O(log N) time.',
      hinglishExplain: 'Naya number array ke end mein push karo aur use parent se compare karke upar (Bubble up) bhejte jao.',
      code: `// Heap Insert in O(log N)`
    }),

    createDsaLesson({
      id: 'dsa-heap-delete',
      title: 'Heap Delete (Extract Min / Max)',
      emoji: '📤',
      difficulty: 'Intermediate',
      englishDef: 'Extract root, replace it with the last leaf element in the array, decrement size, and call heapify on root to restore invariants in O(log N) time.',
      hinglishExplain: 'Root ko nikalo, aakhri element ko root par rakho aur Heapify call karke niche bhej do.',
      code: `// Extract Min in O(log N)`
    }),

    createDsaLesson({
      id: 'dsa-heap-sort-deep-dive',
      title: 'Heap Sort Deep Dive',
      emoji: '⚡',
      difficulty: 'Intermediate',
      englishDef: 'Build a Max-Heap in O(N), then repeatedly swap root with the last element and heapify the reduced heap in O(N log N) time and O(1) space.',
      hinglishExplain: 'Max Heap bana kar maximum numbers ko pichhe bhejte jao: in-place O(N log N) sorting.',
      code: `// In-Place HeapSort`
    }),

    createDsaLesson({
      id: 'dsa-priority-queue-implementation',
      title: 'Priority Queue Implementation',
      emoji: '⭐',
      difficulty: 'Intermediate',
      englishDef: 'Implementing a Priority Queue class backed by an array heap with `push(val, priority)` and `pop()` in O(log N).',
      hinglishExplain: 'Priority Queue class implementation jo Dijkstra algorithm aur Task scheduling mein use hoti hai.',
      code: `class MinPriorityQueue {
  constructor() { this.heap = []; }
  push(val) { /* Bubble up */ }
  pop() { /* Bubble down */ }
}`
    }),

    createDsaLesson({
      id: 'dsa-kth-largest-element',
      title: 'Kth Largest Element in an Array (LeetCode 215)',
      emoji: '🥇',
      difficulty: 'Intermediate',
      englishDef: 'Maintain a Min-Heap of size K: iterate through elements, pushing numbers and popping when heap size > K. Root contains the Kth largest in O(N log K) time.',
      hinglishExplain: 'Size K ka Min-Heap maintain karo! Array ke end mein heap ka root exact Kth largest number hoga. Sorting O(N log N) se fast O(N log K)!',
      code: `// Kth Largest using Min-Heap of size K`
    }),

    createDsaLesson({
      id: 'dsa-kth-smallest-element',
      title: 'Kth Smallest Element',
      emoji: '🥈',
      difficulty: 'Intermediate',
      englishDef: 'Maintain a Max-Heap of size K: root contains the Kth smallest element in O(N log K) time and O(K) space.',
      hinglishExplain: 'Size K ka Max-Heap use karke Kth smallest element find karna.',
      code: `// Kth Smallest using Max-Heap of size K`
    }),

    createDsaLesson({
      id: 'dsa-top-k-frequent-elements',
      title: 'Top K Frequent Elements (LeetCode 347)',
      emoji: '📊',
      difficulty: 'Intermediate',
      englishDef: 'Count frequencies with a HashMap, then maintain a Min-Heap of size K based on frequency count in O(N log K) time (or O(N) using Bucket Sort).',
      hinglishExplain: 'HashMap se frequency count karo aur size K ke heap se top K frequent numbers filter karo.',
      code: `// Top K Frequent Elements`
    }),

    createDsaLesson({
      id: 'dsa-heap-interview-problems',
      title: 'Heap Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Advanced',
      englishDef: 'Top Heap interview problems: 1) Find Median from Data Stream (Two Heaps: Max-Heap + Min-Heap), 2) Merge K Sorted Lists, 3) Task Scheduler.',
      hinglishExplain: 'Two Heaps pattern (Find Median in Stream) aur Merge K Sorted Lists ka complete masterclass.',
      code: `// Find Median from Data Stream using Dual Heaps (LeetCode 295)`
    })
  ]
}
