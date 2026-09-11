import { useState, useEffect, useMemo, useRef, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, ChevronLeft, ChevronRight, ChevronDown, Terminal, Check, AlertTriangle,
  Code2, BookOpen, Clock,
  Bookmark, CheckCircle2, Play, Copy, RotateCcw, Shuffle, BarChart3, ArrowLeft,
  Award
} from 'lucide-react'
import { FlowDiagram, BrowserPipeline, Flashcard, CodeBreakdown, InteractiveDom, MastirSirCard, FunFactBanner, StoryCard, AnimatedHtmlFlow, WhyNeedItCard, StarterCodeCard, AdSenseCard, WebDevCourseOverviewCard, DsaArchitectureTreeCard, DsaWhyNeedItRewritten, DsaSearchComparisonCard, DsaDsVsAlgoTable, DsaConceptMappingCard, DsaFlowArchitectureCard, DsaDryRunCard, DsaMemoryTrickCard, DsaQuickRevisionCard, DsaOperationsGrid, DsaWhyNeedDsCard, DsaSameDataDiffOrgCard, DsaNoBestDsCard, DsaAlgoCharacteristicsCard, DsaSimpleExampleCard, DsaWhyNeedAlgoCard, DsaSameProblemDiffAlgoCard, DsaAlgoVsProgramCard, DsaDsPlusAlgoCard, DsaInputScaleConceptCard, DsaApproachComparisonCard, DsaComplexityMattersCard, DsaRealWorldMattersCard, DsaWhyBinarySearchMattersCard, DsaTradeoffsCard, DsaComparisonTableCard, DsaClarificationCard, DsaRealWorldExampleCard, DsaWhyStructureMattersCard, DsaDataVsDsVisualDiagram, DsaGoodAlgoVisualDiagram, DsaFormulaCard, DsaDsHierarchyCard, DsaLinearVsNonLinearCard, DsaWhyDifferentDsCard, DsaChooseDsExerciseCard, DsaOperationComplexityTableCard, DsaDsAtAGlanceCard, DsaTypesVisualDiagram, DsaLinearVsNonLinearVisualDiagram, DsaSizeVsCapacityCard, DsaStaticVsDynamicDiagram, DsaAdtVsDsCard, DsaAdtExamplesCard, DsaAdtVisualDiagram, DsaRealWorldApplicationMapCard, DsaScaleMattersCard, DsaRealWorldVisualDiagram } from '../components/LessonWidgets'
import QuizBlock from '../components/QuizBlock'
import DsaVisualizerLab from '../components/DsaVisualizerLab'
import DsaDryRunTracer from '../components/DsaDryRunTracer'
import DsaComplexityVisualizer from '../components/DsaComplexityVisualizer'
import DsaPatternRecognition from '../components/DsaPatternRecognition'
import DsaInterviewSimulator from '../components/DsaInterviewSimulator'
import DsaCheatSheets from '../components/DsaCheatSheets'
import DsaMultiLangCode from '../components/DsaMultiLangCode'
import SystemDesignLab from '../components/SystemDesignLab'
import HrInterviewStudio from '../components/HrInterviewStudio'
import { buildDomTree, getHtmlValidation, markLessonVisited } from '../utils/helpers'
import { saveQuizAttempt, getProgress, getLessonNote, saveLessonNote, recordLastLesson } from '../utils/storage'
import { getAllLessons, getLessonUrl, getQuestionsUrl } from '../utils/seo'
import { getTopicQuestions } from '../utils/topicQuestionsEngine'
import { COURSE_CATALOG } from '../courseCatalog'

// ── Clean Chapter Title Helper (Removes "Chapter X — ", "Module X: ", etc.) ──
export const cleanChapterTitle = (title) => {
  if (!title) return ''
  return title
    .replace(/^(Chapter|Module|Section)\s*\d+[\s:—–-]+/i, '')
    .replace(/^[\d+.]+\s*/, '')
    .trim()
}

// ── Course Catalog Chapters Helper ────────────────────────────
const getCourseChapters = (courseId, selectedCourse) => {
  if (selectedCourse && selectedCourse.id === courseId && selectedCourse.chapters) {
    return selectedCourse.chapters.map(ch => ({
      title: cleanChapterTitle(ch.chapterTitle || ch.title),
      lessons: ch.lessons.map(l => ({
        id: l.id,
        title: l.title,
        emoji: l.emoji || '📄'
      }))
    }))
  }
  const catalogEntry = COURSE_CATALOG.find(c => c.id === courseId)
  if (catalogEntry && catalogEntry.chapters) {
    return catalogEntry.chapters.map(ch => ({
      title: cleanChapterTitle(ch.title || ch.chapterTitle),
      lessons: ch.lessons || []
    }))
  }
  return []
}

// ── Smart Definition Linker ───────────────────────────────────
function renderLinkedText(text, currentCourseId) {
  if (!text || typeof text !== 'string') return text

  const pattern = /\b(HyperText Markup Language|HTML5|HTML|Cascading Style Sheets|CSS3|CSS|JavaScript|TypeScript|Tailwind CSS|Tailwind|React\.js|ReactJS|React|Next\.js|NextJS|Next|Node\.js|NodeJS|Express\.js|ExpressJS|Python|MySQL|PostgreSQL|Postgres|MongoDB|Mongo|GitHub|Git|DOM|Flexbox|CSS Grid|REST API|API)\b/g

  const parts = []
  let lastIndex = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    const matchedWord = match[0]
    const matchIndex = match.index

    if (matchIndex > lastIndex) {
      parts.push(text.substring(lastIndex, matchIndex))
    }

    const lower = matchedWord.toLowerCase()
    let destUrl = '/courses/html'
    if (lower.includes('css') || lower === 'flexbox' || lower === 'css grid') destUrl = '/courses/css'
    else if (lower.includes('javascript') || lower === 'js' || lower === 'dom') destUrl = '/courses/javascript'
    else if (lower.includes('typescript') || lower === 'ts') destUrl = '/courses/typescript'
    else if (lower.includes('tailwind')) destUrl = '/courses/tailwind'
    else if (lower.includes('react')) destUrl = '/courses/react'
    else if (lower.includes('next')) destUrl = '/courses/nextjs'
    else if (lower.includes('node')) destUrl = '/courses/nodejs'
    else if (lower.includes('express')) destUrl = '/courses/express'
    else if (lower.includes('python')) destUrl = '/courses/python'
    else if (lower.includes('mysql') || lower === 'sql') destUrl = '/courses/mysql'
    else if (lower.includes('postgres')) destUrl = '/courses/postgresql'
    else if (lower.includes('mongo')) destUrl = '/courses/mongodb'
    else if (lower.includes('git')) destUrl = '/courses/git'
    else if (lower.includes('api')) destUrl = '/courses/restapi'

    parts.push(
      <Link
        key={`${matchIndex}-${matchedWord}`}
        to={destUrl}
        className="smart-def-link"
        title={`Click to view ${matchedWord} definition & tutorial`}
      >
        {matchedWord}
      </Link>
    )

    lastIndex = matchIndex + matchedWord.length
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

// ── Constants ─────────────────────────────────────────────────
const VOID_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'])
const KNOWN_HTML_TAGS = new Set(['html', 'head', 'title', 'meta', 'link', 'style', 'body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'strong', 'b', 'em', 'i', 'br', 'a', 'img', 'button', 'ul', 'ol', 'li', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'span', 'section', 'article', 'header', 'footer', 'nav', 'main', 'form', 'label', 'input', 'textarea', 'select', 'option', 'iframe', 'audio', 'video'])
const COMMON_HTML_TAGS = ['h1', 'p', 'img', 'a', 'button', 'ul', 'li', 'table', 'div', 'span']

const buildReactPreviewDoc = (code = '') => {
  let cleanedCode = code
    .replace(/import\s+React\s*,\s*\{([^}]+)\}\s+from\s+['"][^'"]+['"];?/g, 'const { $1 } = React;')
    .replace(/import\s+\{([^}]+)\}\s+from\s+['"][^'"]+['"];?/g, (match, imports) => {
      return `const { ${imports} } = window.ReactRouterDOM || window.PropTypes || React;`
    })
    .replace(/import\s+React\s+from\s+['"][^'"]+['"];?/g, '')
    .replace(/import\s+ReactDOM\s+from\s+['"][^'"]+['"];?/g, '')
    .replace(/import\s+[^;]+;?/g, '')
    .replace(/export\s+default\s+class\s+([A-Za-z0-9_]+)/g, 'class $1')
    .replace(/export\s+default\s+function\s+([A-Za-z0-9_]+)/g, 'function $1')
    .replace(/export\s+default\s+([A-Za-z0-9_]+);?/g, 'window.__MainComponent = $1;')
    .replace(/export\s+const\s+/g, 'const ')
    .replace(/export\s+function\s+/g, 'function ')

  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 16px;
      margin: 0;
      background: #f8fafc;
      color: #0f172a;
      box-sizing: border-box;
    }
    *, *::before, *::after { box-sizing: border-box; }
    #root { width: 100%; min-height: 100%; }
    button {
      padding: 7px 14px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: #0f172a;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s;
    }
    button:hover { background: #f1f5f9; }
    .btn, .btn-primary, .btn-add, .btn-next { background: #2563eb; color: #fff; border-color: #2563eb; border-radius: 8px; }
    .btn-primary:hover, .btn-add:hover, .btn-next:hover { background: #1d4ed8; }
    .btn-del { background: #fee2e2; color: #ef4444; border: 0; padding: 4px 8px; font-size: 12px; border-radius: 6px; }
    .card, .project-card, .coin-row, .movie-card, .quiz-box, .dish-card, .kanban-card, .todo-item, .profile-card, .cart-card, .cart-summary-box, .quiz-result-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 14px 18px;
      margin-bottom: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .badge, .tag, .p-tag, .cat-pill, .streak-badge, .score-badge, .role-tag {
      display: inline-block;
      padding: 3px 9px;
      border-radius: 9999px;
      font-size: 11px;
      font-weight: 700;
      background: #e0f2fe;
      color: #0369a1;
      margin-right: 6px;
    }
    .positive { color: #16a34a; font-weight: 700; }
    .negative { color: #dc2626; font-weight: 700; }
    .kanban-columns, .grid, .portfolio-grid, .movie-grid, .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 14px;
    }
    .kanban-col {
      background: #f1f5f9;
      border-radius: 12px;
      padding: 12px;
      border: 1px solid #e2e8f0;
    }
    input, select {
      padding: 8px 12px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      font-family: inherit;
      margin-bottom: 10px;
      width: 100%;
      max-width: 340px;
      display: block;
    }
    .opt-btn { display: block; width: 100%; text-align: left; margin-bottom: 8px; background: #fff; }
    .opt-btn.correct { background: #dcfce7; border-color: #22c55e; color: #15803d; }
    .opt-btn.wrong { background: #fee2e2; border-color: #ef4444; color: #b91c1c; }
    .filter-tabs, .genre-pills { display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap; }
    .tab-active, .pill-active { background: #2563eb; color: #ffffff; border-color: #2563eb; }
    .dark { background: #0f172a; color: #f8fafc; }
    .dark .card, .dark .project-card, .dark .coin-row, .dark .movie-card, .dark .kanban-card { background: #1e293b; border-color: #334155; color: #f8fafc; }
    ul { list-style: none; padding-left: 0; }
    .coin-row { display: flex; justify-content: space-between; align-items: center; }
    .btn-actions { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect, useMemo, useCallback, useRef, useContext, createContext, memo, Suspense, lazy } = React;

    const BrowserRouter = ({ children }) => <div>{children}</div>;
    const HashRouter = ({ children }) => <div>{children}</div>;
    const MemoryRouter = ({ children }) => <div>{children}</div>;
    const Routes = ({ children }) => <div>{children}</div>;
    const Route = ({ element }) => element;
    const Link = ({ to, children, ...rest }) => <a href="#" onClick={(e) => { e.preventDefault(); }} {...rest}>{children}</a>;
    const NavLink = Link;
    const useNavigate = () => (to) => console.log("Navigate:", to);
    const useParams = () => ({ id: '1', courseId: 'react-19', userId: '101' });

    const PropTypes = {
      string: { isRequired: {} },
      number: { isRequired: {} },
      bool: { isRequired: {} },
      func: { isRequired: {} },
      array: { isRequired: {} },
      object: { isRequired: {} },
      arrayOf: () => ({ isRequired: {} }),
      shape: () => ({ isRequired: {} }),
      node: { isRequired: {} }
    };
    window.PropTypes = PropTypes;

    try {
      ${cleanedCode}

      const PossibleRoots = [
        window.__MainComponent,
        typeof App !== 'undefined' ? App : null,
        typeof DevHubPortfolio !== 'undefined' ? DevHubPortfolio : null,
        typeof CryptoTrackPro !== 'undefined' ? CryptoTrackPro : null,
        typeof CineVerseApp !== 'undefined' ? CineVerseApp : null,
        typeof CodeMastiQuizArena !== 'undefined' ? CodeMastiQuizArena : null,
        typeof QuickBiteApp !== 'undefined' ? QuickBiteApp : null,
        typeof TaskMasterKanban !== 'undefined' ? TaskMasterKanban : null,
        typeof CounterApp !== 'undefined' ? CounterApp : null,
        typeof UserCard !== 'undefined' ? UserCard : null,
        typeof LiveDashboard !== 'undefined' ? LiveDashboard : null,
        typeof CourseListExplorer !== 'undefined' ? CourseListExplorer : null,
        typeof RegistrationForm !== 'undefined' ? RegistrationForm : null,
        typeof TodoListApp !== 'undefined' ? TodoListApp : null,
        typeof UserProfileLoader !== 'undefined' ? UserProfileLoader : null,
        typeof ThemeSwitcher !== 'undefined' ? ThemeSwitcher : null,
        typeof DashboardApp !== 'undefined' ? DashboardApp : null,
        typeof SecretAdminPanel !== 'undefined' ? SecretAdminPanel : null,
        typeof LegacyCounter !== 'undefined' ? LegacyCounter : null,
        typeof PerformanceApp !== 'undefined' ? PerformanceApp : null,
        typeof HookRulesDemo !== 'undefined' ? HookRulesDemo : null,
        typeof CartManager !== 'undefined' ? CartManager : null,
        typeof SearchBox !== 'undefined' ? SearchBox : null,
        typeof CourseDirectoryContainer !== 'undefined' ? CourseDirectoryContainer : null,
        typeof ProductCard !== 'undefined' ? ProductCard : null
      ];

      const ComponentToRender = PossibleRoots.find(c => c && (typeof c === 'function' || typeof c === 'object'));
      const rootContainer = document.getElementById('root');

      if (ComponentToRender && rootContainer) {
        const root = ReactDOM.createRoot(rootContainer);
        root.render(React.createElement(ComponentToRender));
      } else if (!rootContainer.innerHTML) {
        rootContainer.innerHTML = '<div style="padding:16px; color:#10b981; font-weight:600;">✓ Component compiled successfully.</div>';
      }
    } catch (err) {
      document.getElementById('root').innerHTML = '<div style="color:#ef4444; background:#fee2e2; padding:12px; border-radius:8px; font-family:monospace;"><strong>React Runtime Error:</strong> ' + err.message + '</div>';
    }
  </script>
</body>
</html>`
}

const simulatePythonOutput = (code) => {
  const vars = {}
  const out = []
  const lines = code.split('\n')
  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    const assign = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/)
    if (assign && !line.includes('==')) {
      vars[assign[1]] = assign[2].replace(/^["']|["']$/g, '')
      continue
    }
    const printMatch = line.match(/^print\((.*)\)$/)
    if (printMatch) {
      const parts = printMatch[1].split(',').map(p => p.trim())
      out.push(parts.map(part => {
        if (vars[part] !== undefined) return vars[part]
        if (/^["'].*["']$/.test(part)) return part.slice(1, -1)
        if (/^\d+(\.\d+)?$/.test(part)) return part
        if (part.startsWith('type(')) return "<class 'int'>"
        return part.replace(/^f["']|["']$/g, '').replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`)
      }).join(' '))
    }
  }
  return out.length ? out.join('\n') : '// Python demo ran. Add print(...) to see output.'
}

const simulateSqlOutput = (code) => {
  const clean = (code || '').trim()
  if (!clean) return '// Enter a SQL query (e.g. SELECT * FROM users;) and run.'

  const lines = clean.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('--'))
  if (!lines.length) return '// SQL comments only. Add a SQL query to execute.'

  const joined = lines.join(' ')

  const formatTable = (headers, rows) => {
    const colWidths = headers.map((h, i) => Math.max(h.length, ...rows.map(r => String(r[i] ?? '').length), 4))
    const divider = '+' + colWidths.map(w => '-'.repeat(w + 2)).join('+') + '+'
    const headerRow = '| ' + headers.map((h, i) => h.padEnd(colWidths[i])).join(' | ') + ' |'
    const dataRows = rows.map(row => '| ' + row.map((cell, i) => String(cell ?? 'NULL').padEnd(colWidths[i])).join(' | ') + ' |')
    return [divider, headerRow, divider, ...dataRows, divider, `\n${rows.length} row(s) in set (0.002 sec)`].join('\n')
  }

  if (/^SELECT/i.test(joined)) {
    if (/users/i.test(joined) || /learners/i.test(joined) || /students/i.test(joined)) {
      return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\n` + formatTable(
        ['id', 'username', 'email', 'xp_points', 'role', 'created_at'],
        [
          ['1', 'kabir_sharma', 'kabir@codemasti.com', '1250', 'student', '2026-08-15 10:20:00'],
          ['2', 'riya_patel', 'riya@codemasti.com', '2100', 'student', '2026-08-16 11:30:00'],
          ['3', 'dev_singh', 'dev@codemasti.com', '850', 'student', '2026-08-17 09:15:00'],
          ['4', 'ananya_verma', 'ananya@codemasti.com', '3400', 'mentor', '2026-08-18 14:00:00']
        ]
      )
    }
    if (/orders/i.test(joined)) {
      return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\n` + formatTable(
        ['order_id', 'user_id', 'total_amount', 'status', 'order_date'],
        [
          ['101', '1', '1499.00', 'completed', '2026-08-19 12:00:00'],
          ['102', '2', '2999.00', 'completed', '2026-08-19 15:45:00'],
          ['103', '1', '499.00', 'processing', '2026-08-20 08:30:00']
        ]
      )
    }
    if (/employees/i.test(joined) || /salary/i.test(joined) || /departments/i.test(joined)) {
      return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\n` + formatTable(
        ['emp_id', 'name', 'department', 'salary', 'manager_id'],
        [
          ['1', 'Aarav Mehta', 'Engineering', '120000', 'NULL'],
          ['2', 'Pooja Nair', 'Engineering', '95000', '1'],
          ['3', 'Rohan Gupta', 'Product', '105000', '1'],
          ['4', 'Sneha Rao', 'Design', '80000', '3']
        ]
      )
    }
    if (/products/i.test(joined) || /courses/i.test(joined)) {
      return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\n` + formatTable(
        ['product_id', 'title', 'category', 'price', 'stock_qty'],
        [
          ['1', 'Full Stack Masterclass', 'Courses', '2999.00', '999'],
          ['2', 'System Design Blueprint', 'Courses', '1999.00', '999'],
          ['3', 'DSA Problem Deck', 'E-Books', '499.00', '999']
        ]
      )
    }
    return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\n` + formatTable(
      ['id', 'name', 'status', 'created_at'],
      [
        ['1', 'Record Alpha', 'active', '2026-08-20 10:00:00'],
        ['2', 'Record Beta', 'pending', '2026-08-20 11:30:00'],
        ['3', 'Record Gamma', 'active', '2026-08-20 14:15:00']
      ]
    )
  }

  if (/^CREATE\s+TABLE/i.test(joined)) {
    const tableName = joined.match(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?`?([a-zA-Z_]\w*)`?/i)?.[1] || 'table'
    return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\nQuery OK, 0 rows affected (0.015 sec)\nTable '${tableName}' created successfully with InnoDB storage engine.\nPrimary keys & constraints verified.`
  }

  if (/^INSERT\s+INTO/i.test(joined)) {
    return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\nQuery OK, 2 row(s) affected (0.008 sec)\nRecords: 2  Duplicates: 0  Warnings: 0\nAuto-increment ID generated: 101`
  }

  if (/^UPDATE/i.test(joined)) {
    return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\nQuery OK, 1 row affected (0.006 sec)\nRows matched: 1  Changed: 1  Warnings: 0`
  }

  if (/^DELETE/i.test(joined) || /^TRUNCATE/i.test(joined)) {
    return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\nQuery OK, 1 row affected (0.005 sec)`
  }

  if (/^EXPLAIN/i.test(joined)) {
    return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\n` + formatTable(
      ['id', 'select_type', 'table', 'type', 'possible_keys', 'key', 'key_len', 'rows', 'Extra'],
      [
        ['1', 'SIMPLE', 'users', 'ref', 'idx_email', 'idx_email', '102', '1', 'Using index condition']
      ]
    )
  }

  if (/^SHOW/i.test(joined) || /^DESCRIBE/i.test(joined) || /^DESC/i.test(joined)) {
    return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\n` + formatTable(
      ['Field', 'Type', 'Null', 'Key', 'Default', 'Extra'],
      [
        ['id', 'int', 'NO', 'PRI', 'NULL', 'auto_increment'],
        ['username', 'varchar(50)', 'NO', 'UNI', 'NULL', ''],
        ['email', 'varchar(100)', 'NO', 'UNI', 'NULL', ''],
        ['created_at', 'timestamp', 'NO', '', 'CURRENT_TIMESTAMP', 'DEFAULT_GENERATED']
      ]
    )
  }

  if (/^START\s+TRANSACTION/i.test(joined) || /^BEGIN/i.test(joined) || /^COMMIT/i.test(joined) || /^ROLLBACK/i.test(joined)) {
    return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\nQuery OK, 0 rows affected (0.001 sec)\nTransaction status: Committed successfully with full ACID durability.`
  }

  return `/* SQL Learning Simulation (MySQL 8.0 Engine) */\n\nQuery OK (0.004 sec)\nExecuted successfully:\n${clean}`
}

const simulateBackendOutput = (code) => {
  const clean = (code || '').trim()
  if (!clean) return '// Enter backend Node.js / Express code and click Run.'

  const logs = []
  const customConsole = {
    log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
    error: (...args) => logs.push('[Error] ' + args.join(' ')),
    warn: (...args) => logs.push('[Warn] ' + args.join(' '))
  }

  const mockModel = (name) => ({
    find: (query) => ({
      sort: () => Promise.resolve([
        { _id: '65f8a1e9', userId: 'usr_8829', title: 'System Architecture Notes', content: 'Microservices & Redis cache design', tags: ['backend', 'redis'], createdAt: new Date().toISOString() },
        { _id: '65f8a2f0', userId: 'usr_8829', title: 'REST API Authentication', content: 'JWT validation and bcrypt password hashing', tags: ['auth', 'jwt'], createdAt: new Date().toISOString() }
      ]),
      populate: function () { return this },
      select: function () { return this },
      exec: () => Promise.resolve([])
    }),
    findOne: (q) => Promise.resolve({ _id: '65f8a1e9', userId: 'usr_8829', email: 'dev@codemasti.com', password: '$2a$10$e7x9V018mN0V98hK11kEouZ3gN.mockHash', role: 'developer' }),
    findById: (id) => Promise.resolve({ _id: id || '65f8a1e9', userId: 'usr_8829', title: 'Sample Note', content: 'RESTful API with Node.js & MongoDB' }),
    create: (data) => Promise.resolve({ _id: '65f8b999', ...data, createdAt: new Date().toISOString() }),
    findByIdAndUpdate: (id, data) => Promise.resolve({ _id: id, ...data, updatedAt: new Date().toISOString() }),
    findByIdAndDelete: (id) => Promise.resolve({ _id: id, message: 'Resource deleted successfully' }),
    deleteOne: (q) => Promise.resolve({ acknowledged: true, deletedCount: 1 })
  })

  const mockExpressApp = () => {
    const app = {
      use: (...args) => app,
      get: (path, ...handlers) => {
        logs.push(`[Route Registered] GET ${path}`)
        return app
      },
      post: (path, ...handlers) => {
        logs.push(`[Route Registered] POST ${path}`)
        return app
      },
      put: (path, ...handlers) => {
        logs.push(`[Route Registered] PUT ${path}`)
        return app
      },
      delete: (path, ...handlers) => {
        logs.push(`[Route Registered] DELETE ${path}`)
        return app
      },
      listen: (port, cb) => {
        logs.push(`🚀 Node.js / Express Server listening on port ${port || 5000}`)
        if (typeof cb === 'function') cb()
        return app
      }
    }
    return app
  }

  const mockRequire = (mod) => {
    if (mod === 'express') {
      const expressFn = () => mockExpressApp()
      expressFn.json = () => (req, res, next) => next && next()
      expressFn.urlencoded = () => (req, res, next) => next && next()
      expressFn.Router = () => mockExpressApp()
      return expressFn
    }
    if (mod === 'mongoose') {
      return {
        Schema: class { },
        model: (name) => mockModel(name),
        connect: async () => {
          logs.push('🍃 MongoDB connection established: mongodb://127.0.0.1:27017/app_db')
          return true
        }
      }
    }
    if (mod === 'jsonwebtoken' || mod === 'jwt') {
      return {
        sign: (payload) => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzcl84ODI5Iiwicm9sZSI6ImFkbWluIn0.mock_signature',
        verify: () => ({ id: 'usr_8829', role: 'admin' })
      }
    }
    if (mod === 'bcrypt' || mod === 'bcryptjs') {
      return {
        hash: async () => '$2a$10$e7x9V018mN0V98hK11kEouZ3gN.mockHash',
        compare: async () => true,
        genSalt: async () => 10
      }
    }
    if (mod === 'dotenv') {
      return { config: () => ({ parsed: {} }) }
    }
    if (mod === 'cors' || mod === 'helmet' || mod === 'morgan') {
      return () => (req, res, next) => next && next()
    }
    if (mod === 'path' || mod === 'fs' || mod === 'http') {
      return { join: (...parts) => parts.join('/'), resolve: (...parts) => parts.join('/'), existsSync: () => true }
    }
    return mockModel(String(mod).replace(/[^a-zA-Z]/g, '') || 'Resource')
  }

  const module = { exports: {} }
  const exports = module.exports
  const process = {
    env: {
      PORT: 5000,
      MONGO_URI: 'mongodb://127.0.0.1:27017/notes_db',
      JWT_SECRET: 'jwt_secure_secret_898',
      NODE_ENV: 'development'
    }
  }

  const req = {
    user: { id: 'usr_8829', name: 'Developer User', email: 'dev@codemasti.com' },
    body: { title: 'Mastering Backend Architecture', content: 'RESTful API with Node.js & MongoDB', tags: ['node', 'mongo', 'jwt'] },
    params: { id: '65f8a1e9' },
    query: { limit: 10, page: 1 },
    headers: { authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }
  }

  const res = {
    status: (code) => ({
      json: (data) => logs.push(`[HTTP ${code} Response Envelope]:\n` + JSON.stringify(data, null, 2)),
      send: (text) => logs.push(`[HTTP ${code} Response]: ` + (typeof text === 'object' ? JSON.stringify(text, null, 2) : text))
    }),
    json: (data) => logs.push(`[HTTP 200 OK Response Envelope]:\n` + JSON.stringify(data, null, 2)),
    send: (text) => logs.push(`[HTTP 200 OK Response]: ` + (typeof text === 'object' ? JSON.stringify(text, null, 2) : text))
  }

  const next = (err) => {
    if (err) logs.push('[Middleware Error]: ' + err.message)
  }

  try {
    const fn = new Function(
      'require', 'module', 'exports', 'process', 'console', 'req', 'res', 'next',
      `"use strict";\n${code}`
    )
    const result = fn(mockRequire, module, exports, process, customConsole, req, res, next)

    // Execute exported controllers if any
    const exportedKeys = Object.keys(module.exports || {})
    if (exportedKeys.length > 0) {
      logs.push(`📦 Exported Controllers: [ ${exportedKeys.join(', ')} ]`)
      const firstHandler = module.exports[exportedKeys[0]]
      if (typeof firstHandler === 'function') {
        logs.push(`⚡ Executing [${exportedKeys[0]}](req, res, next):`)
        firstHandler(req, res, next)
      }
    }

    if (logs.length > 0) {
      return logs.join('\n')
    }
    return result === undefined ? '// Backend script ran successfully. (0 errors)' : String(result)
  } catch (err) {
    return `// Backend Runtime Error: ${err.message}`
  }
}

const buildHtmlPreviewDoc = (code = '') => {
  const trimmed = (code || '').trim()
  if (!trimmed) {
    return `<!doctype html><html><body style="font-family:Inter,system-ui,sans-serif;padding:20px;color:#64748b;">No HTML code provided yet. Type HTML above!</body></html>`
  }
  const baseStyle = `<style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 24px;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      line-height: 1.6;
      box-sizing: border-box;
    }
    *, *::before, *::after { box-sizing: border-box; }
    h1, h2, h3, h4, h5, h6 { color: #0f172a; margin-top: 0; font-weight: 800; }
    h1 { font-size: 28px; margin-bottom: 12px; }
    h2 { font-size: 22px; margin-bottom: 10px; }
    p { margin-bottom: 14px; font-size: 15px; }
    button {
      padding: 8px 16px;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      background: #f8fafc;
      cursor: pointer;
      font-weight: 600;
      font-family: inherit;
      color: #0f172a;
      transition: all 0.15s;
    }
    button:hover { background: #f1f5f9; border-color: #94a3b8; }
    .gradient-text {
      background: linear-gradient(135deg, #22c55e, #10b981);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    a { color: #16a34a; text-decoration: none; font-weight: 600; }
    a:hover { text-decoration: underline; }
  </style>`

  if (/<head[\s>]/i.test(trimmed)) {
    return trimmed.replace(/<head[\s>]/i, match => `${match}\n  <meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n  ${baseStyle}`)
  }
  if (/<html[\s>]/i.test(trimmed)) {
    return trimmed.replace(/<html[\s>]/i, match => `${match}\n<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>${baseStyle}</head>`)
  }
  return `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/>${baseStyle}</head><body>${trimmed}</body></html>`
}

const buildCssPreviewDoc = (code = '') => {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
    body {
      font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 16px;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      box-sizing: border-box;
      line-height: 1.6;
    }
    *, *::before, *::after { box-sizing: border-box; }
    /* Injected Student CSS */
    ${code}
  </style>
</head>
<body>
  <!-- 1. Navbar Component -->
  <nav class="navbar" style="display:flex; justify-content:space-between; align-items:center; padding:12px 18px; border:1px solid #e2e8f0; border-radius:10px; margin-bottom:18px;">
    <div class="logo" style="font-weight:900; font-size:18px; color:#16a34a;">⚡ CodeMasti</div>
    <ul class="nav-links" style="display:flex; gap:14px; list-style:none; margin:0; padding:0;">
      <li><a href="#" class="nav-link" style="color:#0f172a; text-decoration:none; font-weight:600;">Home</a></li>
      <li><a href="#" class="nav-link" style="color:#0f172a; text-decoration:none; font-weight:600;">Courses</a></li>
      <li><a href="#" class="nav-link" style="color:#0f172a; text-decoration:none; font-weight:600;">Projects</a></li>
    </ul>
    <button class="btn btn-primary">Get Started</button>
  </nav>

  <!-- 2. Hero Section Component -->
  <header class="hero hero-section hero-banner" style="text-align:center; padding:24px 16px; background:#f8fafc; border-radius:12px; border:1px solid #e2e8f0; margin-bottom:18px;">
    <h1 class="hero-title" style="margin-top:0; font-size:26px; color:#0f172a;">Master CSS with <span class="gradient-text hero-glow">CodeMasti</span></h1>
    <p class="hero-p article-body" style="color:#475569; max-width:550px; margin:0 auto 16px;">Build modern, responsive, and stunning web interfaces from scratch.</p>
    <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
      <a href="#" class="btn btn-primary pill-btn gradient-btn">Explore Courses 🚀</a>
      <a href="#" class="btn btn-secondary">Learn More</a>
    </div>
  </header>

  <!-- 3. Features Grid Component -->
  <div class="features-grid card-grid product-grid container auto-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:14px;">
    <div class="card feature-card product-card card-wrapper card-box" style="padding:16px; border:1px solid #e2e8f0; border-radius:10px;">
      <h3 style="margin-top:0; font-size:16px;">Flexbox & Grid</h3>
      <p style="font-size:13px; color:#64748b;">Master 1D and 2D responsive layout architectures effortlessly.</p>
      <button class="btn btn-primary" style="margin-top:8px;">Start Lesson</button>
    </div>

    <div class="card feature-card product-card card-wrapper card-box" style="padding:16px; border:1px solid #e2e8f0; border-radius:10px;">
      <h3 style="margin-top:0; font-size:16px;">Animations & 3D</h3>
      <p style="font-size:13px; color:#64748b;">Smooth 60fps GPU accelerated micro-interactions.</p>
      <button class="btn btn-primary" style="margin-top:8px;">Start Lesson</button>
    </div>
  </div>
</body>
</html>`
}

const simulateCAndCppOutput = (code = '') => {
  const clean = (code || '').trim()
  if (!clean) return '// Enter C/C++ code and run.'

  const out = []
  const vars = {}

  const lines = clean.split('\n')
  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line.startsWith('//') || line.startsWith('#') || line.startsWith('/*')) continue

    const assignMatch = line.match(/(?:int|float|double|char\*?|string|auto|const\s+\w+)\s+([a-zA-Z_]\w*)\s*=\s*(.*?);/)
    if (assignMatch) {
      vars[assignMatch[1]] = assignMatch[2].trim().replace(/^["']|["']$/g, '')
    }

    const printfMatch = line.match(/printf\s*\(\s*"(.*?)"\s*(?:,\s*(.*?))?\s*\);/)
    if (printfMatch) {
      let format = printfMatch[1]
      const rawArgs = printfMatch[2] ? printfMatch[2].split(',').map(a => a.trim()) : []
      let argIdx = 0
      format = format.replace(/%[dsfcfu%]/g, (specifier) => {
        if (specifier === '%%') return '%'
        const arg = rawArgs[argIdx++]
        if (arg !== undefined) {
          if (vars[arg] !== undefined) return vars[arg]
          return arg.replace(/^["']|["']$/g, '')
        }
        return specifier
      })
      format = format.replace(/\\n/g, '\n').replace(/\\t/g, '\t')
      out.push(format)
      continue
    }

    const coutMatch = line.match(/(?:std::)?cout\s*<<\s*(.*?);/)
    if (coutMatch) {
      const parts = coutMatch[1].split('<<').map(p => p.trim())
      const strParts = parts.map(part => {
        if (part === 'std::endl' || part === 'endl') return '\n'
        if (part.startsWith('"') && part.endsWith('"')) return part.slice(1, -1).replace(/\\n/g, '\n')
        if (vars[part] !== undefined) return vars[part]
        return part
      })
      out.push(strParts.join(''))
      continue
    }

    const putsMatch = line.match(/puts\s*\(\s*"(.*?)"\s*\);/)
    if (putsMatch) {
      out.push(putsMatch[1] + '\n')
      continue
    }
  }

  if (out.length > 0) {
    return `/* GCC / Clang (Return code 0) */\n\n` + out.join('').trimEnd()
  }

  return `/* GCC / Clang (Compiled Successfully - Return code 0) */\n\nProgram executed with 0 runtime errors.`
}

const simulateJavaOutput = (code = '') => {
  const clean = (code || '').trim()
  if (!clean) return '// Enter Java code and run.'

  const out = []
  const vars = {}

  const lines = clean.split('\n')
  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line.startsWith('//') || line.startsWith('/*')) continue

    const assignMatch = line.match(/(?:int|double|float|String|boolean|char|var|final\s+\w+)\s+([a-zA-Z_]\w*)\s*=\s*(.*?);/)
    if (assignMatch) {
      vars[assignMatch[1]] = assignMatch[2].trim().replace(/^["']|["']$/g, '')
    }

    const printlnMatch = line.match(/System\.out\.println\s*\(\s*(.*?)\s*\);/)
    if (printlnMatch) {
      let content = printlnMatch[1].trim()
      const parts = content.split('+').map(p => p.trim())
      const result = parts.map(p => {
        if (p.startsWith('"') && p.endsWith('"')) return p.slice(1, -1)
        if (vars[p] !== undefined) return vars[p]
        return p
      }).join('')
      out.push(result)
      continue
    }

    const printMatch = line.match(/System\.out\.print\s*\(\s*(.*?)\s*\);/)
    if (printMatch) {
      let content = printMatch[1].trim()
      const parts = content.split('+').map(p => p.trim())
      const result = parts.map(p => {
        if (p.startsWith('"') && p.endsWith('"')) return p.slice(1, -1)
        if (vars[p] !== undefined) return vars[p]
        return p
      }).join('')
      out.push(result)
      continue
    }

    const printfMatch = line.match(/System\.out\.printf\s*\(\s*"(.*?)"\s*(?:,\s*(.*?))?\s*\);/)
    if (printfMatch) {
      let format = printfMatch[1]
      const rawArgs = printfMatch[2] ? printfMatch[2].split(',').map(a => a.trim()) : []
      let argIdx = 0
      format = format.replace(/%[dsfcfun%]/g, (specifier) => {
        if (specifier === '%n' || specifier === '\\n') return '\n'
        if (specifier === '%%') return '%'
        const arg = rawArgs[argIdx++]
        if (arg !== undefined) {
          if (vars[arg] !== undefined) return vars[arg]
          return arg.replace(/^["']|["']$/g, '')
        }
        return specifier
      })
      out.push(format.replace(/%n/g, '\n').replace(/\\n/g, '\n'))
      continue
    }
  }

  if (out.length > 0) {
    return `/* Java JVM Output (OpenJDK 21) */\n\n` + out.join('\n')
  }

  return `/* Java JVM (Compiled Successfully - Status 200) */\n\nMain method finished executing with 0 errors.`
}

const simulateTypeScriptOutput = (code = '') => {
  const jsCode = code
    .replace(/:\s*(?:string|number|boolean|any|void|unknown|never|object|Record<[^>]+>|Array<[^>]+>|Promise<[^>]+>|React\.[A-Za-z0-9_]+|[A-Z][A-Za-z0-9_]*)(?:\[\])?/g, '')
    .replace(/(?:interface|type)\s+[A-Za-z0-9_]+\s*(?:=\s*)?\{[\s\S]*?\}/g, '')
    .replace(/as\s+[A-Za-z0-9_<>\[\]]+/g, '')

  try {
    const logs = []
    const customConsole = {
      log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
      error: (...args) => logs.push('[Error] ' + args.join(' ')),
      warn: (...args) => logs.push('[Warn] ' + args.join(' '))
    }
    const fn = new Function('console', `"use strict";\n${jsCode}`)
    const result = fn(customConsole)
    if (logs.length > 0) return logs.join('\n')
    return result === undefined ? '// TypeScript compiled and executed successfully.' : String(result)
  } catch (err) {
    return `// TypeScript Runtime Error: ${err.message}`
  }
}

const GFG_SIDEBAR_TRACKS = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '⚛️',
    courses: [
      { id: 'html', title: 'HTML', url: '/courses/html', icon: '📘' },
      { id: 'css', title: 'CSS', url: '/courses/css', icon: '🎨' },
      { id: 'javascript', title: 'JavaScript', url: '/courses/javascript', icon: '⚡' },
      { id: 'typescript', title: 'TypeScript', url: '/courses/typescript', icon: '🔷' },
      { id: 'react', title: 'React.js', url: '/courses/react', icon: '⚛️' },
      { id: 'nextjs', title: 'Next.js', url: '/courses/nextjs', icon: '▲' },
      { id: 'tailwind', title: 'Tailwind CSS', url: '/courses/tailwind', icon: '🌊' },
      { id: 'frontend-projects', title: 'Projects', url: '/courses/frontend-projects', icon: '🚀' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    courses: [
      { id: 'nodejs', title: 'Node.js', url: '/courses/nodejs', icon: '🟩' },
      { id: 'express', title: 'Express.js', url: '/courses/express', icon: '🚂' },
      { id: 'python', title: 'Python', url: '/courses/python', icon: '🐍' }
    ]
  },
  {
    id: 'database',
    title: 'Database',
    icon: '🗄️',
    courses: [
      { id: 'mysql', title: 'MySQL', url: '/courses/mysql', icon: '🐬' },
      { id: 'postgresql', title: 'PostgreSQL', url: '/courses/postgresql', icon: '🐘' },
      { id: 'mongodb', title: 'MongoDB', url: '/courses/mongodb', icon: '🍃' }
    ]
  }
]

export default function CourseViewerPage({
  user,
  token,
  selectedCourse,
  activeLesson,
  setActiveLesson,
  spacedRevisions,
  bookmarkedLessons,
  setBookmarkedLessons,
  onGoToCourses,
  onCompleteLesson,
  onShowToast,
  onCommentPost,
  onQuizSubmit,
  onViewCertificate
}) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window === 'undefined' ? true : window.innerWidth >= 1024
  )
  const [mobileTab, setMobileTab] = useState('content')
  const [playgroundTab, setPlaygroundTab] = useState('code')
  const [coursesDrawerOpen, setCoursesDrawerOpen] = useState(false)

  const activeChapterIndex = useMemo(() => {
    if (!selectedCourse?.chapters || !activeLesson) return 0
    const idx = selectedCourse.chapters.findIndex(ch => ch.lessons.some(l => l.id === activeLesson.id))
    return idx >= 0 ? idx : 0
  }, [selectedCourse, activeLesson])

  const [openChapters, setOpenChapters] = useState(() => new Set([activeChapterIndex]))

  useEffect(() => {
    if (selectedCourse?.id && activeLesson) {
      const idx = selectedCourse.chapters?.findIndex(ch => ch.lessons.some(l => l.id === activeLesson.id))
      setOpenChapters(new Set([idx >= 0 ? idx : 0]))
    }
  }, [selectedCourse?.id, activeLesson?.id])

  const toggleChapter = (cIdx) => {
    setOpenChapters(prev => {
      const next = new Set(prev)
      if (next.has(cIdx)) {
        next.delete(cIdx)
      } else {
        next.add(cIdx)
      }
      return next
    })
  }
  const [playgroundCode, setPlaygroundCode] = useState('')
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState('')
  const [quizChecked, setQuizChecked] = useState(false)
  const [quizSuccess, setQuizSuccess] = useState(false)
  const [challengeMessage, setChallengeMessage] = useState(null)
  const [notes, setNotes] = useState('')
  const [hintLevel, setHintLevel] = useState(0)
  const [editorTheme, setEditorTheme] = useState('dark')
  const [editorFontSize, setEditorFontSize] = useState(13)
  const [previewMode, setPreviewMode] = useState('desktop')
  const [lessonLanguage, setLessonLanguage] = useState('both')
  const [consoleOpen, setConsoleOpen] = useState(false)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [activeLessonModal, setActiveLessonModal] = useState(null)
  const [practiceModalOpen, setPracticeModalOpen] = useState(false)
  const [flashcardIndex, setFlashcardIndex] = useState(0)
  const [learnedFlashcards, setLearnedFlashcards] = useState([])
  const [readingScrollPercent, setReadingScrollPercent] = useState(0)
  const [showProgressModal, setShowProgressModal] = useState(false)
  const [guestProgress, setGuestProgress] = useState(() => getProgress())
  const lessonModalRef = useRef(null)
  const practiceModalRef = useRef(null)
  const contentPanelRef = useRef(null)
  const lessonStartRef = useRef(null)

  useEffect(() => {
    const handleProgressSync = () => {
      setGuestProgress(getProgress())
    }
    window.addEventListener('storage', handleProgressSync)
    window.addEventListener('codemasti_state_change', handleProgressSync)
    window.addEventListener('codemasti_progress_updated', handleProgressSync)
    return () => {
      window.removeEventListener('storage', handleProgressSync)
      window.removeEventListener('codemasti_state_change', handleProgressSync)
      window.removeEventListener('codemasti_progress_updated', handleProgressSync)
    }
  }, [])

  useEffect(() => {
    const panel = contentPanelRef.current

    const handleScroll = () => {
      if (panel && panel.scrollHeight > panel.clientHeight) {
        const { scrollTop, scrollHeight, clientHeight } = panel
        const maxScroll = scrollHeight - clientHeight
        if (maxScroll <= 0) {
          setReadingScrollPercent(100)
          return
        }
        const scrolled = Math.min(100, Math.max(0, Math.round((scrollTop / maxScroll) * 100)))
        setReadingScrollPercent(scrolled)
        return
      }
      const doc = document.documentElement || document.body
      const winScroll = window.scrollY || doc.scrollTop || 0
      const winHeight = (doc.scrollHeight || 0) - (window.innerHeight || 0)
      if (winHeight > 0) {
        const scrolled = Math.min(100, Math.max(0, Math.round((winScroll / winHeight) * 100)))
        setReadingScrollPercent(scrolled)
      } else {
        setReadingScrollPercent(100)
      }
    }

    panel?.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      panel?.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeLesson?.id])

  const scrollToLessonTop = (behavior = 'instant') => {
    if (typeof window === 'undefined') return

    const scrollOptions = { top: 0, left: 0, behavior }
    const scrollElement = (element) => {
      if (!element) return
      try {
        element.scrollTo(scrollOptions)
      } catch {
        element.scrollTop = 0
        element.scrollLeft = 0
      }
    }

    try {
      window.scrollTo(scrollOptions)
    } catch {
      window.scrollTo(0, 0)
    }

    scrollElement(document.scrollingElement)
    scrollElement(document.documentElement)
    scrollElement(document.body)
    scrollElement(contentPanelRef.current)
    scrollElement(document.querySelector('.content-panel'))
    scrollElement(document.querySelector('.viewer-main'))
    document.querySelectorAll('[data-lesson-scroll-root]').forEach(scrollElement)
  }

  const scrollToLessonTopAfterNavigation = () => {
    scrollToLessonTop('instant')
    requestAnimationFrame(() => scrollToLessonTop('instant'))
    window.setTimeout(() => scrollToLessonTop('instant'), 40)
    window.setTimeout(() => scrollToLessonTop('instant'), 120)
  }

  useLayoutEffect(() => {
    if (!activeLesson?.id) return
    scrollToLessonTopAfterNavigation()
  }, [activeLesson?.id])

  // Reset state when lesson changes
  useEffect(() => {
    if (!activeLesson) return
    setPlaygroundCode(activeLesson.challenge?.initialCode || activeLesson.code || '')
    setSelectedQuizAnswer('')
    setQuizChecked(false)
    setQuizSuccess(false)
    setChallengeMessage(null)
    setHintLevel(0)
    setLessonLanguage('both')
    setConsoleOpen(false)
    setActiveLessonModal(null)
    setPracticeModalOpen(false)
    setFlashcardIndex(0)
    setLearnedFlashcards([])
    setNotes(getLessonNote(activeLesson.id))
    recordLastLesson(selectedCourse.id, activeLesson.id)
    markLessonVisited(activeLesson.id)
    scrollToLessonTopAfterNavigation()
  }, [activeLesson?.id])

  useEffect(() => {
    const modalOpen = activeLessonModal || practiceModalOpen
    if (!modalOpen) return

    const modalRef = practiceModalOpen ? practiceModalRef : lessonModalRef
    const previousActive = document.activeElement
    const focusableSelector = 'button, [href], input, textarea, select, details, [tabindex]:not([tabindex="-1"])'

    const focusFirst = () => {
      const items = modalRef.current?.querySelectorAll(focusableSelector)
      items?.[0]?.focus?.()
    }

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveLessonModal(null)
        setPracticeModalOpen(false)
        return
      }

      if (e.key !== 'Tab') return
      const focusable = Array.from(modalRef.current?.querySelectorAll(focusableSelector) || [])
        .filter(el => !el.disabled && el.offsetParent !== null)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    requestAnimationFrame(focusFirst)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      previousActive?.focus?.()
    }
  }, [activeLessonModal, practiceModalOpen])

  useEffect(() => {
    const breakpoint = window.matchMedia('(min-width: 1024px)')
    const syncSidebarForViewport = (event = breakpoint) => {
      setSidebarOpen(event.matches)
    }

    syncSidebarForViewport()
    breakpoint.addEventListener('change', syncSidebarForViewport)
    return () => breakpoint.removeEventListener('change', syncSidebarForViewport)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth >= 1024 || !sidebarOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [sidebarOpen])

  useEffect(() => {
    const topbar = document.querySelector('.topbar')
    const setHeaderHeight = () => {
      const height = topbar?.getBoundingClientRect().height || 60
      document.documentElement.style.setProperty('--course-header-h', `${height}px`)
    }

    document.documentElement.classList.add('course-viewer-lock')
    document.body.classList.add('course-viewer-lock')
    setHeaderHeight()

    const resizeObserver = topbar && 'ResizeObserver' in window
      ? new ResizeObserver(setHeaderHeight)
      : null
    resizeObserver?.observe(topbar)
    window.addEventListener('resize', setHeaderHeight)

    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener('resize', setHeaderHeight)
      document.documentElement.classList.remove('course-viewer-lock')
      document.body.classList.remove('course-viewer-lock')
      document.documentElement.style.removeProperty('--course-header-h')
    }
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (sidebarOpen && typeof window !== 'undefined' && window.innerWidth <= 768) {
          setSidebarOpen(false)
        }
        if (activeLessonModal) setActiveLessonModal(null)
        if (practiceModalOpen) setPracticeModalOpen(false)
        if (showProgressModal) setShowProgressModal(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [sidebarOpen, activeLessonModal, practiceModalOpen, showProgressModal])

  useEffect(() => {
    if (activeLesson) {
      saveLessonNote(activeLesson.id, notes)
    }
  }, [notes, activeLesson])

  const goToNextLesson = () => {
    if (!selectedCourse || !activeLesson) return
    let found = false
    for (const ch of selectedCourse.chapters) {
      for (let i = 0; i < ch.lessons.length; i++) {
        if (found) { openLesson(ch.lessons[i]); return }
        if (ch.lessons[i].id === activeLesson.id) found = true
      }
    }
  }

  const handleMarkLessonComplete = (lessonId, xp = 25, type = 'lesson') => {
    onCompleteLesson?.(lessonId, xp, type)
  }

  const handleQuizSubmit = (result) => {
    const isCorrect = result.correct
    setQuizChecked(true)
    setQuizSuccess(isCorrect)
    onQuizSubmit(activeLesson.id, isCorrect)
    saveQuizAttempt({
      lessonId: activeLesson.id,
      question: result.question || activeLesson.quiz?.question || activeLesson.title,
      type: result.type || activeLesson.quiz?.type || 'mcq',
      answer: result.answer,
      correct: isCorrect,
      score: result.score
    })
  }

  const handleChallengeSubmit = () => {
    if (activeLesson?.challenge?.validator) {
      try {
        const passed = activeLesson.challenge.validator(playgroundCode)
        if (passed) {
          setChallengeMessage({ type: 'success', text: activeLesson.challenge.successMessage || 'Great job! Challenge passed successfully. (+30 XP)' })
          handleMarkLessonComplete(activeLesson.id, 30, 'challenge')
        } else {
          setChallengeMessage({ type: 'error', text: 'Output match nahi hua. Dobara try karo!' })
        }
      } catch (err) {
        setChallengeMessage({ type: 'error', text: 'Error: ' + err.message })
      }
    } else {
      setChallengeMessage({
        type: 'success',
        text: isHtmlContent
          ? 'Frontend preview compiled & rendered successfully!'
          : 'Code executed successfully!'
      })
      onShowToast?.(15, 'Code practice executed! 🚀')
    }
  }

  const handleCodeChange = (val) => {
    const openTag = val.match(/<([a-zA-Z][\w-]*)>$/)
    if (val.endsWith('>') && openTag) {
      const tag = openTag[1].toLowerCase()
      if (KNOWN_HTML_TAGS.has(tag) && !VOID_TAGS.has(tag)) {
        setPlaygroundCode(`${val}</${tag}>`)
        return
      }
    }
    setPlaygroundCode(val)
  }

  const handleEditorKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault()
      handleChallengeSubmit()
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      const start = e.currentTarget.selectionStart
      const end = e.currentTarget.selectionEnd
      const next = playgroundCode.substring(0, start) + '  ' + playgroundCode.substring(end)
      setPlaygroundCode(next)
      requestAnimationFrame(() => {
        e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2
      })
    }
  }

  const insertSnippet = (tag) => {
    const map = {
      h1: '<h1>Hello</h1>', p: '<p>Paragraph text.</p>',
      img: '<img src="image.jpg" alt="Description">',
      a: '<a href="https://example.com">Link Text</a>',
      button: '<button>Click Me</button>',
      ul: '<ul>\n  <li>First item</li>\n</ul>',
      li: '<li>List item</li>',
      table: '<table>\n  <tr><td>Data</td></tr>\n</table>',
      div: '<div>\n  Content\n</div>',
      span: '<span>Inline text</span>'
    }
    setPlaygroundCode(prev => `${prev}${prev.endsWith('\n') || !prev ? '' : '\n'}${map[tag]}\n`)
  }

  const getLessonCodeText = () => activeLesson.code || playgroundCode || ''

  const copyLessonCode = async () => {
    const text = getLessonCodeText()
    try {
      await navigator.clipboard?.writeText(text)
      onShowToast?.(0, 'Code copied to clipboard! 📋')
    } catch {
      onShowToast?.(0, 'Copy failed. Please try again.')
    }
  }

  const downloadLessonCode = () => {
    const courseId = selectedCourse?.id || ''
    let ext = 'txt'
    if (courseId === 'python') ext = 'py'
    else if (courseId === 'javascript' || courseId === 'react' || courseId === 'nextjs' || courseId === 'nodejs' || courseId === 'express' || courseId === 'backend-projects') ext = 'js'
    else if (courseId === 'typescript') ext = 'ts'
    else if (courseId === 'html' || courseId === 'frontend-projects' || courseId === 'web-fundamentals') ext = 'html'
    else if (courseId === 'css' || courseId === 'tailwind') ext = 'css'
    else if (courseId === 'mysql' || courseId === 'postgresql' || courseId === 'sqlinterview') ext = 'sql'
    else if (courseId === 'c') ext = 'c'
    else if (courseId === 'cpp') ext = 'cpp'
    else if (courseId === 'java') ext = 'java'

    const blob = new Blob([getLessonCodeText()], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${activeLesson.id || 'lesson'}.${ext}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    onShowToast?.(0, `Downloaded ${activeLesson.id || 'code'}.${ext}! 💾`)
  }

  const shareLessonCode = async () => {
    const text = getLessonCodeText()
    const url = typeof window !== 'undefined' ? window.location.href : ''
    if (navigator.share) {
      try {
        await navigator.share({
          title: `CodeMasti — ${activeLesson.title}`,
          text: `Check out this lesson on CodeMasti:\n${activeLesson.title}`,
          url
        })
        return
      } catch (err) {
        if (err.name !== 'AbortError') {
          // fall through
        } else {
          return
        }
      }
    }

    try {
      await navigator.clipboard?.writeText(`${url}\n\n// ${activeLesson.title}\n${text}`)
      onShowToast?.(0, 'Lesson link & code copied for sharing! 🔗')
    } catch {
      onShowToast?.(0, 'Sharing link copied! 🔗')
    }
  }

  const openCodeFullscreen = (event) => {
    const target = event?.currentTarget?.closest('.code-example-card') || document.querySelector('.code-example-card')
    if (document.fullscreenElement) {
      document.exitFullscreen?.()
    } else if (target?.requestFullscreen) {
      target.requestFullscreen().catch(() => {
        setPlaygroundCode(activeLesson.code)
        setPracticeModalOpen(true)
      })
    } else {
      setPlaygroundCode(activeLesson.code)
      setPracticeModalOpen(true)
    }
  }

  const speakLesson = () => {
    const text = activeLesson.voiceExplanation || `${activeLesson.title}. ${activeLesson.englishDef || ''} ${activeLesson.hinglishExplain || ''}`
    if (!window.speechSynthesis) {
      onShowToast(0, 'Voice explanation browser me supported nahi hai.')
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.pitch = 1
    window.speechSynthesis.speak(utterance)
  }

  const isHtmlContent = useMemo(() => {
    if (!playgroundCode) return false
    const trimmed = playgroundCode.trim()
    const courseId = selectedCourse?.id || ''
    if (
      courseId === 'html' ||
      courseId === 'css' ||
      courseId === 'tailwind' ||
      courseId === 'react' ||
      courseId === 'nextjs' ||
      courseId === 'frontend-projects' ||
      courseId === 'frontendprojects' ||
      courseId === 'fullstack-projects' ||
      courseId === 'fullstackprojects' ||
      courseId === 'web-fundamentals' ||
      courseId === 'webfundamentals' ||
      /import\s+React|from\s+['"]react['"]|export\s+default|<[A-Z][A-Za-z0-9_]*\s*|\/>|React\./i.test(trimmed)
    ) {
      return true
    }
    return (
      /^(<!--|<!doctype|<html|<header|<main|<section|<div|<nav|<body|<style|<h[1-6]|<p[\s>])/i.test(trimmed) ||
      (trimmed.includes('<') && trimmed.includes('</'))
    )
  }, [playgroundCode, selectedCourse])

  const playgroundOutput = useMemo(() => {
    if (!selectedCourse) return ''
    const trimmed = (playgroundCode || '').trim()
    const courseId = selectedCourse.id || ''

    if (courseId === 'html') {
      return buildHtmlPreviewDoc(playgroundCode)
    }

    if (courseId === 'css') {
      return buildCssPreviewDoc(playgroundCode)
    }

    if (courseId === 'tailwind') {
      return /\<html[\s>]/i.test(playgroundCode)
        ? playgroundCode.replace('</head>', '<script src="https://cdn.tailwindcss.com"></script></head>')
        : `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><script src="https://cdn.tailwindcss.com"></script></head><body class="p-4 bg-white text-slate-900">${playgroundCode}</body></html>`
    }

    if (courseId === 'c' || courseId === 'cpp' || /#include\s*<|printf\s*\(|std::cout|cout\s*<</i.test(playgroundCode)) {
      return simulateCAndCppOutput(playgroundCode)
    }

    if (courseId === 'java' || /public\s+class|System\.out\./i.test(playgroundCode)) {
      return simulateJavaOutput(playgroundCode)
    }

    if (courseId === 'python' || /print\(|def\s+\w+\(|import\s+math/i.test(playgroundCode)) {
      return simulatePythonOutput(playgroundCode)
    }

    if (courseId === 'mysql' || courseId === 'postgresql' || courseId === 'sqlinterview' || courseId === 'sql' || /^SELECT|^INSERT|^UPDATE|^DELETE|^CREATE\s+TABLE/i.test(trimmed)) {
      return simulateSqlOutput(playgroundCode)
    }

    const isBackend = (
      courseId === 'backend-projects' ||
      courseId === 'backendprojects' ||
      courseId === 'nodejs' ||
      courseId === 'express' ||
      selectedCourse.category === 'backend' ||
      /require\(|module\.exports|exports\.|process\.env|app\.use|app\.get|app\.post|app\.listen|mongoose\.|new Schema/i.test(playgroundCode)
    )

    if (isBackend) {
      return simulateBackendOutput(playgroundCode)
    }

    if (courseId === 'react' || courseId === 'nextjs' || /import\s+React|from\s+['"]react['"]|export\s+default\s+function|export\s+default\s+class|createRoot|useState|useEffect|useContext|useRef|useMemo|useCallback|<[A-Z][A-Za-z0-9_]*/.test(playgroundCode)) {
      return buildReactPreviewDoc(playgroundCode)
    }

    if (courseId === 'typescript') {
      return simulateTypeScriptOutput(playgroundCode)
    }

    if (isHtmlContent) {
      return buildHtmlPreviewDoc(playgroundCode)
    }

    try {
      const logs = []
      const customConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ')),
        error: (...args) => logs.push('[Error] ' + args.join(' ')),
        warn: (...args) => logs.push('[Warn] ' + args.join(' '))
      }
      const fn = new Function('console', `"use strict";\n${playgroundCode}`)
      const result = fn(customConsole)
      if (logs.length > 0) {
        return logs.join('\n')
      }
      return result === undefined ? '// Code executed successfully (no return value)' : String(result)
    } catch (err) {
      return `// Error: ${err.message}`
    }
  }, [playgroundCode, selectedCourse, isHtmlContent])

  const lessonStaticOutputDoc = useMemo(() => {
    if (!activeLesson || !activeLesson.code) return ''
    const code = (activeLesson.code || '').trim()
    const courseId = selectedCourse?.id || ''

    if (courseId === 'html') {
      return buildHtmlPreviewDoc(code)
    }

    if (courseId === 'css') {
      return buildCssPreviewDoc(code)
    }

    if (courseId === 'tailwind') {
      return /\<html[\s>]/i.test(code)
        ? code.replace('</head>', '<script src="https://cdn.tailwindcss.com"></script></head>')
        : `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><script src="https://cdn.tailwindcss.com"></script></head><body class="p-4 bg-white text-slate-900">${code}</body></html>`
    }

    if (courseId === 'react' || courseId === 'nextjs' || /import\s+React|from\s+['"]react['"]|export\s+default\s+function|export\s+default\s+class|createRoot|useState|useEffect|useContext|useRef|useMemo|useCallback|<[A-Z][A-Za-z0-9_]*/.test(code)) {
      return buildReactPreviewDoc(code)
    }

    return buildHtmlPreviewDoc(code)
  }, [activeLesson, selectedCourse])

  const htmlValidationErrors = useMemo(
    () => selectedCourse?.id === 'html' ? getHtmlValidation(playgroundCode) : [],
    [playgroundCode, selectedCourse]
  )
  const domTree = useMemo(() => buildDomTree(playgroundCode), [playgroundCode])

  if (!selectedCourse || !activeLesson) return null

  const articleMode = true
  const allLessons = getAllLessons(selectedCourse)
  const activeLessonIndex = allLessons.findIndex(lesson => lesson.id === activeLesson.id)
  const previousLesson = allLessons[activeLessonIndex - 1]
  const nextLesson = allLessons[activeLessonIndex + 1]

  const activeChapter = useMemo(() => {
    if (!selectedCourse?.chapters || !activeLesson) return null
    return selectedCourse.chapters.find(ch => ch.lessons.some(l => l.id === activeLesson.id)) || null
  }, [selectedCourse, activeLesson])

  const effectiveCompletedLessons = useMemo(() => {
    const set = new Set(user?.completedLessons || [])
      ; (guestProgress?.completedLessons || []).forEach(id => set.add(id))
    return Array.from(set)
  }, [user?.completedLessons, guestProgress?.completedLessons])

  const completedInCourse = allLessons.filter(lesson => effectiveCompletedLessons.includes(lesson.id)).length
  const courseProgressPercent = allLessons.length ? Math.round((completedInCourse / allLessons.length) * 100) : 0
  const lessonProgressPercent = allLessons.length ? Math.round(((activeLessonIndex + 1) / allLessons.length) * 100) : 0
  const completedCurrentLesson = effectiveCompletedLessons.includes(activeLesson.id)
  const userXp = user ? (user.xp || 0) : (guestProgress?.xp || 0)
  const userStreak = user ? (user.streak || 0) : (effectiveCompletedLessons.length > 0 ? 1 : 0)
  const relatedLessons = allLessons
    .filter(lesson => lesson.id !== activeLesson.id)
    .slice(Math.max(0, activeLessonIndex - 2), activeLessonIndex + 4)
    .slice(0, 5)
  const tocItems = [
    ['definition', 'Definition'],
    ['hinglish', 'Hinglish Explanation'],
    ['syntax', 'Syntax'],
    ['code', 'Code Example'],
    ['mistakes', 'Common Mistakes'],
    ['interview', 'Interview Questions'],
    ['quiz', 'Quiz'],
    ['assignment', 'Assignment'],
    ['faq', 'FAQ'],
    ['summary', 'Summary']
  ]

  const jumpToSection = (id) => {
    const modalId = {
      definition: 'definition',
      hinglish: 'hinglish',
      syntax: 'syntax',
      code: 'code',
      mistakes: 'mistakes',
      interview: 'interview',
      quiz: 'quiz',
      assignment: 'assignment',
      faq: 'faq',
      summary: 'revision'
    }[id]
    if (modalId) {
      setActiveLessonModal(modalId)
      return
    }
    document.getElementById(`lesson-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const openLesson = (lesson) => {
    if (!lesson) return
    scrollToLessonTopAfterNavigation()
    setActiveLesson(lesson)
    window.history.pushState({}, '', getLessonUrl(selectedCourse, lesson))
    scrollToLessonTopAfterNavigation()
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return
      if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowRight' && nextLesson) {
        e.preventDefault()
        openLesson(nextLesson)
      } else if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowLeft' && previousLesson) {
        e.preventDefault()
        openLesson(previousLesson)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [nextLesson, previousLesson, selectedCourse])

  const memoryTrickText = activeLesson.memoryTrick || (
    activeLesson.title.toLowerCase().includes('variable')
      ? 'Variable = school bag, value = books. Bag ka naam same rehta hai, books change ho sakti hain.'
      : `${activeLesson.title} ko ek labelled drawer samjho: label concept batata hai, andar ka example ya output yaad karwata hai.`
  )

  const allFlashcards = [
    activeLesson.flashcard,
    ...(activeLesson.flashcards || [])
  ].filter(Boolean).filter((card, index, arr) => arr.findIndex(item => item.q === card.q) === index)

  const modalSections = [
    activeLesson.realLifeStory && {
      id: 'story',
      icon: '🍕',
      title: 'Real Life Story',
      desc: 'Concept ko daily-life flow se connect karo.'
    },
    activeLesson.englishDef && lessonLanguage !== 'hinglish' && {
      id: 'definition',
      icon: '📘',
      title: 'English Definition',
      desc: 'Clean, simple definition in English.'
    },
    activeLesson.hinglishExplain && lessonLanguage !== 'english' && {
      id: 'hinglish',
      icon: '🇮🇳',
      title: 'Hinglish Explanation',
      desc: 'Hindi + English explanation for quick clarity.'
    },
    (activeLesson.funnyExample || activeLesson.funnyAnalogy) && {
      id: 'funny',
      icon: '😂',
      title: 'Funny Example',
      desc: 'A memorable example that makes the idea stick.'
    },
    (activeLesson.visualDiagram || activeLesson.diagrams?.length > 0 || activeLesson.infographic) && {
      id: 'diagram',
      icon: '🖼',
      title: 'Visual Diagram',
      desc: 'See the concept as a visual flow.'
    },
    activeLesson.syntax && {
      id: 'syntax',
      icon: '⌨️',
      title: 'Syntax',
      desc: 'The exact writing pattern.'
    },
    (activeLesson.browserBehindScene || activeLesson.outputAnimation || activeLesson.internalWorking?.length > 0) && {
      id: 'working',
      icon: '⚙️',
      title: 'Internal Working',
      desc: 'What happens behind the scenes.'
    },
    selectedCourse.id === 'html' && activeLesson.code && {
      id: 'dom',
      icon: '🌳',
      title: 'Interactive DOM',
      desc: 'Explore the page structure.'
    },
    selectedCourse.id === 'dsa' && {
      id: 'dsaLab',
      icon: '⚡',
      title: 'Visual DSA Lab',
      desc: 'Interactive step-by-step visualizer.'
    },
    selectedCourse.id === 'dsa' && {
      id: 'dsaDryRun',
      icon: '🔍',
      title: 'Dry Run Tracer',
      desc: 'Variable trace table and step pointers.'
    },
    selectedCourse.id === 'dsa' && {
      id: 'dsaComplexity',
      icon: '📈',
      title: 'Big-O Visualizer',
      desc: 'Compare asymptotic curves and CPU operations.'
    },
    selectedCourse.id === 'dsa' && {
      id: 'dsaPatterns',
      icon: '🧭',
      title: '22 Core Patterns',
      desc: 'Pattern recognition library & decision engine.'
    },
    selectedCourse.id === 'dsa' && {
      id: 'dsaSim',
      icon: '👔',
      title: 'FAANG Interview Sim',
      desc: 'Mock interview coaching with Masti Sir.'
    },
    selectedCourse.id === 'dsa' && {
      id: 'dsaCheatSheets',
      icon: '📜',
      title: 'DSA Cheat Sheets',
      desc: 'Quick tables for Big-O, sorting, graphs, and DP.'
    },
    selectedCourse.id === 'systemdesign' && {
      id: 'systemDesignLab',
      icon: '🏗️',
      title: 'Architecture Lab',
      desc: 'Build, scale, and break a system safely.'
    },
    selectedCourse.id === 'hrinterview' && {
      id: 'hrInterviewStudio',
      icon: '🗣️',
      title: 'HR Answer Studio',
      desc: 'Build a personal draft and resume-based practice questions.'
    },
    activeLesson.code && {
      id: 'code',
      icon: '💻',
      title: 'Code Example',
      desc: 'Read the example and open practice.'
    },
    activeLesson.output && {
      id: 'output',
      icon: '▶️',
      title: 'Output',
      desc: 'Expected result of the code.'
    },
    activeLesson.codeBreakdown?.length > 0 && {
      id: 'breakdown',
      icon: '🔍',
      title: 'Code Breakdown',
      desc: 'Understand each important code part.'
    },
    activeLesson.commonMistakes?.length > 0 && {
      id: 'mistakes',
      icon: '⚠️',
      title: 'Common Mistakes',
      desc: 'Avoid the usual beginner errors.'
    },
    activeLesson.proTips?.length > 0 && {
      id: 'tips',
      icon: '💡',
      title: 'Pro Tips',
      desc: 'Small tips for cleaner learning.'
    },
    activeLesson.realWorldUseCases?.length > 0 && {
      id: 'usecases',
      icon: '🌍',
      title: 'Real World Use Cases',
      desc: 'Where this concept is used.'
    },
    {
      id: 'memory',
      icon: '🧠',
      title: 'Memory Trick',
      desc: 'A short analogy to remember this concept.'
    },
    activeLesson.interviewQuestions?.length > 0 && {
      id: 'interview',
      icon: '🎯',
      title: 'Interview Questions',
      desc: 'Practice common interview prompts.'
    },
    (activeLesson.miniQuiz?.length > 0 || activeLesson.quiz) && {
      id: 'quiz',
      icon: '📝',
      title: 'Quiz',
      desc: 'Attempt MCQs and check your score.'
    },
    (activeLesson.miniChallenge || activeLesson.challenge || activeLesson.practiceQuestions?.length > 0) && {
      id: 'challenge',
      icon: '💪',
      title: 'Challenge',
      desc: 'Solve a small task and unlock solution.'
    },
    (activeLesson.summary?.length > 0 || activeLesson.revisionNotes?.length > 0 || activeLesson.aiSummary || activeLesson.aiNotes?.length > 0) && {
      id: 'revision',
      icon: '📚',
      title: 'Revision Notes',
      desc: 'Bullets, cheat sheet, and quick recap.'
    },
    allFlashcards.length > 0 && {
      id: 'flashcards',
      icon: '🧠',
      title: 'Flashcards',
      desc: 'Review cards with previous, next, and shuffle.'
    },
    activeLesson.assignment && {
      id: 'assignment',
      icon: '🎯',
      title: 'Assignment',
      desc: 'Practice tasks for this lesson.'
    },
    activeLesson.aiDoubtSolver && {
      id: 'ai',
      icon: '🤖',
      title: 'AI Doubt Solver',
      desc: 'Read a student-teacher doubt example.'
    },
    articleMode && {
      id: 'faq',
      icon: '❓',
      title: 'FAQ',
      desc: 'Fast answers about this lesson.'
    }
  ].filter(Boolean)

  const activeModalSection = modalSections.find(section => section.id === activeLessonModal)

  const renderMemoryTrick = (compact = false) => (
    <details className="memory-trick-card" open={!compact}>
      <summary>🧠 Memory Trick</summary>
      <div>
        <strong>Funny Analogy</strong>
        <p>{memoryTrickText}</p>
        <strong>Visual Memory</strong>
        <p>Concept ko ek labelled box ki tarah imagine karo: label naam hai, andar ka item example ya output.</p>
        <strong>Real Life Trick</strong>
        <p>Jab bhi {activeLesson.title} dekho, pehle "naam kya hai, kaam kya hai, result kya hai" teen questions yaad karo.</p>
      </div>
    </details>
  )

  const renderInlineMemoryTrick = () => (
    <div className="inline-memory-trick">
      <h3>🧠 Memory Trick</h3>
      <p>{memoryTrickText}</p>
    </div>
  )

  const renderSectionContent = (sectionId) => {
    switch (sectionId) {
      case 'story':
        return (
          <div className="story-card">
            <h4>{activeLesson.realLifeStory.title}</h4>
            <p>{renderLinkedText(activeLesson.realLifeStory.text, selectedCourse?.id)}</p>
            <div className="story-flow">{activeLesson.realLifeStory.steps?.map(step => <span key={step}>{step}</span>)}</div>
          </div>
        )
      case 'definition':
        return <div className="english-def-card"><p>{renderLinkedText(activeLesson.englishDef, selectedCourse?.id)}</p></div>
      case 'hinglish':
        return <div className="hinglish-card"><p>{renderLinkedText(activeLesson.hinglishExplain, selectedCourse?.id)}</p></div>
      case 'funny':
        return (
          <div className="lesson-modal-stack">
            {activeLesson.funnyExample && (
              <div className="funny-card">
                <div className="funny-dialogue"><pre>{activeLesson.funnyExample.scenario}</pre></div>
                <div className="funny-punchline"><strong>💡 {activeLesson.funnyExample.punchline}</strong></div>
              </div>
            )}
            {activeLesson.funnyAnalogy && <div className="memory-card"><p>{activeLesson.funnyAnalogy}</p></div>}
          </div>
        )
      case 'diagram':
        return (
          <div className="lesson-modal-stack">
            {activeLesson.visualDiagram && (
              <div className="diagram-card">
                <FlowDiagram
                  nodes={activeLesson.visualDiagram.nodes}
                  type={activeLesson.visualDiagram.type}
                  categories={activeLesson.visualDiagram.categories}
                  root={activeLesson.visualDiagram.root}
                  title={activeLesson.visualDiagram.title}
                  subtitle={activeLesson.visualDiagram.subtitle}
                />
              </div>
            )}
            {activeLesson.diagrams?.map(diagram => (
              <div key={diagram.title} className="diagram-card">
                <h4>{diagram.title}</h4>
                <FlowDiagram nodes={diagram.nodes} type={diagram.type} />
              </div>
            ))}
            {activeLesson.infographic && (
              <div className="infographic-card">
                <h4>{activeLesson.infographic.title}</h4>
                {activeLesson.infographic.points.map(point => <span key={point}>{point}</span>)}
              </div>
            )}
          </div>
        )
      case 'syntax':
        return <pre className="syntax-card"><code>{activeLesson.syntax}</code></pre>
      case 'working':
        return (
          <div className="lesson-modal-stack">
            {activeLesson.browserBehindScene && (
              <div className="behind-card">
                <h4>{activeLesson.browserBehindScene.title}</h4>
                <BrowserPipeline steps={activeLesson.browserBehindScene.steps} />
              </div>
            )}
            {activeLesson.outputAnimation && (
              <div className="behind-card">
                <h4>{activeLesson.outputAnimation.title}</h4>
                <BrowserPipeline steps={activeLesson.outputAnimation.steps} />
              </div>
            )}
            {activeLesson.internalWorking?.length > 0 && (
              <div className="internal-card">
                {activeLesson.internalWorking.map((item, i) => <div key={item}><span>{i + 1}</span><p>{item}</p></div>)}
              </div>
            )}
          </div>
        )
      case 'dom':
        return <InteractiveDom nodes={domTree} />
      case 'dsaLab':
        return <DsaVisualizerLab initialMode="binarySearch" />
      case 'dsaDryRun':
        return <DsaDryRunTracer />
      case 'dsaComplexity':
        return <DsaComplexityVisualizer />
      case 'dsaPatterns':
        return <DsaPatternRecognition />
      case 'dsaSim':
        return <DsaInterviewSimulator />
      case 'dsaCheatSheets':
        return <DsaCheatSheets />
      case 'systemDesignLab':
        return <SystemDesignLab />
      case 'hrInterviewStudio':
        return <HrInterviewStudio />
      case 'code':
        return (
          <div className="lesson-modal-stack">
            {activeLesson.languages ? (
              <DsaMultiLangCode languages={activeLesson.languages} defaultCode={activeLesson.code} />
            ) : (
              <div className="code-example-card">
                <div className="code-example-header">
                  <span>{selectedCourse.id === 'html' || selectedCourse.id === 'css' ? 'HTML/CSS' : selectedCourse.id.toUpperCase()}</span>
                  <button onClick={() => navigator.clipboard?.writeText(activeLesson.code)} className="ghost-btn compact"><Copy size={13} /> Copy</button>
                </div>
                <pre className="lesson-code-block"><code>{activeLesson.code}</code></pre>
              </div>
            )}
            <button onClick={() => { setPlaygroundCode(activeLesson.code); setPracticeModalOpen(true) }} className="primary-btn compact lesson-practice-open">▶ Code Practice</button>
            {renderMemoryTrick(true)}
          </div>
        )
      case 'output':
        return (
          <div className="lesson-modal-stack">
            <pre className="syntax-card"><code>{activeLesson.output}</code></pre>
            {renderMemoryTrick(true)}
          </div>
        )
      case 'breakdown':
        return <div className="breakdown-card"><CodeBreakdown parts={activeLesson.codeBreakdown} /></div>
      case 'mistakes':
        return <div className="mistakes-card">{activeLesson.commonMistakes.map((m, i) => <div key={i} className="mistake-item"><span className="mistake-x">✗</span><p>{m}</p></div>)}</div>
      case 'tips':
        return <div className="summary-card">{activeLesson.proTips.map(tip => <div key={tip} className="summary-item"><Check size={14} /><span>{tip}</span></div>)}</div>
      case 'usecases':
        return <div className="usecase-grid">{activeLesson.realWorldUseCases.map(item => <span key={item}>{item}</span>)}</div>
      case 'memory':
        return renderMemoryTrick()
      case 'interview':
        return <div className="interview-list">{activeLesson.aiInterview && <p className="ai-interview-prompt"><strong>AI Interview:</strong> {activeLesson.aiInterview}</p>}{activeLesson.interviewQuestions.map((q, i) => <p key={q}><strong>Q{i + 1}.</strong> {q}</p>)}</div>
      case 'quiz': {
        const quizList = Array.isArray(activeLesson.quiz)
          ? activeLesson.quiz
          : (activeLesson.quizList || activeLesson.miniQuiz || (activeLesson.quiz ? [activeLesson.quiz] : []))
        return (
          <div className="mini-quiz-stack">
            {activeLesson.aiQuiz && <div className="ai-inline-note">{activeLesson.aiQuiz}</div>}
            {quizList.map((quizItem, idx) => (
              <div key={`${activeLesson.id}-quiz-${idx}`} className="mini-quiz-item">
                <span className="mini-quiz-count">Question {idx + 1}</span>
                <QuizBlock quiz={quizItem} onResult={(result) => handleQuizSubmit({ ...result, question: quizItem?.question, type: quizItem?.type || 'mcq' })} />
              </div>
            ))}
            <button onClick={() => { setQuizChecked(false); setQuizSuccess(false) }} className="ghost-btn compact">Retry</button>
          </div>
        )
      }
      case 'challenge':
        return (
          <div className="lesson-modal-stack">
            <div className="mini-challenge-card">
              <strong>Problem Statement</strong>
              <p>{activeLesson.challenge?.instruction || activeLesson.miniChallenge}</p>
              {activeLesson.practiceQuestions?.map((question, i) => <p key={question}>Requirement {i + 1}: {question}</p>)}
              <div className="hint-row">
                <button onClick={() => setHintLevel(Math.max(hintLevel, 1))} className="ghost-btn compact">Hint 1</button>
                <button onClick={() => setHintLevel(Math.max(hintLevel, 2))} className="ghost-btn compact">Hint 2</button>
              </div>
              {hintLevel > 0 && <p className="hint-copy">{hintLevel === 1 ? 'Start with the correct structure.' : 'Compare your code with the lesson example and output.'}</p>}
            </div>
            {activeLesson.challenge && (
              <>
                <textarea value={playgroundCode} onChange={e => handleCodeChange(e.target.value)} onKeyDown={handleEditorKeyDown} className="modal-code-textarea" spellCheck={false} />
                <button onClick={handleChallengeSubmit} className="primary-btn compact">Submit Challenge</button>
                <div className={`challenge-msg ${challengeMessage?.type || 'idle'}`}>{challengeMessage ? challengeMessage.text : 'Submit to unlock the solution.'}</div>
                <div className={`solution-lock ${challengeMessage?.type === 'success' ? 'unlocked' : ''}`}>
                  <strong>Solution</strong>
                  {challengeMessage?.type === 'success' ? <pre>{activeLesson.challenge.initialCode || activeLesson.code}</pre> : <p>Locked until you submit successfully.</p>}
                </div>
              </>
            )}
          </div>
        )
      case 'revision':
        return (
          <div className="summary-card">
            {activeLesson.summary?.map((s, i) => <div key={i} className="summary-item"><Check size={14} /><span>{s}</span></div>)}
            {activeLesson.revisionNotes?.map(note => <span key={note}>{note}</span>)}
            {activeLesson.aiSummary && <p>{activeLesson.aiSummary}</p>}
            {activeLesson.aiNotes?.map(note => <span key={note}>{note}</span>)}
            {activeLesson.summary?.[0] && <div className="recap-30s"><Clock size={14} /><strong>Quick Revision:</strong><span>{activeLesson.summary[0]}</span></div>}
          </div>
        )
      case 'flashcards': {
        const card = allFlashcards[flashcardIndex] || allFlashcards[0]
        return (
          <div className="lesson-modal-stack">
            {card && <Flashcard q={card.q} a={card.a} />}
            <div className="flashcard-controls">
              <button onClick={() => setFlashcardIndex(i => Math.max(0, i - 1))} className="ghost-btn compact">Previous</button>
              <button onClick={() => setFlashcardIndex(i => Math.min(allFlashcards.length - 1, i + 1))} className="ghost-btn compact">Next</button>
              <button onClick={() => setFlashcardIndex(Math.floor(Math.random() * allFlashcards.length))} className="ghost-btn compact"><Shuffle size={13} /> Shuffle</button>
              <button onClick={() => setLearnedFlashcards(prev => card && !prev.includes(card.q) ? [...prev, card.q] : prev)} className="primary-btn compact">Mark as Learned</button>
            </div>
            <small>{learnedFlashcards.length} / {allFlashcards.length} learned</small>
          </div>
        )
      }
      case 'assignment':
        return <div className="assignment-card"><h4>{activeLesson.assignment.title}</h4>{activeLesson.assignment.tasks.map(task => <p key={task}>✅ {task}</p>)}</div>
      case 'ai':
        return <div className="ai-teacher-card"><p><strong>Student:</strong> {activeLesson.aiDoubtSolver.student}</p><p><strong>AI Teacher:</strong> {activeLesson.aiDoubtSolver.ai}</p></div>
      case 'faq':
        return (
          <div className="faq-list">
            {[
              [`What is ${activeLesson.title}?`, activeLesson.englishDef || activeLesson.summary?.[0]],
              [`Is ${activeLesson.title} easy for beginners?`, 'Yes. Start with the definition, run the example, then solve the quiz and assignment.'],
              [`Why should I learn ${activeLesson.title}?`, activeLesson.realWorldUseCases?.length ? `It is used in ${activeLesson.realWorldUseCases.slice(0, 3).join(', ')}.` : activeLesson.summary?.[1]],
              [`How do I practice ${activeLesson.title}?`, activeLesson.assignment?.tasks?.[0] || activeLesson.miniChallenge]
            ].filter(([, answer]) => Boolean(answer)).map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`course-viewer-shell${articleMode ? ' article-mode' : ''}`}>
      {/* ── SIDEBAR BACKDROP (mobile/tablet) ── */}
      {sidebarOpen && (
        <div
          className="sidebar-backdrop show"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── SIDEBAR ── */}
      <aside className={`course-sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-header">
          <div>
            <strong>{selectedCourse.id === 'web-development' ? 'Web Development Track' : (selectedCourse.title || 'Course')}</strong>
            <span>{selectedCourse.icon || '📚'} {selectedCourse.topicsCount || allLessons.length} Topics • {selectedCourse.chapters?.length || 0} Chapters</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="sidebar-close"><X size={18} /></button>
        </div>
        <div className="sidebar-body">
          {/* Dedicated Active Course Syllabus Tree */}
          <div className="gfg-syllabus-tree">
            {selectedCourse?.chapters?.map((chapter, cIdx) => {
              const isChapterOpen = openChapters.has(cIdx)
              const cleanTitle = cleanChapterTitle(chapter.chapterTitle || chapter.title)
              return (
                <div key={cIdx} className="chapter-group">
                  <button
                    type="button"
                    className={`syllabus-chapter-toggle ${isChapterOpen ? 'chapter-open' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleChapter(cIdx)
                    }}
                  >
                    <span className="chapter-title-text">{cleanTitle}</span>
                    <span className="chapter-chevron">
                      <ChevronDown
                        size={16}
                        style={{
                          transform: isChapterOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                          transition: 'transform 0.2s ease',
                          strokeWidth: 2.2
                        }}
                      />
                    </span>
                  </button>
                  {isChapterOpen && chapter.lessons.map(lesson => {
                    const isCompleted = effectiveCompletedLessons.includes(lesson.id)
                    const isActive = activeLesson.id === lesson.id
                    const isDue = spacedRevisions.some(r => r.lessonId === lesson.id)
                    const lessonUrl = getLessonUrl(selectedCourse, lesson)
                    return (
                      <Link
                        key={lesson.id}
                        to={lessonUrl}
                        onClick={() => {
                          openLesson(lesson)
                          if (window.innerWidth < 1024) setSidebarOpen(false)
                        }}
                        className={`lesson-btn${isActive ? ' active' : ''}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <span className="lesson-btn-text">{lesson.title}</span>
                        <span className="lesson-btn-icons">
                          {isDue && <span title="Revision due" style={{ color: '#f59e0b', fontSize: 12 }}>⏰</span>}
                          {isCompleted && <CheckCircle2 size={13} style={{ color: '#22c55e' }} />}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              )
            })}

            {/* Switch Courses Drawer */}
            <div className="chapter-group" style={{ marginTop: 14, borderTop: '1px solid #e2e8f0', paddingTop: 8 }}>
              <button
                type="button"
                className={`syllabus-chapter-toggle ${coursesDrawerOpen ? 'chapter-open' : ''}`}
                onClick={() => setCoursesDrawerOpen(prev => !prev)}
                style={{ background: 'rgba(59, 130, 246, 0.08)', color: '#2563eb', fontWeight: 800 }}
              >
                <span className="chapter-title-text">📚 Switch Course</span>
                <span className="chapter-chevron">
                  {coursesDrawerOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </span>
              </button>
              {coursesDrawerOpen && (
                <div className="gfg-all-courses-list" style={{ padding: '6px 4px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {COURSE_CATALOG.map(c => (
                    <Link
                      key={c.id}
                      to={`/courses/${c.id}`}
                      className={`gfg-subcourse-btn ${selectedCourse.id === c.id ? 'active' : ''}`}
                      onClick={() => {
                        setCoursesDrawerOpen(false)
                        if (window.innerWidth < 1024) setSidebarOpen(false)
                      }}
                    >
                      <span className="gfg-subcourse-name">
                        <span>{c.icon || '📘'}</span>
                        <span>{c.title}</span>
                      </span>
                      {selectedCourse.id === c.id && <span className="active-pill">Active</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* ── SIDEBAR TOGGLE ── */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="sidebar-toggle">
        {sidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* ── MAIN CONTENT ── */}
      <div className="viewer-main">
        {/* ── ULTRA-SLIM READING HEADER & PROGRESS TOGGLE ── */}
        <div className="viewer-top-progress-bar" aria-label="Reading and progress bar">
          <div className="viewer-top-progress-info">
            <div className="viewer-top-progress-left">
              <button
                type="button"
                className="viewer-top-back-btn"
                onClick={onGoToCourses}
                title="Back to All Courses"
                aria-label="Back to courses"
              >
                <ArrowLeft size={13} />
                <span>Back</span>
              </button>
              <button
                type="button"
                className="viewer-top-menu-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                title={sidebarOpen ? "Close Menu" : "Open Menu"}
                aria-label="Toggle menu"
              >
                <BookOpen size={14} />
                <span>Menu</span>
              </button>
              <span className="viewer-top-sep-dot">•</span>
              <span className="viewer-top-course-name" onClick={onGoToCourses} role="button" tabIndex={0} title={selectedCourse.title}>
                {selectedCourse.title}
              </span>
              <ChevronRight size={12} className="viewer-top-sep" />
              <span className="viewer-top-lesson-name" title={activeLesson.title}>{activeLesson.title}</span>
            </div>

            <div className="viewer-top-progress-right">
              {/* Direct Certificate Action Button - Only Available at 100% Progress */}
              {courseProgressPercent >= 100 && (
                <button
                  type="button"
                  className="primary-btn compact"
                  onClick={() => onViewCertificate?.(selectedCourse)}
                  title="Claim / Download 100% Completed Course Certificate"
                  style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)', fontSize: 11.5, gap: 5, padding: '5px 10px' }}
                >
                  <Award size={14} />
                  <span>Claim Certificate</span>
                </button>
              )}

              {/* Clickable Progress & Stats Badge */}
              <button
                type="button"
                className={`viewer-progress-toggle-btn ${showProgressModal ? 'active' : ''}`}
                onClick={() => setShowProgressModal(!showProgressModal)}
                title="Click to view course & lesson progress details"
                aria-label="View Progress & Stats"
              >
                <BarChart3 size={13} />
                <span><span className="progress-btn-label">Progress: </span><strong>{courseProgressPercent}%</strong></span>
              </button>
            </div>
          </div>

          {/* Slim 2.5px animated reading progress line */}
          <div className="viewer-top-progress-track">
            <div
              className="viewer-top-progress-fill"
              style={{ width: `${Math.max(readingScrollPercent, 2)}%` }}
            />
          </div>

          {/* Progress & Stats Popup Modal (via Portal) */}
          {typeof document !== 'undefined' && createPortal(
            <AnimatePresence>
              {showProgressModal && (
                <div className="viewer-progress-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="progress-modal-title">
                  <motion.div
                    className="viewer-progress-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    onClick={() => setShowProgressModal(false)}
                    aria-hidden="true"
                  />
                  <motion.div
                    className="viewer-progress-modal-card"
                    initial={{ opacity: 0, scale: 0.94, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 14 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="viewer-progress-dropdown-header">
                      <div className="viewer-progress-dropdown-title" id="progress-modal-title">
                        <BarChart3 size={18} style={{ color: '#16a34a' }} />
                        <span>Learning Progress & Stats</span>
                      </div>
                      <button
                        type="button"
                        className="viewer-progress-dropdown-close"
                        onClick={() => setShowProgressModal(false)}
                        aria-label="Close progress summary"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <div className="viewer-progress-dropdown-grid">
                      <div className="progress-stat-card primary">
                        <span className="stat-label">Active Lesson</span>
                        <strong className="stat-value text-ellipsis">{activeLesson.title}</strong>
                        <span className="stat-sub">⏱ {activeLesson.readingTime || '8 min read'}</span>
                      </div>

                      <div className="progress-stat-card">
                        <span className="stat-label">Lesson Scroll Read</span>
                        <strong className="stat-value">{readingScrollPercent}%</strong>
                        <div className="stat-progress-bar">
                          <i style={{ width: `${readingScrollPercent}%` }} />
                        </div>
                      </div>

                      <div className="progress-stat-card">
                        <span className="stat-label">Overall Course Progress</span>
                        <strong className="stat-value">{courseProgressPercent}%</strong>
                        <div className="stat-progress-bar">
                          <i style={{ width: `${courseProgressPercent}%` }} />
                        </div>
                      </div>

                      <div className="progress-stat-card">
                        <span className="stat-label">Learning Streak</span>
                        <strong className="stat-value">🔥 {userStreak} Day</strong>
                        <span className="stat-sub">Daily consistency</span>
                      </div>

                      <div className="progress-stat-card">
                        <span className="stat-label">Total XP</span>
                        <strong className="stat-value">⭐ {userXp.toLocaleString()}</strong>
                        <span className="stat-sub">Experience earned</span>
                      </div>
                    </div>

                    {courseProgressPercent >= 100 ? (
                      <button
                        type="button"
                        className="primary-btn"
                        style={{ width: '100%', marginTop: 14, justifyContent: 'center', background: 'linear-gradient(135deg, #16a34a, #15803d)', gap: 6, fontSize: 13, padding: '10px 14px' }}
                        onClick={() => {
                          setShowProgressModal(false)
                          onViewCertificate?.(selectedCourse)
                        }}
                      >
                        <Award size={16} /> 🎓 Claim Verified Certificate (100%)
                      </button>
                    ) : (
                      <div style={{
                        marginTop: 14,
                        padding: '10px 14px',
                        borderRadius: 12,
                        background: 'var(--bg-page, #f8fafc)',
                        border: '1px solid var(--border, #e2e8f0)',
                        textAlign: 'center',
                        fontSize: 12,
                        color: 'var(--text-muted, #64748b)',
                        fontWeight: 600
                      }}>
                        🔒 <strong>Certificate Unlocks at 100% Progress</strong> ({courseProgressPercent}% complete)
                      </div>
                    )}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>,
            document.body
          )}
        </div>

        {/* ── CONTENT PANEL (14-step lesson) ── */}
        <div
          key={activeLesson.id}
          ref={contentPanelRef}
          data-lesson-scroll-root
          className={`content-panel${mobileTab === 'content' ? ' mobile-visible' : ''}`}
        >
          {/* Masti Sir Welcome Card */}
          {activeLesson.mastirQuote?.start && (
            <MastirSirCard quote={activeLesson.mastirQuote.start} type="start" />
          )}

          <div className="lesson-content-layout">
            <article className="lesson-article">
              {/* ① Topic Name */}
              <div ref={lessonStartRef} className="lesson-step-block step-topic">
                <div className="step-number">1</div>
                <div className="step-content">
                  {activeChapter && (
                    <div className="lesson-chapter-kicker">
                      <span className="chapter-kicker-badge">
                        <span className="chapter-kicker-dot" />
                        {cleanChapterTitle(activeChapter.chapterTitle || activeChapter.title)}
                      </span>
                    </div>
                  )}
                  <h1 className="lesson-title">{activeLesson.title}</h1>
                  <div className="lesson-meta-chips">
                    {activeLesson.readingTime && <span>⏱ {activeLesson.readingTime}</span>}
                    {activeLesson.difficulty && <span>🎯 {activeLesson.difficulty}</span>}
                    <span>⭐ +{activeLesson.xpReward || 40} XP</span>
                    {completedCurrentLesson && (
                      <span className="completed-chip">✅ Completed</span>
                    )}
                  </div>
                </div>
              </div>

              {/* 🌟 Special Web Development Parent Course Overview Card */}
              {activeLesson.isWebDevOverview && (
                <WebDevCourseOverviewCard
                  onOpenLesson={(lessonId) => {
                    const target = allLessons.find(l => l.id === lessonId)
                    if (target) {
                      openLesson(target)
                    } else {
                      // Check if chapter matches
                      const chMatch = selectedCourse?.chapters?.find(ch => ch.lessons.some(l => l.id === lessonId))
                      const lessonMatch = chMatch?.lessons?.find(l => l.id === lessonId)
                      if (lessonMatch) openLesson(lessonMatch)
                    }
                  }}
                  chapters={selectedCourse?.chapters}
                />
              )}

              {/* 1 Definition & Foundation */}
              {activeLesson.englishDef && lessonLanguage !== 'english' && (
                <div id="lesson-definition" className="lesson-step-block step-english">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <div className="step-label">Definition & Foundation</div>
                    <div className="english-def-card">
                      <p className="def-main-text">{renderLinkedText(activeLesson.englishDef, selectedCourse?.id)}</p>

                      {/* Second Beginner Explanation */}
                      {activeLesson.secondExplain && (
                        <p className="def-second-text">{renderLinkedText(activeLesson.secondExplain, selectedCourse?.id)}</p>
                      )}

                      {/* Highlighted Sentence / Key Takeaway */}
                      {activeLesson.definitionHighlight && (
                        <div className="def-highlight-box">
                          <span className="highlight-icon">✨</span>
                          <strong className="highlight-text">{activeLesson.definitionHighlight}</strong>
                        </div>
                      )}

                      {/* Algorithm Key Characteristics */}
                      {activeLesson.characteristics && (
                        <div className="def-characteristics-wrap">
                          <DsaAlgoCharacteristicsCard items={activeLesson.characteristics} />
                        </div>
                      )}

                      {/* Examples Section if available without foundation tree */}
                      {activeLesson.examples && !activeLesson.foundationTree && (
                        <div className="def-examples-grid">
                          {activeLesson.examples.data && (
                            <div className="def-example-box data">
                              <span className="example-box-title">📄 Raw Data Examples:</span>
                              <div className="example-tags">
                                {activeLesson.examples.data.map((d, i) => (
                                  <span key={i} className="example-tag data-tag">{d}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {activeLesson.examples.dataStructures && (
                            <div className="def-example-box ds">
                              <span className="example-box-title">📦 Data Structures Examples:</span>
                              <div className="example-tags">
                                {activeLesson.examples.dataStructures.map((ds, i) => (
                                  <span key={i} className="example-tag ds-tag">{ds}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          {activeLesson.examples.algorithms && (
                            <div className="def-example-box algo">
                              <span className="example-box-title">⚙️ Algorithms Examples:</span>
                              <div className="example-tags">
                                {activeLesson.examples.algorithms.map((algo, i) => (
                                  <span key={i} className="example-tag algo-tag">{algo}</span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Real-World Software Uses / Foundation */}
                      {(activeLesson.realWorldUses || activeLesson.foundation) && !activeLesson.foundationTree && (
                        <div className="def-foundation-banner">
                          <span className="foundation-title">🚀 {activeLesson.foundationTitle || 'Foundation for almost every modern software:'}</span>
                          <div className="foundation-chips">
                            {(activeLesson.realWorldUses || activeLesson.foundation).map((use, i) => (
                              <span key={i} className="foundation-chip">{use}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* ⚖️ The Real Reason We Need DSA (Input Scaling Law) */}
              {activeLesson.inputScaleConcept && (
                <div id="lesson-input-scale" className="lesson-step-block step-input-scale">
                  <div className="step-number">⚖️</div>
                  <div className="step-content">
                    <div className="step-label">The Real Reason We Need DSA</div>
                    <DsaInputScaleConceptCard data={activeLesson.inputScaleConcept} />
                  </div>
                </div>
              )}

              {/* 🎯 Why Do We Need DSA? (6 Core Cards) */}
              {activeLesson.whyNeedDsaCards && (
                <div id="lesson-why-need-dsa-cards" className="lesson-step-block step-why-need-dsa-cards">
                  <div className="step-number">🎯</div>
                  <div className="step-content">
                    <div className="step-label">Why Do We Need DSA?</div>
                    <DsaWhyNeedDsCard data={activeLesson.whyNeedDsaCards} />
                  </div>
                </div>
              )}

              {/* 🔴 vs 🟢 Inefficient vs Efficient Approach */}
              {activeLesson.approachComparison && (
                <div id="lesson-approach-compare" className="lesson-step-block step-approach-compare">
                  <div className="step-number">📊</div>
                  <div className="step-content">
                    <div className="step-label">What Happens Without an Efficient Approach?</div>
                    <DsaApproachComparisonCard data={activeLesson.approachComparison} />
                  </div>
                </div>
              )}

              {/* ⏱️ Why Complexity Matters */}
              {activeLesson.complexityMatters && (
                <div id="lesson-complexity-matters" className="lesson-step-block step-complexity-matters">
                  <div className="step-number">⚡</div>
                  <div className="step-content">
                    <div className="step-label">Why Complexity Matters</div>
                    <DsaComplexityMattersCard data={activeLesson.complexityMatters} />
                  </div>
                </div>
              )}

              {/* 🌐 Where Does DSA Matter? */}
              {activeLesson.realWorldMatters && (
                <div id="lesson-realworld-matters" className="lesson-step-block step-realworld-matters">
                  <div className="step-number">🗺️</div>
                  <div className="step-content">
                    <div className="step-label">Where Does DSA Matter?</div>
                    <DsaRealWorldMattersCard data={activeLesson.realWorldMatters} />
                  </div>
                </div>
              )}

              {/* 💡 Formula Card (Data + Organization + Operations) */}
              {activeLesson.formulaCard && (
                <div id="lesson-formula-card" className="lesson-step-block step-formula-card">
                  <div className="step-number">💡</div>
                  <div className="step-content">
                    <div className="step-label">Core Formula & Principles</div>
                    <DsaFormulaCard data={activeLesson.formulaCard} />
                  </div>
                </div>
              )}

              {/* 🗂️ Classification Hierarchy Card */}
              {activeLesson.hierarchy && (
                <div id="lesson-hierarchy" className="lesson-step-block step-hierarchy">
                  <div className="step-number">🗂️</div>
                  <div className="step-content">
                    <div className="step-label">Classification of Data Structures</div>
                    <DsaDsHierarchyCard data={activeLesson.hierarchy} />
                  </div>
                </div>
              )}

              {/* ⚖️ Data vs Data Structure Comparison Table / Primitive vs Non-Primitive */}
              {activeLesson.comparisonTable && (
                <div id="lesson-comparison-table" className="lesson-step-block step-comparison-table">
                  <div className="step-number">⚖️</div>
                  <div className="step-content">
                    <div className="step-label">{activeLesson.comparisonTable.title || 'Comparison Table'}</div>
                    <DsaComparisonTableCard data={activeLesson.comparisonTable} />
                  </div>
                </div>
              )}

              {/* 📐 Linear vs Non-Linear Structures */}
              {activeLesson.linearVsNonLinear && (
                <div id="lesson-linear-vs-nonlinear" className="lesson-step-block step-linear-vs-nonlinear">
                  <div className="step-number">📐</div>
                  <div className="step-content">
                    <div className="step-label">Linear vs Non-Linear Structures</div>
                    <DsaLinearVsNonLinearCard data={activeLesson.linearVsNonLinear} />
                  </div>
                </div>
              )}

              {/* 🎯 Why Are There Different Data Structures? */}
              {activeLesson.whyDifferentDs && (
                <div id="lesson-why-different-ds" className="lesson-step-block step-why-different-ds">
                  <div className="step-number">🎯</div>
                  <div className="step-content">
                    <div className="step-label">Why Different Data Structures Exist</div>
                    <DsaWhyDifferentDsCard data={activeLesson.whyDifferentDs} />
                  </div>
                </div>
              )}

              {/* 📊 Size vs Capacity Card */}
              {activeLesson.sizeVsCapacity && (
                <div id="lesson-size-vs-capacity" className="lesson-step-block step-size-vs-capacity">
                  <div className="step-number">📊</div>
                  <div className="step-content">
                    <div className="step-label">Size vs Capacity: The Fundamental Distinction</div>
                    <DsaSizeVsCapacityCard data={activeLesson.sizeVsCapacity} />
                  </div>
                </div>
              )}

              {/* 🏛️ ADT vs Data Structure Card */}
              {activeLesson.adtVsDs && (
                <div id="lesson-adt-vs-ds" className="lesson-step-block step-adt-vs-ds">
                  <div className="step-number">🏛️</div>
                  <div className="step-content">
                    <div className="step-label">ADT vs Data Structure: WHAT vs HOW</div>
                    <DsaAdtVsDsCard data={activeLesson.adtVsDs} />
                  </div>
                </div>
              )}

              {/* 📦 Common ADT Examples Card */}
              {activeLesson.adtExamples && (
                <div id="lesson-adt-examples" className="lesson-step-block step-adt-examples">
                  <div className="step-number">📦</div>
                  <div className="step-content">
                    <div className="step-label">Common Abstract Data Types & Implementations</div>
                    <DsaAdtExamplesCard data={activeLesson.adtExamples} />
                  </div>
                </div>
              )}

              {/* 🌍 Real-World Application Map Card */}
              {activeLesson.realWorldAppMap && (
                <div id="lesson-real-world-app-map" className="lesson-step-block step-realworld-app-map">
                  <div className="step-number">🌍</div>
                  <div className="step-content">
                    <div className="step-label">DSA Around Us: Real-World Applications</div>
                    <DsaRealWorldApplicationMapCard data={activeLesson.realWorldAppMap} />
                  </div>
                </div>
              )}

              {/* 📈 Input Scale Matters Card */}
              {activeLesson.scaleMatters && (
                <div id="lesson-scale-matters" className="lesson-step-block step-scale-matters">
                  <div className="step-number">📈</div>
                  <div className="step-content">
                    <div className="step-label">Why Scale Makes DSA Critical</div>
                    <DsaScaleMattersCard data={activeLesson.scaleMatters} />
                  </div>
                </div>
              )}

              {/* ⚠️ Important Clarification (Accurate Mental Model) */}
              {activeLesson.clarification && (
                <div id="lesson-clarification" className="lesson-step-block step-clarification">
                  <div className="step-number">⚠️</div>
                  <div className="step-content">
                    <div className="step-label">Important Clarification</div>
                    <DsaClarificationCard data={activeLesson.clarification} />
                  </div>
                </div>
              )}

              {/* 💡 Real-World Example (Student Marks) */}
              {activeLesson.realWorldExample && (
                <div id="lesson-realworld-example" className="lesson-step-block step-realworld-example">
                  <div className="step-number">💡</div>
                  <div className="step-content">
                    <div className="step-label">Real-World Example</div>
                    <DsaRealWorldExampleCard data={activeLesson.realWorldExample} />
                  </div>
                </div>
              )}

              {/* 🧱 Why Structure Matters (Array vs Set) */}
              {activeLesson.whyStructureMatters && (
                <div id="lesson-why-structure" className="lesson-step-block step-why-structure">
                  <div className="step-number">🧱</div>
                  <div className="step-content">
                    <div className="step-label">Why Structure Matters</div>
                    <DsaWhyStructureMattersCard data={activeLesson.whyStructureMatters} />
                  </div>
                </div>
              )}

              {/* 💡 Simple Example (e.g. Finding Largest Number) */}
              {activeLesson.simpleExample && (
                <div id="lesson-simple-example" className="lesson-step-block step-simple-example">
                  <div className="step-number">💡</div>
                  <div className="step-content">
                    <div className="step-label">Simple Example</div>
                    <DsaSimpleExampleCard data={activeLesson.simpleExample} />
                  </div>
                </div>
              )}

              {/* ⚙️ Common Data Structure Operations */}
              {activeLesson.operations && (
                <div id="lesson-operations" className="lesson-step-block step-operations">
                  <div className="step-number">⚙️</div>
                  <div className="step-content">
                    <div className="step-label">Common Operations</div>
                    <DsaOperationsGrid operations={activeLesson.operations} />
                  </div>
                </div>
              )}

              {/* 🎯 Why Do We Need Data Structures / Good Algorithms */}
              {activeLesson.whyNeedDs && (
                <div id="lesson-why-need-ds" className="lesson-step-block step-why-need-ds">
                  <div className="step-number">🎯</div>
                  <div className="step-content">
                    <div className="step-label">{activeLesson.whyNeedDs.title || 'Why Do We Need Data Structures?'}</div>
                    <DsaWhyNeedDsCard data={activeLesson.whyNeedDs} />
                  </div>
                </div>
              )}

              {/* 🎯 Why Do We Need Algorithms */}
              {activeLesson.whyNeedAlgo && (
                <div id="lesson-why-need-algo" className="lesson-step-block step-why-need-algo">
                  <div className="step-number">🎯</div>
                  <div className="step-content">
                    <div className="step-label">Why Do We Need Algorithms?</div>
                    <DsaWhyNeedAlgoCard data={activeLesson.whyNeedAlgo} />
                  </div>
                </div>
              )}

              {/* 📊 Same Data, Different Organization */}
              {activeLesson.sameDataDiffOrg && (
                <div id="lesson-same-data" className="lesson-step-block step-same-data">
                  <div className="step-number">📊</div>
                  <div className="step-content">
                    <div className="step-label">Data Organization Matters</div>
                    <DsaSameDataDiffOrgCard data={activeLesson.sameDataDiffOrg} />
                  </div>
                </div>
              )}

              {/* ⚡ Same Problem, Different Algorithms */}
              {activeLesson.sameProblemDiffAlgo && (
                <div id="lesson-same-problem" className="lesson-step-block step-same-problem">
                  <div className="step-number">⚡</div>
                  <div className="step-content">
                    <div className="step-label">Same Problem, Different Algorithms</div>
                    <DsaSameProblemDiffAlgoCard data={activeLesson.sameProblemDiffAlgo} />
                  </div>
                </div>
              )}

              {/* 💡 There Is No Single "Best" Data Structure */}
              {activeLesson.noBestDs && (
                <div id="lesson-no-best" className="lesson-step-block step-no-best">
                  <div className="step-number">💡</div>
                  <div className="step-content">
                    <div className="step-label">Trade-offs & Selection</div>
                    <DsaNoBestDsCard data={activeLesson.noBestDs} />
                  </div>
                </div>
              )}

              {/* 🧠 Full Visual Architecture & Foundation Tree (DSA Concept Mastery) */}
              {activeLesson.foundationTree && (
                <div id="lesson-foundation-tree" className="lesson-step-block step-foundation-tree">
                  <div className="step-number">🌲</div>
                  <div className="step-content">
                    <div className="step-label">Taxonomy & Real-World Foundation</div>
                    <DsaArchitectureTreeCard data={activeLesson.foundationTree} />
                  </div>
                </div>
              )}

              {/* 🔥 Why Do We Need It? Comparison Section */}
              {activeLesson.whyNeedItRewritten && (
                <div id="lesson-why-need" className="lesson-step-block step-why-need">
                  <div className="step-number">?</div>
                  <div className="step-content">
                    <div className="step-label">{activeLesson.whyNeedItRewritten.heading || 'Why Do We Need DSA?'}</div>
                    <DsaWhyNeedItRewritten data={activeLesson.whyNeedItRewritten} />
                  </div>
                </div>
              )}

              {!activeLesson.whyNeedItRewritten && !activeLesson.whyNeedDs && !activeLesson.whyNeedAlgo && !activeLesson.whyNeedDsaCards && activeLesson.whyNeedIt && (
                <div id="lesson-why-need" className="lesson-step-block step-why-need">
                  <div className="step-number">?</div>
                  <div className="step-content">
                    <div className="step-label">Why Do We Need It?</div>
                    <WhyNeedItCard data={activeLesson.whyNeedIt} />
                  </div>
                </div>
              )}

              {/* 🔎 Finding a Number: Linear Search vs Binary Search Comparison */}
              {activeLesson.searchComparison && (
                <div id="lesson-search-comparison" className="lesson-step-block step-search-comparison">
                  <div className="step-number">⚡</div>
                  <div className="step-content">
                    <div className="step-label">Algorithm Performance Comparison</div>
                    <DsaSearchComparisonCard data={activeLesson.searchComparison} />
                  </div>
                </div>
              )}

              {/* ❓ Prominent Clickable Question & Answers Card */}
              {activeLesson && (
                <button
                  type="button"
                  id="lesson-topic-questions-cta"
                  className="prominent-qa-card"
                  onClick={() => navigate(getQuestionsUrl(selectedCourse, activeLesson))}
                  aria-label={`Open Question & Answers for ${activeLesson.title}`}
                >
                  <div className="prominent-qa-left">
                    <span className="prominent-qa-icon">❓</span>
                    <div className="prominent-qa-text">
                      <span className="prominent-qa-title">Question & Answers</span>
                      <span className="prominent-qa-sub">Practice important questions from this topic</span>
                    </div>
                  </div>
                  <div className="prominent-qa-right">
                    <span className="prominent-qa-btn">View Questions →</span>
                  </div>
                </button>
              )}

              {/* 2 Hinglish */}
              {activeLesson.hinglishExplain && lessonLanguage !== 'english' && (
                <div id="lesson-hinglish" className="lesson-step-block step-hinglish">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <div className="step-label">Hinglish Explanation</div>
                    <div className="hinglish-card">
                      <p style={{ whiteSpace: 'pre-line' }}>{renderLinkedText(activeLesson.hinglishExplain, selectedCourse?.id)}</p>
                      {activeLesson.dsVsAlgoComparison && (
                        <DsaDsVsAlgoTable data={activeLesson.dsVsAlgoComparison} />
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 3 Story Based Explanation (Masti Sir Ki Kahani) */}
              {activeLesson.storyExplain && (
                <div className="lesson-step-block step-story">
                  <div className="step-number">S</div>
                  <div className="step-content">
                    <div className="step-label">Story-Based Explanation (Masti Sir Ki Kahani)</div>
                    <StoryCard story={activeLesson.storyExplain} />
                    {activeLesson.conceptMapping && (
                      <DsaConceptMappingCard mapping={activeLesson.conceptMapping} />
                    )}
                  </div>
                </div>
              )}

              {/* 4 Funny Example & Analogy */}
              {activeLesson.funnyExample && (
                <div className="lesson-step-block step-funny">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <div className="step-label">Funny Example</div>
                    <div className="funny-card">
                      <div className="funny-dialogue">
                        <pre>{activeLesson.funnyExample.scenario}</pre>
                      </div>
                      <div className="funny-punchline">
                        <strong>💡 {activeLesson.funnyExample.punchline}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeLesson.funnyAnalogy && (
                <div className={`lesson-step-block ${selectedCourse.id === 'python' ? 'step-roadmap' : 'step-analogy'}`}>
                  <div className="step-number">4</div>
                  <div className="step-content">
                    {selectedCourse.id === 'python' ? (
                      <>
                        <div className="step-label">Python Roadmap</div>
                        <figure className="python-roadmap-card">
                          <img
                            src="/assets/course-images/python-roadmap.png"
                            alt="Python visual learning roadmap"
                            loading="lazy"
                          />
                        </figure>
                      </>
                    ) : (
                      <>
                        <div className="step-label">Analogy</div>
                        <div className="memory-card">
                          <p>{activeLesson.funnyAnalogy}</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* 5 Visual Diagram (Data vs Data Structure Visual Architecture) */}
              {activeLesson.dataVsDsDiagram && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Diagram — Data to Data Structure</div>
                    <DsaDataVsDsVisualDiagram data={activeLesson.dataVsDsDiagram} />
                  </div>
                </div>
              )}

              {/* 5 Visual Diagram (Characteristics of a Good Algorithm Visual Flow) */}
              {activeLesson.goodAlgoDiagram && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Flow — Characteristics of a Good Algorithm</div>
                    <DsaGoodAlgoVisualDiagram data={activeLesson.goodAlgoDiagram} />
                  </div>
                </div>
              )}

              {/* 5 Visual Diagram (Types of Data Structures Visual Hierarchy) */}
              {activeLesson.typesVisualDiagram && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Diagram — Types of Data Structures</div>
                    <DsaTypesVisualDiagram data={activeLesson.typesVisualDiagram} />
                  </div>
                </div>
              )}

              {/* 5 Visual Diagram (Linear vs Non-Linear Visual Architecture) */}
              {activeLesson.linearVsNonLinearDiagram && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Architecture — Linear vs Non-Linear Organization</div>
                    <DsaLinearVsNonLinearVisualDiagram data={activeLesson.linearVsNonLinearDiagram} />
                  </div>
                </div>
              )}

              {/* 5 Visual Diagram (Static vs Dynamic Visual Architecture) */}
              {activeLesson.staticVsDynamicDiagram && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Diagram — Static vs Dynamic Storage Architecture</div>
                    <DsaStaticVsDynamicDiagram data={activeLesson.staticVsDynamicDiagram} />
                  </div>
                </div>
              )}

              {/* 5 Visual Diagram (ADT Visual Architecture) */}
              {activeLesson.adtVisualDiagram && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Diagram — ADT Architecture & Implementation</div>
                    <DsaAdtVisualDiagram data={activeLesson.adtVisualDiagram} />
                  </div>
                </div>
              )}

              {/* 5 Visual Diagram (Real-World DSA Visual Architecture) */}
              {activeLesson.realWorldVisualDiagram && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Diagram — Real-World Problem Solving Pipeline</div>
                    <DsaRealWorldVisualDiagram data={activeLesson.realWorldVisualDiagram} />
                  </div>
                </div>
              )}

              {/* 5 Visual Diagram (DSA Flow Architecture) */}
              {!activeLesson.dataVsDsDiagram && !activeLesson.goodAlgoDiagram && !activeLesson.typesVisualDiagram && !activeLesson.linearVsNonLinearDiagram && !activeLesson.staticVsDynamicDiagram && !activeLesson.adtVisualDiagram && !activeLesson.realWorldVisualDiagram && activeLesson.flowArchitecture && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Diagram — DSA Flow Architecture</div>
                    <DsaFlowArchitectureCard data={activeLesson.flowArchitecture} />
                  </div>
                </div>
              )}

              {!activeLesson.flowArchitecture && activeLesson.visualDiagram && (
                <div className="lesson-step-block step-diagram">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <div className="step-label">Visual Diagram</div>
                    {selectedCourse.id === 'html' ? (
                      <AnimatedHtmlFlow />
                    ) : (
                      <div className="diagram-card">
                        <FlowDiagram
                          nodes={activeLesson.visualDiagram.nodes}
                          type={activeLesson.visualDiagram.type}
                          categories={activeLesson.visualDiagram.categories}
                          root={activeLesson.visualDiagram.root}
                          title={activeLesson.visualDiagram.title}
                          subtitle={activeLesson.visualDiagram.subtitle}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 💻 Starter / Beginner Code Example & Visual Explanation */}
              {activeLesson.starterCodeExample && (
                <div id="lesson-starter-code" className="lesson-step-block step-starter-code">
                  <div className="step-number">💻</div>
                  <div className="step-content">
                    <div className="step-label">Starter Code & Flow</div>
                    <StarterCodeCard
                      data={activeLesson.starterCodeExample}
                      onRun={(code) => {
                        setPlaygroundCode(code)
                        if (articleMode) {
                          setPracticeModalOpen(true)
                        } else {
                          setMobileTab('editor')
                        }
                      }}
                    />
                  </div>
                </div>
              )}

              {/* 6 Code Example */}
              {activeLesson.code && (
                <div id="lesson-code" className="lesson-step-block step-code">
                  <div className="step-number">6</div>
                  <div className="step-content">
                    <div className="step-label">Code Implementation</div>
                    {activeLesson.languages ? (
                      <DsaMultiLangCode languages={activeLesson.languages} defaultCode={activeLesson.code} />
                    ) : (
                      <div className="code-example-card">
                        <div className="code-example-header">
                          <span>
                            {selectedCourse.id === 'html' || selectedCourse.id === 'css'
                              ? 'HTML/CSS'
                              : selectedCourse.id === 'javascript' || selectedCourse.id === 'react' || selectedCourse.id === 'nextjs'
                                ? 'JavaScript'
                                : selectedCourse.id.toUpperCase()}
                          </span>
                          <div className="code-action-row">
                            <button type="button" onClick={copyLessonCode} className="ghost-btn compact">Copy</button>
                            <button type="button" onClick={() => { setPlaygroundCode(activeLesson.code); articleMode ? setPracticeModalOpen(true) : setMobileTab('editor') }} className="ghost-btn compact">Run</button>
                            <button type="button" onClick={() => setPlaygroundCode(activeLesson.challenge?.initialCode || activeLesson.code || '')} className="ghost-btn compact">Reset</button>
                            <button type="button" onClick={openCodeFullscreen} className="ghost-btn compact">Fullscreen</button>
                            <button type="button" onClick={downloadLessonCode} className="ghost-btn compact">Download</button>
                            <button type="button" onClick={shareLessonCode} className="ghost-btn compact">Share</button>
                          </div>
                        </div>
                        <pre className="lesson-code-block"><code>{activeLesson.code}</code></pre>

                        {/* Visual Code Summary Cards */}
                        {activeLesson.codeExplanationVisual && (
                          <div className="code-visual-summary-box">
                            <div className="visual-summary-item">
                              <span className="summary-k">Data Structure:</span>
                              <strong className="summary-v">{activeLesson.codeExplanationVisual.dataStructure}</strong>
                            </div>
                            <div className="visual-summary-item">
                              <span className="summary-k">Algorithm:</span>
                              <strong className="summary-v">{activeLesson.codeExplanationVisual.algorithm}</strong>
                            </div>
                            <div className="visual-summary-item">
                              <span className="summary-k">Input:</span>
                              <code className="summary-v">{activeLesson.codeExplanationVisual.input}</code>
                            </div>
                            <div className="visual-summary-item">
                              <span className="summary-k">Target:</span>
                              <code className="summary-v">{activeLesson.codeExplanationVisual.target}</code>
                            </div>
                            <div className="visual-summary-item">
                              <span className="summary-k">Result:</span>
                              <strong className="summary-v green">{activeLesson.codeExplanationVisual.result}</strong>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 🧩 Code Breakdown Card */}
              {activeLesson.codeBreakdown?.length > 0 && (
                <div id="lesson-code-breakdown" className="lesson-step-block step-code-breakdown">
                  <div className="step-number">🧩</div>
                  <div className="step-content">
                    <div className="step-label">Code Breakdown</div>
                    <div className="breakdown-card">
                      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>
                        Har part pe hover karo — detailed explanation milega.
                      </p>
                      <CodeBreakdown parts={activeLesson.codeBreakdown} />
                    </div>
                  </div>
                </div>
              )}

              {/* 🔍 Step-by-Step Dry Run Card */}
              {activeLesson.dryRun?.steps && (
                <div id="lesson-dry-run" className="lesson-step-block step-dry-run">
                  <div className="step-number">🔍</div>
                  <div className="step-content">
                    <div className="step-label">Step-by-Step Dry Run</div>
                    <DsaDryRunCard data={activeLesson.dryRun} />
                  </div>
                </div>
              )}

              {/* 🧠 Interactive Mini Exercise: Which Data Structure Would You Choose? */}
              {activeLesson.chooseDsExercise && (
                <div id="lesson-choose-ds-exercise" className="lesson-step-block step-choose-ds-exercise">
                  <div className="step-number">🎯</div>
                  <div className="step-content">
                    <div className="step-label">Interactive Practice — Choosing the Right Structure</div>
                    <DsaChooseDsExerciseCard data={activeLesson.chooseDsExercise} />
                  </div>
                </div>
              )}

              {/* ⏱ Operation-Based Complexity Table */}
              {activeLesson.operationComplexity && (
                <div id="lesson-operation-complexity" className="lesson-step-block step-operation-complexity">
                  <div className="step-number">⏱</div>
                  <div className="step-content">
                    <div className="step-label">Complexity Depends on the Operation</div>
                    <DsaOperationComplexityTableCard data={activeLesson.operationComplexity} />
                  </div>
                </div>
              )}

              {/* 📋 Data Structures At A Glance */}
              {activeLesson.glanceTable && (
                <div id="lesson-glance-table" className="lesson-step-block step-glance-table">
                  <div className="step-number">📋</div>
                  <div className="step-content">
                    <div className="step-label">Data Structures at a Glance</div>
                    <DsaDsAtAGlanceCard data={activeLesson.glanceTable} />
                  </div>
                </div>
              )}

              {/* ⏱ Dedicated Time & Space Complexity Section */}
              {(activeLesson.timeComplexity || activeLesson.spaceComplexity) && (
                <div id="lesson-complexity" className="lesson-step-block step-complexity">
                  <div className="step-number">⏱</div>
                  <div className="step-content">
                    <div className="step-label">Complexity Analysis</div>
                    <div className="dsa-complexity-summary-card">
                      <div className="dsa-complexity-pill-row">
                        {activeLesson.timeComplexity && (
                          <div className="dsa-complexity-pill time">
                            <span className="pill-badge">⏱ Time Complexity</span>
                            <span className="pill-val">{activeLesson.timeComplexity}</span>
                            {activeLesson.timeComplexityExplain && (
                              <span className="pill-desc">{activeLesson.timeComplexityExplain}</span>
                            )}
                          </div>
                        )}
                        {activeLesson.spaceComplexity && (
                          <div className="dsa-complexity-pill space">
                            <span className="pill-badge">💾 Auxiliary Space Complexity</span>
                            <span className="pill-val">{activeLesson.spaceComplexity}</span>
                            {activeLesson.spaceComplexityExplain && (
                              <span className="pill-desc">{activeLesson.spaceComplexityExplain}</span>
                            )}
                          </div>
                        )}
                      </div>
                      {activeLesson.inputSpaceNote && (
                        <div className="dsa-input-space-note">
                          <span>📦 <strong>Note:</strong> {activeLesson.inputSpaceNote}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* 🧠 Memory Trick Highlight Card */}
              {activeLesson.memoryTrickText && (
                <div id="lesson-memory-trick" className="lesson-step-block step-memory-trick">
                  <div className="step-number">💡</div>
                  <div className="step-content">
                    <div className="step-label">Memory Trick</div>
                    <DsaMemoryTrickCard text={activeLesson.memoryTrickText} />
                  </div>
                </div>
              )}

              {/* ⚖️ Algorithm vs Program */}
              {activeLesson.algoVsProgram && (
                <div id="lesson-algo-program" className="lesson-step-block step-algo-program">
                  <div className="step-number">⚖️</div>
                  <div className="step-content">
                    <div className="step-label">Algorithm vs Program</div>
                    <DsaAlgoVsProgramCard data={activeLesson.algoVsProgram} />
                  </div>
                </div>
              )}

              {/* 🤝 📦 Data Structure + ⚙️ Algorithm */}
              {activeLesson.dsPlusAlgo && (
                <div id="lesson-ds-algo-combo" className="lesson-step-block step-ds-algo-combo">
                  <div className="step-number">🤝</div>
                  <div className="step-content">
                    <div className="step-label">Data Structure + Algorithm</div>
                    <DsaDsPlusAlgoCard data={activeLesson.dsPlusAlgo} />
                  </div>
                </div>
              )}

              {/* ⚡ A Better Approach for Sorted Data (Why Binary Search Matters) */}
              {activeLesson.whyBinarySearchMatters && (
                <div id="lesson-binary-matters" className="lesson-step-block step-binary-matters">
                  <div className="step-number">⚡</div>
                  <div className="step-content">
                    <div className="step-label">A Better Approach for Sorted Data</div>
                    <DsaWhyBinarySearchMattersCard data={activeLesson.whyBinarySearchMatters} />
                  </div>
                </div>
              )}

              {/* ⚖️ DSA Is About Trade-offs */}
              {activeLesson.tradeoffs && (
                <div id="lesson-tradeoffs" className="lesson-step-block step-tradeoffs">
                  <div className="step-number">⚖️</div>
                  <div className="step-content">
                    <div className="step-label">DSA Trade-offs</div>
                    <DsaTradeoffsCard data={activeLesson.tradeoffs} />
                  </div>
                </div>
              )}

              {/* Fun Facts + Did You Know banners after Code */}
              {(activeLesson.funFact || activeLesson.didYouKnow || activeLesson.proTips?.[0]) && (
                <div className="lesson-step-block step-funfacts">
                  <div className="step-number">🎉</div>
                  <div className="step-content">
                    <div className="step-label">Fun Facts & Tips</div>
                    <FunFactBanner
                      funFact={activeLesson.funFact}
                      didYouKnow={activeLesson.didYouKnow}
                      proTip={activeLesson.proTips?.[0]}
                    />
                  </div>
                </div>
              )}

              {/* 7 Output */}
              {(activeLesson.output || activeLesson.code) && (
                <div className="lesson-step-block step-output">
                  <div className="step-number">7</div>
                  <div className="step-content">
                    <div className="step-label">Output</div>
                    <div className="lesson-output-practice-grid">
                      <div className="lesson-output-main">
                        {activeLesson.output ? (
                          <pre className="syntax-card"><code>{activeLesson.output}</code></pre>
                        ) : isHtmlContent ? (
                          <div className="live-preview-card">
                            <div className="preview-browser-bar">
                              <span className="browser-dot" /><span className="browser-dot" /><span className="browser-dot" />
                              <span className="preview-url">browser preview</span>
                            </div>
                            <iframe
                              srcDoc={lessonStaticOutputDoc}
                              title="preview"
                              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                              className="lesson-preview-frame"
                            />
                          </div>
                        ) : (
                          <pre className="syntax-card"><code>{playgroundOutput}</code></pre>
                        )}
                      </div>
                      {activeLesson.code && (
                        <aside className="practice-console-card" aria-label="Practice Console">
                          <span><Terminal size={14} /> Practice Console</span>
                          <p>Example ko edit karke run karo.</p>
                          <button
                            type="button"
                            className="primary-btn compact"
                            onClick={() => {
                              setPlaygroundCode(activeLesson.code)
                              setPracticeModalOpen(true)
                            }}
                          >
                            <Play size={13} /> Code Practice
                          </button>
                        </aside>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {!activeLesson.output && activeLesson.code && selectedCourse.id !== 'html' && selectedCourse.id !== 'css' && (
                <div className="lesson-step-block step-output">
                  <div className="step-number">7</div>
                  <div className="step-content">
                    <div className="step-label">Practice Console</div>
                    <div className="lesson-output-practice-grid practice-only">
                      <aside className="practice-console-card" aria-label="Practice Console">
                        <span><Terminal size={14} /> Practice Console</span>
                        <p>Example ko edit karke run karo.</p>
                        <button
                          type="button"
                          className="primary-btn compact"
                          onClick={() => {
                            setPlaygroundCode(activeLesson.code)
                            setPracticeModalOpen(true)
                          }}
                        >
                          <Play size={13} /> Code Practice
                        </button>
                      </aside>
                    </div>
                  </div>
                </div>
              )}

              <section className="extra-resources-section">
                <h2>Extra Resources</h2>

                {!activeLesson.memoryTrickText && (
                  <details className="extra-resource-item">
                    <summary>Memory Trick</summary>
                    <div className="extra-resource-body">{renderInlineMemoryTrick()}</div>
                  </details>
                )}

                {activeLesson.codeBreakdown?.length > 0 && (
                  <details className="extra-resource-item">
                    <summary>Code Breakdown</summary>
                    <div className="extra-resource-body">
                      <div className="breakdown-card">
                        <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 12 }}>
                          Har part pe hover karo — explanation milega.
                        </p>
                        <CodeBreakdown parts={activeLesson.codeBreakdown} />
                      </div>
                    </div>
                  </details>
                )}

                {activeLesson.commonMistakes?.length > 0 && (
                  <details className="extra-resource-item">
                    <summary>Common Mistakes</summary>
                    <div className="extra-resource-body">
                      <div className="mistakes-card">
                        {activeLesson.commonMistakes.map((m, i) => (
                          <div key={i} className="mistake-item">
                            <span className="mistake-x">✗</span>
                            <p>{m}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                )}

                {activeLesson.proTips?.length > 0 && (
                  <details className="extra-resource-item">
                    <summary>Pro Tips</summary>
                    <div className="extra-resource-body">
                      <div className="summary-card">
                        {activeLesson.proTips.map(tip => (
                          <div key={tip} className="summary-item">
                            <Check size={14} style={{ color: '#10b981', flexShrink: 0 }} />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                )}

                {activeLesson.interviewQuestions?.length > 0 && (
                  <details className="extra-resource-item">
                    <summary>Interview Questions</summary>
                    <div className="extra-resource-body">
                      <div className="interview-list">
                        {activeLesson.aiInterview && <p className="ai-interview-prompt"><strong>AI Interview:</strong> {activeLesson.aiInterview}</p>}
                        {activeLesson.interviewQuestions.map((q, i) => <p key={q}><strong>Q{i + 1}.</strong> {q}</p>)}
                      </div>
                    </div>
                  </details>
                )}

                {((Array.isArray(activeLesson.quiz) && activeLesson.quiz.length > 0) || activeLesson.quizList?.length > 0 || activeLesson.miniQuiz?.length > 0 || activeLesson.quiz) && (
                  <details className="extra-resource-item">
                    <summary>
                      Quiz ({
                        Array.isArray(activeLesson.quiz)
                          ? activeLesson.quiz.length
                          : (activeLesson.quizList?.length || activeLesson.miniQuiz?.length || 1)
                      } Questions)
                    </summary>
                    <div className="extra-resource-body">
                      {activeLesson.aiQuiz && <div className="ai-inline-note">{activeLesson.aiQuiz}</div>}
                      <div className="mini-quiz-stack">
                        {(
                          Array.isArray(activeLesson.quiz)
                            ? activeLesson.quiz
                            : (activeLesson.quizList || activeLesson.miniQuiz || (activeLesson.quiz ? [activeLesson.quiz] : []))
                        ).map((quizItem, idx) => (
                          <div key={`${activeLesson.id}-quiz-${idx}`} className="mini-quiz-item">
                            <span className="mini-quiz-count">Question {idx + 1}</span>
                            <QuizBlock
                              quiz={quizItem}
                              onResult={(result) => {
                                handleQuizSubmit({
                                  ...result,
                                  question: quizItem?.question,
                                  type: quizItem?.type || 'mcq'
                                })
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                )}

                {/* Quick Revision Card */}
                {activeLesson.quickRevision && (
                  <details className="extra-resource-item">
                    <summary>Quick Revision</summary>
                    <div className="extra-resource-body">
                      <DsaQuickRevisionCard data={activeLesson.quickRevision} />
                    </div>
                  </details>
                )}

                {(activeLesson.miniChallenge || activeLesson.practiceQuestions?.length > 0 || activeLesson.challenge) && (
                  <details className="extra-resource-item">
                    <summary>Challenge</summary>
                    <div className="extra-resource-body">
                      {activeLesson.miniChallenge && (
                        <div className="mini-challenge-card">
                          <p>{activeLesson.miniChallenge}</p>
                          <span className="mini-challenge-cta">Try karo editor mein.</span>
                        </div>
                      )}
                      {activeLesson.practiceQuestions?.length > 0 && (
                        <div className="assignment-card">
                          {activeLesson.practiceQuestions.map((question, i) => <p key={question}>✅ Q{i + 1}. {question}</p>)}
                        </div>
                      )}
                      {activeLesson.challenge && (
                        <div className="challenge-desc">
                          <strong>Challenge</strong>
                          <p>{activeLesson.challenge.instruction}</p>
                        </div>
                      )}
                    </div>
                  </details>
                )}

                {activeLesson.assignment && (
                  <details className="extra-resource-item">
                    <summary>Assignment</summary>
                    <div className="extra-resource-body">
                      <div className="assignment-card">
                        <h4>{activeLesson.assignment.title}</h4>
                        {activeLesson.assignment.tasks.map(task => <p key={task}>✅ {task}</p>)}
                      </div>
                    </div>
                  </details>
                )}

                {/* FAQs Section */}
                {activeLesson.faqs?.length > 0 && (
                  <details className="extra-resource-item">
                    <summary>Frequently Asked Questions (FAQ)</summary>
                    <div className="extra-resource-body">
                      <div className="lesson-faq-list">
                        {activeLesson.faqs.map((faq, fIdx) => (
                          <div key={fIdx} className="lesson-faq-item">
                            <strong className="faq-q">Q: {faq.q}</strong>
                            <p className="faq-a">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                )}

                {(activeLesson.summary?.length > 0 || activeLesson.revisionNotes?.length > 0 || activeLesson.aiSummary || activeLesson.aiNotes?.length > 0) && (
                  <details className="extra-resource-item">
                    <summary>Revision Summary</summary>
                    <div className="extra-resource-body">
                      <div className="summary-card">
                        {activeLesson.summary?.map((s, i) => (
                          <div key={i} className="summary-item">
                            <Check size={14} style={{ color: '#10b981', flexShrink: 0 }} />
                            <span>{s}</span>
                          </div>
                        ))}
                        {activeLesson.revisionNotes?.map(note => <span key={note}>{note}</span>)}
                        {activeLesson.aiSummary && <p>{activeLesson.aiSummary}</p>}
                        {activeLesson.aiNotes?.map(note => <span key={note}>{note}</span>)}
                        {activeLesson.summary?.[0] && (
                          <div className="recap-30s">
                            <Clock size={14} />
                            <strong>30-Second Recap:</strong>
                            <span>{activeLesson.summary[0]}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </details>
                )}

                {allFlashcards.length > 0 && (
                  <details className="extra-resource-item">
                    <summary>Flashcards</summary>
                    <div className="extra-resource-body">
                      <div className="flashcard-pack">
                        {allFlashcards.map(card => <Flashcard key={card.q} q={card.q} a={card.a} />)}
                      </div>
                    </div>
                  </details>
                )}

                {articleMode && !activeLesson.faqs?.length && (
                  <details className="extra-resource-item">
                    <summary>FAQ</summary>
                    <div className="extra-resource-body">
                      <div className="faq-list">
                        {[
                          [`What is ${activeLesson.title}?`, activeLesson.englishDef || activeLesson.summary?.[0]],
                          [`Is ${activeLesson.title} easy for beginners?`, 'Yes. Start with the definition, run the example, then solve the quiz and assignment.'],
                          [`Why should I learn ${activeLesson.title}?`, activeLesson.realWorldUseCases?.length ? `It is used in ${activeLesson.realWorldUseCases.slice(0, 3).join(', ')}.` : activeLesson.summary?.[1]],
                          [`How do I practice ${activeLesson.title}?`, activeLesson.assignment?.tasks?.[0] || activeLesson.miniChallenge]
                        ].filter(([, answer]) => Boolean(answer)).map(([question, answer]) => (
                          <details key={question}>
                            <summary>{question}</summary>
                            <p>{answer}</p>
                          </details>
                        ))}
                      </div>
                    </div>
                  </details>
                )}

                {activeLesson.aiDoubtSolver && (
                  <details className="extra-resource-item">
                    <summary>AI Doubt Solver</summary>
                    <div className="extra-resource-body">
                      <div className="ai-teacher-card">
                        <p><strong>Student:</strong> {activeLesson.aiDoubtSolver.student}</p>
                        <p><strong>AI Teacher:</strong> {activeLesson.aiDoubtSolver.ai}</p>
                      </div>
                    </div>
                  </details>
                )}
              </section>

              {/* 🎯 Golden Formula Highlight Box */}
              {(activeLesson.goldenFormula || activeLesson.foundationTree?.goldenFormula) && (
                <div className="dsa-golden-formula-card bottom-formula">
                  <span className="golden-sparkle">✨</span>
                  <div className="golden-formula-content">
                    <span className="golden-tag">The Golden Formula</span>
                    <strong className="golden-formula-text">{activeLesson.goldenFormula || activeLesson.foundationTree?.goldenFormula}</strong>
                  </div>
                  <span className="golden-sparkle">🎯</span>
                </div>
              )}

              {/* ── Complete / Next Bar ── */}
              <div className="lesson-complete-bar">
                <button
                  type="button"
                  onClick={() => {
                    handleMarkLessonComplete(activeLesson.id, 25, 'lesson')
                  }}
                  className={completedCurrentLesson ? 'lesson-action-btn primary done' : 'lesson-action-btn primary'}
                >
                  {completedCurrentLesson
                    ? <><Check size={18} /> Completed</>
                    : <><Check size={18} /> Mark Complete</>
                  }
                </button>
                <button
                  type="button"
                  onClick={() => setBookmarkedLessons(prev =>
                    prev.includes(activeLesson.id)
                      ? prev.filter(id => id !== activeLesson.id)
                      : [...prev, activeLesson.id]
                  )}
                  className={bookmarkedLessons.includes(activeLesson.id) ? 'lesson-action-btn secondary saved' : 'lesson-action-btn secondary'}
                >
                  <Bookmark
                    size={18}
                    fill={bookmarkedLessons.includes(activeLesson.id) ? 'currentColor' : undefined}
                  />
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (articleMode) {
                      setPlaygroundCode(activeLesson.code || activeLesson.challenge?.initialCode || '')
                      setPracticeModalOpen(true)
                    } else {
                      setMobileTab('editor')
                    }
                  }}
                  className="lesson-action-btn secondary"
                >
                  <Code2 size={18} /> Practice
                </button>
                <button
                  type="button"
                  className="lesson-action-btn primary"
                  onClick={() => nextLesson ? openLesson(nextLesson) : goToNextLesson()}
                  disabled={!nextLesson}
                >
                  Next Lesson <ChevronRight size={18} />
                </button>
              </div>

              {/* ── Discussion ── */}
              <div className="discussion-section" style={{ background: 'var(--bg-subtle)', borderRadius: 12, padding: 18, border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 800 }}>💬 Community Discussions</h3>
                  <span style={{ fontSize: 11, background: 'var(--green)20', color: 'var(--green)', padding: '2px 8px', borderRadius: 12, fontWeight: 700 }}>
                    Coming Soon
                  </span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                  Peer-to-peer lesson discussions and community Q&A will be available in the upcoming cloud release. Keep learning and practicing with interactive challenges! 🚀
                </p>
              </div>

              {activeLesson.nextLessonLabel && (
                <div className="lesson-step-block step-next">
                  <div className="step-number">→</div>
                  <div className="step-content">
                    <div className="step-label">Next Lesson</div>
                    <div className="next-lesson-card">
                      <div>
                        {previousLesson && <button className="ghost-btn compact" onClick={() => openLesson(previousLesson)}>← {previousLesson.title}</button>}
                      </div>
                      <strong>{nextLesson?.title || activeLesson.nextLessonLabel}</strong>
                      <button onClick={() => nextLesson ? openLesson(nextLesson) : goToNextLesson()} className="primary-btn compact">Continue <ChevronRight size={14} /></button>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* ── RIGHT ADSENSE & SPONSORED RAIL ── */}
            <aside className="lesson-ads-rail" aria-label="Sponsored placement">
              <AdSenseCard />
            </aside>
          </div>
        </div>

        {/* ── CODE EDITOR PANEL ── */}
        {!articleMode && (
          <div className={`editor-panel${mobileTab === 'editor' ? ' mobile-visible' : ''}`}>
            <div className="editor-topbar">
              <span className="editor-title"><Terminal size={14} /> Interactive Editor</span>
              <div className="editor-actions">
                <button onClick={handleChallengeSubmit} className="primary-btn compact"><Play size={12} /> Run</button>
                <button
                  onClick={() => {
                    setPlaygroundCode(activeLesson.challenge?.initialCode || activeLesson.code || '')
                    setChallengeMessage(null)
                    onShowToast?.('Code reset to starter template! 🔄', 'info')
                  }}
                  className="ghost-btn compact"
                  title="Reset to starter code"
                >
                  <RotateCcw size={12} /> Reset
                </button>
                <button
                  onClick={() => {
                    if (typeof navigator !== 'undefined' && navigator.clipboard) {
                      navigator.clipboard.writeText(playgroundCode)
                      onShowToast?.('Code copied to clipboard! 📋', 'success')
                    }
                  }}
                  className="ghost-btn compact"
                  title="Copy code"
                >
                  <Copy size={12} /> Copy
                </button>
              </div>
            </div>

            {/* Mobile Tab Switcher between Code Editor & Live Preview */}
            <div className="playground-mobile-tab-switch" role="tablist" aria-label="Editor view switch">
              <button
                type="button"
                role="tab"
                aria-selected={playgroundTab === 'code'}
                className={`playground-tab-btn ${playgroundTab === 'code' ? 'active' : ''}`}
                onClick={() => setPlaygroundTab('code')}
              >
                💻 Code Editor
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={playgroundTab === 'preview'}
                className={`playground-tab-btn ${playgroundTab === 'preview' ? 'active' : ''}`}
                onClick={() => setPlaygroundTab('preview')}
              >
                👁️ Live Output
              </button>
            </div>

            {activeLesson.challenge && (
              <div className="challenge-desc">
                <strong>🎯 Challenge</strong>
                <p>{activeLesson.challenge.instruction}</p>
                <div className="hint-row">
                  <button onClick={() => setHintLevel(Math.max(hintLevel, 1))} className="ghost-btn compact" style={{ fontSize: 12 }}>💡 Hint 1</button>
                  <button onClick={() => setHintLevel(Math.max(hintLevel, 2))} className="ghost-btn compact" style={{ fontSize: 12 }}>💡 Hint 2</button>
                </div>
                {hintLevel > 0 && (
                  <p className="hint-copy">
                    {hintLevel === 1 ? 'Sahi structure se shuru karo.' : 'Closing tags dhyan se likhna!'}
                  </p>
                )}
              </div>
            )}

            <div className={`ide-workspace tab-${playgroundTab}`}>
              <div className="editor-body">
                <div className={`textarea-shell ${editorTheme}`}>
                  <div className="line-numbers">
                    {playgroundCode.split('\n').map((_, i) => <span key={i}>{i + 1}</span>)}
                  </div>
                  <textarea
                    value={playgroundCode}
                    onChange={e => handleCodeChange(e.target.value)}
                    onKeyDown={handleEditorKeyDown}
                    spellCheck={false}
                    className="code-editor-textarea"
                    style={{ fontSize: editorFontSize }}
                  />
                </div>
              </div>

              <div className="output-pane">
                <div className="output-pane-label">
                  <span>Live Preview</span>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button onClick={() => setEditorTheme(t => t === 'dark' ? 'light' : 'dark')} className="ghost-btn compact" style={{ fontSize: 11 }}>
                      {editorTheme === 'dark' ? '☀️' : '🌙'}
                    </button>
                    <button onClick={() => setEditorFontSize(s => Math.max(11, s - 1))} className="ghost-btn compact" style={{ fontSize: 11 }}>A-</button>
                    <button onClick={() => setEditorFontSize(s => Math.min(20, s + 1))} className="ghost-btn compact" style={{ fontSize: 11 }}>A+</button>
                  </div>
                </div>
                <div className="output-pane-body">
                  {isHtmlContent ? (
                    <div className={`preview-device ${previewMode}`}>
                      <iframe srcDoc={playgroundOutput} title="preview" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals" />
                    </div>
                  ) : (
                    <pre style={{ fontSize: 12, fontFamily: 'monospace', color: '#cbd5e1', whiteSpace: 'pre-wrap', padding: 12 }}>
                      {playgroundOutput}
                    </pre>
                  )}
                </div>
              </div>
            </div>

            {/* Validation */}
            {selectedCourse.id === 'html' && (
              <div className="validation-panel" style={{ padding: '8px 12px', margin: '0 0 8px' }}>
                {htmlValidationErrors.length ? (
                  htmlValidationErrors.map(e => (
                    <span key={e} style={{ display: 'block', color: '#ef4444', fontSize: 12 }}>❌ {e}</span>
                  ))
                ) : (
                  <span style={{ color: '#10b981', fontSize: 12 }}>✅ HTML looks valid!</span>
                )}
              </div>
            )}

            <div className={`challenge-msg ${challengeMessage?.type || 'idle'}`}>
              {challengeMessage
                ? `${challengeMessage.type === 'success' ? '✓' : '✗'} ${challengeMessage.text}`
                : '💡 Code likho aur Run karo!'}
            </div>

            <div className="learning-rail">
              <div><strong>Progress</strong><span>{completedCurrentLesson ? 'Completed' : 'In progress'}</span></div>
              <div><strong>Quiz Score</strong><span>{quizChecked ? (quizSuccess ? '20 / 20' : '0 / 20') : 'Not attempted'}</span></div>
              <div><strong>XP</strong><span>Lesson +25 · Quiz +20 · Assignment +30</span></div>
              {activeLesson.flashcard && <div><strong>Flashcard</strong><span>{activeLesson.flashcard.q}</span></div>}
              {activeLesson.aiDoubtSolver && <div><strong>AI Chat</strong><span>{activeLesson.aiDoubtSolver.student}</span></div>}
            </div>

            {/* Snippet toolbar */}
            {selectedCourse.id === 'html' && (
              <div className="snippet-toolbar">
                {COMMON_HTML_TAGS.map(tag => (
                  <button key={tag} onClick={() => insertSnippet(tag)} className="ghost-btn compact" style={{ fontSize: 11 }}>
                    &lt;{tag}&gt;
                  </button>
                ))}
              </div>
            )}

            {/* Notes */}
            <div className="notes-card">
              <strong>📝 My Notes</strong>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Yahan apne notes likhte jao..."
              />
            </div>
          </div>
        )}

        {/* ── MOBILE TAB BAR ── */}
        {!articleMode && <div className="mobile-tab-bar" role="tablist" aria-label="Lesson View Mode">
          <button
            type="button"
            role="tab"
            aria-selected={mobileTab === 'content'}
            onClick={() => setMobileTab('content')}
            className={mobileTab === 'content' ? 'active' : ''}
          >
            📖 Read Lesson
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mobileTab === 'editor'}
            onClick={() => setMobileTab('editor')}
            className={mobileTab === 'editor' ? 'active' : ''}
          >
            💻 Practice
          </button>
        </div>}
      </div>

      {activeModalSection && (
        <div
          className="lesson-modal-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveLessonModal(null)
          }}
          role="presentation"
        >
          <section
            ref={lessonModalRef}
            className="lesson-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lesson-modal-title"
            tabIndex={-1}
          >
            <div className="lesson-modal-header">
              <div>
                <span>{activeModalSection.icon}</span>
                <h2 id="lesson-modal-title">{activeModalSection.title}</h2>
              </div>
              <button onClick={() => setActiveLessonModal(null)} className="modal-close-btn" aria-label="Close section">
                <X size={18} />
              </button>
            </div>
            <div className="lesson-modal-body">
              {renderSectionContent(activeModalSection.id)}
            </div>
          </section>
        </div>
      )}

      {practiceModalOpen && (
        <div
          className="lesson-modal-backdrop practice-backdrop"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setPracticeModalOpen(false)
          }}
          role="presentation"
        >
          <section
            ref={practiceModalRef}
            className="practice-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="practice-modal-title"
            tabIndex={-1}
          >
            <div className="lesson-modal-header">
              <div>
                <Code2 size={18} />
                <h2 id="practice-modal-title">Code Practice</h2>
              </div>
              <button onClick={() => setPracticeModalOpen(false)} className="modal-close-btn" aria-label="Close code practice">
                <X size={18} />
              </button>
            </div>

            <div className="practice-modal-toolbar">
              <button onClick={handleChallengeSubmit} className="primary-btn compact"><Play size={13} /> Run</button>
              <button
                onClick={() => {
                  setPlaygroundCode(activeLesson.challenge?.initialCode || activeLesson.code || '')
                  setChallengeMessage(null)
                }}
                className="ghost-btn compact"
              >
                <RotateCcw size={13} /> Reset
              </button>
              <button onClick={() => navigator.clipboard?.writeText(playgroundCode)} className="ghost-btn compact"><Copy size={13} /> Copy</button>
              <button onClick={() => setEditorTheme(t => t === 'dark' ? 'light' : 'dark')} className="ghost-btn compact">
                {editorTheme === 'dark' ? 'Light Theme' : 'Dark Theme'}
              </button>
            </div>

            <div className="practice-modal-workspace">
              <div className={`textarea-shell ${editorTheme}`}>
                <div className="line-numbers">
                  {playgroundCode.split('\n').map((_, i) => <span key={i}>{i + 1}</span>)}
                </div>
                <textarea
                  value={playgroundCode}
                  onChange={e => handleCodeChange(e.target.value)}
                  onKeyDown={handleEditorKeyDown}
                  spellCheck={false}
                  className="code-editor-textarea"
                  aria-label="Code editor"
                  style={{ fontSize: editorFontSize }}
                />
              </div>

              <div className="practice-output-grid">
                <div className="practice-output-panel">
                  <strong>Console Output</strong>
                  <pre>{isHtmlContent ? '✓ Frontend live preview compiled successfully.' : playgroundOutput}</pre>
                </div>
                {isHtmlContent && (
                  <div className="practice-output-panel live">
                    <strong>Live Output</strong>
                    <iframe srcDoc={playgroundOutput} title="practice-live-output" sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals" />
                  </div>
                )}
              </div>
            </div>

            <div className={`challenge-msg ${challengeMessage?.type || 'idle'}`}>
              {challengeMessage
                ? `${challengeMessage.type === 'success' ? '✓' : '✗'} ${challengeMessage.text}`
                : 'Run updates the console. Reset restores the lesson starter code.'}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
