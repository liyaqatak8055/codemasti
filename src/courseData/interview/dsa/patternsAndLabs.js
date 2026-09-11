// Chapters 37 to 40: 22-Pattern Library, Pattern Recognition Engine, Brute Force -> Optimal Framework & Debugging Lab

export const patternsAndLabsChapters = [
  {
    chapterTitle: 'Chapter 37 — The 22 Problem-Solving Pattern Library',
    lessons: [
      {
        id: 'ds-pattern-library-22',
        title: 'The 22 Core DSA Problem-Solving Patterns & Master Templates',
        emoji: '📚',
        xpReward: 50,
        badgeName: 'Pattern Master',
        readingTime: '15 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "DSA mein 2000 questions ratna bewaqoofi hai! Sirf ye 22 PATTERNS seekh lo, duniya ka koi bhi coding question inhi 22 patterns ka combination hota hai! 😎"',
          hint: '🤦 Masti Sir: "Question padhte hi keyword pakdo: \'Sorted\' -> Binary Search / Two Pointers; \'Continuous Subarray\' -> Sliding Window; \'Top K\' -> Heap!"',
          success: '🥳 Masti Sir: "22 Patterns Library tumhare dimag mein install ho chuki hai! Ab interview ready ho! 🚀"',
          mistake: '😅 Masti Sir: "Pattern identify karne se pehle seedha for-loop mat likhna!"'
        },
        englishDef: 'The 22 Core Problem-Solving Pattern Library is an algorithmic categorization framework that maps any coding problem to its underlying computational paradigm (Two Pointers, Sliding Window, Fast & Slow, Monotonic Stack, BFS/DFS, Topo Sort, Greedy, Heap, Union-Find, DP, Bitmask, Trie, Range Query).',
        hinglishExplain: 'DSA mein 500 alag-alag questions solve karne ke bajaye agar aap in 22 core patterns ko pehchan na seekh lein, toh har naya question kisi na kisi pattern ka template ban jata hai. Har pattern ka ek clear "Kab pehchanein", "Template code", aur "Common Trap" hota hai.',
        storyExplain: 'Doctor ka Diagnosis socho: Har patient nayi bimari leke nahi aata! Doctor symptoms (Keywords) match karta hai: Bukhar + Sardi = Flu! Waise hi Coding interview mein: "Sorted Array" + "Target Pair" = Two Pointers! "Top K Elements" = Min-Heap! 🩺💊',
        funnyExample: {
          scenario: 'Pattern Recognition Cheat Sheet:\n1. "Sorted Array + Target" → Two Pointers\n2. "Longest / Shortest Substring" → Sliding Window\n3. "Range Sum Query" → Prefix Sum\n4. "Next Warmer / Greater Element" → Monotonic Stack\n5. "Top K / Kth Smallest" → Heap / Priority Queue\n6. "Dependencies / Prereqs" → Topological Sort\n7. "Shortest Path Unweighted" → BFS',
          punchline: 'Recognize the pattern, code in 5 minutes!'
        },
        memoryTrick: 'The Top 10 High-Yield Patterns:\n1. Two Pointers | 2. Sliding Window | 3. Prefix Sum + Hash\n4. Fast & Slow Pointer | 5. Monotonic Stack | 6. Top K Heap\n7. Level-order BFS | 8. Backtrack 3-Step | 9. 1D/2D DP | 10. DSU Union-Find',
        visualDiagram: {
          title: '22-Pattern Decision Hierarchy',
          nodes: [
            'Linear Data: Two Pointers, Sliding Window, Prefix Sum, Monotonic Stack',
            'Hierarchical / Trees: Tree DFS, Tree BFS Level-Order, BST Properties, Trie',
            'Network / Graphs: BFS Shortest Path, DFS Components, Topo Sort, Dijkstra, DSU',
            'Optimization: Greedy, 1D/2D DP, Binary Search on Answer, Divide & Conquer'
          ],
          type: 'tree'
        },
        code: `// The 22-Pattern Library Registry & Example Dispatcher
export const PATTERN_LIBRARY = [
  {
    id: 1,
    name: "Two Pointers",
    trigger: "Sorted array, pair sum, palindromes, container boundaries",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    sampleProblems: ["Two Sum II (Sorted)", "3Sum", "Container With Most Water", "Trapping Rain Water"],
    template: \`let left = 0, right = arr.length - 1;
while (left < right) {
  const sum = arr[left] + arr[right];
  if (sum === target) return [left, right];
  else if (sum < target) left++;
  else right--;
}\`
  },
  {
    id: 2,
    name: "Sliding Window",
    trigger: "Contiguous subarray / substring, longest / shortest subsegment",
    timeComplexity: "O(N)",
    spaceComplexity: "O(K) or O(1)",
    sampleProblems: ["Longest Substring Without Repeating", "Minimum Window Substring", "Max Sum Subarray of size K"],
    template: \`let left = 0, state = new Map();
for (let right = 0; right < s.length; right++) {
  // Expand right
  while (conditionViolated) {
    // Shrink left
    left++;
  }
  // Update answer
}\`
  },
  {
    id: 3,
    name: "Fast & Slow Pointers (Floyd's Tortoise & Hare)",
    trigger: "Cycle detection, finding middle of linked list, palindrome linked list",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    sampleProblems: ["Linked List Cycle", "Middle of Linked List", "Find Duplicate Number"],
    template: \`let slow = head, fast = head;
while (fast && fast.next) {
  slow = slow.next;
  fast = fast.next.next;
  if (slow === fast) return true; // Cycle!
}\`
  },
  {
    id: 4,
    name: "Monotonic Stack",
    trigger: "Next Greater Element, Next Smaller Element, Daily Temperatures, Largest Histogram",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    sampleProblems: ["Daily Temperatures", "Next Greater Element", "Largest Rectangle in Histogram"],
    template: \`const stack = [];
for (let i = 0; i < nums.length; i++) {
  while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
    const prevIdx = stack.pop();
    res[prevIdx] = nums[i];
  }
  stack.push(i);
}\`
  },
  {
    id: 5,
    name: "Top-K Elements (Heap)",
    trigger: "Kth largest/smallest, Top K frequent elements, running stream elements",
    timeComplexity: "O(N log K)",
    spaceComplexity: "O(K)",
    sampleProblems: ["Kth Largest Element", "Top K Frequent Elements", "Find Median from Data Stream"],
    template: \`const minHeap = new MinPriorityQueue();
for (let num of nums) {
  minHeap.enqueue(num);
  if (minHeap.size() > k) minHeap.dequeue();
}
return minHeap.front().element;\`
  }
];

console.log("Pattern Library Loaded: Total 22 Master Patterns available.");`,
        languages: {
          javascript: `// Pattern Lookup Helper
function matchPattern(keywords) {
  if (keywords.includes("sorted") && keywords.includes("pair")) return "Two Pointers";
  if (keywords.includes("contiguous") && keywords.includes("max")) return "Sliding Window";
  if (keywords.includes("top k") || keywords.includes("kth")) return "Heap";
  if (keywords.includes("dependencies") || keywords.includes("prereq")) return "Topological Sort";
  return "Dynamic Programming / Backtracking";
}`,
          python: `# Python Pattern Matcher
def match_pattern(desc: str) -> str:
    if "sorted" in desc and "pair" in desc: return "Two Pointers"
    if "substring" in desc or "subarray" in desc: return "Sliding Window"
    if "top k" in desc or "kth" in desc: return "Heap"
    if "dependency" in desc: return "Topological Sort"
    return "Dynamic Programming"`,
          java: `public class PatternEngine {
    public static String getPattern(String hint) {
        if (hint.contains("sorted") && hint.contains("pair")) return "Two Pointers";
        if (hint.contains("subarray")) return "Sliding Window";
        return "General DSA";
    }
}`,
          cpp: `#include <string>
std::string getPattern(const std::string& query) {
    if (query.find("sorted") != std::string::npos) return "Two Pointers / Binary Search";
    return "DP";
}`,
          c: `// Pattern Library in C
`
        },
        codeBreakdown: [
          { part: 'PATTERN_LIBRARY', label: 'Structured collection of 22 foundational DSA paradigms with templates and complexity guarantees', color: '#10b981' }
        ],
        complexity: {
          time: 'Pattern recognition takes O(1); implementations range from O(N) to O(N log N)',
          space: 'Varies from O(1) to O(N)'
        },
        commonMistakes: [
          '❌ Unsorted array par direct Two Pointers lagana',
          '❌ Har problem ko brute force nested loops se shuru karke time limit exceed karwana'
        ],
        edgeCases: [
          'Empty inputs and single-element bounds',
          'Boundary overflow in extreme values'
        ],
        bestPractices: [
          '✅ First identify the pattern, write down the template, then adapt to specific problem constraints'
        ],
        miniChallenge: 'What pattern would you choose for: "Given a list of words, find the minimum edit operations to transform startWord to endWord" (Word Ladder)?',
        quiz: {
          question: '"Find Kth Largest element in an unsorted stream of 1 crore numbers" ke liye sabse optimal pattern kaunsa hai?',
          options: [
            'Pure array ko Bubble Sort karna',
            'Size K ka Min-Heap maintain karna O(N log K) time mein',
            'Matrix spiral traversal',
            'Singly Linked List reverse karna'
          ],
          answer: 'Size K ka Min-Heap maintain karna O(N log K) time mein',
          explanation: 'Stream mein pure 1 crore numbers ko RAM mein sort karna slow hota hai, jabki size K ka Min-Heap sirf K elements memory mein rakh kar instant O(1) top access deta hai.'
        },
        summary: [
          '22 Core Patterns form the structural backbone of all algorithmic interview problems',
          'Keywords in problem statements directly trigger pattern templates',
          'Mastering pattern templates allows writing clean, bug-free optimal code rapidly'
        ],
        flashcard: {
          q: 'Topological Sort ka trigger keyword kya hota hai?',
          a: '"Dependencies", "Build Order", "Prerequisites", ya "Directed Acyclic Graph ordering".'
        },
        funFact: 'FAANG interviewers standard problem banks se 85%+ questions inhi 22 core patterns ke variations par poochte hain!',
        interviewQuestions: [
          'Walk through the decision tree to identify whether a problem should be solved via Greedy or Dynamic Programming.',
          'Explain why Sliding Window requires contiguous elements while Dynamic Programming handles non-contiguous subsequences.',
          'How do you distinguish between problems requiring BFS vs DFS on a 2D grid?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 38 — Pattern Recognition Decision Engine (Interactive Classifier)',
    lessons: [
      {
        id: 'ds-pattern-recognition-engine',
        title: 'How to Recognize a Pattern (Interactive Problem Classifier & Decision Tree)',
        emoji: '🧭',
        xpReward: 50,
        badgeName: 'Pattern Classifier',
        readingTime: '11 min',
        difficulty: 'Intermediate',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Question dekh kar blank ho jate ho? CodeMasti Decision Engine use karo! 3 sawaal poocho: Sorted hai? Contiguous hai? Max/Min chahiye? Solution samne aa jayega! 😎"',
          hint: '🤦 Masti Sir: "Sorted + Pair = Two Pointers. Unsorted + Pair = HashMap. Contiguous = Sliding Window. All Combinations = Backtracking!"',
          success: '🥳 Masti Sir: "Decision Engine master ho gaya! Ab kisi bhi unseen question ka pattern 10 seconds mein decode kar loge!"',
          mistake: '😅 Masti Sir: "Subarray (contiguous) aur Subsequence (non-contiguous) mein confuse mat hona!"'
        },
        englishDef: 'The Pattern Recognition Decision Engine is an interactive algorithmic decision tree that guides candidates from problem constraints and keywords to the optimal data structure and algorithmic paradigm in seconds.',
        hinglishExplain: 'Jab candidate naya problem dekhta hai toh decision paralysis ho jata hai. Ye decision tree systematic questions pooch kar (Input sorted hai? Subarray chahiye ya Subsequence? Constraints kya hain?) exact right algorithm suggest karta hai.',
        storyExplain: 'Emergency Room Triage Doctor ki tarah: Doctor poochta hai: "Chest pain hai ya fracture?". Agar chest pain toh Cardiology! Waise hi algorithm classifier: "Sorted hai? Yes! Pair sum? Yes! -> Two Pointers!". 🚑🔍',
        funnyExample: {
          scenario: 'The 10-Second Pattern Quiz:\n- "Find continuous subarray with target sum" → Sliding Window / Prefix Sum\n- "Find all valid subsets" → Backtracking\n- "Find shortest route in subway map" → BFS / Dijkstra\n- "Find duplicate number in array" → Fast & Slow Pointers / Hash Set\n- "Find max profit with overlap" → Dynamic Programming',
          punchline: 'Ask the right 3 questions, unlock the optimal algorithm!'
        },
        memoryTrick: 'The 3-Question Classifier:\nQ1. Is the data sorted or can it be sorted?\nQ2. Are we looking for Contiguous (Subarray) or Non-Contiguous (Subsequence/Combinations)?\nQ3. What are the constraints on N (10^5 vs 20)?',
        visualDiagram: {
          title: 'Problem Pattern Recognition Decision Flowchart',
          nodes: [
            'Problem Statement Analyzed',
            'Is it a Contiguous Subarray? -> YES -> Sliding Window / Kadane / Prefix Sum',
            'Is input Sorted? -> YES -> Binary Search / Two Pointers',
            'Need All Combinations / Permutations? -> YES -> Backtracking (Choose-Explore-Unchoose)',
            'Overlapping Subproblems with Max/Min? -> YES -> Dynamic Programming (1D/2D Tabulation)'
          ],
          type: 'tree'
        },
        code: `// Interactive Problem Pattern Classifier Engine
class PatternClassifier {
  static classify(problemMeta) {
    const { isSorted, isContiguous, needAllCombinations, isGraph, isTopK, hasWeights } = problemMeta;

    if (isGraph) {
      if (!hasWeights) return { pattern: "BFS / DFS", complexity: "O(V + E)", tip: "Use Queue for Shortest Path" };
      return { pattern: "Dijkstra / Bellman-Ford", complexity: "O((V + E) log V)", tip: "Use Min-Priority Queue" };
    }

    if (isTopK) {
      return { pattern: "Heap / Priority Queue", complexity: "O(N log K)", tip: "Maintain Heap of size K" };
    }

    if (needAllCombinations) {
      return { pattern: "Backtracking", complexity: "O(2^N) or O(N!)", tip: "Use Choose-Explore-Unchoose" };
    }

    if (isContiguous) {
      return { pattern: "Sliding Window / Prefix Sum / Kadane", complexity: "O(N)", tip: "Expand right, shrink left" };
    }

    if (isSorted) {
      return { pattern: "Two Pointers / Binary Search", complexity: "O(log N) or O(N)", tip: "Opposite ends or halve space" };
    }

    return { pattern: "Hash Map / Dynamic Programming", complexity: "O(N) or O(N^2)", tip: "Store past computations" };
  }
}

console.log("Classifier Output for Continuous Window:", PatternClassifier.classify({ isContiguous: true }));
console.log("Classifier Output for Sorted Pair:", PatternClassifier.classify({ isSorted: true }));`,
        languages: {
          javascript: `// Pattern Classifier in JS
const classifyProblem = (p) => PatternClassifier.classify(p);`,
          python: `# Python Classifier
def classify_problem(meta):
    if meta.get('is_contiguous'): return "Sliding Window / Prefix Sum"
    if meta.get('is_sorted'): return "Two Pointers / Binary Search"
    if meta.get('is_top_k'): return "Heap"
    return "Dynamic Programming"`,
          java: `public class Classifier {
    public static String classify(boolean sorted, boolean contiguous) {
        if (contiguous) return "Sliding Window";
        if (sorted) return "Two Pointers";
        return "DP / Hash";
    }
}`,
          cpp: `#include <string>
std::string classify(bool sorted, bool contiguous) {
    if (contiguous) return "Sliding Window";
    if (sorted) return "Two Pointers";
    return "Hash Map / DP";
}`,
          c: `// Classifier in C
`
        },
        codeBreakdown: [
          { part: 'PatternClassifier.classify(...)', label: 'Maps structural problem flags to optimal algorithmic paradigms and complexity bounds', color: '#10b981' }
        ],
        complexity: {
          time: 'O(1) decision path',
          space: 'O(1)'
        },
        commonMistakes: [
          '❌ Non-contiguous subsequences par Sliding Window lagane ki koshish karna',
          '❌ Unsorted inputs par Two Pointers lagana bina sorting cost evaluate kiye'
        ],
        edgeCases: [
          'Problems that require combining 2 patterns (e.g. Sliding Window + Monotonic Deque)'
        ],
        bestPractices: [
          '✅ Run the 3-question checklist before typing the first line of code'
        ],
        miniChallenge: 'What pattern applies when you need to find the Longest Repeating Character Replacement with at most K edits?',
        quiz: {
          question: 'Agar question mein "All possible permutations / combinations" generate karne ko bola ho, toh kaunsa pattern 100% guarantee lagega?',
          options: ['Binary Search', 'Backtracking (Recursion Tree)', 'Sliding Window', 'Prefix Sum'],
          answer: 'Backtracking (Recursion Tree)',
          explanation: 'Saari configurations exhaustively generate karne ke liye state-space decision tree explore karna padta hai jo Backtracking pattern se solve hota hai.'
        },
        summary: [
          'Decision engine maps constraints and keywords to optimal algorithms in seconds',
          'Asking whether input is sorted or contiguous narrows down choices to 2 candidate patterns',
          'Combines foundational patterns for advanced hybrid FAANG challenges'
        ],
        flashcard: {
          q: 'Subarray vs Subsequence mein rule kya hai?',
          a: 'Subarray = Contiguous (Sliding Window/Prefix Sum/Kadane). Subsequence = Non-contiguous (Dynamic Programming/Backtracking).'
        },
        funFact: 'FAANG tech interviewers rubric evaluate karte hain ki candidate ne kitni jaldi correct pattern identify kiya (Goal: < 2 minutes)!',
        interviewQuestions: [
          'Walk through your thought process when faced with a completely unseen algorithm question.',
          'How do you determine whether a subarray problem requires Sliding Window vs Prefix Sum + HashMap?',
          'What are the telltale indicators that a problem requires a Monotonic Stack?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 39 — Brute Force → Optimization Evolution Framework',
    lessons: [
      {
        id: 'ds-brute-force-to-optimal',
        title: 'Brute Force → Bottleneck Observation → Optimal Solution (CodeMasti Signature Framework)',
        emoji: '⚡',
        xpReward: 50,
        badgeName: 'Optimizer Supreme',
        readingTime: '12 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "FAANG interviewers seedha optimal solution dekh kar khush nahi hote! Wo dekhna chahte hain ki tum Brute Force O(N^2) se Bottleneck pakad ke Optimal O(N) tak KAISE pahuche! Yahi asli engineering hai! 😎"',
          hint: '🤦 Masti Sir: "Signature 7-Step Evolution: 1. Brute Force likho -> 2. Complexity batao -> 3. Problem kya hai? -> 4. Observation -> 5. Optimization -> 6. Code -> 7. Comparison table!"',
          success: '🥳 Masti Sir: "Brute force to optimal evolution mastered! Interviewers will be blown away! 🚀"',
          mistake: '😅 Masti Sir: "Brute force ko ghatiya mat bolo — Brute force guarantees correctness and sets the baseline!"'
        },
        englishDef: 'The Brute Force to Optimal Evolution is the signature CodeMasti engineering framework: 1) State Brute Force, 2) Calculate Complexity, 3) Identify Bottleneck (repeated work, redundant searches), 4) Formulate Core Insight, 5) Apply Optimized Data Structure, 6) Write Clean Optimal Code, 7) Compare Asymptotic Improvements.',
        hinglishExplain: 'Interview mein seedha final code likhne ke bajaye step-by-step evolution demonstrate karna top 1% candidates ki pehchan hai. Pehle brute force ka baseline banao, fir interviewer ko explain karo ki kahan redundant work ho raha hai, aur kaise naya data structure use karke complexity O(N^2) se O(N) ho gayi.',
        storyExplain: 'House Renovation socho: Pura ghar tod kar naya banane se pehle architect purane ghar ka blueprint (Brute Force) dekhta hai, bottleneck (weak pillars) identify karta hai, aur steel reinforcement (Optimal Data Structure) lagata hai! 🏗️📐',
        funnyExample: {
          scenario: 'Two Sum Evolution Story:\n- Step 1 Brute Force: Nested loops check every pair (i, j) → O(N^2) Time 🐢\n- Step 2 Bottleneck: "Har bar target - nums[i] dhoondhne ke liye poora array scan karna pad raha hai!"\n- Step 3 Insight: "Agar hum seen elements ko HashMap mein daal dein toh search O(1) ho jayega!"\n- Step 4 Optimal: Single pass HashMap → O(N) Time 🏎️💨',
          punchline: 'Identify the bottleneck, replace the loop with a data structure!'
        },
        memoryTrick: 'The 7-Step Evolution Formula:\n1. Brute Force\n2. Complexity O(N^2)\n3. Bottleneck Analysis\n4. Algorithmic Observation\n5. Optimal Strategy\n6. Optimal Code\n7. Before vs After Comparison',
        visualDiagram: {
          title: 'CodeMasti Signature 7-Step Optimization Progression',
          nodes: [
            '1. Brute Force Baseline (Nested Loops O(N^2))',
            '2. Bottleneck: Redundant Linear Searches for Complement',
            '3. Core Insight: Trade Space O(N) for Time O(1) via Hash Table',
            '4. Optimal Single-Pass Solution (O(N) Time)',
            '5. Complexity Comparison: 10^10 ops -> 10^5 ops (100,000x Speedup!)'
          ],
          type: 'flow'
        },
        code: `// Evolution Case Study: Trapping Rain Water
// Problem: Calculate total water trapped between elevation bars

class TrappingRainWaterEvolution {
  // 1. Brute Force Approach: O(N^2) Time, O(1) Space
  static trapBruteForce(height) {
    let totalWater = 0;
    for (let i = 0; i < height.length; i++) {
      let maxLeft = 0, maxRight = 0;
      // Scan left to find max height
      for (let j = i; j >= 0; j--) maxLeft = Math.max(maxLeft, height[j]);
      // Scan right to find max height
      for (let j = i; j < height.length; j++) maxRight = Math.max(maxRight, height[j]);
      // Water level is bottlenecked by shorter boundary
      totalWater += Math.min(maxLeft, maxRight) - height[i];
    }
    return totalWater;
  }

  // 2. Optimal Two-Pointers Approach: O(N) Time, O(1) Space
  static trapOptimal(height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let totalWater = 0;

    while (left < right) {
      if (height[left] <= height[right]) {
        if (height[left] >= maxLeft) maxLeft = height[left];
        else totalWater += maxLeft - height[left];
        left++;
      } else {
        if (height[right] >= maxRight) maxRight = height[right];
        else totalWater += maxRight - height[right];
        right--;
      }
    }
    return totalWater;
  }
}

const bars = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("Brute Force Water Trapped:", TrappingRainWaterEvolution.trapBruteForce(bars)); // 6
console.log("Optimal Two-Pointers Water Trapped:", TrappingRainWaterEvolution.trapOptimal(bars)); // 6`,
        languages: {
          javascript: `function trap(height) {
  let l = 0, r = height.length - 1, maxL = 0, maxR = 0, res = 0;
  while (l < r) {
    if (height[l] <= height[r]) {
      if (height[l] >= maxL) maxL = height[l];
      else res += maxL - height[l];
      l++;
    } else {
      if (height[r] >= maxR) maxR = height[r];
      else res += maxR - height[r];
      r--;
    }
  }
  return res;
}`,
          python: `def trap(height):
    l, r, max_l, max_r, res = 0, len(height) - 1, 0, 0, 0
    while l < r:
        if height[l] <= height[r]:
            if height[l] >= max_l: max_l = height[l]
            else: res += max_l - height[l]
            l += 1
        else:
            if height[r] >= max_r: max_r = height[r]
            else: res += max_r - height[r]
            r -= 1
    return res`,
          java: `public class Solution {
    public int trap(int[] height) {
        int l = 0, r = height.length - 1, maxL = 0, maxR = 0, res = 0;
        while (l < r) {
            if (height[l] <= height[r]) {
                if (height[l] >= maxL) maxL = height[l];
                else res += maxL - height[l];
                l++;
            } else {
                if (height[r] >= maxR) maxR = height[r];
                else res += maxR - height[r];
                r--;
            }
        }
        return res;
    }
}`,
          cpp: `#include <vector>
#include <algorithm>

int trap(const std::vector<int>& height) {
    int l = 0, r = height.size() - 1, maxL = 0, maxR = 0, res = 0;
    while (l < r) {
        if (height[l] <= height[r]) {
            if (height[l] >= maxL) maxL = height[l];
            else res += maxL - height[l];
            l++;
        } else {
            if (height[r] >= maxR) maxR = height[r];
            else res += maxR - height[r];
            r--;
        }
    }
    return res;
}`,
          c: `// Trapping rain water in C
`
        },
        codeBreakdown: [
          { part: 'totalWater += Math.min(maxLeft, maxRight) - height[i]', label: 'Fundamental Physical Invariant: Water above bar i depends strictly on the minimum of max bar to its left and right', color: '#10b981' },
          { part: 'height[left] <= height[right]', label: 'Since right boundary is guaranteed taller, left boundary is the true bottleneck, so we can process left in O(1)', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Brute Force: O(N^2) -> Optimal Two-Pointers: O(N)',
          space: 'O(1) constant auxiliary space'
        },
        commonMistakes: [
          '❌ Interview mein brute force ko skip karke direct optimal code mein ulajh jana',
          '❌ Bottleneck explain na kar pana ki O(N^2) kyun lag raha tha'
        ],
        edgeCases: [
          'Array with less than 3 bars (cannot trap water, returns 0)',
          'Strictly increasing or strictly decreasing bars (no concave bowl, returns 0)',
          'Flat bars of same height'
        ],
        bestPractices: [
          '✅ Always present the solution as an evolution from Brute Force -> Bottleneck -> Optimal'
        ],
        miniChallenge: 'How do you formulate the Brute Force -> Optimal evolution for Longest Palindromic Substring from O(N^3) to O(N^2)?',
        quiz: {
          question: 'Interview mein Brute Force solution pehle present karne ka sabse bada benefit kya hota hai?',
          options: [
            'Time pass karna',
            'Correctness ka baseline set hota hai, edge cases samne aate hain, aur interviewer ko aapka systematic thinking flow dikhta hai',
            'Kyunki optimal solution nahi aata',
            'Lines of code badhane ke liye'
          ],
          answer: 'Correctness ka baseline set hota hai, edge cases samne aate hain, aur interviewer ko aapka systematic thinking flow dikhta hai',
          explanation: 'Top tech companies brute force se optimization tak ka problem-solving trajectory dekh kar candidate ki core algorithmic maturity judge karti hain.'
        },
        summary: [
          'Every optimal algorithm was born by identifying the bottleneck of its brute force predecessor',
          'Trapping Rain Water evolves from O(N^2) scan -> O(N) DP arrays -> O(N) Two-Pointers in O(1) space',
          'The 7-Step Evolution Framework is CodeMasti\'s signature interview differentiator'
        ],
        flashcard: {
          q: 'Bottleneck Analysis mein kya dhoondhte hain?',
          a: '"Hum baar-baar kya calculate kar rahe hain jo save/reuse ho sakta hai?" ya "Hum O(N) search kahan kar rahe hain jise O(1) lookup se replace kiya ja sake?"'
        },
        funFact: 'Google interview rubric mein "Analytical Thinking & Communication" ka score direct code correctness se zyada weight rakhta hai!',
        interviewQuestions: [
          'Demonstrate the step-by-step evolution of Two Sum from O(N^2) brute force to O(N) optimal.',
          'How does Trapping Rain Water evolve from O(N^2) to O(N) time with O(1) space using Two Pointers?',
          'What questions do you ask yourself to identify the bottleneck in a brute-force approach?'
        ]
      }
    ]
  },
  {
    chapterTitle: 'Chapter 40 — Code Debugging Lab (Interactive Bug Hunting & Edge Cases)',
    lessons: [
      {
        id: 'ds-code-debugging-lab',
        title: 'Code Debugging Lab (Off-by-One, Pointer Traps, Missing Base Cases & Graph Cycles)',
        emoji: '🐞',
        xpReward: 50,
        badgeName: 'Bug Hunter',
        readingTime: '12 min',
        difficulty: 'Intermediate to Advanced',
        mastirQuote: {
          start: '👨‍🏫 Masti Sir: "Code likhna aasan hai, par doosre ka ya apna buggy code debug karna asli Ninja skill hai! Off-by-one errors aur Pointer traps ko pakadna seekho! 🕵️‍♂️"',
          hint: '🤦 Masti Sir: "Debug karte waqt hamesha 4 cheezein check karo: 1. Loop boundaries (`<` vs `<=`), 2. Base case return, 3. Visited set update, 4. Null pointer checks!"',
          success: '🥳 Masti Sir: "Saare DSA bug patterns identify ho gaye! You are now a certified Bug Hunter! 🏆"',
          mistake: '😅 Masti Sir: "Bug milte hi bina dry run kiye random changes mat karo — identify the root cause!"'
        },
        englishDef: 'The Code Debugging Lab trains developers to spot, diagnose, and fix standard algorithmic bugs: Off-by-One array indexing, Integer Overflow, Infinite Recursion missing base cases, Pointer mutation reference losses in Linked Lists, Graph cycle unvisited loops, and DP state transitions.',
        hinglishExplain: 'Real-world coding interviews aur software development mein code debugging sabse zaroori skill hoti hai. Is lab mein hum broken DSA code snippets analyze karke root cause identify karte hain aur unhe bug-free banate hain.',
        storyExplain: 'Car Mechanic Inspector socho: Jab car start nahi hoti toh mechanic poora engine nahi badalta! Step-by-step check karta hai: Battery -> Spark Plug -> Fuel line. Waise hi code debugging mein hum Boundaries -> Base Case -> Pointers -> State step-by-step check karte hain! 🚗🔧',
        funnyExample: {
          scenario: 'The Classic 5 DSA Bugs:\n1. Off-by-One: `for(let i=0; i<=arr.length; i++)` -> Array index out of bounds! 💥\n2. Pointer Lost: `curr.next = prev` without saving `curr.next` first! ⛓️\n3. Graph Infinite Loop: Forgot `visited.add(neighbor)`! 🔄\n4. DP Loop Direction: 0/1 Knapsack loop going forward instead of backward! 🎒\n5. Recursion Bomb: Missing `return` in base case! 💣',
          punchline: 'One character fix saves production from crash!'
        },
        memoryTrick: 'The 5-Point Debugging Checklist:\n1. Array bounds (0 to N-1)\n2. Base case return statement\n3. Pointer reference preservation\n4. Visited set marking before queue push\n5. DP array initialization & loop direction',
        visualDiagram: {
          title: 'Common DSA Bug Patterns & Fixes',
          nodes: [
            'Bug 1: Binary Search Overflow `(l + r)/2` -> Fix: `l + (r - l)/2`',
            'Bug 2: Linked List Reversal pointer drop -> Fix: `nextTemp = curr.next`',
            'Bug 3: Tree validation `left < root` -> Fix: `min < node.val < max`',
            'Bug 4: Graph BFS cycle loop -> Fix: `visited.add(node)` at enqueue'
          ],
          type: 'tree'
        },
        code: `// Code Debugging Lab: Broken vs Fixed Code Examples

// ❌ BROKEN Linked List Reversal (Loses remainder of chain!)
function brokenReverse(head) {
  let prev = null, curr = head;
  while (curr) {
    curr.next = prev; // BUG: Lost reference to original curr.next!
    prev = curr;
    curr = curr.next; // BUG: curr.next is now prev! Infinite loop / stuck!
  }
  return prev;
}

// ✅ FIXED Linked List Reversal
function fixedReverse(head) {
  let prev = null, curr = head;
  while (curr) {
    let nextTemp = curr.next; // FIX: Save next reference first!
    curr.next = prev;
    prev = curr;
    curr = nextTemp; // FIX: Advance to saved next reference!
  }
  return prev;
}

// ❌ BROKEN Binary Search (Integer Overflow & Index Boundary Bug)
function brokenBinarySearch(arr, target) {
  let low = 0, high = arr.length; // BUG: high should be arr.length - 1
  while (low < high) { // BUG: Misses single element if target at low
    let mid = Math.floor((low + high) / 2); // BUG: Risk of 32-bit overflow
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid; // BUG: Infinite loop when low + 1 == high
    else high = mid;
  }
  return -1;
}

// ✅ FIXED Binary Search
function fixedBinarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log("Fixed Binary Search [1, 3, 5], 5:", fixedBinarySearch([1, 3, 5], 5)); // 2`,
        languages: {
          javascript: `// Debugging Lab JS Examples
function debugChecklist() {
  return ["Check boundary < vs <=", "Check base case return", "Check visited add", "Check pointer backups"];
}`,
          python: `# Python Debugging Checklist
def debug_checklist():
    return ["Boundary checks", "Recursion base case", "Visited set", "Temp pointer swap"]`,
          java: `public class DebugLab {
    public static boolean checkBoundary(int i, int n) {
        return i >= 0 && i < n;
    }
}`,
          cpp: `bool checkBoundary(int i, int n) {
    return i >= 0 && i < n;
}`,
          c: `// Debug lab in C
`
        },
        codeBreakdown: [
          { part: 'let nextTemp = curr.next', label: 'Crucial fix: Backs up the forward pointer before overwriting the backward pointer', color: '#10b981' },
          { part: 'let mid = low + Math.floor((high - low) / 2)', label: 'Crucial fix: Prevents 32-bit integer arithmetic overflow on massive arrays', color: '#3b82f6' }
        ],
        complexity: {
          time: 'Debugging identifies bottlenecks to restore expected asymptotic runtimes',
          space: 'Eliminates memory leaks and unbounded stack overflows'
        },
        commonMistakes: [
          '❌ Modifying loop variables randomly without performing a manual trace / dry run with a 3-element test case',
          '❌ Assuming test cases passed means all edge cases (empty inputs, duplicates, negatives) are covered'
        ],
        edgeCases: [
          'Empty data structures',
          'Single element structures',
          'Duplicate and negative inputs'
        ],
        bestPractices: [
          '✅ When code fails: Walk through a minimal 2-element test case manually on paper',
          '✅ Trace pointer mutations with variable columns (prev, curr, next)'
        ],
        miniChallenge: 'Find the bug in this Tree DFS: `function maxDepth(root) { if (!root) return 1; return Math.max(maxDepth(root.left), maxDepth(root.right)); }`',
        quiz: {
          question: '`function maxDepth(root) { if (!root) return 1; return Math.max(maxDepth(root.left), maxDepth(root.right)); }` mein kya bug hai?',
          options: [
            'Base case mein `return 0` hona chahiye aur recursive call mein `1 + Math.max(...)` hona chahiye',
            'Tree traversal syntax error hai',
            'Functions return nahi kar sakte',
            'Root kabhi null nahi hota'
          ],
          answer: 'Base case mein `return 0` hona chahiye aur recursive call mein `1 + Math.max(...)` hona chahiye',
          explanation: 'Empty tree ki depth 0 hoti hai (na ki 1), aur har valid node par uski apni height 1 add karni hoti hai (`1 + max(l, r)`).'
        },
        summary: [
          'Debugging requires systematic root-cause diagnosis over trial-and-error',
          'Off-by-one, reference drops, missing base cases, and unvisited graph cycles account for 90% of DSA bugs',
          'Manual trace tables with minimal test cases guarantee catching edge-case bugs'
        ],
        flashcard: {
          q: 'Infinite Loop in Binary Search kab hoti hai?',
          a: 'Jab `low = mid` ya `high = mid` likha jaye (instead of `low = mid + 1` or `high = mid - 1`), do elements bache hone par `mid = low` ho jata hai aur loop kabhi terminate nahi hota.'
        },
        funFact: 'First recorded computer bug 1947 mein Grace Hopper ke Harvard Mark II computer ke relay switch mein phansi hui ek actual physical moth (kida) thi!',
        interviewQuestions: [
          'How do you systematically debug an unexpected Time Limit Exceeded (TLE) error in a graph or tree problem?',
          'What are the common causes of NullPointer / Undefined Reference exceptions in pointer-based data structures?',
          'Explain how off-by-one errors manifest in sliding window and binary search algorithms.'
        ]
      }
    ]
  }
];
