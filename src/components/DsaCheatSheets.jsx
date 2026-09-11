import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Copy, Check, Table, Layers, Zap, Compass, Network } from 'lucide-react'

export default function DsaCheatSheets() {
  const [activeSheet, setActiveSheet] = useState('dataStructures')
  const [copied, setCopied] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="dsa-cheat-sheets-card">
      <div className="dsa-cs-header">
        <div className="dsa-cs-title-row">
          <FileText size={22} color="#3b82f6" />
          <div>
            <h3>Ultimate DSA Master Cheat Sheets & Quick Reference</h3>
            <p>Comprehensive tabular reference for Data Structures, Sorting, Graph Algorithms, DP Transitions & Pattern Templates.</p>
          </div>
        </div>

        <div className="dsa-cs-tabs">
          {[
            ['dataStructures', '📊 Data Structure Complexities'],
            ['sorting', '🔄 Sorting Algorithms'],
            ['graph', '🕸️ Graph & Search Algorithms'],
            ['dp', '⚡ DP State Transitions'],
            ['patterns', '🧭 22 Pattern Cheat Sheet']
          ].map(([id, label]) => (
            <button
              key={id}
              className={`ghost-btn compact ${activeSheet === id ? 'active' : ''}`}
              onClick={() => setActiveSheet(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="dsa-cs-content">
        {activeSheet === 'dataStructures' && (
          <div className="dsa-table-wrap">
            <table className="dsa-cs-table">
              <thead>
                <tr>
                  <th>Data Structure</th>
                  <th>Access (Avg)</th>
                  <th>Search (Avg)</th>
                  <th>Insert (Avg)</th>
                  <th>Delete (Avg)</th>
                  <th>Worst Space</th>
                  <th>Primary Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Array (Contiguous)</strong></td><td><code>O(1)</code></td><td><code>O(N)</code></td><td><code>O(N)</code></td><td><code>O(N)</code></td><td><code>O(N)</code></td><td>Fixed size, instant index access</td></tr>
                <tr><td><strong>Dynamic Array (Vector/List)</strong></td><td><code>O(1)</code></td><td><code>O(N)</code></td><td><code>O(1)* Amortized</code></td><td><code>O(N)</code></td><td><code>O(N)</code></td><td>Resizing list, cache locality</td></tr>
                <tr><td><strong>Singly Linked List</strong></td><td><code>O(N)</code></td><td><code>O(N)</code></td><td><code>O(1) at head</code></td><td><code>O(1) at head</code></td><td><code>O(N)</code></td><td>Frequent insertions/deletions at head</td></tr>
                <tr><td><strong>Doubly Linked List</strong></td><td><code>O(N)</code></td><td><code>O(N)</code></td><td><code>O(1) given node</code></td><td><code>O(1) given node</code></td><td><code>O(N)</code></td><td>LRU Cache, Browser history, Deque</td></tr>
                <tr><td><strong>Stack (LIFO)</strong></td><td><code>O(N)</code></td><td><code>O(N)</code></td><td><code>O(1) push</code></td><td><code>O(1) pop</code></td><td><code>O(N)</code></td><td>Parentheses, Undo/Redo, Call Stack</td></tr>
                <tr><td><strong>Queue (FIFO)</strong></td><td><code>O(N)</code></td><td><code>O(N)</code></td><td><code>O(1) enqueue</code></td><td><code>O(1) dequeue</code></td><td><code>O(N)</code></td><td>BFS traversal, Task scheduling</td></tr>
                <tr><td><strong>Hash Table / HashMap</strong></td><td><code>N/A</code></td><td><code>O(1)</code></td><td><code>O(1)</code></td><td><code>O(1)</code></td><td><code>O(N)</code></td><td>Fast key-value lookups, counting</td></tr>
                <tr><td><strong>Binary Search Tree (BST)</strong></td><td><code>O(log N)</code></td><td><code>O(log N)</code></td><td><code>O(log N)</code></td><td><code>O(log N)</code></td><td><code>O(N)</code></td><td>Ordered range queries, dynamic sets</td></tr>
                <tr><td><strong>AVL / Red-Black Tree</strong></td><td><code>O(log N)</code></td><td><code>O(log N)</code></td><td><code>O(log N)</code></td><td><code>O(log N)</code></td><td><code>O(N)</code></td><td>Guaranteed logarithmic height balanced tree</td></tr>
                <tr><td><strong>Binary Heap (Min/Max)</strong></td><td><code>O(1) peek</code></td><td><code>O(N)</code></td><td><code>O(log N)</code></td><td><code>O(log N)</code></td><td><code>O(N)</code></td><td>Priority Queues, Dijkstra, Top-K elements</td></tr>
                <tr><td><strong>Trie (Prefix Tree)</strong></td><td><code>N/A</code></td><td><code>O(L)</code></td><td><code>O(L)</code></td><td><code>O(L)</code></td><td><code>O(Alphabet * N)</code></td><td>Autocomplete, Dictionary, Prefix search</td></tr>
                <tr><td><strong>Segment Tree</strong></td><td><code>N/A</code></td><td><code>O(log N) range</code></td><td><code>O(log N)</code></td><td><code>N/A</code></td><td><code>O(N)</code></td><td>Dynamic range sum/min with updates</td></tr>
                <tr><td><strong>Fenwick Tree (BIT)</strong></td><td><code>N/A</code></td><td><code>O(log N) prefix</code></td><td><code>O(log N)</code></td><td><code>N/A</code></td><td><code>O(N)</code></td><td>Fast prefix sums, cumulative frequency</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {activeSheet === 'sorting' && (
          <div className="dsa-table-wrap">
            <table className="dsa-cs-table">
              <thead>
                <tr>
                  <th>Algorithm</th>
                  <th>Best Time</th>
                  <th>Average Time</th>
                  <th>Worst Time</th>
                  <th>Aux Space</th>
                  <th>Stable?</th>
                  <th>In-Place?</th>
                  <th>When to Use?</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Merge Sort</strong></td><td><code>O(N log N)</code></td><td><code>O(N log N)</code></td><td><code>O(N log N)</code></td><td><code>O(N)</code></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td><span style={{ color: '#ef4444' }}>NO ❌</span></td><td>Linked lists, guaranteed worst-case, external sorting</td></tr>
                <tr><td><strong>Quick Sort</strong></td><td><code>O(N log N)</code></td><td><code>O(N log N)</code></td><td><code>O(N²)</code></td><td><code>O(log N)</code></td><td><span style={{ color: '#ef4444' }}>NO ❌</span></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td>Fastest in-memory average sorting, cache locality</td></tr>
                <tr><td><strong>Heap Sort</strong></td><td><code>O(N log N)</code></td><td><code>O(N log N)</code></td><td><code>O(N log N)</code></td><td><code>O(1)</code></td><td><span style={{ color: '#ef4444' }}>NO ❌</span></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td>Strict O(1) auxiliary space requirement</td></tr>
                <tr><td><strong>Timsort (Python/Java)</strong></td><td><code>O(N)</code></td><td><code>O(N log N)</code></td><td><code>O(N log N)</code></td><td><code>O(N)</code></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td><span style={{ color: '#ef4444' }}>NO ❌</span></td><td>Real-world partially sorted arrays (Hybrid Merge+Insertion)</td></tr>
                <tr><td><strong>Insertion Sort</strong></td><td><code>O(N)</code></td><td><code>O(N²)</code></td><td><code>O(N²)</code></td><td><code>O(1)</code></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td>Small arrays (N &lt; 30) or nearly sorted data</td></tr>
                <tr><td><strong>Bubble Sort</strong></td><td><code>O(N)</code></td><td><code>O(N²)</code></td><td><code>O(N²)</code></td><td><code>O(1)</code></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td>Educational only, adjacent element swaps</td></tr>
                <tr><td><strong>Selection Sort</strong></td><td><code>O(N²)</code></td><td><code>O(N²)</code></td><td><code>O(N²)</code></td><td><code>O(1)</code></td><td><span style={{ color: '#ef4444' }}>NO ❌</span></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td>Minimizes memory write operations</td></tr>
                <tr><td><strong>Counting Sort</strong></td><td><code>O(N + K)</code></td><td><code>O(N + K)</code></td><td><code>O(N + K)</code></td><td><code>O(K)</code></td><td><span style={{ color: '#10b981' }}>YES ✅</span></td><td><span style={{ color: '#ef4444' }}>NO ❌</span></td><td>Integer keys with small range K (Non-comparison)</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {activeSheet === 'graph' && (
          <div className="dsa-table-wrap">
            <table className="dsa-cs-table">
              <thead>
                <tr>
                  <th>Algorithm</th>
                  <th>Data Structure Used</th>
                  <th>Time Complexity</th>
                  <th>Space Complexity</th>
                  <th>Graph Type</th>
                  <th>Key Feature / When to Use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>BFS (Breadth-First)</strong></td><td>Queue (FIFO)</td><td><code>O(V + E)</code></td><td><code>O(V)</code></td><td>Unweighted Graph</td><td>Guaranteed shortest path in unweighted graphs</td></tr>
                <tr><td><strong>DFS (Depth-First)</strong></td><td>Call Stack / Recursion</td><td><code>O(V + E)</code></td><td><code>O(V)</code></td><td>General Graph</td><td>Connected components, cycle detection, topological order</td></tr>
                <tr><td><strong>Dijkstra's Algorithm</strong></td><td>Min-Heap (Priority Queue)</td><td><code>O((V + E) log V)</code></td><td><code>O(V)</code></td><td>Non-negative Weighted</td><td>Single-source shortest path with positive weights</td></tr>
                <tr><td><strong>Bellman-Ford</strong></td><td>Edge List</td><td><code>O(V · E)</code></td><td><code>O(V)</code></td><td>Weighted (Negative allowed)</td><td>Detects negative weight cycles in graph</td></tr>
                <tr><td><strong>Floyd-Warshall</strong></td><td>2D Matrix DP</td><td><code>O(V³)</code></td><td><code>O(V²)</code></td><td>All-Pairs Shortest Path</td><td>Calculates shortest paths between every pair of vertices</td></tr>
                <tr><td><strong>Kruskal's Algorithm</strong></td><td>Disjoint Set Union (DSU)</td><td><code>O(E log E)</code></td><td><code>O(V + E)</code></td><td>Undirected Weighted</td><td>Minimum Spanning Tree by sorting edges</td></tr>
                <tr><td><strong>Prim's Algorithm</strong></td><td>Min-Heap Priority Queue</td><td><code>O((V + E) log V)</code></td><td><code>O(V)</code></td><td>Undirected Weighted</td><td>Minimum Spanning Tree growing from vertex</td></tr>
                <tr><td><strong>Kahn's Topological Sort</strong></td><td>In-Degree Array + Queue</td><td><code>O(V + E)</code></td><td><code>O(V + E)</code></td><td>Directed Acyclic Graph (DAG)</td><td>Prerequisite scheduling, build dependency order</td></tr>
              </tbody>
            </table>
          </div>
        )}

        {activeSheet === 'dp' && (
          <div className="dsa-table-wrap">
            <table className="dsa-cs-table">
              <thead>
                <tr>
                  <th>Classic DP Problem</th>
                  <th>State Definition</th>
                  <th>State Transition Formula</th>
                  <th>Base Case</th>
                  <th>Time & Space</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Fibonacci Numbers</strong></td><td><code>dp[i]</code> = i-th number</td><td><code>dp[i] = dp[i-1] + dp[i-2]</code></td><td><code>dp[0]=0, dp[1]=1</code></td><td><code>O(N) Time, O(1) Space</code></td></tr>
                <tr><td><strong>Climbing Stairs</strong></td><td><code>dp[i]</code> = ways to reach step i</td><td><code>dp[i] = dp[i-1] + dp[i-2]</code></td><td><code>dp[1]=1, dp[2]=2</code></td><td><code>O(N) Time, O(1) Space</code></td></tr>
                <tr><td><strong>House Robber</strong></td><td><code>dp[i]</code> = max loot up to house i</td><td><code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code></td><td><code>dp[0]=nums[0]</code></td><td><code>O(N) Time, O(1) Space</code></td></tr>
                <tr><td><strong>0/1 Knapsack</strong></td><td><code>dp[w]</code> = max value at capacity w</td><td><code>dp[w] = max(dp[w], dp[w - wt[i]] + val[i])</code></td><td><code>dp[0]=0</code></td><td><code>O(N·W) Time, O(W) Space</code></td></tr>
                <tr><td><strong>Coin Change (Min Coins)</strong></td><td><code>dp[a]</code> = min coins for amount a</td><td><code>dp[a] = min(dp[a], dp[a - c] + 1)</code></td><td><code>dp[0]=0, others=∞</code></td><td><code>O(N·Amount) Time, O(Amount) Space</code></td></tr>
                <tr><td><strong>Longest Common Subsequence</strong></td><td><code>dp[i][j]</code> = LCS of s1[0..i] and s2[0..j]</td><td><code>s1[i]==s2[j] ? 1 + dp[i-1][j-1] : max(dp[i-1][j], dp[i][j-1])</code></td><td><code>dp[0][j]=0, dp[i][0]=0</code></td><td><code>O(M·N) Time, O(min(M, N)) Space</code></td></tr>
                <tr><td><strong>Longest Increasing Subsequence</strong></td><td><code>dp[i]</code> = LIS ending at index i</td><td><code>dp[i] = 1 + max(dp[j]) for j &lt; i and nums[j] &lt; nums[i]</code></td><td><code>dp.fill(1)</code></td><td><code>O(N²) DP / O(N log N) Binary Search</code></td></tr>
                <tr><td><strong>Edit Distance (Levenshtein)</strong></td><td><code>dp[i][j]</code> = min ops to convert s1 to s2</td><td><code>s1[i]==s2[j] ? dp[i-1][j-1] : 1 + min(insert, delete, replace)</code></td><td><code>dp[i][0]=i, dp[0][j]=j</code></td><td><code>O(M·N) Time, O(min(M, N)) Space</code></td></tr>
              </tbody>
            </table>
          </div>
        )}

        {activeSheet === 'patterns' && (
          <div className="dsa-table-wrap">
            <table className="dsa-cs-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Pattern Name</th>
                  <th>Category</th>
                  <th>Trigger Keywords & Signals</th>
                  <th>Core Time & Space</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td><strong>Two Pointers</strong></td><td>Array / String</td><td>Sorted array, target pair sum, palindromes, container boundaries</td><td><code>O(N) Time, O(1) Space</code></td></tr>
                <tr><td>2</td><td><strong>Sliding Window</strong></td><td>Array / String</td><td>Contiguous subarray / substring, longest/shortest valid range</td><td><code>O(N) Time, O(K) Space</code></td></tr>
                <tr><td>3</td><td><strong>Fast & Slow Pointers</strong></td><td>Linked List</td><td>Cycle detection, finding middle node, palindrome linked list</td><td><code>O(N) Time, O(1) Space</code></td></tr>
                <tr><td>4</td><td><strong>Merge Intervals</strong></td><td>Intervals</td><td>Overlapping time intervals, meeting rooms, calendar conflicts</td><td><code>O(N log N) Time, O(N) Space</code></td></tr>
                <tr><td>5</td><td><strong>Cyclic Sort</strong></td><td>Array</td><td>Numbers in range 1 to N, find missing/duplicate elements</td><td><code>O(N) Time, O(1) Space</code></td></tr>
                <tr><td>6</td><td><strong>In-Place LL Reversal</strong></td><td>Linked List</td><td>Reverse linked list subsegment without allocating new memory</td><td><code>O(N) Time, O(1) Space</code></td></tr>
                <tr><td>7</td><td><strong>Tree BFS (Level-Order)</strong></td><td>Tree</td><td>Level-by-level traversal, minimum tree depth, zigzag traversal</td><td><code>O(N) Time, O(W) Space</code></td></tr>
                <tr><td>8</td><td><strong>Tree DFS</strong></td><td>Tree</td><td>Path sum, tree diameter, maximum depth, validate BST</td><td><code>O(N) Time, O(H) Space</code></td></tr>
                <tr><td>9</td><td><strong>Two Heaps</strong></td><td>Heap / Stream</td><td>Continuous data stream, running median, balance two halves</td><td><code>O(log N) insert, O(1) median</code></td></tr>
                <tr><td>10</td><td><strong>Subsets & Backtracking</strong></td><td>Recursion</td><td>Generate all combinations, permutations, N-Queens, partitions</td><td><code>O(2^N) / O(N!) Time</code></td></tr>
                <tr><td>11</td><td><strong>Modified Binary Search</strong></td><td>Search</td><td>Rotated sorted array, search on answer space with monotonic check</td><td><code>O(log N) Time, O(1) Space</code></td></tr>
                <tr><td>12</td><td><strong>Top-K Elements</strong></td><td>Heap</td><td>Find K largest/smallest elements, Top K frequent items</td><td><code>O(N log K) Time, O(K) Space</code></td></tr>
                <tr><td>13</td><td><strong>K-Way Merge</strong></td><td>Heap / Array</td><td>Merge K sorted lists, Kth smallest in sorted matrix</td><td><code>O(N log K) Time, O(K) Space</code></td></tr>
                <tr><td>14</td><td><strong>0/1 Knapsack DP</strong></td><td>DP</td><td>Maximize value with weight constraint; choose item at most once</td><td><code>O(N · W) Time, O(W) Space</code></td></tr>
                <tr><td>15</td><td><strong>LCS & String DP</strong></td><td>DP</td><td>String alignment, edit distance, transformation cost</td><td><code>O(M · N) Time, O(min(M, N)) Space</code></td></tr>
                <tr><td>16</td><td><strong>Topological Sort</strong></td><td>Graph</td><td>Prerequisite tasks, build order dependencies, DAG scheduling</td><td><code>O(V + E) Time, O(V + E) Space</code></td></tr>
                <tr><td>17</td><td><strong>Union-Find (DSU)</strong></td><td>Graph</td><td>Dynamic connectivity, connected components count, Kruskal MST</td><td><code>O(α(N)) Time, O(N) Space</code></td></tr>
                <tr><td>18</td><td><strong>Monotonic Stack</strong></td><td>Stack</td><td>Next Greater Element, Previous Smaller Element, Histogram Area</td><td><code>O(N) Time, O(N) Space</code></td></tr>
                <tr><td>19</td><td><strong>Monotonic Queue</strong></td><td>Queue</td><td>Sliding window maximum, maintain candidates in moving frame</td><td><code>O(N) Time, O(K) Space</code></td></tr>
                <tr><td>20</td><td><strong>Bitwise XOR / Mask</strong></td><td>Bit Manipulation</td><td>Single non-duplicate number, missing element in range, power of 2</td><td><code>O(N) Time, O(1) Space</code></td></tr>
                <tr><td>21</td><td><strong>Trie (Prefix Tree)</strong></td><td>Tree / String</td><td>Autocomplete, prefix lookup, word search dictionary</td><td><code>O(L) Time, O(Alphabet · N) Space</code></td></tr>
                <tr><td>22</td><td><strong>Shortest Path / Range Query</strong></td><td>Graph / Adv DS</td><td>Dijkstra shortest path in weighted graph / Segment Tree range sum</td><td><code>O((V+E) log V) / O(log N)</code></td></tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
