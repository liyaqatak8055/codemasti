// Chapter 11 — Sorting (14 Comprehensive Lessons with Visual Algorithms)
import { createDsaLesson } from './dsaHelper.js'

export const ch11Sorting = {
  chapterTitle: 'Sorting',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-sorting',
      title: 'What is Sorting?',
      emoji: '🔀',
      difficulty: 'Beginner',
      englishDef: 'Sorting is the process of arranging elements of a collection in a specific predetermined order (ascending or descending order, numerical or alphabetical).',
      hinglishExplain: 'Data ko ek sequence mein arrange karna (chote se bada ya bade se chota). Jaise dictionary mein words ya roll number wise students ki list.',
      code: `const nums = [5, 2, 8, 1, 9];
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 5, 8, 9]`
    }),

    createDsaLesson({
      id: 'dsa-why-sorting',
      title: 'Why Sorting?',
      emoji: '🎯',
      difficulty: 'Beginner',
      englishDef: 'Sorting enables ultra-fast Binary Search O(log N), speeds up database indexing, simplifies duplicate detection, and optimizes greedy algorithm choices.',
      hinglishExplain: 'Agar data sorted ho toh search 1000x fast (Binary Search) ho jati hai, duplicates dhoondhna easy ho jata hai aur leaderboards banti hain.',
      code: `// Sorted array -> Instant Binary Search O(log N)`
    }),

    createDsaLesson({
      id: 'dsa-bubble-sort',
      title: 'Bubble Sort',
      emoji: '🫧',
      difficulty: 'Beginner',
      englishDef: 'Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest element "bubbles up" to the end in each pass. Time complexity: O(N²), Space: O(1).',
      hinglishExplain: 'Paas-paas wale do numbers ko compare karo aur agar galat order mein hain toh swap karo. Har round mein sabse bada number bubble bankar aakhri mein pahunch jata hai.',
      code: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Optimization for sorted array
  }
  return arr;
}`
    }),

    createDsaLesson({
      id: 'dsa-selection-sort',
      title: 'Selection Sort',
      emoji: '👆',
      difficulty: 'Beginner',
      englishDef: 'Selection Sort divides the array into sorted and unsorted subarrays, repeatedly finding the minimum element from the unsorted part and putting it at the beginning. Time: O(N²), Space: O(1).',
      hinglishExplain: 'Bachi hui array mein se sabse chota (minimum) number dhoondho aur use aage laakar swap kar do. Hamesha O(N²) comparisons karta hai.',
      code: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}`
    }),

    createDsaLesson({
      id: 'dsa-insertion-sort',
      title: 'Insertion Sort',
      emoji: '🃏',
      difficulty: 'Beginner',
      englishDef: 'Insertion Sort builds the final sorted array one item at a time by picking the next element and inserting it into its correct position among the already-sorted elements. Time: O(N²), Best: O(N), Space: O(1).',
      hinglishExplain: 'Taash ke patte (playing cards) sort karne jaisa! Naya card hath mein lo aur use uski sahi jagah par insert kar do. Almost sorted data ke liye super fast O(N).',
      code: `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift right
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`
    }),

    createDsaLesson({
      id: 'dsa-merge-sort',
      title: 'Merge Sort',
      emoji: '✂️🤝',
      difficulty: 'Intermediate',
      englishDef: 'Merge Sort is a Divide and Conquer algorithm that recursively divides the array into two halves, sorts them, and merges the sorted halves. Guaranteed Time: O(N log N), Space: O(N), Stable: Yes.',
      hinglishExplain: 'Array ko beech se aadha-aadha todte raho jab tak 1-1 element na bache, phir unhe order mein jod (merge) kar do. Hamesha guaranteed O(N log N) fast speed!',
      code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let res = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) res.push(left[i++]);
    else res.push(right[j++]);
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}`
    }),

    createDsaLesson({
      id: 'dsa-quick-sort',
      title: 'Quick Sort',
      emoji: '⚡',
      difficulty: 'Intermediate',
      englishDef: 'Quick Sort is a Divide and Conquer algorithm that picks a "Pivot" element and partitions the array such that smaller elements are on the left and larger on the right. Average Time: O(N log N), Space: O(log N) in-place.',
      hinglishExplain: 'Ek Pivot number chuno aur array ko 2 hisso mein baant do: chote number left mein aur bade number right mein. Real-world systems mein sabse fast sorting algorithm!',
      code: `function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[high], i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}`
    }),

    createDsaLesson({
      id: 'dsa-heap-sort',
      title: 'Heap Sort',
      emoji: '🏔️',
      difficulty: 'Advanced',
      englishDef: 'Heap Sort builds a Max-Heap from the array, repeatedly extracts the maximum element and places it at the end. Time: O(N log N) in all cases, Space: O(1) in-place.',
      hinglishExplain: 'Array ko Max-Heap banao aur top element (maximum) ko end mein bhejte jao. Zero extra memory O(1) space ke sath O(N log N) speed!',
      code: `// Heap Sort implementation using max-heapify`
    }),

    createDsaLesson({
      id: 'dsa-counting-sort',
      title: 'Counting Sort',
      emoji: '🔢',
      difficulty: 'Intermediate',
      englishDef: 'Counting Sort is a Non-Comparison sorting algorithm that counts element frequencies within a known integer range [0, K], running in O(N + K) linear time.',
      hinglishExplain: 'Non-comparison sort! Har number ka count store karo aur direct linear time O(N + K) mein sort karo.',
      code: `function countingSort(arr, maxVal) {
  const count = new Array(maxVal + 1).fill(0);
  for (let num of arr) count[num]++;
  let idx = 0;
  for (let i = 0; i <= maxVal; i++) {
    while (count[i]-- > 0) arr[idx++] = i;
  }
  return arr;
}`
    }),

    createDsaLesson({
      id: 'dsa-radix-sort',
      title: 'Radix Sort',
      emoji: '🏛️',
      difficulty: 'Advanced',
      englishDef: 'Radix Sort sorts numbers digit-by-digit from least significant digit (LSD) to most significant digit (MSD) using Counting Sort as a stable subroutine in O(D * (N + B)) time.',
      hinglishExplain: 'Pehle unit digit (ones), phir tens digit, phir hundreds digit ke hisaab se sort karna.',
      code: `// Radix Sort digit by digit processing`
    }),

    createDsaLesson({
      id: 'dsa-stable-vs-unstable-sort',
      title: 'Stable vs Unstable Sorting',
      emoji: '⚖️',
      difficulty: 'Intermediate',
      englishDef: 'A sorting algorithm is Stable if it preserves the relative original order of elements with equal keys (e.g. Merge Sort, Insertion Sort). It is Unstable if it may reorder equals (e.g. Quick Sort, Heap Sort).',
      hinglishExplain: 'Stable Sort: Agar do students ke exact same 85 marks hain, toh jo pehle tha wo sort hone ke baad bhi pehle hi rahega.',
      code: `// Stable: Merge Sort, Insertion Sort
// Unstable: Quick Sort, Heap Sort, Selection Sort`
    }),

    createDsaLesson({
      id: 'dsa-inplace-vs-outofplace-sort',
      title: 'In-Place vs Out-of-Place Sorting',
      emoji: '💾',
      difficulty: 'Intermediate',
      englishDef: 'In-Place algorithms require O(1) auxiliary memory by swapping within the input array (QuickSort, HeapSort). Out-of-Place algorithms require O(N) auxiliary space (MergeSort).',
      hinglishExplain: 'In-place = Bina extra array banaye usi array mein swap karna (O(1) memory). Out-of-place = Nayi array banana (O(N) memory).',
      code: `// In-Place: QuickSort, HeapSort
// Out-of-Place: MergeSort`
    }),

    createDsaLesson({
      id: 'dsa-sorting-complexity-comparison',
      title: 'Sorting Complexity Comparison Table',
      emoji: '📊',
      difficulty: 'Intermediate',
      englishDef: 'Complete summary matrix of Best, Average, Worst Time Complexity and Space Complexity across all 8 sorting algorithms.',
      hinglishExplain: 'Cheat Sheet:\n• Bubble/Selection/Insertion: O(N²) Time, O(1) Space\n• Merge Sort: O(N log N) Time, O(N) Space, Stable\n• Quick Sort: O(N log N) Avg, O(1) Space, Fast in practice\n• Heap Sort: O(N log N) Worst, O(1) Space\n• Counting Sort: O(N + K) Linear Time',
      code: `// Sorting Comparison Matrix`
    }),

    createDsaLesson({
      id: 'dsa-choosing-right-sorting-algo',
      title: 'Choosing the Right Sorting Algorithm',
      emoji: '🧠',
      difficulty: 'Intermediate',
      englishDef: 'Guidelines for production: use QuickSort/Timsort for general data, MergeSort for linked lists and stability, InsertionSort for small arrays (N < 50), and Counting/Radix for small integer ranges.',
      hinglishExplain: 'Interview rule: Small size ya almost sorted ho toh Insertion Sort; Stability aur linked list ho toh Merge Sort; Maximum speed chahiye toh Quick Sort.',
      code: `// Hybrid Sorts: Timsort (Merge + Insertion Sort)`
    })
  ]
}
