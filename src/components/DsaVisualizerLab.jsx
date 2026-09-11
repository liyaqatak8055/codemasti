import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, RotateCcw, SkipForward, SkipBack, FastForward, Info, Layers, Eye, Cpu, Database, Network } from 'lucide-react'

export default function DsaVisualizerLab({ initialMode = 'binarySearch' }) {
  const [mode, setMode] = useState(initialMode)
  const [arrayData, setArrayData] = useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19])
  const [target, setTarget] = useState(13)
  const [stepIndex, setStepIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speedMs, setSpeedMs] = useState(900)
  const [customInput, setCustomInput] = useState('')

  // Precomputed visual simulation steps for all 15 modes
  const getSimulationSteps = (currentMode, data, tgt) => {
    const steps = []

    if (currentMode === 'binarySearch') {
      let low = 0, high = data.length - 1
      while (low <= high) {
        const mid = Math.floor((low + high) / 2)
        const val = data[mid]
        if (val === tgt) {
          steps.push({
            low, high, mid, found: mid,
            message: `🎉 Match Found! arr[${mid}] === ${tgt}. Search space halved in O(log N) steps!`,
            highlight: 'success'
          })
          break
        } else if (val < tgt) {
          steps.push({
            low, high, mid, found: -1,
            message: `arr[mid]=${val} < ${tgt}. Target is in RIGHT half. Setting low = mid + 1 (${mid + 1}).`,
            highlight: 'right'
          })
          low = mid + 1
        } else {
          steps.push({
            low, high, mid, found: -1,
            message: `arr[mid]=${val} > ${tgt}. Target is in LEFT half. Setting high = mid - 1 (${mid - 1}).`,
            highlight: 'left'
          })
          high = mid - 1
        }
      }
      if (low > high) {
        steps.push({
          low, high, mid: -1, found: -1,
          message: `Target ${tgt} not found in array (low > high boundary crossed).`,
          highlight: 'fail'
        })
      }
    } else if (currentMode === 'array') {
      steps.push({ array: [...data], index: -1, message: 'Contiguous RAM Layout: Elements stored in sequential memory addresses (Base + i * 4 bytes).' })
      steps.push({ array: [...data], index: 4, message: `Direct Access: arr[4] = ${data[4]} in O(1) instantaneous time via pointer math!` })
      steps.push({ array: [...data], index: 0, message: 'Prepend / Insert at Index 0: Requires shifting all N elements right -> O(N) linear time cost.' })
      steps.push({ array: [...data, 25], index: data.length, message: 'Append at End: O(1) amortized insertion in dynamic vector / list.' })
    } else if (currentMode === 'sorting') {
      const arr = [...data].slice(0, 6)
      steps.push({ array: [...arr], i: 0, j: 0, message: 'Initial Unsorted Array of elements.' })
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            const temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            steps.push({ array: [...arr], i, j: j + 1, message: `Swap: arr[${j}] (${arr[j+1]}) > arr[${j+1}] (${arr[j]}) -> Bubble larger value right!` })
          }
        }
      }
      steps.push({ array: [...arr], message: 'Array fully sorted in ascending order!' })
    } else if (currentMode === 'linkedList') {
      steps.push({ nodes: [10, 20, 30], activeNode: 0, message: 'Head points to Node(10). Node(10).next -> Node(20).' })
      steps.push({ nodes: [10, 20, 30], activeNode: 1, message: 'Traversing: curr = curr.next -> Node(20).next -> Node(30).' })
      steps.push({ nodes: [5, 10, 20, 30], activeNode: 0, message: 'Insert at Head: newNode(5).next = head; head = newNode -> O(1) time without shifting!' })
      steps.push({ nodes: [30, 20, 10, 5], activeNode: 0, message: 'Reverse Linked List: Iterative 3-pointer reversal (prev, curr, next).' })
    } else if (currentMode === 'stack') {
      steps.push({ stack: ['10'], message: 'push(10) -> Placed at top of stack (LIFO).' })
      steps.push({ stack: ['10', '20'], message: 'push(20) -> Placed at top of stack.' })
      steps.push({ stack: ['10', '20', '30'], message: 'push(30) -> Top is now 30.' })
      steps.push({ stack: ['10', '20', '30'], peek: true, message: 'peek() -> Inspect top element 30 in O(1) time without removal.' })
      steps.push({ stack: ['10', '20'], message: 'pop() -> 30 removed from top. Top is now 20 (Last-In, First-Out).' })
    } else if (currentMode === 'queue') {
      steps.push({ queue: ['10'], message: 'enqueue(10) -> Enters at REAR of queue (FIFO).' })
      steps.push({ queue: ['10', '20'], message: 'enqueue(20) -> Enters at REAR.' })
      steps.push({ queue: ['10', '20', '30'], message: 'enqueue(30) -> Enters at REAR.' })
      steps.push({ queue: ['20', '30'], message: 'dequeue() -> 10 exits from FRONT (First-In, First-Out like railway line).' })
    } else if (currentMode === 'hashing') {
      steps.push({ buckets: [['"apple": 5'], ['"banana": 8'], []], message: 'Hash Table with 3 Buckets. hash("apple") % 3 = Bucket 0.' })
      steps.push({ buckets: [['"apple": 5', '"avocado": 12'], ['"banana": 8'], []], message: 'Collision Handling: hash("avocado") % 3 = 0. Separate Chaining attaches node to linked list!' })
      steps.push({ buckets: [['"apple": 5', '"avocado": 12'], ['"banana": 8'], ['"cherry": 15']], message: 'Lookup: hash("cherry") % 3 = 2 -> Direct O(1) bucket access!' })
    } else if (currentMode === 'bst') {
      steps.push({ treeNodes: [{ val: 50, left: 30, right: 70, status: 'root' }], message: 'Root Node: 50.' })
      steps.push({ treeNodes: [{ val: 50, left: 30, right: 70, status: 'active' }], message: 'BST Property: Left subtree values (< 50) < Root (50) < Right subtree values (> 50).' })
      steps.push({ treeNodes: [{ val: 50, left: 30, right: 70, status: 'search' }], message: 'Search 30: 30 < 50 -> Move to Left Child 30. O(log N) balanced search!' })
      steps.push({ treeNodes: [{ val: 50, left: 30, right: 70, status: 'done' }], message: 'Inorder Traversal (Left, Root, Right) produces sorted order: [30, 50, 70]!' })
    } else if (currentMode === 'heap') {
      steps.push({ heap: [10, 20, 15, 30, 40], message: 'Min-Heap Property: Parent value <= Children values. Root [0]=10 is always the minimum!' })
      steps.push({ heap: [5, 10, 15, 30, 40, 20], message: 'insert(5): Appended to end, then Bubble-Up (Heapify) to Root -> O(log N) time!' })
      steps.push({ heap: [10, 20, 15, 30, 40], message: 'extractMin(): Root 5 removed, last item moved to root, then Bubble-Down -> O(log N) time!' })
    } else if (currentMode === 'bfs') {
      steps.push({ visited: ['A'], queue: ['B', 'C'], message: 'Start BFS at Node A: Enqueue neighbors B and C. (Queue: [B, C])' })
      steps.push({ visited: ['A', 'B'], queue: ['C', 'D'], message: 'Dequeue B: Visit B, enqueue its unvisited neighbor D. (Queue: [C, D])' })
      steps.push({ visited: ['A', 'B', 'C'], queue: ['D', 'E'], message: 'Dequeue C: Visit C, enqueue its unvisited neighbor E. (Queue: [D, E])' })
      steps.push({ visited: ['A', 'B', 'C', 'D', 'E'], queue: [], message: 'Wavefront traversal completed! Guaranteed shortest path in unweighted graph!' })
    } else if (currentMode === 'dfs') {
      steps.push({ callStack: ['dfs(A)'], path: ['A'], message: 'Start DFS at A: Push dfs(A) onto Call Stack. Explore deepest path first.' })
      steps.push({ callStack: ['dfs(A)', 'dfs(B)'], path: ['A', 'B'], message: 'Visit B: Push dfs(B). Follow edge B -> D.' })
      steps.push({ callStack: ['dfs(A)', 'dfs(B)', 'dfs(D)'], path: ['A', 'B', 'D'], message: 'Visit D: Leaf node reached. Backtrack unwinds call stack to B then A.' })
      steps.push({ callStack: ['dfs(A)', 'dfs(C)'], path: ['A', 'B', 'D', 'C'], message: 'Explore other branch C: Complete connected components traversal!' })
    } else if (currentMode === 'dijkstra') {
      steps.push({ distances: { A: 0, B: '∞', C: '∞', D: '∞' }, finalized: ['A'], message: 'Dijkstra Init: dist[Source A] = 0, all other nodes = ∞.' })
      steps.push({ distances: { A: 0, B: 4, C: 2, D: '∞' }, finalized: ['A'], message: 'Relax neighbors of A: dist[B] = min(∞, 0+4) = 4, dist[C] = min(∞, 0+2) = 2.' })
      steps.push({ distances: { A: 0, B: 3, C: 2, D: 7 }, finalized: ['A', 'C'], message: 'Pick min unvisited C (dist 2): Relax neighbors of C. dist[B] updated to min(4, 2+1) = 3!' })
      steps.push({ distances: { A: 0, B: 3, C: 2, D: 5 }, finalized: ['A', 'C', 'B', 'D'], message: 'Final Shortest Paths calculated in O((V + E) log V) using Min-Heap Priority Queue!' })
    } else if (currentMode === 'trie') {
      steps.push({ path: 'Root', message: 'Trie (Prefix Tree): Root node with 26 character slots.' })
      steps.push({ path: 'Root -> "c"', message: 'Insert "cat": Follow slot \'c\'.' })
      steps.push({ path: 'Root -> "c" -> "a"', message: 'Follow slot \'a\'.' })
      steps.push({ path: 'Root -> "c" -> "a" -> "t" (isEnd: true)', message: 'Insert \'t\' and mark isEnd = true. Instant O(L) prefix lookup for autocomplete!' })
    } else if (currentMode === 'dpGrid') {
      steps.push({ cell: '(0,0)', matrix: [[1, 1, 1], [1, 0, 0], [1, 0, 0]], message: 'Unique Paths Grid: Base cases along top row and left column initialized to 1.' })
      steps.push({ cell: '(1,1)', matrix: [[1, 1, 1], [1, 2, 0], [1, 0, 0]], message: 'dp[1][1] = dp[0][1] + dp[1][0] = 1 + 1 = 2 distinct paths!' })
      steps.push({ cell: '(1,2)', matrix: [[1, 1, 1], [1, 2, 3], [1, 0, 0]], message: 'dp[1][2] = dp[0][2] + dp[1][1] = 1 + 2 = 3 paths.' })
      steps.push({ cell: '(2,2)', matrix: [[1, 1, 1], [1, 2, 3], [1, 3, 6]], message: 'Target Cell dp[2][2] = dp[1][2] + dp[2][1] = 3 + 3 = 6 Unique Paths calculated in O(M*N)!' })
    } else if (currentMode === 'segmentTree') {
      steps.push({ treeRange: '[0..7]: Sum 36', message: 'Segment Tree: Root covers entire array range [0..7] with sum 36.' })
      steps.push({ treeRange: 'Left [0..3]: 10 | Right [4..7]: 26', message: 'Range Query [2..5]: Split into logarithmic subsegments [2..3] and [4..5].' })
      steps.push({ treeRange: 'Result Sum = 14', message: 'Range Sum Query answered in O(log N) time instead of O(N) scan!' })
    }

    return steps
  }

  const steps = getSimulationSteps(mode, arrayData, target)

  useEffect(() => {
    setStepIndex(0)
    setIsPlaying(false)
  }, [mode, arrayData, target])

  useEffect(() => {
    let timer = null
    if (isPlaying) {
      timer = setInterval(() => {
        setStepIndex(prev => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false)
            return prev
          }
          return prev + 1
        })
      }, speedMs)
    }
    return () => clearInterval(timer)
  }, [isPlaying, speedMs, steps.length])

  const currentStep = steps[stepIndex] || {}

  const handleApplyCustomData = () => {
    if (!customInput.trim()) return
    const parsed = customInput.split(',').map(n => parseInt(n.trim(), 10)).filter(n => !isNaN(n))
    if (parsed.length > 0) {
      if (mode === 'binarySearch') parsed.sort((a, b) => a - b)
      setArrayData(parsed)
      setCustomInput('')
    }
  }

  const VIS_MODES = [
    ['binarySearch', '🔍 Binary Search'],
    ['sorting', '🔄 Sorting'],
    ['array', '📊 Array Memory'],
    ['linkedList', '🔗 Linked List'],
    ['stack', '📚 Stack LIFO'],
    ['queue', '🚶 Queue FIFO'],
    ['hashing', '🗝️ Hash Table'],
    ['bst', '🌳 BST Tree'],
    ['heap', '⛰️ Min-Heap'],
    ['bfs', '🌊 BFS Traversal'],
    ['dfs', '🪜 DFS Stack'],
    ['dijkstra', '📍 Dijkstra'],
    ['trie', '🔤 Trie Prefix'],
    ['dpGrid', '⚡ DP Grid'],
    ['segmentTree', '🌲 Segment Tree']
  ]

  return (
    <div className="dsa-visualizer-card">
      <div className="dsa-vis-header">
        <div className="dsa-vis-title-row">
          <span className="dsa-vis-badge">⚡ Visual DSA Lab</span>
          <h3>Interactive Algorithm & Data Structure Simulator</h3>
        </div>
        <div className="dsa-vis-mode-tabs">
          {VIS_MODES.map(([m, label]) => (
            <button
              key={m}
              className={`dsa-vis-tab ${mode === m ? 'active' : ''}`}
              onClick={() => { setMode(m); setStepIndex(0); setIsPlaying(false) }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="dsa-vis-canvas">
        {/* Visual Elements Display */}
        {mode === 'binarySearch' && (
          <div className="dsa-array-view">
            <div className="dsa-array-container">
              {arrayData.map((val, idx) => {
                const isMid = idx === currentStep.mid
                const isLow = idx === currentStep.low
                const isHigh = idx === currentStep.high
                const isFound = idx === currentStep.found
                const isOutOfRange = idx < currentStep.low || idx > currentStep.high

                return (
                  <motion.div
                    key={idx}
                    className={`dsa-array-box ${isFound ? 'found' : isMid ? 'mid' : isLow || isHigh ? 'boundary' : ''} ${isOutOfRange ? 'dimmed' : ''}`}
                    layout
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  >
                    <span className="dsa-box-index">[{idx}]</span>
                    <strong className="dsa-box-val">{val}</strong>
                    <div className="dsa-pointer-tags">
                      {isLow && <span className="dsa-tag tag-low">L</span>}
                      {isMid && <span className="dsa-tag tag-mid">MID</span>}
                      {isHigh && <span className="dsa-tag tag-high">H</span>}
                      {isFound && <span className="dsa-tag tag-found">✓ FOUND</span>}
                    </div>
                  </motion.div>
                )
              })}
            </div>
            <div className="dsa-vis-target-chip">
              Target: <strong>{target}</strong> | Time: <strong>O(log N)</strong> | Step: <strong>{stepIndex + 1}/{steps.length}</strong>
            </div>
          </div>
        )}

        {mode === 'sorting' && (
          <div className="dsa-sorting-view">
            <div className="dsa-bars-container">
              {(currentStep.array || arrayData.slice(0, 6)).map((val, idx) => (
                <motion.div
                  key={idx}
                  className="dsa-bar-item"
                  style={{ height: `${Math.min(val * 12 + 35, 170)}px` }}
                  animate={{ height: `${Math.min(val * 12 + 35, 170)}px` }}
                >
                  <span className="dsa-bar-label">{val}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {mode === 'array' && (
          <div className="dsa-array-view">
            <div className="dsa-array-container">
              {(currentStep.array || arrayData).map((val, idx) => (
                <motion.div
                  key={idx}
                  className={`dsa-array-box ${currentStep.index === idx ? 'mid' : ''}`}
                  layout
                >
                  <span className="dsa-box-index">[{idx}]</span>
                  <strong className="dsa-box-val">{val}</strong>
                  <span className="dsa-tag" style={{ fontSize: '10px', marginTop: '4px' }}>0x{1000 + idx * 4}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {mode === 'linkedList' && (
          <div className="dsa-linked-list-view" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '24px 0', flexWrap: 'wrap' }}>
            {(currentStep.nodes || [10, 20, 30]).map((val, idx, arr) => (
              <React.Fragment key={idx}>
                <div style={{ background: currentStep.activeNode === idx ? '#3b82f6' : 'var(--card-bg, #1e293b)', border: '2px solid #3b82f6', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                  <strong>{val}</strong>
                  <span style={{ opacity: 0.6, fontSize: '12px' }}>| •</span>
                </div>
                {idx < arr.length - 1 && <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '18px' }}>&rarr;</span>}
                {idx === arr.length - 1 && <span style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '13px' }}>null</span>}
              </React.Fragment>
            ))}
          </div>
        )}

        {(mode === 'stack' || mode === 'queue') && (
          <div className="dsa-linear-container-view">
            <div className="dsa-structure-box">
              <span className="dsa-struct-label">{mode === 'stack' ? 'Top of Stack (LIFO)' : 'Front of Queue (FIFO)'}</span>
              <div className="dsa-struct-items">
                {(currentStep.stack || currentStep.queue || ['10', '20', '30']).map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="dsa-struct-item-badge"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {mode === 'hashing' && (
          <div className="dsa-hash-view" style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '16px 0' }}>
            {(currentStep.buckets || [['"apple": 5'], ['"banana": 8'], []]).map((items, bIdx) => (
              <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ padding: '4px 10px', background: '#3b82f622', color: '#3b82f6', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', minWidth: '90px' }}>Bucket [{bIdx}]</span>
                <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>&rarr;</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {items.length === 0 ? (
                    <span style={{ color: 'var(--text-muted, #94a3b8)', fontStyle: 'italic', fontSize: '13px' }}>Empty</span>
                  ) : (
                    items.map((it, i) => (
                      <span key={i} style={{ background: 'var(--card-bg, #1e293b)', border: '1px solid #3b82f6', padding: '4px 10px', borderRadius: '6px', fontSize: '13px' }}>
                        {it}
                      </span>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {mode === 'bst' && (
          <div className="dsa-tree-visual-card">
            <div className="dsa-tree-node-canvas">
              <div className="dsa-tree-node-circle root">50</div>
              <div className="dsa-tree-branches">
                <div className="dsa-tree-node-circle left">30</div>
                <div className="dsa-tree-node-circle right">70</div>
              </div>
            </div>
          </div>
        )}

        {mode === 'heap' && (
          <div className="dsa-heap-view" style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ display: 'inline-flex', gap: '8px', marginBottom: '14px' }}>
              {(currentStep.heap || [10, 20, 15, 30, 40]).map((val, idx) => (
                <div key={idx} style={{ background: idx === 0 ? '#10b981' : 'var(--card-bg, #1e293b)', border: '1px solid #10b981', padding: '8px 14px', borderRadius: '8px', color: idx === 0 ? '#fff' : 'inherit' }}>
                  <div style={{ fontSize: '10px', opacity: 0.7 }}>[{idx}]</div>
                  <strong>{val}</strong>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted, #94a3b8)' }}>Array Min-Heap (Root at index 0 = Minimum element)</div>
          </div>
        )}

        {mode === 'bfs' && (
          <div className="dsa-bfs-view" style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span>Visited Wavefront:</span>
              {(currentStep.visited || ['A']).map(n => (
                <span key={n} style={{ background: '#10b981', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontWeight: 'bold' }}>{n}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span>Queue State:</span>
              {(currentStep.queue || ['B', 'C']).map(n => (
                <span key={n} style={{ background: '#3b82f6', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontWeight: 'bold' }}>{n}</span>
              ))}
            </div>
          </div>
        )}

        {mode === 'dfs' && (
          <div className="dsa-dfs-view" style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span>Call Stack:</span>
              {(currentStep.callStack || ['dfs(A)']).map((frame, i) => (
                <span key={i} style={{ background: '#8b5cf6', color: '#fff', padding: '3px 10px', borderRadius: '6px', fontSize: '12px' }}>{frame}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span>Traversal Path:</span>
              {(currentStep.path || ['A']).map((node, i) => (
                <span key={i} style={{ color: '#10b981', fontWeight: 'bold' }}>{node} {i < (currentStep.path?.length || 1) - 1 ? '&rarr;' : ''}</span>
              ))}
            </div>
          </div>
        )}

        {mode === 'dijkstra' && (
          <div className="dsa-dijkstra-view" style={{ padding: '16px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
              {Object.entries(currentStep.distances || { A: 0, B: 4, C: 2, D: '∞' }).map(([node, dist]) => (
                <div key={node} style={{ background: currentStep.finalized?.includes(node) ? '#10b98122' : 'var(--card-bg, #1e293b)', border: `2px solid ${currentStep.finalized?.includes(node) ? '#10b981' : '#64748b'}`, padding: '10px 16px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '16px' }}>Node {node}</div>
                  <div style={{ color: '#3b82f6', fontWeight: 'bold' }}>Dist: {dist}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {mode === 'trie' && (
          <div className="dsa-trie-view" style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--card-bg, #1e293b)', border: '1px solid #ec4899', padding: '12px 20px', borderRadius: '10px' }}>
              <span style={{ color: '#ec4899', fontWeight: 'bold', fontSize: '16px' }}>Trie Path:</span>
              <strong style={{ color: '#fff' }}>{currentStep.path || 'Root -> "c" -> "a" -> "t"'}</strong>
            </div>
          </div>
        )}

        {mode === 'dpGrid' && (
          <div className="dsa-dp-grid-view">
            <div className="dsa-dp-matrix">
              {(currentStep.matrix || [[1, 1, 1], [1, 2, 3], [1, 3, 6]]).map((row, rIdx) => (
                <div key={rIdx} className="dsa-dp-row">
                  {row.map((val, cIdx) => (
                    <div key={cIdx} className={`dsa-dp-cell ${rIdx === 2 && cIdx === 2 ? 'target' : val > 1 ? 'filled' : 'active'}`}>
                      {val}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {mode === 'segmentTree' && (
          <div className="dsa-seg-view" style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ display: 'inline-block', background: 'var(--card-bg, #1e293b)', border: '2px solid #06b6d4', padding: '14px 24px', borderRadius: '10px' }}>
              <strong style={{ color: '#06b6d4', fontSize: '15px' }}>{currentStep.treeRange || '[0..7]: Sum 36'}</strong>
            </div>
          </div>
        )}

        {/* Dynamic Log Commentary */}
        <div className="dsa-vis-message-box">
          <span className="dsa-vis-step-pill">Step {stepIndex + 1} of {steps.length}</span>
          <p className="dsa-vis-commentary">{currentStep.message || 'Ready to step through algorithm.'}</p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="dsa-vis-controls">
        <div className="dsa-vis-btn-group">
          <button
            className="primary-btn compact"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <><Pause size={14} /> Pause</> : <><Play size={14} /> Play Animation</>}
          </button>
          <button
            className="ghost-btn compact"
            onClick={() => setStepIndex(prev => Math.max(prev - 1, 0))}
            disabled={stepIndex <= 0}
          >
            <SkipBack size={14} /> Prev
          </button>
          <button
            className="ghost-btn compact"
            onClick={() => setStepIndex(prev => Math.min(prev + 1, steps.length - 1))}
            disabled={stepIndex >= steps.length - 1}
          >
            <SkipForward size={14} /> Next
          </button>
          <button
            className="ghost-btn compact"
            onClick={() => { setStepIndex(0); setIsPlaying(false) }}
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>

        <div className="dsa-vis-speed-controls">
          <span>Speed:</span>
          <input
            type="range"
            min="300"
            max="1800"
            step="100"
            value={speedMs}
            onChange={e => setSpeedMs(Number(e.target.value))}
            title="Adjust animation speed"
          />
          <small>{speedMs}ms</small>
        </div>

        <div className="dsa-vis-custom-input">
          <input
            type="text"
            placeholder="Custom array: 2, 4, 6, 8"
            value={customInput}
            onChange={e => setCustomInput(e.target.value)}
          />
          <button className="ghost-btn compact" onClick={handleApplyCustomData}>Apply</button>
        </div>
      </div>
    </div>
  )
}
