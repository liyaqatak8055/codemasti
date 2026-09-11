// Chapters 14 to 20: Core Algorithms (Searching, Sorting, Recursion, Backtracking, Greedy, Bit Manipulation, Math, Divide & Conquer)

export const algorithmsChapters = [
  {
    chapterTitle: 'Chapter 14 — Searching (Linear, Binary Search, Rotated Array & Search on Answer)',
    lessons: [
      {
        id: 'ds-searching-binary-search',
        title: 'Searching (Linear Search, Binary Search, Rotated Array & Lower/Upper Bound)',
        emoji: '🔍',
        xpReward: 45,
        badgeName: 'Search Specialist',
        readingTime: '11 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Har baar aadhi duniya eliminate! Bhai ye Binary Search algorithm hai ya strict selection process? 😂"',
          hint: '🤦 Masti Sir: "Binary Search sirf sorted array pe nahi lagta! Jab bhi answer space Monotonic ho (e.g. Min Feasible Speed), tab Binary Search on Answer lagao!"',
          success: '🥳 Masti Sir: "Search in Rotated Sorted Array aur Lower Bound conquer ho gaye!"',
          mistake: '😅 Masti Sir: "Integer overflow se bachne ke liye `mid = (low + high) / 2` ki jagah `mid = low + Math.floor((high - low) / 2)` likha karo!"'
        },
        englishDef: 'Binary Search is a divide-and-conquer algorithm that finds the position of a target value within a sorted array in O(log N) time. By comparing the target to the middle element, it eliminates half of the search space in each iteration. Advanced patterns include Search in Rotated Sorted Array, Lower/Upper Bound, and Binary Search on Answer (Predicate search).',
        hinglishExplain: 'Binary Search search space ko har step mein aadha (half) eliminate kar deta hai. 10 lakh elements mein linear search 10 lakh comparisons karega, jabki Binary Search sirf 20 comparisons mein answer nikal deta hai! Ye technique Rotated arrays aur optimization problems (Koko Eating Bananas, Capacity to Ship Packages) mein bhi use hoti hai.',
        storyExplain: 'Dictionary mein "Mango" shabd dhoondhna ho toh kya page 1 se ek-ek shabd padhte ho? Nahi! Beech ka page kholte ho. Agar "P" nikla toh pata chal gaya ki Mango left half mein hai, right half ko chhuo bhi mat! Yehi Binary Search hai! 📖🥭',
        funnyExample: {
          scenario: 'Number Guessing Game (1 to 100):\n- Linear Guesser: "1? No. 2? No. 3? No..." (Takes 100 tries 😫)\n- Binary Search Guesser: "50? Too high! 25? Too low! 37? Too low! 43? Correct!" (Found in 6 tries! ⚡)',
          punchline: 'Divide by two, conquer in a few!'
        },
        memoryTrick: 'Mid Calculation (Overflow Safe):\nmid = low + Math.floor((high - low) / 2)\nIf Monotonic Condition is satisfied: high = mid (or low = mid + 1)',
        visualDiagram: {
          title: 'Binary Search Halving Search Space (Target = 7)',
          nodes: [
            'Array: [1, 3, 5, 7, 9, 11, 13] (low=0, high=6, mid=3 val=7)',
            'Match Found at Index 3 in exactly 1 comparison!',
            'Worst case for N=1,000,000 is only 20 iterations (log2 10^6 ≈ 20)'
          ],
          type: 'flow'
        },
        code: `// Binary Search Masterclass
class SearchMastery {
  // 1. Classic Binary Search: O(log N) Time, O(1) Space
  static binarySearch(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) low = mid + 1;
      else high = mid - 1;
    }
    return -1;
  }

  // 2. Search in Rotated Sorted Array: O(log N) Time, O(1) Space
  static searchRotated(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === target) return mid;

      // Check if Left Half is Sorted
      if (nums[low] <= nums[mid]) {
        if (target >= nums[low] && target < nums[mid]) {
          high = mid - 1; // Target lies in sorted left half
        } else {
          low = mid + 1;  // Target lies in right half
        }
      }
      // Otherwise Right Half is Sorted
      else {
        if (target > nums[mid] && target <= nums[high]) {
          low = mid + 1;  // Target lies in sorted right half
        } else {
          high = mid - 1; // Target lies in left half
        }
      }
    }
    return -1;
  }

  // 3. Binary Search on Answer: Square Root of X: O(log X)
  static mySqrt(x) {
    if (x < 2) return x;
    let low = 1, high = Math.floor(x / 2), ans = 1;
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2);
      if (mid * mid === x) return mid;
      else if (mid * mid < x) {
        ans = mid; // Potential answer
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return ans;
  }
}

console.log("Binary Search 7 in [1,3,5,7,9,11]:", SearchMastery.binarySearch([1, 3, 5, 7, 9, 11], 7)); // 3
console.log("Search in Rotated [4,5,6,7,0,1,2] for 0:", SearchMastery.searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log("Sqrt of 25:", SearchMastery.mySqrt(25)); // 5`,
        languages: {
          javascript: `function search(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] === target) return m;
    if (nums[m] < target) l = m + 1; else r = m - 1;
  }
  return -1;
}`,
          python: `def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        m = (l + r) // 2
        if nums[m] == target: return m
        elif nums[m] < target: l = m + 1
        else: r = m - 1
    return -1`,
          java: `public class Solution {
    public int search(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (nums[m] == target) return m;
            if (nums[m] < target) l = m + 1; else r = m - 1;
        }
        return -1;
    }
}`,
          cpp: `#include <vector>

int search(const std::vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (nums[m] == target) return m;
        if (nums[m] < target) l = m + 1; else r = m - 1;
    }
    return -1;
}`,
          c: `int search(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (nums[m] == target) return m;
        if (nums[m] < target) l = m + 1; else r = m - 1;
    }
    return -1;
}`
        },
        codeBreakdown: [
          { part: 'mid = low + Math.floor((high - low) / 2)', label: 'Calculates midpoint safely without integer overflow risk in 32-bit systems', color: '#10b981' },
          { part: 'nums[low] <= nums[mid]', label: 'Identifies which half of the rotated array is strictly sorted', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Binary Search: O(log N), Rotated Search: O(log N), Linear Search: O(N)',
          space: 'O(1) auxiliary space'
        },
        commonMistakes: [
          '❌ `(low + high) / 2` likhna jo C++/Java mein large arrays (2^31-1) par integer overflow kar deta hai',
          '❌ Loop condition mein `low < high` likhna instead of `low <= high` (misses single element arrays)'
        ],
        edgeCases: [
          'Array with 1 element',
          'Target element not present in array',
          'Target element at extreme ends (first or last index)'
        ],
        bestPractices: [
          '✅ In Rotated array: Always check which half is sorted first before checking target boundaries',
          '✅ When finding minimum feasible capacity / speed, use Binary Search on Answer pattern'
        ],
        miniChallenge: 'How does Koko Eating Bananas problem use Binary Search on the speed range [1, max(piles)]?',
        quiz: {
          question: '1 Crore (10,000,000) sorted elements mein Binary Search ko worst-case mein maximum kitne comparisons lagenge?',
          options: ['10,000,000', '1,000,000', 'Sirf ~24 comparisons', '100,000'],
          answer: 'Sirf ~24 comparisons',
          explanation: 'log2(10,000,000) ≈ 23.25. Binary search har baar aadhi search space drop karta hai, isliye maximum 24 steps lagenge.'
        },
        summary: [
          'Binary Search cuts search space in half each iteration: O(log N)',
          'Rotated sorted arrays maintain at least one strictly sorted half at all times',
          'Binary Search on Answer applies whenever the validation predicate is monotonic (True/False boundary)'
        ],
        flashcard: {
          q: 'Lower Bound vs Upper Bound mein kya difference hai?',
          a: 'Lower Bound pehla element return karta hai jo `>= target` ho. Upper Bound pehla element return karta hai jo `> target` ho.'
        },
        funFact: 'SQL Database indexing (B+ Trees) disk storage se instant rows fetch karne ke liye Binary Search on block keys use karta hai!',
        interviewQuestions: [
          'Why does `low + (high - low) / 2` prevent integer overflow in comparison to `(low + high) / 2`?',
          'Explain how Binary Search on Answer works for optimization problems like Book Allocation or Shipping Capacity.',
          'How do you find the first and last position of an element in a sorted array in O(log N)?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 15 — Sorting Algorithms (Merge, Quick, Heap & Stability Analysis)',
    lessons: [
      {
        id: 'ds-sorting-algorithms-comparison',
        title: 'Sorting Algorithms (Merge Sort, Quick Sort, Heap Sort, Stability & Trade-offs)',
        emoji: '🔄',
        xpReward: 50,
        badgeName: 'Sorting Strategist',
        readingTime: '13 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Sorting matlab data ko disciplined banana! Merge Sort stable hai par O(N) memory leta hai, Quick Sort fast hai par worst case O(N^2) de sakta hai! Chalo dono ko master karte hain 😎"',
          hint: '🤦 Masti Sir: "Stable sort ka matlab: duplicate elements ka relative order sort hone ke baad bhi preserve rehta hai!"',
          success: '🥳 Masti Sir: "Merge Sort ka Divide & Conquer aur Quick Sort ka Partitioning dono master ho gaye!"',
          mistake: '😅 Masti Sir: "Merge Sort ke helper function mein left aur right arrays ko merge karte waqt indices ka dhyan rakhna!"'
        },
        englishDef: 'Sorting algorithms arrange elements in ascending or descending order. Comparison-based sorts (Merge Sort O(N log N) Stable, Quick Sort O(N log N) Avg In-Place, Heap Sort O(N log N) In-Place) have a theoretical lower bound of Ω(N log N). Non-comparison sorts (Counting Sort, Radix Sort) achieve O(N + K) linear time.',
        hinglishExplain: 'Sorting algorithms data ko ascending ya descending order mein arrange karte hain. Merge Sort array ko tod kar (Divide) merge karta hai (Conquer), jo hamesha O(N log N) time leta hai aur Stable hota hai. Quick Sort Pivot choose karke Partitioning karta hai jo super fast cache-friendly hota hai.',
        storyExplain: 'Cards khelte waqt hath mein aaye patte sort karna = Insertion Sort. College canteen mein do lines ko roll number wise ek single line mein jodna = Merge Sort! Class monitor sabse lambe student ko peeche bhejta hai = Bubble Sort! 🃏',
        funnyExample: {
          scenario: 'Sorting Comparison:\n- Bubble Sort / Selection Sort = Bailgaadi 🐂 (O(N^2) - 10^5 elements pe laptop garam!)\n- Merge Sort = Bullet Train 🚅 (O(N log N) guaranteed, but needs extra track memory)\n- Quick Sort = Sports Car 🏎️ (Super fast on average, drift master!)',
          punchline: 'Pick the right sort for the right memory budget!'
        },
        memoryTrick: 'Sorting Complexity Cheat Sheet:\nMerge Sort: Time O(N log N) | Space O(N) | Stable: YES\nQuick Sort: Time O(N log N) avg, O(N^2) worst | Space O(log N) | Stable: NO\nHeap Sort: Time O(N log N) | Space O(1) | Stable: NO',
        visualDiagram: {
          title: 'Merge Sort Divide & Conquer Tree',
          nodes: [
            '[38, 27, 43, 3, 9, 82, 10]',
            'Divide: [38, 27, 43, 3] and [9, 82, 10]',
            'Divide until single elements: [38] [27] [43] [3]',
            'Conquer & Merge: [27, 38] and [3, 43] -> [3, 27, 38, 43]',
            'Final Merged Sorted Array: [3, 9, 10, 27, 38, 43, 82]'
          ],
          type: 'tree'
        },
        code: `// Complete Merge Sort and Quick Sort Implementations
class SortingMastery {
  // 1. Merge Sort: O(N log N) Guaranteed, O(N) Space, Stable
  static mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid));
    const right = this.mergeSort(arr.slice(mid));
    return this.merge(left, right);
  }

  static merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) { // '<=' maintains stability
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  // 2. Quick Sort In-Place: O(N log N) Avg, O(1) Auxiliary Space (O(log N) recursion)
  static quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
      const pivotIndex = this.partition(arr, low, high);
      this.quickSort(arr, low, pivotIndex - 1);
      this.quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
  }

  static partition(arr, low, high) {
    const pivot = arr[high]; // Choose last element as pivot
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
}

const unsorted = [38, 27, 43, 3, 9, 82, 10];
console.log("Merge Sort Output:", SortingMastery.mergeSort(unsorted)); // [3, 9, 10, 27, 38, 43, 82]
console.log("Quick Sort Output:", SortingMastery.quickSort([...unsorted])); // [3, 9, 10, 27, 38, 43, 82]`,
        languages: {
          javascript: `// QuickSort Partition in JS
function quickSort(arr, l = 0, r = arr.length - 1) {
  if (l < r) {
    let p = partition(arr, l, r);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, r);
  }
  return arr;
}
function partition(arr, l, r) {
  let pivot = arr[r], i = l - 1;
  for (let j = l; j < r; j++) {
    if (arr[j] < pivot) { i++; [arr[i], arr[j]] = [arr[j], arr[i]]; }
  }
  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
  return i + 1;
}`,
          python: `def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1`,
          java: `public class QuickSort {
    public static void sort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high], i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int t = arr[i]; arr[i] = arr[j]; arr[j] = t;
            }
        }
        int t = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = t;
        return i + 1;
    }
}`,
          cpp: `#include <vector>
#include <algorithm>

int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; ++j) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
          c: `void swap(int* a, int* b) { int t = *a; *a = *b; *b = t; }

int partition(int arr[], int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`
        },
        codeBreakdown: [
          { part: 'left[i] <= right[j]', label: 'The <= condition guarantees that original duplicate order is preserved (Stability)', color: '#10b981' },
          { part: 'partition(arr, low, high)', label: 'Places pivot at exact sorted position and separates smaller vs larger numbers', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Merge Sort: O(N log N) always. Quick Sort: O(N log N) average, O(N^2) worst case if already sorted and poor pivot chosen.',
          space: 'Merge Sort: O(N) auxiliary. Quick Sort: O(log N) recursion stack space.'
        },
        commonMistakes: [
          '❌ Quick sort mein worst-case O(N^2) tab hota hai jab already sorted array par first/last element ko pivot chun liya jaye (Fix: Randomized Pivot or Median of Three)',
          '❌ Linked List sorting ke liye Quick Sort use karna (Merge Sort is superior for Linked Lists as it does not need extra memory for pointers)'
        ],
        edgeCases: [
          'Array with all duplicate elements (O(N) with 3-way Dutch National Flag partitioning)',
          'Already sorted array',
          'Reverse sorted array'
        ],
        bestPractices: [
          '✅ When stability is required (e.g. sorting by secondary keys): Use Merge Sort / Timsort',
          '✅ When memory is strictly constrained and in-place sorting is needed: Use Quick Sort / Heap Sort'
        ],
        miniChallenge: 'Why is Merge Sort the preferred sorting algorithm for Linked Lists while QuickSort is preferred for Arrays?',
        quiz: {
          question: 'Inme se kaunsa sorting algorithm Stable aur guaranteed O(N log N) time complexity deta hai?',
          options: ['Quick Sort', 'Merge Sort', 'Heap Sort', 'Selection Sort'],
          answer: 'Merge Sort',
          explanation: 'Merge Sort har case (Best, Average, Worst) mein O(N log N) rehta hai aur duplicate elements ke relative order ko preserve karta hai (Stable).'
        },
        summary: [
          'Merge Sort divides in half recursively and merges in O(N log N) with O(N) space',
          'Quick Sort partitions around a pivot in-place with O(N log N) average time',
          'Comparison-based sorting has a mathematical lower bound of Ω(N log N)'
        ],
        flashcard: {
          q: 'Timsort kya hota hai?',
          a: 'Timsort ek hybrid sorting algorithm hai jo Merge Sort aur Insertion Sort ko combine karta hai. Python (`sorted()`) aur Java (`Arrays.sort()` on objects) Timsort use karte hain.'
        },
        funFact: 'Chrome V8 engine aur Node.js ka `Array.prototype.sort()` internally Timsort use karta hai jo real-world partially sorted data par O(N) time mein execute hota hai!',
        interviewQuestions: [
          'What is a Stable Sorting algorithm, and why does stability matter in database query ordering?',
          'How does QuickSelect find the Kth smallest element in O(N) average time using Quick Sort partitioning?',
          'Prove why comparison-based sorting cannot beat O(N log N) time in the worst case using a Decision Tree model.'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 16 — Recursion (Call Stack, Base Cases & Recursion Trees)',
    lessons: [
      {
        id: 'ds-recursion-callstack',
        title: 'Recursion (Call Stack, Base Cases, Recursion Trees & Tail Recursion)',
        emoji: '🔄',
        xpReward: 45,
        badgeName: 'Recursion Rookie',
        readingTime: '11 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Function khud ko call kar raha hai! Masti Sir: Bhai kisi aur ko bula le! Function: Nahi, main hi jaunga! 😂"',
          hint: '🤦 Masti Sir: "Recursion ka sabse pehla niyam: BASE CASE! Agar base case nahi likha toh Call Stack overflow ho jayega aur program blast! 💥"',
          success: '🥳 Masti Sir: "Factorial, Fibonacci aur Recursion Trees crystal clear ho gaye!"',
          mistake: '😅 Masti Sir: "Base case return statement ke sath likhna mat bhoolna!"'
        },
        englishDef: 'Recursion is a programming technique where a function solves a problem by calling copies of itself on smaller subproblems until reaching a terminating Base Case. Every recursive call pushes an activation record onto the OS Call Stack.',
        hinglishExplain: 'Recursion ek aisa function hota hai jo apne aap ko bar-bar call karta hai jab tak ek simple terminating condition (Base Case) na aa jaye. Har recursive call computer ke Call Stack memory mein jama hoti hai. Jab base case hit hota hai, toh call stack unwind hokar answers return karta hai.',
        storyExplain: 'Russian Matryoshka Doll dekhi hai? Badi doll kholi toh andar chhoti doll nikli, uske andar aur chhoti doll... Aakhiri sabse chhoti doll (Base Case) jiske andar koi doll nahi hai! Wahan se hum dolls ko wapas ek-ek karke pack karte hain (Unwinding)! 🪆',
        funnyExample: {
          scenario: 'Recursion Phone Call Chain:\n- Kabir calls Rohan for homework → Rohan calls Priya → Priya calls Topper → Topper gives answer!\n- Answer travels backwards: Topper → Priya → Rohan → Kabir! 📞\n- Agar Topper na ho (No Base Case): Infinite call chain and phone bill bankruptcy (Stack Overflow)! 😂',
          punchline: 'No Base Case = Stack Overflow!'
        },
        memoryTrick: '3 Golden Rules of Recursion:\n1. Base Case (When to STOP)\n2. Recursive Call on smaller input (Progress towards base case)\n3. Combine results on return',
        visualDiagram: {
          title: 'Factorial(3) Call Stack Execution & Unwinding',
          nodes: [
            'fact(3) calls fact(2)',
            'fact(2) calls fact(1)',
            'fact(1) hits Base Case: returns 1',
            'Unwind: fact(2) = 2 * 1 = 2',
            'Unwind: fact(3) = 3 * 2 = 6'
          ],
          type: 'flow'
        },
        code: `// Recursion Masterclass
class RecursionMastery {
  // 1. Factorial: O(N) Time, O(N) Call Stack Space
  static factorial(n) {
    if (n <= 1) return 1; // Base Case
    return n * this.factorial(n - 1); // Recursive Step
  }

  // 2. Fibonacci with Recursion Tree: O(2^N) Naive
  static fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  // 3. Greatest Common Divisor (Euclid's GCD): O(log(min(a, b)))
  static gcd(a, b) {
    if (b === 0) return a; // Base Case
    return this.gcd(b, a % b); // Recursive Step
  }

  // 4. Reverse String via Recursion: O(N)
  static reverseString(str) {
    if (str.length <= 1) return str;
    return this.reverseString(str.slice(1)) + str[0];
  }
}

console.log("Factorial(5):", RecursionMastery.factorial(5)); // 120
console.log("GCD(48, 18):", RecursionMastery.gcd(48, 18)); // 6
console.log("Reverse 'codemasti':", RecursionMastery.reverseString("codemasti")); // 'itsamedoc'`,
        languages: {
          javascript: `function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);
}`,
          python: `def fact(n):
    return 1 if n <= 1 else n * fact(n - 1)`,
          java: `public class Recursion {
    public static int fact(int n) {
        return n <= 1 ? 1 : n * fact(n - 1);
    }
}`,
          cpp: `int fact(int n) {
    return n <= 1 ? 1 : n * fact(n - 1);
}`,
          c: `int fact(int n) {
    return n <= 1 ? 1 : n * fact(n - 1);
}`
        },
        codeBreakdown: [
          { part: 'if (n <= 1) return 1', label: 'Base Case stops infinite recursion and starts stack unwinding', color: '#10b981' },
          { part: 'n * fact(n - 1)', label: 'Breaks problem of size N down to subproblem of size N-1', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Factorial: O(N), GCD: O(log(min(a, b))), Naive Fibonacci: O(2^N)',
          space: 'O(N) Call Stack memory overhead proportional to maximum recursion depth'
        },
        commonMistakes: [
          '❌ Missing base case causing `RangeError: Maximum call stack size exceeded`',
          '❌ Recursive parameter input ko chhota na karna (e.g. `fact(n)` calling `fact(n)` instead of `fact(n-1)`)'
        ],
        edgeCases: [
          'n = 0 for Factorial (returns 1)',
          'Negative inputs (must be guarded against infinite recursion)',
          'Large N causing Call Stack Overflow'
        ],
        bestPractices: [
          '✅ Draw a Recursion Tree on paper to visualize branching factor and call stack depth',
          '✅ When recursive calls have overlapping subproblems, use Memoization / Dynamic Programming'
        ],
        miniChallenge: 'What is Tail Call Optimization (TCO), and why does `return factTail(n - 1, n * acc)` not consume extra stack space in supporting compilers?',
        quiz: {
          question: 'Recursion mein agar Base Case na likha jaye toh kya hoga?',
          options: [
            'Program O(1) mein execute ho jayega',
            'Call Stack bhar jayega aur Stack Overflow error aayega',
            'Output 0 aayega',
            'RAM automatically clear ho jayegi'
          ],
          answer: 'Call Stack bhar jayega aur Stack Overflow error aayega',
          explanation: 'Bina base case ke function endless memory frames create karta rahega jab tak OS ki allocated stack limit exhaust na ho jaye.'
        },
        summary: [
          'Recursion breaks complex problems into identical smaller subproblems',
          'Base Case is mandatory to prevent infinite stack frame allocation',
          'Recursion depth determines auxiliary space on the OS Call Stack'
        ],
        flashcard: {
          q: 'Tail Recursion kya hoti hai?',
          a: 'Jab function ka aakhiri statement sirf recursive call ho (bina kisi additional calculation ke), toh compiler use loop mein convert karke O(1) stack space mein execute kar sakta hai.'
        },
        funFact: 'Fractals nature mein (Snowflakes, Romanesco Broccoli, Lightning) mathematical recursion ke physical real-world examples hain!',
        interviewQuestions: [
          'How does the operating system stack frame manage local variables and return addresses during recursion?',
          'What is the difference between Head Recursion, Tree Recursion, and Tail Recursion?',
          'How do you convert any recursive function into an iterative one using an explicit Stack data structure?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 17 — Backtracking (Decision Trees, Subsets, Permutations & N-Queens)',
    lessons: [
      {
        id: 'ds-backtracking-subsets-queens',
        title: 'Backtracking (Choose, Explore, Unchoose Pattern, Subsets & N-Queens)',
        emoji: '♟️',
        xpReward: 50,
        badgeName: 'Backtrack Grandmaster',
        readingTime: '13 min',
        difficulty: 'Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Backtracking ka 3-step formula: CHOOSE karo, EXPLORE karo, agar raasta band mile toh UNCHOOSE (undo) karke wapas aa jao! Maze runner ki tarah! 🏃‍♂️"',
          hint: '🤦 Masti Sir: "Array me push kiya (Choose), recursive call ki (Explore), fir aate waqt `array.pop()` kiya (Unchoose)! Pop karna mat bhoolna!"',
          success: '🥳 Masti Sir: "Subsets, Permutations aur N-Queens teeno conquer ho gaye! 🔥"',
          mistake: '😅 Masti Sir: "Result mein `[...current]` copy push karna, direct `current` push karoge toh mutation se empty array store ho jayega!"'
        },
        englishDef: 'Backtracking is an algorithmic technique for solving problems incrementally by trying out options and abandoning (backtracking) a path as soon as it is determined that it cannot lead to a valid solution. It follows the Choose-Explore-Unchoose paradigm across a state-space Decision Tree.',
        hinglishExplain: 'Backtracking brute force ka ek smart version hai. Hum decision tree mein aage badhte hain (Choose & Explore). Jaise hi pata chalta hai ki ye rasta galat hai ya constraint violate ho gaya, hum turant ek kadam peeche aate hain (Unchoose / Backtrack) aur dusra rasta try karte hain.',
        storyExplain: 'Imagine tum ek bhool-bhulaiya (Maze) mein ho. Har mod par tum chalk se nishan banate ho (Choose) aur aage badhte ho (Explore). Agar aage dead-end (band rasta) milta hai, toh chalk ka nishan mitate hue pichle intersection par wapas aate ho (Unchoose) aur doosra rasta dhoondhte ho! 🌀',
        funnyExample: {
          scenario: 'N-Queens on Chessboard:\n- Place Queen at (0, 0) [Choose]\n- Try to place Queen 2 in next row [Explore]\n- All slots under attack! [Dead End]\n- Lift Queen 1 and move to (0, 1) [Unchoose & Try Next Slot] 👑',
          punchline: 'Make a choice, explore the path, undo if dead end!'
        },
        memoryTrick: 'Backtracking 3-Step Template:\ncurrent.push(candidate)  // 1. Choose\nbacktrack(nextState)     // 2. Explore\ncurrent.pop()            // 3. Unchoose (Backtrack)',
        visualDiagram: {
          title: 'Subsets Decision Tree for [1, 2]',
          nodes: [
            'Root: []',
            'Include 1 -> [1]  |  Exclude 1 -> []',
            'From [1]: Include 2 -> [1, 2]  |  Exclude 2 -> [1]',
            'From []:  Include 2 -> [2]     |  Exclude 2 -> []',
            'All Subsets Generated: [[], [1], [2], [1, 2]]'
          ],
          type: 'tree'
        },
        code: `// Backtracking Masterclass: Subsets, Permutations & Combination Sum
class BacktrackingMastery {
  // 1. Generate All Subsets (Power Set): O(2^N) Time, O(N) Space
  static subsets(nums) {
    const result = [];

    function backtrack(start, current) {
      result.push([...current]); // Snapshot copy!

      for (let i = start; i < nums.length; i++) {
        current.push(nums[i]);       // 1. Choose
        backtrack(i + 1, current);   // 2. Explore
        current.pop();               // 3. Unchoose
      }
    }

    backtrack(0, []);
    return result;
  }

  // 2. Generate All Permutations: O(N! * N) Time
  static permute(nums) {
    const result = [];
    const used = new Array(nums.length).fill(false);

    function backtrack(current) {
      if (current.length === nums.length) {
        result.push([...current]);
        return;
      }

      for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        used[i] = true;
        current.push(nums[i]);     // Choose
        backtrack(current);        // Explore
        current.pop();             // Unchoose
        used[i] = false;
      }
    }

    backtrack([]);
    return result;
  }
}

console.log("Subsets of [1, 2]:", BacktrackingMastery.subsets([1, 2])); // [[], [1], [1, 2], [2]]
console.log("Permutations of [1, 2, 3] Count:", BacktrackingMastery.permute([1, 2, 3]).length); // 6 (3!)`,
        languages: {
          javascript: `function subsets(nums) {
  const res = [];
  function bt(start, path) {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      bt(i + 1, path);
      path.pop();
    }
  }
  bt(0, []);
  return res;
}`,
          python: `def subsets(nums):
    res = []
    def bt(start, path):
        res.append(list(path))
        for i in range(start, len(nums)):
            path.append(nums[i])
            bt(i + 1, path)
            path.pop()
    bt(0, [])
    return res`,
          java: `import java.util.*;

public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> list = new ArrayList<>();
        backtrack(list, new ArrayList<>(), nums, 0);
        return list;
    }
    private void backtrack(List<List<Integer>> list, List<Integer> temp, int[] nums, int start) {
        list.add(new ArrayList<>(temp));
        for (int i = start; i < nums.length; i++) {
            temp.add(nums[i]);
            backtrack(list, temp, nums, i + 1);
            temp.remove(temp.size() - 1);
        }
    }
}`,
          cpp: `#include <vector>

void backtrack(int start, std::vector<int>& nums, std::vector<int>& path, std::vector<std::vector<int>>& res) {
    res.push_back(path);
    for (size_t i = start; i < nums.size(); ++i) {
        path.push_back(nums[i]);
        backtrack(i + 1, nums, path, res);
        path.pop_back();
    }
}

std::vector<std::vector<int>> subsets(std::vector<int>& nums) {
    std::vector<std::vector<int>> res;
    std::vector<int> path;
    backtrack(0, nums, path, res);
    return res;
}`,
          c: `// Subsets backtracking in C
#include <stdlib.h>
`
        },
        codeBreakdown: [
          { part: 'result.push([...current])', label: 'Takes a deep copy snapshot of current path because current is mutated during backtrack', color: '#10b981' },
          { part: 'current.pop()', label: 'Reverts the state back to previous state so sibling branches can be explored cleanly', color: '#ef4444' }
        ],
        complexity: {
          time: 'Subsets: O(2^N * N), Permutations: O(N! * N), N-Queens: O(N!)',
          space: 'O(N) recursion stack and temporary path storage'
        },
        commonMistakes: [
          '❌ `result.push(current)` likhna without copying `[...current]` (leaves result full of empty arrays due to shared reference)',
          '❌ Base case mein return lagana bhool jana jisse infinite recursion ho jaye'
        ],
        edgeCases: [
          'Empty array input (returns [[]])',
          'Array with duplicate numbers (Combination Sum II / Subsets II require sorting and duplicate skipping)'
        ],
        bestPractices: [
          '✅ When duplicates are present: Sort input first and skip `if (i > start && nums[i] === nums[i-1]) continue;`',
          '✅ Always remember the 3 steps: Choose → Explore → Unchoose'
        ],
        miniChallenge: 'How do you prune the search space in N-Queens using 3 boolean sets: cols, diag1 (r + c), and diag2 (r - c)?',
        quiz: {
          question: 'Backtracking mein `current.pop()` (Unchoose step) kyun mandatory hota hai?',
          options: [
            'Array size chhota karne ke liye',
            'Taaki current state clean ho jaye aur sibling branches ko independently explore kiya ja sake',
            'Output formatting ke liye',
            'CSS render karne ke liye'
          ],
          answer: 'Taaki current state clean ho jaye aur sibling branches ko independently explore kiya ja sake',
          explanation: 'Unchoose step state ko reset karta hai taaki jab algorithm parent node par wapas aaye, toh naya candidate bina purane candidate ke effect ke add ho sake.'
        },
        summary: [
          'Backtracking systematically searches all configuration spaces with early pruning',
          'Choose → Explore → Unchoose is the foundational 3-step paradigm',
          'Subsets generate 2^N states, while Permutations generate N! configurations'
        ],
        flashcard: {
          q: 'Backtracking vs Brute Force mein kya antar hai?',
          a: 'Brute force saari possible states generate karta hai chahe invalid hon, jabki Backtracking jaise hi koi partial solution invalid hota hai (e.g. Queen in danger), aage explore karne ke bajaye turant backtrack kar leta hai (Pruning).'
        },
        funFact: 'Sudoku solver bots aur Chess engine move generators (Minimax with Alpha-Beta Pruning) Backtracking decision trees par based hote hain!',
        interviewQuestions: [
          'Explain the Choose-Explore-Unchoose paradigm with an example.',
          'How do you avoid generating duplicate subsets when the input array contains duplicate elements?',
          'What is the state-space tree of N-Queens and how do diagonal checks prune the tree in O(1)?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 18 — Greedy Algorithms & Proofs of Correctness',
    lessons: [
      {
        id: 'ds-greedy-algorithms',
        title: 'Greedy Algorithms (Activity Selection, Fractional Knapsack, Jump Game & Gas Station)',
        emoji: '🤑',
        xpReward: 45,
        badgeName: 'Greedy Tactician',
        readingTime: '11 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Greedy algorithm har step par sabse Best (Local Optimum) choice leta hai bina aage-piche soche! Kabhi-kabhi FAANG crack karwa deta hai, kabhi-kabhi dhokha de deta hai 😂"',
          hint: '🤦 Masti Sir: "Greedy tabhi kaam karta hai jab Local Best = Global Best (Greedy Choice Property). Agar choices future par depend karein, toh Dynamic Programming lagti hai!"',
          success: '🥳 Masti Sir: "Activity Selection aur Jump Game Greedy proofs ke sath clear ho gaye!"',
          mistake: '😅 Masti Sir: "0/1 Knapsack par Greedy mat lagana, usme DP lagti hai! Fractional Knapsack par Greedy chalta hai!"'
        },
        englishDef: 'A Greedy Algorithm builds up a solution piece by piece, always choosing the next piece that offers the most immediate (locally optimal) benefit, hoping this leads to a globally optimal solution. It requires proving the Greedy Choice Property and Optimal Substructure.',
        hinglishExplain: 'Greedy algorithm har decision point par sabse faaydemand option (locally optimal choice) ko select karta hai bina future ke baare mein pachtaaye. Fractional Knapsack, Activity Selection, Jump Game, Dijkstra shortest path, aur Kruskal MST sabhi Greedy algorithms hain.',
        storyExplain: 'Coins Change ka socho (Standard currency: ₹10, ₹5, ₹2, ₹1). Agar ₹28 change dena ho, toh tum sabse pehle sabse bada note loge: 10 + 10 = 20, fir 5 = 25, fir 2 = 27, fir 1 = 28 (Total 5 coins). Ye Greedy approach yahan perfectly kaam karti hai! 🪙',
        funnyExample: {
          scenario: 'Buffet Strategy:\n- Greedy Eater: Plate mein sabse mehengi aur tasty dish pehle bhar lo (Local best)\n- Result: ₹1000 buffet mein ₹1500 ka paneer tikka kha liya! 😂\n- Failure case: Agar shuru mein hi cold drink pee li toh baad mein pet bhar jayega (Greedy failed!)',
          punchline: 'Grab the best now, but beware of future traps!'
        },
        memoryTrick: 'Greedy Verification Rule:\nCan picking the current best option ever prevent a better overall solution in the future? If NO -> Greedy works! If YES -> Use Dynamic Programming.',
        visualDiagram: {
          title: 'Jump Game Greedy Reachable Index Visualization',
          nodes: [
            'Array: [2, 3, 1, 1, 4]',
            'Index 0 (val=2): Max Reachable = max(0, 0+2) = 2',
            'Index 1 (val=3): Max Reachable = max(2, 1+3) = 4',
            'Target (index 4) reached in O(N) single pass!'
          ],
          type: 'flow'
        },
        code: `// Greedy Algorithms Masterclass
class GreedyMastery {
  // 1. Jump Game I: Can we reach the last index? O(N) Time, O(1) Space
  static canJump(nums) {
    let maxReachable = 0;
    for (let i = 0; i < nums.length; i++) {
      if (i > maxReachable) return false; // Trapped! Cannot jump here
      maxReachable = Math.max(maxReachable, i + nums[i]);
      if (maxReachable >= nums.length - 1) return true;
    }
    return true;
  }

  // 2. Activity Selection / Non-overlapping Intervals: O(N log N)
  static eraseOverlapIntervals(intervals) {
    if (!intervals.length) return 0;
    // Greedy choice: Sort by END time to finish as early as possible
    intervals.sort((a, b) => a[1] - b[1]);

    let removals = 0;
    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < prevEnd) {
        removals++; // Overlap detected, remove current interval
      } else {
        prevEnd = intervals[i][1]; // Accept interval
      }
    }
    return removals;
  }
}

console.log("Can jump [2, 3, 1, 1, 4]?", GreedyMastery.canJump([2, 3, 1, 1, 4])); // true
console.log("Can jump [3, 2, 1, 0, 4]?", GreedyMastery.canJump([3, 2, 1, 0, 4])); // false
console.log("Min removals for [[1,2],[2,3],[3,4],[1,3]]:", GreedyMastery.eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1`,
        languages: {
          javascript: `function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}`,
          python: `def can_jump(nums):
    max_reach = 0
    for i, jump in enumerate(nums):
        if i > max_reach: return False
        max_reach = max(max_reach, i + jump)
    return True`,
          java: `public class Solution {
    public boolean canJump(int[] nums) {
        int maxReach = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > maxReach) return false;
            maxReach = Math.max(maxReach, i + nums[i]);
        }
        return true;
    }
}`,
          cpp: `#include <vector>
#include <algorithm>

bool canJump(const std::vector<int>& nums) {
    int maxReach = 0;
    for (int i = 0; i < (int)nums.size(); ++i) {
        if (i > maxReach) return false;
        maxReach = std::max(maxReach, i + nums[i]);
    }
    return true;
}`,
          c: `#include <stdbool.h>

bool canJump(int* nums, int numsSize) {
    int maxReach = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i > maxReach) return false;
        if (i + nums[i] > maxReach) maxReach = i + nums[i];
    }
    return true;
}`
        },
        codeBreakdown: [
          { part: 'maxReachable = Math.max(maxReachable, i + nums[i])', label: 'Greedily tracks the furthest possible index reachable from any visited point', color: '#10b981' },
          { part: 'if (i > maxReachable) return false', label: 'If current index is beyond maximum reachable reach, we are permanently stuck', color: '#ef4444' }
        ],
        complexity: {
          time: 'Jump Game: O(N), Activity Selection: O(N log N) for sorting',
          space: 'O(1) auxiliary space'
        },
        commonMistakes: [
          '❌ 0/1 Knapsack par greedy value-to-weight ratio lagana (0/1 Knapsack requires DP; only Fractional Knapsack works with greedy)',
          '❌ Activity Selection mein start time se sort karna (must sort by END time to finish as early as possible)'
        ],
        edgeCases: [
          'Array with length 1 (always reachable, 0 jumps needed)',
          'Array with zeros preventing forward jumps (e.g. [3, 2, 1, 0, 4])'
        ],
        bestPractices: [
          '✅ When scheduling activities: Greedily pick the activity with earliest END time',
          '✅ When solving Greedy problems: Always think "Can I construct a counterexample where Greedy fails?"'
        ],
        miniChallenge: 'Why does the Coin Change problem fail with greedy approach for currency denominations [1, 3, 4] and target 6?',
        quiz: {
          question: 'Greedy algorithm kab fail ho sakta hai?',
          options: [
            'Kabhi fail nahi hota',
            'Jab local optimal choice global optimal solution ko block kar de',
            'Jab input numbers negative hon',
            'Kyunki memory kam hoti hai'
          ],
          answer: 'Jab local optimal choice global optimal solution ko block kar de',
          explanation: 'Agar current best choice future ke better paths ko eliminate kar de (jaise non-canonical coin systems ya 0/1 knapsack), toh greedy suboptimal answer deta hai.'
        },
        summary: [
          'Greedy makes the best immediate choice at every step without backtracking',
          'Jump Game tracks the furthest reachable boundary in O(N) time and O(1) space',
          'Activity selection greedily chooses intervals with the earliest finishing time'
        ],
        flashcard: {
          q: 'Greedy Choice Property kya hoti hai?',
          a: 'Ye property state karti hai ki globally optimal solution locally optimal (greedy) choices sequence se build kiya ja sakta hai bina past decisions ko revise kiye.'
        },
        funFact: 'Data compression standards (ZIP, MP3, JPEG) file size ko shrink karne ke liye Huffman Coding (Greedy Priority Queue algorithm) use karte hain!',
        interviewQuestions: [
          'How do you prove that a Greedy algorithm yields the optimal solution using an exchange argument?',
          'Why does the standard Coin Change problem work with greedy on USD/INR denominations but fail on arbitrary denominations like [1, 3, 4]?',
          'Explain the Gas Station circular tour problem and its linear O(N) Greedy proof.'
        ]
      }
    ]
  }
];
