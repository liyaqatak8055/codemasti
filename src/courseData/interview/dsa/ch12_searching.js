// Chapter 12 — Searching (13 Comprehensive Lessons & Binary Search Mastery)
import { createDsaLesson } from './dsaHelper.js'

export const ch12Searching = {
  chapterTitle: 'Searching',
  lessons: [
    createDsaLesson({
      id: 'dsa-search-linear',
      title: 'Linear Search',
      emoji: '➡️',
      difficulty: 'Beginner',
      englishDef: 'Linear Search sequentially checks every element in an unsorted list from index 0 to N-1, running in O(N) linear time and O(1) space.',
      hinglishExplain: 'Pehle element se aakhri element tak line se check karna. Unsorted data ke liye simple and best baseline algorithm.',
      code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`
    }),

    createDsaLesson({
      id: 'dsa-search-binary',
      title: 'Binary Search',
      emoji: '🎯',
      difficulty: 'Beginner',
      englishDef: 'Binary Search finds a target in a SORTED collection in O(log N) time by comparing target with middle element and discarding half of the remaining search space at every step.',
      hinglishExplain: 'Sorted array par har step mein search space ko aadha (50%) cut kar dena. 10 Lakh items ko sirf 20 steps mein search kar leta hai!',
      code: `function binarySearch(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}`
    }),

    createDsaLesson({
      id: 'dsa-binary-search-conditions',
      title: 'Binary Search Conditions & Invariants',
      emoji: '⚖️',
      difficulty: 'Intermediate',
      englishDef: 'Binary Search requires a Monotonic Search Space (either strictly increasing/decreasing elements, or a boolean predicate like `FFFFTTTT`). Overflow prevention: `mid = low + Math.floor((high - low) / 2)`.',
      hinglishExplain: 'Integer overflow se bachne ke liye `(low + high) / 2` ke bajaye `low + Math.floor((high - low) / 2)` use karte hain.',
      code: `// Overflow-safe mid calculation
let mid = low + Math.floor((high - low) / 2);`
    }),

    createDsaLesson({
      id: 'dsa-binary-search-implementation',
      title: 'Binary Search Implementation (Iterative vs Recursive)',
      emoji: '💻',
      difficulty: 'Intermediate',
      englishDef: 'Iterative binary search runs in O(log N) time and O(1) space. Recursive binary search takes O(log N) auxiliary call stack memory.',
      hinglishExplain: 'Iterative approach prefer ki jati hai kyunki wo O(1) extra space leti hai bina stack overflow ke risk ke.',
      code: `// Iterative: O(1) space
// Recursive: O(log N) space`
    }),

    createDsaLesson({
      id: 'dsa-binary-search-first-occurrence',
      title: 'First Occurrence of an Element',
      emoji: '⏮️',
      difficulty: 'Intermediate',
      englishDef: 'Find the first (leftmost) index of target in an array with duplicates by continuing to search in the left half `high = mid - 1` even after finding a match.',
      hinglishExplain: 'Duplicate numbers wale array mein pehla target dhoondhna: target milne par bhi search ko left half mein continue rakho.',
      code: `function firstOccurrence(nums, target) {
  let low = 0, high = nums.length - 1, ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) { ans = mid; high = mid - 1; } // Check left
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return ans;
}`
    }),

    createDsaLesson({
      id: 'dsa-binary-search-last-occurrence',
      title: 'Last Occurrence of an Element',
      emoji: '⏭️',
      difficulty: 'Intermediate',
      englishDef: 'Find the last (rightmost) index of target by continuing to search in the right half `low = mid + 1` after finding a match.',
      hinglishExplain: 'Aakhri target index dhoondhna: target milne par search ko right half mein aage badhao.',
      code: `function lastOccurrence(nums, target) {
  let low = 0, high = nums.length - 1, ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) { ans = mid; low = mid + 1; } // Check right
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return ans;
}`
    }),

    createDsaLesson({
      id: 'dsa-search-insert-position',
      title: 'Search Insert Position (LeetCode 35)',
      emoji: '📍',
      difficulty: 'Beginner',
      englishDef: 'Return the index if the target is found. If not, return the index where it would be inserted in order in O(log N) time (equal to `low` pointer at loop termination).',
      hinglishExplain: 'Agar target nahi mila toh wo kahan insert hona chahiye? Binary search loop khatam hone par `low` pointer exact insertion position par hota hai.',
      code: `function searchInsert(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return low; // Insertion position
}`
    }),

    createDsaLesson({
      id: 'dsa-lower-bound',
      title: 'Lower Bound',
      emoji: '⬇️',
      difficulty: 'Intermediate',
      englishDef: 'Lower Bound finds the smallest index `i` such that `arr[i] >= target` in O(log N) time.',
      hinglishExplain: 'Pehla element jo target ke barabar ya usse bada ho (`>= target`). C++ STL `lower_bound` ka exact implementation.',
      code: `function lowerBound(nums, target) {
  let low = 0, high = nums.length - 1, ans = nums.length;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] >= target) { ans = mid; high = mid - 1; }
    else low = mid + 1;
  }
  return ans;
}`
    }),

    createDsaLesson({
      id: 'dsa-upper-bound',
      title: 'Upper Bound',
      emoji: '⬆️',
      difficulty: 'Intermediate',
      englishDef: 'Upper Bound finds the smallest index `i` such that `arr[i] > target` strictly greater in O(log N) time.',
      hinglishExplain: 'Pehla element jo target se strictly bada ho (`> target`).',
      code: `function upperBound(nums, target) {
  let low = 0, high = nums.length - 1, ans = nums.length;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] > target) { ans = mid; high = mid - 1; }
    else low = mid + 1;
  }
  return ans;
}`
    }),

    createDsaLesson({
      id: 'dsa-binary-search-on-answer',
      title: 'Binary Search on Answer Pattern',
      emoji: '💡',
      difficulty: 'Advanced',
      englishDef: 'Binary Search on Answer applies when the answer lies in a numeric range `[min, max]` and a validator function `canAchieve(mid)` is monotonic (`TTTTFFFF` or `FFFFTTTT`). Solves Koko Eating Bananas, Capacity to Ship Packages, Aggressive Cows.',
      hinglishExplain: 'Jab array search nahi balki answer ki range (1 se Max) par binary search lagani ho. FAANG interviews ka sabse high-frequency advanced pattern!',
      code: `// Koko Eating Bananas (LeetCode 875)`
    }),

    createDsaLesson({
      id: 'dsa-rotated-sorted-array',
      title: 'Search in Rotated Sorted Array (LeetCode 33)',
      emoji: '🔄',
      difficulty: 'Intermediate',
      englishDef: 'In a rotated sorted array, at least one half (left or right) is always sorted. Identify the sorted half and check if target falls inside its range in O(log N).',
      hinglishExplain: 'Array rotated hone par bhi koi ek half hamesha sorted rehta hai. Pehle sorted half pehchano aur target check karo.',
      code: `function searchRotated(nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] === target) return mid;
    if (nums[low] <= nums[mid]) { // Left half sorted
      if (nums[low] <= target && target < nums[mid]) high = mid - 1;
      else low = mid + 1;
    } else { // Right half sorted
      if (nums[mid] < target && target <= nums[high]) low = mid + 1;
      else high = mid - 1;
    }
  }
  return -1;
}`
    }),

    createDsaLesson({
      id: 'dsa-search-2d-matrix',
      title: 'Search in 2D Matrix (LeetCode 74)',
      emoji: '📊',
      difficulty: 'Intermediate',
      englishDef: 'Treat an M x N row-sorted matrix as a flattened 1D virtual array of size M*N: `row = Math.floor(mid / N)`, `col = mid % N`, running in O(log(M * N)) time.',
      hinglishExplain: '2D matrix ko 1D array ki tarah imagine karke O(log(M*N)) mein binary search lagana.',
      code: `function searchMatrix(matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let low = 0, high = m * n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let r = Math.floor(mid / n), c = mid % n;
    if (matrix[r][c] === target) return true;
    if (matrix[r][c] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}`
    }),

    createDsaLesson({
      id: 'dsa-binary-search-interview-problems',
      title: 'Binary Search Interview Masterclass',
      emoji: '🏆',
      difficulty: 'Advanced',
      englishDef: 'Top Binary Search interview problems: 1) Median of Two Sorted Arrays (Hard), 2) Find Peak Element, 3) Split Array Largest Sum, 4) Single Element in a Sorted Array.',
      hinglishExplain: 'Binary Search ke top level interview questions ko step-by-step master karo.',
      code: `// Find Peak Element in O(log N)`
    })
  ]
}
