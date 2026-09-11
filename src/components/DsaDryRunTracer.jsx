import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, RotateCcw, ChevronRight, CheckCircle2, Terminal, SkipForward, SkipBack, Info } from 'lucide-react'

const DEFAULT_PRESETS = [
  {
    name: 'Two Sum (HashMap O(N))',
    inputArray: [2, 7, 11, 15],
    target: 9,
    algorithm: 'Two Sum',
    complexity: 'O(N) Time, O(N) Space',
    headers: ['Step', 'Index i', 'nums[i]', 'Complement (9 - nums[i])', 'HashMap State', 'Decision', 'Result'],
    steps: [
      { step: 1, i: 0, val: 2, comp: '9 - 2 = 7', mapState: '{}', decision: '7 not in map -> Store map[2] = 0', result: 'Continue' },
      { step: 2, i: 1, val: 7, comp: '9 - 7 = 2', mapState: '{ 2: 0 }', decision: '2 IS FOUND in map at index 0!', result: 'Return [0, 1] 🎉' }
    ]
  },
  {
    name: 'Binary Search (O(log N))',
    inputArray: [1, 3, 5, 7, 9, 11],
    target: 7,
    algorithm: 'Binary Search',
    complexity: 'O(log N) Time, O(1) Space',
    headers: ['Step', 'Low', 'High', 'Mid', 'arr[Mid]', 'Comparison with Target (7)', 'Next Action'],
    steps: [
      { step: 1, low: 0, high: 5, mid: 2, midVal: 5, comp: '5 < 7 (Target is in right half)', next: 'low = mid + 1 = 3' },
      { step: 2, low: 3, high: 5, mid: 4, midVal: 9, comp: '9 > 7 (Target is in left half)', next: 'high = mid - 1 = 3' },
      { step: 3, low: 3, high: 3, mid: 3, midVal: 7, comp: '7 === 7 (TARGET MATCH FOUND!)', next: 'Return Index 3 🎉' }
    ]
  },
  {
    name: 'Valid Parentheses (Stack O(N))',
    inputArray: ['{', '[', ']', '}'],
    target: '{[]}',
    algorithm: 'Valid Parentheses',
    complexity: 'O(N) Time, O(N) Space',
    headers: ['Step', 'Char', 'Action Type', 'Stack Before', 'Stack After', 'Match Check Status'],
    steps: [
      { step: 1, char: '{', action: 'Opening bracket -> Push', stackBefore: '[]', stackAfter: "['{']", status: 'Valid (Pushed)' },
      { step: 2, char: '[', action: 'Opening bracket -> Push', stackBefore: "['{']", stackAfter: "['{', '[']", status: 'Valid (Pushed)' },
      { step: 3, char: ']', action: "Closing bracket ']' -> Pop and compare", stackBefore: "['{', '[']", stackAfter: "['{']", status: "Top '[' matches ']' ✓" },
      { step: 4, char: '}', action: "Closing bracket '}' -> Pop and compare", stackBefore: "['{']", stackAfter: '[]', status: "Top '{' matches '}' ✓" },
      { step: 5, char: 'EOF', action: 'End of string reached', stackBefore: '[]', stackAfter: '[]', status: 'Stack Empty -> String is VALID! 🎉' }
    ]
  },
  {
    name: 'Reverse Linked List (O(N) 3-Pointers)',
    inputArray: [1, 2, 3],
    target: '1 -> 2 -> 3 -> null',
    algorithm: 'Iterative Linked List Reversal',
    complexity: 'O(N) Time, O(1) Space',
    headers: ['Step', 'prev', 'curr', 'next (curr.next)', 'Pointer Mutation (curr.next = prev)', 'New prev State'],
    steps: [
      { step: 1, prev: 'null', curr: 'Node(1)', next: 'Node(2)', mutation: 'Node(1).next = null', newPrev: 'Node(1)' },
      { step: 2, prev: 'Node(1)', curr: 'Node(2)', next: 'Node(3)', mutation: 'Node(2).next = Node(1)', newPrev: 'Node(2)' },
      { step: 3, prev: 'Node(2)', curr: 'Node(3)', next: 'null', mutation: 'Node(3).next = Node(2)', newPrev: 'Node(3)' },
      { step: 4, prev: 'Node(3)', curr: 'null', next: '-', mutation: 'curr is null -> Reversal Complete', newPrev: 'New Head = Node(3) 🎉' }
    ]
  },
  {
    name: 'Kadane Max Subarray (O(N))',
    inputArray: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    target: 'Max Subarray Sum',
    algorithm: "Kadane's Dynamic Algorithm",
    complexity: 'O(N) Time, O(1) Space',
    headers: ['Step', 'i', 'nums[i]', 'currSum = max(nums[i], currSum + nums[i])', 'maxSum = max(maxSum, currSum)', 'Status'],
    steps: [
      { step: 1, i: 0, val: -2, curr: -2, max: -2, status: 'Init' },
      { step: 2, i: 1, val: 1, curr: 1, max: 1, status: 'Start new subarray at index 1' },
      { step: 3, i: 2, val: -3, curr: -2, max: 1, status: 'Sum drops to -2, max remains 1' },
      { step: 4, i: 3, val: 4, curr: 4, max: 4, status: 'New max subarray sum 4!' },
      { step: 5, i: 4, val: -1, curr: 3, max: 4, status: 'Include -1 (currSum 3)' },
      { step: 6, i: 5, val: 2, curr: 5, max: 5, status: 'New max subarray sum 5!' },
      { step: 7, i: 6, val: 1, curr: 6, max: 6, status: 'Subarray [4, -1, 2, 1] sum = 6! 🎉' },
      { step: 8, i: 7, val: -5, curr: 1, max: 6, status: 'Max remains 6' },
      { step: 9, i: 8, val: 4, curr: 5, max: 6, status: 'Max overall sum is 6 🎉' }
    ]
  },
  {
    name: 'Sliding Window (Longest Substring)',
    inputArray: ['a', 'b', 'c', 'a', 'b', 'c', 'b', 'b'],
    target: 's = "abcabcbb"',
    algorithm: 'Sliding Window + Set/Map',
    complexity: 'O(N) Time, O(min(N, Alphabet)) Space',
    headers: ['Step', 'R (Right)', 'Char', 'L (Left)', 'Set Window Content', 'Window Length (R - L + 1)', 'Max Len'],
    steps: [
      { step: 1, r: 0, char: 'a', l: 0, window: "{'a'}", len: 1, max: 1 },
      { step: 2, r: 1, char: 'b', l: 0, window: "{'a', 'b'}", len: 2, max: 2 },
      { step: 3, r: 2, char: 'c', l: 0, window: "{'a', 'b', 'c'}", len: 3, max: 3 },
      { step: 4, r: 3, char: 'a', l: 1, window: "{'b', 'c', 'a'}", len: 3, max: 3 },
      { step: 5, r: 4, char: 'b', l: 2, window: "{'c', 'a', 'b'}", len: 3, max: 3 },
      { step: 6, r: 5, char: 'c', l: 3, window: "{'a', 'b', 'c'}", len: 3, max: 3 },
      { step: 7, r: 6, char: 'b', l: 5, window: "{'c', 'b'}", len: 2, max: 3 },
      { step: 8, r: 7, char: 'b', l: 7, window: "{'b'}", len: 1, max: 'Final Answer: 3 ("abc") 🎉' }
    ]
  },
  {
    name: 'Dijkstra Shortest Path (O((V+E) log V))',
    inputArray: ['A', 'B', 'C', 'D'],
    target: 'Source: A',
    algorithm: "Dijkstra's Algorithm",
    complexity: 'O((V + E) log V) Time, O(V) Space',
    headers: ['Step', 'Extracted Min Node', 'Current Dist', 'Relaxed Edge', 'Updated Distances Table', 'Finalized Set'],
    steps: [
      { step: 1, node: 'A', dist: 0, edge: 'A -> B (wt 4), A -> C (wt 2)', table: '{ A:0, B:4, C:2, D:∞ }', finalized: '{A}' },
      { step: 2, node: 'C', dist: 2, edge: 'C -> B (wt 1), C -> D (wt 5)', table: '{ A:0, B:3, C:2, D:7 }', finalized: '{A, C}' },
      { step: 3, node: 'B', dist: 3, edge: 'B -> D (wt 2)', table: '{ A:0, B:3, C:2, D:5 }', finalized: '{A, C, B}' },
      { step: 4, node: 'D', dist: 5, edge: 'No outgoing unvisited edges', table: '{ A:0, B:3, C:2, D:5 }', finalized: '{A, C, B, D} 🎉' }
    ]
  },
  {
    name: '0/1 Knapsack DP (O(N*W))',
    inputArray: ['Item 1 (wt:1, val:1)', 'Item 2 (wt:2, val:6)', 'Item 3 (wt:3, val:10)'],
    target: 'Capacity W = 5',
    algorithm: '0/1 Knapsack Bottom-Up DP',
    complexity: 'O(N * W) Time, O(W) Space',
    headers: ['Step', 'Item Considered', 'Weight & Val', 'State Transition formula', 'DP Array state [w=0..5]', 'Max Profit'],
    steps: [
      { step: 1, item: 'Init', wtVal: '-', formula: 'dp.fill(0)', state: '[0, 0, 0, 0, 0, 0]', max: 0 },
      { step: 2, item: 'Item 1', wtVal: 'wt:1, val:1', formula: 'dp[w] = max(dp[w], dp[w-1]+1)', state: '[0, 1, 1, 1, 1, 1]', max: 1 },
      { step: 3, item: 'Item 2', wtVal: 'wt:2, val:6', formula: 'dp[w] = max(dp[w], dp[w-2]+6)', state: '[0, 1, 6, 7, 7, 7]', max: 7 },
      { step: 4, item: 'Item 3', wtVal: 'wt:3, val:10', formula: 'dp[w] = max(dp[w], dp[w-3]+10)', state: '[0, 1, 6, 10, 11, 16]', max: 'Final Max: 16 (Items 2+3) 🎉' }
    ]
  }
]

export default function DsaDryRunTracer() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const preset = DEFAULT_PRESETS[selectedPresetIndex]

  const handleNext = () => {
    if (currentStep < preset.steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
  }

  return (
    <div className="dsa-dry-run-card">
      <div className="dsa-dry-run-header">
        <div className="dsa-dry-run-title">
          <Terminal size={18} color="#3b82f6" />
          <div>
            <strong>Interactive Algorithm Dry Run Tracer</strong>
            <span style={{ fontSize: '12px', color: 'var(--text-muted, #94a3b8)', marginLeft: '8px' }}>Variable trace table & step execution</span>
          </div>
        </div>
        <div className="dsa-dry-run-presets">
          {DEFAULT_PRESETS.map((p, idx) => (
            <button
              key={p.name}
              className={`ghost-btn compact ${selectedPresetIndex === idx ? 'active' : ''}`}
              onClick={() => { setSelectedPresetIndex(idx); setCurrentStep(0); }}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="dsa-dry-run-body">
        <div className="dsa-dry-run-meta-row">
          <span>Algorithm: <strong>{preset.algorithm}</strong></span>
          <span>Complexity: <strong>{preset.complexity}</strong></span>
          <span>Target / Input: <strong>{typeof preset.target === 'object' ? JSON.stringify(preset.target) : preset.target}</strong></span>
          <span>Step: <strong>{currentStep + 1} of {preset.steps.length}</strong></span>
        </div>

        {/* Trace Table */}
        <div className="dsa-trace-table-wrap">
          <table className="dsa-trace-table">
            <thead>
              <tr>
                {preset.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {preset.steps.slice(0, currentStep + 1).map((row, rowIdx) => {
                const values = Object.values(row)
                return (
                  <motion.tr
                    key={rowIdx}
                    className={rowIdx === currentStep ? 'dsa-row-active' : ''}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {values.map((v, cIdx) => (
                      <td key={cIdx}>
                        {typeof v === 'object' ? JSON.stringify(v) : String(v)}
                      </td>
                    ))}
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="dsa-dry-run-controls">
          <button className="ghost-btn compact" onClick={handlePrev} disabled={currentStep === 0}>
            <SkipBack size={14} /> Prev Step
          </button>
          <button className="primary-btn compact" onClick={handleNext} disabled={currentStep >= preset.steps.length - 1}>
            <SkipForward size={14} /> Next Step
          </button>
          <button className="ghost-btn compact" onClick={handleReset}>
            <RotateCcw size={14} /> Reset
          </button>
          <div style={{ marginLeft: 'auto', fontSize: '13px', color: 'var(--text-muted, #94a3b8)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Info size={14} />
            <span>Masti Sir Dry Run: Trace variables in RAM step-by-step before writing code!</span>
          </div>
        </div>
      </div>
    </div>
  )
}
