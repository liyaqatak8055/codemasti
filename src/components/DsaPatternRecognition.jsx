import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Compass, CheckCircle2, ChevronRight, BookOpen, Sparkles, Filter, Code2, Copy, Check, HelpCircle } from 'lucide-react'

const PATTERNS_DATA = [
  {
    id: 1,
    name: 'Two Pointers',
    cat: 'Array / String',
    trigger: 'Sorted array, target pair sum, palindromes, container boundaries, trapping water',
    complexity: 'O(N) Time, O(1) Space',
    template: `function twoPointers(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}`,
    mistakes: ['Applying on unsorted array without sorting first', 'Forgetting pointer convergence condition (left < right)'],
    problems: ['Two Sum II (Sorted)', '3Sum', 'Container with Most Water', 'Trapping Rain Water', 'Valid Palindrome']
  },
  {
    id: 2,
    name: 'Sliding Window',
    cat: 'Array / String',
    trigger: 'Contiguous subarray / substring, finding longest / shortest subsegment satisfying condition',
    complexity: 'O(N) Time, O(K) Space',
    template: `function slidingWindow(s) {
  let left = 0, maxLen = 0;
  const map = new Map();
  for (let right = 0; right < s.length; right++) {
    // Expand window: add s[right] to map
    while (/* condition invalid */ false) {
      // Shrink window from left
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
    mistakes: ['Shrinking with if instead of while loop when condition stays invalid', 'Not updating state when element leaves left edge'],
    problems: ['Longest Substring Without Repeating Characters', 'Minimum Window Substring', 'Max Sum Subarray K', 'Fruit Into Baskets']
  },
  {
    id: 3,
    name: 'Fast & Slow Pointers (Floyd Cycle)',
    cat: 'Linked List / Array',
    trigger: 'Cycle detection, finding middle node, cycle start node, palindrome linked list',
    complexity: 'O(N) Time, O(1) Space',
    template: `function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true; // Cycle detected!
  }
  return false;
}`,
    mistakes: ['Not checking fast && fast.next (Null Pointer Exception)', 'Moving fast 3 steps instead of 2'],
    problems: ['Linked List Cycle I & II', 'Middle of Linked List', 'Find Duplicate Number', 'Happy Number']
  },
  {
    id: 4,
    name: 'Merge Intervals',
    cat: 'Array / Intervals',
    trigger: 'Overlapping intervals, meeting rooms, calendar schedules, range intersections',
    complexity: 'O(N log N) Time, O(N) Space',
    template: `function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    const curr = intervals[i];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]); // Merge overlap
    } else {
      merged.push(curr);
    }
  }
  return merged;
}`,
    mistakes: ['Forgetting to sort intervals by start time first', 'Using curr[1] instead of Math.max(prev[1], curr[1])'],
    problems: ['Merge Intervals', 'Insert Interval', 'Non-overlapping Intervals', 'Meeting Rooms II']
  },
  {
    id: 5,
    name: 'Cyclic Sort',
    cat: 'Array',
    trigger: 'Array containing numbers in contiguous range 1 to N or 0 to N with missing/duplicate elements',
    complexity: 'O(N) Time, O(1) Space',
    template: `function cyclicSort(nums) {
  let i = 0;
  while (i < nums.length) {
    const correctIdx = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[correctIdx]) {
      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]]; // Swap to correct slot
    } else {
      i++;
    }
  }
  return nums;
}`,
    mistakes: ['Incrementing i unconditionally instead of only when element is in correct place', '0-indexed vs 1-indexed off-by-one'],
    problems: ['Missing Number', 'Find All Duplicates in an Array', 'First Missing Positive', 'Find Corrupt Pair']
  },
  {
    id: 6,
    name: 'In-Place Reversal of LinkedList',
    cat: 'Linked List',
    trigger: 'Reverse linked list subsegment without allocating new nodes in memory',
    complexity: 'O(N) Time, O(1) Space',
    template: `function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}`,
    mistakes: ['Losing pointer to curr.next before modifying pointer', 'Returning curr instead of prev as new head'],
    problems: ['Reverse Linked List', 'Reverse Linked List II (Between Left & Right)', 'Reverse Nodes in k-Group', 'Reorder List']
  },
  {
    id: 7,
    name: 'Tree BFS (Level-Order Traversal)',
    cat: 'Tree',
    trigger: 'Level-by-level traversal, minimum tree depth, zigzag traversal, right side view',
    complexity: 'O(N) Time, O(W) Space',
    template: `function levelOrder(root) {
  if (!root) return [];
  const queue = [root], result = [];
  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}`,
    mistakes: ['Using dynamic queue.length inside loop condition instead of snapshotting levelSize first', 'Not handling null root'],
    problems: ['Binary Tree Level Order', 'Zigzag Level Order', 'Right Side View', 'Min Depth of Tree']
  },
  {
    id: 8,
    name: 'Tree DFS (Pre/In/Postorder)',
    cat: 'Tree',
    trigger: 'Path sum, maximum depth, tree diameter, validate BST, lowest common ancestor',
    complexity: 'O(N) Time, O(H) Space',
    template: `function maxDepth(root) {
  if (!root) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return 1 + Math.max(left, right);
}`,
    mistakes: ['Missing base case for null node', 'Counting nodes instead of edge paths or vice versa'],
    problems: ['Diameter of Binary Tree', 'Path Sum I, II, III', 'Validate Binary Search Tree', 'Lowest Common Ancestor']
  },
  {
    id: 9,
    name: 'Two Heaps (Running Median)',
    cat: 'Heap / Stream',
    trigger: 'Continuous data stream, finding running median, split numbers into two equal halves',
    complexity: 'O(log N) Insert, O(1) Median',
    template: `class MedianFinder {
  // MaxHeap stores smaller half, MinHeap stores larger half
  // Balance heaps such that maxHeap.size == minHeap.size (+1)
}`,
    mistakes: ['Imbalance between maxHeap and minHeap larger than 1', 'Wrong root comparison during insert'],
    problems: ['Find Median from Data Stream', 'Sliding Window Median', 'IPO Capital Maximizer']
  },
  {
    id: 10,
    name: 'Subsets & Backtracking',
    cat: 'Recursion / Search',
    trigger: 'Generate all combinations, permutations, partitions, or solve constraint satisfaction',
    complexity: 'O(2^N) or O(N!) Time',
    template: `function backtrack(start, path, nums, result) {
  result.push([...path]);
  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]);            // Choose
    backtrack(i + 1, path, nums, result); // Explore
    path.pop();                    // Unchoose (Backtrack)
  }
}`,
    mistakes: ['Pushing path reference instead of shallow copy [...path]', 'Duplicate combinations when input has duplicates'],
    problems: ['Subsets I & II', 'Permutations', 'Combination Sum', 'N-Queens', 'Generate Parentheses', 'Word Search']
  },
  {
    id: 11,
    name: 'Modified Binary Search / Search on Answer',
    cat: 'Search',
    trigger: 'Sorted or rotated sorted array, or search space has monotonic feasibility function',
    complexity: 'O(log N) Time, O(1) Space',
    template: `function binarySearchAnswer(minVal, maxVal) {
  let low = minVal, high = maxVal, ans = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isFeasible(mid)) {
      ans = mid;
      high = mid - 1; // Try for smaller feasible answer
    } else {
      low = mid + 1;
    }
  }
  return ans;
}`,
    mistakes: ['Integer overflow with (low + high) in other languages (use low + (high-low)/2)', 'Wrong boundary updates mid vs mid +/- 1'],
    problems: ['Search in Rotated Sorted Array', 'Find First and Last Position', 'Koko Eating Bananas', 'Capacity to Ship Packages']
  },
  {
    id: 12,
    name: 'Top-K Elements',
    cat: 'Heap',
    trigger: 'Find K largest/smallest elements, Top K frequent elements, K closest points',
    complexity: 'O(N log K) Time, O(K) Space',
    template: `// Use Min-Heap of size K for Top K Largest elements
// If new element > minHeap.top(), pop and push new element`,
    mistakes: ['Using Max-Heap of size N taking O(N log N) instead of Min-Heap of size K taking O(N log K)', 'Sorting entire array'],
    problems: ['Kth Largest Element in Array', 'Top K Frequent Elements', 'K Closest Points to Origin', 'Sort Characters by Frequency']
  },
  {
    id: 13,
    name: 'K-Way Merge',
    cat: 'Heap / Array',
    trigger: 'Merge K sorted lists, find Kth smallest element in sorted matrix',
    complexity: 'O(N log K) Time, O(K) Space',
    template: `// Insert head of each K sorted lists into Min-Heap
// Pop smallest node, append to output, push next node from that same list`,
    mistakes: ['Storing all elements in heap at once taking O(N) space instead of K nodes', 'Null check on next node'],
    problems: ['Merge K Sorted Lists', 'Kth Smallest Element in Sorted Matrix', 'Smallest Range Covering Elements from K Lists']
  },
  {
    id: 14,
    name: '0/1 Knapsack & Subset DP',
    cat: 'Dynamic Programming',
    trigger: 'Given items with weights/values, maximize value under capacity constraint; can choose item at most once',
    complexity: 'O(N * W) Time, O(W) Space',
    template: `function knapsack(weights, values, W) {
  const dp = new Array(W + 1).fill(0);
  for (let i = 0; i < weights.length; i++) {
    for (let w = W; w >= weights[i]; w--) { // Reverse loop for 0/1 Knapsack!
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
    }
  }
  return dp[W];
}`,
    mistakes: ['Looping forward instead of backwards in 1D array (forward loop solves Unbounded Knapsack!)', 'Negative values index out of bounds'],
    problems: ['0/1 Knapsack', 'Partition Equal Subset Sum', 'Target Sum', 'Coin Change 2']
  },
  {
    id: 15,
    name: 'Longest Common Subsequence (LCS) DP',
    cat: 'Dynamic Programming',
    trigger: 'String matching, edit distance, transformation cost between two sequences',
    complexity: 'O(M * N) Time, O(min(M, N)) Space',
    template: `function lcs(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i-1] === text2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];
      else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[m][n];
}`,
    mistakes: ['1-indexed DP array vs 0-indexed string characters off-by-one', 'Forgetting diagonal match case'],
    problems: ['Longest Common Subsequence', 'Edit Distance', 'Delete Operation for Two Strings', 'Distinct Subsequences']
  },
  {
    id: 16,
    name: 'Topological Sort (Kahn DAG)',
    cat: 'Graph',
    trigger: 'Prerequisite tasks, build order dependencies, course schedules on Directed Acyclic Graph',
    complexity: 'O(V + E) Time, O(V + E) Space',
    template: `function canFinish(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const adj = Array.from({ length: numCourses }, () => []);
  for (const [dest, src] of prerequisites) {
    adj[src].push(dest);
    inDegree[dest]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);
  let count = 0;
  while (queue.length) {
    const u = queue.shift();
    count++;
    for (const v of adj[u]) {
      if (--inDegree[v] === 0) queue.push(v);
    }
  }
  return count === numCourses; // If count < numCourses, cycle exists!
}`,
    mistakes: ['Reversing edge direction (src vs dest in prerequisite pairs)', 'Not detecting graph cycles'],
    problems: ['Course Schedule I & II', 'Alien Dictionary', 'Minimum Height Trees', 'Sequence Reconstruction']
  },
  {
    id: 17,
    name: 'Disjoint Set Union (Union-Find)',
    cat: 'Graph',
    trigger: 'Dynamic connectivity, connected components count, cycle detection in undirected graph, Kruskal MST',
    complexity: 'O(α(N)) Time (nearly O(1)), O(N) Space',
    template: `class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(i) {
    if (this.parent[i] === i) return i;
    return this.parent[i] = this.find(this.parent[i]); // Path Compression
  }
  union(i, j) {
    const rootI = this.find(i), rootJ = this.find(j);
    if (rootI === rootJ) return false; // Cycle detected
    if (this.rank[rootI] < this.rank[rootJ]) this.parent[rootI] = rootJ;
    else if (this.rank[rootI] > this.rank[rootJ]) this.parent[rootJ] = rootI;
    else { this.parent[rootJ] = rootI; this.rank[rootI]++; }
    return true;
  }
}`,
    mistakes: ['Forgetting path compression in find()', 'Not checking if roots are already equal before union'],
    problems: ['Number of Provinces', 'Redundant Connection', 'Kruskal Minimum Spanning Tree', 'Accounts Merge']
  },
  {
    id: 18,
    name: 'Monotonic Stack',
    cat: 'Stack',
    trigger: 'Next Greater Element, Previous Smaller Element, Daily Temperatures, Largest Histogram Rectangle',
    complexity: 'O(N) Time, O(N) Space',
    template: `function nextGreaterElements(nums) {
  const n = nums.length, res = new Array(n).fill(-1), stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
      const prevIdx = stack.pop();
      res[prevIdx] = nums[i];
    }
    stack.push(i);
  }
  return res;
}`,
    mistakes: ['Storing values instead of indices on stack', 'Using < instead of <= when strict greater is requested'],
    problems: ['Daily Temperatures', 'Next Greater Element I & II', 'Largest Rectangle in Histogram', 'Trapping Rain Water']
  },
  {
    id: 19,
    name: 'Monotonic Queue (Deque)',
    cat: 'Queue',
    trigger: 'Sliding window maximum, maintain candidate optimal values in moving frame',
    complexity: 'O(N) Time, O(K) Space',
    template: `function maxSlidingWindow(nums, k) {
  const deque = [], res = [];
  for (let i = 0; i < nums.length; i++) {
    if (deque.length && deque[0] < i - k + 1) deque.shift(); // Remove expired index
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) deque.pop();
    deque.push(i);
    if (i >= k - 1) res.push(nums[deque[0]]);
  }
  return res;
}`,
    mistakes: ['Forgetting to remove elements falling outside window boundary', 'Not storing indices in deque'],
    problems: ['Sliding Window Maximum', 'Shortest Subarray with Sum at Least K', 'Constrained Subsequence Sum']
  },
  {
    id: 20,
    name: 'Bitwise Manipulation',
    cat: 'Bit Manipulation',
    trigger: 'Single non-duplicate number, missing element in range, power of 2, generate subset bitmasks',
    complexity: 'O(N) Time, O(1) Space',
    template: `// XOR property: a ^ a = 0, a ^ 0 = a
function singleNumber(nums) {
  return nums.reduce((acc, num) => acc ^ num, 0);
}`,
    mistakes: ['Operator precedence errors with bitwise & | ^ (always use parentheses: (n & 1) === 0)', 'Sign extension with 32-bit integers'],
    problems: ['Single Number I & II', 'Missing Number', 'Power of Two', 'Counting Bits', 'Subsets using Bitmask']
  },
  {
    id: 21,
    name: 'Trie (Prefix Tree)',
    cat: 'Tree / String',
    trigger: 'Autocomplete, prefix matching, word dictionary, spell checker, IP routing tables',
    complexity: 'O(L) Time per word, O(Alphabet * N) Space',
    template: `class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) {
    let node = this.root;
    for (const ch of word) {
      if (!node.children[ch]) node.children[ch] = new TrieNode();
      node = node.children[ch];
    }
    node.isEnd = true;
  }
}`,
    mistakes: ['Forgetting isEnd boolean check on full word lookup vs prefix lookup', 'Memory overhead with large alphabets'],
    problems: ['Implement Trie (Prefix Tree)', 'Design Add and Search Words Data Structure', 'Word Search II', 'Maximum XOR of Two Numbers']
  },
  {
    id: 22,
    name: 'Shortest Path (Dijkstra / BFS)',
    cat: 'Graph',
    trigger: 'Shortest path or minimum cost from start node to destination in weighted or unweighted graph',
    complexity: 'BFS: O(V+E) Unweighted | Dijkstra: O((V+E) log V) Non-negative weights',
    template: `// Dijkstra Algorithm using Min-Heap Priority Queue
// dist[start] = 0; pq.push([0, start]);
// while (pq.length) { const [d, u] = pq.pop(); if (d > dist[u]) continue; ... }`,
    mistakes: ['Using Dijkstra on graphs with negative weights (use Bellman-Ford instead)', 'Not skipping stale distance entries in PQ'],
    problems: ['Network Delay Time', 'Cheapest Flights Within K Stops', 'Path with Minimum Effort', 'Shortest Path in Binary Matrix']
  }
]

const CLASSIFIER_QUESTIONS = [
  {
    question: 'What is the nature of your input and objective?',
    options: [
      { text: 'Sorted array + finding a pair that sums to target', patternId: 1 },
      { text: 'Contiguous subarray / substring + finding longest/shortest valid range', patternId: 2 },
      { text: 'Linked List cycle detection or finding the middle node', patternId: 3 },
      { text: 'Overlapping time intervals, meeting room scheduling', patternId: 4 },
      { text: 'Numbers in range 1 to N, find missing or duplicate numbers', patternId: 5 },
      { text: 'Tree level-by-level traversal or shortest path in binary tree', patternId: 7 },
      { text: 'Tree path sum, maximum depth, or validate BST', patternId: 8 },
      { text: 'Task dependencies, build order, course prerequisite scheduling', patternId: 16 },
      { text: 'Dynamic connectivity, connected components count, Kruskal MST', patternId: 17 },
      { text: 'Next greater/smaller element, daily temperatures, histogram area', patternId: 18 },
      { text: 'Maximize value from items with weight constraints (0/1 knapsack)', patternId: 14 },
      { text: 'String autocomplete, prefix lookup, word search dictionary', patternId: 21 },
      { text: 'Shortest path in weighted graph with non-negative edge costs', patternId: 22 }
    ]
  }
]

export default function DsaPatternRecognition() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPattern, setSelectedPattern] = useState(PATTERNS_DATA[0])
  const [activeTab, setActiveTab] = useState('library') // 'library' or 'classifier'
  const [copied, setCopied] = useState(false)

  const categories = ['All', 'Array / String', 'Linked List', 'Tree', 'Graph', 'Dynamic Programming', 'Heap', 'Stack', 'Bit Manipulation']

  const filteredPatterns = PATTERNS_DATA.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.trigger.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.problems.some(prob => prob.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCat = selectedCategory === 'All' || p.cat.includes(selectedCategory)
    return matchesSearch && matchesCat
  })

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="dsa-pattern-explorer-card">
      <div className="dsa-pattern-header">
        <div className="dsa-pattern-title-row">
          <Compass size={22} color="#ec4899" />
          <div>
            <h3>The 22 Core DSA Problem-Solving Pattern Library & Decision Engine</h3>
            <p>Master these 22 universal algorithmic patterns to recognize and solve any technical interview coding problem.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          <button
            className={`ghost-btn compact ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setActiveTab('library')}
          >
            <BookOpen size={14} /> Pattern Library (22 Patterns)
          </button>
          <button
            className={`ghost-btn compact ${activeTab === 'classifier' ? 'active' : ''}`}
            onClick={() => setActiveTab('classifier')}
          >
            <Sparkles size={14} /> Interactive Pattern Decision Engine
          </button>
        </div>

        {activeTab === 'library' && (
          <div className="dsa-pattern-filter-bar" style={{ marginTop: '12px' }}>
            <div className="dsa-search-input-wrap">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search keyword (e.g. 'sorted', 'subarray', 'cycle', 'interval', 'prerequisite')..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="dsa-cat-pills">
              {categories.map(c => (
                <button
                  key={c}
                  className={`dsa-cat-pill ${selectedCategory === c ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {activeTab === 'library' && (
        <div className="dsa-pattern-main-layout">
          {/* Left List of Patterns */}
          <div className="dsa-pattern-list">
            {filteredPatterns.map(p => (
              <div
                key={p.id}
                className={`dsa-pattern-list-item ${selectedPattern.id === p.id ? 'active' : ''}`}
                onClick={() => setSelectedPattern(p)}
              >
                <div className="dsa-p-item-top">
                  <span className="dsa-p-number">#{p.id}</span>
                  <strong className="dsa-p-name">{p.name}</strong>
                </div>
                <span className="dsa-p-cat-tag">{p.cat}</span>
                <p className="dsa-p-trigger-snip">{p.trigger}</p>
              </div>
            ))}
          </div>

          {/* Right Detail Pane */}
          <div className="dsa-pattern-detail-pane">
            <div className="dsa-p-detail-header">
              <div>
                <span className="dsa-p-number">Pattern #{selectedPattern.id}</span>
                <h2>{selectedPattern.name}</h2>
                <span className="dsa-p-cat-tag">{selectedPattern.cat}</span>
              </div>
              <div className="dsa-p-complexity-badge">
                <strong>Complexity:</strong> {selectedPattern.complexity}
              </div>
            </div>

            <div className="dsa-p-section">
              <h4>🎯 When to Recognize This Pattern (Triggers & Keywords)</h4>
              <p className="dsa-p-text-box">{selectedPattern.trigger}</p>
            </div>

            <div className="dsa-p-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h4>⚡ Universal Code Template & Boilerplate</h4>
                <button className="ghost-btn compact" onClick={() => handleCopyCode(selectedPattern.template)}>
                  {copied ? <><Check size={14} color="#10b981" /> Copied!</> : <><Copy size={14} /> Copy Template</>}
                </button>
              </div>
              <pre className="dsa-code-body" style={{ margin: 0 }}>
                <code>{selectedPattern.template}</code>
              </pre>
            </div>

            {selectedPattern.mistakes && (
              <div className="dsa-p-section">
                <h4>⚠️ Common Interview Mistakes to Avoid</h4>
                <ul className="dsa-p-mistakes-list">
                  {selectedPattern.mistakes.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="dsa-p-section">
              <h4>🏆 Classic Practice Problems</h4>
              <div className="dsa-p-problems-grid">
                {selectedPattern.problems.map((prob, i) => (
                  <span key={i} className="dsa-p-prob-pill">
                    <CheckCircle2 size={14} color="#10b981" />
                    {prob}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'classifier' && (
        <div className="dsa-classifier-view" style={{ padding: '20px 0' }}>
          <h3 style={{ marginBottom: '14px', color: '#ec4899', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} /> How to Recognize a Pattern (Interactive Decision Classifier)
          </h3>
          <p style={{ color: 'var(--text-muted, #94a3b8)', marginBottom: '16px' }}>
            Select the problem statement characteristics below, and Masti Sir's decision engine will recommend the exact optimal pattern and code template!
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
            {CLASSIFIER_QUESTIONS[0].options.map((opt, idx) => {
              const matchedPattern = PATTERNS_DATA.find(p => p.id === opt.patternId)
              return (
                <div
                  key={idx}
                  className="dsa-comp-tile"
                  style={{ cursor: 'pointer', borderTop: '3px solid #ec4899' }}
                  onClick={() => {
                    if (matchedPattern) {
                      setSelectedPattern(matchedPattern)
                      setActiveTab('library')
                    }
                  }}
                >
                  <p style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '8px' }}>"{opt.text}"</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold', fontSize: '13px' }}>&rarr; {matchedPattern?.name}</span>
                    <span className="ghost-btn compact" style={{ fontSize: '11px' }}>View Pattern &rarr;</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
