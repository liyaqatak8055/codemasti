import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, Zap, Clock, ShieldAlert, Cpu, HardDrive, Layers, CheckCircle } from 'lucide-react'

export default function DsaComplexityVisualizer() {
  const [inputN, setInputN] = useState(100)
  const [activeTab, setActiveTab] = useState('time')

  const calculateOps = (n) => {
    const o1 = 1
    const oLogN = Math.round(Math.log2(Math.max(n, 1)))
    const oN = n
    const oNLogN = Math.round(n * Math.log2(Math.max(n, 1)))
    const oNSquared = n <= 50000 ? n * n : '> 2.5 × 10^9 (TLE!)'
    const oNCubed = n <= 1000 ? n * n * n : '> 10^9 (Heavy TLE!)'
    const o2N = n <= 30 ? Math.pow(2, n) : '> 10^12 (Timeout!)'
    const oNFact = n <= 12 ? factorial(n) : '> 10^15 (Crashes!)'

    // Estimated seconds on 10^8 ops/sec benchmark
    const estimateTime = (ops) => {
      if (typeof ops !== 'number') return 'Timeout 🚨'
      const secs = ops / 1e8
      if (secs < 0.000001) return '< 0.001 ms ⚡ (Instant)'
      if (secs < 0.001) return `${(secs * 1000).toFixed(3)} ms ⚡`
      if (secs < 1) return `${(secs * 1000).toFixed(1)} ms 🟢`
      if (secs < 60) return `${secs.toFixed(2)} sec ⚠️`
      return `${(secs / 60).toFixed(1)} mins 🔴 (TLE)`
    }

    return {
      o1: { ops: o1, time: estimateTime(o1) },
      oLogN: { ops: oLogN, time: estimateTime(oLogN) },
      oN: { ops: oN, time: estimateTime(oN) },
      oNLogN: { ops: oNLogN, time: estimateTime(oNLogN) },
      oNSquared: { ops: oNSquared, time: estimateTime(oNSquared) },
      oNCubed: { ops: oNCubed, time: estimateTime(oNCubed) },
      o2N: { ops: o2N, time: estimateTime(o2N) },
      oNFact: { ops: oNFact, time: estimateTime(oNFact) }
    }
  }

  function factorial(num) {
    let res = 1
    for (let i = 2; i <= num; i++) res *= i
    return res
  }

  const opsData = calculateOps(inputN)

  const COMPLEXITIES = [
    { label: 'O(1)', name: 'Constant Time', desc: 'Array Index Access, Hash Table Lookup, Math formulas', data: opsData.o1, color: '#10b981', tier: 'Excellent 🟢' },
    { label: 'O(log N)', name: 'Logarithmic Time', desc: 'Binary Search, Balanced BST Operations, Segment Tree', data: opsData.oLogN, color: '#06b6d4', tier: 'Good 🟢' },
    { label: 'O(N)', name: 'Linear Time', desc: 'Single Loop, Linear Search, Kadane Algorithm, Sliding Window', data: opsData.oN, color: '#3b82f6', tier: 'Fair 🟡' },
    { label: 'O(N log N)', name: 'Linearithmic Time', desc: 'Merge Sort, Quick Sort (Avg), Heap Sort, Priority Queue', data: opsData.oNLogN, color: '#f59e0b', tier: 'Acceptable 🟠' },
    { label: 'O(N²)', name: 'Quadratic Time', desc: 'Nested Loops, Bubble Sort, 2D Matrix Traversal', data: opsData.oNSquared, color: '#ef4444', tier: 'Poor 🔴' },
    { label: 'O(N³)', name: 'Cubic Time', desc: 'Triple Loops, Floyd-Warshall All-Pairs Shortest Path', data: opsData.oNCubed, color: '#b91c1c', tier: 'Very Slow 🔴' },
    { label: 'O(2ᴺ)', name: 'Exponential Time', desc: 'Naive Recursion, Generate All Subsets, Recursive Fibonacci', data: opsData.o2N, color: '#dc2626', tier: 'Dangerous 🚨' },
    { label: 'O(N!)', name: 'Factorial Time', desc: 'Generate All Permutations, Traveling Salesperson (TSP)', data: opsData.oNFact, color: '#7f1d1d', tier: 'Catastrophic 💥' }
  ]

  const SPACE_COMPLEXITIES = [
    { type: 'Input Space', desc: 'Memory required to store the original input data structure (e.g. array of size N takes O(N) input space).', example: 'int arr[N] -> O(N) space' },
    { type: 'Auxiliary Space', desc: 'EXTRA or temporary memory allocated by the algorithm outside the input (e.g. hash maps, recursion call stacks, temporary merge arrays).', example: 'Call stack in recursion or temporary DP table' },
    { type: 'Total Space Complexity', desc: 'Total Space = Input Space + Auxiliary Space. In interviews, when asked for Space Complexity, interviewers usually focus on Auxiliary Space!', example: 'Two Sum in-place = O(1) aux space' },
    { type: 'Amortized Complexity', desc: 'The average cost per operation over a long sequence of operations. Even if a single operation is slow (e.g. array dynamic resizing copy), the average is O(1).', example: 'Dynamic array std::vector push_back() is O(1) Amortized' }
  ]

  return (
    <div className="dsa-complexity-card">
      <div className="dsa-comp-header">
        <div className="dsa-comp-title">
          <Activity size={20} color="#10b981" />
          <strong>Interactive Big-O Complexity Visualizer & Hardware Growth Estimator</strong>
        </div>
        <p className="dsa-comp-subtitle">
          See how many operations your algorithm executes at scale on modern 3 GHz CPU (10^8 operations ≈ 1.0 second).
        </p>
        <div className="dsa-comp-tab-row" style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
          <button
            className={`ghost-btn compact ${activeTab === 'time' ? 'active' : ''}`}
            onClick={() => setActiveTab('time')}
          >
            <Clock size={14} /> Time Complexity & CPU Growth
          </button>
          <button
            className={`ghost-btn compact ${activeTab === 'space' ? 'active' : ''}`}
            onClick={() => setActiveTab('space')}
          >
            <HardDrive size={14} /> Space Complexity & Amortized
          </button>
        </div>
      </div>

      {activeTab === 'time' && (
        <>
          <div className="dsa-slider-row">
            <label>Input Size (N): <strong>{inputN.toLocaleString()} elements</strong></label>
            <input
              type="range"
              min="5"
              max="10000"
              step="5"
              value={inputN}
              onChange={e => setInputN(Number(e.target.value))}
            />
            <div className="dsa-quick-n-btns">
              {[10, 50, 100, 500, 1000, 5000, 10000].map(n => (
                <button
                  key={n}
                  className={`ghost-btn compact ${inputN === n ? 'active' : ''}`}
                  onClick={() => setInputN(n)}
                >
                  N = {n.toLocaleString()}
                </button>
              ))}
            </div>
          </div>

          <div className="dsa-comp-grid">
            {COMPLEXITIES.map((c) => (
              <div key={c.label} className="dsa-comp-tile" style={{ borderTop: `3px solid ${c.color}` }}>
                <div className="dsa-tile-header">
                  <span className="dsa-tile-badge" style={{ backgroundColor: `${c.color}22`, color: c.color }}>{c.label}</span>
                  <span className="dsa-tile-tier">{c.tier}</span>
                </div>
                <h4 className="dsa-tile-name">{c.name}</h4>
                <p className="dsa-tile-desc">{c.desc}</p>
                <div className="dsa-tile-ops">
                  <Cpu size={14} />
                  <span>Ops: <strong>{typeof c.data.ops === 'number' ? c.data.ops.toLocaleString() : c.data.ops}</strong></span>
                </div>
                <div className="dsa-tile-ops" style={{ marginTop: '4px', color: '#10b981' }}>
                  <Clock size={14} />
                  <span>Est Time: <strong>{c.data.time}</strong></span>
                </div>
              </div>
            ))}
          </div>

          <div className="dsa-comp-hardware-tip">
            <ShieldAlert size={18} color="#f59e0b" />
            <div>
              <strong>Masti Sir 10^8 Golden Rule:</strong> Standard Online Judges (LeetCode, CodeForces) execute approximately <strong>100,000,000 (10^8)</strong> operations per 1.0 second time limit.
              {' '}If N = 10^5, an O(N^2) algorithm will take 10^10 operations (100 seconds ⌛ &rarr; TLE)! An O(N log N) algorithm will take only 1.6 x 10^6 operations (0.01 seconds ⚡ &rarr; Accepted)!
            </div>
          </div>
        </>
      )}

      {activeTab === 'space' && (
        <div className="dsa-space-comp-view" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
          {SPACE_COMPLEXITIES.map((item, idx) => (
            <div key={idx} className="dsa-comp-tile" style={{ borderTop: '3px solid #8b5cf6' }}>
              <h4 style={{ color: '#8b5cf6', fontSize: '15px', marginBottom: '8px' }}>{item.type}</h4>
              <p style={{ fontSize: '13px', lineHeight: '1.5', color: 'var(--text-color, #e2e8f0)', marginBottom: '8px' }}>{item.desc}</p>
              <div style={{ background: 'var(--card-bg, #1e293b)', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', borderLeft: '3px solid #10b981' }}>
                <strong>Example:</strong> {item.example}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
