// Comprehensive Course Questions Data
export const ALL_COURSE_INTERVIEW_TRACKS_DATA = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. HTML INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'html-interview',
    courseId: 'html',
    title: 'HTML Interview',
    icon: '📘',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    description: 'Semantic tags, HTML5 APIs, Forms validation, SEO meta tags, accessibility (ARIA), Web Workers, and DOM rendering.',
    totalQuestions: 20,
    questions: [
      {
        id: 'html-1',
        question: 'What is the difference between HTML and HTML5? List key architectural additions.',
        companies: ['Google', 'Microsoft', 'Infosys'],
        difficulty: 'Medium',
        answer: `HTML5 introduces semantic tags (<header>, <nav>, <article>, <section>, <footer>), native media (<audio>, <video>), canvas (2D/3D graphics), client storage (localStorage, sessionStorage, IndexedDB), Web Workers for background multi-threading, and native input validations.`,
        traps: 'Thinking HTML5 is a different language — it is the latest living standard of HTML markup.',
        followUp: ['How does <!DOCTYPE html> differ from HTML4 doctypes?']
      },
      {
        id: 'html-2',
        question: 'Explain the difference between <script>, <script async>, and <script defer>.',
        companies: ['Google', 'Apple', 'Amazon'],
        difficulty: 'Hard',
        answer: `Regular <script> blocks HTML parsing. <script async> downloads in parallel and executes immediately as soon as downloaded (order not guaranteed). <script defer> downloads in parallel and executes ONLY after HTML document parsing is complete in source order.`,
        traps: 'Using async for libraries where execution order matters.',
        followUp: ['How do ES modules <script type="module"> behave?']
      },
      {
        id: 'html-3',
        question: 'What are Semantic Elements and why are they critical for Modern SEO and Screen Readers (WCAG/ARIA)?',
        companies: ['Apple', 'Microsoft', 'IBM'],
        difficulty: 'Medium',
        answer: `Semantic elements (<main>, <article>, <nav>, <footer>) define meaning. Googlebot indexes content hierarchy more accurately, and Screen Readers use them as keyboard landmarks for visually impaired users.`,
        traps: 'Using multiple <h1> tags on a single page or using semantic tags purely for styling.',
        followUp: ['Difference between <section> and <article>?']
      },
      {
        id: 'html-4',
        question: 'What is Shadow DOM and how does it enable true CSS & DOM encapsulation?',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `Shadow DOM attaches a private DOM tree to an element. Styles defined inside cannot leak out into global page, and external CSS cannot bleed in. Used by native tags like <video> and custom Web Components.`,
        traps: 'Confusing Virtual DOM (React) with Shadow DOM (browser native encapsulation).',
        followUp: ['What is open vs closed mode in attachShadow?']
      },
      {
        id: 'html-5',
        question: 'What is the purpose of <meta name="viewport"> tag in responsive web design?',
        companies: ['Microsoft', 'Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `<meta name="viewport" content="width=device-width, initial-scale=1.0"> tells mobile browsers to render the page at physical screen width with 1:1 scaling. Without it, media queries fail on mobile phones.`,
        traps: 'Using user-scalable=no which breaks accessibility zooming.',
        followUp: ['What is viewport-fit=cover used for on iPhone notch displays?']
      },
      {
        id: 'html-6',
        question: 'Explain localStorage vs sessionStorage vs Cookies.',
        companies: ['Amazon', 'Wipro', 'IBM'],
        difficulty: 'Medium',
        answer: `Cookies (4KB) are sent with every HTTP request with expiration timestamps. localStorage (5-10MB) persists across sessions until cleared. sessionStorage (5MB) clears when the browser tab is closed.`,
        traps: 'Storing JWT tokens in localStorage where XSS can steal them.',
        followUp: ['What are HttpOnly and Secure cookie flags?']
      },
      {
        id: 'html-7',
        question: 'How do HTML Data Attributes (data-*) work in JavaScript and CSS?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `data-* attributes store custom data on DOM elements (<div data-user-id="101">). Accessed in JS via element.dataset.userId and in CSS via div[data-user-id="101"].`,
        traps: 'Storing sensitive unencrypted passwords in data attributes.',
        followUp: ['How does camelCase conversion work for multi-hyphen data attributes?']
      },
      {
        id: 'html-8',
        question: 'What is the HTML5 <canvas> element and how does it differ from <svg>?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Medium',
        answer: `Canvas is resolution-dependent raster pixel rendering (immediate mode). SVG is resolution-independent vector XML (retained mode with real DOM nodes).`,
        traps: 'Using Canvas for interactive diagrams with individual clickable shapes.',
        followUp: ['How do you support Retina display rendering on Canvas?']
      },
      {
        id: 'html-9',
        question: 'What are HTML Web Workers and how do they prevent main thread UI freezes?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `Web Workers run JavaScript in background OS threads. Heavy computations run in background without blocking 60fps main UI thread. Workers communicate via postMessage().`,
        traps: 'Attempting to access DOM nodes directly inside Web Workers.',
        followUp: ['Difference between Dedicated and Service Workers?']
      },
      {
        id: 'html-10',
        question: 'Explain Open Graph (OG) meta tags and Twitter Cards for social media link previews.',
        companies: ['Meta', 'Google'],
        difficulty: 'Medium',
        answer: `OG meta tags (og:title, og:image, og:description) format how links render on WhatsApp, Twitter, and LinkedIn when shared. Crawlers require absolute https:// image URLs.`,
        traps: 'Using relative image URLs like og:image="/banner.jpg".',
        followUp: ['How do SPA crawlers render dynamic meta tags?']
      },
      {
        id: 'html-11',
        question: 'What is inline vs block vs inline-block elements in HTML?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner',
        answer: `Block (<div>, <p>) takes full width and starts on a new line. Inline (<span>, <a>) flows with text and ignores width/height. Inline-block (<button>, <input>) sits inline but respects custom width, height, and padding.`,
        traps: 'Nesting block elements inside inline elements in older specs.',
        followUp: ['Why is there a default 4px whitespace gap between inline-block elements?']
      },
      {
        id: 'html-12',
        question: 'What is rel="noopener noreferrer" on target="_blank" external links?',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard (Security)',
        answer: `noopener prevents the newly opened tab from accessing window.opener to redirect the parent page (reverse tabnabbing attack). noreferrer prevents leaking the HTTP Referer header.`,
        traps: 'Omitting noopener on user-submitted external links.',
        followUp: ['Do modern browsers apply noopener by default?']
      },
      {
        id: 'html-13',
        question: 'What is Progressive Enhancement vs Graceful Degradation?',
        companies: ['IBM', 'HCL'],
        difficulty: 'Medium',
        answer: `Progressive Enhancement starts with clean semantic HTML for all devices, layering CSS and JS for modern browsers. Graceful Degradation builds full modern features first and adds fallbacks for older browsers.`,
        traps: 'Assuming progressive enhancement avoids JavaScript.',
        followUp: ['How does <noscript> support progressive enhancement?']
      },
      {
        id: 'html-14',
        question: 'How does HTML5 native form validation work with required, pattern, and :invalid pseudo-class?',
        companies: ['Wipro', 'Infosys'],
        difficulty: 'Medium',
        answer: `HTML5 provides built-in validation via required, pattern="regex", min, max attributes without JS. CSS hooks into input:invalid and input:valid. JS checks with form.checkValidity().`,
        traps: 'Relying only on HTML validation without backend validation.',
        followUp: ['How does novalidate attribute disable browser tooltips?']
      },
      {
        id: 'html-15',
        question: 'What is the difference between src and href attributes in HTML?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `src (Source) embeds external content (<script src>, <img src>) and replaces the element. href (Hypertext Reference) creates a link/relationship (<a href>, <link href>).`,
        traps: 'Using src on <link> tags instead of href.',
        followUp: ['Why does <link rel="stylesheet"> block page render?']
      },
      {
        id: 'html-16',
        question: 'What are HTML Entities and why are they necessary (&lt;, &gt;, &amp;, &quot;)?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Beginner',
        answer: `Entities represent reserved characters with syntactic meaning in HTML. &lt; (<) and &gt; (>) prevent raw tags from executing as code or causing XSS vulnerabilities.`,
        traps: 'Forgetting to encode user inputs in server templates.',
        followUp: ['How do numeric entities like &#128512; render emojis?']
      },
      {
        id: 'html-17',
        question: 'What is the HTML5 <picture> element vs <img> with srcset?',
        companies: ['Apple', 'Google'],
        difficulty: 'Hard',
        answer: `<img> srcset handles resolution switching for different pixel densities. <picture> enables art direction (cropping different images per breakpoint) and format fallback (AVIF -> WebP -> JPG).`,
        traps: 'Omitting the fallback <img> inside <picture>.',
        followUp: ['How does browser choose image source in <picture>?']
      },
      {
        id: 'html-18',
        question: 'What is the difference between id, class, and name attributes?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `id is a unique document identifier (#id). class is a reusable identifier for groups (.class). name identifies form fields sent in HTTP payloads and groups radio buttons.`,
        traps: 'Using duplicate IDs on a single page.',
        followUp: ['How do radio buttons enforce mutual exclusivity with name?']
      },
      {
        id: 'html-19',
        question: 'What is the purpose of ARIA attributes (aria-label, aria-expanded, aria-hidden, role)?',
        companies: ['Google', 'Microsoft', 'Apple'],
        difficulty: 'Hard',
        answer: `ARIA enhances accessibility for screen readers. role="dialog" defines widgets, aria-label describes icon buttons, aria-expanded announces accordion state. Prefer native HTML over ARIA.`,
        traps: 'Overusing ARIA on standard elements like adding role="heading" to <h1>.',
        followUp: ['What is aria-live="polite" vs "assertive"?']
      },
      {
        id: 'html-20',
        question: 'How does the browser parse HTML into the DOM tree and what triggers Reflow and Repaint?',
        companies: ['Google', 'Apple', 'Amazon'],
        difficulty: 'Hard',
        answer: `Bytes -> Characters -> Tokens -> Nodes -> DOM Tree. DOM + CSSOM form the Render Tree. Reflow computes pixel bounding boxes (changing width/margin). Repaint colors pixels (changing color). Transforms bypass both using GPU.`,
        traps: 'Reading geometry like offsetHeight after writing styles (Layout Thrashing).',
        followUp: ['How does requestAnimationFrame batch DOM operations?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. CSS INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'css-interview',
    courseId: 'css',
    title: 'CSS Interview',
    icon: '🎨',
    category: 'frontend',
    categoryLabel: 'Frontend Development',
    description: 'Flexbox, CSS Grid, Specificity hierarchy, Box Model, Animations, Responsive layouts, CSS Variables, and GPU rendering.',
    totalQuestions: 20,
    questions: [
      {
        id: 'css-1',
        question: 'Explain CSS Specificity calculation in detail. How do !important, inline styles, IDs, classes, and elements rank?',
        companies: ['Google', 'Microsoft', 'Amazon'],
        difficulty: 'Medium to Hard',
        answer: `Specificity formula: (Inline, IDs, Classes/Attributes, Elements). Inline = 1000, ID = 100, Class/Pseudo-class = 10, Element = 1. !important overrides all cascade rules.`,
        traps: 'Thinking 10 classes can override 1 ID — specificity tiers do not overflow.',
        followUp: ['How does :is() vs :where() affect specificity?']
      },
      {
        id: 'css-2',
        question: 'What is the CSS Box Model? Explain box-sizing: content-box vs border-box.',
        companies: ['Infosys', 'Wipro', 'HCL'],
        difficulty: 'Beginner to Medium',
        answer: `Box model = Content + Padding + Border + Margin. content-box adds padding/border to width (200px + 20px padding = 240px). border-box includes padding/border inside width (200px stays 200px).`,
        traps: 'Forgetting margin is outside the border-box calculation.',
        followUp: ['What is margin collapsing?']
      },
      {
        id: 'css-3',
        question: 'Compare CSS Flexbox vs CSS Grid. When would you choose one over the other?',
        companies: ['Apple', 'Microsoft', 'Amazon'],
        difficulty: 'Medium',
        answer: `Flexbox is 1-dimensional (Row or Column) for content-first components like navbars. Grid is 2-dimensional (Rows AND Columns) for structured full-page layouts and dashboards.`,
        traps: 'Using nested Flexbox containers for complex 2D grids.',
        followUp: ['Difference between justify-content and align-items?']
      },
      {
        id: 'css-4',
        question: 'What is BFC (Block Formatting Context) and how does it prevent parent height collapse from floats?',
        companies: ['Google', 'IBM'],
        difficulty: 'Hard',
        answer: `A BFC is an isolated rendering region that contains internal floats and prevents margin collapse. Created with display: flow-root, overflow: hidden, or display: flex.`,
        traps: 'Using overflow: hidden when dropdown menus get clipped.',
        followUp: ['How does the clearfix hack work?']
      },
      {
        id: 'css-5',
        question: 'Explain the 5 CSS Position values: static, relative, absolute, fixed, sticky.',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Medium',
        answer: `static: normal flow. relative: positioned relative to self, reserves space. absolute: removed from flow, positioned relative to nearest positioned ancestor. fixed: relative to viewport. sticky: relative until scroll threshold then sticks.`,
        traps: 'Setting sticky inside a parent with overflow: hidden.',
        followUp: ['How does z-index create a Stacking Context?']
      },
      {
        id: 'css-6',
        question: 'What is GPU Hardware Acceleration in CSS and why animate transform/opacity instead of top/left/width?',
        companies: ['Apple', 'Google'],
        difficulty: 'Hard',
        answer: `Animating top/left triggers Reflow and Repaint on CPU every frame (causing lag). Animating transform and opacity creates a compositor layer handled directly by GPU at 60fps/120fps with zero layout reflow.`,
        traps: 'Overusing will-change: transform which exhausts GPU memory.',
        followUp: ['What is will-change in CSS?']
      },
      {
        id: 'css-7',
        question: 'How do CSS Variables (Custom Properties) differ from SASS/SCSS variables?',
        companies: ['Microsoft', 'IBM'],
        difficulty: 'Medium',
        answer: `CSS Variables (--color: #fff) are dynamic at runtime, inherit through DOM, and can be changed in JS for Dark Mode. SASS variables ($color) are static compile-time constants.`,
        traps: 'Using CSS variables inside @media query breakpoints.',
        followUp: ['How do fallback values work in var(--primary, #000)?']
      },
      {
        id: 'css-8',
        question: 'What is CSS Subgrid and how does it solve nested grid alignment?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Subgrid (grid-template-columns: subgrid) allows nested child items to adopt the track sizes of the parent grid, aligning card titles and footer buttons across different columns.`,
        traps: 'Using subgrid without display: grid on parent.',
        followUp: ['What is browser support for CSS subgrid?']
      },
      {
        id: 'css-9',
        question: 'What are Container Queries (@container) vs Media Queries (@media)?',
        companies: ['Google', 'Meta'],
        difficulty: 'Hard',
        answer: `@media queries check the global browser window viewport width. @container queries check the parent container holding the component, making components truly modular and responsive anywhere.`,
        traps: 'Forgetting container-type: inline-size on parent.',
        followUp: ['What is container-name used for?']
      },
      {
        id: 'css-10',
        question: 'What is the :has() parent selector pseudo-class in modern CSS?',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `:has() styles parent elements based on child conditions. e.g., form:has(input:invalid) button { opacity: 0.5; } disables submit button pure in CSS without JavaScript!`,
        traps: 'Nesting :has() inside another :has() (disallowed).',
        followUp: ['How does :has() impact style recalculation performance?']
      },
      {
        id: 'css-11',
        question: 'Explain Margin Collapsing in CSS and the 3 conditions where it occurs.',
        companies: ['Amazon', 'Infosys'],
        difficulty: 'Medium',
        answer: `Vertical margins collapse into a single largest margin between: 1) Adjacent siblings, 2) Parent and first/last child without padding, 3) Empty elements. Horizontal margins never collapse.`,
        traps: 'Thinking Flexbox and Grid items collapse margins.',
        followUp: ['How to prevent margin collapse without visible borders?']
      },
      {
        id: 'css-12',
        question: 'What is display: none vs visibility: hidden vs opacity: 0?',
        companies: ['Infosys', 'Wipro', 'HCL'],
        difficulty: 'Beginner to Medium',
        answer: `display: none removes element from flow (no space, no clicks, reflow). visibility: hidden hides element but reserves space (no clicks, repaint). opacity: 0 makes transparent, reserves space, and CAN receive clicks unless pointer-events: none.`,
        traps: 'Assuming opacity: 0 hides content from screen readers.',
        followUp: ['How to animate elements entering DOM with transition?']
      },
      {
        id: 'css-13',
        question: 'What are dvh, svh, and lvh viewport units on mobile devices?',
        companies: ['Apple', 'Google'],
        difficulty: 'Medium',
        answer: `On mobile browsers with dynamic address bars: 100svh is height with expanded address bar. 100lvh is height with hidden address bar. 100dvh dynamically adjusts height in real-time as address bar shows/hides.`,
        traps: 'Using 100vh for mobile hero sections which causes bottom buttons to be covered.',
        followUp: ['What is vmin vs vmax?']
      },
      {
        id: 'css-14',
        question: 'What are Pseudo-Classes (:) vs Pseudo-Elements (::)?',
        companies: ['Wipro', 'HCL'],
        difficulty: 'Beginner',
        answer: `Pseudo-class (:hover, :focus, :nth-child) targets dynamic states of existing elements. Pseudo-element (::before, ::after, ::placeholder) creates virtual styling nodes not present in HTML.`,
        traps: 'Forgetting content: "" on ::before or ::after.',
        followUp: ['Can JS attach event listeners to ::before?']
      },
      {
        id: 'css-15',
        question: 'Explain CSS Grid auto-fit vs auto-fill in repeat(auto-fit, minmax(200px, 1fr)).',
        companies: ['Amazon', 'Microsoft'],
        difficulty: 'Hard',
        answer: `auto-fill creates empty tracks to fill the row. auto-fit collapses empty tracks and stretches existing cards with 1fr to fill the full remaining container width.`,
        traps: 'Using auto-fill when you want cards to expand full width.',
        followUp: ['What is minmax() function in Grid?']
      },
      {
        id: 'css-16',
        question: 'What is CSS Cascade Layer (@layer)?',
        companies: ['Google', 'IBM'],
        difficulty: 'Hard',
        answer: `@layer defines explicit precedence order (@layer reset, base, components, utilities). Rules in higher layers always override lower layers regardless of selector specificity!`,
        traps: 'Unlayered styles have higher priority than layered styles.',
        followUp: ['How do CSS frameworks use @layer?']
      },
      {
        id: 'css-17',
        question: 'Explain CSS clamp(), min(), and max() for fluid typography.',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Medium',
        answer: `clamp(1rem, 2.5vw + 0.5rem, 2.5rem) smoothly scales font-size between a minimum of 1rem on mobile and a maximum of 2.5rem on 4K displays without breakpoint media queries.`,
        traps: 'Using only viewport units without clamp (illegible on phones).',
        followUp: ['How does line-height behave when clamped?']
      },
      {
        id: 'css-18',
        question: 'What is Stacking Context in CSS and what triggers it?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `Stacking context is a 3D Z-axis layer. Triggered by root element, position: relative/absolute with numeric z-index, position: fixed, opacity < 1, transform, and isolation: isolate.`,
        traps: 'Setting z-index: 99999 on child whose parent has lower stacking context.',
        followUp: ['How does isolation: isolate create clean stacking boundaries?']
      },
      {
        id: 'css-19',
        question: 'How do CSS transitions differ from CSS keyframe animations?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner to Medium',
        answer: `Transitions animate between 2 states on trigger (:hover). Keyframes (@keyframes) define multi-step animations, run on load, loop infinitely, and support direction reversals.`,
        traps: 'Transitioning all properties with transition: all.',
        followUp: ['What is animation-fill-mode: forwards?']
      },
      {
        id: 'css-20',
        question: 'What is CSS aspect-ratio and how does it prevent Cumulative Layout Shift (CLS)?',
        companies: ['Google', 'Apple'],
        difficulty: 'Medium',
        answer: `aspect-ratio: 16 / 9 reserves the exact proportional box height before images/videos download over network, preventing layout jumps and achieving good Google CLS score (< 0.1).`,
        traps: 'Using old padding-bottom percentage hacks when aspect-ratio is supported.',
        followUp: ['How does object-fit: cover work with aspect-ratio?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. JAVASCRIPT MASTERY INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'javascript-interview',
    courseId: 'javascript',
    title: 'JavaScript Mastery Interview',
    icon: '⚡',
    category: 'frontend',
    categoryLabel: 'Core Programming & Web',
    description: 'Closures, Prototypes, Event Loop, Promises & Async/Await, V8 Garbage Collection, Debounce/Throttle, and ES6+ features.',
    totalQuestions: 20,
    questions: [
      {
        id: 'js-1',
        question: 'What is a Closure in JavaScript and what are its practical production use cases?',
        companies: ['Google', 'Microsoft', 'Amazon'],
        difficulty: 'Hard',
        answer: `A closure is a function bundled together with references to its surrounding lexical environment. Practical use cases: Data encapsulation/privacy (private variables), memoization caches, currying, and factory functions.`,
        traps: 'Creating closures in tight loops without releasing references (memory leaks).',
        followUp: ['How does the classic loop var i setTimeout bug get solved with let or closures?']
      },
      {
        id: 'js-2',
        question: 'Explain the Event Loop, Call Stack, Microtasks, and Macrotasks in detail.',
        companies: ['Google', 'Apple', 'Meta'],
        difficulty: 'Hard',
        answer: `Call Stack executes sync code. Microtasks (Promise.then, queueMicrotask) execute immediately when stack is empty. Macrotasks (setTimeout, setInterval, I/O) run after ALL microtasks are drained. UI render occurs after microtasks.`,
        traps: 'Saying setTimeout(fn, 0) runs immediately after current line.',
        followUp: ['How does requestAnimationFrame fit into the event loop?']
      },
      {
        id: 'js-3',
        question: 'What is Prototypal Inheritance and how does the Prototype Chain work in JavaScript?',
        companies: ['Microsoft', 'IBM', 'Infosys'],
        difficulty: 'Hard',
        answer: `Objects in JS have an internal [[Prototype]] link (__proto__). When accessing a property, JS looks on the object; if missing, it traverses up the prototype chain until Object.prototype or null. ES6 class syntax is syntactic sugar over prototypes.`,
        traps: 'Modifying Object.prototype directly (prototype pollution).',
        followUp: ['Difference between __proto__ and prototype property on constructor functions?']
      },
      {
        id: 'js-4',
        question: 'Explain the difference between var, let, and const (Hoisting & Temporal Dead Zone).',
        companies: ['Infosys', 'Wipro', 'HCL'],
        difficulty: 'Beginner to Medium',
        answer: `var is function-scoped and hoisted initialized to undefined. let/const are block-scoped and hoisted into the Temporal Dead Zone (TDZ) where accessing before declaration throws ReferenceError. const cannot be reassigned.`,
        traps: 'Thinking const makes objects immutable (properties can still be mutated unless Object.freeze).',
        followUp: ['What is Object.freeze() vs Object.seal()?']
      },
      {
        id: 'js-5',
        question: 'Implement a Production-Grade Debounce and Throttle function from scratch in JavaScript.',
        companies: ['Google', 'Amazon', 'Apple'],
        difficulty: 'Hard',
        answer: `Debounce delays execution until X ms of silence (for search inputs). Throttle ensures execution at most once every X ms (for scroll/resize).
\`\`\`js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
function throttle(fn, limit) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
\`\`\``,
        traps: 'Losing `this` context or arguments inside the inner function.',
        followUp: ['How do you implement immediate/leading edge debounce?']
      },
      {
        id: 'js-6',
        question: 'What is the difference between call(), apply(), and bind()?',
        companies: ['IBM', 'Wipro', 'Infosys'],
        difficulty: 'Medium',
        answer: `call() invokes function immediately passing arguments individually: fn.call(thisObj, arg1, arg2). apply() invokes function passing arguments as an array: fn.apply(thisObj, [arg1, arg2]). bind() returns a new function with bound this for later execution.`,
        traps: 'Arrow functions do not have their own this and ignore call/apply/bind.',
        followUp: ['How does lexical this work in arrow functions?']
      },
      {
        id: 'js-7',
        question: 'Explain Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any().',
        companies: ['Microsoft', 'Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `1. Promise.all: Fails-fast if ANY promise rejects; resolves when ALL resolve.
2. Promise.allSettled: Waits for ALL promises to settle (resolves with status array).
3. Promise.race: Settles with the FIRST settled promise (resolved or rejected).
4. Promise.any: Resolves with FIRST fulfilled promise; rejects with AggregateError if all reject.`,
        traps: 'Using Promise.all for independent API calls where 1 failure should not cancel others.',
        followUp: ['How to implement Promise.all from scratch?']
      },
      {
        id: 'js-8',
        question: 'What is Deep Clone vs Shallow Clone in JavaScript and how does structuredClone() work?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Medium to Hard',
        answer: `Shallow clone ({...obj}, Object.assign) copies only top-level references. Deep clone copies all nested structures. JSON.parse(JSON.stringify(obj)) loses Dates, Functions, undefined, and crashes on circular references. Modern native structuredClone(obj) handles nested objects, Dates, Arrays, Sets, Maps, and circular references cleanly.`,
        traps: 'Using JSON parse/stringify on objects containing functions or circular references.',
        followUp: ['What types can structuredClone() NOT clone? (DOM nodes, functions)']
      },
      {
        id: 'js-9',
        question: 'What is Event Bubbling, Event Capturing, and Event Delegation in JavaScript?',
        companies: ['Google', 'Amazon', 'Infosys'],
        difficulty: 'Medium',
        answer: `Capturing phase goes Root -> Target. Bubbling phase goes Target -> Root. Event Delegation attaches a single listener to a common parent element and checks e.target, saving memory when managing 1000s of dynamic list items. e.stopPropagation() stops bubble traversal.`,
        traps: 'Confusing e.target (element clicked) with e.currentTarget (element with listener).',
        followUp: ['What does e.preventDefault() do?']
      },
      {
        id: 'js-10',
        question: 'What is the difference between Map vs Object and Set vs Array in ES6?',
        companies: ['IBM', 'Infosys'],
        difficulty: 'Medium',
        answer: `Map keys can be any type (functions, objects); preserves insertion order, has .size, optimized for frequent additions/deletions. Object keys must be Strings/Symbols. Set stores unique values with O(1) lookup (.has()), whereas Array allows duplicates with O(N) lookup.`,
        traps: 'Using WeakMap when you need to iterate keys — WeakMap is not iterable.',
        followUp: ['What is WeakSet and WeakMap used for?']
      },
      {
        id: 'js-11',
        question: 'What is Currying in JavaScript and how do you implement infinite currying sum(1)(2)(3)...()?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Currying converts a function with multiple arguments into a chain of functions taking single arguments:
\`\`\`js
function sum(a) {
  return function(b) {
    if (b !== undefined) return sum(a + b);
    return a;
  };
}
// Usage: sum(1)(2)(3)() -> 6
\`\`\``,
        traps: 'Forgetting the termination condition in infinite currying.',
        followUp: ['How does auto-currying work in functional programming libraries like Ramda/Lodash?']
      },
      {
        id: 'js-12',
        question: 'Explain JavaScript Generators (function*) and the yield keyword.',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Generators can pause execution and resume later. yield returns an { value, done } object. Used for lazy evaluation of infinite streams, custom iterators, and state machines with minimal memory footprint.`,
        traps: 'Assuming generator functions execute immediately when called (they return a Generator Iterator).',
        followUp: ['How did async/await evolve from Generators + Promises (co library)?']
      },
      {
        id: 'js-13',
        question: 'What is the difference between null, undefined, and undeclared in JavaScript?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Beginner',
        answer: `undefined: variable declared but not assigned a value (type undefined). null: intentional assignment representing empty/no value (typeof null is historically 'object'). undeclared: variable not declared at all (throws ReferenceError).`,
        traps: 'Checking variable with typeof on undeclared variables returns "undefined" without throwing.',
        followUp: ['What is the Nullish Coalescing operator (??) vs OR (||)?']
      },
      {
        id: 'js-14',
        question: 'How does the V8 Engine Garbage Collector work (Mark-and-Sweep, Scavenge)?',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `V8 uses Generational GC based on the weak generational hypothesis. Young Generation uses fast Scavenge copying algorithm. Old Generation uses Mark-Sweep-Compact to free unreachable memory roots.`,
        traps: 'Detached DOM nodes keeping memory referenced in JS variables.',
        followUp: ['How do you debug memory leaks with Heap Snapshots in Chrome DevTools?']
      },
      {
        id: 'js-15',
        question: 'What is the difference between == and === (Type Coercion rules)?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `== converts operands to common types before comparison (e.g. 0 == false is true). === checks value and type strictly without coercion (0 === false is false). Always use ===.`,
        traps: 'NaN === NaN is false! (Use Number.isNaN(x) or Object.is()).',
        followUp: ['What is Object.is() and how does it handle -0 vs +0 and NaN?']
      },
      {
        id: 'js-16',
        question: 'What is Method Chaining in JavaScript and how is it implemented?',
        companies: ['IBM', 'Wipro'],
        difficulty: 'Medium',
        answer: `Method chaining calls multiple methods on the same object in sequence (e.g. str.trim().toLowerCase().split()). Implemented by returning 'this' at the end of each method.`,
        traps: 'Forgetting to return this from mutator methods.',
        followUp: ['How does builder pattern use method chaining?']
      },
      {
        id: 'js-17',
        question: 'What are JavaScript Symbols and what are Well-Known Symbols (Symbol.iterator)?',
        companies: ['Google', 'Microsoft'],
        difficulty: 'Hard',
        answer: `Symbol is a primitive type representing guaranteed unique identifiers (Symbol('key') !== Symbol('key')). Used for non-enumerable private object keys. Symbol.iterator allows custom objects to work with for...of loops.`,
        traps: 'Symbols are not serialized by JSON.stringify().',
        followUp: ['How does Symbol.for() create global symbols?']
      },
      {
        id: 'js-18',
        question: 'Explain JavaScript Proxy and Reflect API and their role in reactivity frameworks.',
        companies: ['Google', 'Meta'],
        difficulty: 'Hard',
        answer: `Proxy wraps a target object and intercepts operations (get, set, deleteProperty) via handler traps. Vue 3 and modern state libraries use Proxy for fine-grained reactivity. Reflect provides default forwarding behavior.`,
        traps: 'Proxy creates a wrapper and does not mutate the original target object directly.',
        followUp: ['What is the difference between Object.defineProperty (Vue 2) and Proxy (Vue 3)?']
      },
      {
        id: 'js-19',
        question: 'What is the difference between CommonJS (CJS) and ES Modules (ESM)?',
        companies: ['Microsoft', 'Amazon'],
        difficulty: 'Hard',
        answer: `CommonJS (require/module.exports) is synchronous, dynamic, and evaluates at runtime. ES Modules (import/export) are asynchronous, static (tree-shakeable), and evaluated during parse phase before execution.`,
        traps: 'Trying to use require() inside pure ESM files.',
        followUp: ['What is dynamic import() in ESM?']
      },
      {
        id: 'js-20',
        question: 'How do you handle Asynchronous Error Handling in async/await vs Promises?',
        companies: ['Amazon', 'Google'],
        difficulty: 'Medium',
        answer: `Promises catch errors with .catch(). async/await uses standard try/catch blocks. Unhandled promise rejections trigger process.on('unhandledRejection') in Node.js and window.addEventListener('unhandledrejection') in browser.`,
        traps: 'Forgetting await in front of an async function inside try/catch (errors bypass catch block).',
        followUp: ['How to use a go-style error tuple helper: const [err, data] = await to(promise);?']
      }
    ]
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. REACT INTERVIEW
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'react-interview',
    courseId: 'react',
    title: 'React Interview',
    icon: '⚛️',
    category: 'frontend',
    categoryLabel: 'Frontend Frameworks',
    description: 'React Fiber, Hooks (useState, useEffect, useMemo, useCallback, useRef), Reconciliation, Context API, Redux/Zustand, and Performance Optimization.',
    totalQuestions: 20,
    questions: [
      {
        id: 'react-1',
        question: 'Deeply explain the React Fiber Architecture and how it enables Concurrent Mode and Time-Slicing.',
        companies: ['Google', 'Microsoft', 'Meta'],
        difficulty: 'Hard',
        answer: `Fiber converts recursive reconciliation into an interruptible linked-list work loop. Work is prioritized via Lanes. Render phase is async/interruptible, while Commit phase is synchronous DOM mutation. High-priority user input can pause low-priority rendering.`,
        traps: 'Saying Virtual DOM is faster than direct DOM for single isolated updates.',
        followUp: ['How does startTransition mark low-priority updates?']
      },
      {
        id: 'react-2',
        question: 'What are the Rules of Hooks and why can Hooks NOT be called inside if conditions or loops?',
        companies: ['Amazon', 'Apple', 'Infosys'],
        difficulty: 'Medium',
        answer: `React stores hook state in an internal singly linked list on the component's Fiber node. It relies on strict sequential call order across renders. Calling a hook inside an if-statement shifts index offsets and corrupts component state.`,
        traps: 'Using early return before hook declarations in component functions.',
        followUp: ['How does ESLint react-hooks/rules-of-hooks enforce this?']
      },
      {
        id: 'react-3',
        question: 'What is the difference between useMemo, useCallback, and React.memo?',
        companies: ['Microsoft', 'IBM', 'Wipro'],
        difficulty: 'Medium to Hard',
        answer: `React.memo is a Higher Order Component that memoizes component rendering if props are shallow equal. useMemo caches computed values: useMemo(() => compute(), [deps]). useCallback caches function references: useCallback(() => {}, [deps]).`,
        traps: 'Overusing useMemo for trivial calculations where memoization overhead exceeds re-computation.',
        followUp: ['Why does an inline arrow function prop break React.memo unless wrapped in useCallback?']
      },
      {
        id: 'react-4',
        question: 'How does useEffect cleanup work and what is the difference between useEffect and useLayoutEffect?',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `useEffect runs asynchronously AFTER the browser paints screen (non-blocking). useLayoutEffect runs synchronously AFTER DOM mutations but BEFORE browser paints screen (blocks paint, prevents visual flickering during DOM measurement). Cleanup function runs before next effect and on component unmount.`,
        traps: 'Using useLayoutEffect for data fetching (causes unnecessary main thread blocking).',
        followUp: ['Why does useEffect run twice in React 18 StrictMode in development?']
      },
      {
        id: 'react-5',
        question: 'What is the Virtual DOM Diffing Algorithm and what are Key Props rules in lists?',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Medium',
        answer: `React diffing operates in O(N) heuristic time: 1) Two elements of different types produce different trees. 2) Key props identify which items in a list changed, added, or removed. Using array index as key breaks state during reordering/filtering.`,
        traps: 'Using Math.random() or index as key prop in dynamic lists.',
        followUp: ['What happens when an element changes its root tag type (div to span)?']
      },
      {
        id: 'react-6',
        question: 'Explain useRef and the 2 main use cases (DOM access and Mutable Instance Variables).',
        companies: ['Amazon', 'Wipro'],
        difficulty: 'Medium',
        answer: `useRef returns a persistent object { current: value } across renders: 1) Direct DOM access (focus input, measure element). 2) Storing mutable values (timers, previous state) without triggering component re-renders when updated.`,
        traps: 'Reading/writing ref.current during rendering (must be done in effects/handlers).',
        followUp: ['How does forwardRef pass refs to child components?']
      },
      {
        id: 'react-7',
        question: 'What is Prop Drilling and how do Context API vs Zustand vs Redux Toolkit solve state management?',
        companies: ['Microsoft', 'IBM'],
        difficulty: 'Medium',
        answer: `Prop drilling passes props through intermediate non-consuming components. Context API is built-in for low-frequency global state (theme, auth). Zustand is lightweight selector-based store (prevents unnecessary re-renders). Redux Toolkit is enterprise-grade with middleware, DevTools, and immutability.`,
        traps: 'Using Context API for high-frequency state updates (causes entire subtree re-renders).',
        followUp: ['How do selectors prevent re-renders in Zustand/Redux?']
      },
      {
        id: 'react-8',
        question: 'What are Error Boundaries in React and what errors can they NOT catch?',
        companies: ['Apple', 'Google'],
        difficulty: 'Hard',
        answer: `Class components implementing static getDerivedStateFromError() and componentDidCatch() catch rendering/lifecycle errors in child trees. Cannot catch: event handler errors, async code (setTimeout), server-side rendering, or errors in the boundary itself.`,
        traps: 'Assuming Error Boundaries catch async fetch() errors in handlers.',
        followUp: ['How do you catch async errors with Error Boundaries?']
      },
      {
        id: 'react-9',
        question: 'What is React Portals (ReactDOM.createPortal) and when do you use it?',
        companies: ['Infosys', 'Wipro'],
        difficulty: 'Medium',
        answer: `Portals render children into a DOM node outside the parent hierarchy (e.g. document.body) while preserving React Context and event bubbling through the virtual tree. Used for modals, tooltips, and floating menus.`,
        traps: 'Thinking events inside portals do not bubble to React parent components.',
        followUp: ['How does event bubbling work through portals?']
      },
      {
        id: 'react-10',
        question: 'Explain Controlled vs Uncontrolled Components in React.',
        companies: ['Infosys', 'HCL'],
        difficulty: 'Beginner',
        answer: `Controlled: Form data is handled by React state (value={val} onChange={setVal}). Uncontrolled: Form data is handled by DOM directly, accessed via ref (ref.current.value). Controlled provides instant validation and formatting.`,
        traps: 'Switching an input from uncontrolled to controlled by passing undefined initial state.',
        followUp: ['When to use React Hook Form for uncontrolled performance?']
      },
      {
        id: 'react-11',
        question: 'What is the purpose of useReducer and when should you choose it over useState?',
        companies: ['Amazon', 'IBM'],
        difficulty: 'Medium',
        answer: `useReducer(reducer, initialState) manages complex state transitions with multiple sub-values or when next state depends on previous state. Separates state logic from UI rendering.`,
        traps: 'Mutating state directly inside reducer function instead of returning new state.',
        followUp: ['How does useReducer integrate with Context API?']
      },
      {
        id: 'react-12',
        question: 'What are Custom Hooks and how do they extract reusable component logic?',
        companies: ['Microsoft', 'Google'],
        difficulty: 'Medium',
        answer: `Custom Hooks (useFetch, useLocalStorage, useWindowSize) are JS functions starting with 'use' that call other hooks. They share stateful logic across multiple components with isolated state instances.`,
        traps: 'Naming custom hooks without the `use` prefix (breaks linter rules).',
        followUp: ['Can two components sharing a custom hook access the same shared state instance?']
      },
      {
        id: 'react-13',
        question: 'What is Code Splitting in React with React.lazy() and Suspense?',
        companies: ['Apple', 'Amazon'],
        difficulty: 'Medium',
        answer: `React.lazy(() => import('./HeavyComponent')) dynamically downloads bundle chunks on demand. <Suspense fallback={<Loader />}> renders fallback UI while the chunk downloads, reducing initial bundle load times.`,
        traps: 'Using React.lazy on server-side rendering without SSR-supported loaders.',
        followUp: ['How does route-based code splitting work with React Router?']
      },
      {
        id: 'react-14',
        question: 'Explain Automatic Batching in React 18 and how flushSync() bypasses it.',
        companies: ['Google', 'Meta'],
        difficulty: 'Hard',
        answer: `In React 18, state updates inside promises, setTimeout, and native event handlers are automatically batched into a single re-render. flushSync(() => setVal()) forces synchronous DOM update immediately when needed.`,
        traps: 'Assuming React 17 batched updates inside setTimeout.',
        followUp: ['What is the performance advantage of automatic batching?']
      },
      {
        id: 'react-15',
        question: 'What is useId in React 18 and why does it prevent SSR hydration mismatch errors?',
        companies: ['Apple', 'Microsoft'],
        difficulty: 'Medium',
        answer: `useId() generates unique, deterministic accessibility IDs matching on both server render and client hydration, eliminating hydration mismatch bugs with Math.random().`,
        traps: 'Using useId() to generate keys for list items.',
        followUp: ['How does useId format tree position strings?']
      },
      {
        id: 'react-16',
        question: 'What is useDeferredValue and how does it differ from useTransition?',
        companies: ['Google', 'Amazon'],
        difficulty: 'Hard',
        answer: `startTransition wraps state update functions (startTransition(() => setSearch(val))). useDeferredValue wraps an existing value to defer rendering non-urgent subtrees (const deferredQuery = useDeferredValue(query)).`,
        traps: 'Thinking useDeferredValue debounces values — it yields to main thread rendering.',
        followUp: ['How to show stale UI indicators with useDeferredValue?']
      },
      {
        id: 'react-17',
        question: 'What is HOC (Higher Order Component) and Render Props pattern?',
        companies: ['IBM', 'Infosys'],
        difficulty: 'Medium',
        answer: `HOC is a function taking a component and returning an enhanced component (withAuth(Dashboard)). Render Props passes a function as prop to share code (<DataProvider render={data => <UI data={data} />} />). Modern hooks have mostly replaced both.`,
        traps: 'Creating HOCs inside component render functions (recreates component every render).',
        followUp: ['How do Hooks solve wrapper hell caused by HOCs and Render Props?']
      },
      {
        id: 'react-18',
        question: 'Explain Hydration in React SSR and what causes Hydration Mismatch errors.',
        companies: ['Google', 'Apple'],
        difficulty: 'Hard',
        answer: `Hydration attaches event listeners and boots React state onto pre-rendered server HTML. Mismatch errors happen when server HTML differs from client initial render (e.g. window.innerWidth, typeof window, new Date()).`,
        traps: 'Accessing localStorage during initial component render in SSR.',
        followUp: ['How does suppressHydrationWarning work?']
      },
      {
        id: 'react-19',
        question: 'How do you profile React performance using React DevTools Profiler?',
        companies: ['Microsoft', 'Amazon'],
        difficulty: 'Medium',
        answer: `React DevTools Profiler records flamegraphs and ranked charts, identifying which components re-rendered, duration of commit, and the exact props/hooks changes that triggered the re-render.`,
        traps: 'Profiling in development mode — always profile on production builds for accurate numbers.',
        followUp: ['What is the why-did-you-render library?']
      },
      {
        id: 'react-20',
        question: 'What are React Server Components (RSC) vs Client Components?',
        companies: ['Google', 'Meta', 'Vercel'],
        difficulty: 'Hard',
        answer: `Server Components render exclusively on the server, have direct database access, zero client bundle footprint, and stream to client as JSON wire format. Client Components ('use client') run in browser, support hooks, state, and event listeners.`,
        traps: 'Adding onClick or useState inside a React Server Component.',
        followUp: ['How do Server Components and Client Components interleave?']
      }
    ]
  }
]
