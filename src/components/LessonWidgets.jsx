import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView } from 'framer-motion'

// ─── Enhanced Flow Diagram & Visual Concept Map ───────────────
export const FlowDiagram = ({
  nodes = [],
  type = 'flow',
  categories,
  root,
  title,
  subtitle
}) => {
  const [selectedItem, setSelectedItem] = useState(null)

  // 1. Check if structured categories are provided or parse string nodes
  const parsedCategories = useMemo(() => {
    if (categories && categories.length > 0) return categories

    const isCategoryFormat = nodes.some(n => typeof n === 'string' && n.includes(':'))
    if (!isCategoryFormat) return null

    const cats = []
    nodes.forEach((n, idx) => {
      if (typeof n !== 'string') return
      const colonIdx = n.indexOf(':')
      if (colonIdx === -1) return

      const categoryName = n.slice(0, colonIdx).trim()
      const rest = n.slice(colonIdx + 1).trim()
      const parenMatch = rest.match(/^(.*?)\s*\((.*?)\)$/)
      const rawItems = parenMatch ? parenMatch[1] : rest
      const tag = parenMatch ? parenMatch[2] : ''

      const items = rawItems.split(',').map(s => s.trim()).filter(Boolean).map(name => {
        let icon = '📦'
        if (/array/i.test(name)) icon = '🔢'
        else if (/linked/i.test(name)) icon = '🔗'
        else if (/stack/i.test(name)) icon = '📚'
        else if (/queue/i.test(name)) icon = '🚶‍♂️'
        else if (/tree/i.test(name)) icon = '🌲'
        else if (/graph/i.test(name)) icon = '🕸️'
        else if (/heap/i.test(name)) icon = '⛰️'
        else if (/trie/i.test(name)) icon = '🔤'
        else if (/hash|map|dict/i.test(name)) icon = '⚡'
        else if (/set/i.test(name)) icon = '🛡️'
        return { name, icon }
      })

      let icon = '📁'
      let color = '#3b82f6'
      let desc = ''
      if (/linear/i.test(categoryName) && !/non/i.test(categoryName)) {
        icon = '📦'
        color = '#3b82f6'
        desc = 'Elements memory mein ek linear sequence mein store hote hain. Sequential traversal.'
      } else if (/non-linear|tree|graph/i.test(categoryName)) {
        icon = '🌳'
        color = '#10b981'
        desc = 'Elements multi-level branches aur connected networks mein store hote hain.'
      } else if (/hash/i.test(categoryName)) {
        icon = '⚡'
        color = '#8b5cf6'
        desc = 'Hash function direct memory slot calculate karta hai for instant O(1) speed.'
      }

      cats.push({
        id: `cat-${idx}`,
        name: categoryName,
        icon,
        color,
        desc,
        tag: tag || 'Organized Memory',
        items
      })
    })

    return cats.length > 0 ? cats : null
  }, [categories, nodes])

  // If Category Tree / Classification Mode
  if (type === 'tree' || type === 'category-tree' || parsedCategories) {
    const displayCategories = parsedCategories || []
    const rootTitle = root?.title || title || 'Data Structures Memory Architecture'

    return (
      <div className="enhanced-visual-diagram">
        {/* Diagram Header */}
        <div className="visual-diagram-head">
          <div className="visual-diagram-badge">
            <span className="visual-badge-dot" />
            <span>Visual Concept Map</span>
          </div>
          <h4 className="visual-diagram-title">{rootTitle}</h4>
          {subtitle && <p className="visual-diagram-subtitle">{subtitle}</p>}
        </div>

        {/* Tree Root Connector */}
        <div className="visual-tree-root-wrap">
          <div className="visual-tree-root-box">
            <span className="root-icon">🧠</span>
            <div className="root-text">
              <strong>Computer Memory (RAM)</strong>
              <span>Systematic Data Organization</span>
            </div>
          </div>
          <div className="visual-tree-branch-line" />
        </div>

        {/* Categories Grid */}
        <div className="visual-categories-grid">
          {displayCategories.map((cat, cIdx) => (
            <motion.div
              key={cat.id || cIdx}
              className="visual-category-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: cIdx * 0.1 }}
              style={{ '--cat-color': cat.color || '#3b82f6' }}
            >
              <div className="visual-category-header">
                <div className="visual-cat-title-wrap">
                  <span className="visual-cat-icon">{cat.icon}</span>
                  <strong className="visual-cat-name">{cat.name}</strong>
                </div>
                {cat.tag && <span className="visual-cat-tag">{cat.tag}</span>}
              </div>

              {cat.desc && <p className="visual-cat-desc">{cat.desc}</p>}

              <div className="visual-items-flex">
                {cat.items?.map((item, iIdx) => {
                  const isObj = typeof item === 'object'
                  const itemName = isObj ? item.name : item
                  const itemIcon = isObj ? item.icon : '•'
                  const itemNote = isObj ? item.note : null
                  const isSelected = selectedItem?.name === itemName

                  return (
                    <button
                      key={iIdx}
                      type="button"
                      className={`visual-item-chip ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedItem(isSelected ? null : { name: itemName, icon: itemIcon, note: itemNote, category: cat.name })}
                      title={itemNote || itemName}
                    >
                      <span className="item-chip-icon">{itemIcon}</span>
                      <span className="item-chip-name">{itemName}</span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Selected Item Inspector */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="visual-inspector-card"
              initial={{ opacity: 0, height: 0, y: 6 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: 6 }}
            >
              <div className="inspector-head">
                <div className="inspector-title">
                  <span className="inspector-icon">{selectedItem.icon}</span>
                  <strong>{selectedItem.name}</strong>
                  <span className="inspector-cat-badge">{selectedItem.category}</span>
                </div>
                <button
                  type="button"
                  className="inspector-close-btn"
                  onClick={() => setSelectedItem(null)}
                >
                  ✕
                </button>
              </div>
              <p className="inspector-desc">
                {selectedItem.note || `${selectedItem.name} is a fundamental data structure used to store and manipulate items efficiently in memory.`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mental Model Helper Banner */}
        <div className="visual-diagram-footer-note">
          <span className="note-icon">💡</span>
          <div className="note-text">
            <strong>Mental Model:</strong> Linear = Ek line mein khade log (0, 1, 2 index) • Non-Linear = Tree ki branches ya friends network • Hash-Based = Locker number se instant O(1) access.
          </div>
        </div>
      </div>
    )
  }

  // 2. Sequential Step Flow / Pipeline Mode
  return (
    <div className="enhanced-flow-pipeline">
      {title && <h4 className="flow-pipeline-title">{title}</h4>}
      <div className="flow-pipeline-track">
        {nodes.map((node, i) => {
          const isStr = typeof node === 'string'
          let stepLabel = `0${i + 1}`
          let content = isStr ? node : node.title || JSON.stringify(node)
          let subtext = isStr ? '' : node.desc || ''

          if (isStr) {
            const stepMatch = node.match(/^(\d+(?:-\d+)?):\s*(.+)$/)
            if (stepMatch) {
              stepLabel = stepMatch[1]
              content = stepMatch[2]
            }
          }

          return (
            <React.Fragment key={i}>
              <motion.div
                className="flow-pipeline-node"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flow-node-badge">{stepLabel}</div>
                <div className="flow-node-content">
                  <span className="flow-node-text">{content}</span>
                  {subtext && <span className="flow-node-sub">{subtext}</span>}
                </div>
              </motion.div>
              {i < nodes.length - 1 && (
                <div className="flow-pipeline-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}


// ─── Animated HTML Learning Flow ──────────────────────────────
export const AnimatedHtmlFlow = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const [active, setActive] = useState(-1)
  const [selected, setSelected] = useState(null)

  const steps = [
    {
      icon: '⌨️',
      title: 'Write HTML',
      tip: 'Start with clean tags and meaningful structure.',
      masti: 'HTML likhna recipe likhne jaisa hai. Ingredients tags hain, dish website hai.'
    },
    {
      icon: '🌐',
      title: 'Browser Reads Code',
      tip: 'The browser reads your HTML from top to bottom.',
      masti: 'Browser code ko kha nahi raha 😂 Sirf padh raha hai aur samajh raha hai.'
    },
    {
      icon: '🧠',
      title: 'DOM Tree Created',
      tip: 'HTML becomes a tree-like page structure.',
      masti: 'DOM ek family tree hai. Har tag ka parent-child relation hota hai.'
    },
    {
      icon: '🎨',
      title: 'Rendering Engine',
      tip: 'The engine calculates layout, style, and paint.',
      masti: 'Rendering engine designer ki tarah kaam karta hai: kahan kya dikhega, sab set karta hai.'
    },
    {
      icon: '🎉',
      title: 'Website Appears',
      tip: 'Your final webpage appears on the screen.',
      masti: 'Bas! Ab browser bolta hai: website ready hai boss 😎'
    }
  ]

  useEffect(() => {
    if (!inView) return
    setActive(0)
    const timer = setInterval(() => {
      setActive(current => {
        if (current >= steps.length - 1) {
          clearInterval(timer)
          return current
        }
        return current + 1
      })
    }, 460)
    return () => clearInterval(timer)
  }, [inView, steps.length])

  return (
    <div className="animated-html-flow" ref={ref}>
      <div className="animated-flow-head">
        <span>👨‍🏫 Masti Sir Explains</span>
        <strong>How HTML becomes a website</strong>
      </div>

      <div className="animated-flow-track" style={{ '--flow-progress': `${Math.max(active, 0) / (steps.length - 1) * 100}%` }}>
        {steps.map((step, index) => {
          const isActive = index <= active
          const isSelected = selected === index
          return (
            <React.Fragment key={step.title}>
              <motion.button
                type="button"
                className={`animated-flow-step${isActive ? ' active' : ''}${isSelected ? ' selected' : ''}`}
                onClick={() => setSelected(isSelected ? null : index)}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
              >
                <motion.span
                  className="animated-flow-icon"
                  animate={isActive ? { y: [0, -5, 0] } : { y: 0 }}
                  transition={{ duration: 0.45, repeat: isActive && index === active ? 1 : 0 }}
                >
                  {step.icon}
                </motion.span>
                <span className="animated-flow-title">{step.title}</span>
                <span className="animated-flow-tip">{step.tip}</span>
                <span className="animated-flow-tooltip">{step.tip}</span>
              </motion.button>

              {index < steps.length - 1 && (
                <motion.div
                  className={`animated-flow-arrow${index < active ? ' active' : ''}`}
                  aria-hidden="true"
                  animate={index < active ? { y: [0, 5, 0] } : { y: 0 }}
                  transition={{ duration: 0.42 }}
                >
                  ↓
                </motion.div>
              )}
            </React.Fragment>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        {selected !== null && (
          <motion.div
            key={selected}
            className="animated-flow-speech"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <strong>👨‍🏫 Masti Sir:</strong>
            <p>{steps[selected].masti}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active >= steps.length - 1 && (
          <motion.div
            className="animated-flow-complete"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <strong>🎉 Website Ready!</strong>
            <span>+20 XP Earned</span>
            <span>🏆 HTML Explorer</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Browser Pipeline ─────────────────────────────────────────
export const BrowserPipeline = ({ steps }) => {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setActive(s => (s + 1) % steps.length), 900)
    return () => clearInterval(t)
  }, [steps.length])
  return (
    <div className="browser-pipeline">
      {steps.map((step, i) => (
        <React.Fragment key={i}>
          <motion.div
            className={`pipeline-step${active === i ? ' active' : active > i ? ' done' : ''}`}
            animate={{ scale: active === i ? 1.06 : 1 }}
          >
            {active > i ? '✓' : <span>{i + 1}</span>}
            <small>{step}</small>
          </motion.div>
          {i < steps.length - 1 && <span className="pipeline-arrow">›</span>}
        </React.Fragment>
      ))}
    </div>
  )
}

// ─── Flashcard ────────────────────────────────────────────────
export const Flashcard = ({ q, a }) => {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className={`flashcard-wrap${flipped ? ' flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <span>❓</span>
          <strong>Question</strong>
          <p>{q}</p>
          <small>Click to flip</small>
        </div>
        <div className="flashcard-back">
          <span>✅</span>
          <strong>Answer</strong>
          <p>{a}</p>
          <small>Click to flip back</small>
        </div>
      </div>
    </div>
  )
}

// ─── Code Breakdown (hover tooltip) ──────────────────────────
export const CodeBreakdown = ({ parts }) => {
  const [hov, setHov] = useState(null)
  return (
    <div className="breakdown-wrap">
      <div className="breakdown-tokens">
        {parts.map((p, i) => (
          <span
            key={i}
            className={`breakdown-token${hov === i ? ' hov' : ''}`}
            style={{ '--tc': p.color }}
            onMouseEnter={() => setHov(i)}
            onMouseLeave={() => setHov(null)}
          >
            <code>{p.part}</code>
          </span>
        ))}
      </div>
      {hov !== null && (
        <motion.div
          className="breakdown-tip"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ borderColor: parts[hov].color }}
        >
          <b style={{ color: parts[hov].color }}>{parts[hov].part}</b>
          <p>{parts[hov].label}</p>
        </motion.div>
      )}
    </div>
  )
}

// ─── Interactive DOM Tree ─────────────────────────────────────
export const InteractiveDom = ({ nodes }) => {
  const [selected, setSelected] = useState(null)
  const descriptions = {
    Document: 'Root of every webpage. Iske andar hi sab kuch hota hai.',
    html: '<html> element — poore page ka container.',
    head: '<head> — metadata, title, CSS links yahan hote hain.',
    body: '<body> — jo kuch screen pe dikhta hai, sab yahan.',
    h1: '<h1> — sabse badi heading.',
    p: '<p> — paragraph.',
    div: '<div> — ek container box.',
    a: '<a> — link element.',
    img: '<img> — image element.',
    ul: '<ul> — unordered list.',
    li: '<li> — list item.',
    span: '<span> — inline container.',
    form: '<form> — form container.',
    input: '<input> — user input field.',
    button: '<button> — clickable button.',
  }
  const indent = (i) => i === 0 ? 0 : i === 1 ? 1 : i === 2 ? 2 : 3

  return (
    <div className="idom-wrap">
      <div className="idom-tree">
        {nodes.map((node, i) => (
          <div
            key={i}
            className={`idom-node${selected === node ? ' sel' : ''}`}
            style={{ paddingLeft: indent(i) * 18 + 8 }}
            onClick={() => setSelected(selected === node ? null : node)}
          >
            {i > 0 && <span className="idom-prefix">{i === 1 ? '' : '└─ '}</span>}
            <code>&lt;{node}{node === 'Document' ? '' : '>'}</code>
          </div>
        ))}
      </div>
      {selected && (
        <motion.div
          className="idom-desc"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <strong>&lt;{selected}&gt;</strong>
          <p>{descriptions[selected] || `${selected} element.`}</p>
        </motion.div>
      )}
    </div>
  )
}

// ─── Masti Sir Card ───────────────────────────────────────────
export const MastirSirCard = ({ quote, type = 'start' }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!quote || !visible) return
    const timer = setTimeout(() => setVisible(false), 5000)
    return () => clearTimeout(timer)
  }, [quote, visible])

  if (!quote || !visible) return null

  const configs = {
    start: {
      avatar: '👨🏫',
      label: 'Masti Sir',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: '#a78bfa',
      bg: 'rgba(167,139,250,0.08)'
    },
    hint: {
      avatar: '🤦',
      label: 'Masti Sir (Hint)',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      border: '#fbbf24',
      bg: 'rgba(251,191,36,0.08)'
    },
    success: {
      avatar: '🥳',
      label: 'Masti Sir',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      border: '#34d399',
      bg: 'rgba(52,211,153,0.08)'
    },
    mistake: {
      avatar: '😅',
      label: 'Masti Sir',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      border: '#f87171',
      bg: 'rgba(248,113,113,0.08)'
    }
  }

  const cfg = configs[type] || configs.start

  return (
    <motion.div
      className="mastir-card"
      style={{ borderColor: cfg.border, background: cfg.bg }}
      initial={{ opacity: 0, y: -12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
    >
      <div className="mastir-avatar-wrap">
        <div className="mastir-avatar" style={{ background: cfg.gradient }}>
          <span className="mastir-emoji">{cfg.avatar}</span>
        </div>
        <div className="mastir-badge">{cfg.label}</div>
      </div>
      <div className="mastir-speech-bubble">
        <pre className="mastir-text">{quote}</pre>
      </div>
      <button
        className="mastir-dismiss"
        onClick={() => setVisible(false)}
        aria-label="Dismiss Masti Sir message"
        title="Dismiss"
      >
        ×
      </button>
    </motion.div>
  )
}

// ─── Fun Fact Banner ──────────────────────────────────────────
export const FunFactBanner = ({ funFact, didYouKnow, proTip, memoryTrick }) => {
  const items = [
    funFact && { icon: '🎉', label: 'Fun Fact', text: funFact, color: '#d97706', bg: 'rgba(217,119,6,0.08)', border: 'rgba(217,119,6,0.25)' },
    didYouKnow && { icon: '💡', label: 'Did You Know?', text: didYouKnow, color: '#2563eb', bg: 'rgba(37,99,235,0.08)', border: 'rgba(37,99,235,0.25)' },
    proTip && { icon: '⚡', label: 'Pro Tip', text: proTip, color: '#16a34a', bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.25)' },
    memoryTrick && { icon: '🧠', label: 'Memory Trick', text: memoryTrick, color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.25)' },
  ].filter(Boolean)

  if (!items.length) return null

  return (
    <div className="funfact-banner-stack">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="funfact-banner"
          style={{ background: item.bg, borderColor: item.border }}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="funfact-icon-label">
            <span className="funfact-icon">{item.icon}</span>
            <strong className="funfact-label" style={{ color: item.color }}>{item.label}</strong>
          </div>
          <p className="funfact-text">{item.text}</p>
        </motion.div>
      ))}
    </div>
  )
}

// ─── XP Celebration ───────────────────────────────────────────
export const XPCelebration = ({ xp, badgeName, onDismiss }) => {
  const [show, setShow] = useState(true)
  if (!show) return null

  const handleDismiss = () => {
    setShow(false)
    onDismiss?.()
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="xp-celebration"
          initial={{ opacity: 0, scale: 0.5, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ type: 'spring', damping: 15, stiffness: 400 }}
        >
          <div className="xp-confetti">🎊 🎉 ✨ 🔥 ⭐</div>
          <div className="xp-amount">+{xp} XP</div>
          <div className="xp-label">Earned!</div>
          {badgeName && (
            <div className="xp-badge">
              <span>🏆</span>
              <span>{badgeName}</span>
            </div>
          )}
          <button className="xp-dismiss" onClick={handleDismiss}>
            Continue →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Badge Card ───────────────────────────────────────────────
export const BadgeCard = ({ name, icon = '🏆', description, earned = false }) => (
  <motion.div
    className={`badge-card${earned ? ' earned' : ' locked'}`}
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: earned ? 1.05 : 1.02 }}
  >
    <div className="badge-icon">{earned ? icon : '🔒'}</div>
    <div className="badge-info">
      <strong className="badge-name">{name}</strong>
      {description && <p className="badge-desc">{description}</p>}
      <span className={`badge-status ${earned ? 'earned' : 'locked'}`}>
        {earned ? '✅ Earned!' : '🔒 Locked'}
      </span>
    </div>
  </motion.div>
)

// ─── Story Explain Card ───────────────────────────────────────
export const StoryCard = ({ story }) => {
  if (!story) return null
  return (
    <motion.div
      className="story-explain-card"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="story-header">
        <span className="story-icon">📖</span>
        <strong>Masti Sir ki Kahani</strong>
      </div>
      <pre className="story-text">{story}</pre>
    </motion.div>
  )
}

// ─── Predict Output Quiz ──────────────────────────────────────
export const PredictQuiz = ({ quiz, onResult }) => {
  const [selected, setSelected] = useState('')
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)

  const check = () => {
    const ok = selected === quiz.answer
    setChecked(true)
    setCorrect(ok)
    onResult?.({ correct: ok, answer: selected, score: ok ? (quiz.points || 20) : 0 })
  }

  const retry = () => {
    setSelected('')
    setChecked(false)
    setCorrect(false)
  }

  return (
    <div className="predict-quiz">
      <div className="quiz-type-label">🔮 Predict Output</div>
      <p className="quiz-q">{quiz.question}</p>
      {quiz.code && (
        <pre className="predict-code"><code>{quiz.code}</code></pre>
      )}
      <div className="quiz-opts">
        {quiz.options.map(opt => (
          <button
            key={opt}
            disabled={checked}
            onClick={() => setSelected(opt)}
            className={`quiz-opt
              ${selected === opt ? 'sel' : ''}
              ${checked && opt === quiz.answer ? 'correct' : ''}
              ${checked && selected === opt && opt !== quiz.answer ? 'wrong' : ''}
            `}
          >
            {checked && opt === quiz.answer && '✓ '}
            {opt}
          </button>
        ))}
      </div>
      <div className="quiz-footer">
        {!checked ? (
          <button onClick={check} disabled={!selected} className="primary-btn compact">
            Submit Prediction →
          </button>
        ) : (
          <AnimatePresence>
            <motion.div
              className={`quiz-result ${correct ? 'good' : 'bad'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {correct
                ? '🎯 Prediction Sahi! +20 XP 🔥'
                : `❌ Prediction Galat! Sahi answer: ${quiz.answer}`}
              {quiz.explanation && <p className="quiz-explanation">{quiz.explanation}</p>}
              {!correct && (
                <button onClick={retry} className="ghost-btn compact" style={{ marginTop: 10 }}>
                  Retry
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

// ─── Drag and Drop Quiz ───────────────────────────────────────
export const DragQuiz = ({ quiz, onResult }) => {
  const [slots, setSlots] = useState(quiz.slots?.map(() => null) || [])
  const [available, setAvailable] = useState([...(quiz.items || [])])
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [dragging, setDragging] = useState(null)

  const handleDragStart = (item) => setDragging(item)
  const handleDrop = (slotIdx) => {
    if (dragging === null) return
    const newSlots = [...slots]
    const newAvail = available.filter(a => a !== dragging)
    // Return old slot item to available
    if (newSlots[slotIdx]) newAvail.push(newSlots[slotIdx])
    newSlots[slotIdx] = dragging
    setSlots(newSlots)
    setAvailable(newAvail)
    setDragging(null)
  }
  const handleReturnToPool = (slotIdx) => {
    if (checked) return
    const item = slots[slotIdx]
    if (!item) return
    const newSlots = [...slots]
    newSlots[slotIdx] = null
    setSlots(newSlots)
    setAvailable([...available, item])
  }
  const check = () => {
    const ok = slots.every((s, i) => s === (quiz.answers?.[i] || null))
    setChecked(true)
    setCorrect(ok)
    onResult?.({ correct: ok, answer: slots, score: ok ? (quiz.points || 25) : 0 })
  }
  const retry = () => {
    setSlots(quiz.slots?.map(() => null) || [])
    setAvailable([...(quiz.items || [])])
    setChecked(false)
    setCorrect(false)
  }

  return (
    <div className="drag-quiz">
      <div className="quiz-type-label">🧩 Drag & Drop</div>
      <p className="quiz-q">{quiz.question}</p>
      {quiz.template && <pre className="drag-template"><code>{quiz.template}</code></pre>}
      <div className="drag-pool">
        <strong>Available Tags:</strong>
        <div className="drag-items">
          {available.map((item, i) => (
            <div
              key={i}
              className="drag-item"
              draggable
              onDragStart={() => handleDragStart(item)}
            >
              <code>{item}</code>
            </div>
          ))}
        </div>
      </div>
      <div className="drag-slots">
        <strong>Drop Here:</strong>
        {(quiz.slots || []).map((slotLabel, i) => (
          <div
            key={i}
            className={`drag-slot${slots[i] ? ' filled' : ''}`}
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleDrop(i)}
          >
            <span className="slot-label">{slotLabel}</span>
            {slots[i] ? (
              <div
                className={`drag-item placed${checked ? (slots[i] === quiz.answers?.[i] ? ' correct' : ' wrong') : ''}`}
                onClick={() => handleReturnToPool(i)}
              >
                <code>{slots[i]}</code>
              </div>
            ) : (
              <span className="slot-empty">Drop here</span>
            )}
          </div>
        ))}
      </div>
      <div className="quiz-footer">
        {!checked ? (
          <button
            onClick={check}
            disabled={slots.some(s => s === null)}
            className="primary-btn compact"
          >
            Check Answers →
          </button>
        ) : (
          <motion.div
            className={`quiz-result ${correct ? 'good' : 'bad'}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            {correct ? '🎉 Sahi! Tags sahi jagah! +25 XP' : '❌ Kuch galat hai! Retry karo.'}
            {quiz.explanation && <p className="quiz-explanation">{quiz.explanation}</p>}
            {!correct && <button onClick={retry} className="ghost-btn compact" style={{ marginTop: 10 }}>Retry</button>}
          </motion.div>
        )}
      </div>
    </div>
  )
}

// ─── Why Need It Comparison Card ──────────────────────────────
export const WhyNeedItCard = ({ data }) => {
  if (!data) return null
  const title = data.title || 'Why Do We Need Data Structures?'
  const subtitle = data.subtitle || 'Real-world comparison: How organized memory structure transforms code performance.'

  // Normalize comparison items from any format
  let items = []
  if (Array.isArray(data.comparison) && data.comparison.length > 0) {
    items = data.comparison
  } else if (data.problem || data.solution || data.without || data.with) {
    items = [
      {
        withoutIcon: '🐌',
        without: data.problem || data.without || 'Slow, unorganized data access in memory.',
        detail: 'Data randomly bikhra rehta hai; searching aur processing mein O(N) linear delay hota hai.',
        withIcon: '⚡',
        with: data.solution || data.with || 'Instant access with optimal memory organization.',
        withDetail: 'Direct address pointer / indexing se O(1) ya O(log N) mein blazing-fast result milta hai.'
      },
      {
        withoutIcon: '💥',
        without: 'High CPU load & server crashes under heavy user scale.',
        detail: 'Jab millions of users aate hain toh unoptimized loops server crash kar dete hain.',
        withIcon: '🛡️',
        with: data.benefit || 'Predictable high scalability & rock-solid reliability.',
        withDetail: 'High-speed execution & millions of records ko memory leak ke bina smoothly handle karta hai.'
      },
      {
        withoutIcon: '❌',
        without: 'Unstructured code that fails tech interviews.',
        detail: 'Spaghetti logic jise debug ya scale karna almost impossible hota hai.',
        withIcon: '🚀',
        with: 'Clean mental model & FAANG interview standard.',
        withDetail: 'Top tech companies (Google, Amazon, Microsoft) ke core problem-solving standards ke saath 100% align hota hai.'
      }
    ]
  } else {
    items = [
      {
        withoutIcon: '🐌',
        without: 'Slow, unorganized data access in memory.',
        detail: 'Searching aur processing mein O(N) linear delay hota hai.',
        withIcon: '⚡',
        with: 'Instant access with optimal memory organization.',
        withDetail: 'O(1) ya O(log N) time mein instant results milte hain.'
      },
      {
        withoutIcon: '💥',
        without: 'High CPU load & memory wastage under scale.',
        detail: 'Traffic badhne par application slow ya freeze ho sakti hai.',
        withIcon: '🛡️',
        with: 'High scalability & minimal memory footprint.',
        withDetail: 'RAM ka efficient utilization aur minimum CPU cycles.'
      },
      {
        withoutIcon: '❌',
        without: 'Difficult debugging & unoptimized architecture.',
        detail: 'Complex state management mein bugs aate hain.',
        withIcon: '🚀',
        with: 'FAANG level code quality & clean problem solving.',
        withDetail: 'Standard algorithms aur data patterns se easily solve hota hai.'
      }
    ]
  }

  return (
    <div className="why-need-card">
      <div className="why-need-header">
        <div className="why-need-title-wrap">
          <span className="why-need-icon">🎯</span>
          <h3 className="why-need-title">{title}</h3>
        </div>
        {subtitle && <p className="why-need-subtitle">{subtitle}</p>}
      </div>

      <div className="why-need-grid">
        {/* Without DS Column */}
        <div className="why-need-col without">
          <div className="why-need-col-badge without-badge">
            <span>🔴 Without Data Structure</span>
          </div>
          <ul className="why-need-list">
            {items.map((item, idx) => (
              <li key={idx} className="why-need-item without-item">
                <span className="item-status-icon">{item.withoutIcon || '🔴'}</span>
                <div className="item-text-wrap">
                  <strong className="item-headline">{item.without}</strong>
                  {item.detail && <span className="item-subtext">{item.detail}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* VS Divider */}
        <div className="why-need-vs-badge" aria-hidden="true">
          <span>VS</span>
        </div>

        {/* With DS Column */}
        <div className="why-need-col with">
          <div className="why-need-col-badge with-badge">
            <span>🟢 With Data Structure</span>
          </div>
          <ul className="why-need-list">
            {items.map((item, idx) => (
              <li key={idx} className="why-need-item with-item">
                <span className="item-status-icon">{item.withIcon || '🟢'}</span>
                <div className="item-text-wrap">
                  <strong className="item-headline">{item.with}</strong>
                  {item.withDetail && <span className="item-subtext">{item.withDetail}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// ─── DSA Architectural Foundation & Taxonomy Card ─────────────
export const DsaArchitectureTreeCard = ({ data }) => {
  if (!data) return null
  const {
    title = '🧠 WHAT IS DSA?',
    subtitle = 'The architectural bridge between raw computer memory and scalable software systems.',
    dataStructuresCategories = [
      {
        type: 'Linear Data Structures',
        desc: 'Elements arranged sequentially in memory',
        items: ['Array', 'Linked List', 'Stack', 'Queue']
      },
      {
        type: 'Non-Linear Data Structures',
        desc: 'Hierarchical & interconnected nodes in memory',
        items: ['Tree', 'Heap', 'Graph']
      },
      {
        type: 'Hash-Based',
        desc: 'Direct key-value mapping with O(1) average lookup',
        items: ['Hash Table']
      }
    ],
    algorithmsCategories = [
      {
        type: 'Searching',
        desc: 'Find elements in collections',
        items: ['Binary Search']
      },
      {
        type: 'Sorting',
        desc: 'Arrange data in optimal order',
        items: ['Quick Sort', 'Merge Sort']
      },
      {
        type: 'Traversal',
        desc: 'Systematically visit every element or node',
        items: ['Breadth-First Search (BFS)']
      },
      {
        type: 'Shortest Path',
        desc: 'Find minimum cost routes & optimal paths',
        items: ["Dijkstra's Algorithm"]
      }
    ],
    foundationHeading = '🚀 A Fundamental Foundation of Efficient Software',
    foundationIntro = 'DSA is one of the fundamental building blocks behind modern efficient software systems.',
    realWorldFoundation = [
      { app: '🗺️ GPS & Google Maps', concepts: 'Graphs and shortest-path algorithms help represent locations and find efficient routes.' },
      { app: '🔍 Search Engines', concepts: 'Efficient searching, ranking, indexing, and graph-based techniques are important for processing huge amounts of information.' },
      { app: '🤖 AI & LLM Systems', concepts: 'Data structures and algorithms optimize state processing, token vectors, and tensor operations.' },
      { app: '🎮 Gaming & 3D Physics', concepts: 'Algorithms and spatial data structures manage rendering, collisions, and state updates.' },
      { app: '🗄️ Databases', concepts: 'Trees, hashing, indexing, and other data structures help organize and retrieve large amounts of data efficiently.' },
      { app: '🌐 High-Scale Web Applications', concepts: 'Caching, hashing, message queues, and algorithms help serve millions of requests reliably.' }
    ],
    goldenFormula = 'Right Data Structure + Right Algorithm = Efficient Solution'
  } = data

  return (
    <div className="dsa-foundation-master-card">
      {/* Structured Categorization Grid */}
      <div className="dsa-taxonomy-grid">
        {/* Data Structures Categories */}
        <div className="taxonomy-card ds">
          <div className="taxonomy-card-head">
            <span className="taxonomy-icon">📦</span>
            <h4>Data Structures</h4>
          </div>
          <div className="taxonomy-groups">
            {dataStructuresCategories.map((cat, idx) => (
              <div key={idx} className="taxonomy-group-item">
                <div className="group-info">
                  <strong className="group-name">{cat.type}</strong>
                </div>
                <div className="group-tags">
                  {cat.items.map((item, i) => (
                    <span key={i} className="taxonomy-tag ds">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Algorithms Categories */}
        <div className="taxonomy-card algo">
          <div className="taxonomy-card-head">
            <span className="taxonomy-icon">⚙️</span>
            <h4>Algorithms</h4>
          </div>
          <div className="taxonomy-groups">
            {algorithmsCategories.map((cat, idx) => (
              <div key={idx} className="taxonomy-group-item">
                <div className="group-info">
                  <strong className="group-name">{cat.type}</strong>
                </div>
                <div className="group-tags">
                  {cat.items.map((item, i) => (
                    <span key={i} className="taxonomy-tag algo">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-World Software Foundation Mapping */}
      <div className="dsa-realworld-foundation-box">
        <div className="foundation-box-head">
          <span className="foundation-badge">{foundationHeading}</span>
          <p className="foundation-sub-intro">{foundationIntro}</p>
        </div>
        <div className="foundation-mapping-grid">
          {realWorldFoundation.map((rw, idx) => (
            <div key={idx} className="foundation-mapping-card">
              <div className="mapping-app">
                <strong>{rw.app}</strong>
              </div>
              <div className="mapping-arrow">→</div>
              <div className="mapping-concepts">
                <span>{rw.concepts}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Rewritten Why Do We Need DSA Component ───────────────────
export const DsaWhyNeedItRewritten = ({ data }) => {
  if (!data) return null
  const {
    heading = 'Why Do We Need DSA?',
    naiveApproach = {
      title: '🔴 Naive / Poor Approach',
      desc: 'A problem can often be solved using a simple approach, but that approach may become slow or consume more resources when the input size becomes large.'
    },
    appropriateApproach = {
      title: '🟢 Appropriate Data Structure + Algorithm',
      desc: 'Choosing the right data structure and algorithm can significantly improve the performance, scalability, and resource usage of a solution.'
    },
    benefits = [
      { icon: '⚡', title: 'Performance', desc: 'Reduce unnecessary operations and make programs faster.' },
      { icon: '📈', title: 'Scalability', desc: 'Efficient solutions handle larger amounts of data more effectively.' },
      { icon: '💾', title: 'Resource Efficiency', desc: 'Good algorithms can reduce unnecessary memory and CPU usage.' },
      { icon: '🧠', title: 'Problem Solving', desc: 'DSA provides structured ways to approach programming problems.' },
      { icon: '💼', title: 'Technical Interviews', desc: 'DSA is an important part of many software engineering and coding-focused technical interviews.' }
    ]
  } = data

  return (
    <div className="dsa-why-need-master">
      <div className="why-need-approaches-grid">
        <div className="approach-card naive">
          <span className="approach-tag naive-tag">{naiveApproach.title}</span>
          <p>{naiveApproach.desc}</p>
        </div>
        <div className="approach-card appropriate">
          <span className="approach-tag appropriate-tag">{appropriateApproach.title}</span>
          <p>{appropriateApproach.desc}</p>
        </div>
      </div>

      <div className="why-need-benefits-grid">
        <span className="benefits-title">Key Core Benefits of DSA:</span>
        <div className="benefits-cards">
          {benefits.map((b, idx) => (
            <div key={idx} className="benefit-card">
              <span className="benefit-icon">{b.icon}</span>
              <div className="benefit-text">
                <strong>{b.title}</strong>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Linear Search vs Binary Search Comparison Card ───────────
export const DsaSearchComparisonCard = ({ data }) => {
  if (!data) return null
  const {
    title = '🔎 Finding a Number',
    scenario = 'Suppose we have 1,000,000 sorted numbers:',
    linearSearch = {
      title: 'Linear Search',
      flow: 'Start → Check → Check → Check → Check → ...',
      worstCase: '1,000,000 checks',
      complexity: 'O(N)'
    },
    binarySearch = {
      title: 'Binary Search',
      flow: '1,000,000 ↓ 500,000 ↓ 250,000 ↓ ... ↓ Found',
      worstCase: 'Approximately 20 comparisons',
      complexity: 'O(log N)'
    },
    note = 'This is why choosing the right algorithm matters.',
    caveat = '⚠️ Note: Binary Search requires the data to be sorted (or otherwise satisfy the required ordering condition).'
  } = data

  return (
    <div className="dsa-search-comparison-card">
      <div className="comparison-head">
        <h4>{title}</h4>
        <p className="scenario-text">{scenario}</p>
      </div>

      <div className="search-methods-grid">
        {/* Linear Search */}
        <div className="search-method-box linear">
          <div className="method-badge linear-badge">{linearSearch.title}</div>
          <div className="method-flow">{linearSearch.flow}</div>
          <div className="method-metrics">
            <div className="metric-row">
              <span>Worst Case:</span>
              <strong>{linearSearch.worstCase}</strong>
            </div>
            <div className="metric-row">
              <span>Complexity:</span>
              <strong className="complexity-tag">{linearSearch.complexity}</strong>
            </div>
          </div>
        </div>

        {/* Binary Search */}
        <div className="search-method-box binary">
          <div className="method-badge binary-badge">{binarySearch.title}</div>
          <div className="method-flow binary-flow">{binarySearch.flow}</div>
          <div className="method-metrics">
            <div className="metric-row">
              <span>Worst Case:</span>
              <strong>{binarySearch.worstCase}</strong>
            </div>
            <div className="metric-row">
              <span>Complexity:</span>
              <strong className="complexity-tag green">{binarySearch.complexity}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="comparison-footer">
        <div className="conclusion-note">
          <span className="star-icon">⭐</span>
          <strong>{note}</strong>
        </div>
        <div className="caveat-box">
          <p>{caveat}</p>
        </div>
      </div>
    </div>
  )
}

// ─── 2-Column Data Structure vs Algorithm Table ───────────────
export const DsaDsVsAlgoTable = ({ data }) => {
  if (!data) return null
  const { ds, algo } = data

  return (
    <div className="dsa-dsvsalgo-table">
      <div className="dsvsalgo-col ds">
        <div className="dsvsalgo-head">
          <span className="col-title">{ds.title || '📦 Data Structure'}</span>
        </div>
        <ul className="dsvsalgo-list">
          {ds.points?.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </div>

      <div className="dsvsalgo-col algo">
        <div className="dsvsalgo-head">
          <span className="col-title">{algo.title || '⚙️ Algorithm'}</span>
        </div>
        <ul className="dsvsalgo-list">
          {algo.points?.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ─── Concept Mapping Card (Kitchen Analogy) ───────────────────
export const DsaConceptMappingCard = ({ mapping }) => {
  if (!Array.isArray(mapping) || mapping.length === 0) return null

  return (
    <div className="dsa-concept-mapping-card">
      <span className="mapping-label">🧠 Concept Mapping (Kitchen → Code):</span>
      <div className="concept-mapping-grid">
        {mapping.map((m, idx) => (
          <div key={idx} className="concept-item">
            <span className="concept-left">
              <span>{m.emoji}</span>
              <strong>{m.item}</strong>
            </span>
            <span className="concept-arrow">→</span>
            <span className="concept-right">
              <strong>{m.mapsTo}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Visual Diagram: DSA Flow Architecture Card ───────────────
export const DsaFlowArchitectureCard = ({ data }) => {
  const title = data?.title || 'Visual Diagram — Flow Architecture'
  const phases = data?.phases || null
  const steps = data?.steps || [
    { icon: '🧠', label: 'PROBLEM', sub: 'Understand the Problem' },
    { icon: '📦', label: 'DATA STRUCTURE', sub: 'Organize the Data' },
    { icon: '⚙️', label: 'ALGORITHM', sub: 'Solve the Problem' },
    { icon: '💻', label: 'CODE', sub: 'Implement in Language' },
    { icon: '⏱️', label: 'COMPLEXITY ANALYSIS', sub: 'Time & Space' },
    { icon: '🚀', label: 'OPTIMIZE', sub: 'Refine Bottlenecks' },
    { icon: '✅', label: 'SOLUTION', sub: 'Scalable Output' }
  ]

  return (
    <div className="dsa-flow-architecture-card">
      <div className="flow-arch-head">
        <h4>{title}</h4>
      </div>
      {phases ? (
        <div className="flow-arch-phases-grid">
          {phases.map((ph, pIdx) => (
            <div key={pIdx} className="flow-phase-box">
              <span className="phase-badge">{ph.title}</span>
              <div className="flow-arch-pipeline">
                {ph.steps.map((st, idx) => (
                  <div key={idx} className="flow-step-wrap">
                    <div className="flow-arch-node">
                      <span className="node-icon">{st.icon}</span>
                      <strong className="node-label">{st.label}</strong>
                      <span className="node-sub">{st.sub}</span>
                    </div>
                    {idx < ph.steps.length - 1 && (
                      <div className="flow-arrow-down" aria-hidden="true">
                        <span>↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flow-arch-pipeline">
          {steps.map((st, idx) => (
            <div key={idx} className="flow-step-wrap">
              <div className="flow-arch-node">
                <span className="node-icon">{st.icon}</span>
                <strong className="node-label">{st.label}</strong>
                <span className="node-sub">{st.sub}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="flow-arrow-down" aria-hidden="true">
                  <span>↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Step-by-Step Dry Run Card ────────────────────────────────
export const DsaDryRunCard = ({ data }) => {
  if (!data) return null
  const { title = '🔍 Dry Run', input, target, steps = [] } = data

  return (
    <div className="dsa-dry-run-card">
      <div className="dry-run-header">
        <h4>{title}</h4>
        {input && (
          <div className="dry-run-meta">
            <span>Input: <code>{input}</code></span>
            {target !== undefined && <span>Target: <code>{target}</code></span>}
          </div>
        )}
      </div>
      <div className="dry-run-table-wrap">
        <table className="dry-run-table">
          <thead>
            <tr>
              <th>Step</th>
              <th>State / Condition</th>
              <th>Evaluation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s, idx) => (
              <tr key={idx} className={s.action?.includes('Found') || s.action?.includes('✅') ? 'found-row' : ''}>
                <td><strong>Step {s.step || idx + 1}</strong></td>
                <td><code>{s.condition}</code></td>
                <td>{s.evaluation}</td>
                <td><strong>{s.action}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Memory Trick Card ────────────────────────────────────────
export const DsaMemoryTrickCard = ({ text }) => {
  if (!text) return null

  return (
    <div className="dsa-memory-trick-card">
      <div className="trick-head">
        <span className="trick-icon">🧠</span>
        <h4>Memory Trick</h4>
      </div>
      <div className="trick-body">
        <pre>{text}</pre>
      </div>
    </div>
  )
}

// ─── Quick Revision Card ──────────────────────────────────────
export const DsaQuickRevisionCard = ({ data }) => {
  if (!data) return null
  const { title = '🔄 Quick Revision', points = [], items = [] } = data

  return (
    <div className="dsa-quick-revision-card">
      <div className="rev-head">
        <h4>{title}</h4>
      </div>
      {items.length > 0 ? (
        <div className="rev-items-grid">
          {items.map((it, idx) => (
            <div key={idx} className="rev-item-card">
              <span className="rev-item-emoji">{it.emoji || '✔'}</span>
              <div className="rev-item-text">
                <strong className="rev-item-title">{it.title}</strong>
                <p className="rev-item-desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="rev-list">
          {points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ─── Common Data Structure Operations Grid ────────────────────
export const DsaOperationsGrid = ({ operations }) => {
  const defaultOps = [
    { icon: '🎯', name: 'Access', desc: 'Retrieve an existing element.' },
    { icon: '🔍', search: true, name: 'Search', desc: 'Find a specific element.' },
    { icon: '➕', name: 'Insert', desc: 'Add new data.' },
    { icon: '🗑️', name: 'Delete', desc: 'Remove existing data.' },
    { icon: '✏️', name: 'Update', desc: 'Modify existing data.' },
    { icon: '🔄', name: 'Traverse', desc: 'Visit elements systematically.' }
  ]
  const opsList = operations || defaultOps

  return (
    <div className="dsa-operations-grid-card">
      <div className="ops-card-head">
        <span className="ops-badge">Core Operations</span>
        <h4>Common Data Structure Operations</h4>
      </div>
      <div className="ops-items-grid">
        {opsList.map((op, idx) => (
          <div key={idx} className="op-item-box">
            <span className="op-icon">{op.icon}</span>
            <div className="op-info">
              <strong className="op-name">{op.name}</strong>
              <span className="op-desc">{op.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Why Do We Need Data Structures Card ──────────────────────
export const DsaWhyNeedDsCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Why Do We Need Data Structures?',
    subtitle = 'Different ways of organizing data can make different operations easier, faster, or more memory-efficient.',
    cards = [
      { icon: '⚡', title: 'Efficient Access', desc: 'The right data structure can make frequently needed data easier to access.' },
      { icon: '🔎', title: 'Efficient Searching', desc: 'Some data structures support faster searching than others.' },
      { icon: '➕', title: 'Efficient Insertion', desc: 'Some structures are designed for frequent insertion of elements.' },
      { icon: '🗑️', title: 'Efficient Deletion', desc: 'Some structures make removing data easier depending on how they are organized.' },
      { icon: '💾', title: 'Resource Efficiency', desc: 'Choosing an appropriate structure can reduce unnecessary memory or computation.' },
      { icon: '📈', title: 'Scalability', desc: 'Good data organization becomes increasingly important as the amount of data grows.' }
    ]
  } = data

  return (
    <div className="dsa-why-need-ds-card">
      <div className="why-need-ds-head">
        <h4>{title}</h4>
        {subtitle && <p className="why-need-ds-sub">{subtitle}</p>}
      </div>
      <div className="why-need-ds-grid">
        {cards.map((c, idx) => (
          <div key={idx} className="why-need-ds-item">
            <span className="why-ds-icon">{c.icon}</span>
            <div className="why-ds-content">
              <strong>{c.title}</strong>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Same Data, Different Organization Card ───────────────────
export const DsaSameDataDiffOrgCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Same Data, Different Organization',
    intro = 'The data itself can remain the same, but how we organize it can change how efficiently we perform operations on it.',
    scenario = 'Suppose we have 1,000,000 student records:',
    approach1 = {
      title: 'Approach 1 — Sequential Search',
      flow: ['Student records', 'Check one by one', 'Potentially many comparisons'],
      complexity: 'O(N)'
    },
    approach2 = {
      title: 'Approach 2 — Key-Based Lookup',
      flow: ['Student ID', 'Hash-based structure', 'Average-case O(1) lookup'],
      complexity: 'O(1) Avg'
    },
    note = 'Note: O(1) is average-case for typical hash-table lookup, not literally "instant". Different structures have different trade-offs.'
  } = data

  return (
    <div className="dsa-same-data-card">
      <div className="same-data-head">
        <h4>{title}</h4>
        <p>{intro}</p>
      </div>
      <div className="same-data-scenario">
        <strong>{scenario}</strong>
      </div>
      <div className="same-data-approaches-grid">
        <div className="same-data-col seq">
          <div className="col-badge seq-badge">{approach1.title}</div>
          <div className="flow-steps-vert">
            {approach1.flow.map((step, idx) => (
              <div key={idx} className="flow-step-item">
                <span>{step}</span>
                {idx < approach1.flow.length - 1 && <span className="step-arrow">↓</span>}
              </div>
            ))}
          </div>
          <div className="complexity-badge-wrap">
            <span>Complexity: <strong className="comp-tag orange">{approach1.complexity}</strong></span>
          </div>
        </div>

        <div className="same-data-col hash">
          <div className="col-badge hash-badge">{approach2.title}</div>
          <div className="flow-steps-vert">
            {approach2.flow.map((step, idx) => (
              <div key={idx} className="flow-step-item">
                <span>{step}</span>
                {idx < approach2.flow.length - 1 && <span className="step-arrow">↓</span>}
              </div>
            ))}
          </div>
          <div className="complexity-badge-wrap">
            <span>Complexity: <strong className="comp-tag green">{approach2.complexity}</strong></span>
          </div>
        </div>
      </div>
      {note && (
        <div className="same-data-note">
          <p>💡 {note}</p>
        </div>
      )}
    </div>
  )
}

// ─── No Single "Best" Data Structure Card ─────────────────────
export const DsaNoBestDsCard = ({ data }) => {
  if (!data) return null
  const {
    title = '💡 There Is No Single “Best” Data Structure',
    text = 'There is no single data structure that is best for every problem. The right choice depends on the operations we need, the amount of data, memory constraints, and performance requirements.',
    useCases = [
      { op: 'Fast indexed access', ds: 'Array' },
      { op: 'Key-based lookup', ds: 'Hash Table / Map' },
      { op: 'LIFO operations', ds: 'Stack' },
      { op: 'FIFO operations', ds: 'Queue' }
    ]
  } = data

  return (
    <div className="dsa-no-best-card">
      <div className="no-best-head">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="no-best-mappings-grid">
        {useCases.map((uc, idx) => (
          <div key={idx} className="no-best-item">
            <span className="no-best-op">{uc.op}</span>
            <span className="no-best-arrow">→</span>
            <strong className="no-best-ds">{uc.ds}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Algorithm Characteristics Card ───────────────────────────
export const DsaAlgoCharacteristicsCard = ({ items, data }) => {
  const cardData = data || (Array.isArray(items) ? { items } : items) || {}
  const title = cardData.title || 'Essential Characteristics of a Good Algorithm'
  const intro = cardData.intro || null
  const defaultItems = [
    { title: 'Finite', desc: 'It eventually stops and produces a result.', icon: '🛑' },
    { title: 'Clear', desc: 'Each step has an unambiguous, definite meaning.', icon: '🔍' },
    { title: 'Ordered', desc: 'Steps are performed in a strict logical sequence.', icon: '🔢' },
    { title: 'Goal-Oriented', desc: 'Designed to solve a specific problem or task.', icon: '🎯' }
  ]
  const list = cardData.items || defaultItems

  return (
    <div className="dsa-algo-characteristics-card">
      <span className="char-badge">Key Properties</span>
      <h4>{title}</h4>
      {intro && (
        <div className="char-intro-box">
          <p className="char-intro-lead">{intro.lead || 'Writing steps is not enough. A useful algorithm should be:'}</p>
          {intro.points && (
            <div className="char-intro-chips">
              {intro.points.map((pt, pIdx) => (
                <div key={pIdx} className="char-intro-chip">
                  <span className="chip-icon">{pt.icon}</span>
                  <span className="chip-text">{pt.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="char-grid">
        {list.map((c, idx) => (
          <div key={idx} className="char-item">
            <span className="char-icon">{c.icon}</span>
            <div className="char-info">
              <strong>{c.title}</strong>
              <p>{c.desc}</p>
              {c.example && (
                <div className="char-item-example">
                  <span className="ex-tag">Example:</span> <code>{c.example}</code>
                </div>
              )}
              {c.badGood && (
                <div className="char-bad-good">
                  <div className="bg-row bad"><span className="bg-label">❌ Bad:</span> {c.badGood.bad}</div>
                  <div className="bg-row good"><span className="bg-label">✅ Good:</span> {c.badGood.good}</div>
                </div>
              )}
              {c.note && (
                <div className="char-item-note">
                  <small>💡 {c.note}</small>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Simple Example Card (Finding Max of Two Numbers) ─────────
export const DsaSimpleExampleCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Simple Example: Finding Largest of Two Numbers',
    problem = 'Suppose you want to find the largest number between two numbers.',
    steps = [
      'Take two numbers (e.g. 45 and 89).',
      'Compare them (is 45 > 89?).',
      'If the first number is greater, choose it.',
      'Otherwise, choose the second number.',
      'Display the result.'
    ],
    io = {
      input: '45, 89',
      process: 'Compare 45 and 89',
      output: '89'
    }
  } = data

  return (
    <div className="dsa-simple-example-card">
      <div className="simple-ex-head">
        <span className="simple-ex-badge">Real-World Logic</span>
        <h4>{title}</h4>
        <p>{problem}</p>
      </div>

      <div className="simple-ex-steps">
        <strong className="steps-title">Step-by-Step Procedure:</strong>
        <ol className="steps-list">
          {steps.map((st, idx) => (
            <li key={idx}><span>{st}</span></li>
          ))}
        </ol>
      </div>

      <div className="simple-ex-io-grid">
        <div className="io-box in">
          <span className="io-label">📥 Input</span>
          <strong className="io-val">{io.input}</strong>
        </div>
        <div className="io-box proc">
          <span className="io-label">⚙️ Process</span>
          <strong className="io-val">{io.process}</strong>
        </div>
        <div className="io-box out">
          <span className="io-label">📤 Output</span>
          <strong className="io-val">{io.output}</strong>
        </div>
      </div>
    </div>
  )
}

// ─── Why Do We Need Algorithms Card ───────────────────────────
export const DsaWhyNeedAlgoCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Why Do We Need Algorithms?',
    subtitle = 'Algorithms give us a structured way to solve problems instead of relying on random or repetitive steps.',
    cards = [
      { icon: '🧠', title: 'Structured Problem Solving', desc: 'Algorithms break complex problems into smaller, logical steps.' },
      { icon: '⚡', title: 'Efficiency', desc: 'A better algorithm can reduce unnecessary operations and improve execution time.' },
      { icon: '📈', title: 'Scalability', desc: 'Efficient algorithms become increasingly important as input size grows.' },
      { icon: '🔁', title: 'Repeatability', desc: 'Once defined, an algorithm can be followed repeatedly for similar problems.' },
      { icon: '🧪', title: 'Correctness', desc: 'A well-designed algorithm should produce the expected result for valid inputs.' },
      { icon: '💻', title: 'Implementation', desc: 'Algorithms provide a logical plan that can later be implemented in code.' }
    ],
    takeaway
  } = data

  return (
    <div className="dsa-why-need-ds-card">
      <div className="why-need-ds-head">
        <h4>{title}</h4>
        {subtitle && <p className="why-need-ds-sub">{subtitle}</p>}
      </div>
      <div className="why-need-ds-grid">
        {cards.map((c, idx) => (
          <div key={idx} className="why-need-ds-item">
            <span className="why-ds-icon">{c.icon}</span>
            <div className="why-ds-content">
              <strong>{c.title}</strong>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
      {takeaway && (
        <div className="comp-takeaway-box" style={{ marginTop: 14 }}>
          <p>{takeaway}</p>
        </div>
      )}
    </div>
  )
}

// ─── Same Problem, Different Algorithms Card ───────────────────
export const DsaSameProblemDiffAlgoCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Same Problem, Different Algorithms',
    intro = 'The same problem can often be solved using different algorithms. The algorithms may differ in speed, memory usage, simplicity, or other trade-offs.',
    problem = 'Problem: Find a number in a collection.',
    linearSearch = {
      name: 'Linear Search',
      desc: 'Check elements one by one from start to finish.',
      visual: '[10] → [20] → [30] → [40] → [50]',
      checks: '10 ❌ | 20 ❌ | 30 ❌ | 40 ❌ | 50 ✅',
      complexity: 'O(N)'
    },
    binarySearch = {
      name: 'Binary Search',
      desc: 'Repeatedly divide a sorted search space in half.',
      visual: '[10, 20, 30, 40, 50, 60, 70]',
      checks: 'Middle ↓ Eliminate half ↓ Middle ↓ Found ✅',
      complexity: 'O(log N)'
    },
    note = '⚠️ Important: Binary Search requires the data to be sorted or otherwise satisfy the required ordering condition.',
    conclusion = 'Choosing an appropriate algorithm can make a major difference when the input becomes large.'
  } = data

  return (
    <div className="dsa-search-comparison-card">
      <div className="comparison-head">
        <h4>{title}</h4>
        <p className="scenario-text">{intro}</p>
        <div className="problem-statement-badge">
          <strong>🎯 {problem}</strong>
        </div>
      </div>

      <div className="search-methods-grid">
        <div className="search-method-box linear">
          <div className="method-badge">🔍 {linearSearch.name}</div>
          <p className="method-desc-text">{linearSearch.desc}</p>
          <div className="method-flow">{linearSearch.visual}</div>
          <div className="method-check-line"><code>{linearSearch.checks}</code></div>
          <div className="method-metrics">
            <div className="metric-row">
              <span>Time Complexity:</span>
              <span className="complexity-tag">{linearSearch.complexity}</span>
            </div>
          </div>
        </div>

        <div className="search-method-box binary">
          <div className="method-badge">⚡ {binarySearch.name}</div>
          <p className="method-desc-text">{binarySearch.desc}</p>
          <div className="method-flow">{binarySearch.visual}</div>
          <div className="method-check-line"><code>{binarySearch.checks}</code></div>
          <div className="method-metrics">
            <div className="metric-row">
              <span>Time Complexity:</span>
              <span className="complexity-tag green">{binarySearch.complexity}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="comparison-footer">
        <div className="conclusion-note">
          <span>✨</span>
          <strong>{conclusion}</strong>
        </div>
        {note && (
          <div className="caveat-box">
            <p>{note}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Algorithm vs Program Card ────────────────────────────────
export const DsaAlgoVsProgramCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Algorithm vs Program',
    algo = {
      title: '⚙️ Algorithm',
      desc: 'The logical step-by-step solution to a problem.',
      example: 'Example: Compare two numbers and return the larger one.'
    },
    prog = {
      title: '💻 Program',
      desc: 'The algorithm implemented using a specific programming language.',
      example: 'Example: JavaScript / Python code executing those steps.'
    },
    keyTakeaway = 'An algorithm is a conceptual logic and is not tied to one single programming language.'
  } = data

  return (
    <div className="dsa-algo-program-card">
      <h4>{title}</h4>
      <div className="algo-program-grid">
        <div className="algo-program-col algo">
          <strong className="ap-col-title">{algo.title}</strong>
          <p className="ap-col-desc">{algo.desc}</p>
          <span className="ap-col-ex">{algo.example}</span>
        </div>
        <div className="algo-program-col prog">
          <strong className="ap-col-title">{prog.title}</strong>
          <p className="ap-col-desc">{prog.desc}</p>
          <span className="ap-col-ex">{prog.example}</span>
        </div>
      </div>
      {keyTakeaway && (
        <div className="algo-program-takeaway">
          <span>💡 <strong>Key Idea:</strong> {keyTakeaway}</span>
        </div>
      )}
    </div>
  )
}

// ─── 📦 Data Structure + ⚙️ Algorithm Connection Card ─────────
export const DsaDsPlusAlgoCard = ({ data }) => {
  if (!data) return null
  const {
    title = '📦 Data Structure + ⚙️ Algorithm',
    ds = { title: '📦 Data Structure', q: 'How should we organize the data in memory?' },
    algo = { title: '⚙️ Algorithm', q: 'How should we solve the problem using that data?' },
    formula = 'Array + Linear Search = Find an element by checking items one by one.'
  } = data

  return (
    <div className="dsa-ds-algo-combo-card">
      <h4>{title}</h4>
      <div className="combo-cols-grid">
        <div className="combo-box ds">
          <strong>{ds.title}</strong>
          <p>“{ds.q}”</p>
        </div>
        <div className="combo-plus">+</div>
        <div className="combo-box algo">
          <strong>{algo.title}</strong>
          <p>“{algo.q}”</p>
        </div>
      </div>
      {formula && (
        <div className="combo-formula-line">
          <span className="formula-spark">✨</span>
          <strong className="formula-text">{formula}</strong>
        </div>
      )}
    </div>
  )
}

// ─── The Real Reason We Need DSA (Input Scale Concept Card) ────
export const DsaInputScaleConceptCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'The Real Reason We Need DSA',
    tiers = [
      { tag: 'Small Input', badgeClass: 'green', desc: 'Almost any reasonable approach may feel fast.' },
      { tag: 'Large Input', badgeClass: 'amber', desc: 'Differences between approaches become significant.' },
      { tag: 'Very Large Input', badgeClass: 'red', desc: 'Efficient data structures and algorithms become increasingly important.' }
    ],
    note = 'An approach that works well for 100 items may become impractical when the input contains millions of items.'
  } = data

  return (
    <div className="dsa-input-scale-card">
      <div className="scale-card-head">
        <span className="scale-badge">Scaling Law</span>
        <h4>{title}</h4>
      </div>
      <div className="scale-tiers-grid">
        {tiers.map((t, idx) => (
          <div key={idx} className={`scale-tier-box ${t.badgeClass}`}>
            <span className="tier-tag">{t.tag}</span>
            <span className="tier-arrow">↓</span>
            <p className="tier-desc">{t.desc}</p>
          </div>
        ))}
      </div>
      {note && (
        <div className="scale-note">
          <span>💡</span>
          <strong>{note}</strong>
        </div>
      )}
    </div>
  )
}

// ─── Inefficient vs Efficient Approach Comparison Card ────────
export const DsaApproachComparisonCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'What Happens Without an Efficient Approach?',
    inefficient = {
      title: '🔴 Inefficient Approach',
      steps: ['Problem', 'Brute-force / unnecessary operations', 'More work as input grows', 'Higher execution cost']
    },
    efficient = {
      title: '🟢 Efficient DSA Approach',
      steps: ['Problem', 'Choose suitable Data Structure', 'Choose suitable Algorithm', 'Reduce unnecessary work', 'Better performance']
    },
    note = 'The point is not that programs can exist “without data structures” — the point is poor choices vs appropriate choices.'
  } = data

  return (
    <div className="dsa-approach-compare-card">
      <div className="approach-head">
        <h4>{title}</h4>
      </div>
      <div className="approach-cols-grid">
        <div className="approach-col ineff">
          <strong className="approach-col-title">{inefficient.title}</strong>
          <div className="approach-steps-vert">
            {inefficient.steps.map((st, i) => (
              <div key={i} className="approach-step-item">
                <span>{st}</span>
                {i < inefficient.steps.length - 1 && <span className="step-arrow">↓</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="approach-col eff">
          <strong className="approach-col-title">{efficient.title}</strong>
          <div className="approach-steps-vert">
            {efficient.steps.map((st, i) => (
              <div key={i} className="approach-step-item">
                <span>{st}</span>
                {i < efficient.steps.length - 1 && <span className="step-arrow">↓</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
      {note && (
        <div className="approach-footer-note">
          <span>💡 <strong>Key Takeaway:</strong> {note}</span>
        </div>
      )}
    </div>
  )
}

// ─── Why Complexity Matters Card ──────────────────────────────
export const DsaComplexityMattersCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Why Complexity Matters',
    linearChecks = [
      { n: 'N = 10', result: 'Up to 10 checks' },
      { n: 'N = 1,000', result: 'Up to 1,000 checks' },
      { n: 'N = 1,000,000', result: 'Up to 1,000,000 checks' }
    ],
    binaryCheck = {
      n: 'N = 1,000,000',
      result: 'About 20 comparisons in worst case',
      formula: 'log₂(1,000,000) ≈ 20'
    },
    note = 'When its requirements are satisfied, Binary Search scales better asymptotically than Linear Search.'
  } = data

  return (
    <div className="dsa-complexity-matters-card">
      <div className="comp-matters-head">
        <h4>{title}</h4>
      </div>
      <div className="comp-matters-grid">
        <div className="comp-col linear">
          <strong className="comp-col-title">Linear Search (O(N))</strong>
          <div className="comp-checks-list">
            {linearChecks.map((c, i) => (
              <div key={i} className="comp-check-row">
                <code>{c.n}</code>
                <span>→</span>
                <strong>{c.result}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="comp-col binary">
          <strong className="comp-col-title">Binary Search (O(log N))</strong>
          <div className="binary-highlight-box">
            <div className="comp-check-row">
              <code>{binaryCheck.n}</code>
              <span>→</span>
              <strong className="text-green">{binaryCheck.result}</strong>
            </div>
            <div className="formula-tag">
              <span>Because: <code>{binaryCheck.formula}</code></span>
            </div>
          </div>
        </div>
      </div>
      {note && (
        <div className="comp-matters-note">
          <span>✨</span>
          <strong>{note}</strong>
        </div>
      )}
    </div>
  )
}

// ─── Where Does DSA Matter (Real World Software) Card ─────────
export const DsaRealWorldMattersCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Where Does DSA Matter?',
    subtitle = 'Data structures and algorithms form the core foundations of modern technology systems.',
    cards = [
      { icon: '🗺️', title: 'GPS & Routing', desc: 'Graphs and shortest-path algorithms.' },
      { icon: '🔍', Search: true, title: 'Search Systems', desc: 'Indexing, searching and ranking techniques.' },
      { icon: '🗄️', title: 'Databases', desc: 'Data structures and algorithms help organize, retrieve and process data.' },
      { icon: '🎮', title: 'Games', desc: 'Trees, graphs, spatial structures and algorithms support simulations.' },
      { icon: '🌐', title: 'Web Applications', desc: 'Efficient data handling becomes important as traffic and data grow.' },
      { icon: '🤖', title: 'AI & Machine Learning', desc: 'Algorithms and data structures support computational tasks.' }
    ]
  } = data

  return (
    <div className="dsa-realworld-matters-card">
      <div className="rw-matters-head">
        <h4>{title}</h4>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="rw-matters-grid">
        {cards.map((c, idx) => (
          <div key={idx} className="rw-matter-item">
            <span className="rw-icon">{c.icon}</span>
            <div className="rw-info">
              <strong>{c.title}</strong>
              <p>{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── A Better Approach for Sorted Data Card ───────────────────
export const DsaWhyBinarySearchMattersCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'A Better Approach for Sorted Data',
    problem = 'Find 70 in [10, 20, 30, 40, 50, 60, 70]',
    steps = ['Check middle', 'Eliminate half', 'Check new middle', 'Eliminate half', 'Found target ✅'],
    linearComp = 'O(N)',
    binaryComp = 'O(log N)',
    note = 'Binary Search requires sorted data or a suitable ordering condition.'
  } = data

  return (
    <div className="dsa-binary-matters-card">
      <div className="bm-head">
        <span className="bm-badge">Asymptotic Scaling</span>
        <h4>{title}</h4>
        <p className="bm-problem"><strong>Problem:</strong> {problem}</p>
      </div>
      <div className="bm-flow-line">
        {steps.map((st, i) => (
          <div key={i} className="bm-step-chip">
            <span>{st}</span>
            {i < steps.length - 1 && <span className="bm-arrow">➔</span>}
          </div>
        ))}
      </div>
      <div className="bm-compare-bar">
        <div className="comp-item">Linear Search: <strong className="comp-val red">{linearComp}</strong></div>
        <div className="comp-vs">vs</div>
        <div className="comp-item">Binary Search: <strong className="comp-val green">{binaryComp}</strong></div>
      </div>
      {note && (
        <div className="bm-caveat">
          <span>⚠️ <strong>Note:</strong> {note}</span>
        </div>
      )}
    </div>
  )
}

// ─── DSA Is About Trade-offs Card ─────────────────────────────
export const DsaTradeoffsCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'DSA Is About Trade-offs',
    subtitle = 'There is rarely a solution that is best in every situation.',
    pairs = [
      { left: 'Faster access', right: 'May require more memory' },
      { left: 'Less memory', right: 'May require more computation' },
      { left: 'Simpler implementation', right: 'May not be the most efficient' }
    ]
  } = data

  return (
    <div className="dsa-tradeoffs-card">
      <div className="tradeoffs-head">
        <h4>{title}</h4>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="tradeoffs-pairs-grid">
        {pairs.map((p, idx) => (
          <div key={idx} className="tradeoff-pair-row">
            <span className="tf-left">{p.left}</span>
            <span className="tf-symbol">↔</span>
            <span className="tf-right">{p.right}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Data vs Data Structure Comparison Table Card ───────────────
export const DsaComparisonTableCard = ({ data }) => {
  if (!data) return null
  const { title = 'Data vs Data Structure Comparison', headers = ['Data', 'Data Structure'], rows = [], takeaway } = data

  return (
    <div className="dsa-comparison-table-card">
      {title && (
        <div className="comp-table-header">
          <span className="comp-table-badge">⚖️ Comparison</span>
          <h4>{title}</h4>
        </div>
      )}
      <div className="comp-table-responsive">
        <table className="dsa-comparison-table">
          <thead>
            <tr>
              <th>📄 {headers[0]}</th>
              <th>📦 {headers[1]}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td className="comp-td-left">{row.data || row.left || row[0]}</td>
                <td className="comp-td-right">{row.ds || row.right || row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {takeaway && (
        <div className="comp-takeaway-box">
          <p>{takeaway}</p>
        </div>
      )}
    </div>
  )
}

// ─── Important Clarification Card ─────────────────────────────
export const DsaClarificationCard = ({ data }) => {
  if (!data) return null
  const { title = 'Important Clarification', warning, explanation, examples = [] } = data

  return (
    <div className="dsa-clarification-card">
      <div className="clarification-header">
        <span className="clarification-badge">⚠️ Technical Clarification</span>
        <h4>{title}</h4>
      </div>
      {warning && (
        <div className="clarification-alert">
          <strong>🚫 {warning}</strong>
        </div>
      )}
      {explanation && <p className="clarification-text">{explanation}</p>}
      {examples.length > 0 && (
        <div className="clarification-examples-grid">
          {examples.map((ex, idx) => (
            <div key={idx} className="clarification-ex-item">
              <pre><code>{ex.code}</code></pre>
              <span className="ex-label">{ex.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Real-World Example Card (Student Marks) ──────────────────
export const DsaRealWorldExampleCard = ({ data }) => {
  if (!data) return null
  const { title = 'Real-World Example', intro, dataValues = [], code, mapping = [], explanation } = data

  return (
    <div className="dsa-realworld-ex-card">
      <div className="realworld-ex-head">
        <span className="realworld-badge">💡 Real-World Example</span>
        <h4>{title}</h4>
        {intro && <p className="realworld-intro">{intro}</p>}
      </div>

      {dataValues.length > 0 && (
        <div className="data-values-preview">
          <span className="data-preview-label">Raw Values (Data):</span>
          <div className="data-value-chips">
            {dataValues.map((v, i) => (
              <span key={i} className="data-val-chip">{v}</span>
            ))}
          </div>
        </div>
      )}

      {code && (
        <div className="realworld-code-box">
          <div className="code-box-label">Stored in Memory as:</div>
          <pre><code>{code}</code></pre>
        </div>
      )}

      {mapping.length > 0 && (
        <div className="realworld-mapping-grid">
          {mapping.map((m, i) => (
            <div key={i} className="rw-map-row">
              <span className="rw-from">{m.from}</span>
              <span className="rw-arrow">→</span>
              <span className="rw-to">{m.to}</span>
            </div>
          ))}
        </div>
      )}

      {explanation && (
        <div className="realworld-ex-footer">
          <p>📝 {explanation}</p>
        </div>
      )}
    </div>
  )
}

// ─── Why Structure Matters Card (Same Data, Different Structures) ──
export const DsaWhyStructureMattersCard = ({ data }) => {
  if (!data) return null
  const { title = 'Why Structure Matters', subtitle, dataDescription, options = [], takeaway } = data

  return (
    <div className="dsa-why-structure-card">
      <div className="why-struct-head">
        <span className="why-struct-badge">🧱 Structure Matters</span>
        <h4>{title}</h4>
        {subtitle && <p className="why-struct-sub">{subtitle}</p>}
      </div>

      {dataDescription && (
        <div className="struct-data-desc">
          <strong>Underlying Data:</strong> <code>{dataDescription}</code>
        </div>
      )}

      <div className="struct-options-grid">
        {options.map((opt, idx) => (
          <div key={idx} className="struct-option-col">
            <div className="option-badge">As a {opt.structure}</div>
            <pre><code>{opt.code}</code></pre>
            <p className="option-desc">{opt.desc}</p>
          </div>
        ))}
      </div>

      {takeaway && (
        <div className="struct-takeaway-box">
          <p>💡 {takeaway}</p>
        </div>
      )}
    </div>
  )
}

// ─── Visual Diagram: Data vs Data Structure Flow ───────────────
export const DsaDataVsDsVisualDiagram = ({ data }) => {
  if (!data) return null
  const {
    title = 'Visual Architecture: Data to Data Structure',
    dataNodes = ['42', '"Delhi"', '"Rahul"'],
    structures = [
      { name: 'Array', note: 'Indexed List' },
      { name: 'Set', note: 'Unique Collection' },
      { name: 'Object', note: 'Key-Value Pairs' }
    ],
    outcome = 'ORGANIZED & MANAGEABLE DATA',
    operations = ['Access', 'Search', 'Insert', 'Delete']
  } = data

  return (
    <div className="dsa-datavsds-diagram">
      <div className="datavsds-diag-head">
        <span className="diag-badge">🗺️ Concept Flow</span>
        <h4>{title}</h4>
      </div>

      <div className="datavsds-pipeline">
        {/* Layer 1: DATA */}
        <div className="diag-layer layer-data">
          <div className="diag-main-node data-root">
            <span className="node-icon">📄</span>
            <strong>DATA</strong>
            <span className="node-sub">Raw Values & Facts</span>
          </div>
        </div>

        <div className="diag-arrow-down">↓</div>

        {/* Layer 2: Raw data values */}
        <div className="diag-layer layer-values">
          <div className="values-branch-grid">
            {dataNodes.map((val, idx) => (
              <div key={idx} className="diag-val-card">
                <code>{val}</code>
              </div>
            ))}
          </div>
        </div>

        <div className="diag-arrow-down">↓</div>

        {/* Layer 3: Choose Data Structure */}
        <div className="diag-layer layer-choose">
          <div className="diag-main-node choose-root">
            <span className="node-icon">📦</span>
            <strong>CHOOSE A DATA STRUCTURE</strong>
            <span className="node-sub">How to store & organize</span>
          </div>
        </div>

        <div className="diag-arrow-down">↓</div>

        {/* Layer 4: Data structure choices */}
        <div className="diag-layer layer-structures">
          <div className="structures-branch-grid">
            {structures.map((s, idx) => (
              <div key={idx} className="diag-struct-card">
                <span className="struct-icon">📁</span>
                <strong className="struct-name">{s.name}</strong>
                {s.note && <span className="struct-note">{s.note}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="diag-arrow-down">↓</div>

        {/* Layer 5: Organized & Manageable Data */}
        <div className="diag-layer layer-outcome">
          <div className="diag-main-node outcome-root">
            <span className="node-icon">✨</span>
            <strong>{outcome}</strong>
            <span className="node-sub">Ready for operations</span>
          </div>
        </div>

        <div className="diag-arrow-down">↓</div>

        {/* Layer 6: Operations */}
        <div className="diag-layer layer-ops">
          <div className="diag-ops-grid">
            {operations.map((op, idx) => (
              <div key={idx} className="diag-op-badge">
                <span>⚙️ {op}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Visual Diagram: Characteristics of a Good Algorithm Flow + Checklist ───
export const DsaGoodAlgoVisualDiagram = ({ data }) => {
  if (!data) return null
  const {
    title = 'Visual Flow — Characteristics of a Good Algorithm',
    steps = [
      { icon: '🧠', label: 'ALGORITHM', sub: 'Problem-solving logic' },
      { icon: '📥', label: 'INPUT', sub: 'Clearly defined inputs' },
      { icon: '🔍', label: 'DEFINITE STEPS', sub: 'Unambiguous instructions' },
      { icon: '⚡', label: 'EFFECTIVE OPERATIONS', sub: 'Practical & executable' },
      { icon: '⚙️', label: 'PROCESSING', sub: 'Sequential state transitions' },
      { icon: '📤', label: 'OUTPUT', sub: 'Specified result' },
      { icon: '✅', label: 'CORRECT RESULT', sub: 'Accurate for valid input' },
      { icon: '🛑', label: 'TERMINATES', sub: 'Guaranteed finite finish' }
    ],
    checklist = [
      'Input defined',
      'Output defined',
      'Steps unambiguous',
      'Terminates',
      'Operations are executable',
      'Produces correct result'
    ]
  } = data

  return (
    <div className="dsa-goodalgo-diagram">
      <div className="goodalgo-diag-head">
        <span className="diag-badge">✨ Visual Flow</span>
        <h4>{title}</h4>
      </div>

      <div className="goodalgo-layout-grid">
        <div className="goodalgo-flow-col">
          <div className="goodalgo-pipeline">
            {steps.map((st, idx) => (
              <div key={idx} className="goodalgo-step-wrap">
                <div className="goodalgo-node">
                  <span className="node-icon">{st.icon}</span>
                  <div className="node-text">
                    <strong className="node-label">{st.label}</strong>
                    <span className="node-sub">{st.sub}</span>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="diag-arrow-down" aria-hidden="true">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="goodalgo-checklist-col">
          <div className="goodalgo-checklist-card">
            <div className="checklist-head">
              <span className="chk-icon">📋</span>
              <strong>Good Algorithm Checklist</strong>
            </div>
            <ul className="checklist-list">
              {checklist.map((item, idx) => (
                <li key={idx}>
                  <span className="chk-mark">☑</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="checklist-badge">
              <span>💡 Clear + Correct + Finite + Effective</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Formula Card: Data Structure = Data + Organization + Operations ───
export const DsaFormulaCard = ({ data }) => {
  if (!data) return null
  const {
    formula = 'Data Structure = Data + Organization + Operations',
    pillars = [
      { icon: '📄', term: 'Data', desc: 'Raw facts, values, or entities (numbers, strings, booleans, objects).' },
      { icon: '📦', term: 'Organization', desc: 'How values are stored and arranged in memory (sequential, hierarchical, network).' },
      { icon: '⚙️', term: 'Operations', desc: 'Actions performed on the data (access, search, insert, delete, modify).' }
    ]
  } = data

  return (
    <div className="dsa-formula-card">
      <div className="formula-badge">💡 Core Formula</div>
      <div className="formula-headline">
        <code>{formula}</code>
      </div>
      <div className="formula-pillars-grid">
        {pillars.map((p, idx) => (
          <div key={idx} className="formula-pillar-item">
            <span className="pillar-icon">{p.icon}</span>
            <div className="pillar-info">
              <strong>{p.term}</strong>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Data Structure Classification Hierarchy Card ─────────────
export const DsaDsHierarchyCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Classification of Data Structures',
    subtitle = 'Data structures are broadly divided into Primitive and Non-Primitive categories.',
    primitive = {
      title: 'Primitive Data Structures',
      desc: 'Basic atomic values used as building blocks',
      items: ['Integer / Number', 'Character', 'Boolean', 'Floating Point']
    },
    nonPrimitive = {
      title: 'Non-Primitive Data Structures',
      desc: 'Structured collections and relationships between values',
      linear: {
        title: 'Linear (Sequential Order)',
        items: ['Array', 'Linked List', 'Stack', 'Queue']
      },
      nonLinear: {
        title: 'Non-Linear (Hierarchical & Network)',
        items: ['Tree', 'Graph']
      },
      associative: {
        title: 'Associative / Key-Value Mapping',
        items: ['Hash Table']
      }
    },
    note = 'Technical Note: Hash Table is an associative/key-value data structure rather than forced strictly into linear or non-linear. Classifications can vary slightly across textbooks and programming languages.'
  } = data

  return (
    <div className="dsa-ds-hierarchy-card">
      <div className="hierarchy-head">
        <span className="hierarchy-badge">🗂️ Taxonomy</span>
        <h4>{title}</h4>
        {subtitle && <p className="hierarchy-sub">{subtitle}</p>}
      </div>

      <div className="hierarchy-branches-grid">
        {/* Primitive Column */}
        <div className="hierarchy-col prim">
          <div className="hierarchy-col-head">
            <span className="col-badge prim">Primitive</span>
            <p className="col-desc">{primitive.desc}</p>
          </div>
          <div className="hierarchy-chips">
            {primitive.items.map((it, idx) => (
              <span key={idx} className="h-chip prim">{it}</span>
            ))}
          </div>
        </div>

        {/* Non-Primitive Column */}
        <div className="hierarchy-col non-prim">
          <div className="hierarchy-col-head">
            <span className="col-badge non-prim">Non-Primitive</span>
            <p className="col-desc">{nonPrimitive.desc}</p>
          </div>

          <div className="sub-branches-grid">
            <div className="sub-branch-box linear">
              <strong className="sub-b-title">📏 {nonPrimitive.linear.title}</strong>
              <div className="hierarchy-chips">
                {nonPrimitive.linear.items.map((it, idx) => (
                  <span key={idx} className="h-chip linear">{it}</span>
                ))}
              </div>
            </div>

            <div className="sub-branch-box non-linear">
              <strong className="sub-b-title">🌲 {nonPrimitive.nonLinear.title}</strong>
              <div className="hierarchy-chips">
                {nonPrimitive.nonLinear.items.map((it, idx) => (
                  <span key={idx} className="h-chip non-linear">{it}</span>
                ))}
              </div>
            </div>

            <div className="sub-branch-box assoc">
              <strong className="sub-b-title">🔑 {nonPrimitive.associative.title}</strong>
              <div className="hierarchy-chips">
                {nonPrimitive.associative.items.map((it, idx) => (
                  <span key={idx} className="h-chip assoc">{it}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {note && (
        <div className="hierarchy-note-box">
          <p>💡 {note}</p>
        </div>
      )}
    </div>
  )
}

// ─── Linear vs Non-Linear Comparison Card ─────────────────────
export const DsaLinearVsNonLinearCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Linear vs Non-Linear Data Structures',
    subtitle = 'How elements relate to one another in memory.',
    linear = {
      title: 'Linear Data Structures',
      desc: 'Elements are arranged in a sequential order, where each element generally has a logical predecessor and successor.',
      examples: [
        { name: 'Array', analogy: 'Row of numbered lockers (direct index access)' },
        { name: 'Linked List', analogy: 'Treasure hunt clues connected one after another' },
        { name: 'Stack', analogy: 'Stack of plates (LIFO: Last-In, First-Out)' },
        { name: 'Queue', analogy: 'Ticket counter line (FIFO: First-In, First-Out)' }
      ]
    },
    nonLinear = {
      title: 'Non-Linear Data Structures',
      desc: 'Data is not arranged in one simple sequence. Elements can have hierarchical or many-to-many relationships.',
      examples: [
        { name: 'Tree', analogy: 'Family / company management hierarchy (parent-child relationships)' },
        { name: 'Graph', analogy: 'Cities connected by road networks / social network friendships' }
      ]
    }
  } = data

  return (
    <div className="dsa-linear-vs-nonlinear-card">
      <div className="lvsnl-head">
        <span className="lvsnl-badge">📐 Structure Anatomy</span>
        <h4>{title}</h4>
        {subtitle && <p className="lvsnl-sub">{subtitle}</p>}
      </div>

      <div className="lvsnl-grid">
        {/* Linear Column */}
        <div className="lvsnl-col linear">
          <div className="lvsnl-col-head">
            <span className="lvsnl-col-badge linear">📏 {linear.title}</span>
            <p className="lvsnl-col-desc">{linear.desc}</p>
          </div>
          <div className="lvsnl-items-list">
            {linear.examples.map((ex, idx) => (
              <div key={idx} className="lvsnl-item">
                <strong className="item-name">{ex.name}</strong>
                <span className="item-arrow">→</span>
                <span className="item-analogy">{ex.analogy}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Linear Column */}
        <div className="lvsnl-col non-linear">
          <div className="lvsnl-col-head">
            <span className="lvsnl-col-badge non-linear">🌲 {nonLinear.title}</span>
            <p className="lvsnl-col-desc">{nonLinear.desc}</p>
          </div>
          <div className="lvsnl-items-list">
            {nonLinear.examples.map((ex, idx) => (
              <div key={idx} className="lvsnl-item">
                <strong className="item-name">{ex.name}</strong>
                <span className="item-arrow">→</span>
                <span className="item-analogy">{ex.analogy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Why Are There Different Data Structures Card ─────────────
export const DsaWhyDifferentDsCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Why Are There Different Data Structures?',
    subtitle = 'Different problems need different operations. The "best" structure depends on the operations and constraints.',
    mappings = [
      { need: 'Need fast index access?', ds: 'Array' },
      { need: 'Need frequent insert/delete in a sequence?', ds: 'Linked List' },
      { need: 'Need Last-In-First-Out behavior?', ds: 'Stack' },
      { need: 'Need First-In-First-Out behavior?', ds: 'Queue' },
      { need: 'Need hierarchical relationships?', ds: 'Tree' },
      { need: 'Need network relationships?', ds: 'Graph' },
      { need: 'Need key → value lookup?', ds: 'Hash Table' }
    ],
    takeaway = '💡 The "best" structure depends on the operations, constraints, and problem requirements.'
  } = data

  return (
    <div className="dsa-why-different-card">
      <div className="why-diff-head">
        <span className="why-diff-badge">🎯 Purpose-Driven Design</span>
        <h4>{title}</h4>
        {subtitle && <p className="why-diff-sub">{subtitle}</p>}
      </div>

      <div className="why-diff-grid">
        {mappings.map((m, idx) => (
          <div key={idx} className="why-diff-item">
            <span className="diff-need">{m.need}</span>
            <span className="diff-arrow">→</span>
            <strong className="diff-ds">{m.ds}</strong>
          </div>
        ))}
      </div>

      {takeaway && (
        <div className="why-diff-takeaway">
          <p>{takeaway}</p>
        </div>
      )}
    </div>
  )
}

// ─── Interactive Choose DS Exercise Card ──────────────────────
export const DsaChooseDsExerciseCard = ({ data }) => {
  const [revealed, setRevealed] = useState({})
  if (!data) return null
  const {
    title = 'Which Data Structure Would You Choose?',
    subtitle = 'Test your intuition by matching scenarios to the appropriate data structure. Click to reveal!',
    scenarios = [
      { q: 'Browser Back button history', a: 'Stack (LIFO)', desc: 'The most recently visited page is popped off first.' },
      { q: 'Printer jobs waiting to be processed', a: 'Queue (FIFO)', desc: 'The first document sent is the first document printed.' },
      { q: 'Access student by index', a: 'Array', desc: 'Direct O(1) indexed lookup in contiguous memory.' },
      { q: 'Company organizational hierarchy', a: 'Tree', desc: 'CEO → Managers → Employees parent-child tree.' },
      { q: 'Cities connected by roads', a: 'Graph', desc: 'Interconnected nodes and weighted edges.' },
      { q: 'Find user by ID → user information', a: 'Hash Table', desc: 'Direct key-value associative lookup.' }
    ]
  } = data

  const toggleReveal = (idx) => {
    setRevealed(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  const revealAll = () => {
    const all = {}
    scenarios.forEach((_, i) => { all[i] = true })
    setRevealed(all)
  }

  return (
    <div className="dsa-choose-exercise-card">
      <div className="exercise-head">
        <div className="exercise-title-row">
          <span className="exercise-badge">🧠 Interactive Practice</span>
          <button type="button" onClick={revealAll} className="reveal-all-btn">Reveal All</button>
        </div>
        <h4>{title}</h4>
        {subtitle && <p className="exercise-sub">{subtitle}</p>}
      </div>

      <div className="exercise-scenarios-grid">
        {scenarios.map((sc, idx) => {
          const isOpen = Boolean(revealed[idx])
          return (
            <div key={idx} className={`scenario-item ${isOpen ? 'revealed' : ''}`}>
              <div className="scenario-question">
                <span className="scenario-q-num">Q{idx + 1}.</span>
                <strong>{sc.q}</strong>
              </div>
              <div className="scenario-action-row">
                <button
                  type="button"
                  onClick={() => toggleReveal(idx)}
                  className={`scenario-reveal-btn ${isOpen ? 'active' : ''}`}
                >
                  {isOpen ? 'Hide Answer' : 'Reveal Answer 👁️'}
                </button>
                {isOpen && (
                  <div className="scenario-answer-box">
                    <strong className="answer-tag">→ {sc.a}</strong>
                    {sc.desc && <span className="answer-desc">({sc.desc})</span>}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Operational Complexity Table Card ────────────────────────
export const DsaOperationComplexityTableCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Complexity Depends on the Operation',
    intro = 'A data structure does not have a single fixed complexity. Time and space complexity are determined by the combination of Data Structure + Operation.',
    rows = [
      { ds: 'Array', op: 'Access by index', comp: 'O(1)', note: 'Direct memory calculation' },
      { ds: 'Array', op: 'Linear search', comp: 'O(N)', note: 'Inspects elements one by one' },
      { ds: 'Stack', op: 'Push (Insert top)', comp: 'O(1)', note: 'Direct top pointer update' },
      { ds: 'Stack', op: 'Pop (Remove top)', comp: 'O(1)', note: 'Direct top pointer decrement' },
      { ds: 'Queue', op: 'Enqueue', comp: 'O(1)*', note: 'With tail pointer / ring buffer' },
      { ds: 'Queue', op: 'Dequeue', comp: 'O(1)*', note: 'With head pointer' },
      { ds: 'Hash Table', op: 'Average lookup', comp: 'O(1)*', note: 'Average case; worst case O(N) on collisions' }
    ],
    footnotes = [
      '* Queue O(1) operations assume standard pointer or circular buffer implementation (Array.shift() in JS takes O(N) due to element shifting).',
      '* Hash Table O(1) is average-case under a good hash function and reasonable load factor.'
    ]
  } = data

  return (
    <div className="dsa-operation-complexity-card">
      <div className="op-comp-head">
        <span className="op-comp-badge">⏱️ Operational Complexity</span>
        <h4>{title}</h4>
        {intro && <p className="op-comp-intro">{intro}</p>}
      </div>

      <div className="comp-table-responsive">
        <table className="dsa-comparison-table">
          <thead>
            <tr>
              <th>Data Structure</th>
              <th>Operation</th>
              <th>Typical Complexity</th>
              <th>Context / Note</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx}>
                <td className="comp-td-left"><strong>{r.ds}</strong></td>
                <td>{r.op}</td>
                <td><strong className="comp-tag-pill">{r.comp}</strong></td>
                <td className="op-note-cell">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnotes.length > 0 && (
        <div className="op-footnotes">
          {footnotes.map((fn, i) => (
            <p key={i}>{fn}</p>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Data Structures At A Glance Card ─────────────────────────
export const DsaDsAtAGlanceCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Data Structures at a Glance',
    rows = [
      { ds: 'Array', arrangement: 'Sequential in contiguous memory', use: 'Indexed data, fixed collections' },
      { ds: 'Linked List', arrangement: 'Sequential via node pointers', use: 'Dynamic sequences, frequent insertion/deletion' },
      { ds: 'Stack', arrangement: 'LIFO (Last-In, First-Out)', use: 'Undo/redo, browser history, call stacks' },
      { ds: 'Queue', arrangement: 'FIFO (First-In, First-Out)', use: 'Task scheduling, print queues, BFS traversal' },
      { ds: 'Tree', arrangement: 'Hierarchical parent-child nodes', use: 'File systems, DOM trees, binary search' },
      { ds: 'Graph', arrangement: 'Network of vertices & edges', use: 'Maps, road networks, social connections' },
      { ds: 'Hash Table', arrangement: 'Key → Value associative mapping', use: 'Fast average-case key lookups, dictionaries' }
    ]
  } = data

  return (
    <div className="dsa-glance-table-card">
      <div className="glance-head">
        <span className="glance-badge">📋 Quick Comparison</span>
        <h4>{title}</h4>
      </div>

      <div className="comp-table-responsive">
        <table className="dsa-comparison-table">
          <thead>
            <tr>
              <th>Data Structure</th>
              <th>Arrangement</th>
              <th>Common Use Cases</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => (
              <tr key={idx}>
                <td className="comp-td-left"><strong>{r.ds}</strong></td>
                <td>{r.arrangement}</td>
                <td className="comp-td-right">{r.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Visual Classification Diagram of Data Structures ─────────
export const DsaTypesVisualDiagram = ({ data }) => {
  if (!data) return null
  const {
    title = 'Visual Classification of Data Structures',
    miniVisual = {
      title: 'Problem to Complexity Selection Flow',
      steps: ['Problem', 'Required Operations', 'Choose Data Structure', 'Perform Operations', 'Analyze Complexity']
    }
  } = data

  return (
    <div className="dsa-types-diagram-card">
      <div className="types-diag-head">
        <span className="diag-badge">🗺️ Visual Hierarchy</span>
        <h4>{title}</h4>
      </div>

      <div className="types-tree-visual">
        {/* Root */}
        <div className="tree-level root-level">
          <div className="tree-node root-node">
            <strong>DATA STRUCTURES</strong>
          </div>
        </div>

        <div className="tree-connector-v">↓</div>

        {/* Level 1: Primitive vs Non-Primitive */}
        <div className="tree-level prim-nonprim-level">
          <div className="tree-node prim-node">
            <span className="node-cat">PRIMITIVE</span>
            <span className="node-detail">Number • Boolean • Character • Float</span>
          </div>
          <div className="tree-node nonprim-node">
            <span className="node-cat">NON-PRIMITIVE</span>
            <span className="node-detail">Structured Collections & Relationships</span>
          </div>
        </div>

        <div className="tree-connector-v">↓</div>

        {/* Level 2: Subcategories */}
        <div className="tree-level subcat-level">
          <div className="tree-node sub-linear">
            <span className="node-cat">LINEAR</span>
            <span className="node-detail">Array • Linked List • Stack • Queue</span>
          </div>
          <div className="tree-node sub-nonlinear">
            <span className="node-cat">NON-LINEAR</span>
            <span className="node-detail">Tree • Graph</span>
          </div>
          <div className="tree-node sub-assoc">
            <span className="node-cat">ASSOCIATIVE</span>
            <span className="node-detail">Hash Table (Key → Value)</span>
          </div>
        </div>
      </div>

      {miniVisual && (
        <div className="mini-visual-pipeline">
          <strong className="mini-vis-title">🔄 {miniVisual.title}</strong>
          <div className="mini-vis-steps">
            {miniVisual.steps.map((st, i) => (
              <div key={i} className="mini-vis-step-item">
                <span>{st}</span>
                {i < miniVisual.steps.length - 1 && <span className="mini-vis-arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Visual Diagram: Linear vs Non-Linear Organization ─────────
export const DsaLinearVsNonLinearVisualDiagram = ({ data }) => {
  if (!data) return null
  const {
    title = 'Visual Architecture — Linear vs Non-Linear Organization',
    linearFlow = {
      title: 'Linear Structure (Sequential Single-Path)',
      nodes: ['Node 1 (Front)', 'Node 2', 'Node 3', 'Node 4 (Rear)']
    },
    nonLinearTree = {
      title: 'Non-Linear Structure (Hierarchical Tree & Graph)',
      root: 'Root Node (Parent)',
      children: ['Child Node A', 'Child Node B', 'Child Node C']
    }
  } = data

  return (
    <div className="dsa-lvsnl-visual-card">
      <div className="lvsnl-diag-head">
        <span className="diag-badge">🗺️ Structure Comparison</span>
        <h4>{title}</h4>
      </div>

      <div className="lvsnl-diag-grid">
        {/* Linear Box */}
        <div className="diag-side-box linear">
          <strong className="diag-side-title">📏 {linearFlow.title}</strong>
          <p className="diag-side-sub">Single sequential line (Each element has 1 predecessor and 1 successor)</p>
          <div className="linear-node-chain">
            {linearFlow.nodes.map((n, i) => (
              <div key={i} className="chain-unit">
                <div className="chain-node">{n}</div>
                {i < linearFlow.nodes.length - 1 && <span className="chain-arrow">→</span>}
              </div>
            ))}
          </div>
          <div className="diag-side-tags">
            <span>Array</span> • <span>Linked List</span> • <span>Stack (LIFO)</span> • <span>Queue (FIFO)</span>
          </div>
        </div>

        {/* Non-Linear Box */}
        <div className="diag-side-box non-linear">
          <strong className="diag-side-title">🌲 {nonLinearTree.title}</strong>
          <p className="diag-side-sub">Multi-level branching & arbitrary network connections</p>
          <div className="tree-node-visual">
            <div className="t-root-node">{nonLinearTree.root}</div>
            <div className="t-connector-v">↓</div>
            <div className="t-children-row">
              {nonLinearTree.children.map((c, i) => (
                <div key={i} className="t-child-node">{c}</div>
              ))}
            </div>
          </div>
          <div className="diag-side-tags">
            <span>Tree (Hierarchy)</span> • <span>Graph (Network)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Size vs Capacity Card ─────────────────────────────────────
export const DsaSizeVsCapacityCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Size vs Capacity: The Fundamental Difference',
    subtitle = 'Students often confuse Size with Capacity. Understanding this distinction is key to mastering data structures.',
    concepts = [
      {
        term: 'Size (Current Count)',
        icon: '📊',
        desc: 'Number of elements currently stored in the structure.',
        example: 'If an array holds [10, 20, 30], Size = 3'
      },
      {
        term: 'Capacity (Maximum Limit)',
        icon: '📦',
        desc: 'Total number of elements the allocated memory block can hold before resizing or replacement.',
        example: 'If memory is allocated for 5 slots, Capacity = 5'
      }
    ],
    scenarios = [
      {
        type: 'Fixed / Static Array',
        badge: '🔒 Fixed Capacity',
        capacity: 5,
        size: 3,
        slots: [
          { val: '10', filled: true },
          { val: '20', filled: true },
          { val: '30', filled: true },
          { val: 'Empty', filled: false },
          { val: 'Empty', filled: false }
        ],
        note: 'Can hold 2 more elements. When size reaches 5, it CANNOT expand automatically.'
      },
      {
        type: 'Dynamic Array (Resizing Flow)',
        badge: '⚡ Resizable',
        capacity: 4,
        size: 4,
        slots: [
          { val: '10', filled: true },
          { val: '20', filled: true },
          { val: '30', filled: true },
          { val: '40', filled: true }
        ],
        note: 'Storage is full (Size = Capacity = 4). Inserting element 50 triggers dynamic reallocation (e.g. new Capacity = 8).'
      }
    ]
  } = data

  return (
    <div className="dsa-size-capacity-card">
      <div className="sc-head">
        <span className="sc-badge">🧠 Core Architectural Concept</span>
        <h4>{title}</h4>
        {subtitle && <p className="sc-sub">{subtitle}</p>}
      </div>

      <div className="sc-concepts-grid">
        {concepts.map((c, i) => (
          <div key={i} className="sc-concept-box">
            <span className="sc-concept-icon">{c.icon}</span>
            <div className="sc-concept-text">
              <strong>{c.term}</strong>
              <p>{c.desc}</p>
              <div className="sc-concept-eg">{c.example}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="sc-scenarios-grid">
        {scenarios.map((s, idx) => (
          <div key={idx} className="sc-scenario-item">
            <div className="scenario-item-head">
              <span className="scenario-type-title">{s.type}</span>
              <span className="scenario-badge">{s.badge}</span>
            </div>
            <div className="scenario-stats-row">
              <span className="stat-pill size">Size: <strong>{s.size}</strong></span>
              <span className="stat-pill cap">Capacity: <strong>{s.capacity}</strong></span>
            </div>
            <div className="scenario-slots-viz">
              {s.slots.map((slot, sIdx) => (
                <div key={sIdx} className={`slot-box ${slot.filled ? 'filled' : 'empty'}`}>
                  <span className="slot-idx">[{sIdx}]</span>
                  <span className="slot-val">{slot.val}</span>
                </div>
              ))}
            </div>
            <p className="scenario-note">{s.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Static vs Dynamic Visual Diagram ───────────────────────────
export const DsaStaticVsDynamicDiagram = ({ data }) => {
  if (!data) return null
  const {
    title = 'Visual Diagram — Static vs Dynamic Allocation Flow',
    staticFlow = {
      title: 'Static / Fixed-Capacity Structure',
      capacity: 5,
      slots: ['10', '20', '30', '40', '50'],
      overflowAction: 'Add 60 ❌ (Cannot expand allocated storage without recreating)'
    },
    dynamicFlow = {
      title: 'Dynamic / Resizable Structure',
      step1: {
        label: 'Initial Storage (Capacity = 4, Full)',
        slots: ['10', '20', '30', '40']
      },
      step2: {
        label: 'Insert 50 → Allocate New Block (Capacity = 8) & Copy Over',
        slots: ['10', '20', '30', '40', '50', 'Empty', 'Empty', 'Empty']
      }
    }
  } = data

  return (
    <div className="dsa-svd-visual-card">
      <div className="svd-diag-head">
        <span className="diag-badge">🗺️ Allocation Architecture</span>
        <h4>{title}</h4>
      </div>

      <div className="svd-diag-grid">
        {/* Static Box */}
        <div className="svd-side-box static-side">
          <div className="side-box-head">
            <span className="side-box-badge static">🔒 {staticFlow.title}</span>
            <span className="side-cap-tag">Fixed Capacity: {staticFlow.capacity}</span>
          </div>
          <div className="slots-strip">
            {staticFlow.slots.map((val, i) => (
              <div key={i} className="strip-slot filled">
                <span className="slot-index">[{i}]</span>
                <span className="slot-text">{val}</span>
              </div>
            ))}
          </div>
          <div className="overflow-warning-box">
            <span>{staticFlow.overflowAction}</span>
          </div>
        </div>

        {/* Dynamic Box */}
        <div className="svd-side-box dynamic-side">
          <div className="side-box-head">
            <span className="side-box-badge dynamic">⚡ {dynamicFlow.title}</span>
          </div>
          <div className="dynamic-substep">
            <span className="step-tag">Step 1: {dynamicFlow.step1.label}</span>
            <div className="slots-strip">
              {dynamicFlow.step1.slots.map((val, i) => (
                <div key={i} className="strip-slot filled">
                  <span className="slot-index">[{i}]</span>
                  <span className="slot-text">{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="dynamic-resizing-arrow">
            <span>⬇ Resize Triggered (Allocate Larger Block & Copy)</span>
          </div>
          <div className="dynamic-substep">
            <span className="step-tag">Step 2: {dynamicFlow.step2.label}</span>
            <div className="slots-strip compact">
              {dynamicFlow.step2.slots.map((val, i) => (
                <div key={i} className={`strip-slot ${val === 'Empty' ? 'empty' : val === '50' ? 'new-insert' : 'filled'}`}>
                  <span className="slot-index">[{i}]</span>
                  <span className="slot-text">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── ADT vs Data Structure Card ────────────────────────────────
export const DsaAdtVsDsCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'ADT vs Data Structure: WHAT vs HOW',
    subtitle = 'An Abstract Data Type defines WHAT operations are supported. A Data Structure defines HOW data is actually stored in memory.',
    adt = {
      title: '📜 Abstract Data Type (ADT)',
      badge: 'WHAT it does',
      points: [
        'Logical model / contract defining supported operations',
        'Describes behavior and rules from the user\'s perspective',
        'Hides memory layout and implementation details',
        'Example: Stack ADT specifies push(), pop(), peek(), isEmpty()'
      ]
    },
    ds = {
      title: '⚙️ Data Structure / Implementation',
      badge: 'HOW it works',
      points: [
        'Concrete representation and memory organization',
        'Implements the algorithmic details of the operations',
        'Determines actual time and space complexity performance',
        'Example: ArrayStack uses contiguous memory; LinkedListStack uses nodes'
      ]
    },
    analogy = {
      title: '🏦 Real-World Analogy: The ATM Machine',
      desc: 'The ATM interface is an ADT: it gives you withdraw(), deposit(), and checkBalance(). How the bank ledger, servers, or database process it internally is the hidden implementation.'
    }
  } = data

  return (
    <div className="dsa-adt-vs-ds-card">
      <div className="adt-card-head">
        <span className="adt-badge">🏛️ Architectural Abstraction</span>
        <h4>{title}</h4>
        {subtitle && <p className="adt-sub">{subtitle}</p>}
      </div>

      <div className="adt-compare-grid">
        <div className="adt-col adt-side">
          <div className="adt-col-head">
            <span className="col-badge adt">{adt.title}</span>
            <span className="sub-badge">{adt.badge}</span>
          </div>
          <ul className="adt-points">
            {adt.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="adt-col ds-side">
          <div className="adt-col-head">
            <span className="col-badge ds">{ds.title}</span>
            <span className="sub-badge">{ds.badge}</span>
          </div>
          <ul className="adt-points">
            {ds.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      {analogy && (
        <div className="adt-analogy-box">
          <strong className="analogy-title">{analogy.title}</strong>
          <p>{analogy.desc}</p>
        </div>
      )}
    </div>
  )
}

// ─── Common ADT Examples Card ──────────────────────────────────
export const DsaAdtExamplesCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Common Abstract Data Types & Their Implementations',
    subtitle = 'The same ADT behavior can be fulfilled by different concrete data structures.',
    adts = [
      {
        name: 'Stack ADT',
        desc: 'LIFO (Last-In, First-Out) collection',
        ops: 'push(), pop(), peek(), isEmpty()',
        implementations: ['Array (Contiguous)', 'Linked List (Nodes)']
      },
      {
        name: 'Queue ADT',
        desc: 'FIFO (First-In, First-Out) collection',
        ops: 'enqueue(), dequeue(), front(), isEmpty()',
        implementations: ['Circular Array', 'Linked List (Head/Tail)']
      },
      {
        name: 'List ADT',
        desc: 'Ordered sequential collection',
        ops: 'get(i), insert(i, val), remove(i), size()',
        implementations: ['Dynamic Array', 'Singly/Doubly Linked List']
      },
      {
        name: 'Map / Dictionary ADT',
        desc: 'Associative key-to-value store',
        ops: 'put(k, v), get(k), remove(k), contains(k)',
        implementations: ['Hash Table', 'Binary Search Tree (Red-Black)']
      },
      {
        name: 'Priority Queue ADT',
        desc: 'Highest priority element retrieved first',
        ops: 'insert(val, prio), extractMax(), peekMax()',
        implementations: ['Binary Heap', 'Unsorted/Sorted List']
      }
    ]
  } = data

  return (
    <div className="dsa-adt-examples-card">
      <div className="adt-examples-head">
        <span className="adt-badge">📦 Standard ADTs</span>
        <h4>{title}</h4>
        {subtitle && <p className="adt-sub">{subtitle}</p>}
      </div>

      <div className="adt-grid">
        {adts.map((item, idx) => (
          <div key={idx} className="adt-item-card">
            <div className="adt-item-head">
              <strong className="adt-name">{item.name}</strong>
              <span className="adt-desc">{item.desc}</span>
            </div>
            <div className="adt-ops-box">
              <span className="ops-label">Supported Operations (WHAT):</span>
              <code>{item.ops}</code>
            </div>
            <div className="adt-impl-box">
              <span className="impl-label">Possible Implementations (HOW):</span>
              <div className="impl-tags">
                {item.implementations.map((impl, iIdx) => (
                  <span key={iIdx} className="impl-tag">{impl}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Visual Diagram: ADT Architecture ──────────────────────────
export const DsaAdtVisualDiagram = ({ data }) => {
  if (!data) return null
  const {
    title = 'Visual Diagram — ADT Architecture & Implementation Separation',
    adtConcept = {
      name: 'STACK ADT (Specification / Contract)',
      badge: 'Defines WHAT operations exist',
      operations: ['push(x)', 'pop()', 'peek()', 'isEmpty()']
    },
    implementations = [
      {
        name: 'Array-Based Implementation',
        desc: 'Contiguous buffer storage with top index pointer',
        pros: 'Fast O(1) indexed access, contiguous cache locality'
      },
      {
        name: 'Linked List Implementation',
        desc: 'Node-by-node dynamic allocation linked via pointers',
        pros: 'No buffer resizing required, dynamic node allocation'
      }
    ]
  } = data

  return (
    <div className="dsa-adt-visual-card">
      <div className="adt-diag-head">
        <span className="diag-badge">🗺️ Abstraction Architecture</span>
        <h4>{title}</h4>
      </div>

      <div className="adt-tree-structure">
        {/* Top Level: ADT Contract */}
        <div className="adt-spec-box">
          <span className="spec-badge">📜 Contract (Interface)</span>
          <strong className="spec-title">{adtConcept.name}</strong>
          <p className="spec-sub">{adtConcept.badge}</p>
          <div className="spec-ops-row">
            {adtConcept.operations.map((op, i) => (
              <span key={i} className="spec-op-pill">{op}</span>
            ))}
          </div>
        </div>

        <div className="adt-connector-arrow">
          <span>⬇ Implemented by Different Concrete Data Structures ⬇</span>
        </div>

        {/* Bottom Level: Concrete Data Structures */}
        <div className="adt-impl-grid">
          {implementations.map((impl, i) => (
            <div key={i} className="impl-side-box">
              <div className="impl-box-head">
                <span className="impl-type-badge">⚙️ Concrete Data Structure #{i + 1}</span>
                <strong>{impl.name}</strong>
              </div>
              <p className="impl-desc">{impl.desc}</p>
              <div className="impl-pros-tag">💡 {impl.pros}</div>
              <div className="impl-result-tag">✅ Fulfills Stack ADT Behavior</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Real-World Application Map Card ───────────────────────────
export const DsaRealWorldApplicationMapCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'DSA Around Us: How Real Software Uses DSA',
    subtitle = 'Production software systems combine multiple data structures and algorithms to solve complex user problems efficiently.',
    apps = [
      {
        icon: '🗺️',
        name: 'Maps & GPS Navigation',
        ds: 'Graph (Road Network)',
        algo: 'Shortest Path / A* / Dijkstra / Heuristics',
        desc: 'Intersections are vertices, roads are weighted edges (distance/traffic).'
      },
      {
        icon: '🌐',
        name: 'Browser Navigation History',
        ds: 'Dual Stacks (Back & Forward)',
        algo: 'LIFO Push & Pop Operations',
        desc: 'Moving back pushes the current page to forward history and pops the previous page.'
      },
      {
        icon: '🖨️',
        name: 'Task Scheduling & Print Queues',
        ds: 'Queue & Priority Queue',
        algo: 'FIFO / Priority Scheduling',
        desc: 'Incoming jobs, web requests, and messages are processed in strict submission or priority order.'
      },
      {
        icon: '🔍',
        name: 'Search Autocomplete & Prefix Match',
        ds: 'Trie + Hash Table + Cache',
        algo: 'Prefix Search & Ranking Algorithms',
        desc: 'Organizes dictionary words into prefix trees for lightning-fast keystroke suggestions.'
      },
      {
        icon: '🗄️',
        name: 'Database Indexing & Querying',
        ds: 'B-Trees / B+ Trees / Hash Indexes',
        algo: 'Binary Search & Range Queries',
        desc: 'Avoids scanning every single row on disk by maintaining balanced multi-way tree indexes.'
      },
      {
        icon: '👥',
        name: 'Social Network Connections',
        ds: 'Graph (Adjacency Lists)',
        algo: 'BFS / Graph Clustering / Community Detection',
        desc: 'Users are vertices and friendships are edges; calculates mutual friends and recommendations.'
      }
    ]
  } = data

  return (
    <div className="dsa-realworld-map-card">
      <div className="rw-head">
        <span className="rw-badge">🌍 Production Engineering</span>
        <h4>{title}</h4>
        {subtitle && <p className="rw-sub">{subtitle}</p>}
      </div>

      <div className="rw-grid">
        {apps.map((app, idx) => (
          <div key={idx} className="rw-item-card">
            <div className="rw-item-head">
              <span className="rw-icon">{app.icon}</span>
              <strong className="rw-name">{app.name}</strong>
            </div>
            <div className="rw-tags-row">
              <span className="rw-tag ds">📦 {app.ds}</span>
              <span className="rw-tag algo">⚡ {app.algo}</span>
            </div>
            <p className="rw-desc">{app.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Input Scale Matters Card ──────────────────────────────────
export const DsaScaleMattersCard = ({ data }) => {
  if (!data) return null
  const {
    title = 'Why Scale Makes DSA Critical: 10 vs 10,000 vs 10,000,000',
    subtitle = 'The bigger the dataset and the more frequently an operation runs, the more vital algorithmic efficiency becomes.',
    tiers = [
      {
        scale: 'Small Scale (10–100 items)',
        icon: '🟢',
        badge: 'Toy Project / Prototype',
        behavior: 'Almost any approach feels instantaneous.',
        reality: 'Linear scan (O(N)) takes ~0.001 ms. The data structure choice hardly impacts user experience.'
      },
      {
        scale: 'Medium Scale (10,000 items)',
        icon: '🟡',
        badge: 'Growing Production App',
        behavior: 'Inefficient nested loops (O(N²)) cause noticeable UI freeze.',
        reality: '10,000² = 100,000,000 operations. Proper data indexing and O(N log N) algorithms keep it responsive.'
      },
      {
        scale: 'Large Scale (10,000,000+ items)',
        icon: '🔴',
        badge: 'Enterprise / Big Data Platform',
        behavior: 'Poor DSA choices result in timeout errors and excessive server costs.',
        reality: 'O(N) search on 10M items scans every record. O(log N) tree index finds the record in just 24 comparisons!'
      }
    ]
  } = data

  return (
    <div className="dsa-scale-matters-card">
      <div className="scale-head">
        <span className="scale-badge">📈 Scale & Efficiency</span>
        <h4>{title}</h4>
        {subtitle && <p className="scale-sub">{subtitle}</p>}
      </div>

      <div className="scale-tiers-grid">
        {tiers.map((tier, idx) => (
          <div key={idx} className="scale-tier-box">
            <div className="tier-head">
              <span className="tier-icon">{tier.icon}</span>
              <strong>{tier.scale}</strong>
            </div>
            <span className="tier-badge">{tier.badge}</span>
            <p className="tier-behavior">⚡ {tier.behavior}</p>
            <div className="tier-reality">{tier.reality}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Real-World Visual Diagram ─────────────────────────────────
export const DsaRealWorldVisualDiagram = ({ data }) => {
  if (!data) return null
  const {
    title = 'Visual Diagram — Real-World Problem Solving with DSA',
    pipeline = [
      { step: '1. Real-World Problem', desc: 'Identify user needs & system goals' },
      { step: '2. Understand Data', desc: 'Analyze data shapes, volumes & relationships' },
      { step: '3. Identify Operations', desc: 'Find most frequent operations (search, insert, sort)' },
      { step: '4. Choose Data Structure', desc: 'Pick optimal organization (Graph, Tree, Stack, Queue)' },
      { step: '5. Choose Algorithm', desc: 'Select efficient step-by-step procedure (Dijkstra, Binary Search)' },
      { step: '6. Production Result', desc: 'Scalable, responsive, resource-aware software' }
    ]
  } = data

  return (
    <div className="dsa-rw-visual-card">
      <div className="rw-diag-head">
        <span className="diag-badge">🗺️ Engineering Architecture</span>
        <h4>{title}</h4>
      </div>

      <div className="rw-pipeline-flow">
        {pipeline.map((p, idx) => (
          <div key={idx} className="rw-pipe-step">
            <div className="pipe-node">
              <span className="pipe-title">{p.step}</span>
              <span className="pipe-desc">{p.desc}</span>
            </div>
            {idx < pipeline.length - 1 && <div className="pipe-arrow">⬇</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Starter Code & Visual Memory Flow Card ───────────────────
export const StarterCodeCard = ({ data, onRun }) => {
  const [copied, setCopied] = useState(false)
  if (!data) return null
  const { title = '💻 Example', code, explanation } = data

  const handleCopy = () => {
    if (code) {
      navigator.clipboard?.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    }
  }

  return (
    <div className="starter-code-card">
      <div className="starter-code-head">
        <div className="starter-code-title">
          <span>{title}</span>
        </div>
        <div className="starter-code-actions">
          <button type="button" onClick={handleCopy} className="ghost-btn compact">
            {copied ? '✓ Copied' : 'Copy'}
          </button>
          {onRun && (
            <button type="button" onClick={() => onRun(code)} className="primary-btn compact">
              ▶ Run Code
            </button>
          )}
        </div>
      </div>

      <pre className="starter-code-block"><code>{code}</code></pre>

      {explanation && (
        <div className="starter-code-explanation">
          <div className="explanation-head">
            <span className="explanation-icon">🧠</span>
            <strong>{explanation.title || 'Code Explanation'}</strong>
          </div>

          {explanation.flow && (
            <div className="memory-flow-visual">
              {explanation.flow.map((node, i) => (
                <div key={i} className="memory-flow-step">
                  <div className="memory-flow-box">
                    <span className="memory-flow-main">{node.step}</span>
                    {node.label && <span className="memory-flow-sub">{node.label}</span>}
                  </div>
                  {i < explanation.flow.length - 1 && (
                    <div className="memory-flow-arrow">↓</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {explanation.conceptNote && (
            <div className="concept-callout-box">
              <span className="callout-icon">💡</span>
              <p>{explanation.conceptNote}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Web Development Parent Course Overview Card (23 Comprehensive Sections) ───
export const WebDevCourseOverviewCard = ({ onOpenLesson, chapters = [] }) => {
  // Interactive State for Section 2: How Website Works Diagram
  const [activeArchNode, setActiveArchNode] = useState('browser')

  // Interactive State for Section 7: API Request/Response Simulator
  const [selectedApiEndpoint, setSelectedApiEndpoint] = useState('users')
  const [apiLoading, setApiLoading] = useState(false)

  // Interactive State for Section 14: Responsive Preview Switcher
  const [deviceView, setDeviceView] = useState('desktop') // 'desktop' | 'tablet' | 'mobile'

  // Interactive State for Section 16: Canvas mini demo
  const canvasRef = useRef(null)
  const [canvasColor, setCanvasColor] = useState('#2563eb')
  const [canvasShape, setCanvasShape] = useState('circle')

  // Interactive State for Section 21: Quick Quiz
  const [quizSelectedOption, setQuizSelectedOption] = useState(null)
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = canvasColor

    if (canvasShape === 'circle') {
      ctx.beginPath()
      ctx.arc(100, 50, 35, 0, Math.PI * 2)
      ctx.fill()
    } else if (canvasShape === 'rect') {
      ctx.fillRect(65, 20, 70, 60)
    } else {
      ctx.beginPath()
      ctx.moveTo(100, 15)
      ctx.lineTo(140, 85)
      ctx.lineTo(60, 85)
      ctx.closePath()
      ctx.fill()
    }
  }, [canvasColor, canvasShape])

  const archNodesData = {
    user: {
      title: '1. User Action',
      icon: '👤',
      color: '#3b82f6',
      desc: 'User opens their browser and types a URL (e.g. codemasti.com) or clicks a button.'
    },
    browser: {
      title: '2. Web Browser (Client)',
      icon: '🌐',
      color: '#10b981',
      desc: 'The browser (Chrome, Safari, Firefox) translates user actions into HTTP requests and renders HTML, CSS & JavaScript onto the screen.'
    },
    request: {
      title: '3. HTTP / HTTPS Request',
      icon: '📡',
      color: '#f59e0b',
      desc: 'A secure network message sent across the Internet containing HTTP headers, cookies, URL paths, and optional JSON data payloads.'
    },
    server: {
      title: '4. Web Server',
      icon: '🖥️',
      color: '#8b5cf6',
      desc: 'A 24/7 cloud computer (e.g., AWS, Render, Vercel) listening on incoming ports that receives and routes the HTTP network traffic.'
    },
    backend: {
      title: '5. Backend Application Logic',
      icon: '⚙️',
      color: '#ec4899',
      desc: 'Node.js/Express or Python application code that verifies JWT auth tokens, validates business rules, and prepares database operations.'
    },
    database: {
      title: '6. Database Persistence',
      icon: '🗄️',
      color: '#06b6d4',
      desc: 'PostgreSQL, MySQL, or MongoDB that reliably reads, writes, updates, and queries relational records and JSON documents.'
    },
    response: {
      title: '7. Backend JSON / HTML Response',
      icon: '📦',
      color: '#14b8a6',
      desc: 'The backend formats query results into a structured HTTP 200 OK JSON response or rendered HTML package sent back to the browser.'
    },
    render: {
      title: '8. Browser DOM Render & Display',
      icon: '✨',
      color: '#22c55e',
      desc: 'The browser parses the response data, updates the React Virtual DOM, paints visual styles, and updates the user screen in milliseconds.'
    }
  }

  const apiDemoData = {
    users: {
      url: 'GET /api/users',
      status: '200 OK',
      time: '42ms',
      json: `[\n  {\n    "id": 1,\n    "name": "Liyaqat Khan",\n    "role": "Full Stack Developer",\n    "xp": 1420,\n    "badges": ["Web Master", "React Pro"]\n  },\n  {\n    "id": 2,\n    "name": "Aman Sharma",\n    "role": "Backend Engineer",\n    "xp": 980,\n    "badges": ["Node Prodigy"]\n  }\n]`
    },
    login: {
      url: 'POST /api/auth/login',
      status: '201 Created',
      time: '68ms',
      json: `{\n  "success": true,\n  "message": "Authentication successful",\n  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImV4cCI6MTc5...",\n  "user": {\n    "id": 1,\n    "name": "Liyaqat",\n    "isLoggedIn": true\n  }\n}`
    },
    products: {
      url: 'GET /api/courses',
      status: '200 OK',
      time: '35ms',
      json: `{\n  "totalCourses": 16,\n  "flagship": "Web Development",\n  "modules": ["HTML", "CSS", "JS", "React", "Node", "PostgreSQL", "DevOps"],\n  "isCertified": true\n}`
    }
  }

  const handleSimulateApi = (endpointKey) => {
    setApiLoading(true)
    setSelectedApiEndpoint(endpointKey)
    setTimeout(() => {
      setApiLoading(false)
    }, 280)
  }

  return (
    <div className="webdev-overview-container">
      {/* ── COURSE HEADER & SUMMARY ── */}
      <section className="webdev-hero-card">
        <div className="webdev-hero-badge">
          <span>🌟 FLAGSHIP PARENT COURSE</span>
        </div>
        <h1 className="webdev-hero-title">
          Web Development
        </h1>
        <p className="webdev-hero-subtitle">
          "Learn how modern websites and web applications are built — from HTML and CSS to APIs, databases, security and deployment."
        </p>

        {/* Small Course Summary Cards */}
        <div className="webdev-summary-chips-grid">
          <div className="summary-chip-item">
            <span className="chip-icon">⏱</span>
            <div className="chip-content">
              <strong>Learning Time</strong>
              <span>85+ Hours Self-Paced</span>
            </div>
          </div>
          <div className="summary-chip-item">
            <span className="chip-icon">🎯</span>
            <div className="chip-content">
              <strong>Skill Level</strong>
              <span>Beginner → Advanced</span>
            </div>
          </div>
          <div className="summary-chip-item">
            <span className="chip-icon">📚</span>
            <div className="chip-content">
              <strong>Curriculum</strong>
              <span>16 Structured Modules</span>
            </div>
          </div>
          <div className="summary-chip-item">
            <span className="chip-icon">💻</span>
            <div className="chip-content">
              <strong>Hands-on Labs</strong>
              <span>12+ Real Projects</span>
            </div>
          </div>
          <div className="summary-chip-item">
            <span className="chip-icon">🧠</span>
            <div className="chip-content">
              <strong>Interactive Practice</strong>
              <span>Quizzes & Challenges</span>
            </div>
          </div>
          <div className="summary-chip-item">
            <span className="chip-icon">💼</span>
            <div className="chip-content">
              <strong>Career Support</strong>
              <span>Interview Questions</span>
            </div>
          </div>
        </div>

        <div className="webdev-what-learn-callout">
          <h3>🎯 What will you learn?</h3>
          <p>
            You will learn the <strong>complete journey of building a web application</strong> from scratch to cloud deployment. By the end of this course, you will understand how client-side browsers interact with backend servers, design clean responsive interfaces with React, write high-performance APIs with Node & Express, persist application state in relational & NoSQL databases, secure endpoints with JWT, and ship production applications to the world using Git & Docker!
          </p>
        </div>
      </section>

      {/* ── SECTION 1 — WHAT IS WEB DEVELOPMENT? ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">1</span>
          <h2>What is Web Development?</h2>
        </div>
        
        <div className="two-col-explain-grid">
          <div className="explain-col english-box">
            <span className="lang-tag">🇬🇧 Simple English</span>
            <p>
              Web development is the comprehensive process of creating, designing, building, and maintaining websites and web applications that users access through the internet on any browser. It covers both the visual user interface (Frontend) and the server-side business logic and data storage (Backend & Databases).
            </p>
          </div>
          <div className="explain-col hinglish-box">
            <span className="lang-tag">🇮🇳 Simple Hinglish</span>
            <p>
              Simple words mein, web development ka matlab hai website ya web application ko banana, design karna, data handle karna aur internet par users ke liye 24/7 available karna. Ek complete web app mein screen par dikhne wala UI, background ka server logic, aur data store karne wali database milkar kaam karte hain.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — HOW DOES A WEBSITE WORK? (VISUAL & INTERACTIVE) ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">2</span>
          <h2>How Does a Website Work? (Interactive Architecture)</h2>
        </div>
        <p className="section-lead-text">
          Click any step in the interactive communication pipeline below to inspect what happens under the hood when a user opens a web application:
        </p>

        {/* Interactive Architecture Flow Nodes */}
        <div className="interactive-pipeline-flow">
          {Object.entries(archNodesData).map(([key, item]) => {
            const isSelected = activeArchNode === key
            return (
              <button
                key={key}
                type="button"
                className={`pipeline-node-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => setActiveArchNode(key)}
                style={{ borderColor: isSelected ? item.color : undefined }}
              >
                <span className="node-icon">{item.icon}</span>
                <span className="node-label">{item.title.split('. ')[1]}</span>
                {isSelected && <span className="node-active-indicator" style={{ background: item.color }} />}
              </button>
            )
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="pipeline-inspector-card" style={{ borderLeftColor: archNodesData[activeArchNode].color }}>
          <div className="inspector-head">
            <span className="inspector-badge" style={{ background: archNodesData[activeArchNode].color }}>
              {archNodesData[activeArchNode].icon} {archNodesData[activeArchNode].title}
            </span>
          </div>
          <p className="inspector-body">{archNodesData[activeArchNode].desc}</p>
        </div>
      </section>

      {/* ── SECTION 3 — FRONTEND VS BACKEND ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">3</span>
          <h2>Frontend vs Backend (The Two Pillars)</h2>
        </div>

        {/* Architecture Visual Tree */}
        <div className="frontend-backend-tree-visual">
          <div className="tree-root-box">
            <strong>🌐 COMPLETE WEB APPLICATION</strong>
          </div>
          <div className="tree-split-line" />
          <div className="tree-columns-grid">
            <div className="tree-pillar-card frontend-pillar">
              <div className="pillar-header">
                <span className="pillar-icon">🎨</span>
                <div>
                  <h3>FRONTEND</h3>
                  <span className="pillar-sub">Client-Side (Runs in User's Browser)</span>
                </div>
              </div>
              <p className="pillar-purpose">What the user sees, clicks, and interacts with on screen.</p>
              <div className="pillar-tech-list">
                <span className="tech-pill">📄 HTML (Structure)</span>
                <span className="tech-pill">🎨 CSS / Tailwind (Styling)</span>
                <span className="tech-pill">⚡ JavaScript (Interactivity)</span>
                <span className="tech-pill">⚛️ React / Next.js (Components)</span>
                <span className="tech-pill">🅰️ Angular / TypeScript</span>
              </div>
            </div>

            <div className="tree-pillar-card backend-pillar">
              <div className="pillar-header">
                <span className="pillar-icon">⚙️</span>
                <div>
                  <h3>BACKEND</h3>
                  <span className="pillar-sub">Server-Side (Runs on Cloud Server)</span>
                </div>
              </div>
              <p className="pillar-purpose">What runs behind the scenes to process logic, auth, and data.</p>
              <div className="pillar-tech-list">
                <span className="tech-pill">🟢 Node.js / Express</span>
                <span className="tech-pill">🐍 Python / Django / FastAPI</span>
                <span className="tech-pill">🔌 REST APIs & Microservices</span>
                <span className="tech-pill">🔐 JWT Auth & Security</span>
                <span className="tech-pill">🗄️ PostgreSQL / MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — FRONTEND DEVELOPMENT ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">4</span>
          <h2>Frontend Development Essentials (HTML, CSS, JavaScript)</h2>
        </div>
        <p className="section-lead-text">
          Frontend is built on the holy trinity of web technologies: HTML provides structure, CSS provides visual styling, and JavaScript gives brain & behavior.
        </p>

        <div className="frontend-trio-grid">
          {/* HTML Card */}
          <div className="frontend-tech-card">
            <div className="trio-head">
              <span className="trio-icon">📄</span>
              <div>
                <h3>HTML (HyperText Markup Language)</h3>
                <span className="trio-role">Webpage Structure & Content Skeleton</span>
              </div>
            </div>
            <p className="trio-desc">
              Defines headings, paragraphs, forms, tables, images, semantic tags (<code className="inline-code">&lt;header&gt;</code>, <code className="inline-code">&lt;main&gt;</code>, <code className="inline-code">&lt;footer&gt;</code>), and accessibility landmarks.
            </p>
            <pre className="trio-code-snippet"><code>{`<h1>Hello CodeMasti</h1>
<p>Learn Web Development</p>`}</code></pre>
            <div className="snippet-explain">
              <small>• <code className="inline-code">&lt;h1&gt;</code>: Main primary top-level heading.</small>
              <small>• <code className="inline-code">&lt;p&gt;</code>: Regular text paragraph for readable content.</small>
            </div>
            <Link to="/courses/html" className="trio-link-btn">
              Explore Dedicated HTML Course →
            </Link>
          </div>

          {/* CSS Card */}
          <div className="frontend-tech-card">
            <div className="trio-head">
              <span className="trio-icon">🎨</span>
              <div>
                <h3>CSS (Cascading Style Sheets)</h3>
                <span className="trio-role">Visual Presentation, Colors & Layouts</span>
              </div>
            </div>
            <p className="trio-desc">
              Controls selectors, Box Model (Margin/Border/Padding), typography, colors, Flexbox 1D alignment, CSS Grid 2D responsive matrices, animations, and media queries.
            </p>
            <pre className="trio-code-snippet"><code>{`.hero-card {
  display: flex;
  justify-content: center;
  background: #2563eb;
  color: #ffffff;
  padding: 20px;
  border-radius: 12px;
}`}</code></pre>
            <Link to="/courses/css" className="trio-link-btn">
              Explore Dedicated CSS Course →
            </Link>
          </div>

          {/* JavaScript Card */}
          <div className="frontend-tech-card">
            <div className="trio-head">
              <span className="trio-icon">⚡</span>
              <div>
                <h3>JavaScript (Core Logic & DOM)</h3>
                <span className="trio-role">Dynamic Behavior, Events & Async Data</span>
              </div>
            </div>
            <p className="trio-desc">
              Powers variables, functions, loops, DOM manipulation, button click listeners, localStorage state persistence, Promises, and <code className="inline-code">async/await fetch()</code> API calls.
            </p>
            <pre className="trio-code-snippet"><code>{`const btn = document.querySelector('#btn');
btn.addEventListener('click', async () => {
  const res = await fetch('/api/user');
  const data = await res.json();
  console.log('Welcome', data.name);
});`}</code></pre>
            <Link to="/courses/javascript" className="trio-link-btn">
              Explore Dedicated JavaScript Course →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — MODERN FRONTEND DEVELOPMENT ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">5</span>
          <h2>Modern Frontend Development (Frameworks & TypeScript)</h2>
        </div>
        <p className="section-lead-text">
          As web apps grow complex, developers use component-based frameworks and meta-frameworks instead of plain vanilla HTML files to ensure reusable components, reactive state management, seamless routing, and type safety.
        </p>

        <div className="modern-frameworks-grid">
          <Link to="/courses/react" className="framework-tile-card">
            <span className="fw-icon">⚛️</span>
            <h4>React.js</h4>
            <p>Component-driven UI, Virtual DOM, React Hooks (<code className="inline-code">useState</code>, <code className="inline-code">useEffect</code>), and massive global ecosystem.</p>
            <span className="fw-jump-link">Open React Course →</span>
          </Link>

          <Link to="/courses/nextjs" className="framework-tile-card">
            <span className="fw-icon">▲</span>
            <h4>Next.js</h4>
            <p>Full-stack React framework offering Server-Side Rendering (SSR), Static Site Generation (SSG), and top SEO performance.</p>
            <span className="fw-jump-link">Open Next.js Course →</span>
          </Link>

          <Link to="/courses/angular" className="framework-tile-card">
            <span className="fw-icon">🅰️</span>
            <h4>Angular</h4>
            <p>Comprehensive enterprise framework with built-in dependency injection, two-way data binding, and TypeScript defaults.</p>
            <span className="fw-jump-link">Open Angular Course →</span>
          </Link>

          <Link to="/courses/typescript" className="framework-tile-card">
            <span className="fw-icon">🔷</span>
            <h4>TypeScript</h4>
            <p>Statically typed JavaScript that catches bugs at compile time before code ever runs in production.</p>
            <span className="fw-jump-link">Open TypeScript Course →</span>
          </Link>
        </div>
      </section>

      {/* ── SECTION 6 — BACKEND DEVELOPMENT ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">6</span>
          <h2>Backend Development (Server Logic & APIs)</h2>
        </div>

        {/* Real-life E-Commerce Order Flow */}
        <div className="backend-order-flow-box">
          <h4>🛒 Real-Life Example: How an Online Order is Processed</h4>
          <div className="order-flow-steps">
            <div className="flow-step">
              <span className="step-badge">1. Frontend</span>
              <p>"Customer clicks 'Pay & Place Order' on the website checkout page."</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="step-badge">2. Backend</span>
              <p>"Backend receives order, validates payment, checks stock inventory, and calculates tax."</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="step-badge">3. Database</span>
              <p>"Order record is saved with unique transaction ID in PostgreSQL / MongoDB database."</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <span className="step-badge">4. Response</span>
              <p>"Server returns Success 201 Created and frontend displays order confirmation receipt!"</p>
            </div>
          </div>
        </div>

        <div className="backend-stacks-strip">
          <div className="stack-advice-banner">
            <strong>💡 Golden Rule for Beginners:</strong> "Choose <u>ONE</u> backend stack first (like Node.js + Express or Python). Master it completely before exploring other languages!"
          </div>
          <div className="backend-links-row">
            <Link to="/courses/nodejs" className="backend-course-chip">
              <span>🟢 Node.js</span>
            </Link>
            <Link to="/courses/expressjs" className="backend-course-chip">
              <span>🚂 Express.js</span>
            </Link>
            <Link to="/courses/python" className="backend-course-chip">
              <span>🐍 Python (Django/FastAPI)</span>
            </Link>
            <Link to="/courses/java" className="backend-course-chip">
              <span>☕ Java (Spring Boot)</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — APIS & CLIENT-SERVER COMMUNICATION ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">7</span>
          <h2>APIs (Application Programming Interfaces) & JSON</h2>
        </div>
        <p className="section-lead-text">
          An API is a defined bridge allowing the Frontend (React client) to talk to the Backend server and exchange structured data format called <strong>JSON (JavaScript Object Notation)</strong>.
        </p>

        {/* Live Interactive API Request/Response Simulator */}
        <div className="interactive-api-playground">
          <div className="api-sim-header">
            <div className="api-endpoint-selector">
              <button
                type="button"
                className={`api-tab-btn ${selectedApiEndpoint === 'users' ? 'active' : ''}`}
                onClick={() => handleSimulateApi('users')}
              >
                GET /api/users
              </button>
              <button
                type="button"
                className={`api-tab-btn ${selectedApiEndpoint === 'login' ? 'active' : ''}`}
                onClick={() => handleSimulateApi('login')}
              >
                POST /api/auth/login
              </button>
              <button
                type="button"
                className={`api-tab-btn ${selectedApiEndpoint === 'products' ? 'active' : ''}`}
                onClick={() => handleSimulateApi('products')}
              >
                GET /api/courses
              </button>
            </div>
            <div className="api-status-badge">
              <span>Status: <strong>{apiDemoData[selectedApiEndpoint].status}</strong></span>
              <span>Time: <strong>{apiDemoData[selectedApiEndpoint].time}</strong></span>
            </div>
          </div>

          <div className="api-terminal-output">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="terminal-title">Response JSON Body</span>
            </div>
            <pre className="terminal-code">
              {apiLoading ? 'Sending HTTP Request & fetching JSON...' : apiDemoData[selectedApiEndpoint].json}
            </pre>
          </div>
        </div>

        <div className="http-methods-grid">
          <div className="method-badge get"><strong>GET</strong>: Read & fetch data</div>
          <div className="method-badge post"><strong>POST</strong>: Create new record</div>
          <div className="method-badge put"><strong>PUT / PATCH</strong>: Update existing data</div>
          <div className="method-badge delete"><strong>DELETE</strong>: Remove record</div>
          <div className="method-badge codes"><strong>Status Codes</strong>: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found), 500 (Server Error)</div>
        </div>

        <div style={{ marginTop: 12 }}>
          <Link to="/courses/restapi" className="trio-link-btn" style={{ display: 'inline-flex' }}>
            Explore Dedicated REST APIs Course →
          </Link>
        </div>
      </section>

      {/* ── SECTION 8 — DATABASES ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">8</span>
          <h2>Databases (SQL vs NoSQL vs In-Memory Cache)</h2>
        </div>
        <p className="section-lead-text">
          Websites need databases to permanently remember user registrations, login credentials, blog posts, transactions, and product inventories.
        </p>

        <div className="databases-comparison-grid">
          <div className="db-card sql-card">
            <div className="db-header">
              <span className="db-icon">🐬</span>
              <div>
                <h3>Relational Databases (SQL)</h3>
                <span className="db-sub">MySQL & PostgreSQL</span>
              </div>
            </div>
            <p>Structured tables, strict schemas, foreign keys, and ACID transactions for financial records and user accounts.</p>
            <div className="db-links-row">
              <Link to="/courses/mysql" className="db-link-pill">MySQL Course →</Link>
              <Link to="/courses/postgresql" className="db-link-pill">PostgreSQL Course →</Link>
            </div>
          </div>

          <div className="db-card nosql-card">
            <div className="db-header">
              <span className="db-icon">🍃</span>
              <div>
                <h3>Document Databases (NoSQL)</h3>
                <span className="db-sub">MongoDB & Atlas</span>
              </div>
            </div>
            <p>Flexible JSON-like BSON documents with dynamic schema fields, nested objects, and fast horizontal scaling.</p>
            <div className="db-links-row">
              <Link to="/courses/mongodb" className="db-link-pill">MongoDB Course →</Link>
            </div>
          </div>

          <div className="db-card redis-card">
            <div className="db-header">
              <span className="db-icon">⚡</span>
              <div>
                <h3>In-Memory Caching (Redis)</h3>
                <span className="db-sub">Ultra-Fast RAM Storage</span>
              </div>
            </div>
            <p>Redis is commonly used for caching heavy query results, storing temporary user session keys, and rate-limiting rather than a direct replacement for your main database.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — AUTHENTICATION & SECURITY ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">9</span>
          <h2>Authentication & Web Security Fundamentals</h2>
        </div>

        <div className="auth-comparison-box">
          <div className="auth-card">
            <span className="auth-icon">🪪</span>
            <h4>Authentication (AuthN)</h4>
            <p className="auth-tagline">"Who are you?"</p>
            <p className="auth-desc">Verifying identity when user logs in with Email & Password or Google OAuth.</p>
          </div>
          <div className="auth-vs-badge">VS</div>
          <div className="auth-card">
            <span className="auth-icon">🛡️</span>
            <h4>Authorization (AuthZ)</h4>
            <p className="auth-tagline">"What are you allowed to do?"</p>
            <p className="auth-desc">Checking permissions (e.g. Regular student vs Admin who can delete courses).</p>
          </div>
        </div>

        <div className="security-pillars-grid">
          <div className="sec-pill-item">🔒 <strong>JWT & Sessions</strong>: Stateless token authorization</div>
          <div className="sec-pill-item">🔑 <strong>Password Hashing</strong>: Bcrypt one-way salt encryption</div>
          <div className="sec-pill-item">🌐 <strong>HTTPS / SSL</strong>: Encrypted in-flight wire traffic</div>
          <div className="sec-pill-item">🛡️ <strong>CORS & CSP</strong>: Protecting browser cross-origin leaks</div>
          <div className="sec-pill-item">🧹 <strong>Input Validation</strong>: Sanitizing queries against SQL Injection & XSS</div>
          <div className="sec-pill-item">⏱️ <strong>Rate Limiting</strong>: Blocking brute-force DDoS attempts</div>
        </div>

        <div style={{ marginTop: 12 }}>
          <Link to="/courses/auth" className="trio-link-btn" style={{ display: 'inline-flex' }}>
            Explore Dedicated Auth & Security Course →
          </Link>
        </div>
      </section>

      {/* ── SECTION 10 — GIT & GITHUB ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">10</span>
          <h2>Git & GitHub (Version Control & Teamwork)</h2>
        </div>
        
        <div className="git-workflow-visual">
          <div className="git-step-item">
            <span className="git-icon">💻</span>
            <strong>Developer</strong>
            <small>Writes code on laptop</small>
          </div>
          <div className="git-arrow">↓ <code>git add / commit</code></div>
          <div className="git-step-item">
            <span className="git-icon">🐙</span>
            <strong>Local Git</strong>
            <small>Tracks history & branches</small>
          </div>
          <div className="git-arrow">↓ <code>git push origin</code></div>
          <div className="git-step-item">
            <span className="git-icon">☁️</span>
            <strong>GitHub Cloud</strong>
            <small>Remote repo & Pull Requests</small>
          </div>
          <div className="git-arrow">↓ Code Review</div>
          <div className="git-step-item">
            <span className="git-icon">👥</span>
            <strong>Team Collaboration</strong>
            <small>Merged to production</small>
          </div>
        </div>

        <div style={{ marginTop: 14 }}>
          <Link to="/courses/git" className="trio-link-btn" style={{ display: 'inline-flex' }}>
            Explore Dedicated Git & GitHub Course →
          </Link>
        </div>
      </section>

      {/* ── SECTION 11 — TESTING & QUALITY ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">11</span>
          <h2>Testing & Software Quality Assurance</h2>
        </div>
        <p className="section-lead-text">
          Automated tests prevent production bugs and ensure your application works reliably whenever new code is merged.
        </p>

        <div className="testing-levels-grid">
          <div className="test-level-card">
            <h4>🧪 Unit Testing</h4>
            <p>Testing single functions or isolated components in isolation.</p>
            <span className="tool-tag">Tools: Jest / Vitest</span>
          </div>
          <div className="test-level-card">
            <h4>🔌 Integration Testing</h4>
            <p>Testing how API routes, database connections, and services interact.</p>
            <span className="tool-tag">Tools: Supertest / Postman</span>
          </div>
          <div className="test-level-card">
            <h4>🎭 End-to-End (E2E)</h4>
            <p>Simulating real user journeys (signup, checkout, click) in a browser.</p>
            <span className="tool-tag">Tools: Playwright / Cypress</span>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <Link to="/courses/testing" className="trio-link-btn" style={{ display: 'inline-flex' }}>
            Explore Dedicated Testing Course →
          </Link>
        </div>
      </section>

      {/* ── SECTION 12 — WEB PERFORMANCE OPTIMIZATION ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">12</span>
          <h2>Web Performance Optimization & Core Web Vitals</h2>
        </div>

        {/* Slow vs Fast Website Comparison */}
        <div className="perf-comparison-container">
          <div className="perf-box slow-box">
            <h4>❌ SLOW WEBSITE (High Bounce Rate)</h4>
            <ul>
              <li>⚠️ Uncompressed 5MB heavy PNG images</li>
              <li>⚠️ Giant single monolithic JavaScript bundle</li>
              <li>⚠️ Zero browser caching; slow cold database queries</li>
              <li>⚠️ High Core Web Vitals LCP &gt; 4.5s</li>
            </ul>
          </div>

          <div className="perf-box fast-box">
            <h4>✅ FAST WEBSITE (Happy Users & Top SEO)</h4>
            <ul>
              <li>⚡ Modern WebP/AVIF compressed responsive images</li>
              <li>⚡ Code splitting & dynamic <code className="inline-code">React.lazy()</code> imports</li>
              <li>⚡ CDN edge caching & Redis query memoization</li>
              <li>⚡ Blazing fast Core Web Vitals LCP &lt; 1.2s</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <Link to="/courses/performance" className="trio-link-btn" style={{ display: 'inline-flex' }}>
            Explore Dedicated Performance Course →
          </Link>
        </div>
      </section>

      {/* ── SECTION 13 — ACCESSIBILITY (A11Y) ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">13</span>
          <h2>Web Accessibility (a11y for Everyone)</h2>
        </div>
        <p className="section-lead-text">
          Accessibility means building web applications usable by all individuals, including people with visual, motor, or auditory impairments.
        </p>

        <div className="a11y-pillars-grid">
          <div className="a11y-card">
            <strong>⌨️ Keyboard Navigation</strong>
            <p>Ensuring every button, input, and modal can be focused and triggered with Tab and Enter keys.</p>
          </div>
          <div className="a11y-card">
            <strong>🔊 Screen Readers & ARIA</strong>
            <p>Using semantic tags and descriptive aria-labels so screen readers announce UI controls properly.</p>
          </div>
          <div className="a11y-card">
            <strong>🎨 High Color Contrast</strong>
            <p>Maintaining minimum 4.5:1 text-to-background contrast ratio for effortless readability.</p>
          </div>
          <div className="a11y-card">
            <strong>🖼️ Alt Text on Images</strong>
            <p>Descriptive <code className="inline-code">alt="..."</code> attributes so missing media or readers have full context.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 14 — RESPONSIVE WEB DESIGN ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">14</span>
          <h2>Responsive Web Design (Desktop, Tablet & Mobile)</h2>
        </div>
        <p className="section-lead-text">
          One website code base that adapts dynamically across desktop monitors, iPads, and mobile smartphones using CSS Media Queries, Flexbox, and CSS Grid.
        </p>

        {/* Interactive Device Switcher Simulator */}
        <div className="responsive-device-simulator">
          <div className="device-switcher-bar">
            <button
              type="button"
              className={`device-btn ${deviceView === 'desktop' ? 'active' : ''}`}
              onClick={() => setDeviceView('desktop')}
            >
              🖥️ Desktop (1200px)
            </button>
            <button
              type="button"
              className={`device-btn ${deviceView === 'tablet' ? 'active' : ''}`}
              onClick={() => setDeviceView('tablet')}
            >
              📱 Tablet (768px)
            </button>
            <button
              type="button"
              className={`device-btn ${deviceView === 'mobile' ? 'active' : ''}`}
              onClick={() => setDeviceView('mobile')}
            >
              📱 Mobile (375px)
            </button>
          </div>

          <div className={`simulated-screen-frame ${deviceView}`}>
            <div className="sim-navbar">
              <span>CodeMasti</span>
              <span className="sim-nav-links">Courses • Roadmaps • Projects</span>
            </div>
            <div className="sim-grid-content">
              <div className="sim-card">Module 1: HTML</div>
              <div className="sim-card">Module 2: CSS</div>
              <div className="sim-card">Module 3: JS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 15 — DEVOPS & DEPLOYMENT ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">15</span>
          <h2>DevOps, Docker & Cloud Deployment</h2>
        </div>

        <div className="deployment-pipeline-strip">
          <div className="deploy-step">1. Local Code</div>
          <div className="deploy-arrow">→</div>
          <div className="deploy-step">2. GitHub Repo</div>
          <div className="deploy-arrow">→</div>
          <div className="deploy-step">3. CI/CD Build</div>
          <div className="deploy-arrow">→</div>
          <div className="deploy-step">4. Docker Container</div>
          <div className="deploy-arrow">→</div>
          <div className="deploy-step">5. Vercel / Render Cloud</div>
          <div className="deploy-arrow">→</div>
          <div className="deploy-step">6. Live HTTPS Domain</div>
        </div>

        <div style={{ marginTop: 14 }}>
          <Link to="/courses/devops" className="trio-link-btn" style={{ display: 'inline-flex' }}>
            Explore Dedicated DevOps & Docker Course →
          </Link>
        </div>
      </section>

      {/* ── SECTION 16 — GRAPHICS: SVG & CANVAS ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">16</span>
          <h2>Web Graphics: Scalable SVG & HTML5 Canvas</h2>
        </div>

        <div className="graphics-duo-grid">
          {/* Live SVG Card */}
          <div className="graphics-card">
            <h4>📐 Scalable Vector Graphics (SVG)</h4>
            <p>XML-based vector math that stays crystal clear at any zoom level without pixelation.</p>
            <div className="interactive-svg-box">
              <svg width="180" height="90" viewBox="0 0 180 90">
                <circle cx="45" cy="45" r="35" fill="#3b82f6" opacity="0.85" />
                <rect x="75" y="15" width="60" height="60" rx="8" fill="#10b981" opacity="0.85" />
                <polygon points="150,15 175,75 125,75" fill="#f59e0b" opacity="0.85" />
              </svg>
            </div>
            <small>Live inline SVG shapes composed directly with clean markup.</small>
          </div>

          {/* Interactive HTML5 Canvas Card */}
          <div className="graphics-card">
            <h4>🎨 HTML5 Canvas (Pixel Rendering)</h4>
            <p>High-performance JavaScript pixel graphics engine used for charts, games, and animations.</p>
            <div className="canvas-controls-row">
              <button type="button" onClick={() => setCanvasShape('circle')} className="ghost-btn compact">Circle</button>
              <button type="button" onClick={() => setCanvasShape('rect')} className="ghost-btn compact">Square</button>
              <button type="button" onClick={() => setCanvasShape('tri')} className="ghost-btn compact">Triangle</button>
              <button type="button" onClick={() => setCanvasColor(canvasColor === '#2563eb' ? '#10b981' : '#2563eb')} className="ghost-btn compact">Color</button>
            </div>
            <div className="interactive-canvas-box">
              <canvas ref={canvasRef} width="200" height="100" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 17 — TOOLS EVERY WEB DEVELOPER USES ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">17</span>
          <h2>Tools Every Web Developer Uses</h2>
        </div>

        <div className="developer-tools-grid">
          <div className="tool-card">
            <strong>💻 VS Code</strong>
            <p>Industry-standard source code editor with extensions, autocomplete & debugging.</p>
          </div>
          <div className="tool-card">
            <strong>🔍 Chrome DevTools</strong>
            <p>Inspect DOM elements, debug live console errors, and measure network requests.</p>
          </div>
          <div className="tool-card">
            <strong>🐙 Git & GitHub</strong>
            <p>Track code change versions and collaborate seamlessly with worldwide engineering teams.</p>
          </div>
          <div className="tool-card">
            <strong>📦 npm & Node.js</strong>
            <p>Package manager to install open-source libraries and execute JavaScript tooling.</p>
          </div>
          <div className="tool-card">
            <strong>📬 Postman</strong>
            <p>Test REST endpoints, headers, and payload responses before frontend integration.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 18 — WEB DEVELOPMENT ROADMAP (LEARNING PATH) ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">18</span>
          <h2>Complete Web Development Roadmap (14 Levels)</h2>
        </div>

        <div className="roadmap-levels-grid">
          {[
            { lvl: 1, name: 'HTML5 Foundations', link: '/courses/html', icon: '🧱' },
            { lvl: 2, name: 'CSS3 & Tailwind', link: '/courses/css', icon: '🎨' },
            { lvl: 3, name: 'JavaScript & DOM', link: '/courses/javascript', icon: '⚡' },
            { lvl: 4, name: 'Git & GitHub', link: '/courses/git', icon: '🐙' },
            { lvl: 5, name: 'React.js & Next.js', link: '/courses/react', icon: '⚛️' },
            { lvl: 6, name: 'TypeScript', link: '/courses/typescript', icon: '🔷' },
            { lvl: 7, name: 'Node.js & Express', link: '/courses/nodejs', icon: '🟢' },
            { lvl: 8, name: 'REST APIs & JSON', link: '/courses/restapi', icon: '🔌' },
            { lvl: 9, name: 'PostgreSQL & MongoDB', link: '/courses/mongodb', icon: '🗄️' },
            { lvl: 10, name: 'JWT Auth & Security', link: '/courses/auth', icon: '🔐' },
            { lvl: 11, name: 'Automated Testing', link: '/courses/testing', icon: '🧪' },
            { lvl: 12, name: 'Performance & Caching', link: '/courses/performance', icon: '🚀' },
            { lvl: 13, name: 'Docker & DevOps', link: '/courses/devops', icon: '🐳' },
            { lvl: 14, name: 'Capstone Projects', link: '/projects', icon: '🏆' }
          ].map(item => (
            <Link key={item.lvl} to={item.link} className="roadmap-level-pill">
              <span className="level-badge">L{item.lvl}</span>
              <span className="level-name">{item.icon} {item.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SECTION 19 — CAREER PATHS ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">19</span>
          <h2>Career Paths & Job Profiles</h2>
        </div>

        <div className="webdev-careers-grid">
          <div className="career-role-card">
            <div className="career-header">
              <span className="career-icon">🎨</span>
              <div>
                <h3>Frontend Developer</h3>
                <span className="career-salary">₹6 - 18 LPA / $85k - $130k</span>
              </div>
            </div>
            <p>Builds responsive, accessible web interfaces and single-page applications using React, Next.js, and Tailwind.</p>
            <div className="career-skills">
              <span>HTML/CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Git</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="career-role-card">
            <div className="career-header">
              <span className="career-icon">⚙️</span>
              <div>
                <h3>Backend Developer</h3>
                <span className="career-salary">₹7 - 22 LPA / $95k - $145k</span>
              </div>
            </div>
            <p>Designs scalable server architectures, REST APIs, database schemas, authentication, and security protections.</p>
            <div className="career-skills">
              <span>Node.js</span>
              <span>Express</span>
              <span>PostgreSQL</span>
              <span>MongoDB</span>
              <span>JWT Auth</span>
            </div>
          </div>

          <div className="career-role-card highlight">
            <div className="career-header">
              <span className="career-icon">🚀</span>
              <div>
                <h3>Full Stack Engineer</h3>
                <span className="career-salary">₹10 - 30+ LPA / $110k - $170k</span>
              </div>
            </div>
            <p>End-to-end product engineer capable of architecting frontend UIs, backend servers, databases, and cloud deployments.</p>
            <div className="career-skills">
              <span>React + Next.js</span>
              <span>Node + Express</span>
              <span>SQL + NoSQL</span>
              <span>Docker</span>
              <span>Cloud CI/CD</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 20 — REAL-WORLD PROJECTS ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">20</span>
          <h2>Now Build Something (Real-World Projects)</h2>
        </div>
        <p className="section-lead-text">
          Theory is incomplete without hands-on implementation. Practice building projects categorized across three difficulty tiers:
        </p>

        <div className="project-tiers-grid">
          <div className="tier-card beginner">
            <h4>🌱 Beginner Tier</h4>
            <ul>
              <li>✓ Personal Developer Portfolio</li>
              <li>✓ Interactive Todo App with LocalStorage</li>
              <li>✓ Responsive Calculator</li>
              <li>✓ Live Weather App with Fetch API</li>
            </ul>
            <Link to="/projects" className="tier-explore-link">Explore Projects →</Link>
          </div>

          <div className="tier-card intermediate">
            <h4>⚡ Intermediate Tier</h4>
            <ul>
              <li>✓ Expense Tracker & Dashboard</li>
              <li>✓ Multi-User Blog with Markdown</li>
              <li>✓ E-Commerce Product Catalog with Cart</li>
              <li>✓ Admin Analytics Dashboard</li>
            </ul>
            <Link to="/projects" className="tier-explore-link">Explore Projects →</Link>
          </div>

          <div className="tier-card advanced">
            <h4>🏆 Advanced Tier</h4>
            <ul>
              <li>✓ Full Stack MERN / PERN E-Commerce</li>
              <li>✓ Learning Management System (LMS)</li>
              <li>✓ Tech Job Portal with Resume Search</li>
              <li>✓ Real-Time Chat & Collaboration SaaS</li>
            </ul>
            <Link to="/projects" className="tier-explore-link">Explore Projects →</Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 21 — QUICK QUIZ ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">21</span>
          <h2>Quick Knowledge Check</h2>
        </div>

        <div className="overview-quiz-box">
          <p className="quiz-question-text">
            <strong>Question:</strong> Which part of a web application usually handles business logic, security authentication, and database communication?
          </p>

          <div className="quiz-options-list">
            {[
              { id: 'A', text: 'A. Frontend (Browser UI)' },
              { id: 'B', text: 'B. Backend (Server)', isCorrect: true },
              { id: 'C', text: 'C. HTML' },
              { id: 'D', text: 'D. CSS' }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                className={`quiz-opt-btn ${quizSelectedOption === opt.id ? 'selected' : ''} ${quizSubmitted && opt.isCorrect ? 'correct' : ''} ${quizSubmitted && quizSelectedOption === opt.id && !opt.isCorrect ? 'wrong' : ''}`}
                onClick={() => {
                  if (!quizSubmitted) {
                    setQuizSelectedOption(opt.id)
                  }
                }}
              >
                {opt.text}
              </button>
            ))}
          </div>

          <div className="quiz-action-bar">
            {!quizSubmitted ? (
              <button
                type="button"
                className="primary-btn compact"
                disabled={!quizSelectedOption}
                onClick={() => setQuizSubmitted(true)}
              >
                Check Answer
              </button>
            ) : (
              <div className="quiz-result-explanation">
                {quizSelectedOption === 'B' ? (
                  <span style={{ color: '#10b981', fontWeight: 800 }}>✅ Correct! Backend runs on the server to execute business rules, authenticate users, and query databases.</span>
                ) : (
                  <span style={{ color: '#ef4444', fontWeight: 800 }}>❌ Incorrect. The correct answer is B. Backend. Frontend handles UI presentation, while Backend handles business logic and DB communication.</span>
                )}
                <button
                  type="button"
                  className="ghost-btn compact"
                  style={{ marginLeft: 12 }}
                  onClick={() => {
                    setQuizSubmitted(false)
                    setQuizSelectedOption(null)
                  }}
                >
                  Retry Quiz
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTION 22 — REMEMBER THIS (CODEMASTI SUMMARY CHEATSHEET) ── */}
      <section className="webdev-section-block">
        <div className="section-title-strip">
          <span className="section-num-badge">22</span>
          <h2>🧠 REMEMBER (The Complete Web Dev Cheatsheet)</h2>
        </div>

        <div className="remember-cheatsheet-grid">
          <div className="cheat-item"><strong>HTML</strong> ➔ <span>Structure & Semantics</span></div>
          <div className="cheat-item"><strong>CSS</strong> ➔ <span>Visual Styling & Layouts</span></div>
          <div className="cheat-item"><strong>JavaScript</strong> ➔ <span>Behavior & Interactivity</span></div>
          <div className="cheat-item"><strong>React / Angular</strong> ➔ <span>Component UI Applications</span></div>
          <div className="cheat-item"><strong>Backend</strong> ➔ <span>Server-Side Business Logic</span></div>
          <div className="cheat-item"><strong>API</strong> ➔ <span>Client-Server Communication</span></div>
          <div className="cheat-item"><strong>Database</strong> ➔ <span>Data Storage & Persistence</span></div>
          <div className="cheat-item"><strong>Git & GitHub</strong> ➔ <span>Version Control & Teamwork</span></div>
          <div className="cheat-item"><strong>Testing</strong> ➔ <span>Software Reliability & QA</span></div>
          <div className="cheat-item"><strong>Security</strong> ➔ <span>Data & Endpoint Protection</span></div>
          <div className="cheat-item"><strong>Deployment</strong> ➔ <span>Making the App Live to the World</span></div>
        </div>
      </section>

      {/* ── SECTION 23 — NEXT STEPS & ACTION BUTTONS ── */}
      <section className="webdev-section-block next-steps-block">
        <div className="next-steps-header">
          <span className="next-congrats-badge">🎉 YOU'VE UNDERSTOOD THE COMPLETE MAP</span>
          <h2>Ready to Begin Your Web Development Journey?</h2>
          <p>Choose your starting path below to jump directly into hands-on code exercises and structured lessons:</p>
        </div>

        <div className="next-steps-actions-grid">
          <Link to="/courses/html" className="next-action-btn primary">
            🚀 Start Module 1: HTML →
          </Link>
          <Link to="/roadmaps" className="next-action-btn secondary">
            🗺️ View Career Roadmaps →
          </Link>
          <Link to="/courses" className="next-action-btn outline">
            🎨 Explore All Courses →
          </Link>
          <Link to="/projects" className="next-action-btn outline">
            💻 Explore Project Arena →
          </Link>
        </div>
      </section>
    </div>
  )
}


// ─── AdSense & Sponsored Placement Card ───────────────────────
export const AdSenseCard = () => {
  return (
    <div className="adsense-rail-card">
      <div className="adsense-card-header">
        <span className="adsense-adchoices-tag">
          AdChoices <span className="adchoices-info">ℹ</span>
        </span>
      </div>

      <div className="adsense-card-content">
        <div className="adsense-brand-row">
          <div className="adsense-brand-logo">
            <strong>DELL</strong><span>Technologies</span>
          </div>
        </div>

        <h4 className="adsense-ad-title">
          Laptops built for workday breakthroughs.
        </h4>
        <p className="adsense-ad-desc">
          The Dell Pro laptop powered by Intel® Core™ Ultra with Intel vPro®.
        </p>

        <div className="adsense-ad-media">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80"
            alt="Workplace productivity"
            loading="lazy"
            className="adsense-ad-image"
          />
        </div>

        <div className="adsense-ad-footer">
          <div className="adsense-partner-logo">
            <span className="intel-badge">intel. <strong>CORE</strong> <small>ULTRA</small></span>
          </div>
          <a
            href="https://www.dell.com"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="adsense-explore-btn"
          >
            Explore More
          </a>
        </div>
      </div>
    </div>
  )
}



