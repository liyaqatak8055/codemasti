export const reactCourse = {
  id: 'react',
  title: 'React',
  description: 'Master Modern React 19 from scratch to production! React Fundamentals, JSX, ReactDOM, Components (Functional, Class, Pure, Presentational), Props & PropTypes, Component Lifecycle, Hooks (useState, useEffect, useContext, useRef, useMemo, useCallback, Custom Hooks), React Router & Router Types, Advanced Concepts (Lazy Loading, Suspense, HOCs, Code Splitting, Error Boundaries) aur 6 Awesome Real-World Projects!',
  icon: '⚛️',
  category: 'frontend',
  certificateName: 'REACT',
  topicsCount: 33,
  practiceCount: 40,
  projectsCount: 6,
  hoursEstimate: 30,
  level: 'Beginner to Advanced',
  chapters: [
    // ═══════════════════════════════════════════════════════
    // CHAPTER 1: REACT FUNDAMENTALS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'React Fundamentals',
      lessons: [
        {
          id: 'react-intro',
          title: 'React Introduction',
          emoji: '⚛️',
          xpReward: 30,
          badgeName: 'React Pioneer',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "React web development ki duniya ka superhero hai! Meta ne ise banaya aur aaj duniya ki 70% top web apps React par chalti hain! Lego blocks ki tarah components judte jao! 🧱"',
            hint: '💡 Masti Sir: "React ek library hai jo Declarative UI aur Component-Based architecture par chalti hai!"',
            success: '🎉 Masti Sir: "React fundamentals crystal clear!"',
            mistake: '😅 Masti Sir: "React full framework nahi balki UI library hai — routing aur state management hum zaroorat ke hisab se plug karte hain!"'
          },
          englishDef: 'React is an open-source JavaScript library developed by Meta for building fast, declarative, and component-driven user interfaces for single-page and fullstack web applications.',
          hinglishExplain: 'React se hum websites ko chhote-chhote reusable pieces (Components) mein divide kar dete hain — jaise Navbar, Card, Button. Ek baar component banaya aur use hazaron jagah reuse kar sakte hain. React ka Virtual DOM page ko bina reload kiye sirf badle huye hisse ko update karta hai.',
          storyExplain: 'Lego Toy Castle: Pure castle ko ek bada pathar banane ke bajaye chhote-chhote Lego blocks jode jate hain. Agar ek khidki badalni ho toh poora mahal todne ki zaroorat nahi — sirf wo khidki badal do!',
          funnyExample: {
            scenario: 'Without React: 50 products ke liye 50 baar HTML copy-paste karo 😩\nWith React: 1 baar <ProductCard /> banao aur array.map() chalao! 🎉',
            punchline: 'Build once, reuse anywhere!'
          },
          memoryTrick: '3 Core Superpowers of React:\n1. Declarative (You tell React WHAT UI should look like based on state)\n2. Component-Based (Modular Lego blocks)\n3. Learn Once, Write Anywhere (Web, Mobile via React Native, Desktop)',
          visualDiagram: {
            title: 'React Architecture Tree',
            nodes: ['App (Root Component)', 'Header Component (Logo, Search, Nav)', 'Main Content (CourseList -> CourseCards)', 'Sidebar Component (Filters)', 'Footer Component'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Why React is Lightning Fast:',
            steps: ['You update component state', 'React creates Virtual DOM tree representation in memory', 'Diffing algorithm calculates minimal patch', 'Batch updates applied to real browser DOM at 60 FPS']
          },
          code: `import React from 'react';

// 1. Simple React Functional Component
function WelcomeBanner({ learnerName, courseName }) {
  return (
    <header className="banner">
      <h1>Namaste, {learnerName}! 🚀</h1>
      <p>Welcome to <strong>{courseName}</strong> on CodeMasti.</p>
    </header>
  );
}

// 2. Composing in Root App
export default function App() {
  return (
    <div className="container">
      <WelcomeBanner learnerName="Vikram" courseName="React 19 Mastery" />
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'function WelcomeBanner({ learnerName, courseName })', label: 'Functional component accepting destructured props', color: '#3b82f6' },
            { part: '{learnerName}', label: 'Embedding dynamic JavaScript expression inside JSX', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Lowercase component names (`function myCard()` is treated as HTML tag; must be capitalized `MyCard`)',
            '❌ Direct DOM mutation with `document.getElementById` inside React'
          ],
          proTips: [
            '💡 Always capitalize custom component names so JSX treats them as React components',
            '💡 Keep components pure and predictable: same props -> same JSX output'
          ],
          interviewQuestions: [
            'What is React and why is it classified as a library rather than a full framework?',
            'What are the advantages of React\'s component-based architecture?'
          ],
          miniChallenge: 'Create a `HeroSection` component with a title, subtitle, and an enrolled boolean badge.',
          quiz: {
            type: 'mcq',
            question: 'React component ka naam kis letter se shuru hona mandatory hai?',
            options: ['Lowercase ($card)', 'Capital / Uppercase letter (e.g. Card)', 'Underscore (_card)', 'Number (1Card)'],
            answer: 'Capital / Uppercase letter (e.g. Card)',
            explanation: 'React differentiates built-in HTML tags (div, p) from custom components by requiring component names to start with a Capital letter.'
          },
          summary: ['React is a declarative UI library by Meta', 'Component-based architecture allows massive reusability', 'Virtual DOM minimizes costly browser reflows'],
          flashcard: { q: 'React ko Library kyu kaha jata hai Framework kyu nahi?', a: 'Kyunki React sirf View layer (UI) handle karta hai; Routing aur State management developer apni pasand se choose karta hai.' },
          funFact: '🎉 Fun Fact: Jordan Walke ne Meta (Facebook) mein 2011 mein pehli baar React banaya tha jiska pehla naam "FaxJS" tha!',
          challenge: {
            instruction: 'Create a UserBadge component that returns an <h2> with the user name.',
            initialCode: `function UserBadge({ name }) {
  return <h2>{name}</h2>;
}
console.log(UserBadge({ name: "Aman" }));`,
            validator: (code) => code.includes('UserBadge') && code.includes('{name}')
          }
        },
        {
          id: 'react-env-setup',
          title: 'React Environment Setup (Vite, npm, project structure)',
          emoji: '🛠️',
          xpReward: 30,
          badgeName: 'Dev Setup Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Purana Create-React-App slow ho chuka hai, aaj modern industry standard **Vite** hai! 1 second ke andar server start aur instant Hot Module Replacement! ⚡"',
            hint: '💡 Masti Sir: "`npm create vite@latest my-react-app -- --template react` command se sub-second mein project ready ho jata hai!"',
            success: '🎉 Masti Sir: "Modern Vite development environment ready!"',
            mistake: '😅 Masti Sir: "`node_modules` ko GitHub par push mat karna — `.gitignore` mein daalna zaroori hai! 😂"'
          },
          englishDef: 'Setting up a modern React development environment involves Node.js, npm/pnpm package managers, and Vite as the high-performance build tool with Hot Module Replacement (HMR).',
          hinglishExplain: 'React app develop karne ke liye hum Vite build tool use karte hain jo Rollup aur esbuild par chalta hai. Terminal mein `npm create vite@latest` run karne par `src/`, `public/`, `package.json`, aur `vite.config.js` ka standard folder structure milta hai.',
          storyExplain: 'Chef\'s Modern Kitchen: Purana stove jalne mein 5 minute lagata tha (CRA). Naya induction cooker switch dabate hi 1 second mein garam ho jata hai (Vite)!',
          funnyExample: {
            scenario: 'Developer starting CRA: "Chai peeke aata hoon tab tak compile hoga... ☕"\nDeveloper starting Vite: "Enter dabaya aur browser live ho gaya! ⚡"',
            punchline: 'Vite delivers instant sub-second hot module reload!'
          },
          memoryTrick: 'Vite Setup Command Cheat:\n- `npm create vite@latest app-name -- --template react`\n- `cd app-name`\n- `npm install`\n- `npm run dev`',
          visualDiagram: {
            title: 'Modern React Project Anatomy',
            nodes: ['my-app root', '  -> index.html (SPA Entry)', '  -> src/main.jsx (createRoot mount)', '  -> src/App.jsx (Root UI)', '  -> package.json (Dependencies)', '  -> vite.config.js'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Why Vite is 100x Faster than Webpack:',
            steps: ['Uses native browser ES Modules (ESM) during development', 'Pre-bundles dependencies with esbuild (written in Go, 10-100x faster)', 'Only recompiles the exact file that changed on save']
          },
          code: `// src/main.jsx - The Entry Point of Modern React 19 App
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Mounting React into index.html <div id="root"></div>
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
          codeBreakdown: [
            { part: 'ReactDOM.createRoot(rootElement)', label: 'Initializes concurrent rendering root in modern React', color: '#3b82f6' },
            { part: '<React.StrictMode>', label: 'Development helper that highlights potential side-effect issues and deprecated APIs', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Editing HTML directly instead of creating React components inside `src/`',
            '❌ Forgetting to run `npm install` after cloning a project repository'
          ],
          proTips: [
            '💡 Use `.jsx` file extension in Vite for any file that contains JSX syntax',
            '💡 Install React Developer Tools browser extension for visual component and props inspection'
          ],
          interviewQuestions: [
            'Why has Vite replaced Create React App (CRA) as the modern recommendation?',
            'What is the purpose of `<React.StrictMode>` in React applications?'
          ],
          miniChallenge: 'Explain what `package.json` vs `package-lock.json` does in a React project.',
          quiz: {
            type: 'mcq',
            question: 'Vite development server itna fast kyu hota hai?',
            options: ['Wo saare files ko ek sath compile karta hai', 'Wo native Browser ES Modules aur esbuild use karta hai', 'Wo JavaScript ko C++ mein convert karta hai', 'Wo HTML nahi use karta'],
            answer: 'Wo native Browser ES Modules aur esbuild use karta hai',
            explanation: 'Vite serves source code over native ESM, allowing the browser to take over bundling during development.'
          },
          summary: ['Vite is the recommended modern build tool', 'main.jsx mounts App into #root via createRoot', 'StrictMode helps catch accidental bugs in development'],
          flashcard: { q: 'React 18+ mein root render karne ke liye kaunsa method use hota hai?', a: '`ReactDOM.createRoot(rootElement).render(<App />)`' },
          funFact: '🎉 Fun Fact: "Vite" ek French shabd hai jiska matlab hota hai "Fast / Quick" (pronounce: "Veet")!',
          challenge: {
            instruction: 'Verify createRoot syntax in React.',
            initialCode: `// createRoot mounting example:
const root = { render: (component) => "Rendered: " + component };
console.log(root.render("<App />"));`,
            validator: (code) => code.includes('render') && code.includes('root')
          }
        },
        {
          id: 'react-reactdom',
          title: 'React JS ReactDOM (createRoot, Virtual DOM vs Real DOM)',
          emoji: '🌐',
          xpReward: 35,
          badgeName: 'DOM Maestro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Browser ka Real DOM bohot heavy aur slow hota hai! React Virtual DOM ke zariye pehle memory mein calculation karta hai aur sirf zaroori changes Real DOM mein patch karta hai! 🚀"',
            hint: '💡 Masti Sir: "Diffing algorithm O(n) linear time mein pata laga leta hai ki konsa element badla hai!"',
            success: '🎉 Masti Sir: "Virtual DOM and Reconciliation mastered!"',
            mistake: '😅 Masti Sir: "Direct DOM manipulate karne ke bajaye hamesha React State update karo — React reconciliation ko apna kaam karne do!"'
          },
          englishDef: 'ReactDOM provides DOM-specific methods that connect React to the browser. React maintains an in-memory Virtual DOM tree, using a Reconciliation diffing algorithm to perform minimal, batch updates on the actual Real DOM.',
          hinglishExplain: 'Real DOM par direct changes karna bohot slow hota hai kyunki browser ko poora page repaint/reflow karna padta hai. React ek lightweight copy memory mein rakhta hai jise Virtual DOM kehte hain. Jab state change hoti hai, React dono Virtual DOMs ko compare (Diffing) karta hai aur sirf wahi chhota sa hissa Real DOM mein update karta hai.',
          storyExplain: 'Architect Blueprint vs Construction Site: Agar flat mein ek deewar ka color change karna hai toh pehle architect naksha (Virtual DOM) par color badal kar dekhta hai, aur fir seedhe usi deewar par painter ko bhejta hai (Batch DOM patch), poori building nahi todi jati!',
          funnyExample: {
            scenario: 'Real DOM: "Ek number badla? Ruko poora page dobara paint karta hoon! 🥵"\nVirtual DOM: "Relax! Maine calculate kar liya, sirf wo ek <span> update hoga! 😎"',
            punchline: 'Virtual DOM keeps your UI rendering at silky-smooth 60 FPS!'
          },
          memoryTrick: 'Virtual DOM Reconciliation Steps:\n1. State / Props change triggers re-render\n2. New Virtual DOM tree generated in memory\n3. Diffing: Compares New VDOM vs Old VDOM\n4. Patch: Only the difference (delta) updated in Real DOM',
          visualDiagram: {
            title: 'Reconciliation Flow',
            nodes: ['State Update (count: 5 -> 6)', 'New VDOM Tree Built in Memory', 'Diffing Algorithm finds: <p>6</p>', 'Batch Patch to Real DOM <div id="root">'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Fiber Reconciliation Engine:',
            steps: ['React uses the Fiber architecture (work units)', 'Can pause, prioritize, or abort rendering work if high-priority user input arrives', 'Ensures high responsiveness even during large data updates']
          },
          code: `import React, { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  // When count changes, ReactDOM only updates the <h2> text node in the Real DOM!
  return (
    <div className={\`card \${theme}\`}>
      <h2>Live Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment (+1)</button>
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'const [count, setCount] = useState(0)', label: 'State hook: changes trigger Virtual DOM reconciliation', color: '#3b82f6' },
            { part: '<h2>Live Count: {count}</h2>', label: 'Only this text node is mutated in the actual browser DOM', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Bypassing React to mutate DOM nodes directly with `document.querySelector().innerHTML`',
            '❌ Assuming Virtual DOM makes React faster than raw handwritten optimal C++ assembly (it makes developers productive while maintaining high performance)'
          ],
          proTips: [
            '💡 Use React Developer Tools Profiler tab to visually inspect which components are re-rendering',
            '💡 Keep state as local as possible to minimize Virtual DOM subtree diffing depth'
          ],
          interviewQuestions: [
            'What is the Virtual DOM and how does React\'s Diffing algorithm work?',
            'What is the difference between Real DOM, Shadow DOM, and Virtual DOM?'
          ],
          miniChallenge: 'Explain why React uses Synthetic Events instead of direct native browser DOM events.',
          quiz: {
            type: 'mcq',
            question: 'Virtual DOM ka primary purpose kya hai?',
            options: ['HTML files ko hard disk par save karna', 'Real DOM updates ko calculate aur batch karke performance optimize karna', 'CSS styles ko compress karna', 'Database queries fast karna'],
            answer: 'Real DOM updates ko calculate aur batch karke performance optimize karna',
            explanation: 'The Virtual DOM allows React to compute minimal UI diffs in memory before committing optimal batch mutations to the browser\'s Real DOM.'
          },
          summary: ['ReactDOM connects React to the browser', 'Virtual DOM calculates changes in memory', 'Diffing algorithm patches minimal nodes in Real DOM'],
          flashcard: { q: 'Reconciliation kya hota hai?', a: 'Old Virtual DOM aur New Virtual DOM ko compare karke Real DOM mein minimal updates apply karne ka process.' },
          funFact: '🎉 Fun Fact: React 16 mein complete rewrite hua tha jiska code name "Fiber" tha, jisse React rendering ko pause aur resume kar sakta hai!',
          challenge: {
            instruction: 'Write a simple functional component that renders a title and a button that increments a state counter.',
            initialCode: `function LiveCounter() {
  const [val, setVal] = React.useState(0);
  return <button onClick={() => setVal(val + 1)}>Count: {val}</button>;
}`,
            validator: (code) => code.includes('useState') && code.includes('onClick')
          }
        },
        {
          id: 'react-jsx',
          title: 'React JSX (Syntax, Expressions, Rules & Fragments)',
          emoji: '📝',
          xpReward: 35,
          badgeName: 'JSX Ninja',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "JSX JavaScript aur XML ka zabardast combination hai! HTML jaisa dikhta hai par andar JavaScript ki poori power hai! Curly braces `{}` iska magic door hain! ✨"',
            hint: '💡 Masti Sir: "Multiple elements return karne ke liye `<React.Fragment>` ya shorthand `<> ... </>` use karo!"',
            success: '🎉 Masti Sir: "JSX syntax rules and expressions mastered!"',
            mistake: '😅 Masti Sir: "JSX mein `style="color: red"` nahi chalta — `style={{ color: \'red\' }}` double curly braces (JS Object) lagana padta hai! 😂"'
          },
          englishDef: 'JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like markup inside JavaScript files, which compilers (Babel, SWC) transform into `React.createElement()` calls.',
          hinglishExplain: 'JSX HTML ki tarah dikhta hai par ye asal mein JavaScript hai. JSX ke andar `{}` lagakar hum koi bhi variable, calculation, ya function call likh sakte hain. JSX mein `class` ki jagah `className` aur `for` ki jagah `htmlFor` use hota hai.',
          storyExplain: 'Magic Glass Window: JSX ek aisi window hai jisme HTML jaisa structure dikhta hai, par jaise hi aap `{ curly braces }` lagate ho, andar ki JavaScript live calculate ho kar render hoti hai.',
          funnyExample: {
            scenario: 'const user = { name: "Kabir", score: 98 };\nreturn <h1>{user.name} scored {user.score * 2} in Bonus Round! 🚀</h1>;',
            punchline: 'Any valid JS expression executes seamlessly inside JSX {}!'
          },
          memoryTrick: '5 Core JSX Rules:\n1. Single Root Element (Use `<> ... </>` Fragments)\n2. `className` instead of `class`\n3. `htmlFor` instead of `for`\n4. Inline styles are Objects: `style={{ fontSize: "16px" }}`\n5. All tags must close: `<img src="..." />`, `<br />`',
          visualDiagram: {
            title: 'JSX Compilation Pipeline',
            nodes: ['JSX Syntax: <h1 className="title">Namaste</h1>', 'Babel / SWC Compiler Transpilation', 'JS Code: React.createElement("h1", { className: "title" }, "Namaste")', 'V8 Object Execution -> Virtual DOM'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How JSX Compiles in React 19:',
            steps: ['JSX transform automatically imports jsx-runtime', 'Converts elements into optimized internal JSX object nodes', 'No manual import React from "react" required for pure JSX']
          },
          code: `import React from 'react';

export default function UserCard() {
  const user = {
    name: 'Ananya Sharma',
    role: 'Senior Frontend Engineer',
    skills: ['React', 'TypeScript', 'Next.js'],
    isAvailableForHire: true
  };

  const dynamicStyles = {
    backgroundColor: '#0f172a',
    color: '#38bdf8',
    padding: '16px',
    borderRadius: '12px'
  };

  return (
    // React Fragment Shorthand (<> ... </>)
    <>
      <div className="profile-card" style={dynamicStyles}>
        <h2>{user.name.toUpperCase()}</h2>
        <p className="role-text">{user.role}</p>

        {/* Conditional Rendering in JSX */}
        {user.isAvailableForHire ? (
          <span className="badge available">🟢 Available for Projects</span>
        ) : (
          <span className="badge busy">🔴 Currently Busy</span>
        )}

        {/* Evaluating Math inside JSX */}
        <p>Total Skills: {user.skills.length} ({user.skills.join(', ')})</p>
      </div>
    </>
  );
}`,
          codeBreakdown: [
            { part: '<> ... </>', label: 'React Fragment: groups children without adding extra DOM nodes', color: '#3b82f6' },
            { part: 'style={dynamicStyles}', label: 'Passing JavaScript object for inline CSS styling with camelCase properties', color: '#10b981' },
            { part: '{user.isAvailableForHire ? ... : ...}', label: 'Ternary expression for dynamic conditional JSX rendering', color: '#f59e0b' }
          ],
          commonMistakes: [
            '❌ Trying to use `if-else` statement inside `{}` (use Ternary `? :` or `&&` instead; statements are not expressions)',
            '❌ Forgetting self-closing slashes on tags like `<input>` or `<img>`'
          ],
          proTips: [
            '💡 Use `<React.Fragment key={item.id}>` when mapping lists that require a key on the wrapper',
            '💡 Keep complex JSX readable by extracting smaller sub-components'
          ],
          interviewQuestions: [
            'What does JSX compile into behind the scenes?',
            'Why can you not use an `if-else` statement directly inside JSX curly braces?'
          ],
          miniChallenge: 'Create a JSX snippet rendering a product card with discounted price calculation inside {}.',
          quiz: {
            type: 'mcq',
            question: 'JSX mein inline CSS style specify karne ke liye kya syntax use hota hai?',
            options: ['style="color: red; font-size: 14px;"', 'style={{ color: "red", fontSize: "14px" }}', 'css={color: red}', 'class="red-text"'],
            answer: 'style={{ color: "red", fontSize: "14px" }}',
            explanation: 'Inline styles in JSX require a JavaScript object with camelCase properties wrapped in double curly braces.'
          },
          summary: ['JSX combines HTML structure with JavaScript expressions', 'Fragments group elements without extra DOM wrapper nodes', 'Compiles into React.createElement calls'],
          flashcard: { q: 'React Fragment ka kya fayda hota hai?', a: 'DOM mein faltu wrapper `<div>` add kiye bina multiple JSX elements ko group karta hai.' },
          funFact: '🎉 Fun Fact: JSX ko sabse pehle 2013 mein React launch ke waqt introduce kiya gaya tha — shuru mein logon ne ise ajeeb mana, par aaj poori industry ka favorite standard hai!',
          challenge: {
            instruction: 'Render a Fragment containing an h1 with className "main-title" and a p with dynamic text.',
            initialCode: `function TitleBox({ title }) {
  return (
    <>
      <h1 className="main-title">{title}</h1>
      <p>Loaded via JSX</p>
    </>
  );
}`,
            validator: (code) => code.includes('className="main-title"') && code.includes('<>')
          }
        },
        {
          id: 'react-rendering-elements',
          title: 'ReactJS Rendering Elements (Initial render & re-render triggers)',
          emoji: '🔄',
          xpReward: 30,
          badgeName: 'Render Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "React element immutable hota hai — ek frame ki tarah! UI ko update karne ke liye naya state set hota hai aur React component ko re-render karta hai! 🎬"',
            hint: '💡 Masti Sir: "Component 3 situations mein re-render hota hai: State change hone par, Props change hone par, ya Parent component re-render hone par!"',
            success: '🎉 Masti Sir: "Rendering mechanics crystal clear!"',
            mistake: '😅 Masti Sir: "Render phase mein direct side effects (API calls, DOM edits) mat karo — uske liye `useEffect` hai!"'
          },
          englishDef: 'React Elements are plain, immutable objects describing what you want to see on the screen. Rendering is the process where React calls components to retrieve their element trees and commits updates to the DOM.',
          hinglishExplain: 'React Element ek snapshot ya frame ki tarah hota hai. Jaise hi state ya props badalte hain, React component ko dobara call karta hai (Re-render) aur naya JSX tree banata hai. Is pure render process ke doran UI calculate hoti hai aur commit phase mein screen update hoti hai.',
          storyExplain: 'Movie Film Roll: Har second 24 frames pass hote hain. Har frame ek immutable React Element hai. Jaise hi actor move karta hai (State update), naya frame generate hota hai aur film aage badhti hai.',
          funnyExample: {
            scenario: 'const element = <h1>Hello World</h1>;\n// You cannot do element.props.children = "Hi"; (Immutable!)\n// You trigger a state change to render a fresh new element! 🎉',
            punchline: 'React elements are immutable UI descriptions!'
          },
          memoryTrick: '3 Re-render Triggers:\n1. State Change (`setCount(c => c + 1)`)\n2. Props Change (Parent passes new data)\n3. Context Change (Subscribed Context value updates)\n- Parent re-renders -> All Children re-render by default (unless memoized)',
          visualDiagram: {
            title: 'Render & Commit Cycle',
            nodes: ['Trigger (State / Prop update)', 'Render Phase (Component called, JSX evaluated in memory)', 'Reconciliation (VDOM diff calculated)', 'Commit Phase (Real DOM updated & UI painted)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Render vs Commit Phase:',
            steps: ['Render Phase is pure with no side effects; React can pause or abort it', 'Commit Phase is synchronous where React mutates the DOM tree', 'Layout effects and useEffect hooks execute after commit']
          },
          code: `import React, { useState } from 'react';

// Child Component receiving props
function ClockDisplay({ timeString }) {
  console.log("⏰ ClockDisplay rendered at:", timeString);
  return <div className="clock-badge">Current Time: {timeString}</div>;
}

export default function LiveDashboard() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="dashboard">
      <h1>Dynamic Rendering Demo</h1>
      <ClockDisplay timeString={time} />

      <button onClick={() => setTime(new Date().toLocaleTimeString())}>
        Refresh Time (Trigger Re-render)
      </button>

      <button onClick={() => setActiveTab(activeTab === 'home' ? 'profile' : 'home')}>
        Switch Tab: {activeTab}
      </button>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'setTime(new Date().toLocaleTimeString())', label: 'State updater queues a re-render cycle with fresh timestamp data', color: '#3b82f6' },
            { part: '<ClockDisplay timeString={time} />', label: 'Child re-renders with fresh prop value during parent render phase', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Calling state setters directly inside the component body causing infinite re-render loops (`setCount(1)` in top level)',
            '❌ Modifying state directly without setter (`count++` does not trigger re-render)'
          ],
          proTips: [
            '💡 Always treat the render function as a pure calculation: given the same state & props, return the same JSX without side effects',
            '💡 Use `React.memo` on expensive children to skip re-renders if props have not changed'
          ],
          interviewQuestions: [
            'What causes a React component to re-render?',
            'What is the difference between the Render Phase and Commit Phase in React?'
          ],
          miniChallenge: 'Create a component that tracks and displays how many times it has re-rendered.',
          quiz: {
            type: 'mcq',
            question: 'React component kab re-render hota hai?',
            options: ['Sirf page refresh hone par', 'State change, Props change, ya Parent re-render hone par', 'Sirf CSS badalne par', 'Har 1 second mein automatically'],
            answer: 'State change, Props change, ya Parent re-render hone par',
            explanation: 'Components re-render when their local state updates, when incoming props change, or when their parent component re-renders.'
          },
          summary: ['React elements are immutable snapshots', 'Render phase calculates VDOM diffs', 'Commit phase applies changes to browser DOM'],
          flashcard: { q: 'React mein Component re-render hone ke 3 main reasons kya hain?', a: '1. Local State change hona, 2. Props change hona, 3. Parent Component ka re-render hona.' },
          funFact: '🎉 Fun Fact: React 18+ automatic batching support karta hai — matlab agar aap ek event mein 3 state setters call karoge toh React 3 baar re-render karne ke bajaye sirf 1 single batch re-render karega!',
          challenge: {
            instruction: 'Create a simple component with state toggling between "ON" and "OFF".',
            initialCode: `function ToggleBtn() {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}`,
            validator: (code) => code.includes('useState') && code.includes('setIsOn(!isOn)')
          }
        },
        {
          id: 'react-lists',
          title: 'React Lists (Rendering arrays with .map() & Conditional Filtering)',
          emoji: '📋',
          xpReward: 35,
          badgeName: 'List Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Arrays of data ko visual UI mein badalna React ka roz ka kaam hai! JavaScript ka `array.map()` React JSX ka sabse best friend hai! 📋"',
            hint: '💡 Masti Sir: "`map()` se har item ke badle ek JSX element return karo, aur har item ko unique `key` prop zaroor do!"',
            success: '🎉 Masti Sir: "Dynamic list rendering mastered!"',
            mistake: '😅 Masti Sir: "`forEach()` mat lagana JSX mein — `forEach` kuch return nahi karta! Hamesha `map()` use karo!"'
          },
          englishDef: 'Rendering lists in React transforms arrays of JavaScript objects into collections of JSX elements using the `.map()` array method, often combined with `.filter()` for search and categories.',
          hinglishExplain: 'React mein jab hamare paas data ka array hota hai (jaise products ya students ki list), toh hum `.map()` method use karke har item ko ek component ya JSX card mein convert karte hain.',
          storyExplain: 'Photo Album: Aapke phone mein 100 photos ka data hai. Album app `.map()` chala kar har photo ko ek sundar frame (JSX card) mein fit karke grid mein saja deta hai.',
          funnyExample: {
            scenario: 'const users = ["Aman", "Rohan", "Priya"];\nreturn (\n  <ul>\n    {users.map(u => <li key={u}>{u} 🚀</li>)}\n  </ul>\n);',
            punchline: 'Turn any array into a live UI list in 3 lines!'
          },
          memoryTrick: 'List Rendering Checklist:\n- Use `.map()` (Returns new array of JSX)\n- Provide unique `key={item.id}`\n- Filter before map: `items.filter(...).map(...)`\n- Empty state fallback: `items.length === 0 ? <Empty /> : ...`',
          visualDiagram: {
            title: 'Array to JSX Transformation',
            nodes: ['Data: [{id: 1, title: "HTML"}, {id: 2, title: "React"}]', '.map(item => <CourseCard key={item.id} ... />)', 'Virtual DOM: [<CourseCard 1 />, <CourseCard 2 />]', 'Rendered Live UI Grid'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How React Reconciles Lists:',
            steps: ['React uses keys to identify which list items were added, removed, or reordered', 'Preserves local state of unchanged items during sorting and filtering', 'Prevents re-creating the entire DOM list from scratch']
          },
          code: `import React, { useState } from 'react';

export default function CourseListExplorer() {
  const [search, setSearch] = useState('');
  
  const courses = [
    { id: 'c1', title: 'React 19 Mastery', category: 'Frontend', lessons: 33, badge: '🔥 Hot' },
    { id: 'c2', title: 'Tailwind CSS Pro', category: 'Frontend', lessons: 25, badge: '⭐ Popular' },
    { id: 'c3', title: 'Node.js & Express', category: 'Backend', lessons: 30, badge: '⚡ New' },
    { id: 'c4', title: 'PostgreSQL Database', category: 'Database', lessons: 28, badge: '🛠️ Essential' }
  ];

  // Filtering list dynamically based on search query
  const filteredCourses = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="course-explorer">
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <span className="badge">{course.badge}</span>
              <h3>{course.title}</h3>
              <p>Category: {course.category} • {course.lessons} Lessons</p>
            </div>
          ))
        ) : (
          <p className="empty-message">No courses found matching "{search}" 🔍</p>
        )}
      </div>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'courses.filter(...).map(...)', label: 'Declarative chaining to filter data and transform into JSX elements', color: '#3b82f6' },
            { part: 'key={course.id}', label: 'Unique stable identifier used by React\'s reconciliation engine', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Forgetting the `return` statement inside `.map(item => { ... })` if using curly braces',
            '❌ Using array index `key={index}` when list items can be filtered, sorted, or deleted'
          ],
          proTips: [
            '💡 Always use a stable unique ID from your database (`item.id`) as the key',
            '💡 Handle empty list states gracefully with a friendly fallback UI'
          ],
          interviewQuestions: [
            'Why is `.map()` preferred over `forEach()` or `for` loops for rendering lists in JSX?',
            'What happens if you render a list without the `key` prop in React?'
          ],
          miniChallenge: 'Render a list of tasks with a completed checkbox and apply strikethrough styling to completed tasks.',
          quiz: {
            type: 'mcq',
            question: 'JSX ke andar array of data ko render karne ke liye kaunsa method use hota hai?',
            options: ['array.forEach()', 'array.map()', 'array.push()', 'array.join()'],
            answer: 'array.map()',
            explanation: '`array.map()` returns a new array of transformed JSX elements, whereas `forEach` returns undefined.'
          },
          summary: ['map() transforms data items into JSX', 'filter() handles dynamic client search', 'Always assign a unique stable key prop'],
          flashcard: { q: 'List render karte waqt `key` prop kyu zaroori hota hai?', a: 'React reconciliation engine ko list items ke additions, deletions, aur reordering ko efficiently track karne ke liye.' },
          funFact: '🎉 Fun Fact: Agar aap React mein list render karte waqt `key` nahi doge toh React console mein warning throw karega aur default mein index use karega!',
          challenge: {
            instruction: 'Map an array of names to an unordered list of <li> elements with key.',
            initialCode: `const names = ["Aarav", "Priya", "Sameer"];
const listItems = names.map(name => <li key={name}>{name}</li>);
console.log(listItems.length);`,
            validator: (code) => code.includes('.map') && code.includes('key=')
          }
        },
        {
          id: 'react-forms',
          title: 'React Forms (Controlled vs Uncontrolled, Inputs & Validation)',
          emoji: '📝',
          xpReward: 35,
          badgeName: 'Form Wizard',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Forms user data collect karne ka main tool hain! React mein 99% time hum **Controlled Components** use karte hain jahan State is the Single Source of Truth! 📝"',
            hint: '💡 Masti Sir: "Form submit par page reload hone se rokne ke liye `e.preventDefault()` pehli line mein lagao!"',
            success: '🎉 Masti Sir: "Controlled Forms and Validation mastered!"',
            mistake: '😅 Masti Sir: "Input mein `value` dekar `onChange` na dena input ko Read-Only bana deta hai! Dono sath mein do!"'
          },
          englishDef: 'In React, Controlled Components store form input values directly in component state via `value` and `onChange`. Uncontrolled Components maintain their own internal DOM state accessed via `useRef`.',
          hinglishExplain: 'Controlled Form mein input field ki value React ke `state` se judi hoti hai. Jab user type karta hai, `onChange` event state update karta hai aur input wahi value display karta hai. Isse validation, formatting, aur live preview bohot aasan ho jata hai.',
          storyExplain: 'TV Remote Volume: Controlled Component TV remote jaisa hai — screen ka volume aur remote ka number hamesha match rehte hain (Single source of truth).',
          funnyExample: {
            scenario: 'const [name, setName] = useState("");\n<input value={name} onChange={e => setName(e.target.value)} />\n// React has full control of every keystroke! 🎉',
            punchline: 'Controlled inputs keep state and UI in 100% sync!'
          },
          memoryTrick: 'Controlled Component Formula:\n1. State: `const [val, setVal] = useState("")`\n2. Bind Value: `value={val}`\n3. Bind Event: `onChange={(e) => setVal(e.target.value)}`\n4. Submit: `e.preventDefault()`',
          visualDiagram: {
            title: 'Controlled Form Flow',
            nodes: ['User Types Character in <input>', 'onChange Event Fires (e.target.value)', 'setState Updates React State', 'Component Re-renders with State as input value'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'SyntheticEvent System:',
            steps: ['React wraps browser native events in SyntheticEvent for cross-browser consistency', 'Batches event handlers and optimizes memory pooling', 'e.preventDefault() halts native browser form POST submit']
          },
          code: `import React, { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    techStack: 'React'
  });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop default browser refresh!
    if (!formData.fullName.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid full name and email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="form-box">
      <h2>Student Registration 🎓</h2>
      {error && <p className="error-alert">⚠️ {error}</p>}
      {submitted && <p className="success-alert">✅ Registered {formData.fullName} successfully!</p>}

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="form-control"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="form-control"
      />

      <select name="techStack" value={formData.techStack} onChange={handleChange}>
        <option value="React">React 19</option>
        <option value="Node">Node.js Fullstack</option>
        <option value="Python">Python AI</option>
      </select>

      <button type="submit" className="btn-primary">Register Now</button>
    </form>
  );
}`,
          codeBreakdown: [
            { part: 'setFormData(prev => ({ ...prev, [name]: value }))', label: 'Computed property names pattern to manage multiple form fields in single state object', color: '#3b82f6' },
            { part: 'e.preventDefault()', label: 'Stops traditional browser POST reload, keeping single-page app state intact', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Initializing controlled state to `undefined` or `null` causing "uncontrolled to controlled" React console warning (always initialize with empty string `""`)',
            '❌ Forgetting `e.preventDefault()` on form submit'
          ],
          proTips: [
            '💡 For massive forms (20+ fields) with complex schema validation, consider libraries like React Hook Form with Zod',
            '💡 Use the computed property name pattern `[e.target.name]: e.target.value` to handle multiple inputs in one clean function'
          ],
          interviewQuestions: [
            'What is the difference between a Controlled and Uncontrolled component in React?',
            'How do you manage multi-field forms efficiently in React state?'
          ],
          miniChallenge: 'Create a password input form with live validation indicator (min 8 chars, 1 number).',
          quiz: {
            type: 'mcq',
            question: 'Controlled Component mein input ki value kahan store hoti hai?',
            options: ['DOM node ke andar', 'React Component ke State mein', 'Cookies mein', 'Local Storage mein'],
            answer: 'React Component ke State mein',
            explanation: 'In a Controlled Component, form data is handled by a React component\'s state, making state the single source of truth.'
          },
          summary: ['Controlled inputs bind value and onChange to state', 'e.preventDefault() stops page refresh', 'Computed property syntax handles multi-input forms'],
          flashcard: { q: 'Controlled aur Uncontrolled component mein kya main difference hai?', a: 'Controlled component ka data React state manage karta hai, jabki Uncontrolled component ka data seedhe browser DOM manage karta hai.' },
          funFact: '🎉 Fun Fact: React Hook Form library internally uncontrolled inputs aur refs use karti hai taaki har keystroke par poora form re-render na ho aur maximum speed mile!',
          challenge: {
            instruction: 'Create a form with a text input controlled by state and a submit handler.',
            initialCode: `function SimpleForm() {
  const [text, setText] = React.useState("");
  const onSubmit = (e) => { e.preventDefault(); console.log(text); };
  return (
    <form onSubmit={onSubmit}>
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </form>
  );
}`,
            validator: (code) => code.includes('e.preventDefault()') && code.includes('onChange')
          }
        },
        {
          id: 'react-keys',
          title: 'ReactJS Keys (Why Keys are Needed, Reconciliation & Best Practices)',
          emoji: '🔑',
          xpReward: 35,
          badgeName: 'Key Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Keys React ki reconciliation engine ke ID cards hain! Bina key ke React andhere mein teer chalata hai! Unique ID key do aur bugs se bacho! 🔑"',
            hint: '💡 Masti Sir: "Array index `key={index}` tabhi use karo jab list static ho aur items kabhi delete, sort ya filter na hon!"',
            success: '🎉 Masti Sir: "React Keys and Reconciliation deep dive mastered!"',
            mistake: '😅 Masti Sir: "`key={Math.random()}` kabhi mat lagana — har render par naya key banne se input focus aur state toot jayegi! ⚠️"'
          },
          englishDef: 'Keys serve as unique identifiers that help React identify which items in a list have changed, been added, or been removed, enabling efficient DOM mutation during the reconciliation phase.',
          hinglishExplain: 'Key ek aisi unique identity hai jo React ko batati hai ki list ka kaunsa item wahi purana hai aur kaunsa naya aaya hai. Agar aap list ke top par ek item add karte ho aur key nahi hogi, toh React poori list ko destroy karke dobara banayega. Key hone par React sirf naye item ko top par insert karta hai bina purano ko chede.',
          storyExplain: 'Roll Numbers in Class: Har student ka unique Roll Number (Key) hota hai. Agar seats badal bhi jayein, teacher roll number se student ko pehchan leta hai. Agar sirf seat number (Index) use karoge toh bacha aage baithne par identity confuse ho jayegi!',
          funnyExample: {
            scenario: '// Wrong: key={index} on dynamic list with input fields\n// Delete 1st item -> 2nd item gets 1st item\'s input text! 😱\n// Correct: key={item.id} -> 100% stable state! 🎉',
            punchline: 'Always use stable unique IDs as keys!'
          },
          memoryTrick: 'Key Rules of Keys:\n1. Must be unique among siblings\n2. Must be stable across renders (No Math.random)\n3. Use database ID: `key={user.id}`\n4. Avoid `key={index}` on reorderable / filterable lists',
          visualDiagram: {
            title: 'Reconciliation with vs without Keys',
            nodes: ['Insert Item at top without keys -> Mutates ALL N items in DOM (Slow & Buggy)', 'Insert Item at top WITH keys -> Identifies existing keys -> Inserts 1 new node (Instant & Safe)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How Keys Preserve Component State:',
            steps: ['React matches child components across renders based on key', 'If key matches, instance and its internal state (like input focus, local useState) are preserved', 'If key changes, React completely unmounts old instance and mounts a fresh one']
          },
          code: `import React, { useState } from 'react';

export default function TodoListApp() {
  const [todos, setTodos] = useState([
    { id: 'todo-101', text: 'Master React JSX & Components' },
    { id: 'todo-102', text: 'Learn React Hooks & State' },
    { id: 'todo-103', text: 'Build Real-World Portfolio Project' }
  ]);

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const addTodoAtTop = () => {
    const newTodo = {
      id: \`todo-\${Date.now()}\`, // Guaranteed unique stable key
      text: \`New Task #\${todos.length + 1}\`
    };
    setTodos([newTodo, ...todos]); // Insert at top
  };

  return (
    <div className="todo-box">
      <h2>Todo Tasks ({todos.length})</h2>
      <button onClick={addTodoAtTop} className="btn-add">➕ Add Task at Top</button>

      <ul>
        {todos.map(todo => (
          // Using unique stable todo.id as key!
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="btn-del">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'key={todo.id}', label: 'Unique stable string identifier enabling accurate DOM node patching', color: '#3b82f6' },
            { part: 'id: `todo-${Date.now()}`', label: 'Generating unique ID for newly inserted list items', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Generating keys dynamically during render `key={Math.random()}` causing constant component remounting and lost focus',
            '❌ Using duplicate keys among sibling elements triggering React console errors'
          ],
          proTips: [
            '💡 You can intentionally change a component\'s key `key={userId}` to force React to reset its entire internal state and re-mount it cleanly',
            '💡 Keys only need to be unique among sibling elements in the same array, not globally across the entire app'
          ],
          interviewQuestions: [
            'Why is using array index as a key considered an anti-pattern in React?',
            'How does React\'s Reconciliation algorithm use keys to optimize DOM updates?'
          ],
          miniChallenge: 'Explain a scenario where passing a different key to a form component can be used to reset its state cleanly.',
          quiz: {
            type: 'mcq',
            question: 'React mein list render karte waqt `key` ke liye sabse best choice kya hoti hai?',
            options: ['Math.random()', 'Array Index', 'Database ka Unique Stable ID (e.g. item.id)', 'Current Timestamp Date.now() har render par'],
            answer: 'Database ka Unique Stable ID (e.g. item.id)',
            explanation: 'A unique, stable ID from data ensures that React accurately maps VDOM nodes to Real DOM nodes across sorting, adding, and deletions.'
          },
          summary: ['Keys provide identity to list items during reconciliation', 'Avoid index as key for dynamic lists', 'Keys must be stable across renders'],
          flashcard: { q: '`key={index}` use karne se dynamic lists mein kya bug aa sakta hai?', a: 'Items delete ya sort karne par inputs aur internal component state galat items par shift ho jati hai.' },
          funFact: '🎉 Fun Fact: React mein aap kisi bhi component par `key={selectedUserId}` change karke bina manual cleanup ke component ko pura reset aur remount karwa sakte ho!',
          challenge: {
            instruction: 'Map a list of products using their id as key.',
            initialCode: `const products = [{ id: "p1", name: "Laptop" }, { id: "p2", name: "Mouse" }];
const cards = products.map(p => <div key={p.id}>{p.name}</div>);
console.log(cards.length);`,
            validator: (code) => code.includes('key={p.id}')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 2: COMPONENTS IN REACT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Components in React',
      lessons: [
        {
          id: 'react-components-overview',
          title: 'React Components (Architecture & Tree Structure)',
          emoji: '🧱',
          xpReward: 35,
          badgeName: 'Component Builder',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Components React ki building blocks hain! Ek badi website ko chhote manageable pieces mein todna hi modern clean code ki pehchan hai! 🏗️"',
            hint: '💡 Masti Sir: "Component Hierarchy: Root App -> Pages -> Layouts -> Features -> Reusable Atomic UI Elements!"',
            success: '🎉 Masti Sir: "Component tree architecture crystal clear!"',
            mistake: '😅 Masti Sir: "Ek hi component mein 1000 lines ka code mat likho — use chhote reusable components mein break karo!"'
          },
          englishDef: 'React applications are structured as a tree of independent, composable components. Components accept arbitrary inputs called `props` and return React elements describing what should appear on screen.',
          hinglishExplain: 'React app ek component tree ki tarah hoti hai. Sabse upar `<App />` hota hai, uske andar `<Navbar />`, `<Sidebar />`, aur `<MainContent />` hote hain. Props ke zariye data top-to-bottom pass hota hai (Unidirectional Data Flow).',
          storyExplain: 'Automobile Assembly Line: Car (App) alag-alag modules se banti hai: Engine (Logic), Wheels (UI widgets), Dashboard (Controls). Har module independent test aur replace kiya ja sakta hai.',
          funnyExample: {
            scenario: '<App>\n  <Navbar user="Kabir" />\n  <Hero title="Welcome!" />\n  <Footer />\n</App>',
            punchline: 'Composable component trees keep large apps organized!'
          },
          memoryTrick: 'Component Golden Rules:\n- Single Responsibility (One component = One primary task)\n- Props Down, Events Up (Unidirectional Data Flow)\n- Pure Functions for UI presentation\n- Reusable & Independent',
          visualDiagram: {
            title: 'Component Tree Hierarchy',
            nodes: ['App (Root State Holder)', '  -> Navbar (Receives user prop)', '  -> CourseFeed (Receives courses array)', '    -> CourseCard (Instance #1)', '    -> CourseCard (Instance #2)', '  -> Footer'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Unidirectional Data Flow:',
            steps: ['Data flows downwards from parent to child via props', 'Child communicates changes upwards by calling callback functions passed as props', 'Ensures predictable state changes and easy debugging']
          },
          code: `import React from 'react';

// 1. Leaf Reusable UI Component
function PrimaryButton({ label, onClick, variant = 'primary' }) {
  return (
    <button className={\`btn btn-\${variant}\`} onClick={onClick}>
      {label}
    </button>
  );
}

// 2. Feature Container Component
function UserActionBar({ username, onLogout }) {
  return (
    <div className="action-bar">
      <span>Logged in as: <strong>{username}</strong></span>
      <PrimaryButton label="Profile" onClick={() => alert("Profile Clicked")} variant="secondary" />
      <PrimaryButton label="Logout" onClick={onLogout} variant="danger" />
    </div>
  );
}

// 3. Root App Component
export default function App() {
  return (
    <div className="app-container">
      <UserActionBar username="Aman Verma" onLogout={() => alert("Logged Out")} />
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'PrimaryButton({ label, onClick, variant })', label: 'Reusable leaf button component accepting presentation props and click handler', color: '#3b82f6' },
            { part: 'UserActionBar(...)', label: 'Composed feature component assembling multiple smaller UI elements', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Trying to pass data directly sideways between sibling components without lifting state up to common parent'
          ],
          proTips: [
            '💡 Lift state up to the closest common parent when two sibling components need to share data',
            '💡 Follow the Atomic Design methodology (Atoms -> Molecules -> Organisms -> Templates -> Pages)'
          ],
          interviewQuestions: [
            'What is Unidirectional Data Flow in React and why is it beneficial?',
            'What is "Lifting State Up" in React component architecture?'
          ],
          miniChallenge: 'Design a component hierarchy for an E-Commerce product listing page with filtering.',
          quiz: {
            type: 'mcq',
            question: 'React mein data flow kaisa hota hai?',
            options: ['Bidirectional (dono taraf)', 'Unidirectional (Parent se Child ki taraf)', 'Random', 'Bottom to Top only'],
            answer: 'Unidirectional (Parent se Child ki taraf)',
            explanation: 'React enforces unidirectional (one-way) data flow where data passes downwards via props and actions pass upwards via event callbacks.'
          },
          summary: ['Apps are trees of modular components', 'Props pass downwards, events bubble upwards', 'Lift state up to share between siblings'],
          flashcard: { q: 'Unidirectional Data Flow ka kya faida hai?', a: 'State changes predictable bante hain aur bugs ko trace karna bohot aasan ho jata hai.' },
          funFact: '🎉 Fun Fact: Meta ke Facebook web app mein 50,000 se zyada alag-alag React components ek sath compose ho kar chalte hain!',
          challenge: {
            instruction: 'Create a Card component that wraps children in a styled container.',
            initialCode: `function Card({ children }) {
  return <div className="card-box">{children}</div>;
}`,
            validator: (code) => code.includes('{children}') && code.includes('className="card-box"')
          }
        },
        {
          id: 'react-functional-components',
          title: 'ReactJS Functional Components (Props, Default Props & Destructuring)',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'Function Champ',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Functional components modern React ka standard hain! 100% plain JavaScript functions jo props lete hain aur JSX return karte hain! 🚀"',
            hint: '💡 Masti Sir: "Props read-only (immutable) hote hain — child component props ko modify nahi kar sakta!"',
            success: '🎉 Masti Sir: "Functional components and props destructuring mastered!"',
            mistake: '😅 Masti Sir: "Child component mein `props.title = "New"` likh kar props mutate karne ki koshish mat karna! Props are Pure & Read-Only!"'
          },
          englishDef: 'Functional Components are JavaScript functions that accept `props` (properties) as an argument and return React elements. They are lightweight, support hooks, and follow pure function principles.',
          hinglishExplain: 'Functional Component ek normal JavaScript function hai jo `props` input leta hai aur UI return karta hai. Modern React mein 100% naye code mein functional components hi use hote hain. Props immutable hote hain (unhe direct change nahi kar sakte).',
          storyExplain: 'Restaurant Menu & Customer: Menu (Props) customer ko milta hai padhne ke liye (Read-only). Customer menu par pen se price nahi badal sakta! Agar naya order dena hai toh waiter (Event callback) ko batana padega.',
          funnyExample: {
            scenario: 'const UserGreeting = ({ name = "Coder", xp = 0 }) => (\n  <h2>Namaste {name}! ⭐ {xp} XP</h2>\n);\n// Clean, concise 3-line component with defaults! 🎉',
            punchline: 'Functional components with default parameters keep code simple!'
          },
          memoryTrick: 'Props Rules:\n1. Props are Immutable / Read-Only\n2. Destructure in arguments: `({ title, price })`\n3. Default values: `({ level = "Beginner" })`\n4. `children` prop: special prop for nested JSX',
          visualDiagram: {
            title: 'Functional Component Data Flow',
            nodes: ['Parent passes props: <Badge title="React" xp={50} />', 'Functional Component Badge({ title, xp }) receives props', 'Computes JSX output based on props', 'Returns React element tree to DOM'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Pure Functions in UI:',
            steps: ['A pure function given the same inputs always returns the exact same output', 'Does not produce side-effects outside its scope during render', 'Enables easy unit testing with Jest / Vitest']
          },
          code: `import React from 'react';

// Modern Functional Component with Destructuring & Default Props
function StudentProfileCard({
  name,
  role = 'Learner',
  xp = 100,
  isOnline = false,
  children
}) {
  return (
    <div className={\`profile-card \${isOnline ? 'online' : 'offline'}\`}>
      <div className="header">
        <h3>{name}</h3>
        <span className="role-tag">{role}</span>
      </div>

      <p className="xp-text">Total XP: <strong>+{xp} XP</strong></p>
      
      {/* Rendering nested children passed inside component tags */}
      <div className="custom-content">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <StudentProfileCard name="Neha Sharma" role="Fullstack Dev" xp={450} isOnline={true}>
        <p>🏆 Completed: HTML, CSS, JavaScript Mastery!</p>
      </StudentProfileCard>
    </div>
  );
}`,
          codeBreakdown: [
            { part: '({ name, role = "Learner", xp = 100, children })', label: 'Default parameter values in props destructuring', color: '#3b82f6' },
            { part: '{children}', label: 'Special prop representing nested elements passed between opening and closing tags', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Trying to mutate incoming props (`props.score += 10;` throws errors in strict mode)',
            '❌ Forgetting that `children` is plural and lowercase in React props'
          ],
          proTips: [
            '💡 Use the `children` prop for reusable container components like Modals, Cards, and Layouts',
            '💡 Destructure props directly in function parameters for clean, readable code'
          ],
          interviewQuestions: [
            'Why are props considered immutable in React?',
            'What is the `children` prop in React and how is it used for component composition?'
          ],
          miniChallenge: 'Create an Alert component that takes `type` (success/error) and renders `{children}` with appropriate CSS class.',
          quiz: {
            type: 'mcq',
            question: 'React mein Props ke bare mein kaunsa statement SAHI hai?',
            options: ['Props ko child component modify kar sakta hai', 'Props read-only / immutable hote hain', 'Props sirf numbers accept karte hain', 'Props sirf parent component se return hote hain'],
            answer: 'Props read-only / immutable hote hain',
            explanation: 'Props are strictly read-only and immutable. Components must never modify their own props.'
          },
          summary: ['Functional components are plain JS functions returning JSX', 'Props are immutable inputs passed top-to-bottom', 'children prop enables flexible component composition'],
          flashcard: { q: '`children` prop ka kya role hota hai?', a: 'Parent component ke opening aur closing tags ke beech likhe huye kisi bhi JSX content ko render karna.' },
          funFact: '🎉 Fun Fact: React 16.8 (2019) mein Hooks introduce hone ke baad functional components ne Class components ko completely overtake kar liya!',
          challenge: {
            instruction: 'Create an InfoBanner component that renders title and children.',
            initialCode: `function InfoBanner({ title, children }) {
  return (
    <div className="banner">
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}`,
            validator: (code) => code.includes('{title}') && code.includes('{children}')
          }
        },
        {
          id: 'react-class-components',
          title: 'React Class Components (Class Syntax, state, this & Legacy Codebases)',
          emoji: '🏛️',
          xpReward: 30,
          badgeName: 'Class Scholar',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Hooks aane se pehle React mein state sirf Class Components mein hota tha! Badi legacy companies (banks, enterprise apps) mein Class code samajhna zaroori hai! 🏛️"',
            hint: '💡 Masti Sir: "Class component mein `this.state = { count: 0 }` constructor mein initialize hota hai aur `this.setState()` se update hota hai!"',
            success: '🎉 Masti Sir: "Class components and setState mechanics mastered!"',
            mistake: '😅 Masti Sir: "Event handlers ko constructor mein `this.handleClick = this.handleClick.bind(this)` bind karna padta tha warna `this` undefined ho jata tha!"'
          },
          englishDef: 'Class Components are ES6 classes extending `React.Component` that manage local state via `this.state` and render UI using the `render()` method. They are primarily encountered in legacy enterprise codebases.',
          hinglishExplain: 'Pehle ke React mein state aur lifecycle methods use karne ke liye `class MyComponent extends React.Component` likhna padta tha. Isme `constructor()` mein `this.state` banta tha aur `this.setState()` se update hota tha. Event handlers mein `this` ko bind karna padta tha.',
          storyExplain: 'Old Desktop PC vs Modern Laptop: Class component purana bada desktop computer hai jisme alag keyboard, mouse, CPU jodne padte the (boilerplate). Functional Component sleek modern laptop hai jo direct open hota hai!',
          funnyExample: {
            scenario: 'Junior looking at legacy Class code:\n"Sir constructor, super, bind(this), componentDidMount, render... itna sab kuch sirf ek counter ke liye? 😱"\nSenior: "Welcome to 2017 React! 😂"',
            punchline: 'Modern Hooks reduced 30 lines of class boilerplate to 3 lines!'
          },
          memoryTrick: 'Class Component Essentials:\n- `class Name extends React.Component`\n- `constructor(props) { super(props); this.state = {...}; }`\n- `render() { return <div>{this.state.x}</div>; }`\n- Update: `this.setState({ count: this.state.count + 1 })`\n- Bind: `this.handler = this.handler.bind(this)` or arrow method',
          visualDiagram: {
            title: 'Class Component Lifecycle & State',
            nodes: ['constructor(props) -> initialize this.state', 'render() -> returns JSX', 'componentDidMount() -> run initial API calls', 'this.setState() -> triggers render() again', 'componentWillUnmount() -> cleanup'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How setState Works in Class Components:',
            steps: ['this.setState shallowly merges the passed object with existing state', 'Queues a re-render in React\'s update queue', 'Optional callback parameter runs after DOM update completes']
          },
          code: `import React, { Component } from 'react';

// Legacy Class Component Pattern
export default class LegacyCounter extends Component {
  constructor(props) {
    super(props);
    // 1. Initializing state in constructor
    this.state = {
      count: 0,
      lastUpdated: 'Never'
    };

    // 2. Binding this to event handler
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    // 3. Updating state via this.setState()
    this.setState((prevState) => ({
      count: prevState.count + 1,
      lastUpdated: new Date().toLocaleTimeString()
    }));
  }

  // 4. Mandatory render() method returning JSX
  render() {
    return (
      <div className="counter-card">
        <h3>Class Component Counter 🏛️</h3>
        <p>Count: <strong>{this.state.count}</strong></p>
        <p>Last Updated: {this.state.lastUpdated}</p>
        <button onClick={this.handleIncrement} className="btn-primary">
          Increment (+1)
        </button>
      </div>
    );
  }
}`,
          codeBreakdown: [
            { part: 'class LegacyCounter extends Component', label: 'Inherits lifecycle and state methods from base React.Component', color: '#3b82f6' },
            { part: 'this.setState((prevState) => ...)', label: 'Asynchronous state updater performing shallow state merge', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Mutating state directly `this.state.count = 5` (never re-renders UI; must use `this.setState`)',
            '❌ Forgetting to bind `this` or use class arrow properties on event handlers'
          ],
          proTips: [
            '💡 In modern React, write all new components as Functional Components with Hooks',
            '💡 Error Boundaries are one of the only remaining areas where Class components (`componentDidCatch`) are still required'
          ],
          interviewQuestions: [
            'What are the main differences between Class Components and Functional Components?',
            'Why did we need to bind `this` in Class Component event handlers?'
          ],
          miniChallenge: 'Convert a simple Class counter component into a modern functional component using `useState`.',
          quiz: {
            type: 'mcq',
            question: 'Class Component mein state update karne ke liye kaunsa method use hota hai?',
            options: ['this.updateState()', 'this.setState()', 'this.state.set()', 'useState()'],
            answer: 'this.setState()',
            explanation: 'In Class components, state updates are performed via `this.setState()`, which performs a shallow merge and schedules a re-render.'
          },
          summary: ['Class components extend React.Component', 'State initialized in constructor and updated via this.setState', 'render() returns JSX'],
          flashcard: { q: 'Modern React mein Class components kahan use hote hain?', a: 'Legacy codebases mein aur Error Boundary components banane ke liye.' },
          funFact: '🎉 Fun Fact: Meta ke code mein abhi bhi lakho Class components chal rahe hain, aur React team ne guarantee di hai ki wo Class components support ko drop nahi karenge!',
          challenge: {
            instruction: 'Write a basic class component structure returning an h1.',
            initialCode: `class MyHeading extends React.Component {
  render() {
    return <h1>Class Component Title</h1>;
  }
}`,
            validator: (code) => code.includes('extends React.Component') && code.includes('render()')
          }
        },
        {
          id: 'react-pure-components',
          title: 'ReactJS Pure Components (React.memo & Shallow Comparison)',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'Perf Guardian',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Faltu re-renders se app slow hoti hai! `PureComponent` aur `React.memo` shallow comparison karke unnecessary re-renders ko rok dete hain! 🛡️"',
            hint: '💡 Masti Sir: "`React.memo(MyComponent)` props ko compare karta hai — agar props nahi badle toh re-render skip ho jata hai!"',
            success: '🎉 Masti Sir: "Pure components and React.memo optimization mastered!"',
            mistake: '😅 Masti Sir: "Inline object `user={{ id: 1 }}` ya inline function har render par naya reference banata hai, jisse memo fail ho jata hai!"'
          },
          englishDef: 'Pure Components (`React.PureComponent` in class components and `React.memo()` in functional components) optimize performance by performing a shallow comparison of props and state to prevent redundant re-renders.',
          hinglishExplain: 'By default, jab parent component re-render hota hai toh uske saare children bhi dobara render hote hain chahe unka data badla ho ya na ho. `React.memo` se hum child component ko wrap kar dete hain. React props ko shallow compare karta hai — agar props pehle jaise hi hain toh wo purana rendered result reuse kar leta hai.',
          storyExplain: 'Exam Answer Sheet: Agar teacher ne wahi same question paper dobara diya jisme 100/100 the, toh student dobara poora paper solve karne ke bajaye purani checked copy dikha deta hai (Memoization)!',
          funnyExample: {
            scenario: '// Parent updates unrelated clock state every 1 second:\n// Without memo: HeavyChart re-renders 60 times a minute 🥵\n// With React.memo(HeavyChart): Re-renders 0 times! 😎',
            punchline: 'React.memo skips render when props are unchanged!'
          },
          memoryTrick: 'Shallow Comparison Rule:\n- Primitives (Number, String, Boolean): Compares values (`5 === 5` -> True)\n- Objects / Arrays / Functions: Compares memory reference pointers (`{} === {}` -> False)\n- Wrap with `useCallback` and `useMemo` to keep references stable',
          visualDiagram: {
            title: 'React.memo Optimization Flow',
            nodes: ['Parent Re-renders', 'React.memo compares PrevProps vs NextProps', 'Are Props equal? (Shallow Check)', 'YES -> Skip Re-render (Reuse DOM)', 'NO -> Execute Component Render'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Shallow Comparison Mechanics:',
            steps: ['Iterates keys of prevProps and nextProps', 'Checks if Object.is(prevProps[key], nextProps[key]) is true for all keys', 'If all match, skips rendering sub-tree entirely']
          },
          code: `import React, { useState, memo } from 'react';

// 1. Expensive Component wrapped with React.memo
const ExpensiveUserCard = memo(function ExpensiveUserCard({ name, rank }) {
  console.log(\`🔥 ExpensiveUserCard rendered for \${name}\`);
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>Rank: #{rank}</p>
    </div>
  );
});

// 2. Parent Component
export default function App() {
  const [timer, setTimer] = useState(0);
  const [userName, setUserName] = useState('Kabir');

  return (
    <div className="box">
      <h3>Timer: {timer}</h3>
      {/* Clicking this button re-renders App, but ExpensiveUserCard SKIPS re-render! */}
      <button onClick={() => setTimer(t => t + 1)}>Increment Timer</button>
      <button onClick={() => setUserName(userName === 'Kabir' ? 'Aryan' : 'Kabir')}>
        Switch User Name
      </button>

      <ExpensiveUserCard name={userName} rank={1} />
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'const ExpensiveUserCard = memo(function ...)', label: 'Wraps functional component to memoize output based on shallow props equality', color: '#3b82f6' },
            { part: 'console.log("ExpensiveUserCard rendered...")', label: 'Only triggers when name or rank props actually change', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Wrapping every single tiny component with `React.memo` (memoization has comparison overhead; use only on heavy components)',
            '❌ Passing new inline functions `onClick={() => doSomething()}` defeating `React.memo` (wrap function in `useCallback`)'
          ],
          proTips: [
            '💡 Use `React.memo` on list item cards, heavy charts, and complex SVG visualizations',
            '💡 Pair `React.memo` with `useCallback` for functions and `useMemo` for objects passed as props'
          ],
          interviewQuestions: [
            'What is the difference between `React.Component`, `React.PureComponent`, and `React.memo()`?',
            'What is shallow comparison and why does passing an inline object `{}` break `React.memo`?'
          ],
          miniChallenge: 'Explain how `useCallback` prevents breaking `React.memo` when passing event handler functions.',
          quiz: {
            type: 'mcq',
            question: '`React.memo` props ka comparison kaise karta hai?',
            options: ['Deep Comparison (poore nested objects check karta hai)', 'Shallow Comparison (reference aur top-level values)', 'Random check', 'DOM compare karke'],
            answer: 'Shallow Comparison (reference aur top-level values)',
            explanation: '`React.memo` performs a shallow comparison (`Object.is`) on props by default.'
          },
          summary: ['PureComponent and React.memo prevent redundant re-renders', 'Shallow equality checks primitives by value and objects by reference', 'Combine with useCallback for stable function props'],
          flashcard: { q: '`React.memo` ka primary use case kya hai?', a: 'Parent component ke re-render hone par child component ko bina props change huye re-render hone se rokna.' },
          funFact: '🎉 Fun Fact: `React.memo` ko second argument ke roop mein custom comparison function `(prevProps, nextProps) => boolean` bhi pass kiya ja sakta hai!',
          challenge: {
            instruction: 'Wrap a simple Badge component with React.memo.',
            initialCode: `const Badge = React.memo(function Badge({ label }) {
  return <span>{label}</span>;
});`,
            validator: (code) => code.includes('React.memo') && code.includes('{label}')
          }
        },
        {
          id: 'react-container-presentational',
          title: 'ReactJS Container & Presentational Pattern (Smart vs Dumb Components)',
          emoji: '🗂️',
          xpReward: 35,
          badgeName: 'Pattern Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Code architecture ka classic rule: Logic alag rakho aur UI Design alag rakho! Container components data laate hain, aur Presentational components use sundar dikhate hain! 🎨"',
            hint: '💡 Masti Sir: "Presentational (Dumb) component ko sirf props se matlab hota hai — wo API calls ya complex state nahi rakhta!"',
            success: '🎉 Masti Sir: "Container and Presentational pattern mastered!"',
            mistake: '😅 Masti Sir: "Ek hi component mein 5 API calls aur 200 line ka HTML mix mat karo — separation of concerns follow karo!"'
          },
          englishDef: 'The Container and Presentational Pattern separates concerns in React applications: Container components handle business logic, data fetching, and state, while Presentational components focus solely on rendering UI based on props.',
          hinglishExplain: 'Is pattern mein hum components ko 2 categories mein divide karte hain:\n1. Presentational (Dumb / UI) Components: Inhe sirf props milte hain aur ye sundar UI dikhate hain (bina API calls ke).\n2. Container (Smart) Components: Ye backend se data fetch karte hain, state manage karte hain aur data ko Presentational component mein pass kar dete hain.',
          storyExplain: 'Chef & Waiter: Kitchen mein Chef (Container) khana banata hai aur ingredients manage karta hai. Waiter (Presentational) khana lekar table par customer ko serve karta hai.',
          funnyExample: {
            scenario: '// Presentational:\nconst UserList = ({ users }) => <ul>{users.map(u => <li key={u}>{u}</li>)}</ul>;\n// Container:\nconst UserListContainer = () => { const data = useFetchUsers(); return <UserList users={data} />; };',
            punchline: 'Separate HOW IT LOOKS from HOW IT WORKS!'
          },
          memoryTrick: 'Smart vs Dumb Comparison:\n- Presentational: "How things LOOK", receives props, zero API logic, highly reusable\n- Container: "How things WORK", handles state & API fetch, passes props down',
          visualDiagram: {
            title: 'Container & Presentational Flow',
            nodes: ['API Backend / Database', 'UserContainer (Fetches data, holds state, handles loading)', 'Passes users prop -> UserList (Presentational UI)', 'UserCard × Multiple (Pure visual styling)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Separation of Concerns Benefits:',
            steps: ['Presentational components can be developed and showcased in Storybook without a backend', 'Easy to change data sources without touching UI styling', 'Makes unit testing simple and isolated']
          },
          code: `import React, { useState, useEffect } from 'react';

// 1. PRESENTATIONAL COMPONENT (Pure UI, Reusable, Testable)
function CourseDirectoryView({ courses, isLoading, onSelectCourse }) {
  if (isLoading) return <div className="spinner">⏳ Loading Courses...</div>;

  return (
    <div className="course-grid">
      {courses.map(course => (
        <div key={course.id} className="card" onClick={() => onSelectCourse(course)}>
          <h3>{course.title}</h3>
          <p>Rating: ⭐ {course.rating} / 5</p>
        </div>
      ))}
    </div>
  );
}

// 2. CONTAINER COMPONENT (Data Fetching & Business Logic)
export default function CourseDirectoryContainer() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API Fetch
    setTimeout(() => {
      setCourses([
        { id: '1', title: 'React 19 Complete Guide', rating: 4.9 },
        { id: '2', title: 'Fullstack Next.js Masterclass', rating: 4.8 }
      ]);
      setLoading(false);
    }, 600);
  }, []);

  const handleSelect = (course) => {
    alert(\`Selected Course: \${course.title}\`);
  };

  // Passes state and handlers to Presentational View
  return (
    <CourseDirectoryView
      courses={courses}
      isLoading={loading}
      onSelectCourse={handleSelect}
    />
  );
}`,
          codeBreakdown: [
            { part: 'function CourseDirectoryView({ courses, isLoading, onSelectCourse })', label: 'Presentational component focused purely on UI rendering without direct API dependency', color: '#3b82f6' },
            { part: 'CourseDirectoryContainer()', label: 'Container component managing state, side-effects, and business logic', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Hardcoding API `fetch` calls directly inside purely visual reusable components like Buttons or Cards'
          ],
          proTips: [
            '💡 In modern React, Custom Hooks (`useCourses()`) have also made data extraction even cleaner alongside this pattern',
            '💡 Presentational components are ideal candidates for UI component libraries and Storybook catalogs'
          ],
          interviewQuestions: [
            'What is the Container and Presentational Component pattern in React?',
            'How have modern Custom Hooks evolved or complemented the Container pattern?'
          ],
          miniChallenge: 'Create a presentational `WeatherCard` and a container `WeatherContainer` that fetches live temperature.',
          quiz: {
            type: 'mcq',
            question: 'Presentational Component ka main role kya hota hai?',
            options: ['Database se connect hona', 'Props lekar sirf UI render karna (How things look)', 'Redux store configure karna', 'Server routing chalana'],
            answer: 'Props lekar sirf UI render karna (How things look)',
            explanation: 'Presentational components are concerned solely with how things look, receiving data and callbacks exclusively via props.'
          },
          summary: ['Presentational components focus on visual UI', 'Container components manage state and data fetching', 'Pattern maximizes reusability and testability'],
          flashcard: { q: 'Presentational aur Container component mein kya farak hota hai?', a: 'Presentational component sirf props lekar UI render karta hai, jabki Container component data fetching aur state logic handle karta hai.' },
          funFact: '🎉 Fun Fact: Dan Abramov (Redux creator) ne 2015 mein yeh article likhkar pattern popular kiya tha aur baad mein Custom Hooks ke sath ise aur simple banaya!',
          challenge: {
            instruction: 'Create a dumb UserView component that renders name and email from props.',
            initialCode: `function UserView({ name, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}`,
            validator: (code) => code.includes('{name}') && code.includes('{email}')
          }
        },
        {
          id: 'react-proptypes',
          title: 'ReactJS PropTypes (Runtime Prop Validation & Type Safety)',
          emoji: '🛡️',
          xpReward: 30,
          badgeName: 'Type Sentry',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`PropTypes` runtime par verify karta hai ki component ko sahi type ka data mil raha hai ya nahi! Agar number ki jagah string chali gayi toh console mein warning aayegi! 🛡️"',
            hint: '💡 Masti Sir: "`PropTypes.string.isRequired` se prop mandatory ban jata hai!"',
            success: '🎉 Masti Sir: "PropTypes validation mastered!"',
            mistake: '😅 Masti Sir: "PropTypes sirf development mode mein warning deta hai, production build mein performance ke liye strip ho jata hai!"'
          },
          englishDef: 'PropTypes is a runtime type-checking mechanism for React props that validates data types in development mode and provides clear warnings when invalid or missing props are detected.',
          hinglishExplain: 'PropTypes se hum define karte hain ki hamare component ko kaunsa prop kis type (string, number, array, function) ka milna chahiye. Agar koi developer galti se `age` number ki jagah string pass kar dega, toh browser console mein clear red warning aa jayegi.',
          storyExplain: 'Passport Verification: Airport security par check hota hai ki document valid passport (String) hai ya nahi. Agar galat document diya toh guard turant warning dekar rok leta hai.',
          funnyExample: {
            scenario: '<UserCard age="twenty" />\n// Console Warning: Failed prop type: Invalid prop `age` of type `string` supplied to `UserCard`, expected `number`! 🚨',
            punchline: 'PropTypes catches incorrect prop types in development!'
          },
          memoryTrick: 'PropTypes Common Types:\n- `PropTypes.string`\n- `PropTypes.number`\n- `PropTypes.bool`\n- `PropTypes.func`\n- `PropTypes.array`\n- `PropTypes.shape({ id: PropTypes.string })`\n- `.isRequired` (Mandatory)',
          visualDiagram: {
            title: 'PropTypes Runtime Validation',
            nodes: ['Parent passes props to <StudentBadge />', 'React checks PropTypes schema in Development', 'Valid -> Render cleanly', 'Invalid -> Output clear descriptive warning in DevTools Console'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Development vs Production:',
            steps: ['PropTypes validation checks run only in development mode (process.env.NODE_ENV !== "production")', 'Babel / Vite production builds strip out PropTypes checks to maintain zero runtime overhead in production']
          },
          code: `import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ title, price, isAvailable, onAddToCart, tags }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>Price: ₹{price.toFixed(2)}</p>
      <span>Status: {isAvailable ? 'In Stock' : 'Out of Stock'}</span>
      <button onClick={onAddToCart}>Add to Cart</button>
      <div className="tags">{tags.join(', ')}</div>
    </div>
  );
}

// Defining PropTypes Schema
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isAvailable: PropTypes.bool,
  onAddToCart: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

// Default Props
ProductCard.defaultProps = {
  isAvailable: true,
  tags: ['Featured']
};

export default ProductCard;`,
          codeBreakdown: [
            { part: 'ProductCard.propTypes = { ... }', label: 'Attaches runtime validation rules to the component function object', color: '#3b82f6' },
            { part: 'PropTypes.number.isRequired', label: 'Ensures the price prop is guaranteed to be a number and cannot be omitted', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Assuming PropTypes will enforce types at compile time (TypeScript does compile-time; PropTypes is runtime development only)'
          ],
          proTips: [
            '💡 Use `PropTypes.shape({...})` to validate complex nested object structures like user profiles or API response payloads',
            '💡 In modern enterprise applications, TypeScript interfaces (`interface Props {}`) are widely preferred over PropTypes'
          ],
          interviewQuestions: [
            'What is PropTypes in React and how does it compare to TypeScript?',
            'What happens when a PropTypes check fails in development vs production?'
          ],
          miniChallenge: 'Define a PropTypes schema for a UserProfile component with name, age, and an optional email string.',
          quiz: {
            type: 'mcq',
            question: 'PropTypes validation kab execute hoti hai?',
            options: ['Sirf Development mode mein', 'Sirf Production server par', 'Database ke andar', 'HTML download hone se pehle'],
            answer: 'Sirf Development mode mein',
            explanation: 'PropTypes warnings are emitted only in development mode to avoid performance penalties in production.'
          },
          summary: ['PropTypes validates props at runtime in development', '.isRequired marks mandatory props', 'Provides descriptive console warnings for invalid types'],
          flashcard: { q: 'PropTypes aur TypeScript mein kya difference hai?', a: 'PropTypes browser runtime par check karta hai, jabki TypeScript compile-time par code editor mein hi type errors pakad leta hai.' },
          funFact: '🎉 Fun Fact: React 15 tak PropTypes React core package ke andar tha, React 16 mein ise alag `prop-types` package mein move kiya gaya!',
          challenge: {
            instruction: 'Define propTypes for a Button component with label string and onClick func.',
            initialCode: `function CustomBtn({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
CustomBtn.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};`,
            validator: (code) => code.includes('PropTypes.string') && code.includes('PropTypes.func')
          }
        },
        {
          id: 'react-lifecycle',
          title: 'React Lifecycle (Mounting, Updating, Unmounting & useEffect Mapping)',
          emoji: '🔄',
          xpReward: 35,
          badgeName: 'Lifecycle Guru',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Har React component ki ek zindagi (Lifecycle) hoti hai: Janam (Mounting), Badlav (Updating), aur Alvida (Unmounting)! Modern React mein `useEffect` in sabko akela handle karta hai! 🌟"',
            hint: '💡 Masti Sir: "`useEffect(fn, [])` = Mount, `useEffect(fn, [val])` = Update, `useEffect(() => cleanup, [])` = Unmount!"',
            success: '🎉 Masti Sir: "React Component Lifecycle mastered!"',
            mistake: '😅 Masti Sir: "Unmounting par timer ya event listener ko clean up karna mat bhoolna, warna memory leak ho jayegi!"'
          },
          englishDef: 'The React Component Lifecycle describes the phases a component transitions through: Mounting (inserted into DOM), Updating (re-rendered due to state/props), and Unmounting (removed from DOM).',
          hinglishExplain: 'Har component ke 3 main phases hote hain:\n1. Mounting: Component pehli baar screen par appear hota hai (Initial API fetch, timer start).\n2. Updating: Jab state ya props change hote hain aur component re-render hota hai.\n3. Unmounting: Component screen se hataya jata hai (Cleanup timers, remove event listeners).',
          storyExplain: 'Human Life Stages: Janam (Mounting - Welcome to world), Growth & Learning (Updating - Updates as life events happen), Farewell (Unmounting - Clean up your room before leaving).',
          funnyExample: {
            scenario: 'useEffect(() => {\n  const timer = setInterval(() => console.log("Tick"), 1000);\n  return () => clearInterval(timer); // Cleanup on unmount! 🧹\n}, []);',
            punchline: 'Always return a cleanup function to prevent memory leaks!'
          },
          memoryTrick: 'Class vs Hook Lifecycle Cheat:\n- Mounting: `componentDidMount` -> `useEffect(fn, [])`\n- Updating: `componentDidUpdate` -> `useEffect(fn, [deps])`\n- Unmounting: `componentWillUnmount` -> `useEffect(() => { return () => cleanup; }, [])`',
          visualDiagram: {
            title: 'Component Lifecycle Timeline',
            nodes: ['Mounting (Component created -> Inserted in DOM -> useEffect runs)', 'Updating (State/Prop changes -> Re-render -> useEffect with deps runs)', 'Unmounting (Component destroyed -> Cleanup function runs)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'React 19 Cleanups:',
            steps: ['Component unmounts from DOM tree', 'React synchronously invokes all registered cleanup functions', 'Frees event listeners, WebSocket connections, and pending intervals from browser memory']
          },
          code: `import React, { useState, useEffect } from 'react';

// Sub-component showcasing Mounting and Unmounting
function LiveTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1. MOUNTING PHASE (Runs once when component appears)
    console.log("🟢 LiveTimer Mounted!");

    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // 2. UNMOUNTING CLEANUP PHASE (Runs when component is removed)
    return () => {
      console.log("🔴 LiveTimer Unmounted! Cleaning up interval.");
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array = Mount & Unmount only

  return <div className="timer-badge">⏳ Active Session: {seconds}s</div>;
}

export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="box">
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide Timer (Unmount)' : 'Show Timer (Mount)'}
      </button>
      {showTimer && <LiveTimer />}
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'useEffect(() => { ... return () => clearInterval(...) }, [])', label: 'Mounts timer and returns cleanup callback executed automatically on unmount', color: '#3b82f6' },
            { part: '{showTimer && <LiveTimer />}', label: 'Conditional mounting/unmounting based on parent state toggle', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Forgetting the cleanup function on `setInterval` or `window.addEventListener`, causing ghost events and memory leaks'
          ],
          proTips: [
            '💡 Always clean up WebSockets, timers, and window listeners in the useEffect return function',
            '💡 In React 18+ StrictMode (dev mode), React mounts, unmounts, and re-mounts components to ensure cleanups are resilient'
          ],
          interviewQuestions: [
            'Explain the three phases of the React Component Lifecycle.',
            'How do you replicate `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` using `useEffect`?'
          ],
          miniChallenge: 'Create a component that listens to window resize events and properly removes the listener on unmount.',
          quiz: {
            type: 'mcq',
            question: '`useEffect` ke andar return kiya gaya function kab execute hota hai?',
            options: ['Component ke Mount hone se pehle', 'Component ke Unmount hone par aur next effect run hone se pehle (Cleanup)', 'Page refresh par', 'Sirf error aane par'],
            answer: 'Component ke Unmount hone par aur next effect run hone se pehle (Cleanup)',
            explanation: 'The function returned from `useEffect` is the cleanup function, executed when the component unmounts or before re-running the effect.'
          },
          summary: ['3 phases: Mounting, Updating, Unmounting', 'useEffect handles all 3 phases in modern functional components', 'Return cleanup function to avoid memory leaks'],
          flashcard: { q: '`componentWillUnmount` ko `useEffect` se kaise likhte hain?', a: '`useEffect(() => { return () => { /* cleanup logic */ }; }, []);`' },
          funFact: '🎉 Fun Fact: React 18 StrictMode mein React pehle mount karta hai, fir turant unmount karke dobara mount karta hai taaki developer ka cleanup test ho sake!',
          challenge: {
            instruction: 'Write a useEffect hook that logs "Mounted" on mount and "Unmounted" in cleanup.',
            initialCode: `React.useEffect(() => {
  console.log("Mounted");
  return () => console.log("Unmounted");
}, []);`,
            validator: (code) => code.includes('useEffect') && code.includes('return () =>')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 3: REACT HOOKS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'React Hooks',
      lessons: [
        {
          id: 'react-hooks-intro',
          title: 'React Hooks (Introduction & Rules of Hooks)',
          emoji: '🪝',
          xpReward: 35,
          badgeName: 'Hook Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Hooks ne React ko aasan aur powerful bana diya! 2 Golden Rules yaad rakho: 1. Sirf top-level par call karo (no loops/if), 2. Sirf React functions mein call karo! 🪝"',
            hint: '💡 Masti Sir: "Hooks `use` prefix se shuru hote hain (useState, useEffect, useMemo, etc.)!"',
            success: '🎉 Masti Sir: "Rules of Hooks crystal clear!"',
            mistake: '😅 Masti Sir: "`if (isReady) { useState() }` mat likhna — conditional hooks React ka internal call order tod dete hain! ⚠️"'
          },
          englishDef: 'React Hooks are special functions introduced in React 16.8 that allow functional components to use state, lifecycle features, and context without writing ES6 classes.',
          hinglishExplain: 'Hooks aisi functions hain jo `use` se shuru hoti hain (jaise `useState`, `useEffect`). Ye functional components ko superpowers deti hain jaise data store karna, backend se data laana, aur DOM nodes ko refer karna. Hooks ke 2 basic niyam hain: kabhi if/loops ke andar mat call karo aur hamesha top-level par likho.',
          storyExplain: 'Super Suit Attachments: Iron Man ka suit Functional Component hai. Hooks uske alag-alag modules hain — `useState` uski battery power hai, `useEffect` uska radar sensor hai, `useContext` uska team communication radio hai!',
          funnyExample: {
            scenario: '// Wrong: Hook inside condition\nif (loggedIn) { const [user] = useState(); } // 💥 Crash!\n// Correct: Hook at top level always! 🎉',
            punchline: 'Always call hooks unconditionally at the top level!'
          },
          memoryTrick: '2 Golden Rules of Hooks:\n1. ONLY call Hooks at the TOP LEVEL (Never inside loops, conditions, or nested functions)\n2. ONLY call Hooks from React Functional Components or Custom Hooks',
          visualDiagram: {
            title: 'React Hook Call Order Array',
            nodes: ['Component Call Frame', 'Hook #1: useState(count)', 'Hook #2: useEffect(fetchData)', 'Hook #3: useRef(inputRef)', 'React tracks hooks by their consistent invocation index'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'How React Tracks Hooks Internally:',
            steps: ['React maintains an internal linked list of hook state nodes per component fiber', 'Each hook call advances the pointer to the next hook in the list', 'Calling a hook conditionally desynchronizes the pointer index and corrupts state']
          },
          code: `import React, { useState, useEffect } from 'react';

export default function HookRulesDemo() {
  // ✅ Rule 1 & 2 Followed: Called at the top level of a React functional component
  const [score, setScore] = useState(100);
  const [level, setLevel] = useState('Beginner');

  useEffect(() => {
    if (score >= 200) {
      setLevel('Master');
    }
  }, [score]);

  return (
    <div className="card">
      <h3>Player Level: {level}</h3>
      <p>Score: {score}</p>
      <button onClick={() => setScore(s => s + 50)}>Gain +50 Score</button>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'const [score, setScore] = useState(100);', label: 'Hook #1 registered at fixed top-level position', color: '#3b82f6' },
            { part: 'useEffect(() => ...)', label: 'Hook #2 registered in fixed call sequence', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Calling a hook inside an `if` block or `for` loop',
            '❌ Calling a hook inside a regular helper JavaScript function that is not a custom hook'
          ],
          proTips: [
            '💡 Use the ESLint plugin `eslint-plugin-react-hooks` to automatically catch rules-of-hooks violations in your editor',
            '💡 Custom hooks must always start with the lowercase `use` prefix (e.g. `useFetch`, `useAuth`)'
          ],
          interviewQuestions: [
            'What are the two official Rules of Hooks in React and why do they exist?',
            'How does React manage hook state internally without passing explicit IDs?'
          ],
          miniChallenge: 'Explain why React relies on hook execution order rather than arbitrary string names.',
          quiz: {
            type: 'mcq',
            question: 'Kaunsa hook usage INVALID hai aur error throw karega?',
            options: ['Top level par useState likhna', 'if statement ke andar useEffect call karna', 'Custom hook ke andar useState use karna', 'useEffect mein dependency array pass karna'],
            answer: 'if statement ke andar useEffect call karna',
            explanation: 'Hooks must never be called inside conditional statements (`if`), loops, or nested functions.'
          },
          summary: ['Hooks enable state and lifecycle in functional components', 'Must be called at top level unconditionally', 'Must only be called in React functions/custom hooks'],
          flashcard: { q: 'React Hooks ke 2 Golden Rules kya hain?', a: '1. Sirf top-level par call karein (no if/loops), 2. Sirf React Functional Components ya Custom Hooks mein call karein.' },
          funFact: '🎉 Fun Fact: Sophie Alpert aur Dan Abramov ne React Conf 2018 mein pehli baar Hooks introduce kiye the!',
          challenge: {
            instruction: 'Create a component using useState and useEffect at top level.',
            initialCode: `function MyComponent() {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    console.log("Value:", val);
  }, [val]);
  return <p>{val}</p>;
}`,
            validator: (code) => code.includes('useState') && code.includes('useEffect')
          }
        },
        {
          id: 'react-usestate',
          title: 'React useState Hook (State Management, Updater Functions & Batching)',
          emoji: '💾',
          xpReward: 35,
          badgeName: 'State Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`useState` React ka sabse zyada use hone wala hook hai! Component ki memory hai! Previous state par depend karne wale updates ke liye functional updater `setCount(prev => prev + 1)` use karo! 💡"',
            hint: '💡 Masti Sir: "State update hone par component re-render hota hai aur UI live sync rehti hai!"',
            success: '🎉 Masti Sir: "useState and functional updaters mastered!"',
            mistake: '😅 Masti Sir: "Objects ya Arrays ko direct mutate mat karna — `setUser(prev => ({ ...prev, age: 25 }))` spread operator use karo!"'
          },
          englishDef: 'The `useState` hook declares a state variable in a functional component, returning an array with the current state value and an updater function that triggers re-rendering.',
          hinglishExplain: '`useState` component ka apna memory box hai. Jab hum `setCount(5)` call karte hain, React naya state save karta hai aur component ko re-render karta hai. Agar hume purani state ke basis par calculation karni ho (jaise counter ya shopping cart) toh hum updater function `setCount(prev => prev + 1)` use karte hain.',
          storyExplain: 'Digital Scoreboard: Har run banne par umpire remote ka button dabata hai (`setScore(prev => prev + 1)`). Scoreboard screen par naya number live reflect hota hai bina match roke!',
          funnyExample: {
            scenario: '// Wrong (Direct mutation):\nuser.name = "Aman"; // React doesn\'t know! 😩\n// Correct (Immutable state setter):\nsetUser({ ...user, name: "Aman" }); // Live UI update! 🎉',
            punchline: 'Always update state immutably with the setter function!'
          },
          memoryTrick: 'useState Golden Patterns:\n- Primitive: `const [count, setCount] = useState(0)`\n- Functional Updater: `setCount(prev => prev + 1)`\n- Object update: `setUser(prev => ({ ...prev, role: "Admin" }))`\n- Array update: `setList(prev => [...prev, newItem])`',
          visualDiagram: {
            title: 'useState Update Flow',
            nodes: ['Initial: useState(0)', 'User clicks -> setCount(c => c + 1)', 'React schedules re-render with state = 1', 'Component renders with fresh count value'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Automatic Batching in React 19:',
            steps: ['React batches multiple state updates in event handlers and promises into a single re-render', 'Prevents half-finished UI states and improves rendering performance']
          },
          code: `import React, { useState } from 'react';

export default function CartManager() {
  const [cart, setCart] = useState([
    { id: 1, name: 'React 19 T-Shirt', quantity: 1, price: 599 }
  ]);

  // Immutable quantity updater using functional pattern
  const updateQuantity = (id, delta) => {
    setCart(prevCart =>
      prevCart.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-card">
      <h3>Shopping Cart 🛒</h3>
      {cart.map(item => (
        <div key={item.id} className="cart-row">
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>Qty: {item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, +1)}>+</button>
        </div>
      ))}
      <h4>Total: ₹{totalPrice}</h4>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'setCart(prevCart => prevCart.map(...))', label: 'Functional updater ensuring accurate state even with asynchronous event batching', color: '#3b82f6' },
            { part: 'return { ...item, quantity: newQty }', label: 'Immutable object copy updating only the target item property', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Calling `setCount(count + 1)` 3 times consecutively expecting +3 (all 3 read same stale snapshot; use `setCount(c => c + 1)` instead)',
            '❌ Mutating state arrays in-place with `.push()` or `.splice()`'
          ],
          proTips: [
            '💡 Use the functional updater form `setVal(prev => ...)` whenever new state depends on previous state',
            '💡 Pass a function to `useState(() => expensiveCalculation())` for lazy initial state evaluation'
          ],
          interviewQuestions: [
            'Why does calling `setCount(count + 1)` three times in one event handler only increment count by 1?',
            'What is Automatic Batching in React 18/19?'
          ],
          miniChallenge: 'Create a state-managed Todo list with add and toggle-complete functions.',
          quiz: {
            type: 'mcq',
            question: 'Agar naya state previous state par depend karta hai toh best practice kya hai?',
            options: ['Direct variable edit karna', 'Functional updater syntax `setState(prev => ...)` use karna', 'setTimeout lagana', 'window.location.reload() karna'],
            answer: 'Functional updater syntax `setState(prev => ...)` use karna',
            explanation: 'The functional updater `setState(prev => ...)` guarantees that you are computing against the latest committed state value.'
          },
          summary: ['useState manages local component state', 'Functional updaters prevent stale state bugs', 'State updates must be immutable'],
          flashcard: { q: '`setCount(c => c + 1)` functional updater kyu zaroori hai?', a: 'Kyunki agar multiple updates ek sath hon toh functional updater hamesha latest pending state value use karta hai.' },
          funFact: '🎉 Fun Fact: React 18 se pehle setTimeout aur Promises ke andar Automatic Batching kaam nahi karti thi, par modern React 19 mein har jagah automatic batching chalti hai!',
          challenge: {
            instruction: 'Create a counter state and increment it using functional updater.',
            initialCode: `const [count, setCount] = React.useState(0);
const increment = () => setCount(prev => prev + 1);
console.log(count);`,
            validator: (code) => code.includes('setCount(prev => prev + 1)') || code.includes('useState')
          }
        },
        {
          id: 'react-useeffect',
          title: 'ReactJS useEffect Hook (Side Effects, Dependencies & Cleanups)',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'Effect Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`useEffect` side-effects ka commander hai! API calls, subscriptions, timers, aur DOM events — sab kuch useEffect se handle hota hai! Dependency array `[]` iska control switch hai! 🎛️"',
            hint: '💡 Masti Sir: "Dependency array mein wahi variables daalo jo effect ke andar use ho rahe hain!"',
            success: '🎉 Masti Sir: "useEffect and Dependency Arrays mastered!"',
            mistake: '😅 Masti Sir: "Dependency array bhool jaoge toh har render par effect chalega aur infinite API fetch loop ban jayega! ⚠️"'
          },
          englishDef: 'The `useEffect` hook enables functional components to perform side-effects such as data fetching, subscriptions, timers, and manual DOM mutations after React has rendered the component.',
          hinglishExplain: '`useEffect` se hum aisi cheezein karte hain jo visual rendering se bahar ki hoti hain (Side Effects) — jaise server se API data laana, timer chalana, ya localStorage mein save karna. Iska 2nd argument (Dependency Array `[]`) decide karta hai ki effect kab chalega.',
          storyExplain: 'Post-Delivery Setup: Jab naya TV deliver hota hai (Render), uske baad technician aakar cable wires aur Wi-Fi connect karta hai (useEffect). Jab TV bechte ho toh wires safely disconnect hoti hain (Cleanup).',
          funnyExample: {
            scenario: '// No dependency array:\nuseEffect(() => { fetch("/api"); }); // Fetches 10,000 times a second! 💥\n// With [] dependency:\nuseEffect(() => { fetch("/api"); }, []); // Runs ONCE on mount! 🎉',
            punchline: 'Always provide a proper dependency array to useEffect!'
          },
          memoryTrick: '3 Dependency Array Scenarios:\n1. No array: `useEffect(fn)` -> Runs after EVERY render\n2. Empty array: `useEffect(fn, [])` -> Runs ONCE on mount\n3. With values: `useEffect(fn, [userId, query])` -> Runs on mount AND when any dependency changes',
          visualDiagram: {
            title: 'useEffect Execution Pipeline',
            nodes: ['Component Renders JSX to Screen', 'Browser Paints UI Frame', 'useEffect Callback Runs Asynchronously', 'If deps change -> previous cleanup runs -> new effect runs'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Asynchronous Non-Blocking Execution:',
            steps: ['useEffect does not block the browser from painting the screen', 'Runs asynchronously after paint to ensure high frame rate', 'useLayoutEffect runs synchronously before paint if DOM measurement is needed']
          },
          code: `import React, { useState, useEffect } from 'react';

export default function UserProfileLoader({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false; // Abort flag to avoid race conditions
    setLoading(true);

    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        if (!isCancelled) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!isCancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    // Cleanup function: runs before next effect and on unmount
    return () => {
      isCancelled = true;
    };
  }, [userId]); // Re-runs whenever userId prop changes!

  if (loading) return <p>⏳ Loading User #{userId}...</p>;
  if (error) return <p>❌ Error: {error}</p>;

  return (
    <div className="profile-box">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Company: {user.company?.name}</p>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'useEffect(() => { ... }, [userId])', label: 'Effect re-executes whenever the userId dependency value changes', color: '#3b82f6' },
            { part: 'return () => { isCancelled = true; }', label: 'Cleanup flag preventing state updates if component unmounts mid-request', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Missing dependencies in the dependency array (leads to stale closure bugs)',
            '❌ Making the `useEffect` callback function itself `async` (`useEffect(async () => ...)` is invalid; define async function inside instead)'
          ],
          proTips: [
            '💡 If you need to fetch data with async/await, declare the async function inside the effect and call it immediately',
            '💡 Use AbortController (`controller.abort()`) in the cleanup function to cancel in-flight fetch requests'
          ],
          interviewQuestions: [
            'Why cannot you pass an async function directly to `useEffect`?',
            'How do you prevent race conditions and memory leaks during data fetching in `useEffect`?'
          ],
          miniChallenge: 'Write a useEffect that saves a form draft to `localStorage` whenever `formData` changes.',
          quiz: {
            type: 'mcq',
            question: '`useEffect(fn, [])` empty dependency array ke sath kab execute hota hai?',
            options: ['Har re-render par', 'Sirf ek baar component mount hone ke baad', 'Sirf state delete hone par', 'Kahi nahi'],
            answer: 'Sirf ek baar component mount hone ke baad',
            explanation: 'An empty dependency array `[]` indicates the effect has no dependencies and will run only once when the component initially mounts.'
          },
          summary: ['useEffect handles side-effects after browser paint', 'Dependency array controls re-execution triggers', 'Return cleanup function to release resources'],
          flashcard: { q: '`useEffect` mein async/await use karne ka correct tareeqa kya hai?', a: 'Effect ke andar ek async function banayein aur use call karein (`useEffect(() => { async function get() {...} get(); }, [])`).' },
          funFact: '🎉 Fun Fact: `useEffect` browser paint ke baad chalta hai taaki UI smooth rahe, jabki `useLayoutEffect` DOM paint se pehle synchronously chalta hai!',
          challenge: {
            instruction: 'Write a useEffect with a dependency array containing [id].',
            initialCode: `React.useEffect(() => {
  console.log("ID changed to:", id);
}, [id]);`,
            validator: (code) => code.includes('useEffect') && code.includes('[id]')
          }
        },
        {
          id: 'react-context-ref',
          title: 'React useContext & useRef Hooks (Global State & DOM References)',
          emoji: '🌐',
          xpReward: 35,
          badgeName: 'Context Hero',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`useContext` Prop Drilling ka the end karta hai! Aur `useRef` direct DOM ko focus karne aur mutable values ko bina re-render store karne ke kaam aata hai! 🎯"',
            hint: '💡 Masti Sir: "`useRef` value change hone par component ko re-render NAHI karta!"',
            success: '🎉 Masti Sir: "useContext and useRef mastered!"',
            mistake: '😅 Masti Sir: "Har choti cheez Context mein mat daalo — Context tabhi use karo jab data bohot saare deeply nested components ko chahiye ho (jaise Theme, Auth)!"'
          },
          englishDef: '`useContext` subscribes to a React Context to access global data without prop drilling. `useRef` returns a mutable ref object whose `.current` property persists across renders without causing re-renders.',
          hinglishExplain: '`useContext` se hum global data (jaise user login status ya Dark Theme) poori app mein kahi bhi bina parent-to-child 10 baar props pass kiye direct use kar sakte hain. `useRef` ka use kisi DOM element (jaise input focus) ko pakadne ya aisi value store karne ke liye hota hai jiske badalne par page re-render na ho.',
          storyExplain: 'Wi-Fi Broadcast vs USB Cable: Prop drilling USB cable se ek room se dusre room tak wire kheenchne jaisa hai. Context API central Wi-Fi router hai — koi bhi room bina taar ke direct signal catch kar sakta hai!',
          funnyExample: {
            scenario: '// Prop drilling:\n<App user={u}><Layout user={u}><Navbar user={u}><Avatar user={u} />...\n// With useContext:\nconst { user } = useAuth(); // Instant 1-line access anywhere! 🎉',
            punchline: 'useContext eliminates tedious prop drilling!'
          },
          memoryTrick: 'useRef 2 Main Use Cases:\n1. Direct DOM Access: `inputRef.current.focus()`\n2. Mutable State without Re-render: Storing timers, previous values, render counts',
          visualDiagram: {
            title: 'Context Provider Broadcast',
            nodes: ['AuthContext.Provider value={{ user, login }}', '  -> Deep Child Component 1 (useContext)', '  -> Deep Child Component 2 (useContext)', 'Direct broadcast without touching intermediate props'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Ref Object Lifecycle:',
            steps: ['useRef creates a stable plain object { current: initialValue } in component fiber', 'Modifying ref.current is a synchronous mutation with zero re-rendering overhead', 'Preserved across the entire lifetime of the component']
          },
          code: `import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

// 1. Create Theme Context
const ThemeContext = createContext();

// 2. Custom Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Consumer Component using useContext & useRef
export function SearchBox() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const inputRef = useRef(null); // Reference to DOM input

  useEffect(() => {
    // Auto-focus input when component mounts using useRef!
    inputRef.current.focus();
  }, []);

  return (
    <div className={\`box \${theme}\`}>
      <input ref={inputRef} type="text" placeholder="Type to search..." />
      <button onClick={toggleTheme}>Switch Theme ({theme})</button>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'const ThemeContext = createContext()', label: 'Creates global broadcast channel with Provider and Consumer hooks', color: '#3b82f6' },
            { part: 'const inputRef = useRef(null)', label: 'Creates persistent mutable ref pointer bound to input element', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Trying to use `useRef` value changes to update visible UI (since ref mutation does not trigger re-render, use `useState` for UI state)'
          ],
          proTips: [
            '💡 Create a custom hook `useTheme()` wrapping `useContext(ThemeContext)` for cleaner imports and guard checks',
            '💡 Use `useRef` to store `previousValue` to compare props between renders'
          ],
          interviewQuestions: [
            'What is Prop Drilling and how does React Context API resolve it?',
            'What are the differences between `useState` and `useRef` in terms of mutability and re-rendering?'
          ],
          miniChallenge: 'Create a video player component with play/pause buttons controlling `<video>` via `useRef`.',
          quiz: {
            type: 'mcq',
            question: '`ref.current` ki value update karne par component re-render hota hai ya nahi?',
            options: ['Haan, hamesha re-render hota hai', 'Nahi, re-render NAHI hota (zero re-render overhead)', 'Sirf Chrome browser mein re-render hota hai', 'Page reload ho jata hai'],
            answer: 'Nahi, re-render NAHI hota (zero re-render overhead)',
            explanation: 'Mutating `ref.current` does not trigger a re-render. It is used for mutable state and direct DOM node references.'
          },
          summary: ['useContext provides global state without prop drilling', 'useRef holds mutable values without causing re-renders', 'useRef directly accesses DOM elements'],
          flashcard: { q: '`useRef` aur `useState` mein main difference kya hai?', a: '`useState` update hone par component re-render hota hai, jabki `useRef.current` update hone par component re-render nahi hota.' },
          funFact: '🎉 Fun Fact: React mein har state hook ka internal data structure Fiber node par ek ref object ki tarah hi linked list mein stored hota hai!',
          challenge: {
            instruction: 'Create a ref to focus an input element.',
            initialCode: `const myRef = React.useRef(null);
const focusInput = () => myRef.current?.focus();`,
            validator: (code) => code.includes('useRef') && code.includes('focus()')
          }
        },
        {
          id: 'react-memo-callback',
          title: 'React useMemo & useCallback Hooks (Performance Optimization)',
          emoji: '⚡',
          xpReward: 35,
          badgeName: 'Optimizer Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "`useMemo` calculations ko cache karta hai, aur `useCallback` function definitions ko cache karta hai! Performance optimization ke do super weapons! ⚡"',
            hint: '💡 Masti Sir: "`useMemo` value return karta hai (`const total = useMemo(() => calculate(), [items])`), aur `useCallback` wahi function return karta hai!"',
            success: '🎉 Masti Sir: "useMemo and useCallback mastered!"',
            mistake: '😅 Masti Sir: "Har 1+1 calculation par useMemo mat lagao — memoization ka bhi memory cost hota hai! Sirf heavy calculations par use karo!"'
          },
          englishDef: '`useMemo` caches the result of expensive calculations between renders. `useCallback` caches a function definition between renders to maintain stable reference equality for memoized child components.',
          hinglishExplain: 'Jab component re-render hota hai, uske andar ke saare functions aur heavy calculations dobara execute hote hain. `useMemo` calculation ka result yaad (cache) rakhta hai jab tak dependencies na badlein. `useCallback` function ka memory reference stable rakhta hai taaki `React.memo` wale child components be-wajah re-render na hon.',
          storyExplain: 'Calculator Memory Button (M+): Har baar 50,000 numbers ka total calculate karne ke bajaye calculator memory button daba kar result save kar leta hai (useMemo). Jab tak naya number na add ho, wahi answer turant milta hai.',
          funnyExample: {
            scenario: '// Heavy sorting of 50,000 products:\nconst sorted = useMemo(() => heavySort(products), [products]);\n// Runs heavy sort ONLY when products array changes, not on unrelated clicks! 🎉',
            punchline: 'useMemo saves CPU cycles on expensive computations!'
          },
          memoryTrick: 'useMemo vs useCallback:\n- `useMemo(() => computeValue(a, b), [a, b])` -> Caches RETURNED VALUE\n- `useCallback((data) => handle(data), [deps])` -> Caches FUNCTION REFERENCE\n- Both take a dependency array',
          visualDiagram: {
            title: 'Memoization Decision Matrix',
            nodes: ['Heavy Calculation / Filtering? -> useMemo', 'Function passed to React.memo child? -> useCallback', 'Simple inline math? -> No memo needed (Keep it simple)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Reference Equality in JavaScript:',
            steps: ['In JS, () => {} !== () => {} (different memory pointers)', 'Parent re-render creates fresh function pointers, breaking child React.memo', 'useCallback preserves the exact same function pointer across renders']
          },
          code: `import React, { useState, useMemo, useCallback } from 'react';

// Memoized Child Component
const TodoItem = React.memo(function TodoItem({ todo, onDelete }) {
  console.log("Rendered TodoItem:", todo.text);
  return (
    <li>
      {todo.text} <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
});

export default function PerformanceApp() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Master React Performance', score: 95 },
    { id: 2, text: 'Learn useMemo & useCallback', score: 88 }
  ]);
  const [count, setCount] = useState(0);

  // 1. useMemo: Caches expensive calculation
  const averageScore = useMemo(() => {
    console.log("Calculating Average Score...");
    return todos.reduce((acc, t) => acc + t.score, 0) / todos.length;
  }, [todos]);

  // 2. useCallback: Caches function reference so TodoItem doesn't re-render on count clicks!
  const handleDelete = useCallback((id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <div className="card">
      <h3>Unrelated Counter: {count}</h3>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>

      <h4>Average Score: {averageScore}</h4>

      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'useMemo(() => calculate(), [todos])', label: 'Caches the computed average score, skipping re-calculation when counter increments', color: '#3b82f6' },
            { part: 'useCallback((id) => { ... }, [])', label: 'Maintains stable reference for handleDelete callback passed to memoized TodoItem', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Premature optimization: wrapping every single 2-line function with useCallback',
            '❌ Omitting dependencies from the dependency array leading to stale closures'
          ],
          proTips: [
            '💡 Profile with React DevTools before optimizing to see if the calculation is truly a bottleneck (>5-10ms)',
            '💡 Use `useMemo` for derived filtered/sorted lists in tables and grids'
          ],
          interviewQuestions: [
            'What is the difference between `useMemo` and `useCallback`?',
            'When should you NOT use `useMemo` and `useCallback`?'
          ],
          miniChallenge: 'Filter an array of 5,000 items with `useMemo` based on search term.',
          quiz: {
            type: 'mcq',
            question: '`useCallback(fn, deps)` kya return karta hai?',
            options: ['Function ka computed result', 'Memoized cached function definition itself', 'Promise', 'Boolean'],
            answer: 'Memoized cached function definition itself',
            explanation: '`useCallback` returns a memoized version of the callback function that only changes if one of the dependencies has changed.'
          },
          summary: ['useMemo caches calculated values', 'useCallback caches function references', 'Helps memoized children skip redundant renders'],
          flashcard: { q: '`useMemo` aur `useCallback` mein kya difference hai?', a: '`useMemo` function execute karke result cache karta hai, jabki `useCallback` function ki definition (reference) ko cache karta hai.' },
          funFact: '🎉 Fun Fact: React 19 mein naya **React Compiler** introduce kiya gaya hai jo automatically code analyze karke bina manual useMemo/useCallback likhe memoization kar deta hai!',
          challenge: {
            instruction: 'Use useMemo to cache a multiplied value.',
            initialCode: `const a = 10, b = 20;
const multiplied = React.useMemo(() => a * b, [a, b]);
console.log(multiplied);`,
            validator: (code) => code.includes('useMemo') && code.includes('a * b')
          }
        },
        {
          id: 'react-custom-hooks',
          title: 'Custom Hooks in React (Extracting Reusable State Logic)',
          emoji: '🪄',
          xpReward: 35,
          badgeName: 'Hook Creator',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Custom Hook apna khud ka custom superpower tool banana hai! Jab same stateful logic (API fetch, window size, localStorage) multiple components mein repeat ho rahi ho, toh use Custom Hook bana do! 🪄"',
            hint: '💡 Masti Sir: "Custom Hook ka naam hamesha `use` se shuru hona chahiye — jaise `useLocalStorage`, `useFetch`, `useDebounce`!"',
            success: '🎉 Masti Sir: "Custom Hooks creation mastered!"',
            mistake: '😅 Masti Sir: "Custom Hooks state share nahi karte, logic share karte hain — har component ko apna fresh independent state instance milta hai!"'
          },
          englishDef: 'Custom Hooks are JavaScript functions whose names start with `use` and that can call other React hooks. They enable developers to extract and share reusable stateful logic across multiple components.',
          hinglishExplain: 'Custom Hook ek aisi reusable function hai jisme hum React ke doosre hooks (`useState`, `useEffect`) ko pack karke ek naya function bana lete hain. Jaise `useFetch(url)` ya `useLocalStorage(key, initialVal)`. Isse component ka code saaf rehta hai aur same logic hazaron jagah reuse ho sakti hai.',
          storyExplain: 'Swiss Army Tool Adapter: Bar-bar alag se screwdriver, bottle opener aur knife le jane ke bajaye aap ek compact Multi-Tool (`useMultiTool`) bana lete ho jise koi bhi team member apne pocket mein use kar sakta hai.',
          funnyExample: {
            scenario: '// Component 1:\nconst { data, loading } = useFetch("/api/users");\n// Component 2:\nconst { data, loading } = useFetch("/api/courses");\n// Clean 1-line data fetching across entire app! 🎉',
            punchline: 'Custom hooks eliminate hundreds of duplicate lines of state logic!'
          },
          memoryTrick: 'Custom Hook Guidelines:\n1. Name MUST start with `use` (e.g. `useToggle`, `useAuth`)\n2. Can call any built-in hooks (`useState`, `useEffect`)\n3. Returns values/functions as object `{ data, loading }` or tuple `[val, setVal]`\n4. Each component gets an independent state instance',
          visualDiagram: {
            title: 'Custom Hook Logic Sharing',
            nodes: ['Custom Hook: useWindowDimensions()', '  -> Component A: Header (uses width for responsive menu)', '  -> Component B: Canvas (uses width/height for drawing)', 'Shared logic, independent reactive state'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Custom Hook Execution Model:',
            steps: ['Custom hooks are not separate components; they execute directly within the caller component\'s fiber frame', 'Hooks called inside the custom hook register in the exact order of the caller', 'State is isolated per component instance']
          },
          code: `import React, { useState, useEffect } from 'react';

// 1. Custom Hook: useLocalStorage
function useLocalStorage(key, initialValue) {
  // Read initial state from localStorage or fallback
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Save to localStorage whenever storedValue updates
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// 2. Consuming Custom Hook in Component
export default function ThemeSwitcher() {
  const [theme, setTheme] = useLocalStorage('app-theme', 'dark');

  return (
    <div className={\`box \${theme}\`}>
      <h3>Current Theme: {theme.toUpperCase()} (Saved in LocalStorage!)</h3>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </button>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'function useLocalStorage(key, initialValue)', label: 'Custom Hook encapsulating localStorage persistence and state sync', color: '#3b82f6' },
            { part: 'const [theme, setTheme] = useLocalStorage(...)', label: 'Consumer component uses custom hook just like native useState', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Forgetting the `use` prefix (ESLint will not enforce hook rules and React devtools cannot track it)',
            '❌ Assuming custom hooks share a global singleton state between components (each component gets an isolated instance)'
          ],
          proTips: [
            '💡 Build your own utility hook library: `useDebounce`, `useOnClickOutside`, `useMediaQuery`, `useDarkMode`',
            '💡 Return an object `{ data, loading, error, refetch }` for hooks with 3+ return values'
          ],
          interviewQuestions: [
            'What is a Custom Hook in React and why must its name start with `use`?',
            'Do two components using the same Custom Hook share the same state data?'
          ],
          miniChallenge: 'Write a `useToggle(initialState)` custom hook returning `[value, toggle]`.',
          quiz: {
            type: 'mcq',
            question: 'Agar do alag components ek hi Custom Hook `useCounter()` use karein toh kya unka count state share hoga?',
            options: ['Haan, dono ka count hamesha same rahega', 'Nahi, har component ko apna independent state instance milega', 'Error aayega', 'Pehle wala crash ho jayega'],
            answer: 'Nahi, har component ko apna independent state instance milega',
            explanation: 'Custom Hooks share stateful logic, not state itself. Each component calling the hook receives its own isolated state instance.'
          },
          summary: ['Custom hooks extract and share reusable stateful logic', 'Must start with the `use` prefix', 'Each caller component maintains isolated state'],
          flashcard: { q: 'Custom Hook ka primary purpose kya hota hai?', a: 'Multiple components ke beech stateful logic (jaise API fetch, timers, form handling) ko bina code duplicate kiye share karna.' },
          funFact: '🎉 Fun Fact: Popular React libraries jaise React Router (`useNavigate`, `useParams`) aur TanStack Query (`useQuery`) poori tarah custom hooks ke upar bani hain!',
          challenge: {
            instruction: 'Create a simple useToggle custom hook.',
            initialCode: `function useToggle(initial = false) {
  const [state, setState] = React.useState(initial);
  const toggle = () => setState(prev => !prev);
  return [state, toggle];
}`,
            validator: (code) => code.includes('function useToggle') && code.includes('useState')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 4: ROUTING IN REACT
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Routing in React',
      lessons: [
        {
          id: 'react-router-v6',
          title: 'React Router (Routes, Route, Link, NavLink, useNavigate & useParams)',
          emoji: '🧭',
          xpReward: 35,
          badgeName: 'Router Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Single Page Applications (SPA) mein bina page reload kiye naye pages dikhana **React Router** ka kaam hai! `Link`, `useNavigate`, aur `useParams` se lightning-fast navigation hota hai! 🧭"',
            hint: '💡 Masti Sir: "`<Link to="/courses">` use karo — standard `<a href="...">` lagane par poora page reload ho jata hai!"',
            success: '🎉 Masti Sir: "React Router navigation and dynamic parameters mastered!"',
            mistake: '😅 Masti Sir: "Dynamic route ke liye `:id` lagao (jaise `/courses/:courseId`) aur component ke andar `useParams()` se id extract karo!"'
          },
          englishDef: 'React Router is the standard declarative routing library for React SPAs, enabling client-side navigation between views without full page refreshes using components like `<Routes>`, `<Route>`, `<Link>`, and hooks like `useNavigate()` and `useParams()`.',
          hinglishExplain: 'Traditional websites mein link dabane par poora browser page reload hota hai. React Router se sirf URL change hota hai aur screen par naya component bina page refresh ke instant render ho jata hai. Dynamic routes (jaise `/courses/:id`) se hum single component se hazaron courses ka data display kar sakte hain.',
          storyExplain: 'Express Metro Train: Station A se Station B jane ke liye naya train engine kharidne ki zaroorat nahi — wahi metro train track (URL) change karke turant agle platform par pohonch jati hai!',
          funnyExample: {
            scenario: '<a href="/about">About</a> // Full page white flash reload 😩\n<Link to="/about">About</Link> // Instant sub-millisecond transition! 🎉',
            punchline: 'Client-side routing keeps user experience silky smooth!'
          },
          memoryTrick: 'React Router v6 Arsenal:\n- `<BrowserRouter>`: Wraps the app\n- `<Routes>`: Parent container for routes\n- `<Route path="/about" element={<About />} />`: Route definition\n- `<Link to="...">`: Declarative navigation\n- `<NavLink>`: Adds `.active` CSS class automatically\n- `useNavigate()`: Programmatic redirect\n- `useParams()`: Extracts dynamic `:id` params',
          visualDiagram: {
            title: 'Client-Side Routing Flow',
            nodes: ['User clicks <Link to="/courses/react">', 'URL changes in browser history via pushState', 'React Router matches path="/courses/:courseId"', 'CourseViewer Component mounts with useParams().courseId = "react"'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'HTML5 History API:',
            steps: ['React Router uses window.history.pushState and popState events', 'Updates browser URL bar without triggering HTTP document request to server', 'Renders matched component tree instantly']
          },
          code: `import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, useNavigate } from 'react-router-dom';

// 1. Home Component
function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Home Page 🏠</h2>
      <button onClick={() => navigate('/courses/react-19')}>Go to React Course (useNavigate)</button>
    </div>
  );
}

// 2. Dynamic Route Component with useParams
function CourseDetailPage() {
  const { courseId } = useParams(); // Extracts :courseId from URL!
  return <h2>Viewing Course Details: <strong>{courseId}</strong> 📚</h2>;
}

// 3. Main Router Setup
export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
        <NavLink to="/courses/react" className={({ isActive }) => isActive ? 'nav-active' : ''}>React Course</NavLink>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="*" element={<h2>404 - Page Not Found 🚫</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}`,
          codeBreakdown: [
            { part: '<Route path="/courses/:courseId" element={<CourseDetailPage />} />', label: 'Dynamic segment :courseId matching arbitrary route parameters', color: '#3b82f6' },
            { part: 'const { courseId } = useParams()', label: 'Hook extracting matched URL parameter values inside component', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Using traditional `<a href="...">` causing full page reload and losing app state',
            '❌ Forgetting `<Route path="*" element={<NotFound />} />` to catch 404 routes'
          ],
          proTips: [
            '💡 Use `<NavLink>` in navigation headers to automatically highlight the currently active tab',
            '💡 Use `navigate("/dashboard", { replace: true })` after successful login so users cannot click back to the login page'
          ],
          interviewQuestions: [
            'How does client-side routing in React Router work without reloading the browser page?',
            'What is the difference between `useNavigate()` and `<Link>`?'
          ],
          miniChallenge: 'Create a nested route `/dashboard/settings` and `/dashboard/profile` using React Router `<Outlet />`.',
          quiz: {
            type: 'mcq',
            question: 'Dynamic route `/courses/:id` se `:id` parameter extract karne ke liye kaunsa hook use hota hai?',
            options: ['useRoute()', 'useParams()', 'useLocation()', 'useNavigate()'],
            answer: 'useParams()',
            explanation: '`useParams()` returns an object of key/value pairs of dynamic URL parameters from the current route.'
          },
          summary: ['React Router enables SPAs without full page reloads', 'Link and NavLink provide declarative navigation', 'useParams extracts dynamic URL parameters'],
          flashcard: { q: '`<Link>` aur standard `<a>` tag mein kya difference hai?', a: '`<a>` poora page refresh karta hai jisse state kho jati hai, jabki `<Link>` client-side routing karke bina reload instant component switch karta hai.' },
          funFact: '🎉 Fun Fact: Remix framework aur React Router v6.4+ ek hi team (Michael Jackson & Ryan Florence) ne banaye hain aur ab dono mein same high-performance data loaders use hote hain!',
          challenge: {
            instruction: 'Create a Route for "/about" rendering an About component.',
            initialCode: `<Routes>
  <Route path="/about" element={<About />} />
</Routes>`,
            validator: (code) => code.includes('path="/about"') && code.includes('element=')
          }
        },
        {
          id: 'react-router-types',
          title: 'React JS Types of Routers (BrowserRouter, HashRouter, MemoryRouter)',
          emoji: '🚦',
          xpReward: 30,
          badgeName: 'Routing Specialist',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "React Router sirf ek nahi, alag-alag environments ke liye multiple routers deta hai: Standard web ke liye `BrowserRouter`, bina server support ke liye `HashRouter`, aur testing/mobile ke liye `MemoryRouter`! 🚦"',
            hint: '💡 Masti Sir: "Standard modern web apps mein 95% time `BrowserRouter` use hota hai!"',
            success: '🎉 Masti Sir: "Types of Routers in React mastered!"',
            mistake: '😅 Masti Sir: "GitHub Pages par direct BrowserRouter refresh karne par 404 error aata hai kyunki server SPA redirect support nahi karta — wahan HashRouter ya 404.html redirect fix lagao!"'
          },
          englishDef: 'React Router provides specialized router implementations for different runtime environments: `BrowserRouter` (HTML5 History API for standard servers), `HashRouter` (hash fragment `#` for static hosts), and `MemoryRouter` (in-memory routing for unit testing and React Native).',
          hinglishExplain: '1. `BrowserRouter`: Clean URLs banata hai (`mysite.com/courses`). Iske liye server configuration zaroori hoti hai taaki refresh par 404 na aaye.\n2. `HashRouter`: URL ke aage `#` lagata hai (`mysite.com/#/courses`). Ye bina server configuration ke kisi bhi static host (jaise GitHub Pages) par chal jata hai.\n3. `MemoryRouter`: Browser URL bar ko touch nahi karta, poori routing memory mein rakhta hai (Unit testing aur mobile apps ke liye best).',
          storyExplain: 'Navigation Systems: BrowserRouter Luxury GPS car navigation hai (clean display). HashRouter Offline paper map hai (kahi bhi chal jaye). MemoryRouter Simulator test bench hai (screen par dikhe bina memory mein run hota hai).',
          funnyExample: {
            scenario: '// BrowserRouter: https://codemasti.com/courses/react (Clean & SEO friendly! ✨)\n// HashRouter: https://codemasti.com/#/courses/react (Works on any static Apache/FTP server!)',
            punchline: 'Choose the right router for your hosting environment!'
          },
          memoryTrick: '3 Router Types Quick Match:\n- `BrowserRouter`: Standard Web / Production / Clean URLs / SEO\n- `HashRouter`: Static hosting without server rewrites (GitHub Pages, legacy servers)\n- `MemoryRouter`: Jest/Vitest automated testing, React Native, Electron',
          visualDiagram: {
            title: 'Router Types Comparison',
            nodes: ['BrowserRouter -> /dashboard (HTML5 History pushState)', 'HashRouter -> /#/dashboard (window.location.hash)', 'MemoryRouter -> in-memory array history (No URL Bar)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Server-Side Fallback for BrowserRouter:',
            steps: ['When user refreshes /courses/react, browser sends GET request to server', 'Server must serve index.html (SPA Fallback) rather than searching for /courses/react.html', 'Vite, Vercel, Netlify, and Nginx handle this via rewrite rules']
          },
          code: `import React from 'react';
// Demonstrating the 3 Router implementations in React Router

// 1. Standard Production Web App (BrowserRouter)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function ProductionApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h2>Production Home (Clean URLs)</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

// 2. Static Host Fallback (HashRouter)
import { HashRouter } from 'react-router-dom';

export function StaticHostApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h2>Hash Routing (e.g. /#/about)</h2>} />
      </Routes>
    </HashRouter>
  );
}

// 3. Automated Unit Testing (MemoryRouter)
import { MemoryRouter } from 'react-router-dom';

export function TestableComponent() {
  return (
    <MemoryRouter initialEntries={['/courses/react']}>
      <Routes>
        <Route path="/courses/:id" element={<h2>Testing in Memory</h2>} />
      </Routes>
    </MemoryRouter>
  );
}`,
          codeBreakdown: [
            { part: '<BrowserRouter>', label: 'Recommended router using HTML5 pushState for clean, indexable URLs', color: '#3b82f6' },
            { part: '<MemoryRouter initialEntries={[\'/courses/react\']}>', label: 'Ideal for automated unit tests without a real browser window', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Deploying `BrowserRouter` on static hosting without configuring wildcard rewrites (causes 404 on page reload)'
          ],
          proTips: [
            '💡 Always use `MemoryRouter` when writing unit tests with React Testing Library or Vitest',
            '💡 If deploying on Apache, add an `.htaccess` rewrite rule to redirect all routes to `index.html`'
          ],
          interviewQuestions: [
            'What is the difference between `BrowserRouter` and `HashRouter`?',
            'Why is `MemoryRouter` preferred for unit testing React components?'
          ],
          miniChallenge: 'Write a unit test wrapper using `MemoryRouter` with custom initial history entries.',
          quiz: {
            type: 'mcq',
            question: 'Unit testing (Jest / Vitest) mein components test karne ke liye kaunsa Router use karna best practice hai?',
            options: ['BrowserRouter', 'MemoryRouter', 'HashRouter', 'StaticRouter'],
            answer: 'MemoryRouter',
            explanation: '`MemoryRouter` keeps history in memory without requiring a browser address bar, making it ideal for automated tests and non-browser environments.'
          },
          summary: ['BrowserRouter provides clean SEO-friendly URLs', 'HashRouter uses URL hash for static hosts', 'MemoryRouter is designed for tests and headless environments'],
          flashcard: { q: '`MemoryRouter` kis kaam aata hai?', a: 'Automated unit tests aur non-browser environments mein bina address bar ke routing test karne ke liye.' },
          funFact: '🎉 Fun Fact: Electron desktop apps mein aksar `HashRouter` use hota hai kyunki file system protocol `file://` standard server redirects support nahi karta!',
          challenge: {
            instruction: 'Wrap routes in a MemoryRouter with initialEntries set to ["/test"].',
            initialCode: `import { MemoryRouter, Routes, Route } from 'react-router-dom';
function TestApp() {
  return (
    <MemoryRouter initialEntries={["/test"]}>
      <Routes><Route path="/test" element={<h1>Passed</h1>} /></Routes>
    </MemoryRouter>
  );
}`,
            validator: (code) => code.includes('MemoryRouter') && code.includes('initialEntries')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 5: ADVANCED REACT CONCEPTS
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'Advanced React Concepts',
      lessons: [
        {
          id: 'react-lazy-loading',
          title: 'Lazy Loading in React (React.lazy, Suspense & Fallback UI)',
          emoji: '⏳',
          xpReward: 35,
          badgeName: 'Lazy Loading Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Initial page load par poori 50MB app download karwane ke bajaye user ko sirf wahi code bhejo jo abhi chahiye! `React.lazy()` aur `<Suspense>` se speed 10x badh jati hai! ⚡"',
            hint: '💡 Masti Sir: "`const Chart = React.lazy(() => import(\'./Chart\'))` aur wrap karo `<Suspense fallback={<Loading />}>` mein!"',
            success: '🎉 Masti Sir: "Lazy loading and Suspense mastered!"',
            mistake: '😅 Masti Sir: "Lazy loaded component hamesha default export hona chahiye (`export default MyComp`)!"'
          },
          englishDef: 'Lazy Loading in React defers loading of component code bundles until they are actually needed using `React.lazy()` dynamic imports paired with `<Suspense>` to display a fallback loading state.',
          hinglishExplain: 'Jab website badi ho jati hai, user ko pehle page par poori app ka code download karne ki zaroorat nahi hoti. `React.lazy()` se hum heavy components (jaise Dashboard, Admin panel, PDF viewer) ko alag chunks mein baant dete hain. Jab user us page par jata hai tabhi wo file download hoti hai aur tab tak `<Suspense fallback={<Spinner />}>` sundar loading dikhata hai.',
          storyExplain: 'Video Streaming (YouTube): YouTube poori 2 ghante ki movie ek sath download nahi karta — jaise-jaise aap aage dekhte ho, agla chunk buffer hota hai. Wahi kaam Lazy Loading karti hai!',
          funnyExample: {
            scenario: '// Without lazy load: 5 MB initial bundle -> 8 second blank screen 😩\n// With React.lazy: 200 KB initial bundle -> 0.3s instant interactive load! 🎉',
            punchline: 'Lazy loading slashes initial load times!'
          },
          memoryTrick: 'Lazy Loading Formula:\n1. Dynamic Import: `const Admin = React.lazy(() => import("./Admin"))`\n2. Wrap in Suspense: `<Suspense fallback={<Spinner />}> <Admin /> </Suspense>`\n3. Export: Target file must have `export default`',
          visualDiagram: {
            title: 'Lazy Loading & Suspense Flow',
            nodes: ['User visits /admin route', 'React triggers dynamic chunk import (Admin.chunk.js)', 'Suspense displays fallback={<SkeletonLoader />}', 'Bundle downloads -> Admin component seamlessly renders'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Network Chunk Delivery:',
            steps: ['Build tools split lazy components into separate JS bundle chunks', 'Browser makes an async HTTP GET request only when component is rendered', 'Suspense coordinates transitions without janky UI flickering']
          },
          code: `import React, { Suspense, lazy, useState } from 'react';

// 1. Lazy loading heavy chart component dynamically on-demand
const HeavyAnalyticsChart = lazy(() => import('./components/AnalyticsChart.jsx'));
const AdminSettingsModal = lazy(() => import('./components/AdminSettings.jsx'));

export default function DashboardApp() {
  const [showChart, setShowChart] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <div className="dashboard-container">
      <h2>Performance Dashboard 🚀</h2>
      <button onClick={() => setShowChart(true)}>Load Analytics (Lazy)</button>
      <button onClick={() => setShowAdmin(true)}>Open Admin Settings (Lazy)</button>

      {/* 2. Wrapping lazy components with Suspense fallback UI */}
      {showChart && (
        <Suspense fallback={<div className="loading-skeleton">📊 Downloading & Preparing Charts...</div>}>
          <HeavyAnalyticsChart />
        </Suspense>
      )}

      {showAdmin && (
        <Suspense fallback={<div className="modal-spinner">⚙️ Loading Settings...</div>}>
          <AdminSettingsModal onClose={() => setShowAdmin(false)} />
        </Suspense>
      )}
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'const HeavyAnalyticsChart = lazy(() => import(...))', label: 'Splits component into separate network bundle loaded only when rendered', color: '#3b82f6' },
            { part: '<Suspense fallback={<div className="loading-skeleton">...</div>}>', label: 'Displays responsive loading skeleton while the async JS chunk downloads', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Forgetting `<Suspense>` wrapper around lazy components (crashes React runtime)',
            '❌ Trying to lazy load non-default exported modules without `.then(m => ({ default: m.Named }))` adapter'
          ],
          proTips: [
            '💡 Apply Route-based code splitting: lazy load all top-level page components in your router setup',
            '💡 Use skeleton loading screens as Suspense fallbacks to achieve high perceived performance scores'
          ],
          interviewQuestions: [
            'What is `React.lazy()` and how does `<Suspense>` work with it?',
            'What is Route-based code splitting and what performance metrics does it improve?'
          ],
          miniChallenge: 'Implement route-based lazy loading for Home, Courses, and Profile pages using React Router.',
          quiz: {
            type: 'mcq',
            question: '`React.lazy()` component ko render karte waqt kaunsa wrapper component mandatory hota hai?',
            options: ['<ErrorBoundary>', '<Suspense>', '<Provider>', '<StrictMode>'],
            answer: '<Suspense>',
            explanation: 'Lazy components must be rendered inside a `<Suspense>` component that provides a fallback loading indicator while the bundle downloads.'
          },
          summary: ['React.lazy loads chunks on demand', 'Suspense displays fallback UI during downloads', 'Massively improves initial PageSpeed and Core Web Vitals'],
          flashcard: { q: '`React.lazy` ke sath `<Suspense fallback={...}>` kyu zaroori hota hai?', a: 'Kyunki jab tak code bundle network se download ho raha hota hai, tab tak React fallback UI (jaise spinner ya skeleton) dikhata hai.' },
          funFact: '🎉 Fun Fact: React 19 mein Suspense na sirf code splitting balki server data fetching aur streaming HTML rendering ko bhi coordinate karta hai!',
          challenge: {
            instruction: 'Set up Suspense with a fallback paragraph.',
            initialCode: `<Suspense fallback={<p>Loading...</p>}>
  <LazyComponent />
</Suspense>`,
            validator: (code) => code.includes('<Suspense') && code.includes('fallback=')
          }
        },
        {
          id: 'react-hoc',
          title: 'ReactJS Higher-Order Components (HOC Pattern & Cross-Cutting Concerns)',
          emoji: '🎭',
          xpReward: 35,
          badgeName: 'HOC Architect',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Higher-Order Component (HOC) ek aisi function hai jo ek Component leti hai aur ek upgraded Super Component return karti hai! `withAuth`, `withLogger` jaise patterns se code repeat nahi hota! 🎩"',
            hint: '💡 Masti Sir: "HOC syntax: `const EnhancedComponent = higherOrderComponent(WrappedComponent);`!"',
            success: '🎉 Masti Sir: "Higher-Order Component pattern mastered!"',
            mistake: '😅 Masti Sir: "HOC ko render method ya component body ke andar declare mat karo — hamesha file level par declare karo!"'
          },
          englishDef: 'A Higher-Order Component (HOC) is an advanced pattern in React where a function takes a component as an argument and returns a new enhanced component, enabling code reuse for cross-cutting concerns (authentication, analytics, logging).',
          hinglishExplain: 'HOC ek aisi function hoti hai jisme hum ek normal component pass karte hain, aur wo function us component ko nayi powers (jaise authentication check, loading state, ya analytics tracking) dekar ek naya component return kar deti hai. Convention ke hisab se HOC ka naam `with` se shuru hota hai (jaise `withAuth`).',
          storyExplain: 'Iron Man Suit Armor (Upgrade Station): Tony Stark (Normal Component) suit machine (HOC) ke andar jata hai, machine usko weapons aur flying capabilities deti hai aur "Iron Man" (Enhanced Component) banke bahar nikalta hai!',
          funnyExample: {
            scenario: 'const DashboardWithAuth = withAuth(Dashboard);\n// Automatically checks login token -> if logged in, renders Dashboard; else redirects! 🎉',
            punchline: 'HOCs wrap components with reusable superpowers!'
          },
          memoryTrick: 'HOC Formula:\n- Definition: `function withFeature(WrappedComponent) { return function Enhanced(props) { ... return <WrappedComponent {...props} />; }; }`\n- Usage: `export default withAuth(UserProfile);`',
          visualDiagram: {
            title: 'Higher-Order Component Wrapper',
            nodes: ['Base Component: ProfilePage', 'HOC Wrapper: withAuth(ProfilePage)', 'Checks Authentication / Loading State', 'Returns ProtectedProfile Component'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Prop Forwarding in HOC:',
            steps: ['HOC intercepts incoming props', 'Injects new helper props or executes conditional render checks', 'Passes through all other props using `{...props}` to preserve component interface']
          },
          code: `import React from 'react';

// 1. HIGHER-ORDER COMPONENT: withAuthentication
function withAuthentication(WrappedComponent) {
  return function EnhancedAuthComponent(props) {
    const isAuthenticated = Boolean(localStorage.getItem('auth_token'));

    if (!isAuthenticated) {
      return (
        <div className="auth-fallback-card">
          <h3>🔒 Access Restricted</h3>
          <p>Please log in to view this protected dashboard.</p>
        </div>
      );
    }

    // Forwarding all props to original wrapped component with extra userRole prop!
    return <WrappedComponent {...props} userRole="Admin" />;
  };
}

// 2. Base Component
function SecretAdminPanel({ userRole }) {
  return (
    <div className="admin-panel">
      <h2>Welcome to Master Admin Panel 🛠️</h2>
      <p>Permission Level: {userRole}</p>
    </div>
  );
}

// 3. Exporting Enhanced Component
export default withAuthentication(SecretAdminPanel);`,
          codeBreakdown: [
            { part: 'function withAuthentication(WrappedComponent)', label: 'HOC function receiving base component as argument', color: '#3b82f6' },
            { part: 'return <WrappedComponent {...props} userRole="Admin" />', label: 'Renders wrapped component with forwarded props and injected capabilities', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Creating HOCs inside the render method of another component (causes remounting on every render)',
            '❌ Forgetting to forward props `{...props}` down to the wrapped component'
          ],
          proTips: [
            '💡 Set `EnhancedComponent.displayName = \`withAuth(\${WrappedComponent.displayName || WrappedComponent.name})\`` for clear React DevTools debugging',
            '💡 In modern React, Custom Hooks are often preferred for sharing logic, but HOCs remain excellent for route protection and layout wrappers'
          ],
          interviewQuestions: [
            'What is a Higher-Order Component (HOC) and what are common real-world use cases?',
            'How does the HOC pattern compare with Custom Hooks for logic sharing?'
          ],
          miniChallenge: 'Write a `withLoading` HOC that displays a spinner if `props.isLoading` is true.',
          quiz: {
            type: 'mcq',
            question: 'Higher-Order Component (HOC) kya return karta hai?',
            options: ['HTML string', 'Ek naya enhanced React Component', 'DOM Node', 'Void'],
            answer: 'Ek naya enhanced React Component',
            explanation: 'An HOC is a function that accepts a component as an argument and returns a new, enhanced component.'
          },
          summary: ['HOCs take a component and return an enhanced component', 'Common for auth, logging, and conditional styling', 'Always forward props with {...props}'],
          flashcard: { q: 'HOC naming convention kya hoti hai?', a: 'HOC functions ka naam hamesha `with` prefix se shuru hota hai (jaise `withAuth`, `withRouter`, `withTheme`).' },
          funFact: '🎉 Fun Fact: Redux ka mashhoor `connect()` function aur React Router ka `withRouter()` HOC pattern ke sabse famous real-world examples hain!',
          challenge: {
            instruction: 'Write an HOC withLogger that logs before rendering the component.',
            initialCode: `function withLogger(Comp) {
  return function(props) {
    console.log("Rendering:", Comp.name);
    return <Comp {...props} />;
  };
}`,
            validator: (code) => code.includes('function withLogger') && code.includes('<Comp {...props} />')
          }
        },
        {
          id: 'react-code-splitting',
          title: 'Code Splitting in React (Dynamic Imports, Webpack/Vite Bundle Optimization)',
          emoji: '📦',
          xpReward: 35,
          badgeName: 'Bundle Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Code Splitting website speed ka brahmastra hai! Poori app ko ek massive monolithic JS file banane ke bajaye chhote-chhote smart packages mein split karo! 📦"',
            hint: '💡 Masti Sir: "Dynamic `import(\'./module\')` Promise return karta hai aur build tools ko code split karne ka signal deta hai!"',
            success: '🎉 Masti Sir: "Code Splitting and bundle optimization mastered!"',
            mistake: '😅 Masti Sir: "Sabhi 2-line helper files ko alag mat split karna — network request overhead badh jayega! Heavy vendor libraries aur routes ko split karo!"'
          },
          englishDef: 'Code Splitting is a technique where build bundlers (Vite/Rollup/Webpack) split the JavaScript bundle into smaller chunks loaded on demand or in parallel, dramatically decreasing Initial Page Load time.',
          hinglishExplain: 'Bina code splitting ke, aapki website ki saari JavaScript ek hi badi `bundle.js` file ban jati hai jise download hone mein time lagta hai. Code splitting se hum code ko alag-alag tukdo (chunks) mein baant dete hain — jaise vendor libraries (React, Lodash), route pages, aur heavy widgets. User ko sirf wahi chunk milta hai jis page par wo khada hai.',
          storyExplain: 'Encyclopedia Bookshelf: 30 volumes ka poora set ek sath carry karne ke bajaye (Monolithic bundle), jab aapko "Letter M" padhna ho toh aap sirf Volume M uthate ho (Chunk on demand)!',
          funnyExample: {
            scenario: '// Single Bundle: 3.2 MB JS -> Slow 3G takes 15 seconds to load 🐢\n// Code Splitting: 120 KB main chunk + On-demand chunks -> 0.4s First Contentful Paint! ⚡',
            punchline: 'Code splitting turns sluggish apps into high-speed rockets!'
          },
          memoryTrick: '3 Levels of Code Splitting:\n1. Route-Level (Split at each page route via React.lazy)\n2. Component-Level (Split heavy modals, charts, rich text editors)\n3. Vendor Splitting (Separate React / third-party libraries into long-term cached chunks)',
          visualDiagram: {
            title: 'Bundle Splitting Visualization',
            nodes: ['Monolithic: index.js (3.5MB)', '--- SPLIT VIA VITE / ROLLUP ---', 'index.js (150KB - Main shell)', 'vendor-react.js (140KB - Cached 1 yr)', 'page-courses.js (40KB - On demand)', 'page-admin.js (80KB - On demand)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Vite & Rollup Output Splitting:',
            steps: ['Dynamic imports import("./module.js") create split points', 'Rollup outputs named chunks in dist/assets/', 'Browsers download chunks concurrently via HTTP/2 multiplexing']
          },
          code: `// vite.config.js - High Performance Code Splitting Configuration
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Splitting heavy vendor dependencies into separate long-term cached chunks
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react']
        }
      }
    }
  }
});`,
          codeBreakdown: [
            { part: 'manualChunks: { "react-vendor": [...] }', label: 'Separates foundational framework libraries into an independently cached browser chunk', color: '#3b82f6' }
          ],
          commonMistakes: [
            '❌ Creating hundreds of tiny 1KB chunks resulting in excessive HTTP request roundtrips'
          ],
          proTips: [
            '💡 Check your production chunk sizes using `npm run build` or visualizer tools like `rollup-plugin-visualizer`',
            '💡 Always split at the route boundary first — it delivers 80% of the performance gains with zero complexity'
          ],
          interviewQuestions: [
            'What is Code Splitting and what problem does it solve in modern Single Page Applications?',
            'How do dynamic imports (`import()`) work under the hood with bundlers?'
          ],
          miniChallenge: 'Configure manual chunking in Vite for third-party charting or animation libraries.',
          quiz: {
            type: 'mcq',
            question: 'Code splitting se web performance ka kaunsa Core Web Vital metric sabse zyada improve hota hai?',
            options: ['FCP (First Contentful Paint) & LCP (Largest Contentful Paint)', 'CSS color rendering', 'HTML DOCTYPE check', 'DNS lookup'],
            answer: 'FCP (First Contentful Paint) & LCP (Largest Contentful Paint)',
            explanation: 'By decreasing initial bundle size, browsers parse and execute JavaScript faster, dramatically speeding up First Contentful Paint (FCP) and Largest Contentful Paint (LCP).'
          },
          summary: ['Code splitting breaks bundles into on-demand chunks', 'Dynamic imports trigger automatic chunking', 'Greatly reduces initial load times and bandwidth'],
          flashcard: { q: 'Dynamic import `import("./path")` kya return karta hai?', a: 'Ek Promise jo requested module ke export object ke sath resolve hota hai.' },
          funFact: '🎉 Fun Fact: Modern browsers HTTP/2 protocol ke zariye 100 se zyada split chunks ko ek single TCP connection par parallel download kar sakte hain!',
          challenge: {
            instruction: 'Write a dynamic import statement inside a function.',
            initialCode: `async function loadMathModule() {
  const math = await import('./math.js');
  return math.add(5, 10);
}`,
            validator: (code) => code.includes('import(') && code.includes('await')
          }
        },
        {
          id: 'react-error-boundaries-portals',
          title: 'Error Boundaries & Portals in React (createPortal & componentDidCatch)',
          emoji: '🛡️',
          xpReward: 35,
          badgeName: 'Resilience Pro',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Agar ek card crash ho jaye toh poori website white screen nahi honi chahiye! `ErrorBoundary` crash ko pakad leta hai! Aur `createPortal` Modals ko parent CSS se aazad karta hai! 🛡️"',
            hint: '💡 Masti Sir: "`createPortal(child, document.body)` se Modal dialog DOM tree ke root par render hota hai bina `z-index` ya `overflow: hidden` issues ke!"',
            success: '🎉 Masti Sir: "Error Boundaries and React Portals mastered!"',
            mistake: '😅 Masti Sir: "Error Boundary asynchronous errors (jaise setTimeout ya fetch) nahi pakadti — wo sirf React rendering phase ke errors pakadti hai!"'
          },
          englishDef: 'Error Boundaries are class components that catch JavaScript errors anywhere in their child component tree, log them, and display a fallback UI instead of crashing the app. React Portals (`ReactDOM.createPortal`) render children into a different DOM node outside the parent hierarchy.',
          hinglishExplain: '1. Error Boundary: Ek aisa safety shield component hai jo agar kisi child component mein runtime error aaye toh poori screen blank hone ke bajaye ek clean "Something went wrong" message dikhata hai.\n2. React Portal (`createPortal`): Modals, Tooltips, ya Dropdowns ko unke parent element ke `overflow: hidden` ya `z-index` bugs se aazad karke seedhe `document.body` par render karta hai.',
          storyExplain: 'Ship Bulkhead & Magic Teleporter: Ship mein pani ghuse toh poora jahaz doobne ke bajaye sirf wo ek cabin lock ho jata hai (Error Boundary). Modal ko parent room se seedhe terrace par teleport karna (Portal).',
          funnyExample: {
            scenario: '// Without Error Boundary: 1 broken comment -> Entire app vanishes into white screen of death 😱\n// With Error Boundary: "Failed to load comment [Retry]" while rest of app works perfectly! 🎉',
            punchline: 'Error boundaries prevent cascading whole-app crashes!'
          },
          memoryTrick: 'Error Boundary + Portal Combo:\n- Error Boundary: Class component with `static getDerivedStateFromError` and `componentDidCatch`\n- Portal: `ReactDOM.createPortal(JSX, document.body)` for Modals / Tooltips',
          visualDiagram: {
            title: 'Portal DOM Placement',
            nodes: ['React Component Tree: App -> Feed -> PostCard -> CommentModal', 'Real DOM Tree Placement:', '  -> div#root (Standard App)', '  -> div#modal-root or document.body (Portal renders HERE!)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Portal Event Bubbling Magic:',
            steps: ['Even though a Portal is rendered in a different physical DOM location (e.g. document.body)', 'Events fired inside the Portal still bubble up according to the React Component Tree hierarchy', 'Parent onClick handlers still capture portal clicks seamlessly!']
          },
          code: `import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';

// 1. ERROR BOUNDARY CLASS COMPONENT
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h3>⚠️ Component Crashed Gracefully</h3>
          <p>{this.state.errorMsg}</p>
          <button onClick={() => this.setState({ hasError: false })}>Try Again 🔄</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// 2. MODAL WITH REACT PORTAL
export function ModalPortal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Teleports modal directly into document.body!
  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="btn-close">Close ❌</button>
      </div>
    </div>,
    document.body
  );
}`,
          codeBreakdown: [
            { part: 'static getDerivedStateFromError(error)', label: 'Lifecycle method updating state to render fallback UI on error', color: '#3b82f6' },
            { part: 'ReactDOM.createPortal(..., document.body)', label: 'Renders child subtree into document.body while preserving React event bubbling', color: '#10b981' }
          ],
          commonMistakes: [
            '❌ Trying to write an Error Boundary as a functional component (React currently requires class component lifecycle methods for error boundaries)',
            '❌ Expecting Error Boundaries to catch errors inside `setTimeout` or asynchronous `fetch` calls (use try-catch for async code)'
          ],
          proTips: [
            '💡 Wrap individual widgets (like Widgets or Comments) with separate Error Boundaries so a single component crash doesn\'t bring down the main page',
            '💡 Always use Portals for Modal dialogs to avoid tricky `z-index` and `overflow: hidden` parent clipping issues'
          ],
          interviewQuestions: [
            'What is an Error Boundary and what types of errors can it NOT catch?',
            'What is `ReactDOM.createPortal` and how does event bubbling work through portals?'
          ],
          miniChallenge: 'Create a reusable Modal dialog with `createPortal` and verify backdrop click closing.',
          quiz: {
            type: 'mcq',
            question: 'Modal dialog ko parent component ke `overflow: hidden` CSS issue se bachane ke liye kya use karte hain?',
            options: ['React.memo', 'ReactDOM.createPortal', 'useRef', 'useEffect'],
            answer: 'ReactDOM.createPortal',
            explanation: '`ReactDOM.createPortal` renders the modal DOM node into `document.body` or an independent container, bypassing parent CSS clipping.'
          },
          summary: ['Error Boundaries catch rendering errors and display fallbacks', 'Portals render children into outside DOM nodes like document.body', 'Events bubble up through the React component tree even across portals'],
          flashcard: { q: 'Error Boundary kin 4 cheezon ke errors NAHI pakad sakta?', a: '1. Event Handlers, 2. Asynchronous code (setTimeout/fetch), 3. Server Side Rendering, 4. Khud Error Boundary ke andar ke errors.' },
          funFact: '🎉 Fun Fact: Portal ke andar click karne par event React tree ke mutabiq parent par bubble hota hai — chahe DOM mein wo 1000 lines door `document.body` par ho!',
          challenge: {
            instruction: 'Use ReactDOM.createPortal to render a div into document.body.',
            initialCode: `function FloatingBadge() {
  return ReactDOM.createPortal(
    <div className="floating">Live Alert</div>,
    document.body
  );
}`,
            validator: (code) => code.includes('createPortal') && code.includes('document.body')
          }
        }
      ]
    },

    // ═══════════════════════════════════════════════════════
    // CHAPTER 6: REACT PROJECTS (6 Awesome Interactive Modern Projects)
    // ═══════════════════════════════════════════════════════
    {
      chapterTitle: 'React Projects',
      lessons: [
        {
          id: 'react-project-devhub',
          title: 'Project 1: DevHub - Interactive Developer Portfolio & Skill Matrix Builder',
          emoji: '💼',
          xpReward: 50,
          badgeName: 'Portfolio Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Pehla project ek shandar Interactive Developer Portfolio hai jisme dynamic project showcase, filterable skill matrix, aur live theme switcher hoga! 💼"',
            hint: '💡 Masti Sir: "State mein user profile aur projects array rakho, aur category tabs se filter karo!"',
            success: '🎉 Masti Sir: "DevHub Portfolio Project Completed!"',
            mistake: '😅 Masti Sir: "Responsive grid layout check karna mat bhoolna!"'
          },
          englishDef: 'Build a production-ready Developer Portfolio with interactive skill tags, category filtering (Frontend, Fullstack, Mobile), project modal previews, and light/dark theme persistence.',
          hinglishExplain: 'Is project mein hum ek dynamic Developer Portfolio banayenge jisme projects filter honge, interactive skill badges honge, resume download button hoga, aur theme state localStorage mein persist hogi.',
          storyExplain: 'Digital Resume Showcase: Jab HR ya tech lead aapka portfolio dekhe, wo 1 click mein React projects filter karein aur live demo modal khol kar inspect karein.',
          funnyExample: {
            scenario: 'Static PDF resume vs Interactive React Portfolio with live demos -> 10x higher recruiter response rate! 🚀',
            punchline: 'Interactive portfolios prove your React mastery instantly!'
          },
          memoryTrick: 'DevHub Features:\n- Category Tabs Filter (All, Frontend, Fullstack, Mobile)\n- Skill Matrix with proficiency levels\n- Light/Dark theme persistence\n- Interactive Project Modal preview',
          visualDiagram: {
            title: 'DevHub Project Architecture',
            nodes: ['Header (Bio, Avatar, Social Links, Theme Toggle)', 'Filter Bar (All / React / Node / Python)', 'Project Grid (Dynamic mapping with keys)', 'Project Modal (Portal preview)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Project Tech Stack:',
            steps: ['useState for category filter and active modal', 'useLocalStorage custom hook for theme persistence', 'CSS Grid for responsive card layouts']
          },
          code: `import React, { useState } from 'react';

const PORTFOLIO_DATA = [
  { id: 'p1', title: 'CodeMasti Learning Platform', category: 'Frontend', tech: ['React 19', 'Vite', 'CSS'], stars: 120 },
  { id: 'p2', title: 'CryptoTrack Market Live', category: 'Fullstack', tech: ['React', 'Node.js', 'WebSockets'], stars: 85 },
  { id: 'p3', title: 'CineVerse Movie Streamer', category: 'Frontend', tech: ['React', 'TMDB API', 'Tailwind'], stars: 95 },
  { id: 'p4', title: 'TaskMaster Kanban Board', category: 'Fullstack', tech: ['React', 'PostgreSQL', 'Express'], stars: 140 }
];

export default function DevHubPortfolio() {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filtered = filter === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.category === filter);

  return (
    <div className="portfolio-container">
      <header className="hero-banner">
        <h1>Vikram Sharma 🚀</h1>
        <p>Fullstack React & Node.js Developer • 25+ Completed Projects</p>
      </header>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {['All', 'Frontend', 'Fullstack'].map(cat => (
          <button
            key={cat}
            className={filter === cat ? 'tab-active' : 'tab-btn'}
            onClick={() => setFilter(cat)}
          >
            {cat} Projects
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filtered.map(proj => (
          <div key={proj.id} className="project-card" onClick={() => setActiveProject(proj)}>
            <h3>{proj.title}</h3>
            <span className="cat-pill">{proj.category}</span>
            <div className="tags-row">{proj.tech.map(t => <span key={t} className="tag">{t}</span>)}</div>
            <p>⭐ {proj.stars} GitHub Stars</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'const filtered = filter === "All" ? ... : ...', label: 'Dynamic category filtering using JavaScript array filter', color: '#3b82f6' }
          ],
          commonMistakes: ['❌ Mutating original portfolio array directly during filtering'],
          proTips: ['💡 Add live GitHub API fetch to dynamically display real-time repository stars and commit activity'],
          interviewQuestions: ['How do you implement client-side category filtering without re-fetching from API?'],
          miniChallenge: 'Add a search bar input that filters projects by title and technology tags simultaneously.',
          quiz: {
            type: 'mcq',
            question: 'Category filter tab par click karne par state update se kya hota hai?',
            options: ['Page refresh hota hai', 'filter state update hoti hai aur filtered array re-calculate hokar UI re-render hoti hai', 'Server restart hota hai', 'CSS file delete hoti hai'],
            answer: 'filter state update hoti hai aur filtered array re-calculate hokar UI re-render hoti hai',
            explanation: 'Updating state schedules a clean React re-render, dynamically recalculating the filtered project array.'
          },
          summary: ['Interactive Developer Portfolio with dynamic filters', 'Responsive card grids and modal dialogs', 'Clean component composition'],
          flashcard: { q: 'DevHub project mein dynamic filtering kaise implement hui?', a: '`filter` state ke basis par `PORTFOLIO_DATA.filter()` chala kar naya array map kiya gaya.' },
          funFact: '🎉 Fun Fact: Top tech companies ke recruiters portfolio mein sabse pehle live interactive demos aur clean component code structure check karte hain!',
          challenge: {
            instruction: 'Filter projects based on category.',
            initialCode: `const list = [{ name: "A", cat: "Web" }, { name: "B", cat: "App" }];
const filtered = list.filter(item => item.cat === "Web");
console.log(filtered.length);`,
            validator: (code) => code.includes('.filter')
          }
        },
        {
          id: 'react-project-cryptotrack',
          title: 'Project 2: CryptoTrack Pro - Real-Time Market Watcher & Live Charts',
          emoji: '📈',
          xpReward: 50,
          badgeName: 'Crypto Trader',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Doosra project ek Real-Time Crypto & Stock Market Watcher hai! Live API polling, price change indicators, search, aur watchlist bookmarking! 💰"',
            hint: '💡 Masti Sir: "Price positive hone par Green color aur negative hone par Red color class lagao!"',
            success: '🎉 Masti Sir: "CryptoTrack Pro Project Completed!"',
            mistake: '😅 Masti Sir: "Live interval data fetch mein cleanup return karna mat bhoolna!"'
          },
          englishDef: 'Build a real-time cryptocurrency and market tracker featuring live price updates, 24h gain/loss color indicators, search filtering, and localStorage watchlists.',
          hinglishExplain: 'CryptoTrack Pro mein hum live crypto coins (Bitcoin, Ethereum, Solana) ki prices track karenge. Search filter, favorite watchlist, sorting by market cap, aur live refresh interval add karenge.',
          storyExplain: 'Trading Floor Terminal: Wall Street traders ke samne live blinking green/red prices aati hain — wahi high-speed interactive dashboard hum React mein banayenge.',
          funnyExample: {
            scenario: 'Bitcoin jumps +5% -> Price badge instantly glows vibrant emerald green! 🚀',
            punchline: 'Dynamic styling makes real-time data pop!'
          },
          memoryTrick: 'CryptoTrack Architecture:\n- State: `coins`, `search`, `favorites`\n- useEffect: Poll API on interval with cleanup\n- Computed: Sorted by Market Cap / 24h Change\n- Watchlist toggle: Save array in localStorage',
          visualDiagram: {
            title: 'CryptoTrack Architecture',
            nodes: ['Crypto API Endpoint', 'useEffect Polling (5s interval)', 'Coins State with 24h % change', 'CryptoTable View (Green/Red pills, Watchlist star)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Real-Time State Mechanics:',
            steps: ['useEffect fetches fresh prices and compares with previous price in state', 'Applies flash animation class on changed price cells', 'Cleans up interval on component unmount']
          },
          code: `import React, { useState, useEffect } from 'react';

const MOCK_CRYPTO = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 92450, change24h: 3.45, cap: '1.8T' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 3420, change24h: -1.20, cap: '410B' },
  { id: 'sol', name: 'Solana', symbol: 'SOL', price: 188, change24h: 8.75, cap: '88B' },
  { id: 'ada', name: 'Cardano', symbol: 'ADA', price: 0.72, change24h: -0.45, cap: '25B' }
];

export default function CryptoTrackPro() {
  const [coins, setCoins] = useState(MOCK_CRYPTO);
  const [search, setSearch] = useState('');
  const [watchlist, setWatchlist] = useState(['btc', 'sol']);

  const toggleWatchlist = (id) => {
    setWatchlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredCoins = coins.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="crypto-dashboard">
      <h2>CryptoTrack Pro Live 📈</h2>
      <input
        type="text"
        placeholder="Search coin (BTC, Ethereum...)"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="crypto-search"
      />

      <div className="crypto-table">
        {filteredCoins.map(coin => {
          const isPositive = coin.change24h >= 0;
          const isStarred = watchlist.includes(coin.id);

          return (
            <div key={coin.id} className="coin-row">
              <button onClick={() => toggleWatchlist(coin.id)} className="star-btn">
                {isStarred ? '⭐' : '☆'}
              </button>
              <span className="coin-name">{coin.name} ({coin.symbol})</span>
              <span className="coin-price">$\${coin.price.toLocaleString()}</span>
              <span className={\`coin-change \${isPositive ? 'positive' : 'negative'}\`}>
                {isPositive ? '+' : ''}{coin.change24h}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'const isPositive = coin.change24h >= 0', label: 'Determines dynamic styling class for green/red profit/loss indicator', color: '#3b82f6' }
          ],
          commonMistakes: ['❌ Forgetting to use `.toLocaleString()` for large currency values'],
          proTips: ['💡 Connect to free CoinGecko or Binance public WebSocket for genuine live ticker streaming without polling limits'],
          interviewQuestions: ['How do you manage real-time WebSocket data streams efficiently in React state?'],
          miniChallenge: 'Add a Sort By 24h Gainers/Losers toggle button to the crypto list.',
          quiz: {
            type: 'mcq',
            question: 'Watchlist toggle karte waqt existing item ko remove karne ke liye kaunsa method use hota hai?',
            options: ['prev.filter(item => item !== id)', 'prev.pop()', 'prev.delete()', 'prev.clear()'],
            answer: 'prev.filter(item => item !== id)',
            explanation: '`prev.filter(item => item !== id)` creates an immutable copy excluding the unstarred item ID.'
          },
          summary: ['Real-time crypto and stock price dashboard', 'Watchlist bookmarking and search filters', 'Dynamic color-coded gain/loss indicators'],
          flashcard: { q: 'CryptoTrack mein Watchlist state kaise toggle hoti hai?', a: 'Agar ID already array mein hai toh `.filter()` se remove karte hain, warna spread `[...prev, id]` se add karte hain.' },
          funFact: '🎉 Fun Fact: Real-time trading dashboards mein React 19 ka concurrent rendering high-frequency updates ke waqt UI thread ko smooth rakhta hai!',
          challenge: {
            instruction: 'Check if change is positive and return formatted percentage.',
            initialCode: `function formatChange(val) {
  return (val >= 0 ? "+" : "") + val + "%";
}
console.log(formatChange(4.5)); // +4.5%`,
            validator: (code) => code.includes('val >= 0')
          }
        },
        {
          id: 'react-project-cineverse',
          title: 'Project 3: CineVerse - Movie & Anime Streaming Discovery App',
          emoji: '🎬',
          xpReward: 50,
          badgeName: 'Cinephile',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Teesra project CineVerse hai — Netflix & Crunchyroll jaisa Movie & Anime streaming discovery app! Search, genre filtering, trailer modal, aur Watchlist! 🍿"',
            hint: '💡 Masti Sir: "Genres filter ke liye active genre state banao aur movies array ko match karo!"',
            success: '🎉 Masti Sir: "CineVerse Discovery Project Completed!"',
            mistake: '😅 Masti Sir: "Image posters ke liye fallback placeholder image zaroor lagao!"'
          },
          englishDef: 'Build a rich Movie & Anime streaming discovery app with genre pills (Action, Sci-Fi, Drama), search debounce, rating filters, trailer modal popups, and bookmarking.',
          hinglishExplain: 'CineVerse mein hum ek modern streaming discovery platform banayenge jisme trending movies, anime sections, genre filtering, star ratings, aur detailed movie preview modals honge.',
          storyExplain: 'Friday Night Movie Picker: Doston ke sath baith kar movie chunte waqt "Action" filter lagana, 8+ IMDb rating chuna, aur 1 click mein trailer dekhna!',
          funnyExample: {
            scenario: 'User searches "Interstellar" -> Poster, 8.7 Rating, Sci-Fi tags and Trailer pop up in 200ms! 🎬',
            punchline: 'Rich media discovery apps delight users!'
          },
          memoryTrick: 'CineVerse Core Features:\n- Genre Pills (All, Sci-Fi, Action, Anime, Drama)\n- Search Bar with live filter\n- Rating badges (IMDb score)\n- Bookmark to My List with state persistence',
          visualDiagram: {
            title: 'CineVerse Component Layout',
            nodes: ['Hero Featured Trailer Banner', 'Genre Filter Chips (Sci-Fi, Action, Anime)', 'Movie Poster Card Grid (Rating, Year, Bookmark)', 'Movie Details Modal (Cast, Synopsis, Trailer)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Image Lazy Loading:',
            steps: ['Posters use native loading="lazy" attribute', 'Browser only downloads image assets as the user scrolls down the grid', 'Saves bandwidth and accelerates First Contentful Paint']
          },
          code: `import React, { useState } from 'react';

const MOVIES = [
  { id: 'm1', title: 'Interstellar', genre: 'Sci-Fi', rating: 8.7, year: 2014, poster: '🌌' },
  { id: 'm2', title: 'Attack on Titan', genre: 'Anime', rating: 9.1, year: 2023, poster: '⚔️' },
  { id: 'm3', title: 'The Dark Knight', genre: 'Action', rating: 9.0, year: 2008, poster: '🦇' },
  { id: 'm4', title: 'Spirited Away', genre: 'Anime', rating: 8.6, year: 2001, poster: '🐉' },
  { id: 'm5', title: 'Oppenheimer', genre: 'Drama', rating: 8.9, year: 2023, poster: '💥' }
];

export default function CineVerseApp() {
  const [genre, setGenre] = useState('All');
  const [watchlist, setWatchlist] = useState([]);

  const filteredMovies = genre === 'All'
    ? MOVIES
    : MOVIES.filter(m => m.genre === genre);

  return (
    <div className="cineverse-app">
      <h2>CineVerse Streaming Discovery 🎬</h2>

      {/* Genre Pills */}
      <div className="genre-pills">
        {['All', 'Anime', 'Sci-Fi', 'Action', 'Drama'].map(g => (
          <button
            key={g}
            className={genre === g ? 'pill-active' : 'pill'}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Movie Grid */}
      <div className="movie-grid">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <div className="poster-emoji">{movie.poster}</div>
            <h3>{movie.title}</h3>
            <p>⭐ {movie.rating} • {movie.year} • {movie.genre}</p>
            <button
              onClick={() => setWatchlist(prev => [...prev, movie.title])}
              className="btn-watchlist"
            >
              ➕ Add to Watchlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'const filteredMovies = genre === "All" ? MOVIES : ...', label: 'Dynamic genre filtering with fallback to all media items', color: '#3b82f6' }
          ],
          commonMistakes: ['❌ Not handling missing image posters gracefully'],
          proTips: ['💡 Add Debounce to search inputs (`useDebounce`) so filtering does not trigger on every single keystroke'],
          interviewQuestions: ['How do you implement search input debouncing in a React application?'],
          miniChallenge: 'Add a modal popup displaying synopsis and cast when clicking a movie card.',
          quiz: {
            type: 'mcq',
            question: 'Movie poster images ko performance optimize karne ke liye kaunsa attribute use karna chahiye?',
            options: ['loading="lazy"', 'speed="fast"', 'download="now"', 'async="true"'],
            answer: 'loading="lazy"',
            explanation: 'The `loading="lazy"` attribute defers image download until it is about to enter the viewport.'
          },
          summary: ['Movie and anime streaming discovery app', 'Genre chips and dynamic category switching', 'Watchlist state and rating filters'],
          flashcard: { q: 'Search input mein Debouncing kyu zaroori hoti hai?', a: 'Taaki har single keystroke par API calls ya heavy filtering na ho — user ke typing rokne ke 300ms baad hi execute ho.' },
          funFact: '🎉 Fun Fact: Netflix ka front-end UI architecture poora React aur custom design systems ke upar built hai!',
          challenge: {
            instruction: 'Filter movies with rating >= 9.0.',
            initialCode: `const list = [{ title: "A", rating: 9.1 }, { title: "B", rating: 8.5 }];
const topRated = list.filter(m => m.rating >= 9.0);
console.log(topRated.length);`,
            validator: (code) => code.includes('m.rating >= 9.0')
          }
        },
        {
          id: 'react-project-quiz-arena',
          title: 'Project 4: CodeMasti Quiz Arena - Gamified Web Dev Quiz with Streaks',
          emoji: '🎮',
          xpReward: 50,
          badgeName: 'Quiz Champion',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Chautha project hamara apna CodeMasti Quiz Arena hai! Countdown timer, streak multipliers, sound effects, score calculation, aur certificate generator! 🎮"',
            hint: '💡 Masti Sir: "Option choose hone ke baad correct option green aur wrong option red highlight karo!"',
            success: '🎉 Masti Sir: "Quiz Arena Project Completed!"',
            mistake: '😅 Masti Sir: "Timer 0 hote hi auto-submit trigger karo!"'
          },
          englishDef: 'Build a gamified, timed interactive Quiz Arena with multiple-choice questions, live streak bonus multipliers, score summaries, and answer explanations.',
          hinglishExplain: 'Quiz Arena mein user web development ke questions solve karega. Har question ke liye 15 second ka timer hoga, correct answer par streak multiplier badhega, aur quiz khatam hone par final score report card aayegi.',
          storyExplain: 'Kaun Banega Crorepati (KBC) Clock: Tik-tik ghadi chal rahi hai (useEffect Timer). Answer select karte hi computer lock karta hai aur result flash hota hai!',
          funnyExample: {
            scenario: '3 Correct Answers in a Row -> 🔥 3x Streak Multiplier Activated! +150 XP! 🚀',
            punchline: 'Gamification keeps users hooked and learning!'
          },
          memoryTrick: 'Quiz Arena State Model:\n- `currentQuestionIndex`: Tracks progress (0 to N)\n- `score`: Total points accumulated\n- `streak`: Consecutive correct answers\n- `selectedOption`: User\'s chosen answer\n- `isFinished`: Shows final results card',
          visualDiagram: {
            title: 'Quiz State Machine',
            nodes: ['Question Screen (Timer 15s, Options A/B/C/D)', 'Option Clicked -> Show Green/Red Validation', 'Next Question -> Reset Timer -> Increment Index', 'All Done -> Results Screen (XP, Score %, Restart)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Timer Synchronization:',
            steps: ['useEffect runs 1s interval counting down timeLeft state', 'If timeLeft === 0, automatically locks question and advances to next', 'Cleans up timer when unmounting or question changes']
          },
          code: `import React, { useState, useEffect } from 'react';

const QUESTIONS = [
  { q: 'React mein Component ka naam kis letter se shuru hona chahiye?', options: ['Lowercase', 'Capital / Uppercase', 'Underscore', 'Numbers'], a: 'Capital / Uppercase' },
  { q: 'Virtual DOM updates ko Real DOM mein patch karne ke process ko kya kehte hain?', options: ['Hydration', 'Reconciliation', 'Compilation', 'Transpilation'], a: 'Reconciliation' },
  { q: 'Unchanged props par re-render skip karne ke liye kaunsa wrapper use hota hai?', options: ['React.memo', 'useState', 'useRef', 'useEffect'], a: 'React.memo' }
];

export default function CodeMastiQuizArena() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const currentQ = QUESTIONS[index];

  const handleOption = (opt) => {
    if (selected !== null) return; // Prevent double click
    setSelected(opt);

    if (opt === currentQ.a) {
      setScore(s => s + 10 * (streak + 1));
      setStreak(st => st + 1);
    } else {
      setStreak(0); // Reset streak on mistake
    }
  };

  const nextQuestion = () => {
    if (index + 1 < QUESTIONS.length) {
      setIndex(i => i + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="quiz-result-card">
        <h2>🎉 Quiz Completed!</h2>
        <p>Your Final Score: <strong>{score} Points</strong></p>
        <button onClick={() => { setIndex(0); setScore(0); setStreak(0); setSelected(null); setFinished(false); }}>
          Play Again 🔄
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-box">
      <div className="quiz-header">
        <span>Question {index + 1}/{QUESTIONS.length}</span>
        <span className="streak-badge">🔥 Streak: {streak}x</span>
        <span className="score-badge">⭐ Score: {score}</span>
      </div>

      <h3>{currentQ.q}</h3>

      <div className="options-grid">
        {currentQ.options.map(opt => {
          let btnClass = 'opt-btn';
          if (selected !== null) {
            if (opt === currentQ.a) btnClass += ' correct';
            else if (opt === selected) btnClass += ' wrong';
          }

          return (
            <button key={opt} className={btnClass} onClick={() => handleOption(opt)}>
              {opt}
            </button>
          );
        })}
      </div>

      {selected && (
        <button onClick={nextQuestion} className="btn-next">Next Question ➡️</button>
      )}
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'setScore(s => s + 10 * (streak + 1))', label: 'Calculates gamified score with dynamic streak multiplier', color: '#3b82f6' }
          ],
          commonMistakes: ['❌ Allowing multiple option clicks after answer is already selected'],
          proTips: ['💡 Add sound effects using Web Audio API on correct/wrong answers for extra engagement'],
          interviewQuestions: ['How do you implement stateful quiz pagination and score tracking in React?'],
          miniChallenge: 'Add a 15-second countdown timer for each question that auto-submits when expired.',
          quiz: {
            type: 'mcq',
            question: 'Quiz question advance karne par kaunsa state reset hona mandatory hai?',
            options: ['score state', 'selectedOption state (null par set karna)', 'streak state', 'questions array'],
            answer: 'selectedOption state (null par set karna)',
            explanation: '`selected` must be reset to `null` so the next question starts in an unselected state.'
          },
          summary: ['Gamified Quiz Arena with streak multipliers', 'Visual answer feedback with instant green/red classes', 'Comprehensive results screen and play-again restart'],
          flashcard: { q: 'Quiz Arena mein option locking kaise ensure ki gayi?', a: '`if (selected !== null) return;` guard clause lagakar ek baar click hone ke baad further clicks block kiye gaye.' },
          funFact: '🎉 Fun Fact: Duolingo aur Kahoot apps apne sabhi interactive quiz engines ko React components ke zariye hi render karte hain!',
          challenge: {
            instruction: 'Check if answer is correct and increment score.',
            initialCode: `function check(ans, correct) {
  return ans === correct ? 10 : 0;
}
console.log(check("A", "A")); // 10`,
            validator: (code) => code.includes('ans === correct')
          }
        },
        {
          id: 'react-project-quickbite',
          title: 'Project 5: QuickBite Foodie - Food Delivery Cart with Context API',
          emoji: '🍔',
          xpReward: 50,
          badgeName: 'Cart Commander',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Paanchwa project QuickBite Foodie Cart hai (Swiggy/Zomato clone)! Context API se global cart state manage karenge, quantity increment/decrement, tax & discount calculation aur instant checkout! 🍕"',
            hint: '💡 Masti Sir: "`CartContext` bana kar poore food items, cart total aur checkout modal ko synchronize karo!"',
            success: '🎉 Masti Sir: "QuickBite Foodie Cart Project Completed!"',
            mistake: '😅 Masti Sir: "Cart mein quantity 0 hote hi item ko array se filter out karo!"'
          },
          englishDef: 'Build a full-featured Food Ordering E-Commerce Cart using the React Context API, featuring menu categories, cart floating drawer, quantity controls, coupon promo code discounts, and order checkout flow.',
          hinglishExplain: 'QuickBite Foodie ek modern Food Delivery Cart app hai. Isme menu cards, cart drawer, discount coupon code (jaise `MASTI50`), GST tax calculation, aur order confirmation popup honge — sabhi Context API se connected.',
          storyExplain: 'Zomato Pizza Order: User menu se Pizza aur Burger cart mein add karta hai. Top navbar par cart badge `(2)` update hota hai, coupon lagane par ₹50 discount milta hai, aur checkout button par order place ho jata hai!',
          funnyExample: {
            scenario: 'Apply Coupon: "MASTI50" -> Total drops from ₹500 to ₹250 instant discount! 🎉',
            punchline: 'Context API keeps floating cart and menu in perfect sync!'
          },
          memoryTrick: 'Cart Operations:\n- Add Item: If exists -> quantity + 1, else -> push new item\n- Remove Item: Filter by ID\n- Update Qty: `item.quantity + delta` (remove if qty <= 0)\n- Subtotal: `reduce((sum, i) => sum + i.price * i.qty, 0)`',
          visualDiagram: {
            title: 'QuickBite Cart Architecture',
            nodes: ['CartContext.Provider (cart, addToCart, updateQty, coupon)', '  -> MenuGrid (Dishes, Add Button)', '  -> CartDrawer (Items, Quantity +/-, Subtotal, GST)', '  -> CheckoutModal (Success animation)'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'Cart State Calculations:',
            steps: ['Subtotal calculated via array reduce', 'Applies discount percentage if coupon is valid', 'Calculates 5% GST and adds delivery fee to generate grand total']
          },
          code: `import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (dish) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === dish.id);
      if (exists) {
        return prev.map(i => i.id === dish.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...dish, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev =>
      prev
        .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0) // Auto-remove if quantity reaches 0
    );
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, total }}>
      {children}
    </CartContext.Provider>
  );
}

const MENU = [
  { id: 'f1', name: 'Paneer Butter Masala', price: 280, emoji: '🍛' },
  { id: 'f2', name: 'Butter Naan (2 pcs)', price: 80, emoji: '🫓' },
  { id: 'f3', name: 'Veg Biryani Special', price: 220, emoji: '🍚' }
];

export default function QuickBiteApp() {
  return (
    <CartProvider>
      <div className="quickbite-container">
        <h2>QuickBite Foodie 🍔</h2>
        <MenuGrid />
        <CartSummary />
      </div>
    </CartProvider>
  );
}

function MenuGrid() {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="menu-grid">
      {MENU.map(dish => (
        <div key={dish.id} className="dish-card">
          <span className="dish-emoji">{dish.emoji}</span>
          <h4>{dish.name}</h4>
          <p>₹{dish.price}</p>
          <button onClick={() => addToCart(dish)}>+ Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

function CartSummary() {
  const { cart, updateQty, total } = useContext(CartContext);
  return (
    <div className="cart-summary-box">
      <h3>Your Cart ({cart.reduce((s, i) => s + i.qty, 0)} Items)</h3>
      {cart.map(item => (
        <div key={item.id} className="cart-item-row">
          <span>{item.name}</span>
          <button onClick={() => updateQty(item.id, -1)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, 1)}>+</button>
          <span>₹{item.price * item.qty}</span>
        </div>
      ))}
      <h4>Grand Total: ₹{total}</h4>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'setCart(prev => ...filter(i => i.qty > 0))', label: 'Updates item quantity and automatically purges items reaching 0 quantity', color: '#3b82f6' }
          ],
          commonMistakes: ['❌ Forgetting to wrap consumer components inside `<CartProvider>`'],
          proTips: ['💡 Persist cart state in `localStorage` so items remain even if user refreshes the page'],
          interviewQuestions: ['How would you scale this cart architecture to support server-side validation and promo code verification?'],
          miniChallenge: 'Add a promo code input applying a 10% discount when code is "MASTI10".',
          quiz: {
            type: 'mcq',
            question: 'Cart mein dish add karte waqt agar item already exist kare toh kya hona chahiye?',
            options: ['Duplicate card banana chahiye', 'Usi item ki quantity +1 karni chahiye', 'Cart clear karni chahiye', 'Error throw karna chahiye'],
            answer: 'Usi item ki quantity +1 karni chahiye',
            explanation: 'If an item is already present in the cart array, its `qty` property should be incremented rather than creating a duplicate row.'
          },
          summary: ['E-Commerce cart state powered by Context API', 'Automatic item purging when quantity hits zero', 'Real-time subtotal and grand total calculation'],
          flashcard: { q: 'Cart state mein item quantity 0 hone par kya karna chahiye?', a: '`.filter(item => item.qty > 0)` use karke cart list se automatically remove kar dena chahiye.' },
          funFact: '🎉 Fun Fact: Amazon aur Flipkart ke shopping cart engines pure reducer state machines hote hain jo offline hone par bhi local state maintain karte hain!',
          challenge: {
            instruction: 'Calculate total cart price using reduce.',
            initialCode: `const items = [{ price: 100, qty: 2 }, { price: 50, qty: 3 }];
const total = items.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
console.log(total); // 350`,
            validator: (code) => code.includes('.reduce') && code.includes('curr.price * curr.qty')
          }
        },
        {
          id: 'react-project-taskmaster',
          title: 'Project 6: TaskMaster Pro - Agile Kanban Board (Trello Clone)',
          emoji: '📋',
          xpReward: 50,
          badgeName: 'Kanban Master',
          mastirQuote: {
            start: '👨‍🏫 Masti Sir: "Chhata aur aakhri production project TaskMaster Pro hai — Trello aur Jira jaisa Kanban Task Board! Drag & drop columns, task priority tags, task creation, aur localStorage sync! 🚀"',
            hint: '💡 Masti Sir: "Tasks ko status (\'todo\', \'in_progress\', \'done\') ke basis par 3 columns mein render karo!"',
            success: '🎉 Masti Sir: "TaskMaster Kanban Board Project Completed!"',
            mistake: '😅 Masti Sir: "Task status change karte waqt state immutable update karna zaroori hai!"'
          },
          englishDef: 'Build a production-grade Agile Kanban Task Board featuring draggable task columns (To Do, In Progress, Done), priority labels (High, Medium, Low), task creation, editing, deletion, and local persistence.',
          hinglishExplain: 'TaskMaster Pro mein hum Trello jaisa Kanban Board banayenge. 3 Columns honge: "To Do", "In Progress", aur "Done". User naya task create kar sakega, priority (High/Low) de sakega, task ko ek column se doosre column mein move kar sakega, aur data local storage mein save rahega.',
          storyExplain: 'Software Team Daily Standup: Developer Subah "To Do" se task uthata hai aur "In Progress" mein daalta hai. Code review pass hote hi task "Done" column mein shift ho jata hai!',
          funnyExample: {
            scenario: 'Move task: "Fix Login Bug" from [In Progress] -> [Done] -> Team celebrates with coffee! ☕🎉',
            punchline: 'Kanban boards make project workflow crystal clear!'
          },
          memoryTrick: 'Kanban Board State Flow:\n- State: `tasks = [{ id, title, status: "todo"|"in_progress"|"done", priority }]`\n- Columns: Map 3 columns and filter `tasks.filter(t => t.status === col.id)`\n- Move Task: `setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t))`',
          visualDiagram: {
            title: 'Kanban Column Architecture',
            nodes: ['TaskMaster Board State', 'Column 1: To Do (tasks.filter(status === "todo"))', 'Column 2: In Progress (tasks.filter(status === "in_progress"))', 'Column 3: Done (tasks.filter(status === "done"))'],
            type: 'tree'
          },
          browserBehindScene: {
            title: 'State Column Dispatching:',
            steps: ['Board maintains a single flat array of tasks in state', 'Each column filters items for its status', 'Moving a task changes only the status property, automatically moving it into the destination column']
          },
          code: `import React, { useState } from 'react';

const INITIAL_TASKS = [
  { id: 't1', title: 'Design Landing Page UI', status: 'done', priority: 'High' },
  { id: 't2', title: 'Build React Hooks Masterclass', status: 'in_progress', priority: 'High' },
  { id: 't3', title: 'Implement Dark Mode Persistence', status: 'todo', priority: 'Medium' },
  { id: 't4', title: 'Deploy Production Build to Vercel', status: 'todo', priority: 'Low' }
];

export default function TaskMasterKanban() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [newTitle, setNewTitle] = useState('');

  const moveTask = (id, nextStatus) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, status: nextStatus } : t)
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newTask = {
      id: \`task-\${Date.now()}\`,
      title: newTitle,
      status: 'todo',
      priority: 'Medium'
    };
    setTasks([newTask, ...tasks]);
    setNewTitle('');
  };

  const COLUMNS = [
    { id: 'todo', label: '📌 To Do' },
    { id: 'in_progress', label: '⚡ In Progress' },
    { id: 'done', label: '✅ Completed' }
  ];

  return (
    <div className="kanban-container">
      <h2>TaskMaster Pro Kanban Board 📋</h2>

      {/* Add Task Form */}
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          placeholder="New Task Title..."
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
        />
        <button type="submit">+ Add Task</button>
      </form>

      {/* Kanban 3 Columns */}
      <div className="kanban-columns">
        {COLUMNS.map(col => (
          <div key={col.id} className="kanban-col">
            <h3>{col.label} ({tasks.filter(t => t.status === col.id).length})</h3>

            <div className="col-task-list">
              {tasks.filter(t => t.status === col.id).map(task => (
                <div key={task.id} className="kanban-card">
                  <span className={\`p-tag \${task.priority.toLowerCase()}\`}>{task.priority}</span>
                  <h4>{task.title}</h4>
                  
                  <div className="btn-actions">
                    {col.id !== 'todo' && <button onClick={() => moveTask(task.id, 'todo')}>⏪ To Do</button>}
                    {col.id !== 'in_progress' && <button onClick={() => moveTask(task.id, 'in_progress')}>⚡ In Progress</button>}
                    {col.id !== 'done' && <button onClick={() => moveTask(task.id, 'done')}>✅ Done</button>}
                    <button onClick={() => deleteTask(task.id)} className="btn-del">🗑️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`,
          codeBreakdown: [
            { part: 'moveTask = (id, nextStatus) => { ... }', label: 'Updates task status immutably moving it between Kanban columns', color: '#3b82f6' }
          ],
          commonMistakes: ['❌ Storing separate array states for each column (hard to synchronize; keep one flat array with status property)'],
          proTips: ['💡 Add HTML5 Drag and Drop API (`onDragStart`, `onDragOver`, `onDrop`) for smooth native card dragging between columns'],
          interviewQuestions: ['How do you model and structure state for a multi-column Kanban board in React?'],
          miniChallenge: 'Add a priority dropdown (High, Medium, Low) when creating a new task.',
          quiz: {
            type: 'mcq',
            question: 'Kanban board mein tasks ko manage karne ka sabse clean state architecture kaunsa hai?',
            options: ['3 alag alag array state rakhna', 'Ek single flat array state rakhna jisme har task ke paas `status` property ho', 'Har task ke liye alag database table banana', 'Page refresh karna'],
            answer: 'Ek single flat array state rakhna jisme har task ke paas `status` property ho',
            explanation: 'Maintaining a single flat array with a `status` property makes moving, deleting, filtering, and persisting tasks effortless and bug-free.'
          },
          summary: ['Production-grade Agile Kanban Board', 'Single flat state architecture with status filtering', 'Task creation, status progression, and priority badges'],
          flashcard: { q: 'Kanban board mein task move karne par state kaise update hoti hai?', a: '`setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t))` se target task ka status update hota hai.' },
          funFact: '🎉 Fun Fact: Trello ka pehla prototype sirf 3 mahine mein React aur Backbone ke upar bana tha aur aage chal kar Atlassian ne use $425 Million mein acquire kiya!',
          challenge: {
            instruction: 'Move a task by updating its status to "done".',
            initialCode: `const tasks = [{ id: 1, status: "todo" }];
const updated = tasks.map(t => t.id === 1 ? { ...t, status: "done" } : t);
console.log(updated[0].status); // "done"`,
            validator: (code) => code.includes('status: "done"')
          }
        }
      ]
    }
  ]
}

export default reactCourse
