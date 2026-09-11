import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Sparkles, Send, Award, HelpCircle, AlertTriangle, CheckCircle, RefreshCw, Briefcase } from 'lucide-react'

const MOCK_QUESTIONS = [
  {
    id: 1,
    title: 'Two Sum (Google Round 1)',
    difficulty: 'Easy to Medium',
    company: 'Google',
    statement: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.',
    dialogue: [
      { sender: 'interviewer', text: 'Welcome to your Google Technical Round! Let’s start with: Given an array of numbers and a target, find the pair that sums up to target. How would you approach this?' },
      { sender: 'masti', text: '👨‍🏫 Masti Sir Hint: "Pehle seedha code mat likho! Brute Force O(N^2) explain karo, fir pucho ki kya space trade karke O(N) HashMap use kar sakte hain!"' }
    ],
    phases: [
      {
        prompt: 'Phase 1: How would you start your response to the interviewer?',
        options: [
          { text: 'I will immediately jump to writing nested loops O(N^2) without clarifying anything.', score: 25, feedback: '⚠️ Too rushed! Always clarify constraints first (unique solutions? negative numbers? memory limits).' },
          { text: 'First, I will state the brute force nested loops approach O(N^2), then optimize using a Hash Map to store complements in O(N) time and O(N) space.', score: 100, feedback: '🔥 Outstanding! Demonstrates the 7-Step Evolution Framework!' },
          { text: 'I will sort the array and use Binary Search for every element taking O(N log N).', score: 75, feedback: '👍 Good optimization, but sorting scrambles original indices unless pairs of (val, index) are stored.' }
        ]
      },
      {
        prompt: 'Phase 2: Interviewer Follow-up: "What if the input array is already sorted and we are not allowed any auxiliary memory (O(1) space)?"',
        options: [
          { text: 'If the array is sorted, we can use the Two Pointers pattern starting at left=0 and right=n-1 in O(N) time and O(1) space.', score: 100, feedback: '🎯 Perfect! Two Pointers on sorted array achieves O(1) auxiliary space!' },
          { text: 'No, HashMap is strictly mandatory for Two Sum.', score: 20, feedback: '❌ Incorrect. Two Pointers achieves O(1) space on sorted arrays.' }
        ]
      },
      {
        prompt: 'Phase 3: Interviewer Follow-up: "Can we have integer overflow when doing target - nums[i] in C++ or Java?"',
        options: [
          { text: 'Yes, if target is INT_MIN and nums[i] is positive, subtraction can underflow. We should use 64-bit long or check bounds.', score: 100, feedback: '🏆 Brilliant! Spotting integer overflow is a top senior FAANG hiring signal!' },
          { text: 'Numbers never overflow in modern programming languages.', score: 10, feedback: '❌ Dangerous! 32-bit signed integers overflow at 2^31 - 1.' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Lowest Common Ancestor in BST (Amazon Round 2)',
    difficulty: 'Medium',
    company: 'Amazon',
    statement: 'Given a Binary Search Tree (BST), find the lowest common ancestor (LCA) node of two given nodes p and q.',
    dialogue: [
      { sender: 'interviewer', text: 'In our Amazon catalog category hierarchy tree (BST), how would you find the lowest common category ancestor for two products p and q in O(H) time?' },
      { sender: 'masti', text: '👨‍🏫 Masti Sir Hint: "BST property yaad karo: Agar dono p aur q root se chhote hain toh Left jao, dono bade hain toh Right jao, split point hi LCA hai!"' }
    ],
    phases: [
      {
        prompt: 'Phase 1: What is the optimal traversal logic?',
        options: [
          { text: 'Traverse down from root: if both p and q are smaller than current node, walk left; if both greater, walk right; the first split point is the LCA in O(H) time.', score: 100, feedback: '🏆 Brilliant! Clean O(H) iterative walk without needing recursion stack memory.' },
          { text: 'Store full path to p in array and full path to q in array, then compare arrays in O(N) space.', score: 65, feedback: 'Works, but consumes O(N) unnecessary memory for BST where O(1) space is achievable.' }
        ]
      },
      {
        prompt: 'Phase 2: What is the worst-case time complexity if the BST is skewed (unbalanced)?',
        options: [
          { text: 'O(N) time when BST degrades into a linear linked list (skewed tree).', score: 100, feedback: '🎯 Correct! Height H = N in degenerate trees.' },
          { text: 'Always O(1) time.', score: 10, feedback: '❌ Incorrect. Tree height determines traversal depth.' }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Number of Islands (Meta Round 1)',
    difficulty: 'Medium',
    company: 'Meta',
    statement: 'Given an m x n 2D binary grid representing a map of "1"s (land) and "0"s (water), return the number of islands.',
    dialogue: [
      { sender: 'interviewer', text: 'Suppose we have a user connection network mapped as a 2D matrix. How do we count the distinct connected land clusters?' },
      { sender: 'masti', text: '👨‍🏫 Masti Sir Hint: "Grid traversal! Har cell par jao, agar "1" mile toh count++ karo aur BFS/DFS chala kar us poore island ko "0" (water/visited) mark kar do!"' }
    ],
    phases: [
      {
        prompt: 'Phase 1: Which algorithm gives the cleanest connected components count?',
        options: [
          { text: 'Iterate over all cells. When grid[r][c] == "1", increment islandCount and trigger DFS/BFS flood-fill sinking connected "1"s to "0" (or visited set) in O(M*N) time.', score: 100, feedback: '🔥 Textbook optimal! Explores every cell at most twice.' },
          { text: 'Sort all cells and compare adjacent elements in O(M*N log(MN)).', score: 20, feedback: '❌ Sorting destroys 2D spatial connectivity.' }
        ]
      },
      {
        prompt: 'Phase 2: Interviewer: "What is the recursion call stack space complexity in DFS worst-case?"',
        options: [
          { text: 'O(M * N) space if the entire grid is land (e.g. spiral or filled matrix).', score: 100, feedback: '🎯 Perfect answer! Breadth BFS queue space is O(min(M, N)), while DFS recursion stack can reach O(M*N).' },
          { text: 'O(1) space always.', score: 15, feedback: '❌ Recursion call stack consumes memory.' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Task Scheduler & Cooling Time (Microsoft Round 2)',
    difficulty: 'Medium to Hard',
    company: 'Microsoft',
    statement: 'Given a characters array tasks representing tasks CPU must execute, and a cooling interval n, return the least number of CPU intervals.',
    dialogue: [
      { sender: 'interviewer', text: 'How do you schedule tasks with cooldown constraint n such that idle CPU slots are minimized?' },
      { sender: 'masti', text: '👨‍🏫 Masti Sir Hint: "Greedy approach! Jo task sabse zyada frequency wala hai, pehle uska skeleton banao aur slots fill karo!"' }
    ],
    phases: [
      {
        prompt: 'Phase 1: What is the optimal formula or strategy?',
        options: [
          { text: 'Count maximum frequency maxFreq. Formula: (maxFreq - 1) * (n + 1) + countOfMaxFreqTasks, then return Math.max(tasks.length, formulaResult) in O(N) time.', score: 100, feedback: '🏆 Brilliant Greedy mathematical solution!' },
          { text: 'Simulate full CPU queue with sleep() delay of n milliseconds in real-time.', score: 10, feedback: '❌ Interview evaluates algorithm math, not real-time clock delays.' }
        ]
      }
    ]
  }
]

export default function DsaInterviewSimulator() {
  const [selectedQIndex, setSelectedQIndex] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [userScore, setUserScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isCompleted, setIsCompleted] = useState(false)

  const activeQ = MOCK_QUESTIONS[selectedQIndex]
  const phase = activeQ.phases[currentPhase]

  const handleSelectOption = (opt) => {
    setSelectedOption(opt)
    setUserScore(prev => prev + opt.score)
  }

  const handleNextPhase = () => {
    if (currentPhase < activeQ.phases.length - 1) {
      setCurrentPhase(prev => prev + 1)
      setSelectedOption(null)
    } else {
      setIsCompleted(true)
    }
  }

  const handleReset = (qIndex) => {
    setSelectedQIndex(qIndex)
    setCurrentPhase(0)
    setUserScore(0)
    setSelectedOption(null)
    setIsCompleted(false)
  }

  return (
    <div className="dsa-interview-sim-card">
      <div className="dsa-sim-header">
        <div className="dsa-sim-title-row">
          <MessageSquare size={22} color="#f59e0b" />
          <div>
            <h3>FAANG Mock Interview Simulator with Masti Sir</h3>
            <p>Experience real technical interview rounds (Google, Amazon, Meta, Microsoft) with progressive coaching.</p>
          </div>
        </div>
        <div className="dsa-sim-company-tabs">
          {MOCK_QUESTIONS.map((q, idx) => (
            <button
              key={q.id}
              className={`ghost-btn compact ${selectedQIndex === idx ? 'active' : ''}`}
              onClick={() => handleReset(idx)}
            >
              <Briefcase size={13} /> {q.company}
            </button>
          ))}
        </div>
      </div>

      <div className="dsa-sim-body">
        <div className="dsa-sim-q-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h4 style={{ margin: 0, color: '#f59e0b', fontSize: '16px' }}>{activeQ.title}</h4>
            <span style={{ fontSize: '12px', background: '#f59e0b22', color: '#f59e0b', padding: '2px 8px', borderRadius: '6px' }}>{activeQ.difficulty}</span>
          </div>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5' }}>{activeQ.statement}</p>
        </div>

        {/* Dialogue Stream */}
        <div className="dsa-sim-chat">
          {activeQ.dialogue.map((d, i) => (
            <div key={i} className={`dsa-chat-bubble ${d.sender}`}>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        {/* Question Phase / Options */}
        {!isCompleted && phase && (
          <div className="dsa-sim-phase-card">
            <h4 style={{ color: 'var(--text-color, #e2e8f0)', fontSize: '14px', marginBottom: '12px' }}>{phase.prompt}</h4>
            <div className="dsa-sim-options-list">
              {phase.options.map((opt, i) => {
                const isSelected = selectedOption === opt
                return (
                  <button
                    key={i}
                    className={`dsa-sim-opt-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(opt)}
                    disabled={selectedOption !== null}
                  >
                    <span>{opt.text}</span>
                  </button>
                )
              })}
            </div>

            {selectedOption && (
              <motion.div
                className="dsa-sim-feedback-box"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: '12px', padding: '10px 14px', borderRadius: '8px', background: selectedOption.score >= 80 ? '#10b98122' : '#f59e0b22', border: `1px solid ${selectedOption.score >= 80 ? '#10b981' : '#f59e0b'}` }}
              >
                <div style={{ fontWeight: 'bold', marginBottom: '4px', color: selectedOption.score >= 80 ? '#10b981' : '#f59e0b' }}>
                  Score: +{selectedOption.score} XP
                </div>
                <p style={{ margin: 0, fontSize: '13px' }}>{selectedOption.feedback}</p>
                <button
                  className="primary-btn compact"
                  style={{ marginTop: '10px' }}
                  onClick={handleNextPhase}
                >
                  {currentPhase < activeQ.phases.length - 1 ? 'Next Follow-up Question →' : 'Complete Interview Round 🎉'}
                </button>
              </motion.div>
            )}
          </div>
        )}

        {isCompleted && (
          <motion.div
            className="dsa-sim-complete-card"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ textAlign: 'center', padding: '24px', background: '#10b98115', border: '1px solid #10b981', borderRadius: '12px', marginTop: '16px' }}
          >
            <Award size={40} color="#10b981" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ color: '#10b981', marginBottom: '6px' }}>Interview Round Completed!</h3>
            <p style={{ fontSize: '14px', marginBottom: '14px' }}>
              Total Interview Score: <strong>{userScore} / {activeQ.phases.length * 100} XP</strong>
            </p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted, #94a3b8)', marginBottom: '16px' }}>
              👨‍🏫 Masti Sir: "Aapne constraints clarify kiye, time-space trade-offs explain kiye, aur interviewer ko impress kar diya! Shabaash! 🔥"
            </p>
            <button className="primary-btn compact" onClick={() => handleReset(selectedQIndex)}>
              <RefreshCw size={14} /> Retry Interview Round
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
