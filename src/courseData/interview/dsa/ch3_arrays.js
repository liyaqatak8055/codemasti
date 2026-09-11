// Chapter 3 — Arrays (20 Comprehensive Lessons & Core Practice Problems)
import { createDsaLesson } from './dsaHelper.js'

export const ch3Arrays = {
  chapterTitle: 'Arrays',
  lessons: [
    createDsaLesson({
      id: 'dsa-what-is-an-array',
      title: 'What is an Array?',
      emoji: '📦',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'An array is a foundational data structure used to store an ordered collection of elements under a single variable name, where each element is accessed using a numerical index. In traditional low-level memory architectures, elements are placed in contiguous (adjacent) memory slots, enabling direct O(1) random access via arithmetic address calculation.',
      secondExplain: 'In low-level systems (like C/C++), arrays represent fixed-size contiguous memory blocks of a single data type. In modern high-level environments like JavaScript, Arrays are dynamic, flexible objects capable of holding mixed data types and resizing automatically under the hood, utilizing optimized internal representations (like contiguous memory for fast packed elements and dictionary mode for sparse arrays).',
      definitionHighlight: '📦 Array Fundamentals: Contiguous indexed collection | Direct O(1) Index Access | Address = Base + (Index × Size)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Arrays?',
        subtitle: 'Arrays replace messy, unscalable individual variables with a clean, high-performance indexed collection.',
        mappings: [
          { need: '🔴 1. The Nightmare of Individual Variables', ds: 'Managing 1,000 student marks with `mark1, mark2, ... mark1000` is impossible to loop through, sort, search, or maintain.' },
          { need: '🟢 2. Unified Collection with Loop Traversal', ds: 'A single array `marks = [85, 92, 78]` allows processing millions of records with clean `for` loops in linear time.' },
          { need: '⚡ 3. Instant O(1) Random Access via Index', ds: 'Knowing an element\'s position enables immediate direct access without scanning preceding elements.' },
          { need: '🗃️ 4. Hardware CPU Cache Friendliness', ds: 'Contiguous storage allows modern CPUs to prefetch neighboring elements into fast L1/L2 caches, accelerating traversal.' }
        ],
        takeaway: '💡 Arrays provide the simplest, fastest, and most cache-friendly way to store and traverse sequential data in computer science.'
      },
      comparisonTable: {
        title: 'Array Operations Master Complexity Table',
        headers: ['Operation', 'JavaScript Method / Syntax', 'Time Complexity (Traditional)', 'Time Complexity (Dynamic Array)', 'Why / Shifting Requirement'],
        rows: [
          { feature: 'Access by Index', data: 'arr[i]', ds: 'O(1)', third: 'O(1)', fourth: 'Direct mathematical address lookup: Base + (i * size)' },
          { feature: 'Update Element', data: 'arr[i] = newVal', ds: 'O(1)', third: 'O(1)', fourth: 'Direct overwrite of single memory slot' },
          { feature: 'Search (Unsorted)', data: 'arr.indexOf(val) / includes()', ds: 'O(N)', third: 'O(N)', fourth: 'Must scan elements one-by-one from start to finish' },
          { feature: 'Search (Sorted)', data: 'Binary Search algorithm', ds: 'O(log N)', third: 'O(log N)', fourth: 'Repeatedly cuts sorted search range in half' },
          { feature: 'Insert at Beginning', data: 'arr.unshift(val)', ds: 'O(N)', third: 'O(N)', fourth: 'All N existing elements must shift 1 position to the right' },
          { feature: 'Insert in Middle', data: 'arr.splice(index, 0, val)', ds: 'O(N)', third: 'O(N)', fourth: 'All elements after insertion index must shift right' },
          { feature: 'Insert at End', data: 'arr.push(val)', ds: 'O(1)', third: 'O(1) Amortized', fourth: 'Instant if capacity remains; O(N) only during rare buffer resize' },
          { feature: 'Delete from Beginning', data: 'arr.shift()', ds: 'O(N)', third: 'O(N)', fourth: 'All remaining elements must shift 1 position to the left' },
          { feature: 'Delete from Middle', data: 'arr.splice(index, 1)', ds: 'O(N)', third: 'O(N)', fourth: 'All elements after deletion index must shift left' },
          { feature: 'Delete from End', data: 'arr.pop()', ds: 'O(1)', third: 'O(1)', fourth: 'Direct removal of last item, zero elements shifted' },
          { feature: 'Traversal', data: 'for (let x of arr)', ds: 'O(N)', third: 'O(N)', fourth: 'Visits every element exactly once' }
        ],
        takeaway: '💡 End insertions/deletions (push/pop) are fast O(1), while beginning/middle operations (shift/unshift/splice) cost linear O(N) time due to memory shifting.'
      },
      tradeoffs: {
        title: 'Core Concepts: Memory Model & Static vs Dynamic Arrays',
        intro: 'Understanding how arrays function in physical memory and how languages handle dynamic sizing:',
        items: [
          {
            title: '1. The Contiguous Memory Model & Address Formula',
            desc: 'In RAM, elements occupy contiguous memory. Address = Base Address + (Index * Element Size). For Base = 1000 and Size = 4 bytes: arr[0] = 1000, arr[1] = 1004, arr[2] = 1008. This direct arithmetic yields O(1) random access.'
          },
          {
            title: '2. Why Zero-Based Indexing?',
            desc: 'The index represents the mathematical "offset" (distance) from the Base Address. The first element is 0 units away from the start: Address(arr[0]) = Base + 0 * Size = Base.'
          },
          {
            title: '3. Static Arrays (Fixed Size)',
            desc: 'Created with a fixed capacity at declaration (e.g. C `int arr[5]`). Cannot grow or shrink. Memory is reserved upfront with zero resizing overhead.'
          },
          {
            title: '4. Dynamic Arrays (Resizable Arrays)',
            desc: 'Under the hood, when capacity is exhausted, the engine allocates a new buffer of double capacity (2x), copies existing elements over (O(N)), and appends the new item. Because resizing happens rarely, appending has an Amortized O(1) time complexity.'
          },
          {
            title: '5. Array vs Linked List Trade-off',
            desc: 'Arrays provide O(1) index access and excellent CPU cache locality, but have O(N) middle insertions. Linked Lists allow O(1) insertions after a known node, but have O(N) sequential access and poor cache locality.'
          }
        ]
      },
      hinglishExplain: `Array ko simple Hinglish mein samjhein:

"Array ko ek numbered apartment building samjho. Har room ka ek unique number hai jise **Index** kehte hain. Agar tumhe room number pata hai, toh tum bina doosre rooms ko dekhe direct 1 second mein us room tak pahunch sakte ho!"

Core Terminology:
1. **Array (Building):** Saare elements ka ek unified collection.
2. **Element (Room Data):** Array ke andar stored actual value (number, string, object).
3. **Index (Room Number):** Element ki position (Hamesha 0 se start hoti hai!).
4. **Length (Total Rooms):** Array mein total kitne elements hain (\`arr.length\`).

Real-World Analogy:
\`\`\`javascript
const students = ["Rahul", "Neha", "Aman"];
// Index:           0        1        2
console.log(students[0]); // Rahul (Direct access -> O(1))
console.log(students[2]); // Aman (Direct access -> O(1))
\`\`\`

Kyun Index 0 Se Start Hota Hai?
Index ka matlab hota hai: "Base Address se kitni doori (Offset) par element hai."
Pehla element building ke gate (Base Address) par hi hota hai, isliye uska distance 0 hota hai!

🧠 Memory Line:
"Array = Ek line mein numbered boxes. Index 0 se start, Access direct, Search linear, Middle mein shift!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — 5,000 Students Ka Attendance Register:

Masti Sir ke school mein 5 students ke marks store karne the.

Pehle Masti Sir ne individual variables banaye:
let marks1 = 85;
let marks2 = 72;
let marks3 = 91;
let marks4 = 66;
let marks5 = 88;

Agli subah Principal Sir ne bola: "Sir, school mein 5,000 naye students aaye hain!"
Masti Sir shocked: "Arre baap re! Kya main marks1 se lekar marks5000 tak 5,000 variables likhoonga? Loop kaise chalaunga? Average kaise nikalunga?"

Phir Masti Sir ne create kiya ARRAY:
const marks = [85, 72, 91, 66, 88, ...];

Ab ek single line ke loop se 5,000 students ka average marks 1 millisecond mein calculate ho gaya:
\`\`\`javascript
let total = 0;
for (let score of marks) total += score;
let average = total / marks.length;
\`\`\`

Moral:
"Jab same type ya related data ka collection ho, Array tumhara sabse organized aur powerful dabba hai!"`,
      conceptMapping: [
        { emoji: '📦', item: 'Array', mapsTo: 'Ordered Collection of Elements under a Single Name' },
        { emoji: '🔢', item: 'Index', mapsTo: 'Zero-Based Numerical Position / Address Offset' },
        { emoji: '🧩', item: 'Element', mapsTo: 'Individual Value Stored at a Specific Index' },
        { emoji: '📏', item: 'Length', mapsTo: 'Total Count of Elements Currently Stored (N)' },
        { emoji: '🏠', item: 'Contiguous Memory', mapsTo: 'Adjacent RAM Addresses Calculated via Offset Math' },
        { emoji: '⚡', item: 'Random Access O(1)', mapsTo: 'Immediate Fetch via Address = Base + (Index × Size)' },
        { emoji: '🔍', item: 'Linear Search O(N)', mapsTo: 'Scanning Elements Sequentially until Target is Found' },
        { emoji: '🔄', item: 'Element Shifting', mapsTo: 'Moving Elements Left/Right on Insertion or Deletion' }
      ],
      realWorldVisualDiagram: {
        title: 'Array Architectural Layout & Contiguous Memory Model',
        pipeline: [
          { step: '1. Base Memory Allocation', desc: 'RAM allocates contiguous chunk starting at Base Address 1000' },
          { step: '2. Index 0 (Offset 0)', desc: 'Address: 1000 + (0 × 4) = 1000 | Value: 10' },
          { step: '3. Index 1 (Offset 1)', desc: 'Address: 1000 + (1 × 4) = 1004 | Value: 20' },
          { step: '4. Index 2 (Offset 2)', desc: 'Address: 1000 + (2 × 4) = 1008 | Value: 30' },
          { step: '5. Index 3 (Offset 3)', desc: 'Address: 1000 + (3 × 4) = 1012 | Value: 40' },
          { step: '6. Index 4 (Offset 4)', desc: 'Address: 1000 + (4 × 4) = 1016 | Value: 50 | Valid indices: 0 to 4 (Length = 5)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// ARRAY FUNDAMENTALS & ESSENTIAL OPERATIONS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. Array Creation & Direct Index Access (O(1))
const numbers = [10, 20, 30, 40, 50];

console.log("Array:", numbers);
console.log("First element (index 0):", numbers[0]); // 10 -> O(1)
console.log("Third element (index 2):", numbers[2]); // 30 -> O(1)
console.log("Last element:", numbers[numbers.length - 1]); // 50 -> O(1)
console.log("Array length:", numbers.length); // 5

// 2. Direct Update (O(1))
numbers[1] = 25; // Overwrite index 1 -> O(1)
console.log("After update at index 1:", numbers); // [10, 25, 30, 40, 50]

// 3. Fast End Operations (O(1))
numbers.push(60); // Append at end -> O(1) amortized
console.log("After push(60):", numbers);

const removedEnd = numbers.pop(); // Remove from end -> O(1)
console.log("After pop():", numbers, "| Removed:", removedEnd);

// 4. Shifting Operations (O(N))
numbers.unshift(5); // Insert at beginning -> O(N) (shifts all right)
console.log("After unshift(5):", numbers);

const removedStart = numbers.shift(); // Delete from beginning -> O(N) (shifts all left)
console.log("After shift():", numbers, "| Removed:", removedStart);`,
      output: `Array: [ 10, 20, 30, 40, 50 ]
First element (index 0): 10
Third element (index 2): 30
Last element: 50
Array length: 5
After update at index 1: [ 10, 25, 30, 40, 50 ]
After push(60): [ 10, 25, 30, 40, 50, 60 ]
After pop(): [ 10, 25, 30, 40, 50 ] | Removed: 60
After unshift(5): [ 5, 10, 25, 30, 40, 50 ]
After shift(): [ 10, 25, 30, 40, 50 ] | Removed: 5`,
      starterCodeExample: {
        title: '💻 Runnable Code: Array Manipulation Playground',
        code: `// Array Operations Interactive Lab\nconst arr = [10, 20, 30, 40];\n\n// 1. Direct Access & Update\nconsole.log("arr[2] before:", arr[2]); // 30\narr[2] = 99;\nconsole.log("arr[2] after:", arr[2]);  // 99\n\n// 2. End Operations: O(1)\narr.push(50); // [10, 20, 99, 40, 50]\nconsole.log("After push:", arr);\n\n// 3. Traversal: O(N)\nlet sum = 0;\nfor (let num of arr) sum += num;\nconsole.log("Total Sum:", sum);`
      },
      codeBreakdown: [
        { part: 'const numbers = [10, 20, 30, 40, 50]', label: 'Array Literal: Initializes an ordered, index-accessible dynamic collection.' },
        { part: 'numbers[0]', label: 'Direct Access O(1): Calculates Base Address + (0 * Size) to fetch the first element instantly.' },
        { part: 'numbers[numbers.length - 1]', label: 'Last Element Access: Valid indices span from 0 to length - 1.' },
        { part: 'numbers[1] = 25', label: 'Direct In-Place Update O(1): Overwrites value at memory slot corresponding to index 1.' },
        { part: 'numbers.push(60)', label: 'Push at End O(1): Appends element to the end without shifting existing items.' },
        { part: 'numbers.shift() / unshift()', label: 'Beginning Operations O(N): Requires shifting all N remaining elements across memory slots.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Execution Dry Run on [10, 20, 30, 40]',
        input: 'Array: [10, 20, 30, 40] (Base Address: 1000, 4 bytes/item)',
        target: 'Trace memory state and index mutations through all operations',
        steps: [
          { step: 1, condition: 'Initial Creation', evaluation: 'indices: [0: 10 (addr 1000), 1: 20 (addr 1004), 2: 30 (addr 1008), 3: 40 (addr 1012)]', action: 'Length = 4, valid indices = 0..3 ✅' },
          { step: 2, condition: 'Direct Access numbers[2]', evaluation: 'Address = 1000 + (2 × 4) = 1008', action: 'Directly returns 30 in O(1) time ✅' },
          { step: 3, condition: 'Update numbers[1] = 25', evaluation: 'Address 1004 overwritten with 25', action: 'Array becomes [10, 25, 30, 40] in O(1) time ✅' },
          { step: 4, condition: 'push(50)', evaluation: 'Stored at index 4 (addr 1016)', action: 'Array becomes [10, 25, 30, 40, 50] in O(1) amortized time ✅' },
          { step: 5, condition: 'pop()', evaluation: 'Index 4 removed, length decremented', action: 'Array reverts to [10, 25, 30, 40] in O(1) time ✅' },
          { step: 6, condition: 'shift()', evaluation: 'Index 0 (10) removed; 25->idx 0, 30->idx 1, 40->idx 2', action: 'Array becomes [25, 30, 40] in O(N) time due to 3 shifts ✅' }
        ]
      },
      operationComplexity: {
        title: '8 Real-World Applications of Arrays',
        intro: 'Why indexed collections form the backbone of software engineering:',
        rows: [
          { ds: 'Student Marks & Test Scores', op: '[85, 92, 78, 90]', comp: 'O(1) lookup', note: 'Direct student index access' },
          { ds: 'E-commerce Product Catalog', op: '[{id: 1, name: "Phone"}, ...]', comp: 'O(N) search', note: 'Filtering and listing products' },
          { ds: 'Employee ID Directory', op: '[101, 102, 103, 104]', comp: 'O(1) access', note: 'Fast numerical ID referencing' },
          { ds: 'Shopping Cart Items', op: 'cart.push(item)', comp: 'O(1) append', note: 'Adding purchased items' },
          { ds: '24-Hour Temperature Sensors', op: '[21.5, 22.0, 24.1, ...]', comp: 'O(1) hourly', note: 'Hourly indexed time-series data' },
          { ds: 'Gaming Leaderboard Scores', op: '[9990, 8500, 7200]', comp: 'O(1) top rank', note: 'Sorted high scores table' },
          { ds: 'Digital Image Pixels', op: 'Uint8ClampedArray(RGBA)', comp: 'O(1) pixel', note: 'Raw image raster graphics data' },
          { ds: 'GPS Route Coordinates', op: '[[lat1, lng1], [lat2, lng2]]', comp: 'O(N) track', note: 'Sequential navigation route plotting' }
        ],
        footnotes: [
          '* Arrays are best suited when elements are ordered sequentially and accessed frequently by index.',
          '* When frequent middle insertions or deletions are needed, consider Linked Lists or Tree structures.'
        ]
      },
      timeComplexity: 'Time Complexity: Access O(1), Update O(1), Search O(N), Append O(1) amortized, Shift/Unshift O(N)',
      timeComplexityExplain: 'Direct memory offset calculation gives instant O(1) access. Beginning and middle modifications require shifting elements, costing linear O(N) time.',
      spaceComplexity: 'Space Complexity: O(N) Total Storage | O(1) Auxiliary Space for standard in-place algorithms',
      spaceComplexityExplain: 'An array of size N occupies O(N) storage in memory. Operating on an existing array without creating new helper structures consumes O(1) auxiliary space.',
      memoryTrickText: `🧠 Memory Trick — The 4 Golden Array Rules:

• Index starts at 0       ──► Last item is at [length - 1]
• Access & Update        ──► Super-fast O(1) (Direct Math)
• Search & Traversal     ──► Linear O(N) (One by One)
• Push & Pop at End      ──► Instant O(1) (No Shifting)
• Shift & Unshift Start  ──► Slow O(N) (Everyone Shifts!)

Masti Sir Rule:
"Array = Numbered Boxes. Index 0 se start, Access direct, Search linear, Middle mein shift!"`,
      commonMistakes: [
        '❌ Mistake 1: Assuming array indices start at 1.\n✅ Correct: Arrays use 0-based indexing (0 to length - 1). Accessing arr[length] returns `undefined`.',
        '❌ Mistake 2: Confusing the element\'s value with its index position.\n✅ Correct: `arr[2]` is the value stored at position 2, NOT the number 2 itself.',
        '❌ Mistake 3: Assuming searching for a value in an unsorted array is O(1).\n✅ Correct: Access by index is O(1); searching for a specific value requires an O(N) linear scan.',
        '❌ Mistake 4: Believing `shift()` and `unshift()` are O(1) like `push()` and `pop()`.\n✅ Correct: Modifying the front of an array requires shifting all N elements in memory, costing O(N) time.',
        '❌ Mistake 5: Assuming JavaScript Arrays are identical to low-level C fixed-size arrays.\n✅ Correct: JS Arrays are dynamic objects with automatic resizing and adaptive engine optimizations.',
        '❌ Mistake 6: Confusing Total Space O(N) with Auxiliary Space O(1).\n✅ Correct: The given input array is O(N) input space; if your algorithm allocates no extra data structures, auxiliary space is O(1).',
        '❌ Mistake 7: Forgetting edge cases for empty arrays `[]` or single-element arrays `[x]`.\n✅ Correct: Always check `arr.length === 0` before accessing indices or calculating averages.',
        '❌ Mistake 8: Using `splice()` in a loop without realizing it creates an O(N²) nested shifting bottleneck.\n✅ Correct: Repeatedly splicing inside a loop shifts remaining elements on every iteration.',
        '❌ Mistake 9: Accessing negative indices like `arr[-1]` expecting Python-like behavior in JavaScript.\n✅ Correct: In JavaScript, `arr[-1]` returns `undefined` (use `arr.at(-1)` in modern JS).',
        '❌ Mistake 10: Assuming dynamic array `push()` is always O(1) worst-case.\n✅ Correct: `push()` is Amortized O(1); occasionally when the internal buffer is full, it resizes in O(N) time.'
      ],
      proTips: [
        '💡 In technical interviews: Always clarify if the given array is sorted (enabling O(log N) Binary Search) or unsorted (requiring O(N) Linear Search).',
        '💡 Boundary Safety: Always ensure loop conditions use `i < arr.length` (or `0 <= i <= N - 1`) to prevent out-of-bounds indexing.',
        '💡 Modern JS Last Element: Use `arr.at(-1)` instead of `arr[arr.length - 1]` for cleaner, more expressive syntax.',
        '💡 Array vs Set Trade-off: If you need fast O(1) duplicate checks rather than index ordering, use a `Set` instead of an Array.',
        '💡 Pre-allocating Capacity: If the final array size is known in advance, creating `new Array(size)` avoids multiple dynamic resizing passes.'
      ],
      topicQuestions: [
        {
          question: 'What is an Array in data structures?',
          answer: 'An array is an ordered data structure that stores a collection of elements identified by numerical indices. In traditional memory models, elements reside in contiguous memory locations.',
          explanation: 'It provides direct O(1) random access via arithmetic offset calculations.'
        },
        {
          question: 'Why does array indexing start from 0 instead of 1?',
          answer: 'Because the index represents the memory offset (distance) from the array\'s Base Address. The first element is stored directly at the Base Address (0 offset units away: Base + 0 * Size = Base).',
          explanation: '0-based indexing aligns directly with hardware memory address calculation.'
        },
        {
          question: 'Why is accessing an array element by index an O(1) operation?',
          answer: 'Because the CPU computes the exact memory address in a single arithmetic step using the formula: Address = Base Address + (Index × Element Size), requiring no iteration.',
          explanation: 'Constant-time random access is the primary superpower of arrays.'
        },
        {
          question: 'What is the difference between accessing an element and searching for an element in an array?',
          answer: 'Accessing means retrieving a value when its index is already known (O(1)). Searching means scanning the array to find which index contains a specific value (O(N) in unsorted arrays).',
          explanation: 'Access is instantaneous; search requires linear comparison of elements.'
        },
        {
          question: 'Why do insert and delete operations at the beginning of an array (shift/unshift) take O(N) time?',
          answer: 'Because when an element is inserted or deleted at index 0, all remaining N elements must be shifted in memory to maintain contiguous zero-based indexing.',
          explanation: 'Shifting N elements takes linear O(N) operations.'
        },
        {
          question: 'What is the difference between a Static Array and a Dynamic Array?',
          answer: 'A Static Array has a fixed size allocated upfront and cannot grow. A Dynamic Array automatically expands its capacity (usually doubling 2x) and copies elements when full.',
          explanation: 'C arrays are static; JavaScript Arrays and Python lists are dynamic.'
        },
        {
          question: 'What does "Amortized O(1)" mean for dynamic array push operations?',
          answer: 'It means that while an individual push that triggers a resize costs O(N) to copy elements, the vast majority of pushes take O(1) time. Averaged across N operations, the cost per append is O(1).',
          explanation: 'Resizing happens exponentially less frequently as capacity doubles.'
        },
        {
          question: 'How do JavaScript Arrays differ from traditional C arrays?',
          answer: 'Traditional C arrays are fixed-size, strictly typed, and contiguous in memory. JavaScript Arrays are dynamic, flexible objects capable of holding mixed types and resizing automatically.',
          explanation: 'JS engines optimize arrays into packed memory under the hood when elements are dense and uniform.'
        },
        {
          question: 'What is the difference between Input Space and Auxiliary Space for array algorithms?',
          answer: 'Input Space is the memory occupied by the given array of size N. Auxiliary Space is the extra memory allocated by your algorithm (e.g. O(1) for in-place algorithms, O(N) if a new array is created).',
          explanation: 'In-place array algorithms use O(1) auxiliary memory.'
        },
        {
          question: 'Why are arrays considered CPU cache-friendly?',
          answer: 'Because elements are stored contiguously in memory. When the CPU accesses arr[i], hardware cache prefetching automatically loads neighboring elements (arr[i+1], arr[i+2]) into fast L1/L2 cache lines.',
          explanation: 'Minimizes slow RAM memory fetches and accelerates sequential traversals.'
        },
        {
          question: 'What happens when you access an out-of-bounds index like `arr[10]` in an array of length 5 in JavaScript?',
          answer: 'JavaScript returns `undefined` without throwing a runtime index-out-of-bounds error.',
          explanation: 'In lower-level languages like C/C++, it leads to undefined behavior or segmentation faults.'
        },
        {
          question: 'When should you choose a Linked List over an Array?',
          answer: 'When your application requires frequent insertions and deletions at the beginning or middle of the collection, or when the dataset size fluctuates unpredictably without needing random index access.',
          explanation: 'Linked Lists insert in O(1) at the head, whereas arrays require O(N) shifting.'
        },
        {
          question: 'What is the valid index range for an array of length N?',
          answer: '0 to N - 1 (inclusive).',
          explanation: 'For an array of length 5, valid indices are 0, 1, 2, 3, and 4.'
        },
        {
          question: 'How does the modern JavaScript `.at()` method improve negative indexing?',
          answer: '`arr.at(-1)` retrieves the last element, `arr.at(-2)` retrieves the second-to-last element, eliminating the need to write `arr[arr.length - 1]`.',
          explanation: 'Provides clean negative indexing native to JavaScript.'
        },
        {
          question: 'Why is in-place array reversal O(N) time and O(1) space?',
          answer: 'Because two pointers (left and right) swap elements from both ends converging to the center in N/2 steps (O(N) time) using a single temporary swap variable (O(1) auxiliary space).',
          explanation: 'Requires zero additional array allocations.'
        }
      ],
      interviewQuestions: [
        'What is an Array in data structures?',
        'Why does array indexing start from 0 instead of 1?',
        'Why is accessing an array element by index an O(1) operation?',
        'What is the difference between accessing an element and searching for an element in an array?',
        'Why do insert and delete operations at the beginning of an array take O(N) time?',
        'What is the difference between a Static Array and a Dynamic Array?',
        'What does "Amortized O(1)" mean for dynamic array push operations?',
        'How do JavaScript Arrays differ from traditional C arrays?',
        'What is the difference between Input Space and Auxiliary Space for array algorithms?',
        'Why are arrays considered CPU cache-friendly?',
        'What happens when you access an out-of-bounds index in JavaScript?',
        'When should you choose a Linked List over an Array?',
        'What is the valid index range for an array of length N?',
        'How does the modern JavaScript .at() method improve negative indexing?',
        'Why is in-place array reversal O(N) time and O(1) space?'
      ],
      quizList: [
        {
          question: 'Q1. Given `const arr = [10, 20, 30, 40, 50]`, what is the value of `arr[2]`?',
          options: [
            '10',
            '20',
            '30',
            '40'
          ],
          answer: '30',
          explanation: 'With 0-based indexing: index 0 is 10, index 1 is 20, index 2 is 30.'
        },
        {
          question: 'Q2. What is the Time Complexity of accessing an element in an array by its index?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'Address arithmetic (Base + Index * Size) calculates the exact memory location in constant O(1) time.'
        },
        {
          question: 'Q3. What is the valid index range for an array containing N elements?',
          options: [
            '1 to N',
            '0 to N',
            '0 to N - 1',
            '1 to N - 1'
          ],
          answer: '0 to N - 1',
          explanation: 'Zero-based indexing spans from index 0 for the first element to index N-1 for the last element.'
        },
        {
          question: 'Q4. What is the Time Complexity of `arr.unshift(val)` (inserting at the beginning of an array)?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'Inserting at the beginning requires shifting all N existing elements one position to the right.'
        },
        {
          question: 'Q5. What is the Time Complexity of searching for an element in an unsorted array of size N?',
          options: [
            'O(1)',
            'O(log N)',
            'O(N)',
            'O(N log N)'
          ],
          answer: 'O(N)',
          explanation: 'Linear search must compare elements sequentially from index 0 to N-1 in the worst case.'
        },
        {
          question: 'Q6. Given Base Address = 1000 and Element Size = 4 bytes, what is the memory address of `arr[3]`?',
          options: [
            '1003',
            '1008',
            '1012',
            '1016'
          ],
          answer: '1012',
          explanation: 'Address = Base + (Index × Size) = 1000 + (3 × 4) = 1000 + 12 = 1012.'
        },
        {
          question: 'Q7. Why is `arr.push(val)` described as having an Amortized O(1) time complexity?',
          options: [
            'Because it always takes exactly 1 nanosecond',
            'Because individual resizes take O(N) but happen so rarely that the average cost per append is O(1)',
            'Because it operates from the beginning of the array',
            'Because it uses Binary Search'
          ],
          answer: 'Because individual resizes take O(N) but happen so rarely that the average cost per append is O(1)',
          explanation: 'Capacity doubling ensures that expensive resizing steps are distributed across many O(1) appends.'
        },
        {
          question: 'Q8. What does JavaScript return when accessing an index that does not exist (e.g. `arr[99]` on length 5)?',
          options: [
            'null',
            '0',
            'undefined',
            'Throws ArrayIndexOutOfBoundsException'
          ],
          answer: 'undefined',
          explanation: 'JavaScript returns `undefined` for non-existent object keys and out-of-range array indices.'
        },
        {
          question: 'Q9. What is the Auxiliary Space Complexity of reversing an array in-place using two pointers?',
          options: [
            'O(N)',
            'O(1)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'In-place reversal mutates the existing array using a single temporary swap variable, using O(1) extra space.'
        },
        {
          question: 'Q10. Why are arrays faster than Linked Lists for sequential traversal on modern hardware?',
          options: [
            'Because arrays use less code',
            'Because contiguous memory layout maximizes CPU L1/L2 cache prefetching',
            'Because Linked Lists cannot store numbers',
            'Because array indices are sorted'
          ],
          answer: 'Because contiguous memory layout maximizes CPU L1/L2 cache prefetching',
          explanation: 'Contiguous memory allows the CPU cache to prefetch blocks of elements, avoiding slow RAM memory fetches.'
        }
      ],
      quickRevision: {
        title: '📦 Quick Revision — What is an Array?',
        items: [
          { emoji: '🔢', title: 'Zero-Based Indexing', desc: 'Valid range: 0 to length - 1. First: arr[0], Last: arr[length - 1].' },
          { emoji: '⚡', title: 'O(1) Direct Access', desc: 'Address = Base + (Index × Size) computes exact memory location instantly.' },
          { emoji: '🔍', title: 'O(N) Linear Search', desc: 'Finding an unsorted value requires scanning elements one by one.' },
          { emoji: '🚀', title: 'Fast Push & Pop', desc: 'End operations are O(1) amortized because no elements need to be shifted.' },
          { emoji: '🐢', title: 'Slow Shift & Unshift', desc: 'Beginning operations take O(N) time because all N elements must shift in memory.' },
          { emoji: '🗃️', title: 'Cache Friendly', desc: 'Contiguous memory layout enables ultra-fast hardware CPU cache prefetching.' }
        ]
      },
      summary: [
        'An array is an ordered data structure that stores elements at contiguous memory locations accessible by index.',
        'Array indexing is zero-based (0 to N - 1) because the index represents the memory offset from the Base Address.',
        'Accessing and updating elements by index is an instantaneous O(1) operation.',
        'Searching for an element in an unsorted array takes linear O(N) time.',
        'Insertions and deletions at the end (push/pop) take O(1) time; at the beginning/middle (shift/unshift/splice), they take O(N) time due to element shifting.',
        'Dynamic arrays automatically resize by allocating a 2x buffer and copying elements, achieving Amortized O(1) append time.',
        'In-place array algorithms operate with O(1) auxiliary space, preserving valuable system memory.'
      ],
      faqs: [
        {
          q: 'What is an Array?',
          a: 'An array is an indexed collection of elements stored sequentially in memory, allowing direct O(1) access by index.'
        },
        {
          q: 'Why does array indexing start from 0?',
          a: 'Because the index represents the distance (offset) from the Base Address: Address = Base + (Index × Size). The first element has an offset of 0.'
        },
        {
          q: 'What is contiguous memory?',
          a: 'Contiguous memory means data elements are stored in adjacent, unbroken memory addresses one right after another in RAM.'
        },
        {
          q: 'Why is array access O(1)?',
          a: 'Because the CPU calculates the memory address in a single mathematical step without scanning previous items.'
        },
        {
          q: 'Is searching an array O(1)?',
          a: 'No. Searching for a specific value in an unsorted array requires checking elements one by one, which takes O(N) linear time.'
        },
        {
          q: 'Why is insertion in the middle of an array O(N)?',
          a: 'Because to make space for the new item, all subsequent elements must be shifted one position to the right in memory.'
        },
        {
          q: 'What is a dynamic array?',
          a: 'A dynamic array is an array that automatically expands its capacity (usually doubling) when full, providing resizable storage with amortized O(1) appends.'
        },
        {
          q: 'Is JavaScript Array a static array?',
          a: 'No. JavaScript Arrays are dynamic, high-level objects with automatic resizing and rich built-in methods.'
        },
        {
          q: 'What is auxiliary space for arrays?',
          a: 'Auxiliary space is the extra memory allocated by an algorithm beyond the original input array. In-place algorithms use O(1) auxiliary space.'
        },
        {
          q: 'When should I use an Array instead of a Linked List?',
          a: 'Use an array when you need fast O(1) index access, frequent traversals, or know the dataset size. Use a Linked List when you require frequent O(1) insertions/deletions at the head.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-why-arrays',
      title: 'Why Arrays?',
      emoji: '🎯',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'An array is a data structure that solves the problem of managing multiple related values. Instead of creating hundreds of separate variables, an array groups values under a single name and assigns each item a numerical index for easy, organized access.',
      secondExplain: 'Without arrays, writing programs that process lists of data (like student scores, product prices, or sensor readings) would require declaring individual variables (mark1, mark2, mark3) that cannot be processed in a loop. With an array, data is organized into a single container where known-index access is instantaneous (O(1)) and loops can easily calculate totals, find averages, or search for items.',
      definitionHighlight: '🎯 The Big Idea: One variable name holding multiple related values | Instant O(1) access when index is known',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Arrays?',
        subtitle: 'From messy, unmanageable individual variables to a clean, scalable indexed collection.',
        mappings: [
          { need: '🔴 1. The Nightmare of Separate Variables', ds: 'Managing 100 students requires 100 separate variables (mark1, mark2... mark100), making loops, sorting, and math impossible.' },
          { need: '🟢 2. Unified Collection under One Name', ds: 'A single array `const marks = [85, 92, 78, 90, 88]` holds all values in one organized container.' },
          { need: '🔢 3. Direct Access via Numerical Index', ds: 'You can instantly access any student\'s score using their index position (e.g. `marks[2]` gives 78 in O(1) time).' },
          { need: '🔄 4. Effortless Loop Processing & Algorithms', ds: 'A simple 3-line `for` loop can iterate through thousands of values to calculate totals, averages, or find the highest score.' }
        ],
        takeaway: '💡 Arrays allow you to store multiple related items in one place, access them by index, and process them with loops.'
      },
      comparisonTable: {
        title: 'Without Arrays vs With Arrays Comparison',
        headers: ['Aspect', 'Without Arrays (Individual Variables)', 'With Arrays (Indexed Collection)', 'Why It Matters'],
        rows: [
          { feature: 'Variable Declaration', data: 'mark1, mark2, mark3, mark4...', ds: 'const marks = [85, 92, 78, 90]', third: '1 clean variable instead of hundreds' },
          { feature: 'Processing with Loops', data: 'Impossible (Cannot loop over variable names)', ds: 'Easy (for let score of marks)', third: 'Process 1,000,000 items in 3 lines of code' },
          { feature: 'Accessing Specific Item', data: 'Must hardcode variable name `mark3`', ds: 'Dynamic lookup: `marks[i]`', third: 'Access any position dynamically at runtime' },
          { feature: 'Finding Max / Average', data: 'Complex manual nested comparisons', ds: 'Single linear O(N) pass', third: 'Standard algorithms work out of the box' },
          { feature: 'Scaling to 10,000 items', data: 'Code becomes completely unmaintainable', ds: 'Just add elements to the array', third: 'Scales effortlessly to massive datasets' }
        ],
        takeaway: '💡 Arrays turn unmanageable lists of independent variables into a structured, loopable collection.'
      },
      tradeoffs: {
        title: 'Core Concept: What Problem Does an Array Solve?',
        intro: 'Understanding why arrays are the first data structure every programmer learns:',
        items: [
          {
            title: '1. Grouping Related Data Together',
            desc: 'Instead of scattering student marks across separate memory variables, an array groups them into a single ordered collection under one descriptive name.'
          },
          {
            title: '2. Numerical Indexing (Zero-Based in JavaScript)',
            desc: 'Every item gets a position number starting from 0. `marks[0]` is the first item, `marks[1]` is the second item, and `marks[marks.length - 1]` is the last item.'
          },
          {
            title: '3. Instant O(1) Access When Index is Known',
            desc: 'If you already know the index position (e.g. "give me the score at index 2"), the computer fetches it instantly in O(1) time without scanning previous items.'
          },
          {
            title: '4. Searching for a Value Takes O(N) Time',
            desc: 'If you do NOT know the index and need to find "who scored 90?", the computer must scan elements one by one, which takes O(N) linear time.'
          }
        ]
      },
      hinglishExplain: `Why Arrays ko simple Hinglish mein samjhein:

"Agar tumhe 5 students ke marks store karne hon, toh tum 5 alag-alag variables bana sakte ho: \`mark1, mark2, mark3, mark4, mark5\`. Lekin agar school mein 1,000 students aa jayein, toh kya 1,000 variables likhoge? Bilkul nahi! Yahan kaam aata hai **Array**."

The Big Idea:
❌ Alag-alag variables ──► Loop nahi chal sakta ──► Code messy ho jata hai
✅ Ek Array ──► \`const marks = [85, 92, 78, 90, 88]\` ──► Loop se sab process ho jata hai!

Classroom Seat Analogy:
Classroom mein 5 numbered seats hain:
• Seat 0 ──► 85 marks (Rahul)
• Seat 1 ──► 92 marks (Neha)
• Seat 2 ──► 78 marks (Aman)
• Seat 3 ──► 90 marks (Priya)
• Seat 4 ──► 88 marks (Karan)

Agar teacher pooche: "Seat number 2 ka student kitna score laya?"
Tum seedha Seat 2 par jaoge aur bologe: "78!"
Yahi hota hai **Direct Index Access (O(1))**!

🧠 Golden Rule:
JavaScript mein array ka index hamesha **0** se start hota hai!`,
      storyExplain: `📖 Masti Sir Ki Kahani — 100 Students Ka Marksheet Chaos:

Masti Sir ke class mein 100 students the.

Pehle din Masti Sir ne code likha:
let mark1 = 85;
let mark2 = 92;
let mark3 = 78;
// ... mark100 tak!

Jab Principal Sir ne pucha: "Sir, class ka total average marks kitna hai?"
Masti Sir pareshaan ho gaye: "Average nikalne ke liye mujhe mark1 + mark2 + mark3 ... mark100 sabko manually add karna padega! Loop bhi nahi chala sakta!"

Phir Masti Sir ne banaya ARRAY:
const marks = [85, 92, 78, 90, 88, ...];

Ab Masti Sir ne bas 3 lines ka loop chalaya:
\`\`\`javascript
let total = 0;
for (let score of marks) {
  total += score;
}
let average = total / marks.length;
console.log("Class Average:", average);
\`\`\`

1 millisecond mein average nikal gaya!

Moral:
"Ek naam, bahut saare related data — Array tumhari coding life ko aasan banata hai!"`,
      conceptMapping: [
        { emoji: '📦', item: 'Array', mapsTo: 'One Single Variable Holding Multiple Related Values' },
        { emoji: '🔢', item: 'Index', mapsTo: 'Position Number Used to Access an Element (0, 1, 2...)' },
        { emoji: '🧩', item: 'Element', mapsTo: 'Actual Data Value Stored Inside a Slot' },
        { emoji: '📏', item: 'Length', mapsTo: 'Total Number of Elements in the Array (arr.length)' },
        { emoji: '⚡', item: 'Known Index Access', mapsTo: 'Direct Instant Fetch in O(1) Time' },
        { emoji: '🔍', item: 'Value Search', mapsTo: 'Scanning Items One by One in O(N) Linear Time' },
        { emoji: '🔄', item: 'Loop Traversal', mapsTo: 'Visiting Every Item Sequentially in O(N) Time' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Representation of an Array Structure',
        pipeline: [
          { step: 'Array Name: marks', desc: 'Single variable referencing the entire collection' },
          { step: 'Index 0: marks[0] = 85', desc: 'First element (Zero-based indexing)' },
          { step: 'Index 1: marks[1] = 92', desc: 'Second element' },
          { step: 'Index 2: marks[2] = 78', desc: 'Third element (Direct access in O(1))' },
          { step: 'Index 3: marks[3] = 90', desc: 'Fourth element' },
          { step: 'Index 4: marks[4] = 88', desc: 'Fifth element (Last index = length - 1 = 4)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// WHY ARRAYS: STORING & PROCESSING DATA EASILY IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. Grouping 5 student marks into 1 Array
const marks = [85, 92, 78, 90, 88];

// 2. Direct Access using Index (O(1))
console.log("First Student (index 0):", marks[0]); // 85
console.log("Third Student (index 2):", marks[2]); // 78
console.log("Last Student (index 4):", marks[marks.length - 1]); // 88
console.log("Total Students (length):", marks.length); // 5

// 3. Easy Loop Traversal (O(N)) to calculate Total & Average
let total = 0;
for (let i = 0; i < marks.length; i++) {
  console.log(\`Student at index \${i} scored: \${marks[i]}\`);
  total += marks[i];
}

const average = total / marks.length;
console.log("Total Marks:", total);
console.log("Class Average:", average);`,
      output: `First Student (index 0): 85
Third Student (index 2): 78
Last Student (index 4): 88
Total Students (length): 5
Student at index 0 scored: 85
Student at index 1 scored: 92
Student at index 2 scored: 78
Student at index 3 scored: 90
Student at index 4 scored: 88
Total Marks: 433
Class Average: 86.6`,
      starterCodeExample: {
        title: '💻 Runnable Code: Why Arrays Make Programming Easy',
        code: `// Array Traversal & Direct Access Demo\nconst scores = [85, 92, 78, 90, 88];\n\n// 1. Access by index: O(1)\nconsole.log("Score at index 2:", scores[2]); // 78\n\n// 2. Calculate sum with a loop: O(N)\nlet total = 0;\nfor (let s of scores) total += s;\nconsole.log("Average:", total / scores.length);`
      },
      codeBreakdown: [
        { part: 'const marks = [85, 92, 78, 90, 88]', label: 'Array Declaration: Stores 5 related student test scores in a single indexed collection.' },
        { part: 'marks[0]', label: 'Direct Access O(1): In JavaScript, array indexing starts from 0, so marks[0] retrieves the first element (85).' },
        { part: 'marks[2]', label: 'Known Index Lookup O(1): Directly accesses the 3rd element (78) in constant time.' },
        { part: 'marks.length', label: 'Length Property: Returns the total count of elements (5). Valid indices are 0 to length - 1.' },
        { part: 'for (let i = 0; i < marks.length; i++)', label: 'Loop Traversal O(N): Systematically visits each element one by one to compute total and average.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Index Access & Traversal',
        input: 'Array: marks = [85, 92, 78, 90, 88]',
        target: 'Trace direct index access and loop accumulator step-by-step',
        steps: [
          { step: 1, condition: 'Direct Access marks[2]', evaluation: 'CPU looks up index position 2 directly', action: 'Returns 78 in O(1) time ✅' },
          { step: 2, condition: 'Loop iteration i = 0', evaluation: 'marks[0] = 85, total = 0 + 85 = 85', action: 'Processes student 0 ✅' },
          { step: 3, condition: 'Loop iteration i = 1', evaluation: 'marks[1] = 92, total = 85 + 92 = 177', action: 'Processes student 1 ✅' },
          { step: 4, condition: 'Loop iteration i = 2', evaluation: 'marks[2] = 78, total = 177 + 78 = 255', action: 'Processes student 2 ✅' },
          { step: 5, condition: 'Loop iteration i = 3', evaluation: 'marks[3] = 90, total = 255 + 90 = 345', action: 'Processes student 3 ✅' },
          { step: 6, condition: 'Loop iteration i = 4', evaluation: 'marks[4] = 88, total = 345 + 88 = 433', action: 'Total = 433, Average = 433 / 5 = 86.6 ✅' }
        ]
      },
      operationComplexity: {
        title: 'Why Arrays: Operation-Specific Complexity Table',
        intro: 'Different array operations carry different computational costs:',
        rows: [
          { ds: 'Accessing Known Index (`marks[2]`)', op: 'O(1)', comp: 'Constant Time', note: 'Direct jump to position without scanning' },
          { ds: 'Updating Known Index (`marks[1] = 95`)', op: 'O(1)', comp: 'Constant Time', note: 'Direct overwrite of single slot' },
          { ds: 'Calculating Sum / Average (Loop)', op: 'O(N)', comp: 'Linear Time', note: 'Visits all N elements one-by-one' },
          { ds: 'Searching for a Value (`indexOf(78)`)', op: 'O(N)', comp: 'Linear Time', note: 'Must check items sequentially in unsorted array' },
          { ds: 'Storing Array in RAM', op: 'O(N)', comp: 'Linear Space', note: 'Memory proportional to total elements N' }
        ],
        footnotes: [
          '* Never assume every array operation is O(1). Only known-index access is O(1); searching and traversal require O(N) time.',
          '* In JavaScript, array indexing is always zero-based (0 to length - 1).'
        ]
      },
      timeComplexity: 'Time Complexity: Known-Index Access O(1) | Loop Traversal & Search O(N)',
      timeComplexityExplain: 'Accessing an element at a known index is instantaneous (O(1)). Processing all elements in a loop or searching an unsorted array takes linear time (O(N)).',
      spaceComplexity: 'Space Complexity: Array Storage O(N) | Auxiliary Space O(1)',
      spaceComplexityExplain: 'Storing N values in an array occupies O(N) memory. Reading or calculating averages in-place consumes O(1) auxiliary space.',
      memoryTrickText: `🧠 Memory Trick — Why Arrays?:

• Ek Naam       ──► Bahut saare related values
• Index Pata    ──► Direct Access ──► O(1)
• Value Dhoondo ──► Linear Search ──► O(N)
• Loop Chalao   ──► Har element process karo ──► O(N)

Golden Rule:
"JavaScript mein index hamesha 0 se start hota hai!"`,
      commonMistakes: [
        '❌ Mistake 1: Thinking `marks[1]` is the first element.\n✅ Correct: In JavaScript, `marks[0]` is the first element. `marks[1]` is the second element.',
        '❌ Mistake 2: Assuming arrays can only store numbers.\n✅ Correct: Arrays can store strings, booleans, objects, or even other arrays.',
        '❌ Mistake 3: Believing ALL array operations are O(1).\n✅ Correct: Only known-index access is O(1). Searching for an item by value takes O(N) time.',
        '❌ Mistake 4: Confusing array length with the last index.\n✅ Correct: An array with 5 elements has `length = 5`, but its last valid index is `4` (`length - 1`).',
        '❌ Mistake 5: Creating separate variables (`val1, val2`) for related data instead of using an array.\n✅ Correct: Always group related sequential data inside an array for clean loop processing.'
      ],
      proTips: [
        '💡 Zero-Based Rule: Always remember that in JavaScript, array indices run from `0` to `arr.length - 1`.',
        '💡 Accessing Last Element: Use `arr[arr.length - 1]` (or modern `arr.at(-1)`) to safely get the last item.',
        '💡 Before Coding: Ask yourself: "Do I know the index (O(1) access), or do I need to find a value (O(N) search)?"',
        '💡 Grouping Data: Use arrays whenever you have multiple items of the same category (scores, names, coordinates, prices).'
      ],
      topicQuestions: [
        {
          question: 'What is an Array and what problem does it solve?',
          answer: 'An array is a data structure that groups multiple related values under a single variable name. It solves the problem of having to create dozens of separate variables, making data organized and loopable.',
          explanation: 'It allows storing and processing lists of data cleanly.'
        },
        {
          question: 'Why are arrays useful in programming?',
          answer: 'Arrays allow: (1) storing many values in one variable, (2) accessing items directly by index in O(1) time, (3) traversing data with simple loops, and (4) easily applying sorting and searching algorithms.',
          explanation: 'They provide the foundation for organized data processing.'
        },
        {
          question: 'Why is accessing an array element by index O(1)?',
          answer: 'Because the computer directly jumps to the requested index position without needing to scan or inspect any preceding elements.',
          explanation: 'Direct index lookup takes a single constant-time step.'
        },
        {
          question: 'What is the difference between an array\'s length and its last index?',
          answer: 'The length is the total number of elements in the array (N). Because indexing starts from 0, the last valid index is always `length - 1`.',
          explanation: 'For 5 elements, length is 5 and the last index is 4.'
        },
        {
          question: 'Is searching for a value in an unsorted array O(1)?',
          answer: 'No! Searching requires checking elements one by one from index 0 to N-1, which takes linear O(N) time.',
          explanation: 'Only access by a known index is O(1); search by value is O(N).'
        }
      ],
      interviewQuestions: [
        'What is an Array and what problem does it solve?',
        'Why are arrays useful in programming?',
        'Why is accessing an array element by index O(1)?',
        'What is the difference between an array\'s length and its last index?',
        'Is searching for a value in an unsorted array O(1)?'
      ],
      quizList: [
        {
          question: 'Q1. Given `const arr = [10, 20, 30, 40]`, what is the value of `arr[2]`?',
          options: [
            '10',
            '20',
            '30',
            '40'
          ],
          answer: '30',
          explanation: 'JavaScript uses 0-based indexing: `arr[0] = 10`, `arr[1] = 20`, `arr[2] = 30`.'
        },
        {
          question: 'Q2. Why is using an array better than declaring 100 individual variables (`mark1, mark2...`)?',
          options: [
            'Because arrays use no memory',
            'Because an array groups values under one name and allows processing them with loops',
            'Because variables are not allowed in JavaScript',
            'Because arrays make every search take O(1) time'
          ],
          answer: 'Because an array groups values under one name and allows processing them with loops',
          explanation: 'Arrays allow clean iteration, indexing, and algorithmic manipulation.'
        },
        {
          question: 'Q3. For an array containing 5 elements, what is the index of the last element?',
          options: [
            '5',
            '4',
            '1',
            '0'
          ],
          answer: '4',
          explanation: 'Indices start at 0, so for 5 elements, the valid indices are 0, 1, 2, 3, 4 (`length - 1`).'
        },
        {
          question: 'Q4. What is the Time Complexity of accessing an element at a known index like `arr[3]`?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'Direct index lookup jumps directly to the position in constant O(1) time.'
        },
        {
          question: 'Q5. What is the Time Complexity of searching for a number in an unsorted array of size N?',
          options: [
            'O(1)',
            'O(log N)',
            'O(N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'In an unsorted array, the computer must scan elements one by one, taking linear O(N) time.'
        }
      ],
      quickRevision: {
        title: '🎯 Quick Revision — Why Arrays?',
        items: [
          { emoji: '📦', title: 'Array Definition', desc: 'One structure holding multiple related values under a single name.' },
          { emoji: '🔢', title: 'Zero-Based Indexing', desc: 'First element is at index 0; last element is at index length - 1.' },
          { emoji: '⚡', title: 'Known Index Access', desc: 'Direct lookup `arr[i]` takes instant O(1) time.' },
          { emoji: '🔍', title: 'Value Search', desc: 'Searching for a value in an unsorted array takes linear O(N) time.' },
          { emoji: '🔄', title: 'Loop Traversal', desc: 'Processing all elements with a loop takes O(N) time.' }
        ]
      },
      summary: [
        'An array groups multiple related values into a single indexed collection.',
        'Arrays eliminate the need for separate variables (mark1, mark2...) and enable clean loop processing.',
        'JavaScript arrays use zero-based indexing (0 to length - 1).',
        'Accessing an element at a known index is instantaneous (O(1)).',
        'Searching for a value or traversing all elements in a loop takes linear time (O(N)).'
      ],
      faqs: [
        {
          q: 'Why does array indexing start at 0 in JavaScript?',
          a: 'Because the index represents the offset (distance) from the start of the array. The first element has an offset of 0.'
        },
        {
          q: 'Why is accessing arr[i] O(1)?',
          a: 'Because the computer directly accesses the requested index position without needing to scan preceding elements.'
        },
        {
          q: 'Is searching an array O(1)?',
          a: 'No. Searching for a specific value in an unsorted array requires checking elements one by one, taking O(N) linear time.'
        },
        {
          q: 'What is the difference between array length and the last index?',
          a: 'Length is the total count of elements (N). The last valid index is always `length - 1` because indexing starts at 0.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-array-memory-representation',
      title: 'Array Memory Representation',
      emoji: '🧠',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'In physical computer memory (RAM), an array occupies an unbroken sequence of adjacent memory addresses called contiguous allocation. Because every element takes a fixed number of bytes, the computer calculates the exact memory location of any index using the formula: Address(arr[i]) = Base Address + (Index × Element Size).',
      secondExplain: 'In simple words: Array ke elements memory mein ek ke baad ek lagataar rakhe hote hain. Isliye kisi bhi index tak pahunchna koi guessing game nahi hota — CPU ek simple math formula calculate karke seedha us memory slot par 1 step mein jump karta hai, jisse index access hamesha O(1) constant time hota hai.',
      definitionHighlight: '🧠 Memory Formula: Address = Base Address + (Index × Element Size) | Why Indexing is O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Contiguous Memory Representation?',
        subtitle: 'How adjacent memory layout gives arrays their instantaneous random-access superpower.',
        mappings: [
          { need: '🔴 1. The Slowness of Scattered Memory', ds: 'If elements are placed randomly across RAM, the computer must follow memory pointers from one node to the next, taking linear O(N) time.' },
          { need: '🟢 2. Direct Arithmetic Address Calculation', ds: 'Contiguous slots allow jumping directly to any index in 1 calculation: `1000 + (2 × 4) = 1008`.' },
          { need: '⚡ 3. Hardware CPU Cache Optimization', ds: 'When the CPU fetches one array element, the hardware prefetcher loads neighboring elements into fast L1/L2 cache lines automatically.' },
          { need: '💾 4. Minimal Memory Overhead', ds: 'Traditional contiguous arrays store raw data back-to-back without wasting extra bytes on pointer addresses.' }
        ],
        takeaway: '💡 Contiguous memory allocation is the fundamental reason why array index access is instantaneous O(1) and CPU cache-friendly.'
      },
      comparisonTable: {
        title: 'Contiguous Array Memory vs Non-Contiguous Pointer Memory',
        headers: ['Feature', 'Contiguous Array Memory', 'Non-Contiguous Pointer Memory (Linked List)', 'Why It Matters'],
        rows: [
          { feature: 'RAM Layout', data: 'Adjacent, unbroken memory slots (1000, 1004, 1008)', ds: 'Scattered random slots across RAM', third: 'Predictable physical placement' },
          { feature: 'Access Mechanism', data: 'Mathematical formula: Base + (i * size)', ds: 'Follow pointers sequentially node-by-node', third: 'O(1) direct jump vs O(N) sequential traversal' },
          { feature: 'Extra Pointer Memory', data: '0 bytes extra (Pure raw data)', ds: '4 to 8 bytes pointer overhead per node', third: 'Arrays use RAM with maximum storage efficiency' },
          { feature: 'CPU Cache Prefetching', data: 'Excellent (Adjacent blocks loaded together)', ds: 'Poor (Frequent cache misses due to memory jumps)', third: 'Arrays run significantly faster on modern hardware' }
        ],
        takeaway: '💡 Contiguous allocation trades flexible resizing for maximum memory efficiency and lightning-fast O(1) random access.'
      },
      tradeoffs: {
        title: 'The Mathematics of Array Address Calculation',
        intro: 'Step-by-step breakdown of how the CPU translates an index into a physical RAM address:',
        items: [
          {
            title: '1. Base Address (The Starting Point)',
            desc: 'The memory address where the first element (`arr[0]`) is stored (e.g. Memory Address 1000).'
          },
          {
            title: '2. Element Size (Data Type Bytes)',
            desc: 'The fixed number of bytes each element occupies (e.g. 4 bytes for standard 32-bit integers, 8 bytes for 64-bit floats).'
          },
          {
            title: '3. Zero-Based Index as Offset',
            desc: 'Index `0` means zero offset from Base Address (`1000 + 0 * 4 = 1000`). Index `2` means an offset of 2 elements (`1000 + 2 * 4 = 1008`).'
          },
          {
            title: '4. High-Level Language Abstraction',
            desc: 'While low-level languages (C/C++) map directly to raw memory pointers, high-level engines (like JavaScript V8) optimize contiguous element buffers internally for dense arrays while abstracting pointer mechanics away from the developer.'
          }
        ]
      },
      hinglishExplain: `Array Memory Representation ko simple Hinglish mein samjhein:

"RAM ko ek lambi colony (street) samjho, jisme har plot ka ek unique memory number hota hai (jaise 1000, 1001, 1002...). Jab tum ek Array banate ho, computer RAM mein ek continuous unbroken block reserve kar leta hai."

Real-Life Example:
Socho 4 dost ek hotel mein 4 consecutive rooms book karte hain:
• Room 0 ──► Room #100 (Rahul)
• Room 1 ──► Room #104 (Neha)
• Room 2 ──► Room #108 (Aman)
• Room 3 ──► Room #112 (Priya)

Agar tumhe pata hai ki hotel ka pehla room 100 hai aur har room 4 units ka space leta hai:
Toh Aman (Index 2) ka room kya hoga?
\`\`\`text
Address = 100 + (2 × 4) = 108!
\`\`\`
Tumhe Room 100 aur Room 104 par knock karne ki zarurat hi nahi padi — tum seedha **Room 108** par pahunch gaye!

Yahi secret hai **O(1) Random Access** ka:
"CPU ko koi loop chalane ki zarurat nahi hoti, bas ek multiplication aur addition karke direct address par jump karta hai!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Hotel Room Allocation Simulator:

Masti Sir aur unke 4 students DSA competition ke liye hotel pahunche.

Scenario 1: Scattered Rooms (Bina Array Ke):
Manager ne bola: "Sir, ek room 1st floor par hai (Room 102), doosra 4th floor par (Room 415), teesra basement mein (Room 005)!"
Masti Sir pareshaan: "Har student se milne ke liye mujhe alag-alag floor par jaana pad raha hai! Bahut time lag raha hai (O(N) Traversal)!"

Scenario 2: Contiguous Array Rooms (Array Memory):
Manager ne bola: "Sir, main aapko ground floor par 4 continuous rooms deta hoon: Room 1000, 1004, 1008, 1012!"

Ab Masti Sir ne rule banaya:
"Base Address = 1000, Har room = 4 bytes.
Mujhe student 2 se milna hai $\rightarrow$ 1000 + (2 × 4) = Room 1008!
Direct jump $\rightarrow$ 1 second!"

Concept Connection:
"Jab memory continuous hoti hai, toh CPU seedha math calculation se 1 step mein element tak pahunch jata hai!"`,
      conceptMapping: [
        { emoji: '🏠', item: 'Base Address', mapsTo: 'Physical RAM Address of the First Element (Index 0)' },
        { emoji: '📏', item: 'Element Size', mapsTo: 'Number of Bytes Occupied per Item (e.g. 4 Bytes for int32)' },
        { emoji: '🔢', item: 'Index (Offset)', mapsTo: 'Number of Memory Steps from the Base Address' },
        { emoji: '🧮', item: 'Address Formula', mapsTo: 'Address = Base + (Index × Size)' },
        { emoji: '⚡', item: 'Direct O(1) Access', mapsTo: 'Single-Step Hardware CPU Arithmetic Calculation' },
        { emoji: '🗃️', item: 'CPU Cache Line', mapsTo: 'Hardware Prefetches Adjacent 64-Byte Contiguous Memory Blocks' }
      ],
      realWorldVisualDiagram: {
        title: '5-Step Memory Allocation & Address Resolution Flow',
        pipeline: [
          { step: '01. Array Declared', desc: '`const arr = [10, 20, 30, 40]` declares an indexed collection' },
          { step: '02. Contiguous Block Reserved', desc: 'RAM allocates unbroken sequence starting at Base Address 1000' },
          { step: '03. Elements Placed Side-by-Side', desc: 'Slot 1000 = 10 | Slot 1004 = 20 | Slot 1008 = 30 | Slot 1012 = 40' },
          { step: '04. Address Calculated for arr[2]', desc: 'CPU ALU evaluates: 1000 + (2 × 4) = 1008' },
          { step: '05. Direct O(1) Memory Fetch', desc: 'CPU reads value 30 from Address 1008 in constant time' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// ARRAY MEMORY REPRESENTATION & ADDRESS SIMULATION IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. Conceptual Memory Representation Function
function getMemoryAddress(baseAddress, index, elementSize) {
  // Address = Base Address + (Index * Element Size)
  return baseAddress + (index * elementSize);
}

// 2. Concrete Memory Mapping Simulation
const BASE_ADDRESS = 1000; // Starting address in RAM
const ELEMENT_SIZE = 4;    // 4 bytes per 32-bit integer
const arr = [10, 20, 30, 40];

console.log("--- Array Physical Memory Mapping ---");
for (let i = 0; i < arr.length; i++) {
  const address = getMemoryAddress(BASE_ADDRESS, i, ELEMENT_SIZE);
  console.log(\`Index \${i} | Value: \${arr[i]} | RAM Address: \${address}\`);
}

// 3. Direct O(1) Fetch Simulation for arr[2]
const targetIndex = 2;
const targetAddress = getMemoryAddress(BASE_ADDRESS, targetIndex, ELEMENT_SIZE);
console.log(\`\\nDirect Access for arr[\${targetIndex}]:\`);
console.log(\`Calculated Address: \${BASE_ADDRESS} + (\${targetIndex} * \${ELEMENT_SIZE}) = \${targetAddress}\`);
console.log(\`Fetched Value in O(1) time: \${arr[targetIndex]}\`);`,
      output: `--- Array Physical Memory Mapping ---
Index 0 | Value: 10 | RAM Address: 1000
Index 1 | Value: 20 | RAM Address: 1004
Index 2 | Value: 30 | RAM Address: 1008
Index 3 | Value: 40 | RAM Address: 1012

Direct Access for arr[2]:
Calculated Address: 1000 + (2 * 4) = 1008
Fetched Value in O(1) time: 30`,
      starterCodeExample: {
        title: '💻 Runnable Code: Memory Address Calculation Lab',
        code: `// Simulating Contiguous Memory Address Calculation\nfunction calculateAddress(base, index, size = 4) {\n  return base + (index * size);\n}\n\nconst base = 1000;\nconsole.log("arr[0] Address:", calculateAddress(base, 0)); // 1000\nconsole.log("arr[1] Address:", calculateAddress(base, 1)); // 1004\nconsole.log("arr[2] Address:", calculateAddress(base, 2)); // 1008\nconsole.log("arr[3] Address:", calculateAddress(base, 3)); // 1012`
      },
      codeBreakdown: [
        { part: 'baseAddress + (index * elementSize)', label: 'Address Arithmetic: Multiplies index offset by byte size and adds to Base Address in 1 CPU cycle.' },
        { part: 'BASE_ADDRESS = 1000', label: 'Base Address: The starting physical RAM location allocated for index 0.' },
        { part: 'ELEMENT_SIZE = 4', label: 'Byte Width: Standard integer allocation in memory (4 bytes per 32-bit number).' },
        { part: 'arr[targetIndex]', label: 'Direct O(1) Access: Hardware jumps straight to targetAddress without looping through earlier slots.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Memory Address Trace Table',
        input: 'Array: [10, 20, 30, 40] | Base Address = 1000 | Element Size = 4 Bytes',
        target: 'Trace arithmetic address resolution for all indices',
        steps: [
          { step: 1, condition: 'Index 0', evaluation: '1000 + (0 × 4) = 1000 + 0 = 1000', action: 'Directly points to 10 at Address 1000 (O(1)) ✅' },
          { step: 2, condition: 'Index 1', evaluation: '1000 + (1 × 4) = 1000 + 4 = 1004', action: 'Directly points to 20 at Address 1004 (O(1)) ✅' },
          { step: 3, condition: 'Index 2', evaluation: '1000 + (2 × 4) = 1000 + 8 = 1008', action: 'Directly points to 30 at Address 1008 (O(1)) ✅' },
          { step: 4, condition: 'Index 3', evaluation: '1000 + (3 × 4) = 1000 + 12 = 1012', action: 'Directly points to 40 at Address 1012 (O(1)) ✅' }
        ]
      },
      operationComplexity: {
        title: 'Memory Representation & Operation Complexities',
        intro: 'How contiguous memory directly dictates time and space complexity:',
        rows: [
          { ds: 'Index Access (`arr[2]`)', op: 'Address Arithmetic: 1 step', comp: 'O(1)', note: 'Base + (Index * Size)' },
          { ds: 'Direct Update (`arr[1] = 99`)', op: 'Memory overwrite: 1 step', comp: 'O(1)', note: 'Overwrites 4 bytes at Address 1004' },
          { ds: 'Sequential Traversal', op: 'Iterate N contiguous memory addresses', comp: 'O(N)', note: 'Cache prefetching accelerates reads' },
          { ds: 'Contiguous RAM Allocation', op: 'Reserve N * 4 bytes in RAM', comp: 'O(N) Space', note: 'Linear space with zero pointer overhead' }
        ],
        footnotes: [
          '* In low-level architectures, contiguous memory is fixed. In high-level JavaScript, engines manage contiguous arrays in optimized memory buffers.',
          '* Direct address calculation requires zero loop iterations, making known-index access strictly O(1).'
        ]
      },
      timeComplexity: 'Time Complexity: O(1) for Index Address Resolution | O(N) for Sequential Traversal',
      timeComplexityExplain: 'Computing the memory address takes a single multiplication and addition in CPU hardware (O(1)). Iterating through all contiguous slots takes linear time (O(N)).',
      spaceComplexity: 'Space Complexity: O(N) Contiguous Storage | O(1) Auxiliary Space',
      spaceComplexityExplain: 'An array with N elements occupies N × Element Size bytes of contiguous memory. Index address calculations require O(1) auxiliary memory.',
      memoryTrickText: `🧠 Memory Trick — The Street Address Formula:

• Base Address   ──► Colony ka Gate Number (1000)
• Index          ──► Kitne plot aage jaana hai (0, 1, 2...)
• Element Size   ──► Har plot ki width (4 bytes)

Formula:
"Address = Base + (Index × Size) ──► Direct Jump in O(1)!"`,
      commonMistakes: [
        '❌ Mistake 1: Thinking the CPU scans from index 0 to index 2 to fetch `arr[2]`.\n✅ Correct: The CPU calculates the address `Base + (2 * Size)` in 1 math step and jumps straight to memory.',
        '❌ Mistake 2: Assuming index 0 is at Address 1004 when Base Address is 1000.\n✅ Correct: Index 0 is at `1000 + 0 * 4 = 1000`. The first element has zero offset.',
        '❌ Mistake 3: Confusing Element Size (bytes) with Array Length (number of items).\n✅ Correct: Element size is the byte width of 1 item (e.g. 4 bytes); array length is total items (N).',
        '❌ Mistake 4: Believing JavaScript variables contain physical C-style memory pointers.\n✅ Correct: JavaScript engine handles memory internally; the contiguous address model is the foundational computer science concept behind all arrays.',
        '❌ Mistake 5: Assuming memory addresses increment by 1 for multi-byte data types.\n✅ Correct: For 4-byte integers, addresses increment by 4: 1000, 1004, 1008, 1012.'
      ],
      proTips: [
        '💡 Why 0-Based Indexing Works: Index 0 means "0 distance away from Base Address", aligning perfectly with computer hardware multiplication.',
        '💡 CPU Cache Lines: Modern CPUs fetch memory in 64-byte cache lines. A single fetch can load 16 contiguous 4-byte integers into the L1 cache at once!',
        '💡 TypedArrays in JS: For performance-critical audio, WebGL, or binary data, use `Int32Array` or `Float64Array` to get true contiguous byte arrays in JavaScript.'
      ],
      topicQuestions: [
        {
          question: 'What is contiguous memory allocation in arrays?',
          answer: 'Contiguous memory allocation means array elements are stored in adjacent, unbroken sequential memory addresses in RAM without gaps between them.',
          explanation: 'It enables direct address calculation and fast hardware cache prefetching.'
        },
        {
          question: 'What is the formula used to calculate the memory address of an array element?',
          answer: 'Address(arr[i]) = Base Address + (Index × Element Size).',
          explanation: 'Base Address is the start of the array; Element Size is the byte width of each element.'
        },
        {
          question: 'Why does contiguous memory representation allow O(1) random access?',
          answer: 'Because the CPU computes the exact destination memory address in a single arithmetic step (multiplication + addition) and fetches the value directly without scanning previous items.',
          explanation: 'Constant-time access requires no loops or search traversal.'
        },
        {
          question: 'If an array starts at Base Address 2000 and each integer takes 4 bytes, what is the address of arr[4]?',
          answer: 'Address = 2000 + (4 × 4) = 2000 + 16 = 2016.',
          explanation: 'Offset for index 4 is 4 × 4 = 16 bytes from base address 2000.'
        },
        {
          question: 'Why do arrays have better CPU cache locality than Linked Lists?',
          answer: 'Because array elements sit adjacent in memory, allowing CPU cache prefetchers to load entire contiguous blocks (cache lines) at once. Linked List nodes are scattered across RAM, causing frequent cache misses.',
          explanation: 'Contiguous layout drastically minimizes slow RAM memory fetches.'
        }
      ],
      interviewQuestions: [
        'What is contiguous memory allocation in arrays?',
        'What is the formula used to calculate the memory address of an array element?',
        'Why does contiguous memory representation allow O(1) random access?',
        'If an array starts at Base Address 2000 and each integer takes 4 bytes, what is the address of arr[4]?',
        'Why do arrays have better CPU cache locality than Linked Lists?'
      ],
      quizList: [
        {
          question: 'Q1. What is the mathematical formula for calculating the memory address of `arr[i]`?',
          options: [
            'Base Address + Index',
            'Base Address + (Index × Element Size)',
            'Base Address × Index + Element Size',
            'Index × Element Size'
          ],
          answer: 'Base Address + (Index × Element Size)',
          explanation: 'The memory location is the Base Address plus the total byte offset (Index × Element Size).'
        },
        {
          question: 'Q2. Given Base Address = 1000 and Element Size = 4 bytes, what is the memory address of `arr[2]`?',
          options: [
            '1002',
            '1004',
            '1008',
            '1012'
          ],
          answer: '1008',
          explanation: 'Address = 1000 + (2 × 4) = 1000 + 8 = 1008.'
        },
        {
          question: 'Q3. Why is array indexing zero-based in computer science?',
          options: [
            'Because computers cannot count to 1',
            'Because index represents the distance (offset) from the Base Address, and the first element has an offset of 0',
            'Because memory addresses must always be even numbers',
            'Because of a bug in early programming languages'
          ],
          answer: 'Because index represents the distance (offset) from the Base Address, and the first element has an offset of 0',
          explanation: 'Address(arr[0]) = Base + 0 * Size = Base Address directly.'
        },
        {
          question: 'Q4. If an array of 64-bit floats (8 bytes each) starts at Address 5000, what is the address of `arr[3]`?',
          options: [
            '5003',
            '5012',
            '5024',
            '5032'
          ],
          answer: '5024',
          explanation: 'Address = 5000 + (3 × 8) = 5000 + 24 = 5024.'
        },
        {
          question: 'Q5. Why does contiguous memory make array traversal faster on real CPU hardware?',
          options: [
            'Because it uses less electricity',
            'Because the CPU loads contiguous 64-byte blocks into fast L1/L2 cache lines automatically',
            'Because it eliminates all memory use',
            'Because it forces the computer to sort the data'
          ],
          answer: 'Because the CPU loads contiguous 64-byte blocks into fast L1/L2 cache lines automatically',
          explanation: 'Spatial locality allows hardware prefetchers to cache neighboring elements ahead of time.'
        }
      ],
      quickRevision: {
        title: '🧠 Quick Revision — Array Memory Representation',
        items: [
          { emoji: '🏠', title: 'Contiguous Layout', desc: 'Elements sit in adjacent, unbroken RAM memory slots.' },
          { emoji: '🧮', title: 'Address Formula', desc: 'Address = Base Address + (Index × Element Size).' },
          { emoji: '0️⃣', title: '0-Based Offset', desc: 'Index 0 is at Base + 0 * Size = Base Address.' },
          { emoji: '⚡', title: 'O(1) Direct Access', desc: 'CPU calculates destination address in 1 math step.' },
          { emoji: '🗃️', title: 'Cache Friendly', desc: 'Contiguous layout maximizes CPU L1/L2 cache line hits.' }
        ]
      },
      summary: [
        'In RAM, traditional arrays occupy contiguous memory addresses.',
        'Address calculation formula: Address(arr[i]) = Base Address + (Index × Element Size).',
        'Zero-based indexing exists because the index represents the offset distance from the Base Address.',
        'Direct address computation allows the CPU to access any known index in constant O(1) time.',
        'Contiguous allocation enables hardware CPU cache prefetching, making array traversals significantly faster than pointer-based data structures.'
      ],
      faqs: [
        {
          q: 'Why does array indexing start at 0?',
          a: 'Because index represents the offset (distance) from the Base Address. The first element is stored directly at Base Address (offset = 0).'
        },
        {
          q: 'Why is accessing arr[i] O(1)?',
          a: 'Because the CPU computes the exact memory address in a single arithmetic step (Base + Index * Size) without inspecting previous elements.'
        },
        {
          q: 'What is the difference between Base Address and Element Address?',
          a: 'Base Address is the starting memory location of the first element (index 0). Element Address is the location of a specific index calculated by adding the byte offset to the Base Address.'
        },
        {
          q: 'Do JavaScript arrays use contiguous memory in RAM?',
          a: 'Yes, modern JavaScript engines (like V8) optimize dense, uniform arrays into contiguous memory blocks under the hood for fast execution.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-creating-arrays',
      title: 'Creating Arrays',
      emoji: '🛠️',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Creating an Array means making a structured container in memory that stores multiple related values inside a single variable name, accessible via numerical indices.',
      secondExplain: 'Instead of creating separate individual variables (`mark1 = 85`, `mark2 = 90`, `mark3 = 78`), creating an array (`const marks = [85, 90, 78]`) groups values together so programs can easily iterate through them, access any item by index, and apply algorithms cleanly.',
      definitionHighlight: '🛠️ Core Concept: Bracket se banao `[]`, Fill se bharo `.fill()`, From se generate karo `Array.from()`',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Create Arrays?',
        subtitle: 'The practical problems solved when grouping individual values into an array.',
        mappings: [
          { need: '🔴 1. Managing 100 Individual Variables', ds: 'Declaring `mark1, mark2... mark100` is unmaintainable, repetitive, and impossible to loop through.' },
          { need: '📦 2. Store Related Values Together', ds: '`const marks = [85, 90, 78, 92, 88]` bundles all test scores in one clean, named container.' },
          { need: '🔢 3. Instant Zero-Based Indexing', ds: 'Accessing any student score is instant via its index (`marks[0]` is 85, `marks[1]` is 90).' },
          { need: '🔄 4. Effortless Loop Processing', ds: 'A single 3-line loop can calculate the class average or find the top score across thousands of entries.' }
        ],
        takeaway: '💡 Creating an array transforms loose, disconnected variables into an organized, loopable collection.'
      },
      comparisonTable: {
        title: '4 Practical Methods to Create Arrays in JavaScript',
        headers: ['Creation Method', 'JavaScript Syntax', 'Example Output', 'When to Use'],
        rows: [
          { feature: 'Method 1: Array Literal ⭐ (Recommended)', data: 'const fruits = ["Apple", "Mango", "Banana"]', ds: '["Apple", "Mango", "Banana"]', third: 'Standard everyday array creation when values are known upfront' },
          { feature: 'Method 2: Empty Array', data: 'const users = []', ds: '[] (length = 0)', third: 'When values will be collected or pushed dynamically later' },
          { feature: 'Method 3: Fixed Size + Fill', data: 'const scores = new Array(5).fill(0)', ds: '[0, 0, 0, 0, 0]', third: 'When you need a fixed-size array pre-filled with default values (e.g. DP tables)' },
          { feature: 'Method 4: Dynamic Generator', data: 'Array.from({ length: 5 }, (_, i) => i + 1)', ds: '[1, 2, 3, 4, 5]', third: 'When generating sequences, number ranges, or converting array-like objects' }
        ],
        takeaway: '💡 For 95% of everyday use cases, use the Array Literal `[]`. Use `.fill()` for pre-allocated buffers and `Array.from()` for generated sequences.'
      },
      tradeoffs: {
        title: '⚠️ Critical Difference: `[5]` vs `new Array(5)`',
        intro: 'One of the most common traps for JavaScript beginners:',
        items: [
          {
            title: '1. Array Literal: `[5]`',
            desc: 'Creates an array of length 1 containing the single number 5 at index 0. `[5][0] === 5`.'
          },
          {
            title: '2. Constructor: `new Array(5)`',
            desc: 'Creates an empty array of length 5 with 5 empty slots (holes). It does NOT contain the number 5! Accessing `new Array(5)[0]` returns `undefined`.'
          },
          {
            title: '3. Fixing Empty Slots with `.fill(0)`',
            desc: 'Always chain `.fill(0)` when using `new Array(size)` so all slots are populated with actual default values: `new Array(5).fill(0) -> [0, 0, 0, 0, 0]`.'
          }
        ]
      },
      hinglishExplain: `Creating Arrays ko simple Hinglish mein samjhein:

"Socho tumhare paas ek chocolate box hai. Har chocolate ko alag-alag dabbe mein nahi rakhte, balki ek hi box mein line se rakhte hain. Array bhi bilkul waise hi kaam karta hai!"

• Chocolate Box ──► Array (\`marks\`)
• Chocolate     ──► Value (\`85, 90, 78\`)
• Position      ──► Index (\`0, 1, 2\`)

The 4 Ways to Create Arrays:
1. **Array Literal \`[]\` (Sabse Best):**
   \`const marks = [85, 90, 78];\`
   Seedha bracket lagao aur values daal do.

2. **Empty Array \`[]\`:**
   \`const cart = [];\`
   Khali dabba banaya, items baad mein \`push()\` karenge.

3. **Pre-filled Array \`new Array(5).fill(0)\`:**
   \`const zeros = new Array(5).fill(0); // [0, 0, 0, 0, 0]\`
   Fixed size ka dabba banaya aur sabme default value 0 bhar di.

4. **Generated Sequence \`Array.from()\`:**
   \`const nums = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]\`
   Formula laga kar 1 se 5 tak numbers automatic generate kar diye!

🧠 One-Line Rule:
"Ek naam ──► Bahut saari related values!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Exam Marksheet Organization:

Masti Sir exam ke baad 5 students ke marks store kar rahe the.

Pehle Sir ne likha:
let mark1 = 85;
let mark2 = 90;
let mark3 = 78;
let mark4 = 92;
let mark5 = 88;

Masti Sir pareshaan ho gaye: "Agar class mein 100 students hote, toh kya main mark1 se mark100 tak likhta? Loop kaise chalata?"

Tabhi class ke topper ne suggest kiya:
"Sir, individual variables chhoro, ek ARRAY bana lo!"

Masti Sir ne likha:
\`const marks = [85, 90, 78, 92, 88];\`

Ab har student ka mark ek hi container mein organize ho gaya:
• \`marks[0] = 85\`
• \`marks[1] = 90\`
• \`marks[2] = 78\`

🧠 Lesson:
"Array banane ka main purpose hai related data ko ek jagah organize karna taaki loop chalana aasan ho jaye!"`,
      conceptMapping: [
        { emoji: '📦', item: 'Array Literal []', mapsTo: 'Creates an Array directly with given values' },
        { emoji: '📭', item: 'Empty Array []', mapsTo: 'Creates an empty list to add items later' },
        { emoji: '🟡', item: 'new Array(N).fill(val)', mapsTo: 'Pre-allocates N slots filled with default value' },
        { emoji: '🔵', item: 'Array.from()', mapsTo: 'Generates elements dynamically using an index formula' },
        { emoji: '⚠️', item: '[5] vs new Array(5)', mapsTo: 'Single element [5] vs 5 empty slots' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Creating an Array in Memory',
        pipeline: [
          { step: 'Step 1: Separate Values', desc: 'Values exist independently: [85], [90], [78]' },
          { step: 'Step 2: Declare Array', desc: '`const marks = [85, 90, 78]` groups them under one name' },
          { step: 'Step 3: Auto-Indexing', desc: 'Indices assigned automatically: 0 -> 85 | 1 -> 90 | 2 -> 78' },
          { step: 'Step 4: Use in Program', desc: '`marks[1]` accesses 90 directly in O(1) time' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// 4 COMMON WAYS TO CREATE ARRAYS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. Array Literal (⭐ Most Recommended)
const marks = [85, 90, 78];

// 2. Empty Array (Add values later)
const students = [];
students.push("Rahul");
students.push("Neha");

// 3. Fixed Size with Default Value (.fill)
const scores = new Array(5).fill(0);

// 4. Generated Number Sequence (Array.from)
const numbers = Array.from(
  { length: 5 },
  (_, i) => i + 1
);

console.log("1. Marks (Literal):", marks);
console.log("2. Students (Empty + Push):", students);
console.log("3. Scores (Filled with 0):", scores);
console.log("4. Numbers (Generated 1 to 5):", numbers);`,
      output: `1. Marks (Literal): [ 85, 90, 78 ]
2. Students (Empty + Push): [ 'Rahul', 'Neha' ]
3. Scores (Filled with 0): [ 0, 0, 0, 0, 0 ]
4. Numbers (Generated 1 to 5): [ 1, 2, 3, 4, 5 ]`,
      starterCodeExample: {
        title: '💻 Runnable Code: Array Creation Playground',
        code: `// 1. Literal Array\nconst fruits = ["Apple", "Mango", "Banana"];\nconsole.log("Fruits:", fruits);\n\n// 2. Pre-filled 0s\nconst zeros = new Array(4).fill(0);\nconsole.log("Zeros:", zeros); // [0, 0, 0, 0]\n\n// 3. Sequence 1 to 4\nconst seq = Array.from({ length: 4 }, (_, i) => i + 1);\nconsole.log("Sequence:", seq); // [1, 2, 3, 4]`
      },
      codeBreakdown: [
        { part: 'const marks = [85, 90, 78]', label: 'Array Literal: Creates an array directly with 3 elements at indices 0, 1, 2.' },
        { part: 'const students = []', label: 'Empty Array: Initializes a blank collection of length 0 ready for dynamic values.' },
        { part: 'new Array(5).fill(0)', label: 'Fill Method: Allocates 5 memory slots and sets each slot value to 0.' },
        { part: 'Array.from({ length: 5 }, (_, i) => i + 1)', label: 'Array.from: Generates 5 items by running index formula (i + 1) for i = 0..4.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Array.from() Sequence Generation',
        input: 'Array.from({ length: 5 }, (_, i) => i + 1)',
        target: 'Trace each index i and formula (i + 1) to build [1, 2, 3, 4, 5]',
        steps: [
          { step: 1, condition: 'Index i = 0', evaluation: 'Formula: 0 + 1 = 1', action: 'Slot at index 0 gets value 1 ✅' },
          { step: 2, condition: 'Index i = 1', evaluation: 'Formula: 1 + 1 = 2', action: 'Slot at index 1 gets value 2 ✅' },
          { step: 3, condition: 'Index i = 2', evaluation: 'Formula: 2 + 1 = 3', action: 'Slot at index 2 gets value 3 ✅' },
          { step: 4, condition: 'Index i = 3', evaluation: 'Formula: 3 + 1 = 4', action: 'Slot at index 3 gets value 4 ✅' },
          { step: 5, condition: 'Index i = 4', evaluation: 'Formula: 4 + 1 = 5', action: 'Slot at index 4 gets value 5 ✅' }
        ]
      },
      operationComplexity: {
        title: 'Creation Method Complexities',
        intro: 'Memory and computational costs of creating arrays of size N:',
        rows: [
          { ds: 'Array Literal `[val1, val2... valN]`', op: 'Allocates N elements', comp: 'Time O(N) | Space O(N)', note: 'Proportional to number of initial values' },
          { ds: 'Empty Array `[]`', op: 'Allocates empty buffer', comp: 'Time O(1) | Space O(1)', note: 'Instant zero-element initialization' },
          { ds: '`new Array(N).fill(val)`', op: 'Fills N memory slots', comp: 'Time O(N) | Space O(N)', note: 'Visits all N slots to write default value' },
          { ds: '`Array.from({ length: N }, fn)`', op: 'Calls generator function N times', comp: 'Time O(N) | Space O(N)', note: 'Evaluates callback for each index 0..N-1' }
        ],
        footnotes: [
          '* Memory space is always proportional to the number of created elements: Jitne elements create honge utni memory lagegi (O(N)).'
        ]
      },
      timeComplexity: 'Time Complexity: O(N) to initialize N elements | O(1) for empty array []',
      timeComplexityExplain: 'Creating an array with N elements takes linear O(N) time because memory must be initialized for all N slots.',
      spaceComplexity: 'Space Complexity: O(N) Total Allocation',
      spaceComplexityExplain: 'An array holding N elements consumes O(N) memory proportional to the number of items stored.',
      memoryTrickText: `🧠 Memory Formula — Creating Arrays:

• []                    ──► Ready Values
• [] Empty              ──► Add Later
• new Array(5).fill(0)  ──► Fixed Size + Same Value
• Array.from()          ──► Generate Values Automatically

Catchy Memory Line:
"Bracket se banao, Fill se bharo, From se generate karo!"`,
      commonMistakes: [
        '❌ Mistake 1: Confusing `[5]` with `new Array(5)`.\n✅ Correct: `[5]` is an array with 1 element (value 5). `new Array(5)` is an array of length 5 with empty holes.',
        '❌ Mistake 2: Thinking array indexing starts at 1.\n✅ Correct: In JavaScript, array indices always start at 0 (`marks[0]` is the first element).',
        '❌ Mistake 3: Assuming `new Array(5)` automatically initializes with zeros.\n✅ Correct: It creates empty slots. You must call `.fill(0)` to populate actual zeros.',
        '❌ Mistake 4: Forgetting `.fill(0)` when creating grid/table buffers.\n✅ Correct: `new Array(5).fill(0)` guarantees all slots contain valid 0 values.',
        '❌ Mistake 5: Using `new Array()` when a simple literal `[]` is cleaner and faster.\n✅ Correct: Always prefer `const arr = [1, 2, 3]` over `new Array(1, 2, 3)`.'
      ],
      proTips: [
        '💡 Default Choice: For 95% of coding problems, always use the simple Array Literal `[]`.',
        '💡 Empty List: When collecting results inside a loop, initialize with `const result = []` and use `result.push(item)`.',
        '💡 Fixed Buffers in DP: When solving Dynamic Programming problems, pre-fill with `new Array(n).fill(0)` or `new Array(n).fill(Infinity)`.',
        '💡 Number Ranges: Generate ranges easily with `Array.from({ length: N }, (_, i) => i + 1)` instead of writing manual loops.'
      ],
      topicQuestions: [
        {
          question: 'What does creating an array mean in JavaScript?',
          answer: 'It means allocating a structured container in memory that stores multiple related values under a single variable name, accessible via numerical indices.',
          explanation: 'It organizes data into an indexable collection.'
        },
        {
          question: 'Which array creation method is most recommended for everyday programming?',
          answer: 'The Array Literal `[]` (e.g. `const arr = [1, 2, 3]`), because it is concise, readable, and avoids constructor edge cases.',
          explanation: 'Literals are cleaner and standard in JavaScript.'
        },
        {
          question: 'What is the critical difference between `[5]` and `new Array(5)`?',
          answer: '`[5]` creates an array with 1 element whose value is 5. `new Array(5)` creates an array with length 5 containing empty slots (holes).',
          explanation: '`new Array(5)` does not contain the number 5 as its value.'
        },
        {
          question: 'What does the `.fill()` method do when chained with `new Array(N)`?',
          answer: 'It populates all N empty slots with a specified default value (e.g. `new Array(5).fill(0)` creates `[0, 0, 0, 0, 0]`).',
          explanation: 'Turns empty slots into concrete values.'
        },
        {
          question: 'When should you use `Array.from()` to create an array?',
          answer: 'When you need to dynamically generate sequences/ranges of numbers, or convert array-like iterable objects (like NodeLists or Strings) into real arrays.',
          explanation: 'It generates elements using an index mapping callback.'
        }
      ],
      interviewQuestions: [
        'What does creating an array mean in JavaScript?',
        'Which array creation method is most recommended for everyday programming?',
        'What is the critical difference between [5] and new Array(5)?',
        'What does the .fill() method do when chained with new Array(N)?',
        'When should you use Array.from() to create an array?'
      ],
      quizList: [
        {
          question: 'Q1. What is the value and length of `const a = [5]` in JavaScript?',
          options: [
            'Length = 5, values = [0, 0, 0, 0, 0]',
            'Length = 1, value at index 0 = 5',
            'Length = 5, values = [5, 5, 5, 5, 5]',
            'Length = 0, empty array'
          ],
          answer: 'Length = 1, value at index 0 = 5',
          explanation: 'The literal `[5]` creates an array of length 1 containing the number 5.'
        },
        {
          question: 'Q2. What does `new Array(3).fill(0)` produce?',
          options: [
            '[3, 3, 3]',
            '[0, 0, 0]',
            '[0, 1, 2]',
            '[undefined, undefined, undefined]'
          ],
          answer: '[0, 0, 0]',
          explanation: 'It creates an array of length 3 and fills every slot with 0.'
        },
        {
          question: 'Q3. What is the output of `Array.from({ length: 3 }, (_, i) => i * 2)`?',
          options: [
            '[0, 2, 4]',
            '[2, 4, 6]',
            '[0, 1, 2]',
            '[3, 3, 3]'
          ],
          answer: '[0, 2, 4]',
          explanation: 'For i = 0 -> 0; i = 1 -> 2; i = 2 -> 4.'
        },
        {
          question: 'Q4. Which method is the most recommended way to create a standard array with initial values?',
          options: [
            'Array Constructor: `new Array(1, 2, 3)`',
            'Array Literal: `[1, 2, 3]`',
            'Object Conversion: `Object.toArray()`',
            'String Splitting: `"1,2,3".split(",")`'
          ],
          answer: 'Array Literal: `[1, 2, 3]`',
          explanation: 'Array literal syntax is the cleanest, most performant, and standard way in JS.'
        },
        {
          question: 'Q5. What is the Time Complexity of creating an array with N elements using `new Array(N).fill(0)`?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'The engine must write the default value into all N memory slots, taking linear O(N) time.'
        }
      ],
      quickRevision: {
        title: '🛠️ 30 Second Revision — Creating Arrays',
        items: [
          { emoji: '📦', title: 'Array Meaning', desc: 'One container storing multiple related values under one name.' },
          { emoji: '💡', title: 'Recommended Method', desc: 'Array Literal `const arr = [1, 2, 3]` for general use.' },
          { emoji: '🟢', title: 'Empty Array', desc: '`const arr = []` when values will be pushed dynamically.' },
          { emoji: '🟡', title: 'Fill Method', desc: '`new Array(5).fill(0)` creates `[0, 0, 0, 0, 0]`.' },
          { emoji: '🔵', title: 'Array.from', desc: '`Array.from({ length: 5 }, (_, i) => i + 1)` generates `[1, 2, 3, 4, 5]`.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Bracket se banao, Fill se bharo, From se generate karo!"' }
        ]
      },
      summary: [
        'Creating an array allocates structured indexed storage for multiple related items.',
        'Array Literal `[]` is the standard and most recommended creation syntax in JavaScript.',
        '`[5]` creates an array with 1 item (5), whereas `new Array(5)` creates 5 empty slots.',
        'Chain `.fill(0)` with `new Array(N)` to populate slots with default values.',
        'Use `Array.from()` to dynamically generate sequences and number ranges in one line.'
      ],
      faqs: [
        {
          q: 'Which array creation method should beginners use most?',
          a: 'Always use the Array Literal syntax `[]` (e.g. `const arr = [1, 2, 3]`). It is the simplest, most readable, and safest.'
        },
        {
          q: 'Is `new Array()` bad to use?',
          a: 'It is not bad, but it can be confusing because `new Array(5)` creates 5 empty slots instead of the number 5. Use `[]` unless you specifically need `.fill()`.'
        },
        {
          q: 'Why do array indexes start at 0 in JavaScript?',
          a: 'Because the index represents the distance (offset) from the start of the array in memory. The first element has an offset of 0.'
        },
        {
          q: 'What is `.fill()` used for?',
          a: 'It fills all slots of an array with a static default value, commonly used for DP tables and frequency buffers.'
        },
        {
          q: 'When should I use `Array.from()`?',
          a: 'Use it when you want to generate number sequences (like 1 to N) or convert array-like structures into real arrays without manual loops.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-accessing-elements',
      title: 'Accessing Elements',
      emoji: '🔍',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Accessing an element means retrieving a stored value from an array using its numerical index position. In JavaScript, elements are fetched instantly using bracket notation `arr[index]` or the modern `.at(index)` method.',
      secondExplain: 'Array elements reside at predictable contiguous memory offsets. When you know an element\'s index (like `fruits[0]` or `fruits[2]`), the computer jumps directly to that memory position in constant O(1) time without scanning any other items.',
      definitionHighlight: '🔍 Core Rule: First Element = `arr[0]` | Last Element = `arr[arr.length - 1]` or `arr.at(-1)` | Time = O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Direct Element Access?',
        subtitle: 'The power of instant O(1) random memory lookup compared to sequential traversal.',
        mappings: [
          { need: '🔴 1. Sequential Walking in Linked Structures', ds: 'In linked lists, reaching the 500th element requires hopping through 500 pointers in linear O(N) time.' },
          { need: '⚡ 2. Instant O(1) Jump via Index', ds: '`arr[500]` computes the exact memory address in 1 CPU math cycle and fetches the value immediately.' },
          { need: '🎯 3. Foundation for Two-Pointer & Sliding Window', ds: 'Algorithms can read `arr[left]` and `arr[right]` simultaneously in constant time.' },
          { need: '🛡️ 4. Safe Boundary Handling in JavaScript', ds: 'Accessing an invalid index outside array bounds safely returns `undefined` without crashing the program.' }
        ],
        takeaway: '💡 Direct element access is the primary reason arrays are the default data structure for fast random lookups.'
      },
      comparisonTable: {
        title: 'Ways to Access Elements in JavaScript',
        headers: ['Access Technique', 'JavaScript Syntax', 'Example on `["A", "B", "C"]`', 'Behavior / Edge Case'],
        rows: [
          { feature: 'First Element', data: 'arr[0]', ds: 'arr[0] -> "A"', third: 'Index 0 is always the first item in zero-based indexing' },
          { feature: 'Middle Element', data: 'arr[i]', ds: 'arr[1] -> "B"', third: 'Direct O(1) jump to index i' },
          { feature: 'Last Element (Traditional)', data: 'arr[arr.length - 1]', ds: 'arr[3 - 1] -> "C"', third: 'Standard formula using array length' },
          { feature: 'Last Element (Modern JS)', data: 'arr.at(-1)', ds: 'arr.at(-1) -> "C"', third: 'Clean native syntax for negative index offsets' },
          { feature: 'Out of Bounds Access', data: 'arr[99]', ds: 'undefined', third: 'Returns `undefined` safely without throwing an exception' }
        ],
        takeaway: '💡 Use `arr[0]` for the first item, `arr[arr.length - 1]` or `arr.at(-1)` for the last item, and expect `undefined` for missing indices.'
      },
      tradeoffs: {
        title: 'The Critical Difference: Accessing vs Searching',
        intro: 'A fundamental distinction every DSA beginner must master:',
        items: [
          {
            title: '1. Accessing by Index: O(1) Instant',
            desc: 'When you ALREADY KNOW the index (`fruits[2]`), the CPU calculates the memory address in 1 step and fetches the value in O(1) time.'
          },
          {
            title: '2. Searching for a Value: O(N) Linear',
            desc: 'When you DO NOT know the index and must find "Banana", the computer must scan elements one by one (`fruits.indexOf("Banana")`), taking O(N) time in an unsorted array.'
          },
          {
            title: '3. Negative Indexing in JavaScript',
            desc: 'Bracket syntax `arr[-1]` looks for an object key named `"-1"` and returns `undefined`. Use `arr.at(-1)` for true negative offset access.'
          }
        ]
      },
      hinglishExplain: `Accessing Elements ko simple Hinglish mein samjhein:

"Array se kisi specific position ki value nikalne ko **Accessing** kehte hain. JavaScript mein hum square brackets \`arr[index]\` use karte hain."

Real-Life Gym Locker Analogy:
Gym mein numbered lockers hain:
• Locker 0 ──► "Apple"
• Locker 1 ──► "Mango"
• Locker 2 ──► "Banana"

Agar tumhare paas Locker #2 ki key hai, toh tum seedha Locker #2 kholte ho. Tumhe Locker #0 ya Locker #1 ko check karne ki zarurat nahi padti!
Yahi hota hai **Direct O(1) Access**.

Important Rules in JavaScript:
1. **Pehla Element:** Hamesha \`arr[0]\` hota hai.
2. **Aakhri Element:** Hamesha \`arr[arr.length - 1]\` ya modern JS mein \`arr.at(-1)\` hota hai.
3. **Out of Bounds Index:** Agar array mein 3 items hain aur tum \`arr[10]\` mangoge, toh JavaScript crash nahi karega, balki **\`undefined\`** return karega!

🧠 Simple Rule:
"Index pata hai ──► Seedha jump in O(1)!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — The "Index 3" Confusion:

Masti Sir ke paas 3 students ke marks the:
const marks = [85, 90, 78];

Masti Sir ne class ke ek student se bola: "Mujhe aakhri student ka marks print karke dikhao!"

Student ne jaldbazi mein likha:
console.log(marks[3]);

Output screen par aaya: \`undefined\`!

Student pareshaan ho gaya: "Sir, class mein total 3 students hain, toh index 3 par value kyun nahi aayi?"

Masti Sir muskuraye aur bole:
"Beta, computer counting **0** se start karta hai:
• Pehla student = Index 0 (85)
• Doosra student = Index 1 (90)
• Teesra student = Index 2 (78)

Total students 3 hain, isliye aakhri index hamesha **3 - 1 = 2** hoga!"

Student ne likha: \`marks[marks.length - 1]\` ──► Output: 78! ✅

🧠 Lesson:
"Total length agar N hai, toh aakhri index hamesha N - 1 hoga!"`,
      conceptMapping: [
        { emoji: '0️⃣', item: 'arr[0]', mapsTo: 'First element in the array (Zero-based indexing)' },
        { emoji: '🎯', item: 'arr[i]', mapsTo: 'Direct index access in instant O(1) time' },
        { emoji: '🔚', item: 'arr[length - 1]', mapsTo: 'Traditional last element access formula' },
        { emoji: '✨', item: 'arr.at(-1)', mapsTo: 'Modern JavaScript negative index for last element' },
        { emoji: '❓', item: 'arr[out_of_bounds]', mapsTo: 'Safely evaluates to `undefined` in JavaScript' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Array Index Access Resolution',
        pipeline: [
          { step: 'Array in Memory', desc: '`fruits = ["Apple", "Mango", "Banana"]` (Length = 3)' },
          { step: 'Lookup fruits[0]', desc: 'Direct jump to Index 0 ──► Returns "Apple" (O(1))' },
          { step: 'Lookup fruits[1]', desc: 'Direct jump to Index 1 ──► Returns "Mango" (O(1))' },
          { step: 'Lookup fruits[2]', desc: 'Direct jump to Index 2 ──► Returns "Banana" (O(1))' },
          { step: 'Lookup fruits[3]', desc: 'Index 3 does not exist (valid: 0..2) ──► Returns `undefined`' },
          { step: 'Lookup fruits.at(-1)', desc: 'Negative offset resolves to index 2 ──► Returns "Banana"' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// ACCESSING ARRAY ELEMENTS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

const fruits = ["Apple", "Mango", "Banana"];

// 1. Accessing First Element (Index 0)
console.log("First fruit (index 0):", fruits[0]); // "Apple"

// 2. Accessing Middle Element (Index 1)
console.log("Second fruit (index 1):", fruits[1]); // "Mango"

// 3. Accessing Last Element (Traditional Formula)
const lastIndex = fruits.length - 1;
console.log("Last fruit (arr[length - 1]):", fruits[lastIndex]); // "Banana"

// 4. Accessing Last Element (Modern .at() Method)
console.log("Last fruit (arr.at(-1)):", fruits.at(-1)); // "Banana"

// 5. Out of Bounds Access
console.log("Invalid index (fruits[99]):", fruits[99]); // undefined
console.log("Negative bracket (fruits[-1]):", fruits[-1]); // undefined`,
      output: `First fruit (index 0): Apple
Second fruit (index 1): Mango
Last fruit (arr[length - 1]): Banana
Last fruit (arr.at(-1)): Banana
Invalid index (fruits[99]): undefined
Negative bracket (fruits[-1]): undefined`,
      starterCodeExample: {
        title: '💻 Runnable Code: Array Access Playground',
        code: `const scores = [85, 90, 78];\n\n// 1. Direct Access: O(1)\nconsole.log("First (idx 0):", scores[0]);   // 85\nconsole.log("Last (at -1):", scores.at(-1)); // 78\n\n// 2. Out of bounds check\nconsole.log("Invalid:", scores[5]);         // undefined`
      },
      codeBreakdown: [
        { part: 'fruits[0]', label: 'First Element: Retrieves the value stored at offset 0 ("Apple") in O(1) time.' },
        { part: 'fruits[fruits.length - 1]', label: 'Last Element: Calculates index 3 - 1 = 2 to access "Banana".' },
        { part: 'fruits.at(-1)', label: 'Modern .at(): Native method that counts backwards from the end of the array.' },
        { part: 'fruits[99]', label: 'Out of Bounds: Index 99 does not exist, so JavaScript safely returns undefined.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Evaluating Multiple Index Lookups',
        input: 'Array: fruits = ["Apple", "Mango", "Banana"] (Length = 3)',
        target: 'Trace each index evaluation and resolved output',
        steps: [
          { step: 1, condition: 'fruits[0]', evaluation: 'Index 0 is within range (0..2)', action: 'Returns "Apple" in O(1) time ✅' },
          { step: 2, condition: 'fruits[1]', evaluation: 'Index 1 is within range (0..2)', action: 'Returns "Mango" in O(1) time ✅' },
          { step: 3, condition: 'fruits[2]', evaluation: 'Index 2 is within range (0..2)', action: 'Returns "Banana" in O(1) time ✅' },
          { step: 4, condition: 'fruits[3]', evaluation: 'Index 3 >= length (3)', action: 'Index does not exist ──► returns undefined ✅' },
          { step: 5, condition: 'fruits.at(-1)', evaluation: 'Length + (-1) = 3 - 1 = 2', action: 'Returns "Banana" in O(1) time ✅' }
        ]
      },
      operationComplexity: {
        title: 'Access Operation Complexities',
        intro: 'Time and space complexity characteristics for accessing array elements:',
        rows: [
          { ds: 'Access First Element (`arr[0]`)', op: 'Direct Memory Jump', comp: 'Time O(1) | Space O(1)', note: 'Base Address + (0 * Size)' },
          { ds: 'Access Any Index (`arr[i]`)', op: 'Direct Memory Jump', comp: 'Time O(1) | Space O(1)', note: 'Base Address + (i * Size)' },
          { ds: 'Access Last Element (`arr.at(-1)`)', op: 'Offset Calculation', comp: 'Time O(1) | Space O(1)', note: 'Evaluates length - 1 in 1 step' },
          { ds: 'Search by Value (`indexOf("X")`)', op: 'Linear Scan', comp: 'Time O(N) | Space O(1)', note: 'Must check elements one by one' }
        ],
        footnotes: [
          '* Accessing an element by index is strictly O(1) because address calculation requires no iteration.'
        ]
      },
      timeComplexity: 'Time Complexity: O(1) Constant Time for any index lookup',
      timeComplexityExplain: 'Accessing an element at any valid or invalid index takes a single constant-time step (O(1)).',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'Retrieving a value from an existing array allocates zero extra helper memory.',
      memoryTrickText: `🧠 Memory Trick — Accessing Array Elements:

• arr[0]                ──► Pehla Element (Start)
• arr[length - 1]       ──► Aakhri Element (Formula)
• arr.at(-1)            ──► Aakhri Element (Modern JS)
• arr[out_of_bounds]    ──► undefined (No crash)

Simple Mental Rule:
"Index pata hai toh direct jump O(1), Index dhoondna hai toh linear scan O(N)!"`,
      commonMistakes: [
        '❌ Mistake 1: Writing `arr[arr.length]` to get the last element.\n✅ Correct: `arr[arr.length]` returns `undefined`. The last element is always at `arr[arr.length - 1]`.',
        '❌ Mistake 2: Assuming `arr[-1]` works like Python in square bracket notation.\n✅ Correct: In JavaScript, `arr[-1]` returns `undefined`. Use `arr.at(-1)` instead.',
        '❌ Mistake 3: Confusing an element\'s value with its index position.\n✅ Correct: `arr[2]` is the value at index 2, not the number 2 itself.',
        '❌ Mistake 4: Expecting JavaScript to throw an `IndexOutOfBoundsException`.\n✅ Correct: JavaScript returns `undefined` gracefully without throwing runtime errors.',
        '❌ Mistake 5: Believing searching for a value is O(1) like accessing an index.\n✅ Correct: Accessing by index is O(1); searching for a value requires an O(N) linear scan.'
      ],
      proTips: [
        '💡 Modern Syntax: Use `arr.at(-1)` for the last element and `arr.at(-2)` for the second-to-last element.',
        '💡 Boundary Check: Always ensure `0 <= index && index < arr.length` before accessing to avoid unintended `undefined` values.',
        '💡 Interview Tip: When asked the complexity of array access, confidently answer O(1) and explain the Base + (Index * Size) formula.'
      ],
      topicQuestions: [
        {
          question: 'What does accessing an element in an array mean?',
          answer: 'It means retrieving a stored value from the array using its numerical index position (e.g. `arr[0]` or `arr[i]`).',
          explanation: 'It fetches the element at a specific offset.'
        },
        {
          question: 'Why is accessing an array element by index an O(1) operation?',
          answer: 'Because the computer calculates the exact memory location in a single step using the formula `Base Address + (Index * Size)` without needing to scan any preceding elements.',
          explanation: 'Requires no looping or searching.'
        },
        {
          question: 'What is the formula to access the last element of an array of length N in traditional JavaScript?',
          answer: '`arr[arr.length - 1]` (or `arr[N - 1]`).',
          explanation: 'Because indices start from 0, the last valid index is always length - 1.'
        },
        {
          question: 'What does JavaScript return when accessing an out-of-bounds index (e.g. `arr[100]` on length 3)?',
          answer: 'JavaScript returns `undefined` without throwing a runtime exception.',
          explanation: 'Non-existent properties and indices evaluate to `undefined`.'
        },
        {
          question: 'How does the modern JavaScript `.at()` method differ from square bracket `[]` access?',
          answer: '`.at()` natively supports negative integer indexing (e.g. `arr.at(-1)` gets the last element), whereas `arr[-1]` returns `undefined`.',
          explanation: '`.at()` simplifies backwards indexing.'
        }
      ],
      interviewQuestions: [
        'What does accessing an element in an array mean?',
        'Why is accessing an array element by index an O(1) operation?',
        'What is the formula to access the last element of an array in JavaScript?',
        'What does JavaScript return when accessing an out-of-bounds index?',
        'How does the modern JavaScript .at() method differ from square bracket access?'
      ],
      quizList: [
        {
          question: 'Q1. Given `const arr = ["Red", "Green", "Blue"]`, what is the value of `arr[0]`?',
          options: [
            '"Red"',
            '"Green"',
            '"Blue"',
            'undefined'
          ],
          answer: '"Red"',
          explanation: 'Zero-based indexing means index 0 retrieves the very first element ("Red").'
        },
        {
          question: 'Q2. For an array `const nums = [10, 20, 30, 40]`, what does `nums[nums.length]` evaluate to?',
          options: [
            '40',
            '10',
            'undefined',
            'Throws ArrayIndexOutOfBoundsException'
          ],
          answer: 'undefined',
          explanation: 'Length is 4, but valid indices are 0 to 3. `nums[4]` is out of bounds and returns `undefined`.'
        },
        {
          question: 'Q3. What is the output of `["Apple", "Mango", "Banana"].at(-1)` in modern JavaScript?',
          options: [
            '"Apple"',
            '"Mango"',
            '"Banana"',
            'undefined'
          ],
          answer: '"Banana"',
          explanation: '`.at(-1)` resolves to the last element of the array ("Banana").'
        },
        {
          question: 'Q4. What is the Time Complexity of accessing any element by its index in an array?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'Direct arithmetic offset calculation fetches the memory slot in constant O(1) time.'
        },
        {
          question: 'Q5. What is the difference between `arr[2]` and `arr.indexOf(2)`?',
          options: [
            'Both are identical O(1) operations',
            '`arr[2]` accesses value at index 2 in O(1); `arr.indexOf(2)` searches for the number 2 in O(N)',
            '`arr[2]` searches in O(N); `arr.indexOf(2)` accesses in O(1)',
            '`arr.indexOf(2)` only works on strings'
          ],
          answer: '`arr[2]` accesses value at index 2 in O(1); `arr.indexOf(2)` searches for the number 2 in O(N)',
          explanation: 'Known-index access is instantaneous (O(1)); value search requires linear scanning (O(N)).'
        }
      ],
      quickRevision: {
        title: '🔍 30 Second Revision — Accessing Elements',
        items: [
          { emoji: '0️⃣', title: 'First Element', desc: '`arr[0]` accesses the first item (0-based indexing).' },
          { emoji: '🔚', title: 'Last Element', desc: '`arr[arr.length - 1]` or `arr.at(-1)` accesses the last item.' },
          { emoji: '⚡', title: 'O(1) Time', desc: 'All index lookups are instant constant time.' },
          { emoji: '❓', title: 'Out of Bounds', desc: 'Non-existent indices safely return `undefined`.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Index pata hai toh direct jump O(1), Index dhoondna hai toh linear scan O(N)!"' }
        ]
      },
      summary: [
        'Accessing an element retrieves a value using its numerical index position.',
        'JavaScript uses zero-based indexing: first item is at `arr[0]`, last is at `arr[arr.length - 1]`.',
        'Modern JavaScript provides `.at(-1)` for clean negative index access.',
        'Accessing out-of-bounds indices returns `undefined` without runtime exceptions.',
        'All index-based access operations execute in instantaneous O(1) constant time.'
      ],
      faqs: [
        {
          q: 'Why is accessing an element by index O(1)?',
          a: 'Because the CPU calculates the memory address in 1 math step (Base + Index * Size) and jumps directly to that address.'
        },
        {
          q: 'Why does `arr[arr.length]` return `undefined`?',
          a: 'Because indexing starts at 0. An array of length 5 has valid indices 0, 1, 2, 3, 4. Index 5 does not exist.'
        },
        {
          q: 'What is the difference between `arr[-1]` and `arr.at(-1)`?',
          a: 'In JavaScript, `arr[-1]` looks for a string key "-1" and returns `undefined`. `arr.at(-1)` is a method that returns the last element.'
        },
        {
          q: 'Does accessing an invalid index crash JavaScript?',
          a: 'No. JavaScript returns `undefined` gracefully without throwing runtime errors.'
        },
        {
          q: 'What is the difference between accessing and searching?',
          a: 'Accessing means retrieving a value when its index is known (O(1)). Searching means scanning the array to find which index contains a value (O(N)).'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-updating-elements',
      title: 'Updating Elements',
      emoji: '✏️',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Updating an array element means replacing or overwriting an existing value at a specific index with a new value using the assignment operator (`arr[index] = newValue`).',
      secondExplain: 'Because array elements reside at fixed memory offsets, updating an existing index is an instant O(1) in-place operation. The computer calculates the memory address of the target slot and directly overwrites the old value without shifting any neighboring elements or allocating new memory.',
      definitionHighlight: '✏️ Core Concept: `arr[index] = newValue` | In-Place Overwrite | Instant O(1) Time | O(1) Auxiliary Space',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need In-Place Updates?',
        subtitle: 'How direct memory overwrites enable fast, memory-efficient data mutations.',
        mappings: [
          { need: '🔴 1. The Waste of Copying Entire Arrays', ds: 'Without in-place updates, modifying a single value in an array of 100,000 items would require allocating a new array and copying all elements in O(N) time.' },
          { need: '⚡ 2. Instant O(1) In-Place Overwrite', ds: '`arr[1] = 95` targets the exact memory slot and changes the value in a single CPU cycle with zero shifting.' },
          { need: '🔄 3. Foundation for In-Place Sorting & Swapping', ds: 'Algorithms like Bubble Sort, QuickSort, and Array Reversal rely on fast in-place element swapping.' },
          { need: '📊 4. Dynamic State & DP Memoization', ds: 'Dynamic Programming and graph algorithms update lookup tables (`dp[i] = newVal`) millions of times in constant time.' }
        ],
        takeaway: '💡 Updating an existing array index is strictly O(1) because it overwrites memory directly without moving any other elements.'
      },
      comparisonTable: {
        title: 'Updating vs Accessing vs Inserting vs Deleting',
        headers: ['Operation', 'JavaScript Syntax', 'Time Complexity', 'Shifting Required?', 'Array Length Change'],
        rows: [
          { feature: 'Access Element', data: 'const x = arr[i]', ds: 'O(1)', third: 'No (Read only)', fourth: 'No change' },
          { feature: 'Update Element (In-Place)', data: 'arr[i] = newVal', ds: 'O(1)', third: 'No (Direct overwrite)', fourth: 'No change (Length remains N)' },
          { feature: 'Insert in Middle', data: 'arr.splice(i, 0, val)', ds: 'O(N)', third: 'Yes (Elements shift right)', fourth: 'Increases by 1 (N + 1)' },
          { feature: 'Delete from Middle', data: 'arr.splice(i, 1)', ds: 'O(N)', third: 'Yes (Elements shift left)', fourth: 'Decreases by 1 (N - 1)' }
        ],
        takeaway: '💡 Updating replaces a value in-place in O(1) time without changing array length, whereas insertion and deletion require shifting elements in O(N) time.'
      },
      tradeoffs: {
        title: 'Key Concepts & Edge Cases in Updating Arrays',
        intro: 'Important behaviors to understand when modifying array indices in JavaScript:',
        items: [
          {
            title: '1. `const` Variables Allow Element Updates',
            desc: 'Declaring `const arr = [10, 20]` prevents reassigning the variable `arr = [30]`, but the internal elements CAN still be updated (`arr[0] = 99`) because the memory reference remains unchanged.'
          },
          {
            title: '2. In-Place Swapping with Destructuring',
            desc: 'Modern JavaScript allows swapping two elements in 1 clean line without a temporary variable: `[arr[0], arr[2]] = [arr[2], arr[0]]` (Two O(1) updates).'
          },
          {
            title: '3. Warning: Assigning Beyond Array Length (Sparse Arrays)',
            desc: 'If `arr = [1, 2]` (length 2) and you assign `arr[5] = 100`, JavaScript expands the length to 6 and creates 3 empty slots (holes) at indices 2, 3, and 4.'
          }
        ]
      },
      hinglishExplain: `Updating Elements ko simple Hinglish mein samjhein:

"Array ke kisi pehle se maujood index par nayi value daalna **Updating** kehlata hai. Ye puraani value ko overwrite kar deta hai."

Real-Life Whiteboard Analogy:
Socho ek whiteboard par 3 students ke marks likhe hain: \`[80, 85, 90]\`.
Teacher ne bola: "Second student (Index 1) ke marks 85 nahi, 95 hain!"
Tum duster se 85 ko mita kar wahan **95** likh dete ho.
• Na toh poora board badalna pada!
• Na hi baaki ke numbers ko idhar-udhar khiskana (shift) pada!

Yahi hota hai **In-Place Update (O(1))**:
1. Computer \`1000 + (1 × 4) = 1004\` par jump karta hai.
2. Address 1004 par puraana number (85) hatakar naya number (95) likh deta hai.
3. Baaki elements apni jagah par rehte hain.

🧠 Simple Rule:
"Update = Puraani value ko duster se mitao aur nayi value likh do in O(1)!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Aman Ka Re-Checking Result:

Masti Sir ke pass 3 students ke marks the:
const scores = [80, 85, 90];

Aman (Index 1) daudte hue aaya: "Sir! Math exam ki re-checking mein mere 10 marks badh gaye! 85 se 95 ho gaye!"

Class ke ek naye programmer student ne bola: "Sir, hum ek naya array banate hain aur saare scores phir se copy karte hain!"

Masti Sir muskuraye aur bole:
"Arre bhai! 1 number badalne ke liye naya array kyun banana? Seedha index par overwrite karo!"

Masti Sir ne likha:
\`scores[1] = 95;\`

Ab marks ho gaye: \`[80, 95, 90]\`!
• Array ka length pehle bhi 3 tha, ab bhi 3 hai.
• Zero extra memory waste hui.
• 1 step mein update ho gaya!

🧠 Lesson:
"Existing index par value update karna instant O(1) operation hai — koi shifting nahi hoti!"`,
      conceptMapping: [
        { emoji: '✏️', item: 'arr[i] = val', mapsTo: 'In-place overwrite of the value at index i' },
        { emoji: '⚡', item: 'O(1) Time', mapsTo: 'Instant memory address calculation and write' },
        { emoji: '🔄', item: 'In-Place Swap', mapsTo: '`[arr[i], arr[j]] = [arr[j], arr[i]]`' },
        { emoji: '🔒', item: 'const arr', mapsTo: 'Reference is locked, but internal elements are mutable' },
        { emoji: '⚠️', item: 'Sparse Array', mapsTo: 'Assigning index >= length creates empty holes' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — In-Place Memory Overwrite for arr[1] = 95',
        pipeline: [
          { step: '01. Initial State', desc: '`scores = [80, 85, 90]` (Index 1 holds 85 at Address 1004)' },
          { step: '02. Execute scores[1] = 95', desc: 'CPU computes Address: 1000 + (1 × 4) = 1004' },
          { step: '03. Direct Overwrite', desc: 'Value at Address 1004 is overwritten from 85 to 95' },
          { step: '04. Final State', desc: '`scores = [80, 95, 90]` (Length = 3, zero shifting, O(1) time)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// UPDATING ARRAY ELEMENTS & IN-PLACE MUTATION IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. In-Place Update on const array (O(1))
const scores = [80, 85, 90];
console.log("Original scores:", scores); // [80, 85, 90]

scores[1] = 95; // Overwrite index 1 in-place -> O(1)
console.log("After updating index 1:", scores); // [80, 95, 90]

// 2. In-Place Swapping of Two Elements (O(1))
// Swap index 0 (80) and index 2 (90)
[scores[0], scores[2]] = [scores[2], scores[0]];
console.log("After swapping index 0 and 2:", scores); // [90, 95, 80]

// 3. Updating Objects inside Arrays
const users = [{ id: 1, name: "Rahul" }, { id: 2, name: "Neha" }];
users[0].name = "Aman"; // Updates property of object at index 0
console.log("After object update:", users);

// 4. Edge Case: Assigning beyond length creates sparse holes
const arr = [10, 20];
arr[4] = 50; // Assigns index 4 (indices 2 & 3 become empty slots)
console.log("Sparse array:", arr, "| Length:", arr.length);`,
      output: `Original scores: [ 80, 85, 90 ]
After updating index 1: [ 80, 95, 90 ]
After swapping index 0 and 2: [ 90, 95, 80 ]
After object update: [ { id: 1, name: 'Aman' }, { id: 2, name: 'Neha' } ]
Sparse array: [ 10, 20, <2 empty items>, 50 ] | Length: 5`,
      starterCodeExample: {
        title: '💻 Runnable Code: Array Update Playground',
        code: `const arr = [10, 20, 30];\n\n// 1. Direct update: O(1)\narr[1] = 99;\nconsole.log("Updated array:", arr); // [10, 99, 30]\n\n// 2. In-place swap\n[arr[0], arr[2]] = [arr[2], arr[0]];\nconsole.log("Swapped array:", arr); // [30, 99, 10]`
      },
      codeBreakdown: [
        { part: 'scores[1] = 95', label: 'In-Place Update: Replaces old value 85 at index 1 with 95 directly in constant O(1) time.' },
        { part: '[scores[0], scores[2]] = [scores[2], scores[0]]', label: 'Destructuring Swap: Executes an in-place swap without requiring a temporary third variable.' },
        { part: 'users[0].name = "Aman"', label: 'Object Property Mutation: Mutates the object referenced inside the array slot.' },
        { part: 'arr[4] = 50', label: 'Sparse Allocation: Expands array length and leaves missing intermediate indices as empty slots.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Array Mutation & Swapping',
        input: 'Array: scores = [80, 85, 90]',
        target: 'Trace memory state changes across update and swap operations',
        steps: [
          { step: 1, condition: 'Initial State', evaluation: 'indices: [0: 80, 1: 85, 2: 90]', action: 'Length = 3 ✅' },
          { step: 2, condition: 'Execute scores[1] = 95', evaluation: 'Slot 1 overwritten: 85 -> 95', action: 'Array becomes [80, 95, 90] in O(1) time ✅' },
          { step: 3, condition: 'Execute Swap [0] and [2]', evaluation: 'Index 0 gets 90, Index 2 gets 80', action: 'Array becomes [90, 95, 80] in O(1) time ✅' }
        ]
      },
      operationComplexity: {
        title: 'Update Operation Complexities',
        intro: 'Computational efficiency of updating array elements:',
        rows: [
          { ds: 'Update Known Index (`arr[i] = val`)', op: 'Direct Memory Overwrite', comp: 'Time O(1) | Space O(1)', note: 'Base + (Index * Size)' },
          { ds: 'Swap Two Elements (`[a, b] = [b, a]`)', op: 'Two In-Place Writes', comp: 'Time O(1) | Space O(1)', note: 'Zero additional array allocation' },
          { ds: 'Conditional Update inside Loop', op: 'Scan + Overwrite', comp: 'Time O(N) | Space O(1)', note: 'Linear scan to find target + O(1) write' }
        ],
        footnotes: [
          '* Updating an array element by index is strictly O(1) because no elements are shifted in memory.'
        ]
      },
      timeComplexity: 'Time Complexity: O(1) Constant Time for index-based updates',
      timeComplexityExplain: 'Overwriting an element at an existing index computes the target memory address in 1 step and writes the value in constant O(1) time.',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'In-place updates mutate the existing array without allocating any extra memory buffers.',
      memoryTrickText: `🧠 Memory Trick — Updating Elements:

• arr[i] = val  ──► Duster se mitao, naya number likho (O(1))
• Length        ──► No change (Replaces existing item)
• Shifting      ──► 0 elements shifted
• Space         ──► O(1) in-place

Catchy Rule:
"Update mein na array badalta hai, na length — bas memory slot ka data overwrite hota hai in O(1)!"`,
      commonMistakes: [
        '❌ Mistake 1: Confusing updating (`arr[1] = 95`) with inserting (`arr.splice(1, 0, 95)`).\n✅ Correct: Updating overwrites in O(1) with no length change; inserting shifts elements in O(N) and increases length.',
        '❌ Mistake 2: Thinking `const arr` prevents element updates.\n✅ Correct: `const` prevents reassigning the variable `arr = [...]`, but internal elements can still be updated (`arr[0] = 50`).',
        '❌ Mistake 3: Assigning far beyond array length (e.g. `arr[100] = 5` on length 3).\n✅ Correct: This creates a sparse array with 97 empty holes, which can degrade engine performance.',
        '❌ Mistake 4: Forgetting that updating an array mutates the original reference (side effects).\n✅ Correct: If another variable references the same array, it will also reflect the updated value.',
        '❌ Mistake 5: Assuming you must search before updating when the index is already known.\n✅ Correct: If the index is known, assign directly in O(1) time without looping.'
      ],
      proTips: [
        '💡 In-Place Swapping: Use `[arr[i], arr[j]] = [arr[j], arr[i]]` for clean two-pointer swaps (e.g. reversing an array or partitioning in QuickSort).',
        '💡 Boundary Check: Always ensure `0 <= index && index < arr.length` before updating to avoid creating unintended sparse holes.',
        '💡 Immutability in React: In React state management, avoid mutating directly (`arr[i] = val`). Instead, create a shallow copy: `const newArr = [...arr]; newArr[i] = val;`.'
      ],
      topicQuestions: [
        {
          question: 'What does updating an element in an array mean?',
          answer: 'It means replacing or overwriting an existing value at a specific index with a new value (e.g. `arr[1] = 95`).',
          explanation: 'It modifies the array in-place without changing its length.'
        },
        {
          question: 'Why is updating an array element by index an O(1) operation?',
          answer: 'Because the computer directly calculates the target memory address using `Base + (Index * Size)` and overwrites the memory slot in 1 step without shifting any neighboring elements.',
          explanation: 'Requires zero shifting and zero iteration.'
        },
        {
          question: 'Does updating an array declared with `const` cause an error in JavaScript?',
          answer: 'No. `const` prevents reassigning the array variable reference to a new array, but the contents of the array remain fully mutable.',
          explanation: '`arr[0] = 99` is completely valid on a `const arr = [1, 2]`.'
        },
        {
          question: 'What happens when you assign a value to an index beyond the current array length in JavaScript (e.g. `arr[5] = 10` on length 2)?',
          answer: 'JavaScript expands the array length to 6 and leaves intermediate slots (indices 2, 3, 4) as empty holes, creating a sparse array.',
          explanation: 'Expands the length and creates empty slots.'
        },
        {
          question: 'How do you swap two elements in an array in-place using modern JavaScript?',
          answer: 'Using array destructuring syntax: `[arr[i], arr[j]] = [arr[j], arr[i]]`.',
          explanation: 'Performs an in-place swap without a temporary variable in O(1) time.'
        }
      ],
      interviewQuestions: [
        'What does updating an element in an array mean?',
        'Why is updating an array element by index an O(1) operation?',
        'Does updating an array declared with const cause an error in JavaScript?',
        'What happens when you assign a value to an index beyond the current array length in JavaScript?',
        'How do you swap two elements in an array in-place using modern JavaScript?'
      ],
      quizList: [
        {
          question: 'Q1. Given `const arr = [10, 20, 30]`, what is the array after executing `arr[1] = 99`?',
          options: [
            '[10, 20, 30, 99]',
            '[10, 99, 30]',
            '[99, 20, 30]',
            'Throws TypeError: Assignment to constant variable'
          ],
          answer: '[10, 99, 30]',
          explanation: 'Index 1 is overwritten from 20 to 99 in-place.'
        },
        {
          question: 'Q2. What is the Time Complexity of updating an element at a known index in an array?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'Direct memory slot overwrite takes constant O(1) time.'
        },
        {
          question: 'Q3. How does updating (`arr[1] = 50`) differ from insertion (`arr.splice(1, 0, 50)`)?',
          options: [
            'They are identical operations',
            'Updating overwrites in O(1) with no length change; insertion shifts elements in O(N) and increases length',
            'Updating shifts elements in O(N); insertion is O(1)',
            'Updating only works on numbers'
          ],
          answer: 'Updating overwrites in O(1) with no length change; insertion shifts elements in O(N) and increases length',
          explanation: 'Updating overwrites existing memory in-place; inserting requires shifting remaining elements right.'
        },
        {
          question: 'Q4. What is the length of `arr` after running `const arr = [1, 2]; arr[4] = 10;`?',
          options: [
            '2',
            '3',
            '4',
            '5'
          ],
          answer: '5',
          explanation: 'Assigning to index 4 expands the array to length 5 (indices 0..4).'
        },
        {
          question: 'Q5. What is the Auxiliary Space Complexity of updating an array element in-place?',
          options: [
            'O(N)',
            'O(1)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'Overwriting memory in-place uses zero extra helper structures.'
        }
      ],
      quickRevision: {
        title: '✏️ 30 Second Revision — Updating Elements',
        items: [
          { emoji: '✏️', title: 'In-Place Overwrite', desc: '`arr[i] = val` replaces the existing value in memory.' },
          { emoji: '⚡', title: 'O(1) Time', desc: 'Direct memory jump and overwrite takes constant time.' },
          { emoji: '📏', title: 'Length Constant', desc: 'Updating an existing index does not change array length.' },
          { emoji: '🔄', title: 'Clean Swapping', desc: '`[arr[i], arr[j]] = [arr[j], arr[i]]` swaps in-place.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Update mein na array badalta hai, na length — bas memory slot overwrite hota hai in O(1)!"' }
        ]
      },
      summary: [
        'Updating an element overwrites an existing index with a new value using `arr[index] = newValue`.',
        'Because memory address calculation is direct, updates run in constant O(1) time.',
        'No elements are shifted during an update, and array length remains unchanged.',
        '`const` arrays allow element updates because the array reference remains constant.',
        'Swapping two elements in-place is achieved in O(1) time using destructuring syntax.'
      ],
      faqs: [
        {
          q: 'Why is updating an array element O(1)?',
          a: 'Because the CPU computes the target memory address in a single step (Base + Index * Size) and writes the new value directly without shifting any other items.'
        },
        {
          q: 'Can I update elements in a `const` array?',
          a: 'Yes! `const` prevents reassigning the variable to a new array, but the elements inside the array can be freely updated.'
        },
        {
          q: 'What is the difference between updating and inserting?',
          a: 'Updating overwrites an existing slot in O(1) without changing array length. Inserting shifts subsequent elements right in O(N) and increases array length.'
        },
        {
          q: 'What is a sparse array?',
          a: 'A sparse array is an array that contains empty slots (holes), created when assigning a value to an index significantly greater than the current length.'
        },
        {
          q: 'How do you swap two elements in-place?',
          a: 'Use modern JavaScript destructuring: `[arr[i], arr[j]] = [arr[j], arr[i]]`.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-traversing-arrays',
      title: 'Traversing Arrays',
      emoji: '🚶‍♂️',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Array traversal is the systematic process of visiting every element in an array exactly once from start to finish (or end to start) to inspect, process, transform, or aggregate data, running in linear O(N) time.',
      secondExplain: 'Because array elements sit side-by-side in memory with sequential zero-based indices (0 to N - 1), a loop can easily step through each index `i` one by one. Traversal is the foundational building block for finding sums, averages, maximums, minimums, and filtering elements across an entire collection.',
      definitionHighlight: '🚶‍♂️ Core Rule: Visit every element from 0 to N - 1 | Linear O(N) Time | O(1) Auxiliary Space',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Array Traversal?',
        subtitle: 'How automated loop iteration replaces manual, unscalable index processing.',
        mappings: [
          { need: '🔴 1. The Nightmare of Manual Access', ds: 'Calculating the sum of 1,000 marks manually (`marks[0] + marks[1]...`) is impossible to write and breaks when size changes.' },
          { need: '🔄 2. Single 3-Line Loop for Any Size N', ds: 'A `for (let num of arr)` loop processes 5 items or 5,000,000 items with the exact same 3 lines of code.' },
          { need: '🎯 3. Core Engine of DSA Algorithms', ds: 'Finding maximums, counting frequencies, filtering records, and searching all rely on iterating through array elements.' },
          { need: '⚡ 4. Hardware Cache Prefetching Synergy', ds: 'Sequential linear traversal triggers CPU cache prefetching, reading contiguous memory blocks with peak hardware efficiency.' }
        ],
        takeaway: '💡 Traversal turns static collections into dynamic data pipelines where algorithms inspect and aggregate data in linear O(N) time.'
      },
      comparisonTable: {
        title: '4 Common Ways to Traverse Arrays in JavaScript',
        headers: ['Loop Pattern', 'JavaScript Syntax', 'Access to Index `i`?', 'Can `break` early?', 'Best Used For'],
        rows: [
          { feature: 'Classic `for` Loop ⭐', data: 'for (let i = 0; i < arr.length; i++)', ds: 'Yes (via `i`)', third: 'Yes', fourth: 'Standard forward traversal, step skipping (`i += 2`), two pointers' },
          { feature: 'Modern `for...of` Loop', data: 'for (let val of arr)', ds: 'No (Direct values)', third: 'Yes', fourth: 'Clean, expressive reads when index position is not needed' },
          { feature: 'Backward `for` Loop', data: 'for (let i = arr.length - 1; i >= 0; i--)', ds: 'Yes (via `i`)', third: 'Yes', fourth: 'Processing elements from end to start, reverse algorithms' },
          { feature: '`Array.prototype.forEach()`', data: 'arr.forEach((val, i) => ...)', ds: 'Yes', third: 'No (Cannot break)', fourth: 'Functional-style iterations where full traversal is guaranteed' }
        ],
        takeaway: '💡 Use `for...of` for clean value-only reads. Use the classic `for` loop when you need index arithmetic, custom step sizes, or backward iteration.'
      },
      tradeoffs: {
        title: 'Traversing Patterns & Key Concepts',
        intro: 'Mastering the fundamental traversal patterns in array programming:',
        items: [
          {
            title: '1. Forward Traversal: `i = 0` to `i < arr.length`',
            desc: 'Steps through elements in standard chronological order from index 0 up to index N - 1.'
          },
          {
            title: '2. Backward Traversal: `i = arr.length - 1` down to `i >= 0`',
            desc: 'Starts at the last valid index and steps backward toward 0. Essential for reverse algorithms and bottom-up evaluations.'
          },
          {
            title: '3. Accumulator Pattern (Sum, Min, Max)',
            desc: 'A tracker variable is initialized before the loop (e.g. `let max = arr[0]`) and updated on each iteration in O(1) time.'
          },
          {
            title: '4. Warning: Avoid Mutating Length During Traversal',
            desc: 'Adding or deleting elements (`push`, `pop`, `splice`) inside a forward loop modifies `arr.length` dynamically and can cause skipped elements or infinite loops.'
          }
        ]
      },
      hinglishExplain: `Traversing Arrays ko simple Hinglish mein samjhein:

"Array ke pehle element se lekar aakhri element tak ek-ek karke har slot par jaana aur value ko check ya process karna **Traversal (Iteration)** kehlata hai."

Real-Life Ticket Checker (TTE) Analogy:
Train mein 5 numbered seats hain: \`[10, 20, 30, 40, 50]\`.
TTE Seat 0 se start karta hai:
• Seat 0 par gaya ──► Ticket check kiya
• Seat 1 par gaya ──► Ticket check kiya
• Seat 2 par gaya ──► Ticket check kiya
• Seat 3 par gaya ──► Ticket check kiya
• Seat 4 par gaya ──► Ticket check kiya

Jab TTE ne aakhri seat check kar li, toh poori train **Traverse** ho gayi!

How Traversal Works in JavaScript:
\`\`\`javascript
const marks = [85, 92, 78, 90, 88];

// Forward Traversal: 0 se lekar length - 1 tak
for (let i = 0; i < marks.length; i++) {
  console.log("Student", i, "Marks:", marks[i]);
}
\`\`\`

🧠 Simple Rule:
"Traversal = Loop chalao, har dabba ek-ek karke check karo in O(N) time!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Class Ka Topper Finder:

Masti Sir ke class mein 5 students ke exam marks the:
const marks = [85, 92, 78, 90, 88];

Masti Sir ne class se pucha: "Batao is class ka highest topper kaun hai aur class ka total marks kitna hai?"

Ek lazy student ne manually bola: "Sir, main aankhon se dekh kar bata deta hoon!"
Masti Sir bole: "Agar class mein 10,000 students hote, toh aankhon se kaise dekhte? Code likho jo automatically find kare!"

Masti Sir ne Traversal ka concept sikhaya:
\`\`\`javascript
let total = 0;
let maxMarks = marks[0]; // Pehle student ko initial max maana

for (let i = 0; i < marks.length; i++) {
  total += marks[i]; // Total mein add kiya
  if (marks[i] > maxMarks) {
    maxMarks = marks[i]; // Naya topper mil gaya!
  }
}

console.log("Total Marks:", total);     // 433
console.log("Highest Score:", maxMarks); // 92
\`\`\`

Ek single loop mein 1 pass ke andar Total aur Max dono nikal gaye!

🧠 Lesson:
"Traversal ka use karke tum kisi bhi collection ka Sum, Max, Min aur Average linear O(N) time mein nikaal sakte ho!"`,
      conceptMapping: [
        { emoji: '🚶‍♂️', item: 'Array Traversal', mapsTo: 'Visiting every element in the array exactly once' },
        { emoji: '🔢', item: 'Loop Index i', mapsTo: 'Pointer tracking the current position from 0 to N - 1' },
        { emoji: '➡️', item: 'Forward Traversal', mapsTo: 'Iterating from start (0) to end (length - 1)' },
        { emoji: '⬅️', item: 'Backward Traversal', mapsTo: 'Iterating in reverse from (length - 1) down to 0' },
        { emoji: '🧮', item: 'Accumulator Pattern', mapsTo: 'Running sum/max calculation during traversal' },
        { emoji: '⏱️', item: 'Time Complexity O(N)', mapsTo: 'Takes linear time proportional to total elements N' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Forward Array Traversal on [10, 20, 30, 40, 50]',
        pipeline: [
          { step: 'Step 01: i = 0', desc: 'Read nums[0] = 10 | Running Sum = 10 | Running Max = 10' },
          { step: 'Step 02: i = 1', desc: 'Read nums[1] = 20 | Running Sum = 30 | Running Max = 20' },
          { step: 'Step 03: i = 2', desc: 'Read nums[2] = 30 | Running Sum = 60 | Running Max = 30' },
          { step: 'Step 04: i = 3', desc: 'Read nums[3] = 40 | Running Sum = 100 | Running Max = 40' },
          { step: 'Step 05: i = 4', desc: 'Read nums[4] = 50 | Running Sum = 150 | Final Max = 50 (O(N) Complete)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// ARRAY TRAVERSAL PATTERNS & AGGREGATIONS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

const marks = [85, 92, 78, 90, 88];

// 1. Classic Forward Traversal: Calculate Sum & Max (O(N))
let totalSum = 0;
let highest = marks[0];

for (let i = 0; i < marks.length; i++) {
  totalSum += marks[i];
  if (marks[i] > highest) {
    highest = marks[i];
  }
}
console.log("Total Sum:", totalSum); // 433
console.log("Class Highest:", highest); // 92
console.log("Average:", totalSum / marks.length); // 86.6

// 2. Modern for...of Traversal (Values only)
console.log("\\n--- Values via for...of ---");
for (let score of marks) {
  console.log("Score:", score);
}

// 3. Backward Traversal (End to Start)
console.log("\\n--- Reverse Traversal ---");
for (let i = marks.length - 1; i >= 0; i--) {
  console.log(\`Index \${i}: \${marks[i]}\`);
}`,
      output: `Total Sum: 433
Class Highest: 92
Average: 86.6

--- Values via for...of ---
Score: 85
Score: 92
Score: 78
Score: 90
Score: 88

--- Reverse Traversal ---
Index 4: 88
Index 3: 90
Index 2: 78
Index 1: 92
Index 0: 85`,
      starterCodeExample: {
        title: '💻 Runnable Code: Array Traversal Playground',
        code: `const nums = [10, 20, 30, 40];\n\n// 1. Forward traversal: O(N)\nlet sum = 0;\nfor (let i = 0; i < nums.length; i++) {\n  sum += nums[i];\n}\nconsole.log("Total Sum:", sum); // 100\n\n// 2. Backward traversal: O(N)\nconst reversed = [];\nfor (let i = nums.length - 1; i >= 0; i--) {\n  reversed.push(nums[i]);\n}\nconsole.log("Reversed:", reversed); // [40, 30, 20, 10]`
      },
      codeBreakdown: [
        { part: 'for (let i = 0; i < marks.length; i++)', label: 'Loop Control: Initializes index at 0, tests boundary condition i < N, and steps by 1 on each iteration.' },
        { part: 'totalSum += marks[i]', label: 'Accumulator Pattern: Adds the current element to running sum in constant O(1) time per step.' },
        { part: 'let highest = marks[0]', label: 'Safe Initialization: Initializes max with the first element, guaranteeing correctness even with all negative numbers.' },
        { part: 'for (let score of marks)', label: 'for...of Syntax: Clean, modern iterable syntax that directly yields element values without index tracking.' },
        { part: 'for (let i = marks.length - 1; i >= 0; i--)', label: 'Backward Loop: Iterates in reverse from last index (length - 1) down to 0.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Sum & Max Calculation on [10, 20, 30, 40]',
        input: 'Array: nums = [10, 20, 30, 40] (Length = 4)',
        target: 'Trace loop variables i, nums[i], totalSum, and highest',
        steps: [
          { step: 1, condition: 'i = 0 (0 < 4)', evaluation: 'nums[0] = 10 | sum = 0 + 10 = 10 | highest = max(10, 10) = 10', action: 'Processes index 0 ✅' },
          { step: 2, condition: 'i = 1 (1 < 4)', evaluation: 'nums[1] = 20 | sum = 10 + 20 = 30 | highest = max(10, 20) = 20', action: 'Processes index 1 ✅' },
          { step: 3, condition: 'i = 2 (2 < 4)', evaluation: 'nums[2] = 30 | sum = 30 + 30 = 60 | highest = max(20, 30) = 30', action: 'Processes index 2 ✅' },
          { step: 4, condition: 'i = 3 (3 < 4)', evaluation: 'nums[3] = 40 | sum = 60 + 40 = 100 | highest = max(30, 40) = 40', action: 'Processes index 3 ✅' },
          { step: 5, condition: 'i = 4 (4 < 4 is false)', evaluation: 'Loop terminates cleanly after 4 iterations', action: 'Returns Final Sum = 100, Highest = 40 in O(N) time ✅' }
        ]
      },
      operationComplexity: {
        title: 'Traversal Operation Complexities',
        intro: 'Computational characteristics of linear array traversal:',
        rows: [
          { ds: 'Complete Traversal (Sum / Max / Filter)', op: 'Visits all N elements', comp: 'Time O(N) | Space O(1)', note: 'Strictly linear time proportional to N' },
          { ds: 'Early Termination (Search Target Found)', op: 'Best: 1 comparison | Worst: N', comp: 'Time Best O(1), Worst O(N)', note: 'Breaks early as soon as target is found' },
          { ds: 'Step Traversal (`i += 2` Alternate items)', op: 'Visits N / 2 elements', comp: 'Time O(N) | Space O(1)', note: 'Constants drop in Big-O: O(N/2) = O(N)' }
        ],
        footnotes: [
          '* Traversal time complexity is O(N) because the loop executes once for each of the N elements.'
        ]
      },
      timeComplexity: 'Time Complexity: O(N) Linear Time',
      timeComplexityExplain: 'A single traversal loop performs N constant-time iterations to visit all N elements, running in strictly linear O(N) time.',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'Standard array traversal operates in-place using scalar loop counter variables (`i`, `sum`, `max`), consuming constant extra memory.',
      memoryTrickText: `🧠 Memory Trick — Array Traversal:

• Forward Loop   ──► for (let i = 0; i < length; i++)
• Backward Loop  ──► for (let i = length - 1; i >= 0; i--)
• Value-Only     ──► for (let val of arr)
• Time & Space   ──► O(N) Time | O(1) Space

Golden Rule:
"Seat 0 se seat N-1 tak jao, har element ko one-by-one check karo in O(N) time!"`,
      commonMistakes: [
        '❌ Mistake 1: Off-by-one error using `i <= arr.length` instead of `i < arr.length`.\n✅ Correct: `i <= arr.length` accesses `arr[length]` on the final iteration, which evaluates to `undefined`.',
        '❌ Mistake 2: Initializing backward traversal with `i = arr.length`.\n✅ Correct: The last element is at `arr.length - 1`, so start with `let i = arr.length - 1; i >= 0; i--`.',
        '❌ Mistake 3: Initializing `max = 0` when the array contains all negative numbers (e.g. `[-10, -5, -20]`).\n✅ Correct: Always initialize `max = arr[0]` so negative numbers are evaluated correctly.',
        '❌ Mistake 4: Using `for...in` instead of `for...of` on arrays.\n✅ Correct: `for...in` iterates over object property keys (as strings), whereas `for...of` iterates over array values.',
        '❌ Mistake 5: Modifying the array\'s length inside the traversal loop (`push`/`splice`).\n✅ Correct: Mutating array length during iteration alters loop boundaries and causes index skipping bugs.'
      ],
      proTips: [
        '💡 Initialization Rule: When computing minimums or maximums, always initialize with `arr[0]` (or `Infinity` / `-Infinity`) rather than `0`.',
        '💡 Early Exit Optimization: When searching for an element, use `break` or `return` immediately upon finding the target to achieve $O(1)$ best-case time.',
        '💡 Step Skipping: You can traverse alternate elements (even indices) simply by stepping `i += 2`.',
        '💡 In-Place Transformations: When modifying values during traversal (e.g. doubling every item), assign `arr[i] = arr[i] * 2` directly in $O(1)$ auxiliary space.'
      ],
      topicQuestions: [
        {
          question: 'What is Array Traversal in data structures?',
          answer: 'Array traversal is the process of visiting and processing every element in an array sequentially from start to end (or end to start).',
          explanation: 'It runs in linear O(N) time.'
        },
        {
          question: 'What is the Time and Auxiliary Space Complexity of array traversal?',
          answer: 'Time Complexity is O(N) (linear), and Auxiliary Space is O(1) (constant extra space for loop variables).',
          explanation: 'Visits all N elements using scalar tracker variables.'
        },
        {
          question: 'What is the off-by-one error in array loops and how do you prevent it?',
          answer: 'Writing `i <= arr.length` causes the loop to access `arr[arr.length]` on the final step, returning `undefined`. Prevent it by using `i < arr.length`.',
          explanation: 'Valid indices run from 0 to length - 1.'
        },
        {
          question: 'What is the difference between `for...of` and `for...in` in JavaScript arrays?',
          answer: '`for...of` iterates over the actual element values. `for...in` iterates over the property keys/indices as strings and should be avoided for arrays.',
          explanation: '`for...of` is the standard iterable value loop.'
        },
        {
          question: 'Why should you initialize `max = arr[0]` instead of `max = 0` when finding the maximum element?',
          answer: 'Because if the array contains only negative numbers (e.g. `[-5, -12, -3]`), `max = 0` will incorrectly return 0 instead of -3.',
          explanation: 'Initializing with arr[0] ensures the baseline value belongs to the dataset.'
        }
      ],
      interviewQuestions: [
        'What is Array Traversal in data structures?',
        'What is the Time and Auxiliary Space Complexity of array traversal?',
        'What is the off-by-one error in array loops and how do you prevent it?',
        'What is the difference between for...of and for...in in JavaScript arrays?',
        'Why should you initialize max = arr[0] instead of max = 0 when finding the maximum element?'
      ],
      quizList: [
        {
          question: 'Q1. For an array `const nums = [10, 20, 30]`, how many times will `for (let i = 0; i < nums.length; i++)` execute?',
          options: [
            '2 times',
            '3 times',
            '4 times',
            'Infinite times'
          ],
          answer: '3 times',
          explanation: 'The loop executes for indices i = 0, i = 1, and i = 2 (exactly 3 times).'
        },
        {
          question: 'Q2. What is the Time Complexity of traversing an array of size N to compute its average?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'The loop visits all N elements sequentially, performing N constant-time additions.'
        },
        {
          question: 'Q3. Which of the following correctly starts a backward traversal loop from the last element?',
          options: [
            'for (let i = arr.length; i >= 0; i--)',
            'for (let i = arr.length - 1; i >= 0; i--)',
            'for (let i = arr.length - 1; i > 0; i--)',
            'for (let i = 0; i <= arr.length; i--)'
          ],
          answer: 'for (let i = arr.length - 1; i >= 0; i--)',
          explanation: 'The last valid index is length - 1, and the loop continues down to index 0 inclusive.'
        },
        {
          question: 'Q4. What is the value of `max` after running this code on `[-10, -5, -20]` with `let max = 0`?',
          options: [
            '-5',
            '-10',
            '0 (Incorrect bug)',
            '-20'
          ],
          answer: '0 (Incorrect bug)',
          explanation: 'Because 0 is greater than all negative numbers in the array, `max` remains 0. Always initialize with `arr[0]`!'
        },
        {
          question: 'Q5. What is the Auxiliary Space Complexity of calculating the sum of an array using a for loop?',
          options: [
            'O(N)',
            'O(1)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'A single scalar `sum` variable uses constant O(1) auxiliary memory.'
        }
      ],
      quickRevision: {
        title: '🚶‍♂️ 30 Second Revision — Traversing Arrays',
        items: [
          { emoji: '➡️', title: 'Forward Loop', desc: '`for (let i = 0; i < arr.length; i++)` visits indices 0 to N-1.' },
          { emoji: '⬅️', title: 'Backward Loop', desc: '`for (let i = arr.length - 1; i >= 0; i--)` visits N-1 down to 0.' },
          { emoji: '✨', title: 'for...of Loop', desc: '`for (let val of arr)` iterates over element values cleanly.' },
          { emoji: '⏱️', title: 'Complexity', desc: 'Time O(N) linear | Space O(1) in-place.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Seat 0 se seat N-1 tak jao, har element ko check karo in O(N) time!"' }
        ]
      },
      summary: [
        'Array traversal visits each element in an array systematically from start to end (or end to start).',
        'Traversal runs in linear O(N) time and uses O(1) auxiliary memory.',
        'Use `for...of` when index values are not required, and classic `for` loops when index arithmetic or step sizes matter.',
        'Avoid off-by-one errors by keeping loop conditions strictly `i < arr.length`.',
        'Always initialize minimum/maximum accumulators with `arr[0]` to safely handle all-negative datasets.'
      ],
      faqs: [
        {
          q: 'What is the difference between Array Access and Array Traversal?',
          a: 'Array access retrieves a single element at a known index in O(1) constant time. Traversal visits all N elements in O(N) linear time.'
        },
        {
          q: 'Why is traversal O(N)?',
          a: 'Because the loop must execute N times to visit every one of the N elements in the array.'
        },
        {
          q: 'Can I break out of a `forEach` loop early?',
          a: 'No. `Array.prototype.forEach()` cannot be stopped early with `break`. Use a classic `for` or `for...of` loop when early termination is needed.'
        },
        {
          q: 'What happens if I write `i <= arr.length`?',
          a: 'On the final iteration `i = arr.length`, accessing `arr[arr.length]` returns `undefined`, which often causes calculation bugs or NaN errors.'
        },
        {
          q: 'How do I traverse an array in reverse order in JavaScript?',
          a: 'Use a backward for loop: `for (let i = arr.length - 1; i >= 0; i--)` or `arr.slice().reverse().forEach(...)`.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-array-insertion',
      title: 'Array Insertion',
      emoji: '📥',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '12 min',
      englishDef: 'Array insertion is the process of adding a new element into an array at a specific position (beginning, middle, or end). While appending to the end runs in O(1) amortized time, inserting at the beginning or middle requires shifting subsequent elements one position to the right, costing linear O(N) time.',
      secondExplain: 'Because array elements must remain contiguous (adjacent) in memory with sequential indices from 0 to N - 1, creating a new slot in the front or middle requires moving all existing elements to make room. In dynamic environments like JavaScript, the engine handles this right-shifting automatically, but the underlying time complexity remains O(N).',
      definitionHighlight: '📥 Insertion Complexity: End = O(1) Amortized | Beginning = O(N) | Middle = O(N) due to right-shifting',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Array Insertion?',
        subtitle: 'Understanding the mechanics and performance implications of adding new data into ordered collections.',
        mappings: [
          { need: '🔴 1. The Cost of Shifting in Loops', ds: 'Repeatedly prepending items with `unshift()` inside a loop of N iterations takes O(N²) quadratic time, degrading application responsiveness.' },
          { need: '⚡ 2. Instant O(1) End Insertion (Push)', ds: 'Appending to the end with `arr.push(val)` requires zero shifting, completing in constant amortized O(1) time.' },
          { need: '🗂️ 3. Maintaining Sorted Sequences', ds: 'Inserting new records into sorted arrays or priority lists requires targeted middle insertion via binary search and splice in O(N) time.' },
          { need: '🔄 4. The Push-Then-Reverse Pattern', ds: 'Building an array by pushing to the end O(1) and reversing once at the end O(N) achieves total O(N) time instead of O(N²).' }
        ],
        takeaway: '💡 Insertion at the end is fast O(1). Insertion at the beginning or middle costs O(N) because existing elements must shift right to maintain contiguous indices.'
      },
      comparisonTable: {
        title: 'Array Insertion Positions Compared',
        headers: ['Position', 'JavaScript Method', 'Time Complexity', 'Elements Shifted', 'Memory Action'],
        rows: [
          { feature: 'Insert at End (Append) ⭐', data: 'arr.push(val)', ds: 'O(1) Amortized', third: '0 elements', fourth: 'Places value in next available slot at index N' },
          { feature: 'Insert at Beginning (Prepend)', data: 'arr.unshift(val)', ds: 'O(N)', third: 'All N elements', fourth: 'Shifts all N existing elements right by 1 index' },
          { feature: 'Insert at Middle (Index `k`)', data: 'arr.splice(k, 0, val)', ds: 'O(N)', third: 'N - k elements', fourth: 'Shifts elements from index k to N-1 right by 1' }
        ],
        takeaway: '💡 End insertion (push) is strictly O(1) amortized, while beginning and middle insertions take O(N) time proportional to the number of elements shifted.'
      },
      tradeoffs: {
        title: 'Key Concepts: Shifting Mechanics & Dynamic Resizing',
        intro: 'Mastering the computational trade-offs of array insertion:',
        items: [
          {
            title: '1. Why Right-Shifting is Necessary',
            desc: 'To insert at index 1 in `[10, 30, 40]`, the computer must move 40 to index 3 and 30 to index 2 before placing 20 at index 1. This linear movement takes O(N) time.'
          },
          {
            title: '2. Dynamic Array Capacity Doubling (Amortized O(1))',
            desc: 'When an internal buffer runs out of space, the engine allocates double capacity (2x) and copies elements over in O(N). Because resizing happens rarely, the average cost per append is O(1).'
          },
          {
            title: '3. Array vs Linked List Insertion Trade-off',
            desc: 'Arrays have O(N) middle insertions due to shifting but offer O(1) index access. Linked Lists offer O(1) insertion after a known node pointer but require O(N) sequential search to find that node.'
          }
        ]
      },
      hinglishExplain: `Array Insertion ko simple Hinglish mein samjhein:

"Array mein naya element add karne ko **Insertion** kehte hain. Par insertion ka time is baat par depend karta hai ki tum element **KAHAN** daal rahe ho!"

Real-Life Cinema Hall Seating Analogy:
Ek row mein 4 log baithe hain: \`[Aman, Bhavya, Chirag, Divya]\`.

Case 1: Aakhri Seat Par Baithna (End Insertion ──► O(1))
Naya dost "Zaid" aaya aur line ke aakhri khali seat par baith gaya.
• Kisi bhi purane dost ko apni jagah se hilna nahi pada!
• Time: **Instant O(1)** (arr.push).

Case 2: Pehli Seat Par Baithna (Beginning Insertion ──► O(N))
Zaid bola: "Mujhe Seat 0 par baithna hai!"
Ab Divya ko seat 4 par, Chirag ko 3 par, Bhavya ko 2 par, aur Aman ko 1 par shift hona padega!
• Saare 4 logon ko **Right Shift** hona pada!
• Time: **Linear O(N)** (arr.unshift).

🧠 Simple Rule:
"Line ke peeche judoge toh O(1) instant, line ke aage ya beech mein ghusoge toh sabko right shift hona padega in O(N)!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Line Mein Ghusne Ka Fine:

Masti Sir ke classroom mein 4 students ek line mein baithe the:
const line = ["Aman", "Bhavya", "Chirag", "Divya"];

Naya student "Zaid" class mein aaya aur bola: "Sir, main sabse aage (Index 0) baithunga!"

Aman chilla utha: "Sir! Agar Zaid Seat 0 par baithega, toh hum sabko ek-ek seat piche khisakna padega!"
• Divya seat 3 se 4 par shift hui.
• Chirag seat 2 se 3 par shift hua.
• Bhavya seat 1 se 2 par shift hui.
• Aman seat 0 se 1 par shift hua.

Masti Sir muskuraye aur bole:
"Dekha! Index 0 par insert karne ke liye poori class ko right shift hona pada ($O(N)$)! Agar Zaid seedha line ke aakhri seat par baithta, toh zero shifting hoti ($O(1)$)!"

Phir Masti Sir ne code likh kar dikhaya:
\`\`\`javascript
// Slow O(N) Prepend:
line.unshift("Zaid"); // Sabhi 4 elements shift hue!

// Fast O(1) Append:
line.push("Zaid"); // Direct end slot mein baith gaya, zero shift!
\`\`\`

🧠 Lesson:
"Array ke shuru ya beech mein insert karna O(N) shifting cost karta hai, jabki end mein insert karna instant O(1) hota hai!"`,
      conceptMapping: [
        { emoji: '📥', item: 'Array Insertion', mapsTo: 'Adding a new element into an array at a chosen position' },
        { emoji: '⚡', item: 'push(val)', mapsTo: 'Append to end in O(1) amortized time (Zero shifting)' },
        { emoji: '➡️', item: 'unshift(val)', mapsTo: 'Prepend to start in O(N) time (Shifts all N elements right)' },
        { emoji: '✂️', item: 'splice(i, 0, val)', mapsTo: 'Insert at index i in O(N) time (Shifts N - i elements right)' },
        { emoji: '📦', item: 'Right Shifting', mapsTo: 'Moving elements from right-to-left to make space without overwriting' },
        { emoji: '📈', item: 'Capacity Doubling', mapsTo: 'Dynamic buffer allocation that keeps push() amortized O(1)' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Right-Shifting to Insert 20 at Index 1 on [10, 30, 40]',
        pipeline: [
          { step: '01. Initial Array', desc: '`arr = [10, 30, 40]` (Length = 3, target: insert 20 at index 1)' },
          { step: '02. Shift Right (Index 2 to 3)', desc: 'Move 40 from index 2 to index 3 ──► `[10, 30, (empty), 40]`' },
          { step: '03. Shift Right (Index 1 to 2)', desc: 'Move 30 from index 1 to index 2 ──► `[10, (empty), 30, 40]`' },
          { step: '04. Write New Value', desc: 'Place 20 into open slot at index 1 ──► `[10, 20, 30, 40]`' },
          { step: '05. Final State', desc: 'Length becomes 4, total elements shifted = 2 (O(N) Complete)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// ARRAY INSERTION TECHNIQUES & SHIFTING IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

const numbers = [10, 30, 40];
console.log("Initial array:", numbers); // [10, 30, 40]

// 1. Fast End Insertion: push() -> O(1) Amortized
numbers.push(50);
console.log("After push(50):", numbers); // [10, 30, 40, 50]

// 2. Slow Front Insertion: unshift() -> O(N) (all elements shift right)
numbers.unshift(5);
console.log("After unshift(5):", numbers); // [5, 10, 30, 40, 50]

// 3. Middle Insertion: splice(index, deleteCount, newElement) -> O(N)
// Insert 20 at index 2 (between 10 and 30)
numbers.splice(2, 0, 20);
console.log("After splice(2, 0, 20):", numbers); // [5, 10, 20, 30, 40, 50]

// 4. Manual In-Place Insertion Algorithm (Low-Level Right Shift)
function manualInsertAt(arr, targetIndex, value) {
  // Step 1: Shift elements from right to left
  for (let i = arr.length - 1; i >= targetIndex; i--) {
    arr[i + 1] = arr[i]; // Move element right by 1 slot
  }
  // Step 2: Place new value in opened slot
  arr[targetIndex] = value;
  return arr;
}

const customArr = [100, 300, 400];
manualInsertAt(customArr, 1, 200);
console.log("Manual insert result:", customArr); // [100, 200, 300, 400]`,
      output: `Initial array: [ 10, 30, 40 ]
After push(50): [ 10, 30, 40, 50 ]
After unshift(5): [ 5, 10, 30, 40, 50 ]
After splice(2, 0, 20): [ 5, 10, 20, 30, 40, 50 ]
Manual insert result: [ 100, 200, 300, 400 ]`,
      starterCodeExample: {
        title: '💻 Runnable Code: Array Insertion Playground',
        code: `const arr = [10, 30, 40];\n\n// 1. Insert at end: O(1)\narr.push(50);\nconsole.log("Pushed:", arr); // [10, 30, 40, 50]\n\n// 2. Insert at index 1: O(N)\narr.splice(1, 0, 20);\nconsole.log("Spliced at index 1:", arr); // [10, 20, 30, 40, 50]`
      },
      codeBreakdown: [
        { part: 'numbers.push(50)', label: 'Append O(1): Places 50 at the end of the array without shifting any existing items.' },
        { part: 'numbers.unshift(5)', label: 'Prepend O(N): Shifts all existing elements 1 position to the right and inserts 5 at index 0.' },
        { part: 'numbers.splice(2, 0, 20)', label: 'Splice Insert O(N): Parameter 0 means "delete 0 items", inserting 20 at index 2 and shifting subsequent items.' },
        { part: 'arr[i + 1] = arr[i]', label: 'Right Shift Loop: Copies elements from right to left to prevent overwriting unshifted data.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Manual Insertion of 20 at Index 1 on [10, 30, 40]',
        input: 'Array: arr = [10, 30, 40], targetIndex = 1, value = 20',
        target: 'Trace backward loop shifting elements from right to left',
        steps: [
          { step: 1, condition: 'i = 2 (arr.length - 1 = 2)', evaluation: 'arr[2 + 1] = arr[2] ──► arr[3] = 40', action: 'Array becomes [10, 30, 40, 40] ✅' },
          { step: 2, condition: 'i = 1 (targetIndex = 1)', evaluation: 'arr[1 + 1] = arr[1] ──► arr[2] = 30', action: 'Array becomes [10, 30, 30, 40] ✅' },
          { step: 3, condition: 'i = 0 (0 >= 1 is false)', evaluation: 'Loop terminates, slot 1 is ready for write', action: 'Shifting complete (2 shifts) ✅' },
          { step: 4, condition: 'arr[1] = 20', evaluation: 'Target index 1 overwritten with new value 20', action: 'Final Array = [10, 20, 30, 40] in O(N) time ✅' }
        ]
      },
      operationComplexity: {
        title: 'Insertion Operation Complexities',
        intro: 'Computational cost of array insertion across different positions:',
        rows: [
          { ds: 'Insert at End (`arr.push(val)`)', op: 'Append', comp: 'Time O(1) Amortized | Space O(1)', note: 'Worst-case O(N) only during rare buffer reallocation' },
          { ds: 'Insert at Beginning (`arr.unshift(val)`)', op: 'Prepend', comp: 'Time O(N) | Space O(1)', note: 'Must shift all N existing elements right' },
          { ds: 'Insert in Middle (`arr.splice(k, 0, val)`)', op: 'Arbitrary Insert', comp: 'Time O(N) | Space O(1)', note: 'Must shift (N - k) elements right' }
        ],
        footnotes: [
          '* End insertion is fast O(1), but front and middle insertions are O(N) due to physical memory right-shifting.'
        ]
      },
      timeComplexity: 'Time Complexity: O(1) Amortized for End | O(N) Linear for Beginning & Middle',
      timeComplexityExplain: 'Inserting at the beginning or middle requires shifting up to N elements right by one position, running in linear O(N) time. Appending at the end requires zero shifting, running in constant amortized O(1) time.',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'In-place shifting modifies the array buffer directly without allocating secondary arrays.',
      memoryTrickText: `🧠 Memory Trick — Array Insertion:

• End Insert (push)      ──► Peeche judo ──► 0 shifts ──► O(1) instant
• Front Insert (unshift) ──► Aage ghuso  ──► N shifts ──► O(N) linear
• Middle Insert (splice) ──► Beech ghuso ──► Partial shifts ──► O(N) linear

Golden Rule:
"Line ke peeche judoge toh O(1) instant, aage ya beech mein ghusoge toh O(N) shift!"`,
      commonMistakes: [
        '❌ Mistake 1: Using `unshift()` inside a loop of N iterations.\n✅ Correct: Calling `unshift()` N times results in O(N²) quadratic time. Instead, `push()` elements in O(1) and call `reverse()` once at the end in O(N).',
        '❌ Mistake 2: Shifting from left to right during manual insertion (`arr[i+1] = arr[i]` with forward loop).\n✅ Correct: Forward shifting overwrites subsequent elements before they are moved! Always shift backward from `arr.length - 1` down to `targetIndex`.',
        '❌ Mistake 3: Confusing `arr.splice(i, 0, val)` (insert) with `arr.splice(i, 1, val)` (replace).\n✅ Correct: Second parameter `0` means delete zero elements (insert); `1` deletes 1 element (replace).',
        '❌ Mistake 4: Assuming all array insertions are O(1).\n✅ Correct: Only end insertion is O(1). Beginning and middle insertions are strictly O(N).',
        '❌ Mistake 5: Forgetting that insertion increases `arr.length` by 1.\n✅ Correct: Any insert operation increases total elements from N to N + 1.'
      ],
      proTips: [
        '💡 The Push-Then-Reverse Pattern: When building a collection where items should appear in reverse order, use `push()` on each step and `reverse()` once at the end. Total time: O(N) instead of O(N²)!',
        '💡 In-Place Array Insertion: When implementing algorithms like Merge Sorted Array in-place, traverse and insert from right to left (backwards) to avoid overwriting elements.',
        '💡 Linked List Alternative: If your application requires frequent O(1) insertions at the head without random index access, consider using a Doubly Linked List instead.'
      ],
      topicQuestions: [
        {
          question: 'What is the Time Complexity of inserting an element at the end of an array using `push()`?',
          answer: 'O(1) Amortized time (constant time), because no existing elements need to be shifted in memory.',
          explanation: 'Requires zero shifting.'
        },
        {
          question: 'Why does inserting an element at the beginning using `unshift()` take O(N) time?',
          answer: 'Because all N existing elements in the array must be shifted one position to the right in memory to create an empty slot at index 0.',
          explanation: 'Every element moves right by 1 index.'
        },
        {
          question: 'How do you insert an element at a specific index `k` in JavaScript without deleting anything?',
          answer: 'Using `arr.splice(k, 0, newElement)` where `0` indicates that zero elements should be deleted.',
          explanation: 'Inserts at index k and shifts subsequent items right.'
        },
        {
          question: 'What is the Push-Then-Reverse pattern in DSA problem solving?',
          answer: 'It is an optimization technique where you append elements to the end of an array in O(1) time and reverse the array once in O(N) time, avoiding expensive O(N²) unshift loops.',
          explanation: 'Keeps total time complexity linear O(N).'
        },
        {
          question: 'Why is manual right-shifting executed from right to left (backwards)?',
          answer: 'Because shifting from left to right would overwrite and destroy subsequent elements before they have a chance to be copied to their new positions.',
          explanation: 'Backward iteration preserves data integrity during in-place shifts.'
        }
      ],
      interviewQuestions: [
        'What is the Time Complexity of inserting an element at the end of an array using push()?',
        'Why does inserting an element at the beginning using unshift() take O(N) time?',
        'How do you insert an element at a specific index k in JavaScript without deleting anything?',
        'What is the Push-Then-Reverse pattern in DSA problem solving?',
        'Why is manual right-shifting executed from right to left (backwards)?'
      ],
      quizList: [
        {
          question: 'Q1. What is the Time Complexity of inserting an element at index 0 of an array with N elements?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'All N elements must be shifted one position to the right, taking linear O(N) time.'
        },
        {
          question: 'Q2. Which JavaScript method inserts an element at the end of an array in O(1) amortized time?',
          options: [
            'arr.unshift(val)',
            'arr.push(val)',
            'arr.shift()',
            'arr.pop()'
          ],
          answer: 'arr.push(val)',
          explanation: '`push()` appends to the end with zero element shifting.'
        },
        {
          question: 'Q3. What does `arr.splice(2, 0, 99)` do to `arr = [10, 20, 30]`?',
          options: [
            'Deletes index 2 and inserts 99',
            'Inserts 99 at index 2 without deleting any elements -> [10, 20, 99, 30]',
            'Replaces 20 with 99',
            'Returns undefined'
          ],
          answer: 'Inserts 99 at index 2 without deleting any elements -> [10, 20, 99, 30]',
          explanation: 'Second parameter `0` specifies 0 deletions, resulting in an insertion at index 2.'
        },
        {
          question: 'Q4. What is the overall Time Complexity of calling `arr.unshift()` inside a loop of N iterations?',
          options: [
            'O(N)',
            'O(N log N)',
            'O(N²)',
            'O(1)'
          ],
          answer: 'O(N²)',
          explanation: 'Executing an O(N) shift operation N times creates a quadratic O(N²) time bottleneck.'
        },
        {
          question: 'Q5. Why is manual in-place element shifting implemented backwards (from length-1 down to target)?',
          options: [
            'To make the code shorter',
            'To avoid overwriting elements before they are moved to their new slots',
            'Because arrays can only be traversed backwards',
            'To reduce memory usage to O(0)'
          ],
          answer: 'To avoid overwriting elements before they are moved to their new slots',
          explanation: 'Backward shifting copies elements into empty or already-copied slots, preserving data.'
        }
      ],
      quickRevision: {
        title: '📥 30 Second Revision — Array Insertion',
        items: [
          { emoji: '⚡', title: 'End Insert (push)', desc: 'Instant O(1) amortized (Zero shifting required).' },
          { emoji: '➡️', title: 'Front Insert (unshift)', desc: 'Linear O(N) time (All N elements shift right).' },
          { emoji: '✂️', title: 'Middle Insert (splice)', desc: 'Linear O(N) time (Shifts elements from index to end).' },
          { emoji: '🔄', title: 'Push-Then-Reverse', desc: 'Use push + reverse once to avoid O(N²) unshift loops.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Peeche judoge toh O(1) instant, aage ya beech mein ghusoge toh O(N) shift!"' }
        ]
      },
      summary: [
        'Insertion at the end (`push`) runs in constant O(1) amortized time because zero elements need shifting.',
        'Insertion at the beginning (`unshift`) runs in linear O(N) time because all N elements must shift right.',
        'Insertion in the middle (`splice(k, 0, val)`) runs in O(N) time because (N - k) elements must shift right.',
        'Manual right-shifting must always be executed backward (from right to left) to avoid overwriting unshifted data.',
        'Avoid calling `unshift()` inside loops; use the Push-Then-Reverse pattern to maintain linear O(N) performance.'
      ],
      faqs: [
        {
          q: 'Why is `arr.push()` O(1) while `arr.unshift()` is O(N)?',
          a: '`push()` places the new item into the next available empty slot at the end without moving any other elements. `unshift()` must shift all N existing elements right by one slot to open index 0.'
        },
        {
          q: 'What does "Amortized O(1)" mean for `push()`?',
          a: 'When dynamic arrays run out of capacity, they double the buffer size in O(N). Because capacity doubling occurs exponentially rarely, the average cost per append remains O(1).'
        },
        {
          q: 'How does `splice()` insert elements without deleting?',
          a: 'By setting the second parameter (deleteCount) to 0: `arr.splice(index, 0, newElement)`.'
        },
        {
          q: 'Why is calling `unshift()` inside a loop considered an anti-pattern?',
          a: 'Because calling an O(N) shifting operation N times produces O(N²) quadratic time, severely slowing down execution on large datasets.'
        },
        {
          q: 'What is the difference between updating and inserting at an index?',
          a: 'Updating (`arr[i] = val`) overwrites an existing slot in O(1) without changing length. Inserting (`splice(i, 0, val)`) shifts subsequent elements in O(N) and increases length by 1.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-array-deletion',
      title: 'Array Deletion',
      emoji: '🗑️',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '12 min',
      englishDef: 'Array deletion is the process of removing an element from an array at a specific position (beginning, middle, or end) and decreasing the array length by 1. Deleting the last element runs in instant O(1) time, while deleting from the beginning or middle requires left-shifting all subsequent elements to maintain contiguous memory without gaps, costing linear O(N) time.',
      secondExplain: 'Because array elements must remain contiguous in memory with sequential indices from 0 to N - 1, removing an element from the front or middle leaves an empty slot. To close this gap, the computer must copy every following element one step to the left. In dynamic environments like JavaScript, methods like `shift()` and `splice()` automate this left-shifting, but the time complexity remains O(N).',
      definitionHighlight: '🗑️ Deletion Complexity: End (pop) = O(1) Instant | Beginning (shift) = O(N) | Middle (splice) = O(N) due to left-shifting',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Array Deletion?',
        subtitle: 'Understanding the mechanics, edge cases, and performance costs of removing data from arrays.',
        mappings: [
          { need: '🔴 1. The Forward Deletion Loop Trap', ds: 'Calling `splice()` inside a forward `for` loop skips elements because indices shift left dynamically under the running counter.' },
          { need: '⚡ 2. Instant O(1) End Deletion (Pop)', ds: 'Removing the last element with `arr.pop()` shrinks the length by 1 with zero shifting in constant O(1) time.' },
          { need: '🧹 3. Removing Specific Targets', ds: 'Filtering invalid records or deleting user items requires targeted middle deletion via `splice(index, 1)` in O(N) time.' },
          { need: '🔄 4. The Two-Pointer In-Place Overwrite Pattern', ds: 'Instead of repeated O(N) splices in a loop (O(N²)), use a two-pointer scan to overwrite unwanted elements in a single O(N) pass.' }
        ],
        takeaway: '💡 End deletion (pop) is strictly O(1) with zero shifting. Beginning and middle deletions cost O(N) time because subsequent elements must shift left to close the gap.'
      },
      comparisonTable: {
        title: 'Array Deletion Positions Compared',
        headers: ['Position', 'JavaScript Method', 'Time Complexity', 'Elements Shifted', 'Memory Action'],
        rows: [
          { feature: 'Delete from End (Pop) ⭐', data: 'arr.pop()', ds: 'O(1)', third: '0 elements', fourth: 'Removes last slot directly, decrements length by 1' },
          { feature: 'Delete from Beginning (Shift)', data: 'arr.shift()', ds: 'O(N)', third: 'All N - 1 elements', fourth: 'Shifts all remaining elements left by 1 index to fill index 0' },
          { feature: 'Delete from Middle (Index `k`)', data: 'arr.splice(k, 1)', ds: 'O(N)', third: 'N - 1 - k elements', fourth: 'Shifts elements from index k+1 to N-1 left by 1' },
          { feature: '`delete arr[k]` (Anti-Pattern)', data: 'delete arr[k]', ds: 'O(1)', third: '0 elements', fourth: 'Leaves an `undefined` hole (Sparse Array); does NOT shrink length!' }
        ],
        takeaway: '💡 `pop()` is instant O(1). `shift()` and `splice()` cost O(N) due to left-shifting. Never use the `delete` keyword on arrays because it creates sparse holes.'
      },
      tradeoffs: {
        title: 'Key Concepts: Left-Shifting & Deletion Traps',
        intro: 'Mastering the operational mechanics and edge cases of array deletion:',
        items: [
          {
            title: '1. Why Left-Shifting is Necessary',
            desc: 'Deleting index 1 from `[10, 20, 30, 40]` leaves an empty slot at index 1. To maintain contiguous indexing, 30 shifts to index 1 and 40 shifts to index 2, taking O(N) time.'
          },
          {
            title: '2. The `delete` Keyword Warning',
            desc: 'Using `delete arr[1]` sets `arr[1] = undefined` but keeps `arr.length` unchanged. It does NOT shift elements and turns the array into a slow sparse array.'
          },
          {
            title: '3. Array vs Linked List Deletion Trade-off',
            desc: 'Arrays have O(N) middle deletions due to shifting but offer instant O(1) index access. Linked Lists allow O(1) node deletion after a known pointer but take O(N) sequential search to locate that pointer.'
          }
        ]
      },
      hinglishExplain: `Array Deletion ko simple Hinglish mein samjhein:

"Array se kisi element ko hatane aur array ki length ko 1 kam karne ko **Deletion** kehte hain. Par deletion ka time is baat par depend karta hai ki tum element **KAHAN** se hata rahe ho!"

Real-Life Ticket Counter Queue Analogy:
Ek line mein 4 log khade hain: \`[Aman, Bhavya, Chirag, Divya]\`.

Case 1: Aakhri Bande Ka Jana (End Deletion ──► O(1))
Divya (aakhri seat) ne plan cancel kiya aur chali gayi.
• Kisi bhi purane bande ko hilna nahi pada!
• Time: **Instant O(1)** (\`arr.pop()\`).

Case 2: Sabse Aage Wale Ka Jana (Beginning Deletion ──► O(N))
Aman (Index 0) ko ticket mil gaya aur wo chala gaya.
Ab counter khali ho gaya, isliye Bhavya ko Seat 0 par, Chirag ko 1 par, aur Divya ko 2 par aana padega!
• Saare pichhle logon ko **Left Shift** hona pada!
• Time: **Linear O(N)** (\`arr.shift()\`).

Case 3: Beech Wale Ka Jana (Middle Deletion ──► O(N))
Bhavya (Index 1) line chhod kar chali gayi.
Chirag aur Divya ko ek-ek step aage (Left Shift) aana padega!
• Time: **Linear O(N)** (\`arr.splice(1, 1)\`).

🧠 Simple Rule:
"Peeche se hatoge toh O(1) instant, aage ya beech se hatoge toh pichhe walon ko Left Shift hona padega in O(N)!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Attendance Register Ka Khali Slot:

Masti Sir ke school register mein 4 students ke naam the:
const register = ["Aman", "Bhavya", "Chirag", "Divya"];
// Roll Numbers:    0        1         2         3

Aman (Roll 0) ne doosre school mein admission le liya aur school chhod diya.

Masti Sir ne register se Aman ka naam kaat diya.
Ab Roll 0 khali ho gaya!
Principal Sir ne bola: "School register mein beech mein koi khali roll number nahi reh sakta! Saare students ko ek-ek number aage shift karo!"

• Bhavya Roll 1 se 0 par aayi.
• Chirag Roll 2 se 1 par aaya.
• Divya Roll 3 se 2 par aayi.

Masti Sir bole:
"Dekha! Index 0 se delete karne par poore 3 students ko Left Shift hona pada ($O(N)$)! Agar aakhri student Divya jaati, toh kisi ka roll number change nahi hota ($O(1)$)!"

\`\`\`javascript
// Slow O(N) Front Deletion:
register.shift(); // Saare bache left shift hue!

// Fast O(1) End Deletion:
register.pop(); // Direct aakhri slot delete, zero shift!
\`\`\`

🧠 Lesson:
"Array ke shuru ya beech se delete karne par elements ko left shift karna padta hai ($O(N)$), jabki end se delete karna instant $O(1)$ hota hai!"`,
      conceptMapping: [
        { emoji: '🗑️', item: 'Array Deletion', mapsTo: 'Removing an element and decreasing array length by 1' },
        { emoji: '⚡', item: 'pop()', mapsTo: 'Remove from end in O(1) constant time (Zero shifting)' },
        { emoji: '⬅️', item: 'shift()', mapsTo: 'Remove from start in O(N) time (Shifts all N-1 elements left)' },
        { emoji: '✂️', item: 'splice(i, 1)', mapsTo: 'Remove 1 item at index i in O(N) time (Shifts remaining items left)' },
        { emoji: '📦', item: 'Left Shifting', mapsTo: 'Copying elements from left to right to overwrite deleted slot' },
        { emoji: '⚠️', item: 'delete arr[i]', mapsTo: 'Leaves empty hole (undefined), does NOT shrink length (Anti-pattern)' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Left-Shifting on Deleting Index 1 (20) from [10, 20, 30, 40]',
        pipeline: [
          { step: '01. Initial Array', desc: '`arr = [10, 20, 30, 40]` (Length = 4, target: delete index 1)' },
          { step: '02. Shift Left (Index 2 to 1)', desc: 'Copy 30 into index 1 ──► `[10, 30, 30, 40]`' },
          { step: '03. Shift Left (Index 3 to 2)', desc: 'Copy 40 into index 2 ──► `[10, 30, 40, 40]`' },
          { step: '04. Shrink Length (4 to 3)', desc: 'Decrement array length by 1 ──► `[10, 30, 40]`' },
          { step: '05. Final State', desc: 'Length = 3, total elements shifted = 2 (Time O(N) Complete)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// ARRAY DELETION TECHNIQUES & LEFT-SHIFTING IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

const numbers = [10, 20, 30, 40, 50];
console.log("Initial array:", numbers); // [10, 20, 30, 40, 50]

// 1. Fast End Deletion: pop() -> O(1) Constant Time
const poppedItem = numbers.pop();
console.log("After pop():", numbers, "| Removed:", poppedItem); // [10, 20, 30, 40], 50

// 2. Slow Front Deletion: shift() -> O(N) (all remaining elements shift left)
const shiftedItem = numbers.shift();
console.log("After shift():", numbers, "| Removed:", shiftedItem); // [20, 30, 40], 10

// 3. Middle Deletion: splice(index, deleteCount) -> O(N)
// Delete 1 item at index 1 (removes 30)
const deletedItems = numbers.splice(1, 1);
console.log("After splice(1, 1):", numbers, "| Removed:", deletedItems); // [20, 40], [30]

// 4. Manual In-Place Left-Shift Deletion Algorithm
function manualDeleteAt(arr, targetIndex) {
  // Step 1: Shift elements from left to right (forward loop)
  for (let i = targetIndex; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // Copy next element into current slot
  }
  // Step 2: Truncate the last duplicate element
  arr.length = arr.length - 1;
  return arr;
}

const customArr = [100, 200, 300, 400];
manualDeleteAt(customArr, 1); // Delete index 1 (200)
console.log("Manual delete result:", customArr); // [100, 300, 400]`,
      output: `Initial array: [ 10, 20, 30, 40, 50 ]
After pop(): [ 10, 20, 30, 40 ] | Removed: 50
After shift(): [ 20, 30, 40 ] | Removed: 10
After splice(1, 1): [ 20, 40 ] | Removed: [ 30 ]
Manual delete result: [ 100, 300, 400 ]`,
      starterCodeExample: {
        title: '💻 Runnable Code: Array Deletion Playground',
        code: `const arr = [10, 20, 30, 40];\n\n// 1. Delete from end: O(1)\nconst last = arr.pop();\nconsole.log("Popped:", last, "| Array:", arr); // 40, [10, 20, 30]\n\n// 2. Delete index 1 (20): O(N)\narr.splice(1, 1);\nconsole.log("After splice(1, 1):", arr); // [10, 30]`
      },
      codeBreakdown: [
        { part: 'numbers.pop()', label: 'Pop O(1): Removes the last element instantly without shifting any other items.' },
        { part: 'numbers.shift()', label: 'Shift O(N): Removes index 0 and shifts all remaining elements 1 slot to the left.' },
        { part: 'numbers.splice(1, 1)', label: 'Splice Delete O(N): Deletes 1 element at index 1 and shifts subsequent elements left.' },
        { part: 'arr[i] = arr[i + 1]', label: 'Left Shift: Overwrites the deleted slot by copying the adjacent right element.' },
        { part: 'arr.length = arr.length - 1', label: 'Length Decrement: Shrinks the array length to discard the trailing duplicate slot.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Manual Deletion of Index 1 from [10, 20, 30, 40]',
        input: 'Array: arr = [10, 20, 30, 40], targetIndex = 1',
        target: 'Trace forward loop shifting elements from left to right',
        steps: [
          { step: 1, condition: 'i = 1 (1 < 3)', evaluation: 'arr[1] = arr[2] ──► arr[1] = 30', action: 'Array becomes [10, 30, 30, 40] ✅' },
          { step: 2, condition: 'i = 2 (2 < 3)', evaluation: 'arr[2] = arr[3] ──► arr[2] = 40', action: 'Array becomes [10, 30, 40, 40] ✅' },
          { step: 3, condition: 'i = 3 (3 < 3 is false)', evaluation: 'Loop terminates, shifting complete', action: '2 elements shifted left ✅' },
          { step: 4, condition: 'arr.length = arr.length - 1', evaluation: 'Length shrinks from 4 to 3', action: 'Final Array = [10, 30, 40] in O(N) time ✅' }
        ]
      },
      operationComplexity: {
        title: 'Deletion Operation Complexities',
        intro: 'Computational cost of deleting array elements by position:',
        rows: [
          { ds: 'Delete from End (`arr.pop()`)', op: 'Pop', comp: 'Time O(1) | Space O(1)', note: 'Direct removal, zero elements shifted' },
          { ds: 'Delete from Beginning (`arr.shift()`)', op: 'Shift', comp: 'Time O(N) | Space O(1)', note: 'Must shift all N - 1 remaining elements left' },
          { ds: 'Delete from Middle (`arr.splice(k, 1)`)', op: 'Arbitrary Delete', comp: 'Time O(N) | Space O(1)', note: 'Must shift (N - 1 - k) elements left' }
        ],
        footnotes: [
          '* Deleting from the end is strictly O(1), while front and middle deletions are O(N) due to left-shifting.'
        ]
      },
      timeComplexity: 'Time Complexity: O(1) for End | O(N) Linear for Beginning & Middle',
      timeComplexityExplain: 'Deleting from the beginning or middle requires shifting up to N - 1 elements left by one position, running in linear O(N) time. Removing from the end requires zero shifting, completing in constant O(1) time.',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'In-place shifting overwrites memory directly within the existing array buffer without allocating extra memory.',
      memoryTrickText: `🧠 Memory Trick — Array Deletion:

• End Delete (pop)      ──► Peeche se hatao ──► 0 shifts ──► O(1) instant
• Front Delete (shift)  ──► Aage se hatao   ──► N shifts ──► O(N) linear
• Middle Delete(splice) ──► Beech se hatao  ──► Left shifts ──► O(N) linear

Golden Rule:
"Peeche se hatoge toh O(1) instant, aage ya beech se hatoge toh sabko Left Shift hona padega in O(N)!"`,
      commonMistakes: [
        '❌ Mistake 1: Using the `delete` keyword (`delete arr[1]`).\n✅ Correct: `delete arr[1]` sets the slot to `undefined` but does NOT shift elements or shrink `arr.length`. Use `arr.splice(1, 1)` instead.',
        '❌ Mistake 2: Splicing elements inside a forward loop (`for (let i = 0; i < arr.length; i++)`).\n✅ Correct: Splicing shifts elements left, causing the loop counter to skip the immediate next element! Either decrement `i--` after splice, loop backwards, or use a two-pointer filter.',
        '❌ Mistake 3: Shifting backwards during manual deletion (`arr[i] = arr[i-1]`).\n✅ Correct: Manual deletion shifts elements forward from left to right: `arr[i] = arr[i + 1]`.',
        '❌ Mistake 4: Assuming `shift()` is O(1) like `pop()`.\n✅ Correct: `shift()` removes index 0 and shifts all remaining elements left, taking linear O(N) time.',
        '❌ Mistake 5: Not checking for empty arrays before calling `pop()` or `shift()`.\n✅ Correct: On an empty array, `pop()` and `shift()` safely return `undefined` with length 0.'
      ],
      proTips: [
        '💡 The Two-Pointer In-Place Deletion Pattern: When removing target elements (e.g. LeetCode 27: Remove Element), use a write pointer `k` to overwrite values in O(N) time and O(1) space instead of calling `splice()` in a loop (which would take O(N²)).',
        '💡 Safe Loop Deletion: If you must delete elements during a loop, iterate in reverse: `for (let i = arr.length - 1; i >= 0; i--)` so shifting later elements does not affect unprocessed earlier indices.',
        '💡 Pop-and-Swap Trick for Unordered Arrays: If element order does not matter, replace `arr[i] = arr[arr.length - 1]` and call `arr.pop()` to delete any middle element in instant O(1) time!'
      ],
      topicQuestions: [
        {
          question: 'What is the Time Complexity of deleting an element from the end using `arr.pop()`?',
          answer: 'O(1) Constant time, because no elements need to be shifted in memory.',
          explanation: 'Requires zero shifting.'
        },
        {
          question: 'Why does deleting an element from the beginning using `arr.shift()` take O(N) time?',
          answer: 'Because all remaining N - 1 elements must be shifted one position to the left to fill the empty slot at index 0.',
          explanation: 'Every remaining element moves left by 1 slot.'
        },
        {
          question: 'What is the difference between `delete arr[1]` and `arr.splice(1, 1)` in JavaScript?',
          answer: '`delete arr[1]` leaves `undefined` in the slot without shrinking `arr.length` (creating a sparse array). `arr.splice(1, 1)` shifts remaining elements left and decreases `arr.length` by 1.',
          explanation: 'splice properly mutates and shrinks the array.'
        },
        {
          question: 'What bug occurs when calling `splice()` inside a forward `for` loop, and how do you fix it?',
          answer: 'Left-shifting moves the next item into the current index `i`, which is then skipped when `i` increments. Fix by decrementing `i--` after splice or iterating backwards from `length - 1` down to `0`.',
          explanation: 'Backward iteration eliminates index skipping.'
        },
        {
          question: 'How can you delete an arbitrary element from an array in O(1) time if element order does not matter?',
          answer: 'Overwrite the target index with the last element (`arr[i] = arr[arr.length - 1]`) and call `arr.pop()` in O(1) time.',
          explanation: 'The Pop-and-Swap pattern achieves O(1) deletion.'
        }
      ],
      interviewQuestions: [
        'What is the Time Complexity of deleting an element from the end using arr.pop()?',
        'Why does deleting an element from the beginning using arr.shift() take O(N) time?',
        'What is the difference between delete arr[1] and arr.splice(1, 1) in JavaScript?',
        'What bug occurs when calling splice() inside a forward for loop, and how do you fix it?',
        'How can you delete an arbitrary element from an array in O(1) time if element order does not matter?'
      ],
      quizList: [
        {
          question: 'Q1. What is the Time Complexity of deleting an element at index 0 of an array with N elements using `shift()`?',
          options: [
            'O(1)',
            'O(N)',
            'O(log N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'All N - 1 remaining elements must shift left by one position, costing linear O(N) time.'
        },
        {
          question: 'Q2. Which JavaScript method deletes the last element of an array in O(1) constant time?',
          options: [
            'arr.shift()',
            'arr.pop()',
            'arr.splice(0, 1)',
            'delete arr[0]'
          ],
          answer: 'arr.pop()',
          explanation: '`pop()` removes the last element directly with zero element shifting.'
        },
        {
          question: 'Q3. What happens to `arr = [10, 20, 30]` after executing `delete arr[1]`?',
          options: [
            'arr becomes [10, 30] with length 2',
            'arr becomes [10, <1 empty item>, 30] with length 3',
            'arr becomes [20, 30] with length 2',
            'Throws TypeError'
          ],
          answer: 'arr becomes [10, <1 empty item>, 30] with length 3',
          explanation: 'The `delete` operator leaves a hole (`undefined`) without shifting elements or shrinking length.'
        },
        {
          question: 'Q4. What is the overall Time Complexity of calling `arr.shift()` inside a loop of N iterations?',
          options: [
            'O(N)',
            'O(N log N)',
            'O(N²)',
            'O(1)'
          ],
          answer: 'O(N²)',
          explanation: 'Executing an O(N) shift operation N times creates an O(N²) quadratic time bottleneck.'
        },
        {
          question: 'Q5. What is the return value of `[10, 20, 30].pop()`?',
          options: [
            '[10, 20]',
            '30',
            '10',
            'undefined'
          ],
          answer: '30',
          explanation: '`pop()` mutates the array in-place and returns the removed element (30).'
        }
      ],
      quickRevision: {
        title: '🗑️ 30 Second Revision — Array Deletion',
        items: [
          { emoji: '⚡', title: 'End Delete (pop)', desc: 'Instant O(1) constant time (Zero shifting required).' },
          { emoji: '⬅️', title: 'Front Delete (shift)', desc: 'Linear O(N) time (All remaining elements shift left).' },
          { emoji: '✂️', title: 'Middle Delete (splice)', desc: 'Linear O(N) time (Shifts subsequent elements left).' },
          { emoji: '⚠️', title: 'Avoid `delete`', desc: 'Never use `delete arr[i]`; it leaves holes without shrinking length.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Peeche se hatoge toh O(1) instant, aage ya beech se hatoge toh O(N) Left Shift!"' }
        ]
      },
      summary: [
        'Array deletion removes an element and shrinks array length by 1.',
        'Deleting the last element (`pop`) runs in constant O(1) time because zero elements need shifting.',
        'Deleting the first element (`shift`) or middle element (`splice`) runs in linear O(N) time due to memory left-shifting.',
        'Never use the `delete` keyword on arrays because it creates sparse empty slots without adjusting length.',
        'When removing multiple elements in a loop, iterate backward or use the Two-Pointer In-Place pattern to maintain linear O(N) time.'
      ],
      faqs: [
        {
          q: 'Why is `arr.pop()` O(1) while `arr.shift()` is O(N)?',
          a: '`pop()` removes the last element and decrements length with zero shifting. `shift()` removes index 0 and must shift all N - 1 remaining elements left by one position.'
        },
        {
          q: 'What does `arr.pop()` return on an empty array?',
          a: 'It returns `undefined` safely without throwing an error, and `arr.length` remains 0.'
        },
        {
          q: 'Why is `delete arr[i]` considered bad practice in JavaScript?',
          a: 'Because `delete` sets the slot to `undefined` without shifting elements or reducing array length, creating a slow sparse array with empty holes.'
        },
        {
          q: 'How do you avoid skipping elements when deleting inside a loop?',
          a: 'Iterate backward: `for (let i = arr.length - 1; i >= 0; i--)` or use the two-pointer in-place overwrite pattern.'
        },
        {
          q: 'What is the Pop-and-Swap trick?',
          a: 'If element order does not matter, replace the target element with the last item (`arr[i] = arr[arr.length - 1]`) and call `arr.pop()` for instant O(1) middle deletion.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-array-searching',
      title: 'Array Searching',
      emoji: '🔎',
      difficulty: 'Beginner',
      xp: 50,
      readingTime: '15 min',
      englishDef: 'Array searching is the algorithmic process of finding whether a target value exists in an array and, when present, determining its numerical index position. Unsorted arrays require a sequential Linear Search running in O(N) time, whereas sorted arrays can leverage Binary Search to repeatedly halve the search range in O(log N) time.',
      secondExplain: 'Searching is fundamentally different from index access: accessing `arr[i]` requires 1 mathematical step (O(1)) because the position is already known, while searching starts with an unknown index and must inspect elements according to an algorithm. Both Linear Search and iterative Binary Search run in O(1) auxiliary space.',
      definitionHighlight: '🔎 Core Rule: Unsorted Array ──► Linear Search O(N) | Sorted Array ──► Binary Search O(log N)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Dedicated Searching Algorithms?',
        subtitle: 'Understanding the operational difference between unsorted scans and logarithmic sorted searches.',
        mappings: [
          { need: '🔴 1. The Cost of Blind Unsorted Scanning', ds: 'Searching an unsorted collection of 1,000,000 records sequentially requires up to 1,000,000 checks in O(N) worst-case time.' },
          { need: '⚡ 2. The Power of Binary Search on Sorted Data', ds: 'Searching 1,000,000 sorted elements using Binary Search takes at most 20 comparisons (log₂ 1,000,000 ≈ 20) in O(log N) time.' },
          { need: '🎯 3. Access vs Search Distinction', ds: 'Known-index access `arr[3]` is instant O(1); value lookup `find(val)` requires an algorithmic search over data.' },
          { need: '⚖️ 4. When to Sort vs When to Scan', ds: 'Sorting takes O(N log N). For a single one-off search on unsorted data, Linear Search O(N) is faster than sorting first!' }
        ],
        takeaway: '💡 Unsorted arrays must be searched sequentially in O(N) time. Sorted arrays enable logarithmic O(log N) Binary Search by eliminating half the remaining elements on every check.'
      },
      comparisonTable: {
        title: 'Searching vs Accessing vs Binary Search',
        headers: ['Operation', 'JavaScript Example', 'Array Requirement', 'Best Case', 'Worst Case', 'Auxiliary Space'],
        rows: [
          { feature: 'Access by Known Index', data: 'const x = arr[3]', ds: 'Any (Known Index)', third: 'O(1)', fourth: 'O(1)', fifth: 'O(1)' },
          { feature: 'Linear Search ⭐', data: 'linearSearch(arr, val)', ds: 'Unsorted or Sorted', third: 'O(1) (First item)', fourth: 'O(N) (Last/Missing)', fifth: 'O(1)' },
          { feature: 'Binary Search ⭐⭐', data: 'binarySearch(arr, val)', ds: 'MUST BE SORTED', third: 'O(1) (Middle item)', fourth: 'O(log N)', fifth: 'O(1)' },
          { feature: '`Array.prototype.includes()`', data: 'arr.includes(val)', ds: 'Any (Built-in Linear)', third: 'O(1)', fourth: 'O(N)', fifth: 'O(1)' }
        ],
        takeaway: '💡 Linear Search works universally on any array in O(N) time. Binary Search requires sorted data but slashes search time to O(log N).'
      },
      tradeoffs: {
        title: 'Key Concepts: Linear Search vs Binary Search Prerequisites',
        intro: 'Choosing the right search strategy based on data structure state:',
        items: [
          {
            title: '1. The Sorted Data Invariant for Binary Search',
            desc: 'Binary Search relies on sorted ordering to eliminate half the search range (`arr[mid] < target ──► search right`). If the array is unsorted, Binary Search will make incorrect decisions and fail.'
          },
          {
            title: '2. One-Off Search vs Multiple Repeated Queries',
            desc: 'If you only need to search once on unsorted data, use Linear Search (O(N)). Sorting the array first takes O(N log N), which is slower than a single O(N) linear scan!'
          },
          {
            title: '3. Early Exit Optimization',
            desc: 'Both Linear and Binary Search terminate immediately with `return` or `break` upon finding the target, achieving O(1) best-case time.'
          }
        ]
      },
      hinglishExplain: `Array Searching ko simple Hinglish mein samjhein:

"Array mein kisi specific value ko dhoondne aur uska index nikaalne ko **Searching** kehte hain. Par searching ka time is baat par depend karta hai ki array **SORTED** hai ya **UNSORTED**!"

Real-Life Dictionary Analogy:
1. **Unsorted Notes (Linear Search ──► O(N)):**
Socho tumhare paas 100 loose pages hain jo unorganized hain. Agar tumhe koi topic dhoondna hai, toh tumhe page 1 se page 100 tak ek-ek karke check karna padega ($O(N)$).

2. **Sorted Dictionary (Binary Search ──► O(log N)):**
Socho tumhare paas ek 1,000 pages ki English Dictionary hai (jo A-Z sorted hai). Agar tumhe word **"Masti"** dhoondna hai:
• Tum dictionary ko theek **beech (Page 500)** se kholte ho.
• Page 500 par letter 'M' se chota letter hai ──► Tum left ke 500 pages ko bina dekhe reject kar dete ho!
• Ab bache hue 500 pages ke beech se kholte ho ──► Sirf 10 steps mein word mil jata hai!

🧠 Golden Rule:
"Index pata hai toh Direct Access O(1).
Value dhoondni hai toh:
• Unsorted list ──► Linear Search O(N)
• Sorted list   ──► Binary Search O(log N)"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Roll Call vs Dictionary Challenge:

Masti Sir ke class mein do situations aayi:

Situation 1 (Linear Search):
Class mein 50 students randomly baithe the:
const students = ["Rahul", "Neha", "Aman", "Priya", "Karan", /* ... */];

Masti Sir ko "Aman" ko dhoondna tha.
Sir ne Roll 0 se start kiya:
• Rahul ❌
• Neha ❌
• Aman ✅ (Found at index 2!)

Sir bole: "Chunki bache random baithe the, mujhe ek-ek karke scan karna pada ($O(N)$)!"

Situation 2 (Binary Search):
Agli class mein Masti Sir ne sabhi students ko unke height ke hisaab se SORTED order mein khada kar diya:
const heights = [140, 145, 150, 155, 160, 165, 170, 175, 180];
// Target: 170

Masti Sir ne seedha beech ke student (Index 4: 160) ko dekha:
"160 target 170 se chota hai! Matlab 170 hamesha right half mein hoga!"
Sir ne left ke 5 students ko 1 second mein eliminate kar diya!
Agli baar beech mein 170 mil gaya!

🧠 Lesson:
"Agar data sorted hai, toh aadhi list ko har step par eliminate karke O(log N) mein target dhoondo!"`,
      conceptMapping: [
        { emoji: '🔎', item: 'Array Searching', mapsTo: 'Locating whether a target value exists and returning its index' },
        { emoji: '➡️', item: 'Linear Search', mapsTo: 'Sequential left-to-right scan; works on sorted and unsorted data (O(N))' },
        { emoji: '🎯', item: 'Binary Search', mapsTo: 'Divide-and-conquer on sorted arrays; halves search space repeatedly (O(log N))' },
        { emoji: '📍', item: 'Pointers (low, mid, high)', mapsTo: 'Boundary markers defining active search range in Binary Search' },
        { emoji: '⚡', item: 'Access vs Search', mapsTo: '`arr[i]` is instant O(1); finding unknown index is O(N) or O(log N)' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Architecture — Linear Search vs Binary Search',
        pipeline: [
          { step: '01. Linear Search on [4, 2, 7, 1, 9] (target 7)', desc: 'Index 0 (4) ❌ ──► Index 1 (2) ❌ ──► Index 2 (7) ✅ Found in 3 checks (O(N))' },
          { step: '02. Binary Search on [10, 20, 30, 40, 50, 60, 70] (target 60)', desc: 'Range [0..6] ──► mid index 3 (40) < 60 ──► eliminate left half [0..3]' },
          { step: '03. Binary Search Step 2', desc: 'New Range [4..6] ──► mid index 5 (60) === 60 ✅ Found in 2 checks (O(log N))' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// ARRAY SEARCHING ALGORITHMS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. LINEAR SEARCH (Works on unsorted & sorted arrays)
// Time: O(N) Worst | O(1) Best | Space: O(1)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Target found at index i
    }
  }
  return -1; // Target not found
}

const unsortedNums = [4, 2, 7, 1, 9];
console.log("Linear Search (target 7):", linearSearch(unsortedNums, 7)); // 2
console.log("Linear Search (target 10):", linearSearch(unsortedNums, 10)); // -1

// 2. BINARY SEARCH (Requires SORTED array)
// Time: O(log N) Worst | O(1) Best | Space: O(1)
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // Calculate middle index
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found at middle index
    } else if (arr[mid] < target) {
      low = mid + 1; // Target is in right half
    } else {
      high = mid - 1; // Target is in left half
    }
  }

  return -1; // Target not found
}

const sortedNums = [10, 20, 30, 40, 50, 60, 70];
console.log("Binary Search (target 60):", binarySearch(sortedNums, 60)); // 5
console.log("Binary Search (target 25):", binarySearch(sortedNums, 25)); // -1`,
      output: `Linear Search (target 7): 2
Linear Search (target 10): -1
Binary Search (target 60): 5
Binary Search (target 25): -1`,
      starterCodeExample: {
        title: '💻 Runnable Code: Array Searching Playground',
        code: `// Linear Search vs Binary Search\nconst nums = [10, 20, 30, 40, 50];\n\n// 1. Built-in includes / indexOf: O(N)\nconsole.log("indexOf(30):", nums.indexOf(30)); // 2\nconsole.log("includes(99):", nums.includes(99)); // false\n\n// 2. Binary search on sorted array: O(log N)\nlet low = 0, high = nums.length - 1;\nwhile (low <= high) {\n  let mid = Math.floor((low + high) / 2);\n  if (nums[mid] === 40) { console.log("Found 40 at index:", mid); break; }\n  if (nums[mid] < 40) low = mid + 1;\n  else high = mid - 1;\n}`
      },
      codeBreakdown: [
        { part: 'for (let i = 0; i < arr.length; i++)', label: 'Linear Search Loop: Inspects every element sequentially from index 0 to N - 1.' },
        { part: 'if (arr[i] === target) return i', label: 'Early Exit: Terminates immediately upon finding target, achieving O(1) best-case time.' },
        { part: 'let low = 0, high = arr.length - 1', label: 'Binary Search Pointers: Tracks active search boundaries across iterations.' },
        { part: 'const mid = Math.floor((low + high) / 2)', label: 'Midpoint Calculation: Identifies middle index to halve remaining elements.' },
        { part: 'low = mid + 1 / high = mid - 1', label: 'Search Space Reduction: Discards half the elements on every iteration in O(log N) time.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Binary Search for Target 60 on [10, 20, 30, 40, 50, 60, 70]',
        input: 'Sorted Array: [10, 20, 30, 40, 50, 60, 70], Target = 60',
        target: 'Trace low, high, mid, and arr[mid] across iterations',
        steps: [
          { step: 1, condition: 'low = 0, high = 6 (0 <= 6)', evaluation: 'mid = floor((0+6)/2) = 3 | arr[3] = 40. Since 40 < 60, low = 3 + 1 = 4', action: 'Left half [10..40] discarded ✅' },
          { step: 2, condition: 'low = 4, high = 6 (4 <= 6)', evaluation: 'mid = floor((4+6)/2) = 5 | arr[5] = 60. Since 60 === 60, return index 5', action: 'Target found in 2 steps (O(log N)) ✅' }
        ]
      },
      operationComplexity: {
        title: 'Search Complexity Comparison',
        intro: 'Comparing time and space performance across search techniques:',
        rows: [
          { ds: 'Linear Search (Unsorted/Sorted)', op: 'Sequential scan', comp: 'Best O(1) | Worst O(N) | Space O(1)', note: 'Must check all N elements in worst case' },
          { ds: 'Binary Search (Sorted Array)', op: 'Divide and conquer', comp: 'Best O(1) | Worst O(log N) | Space O(1)', note: 'Halves search space on each iteration' },
          { ds: 'Access by Known Index (`arr[i]`)', op: 'Direct memory jump', comp: 'Time O(1) | Space O(1)', note: 'Base + (Index * Size)' }
        ],
        footnotes: [
          '* Binary Search is only applicable when the input array is strictly sorted.'
        ]
      },
      timeComplexity: 'Time Complexity: Linear Search = O(N) | Binary Search = O(log N)',
      timeComplexityExplain: 'Linear Search inspects up to N elements sequentially in O(N) time. Binary Search divides the search space in half repeatedly, completing in logarithmic O(log N) time.',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'Iterative implementations of both Linear and Binary Search operate in-place using a constant number of scalar pointer variables.',
      memoryTrickText: `🧠 Memory Trick — Array Searching:

• Index pata hai      ──► arr[index]      ──► O(1) Direct Access
• Unsorted list       ──► Linear Search   ──► O(N) Scan
• Sorted list         ──► Binary Search   ──► O(log N) Halving

Golden Rule:
"Unsorted ho toh line se dhoondo (O(N)), Sorted ho toh beech se kholo (O(log N))!"`,
      commonMistakes: [
        '❌ Mistake 1: Using Binary Search on an unsorted array.\n✅ Correct: Binary Search requires sorted data. Running it on unsorted arrays makes incorrect branching decisions and fails.',
        '❌ Mistake 2: Sorting an unsorted array just to perform 1 single search.\n✅ Correct: Sorting takes O(N log N), which is slower than a direct O(N) Linear Search! Only sort first if you will perform multiple searches.',
        '❌ Mistake 3: Confusing Accessing (O(1)) with Searching (O(N) / O(log N)).\n✅ Correct: Accessing by index is O(1); searching for a value without knowing its index requires scanning or binary search.',
        '❌ Mistake 4: Binary Search boundary bug using `low < high` instead of `low <= high`.\n✅ Correct: Using `<` fails when the target is at a 1-element boundary where `low === high`.',
        '❌ Mistake 5: Integer overflow in midpoint calculation in other languages (`(low + high) / 2`).\n✅ Correct: In languages with 32-bit integer limits, use `low + Math.floor((high - low) / 2)`.'
      ],
      proTips: [
        '💡 One-Off vs Repeated Queries: For 1 search on unsorted data, use Linear Search O(N). For thousands of searches on static data, sort once in O(N log N) and Binary Search each query in O(log N).',
        '💡 Built-in JS Methods: `arr.indexOf()`, `arr.includes()`, and `arr.find()` all execute Linear Search under the hood in O(N) time.',
        '💡 Two-Pointer and Binary Search Synergy: Binary Search is foundational for advanced array topics including Lower Bound, Upper Bound, and Search in Rotated Sorted Arrays.'
      ],
      topicQuestions: [
        {
          question: 'What is Array Searching?',
          answer: 'Array searching is the process of determining whether a target value exists in an array and finding its numerical index.',
          explanation: 'It retrieves the position of a value.'
        },
        {
          question: 'What is the difference between Linear Search and Binary Search?',
          answer: 'Linear Search checks elements sequentially in O(N) time on any array. Binary Search repeatedly halves a SORTED array in O(log N) time.',
          explanation: 'Binary Search requires sorted data.'
        },
        {
          question: 'Why is accessing an element O(1) while searching for a value is O(N)?',
          answer: 'Accessing computes the exact memory address in 1 step using the known index. Searching does not know the index upfront and must inspect elements one by one.',
          explanation: 'Known index vs unknown location.'
        },
        {
          question: 'What is the Worst-Case Time Complexity of Binary Search on an array of size N?',
          answer: 'O(log N) time, because the search space is divided by 2 on every iteration.',
          explanation: 'log₂(N) comparisons maximum.'
        },
        {
          question: 'When is Linear Search preferred over Binary Search?',
          answer: 'When the array is unsorted and you only need to perform a single search, because sorting the array first (O(N log N)) would be slower than a direct linear scan (O(N)).',
          explanation: 'Sorting overhead exceeds linear search cost for 1 query.'
        }
      ],
      interviewQuestions: [
        'What is Array Searching?',
        'What is the difference between Linear Search and Binary Search?',
        'Why is accessing an element O(1) while searching for a value is O(N)?',
        'What is the Worst-Case Time Complexity of Binary Search on an array of size N?',
        'When is Linear Search preferred over Binary Search?'
      ],
      quizList: [
        {
          question: 'Q1. What is the Time Complexity of Linear Search on an unsorted array of size N in the worst case?',
          options: [
            'O(1)',
            'O(log N)',
            'O(N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'In the worst case (target at the end or absent), all N elements must be checked.'
        },
        {
          question: 'Q2. What prerequisite MUST be satisfied before applying Binary Search to an array?',
          options: [
            'Array must contain only positive integers',
            'Array elements must be strictly SORTED',
            'Array must have an even length',
            'Array must not contain duplicate values'
          ],
          answer: 'Array elements must be strictly SORTED',
          explanation: 'Binary Search relies on sorted ordering to eliminate half the search space on each step.'
        },
        {
          question: 'Q3. How many comparisons does Binary Search perform in the worst case on a sorted array of 1,024 elements?',
          options: [
            '1,024 comparisons',
            '512 comparisons',
            '10 comparisons (log₂ 1024 = 10)',
            '1 comparison'
          ],
          answer: '10 comparisons (log₂ 1024 = 10)',
          explanation: 'log₂(1024) = 10, meaning at most 10 iterations are needed.'
        },
        {
          question: 'Q4. If an unsorted array of size N needs to be searched exactly ONCE, which approach is most efficient?',
          options: [
            'Sort the array (O(N log N)) + Binary Search (O(log N))',
            'Direct Linear Search (O(N))',
            'Convert array to Binary Search Tree (O(N log N))',
            'Pop and swap all elements'
          ],
          answer: 'Direct Linear Search (O(N))',
          explanation: 'O(N) is faster than O(N log N) sorting for a single one-off query.'
        },
        {
          question: 'Q5. What is the Auxiliary Space Complexity of iterative Linear Search and iterative Binary Search?',
          options: [
            'O(N)',
            'O(log N)',
            'O(1)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'Both iterative algorithms use a fixed number of scalar pointer variables.'
        }
      ],
      quickRevision: {
        title: '🔎 30 Second Revision — Array Searching',
        items: [
          { emoji: '➡️', title: 'Linear Search', desc: 'Checks elements 0 to N-1 sequentially (O(N) time on any array).' },
          { emoji: '🎯', title: 'Binary Search', desc: 'Halves sorted array search range on each step (O(log N) time).' },
          { emoji: '🔒', title: 'Condition', desc: 'Binary Search strictly requires SORTED data.' },
          { emoji: '⚡', title: 'Access vs Search', desc: 'arr[i] is O(1) instant; searching unknown index is O(N) or O(log N).' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Unsorted ho toh line se dhoondo (O(N)), Sorted ho toh beech se kholo (O(log N))!"' }
        ]
      },
      summary: [
        'Array searching determines if a target value exists and returns its index position.',
        'Linear Search runs in linear O(N) time and works on any unsorted or sorted array.',
        'Binary Search runs in logarithmic O(log N) time by repeatedly halving the search space of a SORTED array.',
        'Both iterative Linear and Binary Search use constant O(1) auxiliary space.',
        'For a single query on unsorted data, Linear Search O(N) is more efficient than sorting first (O(N log N)).'
      ],
      faqs: [
        {
          q: 'What is the difference between Accessing and Searching?',
          a: 'Accessing retrieves a value using a known index in O(1) constant time. Searching locates the index of a value without knowing where it is stored.'
        },
        {
          q: 'Can Binary Search be used on unsorted arrays?',
          a: 'No. Binary Search depends on sorted ordering to eliminate half the array. On unsorted arrays it will make invalid branching decisions and fail.'
        },
        {
          q: 'Why is Binary Search O(log N)?',
          a: 'Because on every iteration the active search range is divided by 2 (N, N/2, N/4 ... 1), which takes at most log₂(N) steps.'
        },
        {
          q: 'What does Linear Search return when the target is not found?',
          a: 'By convention in JavaScript and DSA, searching functions return -1 when the target is not present.'
        },
        {
          q: 'Which is faster: `arr.indexOf()` or custom Binary Search?',
          a: 'On unsorted arrays, `arr.indexOf()` runs Linear Search in O(N). On large sorted arrays, custom Binary Search is exponentially faster (O(log N)).'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-linear-search',
      title: 'Linear Search',
      emoji: '➡️',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Linear Search (Sequential Search) is a fundamental searching algorithm that inspects every element in an array one by one from index 0 to N - 1 until the target value is found or the end of the array is reached.',
      secondExplain: 'Linear Search is universal because it requires zero assumptions about the data: it works equally well on unsorted, sorted, numeric, and string collections. When the target is found, the search terminates immediately (Early Exit), giving a Best-Case time of O(1) and a Worst-Case time of O(N).',
      definitionHighlight: '➡️ Core Rule: Check index 0 to N - 1 sequentially | Best Case O(1) | Worst Case O(N) | Space O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Linear Search?',
        subtitle: 'The universal search tool for raw, unsorted, and dynamic datasets.',
        mappings: [
          { need: '🔴 1. Searching Raw Unsorted Data', ds: 'Binary Search fails on unsorted data. Linear Search works universally without needing prior data sorting.' },
          { need: '⚡ 2. One-Off Search Queries', ds: 'Sorting an unsorted array takes O(N log N). For a single search, Linear Search O(N) is faster than sorting first!' },
          { need: '🎯 3. Small Dataset Simplicity', ds: 'For small arrays (N ≤ 50), Linear Search has near-zero overhead and out-performs complex tree or hash lookups in CPU cache efficiency.' },
          { need: '🔍 4. Finding Objects & Custom Predicates', ds: 'Scanning arrays for custom conditions (`user.age > 18` or `item.isActive`) is naturally implemented via linear iteration.' }
        ],
        takeaway: '💡 Linear Search is the most versatile search algorithm — it works on any data layout in linear O(N) time with zero extra memory.'
      },
      comparisonTable: {
        title: 'Linear Search Cases Compared',
        headers: ['Scenario', 'Target Location', 'Comparisons (N = 1000)', 'Time Complexity', 'Explanation'],
        rows: [
          { feature: 'Best Case ⭐', data: 'First element (Index 0)', ds: '1 comparison', third: 'O(1)', fourth: 'Loop terminates immediately on first iteration' },
          { feature: 'Average Case', data: 'Middle element (~Index N/2)', ds: '~500 comparisons', third: 'O(N)', fourth: 'Scans approximately half the collection on average' },
          { feature: 'Worst Case (Last item)', data: 'Last element (Index N - 1)', ds: '1,000 comparisons', third: 'O(N)', fourth: 'Must check every element up to the end' },
          { feature: 'Worst Case (Not found)', data: 'Absent from array', ds: '1,000 comparisons', third: 'O(N)', fourth: 'Inspects all N elements before returning -1' }
        ],
        takeaway: '💡 Linear Search achieves instant O(1) time when the target is at the front, but takes O(N) time when the target is near the end or missing.'
      },
      tradeoffs: {
        title: 'Key Concepts: Linear Search Invariants & Patterns',
        intro: 'Understanding how Linear Search operates across different DSA contexts:',
        items: [
          {
            title: '1. The Early Exit Optimization',
            desc: 'Using `return i` inside the loop terminates execution immediately upon finding the target, preventing wasted iterations.'
          },
          {
            title: '2. Sentinel Linear Search',
            desc: 'Placing the target at the very end of the array eliminates the `i < arr.length` boundary check on each iteration, speeding up inner loop execution.'
          },
          {
            title: '3. Built-in JavaScript Methods',
            desc: 'Methods like `arr.indexOf()`, `arr.includes()`, and `arr.find()` are all engine-optimized Linear Searches running in O(N) time.'
          }
        ]
      },
      hinglishExplain: `Linear Search ko simple Hinglish mein samjhein:

"Array ke pehle dabbe (Index 0) se lekar aakhri dabbe (Index N - 1) tak ek-ek karke check karna ki target value kahan hai. Jaise hi value mil jaye, turant uska index return kar do!"

Real-Life Example — Chabi Ka Guchha (Key Bunch):
Socho tumhare paas 10 unlabelled keys ka ek guchha hai aur tumhe tala kholna hai:
• Step 1: Pehli chabi lagayi ──► Tala nahi khula ❌
• Step 2: Doosri chabi lagayi ──► Tala nahi khula ❌
• Step 3: Teesri chabi lagayi ──► Tala khul gaya! ✅

Jaise hi tala khula, tumne baaki 7 keys ko check karna band kar diya!
Yahi hota hai **Linear Search with Early Exit**!

How It Works in Code:
\`\`\`javascript
const marks = [45, 88, 92, 70, 60];
// Target: 92

// Index 0: 45 === 92 ❌
// Index 1: 88 === 92 ❌
// Index 2: 92 === 92 ✅ Found at Index 2!
\`\`\`

🧠 Golden Rule:
"Index 0 se shuru karo, milte hi ruk jao (Early Exit), agar aakhri tak na mile toh -1 return karo!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Attendance Roll Call:

Masti Sir ke class mein 5 students baithe the:
const students = ["Rahul", "Neha", "Aman", "Priya", "Karan"];
// Indices:          0        1       2        3        4

Principal Sir ne aakar pucha: "Masti Sir, check kijiye kya class mein 'Aman' aaya hai aur wo kaunse roll number par hai?"

Masti Sir ne attendance register khola aur Roll 0 se check karna shuru kiya:

• Roll 0: "Rahul" ──► Aman nahi hai ❌
• Roll 1: "Neha"  ──► Aman nahi hai ❌
• Roll 2: "Aman"  ──► "Present Sir!" ✅

Masti Sir ne turant Principal Sir ko bola: "Sir, Aman Roll 2 par present hai!"
Sir ne Priya aur Karan ka naam nahi pukara kyunki Aman pehle hi mil gaya (Early Exit)!

Masti Sir bole:
"Agar Aman Roll 0 par hota toh 1 step mein mil jata ($O(1)$ Best Case). Agar Aman absent hota toh sabhi 5 bacchon ko pukarna padta ($O(N)$ Worst Case)!"

\`\`\`javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i; // Early exit!
  }
  return -1; // Not found
}
\`\`\`

🧠 Lesson:
"Linear Search ek-ek karke check karta hai. Best case mein O(1) aur worst case mein O(N) time lagta hai!"`,
      conceptMapping: [
        { emoji: '➡️', item: 'Linear Search', mapsTo: 'Sequential scan from index 0 to N - 1' },
        { emoji: '🎯', item: 'Target', mapsTo: 'The specific value being searched for' },
        { emoji: '⚡', item: 'Early Exit', mapsTo: 'Immediate return on finding target (O(1) best case)' },
        { emoji: '🚫', item: 'Return -1', mapsTo: 'Standard sentinel return when target does not exist' },
        { emoji: '⏱️', item: 'O(N) Time', mapsTo: 'Takes time directly proportional to array size N in worst case' },
        { emoji: '💾', item: 'O(1) Space', mapsTo: 'Zero extra memory allocation during search' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Linear Search for Target 7 on [4, 2, 7, 1, 9]',
        pipeline: [
          { step: '01. Check Index 0', desc: 'arr[0] = 4 | 4 === 7 is FALSE ❌ ──► Move to index 1' },
          { step: '02. Check Index 1', desc: 'arr[1] = 2 | 2 === 7 is FALSE ❌ ──► Move to index 2' },
          { step: '03. Check Index 2', desc: 'arr[2] = 7 | 7 === 7 is TRUE ✅ ──► Return Index 2 immediately' },
          { step: '04. Search Complete', desc: 'Found in 3 comparisons without checking remaining elements [1, 9]' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// LINEAR SEARCH IMPLEMENTATION & PATTERNS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. Classic Linear Search: Returns Index or -1
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Early exit: Target found at index i
    }
  }
  return -1; // Target not found after checking all N elements
}

const nums = [4, 2, 7, 1, 9];
console.log("Search for 7:", linearSearch(nums, 7));   // 2 (Found in 3 steps)
console.log("Search for 10:", linearSearch(nums, 10)); // -1 (Checked all 5 elements)

// 2. Linear Search with Custom Object Predicate
const users = [
  { id: 101, name: "Aman", active: true },
  { id: 102, name: "Bhavya", active: false },
  { id: 103, name: "Chirag", active: true }
];

function findUserByName(userList, targetName) {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].name === targetName) {
      return userList[i]; // Return the matching object
    }
  }
  return null;
}

console.log("Found user:", findUserByName(users, "Bhavya")); // { id: 102, name: "Bhavya", active: false }`,
      output: `Search for 7: 2
Search for 10: -1
Found user: { id: 102, name: 'Bhavya', active: false }`,
      starterCodeExample: {
        title: '💻 Runnable Code: Linear Search Playground',
        code: `function linearSearch(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i;\n  }\n  return -1;\n}\n\nconst arr = [10, 50, 30, 70, 80, 20];\nconsole.log("Index of 70:", linearSearch(arr, 70)); // 3\nconsole.log("Index of 99:", linearSearch(arr, 99)); // -1`
      },
      codeBreakdown: [
        { part: 'for (let i = 0; i < arr.length; i++)', label: 'Sequential Iteration: Visits indices 0, 1, 2 ... N-1 one by one.' },
        { part: 'if (arr[i] === target)', label: 'Equality Comparison: Checks if the current element matches the target value.' },
        { part: 'return i', label: 'Early Exit: Returns the matched index immediately, avoiding unnecessary remaining checks.' },
        { part: 'return -1', label: 'Sentinel Failure Return: Standard convention indicating the target does not exist in the array.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Searching for Target 7 on [4, 2, 7, 1, 9]',
        input: 'Array: [4, 2, 7, 1, 9], Target = 7, Length N = 5',
        target: 'Trace loop counter i, value arr[i], and comparison outcome',
        steps: [
          { step: 1, condition: 'i = 0 (0 < 5)', evaluation: 'arr[0] = 4 | 4 === 7 is FALSE', action: 'Mismatch ❌ ──► Increment i to 1' },
          { step: 2, condition: 'i = 1 (1 < 5)', evaluation: 'arr[1] = 2 | 2 === 7 is FALSE', action: 'Mismatch ❌ ──► Increment i to 2' },
          { step: 3, condition: 'i = 2 (2 < 5)', evaluation: 'arr[2] = 7 | 7 === 7 is TRUE', action: 'Match Found! ✅ ──► Return Index 2 immediately' }
        ]
      },
      operationComplexity: {
        title: 'Linear Search Complexity Breakdown',
        intro: 'Performance characteristics across best, average, and worst-case scenarios:',
        rows: [
          { ds: 'Best Case (Target at Index 0)', op: '1 comparison', comp: 'Time O(1) | Space O(1)', note: 'Found instantly on first iteration' },
          { ds: 'Average Case (Target in Middle)', op: 'N / 2 comparisons', comp: 'Time O(N) | Space O(1)', note: 'Linear proportionality to array size' },
          { ds: 'Worst Case (Target at End or Missing)', op: 'N comparisons', comp: 'Time O(N) | Space O(1)', note: 'Must inspect every element in array' }
        ],
        footnotes: [
          '* Auxiliary space is strictly O(1) because only 1 scalar loop counter variable `i` is used.'
        ]
      },
      timeComplexity: 'Time Complexity: Best Case O(1) | Average & Worst Case O(N)',
      timeComplexityExplain: 'If the target is at index 0, the search finishes in 1 comparison (O(1)). In the worst case (target at index N-1 or not present), all N elements are compared (O(N)).',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'Linear Search operates directly on the input array using only a single loop counter `i` with zero secondary memory allocation.',
      memoryTrickText: `🧠 Memory Trick — Linear Search:

• Pehla number match  ──► O(1) Best Case
• Aakhri number match ──► O(N) Worst Case
• Array mein nahi hai ──► O(N) Worst Case + Return -1

Golden Rule:
"Linear Search = Ek-ek karke line se check karna (O(N) Time, O(1) Space)!"`,
      commonMistakes: [
        '❌ Mistake 1: Forgetting the early `return` inside the loop (continuing to loop even after match).\n✅ Correct: Always `return i` immediately to save CPU cycles and achieve O(1) best case.',
        '❌ Mistake 2: Returning `true` / `false` when the problem asks for the numerical index.\n✅ Correct: Return the index `i` on match, and `-1` on failure.',
        '❌ Mistake 3: Putting `return -1` inside the `for` loop body instead of after the loop.\n✅ Correct: `return -1` must sit AFTER the loop finishes inspecting all elements.',
        '❌ Mistake 4: Using `<=` in loop condition (`i <= arr.length`).\n✅ Correct: Valid indices are `0` to `arr.length - 1`. Always use `i < arr.length`.'
      ],
      proTips: [
        '💡 Built-in Equivalents: `arr.indexOf(target)` returns the index or -1; `arr.includes(target)` returns boolean true/false; both run Linear Search in O(N) time.',
        '💡 When to Choose Linear Search: For small arrays (N ≤ 50) or raw unsorted data where sorting (O(N log N)) would be slower than a direct O(N) scan.',
        '💡 Sentinel Optimization: Placing the target value at `arr[N]` allows you to remove the `i < arr.length` boundary check inside the loop, saving 1 comparison per iteration.'
      ],
      topicQuestions: [
        {
          question: 'What is Linear Search?',
          answer: 'Linear Search is an algorithm that sequentially checks each element in an array from start to finish until the target is found or the array ends.',
          explanation: 'It inspects elements one by one.'
        },
        {
          question: 'What is the Best-Case Time Complexity of Linear Search?',
          answer: 'O(1) Constant time, which occurs when the target is located at the very first element (index 0).',
          explanation: 'Requires only 1 comparison.'
        },
        {
          question: 'What is the Worst-Case Time Complexity of Linear Search?',
          answer: 'O(N) Linear time, which occurs when the target is at the last index or is not present in the array at all.',
          explanation: 'Must check all N elements.'
        },
        {
          question: 'What does Linear Search return when the target value is not present in the array?',
          answer: 'It returns -1 by standard DSA convention.',
          explanation: '-1 indicates invalid index / not found.'
        },
        {
          question: 'Does Linear Search require the input array to be sorted?',
          answer: 'No. Linear Search works on both unsorted and sorted arrays without any preconditions.',
          explanation: 'It is a universal search algorithm.'
        }
      ],
      interviewQuestions: [
        'What is Linear Search?',
        'What is the Best-Case Time Complexity of Linear Search?',
        'What is the Worst-Case Time Complexity of Linear Search?',
        'What does Linear Search return when the target value is not present in the array?',
        'Does Linear Search require the input array to be sorted?'
      ],
      quizList: [
        {
          question: 'Q1. What is the Worst-Case Time Complexity of Linear Search on an array with N elements?',
          options: [
            'O(1)',
            'O(log N)',
            'O(N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'When the target is at the end or absent, all N elements must be compared.'
        },
        {
          question: 'Q2. When does Linear Search achieve its Best-Case Time Complexity of O(1)?',
          options: [
            'When the array is sorted',
            'When the target is at index 0',
            'When the target is at index N - 1',
            'When the array has an even length'
          ],
          answer: 'When the target is at index 0',
          explanation: 'Matching the first element allows immediate early return in 1 step.'
        },
        {
          question: 'Q3. What is the Auxiliary Space Complexity of Linear Search?',
          options: [
            'O(N)',
            'O(log N)',
            'O(1)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'Linear Search uses only 1 loop counter variable with zero extra heap allocation.'
        },
        {
          question: 'Q4. What is the return value of `linearSearch([10, 20, 30], 99)`?',
          options: [
            'null',
            'undefined',
            '-1',
            'false'
          ],
          answer: '-1',
          explanation: 'Standard search implementations return -1 when the target is absent.'
        },
        {
          question: 'Q5. Why is Linear Search preferred over Binary Search for a single query on an unsorted array?',
          options: [
            'Linear Search uses less CPU memory',
            'Sorting the array first (O(N log N)) is slower than a single Linear Search (O(N))',
            'Binary Search does not work in JavaScript',
            'Linear Search has O(1) average time'
          ],
          answer: 'Sorting the array first (O(N log N)) is slower than a single Linear Search (O(N))',
          explanation: 'For 1 search, O(N) is faster than O(N log N) sorting overhead.'
        }
      ],
      quickRevision: {
        title: '➡️ 30 Second Revision — Linear Search',
        items: [
          { emoji: '🔍', title: 'Mechanism', desc: 'Sequential inspection from index 0 to N - 1.' },
          { emoji: '⚡', title: 'Best Case', desc: 'O(1) time when target is at index 0.' },
          { emoji: '🐢', title: 'Worst Case', desc: 'O(N) time when target is at end or missing.' },
          { emoji: '💾', title: 'Space', desc: 'O(1) auxiliary constant space.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Index 0 se shuru karo, milte hi ruk jao, na mile toh -1 do!"' }
        ]
      },
      summary: [
        'Linear Search inspects array elements one by one from left to right.',
        'It is universal and works on both unsorted and sorted datasets.',
        'Best-case time is O(1) when the target is at index 0.',
        'Worst-case and average-case time is O(N).',
        'Auxiliary space complexity is strictly O(1).'
      ],
      faqs: [
        {
          q: 'When should I use Linear Search?',
          a: 'Use Linear Search on unsorted data, small arrays (N ≤ 50), or when performing a single one-off search.'
        },
        {
          q: 'Why does Linear Search return -1 when target is missing?',
          a: 'Because -1 is an invalid index in 0-indexed arrays, making it an unambiguous indicator of failure.'
        },
        {
          q: 'Is `Array.prototype.indexOf()` a Linear Search?',
          a: 'Yes. Under the hood, JavaScript engines implement `indexOf` and `includes` as optimized linear searches.'
        },
        {
          q: 'Can Linear Search be optimized for sorted arrays?',
          a: 'Yes. If the array is sorted ascending and `arr[i] > target`, you can break early without checking the rest of the array.'
        },
        {
          q: 'What is Sentinel Linear Search?',
          a: 'It sets `arr[N] = target` to eliminate the loop index boundary check `i < N`, saving 1 comparison per iteration.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-binary-search-intro',
      title: 'Binary Search Introduction',
      emoji: '🎯',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Binary Search is an efficient searching algorithm used on sorted data. It checks the middle element and eliminates half of the remaining search space after each comparison, running in logarithmic O(log N) time.',
      secondExplain: 'Instead of inspecting elements one by one, Binary Search maintains two boundary pointers (low and high) and repeatedly cuts the search space in half. For 1,000,000 sorted elements, Linear Search might take 1,000,000 steps while Binary Search finishes in at most 20 comparisons.',
      definitionHighlight: '🎯 In One Line: "Middle dekho ──► decide karo ──► aadha data hatao ──► repeat." | Time: O(log N) | Space: O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Binary Search?',
        subtitle: 'How logarithmic search space halving slashes search times across massive sorted collections.',
        mappings: [
          { need: '🔴 1. The Nightmare of Linear Scanning at Scale', ds: 'Searching 1,000,000 sorted student records sequentially with Linear Search can take up to 1,000,000 checks.' },
          { need: '⚡ 2. Halving Search Space with Binary Search', ds: 'Binary Search cuts 1,000,000 ──► 500,000 ──► 250,000 ──► 125,000 ... finding any target in at most 20 steps (O(log N)).' },
          { need: '🔒 3. The Power of Sorted Order', ds: 'Binary Search does not guess randomly; it leverages sorted monotonicity to safely discard impossible portions.' },
          { need: '💾 4. Zero Memory Overhead', ds: 'Iterative Binary Search runs using only 3 scalar pointer variables (low, mid, high) in strictly O(1) auxiliary space.' }
        ],
        takeaway: '💡 Every single step of Binary Search eliminates 50% of the remaining search space, converting massive linear workloads into ultra-fast logarithmic lookups.'
      },
      comparisonTable: {
        title: 'Linear Search vs Binary Search Compared',
        headers: ['Feature', 'Linear Search', 'Binary Search ⭐'],
        rows: [
          { feature: 'Data Requirement', data: 'Sorted not required (Any array)', ds: 'STRICTLY SORTED (or monotonic condition)' },
          { feature: 'Search Method', data: 'Sequential one-by-one check', ds: 'Middle element comparison (Halves range)' },
          { feature: 'Worst-Case Time', data: 'O(N) Linear', ds: 'O(log N) Logarithmic' },
          { feature: 'Steps for N = 16', data: 'Up to 16 checks', ds: '16 ──► 8 ──► 4 ──► 2 ──► 1 (4 checks)' },
          { feature: 'Steps for N = 1,000,000', data: 'Up to 1,000,000 checks', ds: 'At most 20 checks (log₂ 10⁶ ≈ 20)' },
          { feature: 'Auxiliary Space', data: 'O(1) Constant', ds: 'O(1) Constant (Iterative)' },
          { feature: 'Real-World Analogy', data: 'Calling student roll numbers one by one', ds: 'Opening a dictionary directly at the middle' }
        ],
        takeaway: '💡 Binary Search is exponentially faster than Linear Search on large datasets, but strictly requires the array to be sorted.'
      },
      tradeoffs: {
        title: '⚠️ MOST IMPORTANT RULE: The Sorted Array Invariant',
        intro: 'Why Binary Search cannot work on unsorted collections:',
        items: [
          {
            title: '❌ Unsorted Array: `[40, 10, 80, 20, 50]`',
            desc: 'If `mid = 80`, you cannot safely conclude whether target `20` is on the left or right. Discarding either half risks discarding the target!'
          },
          {
            title: '✅ Sorted Array: `[10, 20, 40, 50, 80]`',
            desc: 'If target = `20` and `mid = 40`: since `20 < 40`, all elements to the right (`50, 80`) are guaranteed to be greater than 20 and can be safely eliminated!'
          },
          {
            title: '🧠 Core Takeaway',
            desc: '"Sorted hai ──► half eliminate kar sakte ho. Unsorted hai ──► Linear search use karo."'
          }
        ]
      },
      hinglishExplain: `Binary Search ko simple Hinglish mein samjhein:

"Binary Search ek aisa algorithm hai jo sorted array ke theek **beech wale element (mid)** ko check karta hai aur har step par **aadhe array ko eliminate** kar deta hai!"

Aadha Data Kaise Hatta Hai?
Socho tumhare paas 16 elements hain:
• Step 1: 16 elements ──► Middle check kiya ──► 8 elements bache
• Step 2: 8 elements  ──► Middle check kiya ──► 4 elements bache
• Step 3: 4 elements  ──► Middle check kiya ──► 2 elements bache
• Step 4: 2 elements  ──► Middle check kiya ──► 1 element bacha (Target mil gaya! 🎯)

Sirf **4 steps** mein 16 elements search ho gaye! ($\log_2 16 = 4$).

Decision Rule:
1. \`arr[mid] === target\` ──► Target mil gaya! Index return karo!
2. \`arr[mid] < target\`   ──► Target bada hai, matlab **Right Half** mein jao (\`low = mid + 1\`).
3. \`arr[mid] > target\`   ──► Target chota hai, matlab **Left Half** mein jao (\`high = mid - 1\`).

🧠 Main Memory Hook:
"Middle dekho ──► decide karo ──► aadha data hatao ──► repeat."`,
      storyExplain: `📖 Masti Sir Ki Kahani — Dictionary Trick:

Masti Sir ne class mein ek student "Chintu" ko ek 1,000 pages ki moti English Dictionary di aur bola:
"Chintu, isme 'Mango' word dhoond kar dikhao!"

Chintu ne Page 1 se ek-ek page palatna shuru kiya: Page 1 ──► Page 2 ──► Page 3...

Masti Sir ne turant Chintu ko roka aur bole:
"Pagal! Dictionary A to Z SORTED hoti hai! Page 1 se kyu dhoond raha hai? **Beech se kholo!**"

Chintu ne theek beech (Page 500: Letter 'M') se dictionary kholi:
• Page 500 par word tha "Master".
• "Mango", "Master" se pehle aata hai alphabetically!
• Masti Sir bole: "Iska matlab Mango hamesha **LEFT half (Page 1..499)** mein hoga! Right ke 500 pages ko bina dekhe reject kar do!"

Chintu ne bache hue left half ke beech se khola, aur agle 8-9 steps mein "Mango" mil gaya!

💻 Code mein bhi exactly yahi hota hai:
• \`low = 0\` (Left boundary)
• \`high = arr.length - 1\` (Right boundary)
• \`mid = Math.floor((low + high) / 2)\` (Middle position)

🧠 Lesson:
"Binary Search = Dictionary ko middle se search karna. Har step par aadha search space gayab!"`,
      conceptMapping: [
        { emoji: '🎯', item: 'Binary Search', mapsTo: 'Divide-and-conquer on sorted data (O(log N))' },
        { emoji: '📍', item: 'low Pointer', mapsTo: 'Left boundary of the active search range' },
        { emoji: '📍', item: 'high Pointer', mapsTo: 'Right boundary of the active search range' },
        { emoji: '⚖️', item: 'mid Index', mapsTo: 'Center element dividing active search space in half' },
        { emoji: '✂️', item: 'Half Elimination', mapsTo: 'Discarding either left half or right half based on comparison' },
        { emoji: '🚫', item: 'Return -1', mapsTo: 'Occurs when low > high (target not present)' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Binary Search for Target 70 on [10, 20, 30, 40, 50, 60, 70, 80, 90]',
        pipeline: [
          { step: '01. Pass 1: [0..8]', desc: 'low = 0, high = 8 ──► mid = 4 (Value 50). Since 70 > 50 ──► eliminate LEFT half [10..50], low = 5' },
          { step: '02. Pass 2: [5..8]', desc: 'low = 5, high = 8 ──► mid = 6 (Value 70). Since 70 === 70 ──► 🎯 TARGET FOUND at Index 6!' },
          { step: '03. Result', desc: 'Found in only 2 comparisons out of 9 elements! (Every step eliminates 50% search space)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// BINARY SEARCH IMPLEMENTATION IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // Calculate middle index
    const mid = Math.floor((low + high) / 2);

    // Case 1: Target found at middle index
    if (arr[mid] === target) {
      return mid;
    }

    // Case 2: Target is greater -> search RIGHT half
    if (arr[mid] < target) {
      low = mid + 1; // Discard left half including mid
    } 
    // Case 3: Target is smaller -> search LEFT half
    else {
      high = mid - 1; // Discard right half including mid
    }
  }

  // Target not found
  return -1;
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log("Search for 70:", binarySearch(numbers, 70)); // Output: 6 (Found in 2 steps)
console.log("Search for 25:", binarySearch(numbers, 25)); // Output: -1 (Not found)`,
      output: `Search for 70: 6
Search for 25: -1`,
      starterCodeExample: {
        title: '💻 Runnable Code: Binary Search Playground',
        code: `function binarySearch(arr, target) {\n  let low = 0, high = arr.length - 1;\n  while (low <= high) {\n    let mid = Math.floor((low + high) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}\n\nconst sorted = [5, 12, 18, 23, 38, 45, 56, 72, 91];\nconsole.log("Index of 45:", binarySearch(sorted, 45)); // 5\nconsole.log("Index of 100:", binarySearch(sorted, 100)); // -1`
      },
      codeBreakdown: [
        { part: 'let low = 0, high = arr.length - 1', label: 'Boundary Pointers: Defines the initial search window spanning the entire array.' },
        { part: 'while (low <= high)', label: 'Loop Invariant: Continues searching as long as there is at least 1 candidate element in the window.' },
        { part: 'const mid = Math.floor((low + high) / 2)', label: 'Midpoint Formula: Identifies the central element to divide the search space.' },
        { part: 'low = mid + 1', label: 'Discard Left: Moves left boundary past mid when target is strictly greater than arr[mid].' },
        { part: 'high = mid - 1', label: 'Discard Right: Moves right boundary before mid when target is strictly less than arr[mid].' },
        { part: 'return -1', label: 'Not Found Sentinel: Reached when low > high, proving the target is not in the array.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Searching for Target 70 on [10, 20, 30, 40, 50, 60, 70, 80]',
        input: 'Sorted Array: [10, 20, 30, 40, 50, 60, 70, 80], Target = 70, N = 8',
        target: 'Trace low, high, mid, arr[mid], and active search window',
        steps: [
          { step: 1, condition: 'low = 0, high = 7 (0 <= 7)', evaluation: 'mid = floor((0+7)/2) = 3 | arr[3] = 40. Since 40 < 70, low = 3 + 1 = 4', action: 'Left half [10..40] eliminated ✅' },
          { step: 2, condition: 'low = 4, high = 7 (4 <= 7)', evaluation: 'mid = floor((4+7)/2) = 5 | arr[5] = 60. Since 60 < 70, low = 5 + 1 = 6', action: 'Sub-range [50..60] eliminated ✅' },
          { step: 3, condition: 'low = 6, high = 7 (6 <= 7)', evaluation: 'mid = floor((6+7)/2) = 6 | arr[6] = 70. Since 70 === 70, return Index 6', action: 'Target Found in 3 steps! (O(log N)) ✅' }
        ]
      },
      operationComplexity: {
        title: 'Binary Search Complexity Profile',
        intro: 'Detailed mathematical breakdown of Binary Search performance:',
        rows: [
          { ds: 'Best Case (Target at Initial Mid)', op: '1 comparison', comp: 'Time O(1) | Space O(1)', note: 'Found immediately on first iteration' },
          { ds: 'Average Case', op: '~log₂ N comparisons', comp: 'Time O(log N) | Space O(1)', note: 'Logarithmic reduction on each step' },
          { ds: 'Worst Case (Leaf or Not Found)', op: '⌊log₂ N⌋ + 1 comparisons', comp: 'Time O(log N) | Space O(1)', note: 'At most 20 steps for 1,000,000 elements' }
        ],
        footnotes: [
          '* Auxiliary Space is strictly O(1) for iterative implementation. Recursive Binary Search uses O(log N) call stack space.'
        ]
      },
      timeComplexity: 'Time Complexity: Best Case O(1) | Average & Worst Case O(log N)',
      timeComplexityExplain: 'Because the search range is divided by 2 on every iteration (N, N/2, N/4 ... 1), the maximum number of comparisons is bounded by log₂(N).',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'The iterative implementation uses only 3 scalar pointer variables (low, high, mid) with zero extra memory allocation.',
      memoryTrickText: `🧠 Memory Trick — Binary Search:

• Middle match           ──► O(1) Best Case
• Target bada (>)        ──► low = mid + 1 (Right jao)
• Target chota (<)       ──► high = mid - 1 (Left jao)
• Search range halving   ──► O(log N) Time

Golden Rule:
"Middle dekho ──► decide karo ──► aadha data hatao ──► repeat!"`,
      commonMistakes: [
        '❌ Mistake 1: Using `low < high` instead of `low <= high` in while loop.\n✅ Correct: Using `<` causes the loop to terminate prematurely when the target is at a 1-element boundary where `low === high`.',
        '❌ Mistake 2: Writing `low = mid` or `high = mid` instead of `mid + 1` / `mid - 1`.\n✅ Correct: You must exclude `mid` because `arr[mid]` was already verified; forgetting `+1`/`-1` causes infinite loops!',
        '❌ Mistake 3: Applying Binary Search on an unsorted array.\n✅ Correct: Binary Search strictly requires sorted or monotonic data.',
        '❌ Mistake 4: Integer overflow in other languages `(low + high) / 2`.\n✅ Correct: In languages with 32-bit integer limits, use `low + Math.floor((high - low) / 2)`.'
      ],
      proTips: [
        '💡 How to Recognize Binary Search in Interviews: Look for keywords like "Sorted Array", "O(log N) time required", "Find boundary / peak element", or "Search on answer range".',
        '💡 One-Off vs Repeated Search: Only sort before Binary Search if you perform multiple queries. For 1 single search on unsorted data, Linear Search O(N) is faster than O(N log N) sorting.',
        '💡 Monotonic Condition: Binary Search does not just work on numbers — it works on ANY problem where a condition changes monotonically from [False, False ... True, True].'
      ],
      topicQuestions: [
        {
          question: 'What is Binary Search?',
          answer: 'Binary Search is a divide-and-conquer algorithm for sorted data that repeatedly halves the search space by comparing the target with the middle element.',
          explanation: 'It runs in O(log N) time.'
        },
        {
          question: 'Why does Binary Search require the array to be sorted?',
          answer: 'Because sorted order is what guarantees that all elements to the left of mid are smaller and all elements to the right are larger, allowing safe elimination of half the array.',
          explanation: 'Without sorting, halving cannot be done safely.'
        },
        {
          question: 'What is the Worst-Case Time Complexity of Binary Search on N elements?',
          answer: 'O(log N) time, because the search space is divided by 2 on every iteration.',
          explanation: 'Maximum log₂(N) comparisons.'
        },
        {
          question: 'What is the Auxiliary Space Complexity of iterative Binary Search?',
          answer: 'O(1) Constant Space, because it uses only a fixed number of pointer variables.',
          explanation: 'No extra array is allocated.'
        },
        {
          question: 'Why is the loop condition `while (low <= high)` rather than `while (low < high)`?',
          answer: 'Because when `low === high`, there is still 1 remaining candidate element at that index that must be evaluated.',
          explanation: 'Ensures 1-element ranges are tested.'
        }
      ],
      interviewQuestions: [
        'What is Binary Search?',
        'Why does Binary Search require the array to be sorted?',
        'What is the Worst-Case Time Complexity of Binary Search on N elements?',
        'What is the Auxiliary Space Complexity of iterative Binary Search?',
        'Why is the loop condition while (low <= high) rather than while (low < high)?'
      ],
      quizList: [
        {
          question: 'Q1. What is the Maximum number of comparisons Binary Search takes on a sorted array of 1,000,000 elements?',
          options: [
            '1,000,000',
            '500,000',
            '20 (log₂ 1,000,000 ≈ 20)',
            '1'
          ],
          answer: '20 (log₂ 1,000,000 ≈ 20)',
          explanation: 'log₂(10⁶) ≈ 19.93, so at most 20 comparisons are required.'
        },
        {
          question: 'Q2. If `arr[mid] < target` in an ascending sorted array, which pointer is updated?',
          options: [
            'high = mid - 1',
            'low = mid + 1',
            'low = mid',
            'high = mid'
          ],
          answer: 'low = mid + 1',
          explanation: 'The target is greater than mid, so the search moves to the right half by setting low = mid + 1.'
        },
        {
          question: 'Q3. What happens if you apply Binary Search on an UNSORTED array?',
          options: [
            'It automatically sorts the array first',
            'It gives an incorrect answer or fails to find existing elements',
            'It runs in O(N²)',
            'It throws a JavaScript runtime error'
          ],
          answer: 'It gives an incorrect answer or fails to find existing elements',
          explanation: 'On unsorted data, eliminating half the array risks discarding the target value.'
        },
        {
          question: 'Q4. What is the Auxiliary Space Complexity of iterative Binary Search?',
          options: [
            'O(N)',
            'O(log N)',
            'O(1)',
            'O(N log N)'
          ],
          answer: 'O(1)',
          explanation: 'Iterative Binary Search uses only low, high, and mid scalar variables.'
        },
        {
          question: 'Q5. What is the Best-Case Time Complexity of Binary Search?',
          options: [
            'O(log N)',
            'O(1)',
            'O(N)',
            'O(0)'
          ],
          answer: 'O(1)',
          explanation: 'When the target is located at the exact initial midpoint, it is found in 1 comparison.'
        }
      ],
      quickRevision: {
        title: '🎯 30 Second Revision — Binary Search',
        items: [
          { emoji: '🔒', title: 'Prerequisite', desc: 'Array MUST be sorted.' },
          { emoji: '✂️', title: 'Mechanism', desc: 'Compare mid ──► eliminate 50% search space.' },
          { emoji: '⏱️', title: 'Time', desc: 'Best O(1) | Worst O(log N).' },
          { emoji: '💾', title: 'Space', desc: 'O(1) auxiliary constant space.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Middle dekho ──► decide karo ──► aadha data hatao ──► repeat!"' }
        ]
      },
      summary: [
        'Binary Search is a logarithmic O(log N) search algorithm for sorted collections.',
        'It compares the target with the middle element (mid) and eliminates half the search space on each pass.',
        'It strictly requires the search space to be sorted or monotonic.',
        'Iterative Binary Search runs in constant O(1) auxiliary space.',
        'For 1,000,000 elements, Binary Search takes at most 20 comparisons.'
      ],
      faqs: [
        {
          q: 'Why is Binary Search so much faster than Linear Search?',
          a: 'Because Linear Search eliminates only 1 element per comparison, whereas Binary Search eliminates 50% of all remaining elements per comparison.'
        },
        {
          q: 'Can Binary Search be used on Linked Lists?',
          a: 'While conceptually possible, Linked Lists take O(N) to reach the middle node, negating the O(log N) speedup. Binary Search requires O(1) random index access.'
        },
        {
          q: 'What is the integer overflow bug in Binary Search?',
          a: 'In 32-bit languages like C++/Java, `(low + high)` can exceed 2³¹ - 1. Using `low + (high - low) / 2` avoids this overflow.'
        },
        {
          q: 'What happens when the target is not in the array?',
          a: 'The pointers cross (`low > high`), the while loop terminates, and the function returns -1.'
        },
        {
          q: 'What is "Binary Search on Answer"?',
          a: 'An advanced interview technique where Binary Search is applied over the range of possible answers (e.g. minimum capacity or time) instead of an input array.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-two-pointer-technique',
      title: 'Two Pointer Technique',
      emoji: '👉👈',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '12 min',
      englishDef: 'The Two Pointer Technique is an algorithmic pattern where two index pointers traverse a linear data structure simultaneously—either moving towards each other from opposite ends or moving in the same direction at different speeds—to solve search, reversal, and pair-sum problems in optimal O(N) time and O(1) space.',
      secondExplain: 'Instead of using nested loops that test all pairs in quadratic O(N²) time, the Two Pointer approach leverages array ordering or index boundaries. By updating either the left or right pointer based on conditions, the algorithm inspects every candidate in a single linear pass.',
      definitionHighlight: '👉👈 In One Line: "Do pointers, ek array, unnecessary nested loop (O(N²)) khatam!" | Time: O(N) | Space: O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need the Two Pointer Technique?',
        subtitle: 'Eliminating quadratic O(N²) bottlenecks in pair searching, array reversal, and partitioning.',
        mappings: [
          { need: '🔴 1. The Slowness of Nested Loops', ds: 'Testing all pairs for a target sum using nested `for (let i...) for (let j...)` checks N(N-1)/2 pairs in slow O(N²) time.' },
          { need: '⚡ 2. Single Pass O(N) Solution', ds: 'On sorted arrays, two converging pointers check candidate pairs from opposite ends in a single O(N) linear sweep.' },
          { need: '💾 3. In-Place Reversal with O(1) Space', ds: 'Swapping elements between `left` and `right` pointers reverses an array without allocating a second array in memory.' },
          { need: '🎯 4. Read/Write Partitioning (Fast & Slow)', ds: 'Removing duplicates or moving zeroes uses fast/slow pointers to overwrite values in-place in O(N) time.' }
        ],
        takeaway: '💡 The Two Pointer technique is the gold standard for reducing O(N²) brute-force solutions down to linear O(N) time while keeping memory strictly O(1).'
      },
      comparisonTable: {
        title: 'Brute Force vs Two Pointer Technique',
        headers: ['Problem Type', 'Brute Force Approach', 'Two Pointer Approach ⭐', 'Time Improvement', 'Space Used'],
        rows: [
          { feature: 'Array In-Place Reversal', data: 'Create new array & copy backward', ds: 'Swap `arr[left]` and `arr[right]`', third: 'O(N) ──► O(N)', fourth: 'O(N) ──► O(1) Space ⭐' },
          { feature: 'Two Sum on Sorted Array', data: 'Nested loops checking all pairs', ds: 'Converging pointers (`left++`, `right--`)', third: 'O(N²) ──► O(N) Time ⭐', fourth: 'O(1) Space' },
          { feature: 'Valid Palindrome Check', data: 'Reverse entire string and compare', ds: 'Compare `str[left]` with `str[right]`', third: 'O(N) with extra string', fourth: 'O(1) Space' },
          { feature: 'Remove Duplicates in-place', data: 'Repeated `splice()` calls in loop', ds: 'Slow/Fast read-write pointers', third: 'O(N²) ──► O(N) Time ⭐', fourth: 'O(1) Space' }
        ],
        takeaway: '💡 Two Pointers transforms quadratic O(N²) algorithms into single-pass O(N) solutions and eliminates secondary array memory allocations.'
      },
      tradeoffs: {
        title: 'Two Core Pointer Patterns',
        intro: 'Mastering the two fundamental movement patterns in pointer programming:',
        items: [
          {
            title: '1. Opposite Direction (Converging Pointers) ──► ◄──',
            desc: '`left = 0` and `right = N - 1` move towards each other until they meet (`while (left < right)`). Best for: Array Reversal, Two Sum on Sorted Array, Palindromes, Container With Most Water.'
          },
          {
            title: '2. Same Direction (Fast & Slow / Read-Write) ──► ──►',
            desc: 'Both pointers start at the beginning; `fast` scans ahead while `slow` writes valid data. Best for: Remove Duplicates (LeetCode 26), Move Zeroes (LeetCode 283), Cycle Detection.'
          },
          {
            title: '⚠️ Sorting Requirement Warning',
            desc: 'For Two Sum / Pair Sum problems, converging two pointers strictly requires the array to be SORTED. On unsorted arrays, use a Hash Map (O(N) time & O(N) space) or sort first.'
          }
        ]
      },
      hinglishExplain: `Two Pointer Technique ko simple Hinglish mein samjhein:

"Array mein 2 alag-alag index pointers (\`left\` aur \`right\`) rakh kar unhe ek sath chalana **Two Pointer Technique** kehlata hai. Isse nested loops ($O(N^2)$) lagane ki zaroorat nahi padti aur kaam 1 single loop ($O(N)$) mein ho jata hai!"

Do Tarah Ke Pointers Hote Hain:

Pattern 1: Opposite Ends Se Chalna (Converging Pointers ──► ◄──)
• \`left = 0\` (Array ke shuru mein)
• \`right = arr.length - 1\` (Array ke aakhri mein)
• Dono ek doosre ki taraf aate hain jab tak \`left < right\` ho.
• **Examples:** Array reverse karna, Palindrome check karna, Sorted array mein Two Sum dhoondna.

Pattern 2: Same Direction Mein Chalna (Fast & Slow Pointers ──► ──►)
• \`slow = 0\` aur \`fast = 0\` dono shuru se start hote hain.
• \`fast\` aage jaakar inspect karta hai, aur \`slow\` valid data ko write karta hai.
• **Examples:** Move Zeroes, Remove Duplicates.

🧠 Yaad Rakhne Ki Trick:
"Opposite direction: Left aage badhega, Right peeche aayega, beech mein milenge!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Classroom Line Reverse Challenge:

Masti Sir ke class mein 6 students ek line mein khade the:
const students = ["Aman", "Bhavya", "Chirag", "Divya", "Eshan", "Farhan"];
// Indices:          0        1         2         3        4        5

Masti Sir ne class ko bola: "Poori line ko ulta (reverse) karna hai!"

Ek student "Bunty" ne bola: "Sir, main ek naya empty classroom lunga aur aakhri bache se pehle bache tak ek-ek karke naye room mein bithaunga ($O(N)$ extra memory)!"

Masti Sir bole: "Naya room lene ki koi zaroorat nahi hai! Do monitors banao:
• **Aman (Left Pointer - Index 0)**
• **Farhan (Right Pointer - Index 5)**"

Masti Sir ne bola:
1. Aman aur Farhan aapas mein seat badal lo (Swap) ──► Aman aage badha (\`left++\`), Farhan peeche aaya (\`right--\`).
2. Bhavya (Index 1) aur Eshan (Index 4) ne seat swap ki ──► Pointers aage badhe.
3. Chirag (Index 2) aur Divya (Index 3) ne seat swap ki ──► Pointers meet hue!

Poori line in-place reverse ho gayi! Kisi naye room ($O(1)$ memory) ki zaroorat nahi padi aur sirf $\\frac{N}{2}$ swaps mein kaam ho gaya ($O(N)$ time)!

🎯 Story Se Concept:
"Line ke dono kinaro se swap karte hue beech mein aao — zero extra memory ($O(1)$) aur single pass ($O(N)$) mein kaam done!"`,
      conceptMapping: [
        { emoji: '👉👈', item: 'Two Pointer Technique', mapsTo: 'Simultaneous traversal with 2 index variables' },
        { emoji: '📍', item: 'left Pointer', mapsTo: 'Starts at index 0 and increments forward (`left++`)' },
        { emoji: '📍', item: 'right Pointer', mapsTo: 'Starts at index N - 1 and decrements backward (`right--`)' },
        { emoji: '🔄', item: 'In-Place Swap', mapsTo: '`[arr[left], arr[right]] = [arr[right], arr[left]]` in O(1) space' },
        { emoji: '⚡', item: 'Sum Decision', mapsTo: 'sum < target ──► left++ | sum > target ──► right--' },
        { emoji: '⏱️', item: 'O(N) Time', mapsTo: 'Each pointer moves at most N steps total' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Array Reversal on [10, 20, 30, 40, 50]',
        pipeline: [
          { step: '01. Initial State', desc: 'left = 0 (10), right = 4 (50) ──► Swap 10 & 50 ──► [50, 20, 30, 40, 10], left=1, right=3' },
          { step: '02. Second Step', desc: 'left = 1 (20), right = 3 (40) ──► Swap 20 & 40 ──► [50, 40, 30, 20, 10], left=2, right=2' },
          { step: '03. Termination', desc: 'left === right (2 === 2) ──► Loop terminates. Final array: [50, 40, 30, 20, 10] ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// TWO POINTER ALGORITHMS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. IN-PLACE ARRAY REVERSAL: O(N) Time, O(1) Space
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements in-place using ES6 destructuring
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;  // Move left pointer rightward
    right--; // Move right pointer leftward
  }

  return arr;
}

const nums = [10, 20, 30, 40, 50];
console.log("Reversed Array:", reverseArray(nums)); // [50, 40, 30, 20, 10]

// 2. TWO SUM ON SORTED ARRAY (Pair Sum Target): O(N) Time, O(1) Space
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return [left, right]; // Found pair indices!
    } else if (currentSum < target) {
      left++; // Need larger sum -> move left pointer rightward
    } else {
      right--; // Need smaller sum -> move right pointer leftward
    }
  }

  return null; // No pair exists
}

const sortedList = [10, 20, 30, 40, 50, 60];
console.log("Pair indices for target 70:", twoSumSorted(sortedList, 70)); // [0, 5] (10 + 60 = 70)`,
      output: `Reversed Array: [ 50, 40, 30, 20, 10 ]
Pair indices for target 70: [ 0, 5 ]`,
      starterCodeExample: {
        title: '💻 Runnable Code: Two Pointer Playground',
        code: `// Valid Palindrome using Two Pointers\nfunction isPalindrome(str) {\n  let left = 0, right = str.length - 1;\n  while (left < right) {\n    if (str[left] !== str[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n\nconsole.log("isPalindrome('racecar'):", isPalindrome("racecar")); // true\nconsole.log("isPalindrome('hello'):", isPalindrome("hello"));     // false`
      },
      codeBreakdown: [
        { part: 'let left = 0, right = arr.length - 1', label: 'Pointer Initialization: Sets left at start and right at end.' },
        { part: 'while (left < right)', label: 'Loop Invariant: Continues until pointers meet or cross in the middle.' },
        { part: '[arr[left], arr[right]] = [arr[right], arr[left]]', label: 'Destructuring Swap: Exchanges elements in-place with zero extra memory.' },
        { part: 'left++; right--;', label: 'Pointer Convergence: Advances left pointer forward and right pointer backward.' },
        { part: 'currentSum < target ? left++ : right--', label: 'Greedy Elimination: Discards impossible sums based on sorted ordering in O(1).' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Two Sum Target 70 on [10, 20, 30, 40, 50, 60]',
        input: 'Sorted Array: [10, 20, 30, 40, 50, 60], Target = 70',
        target: 'Trace left, right, sum = arr[left] + arr[right], and decision',
        steps: [
          { step: 1, condition: 'left = 0 (10), right = 5 (60)', evaluation: 'sum = 10 + 60 = 70 | 70 === 70 is TRUE', action: 'Match Found! Return [0, 5] in 1 step! (O(1) Best Case) ✅' }
        ]
      },
      operationComplexity: {
        title: 'Two Pointer Complexity Breakdown',
        intro: 'Comparing Two Pointer efficiency against brute-force nested loops:',
        rows: [
          { ds: 'Two Sum on Sorted Array', op: 'Two Pointers', comp: 'Time O(N) | Space O(1)', note: 'Eliminates O(N²) nested loops' },
          { ds: 'Array Reversal In-Place', op: 'Opposite Pointers', comp: 'Time O(N) | Space O(1)', note: 'Zero secondary array memory' },
          { ds: 'Valid Palindrome Check', op: 'Two Pointers', comp: 'Time O(N) | Space O(1)', note: 'Halts on first mismatch' },
          { ds: 'Remove Duplicates', op: 'Fast & Slow Pointers', comp: 'Time O(N) | Space O(1)', note: 'Single pass read/write overwrite' }
        ],
        footnotes: [
          '* Each element is visited at most once by either pointer, guaranteeing linear O(N) time.'
        ]
      },
      timeComplexity: 'Time Complexity: O(N) Linear Time',
      timeComplexityExplain: 'On each iteration of the while loop, at least one pointer moves toward the center (left increases or right decreases). The total number of steps is bounded by N, running in linear O(N) time.',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'Two pointers operate strictly in-place on the input array using only 2 scalar index variables (`left` and `right`).',
      memoryTrickText: `🧠 Memory Trick — Two Pointer Technique:

• Opposite Pointers  ──► left = 0, right = N - 1 ──► Meet in middle
• Sum chota hai (<)  ──► left++ (Bada number chahiye)
• Sum bada hai (>)   ──► right-- (Chota number chahiye)
• Reverse Array      ──► Swap arr[left] & arr[right]

Golden Rule:
"Do pointers, ek array, unnecessary nested loop (O(N²)) khatam!"`,
      commonMistakes: [
        '❌ Mistake 1: Using Two Pointers for Two Sum on an UNSORTED array.\n✅ Correct: The converging Two Sum technique strictly relies on sorted order. On unsorted data, use a Hash Map (O(N) time) or sort first.',
        '❌ Mistake 2: Using `left <= right` in array reversal loops.\n✅ Correct: When `left === right`, swapping an element with itself is redundant. Use `while (left < right)`.',
        '❌ Mistake 3: Forgetting to increment `left++` or decrement `right--`.\n✅ Correct: Pointers must move toward each other on every step; forgetting causes infinite loops.',
        '❌ Mistake 4: Modifying array length while moving pointers.\n✅ Correct: Keep array boundaries stable during pointer traversal.'
      ],
      proTips: [
        '💡 How to Spot Two Pointers in Interviews: Look for keywords like "Sorted array pair", "In-place reversal", "Remove duplicates / shift in-place", "Palindrome", or "Container with most water".',
        '💡 Three Sum Extension: Solve 3Sum (LeetCode 15) by sorting the array, fixing one number with a loop `for (let i = 0...)`, and running Two Pointers on the remaining subarray in O(N²) instead of O(N³)!',
        '💡 Fast & Slow Pointer Trick: Also used in Linked Lists (Floyd\'s Cycle Detection) and array partition algorithms.'
      ],
      topicQuestions: [
        {
          question: 'What is the Two Pointer Technique?',
          answer: 'An algorithmic pattern where two index pointers traverse an array simultaneously (converging or same-direction) to solve problems in O(N) time and O(1) space.',
          explanation: 'It avoids nested loops.'
        },
        {
          question: 'Why does Two Sum with Two Pointers require a sorted array?',
          answer: 'Because sorted ordering allows us to make greedy decisions: if sum < target, incrementing left increases the sum; if sum > target, decrementing right decreases the sum.',
          explanation: 'Without sorting, pointer movement cannot be determined.'
        },
        {
          question: 'What is the Time and Space Complexity of reversing an array using Two Pointers?',
          answer: 'Time Complexity is O(N) and Auxiliary Space Complexity is O(1).',
          explanation: 'In-place element swapping in N/2 steps.'
        },
        {
          question: 'What is the difference between Converging Pointers and Fast-Slow Pointers?',
          answer: 'Converging pointers start at opposite ends and move toward each other. Fast-Slow pointers start at the same end and move in the same direction at different speeds.',
          explanation: 'Opposite vs same direction.'
        },
        {
          question: 'How does Two Pointers optimize a brute force O(N²) pair search?',
          answer: 'By eliminating an entire row or column of candidate pairs on each comparison, reducing N² comparisons to at most N comparisons.',
          explanation: 'Halves/discards impossible pairs.'
        }
      ],
      interviewQuestions: [
        'What is the Two Pointer Technique?',
        'Why does Two Sum with Two Pointers require a sorted array?',
        'What is the Time and Space Complexity of reversing an array using Two Pointers?',
        'What is the difference between Converging Pointers and Fast-Slow Pointers?',
        'How does Two Pointers optimize a brute force O(N²) pair search?'
      ],
      quizList: [
        {
          question: 'Q1. What is the Time Complexity of finding a pair with a target sum in a SORTED array using Two Pointers?',
          options: [
            'O(1)',
            'O(log N)',
            'O(N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'Each step moves either left or right pointer, inspecting at most N elements in total.'
        },
        {
          question: 'Q2. In Two Sum on a sorted array, what action should you take if `arr[left] + arr[right] < target`?',
          options: [
            'right--',
            'left++',
            'left--; right++',
            'Break loop'
          ],
          answer: 'left++',
          explanation: 'The current sum is too small, so advancing left++ moves to a larger element to increase the sum.'
        },
        {
          question: 'Q3. What is the Auxiliary Space Complexity of in-place array reversal using Two Pointers?',
          options: [
            'O(N)',
            'O(log N)',
            'O(1)',
            'O(N²)'
          ],
          answer: 'O(1)',
          explanation: 'Elements are swapped directly inside the array buffer using scalar pointer variables.'
        },
        {
          question: 'Q4. Which of the following problems is CANNOT be solved with the Two Pointer technique in O(N)?',
          options: [
            'Valid Palindrome check',
            'Two Sum on an UNSORTED array without extra space or sorting',
            'Reverse an Array in-place',
            'Move all zeroes to the end of an array'
          ],
          answer: 'Two Sum on an UNSORTED array without extra space or sorting',
          explanation: 'On unsorted data without extra space (hash map), Two Pointers cannot determine which pointer to advance.'
        },
        {
          question: 'Q5. Why is the loop condition `while (left < right)` preferred over `while (left <= right)` for array reversal?',
          options: [
            'Because left <= right throws an index error',
            'Because swapping the middle element with itself when left === right is redundant',
            'Because left < right runs in O(log N)',
            'Because JavaScript does not allow left <= right'
          ],
          answer: 'Because swapping the middle element with itself when left === right is redundant',
          explanation: 'When left === right, the middle element is already in its final correct position.'
        }
      ],
      quickRevision: {
        title: '👉👈 30 Second Revision — Two Pointer Technique',
        items: [
          { emoji: '📍', title: 'Setup', desc: 'left = 0, right = N - 1 (Converging toward center).' },
          { emoji: '⚡', title: 'Time & Space', desc: 'Time O(N) | Space O(1) strictly in-place.' },
          { emoji: '🔒', title: 'Sorted Rule', desc: 'Pair sum decisions require sorted array.' },
          { emoji: '🔄', title: 'Swap Pattern', desc: '[arr[left], arr[right]] = [arr[right], arr[left]].' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Do pointers, ek array, unnecessary nested loop (O(N²)) khatam!"' }
        ]
      },
      summary: [
        'The Two Pointer Technique uses two index pointers to traverse a collection simultaneously.',
        'Converging pointers start at opposite ends and move toward each other until meeting.',
        'Fast & Slow pointers start at the same end and move at different speeds for partitioning.',
        'It reduces O(N²) brute-force nested loops to single-pass O(N) linear time.',
        'It operates in-place using O(1) constant auxiliary space.'
      ],
      faqs: [
        {
          q: 'When should I use the Two Pointer technique?',
          a: 'Use it for sorted pair-sum searches, string/array reversal, palindrome validation, and in-place array partitioning.'
        },
        {
          q: 'Why is Two Pointers O(N) time?',
          a: 'Because on every iteration at least one pointer moves closer to the other, so the while loop runs at most N times.'
        },
        {
          q: 'Can Two Pointers be used on unsorted arrays for Two Sum?',
          a: 'No. Without sorted order, you cannot know whether to increment left or decrement right. Use a Hash Map for unsorted arrays.'
        },
        {
          q: 'What is the difference between Two Pointers and Sliding Window?',
          a: 'Two Pointers typically track two independent indices (often at opposite ends). Sliding Window tracks a contiguous subarray (window) between left and right.'
        },
        {
          q: 'What are Fast and Slow pointers?',
          a: 'A same-direction variation where a fast pointer scans ahead to inspect items and a slow pointer writes valid elements in-place.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-sliding-window-intro',
      title: 'Sliding Window Introduction',
      emoji: '🪟',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'The Sliding Window technique is an algorithmic optimization pattern used on contiguous subarrays or substrings of size K. By subtracting the element leaving the window (`arr[i - K]`) and adding the element entering the window (`arr[i]`), each shift runs in O(1) constant time, reducing total time complexity from O(N * K) to optimal linear O(N).',
      secondExplain: 'Instead of recalculating the sum, average, or hash of K consecutive elements from scratch on every step, Sliding Window reuses the overlapping calculation of the previous window. It slides the window forward by performing exactly 1 subtraction and 1 addition per step.',
      definitionHighlight: '🪟 Ek Line Mein: "Window ko baar-baar todne ke bajaye, bas aage slide karo!" | Time: O(N) | Space: O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need the Sliding Window Technique?',
        subtitle: 'Eliminating redundant re-computations across overlapping contiguous subarrays.',
        mappings: [
          { need: '🔴 1. Brute-Force Re-computation Nightmare', ds: 'Calculating the sum of every contiguous subarray of size K from scratch takes O(N * K) time with nested loops.' },
          { need: '⚡ 2. Reuse Overlapping Results in O(1)', ds: 'Adjacent windows of size K share K - 1 elements. Sliding Window reuses them directly in constant O(1) time per shift.' },
          { need: '🎯 3. Linear O(N) Global Runtime', ds: 'The entire array is traversed in a single pass of N steps, solving subarray problems in optimal O(N) time.' },
          { need: '💾 4. Zero Auxiliary Memory Overhead', ds: 'Sliding Window maintains only a few tracker variables (`windowSum`, `maxSum`), using strictly O(1) auxiliary space.' }
        ],
        takeaway: '💡 Sliding Window eliminates redundant calculations in contiguous subarrays by subtracting the departing element and adding the incoming element in O(1) time.'
      },
      comparisonTable: {
        title: 'Brute Force vs Sliding Window (Subarray of Size K)',
        headers: ['Feature', 'Brute Force (Nested Loops)', 'Sliding Window Technique ⭐'],
        rows: [
          { feature: 'Calculations per Shift', data: 'Re-sums all K elements from scratch', ds: '1 Subtraction (old) + 1 Addition (new)' },
          { feature: 'Time Complexity', data: 'O(N * K) Quadratic/Polynomial', ds: 'O(N) Linear Time ⭐' },
          { feature: 'Operations for N=100K, K=1K', data: '100,000,000 operations', ds: '100,000 operations (1000x faster!)' },
          { feature: 'Auxiliary Space', data: 'O(1) Constant', ds: 'O(1) Constant' },
          { feature: 'Prerequisite', data: 'Contiguous subarray / substring', ds: 'Contiguous subarray / substring' }
        ],
        takeaway: '💡 Sliding Window slashes execution time by a factor of K while requiring zero additional memory allocation.'
      },
      tradeoffs: {
        title: 'Two Types of Sliding Windows',
        intro: 'Understanding the two primary sliding window paradigms:',
        items: [
          {
            title: '1. Fixed Size Window (Size K)',
            desc: 'The window length remains constant at K elements throughout the array (e.g. Maximum sum of any K consecutive days).'
          },
          {
            title: '2. Dynamic / Variable Size Window',
            desc: 'The window expands and contracts dynamically based on a condition (e.g. Smallest subarray with sum ≥ Target, Longest substring with K unique characters).'
          },
          {
            title: '⚠️ Contiguous Subarray Invariant',
            desc: 'Sliding Window strictly applies to contiguous sequences. If elements can be picked non-contiguously (subsequences), Dynamic Programming or Greedy algorithms must be used.'
          }
        ]
      },
      hinglishExplain: `Sliding Window ko simple Hinglish mein samjhein:

"Jab tumhe array ke **consecutive (lagataar) K elements** ka sum, average ya max nikaalna ho, toh har baar naye सिरे se sum calculate mat karo! Purane window ke sum mein se jo element bahar gaya usko **MINUS** karo, aur jo naya element andar aaya usko **PLUS** karo!"

Brute Force vs Sliding Window Example:
Array: \`[2, 4, 1, 7, 3, 6]\`, \`K = 3\`

Brute Force (Slow Way):
• Window 1: \`2 + 4 + 1 = 7\`
• Window 2: \`4 + 1 + 7 = 12\` (Notice karo: \`4\` aur \`1\` ko dobara joda gaya!)
• Window 3: \`1 + 7 + 3 = 11\` (Notice karo: \`1\` aur \`7\` ko dobara joda gaya!)

Sliding Window (Smart Way):
• Pehla Window Sum: \`2 + 4 + 1 = 7\`
• Window aage slide karo: \`2\` bahar gaya, \`7\` andar aaya ──► \`7 - 2 + 7 = 12\`!
• Window aage slide karo: \`4\` bahar gaya, \`3\` andar aaya ──► \`12 - 4 + 3 = 11\`!
• Window aage slide karo: \`1\` bahar gaya, \`6\` andar aaya ──► \`11 - 1 + 6 = 16\`!

🧠 Yaad Rakhne Ki Trick:
**WINDOW + REMOVE OLD + ADD NEW = SLIDING WINDOW**`,
      storyExplain: `📖 Masti Sir Ki Kahani — Tea Shop 3-Day Sales Record:

Masti Sir ke tea stall par 6 days ki daily sales record hui (in Rupees):
const sales = [200, 400, 100, 700, 300, 600];
// Target: Highest sales in any 3 consecutive days (K = 3)

Chintu ne calculation shuru ki:
• Day 1+2+3 ko joda ──► ₹700
• Phir poora page phad kar Day 2+3+4 ko shuru se joda ──► ₹1200
• Phir Day 3+4+5 ko shuru se joda ──► ₹1100

Masti Sir ne Chintu ko bola:
"Chintu! Har baar 3 din ka jod shuru se kyu nikal raha hai?
Purane 3 din ke total (₹700) mein se jo din chala gaya (Day 1: ₹200) usko **MINUS** kar, aur jo naya din aaya (Day 4: ₹700) usko **PLUS** kar!"

• Day 2..4 Total = \`700 - 200 + 700 = 1200\`!
• Day 3..5 Total = \`1200 - 400 + 300 = 1100\`!
• Day 4..6 Total = \`1100 - 100 + 600 = 1600\`! (Highest 3-Day Sales = ₹1600)

🎯 Story Se Concept:
"Jo group aage move kar raha hai, uska pura calculation dobara nahi karna — sirf jo bahar gaya minus aur jo andar aaya plus!"`,
      conceptMapping: [
        { emoji: '🪟', item: 'Sliding Window', mapsTo: 'Contiguous subarray boundary moving from left to right' },
        { emoji: '➖', item: 'Subtract Old Element', mapsTo: '`windowSum -= arr[i - k]` (Element exiting the window)' },
        { emoji: '➕', item: 'Add New Element', mapsTo: '`windowSum += arr[i]` (Element entering the window)' },
        { emoji: '🏆', item: 'Max Tracking', mapsTo: '`maxSum = Math.max(maxSum, windowSum)`' },
        { emoji: '⏱️', item: 'Linear Time O(N)', mapsTo: 'Single pass of N operations instead of N * K' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow — Sliding Window on [2, 4, 1, 7, 3, 6] with K = 3',
        pipeline: [
          { step: '01. Initial Window [0..2]', desc: '[ 2, 4, 1 ] ──► windowSum = 2 + 4 + 1 = 7 | maxSum = 7' },
          { step: '02. Slide to [1..3]', desc: 'Remove 2, Add 7 ──► windowSum = 7 - 2 + 7 = 12 | maxSum = 12 ⭐' },
          { step: '03. Slide to [2..4]', desc: 'Remove 4, Add 3 ──► windowSum = 12 - 4 + 3 = 11 | maxSum = 12' },
          { step: '04. Slide to [3..5]', desc: 'Remove 1, Add 6 ──► windowSum = 11 - 1 + 6 = 16 | maxSum = 16 🏆 (FINAL MAX)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// SLIDING WINDOW PATTERNS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. FIXED SIZE SLIDING WINDOW: Maximum Sum Subarray of Size K
// Time: O(N) Linear Time | Space: O(1) Auxiliary Space
function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  let windowSum = 0;

  // Step 1: Calculate sum of the very first window of size K
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Step 2: Slide the window from index k to the end
  for (let i = k; i < arr.length; i++) {
    // Subtract departing element (arr[i - k]) and add arriving element (arr[i])
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const nums = [2, 4, 1, 7, 3, 6];
console.log("Max Subarray Sum (K = 3):", maxSubarraySum(nums, 3)); // Output: 16 ([7, 3, 6])

// 2. DYNAMIC SLIDING WINDOW: Smallest Subarray with Sum >= Target
function minSubArrayLen(target, arr) {
  let minLength = Infinity;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right]; // Expand window rightward

    // Contract window from left as long as condition is satisfied
    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log("Min Subarray Length (Target 7):", minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2 ([4, 3])`,
      output: `Max Subarray Sum (K = 3): 16
Min Subarray Length (Target 7): 2`,
      starterCodeExample: {
        title: '💻 Runnable Code: Sliding Window Playground',
        code: `function maxSubarraySum(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}\n\nconsole.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39 ([4, 2, 10, 23])`
      },
      codeBreakdown: [
        { part: 'for (let i = 0; i < k; i++) windowSum += arr[i]', label: 'Initial Window: Computes the base sum of the first K elements in O(K) time.' },
        { part: 'for (let i = k; i < arr.length; i++)', label: 'Sliding Loop: Steps one element at a time from index K to N - 1.' },
        { part: 'windowSum - arr[i - k] + arr[i]', label: 'O(1) Shift Formula: Drops the element leaving the window and absorbs the new incoming element.' },
        { part: 'maxSum = Math.max(maxSum, windowSum)', label: 'Max Tracker: Updates the running maximum sum in constant O(1) time.' }
      ],
      dryRun: {
        title: '🔍 Step-by-Step Dry Run: Max Subarray Sum on [2, 4, 1, 7, 3, 6], K = 3',
        input: 'Array: [2, 4, 1, 7, 3, 6], K = 3, N = 6',
        target: 'Trace window indices, departing element, incoming element, windowSum, and maxSum',
        steps: [
          { step: 1, condition: 'Initial Window i = 0..2', evaluation: 'windowSum = 2 + 4 + 1 = 7 | maxSum = 7', action: 'Base Window [2, 4, 1] established ✅' },
          { step: 2, condition: 'i = 3 (arr[3] = 7)', evaluation: 'Departing = arr[0] (2), Incoming = arr[3] (7) ──► 7 - 2 + 7 = 12', action: 'maxSum = max(7, 12) = 12 ✅' },
          { step: 3, condition: 'i = 4 (arr[4] = 3)', evaluation: 'Departing = arr[1] (4), Incoming = arr[4] (3) ──► 12 - 4 + 3 = 11', action: 'maxSum = max(12, 11) = 12 ✅' },
          { step: 4, condition: 'i = 5 (arr[5] = 6)', evaluation: 'Departing = arr[2] (1), Incoming = arr[5] (6) ──► 11 - 1 + 6 = 16', action: 'maxSum = max(12, 16) = 16 🏆 (FINAL RESULT)' }
        ]
      },
      operationComplexity: {
        title: 'Complexity Comparison',
        intro: 'Comparing Sliding Window against naive brute-force recalculations:',
        rows: [
          { ds: 'Brute Force Subarray Sum', op: 'Re-summing K elements', comp: 'Time O(N * K) | Space O(1)', note: 'Nested loops re-add overlapping items' },
          { ds: 'Fixed Sliding Window', op: 'O(1) Shift Formula', comp: 'Time O(N) | Space O(1)', note: 'Single pass of N operations' },
          { ds: 'Dynamic Sliding Window', op: 'Expand/Contract Pointers', comp: 'Time O(N) | Space O(1)', note: 'Each pointer moves at most N steps' }
        ],
        footnotes: [
          '* Time Complexity is strictly linear O(N) because every element enters and leaves the window at most once.'
        ]
      },
      timeComplexity: 'Time Complexity: O(N) Linear Time',
      timeComplexityExplain: 'Computing the first window takes O(K) time. The subsequent N - K shifts each take O(1) time. Total time = K + (N - K) = N operations, giving linear O(N) time.',
      spaceComplexity: 'Space Complexity: O(1) Auxiliary Space',
      spaceComplexityExplain: 'Sliding Window operates directly in-place using only 2 scalar tracker variables (`windowSum` and `maxSum`).',
      memoryTrickText: `🧠 Memory Trick — Sliding Window:

• Pehla Window banao    ──► First K elements sum
• Window aage khiskao   ──► windowSum = windowSum - arr[i - k] + arr[i]
• Max update karo       ──► maxSum = max(maxSum, windowSum)

Golden Formula:
"WINDOW + REMOVE OLD + ADD NEW = SLIDING WINDOW (O(N) Time, O(1) Space)!"`,
      commonMistakes: [
        '❌ Mistake 1: Recalculating the entire K-element sum inside the loop.\n✅ Correct: Only subtract `arr[i - k]` and add `arr[i]`. Recalculating inside destroys the O(N) optimization.',
        '❌ Mistake 2: Off-by-one index error in departing element (`arr[i - k + 1]` instead of `arr[i - k]`).\n✅ Correct: When current index is `i`, the element leaving the window of size `k` is strictly `arr[i - k]`.',
        '❌ Mistake 3: Forgetting to handle `k > arr.length`.\n✅ Correct: Always check `if (arr.length < k) return null;` at the start of the function.',
        '❌ Mistake 4: Applying Sliding Window on non-contiguous problems.\n✅ Correct: Sliding Window strictly requires contiguous subarrays or substrings.'
      ],
      proTips: [
        '💡 How to Spot Sliding Window in Interviews: Look for problem phrases like "Contiguous subarray of size K", "Maximum / Minimum sum of K consecutive elements", or "Longest substring without repeating characters".',
        '💡 Running Averages: To compute a moving average, maintain `windowSum` using sliding window and divide by `K` on each step in O(1) time.',
        '💡 Dynamic Window Rule: Use `right` pointer to expand the window and `left` pointer in a `while` loop to shrink it when constraints are met.'
      ],
      topicQuestions: [
        {
          question: 'What is the Sliding Window technique?',
          answer: 'An algorithmic optimization for contiguous subarrays/substrings where running metrics are updated in O(1) by subtracting the departing element and adding the incoming element.',
          explanation: 'It reduces O(N*K) to O(N).'
        },
        {
          question: 'Why is Sliding Window faster than the brute force approach?',
          answer: 'Because brute force recalculates K elements from scratch on every step (O(N*K)), while Sliding Window reuses the overlapping K-1 elements in O(1) per shift (O(N) total).',
          explanation: 'Reuses overlapping computation.'
        },
        {
          question: 'What is the formula to slide a window of size K from index i-1 to i?',
          answer: '`windowSum = windowSum - arr[i - k] + arr[i]`',
          explanation: 'Subtracts left element, adds right element.'
        },
        {
          question: 'What is the Time and Auxiliary Space Complexity of the Sliding Window technique?',
          answer: 'Time Complexity is O(N) and Auxiliary Space Complexity is O(1).',
          explanation: 'Single linear pass with scalar tracker variables.'
        },
        {
          question: 'What is the difference between Fixed Size and Dynamic Sliding Window?',
          answer: 'Fixed Size maintains a constant window of K elements. Dynamic expands and contracts the window size based on a condition.',
          explanation: 'Constant K vs variable length.'
        }
      ],
      interviewQuestions: [
        'What is the Sliding Window technique?',
        'Why is Sliding Window faster than the brute force approach?',
        'What is the formula to slide a window of size K from index i-1 to i?',
        'What is the Time and Auxiliary Space Complexity of the Sliding Window technique?',
        'What is the difference between Fixed Size and Dynamic Sliding Window?'
      ],
      quizList: [
        {
          question: 'Q1. What is the Time Complexity of finding the maximum sum subarray of size K using Sliding Window?',
          options: [
            'O(K)',
            'O(N * K)',
            'O(N)',
            'O(N²)'
          ],
          answer: 'O(N)',
          explanation: 'Computing the first window takes O(K) and the remaining N-K shifts take O(1) each, totaling O(N).'
        },
        {
          question: 'Q2. When sliding a window of size K to current index `i`, which element is leaving the window?',
          options: [
            'arr[i]',
            'arr[i - 1]',
            'arr[i - k]',
            'arr[i - k - 1]'
          ],
          answer: 'arr[i - k]',
          explanation: 'The element located K positions before the current index `i` is the one exiting the window.'
        },
        {
          question: 'Q3. What is the Auxiliary Space Complexity of the Sliding Window technique?',
          options: [
            'O(N)',
            'O(K)',
            'O(1)',
            'O(N * K)'
          ],
          answer: 'O(1)',
          explanation: 'It uses only a fixed number of scalar tracker variables.'
        },
        {
          question: 'Q4. For an array of size N = 100,000 and window size K = 1,000, approximately how many operations does Sliding Window perform vs Brute Force?',
          options: [
            '100,000 vs 100,000,000',
            '1,000 vs 100,000',
            '100,000,000 vs 100,000',
            'Both perform identical operations'
          ],
          answer: '100,000 vs 100,000,000',
          explanation: 'Sliding Window runs in N (100,000) steps while Brute Force takes N * K (100,000,000) steps.'
        },
        {
          question: 'Q5. Which condition MUST be met to use the Sliding Window technique?',
          options: [
            'The array must be sorted in ascending order',
            'The problem must involve contiguous subarrays or substrings',
            'All array elements must be positive',
            'Window size K must be an even number'
          ],
          answer: 'The problem must involve contiguous subarrays or substrings',
          explanation: 'Sliding Window strictly relies on contiguous spatial adjacency.'
        }
      ],
      quickRevision: {
        title: '🪟 30 Second Revision — Sliding Window',
        items: [
          { emoji: '📦', title: 'Concept', desc: 'Contiguous subarray of size K sliding from left to right.' },
          { emoji: '⚡', title: 'Shift Formula', desc: '`windowSum = windowSum - arr[i - k] + arr[i]` in O(1).' },
          { emoji: '⏱️', title: 'Time & Space', desc: 'Time O(N) | Space O(1) constant.' },
          { emoji: '🔒', title: 'Condition', desc: 'Requires contiguous subarray or substring.' },
          { emoji: '🧠', title: 'Memory Line', desc: '"Window ko baar-baar todne ke bajaye, bas aage slide karo!"' }
        ]
      },
      summary: [
        'Sliding Window optimizes contiguous subarray and substring problems.',
        'It avoids recalculating from scratch by reusing K - 1 overlapping elements.',
        'Each window shift runs in O(1) by subtracting the old element and adding the new element.',
        'It slashes brute-force O(N * K) time down to linear O(N).',
        'It operates in-place using O(1) auxiliary space.'
      ],
      faqs: [
        {
          q: 'When should I use Sliding Window?',
          a: 'Use it whenever you need to compute a metric (max, min, sum, average, distinct count) over contiguous subarrays or substrings.'
        },
        {
          q: 'Why does Sliding Window not work on non-contiguous subsequences?',
          a: 'Because non-contiguous elements cannot be added and removed with simple adjacent index shifts. Subsequences require DP or Greedy approaches.'
        },
        {
          q: 'What happens if K is greater than the array length?',
          a: 'A valid window of size K cannot be formed, so return null or 0 immediately.'
        },
        {
          q: 'How does dynamic sliding window work?',
          a: 'Use a `right` pointer to expand the window and a `left` pointer in a `while` loop to shrink the window when a condition is met.'
        },
        {
          q: 'Is Sliding Window a form of Two Pointers?',
          a: 'Yes. Sliding Window is a specialized two-pointer pattern where the two pointers always move in the same direction to define a contiguous window.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-prefix-sum',
      title: 'Prefix Sum',
      emoji: '➕',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '12 min',
      englishDef: 'Prefix Sum is a preprocessing technique where we precompute cumulative sums of array elements so that repeated range-sum queries from index L to R can be answered quickly in O(1) constant time.',
      secondExplain: 'Prefix Sum is a preprocessing pattern rather than a separate data structure. It constructs an auxiliary array where prefix[i] stores the sum of all elements from arr[0] to arr[i]. Building the prefix array takes O(N) time and O(N) auxiliary space, after which any range sum is computed in O(1) via prefix[R] - prefix[L - 1] (or prefix[R] when L = 0).',
      definitionHighlight: '➕ Golden Rule: "Prefix array banao ek baar O(N) mein ──► Range Sum pao baar-baar O(1) mein!" | Preprocessing: O(N) | Query: O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Prefix Sum?',
        subtitle: 'Transforming repeated linear O(N) range loops into instantaneous O(1) arithmetic operations.',
        mappings: [
          { need: '🔴 1. The Bottleneck of Repeated Range Queries', ds: 'Answering Q range queries using a naive loop takes O(N) per query, leading to an unacceptable O(N × Q) worst-case time.' },
          { need: '⚡ 2. Instant O(1) Range Sum Calculation', ds: 'With a precomputed prefix array, subtracting prefix[L-1] from prefix[R] answers any range sum query in exactly 1 operation.' },
          { need: '📊 3. Scalability for Q Queries (O(N + Q))', ds: 'For 100,000 queries on 100,000 elements, Prefix Sum reduces 10,000,000,000 operations down to just 200,000 operations.' },
          { need: '🎯 4. Building Block for Advanced Patterns', ds: 'Prefix sums are fundamental for Subarray Sum Equals K (with HashMaps), 2D Matrix range queries, and Equilibrium Index problems.' }
        ],
        takeaway: '💡 Prefix Sum invests O(N) preprocessing time once so that all subsequent range-sum queries execute in instantaneous O(1) time.'
      },
      comparisonTable: {
        title: 'Naive Range Sum vs Prefix Sum Preprocessing',
        headers: ['Approach', 'Preprocessing Time', 'Time per Query', 'Total Time for Q Queries', 'Auxiliary Space'],
        rows: [
          { feature: 'Naive Loop (Bina Prefix Ke)', data: 'O(1) (None)', ds: 'O(N) worst case', third: 'O(N × Q) (Slow TLE)', fourth: 'O(1) Extra Memory' },
          { feature: 'Prefix Sum Technique ⭐', data: 'O(N) (One-time build)', ds: 'O(1) Instant', third: 'O(N + Q) (Blazing Fast)', fourth: 'O(N) Auxiliary Array' }
        ],
        takeaway: '💡 We spend O(N) memory and time once upfront to make thousands of future range queries execute in O(1) time.'
      },
      tradeoffs: {
        title: 'Core Recurrence & Range Query Formulas',
        intro: 'The mathematical foundation of the Prefix Sum pattern:',
        items: [
          {
            title: '1. Build Recurrence: prefix[i] = prefix[i - 1] + arr[i]',
            desc: 'Base case: prefix[0] = arr[0]. For all i >= 1, the cumulative total up to index i is simply the previous prefix sum plus current element arr[i].'
          },
          {
            title: '2. Range Sum Formula: prefix[R] - prefix[L - 1]',
            desc: 'For any inclusive range [L, R] where L > 0, subtracting prefix[L-1] removes the unwanted left prefix arr[0...L-1], leaving exactly arr[L...R].'
          },
          {
            title: '3. Special Base Case: L = 0 ──► prefix[R]',
            desc: 'When L = 0, the sum from index 0 to R is already stored in prefix[R], so no subtraction is required (and prefix[-1] is avoided).'
          },
          {
            title: '4. Static vs Dynamic Array Limitation',
            desc: 'Prefix Sum is optimal for static arrays. If elements frequently update, every update requires rebuilding the prefix array in O(N) time (use Segment Tree / Fenwick Tree instead).'
          }
        ]
      },
      hinglishExplain: `Prefix Sum ko simple Hinglish mein samjhein:

"Prefix Sum ka matlab hai har position tak ka cumulative total pehle se calculate karke rakh lena!"

Real-Life Wallet Analogy:
• Day 1 earning: ₹100 ──► Total: ₹100
• Day 2 earning: ₹200 ──► Total: ₹300
• Day 3 earning: ₹300 ──► Total: ₹600
• Day 4 earning: ₹400 ──► Total: ₹1000

Agar aapse poocha jaye: "Day 2 se Day 4 tak kitni kamai hui?"
• Naive approach: 200 + 300 + 400 = ₹900 (Loop se add karo)
• Prefix quick hack: Day 4 ka total (₹1000) - Day 1 ka total (₹100) = ₹900!

🧠 Golden Rule:
"Jo total baar-baar calculate karna pade, usko ek baar pehle se nikal kar rakh lo!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Canteen Ka Daily Kharcha:

Masti Sir ke college canteen ka 5 dino ka kharcha kuch is tarah tha:
const expenses = [100, 200, 150, 300, 250]; // Day 0 to Day 4

Students har ghante aakar alag-alag sawal poochte the:
"Sir, Day 1 se Day 3 tak kitna kharcha hua?"
"Sir, Day 2 se Day 4 tak kitna kharcha hua?"

Pehle Masti Sir har baar register kholte aur ungliyon par add karte (150 + 300 + 250...). Thodi der mein unka dimaag ghum gaya!

Phir Masti Sir ne banaya PREFIX ARRAY:
const prefix = [100, 300, 450, 750, 1000];

Ab koi bhi student aaye:
• "Day 1 se Day 3?" ──► prefix[3] - prefix[0] = 750 - 100 = 650 (Instant!)
• "Day 2 se Day 4?" ──► prefix[4] - prefix[1] = 1000 - 300 = 700 (1 Second!)

🎯 Story Ka Lesson:
"Repeated range queries ke liye har baar loop mat chalao. Ek baar Prefix Sum banao aur baad mein direct subtract karke O(1) mein answer nikalo!"`,
      conceptMapping: [
        { emoji: '📦', item: 'Original Array', mapsTo: 'Raw input data elements [2, 4, 6, 8, 10]' },
        { emoji: '🏗️', item: 'Preprocessing O(N)', mapsTo: 'One-time construction of prefix cumulative array' },
        { emoji: '➕', item: 'Prefix Array', mapsTo: 'Cumulative sums [2, 6, 12, 20, 30]' },
        { emoji: '🎯', item: 'Range Query [L, R]', mapsTo: 'Subarray sum from index L to index R' },
        { emoji: '⚡', item: 'Query Execution O(1)', mapsTo: '`prefix[R] - prefix[L - 1]` arithmetic subtraction' },
        { emoji: '💾', item: 'Auxiliary Memory', mapsTo: 'O(N) extra space for storing the prefix array' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Cancellation Diagram for Query [1, 3] on [2, 4, 6, 8, 10]',
        pipeline: [
          { step: '01. Original Array', desc: 'arr = [2, 4, 6, 8, 10] | Query: sum of [1, 3] (elements 4, 6, 8)' },
          { step: '02. Prefix Array', desc: 'prefix = [2, 6, 12, 20, 30] where prefix[3] = 20 (2+4+6+8) and prefix[0] = 2' },
          { step: '03. Visual Cancellation', desc: '(2 + 4 + 6 + 8) - (2) ──► 20 - 2 = 18. Output = 18 in O(1) time ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// PREFIX SUM PATTERN IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

/**
 * Builds the Prefix Sum array in O(N) time and O(N) space.
 */
function buildPrefixSum(arr) {
  if (!arr || arr.length === 0) return [];

  const prefix = new Array(arr.length);
  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}

/**
 * Computes range sum in O(1) time using precomputed prefix array.
 */
function rangeSum(prefix, left, right) {
  if (left === 0) {
    return prefix[right];
  }
  return prefix[right] - prefix[left - 1];
}

// 🧪 Demonstration
const arr = [2, 4, 6, 8, 10];
const prefix = buildPrefixSum(arr);

console.log("Array:", arr);          // [2, 4, 6, 8, 10]
console.log("Prefix:", prefix);      // [2, 6, 12, 20, 30]
console.log("Sum [1, 3]:", rangeSum(prefix, 1, 3)); // 18 (4 + 6 + 8)
console.log("Sum [0, 2]:", rangeSum(prefix, 0, 2)); // 12 (2 + 4 + 6)
console.log("Sum [2, 4]:", rangeSum(prefix, 2, 4)); // 24 (6 + 8 + 10)`,
      codeBreakdown: [
        { part: 'const prefix = new Array(arr.length)', label: 'N size ka auxiliary array allocate karta hai', color: '#3b82f6' },
        { part: 'prefix[0] = arr[0]', label: 'Base case initialize karta hai (index 0 tak ka sum pehla element hi hota hai)', color: '#10b981' },
        { part: 'prefix[i] = prefix[i - 1] + arr[i]', label: 'Pichla cumulative sum + current element in O(1)', color: '#8b5cf6' },
        { part: 'if (left === 0) return prefix[right]', label: 'Special base case jab range index 0 se shuru hoti hai', color: '#f59e0b' },
        { part: 'return prefix[right] - prefix[left - 1]', label: 'Unwanted left prefix subtract karke exact [left, right] sum return karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Dry Run: Building Prefix Array on [2, 4, 6, 8, 10]',
        steps: [
          { step: 'i = 0', action: 'arr[0] = 2 ──► prefix[0] = 2' },
          { step: 'i = 1', action: 'arr[1] = 4 ──► prefix[1] = prefix[0] + arr[1] = 2 + 4 = 6' },
          { step: 'i = 2', action: 'arr[2] = 6 ──► prefix[2] = prefix[1] + arr[2] = 6 + 6 = 12' },
          { step: 'i = 3', action: 'arr[3] = 8 ──► prefix[3] = prefix[2] + arr[3] = 12 + 8 = 20' },
          { step: 'i = 4', action: 'arr[4] = 10 ──► prefix[4] = prefix[3] + arr[4] = 20 + 10 = 30' }
        ]
      },
      timeComplexity: 'Build O(N) | Query O(1) | Q Queries O(N + Q)',
      timeComplexityExplain: 'Building the prefix array visits each of the N elements once in O(N). Each range query executes in constant O(1) arithmetic time.',
      spaceComplexity: 'O(N) Auxiliary Space',
      spaceComplexityExplain: 'An auxiliary array of size N is allocated to store the cumulative sums.',
      commonMistakes: [
        '❌ Mistake 1: Using `prefix[R] - prefix[L]` instead of `prefix[R] - prefix[L - 1]`.\\n✅ Correct: You must subtract up to L-1 so that arr[L] remains included in the sum.',
        '❌ Mistake 2: Forgetting the `L === 0` edge case and attempting to access `prefix[-1]`.\\n✅ Correct: Check `if (L === 0) return prefix[R]`.',
        '❌ Mistake 3: Confusing the original array with the prefix array (`arr[R] - arr[L-1]`).\\n✅ Correct: Perform subtractions strictly on the prefix array.',
        '❌ Mistake 4: Claiming Prefix Sum uses O(1) space.\\n✅ Correct: An auxiliary prefix array requires O(N) extra memory.',
        '❌ Mistake 5: Assuming Prefix Sum works well for frequently updated arrays.\\n✅ Correct: On dynamic arrays with updates, rebuilding takes O(N) (use Fenwick Tree instead).'
      ],
      proTips: [
        '💡 1-Based Indexing Trick: Competitive programmers often create prefix arrays of size N + 1 with prefix[0] = 0. This simplifies the range formula to `prefix[R + 1] - prefix[L]` with no if conditions!',
        '💡 Negative Numbers: Prefix Sum works perfectly with negative numbers and zeroes without any modifications.',
        '💡 Subarray Sum Equals K: Combine Prefix Sum with a Hash Map to find the count of subarrays summing to K in O(N) time.'
      ],
      interviewQuestions: [
        'What is Prefix Sum and why is it used in DSA?',
        'What is the formula for building a Prefix Sum array?',
        'What is the range sum query formula and why is L = 0 a special case?',
        'What is the time complexity of building the prefix array vs answering a range query?',
        'Why does answering Q queries take O(N + Q) time with Prefix Sum vs O(N × Q) with naive loops?',
        'Can Prefix Sum handle negative numbers and zeroes?',
        'What are the limitations of Prefix Sum on dynamic arrays with frequent updates?'
      ],
      quiz: [
        {
          question: 'Q1. Array [3, 1, 4, 2] ka Prefix Sum array kya hoga?',
          options: ['[3, 4, 8, 10]', '[3, 4, 7, 9]', '[3, 1, 4, 2]', '[10, 8, 4, 3]'],
          correct: 0,
          explanation: '3, 3+1=4, 4+4=8, 8+2=10 ──► [3, 4, 8, 10].'
        },
        {
          question: 'Q2. Range [L, R] ka sum nikalne ke liye sahi formula kya hai jab L > 0 ho?',
          options: ['prefix[R] - prefix[L]', 'prefix[R] - prefix[L - 1]', 'prefix[R + 1] - prefix[L]', 'prefix[R] + prefix[L - 1]'],
          correct: 1,
          explanation: 'Index L ko include rakhne ke liye L - 1 tak ka prefix subtract kiya jata hai.'
        },
        {
          question: 'Q3. Precomputed Prefix Array se ek single range query answer karne ka time kitna hota hai?',
          options: ['O(1)', 'O(N)', 'O(R - L)', 'O(log N)'],
          correct: 0,
          explanation: 'Sirf do index lookups aur ek subtraction hota hai jo constant O(1) time leta hai.'
        },
        {
          question: 'Q4. 10^5 elements par 10^5 range queries solve karne ke liye Prefix Sum ka total time complexity kya hoga?',
          options: ['O(N × Q)', 'O(N + Q)', 'O(N²)', 'O(1)'],
          correct: 1,
          explanation: 'O(N) preprocessing + O(Q) queries = O(N + Q) total operations.'
        }
      ],
      practiceProblems: [
        {
          title: 'Range Sum Query - Immutable (LeetCode 303)',
          difficulty: 'Easy',
          description: 'Implement the NumArray class to answer multiple range sum queries in O(1) time using Prefix Sum.',
          hint: 'Precompute prefix array in constructor and use prefix[R] - prefix[L-1] in sumRange.'
        },
        {
          title: 'Find Pivot Index / Equilibrium Index (LeetCode 724)',
          difficulty: 'Easy',
          description: 'Find the index where the sum of elements to the left equals the sum of elements to the right.',
          hint: 'Calculate totalSum once. At index i, leftSum is tracked while rightSum is totalSum - leftSum - arr[i].'
        },
        {
          title: 'Subarray Sum Equals K (LeetCode 560)',
          difficulty: 'Medium',
          description: 'Find the total number of continuous subarrays whose sum equals k using Prefix Sum and a Hash Map.',
          hint: 'Store prefix sum frequencies in a map. If (currentPrefix - k) exists in map, add its frequency.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-kadanes-algorithm',
      title: "Kadane's Algorithm",
      emoji: '🔥',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '15 min',
      englishDef: "Kadane's Algorithm finds the maximum sum of a contiguous subarray in O(N) time and O(1) space by deciding at each element whether to extend the previous subarray or start a new subarray.",
      secondExplain: "Kadane's Algorithm is a dynamic programming / greedy state-transition pattern. At each element nums[i], it maintains the local optimal sum ending at index i (currentSum = Math.max(nums[i], currentSum + nums[i])) and updates the global all-time maximum (maxSum = Math.max(maxSum, currentSum)). It replaces quadratic O(N²) brute-force checks with a single linear pass.",
      definitionHighlight: "🔥 Core Recurrence: currentSum = Math.max(nums[i], currentSum + nums[i]) | maxSum = Math.max(maxSum, currentSum) | Time: O(N) | Space: O(1)",
      whyNeedIt: null,
      whyDifferentDs: {
        title: "Why Do We Need Kadane's Algorithm?",
        subtitle: 'Optimizing maximum contiguous subarray sum from quadratic O(N²) down to linear O(N) single-pass execution.',
        mappings: [
          { need: '🔴 1. The Slowness of Testing All Subarrays', ds: 'An array of size N has N(N+1)/2 contiguous subarrays. Testing every subarray takes O(N²) to O(N³) brute-force time.' },
          { need: '⚡ 2. Single-Pass O(N) Decision Making', ds: "Kadane's Algorithm inspects each element exactly once, making an instant local decision whether to extend or restart." },
          { need: '💾 3. Space-Optimized Dynamic Programming', ds: 'Instead of allocating an O(N) DP table, Kadane keeps only the previous state in a scalar variable, using O(1) auxiliary space.' },
          { need: '🛡️ 4. Handling Negative Numbers Correctly', ds: 'By initializing variables with nums[0], Kadane safely handles arrays where all numbers are negative without returning false zeroes.' }
        ],
        takeaway: "💡 Kadane's Algorithm eliminates all quadratic subarray generation by maintaining running local and global best sums in a single O(N) sweep."
      },
      comparisonTable: {
        title: "Brute Force vs Kadane's Algorithm",
        headers: ['Approach', 'Algorithm Strategy', 'Time Complexity', 'Auxiliary Space', 'Status for N = 100,000'],
        rows: [
          { feature: 'Naive Brute Force', data: '3 nested loops (Start, End, Sum)', ds: 'O(N³)', third: 'O(1)', fourth: '❌ TLE (10¹⁵ operations)' },
          { feature: 'Better Brute Force', data: '2 nested loops (Running Sum)', ds: 'O(N²)', third: 'O(1)', fourth: '❌ TLE (10¹⁰ operations)' },
          { feature: "Kadane's Algorithm ⭐", data: '1 loop (Local vs Global Max)', ds: 'O(N)', third: 'O(1)', fourth: '✅ Instant (~10⁵ operations)' }
        ],
        takeaway: "💡 Kadane's Algorithm achieves the theoretical lower bound for the maximum subarray problem in O(N) time and O(1) space."
      },
      tradeoffs: {
        title: 'Core Decisions: Extend vs Start Fresh & All-Negative Handling',
        intro: 'Understanding the state machine behind Kadane:',
        items: [
          {
            title: '1. The Extend Choice: currentSum + nums[i]',
            desc: 'If the previous running sum was positive, adding it to the current element helps increase the overall sum.'
          },
          {
            title: '2. The Start Fresh Choice: nums[i]',
            desc: 'If the previous running sum became negative, it will drag down the current element. We discard the previous subarray and start fresh at nums[i].'
          },
          {
            title: '3. Safe Initialization: currentSum = nums[0], maxSum = nums[0]',
            desc: 'Never initialize maxSum to 0 for non-empty subarray problems, as an all-negative array (e.g. [-5, -2, -8]) would incorrectly return 0 instead of -2.'
          },
          {
            title: '4. Subarray vs Subsequence Distinction',
            desc: 'Subarrays must be strictly contiguous (adjacent elements). For non-contiguous maximum sum problems, Kadane does not apply (use pick/not-pick DP).'
          }
        ]
      },
      hinglishExplain: `Kadane's Algorithm ko simple Hinglish mein samjhein:

"Har element par bas ek simple decision lo:
'Purani subarray ko continue karun ya yahin se nayi subarray shuru karun?'"

Do Variables Yaad Rakho:
1. **currentSum:** Abhi tak ki best running subarray ka sum jo current index par end ho rahi hai.
2. **maxSum:** Poore array mein ab tak mila sabse bada (all-time high) answer.

Scenario:
[-2, 3, -1, 5]

• Shuruat: currentSum = -2
• Next '3' aaya: Purana sum (-2) nuksaan kar raha hai (-2 + 3 = 1 vs 3). Isliye purana phek diya aur 3 se fresh start kiya!
• Next '-1' aaya: 3 + (-1) = 2 (Continue kiya)
• Next '5' aaya: 2 + 5 = 7 (Continue kiya)

Final Max Sum = 7 (Subarray: [3, -1, 5])

🧠 Memory Trick:
"Purana sum faayda de toh CONTINUE, nuksaan kare toh RESTART!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Stationery Shop Profit Streak:

Masti Sir ke stationery shop ka 5 dino ka daily profit/loss report:
const profit = [-5, 10, -2, 7, -20]; // in ₹ Thousands

Masti Sir dekhna chahte the: "Kaunsi consecutive (lagaatar) dino ki streak ne sabse zyada profit diya?"

• Day 1 (Loss of -5): Streak: [-5] ──► Net: -5
• Day 2 (Profit of 10): Day 1 ka loss bhool jao! Aaj se fresh start: [10] ──► Net: 10
• Day 3 (Loss of -2): 10 - 2 = 8 abhi bhi positive hai, continue rakho: [10, -2] ──► Net: 8
• Day 4 (Profit of 7): 8 + 7 = 15 ──► Streak [10, -2, 7] ──► Net: 15 🔥 MAX RECORD!
• Day 5 (Loss of -20): Net drops to -5. Max record remains 15!

🎯 Story Se Formula:
"Jab pichla negative baggage aane wale profit ko khane lage, toh fresh start karna hi sabse samajhdari hai!"`,
      conceptMapping: [
        { emoji: '🔥', item: "Kadane's Algorithm", mapsTo: 'Single-pass maximum contiguous subarray finder' },
        { emoji: '📍', item: 'currentSum', mapsTo: 'Best contiguous sum ending at current index i' },
        { emoji: '🏆', item: 'maxSum', mapsTo: 'Global all-time highest subarray sum recorded' },
        { emoji: '🔄', item: 'Extend Option', mapsTo: '`currentSum + nums[i]` (adds to existing streak)' },
        { emoji: '🌱', item: 'Start Fresh Option', mapsTo: '`nums[i]` (starts new streak at current element)' },
        { emoji: '⏱️', item: 'O(N) Time', mapsTo: 'Each element inspected exactly once' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Flow on [-2, 1, -3, 4, -1, 2, 1, -5, 4]',
        pipeline: [
          { step: '01. Init & Process [-2, 1, -3]', desc: 'currentSum drops to -2, restarts at 1, drops to -2. maxSum = 1.' },
          { step: '02. Golden Streak [4, -1, 2, 1]', desc: 'Restart at 4, extend: 3 ──► 5 ──► 6! maxSum updates to 6 🔥' },
          { step: '03. Trailing Elements [-5, 4]', desc: 'Drops to 1, then 5. Global maxSum remains 6. Result = 6 ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// KADANE'S ALGORITHM IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

/**
 * Finds the maximum contiguous subarray sum in O(N) time and O(1) space.
 */
function maxSubArray(nums) {
  if (!nums || nums.length === 0) return 0;

  // Step 1: Initialize with first element (safe for all-negative arrays)
  let currentSum = nums[0];
  let maxSum = nums[0];

  // Step 2: Traverse from index 1 to N-1
  for (let i = 1; i < nums.length; i++) {
    // Decision: Start fresh at nums[i] OR extend previous subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // Update global maximum recorded
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

/**
 * Advanced: Returns max sum along with start and end indices.
 */
function maxSubArrayWithIndices(nums) {
  let currentSum = nums[0], maxSum = nums[0];
  let currentStart = 0, bestStart = 0, bestEnd = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      currentStart = i; // Reset start index
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      bestStart = currentStart;
      bestEnd = i;
    }
  }

  return { maxSum, start: bestStart, end: bestEnd, subarray: nums.slice(bestStart, bestEnd + 1) };
}

// 🧪 Test Demonstration
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Max Subarray Sum:", maxSubArray(nums)); // 6
console.log("Details:", maxSubArrayWithIndices(nums)); // { maxSum: 6, start: 3, end: 6, subarray: [4, -1, 2, 1] }`,
      codeBreakdown: [
        { part: 'let currentSum = nums[0]; let maxSum = nums[0];', label: 'First element se initialize kiya taaki all-negative arrays safely handle ho sakein', color: '#3b82f6' },
        { part: 'for (let i = 1; i < nums.length; i++)', label: 'Index 1 se N-1 tak single linear pass chalata hai', color: '#10b981' },
        { part: 'currentSum = Math.max(nums[i], currentSum + nums[i])', label: 'Local greedy decision: start fresh (nums[i]) ya extend (current + nums[i])', color: '#8b5cf6' },
        { part: 'maxSum = Math.max(maxSum, currentSum)', label: 'Global best record ko update karta hai', color: '#f59e0b' },
        { part: 'return maxSum', label: 'Absolute maximum contiguous subarray sum return karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run on [-2, 1, -3, 4, -1, 2, 1, -5, 4]',
        steps: [
          { step: 'Init', action: 'currentSum = -2, maxSum = -2' },
          { step: 'i = 1 (1)', action: 'currentSum = max(1, -2+1) = 1 | maxSum = 1' },
          { step: 'i = 2 (-3)', action: 'currentSum = max(-3, 1-3) = -2 | maxSum = 1' },
          { step: 'i = 3 (4)', action: 'currentSum = max(4, -2+4) = 4 | maxSum = 4' },
          { step: 'i = 4 (-1)', action: 'currentSum = max(-1, 4-1) = 3 | maxSum = 4' },
          { step: 'i = 5 (2)', action: 'currentSum = max(2, 3+2) = 5 | maxSum = 5' },
          { step: 'i = 6 (1)', action: 'currentSum = max(1, 5+1) = 6 | maxSum = 6 🔥' },
          { step: 'i = 7 (-5)', action: 'currentSum = max(-5, 6-5) = 1 | maxSum = 6' },
          { step: 'i = 8 (4)', action: 'currentSum = max(4, 1+4) = 5 | maxSum = 6 ──► Output: 6' }
        ]
      },
      timeComplexity: 'O(N) - Linear Time',
      timeComplexityExplain: 'Processes every element in the array exactly once in a single for loop with constant O(1) math comparisons.',
      spaceComplexity: 'O(1) - Constant Auxiliary Space',
      spaceComplexityExplain: 'Only a few scalar variables (currentSum, maxSum, i) are used regardless of the input array size.',
      commonMistakes: [
        '❌ Mistake 1: Initializing `maxSum = 0` for non-empty subarray problems.\\n✅ Correct: In an all-negative array like [-5, -2, -8], maxSum = 0 incorrectly returns 0 instead of -2. Initialize with nums[0].',
        '❌ Mistake 2: Confusing subarray (contiguous) with subsequence (non-contiguous).\\n✅ Correct: Kadane strictly solves contiguous subarray problems.',
        '❌ Mistake 3: Returning `currentSum` at the end instead of `maxSum`.\\n✅ Correct: currentSum is only the local sum at index N-1. Always return maxSum.',
        '❌ Mistake 4: Running the loop from `i = 0` and doing `currentSum += nums[0]` twice.\\n✅ Correct: Start loop from `i = 1` since index 0 is already processed in initialization.'
      ],
      proTips: [
        '💡 All-Negative Arrays: Initializing with `nums[0]` automatically guarantees that the algorithm picks the least negative single element.',
        '💡 Circular Subarray Variant: For circular arrays, Maximum Sum = max(Standard Kadane, Total Array Sum - Minimum Subarray Sum).',
        '💡 Space-Optimized DP: Kadane is mathematically 1D Dynamic Programming where dp[i] is compressed into a single currentSum variable!'
      ],
      interviewQuestions: [
        "What problem does Kadane's Algorithm solve?",
        "What is the time and auxiliary space complexity of Kadane's Algorithm?",
        "Why is Kadane's Algorithm O(N) compared to O(N²) brute force?",
        "What do currentSum and maxSum represent in Kadane's Algorithm?",
        "How does Kadane's Algorithm handle arrays where all numbers are negative?",
        "How can you modify Kadane's Algorithm to return the actual subarray indices?",
        "What is the difference between a Subarray and a Subsequence?"
      ],
      quiz: [
        {
          question: 'Q1. Array [-2, 1, -3, 4, -1, 2, 1, -5, 4] ka Maximum Subarray Sum kya hoga?',
          options: ['4', '6', '7', '10'],
          correct: 1,
          explanation: 'Subarray [4, -1, 2, 1] gives sum 4 + (-1) + 2 + 1 = 6.'
        },
        {
          question: 'Q2. All-negative array [-10, -3, -5, -8] ke liye Kadane ka sahi output kya aana chahiye?',
          options: ['0', '-10', '-3', '-26'],
          correct: 2,
          explanation: 'Non-empty array mein sabse bada single element -3 maximum sum hoga.'
        },
        {
          question: 'Q3. Kadane ki Auxiliary Space Complexity kya hoti hai?',
          options: ['O(1)', 'O(N)', 'O(log N)', 'O(N²)'],
          correct: 0,
          explanation: 'Sirf do scalar variables (currentSum, maxSum) use hote hain.'
        },
        {
          question: 'Q4. currentSum ko update karne ka sahi recurrence relation kaunsa hai?',
          options: ['currentSum += nums[i]', 'currentSum = Math.max(nums[i], currentSum + nums[i])', 'currentSum = Math.min(nums[i], currentSum + nums[i])', 'currentSum = Math.max(0, currentSum)'],
          correct: 1,
          explanation: 'Start fresh (nums[i]) aur extend (currentSum + nums[i]) ka maximum liya jata hai.'
        }
      ],
      practiceProblems: [
        {
          title: 'Maximum Subarray (LeetCode 53)',
          difficulty: 'Medium',
          description: 'Find the contiguous subarray with the largest sum and return its sum using Kadane.',
          hint: 'Maintain currentSum and maxSum initialized to nums[0].'
        },
        {
          title: 'Maximum Product Subarray (LeetCode 152)',
          difficulty: 'Medium',
          description: 'Find the contiguous subarray within an integer array that has the largest product.',
          hint: 'Maintain both maxProduct and minProduct ending at current index, because multiplying two negatives yields a positive.'
        },
        {
          title: 'Maximum Sum Circular Subarray (LeetCode 918)',
          difficulty: 'Medium',
          description: 'Find the maximum possible sum of a non-empty subarray of a circular array.',
          hint: 'Calculate maxKadane and (totalSum - minKadane). Return max of both (handling all-negative edge case).'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-array-rotation',
      title: 'Array Rotation',
      emoji: '🔄',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '15 min',
      englishDef: 'Array rotation means shifting array elements cyclically by K steps so that elements moving beyond one end wrap around and reappear at the other end. The optimal Reversal Algorithm rotates an array in-place in O(N) time and O(1) space.',
      secondExplain: 'Rotating by K positions preserves the cyclic order of elements. For an array of length N, effective rotations are K % N because every N rotations returns the array to its original configuration. The Reversal Algorithm uses three in-place reversals to achieve linear O(N) time without allocating secondary array buffers.',
      definitionHighlight: '🔄 Reversal Algorithm: Right Rotate ──► Reverse Whole ──► Reverse First K ──► Reverse Rest | Effective K = K % N | Time: O(N) | Space: O(1)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why is Array Rotation Useful?',
        subtitle: 'Cyclic shifting in OS process schedulers, media ring buffers, and carousel data structures.',
        mappings: [
          { need: '🎧 1. Circular Buffers & Audio Streaming', ds: 'Ring buffers rotate audio packet pointers cyclically to maintain gapless playback without memory reallocations.' },
          { need: '⚙️ 2. OS Round-Robin Scheduling', ds: 'Operating systems rotate CPU ready queues cyclically so every waiting task receives a fair time slice.' },
          { need: '🎠 3. UI Carousel Sliders', ds: 'Card decks and infinite image carousels rotate array elements cyclically to loop continuously.' },
          { need: '🎯 4. In-Place Algorithmic Mastery', ds: 'Teaches two-pointer array manipulation, modular arithmetic normalization, and in-place memory swaps.' }
        ],
        takeaway: '💡 Array rotation cyclically shifts elements without deleting data, enabling efficient buffer wrapping and round-robin scheduling.'
      },
      comparisonTable: {
        title: 'Array Rotation Approaches Comparison',
        headers: ['Approach', 'Strategy', 'Time Complexity', 'Auxiliary Space', 'Status'],
        rows: [
          { feature: 'Repeated Single Shifts', data: 'Shift 1 element K times in loop', ds: 'O(N × K)', third: 'O(1)', fourth: '❌ Slow (TLE for large K)' },
          { feature: 'Extra Array Buffer', data: 'Allocate new array & copy sections', ds: 'O(N)', third: 'O(N)', fourth: '⚠️ Uses extra memory' },
          { feature: 'Reversal Algorithm ⭐', data: '3 In-place Reversals with Two Pointers', ds: 'O(N)', third: 'O(1)', fourth: '✅ Optimal & In-Place' }
        ],
        takeaway: '💡 The Reversal Algorithm performs exactly N swaps across 3 steps, achieving O(N) linear time and O(1) auxiliary space.'
      },
      tradeoffs: {
        title: 'Left Rotation vs Right Rotation & Modular Arithmetic',
        intro: 'Mastering rotation directions and modular normalization:',
        items: [
          {
            title: '1. Modular Normalization: k = k % n',
            desc: 'Every N rotations returns the array to its original state. For N = 5 and K = 7: 7 % 5 = 2 rotations.'
          },
          {
            title: '2. RIGHT Rotation by K (Clockwise)',
            desc: 'Last K elements move to the front. Steps: (1) Reverse whole array ──► (2) Reverse first K ──► (3) Reverse remaining N-K.'
          },
          {
            title: '3. LEFT Rotation by K (Counter-Clockwise)',
            desc: 'First K elements move to the end. Steps: (1) Reverse first K ──► (2) Reverse remaining N-K ──► (3) Reverse whole array.'
          },
          {
            title: '4. Negative K Handling',
            desc: 'Right rotation by -K is mathematically equivalent to Left rotation by |K|, normalized via `k = ((k % n) + n) % n`.'
          }
        ]
      },
      hinglishExplain: `Array Rotation ko simple Hinglish mein samjhein:

"Array Rotation ka matlab hai elements ko cyclically shift karna — jo element ek kinare se bahar jata hai, wo doosre kinare se wapas andar aa jata hai!"

Do Tarah Ki Rotations Hoti Hain:
1. **RIGHT Rotation by K:** Aakhri ke K elements front mein aa jate hain.
   \`[1, 2, 3, 4, 5]\` right rotate by 2 ──► \`[4, 5, 1, 2, 3]\`

2. **LEFT Rotation by K:** Shuruat ke K elements end mein chale jate hain.
   \`[1, 2, 3, 4, 5]\` left rotate by 2 ──► \`[3, 4, 5, 1, 2]\`

Reversal Algorithm Magic (Right Rotate by 2):
• Step 1: Poora array ulta karo ──► \`[5, 4, 3, 2, 1]\`
• Step 2: First 2 elements ulte karo ──► \`[4, 5 | 3, 2, 1]\`
• Step 3: Remaining 3 elements ulte karo ──► \`[4, 5 | 1, 2, 3]\` ✅

🧠 Memory Trick:
"Right: Whole ──► First K ──► Rest | Left: First K ──► Rest ──► Whole"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Circular Classroom Seating:

Masti Sir ke coaching room mein 5 students ek row mein baithe the:
const students = ["Aman", "Bhavya", "Chirag", "Danish", "Esha"];
// Indices:          0        1         2         3        4

Danish aur Esha ne bola: "Sir, hamesha hum hi piche rehte hain, hume bhi aage aana hai!"

Masti Sir ne rule banaya: "Har lecture ke baad sabhi 2 seats RIGHT move karenge!"
• Danish (Index 3) aur Esha (Index 4) aage aa gaye (Index 0 aur 1).
• Aman, Bhavya, Chirag do-do seats aage shift ho gaye.

Naya arrangement:
["Danish", "Esha", "Aman", "Bhavya", "Chirag"];

🎯 Moral of Story:
"Classroom mein koi student bahar nahi gaya. Sirf positions cyclically aage-piche shift hui hain!"`,
      conceptMapping: [
        { emoji: '🔄', item: 'Array Rotation', mapsTo: 'Cyclic index shifting without element loss' },
        { emoji: '🧮', item: 'k = k % n', mapsTo: 'Modular arithmetic to remove redundant full rotations' },
        { emoji: '➡️', item: 'Right Rotation', mapsTo: 'Last K elements wrap around to the front' },
        { emoji: '⬅️', item: 'Left Rotation', mapsTo: 'First K elements wrap around to the back' },
        { emoji: '🔁', item: 'Two-Pointer Swap', mapsTo: '`[arr[l], arr[r]] = [arr[r], arr[l]]` in O(1) space' },
        { emoji: '⚡', item: 'O(N) Time', mapsTo: 'Exactly N elements swapped across 3 reversal passes' }
      ],
      realWorldVisualDiagram: {
        title: 'Reversal Algorithm Visual on [1, 2, 3, 4, 5] (k = 2)',
        pipeline: [
          { step: '01. Reverse Whole Array', desc: '[1, 2, 3, 4, 5] ──► [5, 4, 3, 2, 1] (Brings target items to front)' },
          { step: '02. Reverse First K (0 to 1)', desc: '[5, 4 | 3, 2, 1] ──► [4, 5 | 3, 2, 1] (Fixes front order)' },
          { step: '03. Reverse Rest (2 to 4)', desc: '[4, 5 | 3, 2, 1] ──► [4, 5 | 1, 2, 3] (Fixes back order) ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// OPTIMAL ARRAY ROTATION (REVERSAL ALGORITHM) IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

/**
 * Rotates an array to the RIGHT by k steps in-place (LeetCode 189).
 * Time Complexity:  O(N)
 * Space Complexity: O(1) Auxiliary Space
 */
function rotateRight(nums, k) {
  const n = nums.length;
  if (n === 0 || k === 0) return nums;

  // Step 0: Remove full 360-degree cycles
  k = k % n;
  if (k === 0) return nums;

  // In-place two-pointer reversal helper
  function reverse(left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  // 3-Step In-Place Reversals for RIGHT rotation
  reverse(0, n - 1); // 1. Reverse entire array
  reverse(0, k - 1); // 2. Reverse first k elements
  reverse(k, n - 1); // 3. Reverse remaining n-k elements

  return nums;
}

/**
 * Rotates an array to the LEFT by k steps in-place.
 */
function rotateLeft(nums, k) {
  const n = nums.length;
  if (n === 0 || k === 0) return nums;

  k = k % n;
  if (k === 0) return nums;

  function reverse(left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  // 3-Step In-Place Reversals for LEFT rotation
  reverse(0, k - 1); // 1. Reverse first k elements
  reverse(k, n - 1); // 2. Reverse remaining n-k elements
  reverse(0, n - 1); // 3. Reverse entire array

  return nums;
}

// 🧪 Demonstration
const sampleRight = [1, 2, 3, 4, 5];
rotateRight(sampleRight, 2);
console.log("Right Rotated by 2:", sampleRight); // [4, 5, 1, 2, 3]

const sampleLeft = [1, 2, 3, 4, 5];
rotateLeft(sampleLeft, 2);
console.log("Left Rotated by 2:", sampleLeft);   // [3, 4, 5, 1, 2]`,
      codeBreakdown: [
        { part: 'k = k % n', label: 'Unnecessary full 360-degree rotations ko eliminate karta hai', color: '#3b82f6' },
        { part: 'while (left < right) { swap; left++; right--; }', label: 'Two-pointer in-place reversal in O(1) auxiliary space', color: '#10b981' },
        { part: 'reverse(0, n - 1)', label: 'Poore array ko reverse karta hai taaki last k elements front me aa jayein', color: '#8b5cf6' },
        { part: 'reverse(0, k - 1)', label: 'Front ke k elements ka order correct karta hai', color: '#f59e0b' },
        { part: 'reverse(k, n - 1)', label: 'Piche ke remaining n-k elements ka order restore karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Dry Run: Right Rotate [1, 2, 3, 4, 5] by k = 2 (n = 5)',
        steps: [
          { step: 'k % n', action: 'k = 2 % 5 = 2' },
          { step: 'Reverse Whole (0 to 4)', action: '[1, 2, 3, 4, 5] ──► [5, 4, 3, 2, 1]' },
          { step: 'Reverse First k (0 to 1)', action: '[5, 4 | 3, 2, 1] ──► [4, 5 | 3, 2, 1]' },
          { step: 'Reverse Rest (2 to 4)', action: '[4, 5 | 3, 2, 1] ──► [4, 5 | 1, 2, 3] ──► Output: [4, 5, 1, 2, 3] ✅' }
        ]
      },
      timeComplexity: 'O(N) - Linear Time',
      timeComplexityExplain: 'The three reversal steps perform N/2 + K/2 + (N-K)/2 = N total element swaps, executing in strict O(N) time.',
      spaceComplexity: 'O(1) - Constant Auxiliary Space',
      spaceComplexityExplain: 'Elements are swapped in-place using two pointers without allocating secondary array buffers.',
      commonMistakes: [
        '❌ Mistake 1: Forgetting `k = k % n`. When k = 1000 and n = 5, the code runs redundant work or crashes on index boundaries.',
        '❌ Mistake 2: Passing wrong boundaries like `reverse(0, k)` instead of `reverse(0, k - 1)`.',
        '❌ Mistake 3: Confusing Left and Right rotation step order.',
        '❌ Mistake 4: Missing the `nums.length === 0` empty array check.'
      ],
      proTips: [
        '💡 In-Place ES6 Swap: Use `[nums[l], nums[r]] = [nums[r], nums[l]]` for clean JavaScript reversals.',
        '💡 Modulo Invariant: Remember that `k = k % n` turns large rotations into instant O(1) normalized offsets.',
        '💡 Circular Equality: Right Rotate by K is mathematically equal to Left Rotate by (N - K).'
      ],
      interviewQuestions: [
        'What is array rotation and how do left and right rotations differ?',
        'Why is k % n necessary in array rotation algorithms?',
        'What is the time and auxiliary space complexity of the Reversal Algorithm?',
        'Explain why reversing three sections rotates the array in-place.',
        'Why is the repeated 1-element shift approach inefficient for large K?',
        'How would you handle rotation when K is negative?',
        'What happens when K = N or K = 0?'
      ],
      quiz: [
        {
          question: 'Q1. Array [1, 2, 3, 4, 5] ko Right Rotate by 2 karne par kya result aayega?',
          options: ['[3, 4, 5, 1, 2]', '[4, 5, 1, 2, 3]', '[5, 1, 2, 3, 4]', '[2, 3, 4, 5, 1]'],
          correct: 1,
          explanation: 'Last 2 elements [4, 5] front mein aa jate hain ──► [4, 5, 1, 2, 3].'
        },
        {
          question: 'Q2. 6 length ke array ko 14 baar rotate (k = 14) karna kitne effective rotations ke barabar hai?',
          options: ['0', '1', '2 (14 % 6 = 2)', '4'],
          correct: 2,
          explanation: '14 % 6 = 2 effective rotations.'
        },
        {
          question: 'Q3. Reversal Algorithm se array rotate karne ki Auxiliary Space Complexity kya hoti hai?',
          options: ['O(1)', 'O(N)', 'O(K)', 'O(log N)'],
          correct: 0,
          explanation: 'In-place two-pointer technique uses constant O(1) extra space.'
        },
        {
          question: 'Q4. Left Rotation by K ka sahi 3-step reversal order kaunsa hai?',
          options: ['Reverse Whole ──► Reverse First K ──► Reverse Rest', 'Reverse First K ──► Reverse Remaining ──► Reverse Whole', 'Reverse First K ──► Reverse Whole ──► Reverse Remaining', 'Reverse Rest ──► Reverse Whole ──► Reverse First K'],
          correct: 1,
          explanation: 'Left rotation: First K, then Remaining N-K, then Whole array.'
        }
      ],
      practiceProblems: [
        {
          title: 'Rotate Array Right by K (LeetCode 189)',
          difficulty: 'Medium',
          description: 'Rotate an integer array nums to the right by k steps in-place with O(1) auxiliary space.',
          hint: 'Use the 3-step reversal algorithm: reverse all, reverse first k, reverse remaining.'
        },
        {
          title: 'Check If Array Is Sorted and Rotated (LeetCode 1752)',
          difficulty: 'Easy',
          description: 'Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated.',
          hint: 'Count the number of times arr[i] > arr[(i + 1) % n]. If count <= 1, return true.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-duplicate-elements',
      title: 'Duplicate Elements',
      emoji: '👯',
      difficulty: 'Intermediate',
      xp: 40,
      readingTime: '12 min',
      englishDef: 'Duplicate elements are values that appear more than once in an array. Detecting, counting, and removing duplicates can be solved using Brute Force O(N²), Sorting O(N log N), or Hash Sets O(N), with Two-Pointer in-place overwriting for sorted arrays.',
      secondExplain: 'Handling duplicates is one of the most common array tasks. For unsorted data, a Hash Set provides O(N) detection in a single pass. For sorted data, a two-pointer read/write technique removes duplicates in-place in O(N) time and O(1) space without allocating secondary memory.',
      definitionHighlight: '👯 Fast Strategy: Hash Set ──► O(N) Time, O(N) Space | Sorted Array Two-Pointer ──► O(N) Time, O(1) Space',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why is Duplicate Detection Critical?',
        subtitle: 'Data sanitization, uniqueness constraints, and memory-efficient in-place deduplication.',
        mappings: [
          { need: '🆔 1. User & Account Deduplication', ds: 'Database systems verify uniqueness of usernames, emails, and transaction IDs to prevent double-spending.' },
          { need: '🧹 2. Data Cleaning & Sanitization', ds: 'Data pipelines remove redundant sensor logs and duplicated records before running analytics.' },
          { need: '⚡ 3. Instant O(1) Set Lookups', ds: 'Using Hash Sets reduces O(N²) quadratic nested-loop searches down to linear O(N) time.' },
          { need: '💾 4. In-Place Sorted Array Deduplication', ds: 'Two-pointer overwriting removes duplicates in-place without memory allocation (LeetCode 26).' }
        ],
        takeaway: '💡 Duplicate detection ensures data integrity, while in-place two-pointer deduplication saves memory.'
      },
      comparisonTable: {
        title: 'Duplicate Detection Methods Comparison',
        headers: ['Method', 'Strategy', 'Time Complexity', 'Auxiliary Space', 'Best Used When'],
        rows: [
          { feature: 'Brute Force', data: 'Nested loops checking all pairs', ds: 'O(N²)', third: 'O(1)', fourth: 'Array is tiny (N < 20)' },
          { feature: 'Sorting Approach', data: 'Sort first, check adjacent elements', ds: 'O(N log N)', third: 'O(1) (In-Place)', fourth: 'Memory is strictly constrained' },
          { feature: 'Hash Set Technique ⭐', data: 'One-pass registry lookup', ds: 'O(N)', third: 'O(N)', fourth: 'General unsorted array' },
          { feature: 'Two Pointers (Sorted) ⭐', data: 'Slow/Fast read-write overwrite', ds: 'O(N)', third: 'O(1) In-Place', fourth: 'Input array is already sorted' }
        ],
        takeaway: '💡 Use Hash Sets for general unsorted arrays (O(N) time), and Two Pointers for sorted arrays (O(N) time, O(1) space).'
      },
      tradeoffs: {
        title: 'Core Strategies: Set Registry vs In-Place Overwriting',
        intro: 'Selecting the optimal duplicate strategy based on constraints:',
        items: [
          {
            title: '1. Contains Duplicate (Hash Set): O(N) Time, O(N) Space',
            desc: 'Traverse array once. For each element, if seen.has(num), return true. Else seen.add(num). JavaScript 1-liner: `new Set(nums).size !== nums.length`.'
          },
          {
            title: '2. In-Place Deduplication on Sorted Array (Two Pointers)',
            desc: 'Pointer `slow` tracks the last unique slot. When `nums[fast] !== nums[slow]`, advance `slow++` and write `nums[slow] = nums[fast]`. Returns unique count in O(1) space.'
          },
          {
            title: '3. Find All Duplicates in [1...N] Range (Index Negation)',
            desc: 'When elements are bounded between 1 and N, use array values as indices: mark visited elements by negating `nums[abs(x) - 1]`. If already negative, x is a duplicate! (O(N) time, O(1) space).'
          }
        ]
      },
      hinglishExplain: `Duplicate Elements ko simple Hinglish mein samjhein:

"Duplicate ka matlab hai wo value jo array mein 1 se zyada baar aayi ho!"

Top 3 Tricks:
1. **Contains Duplicate (Set Trick):**
   \`return new Set(nums).size !== nums.length;\`
   Set duplicate values ko hata deta hai. Agar Set ka size array length se chhota hai, toh duplicate maujood hai!

2. **Unsorted Array mein Duplicates Dhoondhna (Hash Set):**
   Har element ko Set mein daalo. Agar koi number pehle se Set mein hai (\`seen.has(num)\`), toh wo duplicate pakda gaya! (Time: $O(N)$, Space: $O(N)$).

3. **Sorted Array se Duplicates Hatana (Two Pointers):**
   Slow aur Fast pointers use karke unique numbers ko aage overwrite karte jao bina naya array banaye (Time: $O(N)$, Space: $O(1)$).

🧠 Memory Rule:
"General array: Hash Set use karo! Sorted array: Two-pointer slow/fast use karo!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Coding Party Guest Entry:

Masti Sir ne ek coding party organize ki. Har student gate par apna naam register mein likh raha tha:
const guestList = ["Rahul", "Neha", "Aman", "Rahul", "Priya", "Neha"];

Masti Sir ko check karna tha: "Kya kisi ne do baar entry karke doosri samosa plate le li?"

• **Slow Method:** Har student ke liye poori 1000 names ki list dobara padhna ──► O(N²) time (Masti Sir thak gaye!).
• **CodeMasti Set Scanner:** Gate par ek Set Registry bana di:
  1. Pehla "Rahul" aaya ──► Set mein add kiya: {"Rahul"}
  2. "Neha" aayi ──► Set: {"Rahul", "Neha"}
  3. Doosra "Rahul" aaya ──► Scanner ne bola: "Rahul already registered hai! Duplicate pakda gaya!" 🚨

🎯 Moral of Story:
"Pehle dekhi hui cheez ko Hash Set mein yaad rakho taaki agla comparison O(1) instant speed mein ho sake!"`,
      conceptMapping: [
        { emoji: '👯', item: 'Duplicate Element', mapsTo: 'Value appearing >= 2 times in collection' },
        { emoji: '⚡', item: 'Set.has(x)', mapsTo: 'Instant O(1) average membership verification' },
        { emoji: '🧹', item: 'Deduplication', mapsTo: 'Removing duplicates to keep only unique values' },
        { emoji: '👉', item: 'slow Pointer', mapsTo: 'Tracks write position for unique elements' },
        { emoji: '🏃', item: 'fast Pointer', mapsTo: 'Scans forward looking for new distinct values' },
        { emoji: '💾', item: 'O(1) In-Place', mapsTo: 'Overwriting elements without extra array memory' }
      ],
      realWorldVisualDiagram: {
        title: 'Two-Pointer Deduplication Visual on [1, 1, 2, 2, 3]',
        pipeline: [
          { step: '01. Initial State', desc: 'slow = 0 (val 1), fast = 1 (val 1) ──► Duplicate skipped, fast moves to 2' },
          { step: '02. New Distinct Found', desc: 'fast = 2 (val 2) !== slow (1) ──► slow++ (1), nums[1] = 2 ──► [1, 2, 2, 2, 3]' },
          { step: '03. Final Array', desc: 'fast reaches 3 ──► nums[2] = 3. Unique count = slow + 1 = 3 ([1, 2, 3]) ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// DUPLICATE DETECTION & REMOVAL IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

/**
 * 1. Contains Duplicate (LeetCode 217): O(N) Time, O(N) Space
 */
function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) return true; // Duplicate found!
    seen.add(num);
  }
  return false;
}

/**
 * 2. Find All Duplicate Numbers: O(N) Time, O(N) Space
 */
function findAllDuplicates(nums) {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

/**
 * 3. Remove Duplicates from Sorted Array in-place (LeetCode 26): O(N) Time, O(1) Space
 */
function removeDuplicatesSorted(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast]; // Overwrite next unique slot
    }
  }

  return slow + 1; // Number of unique elements
}

// 🧪 Test Demonstrations
console.log("Contains Duplicate:", containsDuplicate([1, 2, 3, 1])); // true
console.log("All Duplicates:", findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // [2, 3]

const sortedList = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueCount = removeDuplicatesSorted(sortedList);
console.log("Unique Count:", uniqueCount); // 5
console.log("Unique Subarray:", sortedList.slice(0, uniqueCount)); // [0, 1, 2, 3, 4]`,
      codeBreakdown: [
        { part: 'const seen = new Set()', label: 'Hash Set allocate karta hai O(1) membership checks ke liye', color: '#3b82f6' },
        { part: 'if (seen.has(num)) return true', label: 'Instant duplicate identification and early return', color: '#10b981' },
        { part: 'let slow = 0; for (let fast = 1...)', label: 'Two pointers allocate kiye sorted array in-place deduplication ke liye', color: '#8b5cf6' },
        { part: 'if (nums[fast] !== nums[slow]) { slow++; nums[slow] = nums[fast]; }', label: 'Naye distinct element ko next write position par overwrite karta hai', color: '#f59e0b' },
        { part: 'return slow + 1', label: 'Unique elements ka total count return karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Dry Run: Finding Duplicates on [4, 3, 2, 7, 8, 2, 3, 1]',
        steps: [
          { step: 'num = 4, 3, 2, 7, 8', action: 'Seen set: { 4, 3, 2, 7, 8 } | duplicates: { }' },
          { step: 'num = 2', action: 'seen.has(2) is true ──► duplicates.add(2)' },
          { step: 'num = 3', action: 'seen.has(3) is true ──► duplicates.add(3)' },
          { step: 'num = 1', action: 'seen.add(1) ──► Output: [2, 3] ✅' }
        ]
      },
      timeComplexity: 'O(N) - Linear Time',
      timeComplexityExplain: 'Single pass iteration over array of length N with O(1) average Set operations or pointer updates.',
      spaceComplexity: 'O(N) for Set / O(1) for In-Place Sorted Removal',
      spaceComplexityExplain: 'Hash Set stores up to N distinct elements in auxiliary memory. Two-pointer sorted deduplication uses zero extra memory containers.',
      commonMistakes: [
        '❌ Mistake 1: Using `splice()` inside a loop to delete duplicates in-place.\\n✅ Correct: `splice()` shifts all remaining elements (O(N)), making the loop quadratic O(N²). Use two-pointer overwriting instead.',
        '❌ Mistake 2: Using `array.indexOf(x)` inside a loop.\\n✅ Correct: `indexOf` does an O(N) scan. In a loop, it becomes O(N²). Always use `Set.has(x)` for O(1) lookup.',
        '❌ Mistake 3: Forgetting that two-pointer deduplication strictly requires the array to be SORTED.'
      ],
      proTips: [
        '💡 1-Liner Contains Duplicate: `new Set(nums).size !== nums.length` is the cleanest way to check for duplicates in JavaScript.',
        '💡 Array as Hash Map (Floyd Cycle / Index Marking): When numbers are in range 1 to N, negate values at index `abs(x) - 1` to find duplicates in O(1) space!',
        '💡 Map Frequency Counter: When you need the count of each duplicate, use a Map or plain object frequency table.'
      ],
      interviewQuestions: [
        'How do you check if an array contains duplicates in O(N) time?',
        'How do you remove duplicates from a sorted array in-place with O(1) auxiliary space?',
        'What is the difference between Array.indexOf() and Set.has() in terms of time complexity?',
        'Why is using splice() inside a loop considered an anti-pattern for deduplication?',
        'How can you find duplicate numbers in O(1) space when array elements are in range [1...N]?',
        'How does the two-pointer slow/fast technique work for deduplication?'
      ],
      quiz: [
        {
          question: 'Q1. Array [5, 8, 2, 8, 1] mein duplicate element kaunsa hai?',
          options: ['5', '8', '2', 'Koi duplicate nahi hai'],
          correct: 1,
          explanation: 'Number 8 do baar aaya hai.'
        },
        {
          question: 'Q2. Hash Set approach se Duplicate check karne ki Time Complexity kya hoti hai?',
          options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
          correct: 2,
          explanation: 'Single linear pass with O(1) Set lookups = O(N) time.'
        },
        {
          question: 'Q3. Sorted array [1, 1, 2, 3, 3] se duplicates remove karne par unique elements kitne bachenge?',
          options: ['5', '4', '3', '2'],
          correct: 2,
          explanation: 'Unique elements [1, 2, 3] hain (total 3).'
        },
        {
          question: 'Q4. Loop ke andar array.splice(i, 1) call karne par overall time complexity kya ban jati hai?',
          options: ['O(1)', 'O(N)', 'O(N log N)', 'O(N²)'],
          correct: 3,
          explanation: 'splice() takes O(N) shifting time, so inside an O(N) loop the total becomes quadratic O(N²).'
        }
      ],
      practiceProblems: [
        {
          title: 'Contains Duplicate (LeetCode 217)',
          difficulty: 'Easy',
          description: 'Return true if any value appears at least twice in the array, and return false if every element is distinct.',
          hint: 'Use a Set and check if seen.has(x) or compare Set size with array length.'
        },
        {
          title: 'Remove Duplicates from Sorted Array (LeetCode 26)',
          difficulty: 'Easy',
          description: 'Remove duplicates in-place such that each unique element appears only once and return number of unique elements.',
          hint: 'Use slow/fast two-pointer approach to overwrite unique elements in-place.'
        },
        {
          title: 'Find All Duplicates in an Array (LeetCode 442)',
          difficulty: 'Medium',
          description: 'Given an integer array of length n where all integers are in range [1, n], find all elements that appear twice with O(1) auxiliary space.',
          hint: 'Use the value as an index and negate nums[abs(x) - 1]. If already negative, it is a duplicate.'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-frequency-counting',
      title: 'Frequency Counting',
      emoji: '📊',
      difficulty: 'Beginner',
      xp: 40,
      readingTime: '10 min',
      englishDef: 'Frequency Counting is an algorithmic technique used to count the occurrences of each distinct element in a collection, typically running in linear O(N) time using a Hash Map or a fixed-size Frequency Array.',
      secondExplain: 'Instead of using quadratic O(N²) nested loops to count how many times each element appears, Frequency Counting traverses the array once and records counts in a key-value registry (Hash Map or Array). This pattern serves as the foundation for solving Majority Element, Anagrams, and Top-K Frequent Elements.',
      definitionHighlight: '📊 In One Line: "Har element kitni baar aaya uska hisaab rakhna!" | Pattern: `map[x] = (map[x] || 0) + 1` | Time: O(N) | Space: O(K)',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need Frequency Counting?',
        subtitle: 'Eliminating quadratic nested-loop tallying in occurrence search and string analytics.',
        mappings: [
          { need: '🗳️ 1. Election & Tally Counting', ds: 'Tallying votes across millions of ballots in a single linear pass rather than re-scanning per candidate.' },
          { need: '🔤 2. Anagram & String Verification', ds: 'Checking if two words have identical character counts in O(N) time without expensive O(N log N) sorting.' },
          { need: '👑 3. Majority Element Detection', ds: 'Finding if an element appears more than N/2 times in O(N) time using a frequency map.' },
          { need: '🎯 4. Non-Repeating Unique Item Lookup', ds: 'Finding the first character or number with frequency === 1 in an instant O(1) secondary lookup.' }
        ],
        takeaway: '💡 Frequency Counting transforms slow quadratic O(N²) count operations into a single-pass O(N) hash map construction.'
      },
      comparisonTable: {
        title: 'Nested Count vs Hash Map vs Frequency Array',
        headers: ['Approach', 'Data Structure', 'Time Complexity', 'Auxiliary Space', 'Best Used For'],
        rows: [
          { feature: 'Nested Loops', data: 'No extra DS (Count on fly)', ds: 'O(N²)', third: 'O(1)', fourth: 'Tiny arrays (N < 20)' },
          { feature: 'Hash Map / Object ⭐', data: '`Map` or `{}`', ds: 'O(N)', third: 'O(K) (Distinct items)', fourth: 'General numbers, strings, negative values' },
          { feature: 'Frequency Array ⭐⭐', data: '`new Array(26).fill(0)`', ds: 'O(N)', third: 'O(1) (Fixed alphabet)', fourth: 'Lowercase characters (a-z) or bounded ints' }
        ],
        takeaway: '💡 Use Hash Maps for general mixed data, and fixed Frequency Arrays for alphabet character counting.'
      },
      tradeoffs: {
        title: 'Hash Map vs Frequency Array Trade-offs',
        intro: 'Choosing the right frequency storage based on data type:',
        items: [
          {
            title: '1. Hash Map (`Map` / `{}`): Flexible & Universal',
            desc: 'Handles arbitrary integers, negative numbers, and strings with O(1) average lookup and O(K) space where K is the number of distinct elements.'
          },
          {
            title: '2. Frequency Array: High-Speed Cache Friendly',
            desc: 'For characters `a-z`, an array of size 26 using `str.charCodeAt(i) - 97` as index provides instant direct access with zero hash collision overhead.'
          },
          {
            title: '3. The Canonical JS Counter Idiom: `(map[x] || 0) + 1`',
            desc: 'If `x` has not been seen yet, `map[x]` is undefined, so `|| 0` defaults it to 0, which increments to 1 on first occurrence.'
          }
        ]
      },
      hinglishExplain: `Frequency Counting ko simple Hinglish mein samjhein:

"Frequency Counting ka simple matlab hai: Kaunsa element kitni baar aaya, uska hisaab rakhna!"

Example 1:
\`const nums = [10, 20, 10, 30, 20, 10];\`
• 10 aaya 3 baar
• 20 aaya 2 baar
• 30 aaya 1 baar
Result Map: \`{ 10: 3, 20: 2, 30: 1 }\`

JavaScript Ka Sabse Famous 1-Line Counter Pattern:
\`freqMap[num] = (freqMap[num] || 0) + 1;\`

Ye Line Kaise Kaam Karti Hai?
1. Agar \`num\` pehli baar aaya: \`freqMap[num]\` undefined hota hai, toh \`undefined || 0\` ban jata hai \`0\`. Phir \`0 + 1 = 1\` save hota hai.
2. Agar \`num\` pehle se maujood hai (maan lo count 2 hai): \`2 || 0\` hota hai \`2\`. Phir \`2 + 1 = 3\` save ho jata hai!

🧠 Golden Rule:
"Ek pass mein Map banao, fir kisi bhi element ka count O(1) mein jaan lo!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Class Monitor Ke Elections:

Masti Sir ke class mein Monitor ke elections the. 6 bacho ne voting parchi daali:
const votes = ["Aman", "Bhavya", "Aman", "Chirag", "Aman", "Bhavya"];

Pehle ek student "Chintu" ne ginti shuru ki:
Pehle Aman ke saare votes gine (poora dabba chhaana), fir Bhavya ke gine (dobara dabba chhaana) ──► O(N²) time lag gaya!

Masti Sir bole: "Arre Chintu! Blackboard par 3 columns banao (Hash Map):
• Aman
• Bhavya
• Chirag

Ab dabbe se 1-1 parchi nikaalo aur uske naam ke aage +1 karte jao!"

1. Aman ──► Aman: 1
2. Bhavya ──► Bhavya: 1
3. Aman ──► Aman: 2
4. Chirag ──► Chirag: 1
5. Aman ──► Aman: 3
6. Bhavya ──► Bhavya: 2

Final Tally: \`{ Aman: 3, Bhavya: 2, Chirag: 1 }\`
Winner: **Aman (3 votes)** in single pass O(N) time!

🎯 Story Ka Lesson:
"Har item ke liye poora array dobara scan mat karo. Blackboard (Map) par har candidate ke aage count badhate chalo!"`,
      conceptMapping: [
        { emoji: '📊', item: 'Frequency Counting', mapsTo: 'Tallying occurrences of distinct values in O(N) time' },
        { emoji: '🗃️', item: 'Hash Map / Object', mapsTo: 'Key-value registry `{ element: count }`' },
        { emoji: '🔢', item: '`(map[x] || 0) + 1`', mapsTo: 'Safe initialization and increment in JavaScript' },
        { emoji: '🔤', item: 'Frequency Array (26)', mapsTo: 'Index mapped counting for lowercase english letters' },
        { emoji: '⚡', item: 'O(1) Lookup', mapsTo: 'Instantly querying `map[target]` after single O(N) build' },
        { emoji: '💾', item: 'O(K) Space', mapsTo: 'Auxiliary memory proportional to K distinct elements' }
      ],
      realWorldVisualDiagram: {
        title: 'Visual Frequency Mapping on [10, 20, 10, 30, 20, 10]',
        pipeline: [
          { step: '01. Element 10 (idx 0)', desc: 'Map: { "10": 1 }' },
          { step: '02. Element 20 (idx 1)', desc: 'Map: { "10": 1, "20": 1 }' },
          { step: '03. Element 10 (idx 2)', desc: 'Map: { "10": 2, "20": 1 }' },
          { step: '04. Element 30, 20, 10', desc: 'Final Map: { "10": 3, "20": 2, "30": 1 } ✅' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// FREQUENCY COUNTING IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

/**
 * 1. General Frequency Counting using Plain Object: O(N) Time, O(K) Space
 */
function getFrequencies(arr) {
  const freqMap = {};
  for (const item of arr) {
    freqMap[item] = (freqMap[item] || 0) + 1;
  }
  return freqMap;
}

/**
 * 2. Character Frequency Array for 'a' to 'z': O(N) Time, O(1) Space
 */
function getCharFrequencies(str) {
  const freq = new Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i) - 97; // 'a' code is 97
    freq[code]++;
  }
  return freq;
}

/**
 * 3. Find Most Frequent (Majority) Element: O(N) Time, O(K) Space
 */
function findMostFrequent(arr) {
  const freq = getFrequencies(arr);
  let maxElement = arr[0];
  let maxCount = 0;

  for (const key in freq) {
    if (freq[key] > maxCount) {
      maxCount = freq[key];
      maxElement = key;
    }
  }

  return { element: maxElement, count: maxCount };
}

// 🧪 Demonstrations
const numbers = [10, 20, 10, 30, 20, 10];
console.log("Frequencies:", getFrequencies(numbers)); // { '10': 3, '20': 2, '30': 1 }
console.log("Most Frequent:", findMostFrequent(numbers)); // { element: '10', count: 3 }

const text = "anagram";
console.log("Char Frequencies for 'anagram':", getCharFrequencies(text)); // Array of 26 counts`,
      codeBreakdown: [
        { part: 'const freqMap = {}', label: 'Empty dictionary / hash table create karta hai', color: '#3b82f6' },
        { part: 'for (const item of arr)', label: 'Input array par single linear O(N) pass traverse karta hai', color: '#10b981' },
        { part: 'freqMap[item] = (freqMap[item] || 0) + 1', label: 'Default 0 agar naya item ho, else current count mein +1 karta hai', color: '#8b5cf6' },
        { part: 'str.charCodeAt(i) - 97', label: 'Letter a-z ko 0-25 array index mein map karta hai', color: '#f59e0b' },
        { part: 'for (const key in freq)', label: 'Computed map ko iterate karke max count/unique item find karta hai', color: '#ec4899' }
      ],
      dryRun: {
        title: 'Step-by-Step Dry Run on [10, 20, 10, 30, 20, 10]',
        steps: [
          { step: 'i = 0 (10)', action: 'freq[10] = (undefined || 0) + 1 = 1 ──► { "10": 1 }' },
          { step: 'i = 1 (20)', action: 'freq[20] = (undefined || 0) + 1 = 1 ──► { "10": 1, "20": 1 }' },
          { step: 'i = 2 (10)', action: 'freq[10] = (1 || 0) + 1 = 2 ──► { "10": 2, "20": 1 }' },
          { step: 'i = 3 (30)', action: 'freq[30] = (undefined || 0) + 1 = 1 ──► { "10": 2, "20": 1, "30": 1 }' },
          { step: 'i = 4 (20)', action: 'freq[20] = (1 || 0) + 1 = 2 ──► { "10": 2, "20": 2, "30": 1 }' },
          { step: 'i = 5 (10)', action: 'freq[10] = (2 || 0) + 1 = 3 ──► { "10": 3, "20": 2, "30": 1 } ✅' }
        ]
      },
      timeComplexity: 'O(N) - Linear Time',
      timeComplexityExplain: 'Visiting N elements once and inserting/updating in a hash map takes O(1) average time per element, yielding O(N) total time.',
      spaceComplexity: 'O(K) Auxiliary Space (where K <= N is distinct elements)',
      spaceComplexityExplain: 'The hash map stores at most K distinct keys. In the worst case where all elements are unique, space is O(N). For fixed alphabet characters, space is O(1) (26 slots).',
      commonMistakes: [
        '❌ Mistake 1: Calling `arr.filter(x => x === num).length` inside a loop.\\n✅ Correct: filter() inside a loop creates an O(N²) quadratic disaster. Use a frequency map for O(N).',
        '❌ Mistake 2: Forgetting `|| 0` default fallback resulting in `NaN` (`undefined + 1 = NaN`).\\n✅ Correct: Always write `(map[x] || 0) + 1`.',
        '❌ Mistake 3: Treating object keys strictly as numbers.\\n✅ Correct: JS plain object keys are always strings. If number keys are required, use `new Map()` or `Number(key)`.'
      ],
      proTips: [
        '💡 Valid Anagram in 1 Pass: Increment counts for string s and decrement for string t. If all counts end at 0, they are anagrams!',
        '💡 First Unique Character: Build frequency map in pass 1, then traverse the string in pass 2 to find the first character with `freq[c] === 1`.',
        '💡 Map vs Object: Use `new Map()` when keys are non-string types or when insertion order preservation is required.'
      ],
      interviewQuestions: [
        'What is Frequency Counting and how is it implemented in JavaScript?',
        'What is the time and space complexity of building a frequency map?',
        'How does `(map[x] || 0) + 1` prevent NaN errors in JavaScript?',
        'When should you use a 26-size Frequency Array over a generic Hash Map?',
        'How can you solve the Valid Anagram problem using a Frequency Array in O(N) time?',
        'How do you find the first non-repeating character in a string using frequency counting?'
      ],
      quiz: [
        {
          question: 'Q1. Array [10, 20, 10, 30, 20, 10] mein number 10 ki frequency kitni hai?',
          options: ['1', '2', '3', '6'],
          correct: 2,
          explanation: 'Number 10 teen (3) baar appear hua hai.'
        },
        {
          question: 'Q2. JavaScript expression `(undefined || 0) + 1` ka output kya hoga?',
          options: ['undefined', 'NaN', '0', '1'],
          correct: 3,
          explanation: 'undefined falsy hota hai isliye fallback 0 select hota hai, aur 0 + 1 = 1.'
        },
        {
          question: 'Q3. N size ke array ka frequency map build karne ki Time Complexity kya hoti hai?',
          options: ['O(1)', 'O(log N)', 'O(N)', 'O(N²)'],
          correct: 2,
          explanation: 'Ek single loop mein har element ko visit karte hain with O(1) map lookups.'
        },
        {
          question: 'Q4. Lowercase characters (a-z) ke count ke liye kitne size ka Frequency Array lagta hai?',
          options: ['10', '26', '128', '256'],
          correct: 1,
          explanation: 'English alphabet mein total 26 lowercase letters hote hain (index 0 to 25).'
        }
      ],
      practiceProblems: [
        {
          title: 'Valid Anagram (LeetCode 242)',
          difficulty: 'Easy',
          description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise.',
          hint: 'Use a 26-size frequency array: increment for s, decrement for t, check all zeroes.'
        },
        {
          title: 'First Unique Character in a String (LeetCode 387)',
          difficulty: 'Easy',
          description: 'Find the first non-repeating character in a string and return its index. If it does not exist, return -1.',
          hint: 'Build a frequency map in first pass. In second pass, return index of first char with frequency 1.'
        },
        {
          title: 'Majority Element (LeetCode 169)',
          difficulty: 'Easy',
          description: 'Given an array of size n, return the majority element that appears more than n / 2 times.',
          hint: 'Count frequencies in a map and find the key with count > n / 2 (or use Boyer-Moore Voting Algorithm).'
        }
      ]
    }),

    createDsaLesson({
      id: 'dsa-common-array-problems',
      title: 'Common Array Problems & Practice Masterclass',
      emoji: '🏆',
      difficulty: 'Intermediate',
      xp: 60,
      readingTime: '25 min',
      englishDef: 'Common Array Problems are standard algorithmic challenges that teach core problem-solving patterns: Hash Map complement lookups, Running Minimum/State tracking, Kadane’s dynamic subarray decisions, Two-Pointer read/write partitions, 3-Step In-Place Reversals, and Boundary-Limited Water Trapping.',
      secondExplain: 'The objective of this Masterclass is not memorizing code snippets, but internalizing pattern recognition: inspecting problem constraints, identifying whether to apply Hash Maps, Two Pointers, Greedy State Tracking, or In-Place Reversals, and reducing quadratic O(N²) brute-force solutions down to optimal linear O(N) execution.',
      definitionHighlight: '🏆 Master Rule: "Don\'t memorize code — identify the pattern! Problem ──► Identify Pattern ──► Choose State ──► Optimize O(N²) to O(N) ──► Test Edge Cases!"',
      whyNeedIt: null,
      whyDifferentDs: {
        title: 'Why Do We Need an Array Problems Masterclass?',
        subtitle: 'Connecting fundamental array operations into repeatable, interview-ready algorithmic patterns.',
        mappings: [
          { need: '🧩 1. Pattern Recognition Over Memorization', ds: 'Learning the 6 core patterns allows solving hundreds of unseen interview variations.' },
          { need: '⚡ 2. Transforming O(N²) into Optimal O(N)', ds: 'Mastering how Hash Maps and Two Pointers eliminate redundant inner loops.' },
          { need: '💾 3. Space vs Time Engineering Trade-offs', ds: 'Understanding when investing O(N) memory is necessary (Two Sum) vs when O(1) in-place suffices (Kadane, Rotate, Move Zeroes).' },
          { need: '🎯 4. Multi-Concept Integration', ds: 'Combining prefix sums, two pointers, modular math, and monotonic tracking into complete solutions.' }
        ],
        takeaway: '💡 Mastering these 6 foundational patterns builds the intuition required to solve complex array challenges across technical interviews and competitive programming.'
      },
      comparisonTable: {
        title: 'The 6 Masterclass Problem Patterns Master Matrix',
        headers: ['Problem', 'Core Algorithmic Pattern', 'Brute Force Time', 'Optimized Time', 'Auxiliary Space'],
        rows: [
          { feature: '1. Two Sum', data: 'Hash Map Complement (`target - num`)', ds: 'O(N²)', third: 'O(N) average', fourth: 'O(N) Map' },
          { feature: '2. Buy/Sell Stock', data: 'Running Minimum Tracking (Greedy)', ds: 'O(N²)', third: 'O(N)', fourth: 'O(1) Space' },
          { feature: '3. Maximum Subarray', data: "Kadane's Algorithm (Extend vs Restart)", ds: 'O(N²) / O(N³)', third: 'O(N)', fourth: 'O(1) Space' },
          { feature: '4. Move Zeroes', data: 'Fast/Slow Two-Pointer Partitioning', ds: 'O(N²)', third: 'O(N)', fourth: 'O(1) In-Place' },
          { feature: '5. Rotate Array', data: '3-Step In-Place Reversal Algorithm', ds: 'O(N × K)', third: 'O(N)', fourth: 'O(1) In-Place' },
          { feature: '6. Trapping Rain Water', data: 'Converging Two-Pointer Boundary Limit', ds: 'O(N²)', third: 'O(N)', fourth: 'O(1) In-Place' }
        ],
        takeaway: '💡 Every single one of these 6 problems can be optimized from quadratic O(N²) down to optimal linear O(N) time.'
      },
      tradeoffs: {
        title: 'Pattern Recognition Decision Guide',
        intro: 'How to instantly diagnose which pattern to apply when reading a problem statement:',
        items: [
          {
            title: '1. "Find two numbers adding to target" ──► Hash Map Complement',
            desc: 'Calculate `needed = target - current`. Check if `needed` was previously registered in Map in average O(1) time.'
          },
          {
            title: '2. "Buy low, sell high in chronological sequence" ──► Running Minimum',
            desc: 'Track `minPrice` seen so far and compare `price - minPrice` against `maxProfit` in single O(N) pass.'
          },
          {
            title: '3. "Maximum sum contiguous subarray" ──► Kadane’s Algorithm',
            desc: 'Local decision: `currentSum = Math.max(nums[i], currentSum + nums[i])`. Safe initialization with `nums[0]`.'
          },
          {
            title: '4. "Partition/shift elements while preserving relative order" ──► Fast/Slow Pointers',
            desc: '`fast` pointer reads candidate items; `slow` pointer writes valid items into destination index.'
          },
          {
            title: '5. "Cyclic shift / rotate in-place" ──► Reversal Algorithm & Modulo',
            desc: 'Normalize with `k = k % n`, then perform 3 section reversals in O(N) time and O(1) space.'
          },
          {
            title: '6. "Elevation heights trapping water/volume" ──► Two Pointers (Smaller Wall)',
            desc: 'The lower wall between `left` and `right` determines the water level boundary safely.'
          }
        ]
      },
      hinglishExplain: `Array Problems Masterclass ko simple Hinglish mein samjhein:

"Interview mein problem dekh kar seedhe random code likhna shuru mat karo. Step-by-step master flow follow karo!"

Master Problem Solving Pipeline:
1. **Problem Samjho:** Input format, output format aur constraints kya hain?
2. **Brute Force Socho:** Pehle simple nested-loop ($O(N^2)$) solution dimaag mein banao.
3. **Bottleneck Pehchano:** Loop baar-baar kya dhoondh raha hai?
4. **Pattern Apply Karo:**
   • Pair dhoondhna hai? ──► Hash Map!
   • Best streak ya subarray? ──► Kadane!
   • In-place shift karna hai? ──► Two Pointers / Reversals!
   • Elevation aur paani? ──► Two Pointers with Min Wall!
5. **Edge Cases & Dry Run:** Table bana kar actual numbers ke sath check karo.
6. **Final Code & Complexity Analysis!**

🧠 Masti Sir Ka Golden Formula:
"Don't memorize the code — understand the pattern!"`,
      storyExplain: `📖 Masti Sir Ki Kahani — Aman Ka 6-Mission Interview Challenge:

Masti Sir ne top student Aman ko ek company ke 6 Technical Rounds ka simulation diya:

• **Round 1 (Two Sum):** Target ₹9 banane ke liye do students ke paise match karo. Aman ne register (Map) khola: "Current ₹2 hai toh ₹7 chahiye, note kar lo!" ──► Solved in O(N)!
• **Round 2 (Stock Profit):** Crypto buying-selling. Aman ne roz ka cheapest price yaad rakha aur max profit calculate kiya ──► Solved in O(N)!
• **Round 3 (Max Subarray):** 10 dino ki best performance streak. Aman ne Kadane lagaya: "Negative baggage drop karo aur fresh start karo!" ──► Solved in O(N)!
• **Round 4 (Move Zeroes):** Classroom ki empty seats piche karo. Aman ne Fast/Slow monitor banaya: Fast ne student dhoondha, Slow ne seat par bitha diya ──► Solved in O(1) space!
• **Round 5 (Rotate Array):** Students ko 3 seats right rotate karo. Aman ne 3-step reversal magic chalaya ──► Solved in O(1) space!
• **Round 6 (Trapping Rain Water):** Building terrace par baarish ka paani napo. Aman ne rule lagaya: "Jis taraf ki deewar chhoti hai, paani usi se limit hoga!" ──► Solved in O(N) time and O(1) space!

Masti Sir bole: "Shabash Aman! Question alag dikh sakte hain, lekin patterns wahi 6 repeat hote hain!"`,
      conceptMapping: [
        { emoji: '🎯', item: 'Two Sum', mapsTo: 'Hash Map Complement lookup `target - nums[i]`' },
        { emoji: '📈', item: 'Stock Profit', mapsTo: 'Running minimum price tracking `Math.min(min, price)`' },
        { emoji: '🔥', item: 'Max Subarray', mapsTo: "Kadane's extend vs restart state transition" },
        { emoji: '🚶‍♂️', item: 'Move Zeroes', mapsTo: 'Fast/Slow read-write two pointer partitioning' },
        { emoji: '🔄', item: 'Rotate Array', mapsTo: '3-Step in-place array section reversals' },
        { emoji: '🌧️', item: 'Trapping Rain Water', mapsTo: 'Converging two-pointer smaller wall limitation' }
      ],
      realWorldVisualDiagram: {
        title: 'The 6 Masterclass Patterns Architecture',
        pipeline: [
          { step: '01. Two Sum', desc: 'target - num ──► Map.has(needed) ──► O(N) Time, O(N) Space' },
          { step: '02. Stock Profit', desc: 'minPrice = min(minPrice, price), profit = max(profit, price - minPrice) ──► O(N), O(1)' },
          { step: '03. Kadane Subarray', desc: 'currentSum = max(num, current + num), maxSum = max(maxSum, currentSum) ──► O(N), O(1)' },
          { step: '04. Move Zeroes', desc: 'if (nums[fast] !== 0) swap(slow, fast), slow++ ──► O(N), O(1)' },
          { step: '05. Rotate Array', desc: 'k %= n ──► Reverse All ──► Reverse First k ──► Reverse Rest ──► O(N), O(1)' },
          { step: '06. Trapping Water', desc: 'height[l] <= height[r] ? process left with leftMax : process right with rightMax ──► O(N), O(1)' }
        ]
      },
      code: `// ══════════════════════════════════════════════════════════════
// ARRAY PROBLEMS MASTERCLASS: 6 TOP PATTERNS IN JAVASCRIPT
// ══════════════════════════════════════════════════════════════

// 1. TWO SUM (LeetCode 1): O(N) Time, O(N) Space
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}

// 2. BEST TIME TO BUY & SELL STOCK (LeetCode 121): O(N) Time, O(1) Space
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}

// 3. MAXIMUM SUBARRAY (LeetCode 53 - Kadane): O(N) Time, O(1) Space
function maxSubArray(nums) {
  let currentSum = nums[0], maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// 4. MOVE ZEROES (LeetCode 283): O(N) Time, O(1) Space
function moveZeroes(nums) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  return nums;
}

// 5. ROTATE ARRAY RIGHT (LeetCode 189): O(N) Time, O(1) Space
function rotateArray(nums, k) {
  const n = nums.length;
  if (n === 0) return nums;
  k = k % n;
  const reverse = (l, r) => {
    while (l < r) [nums[l++], nums[r--]] = [nums[r], nums[l]];
  };
  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
  return nums;
}

// 6. TRAPPING RAIN WATER (LeetCode 42): O(N) Time, O(1) Space
function trapRainWater(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0, totalWater = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) leftMax = height[left];
      else totalWater += leftMax - height[left];
      left++;
    } else {
      if (height[right] >= rightMax) rightMax = height[right];
      else totalWater += rightMax - height[right];
      right--;
    }
  }
  return totalWater;
}

// 🧪 Masterclass Demonstration Tests
console.log("1. Two Sum [2,7,11,15], target 9:", twoSum([2,7,11,15], 9)); // [0, 1]
console.log("2. Max Stock Profit [7,1,5,3,6,4]:", maxProfit([7,1,5,3,6,4])); // 5
console.log("3. Max Subarray [-2,1,-3,4,-1,2,1,-5,4]:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log("4. Move Zeroes [0,1,0,3,12]:", moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log("5. Rotate Right [1,2,3,4,5], k=2:", rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3]
console.log("6. Trapped Water [0,1,0,2,1,0,1,3,2,1,2,1]:", trapRainWater([0,1,0,2,1,0,1,3,2,1,2,1])); // 6`,
      codeBreakdown: [
        { part: 'const complement = target - nums[i]; if (map.has(complement))', label: 'Two Sum: Target mein se current minus karke partner lookup karta hai in O(1)', color: '#3b82f6' },
        { part: 'minPrice = Math.min(minPrice, price); maxProfit = Math.max(...)', label: 'Stock: Cheapest buy price track karke max difference update karta hai', color: '#10b981' },
        { part: 'currentSum = Math.max(nums[i], currentSum + nums[i])', label: 'Kadane: Restart fresh at nums[i] ya extend previous contiguous subarray', color: '#8b5cf6' },
        { part: 'if (nums[fast] !== 0) { swap(slow, fast); slow++; }', label: 'Move Zeroes: Fast pointer non-zero dhoondhta hai aur slow pointer par swap karta hai', color: '#f59e0b' },
        { part: 'reverse(0, n-1); reverse(0, k-1); reverse(k, n-1);', label: 'Rotate Array: 3-step in-place reversal bina kisi extra memory buffer ke', color: '#ec4899' },
        { part: 'if (height[left] <= height[right]) { process left; left++; }', label: 'Trapping Water: Smaller wall boundary water capacity limit karti hai', color: '#06b6d4' }
      ],
      dryRun: {
        title: 'Masterclass Quick Dry Runs',
        steps: [
          { step: 'Two Sum [2,7,11,15], target 9', action: 'i=0 (2): needed=7, map={2:0} | i=1 (7): needed=2 in map! Return [0, 1] ✅' },
          { step: 'Stock [7,1,5,3,6,4]', action: 'minPrice=1 at day 2. Sell at 6 on day 5 ──► Profit = 6 - 1 = 5 ✅' },
          { step: 'Kadane [-2,1,-3,4,-1,2,1,-5,4]', action: 'Streak [4, -1, 2, 1] produces max sum = 6 ✅' },
          { step: 'Move Zeroes [0,1,0,3,12]', action: 'Non-zeroes placed at front: [1, 3, 12, 0, 0] ✅' },
          { step: 'Rotate [1,2,3,4,5], k=2', action: 'Reverse all [5,4,3,2,1] ──► [4,5 | 1,2,3] ✅' },
          { step: 'Trapping Water [0,1,0,2,1,0,1,3,2,1,2,1]', action: 'Total trapped water units calculated = 6 ✅' }
        ]
      },
      timeComplexity: 'All 6 Patterns execute in optimal O(N) Linear Time',
      timeComplexityExplain: 'Each algorithm visits elements in a single pass (or constant number of section passes), completely eliminating nested O(N²) quadratic loops.',
      spaceComplexity: 'Two Sum O(N) | Stock, Kadane, Move Zeroes, Rotate, Trapping Water O(1) In-Place',
      spaceComplexityExplain: 'Two Sum uses a Hash Map for fast complement lookups. The other 5 patterns solve their problems in-place using O(1) scalar pointers.',
      commonMistakes: [
        '❌ Mistake 1: Jumping straight into coding before identifying the pattern.',
        '❌ Mistake 2: Returning values instead of indices in Two Sum.',
        '❌ Mistake 3: Selling stock on the same day or before buying day.',
        '❌ Mistake 4: Initializing Kadane with maxSum = 0 which fails on all-negative arrays.',
        '❌ Mistake 5: Moving zeroes but scrambling the relative order of non-zero elements.',
        '❌ Mistake 6: Forgetting `k = k % n` before rotating arrays.',
        '❌ Mistake 7: Miscalculating Trapping Rain Water by not updating leftMax/rightMax correctly.'
      ],
      proTips: [
        '💡 Pattern Recognition Reflex: Memorize the trigger phrases (e.g. "pair sum" ──► Map, "contiguous sum" ──► Kadane, "partition" ──► Two Pointers).',
        '💡 In-Place Preference: In technical interviews, solutions requiring O(1) auxiliary space are always rated higher than solutions creating extra array buffers.',
        '💡 Edge Case Ritual: Always dry run empty array `[]`, single element `[x]`, all duplicates, and all-negative arrays before concluding.'
      ],
      interviewQuestions: [
        'How does a Hash Map optimize Two Sum from O(N²) down to O(N)?',
        'Why does the Best Time to Buy and Sell Stock problem only require O(1) space?',
        'How does Kadane’s Algorithm handle arrays where all numbers are negative?',
        'How does the fast/slow two-pointer approach in Move Zeroes preserve relative element order?',
        'Why is the 3-step Reversal Algorithm the optimal way to rotate an array?',
        'Explain why the smaller wall determines trapped water level in the Two Pointer approach.',
        'What are the trade-offs between Hash Map vs Two Pointer approaches?'
      ],
      quiz: [
        {
          question: 'Q1. Two Sum problem ko O(N) time mein solve karne ke liye kaunsa pattern use hota hai?',
          options: ['Binary Search', 'Hash Map Complement Lookup', 'Kadane Algorithm', 'Stack'],
          correct: 1,
          explanation: 'Target - nums[i] ko Hash Map mein O(1) lookup karke single pass O(N) mein solve kiya jata hai.'
        },
        {
          question: 'Q2. Move Zeroes problem mein slow aur fast pointers ka Auxiliary Space kitna hota hai?',
          options: ['O(1)', 'O(N)', 'O(log N)', 'O(N²)'],
          correct: 0,
          explanation: 'In-place element swapping uses constant O(1) auxiliary memory.'
        },
        {
          question: 'Q3. Kadane’s Algorithm kis problem ko solve karta hai?',
          options: ['Longest Common Subsequence', 'Maximum Sum Contiguous Subarray', 'Shortest Path', 'Top K Elements'],
          correct: 1,
          explanation: 'Contiguous subarray with largest sum in linear O(N) time.'
        },
        {
          question: 'Q4. Trapping Rain Water problem mein do pointers ke beech paani ka level kaun decide karta hai?',
          options: ['Hamesha left wall', 'Hamesha right wall', 'Smaller (Chhoti) boundary wall', 'Array ka average height'],
          correct: 2,
          explanation: 'Paani chhoti boundary se overflow hota hai, isliye min(leftMax, rightMax) decide karta hai.'
        }
      ],
      practiceProblems: [
        {
          title: 'Two Sum (LeetCode 1)',
          difficulty: 'Easy',
          description: 'Return indices of the two numbers such that they add up to target using a Hash Map.',
          hint: 'Use map.has(target - nums[i]) to find complement in O(1).'
        },
        {
          title: 'Best Time to Buy and Sell Stock (LeetCode 121)',
          difficulty: 'Easy',
          description: 'Maximize profit by choosing a single day to buy one stock and choosing a different day in the future to sell.',
          hint: 'Track minPrice seen so far and update maxProfit = max(maxProfit, price - minPrice).'
        },
        {
          title: 'Maximum Subarray (LeetCode 53)',
          difficulty: 'Medium',
          description: 'Find the contiguous subarray which has the largest sum and return its sum.',
          hint: 'Kadane: currentSum = max(nums[i], currentSum + nums[i]), maxSum = max(maxSum, currentSum).'
        },
        {
          title: 'Move Zeroes (LeetCode 283)',
          difficulty: 'Easy',
          description: 'Move all 0s to the end of the array while maintaining the relative order of non-zero elements.',
          hint: 'Use two pointers: if fast is non-zero, swap with slow and slow++.'
        },
        {
          title: 'Rotate Array (LeetCode 189)',
          difficulty: 'Medium',
          description: 'Rotate an array to the right by k steps in-place.',
          hint: 'k %= n, reverse all, reverse first k, reverse remaining n-k.'
        },
        {
          title: 'Trapping Rain Water (LeetCode 42)',
          difficulty: 'Hard',
          description: 'Given n non-negative integers representing an elevation map, compute how much water it can trap after raining.',
          hint: 'Converging two pointers: advance the side with smaller height while tracking leftMax and rightMax.'
        }
      ]
    })
  ]
}

